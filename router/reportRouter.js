const express = require('express')
const { reportController } = require('../controller')

const router = express.Router()

router.post('/input-report-a', reportController.inputReportA)
router.post('/input-report-b', reportController.inputReportB)

module.exports = router