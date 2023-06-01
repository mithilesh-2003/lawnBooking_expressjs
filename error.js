class ServerError extends Error {
  constructor(statusCode, message) {
    super(message)
    this.statusCode = statusCode
  }
}

const catchAsyncError = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next)
    } catch (e) {
      console.log(e)
      next(e)
    }
  }
}

const globalErrorHandler = (err, req, res, next) => {
  if (process.env.NODE_ENV === "development") {
    console.log(err.stack)
  }
  res.status(err.statusCode || 500).json({ error: true, message: err.message || 'Something broke!' })
}

module.exports = { catchAsyncError, ServerError, globalErrorHandler }