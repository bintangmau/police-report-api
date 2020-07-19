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
            alamatsaksi,  "uraianSingkatKejadian", barangbukti, "tindakanYangDiambil", mengetahui, pelapor, nrp, pangkat
        )
        VALUES (
            '${mengetahuiUnit}', '${NrpPelapor}', '${PangkatPelapor}', '${nomorLaporanPolisi}', '${waktuKejadian}', '${waktuKejadianJam}', '${tempatKejadian}', '${provinsi}',
            '${kota}', '${kecamatan}', '${kelurahan}', '${apaYangTerjadi}', '{${pelaku}}', '{${korban}}', '${waktuDilaporkan}', '${waktuDilaporkanJam}', '{${tindakPidanaAtauPasal}}', 
            '${sumir}', '{${namaSaksi}}', '{${alamatSaksi}}', '${uraianSingkatKejadian}', '{${barangBukti}}', '{${tindakanYangDiambil}}', '${mengetahui}', '${pelapor}', 
            '${nrp}', '${pangkat}');`

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
    getDataReportAll: (req, res) => {
        const sql = `SELECT * 
        FROM reports.a_report;
        
        SELECT * 
        FROM reports.b_report;`

        db.query(sql, (err, results) => {
            if(err) {
                res.status(500).send(err)
            } 

            const data = [...results[0].rows,...results[1].rows]
            res.status(200).send(data)
        })
    },
    getDataReport: (req, res) => {
        const sql = `SELECT id, "waktuDilaporkan", "nomorLaporanPolisi", penyidik, unit, subnit, status
        FROM reports.a_report ORDER BY "waktuDilaporkan" DESC;`
        
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
   
        if(jabatan === 'WAKASAT') {
            sql1 = `SELECT id, nama, p.jabatan, unit, submit
                    FROM "humanResource".personil pr
                    JOIN "public".jabatan p
                    ON pr.jabatan = p."idJabatan"
                    WHERE p.jabatan = 'KANIT';`
        } else if(jabatan === 'KANIT') {
            sql1 = `SELECT id, nama, p.jabatan, u.unit, s.subnit AS submit
                    FROM "humanResource".personil pr
                    JOIN "public".jabatan p
                    ON pr.jabatan = p."idJabatan"
                    JOIN "public".unit u
                    ON pr.unit = u."idUnit"
                    JOIN "public".subnit s
                    ON pr.submit = s."idSubnit"
                    WHERE p.jabatan = 'KASUBNIT' AND u.unit = '${unit}';`
        } else if (jabatan === "KASUBNIT" ) {
            sql1 = `SELECT id, nama, p.jabatan, u.unit, s.subnit AS submit
                    FROM "humanResource".personil pr
                    JOIN "public".jabatan p
                    ON pr.jabatan = p."idJabatan"
                    JOIN "public".unit u
                    ON pr.unit = u."idUnit"
                    JOIN "public".subnit s
                    ON pr.submit = s."idSubnit"
                    WHERE p.jabatan = 'PENYIDIK' AND s.subnit = '${unit}';`
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
            console.log(req.params)
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
                        
                        SELECT id, nama FROM "humanResource".personil WHERE jabatan = 'KANIT';`
      
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

            req.app.io.emit('update-report-status-disposisi' , { message : 'sukses' }) 
            res.status(200).send({ message: 'unit changed' })
        })
    }
}


