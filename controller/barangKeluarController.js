const db = require("../models");
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
    const barang = await db.barangKeluar.create({
        namabarang: req.body.namabarang,
        kodeKeluar: req.body.kodeKeluar, 
        quantity: req.body.quantity,  
        namaPengambil: req.body.namaPengambil,
        tgl: req.body.tgl,
        //progress: req.body.progress,
        status: "keluar",
        proyek: req.body.proyek,
        keterangan: req.body.keterangan,
        tujuan: req.body.tujuan,
        satuan: req.body.satuan
    });
    res.json(barang)
};

exports.seeAll = async (req, res) => {
    const barangkeluar = await db.barangKeluar.findAll();

    res.json(barangkeluar);
}

exports.update = (req, res) => {
  
};

exports.delete = (req, res) => {
  
};

exports.deleteAll = (req, res) => {
  
};
