const { signupValidate, loginValidate } = require("./validator")
const { prisma } = require("../db")
const { catchAsyncError, ServerError } = require("../error")
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

exports.signup = catchAsyncError(async (req, res, next) => {

  signupValidate(req.body)

  bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
    if (err) {
      console.error(err)
      return next(new ServerError(500, "password hash failed"))
    }
    req.body.password = hash
    try {
      const user = await prisma.users.create({
        data: req.body,
      })
      user.password = undefined
      res.json({
        message: 'user created successfully',
        user
      })
    } catch (e) {
      if (e.code === 'P2002') {
        return next(new ServerError(400, `email id '${req.body.email}' already exists, use another email`))
      }
      return next(new ServerError(400, e.message))
    }
  });
})

exports.login = catchAsyncError(async (req, res, next) => {

  loginValidate(req.body)

  const user = await prisma.users.findUnique({
    where: {
      email: req.body.email,
    },
  })
  if (!user) {
    return next(new ServerError(404, "user does not exists"))
  }

  if (!await bcrypt.compare(req.body.password, user.password)) {
    return next(new ServerError(403, "wrong password supplied"))
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_TOKEN_VALIDITY }
  );

  res.json({ token })
})

exports.getMe = catchAsyncError(async (req, res, next) => {
  const user = await prisma.users.findUnique({
    where: {
      email: req.user.email,
    },
  })
  if (!user) {
    return next(new ServerError(404, "user does not exists"))
  }
  user.password = undefined

  res.json(user)
})

exports.updateMe = catchAsyncError(async (req, res, next) => {
  const user = await prisma.users.update({
    where: {
      email: req.user.email,
    },
    data:{
      name:req.body.name,
      phone:req.body.phone,
      alt_phone:req.body.alt_phone,
      address:req.body.address,
    }
  })
  if (!user) {
    return next(new ServerError(404, "user does not exists"))
  }
  user.password = undefined
  

  res.json(user)
})