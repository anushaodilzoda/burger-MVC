// Set up MySQL connection.
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // mysql://b92d7740db9d45:eb1c4b3b@us-cdbr-iron-east-04.cleardb.net/heroku_ce95f5c76ca4d26?reconnect=true
var connection = mysql.createConnection({
  host: "lus-cdbr-iron-east-04.cleardb.net",
  port: 3306,
  user: "b92d7740db9d45",
  password: "eb1c4b3b",
  database: "heroku_ce95f5c76ca4d26"
});

}

// Make connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
