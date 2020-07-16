const express = require('express')
const { userController } = require('../controller')
const { authentication } = require('../middleware/auth')

const router = express.Router()

router.post('/login-personil', userController.loginPersonil)
router.get('/cek-nrp-login/:nrp', userController.cekNrpInput)
router.post('/send-email-lupa-password', userController.sendEmailLupaPassword)
router.post('/change-password', userController.changePassword)
router.get('/get-data-profile/:id', authentication, userController.getDataProfile)
router.post('/edit-data-personil-one', authentication, userController.editDataPersonilOne)
router.get('/data-auth', authentication, userController.dataAuth)

module.exports = router