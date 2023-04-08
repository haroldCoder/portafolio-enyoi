const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// conexión a la base de datos
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

app.get('/api/solicitudes', (req, res) => {
  const sql = 'SELECT * FROM request';
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

app.post('/api/solicitudes', (req, res) => {
  const {nombre, correo, tel, solicitud, comentario} = req.body;
    db.query(`INSERT INTO request VALUES ("${nombre}", "${correo}", ${tel}, "${solicitud}", "${comentario}")`, (result, err)=>{
      if(err) throw err;
      console.log("request add");
      res.send("request with 200");
    })
});

// iniciar servidor
app.listen(4000, () => console.log('Servidor iniciado en el puerto 4000'));