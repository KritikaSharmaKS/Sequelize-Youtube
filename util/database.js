const Sequelize = require("sequelize");

const sequelize = new Sequelize("ks-store", "root", "9871709924", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
