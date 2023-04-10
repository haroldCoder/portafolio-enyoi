const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
const {DB_PORT} = require("./config")

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.use('/api/solicitudes', require("./routes/request-routes"));


// iniciar servidor
app.listen(DB_PORT, () => console.log(`Servidor iniciado en el puerto ${DB_PORT}`));