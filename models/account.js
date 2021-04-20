const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Account = sequelize.define("account", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  active: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = User;
