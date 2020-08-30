const path = require("path");

const mysql = require("mysql2");

module.exports = function(app, connection) {
    app.get("/", function(req, res) { 
        connection.query("SELECT * FROM 'react-sql-db'.user;", (err, data) => {
            err ? res.send(err) : res.json({users: data});
        });
    });
}