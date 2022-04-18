//import library
const express = require('express');
var cors = require('cors');
const fetch = require('node-fetch');
const fs = require('fs');
const xml2js = require('xml2js');
const util = require('util');
const parseString = require('xml2js').parseString;
const url = require('url');
const soap = require("soap");
var restClient = require('node-rest-client').Client;

const app = express();
const https = require('https');
const http = require('http');
const request = require('request');
const PORT = 5678;
const parser = new xml2js.Parser();


const icNumber = ["970923126873", "970706085323", "G414329", "WEQ8613"];

//middlewares
//set cross origin resource sharing init
app.use(cors());
//convert response body to JSON parse
app.use(express.json());

//check the port is available and set the port for the hosting
app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)

);

//post data from client side and get response from server side
app.post('/api/query/:id', (req, res) => {
    // const { no_Badan } = req.params;
    const { id } = req.params;
    const { query } = req.body;

    if (!query) {
        res.status(418).send({ message: 'Please insert IC number, Plate Number or Chasis Number!' });
    } else if (!id) {
        res.status(418).send({ message: 'Kindly login to access this features!' });
    } else {
        let foundObject = icNumber.find(o => o === query);
        console.log(foundObject);
        if (foundObject != undefined) {
            switch (query) {
                case '970923126873':
                    res.send({
                        "Status": "ada",
                        "QueryStartTime": "2022-04-07 10:21:10.258",
                        "QueryEndTime": "2022-04-07 10:21:10.759",
                        "JPJ":
                            [{
                                "Status": "ada",
                                "Nama": "RAIS HELMY BIN SAPIULLAH",
                                "No KP/Paspot": "970923126873",
                                "Kategori": "PERSENDIRIAN-MOTOKAR INDIVIDU",
                                "Alamat": "BLOCK J 13-11 KETUMBAR HILL CONDO JALAN KETUMBAR, CHERAS UTAMA CYBERJAYA 56100 SELANGOR",
                                "No Pendaftaran Kenderaan": "CBY4569",
                                "No Pendaftaran Lama": "CBY4569",
                                "No Chasis": "PL1C21LNR7B189588",
                                "Jenis Badan": "MOTOKAR",
                                "No Enjin": "va",
                                "Kuasa Enjin": "1298",
                                "Model": "ISWARA 1.3S A/B",
                                "Tahun Keluaran Model": "2007",
                                "Warna": "HITAM",
                                "Status Kenderaan": "48",
                                "Kod Kegunaan": "PERSENDIRIAN-MOTOKAR INDIVIDU",
                                "Tarikh Daftar": "2007-03-27",
                                "Buatan": "PROTON",
                                "No LKM": "Dvuxdqk",
                                "Tempoh LKM": "2021-04-14 - 2022-04-13",
                                "Syarikat Insurans": "MSIG INSURANCE (MALAYSIA) BHD",
                                "No Polisi": "8668261300006",
                                "Tempoh Insurans": "2021-04-14 - 2022-04-13",
                                "type": "JPJ",
                                "QueryStartTime": "2022-04-07 10:21:10.258",
                                "QueryEndTime": "2022-04-07 10:21:10.649",
                                "TypeDescription": "JPJ"
                            },],
                        "JPJIC":
                            [{
                                "Status": "ada",
                                "No.Kenderaan": "JLH8950",
                                "Model": "YAM-YAMAHA",
                                "Tarikh Model": "2008",
                                "type": "JPJIC",
                                "QueryStartTime": "2022-04-07 10:32:07.473",
                                "QueryEndTime": "2022-04-07 10:32:10.795",
                                "TypeDescription": "JPJIC"
                            },],
                        "JIM":
                            [{
                                "Status": "ada",
                                "No Dokumen": "A40782661",
                                "Tarikh Mula Passport": "20170913",
                                "Sebab Batal": "NORMAL",
                                "No Rujukan Pemilik": "7E648899     00",
                                "Cawangan Mengeluar": "KUALA LUMPUR",
                                "Sebab Sah": "DATA SISTEM BARU",
                                "Status Rekod": "Batal",
                                "Jenis Dokumen": "PASPORT MALAYSIA-SEMENANJUNG",
                                "No Siri Dokumen Terdahulu": "3823500",
                                "No Siri Dokumen": "40782661",
                                "No Dokumen Terdahulu": "A27198530",
                                "Tarikh Tamat Passport": "20230116",
                                "Cawangan Memohon": "KUALA LUMPUR",
                                "Tarikh Lahir": "19970923",
                                "No Pengenalan Semasa": "970923126873",
                                "Nama": "RAIS HELMY",
                                "Jantina": "LELAKI",
                                "Nama Dicetak": "RAIS HELMY",
                                "type": "JIM",
                                "QueryStartTime": "2022-04-07 10:32:54.022",
                                "QueryEndTime": "2022-04-07 10:32:58.841",
                                "TypeDescription": "JIM"
                            },],
                        "JPN":
                            [{
                                "Status": "ada",
                                "Nama": "RAIS HELMY BIN SAPIULLAH",
                                "No.Kad Pengenalan": "970923126873",
                                "No.Kad Pengenalan Lama": "",
                                "Tarikh Lahir": "1997-09-23",
                                "Jantina": "LELAKI",
                                "Agama": "ISLAM",
                                "Bangsa/Keturunan": "MELAYU",
                                "Alamat Tetap": "61 JALAN PJU 3/16B TROPICANA INDAH PETALING JAYA 47410 SELANGOR",
                                "Alamat Surat-menyurat": "61 JALAN PJU 3/16B TROPICANA INDAH PETALING JAYA 47410 SELANGOR",
                                "Tarikh Kematian": "",
                                "Status Kediaman": "Warganegara",
                                "Kewarganegaraan": "WARGANEGARA SECARA KUATKUASA UNDANG-UNDANG / PERKARA 30 (3)",
                                "Alamat e-mel": "codesquad@gmail.com",
                                "No. Telefon": "016-3458882",
                                "type": "JPN",
                                "Photo": "",
                                "QueryStartTime": "2022-04-07 10:18:16.136",
                                "QueryEndTime": "2022-04-07 10:18:22.698",
                                "TypeDescription": "JPN"
                            },],
                        "OrangHilang":
                            [{
                                "Status": "ada",
                                "Nama": "RAIS HELMY BIN SAPIULLAH",
                                "Jantina": "LELAKI",
                                "Agama": "ISLAM",
                                "Bangsa": "MELAYU",
                                "No Laporan": "BK BARU/003724/12",
                                "No.Kad Pengenalan": "970923126873",
                                "Kontigen": "SABAH",
                                "Tarikh Laporan": "2012-11-16",
                                "Status Kes": "Masih hilang",
                                "Gambar": "Tiada",
                                "Balai Polis": "BKT. BARU",
                                "type": "OrangHilang",
                                "QueryStartTime": "2022-04-07 10:24:57.106",
                                "QueryEndTime": "2022-04-07 10:24:57.726",
                                "TypeDescription": "Orang Hilang"
                            },],
                        "Saman":
                            [{
                                "Status": "ada",
                                "No.Kenderaan": "WEQ8613",
                                "Nama": "RAIS HELMY BIN SAPIULLAH",
                                "No.Kad Pengenalan": "970923126873",
                                "Tarikh Saman": "20030709",
                                "Masa Saman": "1215",
                                "No.Saman": "1806000100001DD682393",
                                "Daerah": "GOMBAK(SELAYANG)",
                                "Kesalahan 1": "APJ1987",
                                "Kesalahan 2": " ",
                                "Kesalahan 3": " ",
                                "Tempat Kesalahan": "KM KM 13 MRR2-GBK",
                                "Kompaun": "Y",
                                "Waran": "Warant:N,Blacklist:N,OpSikap:N",
                                "type": "Saman",
                                "QueryStartTime": "2022-04-07 10:26:36.437",
                                "QueryEndTime": "2022-04-07 10:26:36.909",
                                "TypeDescription": "Saman"
                            },],
                        "OrangDikehendaki":
                            [{
                                "Status": "ada",
                                "Nama": "RAIS HELMY BIN SAPIULLAH",
                                "Jantina": "LELAKI",
                                "Agama": "ISLAM",
                                "Bangsa": "MELAYU",
                                "No.Laporan": "TAMAN PELANGI/0331/18",
                                "IPD": "TAMAN PELANGI",
                                "Kontinjen": "JOHOR",
                                "Tarikh Laporan": "2018-01-13",
                                "Akta Kesalahan": "KK 130",
                                "Status Kes": "Dikenhendaki",
                                "Photo": "1",
                                "PhotoHex": "",
                                "No.Kad Pengenalan": "751126085837",
                                "Pegawai Penyiasat": "MOHD HASRUDI B MOHD ZAIN",
                                "No.Polis": "G3017501",
                                "Tarikh Report": "2018-01-13T00:00:00",
                                "type": "OrangDkhd",
                                "QueryStartTime": "2022-04-07 10:33:33.586",
                                "QueryEndTime": "2022-04-07 10:33:34.558",
                                "TypeDescription": "Orang Dikehendaki"
                            },],
                        "KenderaanHilang":
                            [{
                                "Status": "ada",
                                "No.Laporan": "",
                                "Balai": "",
                                "Kontigen": "",
                                "Tarikh Laporan": "",
                                "Jenis": "",
                                "Model/Tahun Buatan": "",
                                "Warna": "",
                                "Pegawai Penyiasat": "",
                                "No.Polis": "",
                                "No Pendaftaran Kenderaan": "",
                                "No Chasis": "",
                                "No Enjin": "",
                                "Recovery Indicator": "",
                                "Recovery Report No": "",
                                "Interim": "",
                                "Kenderaan Dicuri Di Malaysia": "",
                                "type": "KenderaanHilang",
                                "QueryStartTime": "2022-04-07 10:25:38.459",
                                "QueryEndTime": "2022-04-07 10:25:40.207",
                                "TypeDescription": "Kenderaan Hilang"
                            },],
                        "Personel":
                            [{
                                "Status": "tiada",
                                "Name": "",
                                "No.Polis": "",
                                "No.Kad Pengenalan": "",
                                "Jantina": "",
                                "Agama": "",
                                "Bangsa/Keturunan": "",
                                "Pangkat Hakiki": "",
                                "Jawatan": "",
                                "Cawangan": "",
                                "Balai": "",
                                "Daerah": "",
                                "Kontigen": "",
                                "Status Badan": "",
                                "type": "Personal",
                                "QueryStartTime": "2022-04-07 10:26:07.712",
                                "QueryEndTime": "2022-04-07 10:26:07.979",
                                "TypeDescription": "Personal"
                            },],


                        "Types": []
                    });
                    break;
                case '970706085323':
                    res.send({
                        "Status": "ada",
                        "QueryStartTime": "2022-04-07 10:21:10.258",
                        "QueryEndTime": "2022-04-07 10:21:10.759",
                        "JPJ":
                            [{
                                "Status": "ada",
                                "Nama": "MUHAMMAD HUSNUL",
                                "No KP/Paspot": "970706085323",
                                "Kategori": "PERSENDIRIAN-MOTOKAR INDIVIDU",
                                "Alamat": "BLOCK J 13-11 KETUMBAR HILL CONDO JALAN KETUMBAR, CHERAS UTAMA CYBERJAYA 56100 SELANGOR",
                                "No Pendaftaran Kenderaan": "CBY4569",
                                "No Pendaftaran Lama": "CBY4569",
                                "No Chasis": "PL1C21LNR7B189588",
                                "Jenis Badan": "MOTOKAR",
                                "No Enjin": "4G13P-NH7501",
                                "Kuasa Enjin": "1298",
                                "Model": "ISWARA 1.3S A/B",
                                "Tahun Keluaran Model": "2007",
                                "Warna": "HITAM",
                                "Status Kenderaan": "48",
                                "Kod Kegunaan": "PERSENDIRIAN-MOTOKAR INDIVIDU",
                                "Tarikh Daftar": "2007-03-27",
                                "Buatan": "PROTON",
                                "No LKM": "Dvuxdqk",
                                "Tempoh LKM": "2021-04-14 - 2022-04-13",
                                "Syarikat Insurans": "MSIG INSURANCE (MALAYSIA) BHD",
                                "No Polisi": "8668261300006",
                                "Tempoh Insurans": "2021-04-14 - 2022-04-13",
                                "type": "JPJ",
                                "QueryStartTime": "2022-04-07 10:21:10.258",
                                "QueryEndTime": "2022-04-07 10:21:10.649",
                                "TypeDescription": "JPJ"
                            },],
                        "JPJIC":
                            [{
                                "Status": "ada",
                                "No.Kenderaan": "JLH8950",
                                "Model": "YAM-YAMAHA",
                                "Tarikh Model": "2011",
                                "type": "JPJIC",
                                "QueryStartTime": "2022-04-07 10:32:07.473",
                                "QueryEndTime": "2022-04-07 10:32:10.795",
                                "TypeDescription": "JPJIC"
                            },],
                        "JIM":
                            [{
                                "Status": "tiada",
                                "No Dokumen": "",
                                "Tarikh Mula Passport": "",
                                "Sebab Batal": "",
                                "No Rujukan Pemilik": "",
                                "Cawangan Mengeluar": "",
                                "Sebab Sah": "",
                                "Status Rekod": "",
                                "Jenis Dokumen": "",
                                "No Siri Dokumen Terdahulu": "",
                                "No Siri Dokumen": "",
                                "No Dokumen Terdahulu": "",
                                "Tarikh Tamat Passport": "",
                                "Cawangan Memohon": "",
                                "Tarikh Lahir": "",
                                "No Pengenalan Semasa": "",
                                "Nama": "",
                                "Jantina": "",
                                "Nama Dicetak": "",
                                "type": "JIM",
                                "QueryStartTime": "2022-04-07 10:32:54.022",
                                "QueryEndTime": "2022-04-07 10:32:58.841",
                                "TypeDescription": "JIM"
                            },],
                        "JPN":
                            [{
                                "Status": "ada",
                                "Nama": "MUHAMMAD HUSNUL",
                                "No.Kad Pengenalan": "970706085323",
                                "No.Kad Pengenalan Lama": "",
                                "Tarikh Lahir": "1997-07-06",
                                "Jantina": "LELAKI",
                                "Agama": "ISLAM",
                                "Bangsa/Keturunan": "MELAYU",
                                "Alamat Tetap": "61 JALAN PJU 3/16B TROPICANA INDAH PETALING JAYA 47410 SELANGOR",
                                "Alamat Surat-menyurat": "61 JALAN PJU 3/16B TROPICANA INDAH PETALING JAYA 47410 SELANGOR",
                                "Tarikh Kematian": "",
                                "Status Kediaman": "Warganegara",
                                "Kewarganegaraan": "WARGANEGARA SECARA KUATKUASA UNDANG-UNDANG / PERKARA 30 (3)",
                                "Alamat e-mel": "codesquad@gmail.com",
                                "No. Telefon": "016-3458882",
                                "type": "JPN",
                                "Photo": "",
                                "QueryStartTime": "2022-04-07 10:18:16.136",
                                "QueryEndTime": "2022-04-07 10:18:22.698",
                                "TypeDescription": "JPN"
                            },],
                        "OrangHilang":
                            [{
                                "Status": "tiada",
                                "Nama": "",
                                "Jantina": "",
                                "Agama": "",
                                "Bangsa": "",
                                "No Laporan": "",
                                "No.Kad Pengenalan": "",
                                "Kontigen": "",
                                "Tarikh Laporan": "",
                                "Status Kes": "",
                                "Gambar": "",
                                "Balai Polis": "",
                                "type": "OrangHilang",
                                "QueryStartTime": "2022-04-07 10:24:57.106",
                                "QueryEndTime": "2022-04-07 10:24:57.726",
                                "TypeDescription": "Orang Hilang"
                            },],
                        "Saman":
                            [{
                                "Status": "tiada",
                                "No.Kenderaan": "",
                                "Nama": "",
                                "No.Kad Pengenalan": "",
                                "Tarikh Saman": "",
                                "Masa Saman": "",
                                "No.Saman": "",
                                "Daerah": "",
                                "Kesalahan 1": "",
                                "Kesalahan 2": " ",
                                "Kesalahan 3": " ",
                                "Tempat Kesalahan": "",
                                "Kompaun": "",
                                "Waran": "",
                                "type": "Saman",
                                "QueryStartTime": "2022-04-07 10:26:36.437",
                                "QueryEndTime": "2022-04-07 10:26:36.909",
                                "TypeDescription": "Saman"
                            },],
                        "OrangDikehendaki":
                            [{
                                "Status": "tiada",
                                "Nama": "",
                                "Jantina": "",
                                "Agama": "",
                                "Bangsa": "",
                                "No.Laporan": "",
                                "IPD": "",
                                "Kontinjen": "",
                                "Tarikh Laporan": "",
                                "Akta Kesalahan": "",
                                "Status Kes": "",
                                "Photo": "0",
                                "PhotoHex": "",
                                "No.Kad Pengenalan": "",
                                "Pegawai Penyiasat": "",
                                "No.Polis": "",
                                "Tarikh Report": "",
                                "type": "OrangDkhd",
                                "QueryStartTime": "2022-04-07 10:33:33.586",
                                "QueryEndTime": "2022-04-07 10:33:34.558",
                                "TypeDescription": "Orang Dikehendaki"
                            },],
                        "KenderaanHilang":
                            [{
                                "Status": "tiada",
                                "No.Laporan": "",
                                "Balai": "",
                                "Kontigen": "",
                                "Tarikh Laporan": "",
                                "Jenis": "",
                                "Model/Tahun Buatan": "",
                                "Warna": "",
                                "Pegawai Penyiasat": "",
                                "No.Polis": "",
                                "No Pendaftaran Kenderaan": "",
                                "No Chasis": "",
                                "No Enjin": "",
                                "Recovery Indicator": "",
                                "Recovery Report No": "",
                                "Interim": "",
                                "Kenderaan Dicuri Di Malaysia": "",
                                "type": "KenderaanHilang",
                                "QueryStartTime": "2022-04-07 10:25:38.459",
                                "QueryEndTime": "2022-04-07 10:25:40.207",
                                "TypeDescription": "Kenderaan Hilang"
                            },],
                        "Personel":
                            [{
                                "Status": "tiada",
                                "Name": "",
                                "No.Polis": "",
                                "No.Kad Pengenalan": "",
                                "Jantina": "",
                                "Agama": "",
                                "Bangsa/Keturunan": "",
                                "Pangkat Hakiki": "",
                                "Jawatan": "",
                                "Cawangan": "",
                                "Balai": "",
                                "Daerah": "",
                                "Kontigen": "",
                                "Status Badan": "",
                                "type": "Personal",
                                "QueryStartTime": "2022-04-07 10:26:07.712",
                                "QueryEndTime": "2022-04-07 10:26:07.979",
                                "TypeDescription": "Personal"
                            },],


                        "Types": []
                    });
                    break;
                case 'G414329':
                    res.send({
                        "Status": "ada",
                        "QueryStartTime": "2022-04-07 10:21:10.258",
                        "QueryEndTime": "2022-04-07 10:21:10.759",
                        "JPJ":
                            [{
                                "Status": "tiada",
                                "Nama": "",
                                "No KP/Paspot": "",
                                "Kategori": "",
                                "Alamat": "",
                                "No Pendaftaran Kenderaan": "",
                                "No Pendaftaran Lama": "",
                                "No Chasis": "",
                                "Jenis Badan": "",
                                "No Enjin": "",
                                "Kuasa Enjin": "",
                                "Model": "",
                                "Tahun Keluaran Model": "",
                                "Warna": "",
                                "Status Kenderaan": "",
                                "Kod Kegunaan": "",
                                "Tarikh Daftar": "",
                                "Buatan": "",
                                "No LKM": "",
                                "Tempoh LKM": "",
                                "Syarikat Insurans": "",
                                "No Polisi": "",
                                "Tempoh Insurans": "",
                                "type": "JPJ",
                                "QueryStartTime": "2022-04-07 10:21:10.258",
                                "QueryEndTime": "2022-04-07 10:21:10.649",
                                "TypeDescription": "JPJ"
                            },],
                        "JPJIC":
                            [{
                                "Status": "tiada",
                                "No.Kenderaan": "",
                                "Model": " ",
                                "Tarikh Model": "",
                                "type": "JPJIC",
                                "QueryStartTime": "2022-04-07 10:32:07.473",
                                "QueryEndTime": "2022-04-07 10:32:10.795",
                                "TypeDescription": "JPJIC"
                            },],
                        "JIM":
                            [{
                                "Status": "tiada",
                                "No Dokumen": "",
                                "Tarikh Mula Passport": "",
                                "Sebab Batal": "",
                                "No Rujukan Pemilik": "",
                                "Cawangan Mengeluar": "",
                                "Sebab Sah": "",
                                "Status Rekod": "",
                                "Jenis Dokumen": "",
                                "No Siri Dokumen Terdahulu": "",
                                "No Siri Dokumen": "",
                                "No Dokumen Terdahulu": "",
                                "Tarikh Tamat Passport": "",
                                "Cawangan Memohon": "",
                                "Tarikh Lahir": "",
                                "No Pengenalan Semasa": "",
                                "Nama": "",
                                "Jantina": "",
                                "Nama Dicetak": "",
                                "type": "JIM",
                                "QueryStartTime": "2022-04-07 10:32:54.022",
                                "QueryEndTime": "2022-04-07 10:32:58.841",
                                "TypeDescription": "JIM"
                            },],
                        "JPN":
                            [{
                                "Status": "ada",
                                "Nama": "AFIQSYAZWAN",
                                "No.Kad Pengenalan": "770622035541",
                                "No.Kad Pengenalan Lama": "",
                                "Tarikh Lahir": "1977-06-22",
                                "Jantina": "LELAKI",
                                "Agama": "ISLAM",
                                "Bangsa/Keturunan": "MELAYU",
                                "Alamat Tetap": "61 JALAN PJU 3/16B TROPICANA INDAH PETALING JAYA 47410 SELANGOR",
                                "Alamat Surat-menyurat": "61 JALAN PJU 3/16B TROPICANA INDAH PETALING JAYA 47410 SELANGOR",
                                "Tarikh Kematian": "",
                                "Status Kediaman": "Warganegara",
                                "Kewarganegaraan": "WARGANEGARA SECARA KUATKUASA UNDANG-UNDANG / PERKARA 30 (3)",
                                "Alamat e-mel": "codesquad@gmail.com",
                                "No. Telefon": "016-3458882",
                                "type": "JPN",
                                "Photo": "",
                                "QueryStartTime": "2022-04-07 10:18:16.136",
                                "QueryEndTime": "2022-04-07 10:18:22.698",
                                "TypeDescription": "JPN"
                            },],
                        "OrangHilang":
                            [{
                                "Status": "tiada",
                                "Nama": "",
                                "Jantina": "",
                                "Agama": "",
                                "Bangsa": "",
                                "No Laporan": "",
                                "No.Kad Pengenalan": "",
                                "Kontigen": "",
                                "Tarikh Laporan": "",
                                "Status Kes": "",
                                "Gambar": "",
                                "Balai Polis": "",
                                "type": "OrangHilang",
                                "QueryStartTime": "2022-04-07 10:24:57.106",
                                "QueryEndTime": "2022-04-07 10:24:57.726",
                                "TypeDescription": "Orang Hilang"
                            },],
                        "Saman":
                            [{
                                "Status": "tiada",
                                "No.Kenderaan": "",
                                "Nama": "",
                                "No.Kad Pengenalan": "",
                                "Tarikh Saman": "",
                                "Masa Saman": "",
                                "No.Saman": "",
                                "Daerah": "",
                                "Kesalahan 1": "",
                                "Kesalahan 2": " ",
                                "Kesalahan 3": " ",
                                "Tempat Kesalahan": "",
                                "Kompaun": "",
                                "Waran": "",
                                "type": "Saman",
                                "QueryStartTime": "2022-04-07 10:26:36.437",
                                "QueryEndTime": "2022-04-07 10:26:36.909",
                                "TypeDescription": "Saman"
                            },],
                        "OrangDikehendaki":
                            [{
                                "Status": "tiada",
                                "Nama": "",
                                "Jantina": "",
                                "Agama": "",
                                "Bangsa": "",
                                "No.Laporan": "",
                                "IPD": "",
                                "Kontinjen": "",
                                "Tarikh Laporan": "",
                                "Akta Kesalahan": "",
                                "Status Kes": "",
                                "Photo": "0",
                                "PhotoHex": "",
                                "No.Kad Pengenalan": "",
                                "Pegawai Penyiasat": "",
                                "No.Polis": "",
                                "Tarikh Report": "",
                                "type": "OrangDkhd",
                                "QueryStartTime": "2022-04-07 10:33:33.586",
                                "QueryEndTime": "2022-04-07 10:33:34.558",
                                "TypeDescription": "Orang Dikehendaki"
                            },],
                        "KenderaanHilang":
                            [{
                                "Status": "tiada",
                                "No.Laporan": "",
                                "Balai": "",
                                "Kontigen": "",
                                "Tarikh Laporan": "",
                                "Jenis": "",
                                "Model/Tahun Buatan": "",
                                "Warna": "",
                                "Pegawai Penyiasat": "",
                                "No.Polis": "",
                                "No Pendaftaran Kenderaan": "",
                                "No Chasis": "",
                                "No Enjin": "",
                                "Recovery Indicator": "",
                                "Recovery Report No": "",
                                "Interim": "",
                                "Kenderaan Dicuri Di Malaysia": "",
                                "type": "KenderaanHilang",
                                "QueryStartTime": "2022-04-07 10:25:38.459",
                                "QueryEndTime": "2022-04-07 10:25:40.207",
                                "TypeDescription": "Kenderaan Hilang"
                            },],
                        "Personel":
                            [{
                                "Status": "ada",
                                "Name": "AFIQSYAZWAN",
                                "No.Polis": "G414329",
                                "No.Kad Pengenalan": "770622035541",
                                "Jantina": "Lelaki",
                                "Agama": "Islam",
                                "Bangsa/Keturunan": "Melayu",
                                "Pangkat Hakiki": "ASP",
                                "Jawatan": "KETUA MPV BAHAGIAN PENCEGAHAN JENAYAH DAN KESELAMATAN KOMUNITI IBU PEJABAT POLIS DAERAH KLUANG JOHOR",
                                "Cawangan": "IPD KLUANG",
                                "Balai": "IPD KLUANG",
                                "Daerah": "IPD KLUANG",
                                "Kontigen": "KONTINJEN JOHOR",
                                "Status Badan": "AKTIF",
                                "type": "Personal",
                                "QueryStartTime": "2022-04-07 10:26:07.712",
                                "QueryEndTime": "2022-04-07 10:26:07.979",
                                "TypeDescription": "Personal"
                            },],

                        "Types": []
                    });
                    break;
                case 'WEQ8613':
                    res.send({
                        "Status": "ada",
                        "QueryStartTime": "2022-04-07 10:21:10.258",
                        "QueryEndTime": "2022-04-07 10:21:10.759",
                        "JPJ":
                            [{
                                "Status": "ada",
                                "Nama": "HUSNUL RAIS",
                                "No KP/Paspot": "831015065235",
                                "Kategori": "PERSENDIRIAN-MOTOKAR INDIVIDU",
                                "Alamat": "BLOCK J 13-11 KETUMBAR HILL CONDO JALAN KETUMBAR, CHERAS UTAMA CYBERJAYA 56100 SELANGOR",
                                "No Pendaftaran Kenderaan": "WEQ8613",
                                "No Pendaftaran Lama": "WEQ8613",
                                "No Chasis": "PL1C21LNR7B189588",
                                "Jenis Badan": "MOTOKAR",
                                "No Enjin": "4G13P-NH7501",
                                "Kuasa Enjin": "1298",
                                "Model": "ISWARA 1.3S A/B",
                                "Tahun Keluaran Model": "2007",
                                "Warna": "HITAM",
                                "Status Kenderaan": "48",
                                "Kod Kegunaan": "PERSENDIRIAN-MOTOKAR INDIVIDU",
                                "Tarikh Daftar": "2007-03-27",
                                "Buatan": "PROTON",
                                "No LKM": "Dvuxdqk",
                                "Tempoh LKM": "2021-04-14 - 2022-04-13",
                                "Syarikat Insurans": "MSIG INSURANCE (MALAYSIA) BHD",
                                "No Polisi": "8668261300006",
                                "Tempoh Insurans": "2021-04-14 - 2022-04-13",
                                "type": "JPJ",
                                "QueryStartTime": "2022-04-07 10:21:10.258",
                                "QueryEndTime": "2022-04-07 10:21:10.649",
                                "TypeDescription": "JPJ"
                            },],
                        "JPJIC":
                            [{
                                "Status": "tiada",
                                "No.Kenderaan": "",
                                "Model": " ",
                                "Tarikh Model": "",
                                "type": "JPJIC",
                                "QueryStartTime": "2022-04-07 10:32:07.473",
                                "QueryEndTime": "2022-04-07 10:32:10.795",
                                "TypeDescription": "JPJIC"
                            },],
                        "JIM":
                            [{
                                "Status": "tiada",
                                "No Dokumen": "",
                                "Tarikh Mula Passport": "",
                                "Sebab Batal": "",
                                "No Rujukan Pemilik": "",
                                "Cawangan Mengeluar": "",
                                "Sebab Sah": "",
                                "Status Rekod": "",
                                "Jenis Dokumen": "",
                                "No Siri Dokumen Terdahulu": "",
                                "No Siri Dokumen": "",
                                "No Dokumen Terdahulu": "",
                                "Tarikh Tamat Passport": "",
                                "Cawangan Memohon": "",
                                "Tarikh Lahir": "",
                                "No Pengenalan Semasa": "",
                                "Nama": "",
                                "Jantina": "",
                                "Nama Dicetak": "",
                                "type": "JIM",
                                "QueryStartTime": "2022-04-07 10:32:54.022",
                                "QueryEndTime": "2022-04-07 10:32:58.841",
                                "TypeDescription": "JIM"
                            },],
                        "JPN":
                            [{
                                "Status": "tiada",
                                "Nama": "",
                                "No.Kad Pengenalan": "",
                                "No.Kad Pengenalan Lama": "",
                                "Tarikh Lahir": "",
                                "Jantina": "",
                                "Agama": "",
                                "Bangsa/Keturunan": "",
                                "Alamat Tetap": "",
                                "Alamat Surat-menyurat": "",
                                "Tarikh Kematian": "",
                                "Status Kediaman": "",
                                "Kewarganegaraan": "",
                                "Alamat e-mel": "",
                                "No. Telefon": "",
                                "type": "JPN",
                                "Photo": "",
                                "QueryStartTime": "2022-04-07 10:18:16.136",
                                "QueryEndTime": "2022-04-07 10:18:22.698",
                                "TypeDescription": "JPN"
                            },],
                        "OrangHilang":
                            [{
                                "Status": "tiada",
                                "Nama": "",
                                "Jantina": "",
                                "Agama": "",
                                "Bangsa": "",
                                "No Laporan": "",
                                "No.Kad Pengenalan": "",
                                "Kontigen": "",
                                "Tarikh Laporan": "",
                                "Status Kes": "",
                                "Gambar": "",
                                "Balai Polis": "",
                                "type": "OrangHilang",
                                "QueryStartTime": "2022-04-07 10:24:57.106",
                                "QueryEndTime": "2022-04-07 10:24:57.726",
                                "TypeDescription": "Orang Hilang"
                            },],
                        "Saman":
                            [{
                                "Status": "ada",
                                "No.Kenderaan": "WEQ8613",
                                "Nama": "HUSNUL RAIS",
                                "No.Kad Pengenalan": "5305874",
                                "Tarikh Saman": "20030709",
                                "Masa Saman": "1215",
                                "No.Saman": "1806000100001DD682393",
                                "Daerah": "GOMBAK(SELAYANG)",
                                "Kesalahan 1": "APJ1987",
                                "Kesalahan 2": " ",
                                "Kesalahan 3": " ",
                                "Tempat Kesalahan": "KM KM 13 MRR2-GBK",
                                "Kompaun": "Y",
                                "Waran": "Warant:N,Blacklist:N,OpSikap:N",
                                "type": "Saman",
                                "QueryStartTime": "2022-04-07 10:26:36.437",
                                "QueryEndTime": "2022-04-07 10:26:36.909",
                                "TypeDescription": "Saman"
                            },],
                        "OrangDikehendaki":
                            [{
                                "Status": "tiada",
                                "Nama": "",
                                "Jantina": "",
                                "Agama": "",
                                "Bangsa": "",
                                "No.Laporan": "",
                                "IPD": "",
                                "Kontinjen": "",
                                "Tarikh Laporan": "",
                                "Akta Kesalahan": "",
                                "Status Kes": "",
                                "Photo": "0",
                                "PhotoHex": "",
                                "No.Kad Pengenalan": "",
                                "Pegawai Penyiasat": "",
                                "No.Polis": "",
                                "Tarikh Report": "",
                                "type": "OrangDkhd",
                                "QueryStartTime": "2022-04-07 10:33:33.586",
                                "QueryEndTime": "2022-04-07 10:33:34.558",
                                "TypeDescription": "Orang Dikehendaki"
                            },],
                        "KenderaanHilang":
                            [{
                                "Status": "tiada",
                                "No.Laporan": "",
                                "Balai": "",
                                "Kontigen": "",
                                "Tarikh Laporan": "",
                                "Jenis": "",
                                "Model/Tahun Buatan": "",
                                "Warna": "",
                                "Pegawai Penyiasat": "",
                                "No.Polis": "",
                                "No Pendaftaran Kenderaan": "",
                                "No Chasis": "",
                                "No Enjin": "",
                                "Recovery Indicator": "",
                                "Recovery Report No": "",
                                "Interim": "",
                                "Kenderaan Dicuri Di Malaysia": "",
                                "type": "KenderaanHilang",
                                "QueryStartTime": "2022-04-07 10:25:38.459",
                                "QueryEndTime": "2022-04-07 10:25:40.207",
                                "TypeDescription": "Kenderaan Hilang"
                            },],
                        "Personel":
                            [{
                                "Status": "tiada",
                                "Name": "",
                                "No.Polis": "",
                                "No.Kad Pengenalan": "",
                                "Jantina": "",
                                "Agama": "",
                                "Bangsa/Keturunan": "",
                                "Pangkat Hakiki": "",
                                "Jawatan": "",
                                "Cawangan": "",
                                "Balai": "",
                                "Daerah": "",
                                "Kontigen": "",
                                "Status Badan": "",
                                "type": "Personal",
                                "QueryStartTime": "2022-04-07 10:26:07.712",
                                "QueryEndTime": "2022-04-07 10:26:07.979",
                                "TypeDescription": "Personal"
                            },],

                        "Types": []
                    });
                    break;
                default:
                // code block
            }

        } else {
            res.send({
                "Status": "tiada",
                "QueryStartTime": "2022-04-07 10:21:10.258",
                "QueryEndTime": "2022-04-07 10:21:10.759",
                "Results":
                {
                },
            });
        }
    }
});

