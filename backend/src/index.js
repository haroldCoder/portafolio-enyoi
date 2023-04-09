const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();
const cors = require("cors");
const { default: connection } = require('./sql/conection');

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.use('/api/solicitudes', require("./routes/request-routes"));


// iniciar servidor
app.listen(4000, () => console.log('Servidor iniciado en el puerto 4000'));