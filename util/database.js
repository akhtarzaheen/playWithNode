const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "play_with_nodes",
  password: "",
});

module.exports = pool.promise();
