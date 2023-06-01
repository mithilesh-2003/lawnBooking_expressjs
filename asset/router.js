const express = require("express")
const router = express.Router()
const { createAsset, getAssets } = require("./controller.js")
const { employeeAuthentication } = require("../authentication.js")
const { employeeAuthorization } = require("../authorization.js")

router.get('/', getAssets)

router.use(employeeAuthentication)

router.post('/', employeeAuthorization('admin', 'manager'), createAsset)

module.exports = router