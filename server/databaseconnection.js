const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Fallout4L',
    database: 'userdb',
  });
  
module.exports = db;
