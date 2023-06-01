const express = require("express")
const router = express.Router()
const { signup, login, getMyProfile, updateMyProfile ,getProfile, updateprofile ,} = require("./controller")
const { employeeAuthentication } = require("../authentication")
const { employeeAuthorization } = require("../authorization")
// const { getMe } = require("../user/controller")

router.post('/login', login)

router.use(employeeAuthentication)

router.post('/signup', employeeAuthorization('admin', 'manager'), signup)
router.get('/profile', employeeAuthorization('admin', 'manager'), getProfile)
router.patch('/profile', employeeAuthorization('admin', 'manager'), updateprofile)
router.patch('/profile', updateMyProfile)
router.get('/profile',getMyProfile)

module.exports = router