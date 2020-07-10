const express = require('express')
const { reportController } = require('../controller')

const router = express.Router()

router.post('/input-report-a', reportController.inputReportA)
router.get('/tes-get-arr', reportController.tesGetArr)


module.exports = router