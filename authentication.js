const jwt = require('jsonwebtoken');
const { catchAsyncError, ServerError } = require("./error");

const authentication = (req) => {
  if (!req.headers.authorization) {
    throw new Error("login your account first")
  }
  const [bearer, token] = req.headers.authorization.split(" ")
  if (!token || bearer !== "Bearer") {
    throw new Error("authentication method not supported")
  }

  return jwt.verify(token, process.env.JWT_SECRET)
}

exports.userAuthentication = catchAsyncError(async (req, res, next) => {
  try {
    req.user = authentication(req)
    return next()
  } catch (e) {
    return next(new ServerError(403, e.message))
  }
})

exports.employeeAuthentication = catchAsyncError(async (req, res, next) => {
  try {
    req.employee = authentication(req)
    return next()
  } catch (e) {
    return next(new ServerError(403, e.message))
  }
})