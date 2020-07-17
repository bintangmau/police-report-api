const express = require('express')
const { adminController } = require('../controller')
const { authentication } = require('../middleware/auth')

const router = express.Router()

router.get('/test', adminController.test)
router.post('/input-personil', adminController.inputPersonil)
router.get('/get-data-personil-edit/:id', adminController.getDataPersonilEdit)
router.post('/edit-personil', adminController.editPersonil)
router.post('/edit-personil2', adminController.editPersonil2)
router.delete('/delete-personil/:id', adminController.deletePersonil)
router.get('/get-data-jabatan', adminController.getDataJabatan)
router.get('/get-data-pangkat', adminController.getDataPangkat)
router.get('/get-data-unit', adminController.getDataUnit)
router.get('/get-data-subnit', adminController.getDataSubnit)
router.post('/add-field-personil', authentication, adminController.addFieldPersonil)

module.exports = router