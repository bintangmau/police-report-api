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
            nrp ,
            unit,
            subnit
        } = req.body
    
        const sql = `INSERT INTO "reports"."a_report"
        ( "mengetahuiUnit", "nrpPelapor", "pangkatPelapor", "nomorLaporanPolisi", "waktuKejadian", "waktuKejadianJam", "tempatKejadian", "provinsi", "kota", 
            "kecamatan", kelurahan, "apaYangTerjadi", pelaku, korban, "waktuDilaporkan", "waktuDilaporkanJam", "tindakPidanaAtauPasal", sumir, namasaksi, 	
            alamatsaksi,  "uraianSingkatKejadian", barangbukti, "tindakanYangDiambil", mengetahui, pelapor, nrp, pangkat, "statusReport", "unit", "subnit"
        )
        VALUES (
            '${mengetahuiUnit}', '${NrpPelapor}', '${PangkatPelapor}', '${nomorLaporanPolisi}', '${waktuKejadian}', '${waktuKejadianJam}', '${tempatKejadian}', '${provinsi}',
            '${kota}', '${kecamatan}', '${kelurahan}', '${apaYangTerjadi}', '{${pelaku}}', '{${korban}}', '${waktuDilaporkan}', '${waktuDilaporkanJam}', '{${tindakPidanaAtauPasal}}', 
            '${sumir}', '{${namaSaksi}}', '{${alamatSaksi}}', '${uraianSingkatKejadian}', '{${barangBukti}}', '{${tindakanYangDiambil}}', '${mengetahui}', '${pelapor}', 
            '${nrp}', '${pangkat}', 0, 0, 0);`

        db.query(sql, (err, results) => {
            if(err) {
                console.log(err)
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
            "kelurahanKejadian", "apaYangTerjadi", terlapor, korban, saksi, "waktuDilaporkan", "waktuDilaporkanJam", "uraianSingkatKejadian", unit, subnit, tim,
            mengetahui, "yangMenerimaLaporan", "tindakanYangDiambil", "tindakPidanaDanPasal", "barangBukti", "statusReport"
        ) VALUES (
            '${unitMengetahui}', '${pangkatyangMenerimaLaporan}', '${NRPyangMenerimaLaporan}', '${pangkatMengetahui}', '${NRPMengetahui}', '${nomorLaporanPolisi}', 
            '${pelapor}', '${tempatLahir}', '${tanggalLahir}', '${jenisKelamin}', '${wargaNegara}', '${agama}', '${pekerjaan}', '${alamat}', '${provinsiPelapor}', 
            '${kotaPelapor}', '${kecamataPelapor}', '${kelurahanPelapor}', '${nomorTelpon}', '${waktuKejadian}', '${waktuKejadianJam}', '${tempatKejadian}', '${provinsiKejadian}', 
            '${kotaKejadian}', '${kecamatanKejadian}', '${kelurahanKejadian}', '${apaYangTerjadi}', '{${terlapor}}', '{${korban}}', '{${saksi}}', '${waktuDilaporkan}', 
            '${waktuDilaporkanJam}', '${uraianSingkatKejadian}', '0', '0', '0', '${mengetahui}', '${yangMenerimaLaporan}', '{${tindakanYangDiambil}}', 
            '{${tindakPidanaDanPasal}}', '{${barangBukti}}', 0 
        );`
        console.log(req.body)
        console.log(sql)
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
            id, jabatan, unit, idUnit, idSubnit
        } = req.logedUser
    
        let newQuery = ``
 
        if(jabatan === "KANIT") {
            newQuery = `WHERE r.unit = ${idUnit}`
        } else if(jabatan === 'KASUBNIT') {
            newQuery = `WHERE r.unit = ${idUnit} AND r.subnit = ${idSubnit}`
        } 

        const sql = `SELECT id, "waktuDilaporkan", "nomorLaporanPolisi", penyidik, u.unit, status, s.subnit 
                    FROM reports.a_report r
                    JOIN "public".unit u
                    ON r.unit = u."idUnit"
                    JOIN "public".subnit s
                    ON r.subnit = s."idSubnit"
                    ${newQuery}
                    ORDER BY "waktuDilaporkan" DESC;`
    
        // `LIMIT ${req.body.limit} OFFSET ${req.body.offset};`
       
        db.query(sql, (err, results) => {
            if(err) {
                res.status(500).send(err)
            } 

            var data = []
        
            if(jabatan === 'PENYIDIK') {
                results.rows.forEach((val) => {
                    if(!val.penyidik) {
                        val.penyidik = []
                    }
                    val.penyidik.forEach((el) => {
                        if(el == id) {
                            data.push(val)
                        }
                    })
                })
            } else {
                data = results.rows
            }
       
            res.status(200).send(data)
        })
    },
    getDataReportB: (req, res) => {
        const {
            id, jabatan, unit, idUnit, idSubnit
        } = req.logedUser
    
        let newQuery = ``
 
        if(jabatan === "KANIT") {
            newQuery = `WHERE r.unit = ${idUnit}`
        } else if(jabatan === 'KASUBNIT') {
            newQuery = `WHERE r.unit = ${idUnit} AND r.subnit = ${idSubnit}`
        } 

        const sql = `SELECT id, "waktuDilaporkan", "nomorLaporanPolisi", penyidik, u.unit, status, s.subnit 
                    FROM reports.b_report r
                    JOIN "public".unit u
                    ON r.unit = u."idUnit"
                    JOIN "public".subnit s
                    ON r.subnit = s."idSubnit"
                    ${newQuery}
                    ORDER BY "waktuDilaporkan" DESC;`
    
        // `LIMIT ${req.body.limit} OFFSET ${req.body.offset};`
       
        db.query(sql, (err, results) => {
            if(err) {
                res.status(500).send(err)
            } 

            var data = []
        
            if(jabatan === 'PENYIDIK') {
                results.rows.forEach((val) => {
                    var idPenyidik = 0
                    if(!val.penyidik) {
                        val.penyidik = []
                    }
                    val.penyidik.forEach((el) => {
                        if(el == id) {
                            data.push(val)
                        }
                    })
                })
            } else {
                data = results.rows
            }
         
            res.status(200).send(data)
        })
    },
    getReportADetails: (req, res) => {
        const {
            jabatan, subnit, idUnit
        } = req.logedUser
     
        let sql1 = ""
    
        if(jabatan === 'WAKASAT') {
            sql1 = `SELECT id, nama, p.jabatan, u.unit, pr.unit AS "idUnit"
                    FROM "humanResource".personil pr
                    JOIN "public".jabatan p
                    ON pr.jabatan = p."idJabatan"
                    JOIN "public".unit u
                    ON pr.unit = u."idUnit"
                    WHERE p.jabatan = 'KANIT';`
        } else if(jabatan === 'KANIT') {
            sql1 = `SELECT id, nama, p.jabatan, u.unit, pr.unit AS "idUnit", s.subnit AS submit, pr.submit AS "idSubmit"
                    FROM "humanResource".personil pr
                    JOIN "public".jabatan p
                    ON pr.jabatan = p."idJabatan"
                    JOIN "public".unit u
                    ON pr.unit = u."idUnit"
                    JOIN "public".subnit s
                    ON pr.submit = s."idSubnit"
                    WHERE p.jabatan = 'KASUBNIT' AND pr.unit = ${idUnit};`
        } else if (jabatan === "KASUBNIT" ) {
            sql1 = `SELECT id, nama, j.jabatan, p.pangkat, u.unit, pr.unit AS idUnit, s.subnit AS submit, pr.submit AS idSubmit
                    FROM "humanResource".personil pr
                    JOIN "public".jabatan j
                    ON pr.jabatan = j."idJabatan"
                    JOIN "public".pangkat p
                    ON pr.pangkat = p."idPangkat"
                    JOIN "public".unit u
                    ON pr.unit = u."idUnit"
                    JOIN "public".subnit s
                    ON pr.submit = s."idSubnit"
                    WHERE j.jabatan = 'PENYIDIK' AND s.subnit = '${subnit}';`
        } 
        const sql = `SELECT *, p.pangkat AS "PangkatMengetahui", pp.pangkat AS "PangkatYangMelapor",  uu.unit AS "unitMengetahui", j.jabatan AS "JabatanMengetahui", jj.jabatan AS "JabatanPelapor", u.unit AS "UnitYangMengetahui"
                    FROM reports.a_report r
                    JOIN "public".pangkat p
                    ON r.pangkat = p."idPangkat"
                    JOIN "public".pangkat pp 
                    ON r."pangkatPelapor" = pp."idPangkat"
                    JOIN "public".unit uu
                    ON r."mengetahuiUnit" = uu."idUnit"
                    JOIN "humanResource".personil pr
                    ON r.nrp = pr.nrp
                    JOIN "public".jabatan j
                    ON pr.jabatan = j."idJabatan"
                    JOIN "humanResource".personil prr
                    ON r."nrpPelapor" = prr.nrp
                    JOIN "public".jabatan jj
                    ON prr.jabatan = jj."idJabatan"
                    JOIN "public".unit u
                    ON r."mengetahuiUnit" = u."idUnit"
                    WHERE r.id = ${req.params.id};
                    
                    ${sql1}`
       
        db.query(sql, (err, results) => {
            if(err) {
                console.log(err)
                res.status(500).send(err)
            } 
            var objData = {}
            if(jabatan === 'PENYIDIK') {
                objData= {
                    dataLaporan: results.rows[0]
                }
            } else {
                objData = {
                    dataLaporan: results[0].rows[0],
                    dataMember: results[1].rows,
                    jabatan 
                }
            }
          
            res.status(200).send(objData)
        })
    },
    getReportBDetails: (req, res) => {
        const {
            jabatan, subnit, idUnit
        } = req.logedUser
       
        let sql1 = ""
      
        if(jabatan === 'WAKASAT') {
            sql1 = `SELECT id, nama, p.jabatan, u.unit, pr.unit AS "idUnit"
                    FROM "humanResource".personil pr
                    JOIN "public".jabatan p
                    ON pr.jabatan = p."idJabatan"
                    JOIN "public".unit u
                    ON pr.unit = u."idUnit"
                    WHERE p.jabatan = 'KANIT';`
        } else if(jabatan === 'KANIT') {
            sql1 = `SELECT id, nama, p.jabatan, u.unit, pr.unit AS "idUnit", s.subnit AS submit, pr.submit AS "idSubmit"
                    FROM "humanResource".personil pr
                    JOIN "public".jabatan p
                    ON pr.jabatan = p."idJabatan"
                    JOIN "public".unit u
                    ON pr.unit = u."idUnit"
                    JOIN "public".subnit s
                    ON pr.submit = s."idSubnit"
                    WHERE p.jabatan = 'KASUBNIT' AND pr.unit = ${idUnit};`
        } else if (jabatan === "KASUBNIT" ) {
            sql1 = `SELECT id, nama, j.jabatan, p.pangkat, u.unit, pr.unit AS idUnit, s.subnit AS submit, pr.submit AS idSubmit
                    FROM "humanResource".personil pr
                    JOIN "public".jabatan j
                    ON pr.jabatan = j."idJabatan"
                    JOIN "public".pangkat p
                    ON pr.pangkat = p."idPangkat"
                    JOIN "public".unit u
                    ON pr.unit = u."idUnit"
                    JOIN "public".subnit s
                    ON pr.submit = s."idSubnit"
                    WHERE j.jabatan = 'PENYIDIK' AND s.subnit = '${subnit}';`
        } 

        const sql = `SELECT * ,p.pangkat AS "PangkatMengetahui", pp.pangkat AS "PangkatMenerimaLaporan",  
                    u.unit AS "UnitYangMengetahui", j.jabatan AS "JabatanMengetahui", jj.jabatan AS "JabatanPenerimaLaporan", 
                    u.unit AS "UnitYangMengetahui"
                    FROM reports.b_report r
                    JOIN "public".pangkat p
                    ON r."pangkatMengetahui" = p."idPangkat"
                    JOIN "public".pangkat pp 
                    ON r."pangkatYangMenerimaLaporan" = pp."idPangkat"
                    JOIN "humanResource".personil pr
                    ON r."nrpMengetahui" = pr.nrp
                    JOIN "public".jabatan j
                    ON pr.jabatan = j."idJabatan"
                    JOIN "humanResource".personil prr
                    ON r."nrpYangMenerimaLaporan" = prr.nrp
                    JOIN "public".jabatan jj
                    ON prr.jabatan = jj."idJabatan"
                    JOIN "public".unit u
                    ON r."unitMengetahui" = u."idUnit"
                    WHERE r.id = ${req.params.id};

            ${sql1}`
        
        db.query(sql, (err, results) => {
            if(err) {
                console.log(err)
                res.status(500).send(err)
            } 
            var objData = {}
            if(jabatan === 'PENYIDIK') {
                objData= {
                    dataLaporan: results.rows[0]
                }
            } else {
                objData = {
                    dataLaporan: results[0].rows[0],
                    dataMember: results[1].rows,
                    jabatan 
                }
            }
           
            res.status(200).send(objData)
        })
    },
    searchReportA: (req, res) => {
        const {
            jabatan, idUnit, idSubnit, id
        } = req.logedUser
       
        const sql = `SELECT id, "waktuDilaporkan", "nomorLaporanPolisi", penyidik, u.unit, status, s.subnit , r.unit AS "idUnit", r.subnit AS "idSubnit"
                    FROM reports.a_report r
                    JOIN "public".unit u
                    ON r.unit = u."idUnit"
                    JOIN "public".subnit s
                    ON r.subnit = s."idSubnit"
                    WHERE LOWER("apaYangTerjadi") LIKE LOWER('%${req.query.keyword}%')
                    OR LOWER("nomorLaporanPolisi") LIKE LOWER('%${req.query.keyword}%')
                    OR LOWER("tempatKejadian") LIKE LOWER('%${req.query.keyword}%')
                    OR LOWER(pelapor) LIKE LOWER('%${req.query.keyword}%')
                    OR LOWER("uraianSingkatKejadian") LIKE LOWER('%${req.query.keyword}%')
                    OR LOWER("apaYangTerjadi") LIKE LOWER('%${req.query.keyword}%')
                    ORDER BY "waktuDilaporkan" DESC;`

        db.query(sql, (err, results) => {
            if(err) {
                console.log(err)
                res.status(500).send(err)
            } 
           
            var data = []
            var arr = results.rows
            if(jabatan === "KANIT") {
                arr.forEach((val) => {
                    if(val.idUnit === idUnit) {
                        data.push(val)
                    }
                })
            } else if(jabatan === "KASUBNIT") {
                arr.forEach((val) => {
                    if(val.idUnit === idUnit && val.idSubnit === idSubnit) {
                        data.push(val)
                    }
                })
            } else if(jabatan === "WAKASAT") {
                data = arr
            } else if(jabatan === "PENYIDIK") {
                arr.forEach((val) => {
                   if(!val.penyidik) {
                      data = []
                      val.penyidik = []
                   } else {
                       val.penyidik.forEach((el) => {
                           data.push(val)
                        })
                    }
                })
            }
                
            res.status(200).send(data)
        })
    },
    searchReportB: (req, res) => {
        const {
            jabatan, idUnit, idSubnit, id
        } = req.logedUser
       
        const sql = `SELECT id, "waktuDilaporkan", "nomorLaporanPolisi", penyidik, u.unit, status, s.subnit , r.unit AS "idUnit", r.subnit AS "idSubnit"
                    FROM reports.b_report r
                    JOIN "public".unit u
                    ON r.unit = u."idUnit"
                    JOIN "public".subnit s
                    ON r.subnit = s."idSubnit"
                    WHERE LOWER("apaYangTerjadi") LIKE LOWER('%${req.query.keyword}%')
                    OR LOWER("nomorLaporanPolisi") LIKE LOWER('%${req.query.keyword}%')
                    OR LOWER("tempatKejadian") LIKE LOWER('%${req.query.keyword}%')
                    OR LOWER(pelapor) LIKE LOWER('%${req.query.keyword}%')
                    OR LOWER("uraianSingkatKejadian") LIKE LOWER('%${req.query.keyword}%')
                    OR LOWER("apaYangTerjadi") LIKE LOWER('%${req.query.keyword}%')
                    ORDER BY "waktuDilaporkan" DESC;`

        db.query(sql, (err, results) => {
            if(err) {
                console.log(err)
                res.status(500).send(err)
            } 
           
            var data = []
            var arr = results.rows
            if(jabatan === "KANIT") {
                arr.forEach((val) => {
                    if(val.idUnit === idUnit) {
                        data.push(val)
                    }
                })
            } else if(jabatan === "KASUBNIT") {
                arr.forEach((val) => {
                    if(val.idUnit === idUnit && val.idSubnit === idSubnit) {
                        data.push(val)
                    }
                })
            } else if(jabatan === "WAKASAT") {
                data = arr
            } else if(jabatan === "PENYIDIK") {
                arr.forEach((val) => {
                   if(!val.penyidik) {
                      data = []
                      val.penyidik = []
                   } else {
                       val.penyidik.forEach((el) => {
                           data.push(val)
                        })
                    }
                })
            }
                
            res.status(200).send(data)
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
        var data = ''
        var statusReport = 0

        if(jabatan === 'WAKASAT') {
            field = "unit"
            data = value
            statusReport = 1
        } else if(jabatan === 'KANIT') {
           field = "subnit"
           data = value
           statusReport = 2
        } else if (jabatan === "KASUBNIT" ) {
            field = "penyidik"
            data = `{${value}}`
            statusReport = 3
        }
        
        const sql = `UPDATE "reports".a_report
                    SET ${field} = '${data}', "statusReport" = ${statusReport}
                    WHERE "id" = ${idReport};`
  
        db.query(sql, (err, results) => {
            if(err) {
                console.log(err)
                res.status(500).send(err)
            } 
         
            var idUnitsOrSubnit = value
            var emit = 'update-status-disposisi-' + field
            
            req.app.io.emit(emit, { message : 'sukses', idUnitOrSubnit: idUnitsOrSubnit }) 
            res.status(200).send({ message: 'unit changed' })
        })
    },
    updateReportStatusDisposisiB: (req, res) => {
        const {
            jabatan
          } = req.logedUser
          
        const {
            value,
            idReport
        } = req.body

          let field = ""
          var data = ''
          var statusReport = 0
  
          if(jabatan === 'WAKASAT') {
              field = "unit"
              data = value
              statusReport = 1
          } else if(jabatan === 'KANIT') {
             field = "subnit"
             data = value
             statusReport = 2
          } else if (jabatan === "KASUBNIT" ) {
              field = "penyidik"
              data = `{${value}}`
              statusReport = 3
          }
       
          const sql = `UPDATE "reports".b_report
          SET ${field} = '${data}', "statusReport" = ${statusReport}
          WHERE "id" = ${idReport};`

        db.query(sql, (err, results) => {
            if(err) {
                console.log(err)
                res.status(500).send(err)
            } 
            var idUnitsOrSubnit = value
            var emit = 'update-status-disposisi-b-' + field
          
            req.app.io.emit(emit, { message : 'sukses',  idUnitOrSubnit: idUnitsOrSubnit }) 
            res.status(200).send({ message: 'unit changed' })
        })
    },
    updatePerkembanganLaporan: (req, res) => {
        const {
            value, idLaporan
        } = req.body
  
        const sql = `UPDATE reports.a_report 
        SET "perkembanganLaporan" = '${value}'
        WHERE id = ${idLaporan};`

        db.query(sql, (err, results) => {
            if(err) {
                console.log(err)
                res.status(500).send(err)
            } 

            res.status(200).send({ message: "Perkembangan berhasil diupdate" })
        })
    },
    updatePerkembanganLaporanB: (req, res) => {
        const {
            value, idLaporan
        } = req.body
  
        const sql = `UPDATE reports.b_report 
        SET "perkembanganLaporan" = '${value}'
        WHERE id = ${idLaporan};`
   
        db.query(sql, (err, results) => {
            if(err) {
                console.log(err)
                res.status(500).send(err)
            } 

            res.status(200).send({ message: "Perkembangan berhasil diupdate" })
        })
    }
}


