const { db } = require('../helper/database')

module.exports = {
    inputReportA: (req, res) => {
        const {
            mengetahuiUnit,
            NrpPelapor,
            PangkatPelapor,
            nomorLaporanPolisi,
            waktuKejadian,
            waktuKejadianJam,
            tempatKejadian,
            provinsi,
            kota,
            kecamatan,
            kelurahan,
            apaYangTerjadi,
            pelaku,
            korban,
            waktuDilaporkan,  
            waktuDilaporkanJam,
            tindakPidanaAtauPasal,
            sumir,
            namaSaksi,
            alamatSaksi,        
            uraianSingkatKejadian,
            barangBukti,
            tindakanYangDiambil,
            mengetahui,
            pelapor,    
            pangkat,
            nrp 
        } = req.body
        
        const sql = `INSERT INTO "reports"."a_report"
        ( "mengetahuiUnit", "nrpPelapor", "pangkatPelapor", "nomorLaporanPolisi", "waktuKejadian", "waktuKejadianJam", "tempatKejadian", "provinsi", "kota", 
            "kecamatan", kelurahan, "apaYangTerjadi", pelaku, korban, "waktuDilaporkan", "waktuDilaporkanJam", "tindakPidanaAtauPasal", sumir, namasaksi, 	
            alamatsaksi,  "uraianSingkatKejadian", barangbukti, "tindakanYangDiambil", mengetahui, pelapor, nrp, pangkat, "statusReport"
        )
        VALUES (
            '${mengetahuiUnit}', '${NrpPelapor}', '${PangkatPelapor}', '${nomorLaporanPolisi}', '${waktuKejadian}', '${waktuKejadianJam}', '${tempatKejadian}', '${provinsi}',
            '${kota}', '${kecamatan}', '${kelurahan}', '${apaYangTerjadi}', '{${pelaku}}', '{${korban}}', '${waktuDilaporkan}', '${waktuDilaporkanJam}', '{${tindakPidanaAtauPasal}}', 
            '${sumir}', '{${namaSaksi}}', '{${alamatSaksi}}', '${uraianSingkatKejadian}', '{${barangBukti}}', '{${tindakanYangDiambil}}', '${mengetahui}', '${pelapor}', 
            '${nrp}', '${pangkat}', 0);`

        db.query(sql, (err, results) => {
            if(err) {
                res.status(500).send(err)
            } 
            req.app.io.emit('input-report-a' , { message : 'sukses' }) 
            res.status(200).send({ message: 'input success' })
        })
    },
    inputReportB: (req, res) => {
        const {
            unitMengetahui,
            pangkatyangMenerimaLaporan,
            NRPyangMenerimaLaporan,
            pangkatMengetahui,
            NRPMengetahui,
            nomorLaporanPolisi,
            pelapor,
            tempatLahir,
            tanggalLahir,
            jenisKelamin,
            wargaNegara,
            agama,
            pekerjaan,
            alamat,
            provinsiPelapor,
            kotaPelapor,
            kecamataPelapor,
            kelurahanPelapor,
            nomorTelpon,
            waktuKejadian,
            waktuKejadianJam,
            tempatKejadian,
            provinsiKejadian,
            kotaKejadian,
            kecamatanKejadian,
            kelurahanKejadian,
            apaYangTerjadi,
            terlapor,
            korban,
            saksi,
            waktuDilaporkan,
            waktuDilaporkanJam,
            uraianSingkatKejadian,
            unit,
            submit,
            tim,
            mengetahui,
            yangMenerimaLaporan,
            tindakanYangDiambil,
            tindakPidanaDanPasal,
            barangBukti,
            status
        } = req.body

        const sql = `INSERT INTO reports.b_report (
            "unitMengetahui", "pangkatYangMenerimaLaporan", "nrpYangMenerimaLaporan", "pangkatMengetahui", "nrpMengetahui", "nomorLaporanPolisi", pelapor,
            "tempatLahir", "tanggalLahir", "jenisKelamin", "wargaNegara", agama, pekerjaan, alamat, "provinsiPelapor", "kotaPelapor", "kecamatanPelapor", 
            "kelurahanPelapor", "nomorTelpon", "waktuKejadian", "waktuKejadianJam", "tempatKejadian", "provinsiKejadian", "kotaKejadian", "kecamatanKejadian",
            "kelurahanKejadian", "apaYangTerjadi", terlapor, korban, saksi, "waktuDilaporkan", "waktuDilaporkanJam", "uraianSingkatKejadian", unit, submit, tim,
            mengetahui, "yangMenerimaLaporan", "tindakanYangDiambil", "tindakPidanaDanPasal", "barangBukti", status
        ) VALUES (
            '${unitMengetahui}', '${pangkatyangMenerimaLaporan}', '${NRPyangMenerimaLaporan}', '${pangkatMengetahui}', '${NRPMengetahui}', '${nomorLaporanPolisi}', 
            '${pelapor}', '${tempatLahir}', '${tanggalLahir}', '${jenisKelamin}', '${wargaNegara}', '${agama}', '${pekerjaan}', '${alamat}', '${provinsiPelapor}', 
            '${kotaPelapor}', '${kecamataPelapor}', '${kelurahanPelapor}', '${nomorTelpon}', '${waktuKejadian}', '${waktuKejadianJam}', '${tempatKejadian}', '${provinsiKejadian}', 
            '${kotaKejadian}', '${kecamatanKejadian}', '${kelurahanKejadian}', '${apaYangTerjadi}', '{${terlapor}}', '{${korban}}', '{${saksi}}', '${waktuDilaporkan}', 
            '${waktuDilaporkanJam}', '${uraianSingkatKejadian}', '${unit}', '${submit}', '${tim}', '${mengetahui}', '${yangMenerimaLaporan}', '{${tindakanYangDiambil}}', 
            '{${tindakPidanaDanPasal}}', '{${barangBukti}}', '${status}' 
        );`

        db.query(sql, (err, results) => {
            if(err) {
                console.log(err)
                res.status(500).send(err)
            } 
            req.app.io.emit('input-report-b' , { message : 'sukses' }) 
            res.status(200).send({ message: 'input success' })
        })
    },
    getDataReport: (req, res) => {
        const {
            jabatan, unit, idUnit
        } = req.logedUser
        let newQuery = ``
        let unitField = `, unit`
        if(jabatan === "KANIT") {
            newQuery = `JOIN "public".unit u
                        ON r.unit = u."idUnit"
                        WHERE r.unit = ${idUnit}`
            unitField = `, u.unit`
        } 

        const sql = `SELECT id, "waktuDilaporkan", "nomorLaporanPolisi", penyidik${unitField}, subnit, status
        FROM reports.a_report r 
				${newQuery}
				ORDER BY "waktuDilaporkan" DESC;`
        
        // `LIMIT ${req.body.limit} OFFSET ${req.body.offset};`

        db.query(sql, (err, results) => {
            if(err) {
                res.status(500).send(err)
            } 

            const data = results.rows
            res.status(200).send(data)
        })
    },
    getDataReportB: (req, res) => {
        const sql = `SELECT id, "waktuDilaporkan", "nomorLaporanPolisi", penyidik, unit, submit, status
                    FROM reports.b_report ORDER BY "waktuDilaporkan" DESC;`

        // `LIMIT ${req.body.limit} OFFSET ${req.body.offset} ;`
                    
        db.query(sql, (err, results) => {
            if(err) {
                res.status(500).send(err)
            } 

            const data = results.rows
            res.status(200).send(data)
        })
    },
    getReportADetails: (req, res) => {
        const {
            id, nama, jabatan, pangkat, unit, subnit
        } = req.logedUser
        
        let sql1 = ""
        console.log(jabatan)
        if(jabatan === 'WAKASAT') {
            sql1 = `SELECT id, nama, p.jabatan, unit
                    FROM "humanResource".personil pr
                    JOIN "public".jabatan p
                    ON pr.jabatan = p."idJabatan"
                    WHERE p.jabatan = 'KANIT';`
        } else if(jabatan === 'KANIT') {
            sql1 = `SELECT id, nama, p.jabatan, u.unit, pr.unit AS idUnit
                    FROM "humanResource".personil pr
                    JOIN "public".jabatan p
                    ON pr.jabatan = p."idJabatan"
                    JOIN "public".unit u
                    ON pr.unit = u."idUnit"
                    WHERE p.jabatan = 'KASUBNIT' AND u.unit = '${unit}';`
        } else if (jabatan === "KASUBNIT" ) {
            sql1 = `SELECT id, nama, p.jabatan, u.unit, pr.unit AS idUnit, s.subnit AS submit, pr.submit AS idSubmit
                    FROM "humanResource".personil pr
                    JOIN "public".jabatan p
                    ON pr.jabatan = p."idJabatan"
                    JOIN "public".unit u
                    ON pr.unit = u."idUnit"
                    JOIN "public".subnit s
                    ON pr.submit = s."idSubnit"
                    WHERE p.jabatan = 'PENYIDIK' AND s.subnit = '${subnit}';`
        }
      
        const sql = `SELECT kanit, 
                        kasubmit, 
                        penyidik,
                        "nomorLaporanPolisi",
                        "reportType", 
                        "waktuDilaporkan", 
                        "statusLaporan",
                        pelapor,
                        "tindakPidanaAtauPasal",
                        "tempatKejadian",
                        "waktuKejadian",
                        "uraianSingkatKejadian",
                        unit
            FROM reports.a_report WHERE id = ${req.params.id};

            ${sql1} ;`

        db.query(sql, (err, results) => {
            if(err) {
                console.log(err)
                res.status(500).send(err)
            } 

            const objData = {
                dataLaporan: results[0].rows[0],
                dataMember: results[1].rows,
                jabatan 
            }
        
            res.status(200).send(objData)
        })
    },
    getReportBDetails: (req, res) => {
        const sql = ` SELECT kanit, 
                    kasubmit, 
                    penyidik,
                    "nomorLaporanPolisi",
                    "reportType", 
                    "waktuDilaporkan", 
                    "statusLaporan",
                    pelapor,
                    terlapor,
                    "tindakPidanaDanPasal",
                    "tempatKejadian",
                    "waktuKejadian",
                    "uraianSingkatKejadian"
                FROM reports.b_report WHERE id = ${req.params.id};`

        db.query(sql, (err, results) => {
            if(err) {
                res.status(500).send(err)
            } 
            
            res.status(200).send(results.rows[0])
        })
    },
    searchReportA: (req, res) => {
        const sql = `SELECT id, "nomorLaporanPolisi", "uraianSingkatKejadian", "apaYangTerjadi"
                    FROM reports.a_report 
                    WHERE LOWER("apaYangTerjadi") LIKE LOWER('%${req.query.keyword}%')
                    OR LOWER("nomorLaporanPolisi") LIKE LOWER('%${req.query.keyword}%')
                    OR LOWER("tempatKejadian") LIKE LOWER('%${req.query.keyword}%')
                    OR LOWER(pelapor) LIKE LOWER('%${req.query.keyword}%')
                    OR LOWER("uraianSingkatKejadian") LIKE LOWER('%${req.query.keyword}%')
                    OR LOWER("apaYangTerjadi") LIKE LOWER('%${req.query.keyword}%');`

        db.query(sql, (err, results) => {
            if(err) {
                console.log(err)
                res.status(500).send(err)
            } 

            res.status(200).send(results.rows)
        })
    },
    searchReportB: (req, res) => {
        const sql = `SELECT id, "nomorLaporanPolisi", "uraianSingkatKejadian", "apaYangTerjadi"
                    FROM reports.b_report 
                    WHERE LOWER("apaYangTerjadi") LIKE LOWER('%${req.query.keyword}%')
                    OR LOWER("nomorLaporanPolisi") LIKE LOWER('%${req.query.keyword}%')
                    OR LOWER("tempatKejadian") LIKE LOWER('%${req.query.keyword}%')
                    OR LOWER(pelapor) LIKE LOWER('%${req.query.keyword}%')
                    OR LOWER("uraianSingkatKejadian") LIKE LOWER('%${req.query.keyword}%')
                    OR LOWER("apaYangTerjadi") LIKE LOWER('%${req.query.keyword}%');`

        db.query(sql, (err, results) => {
            if(err) {
                console.log(err)
                res.status(500).send(err)
            } 

            res.status(200).send(results.rows)
        })
    },
    getDataDisposisiDetails: (req, res) => {
        const {
            id, nama, jabatan, pangkat, unit, subnit
        } = req.logedUser

        const sqlDetails = `SELECT kanit, 
                            kasubmit, 
                            penyidik,
                            "nomorLaporanPolisi",
                            "reportType", 
                            "waktuDilaporkan", 
                            "statusLaporan",
                            pelapor,
                            "tindakPidanaAtauPasal",
                            "tempatKejadian",
                            "waktuKejadian",
                            "uraianSingkatKejadian"
                        FROM reports.a_report WHERE id = ${id};
                        
                        SELECT id, nama, u."idUnit"
                        FROM "humanResource".personil pr
                        JOIN "public".jabatan j
                        ON pr.jabatan = j."idJabatan"
                        JOIN "public".unit u
                        ON pr.unit = u."idUnit"
                        WHERE pr.jabatan = 5;`

      
        if(id == 33) {
            db.query(sqlDetails, (err, results) => {
                if(err) {
                    res.status(500).send(err)
                } 
                const dataDisposisi = {
                    dataLaporan: results[0].rows,
                    dataKanit: results[1].rows 
                }
    
                res.status(200).send(dataDisposisi)
            })
        }
        else {
            res.status(200).send({ message: 'data bukan wakasat' })
        }
    },
    updateReportStatusDisposisi: (req, res) => {
        const {
          jabatan
        } = req.logedUser

        const {
            value,
            idReport
        } = req.body
        
        let field = ""
        console.log(value)
        if(jabatan === 'WAKASAT') {
            field = "unit"
        } else if(jabatan === 'KANIT') {
           field = "submit"
        } else if (jabatan === "KASUBNIT" ) {
            field = "penyidik"
        }

        const sql = `UPDATE reports.a_report
                    SET ${field} = '${value}'
                    WHERE "id" = ${idReport};`

        db.query(sql, (err, results) => {
            if(err) {
                res.status(500).send(err)
            } 

            req.app.io.emit('input-report-a' , { message : 'sukses' }) 
            res.status(200).send({ message: 'unit changed' })
        })
    }
}


