const mysql = require('mysql2');
const {
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_USER,
    DB_PORT,
    DATABASE_URL
  } = require('../config.js')

const db = mysql.createConnection({
  "host": DB_HOST,
  "database": DB_NAME,
  "password": DB_PASSWORD,
  "user": DB_USER,
  "port": DB_PORT
});

db.connect((err) => {
    if(err) throw err;
    console.log('Conexión exitosa a la base de datos');
});

module.exports = {db};

