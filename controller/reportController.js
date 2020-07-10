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
                // console.log(err)
                res.status(200).send(err)
            } 
            req.app.io.emit('input-report-a' , { message : 'sukses' }) 
            res.status(500).send({ message: 'edit success' })
        })
    },
    tesGetArr: (req, res) => {
        const sql = `SELECT pelaku FROM reports.a_report;`

        db.query(sql, (err, results) => {
            if(err) {
                // console.log(err)
                res.status(200).send(err)
            } 
           
            res.status(500).send(results.rows)
        })
    }
}

