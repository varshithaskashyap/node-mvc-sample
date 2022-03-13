const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'node_mvc_crud',
    multipleStatements: true
});


module.exports = mysqlConnection