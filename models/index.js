const dbConfig = require("../config/config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    //max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.masterBarang = require("./masterBarangModel")(sequelize, Sequelize);
db.barangKeluar = require("./barangKeluarModel")(sequelize, Sequelize);
db.barangMasuk = require("./barangMasukModel")(sequelize, Sequelize);
db.history = require("./historyModel")(sequelize, Sequelize);
db.users = require("./user")(sequelize, Sequelize);
db.proyeks = require("./proyekModel")(sequelize, Sequelize);
db.purchasing = require("./purchasingModel")(sequelize, Sequelize);
db.activity = require("./acivityModel")(sequelize, Sequelize);
db.inventory = require("./inventoryModel")(sequelize, Sequelize);
db.supplier = require("./supplierModel")(sequelize, Sequelize);
db.PO = require("./POmodel")(sequelize, Sequelize);
//db.masterBarang.hasMany(db.barangMasuk, {foreignKey: 'namabarang', targetKey: 'namabarang'})

db.barangMasuk.belongsTo(db.masterBarang, {foreignKey: 'namabarang', source: 'namabarang'});
db.barangKeluar.belongsTo(db.masterBarang, {foreignKey: 'namabarang', source: 'namabarang'});
//db.purchasing.belongsTo(db.barangMasuk, {foreignKey: "kodePO", source: "kodePO"});
db.purchasing.belongsTo(db.PO, {foreignKey: "kodePO", source: "kodePO"});
db.barangMasuk.belongsTo(db.PO, {foreignKey: "kodePO", source: "kodePO"});


//db.users.hasMany(db.proyeks, {through})
//db.barangMasuk.belongsTo(db.purchasing, {foreignKey: "kodePO", source: "kodePO"});
//db.barangKeluar.belongsTo(db.purchasing, {foreignKey: "kodePO", source: "kodePO"});

/*
async function addUser(){
  const count = await db.users.count();

  if(count > 0){
    return;
  }else{
    await db.users.createUser({ ID: "111", username: "Tester", password: "111", accountLevel: "ADMIN"});
  }
}

// Include a sync option with seed data logic included.
db.sync = async () => {
  // Sync schema.
  await db.sequelize.sync();
  
  await addUser();
}; */

module.exports = db;