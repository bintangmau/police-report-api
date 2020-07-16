const express = require('express')
const { reportController } = require('../controller')
const { authentication } = require('../middleware/auth')

const router = express.Router()

router.post('/input-report-a', reportController.inputReportA)
router.post('/input-report-b', reportController.inputReportB)
router.get('/get-data-report-all', reportController.getDataReportAll)
router.post('/get-data-report', authentication , reportController.getDataReport)
router.post('/get-data-report-b', reportController.getDataReportB)
router.get('/get-report-a-details/:id', reportController.getReportADetails)
router.get('/get-report-b-details/:id', reportController.getReportBDetails)
router.get('/search-report-a', reportController.searchReportA)
router.get('/search-report-b', reportController.searchReportB)

module.exports = router