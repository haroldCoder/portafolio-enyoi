const request = {};
const { db } = require("../sql/conection");

request.getRequest = (req, res) =>{
  db.query('SELECT * FROM request', (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
}

request.postRequest = (req, res) =>{
    const {nombre, correo, tel, solicitud, comentario} = req.body;
    db.query(`INSERT INTO request(nombre, correo, tel, solicitud, comentario) VALUES ("${nombre}", "${correo}", "${tel}", "${solicitud}", "${comentario}")`, (result, err)=>{
      if(err) console.log(err);;
      console.log("request add", result);
      res.send("request with 200");
    })
}

request.deleteRequest = (req, res) =>{
    const {id} = req.params;

    db.query(`DELETE FROM request WHERE id = ${id}`, (err, re)=>{
        if(err) throw err;
        console.log("request delete");
        res.send("solicitud eliminada");
    })
}

request.putRequest = (req, res) =>{
    const {id} = req.params;
    const {solicitud, comentario} = req.body;

    db.query(`UPDATE request SET solicitud = "${solicitud}", comentario = "${comentario}" WHERE id = ${id}`, (err, re)=>{
        if(err) throw err;
        console.log("request update");
        res.send("solicitud modificada");
    })
}
module.exports = {request};