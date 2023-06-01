const { ServerError } = require("../error")
const { isEmpty, isEmail, isLength, isStrongPassword, isMobilePhone } = require("validator")

exports.signupValidate = (data) => {
  if (isEmpty(data.email || "")) {
    throw new ServerError(400, "email id must be supplied")
  }
  if (isEmpty(data.name || "")) {
    throw new ServerError(400, "name must be supplied")
  }
  if (isEmpty(data.password || "")) {
    throw new ServerError(400, "password must be supplied")
  }
  if (isEmpty(data.phone || "")) {
    throw new ServerError(400, "phone number must be supplied")
  }
  if (!isEmail(data.email)) {
    throw new ServerError(400, "email id is invalid")
  }
  if (!isLength(data.name, { min: 2, max: 40 })) {
    throw new ServerError(400, "name is invalid")
  }
  if (!isStrongPassword(data.password, { minLength: 6, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })) {
    throw new ServerError(400, "password is invalid")
  }
  if (!isMobilePhone(data.phone, 'en-IN')) {
    throw new ServerError(400, "phone is invalid")
  }
  if (data.alt_phone && !isMobilePhone(data.alt_phone, 'en-IN')) {
    throw new ServerError(400, "alternate phone is invalid")
  }
  if (data.address && !isLength(data.address, { min: 6, max: 200 })) {
    throw new ServerError(400, "address is invalid")
  }
}

exports.loginValidate = (data) => {
  if (isEmpty(data.email || "")) {
    throw new ServerError(400, "email id must be supplied")
  }
  if (isEmpty(data.password || "")) {
    throw new ServerError(400, "password must be supplied")
  }
  if (!isEmail(data.email)) {
    throw new ServerError(400, "email id is invalid")
  }
  if (!isStrongPassword(data.password, { minLength: 6, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })) {
    throw new ServerError(400, "password is invalid")
  }
}