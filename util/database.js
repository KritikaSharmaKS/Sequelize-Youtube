const Sequelize = require("sequelize");

const sequelize = new Sequelize("sequelize-youtube", "root", "9871709924", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
