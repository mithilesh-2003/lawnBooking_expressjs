const { catchAsyncError, ServerError } = require("../error");
const { prisma } = require("../db")

exports.createAsset = catchAsyncError(async (req, res, next) => {

  if (!req.body.name) {
    return next(new ServerError(400, "name of asset must be supplied"))
  }
  req.body.price = parseFloat(req.body.price)
  if (isNaN(req.body.price) || req.body.price < 0) {
    return next(new ServerError(400, "invalid price supplied"))
  }
  req.body.cid = parseInt(req.body.cid)
  if (isNaN(req.body.cid)) {
    return next(new ServerError(400, "valid category must be supplied"))
  }

  try {
    const asset = await prisma.assets.create({
      data: req.body,
    })
    res.json({ message: "create asset successful", asset })
  } catch (e) {
    console.log(e.code)
    if (e.code === 'P2002') {
      return next(new ServerError(400, `asset name '${req.body.name}' already exists, use another asset name`))
    }
    if (e.code === 'P2003') {
      return next(new ServerError(400, `asset '${req.body.name}' cannot be created without a valid category id`))
    }
    return next(new ServerError(400, e.message))
  }
})

exports.getAssets = catchAsyncError(async (req, res, next) => {
  try {
    const assets = await prisma.assets.findMany()
    res.json({ message: "get all assets successful", assets })
  } catch (e) {
    return next(new ServerError(500, e.message))
  }
})