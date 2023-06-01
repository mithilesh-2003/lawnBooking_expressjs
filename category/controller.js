const { catchAsyncError, ServerError } = require("../error");
const { prisma } = require("../db")

exports.createCategory = catchAsyncError(async (req, res, next) => {
  if (!req.body.name) {
    return next(new ServerError(400, "category name not supplied"))
  }

  try {
    const category = await prisma.categories.create({
      data: req.body,
    })
<<<<<<< HEAD
    console.log(category)
=======
>>>>>>> b027ce5e7328f3376dc6bf915f26ff8dc53b57ec
    res.json({ message: "create category successful", category })
  } catch (e) {
    if (e.code === 'P2002') {
      return next(new ServerError(400, `category name '${req.body.name}' already exists, use another category name`))
    }
    if (e.code === 'P2003') {
      return next(new ServerError(400, `sub category ${req.body.cid} cannot be created without a valid category id`))
    }
    return next(new ServerError(400, e.message))
  }
})

exports.getCategories = catchAsyncError(async (req, res, next) => {
  try {
    const categories = await prisma.categories.findMany()
    res.json({ message: "get all categories successful", categories })
  } catch (e) {
    return next(new ServerError(500, e.message))
  }
<<<<<<< HEAD
=======
})

exports.updateCategory = catchAsyncError(async (req, res, next) => {
  const intId = parseInt(req.params.id)
  if (isNaN(intId)) {
    return next(new ServerError(400, "invalid category id supplied"))
  }
  try {
    const category = await prisma.categories.update({
      where: { id: intId },
      data: {
        name: req.body.name
      }
    })
    res.json({ message: "updtaed successful", category })
  } catch (e) {
    return next(new ServerError(500, e.message))
  }
>>>>>>> b027ce5e7328f3376dc6bf915f26ff8dc53b57ec
})