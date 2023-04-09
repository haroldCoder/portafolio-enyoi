const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2364144',
    database: 'request'
});

db.connect((err) => {
    if(err) throw err;
    console.log('Conexión exitosa a la base de datos');
});

module.exports = {db};

