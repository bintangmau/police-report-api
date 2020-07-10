const express = require('express')
const { adminController } = require('../controller')

const router = express.Router()

router.get('/test', adminController.test)
router.post('/input-personil', adminController.inputPersonil)
router.get('/get-data-personil-edit/:id', adminController.getDataPersonilEdit)
router.post('/edit-personil', adminController.editPersonil)
router.post('/edit-personil2', adminController.editPersonil2)
router.delete('/delete-personil/:id', adminController.deletePersonil)

module.exports = router