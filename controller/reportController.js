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
            res.status(500).send({ message: 'input success' })
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
            tindakanYangDiAmbil,
            tindakPidanaDanPasal,
            barangBukti,
            status
        } = req.body
        
        const sql = `INSERT INTO reports.b_report (
            "unitMengetahui", "pangkatYangMenerimaLaporan", "nrpYangMenerimaLaporan", "pangkatMengetahui", "nrpMengetahui", "nomorLaporanPolisi", pelapor,
            "tempatLahir", "tanggalLahir", "jenisKelamin", "wargaNegara", agama, pekerjaan, alamat, "provinsiPelapor", "kotaPelapor", "kecamataPelapor", 
            "kelurahanPelapor", "nomorTelpon", "waktuKejadian", "waktuKejadianJam", "tempatKejadian", "provinsiKejadian", "kotaKejadian", "kecamatanKejadian",
            "kelurahanKejadian", "apaYangTerjadi", terlapor, korban, saksi, "waktuDilaporkan", "waktuDilaporkanJam", "uraianSingkatKejadian", unit, submit, tim,
            mengetahui, "yangMenerimaLaporan", "tindakanYangDiambil", "tindakPidanaDanPasal", "barangBukti", status
        ) VALUES (
            '${unitMengetahui}', '${pangkatyangMenerimaLaporan}', '${NRPyangMenerimaLaporan}', '${pangkatMengetahui}', '${NRPMengetahui}', '${nomorLaporanPolisi}', 
            '{${pelapor}}', '${tempatLahir}', '${tanggalLahir}', '${jenisKelamin}', '${wargaNegara}', '${agama}', '${pekerjaan}', '${alamat}', '${provinsiPelapor}', 
            '${kotaPelapor}', '${kecamataPelapor}', '${kelurahanPelapor}', '${nomorTelpon}', '${waktuKejadian}', '${waktuKejadianJam}', '${tempatKejadian}', '${provinsiKejadian}', 
            '${kotaKejadian}', '${kecamatanKejadian}', '${kelurahanKejadian}', '${apaYangTerjadi}', '{${terlapor}}', '{${korban}}', '{${saksi}}', '${waktuDilaporkan}', 
            '${waktuDilaporkanJam}', '${uraianSingkatKejadian}', '${unit}', '${submit}', '${tim}', '${mengetahui}', '${yangMenerimaLaporan}', '{${tindakanYangDiAmbil}}', 
            '{${tindakPidanaDanPasal}}', '{${barangBukti}}', '${status}' 
        );`

        db.query(sql, (err, results) => {
            if(err) {
                // console.log(err)
                res.status(200).send(err)
            } 
            req.app.io.emit('input-report-b' , { message : 'sukses' }) 
            res.status(500).send({ message: 'input success' })
        })
    }
}


