var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "somepassword",
    port: 3306,
    database: "burgers"
})};

connection.connect(function(err) {
    if(err) {
        console.error("Error Connecting: ", err.stack);
        return;
    }
    console.log("Connected as ID: ", connection.threadId);
    console.log("Connected to Port: ",connection.port);
});

module.exports = connection;