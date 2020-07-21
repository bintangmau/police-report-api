const { db } = require('../helper/database')
const { transporter } = require('../helper/mailer')
const crypto = require('crypto')
const { createJWTToken } = require('../helper/jwt')
const secretPass = require('../helper/secret')

module.exports = {
    loginPersonil: (req, res) => {
        const passwordEnc = crypto.createHmac('sha256', secretPass)
        .update(req.body.password)
        .digest('hex');
        
        const sql =`SELECT id, nama, email, nrp, j.jabatan, s.subnit, s."idSubnit", u.unit, u."idUnit", p.pangkat
                    FROM "humanResource".personil pr 
                    JOIN "public".jabatan j
                    ON pr.jabatan = j."idJabatan"
                    JOIN "public".pangkat p
                    ON pr.pangkat = p."idPangkat"
                    JOIN "public".unit u
                    ON pr.unit = u."idUnit"
                    JOIN "public".subnit s
                    ON pr.submit = s."idSubnit"
                    WHERE nrp = '${req.body.nrp}' AND password = '${passwordEnc}';`
   
        db.query(sql, (err, results) => {
            if(err) {
                console.log(err)
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
    cekNrpInput: (req, res) => {
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
    },
    sendEmailLupaPassword: (req, res) => {
        const token = createJWTToken(req.body.email, { message: 'token' })
        const mailOptions = {
            from: 'Jagojek.id',
            to: `${req.body.email}`,
            subject: 'Email Verification for Partner',
            html: `    
            <center>
                <div class="container shadow divBesar">
                    <h1>Verifikasi email anda </h1>
                    <p>Klik tombol dibawah untuk verifikasi, lalu isi from di halaman yang kami sediakan <br/>Terima kasih atas perhatiannya</p>
                    <a href="http://localhost:3000/lupa-password/${token}/${req.body.email}/${req.body.nrp}" target="_blank">
                    <button class="btn btn-primary link">Verifikasi email saya</button>
                    </a>
                </div>
            </center>
            `
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if(err) {
                console.log(err)
                return res.status(500).send(err)
            }

            return res.status(200).send(info)
        })
    },
    changePassword: (req, res) => {
        const passwordEnc = crypto.createHmac('sha256', secretPass)
        .update(req.body.password)
        .digest('hex');

        const sql = `UPDATE "humanResource".personil
                    SET "password" = '${passwordEnc}'
                    WHERE email = '${req.body.email}' AND nrp = '${req.body.nrp}';`

        db.query(sql, (err, results) => {
            if(err) {
                res.status(500).send(err)
            } 

            res.status(200).send({ message: 'change password success' })
        })
    },
    getDataProfile: (req, res) => {
        const id = req.logedUser.id
        const sql = `SELECT nama, p.pangkat, email, j.jabatan, nrp, u.unit, s.subnit, nohp, imgurl
                    FROM "humanResource".personil pr
                    JOIN "public".jabatan j
                    ON pr.jabatan = j."idJabatan"
                    JOIN "public".pangkat p
                    ON pr.pangkat = p."idPangkat"
                    JOIN "public".unit u
                    ON pr.unit = u."idUnit"
                    JOIN "public".subnit s
                    ON pr.submit = s."idSubnit"
                    WHERE pr.id = ${id};`

        db.query(sql, (err, results) => {
            if(err) {
                res.status(500).send(err)
            } 
            res.status(200).send(results.rows)
        })
    },
    editDataPersonilOne: (req, res) => {
        const id = req.logedUser.id
        const sql = `UPDATE "humanResource".personil
                    SET ${req.body.field} = '${req.body.value}'
                    WHERE id = ${id};`
        
        db.query(sql, (err, results) => {
            if(err) {
                res.status(500).send(err)
            } 
            req.app.io.emit('edit-personil-one' , { message : 'sukses' }) 
            res.status(200).send({ message: 'edit success' })
        })
    },
    dataAuth: (req, res) => {
        res.json(req.logedUser)
    } 
    
}
