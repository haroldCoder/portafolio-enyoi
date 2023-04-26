const request = {};
const { db } = require("../sql/conection");

//peticion get
request.getRequest = (req, res) =>{

  //seleciona todo de la tabla usuarios
  db.query('SELECT * FROM request', (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result.rows);
  });
}

//peticion post
request.postRequest = (req, res) =>{
    const {nombre, correo, tel, solicitud, comentario} = req.body;
    const query = {
      text: 'INSERT INTO request(nombre, correo, tel, solicitud, comentario) VALUES($1, $2, $3, $4, $5)', //inserte en la tabla solicitudes los valores
      values: [nombre, correo, tel, solicitud, comentario],
    };
    db.query(query, (result, err)=>{
      if(err) console.log(err); // si hay error imprimelo en pantalla
      console.log("request add", result);
      res.send("request with 200");
    })
}

//peticion delete
request.deleteRequest = (req, res) =>{
    const {id} = req.params;

    db.query(`DELETE FROM request WHERE id = ${id}`, (err, re)=>{ //elimina de la tabla solicitudes el id traido de los parametros
        if(err) console.log(re);
        console.log("request delete");
        res.send("solicitud eliminada");
    })
}

//peticion put
request.putRequest = (req, res) =>{
    const {id} = req.params;
    const {solicitud, comentario} = req.body;

    db.query(`UPDATE request SET solicitud = '${solicitud}', comentario = '${comentario}' WHERE id = ${id}`, (err, re)=>{ // actualiza los datos traidos del body de la peticion
        if(err) throw err;
        console.log("request update");
        res.send("solicitud modificada");
    })
}
module.exports = {request};