const Sequelize = require("sequelize");

const sequelize = new Sequelize("fruit", "root", "root", {
  dialect: "mysql",
  host: "localhost"
});

module.exports = sequelize;
