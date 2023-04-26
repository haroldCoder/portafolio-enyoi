const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
const {PORT} = require("./config")

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//usar el componente para administrar rutas
app.use('/api/solicitudes', require("./routes/request-routes"));


// iniciar servidor
app.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`));