const express = require('express')
const { adminController } = require('../controller')

const router = express.Router()

router.get('/test', adminController.test)

module.exports = router