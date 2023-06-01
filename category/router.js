const express = require("express")
const router = express.Router()
<<<<<<< HEAD
const { createCategory, getCategories } = require("./controller.js")
=======
const { createCategory, getCategories, updateCategory } = require("./controller.js")
>>>>>>> b027ce5e7328f3376dc6bf915f26ff8dc53b57ec
const { employeeAuthentication } = require("../authentication")
const { employeeAuthorization } = require("../authorization")

router.get('/', getCategories)

router.use(employeeAuthentication)

router.post('/', employeeAuthorization('admin', 'manager'), createCategory)
<<<<<<< HEAD
=======
router.patch('/:id', employeeAuthorization('admin', 'manager'), updateCategory)
>>>>>>> b027ce5e7328f3376dc6bf915f26ff8dc53b57ec

module.exports = router