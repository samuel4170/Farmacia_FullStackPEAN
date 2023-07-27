const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.clients = require("./cliente.model.js")(sequelize, Sequelize);
db.empleads = require("./empleado.model.js")(sequelize, Sequelize);
db.products = require("./producto.model.js")(sequelize, Sequelize);
db.proveeds = require("./proveedor.model.js")(sequelize, Sequelize);
db.vents = require("./venta.model.js")(sequelize, Sequelize);

// db.products.hasMany(db.vents, {as: "products"});
// db.vents.belongsTo(db.products, {
// 	foreingKey: "cod",
// 	as: "vents"
// });

db.vents.hasMany(db.products, {as: "vents"});
db.products.belongsTo(db.vents, {
	foreingKey: "cod",
	as: "products"
});


db.proveeds.hasMany(db.products, {as: "proveeds"});
db.products.belongsTo(db.proveeds, {
	foreingKey: "id",
	as: "proveeds"
});

module.exports = db;