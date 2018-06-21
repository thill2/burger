var mysql = require("mysql");

var connection;

const {
  JAWSDB_URL,
  NODE_ENV
} = process.env;

if (NODE_ENV === "production") {
  connection = mysql.createConnection(JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "iScribe$2014",
    database: "burgers_db"
  });
}

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;