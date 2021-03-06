const db = require("../models");
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
    const data = req.body;
    
    for(let i = 0; i < data.length; i++){
        const outstanding = await db.outstanding.create({
            namabarang: data[i].namabarang,
            outstanding: data[i].quantity,
            ordered: data[i].quantity,
            proyek: data[i].proyek,
            kodePO: data[i].kodePO,
            tgl: data[i].tgl
            //keterangan: req.body.keterangan
        });
        res.json(outstanding);
    }
    /*
    const outstanding = await db.outstanding.create({
        namabarang: req.body.namabarang,
        outstanding: req.body.quantity,
        ordered: req.body.quantity,
        proyek: req.body.proyek,
        kodePO: req.body.kodePO,
        tgl: req.body.tgl
        //keterangan: req.body.keterangan
    });
*/
    
};

exports.seeAll = async (req, res) => {
    const outstanding = await db.outstanding.findAll();

    res.json(outstanding);
};

exports.update = async(req, res) => {
   /* const found = await db.outstanding.findByPk(req.body.namaSupplier);

    if(found !== null){
        const update = await db.supplier.update({   
            Pic: req.body.Pic,
            code: req.body.code,
            tlp: req.body.tlp
        },
        {
            where: {
                namaSupplier: req.body.namaSupplier
            }
        })
        res.json(update);
    } */
};

exports.delete = (req, res) => {
  
};

exports.deleteAll = (req, res) => {
  
};
