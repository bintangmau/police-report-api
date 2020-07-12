const express = require('express')
const { userController } = require('../controller')

const router = express.Router()

router.post('/login-personil', userController.loginPersonil)
router.get('/cek-nrp-login/:nrp', userController.cekNrpLogin)

module.exports = router