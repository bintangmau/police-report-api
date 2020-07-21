const express = require('express')
const { reportController } = require('../controller')
const { authentication } = require('../middleware/auth')
const { updateReportUnitDisposisi, updateReportStatusDisposisi } = require('../controller/reportController')

const router = express.Router()

router.post('/input-report-a', authentication, reportController.inputReportA)
router.post('/input-report-b', authentication, reportController.inputReportB)
router.post('/get-data-report', authentication , reportController.getDataReport)
router.post('/get-data-report-b', authentication, reportController.getDataReportB)
router.get('/get-report-a-details/:id', authentication, reportController.getReportADetails)
router.get('/get-report-b-details/:id', authentication, reportController.getReportBDetails)
router.get('/search-report-a', reportController.searchReportA)
router.get('/search-report-b', reportController.searchReportB)
router.get('/get-data-disposisi-details', authentication, reportController.getDataDisposisiDetails)
router.post('/update-report-status-disposisi', authentication, updateReportStatusDisposisi)
router.post('/update-report-status-disposisi-b', authentication, reportController.updateReportStatusDisposisiB)
router.post('/update-perkembangan-laporan', authentication, reportController.updatePerkembanganLaporan)
router.post('/update-perkembangan-laporan-b', authentication, reportController.updatePerkembanganLaporanB)

module.exports = router