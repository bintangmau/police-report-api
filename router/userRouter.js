const express = require('express')
const { userController } = require('../controller')

const router = express.Router()

router.post('/login-personil', userController.loginPersonil)
router.get('/cek-nrp-login/:nrp', userController.cekNrpInput)
router.post('/send-email-lupa-password', userController.sendEmailLupaPassword)
router.post('/change-password', userController.changePassword)

module.exports = router