const Sequelize = require("sequelize");

const sequelize = new Sequelize("play_with_nodes", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
