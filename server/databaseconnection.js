const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Nayef2003',
    database: 'userdb',
  });
  
module.exports = db;
