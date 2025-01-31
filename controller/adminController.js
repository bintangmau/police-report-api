const { db } = require('../helper/database')
const crypto = require('crypto')
const secretPass  = require('../helper/secret')


module.exports = {
    test: (req, res) => {
        const sql = `SELECT * FROM "humanResource"."personil";`

        db.query(sql, (err, results) => {
            if(err) {
                res.status(500).send(err)
            } 

            res.status(200).send(results.rows)
        })
    },
    inputPersonil: (req, res) => {
        const {
            nama,
            jabatan,
            pangkat,
            nrp,
            unit,
            submit,
            nomorHp,
            email,
            password
        } = req.body
      
        const passwordEnc = crypto.createHmac('sha256', secretPass)
        .update(password)
        .digest('hex');

        const sql = `INSERT INTO "humanResource"."personil"
                ("nama", "password", "email",  "role", "jabatan", "pangkat", "nrp", "unit", "submit", "nohp")
                VALUES
                ('${nama}', '${passwordEnc}', '${email}', 'user', ${jabatan}, ${pangkat}, '${nrp}', ${unit}, ${submit}, '${nomorHp}');`

        db.query(sql, (err, results) => {
            if(err) {
                console.log(err)
                res.status(500).send(err)
            } 
            req.app.io.emit('input-personil' , { message : 'sukses' }) 
            res.status(200).send({ message: 'input success' })
        })
    },
    getDataPersonilEdit: (req, res) => {
        const sql = `SELECT "nama", "email", "nrp", "nohp", "jabatan", "pangkat", "unit", "submit"
        FROM "humanResource"."personil"
        WHERE "id" = ${req.params.id};`

        db.query(sql, (err, results) => {
            if(err) {
                res.status(500).send(err)
            } 

            res.status(200).send(results.rows)
        })
    },
    editPersonil: (req, res) => {
        const {
            nama,
            jabatan,
            pangkat,
            NRP,
            unit,
            submit,
            nomorHp,
            email,
            id
        } = req.body

        const sql = `UPDATE "humanResource"."personil"
                    SET "nama" = '${nama}', "email" = '${email}', "nrp" = '${NRP}', "nohp" = '${nomorHp}', "jabatan" = '${jabatan}', "pangkat" = '${pangkat}', "unit" = '${unit}', 
                    "submit" = '${submit}'
                    WHERE "id" = ${id};`

        db.query(sql, (err, results) => {
            if(err) {
                // console.log(err)
                res.status(500).send(err)
            } 
            req.app.io.emit('edit-personil' , { message : 'sukses' }) 
            res.status(200).send({ message: 'edit success' })
        })
    },
    editPersonil2: (req, res) => {
        const sql = `UPDATE "humanResource"."personil"
        SET "${req.body.fields}" = '${req.body.value}'
        WHERE "id" = ${req.body.id};`

        db.query(sql, (err, results) => {
            if(err) {
                // console.log(err)
                res.status(500).send(err)
            } 
            req.app.io.emit('edit-personil' , { message : 'sukses' }) 
            res.status(200).send({ message: 'edit success' })
        })
    },
    deletePersonil: (req, res) => {
        const sql = `DELETE FROM "humanResource"."personil"
                    WHERE "id" = ${req.params.id};`

        db.query(sql, (err, results) => {
            if(err) {
                console.log(err)
                res.status(500).send(err)
            } 
            req.app.io.emit('delete-personil' , { message : 'sukses' }) 
            res.status(200).send({ message: 'delete success' })
        })
    },
    getDataJabatan: (req, res) => {
        const sql = `SELECT * FROM "public".jabatan;`

        db.query(sql, (err, results) => {
            if(err) {
                res.status(500).send(err)
            } 

            res.status(200).send(results.rows)
        })
    },
    getDataPangkat: (req, res) => {
        const sql = `SELECT * FROM "public".pangkat;`

        db.query(sql, (err, results) => {
            if(err) {
                res.status(500).send(err)
            } 

            res.status(200).send(results.rows)
        })
    },
    getDataUnit: (req, res) => {
        const sql = `SELECT * FROM "public".unit;`

        db.query(sql, (err, results) => {
            if(err) {
                res.status(500).send(err)
            } 

            res.status(200).send(results.rows)
        })
    },
    getDataSubnit: (req, res) => {
        const sql = `SELECT * FROM "public".subnit;`

        db.query(sql, (err, results) => {
            if(err) {
                res.status(500).send(err)
            } 

            res.status(200).send(results.rows)
        })
    },
    addFieldPersonil: (req, res) => {
        const sql = `INSERT INTO "public".${req.body.field}
                    (${req.body.field}) VALUES ('${req.body.value}');`

        db.query(sql, (err, results) => {
            if(err) {
                res.status(500).send(err)
            } 
            req.app.io.emit(`input-new-${req.body.field}` , { message : 'success' }) 
            res.status(200).send({ message: `input ${req.body.field} success`})
        })
    },
    deleteFieldPersonil: (req, res) => {
        const sql = `DELETE FROM "public".${req.body.field}
                    WHERE "${req.body.idName}" = ${req.body.id};`
        console.log(req.body)
        db.query(sql, (err, results) => {
            if(err) {
                res.status(500).send(err)
            } 
            req.app.io.emit(`delete-field-${req.body.field}` , { message : 'success' }) 
            res.status(200).send({ message: `input ${req.body.field} success`})
        })
    }
}