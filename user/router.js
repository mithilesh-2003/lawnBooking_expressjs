const express = require("express")
const router = express.Router()
const { signup, login, getMe, updateMe } = require("./controller")
const { userAuthentication } = require("../authentication")


router.post('/signup', signup)
  .post('/login', login)

router.use(userAuthentication)

router
  .get("/profile", getMe)
  .patch("/profile", updateMe)

module.exports = router