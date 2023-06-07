const express = require("express")
const router = express.Router()
const { createCategory, getCategories, updateCategory } = require("./controller.js")
const { employeeAuthentication } = require("../authentication")
const { employeeAuthorization } = require("../authorization")

router.get('/', getCategories)

router.use(employeeAuthentication)

router.post('/', employeeAuthorization('admin', 'manager'), createCategory)
router.patch('/:id', employeeAuthorization('admin', 'manager'), updateCategory)

module.exports = router