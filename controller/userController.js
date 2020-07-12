const { db } = require('../helper/database')
const crypto = require('crypto')
const { createJWTToken } = require('../helper/jwt')
const secretPass = require('../helper/secret')

module.exports = {
    loginPersonil: (req, res) => {
        const passwordEnc = crypto.createHmac('sha256', secretPass)
        .update(req.body.password)
        .digest('hex');

        const sql =`SELECT id, nama, email, nrp
                    FROM "humanResource".personil
                    WHERE nrp = '${req.body.nrp}' AND password = '${passwordEnc}';`
        
        db.query(sql, (err, results) => {
            if(err) {
                res.status(500).send(err)
            } 
            var tokens = ''
            var message = ''
            var data = {}
            if(typeof results.rows[0] === 'undefined') {
                data = null
                tokens = null
                message = 'nrp belum terdaftar!'
            } else {
                data = results.rows[0]
                tokens = createJWTToken(results.rows[0], { message: 'token' })
                message = 'login berhasil'
            }
            const response = {
                data: data,
                token: tokens,
                message: message
            }
            res.status(200).send(response)
        })
    },
    cekNrpLogin: (req, res) => {
        const sql = `SELECT COUNT(*) FROM "humanResource".personil
                    WHERE nrp = '${req.params.nrp}';`

        db.query(sql, (err, results) => {
            if(err) {
                res.status(500).send(err)
            } 

            var countMessage = ''
            if(results.rows[0].count > 0) {
                countMessage = 'nrp used'
            } else {
                countMessage = 'nrp not used'
            }

            res.status(200).send({ message: countMessage })
        })
    }
}