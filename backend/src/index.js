const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tu-contraseña',
  database: 'solicitudes'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conexión exitosa a la base de datos');
});

// definir rutas
app.get('/solicitudes', (req, res) => {
  const sql = 'SELECT * FROM solicitudes';
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

app.post('/solicitudes', (req, res) => {
  const nuevaSolicitud = req.body;
  const sql = 'INSERT INTO solicitudes SET ?';
  db.query(sql, nuevaSolicitud, (err, result) => {
    if (err) {
      throw err;
    }
    res.send('Solicitud creada con éxito');
  });
});

// iniciar servidor
app.listen(3000, () => console.log('Servidor iniciado en el puerto 3000'));