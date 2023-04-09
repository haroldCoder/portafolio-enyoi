const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();
const cors = require("cors");

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

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
    db.query(`INSERT INTO request(nombre, correo, tel, solicitud, comentario) VALUES ("${nombre}", "${correo}", "${tel}", "${solicitud}", "${comentario}")`, (result, err)=>{
      if(err) console.log(err);;
      console.log("request add", result);
      res.send("request with 200");
    })
});

app.delete("/api/solicitudes/:id", (req, res) =>{
  const {id} = req.params;

  db.query(`DELETE FROM request WHERE id = ${id}`, (err, re)=>{
    if(err) throw err;
    console.log("request delete");
    res.send("solicitud eliminada");
  })
})

app.put("/api/solicitudes/:id", (req, res) =>{
  const {id} = req.params;
  const {solicitud, comentario} = req.body;

  db.query(`UPDATE request SET solicitud = "${solicitud}", comentario = "${comentario}" WHERE id = ${id}`, (err, re)=>{
    if(err) throw err;
    console.log("request update");
    res.send("solicitud modificada");
  })
})

// iniciar servidor
app.listen(4000, () => console.log('Servidor iniciado en el puerto 4000'));