const mysql = require('mysql2');
const {
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_USER,
    DB_PORT
  } = require('../config.js')

const db = mysql.createConnection({
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME
});

db.connect((err) => {
    if(err) throw err;
    console.log('Conexión exitosa a la base de datos');
});

module.exports = {db};

