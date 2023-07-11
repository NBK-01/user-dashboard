const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'public',
    database: 'userdb',
  });
  
module.exports = db;
