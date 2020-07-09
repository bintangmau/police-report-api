const { db } = require('../helper/database')

module.exports = {
    test: (req, res) => {
        const sql = `SELECT * FROM "humanResource"."personil";`

        db.query(sql, (err, results) => {
            if(err) {
                res.status(200).send(err)
            } 

            res.status(500).send(results.rows)
        })
    }
}