const { ServerError } = require("./error")

exports.employeeAuthorization = (...roles) => {
  return async (req, res, next) => {
    if (roles.length === 0) {
      return next(new ServerError(500, "no role were selected, contact developer"))
    }
    if (!req.employee || !req.employee.role) {
      return next(new ServerError(500, "no employee role found from token"))
    }
    if (!roles.includes(req.employee.role)) {
      return next(new ServerError(403, "you are not authorized for this action, contact admin"))
    }
    next()
  }
}