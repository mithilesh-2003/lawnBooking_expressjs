const express = require("express")
const router = express.Router()
const { userAuthentication } = require("../authentication.js")
const { createBooking } = require("./controller.js")


router.use(userAuthentication)

router.post('/', createBooking)

module.exports = router