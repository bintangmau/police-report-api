const express = require('express')
const { reportController } = require('../controller')

const router = express.Router()

router.post('/input-report-a', reportController.inputReportA)
router.post('/input-report-b', reportController.inputReportB)
router.get('/get-data-report-all', reportController.getDataReportAll)
router.post('/get-data-report', reportController.getDataReport)
router.post('/get-data-report-b', reportController.getDataReportB)
router.get('/get-report-a-details/:id', reportController.getReportADetails)
router.get('/get-report-b-details/:id', reportController.getReportBDetails)

module.exports = router