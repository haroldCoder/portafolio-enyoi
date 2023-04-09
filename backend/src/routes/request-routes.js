const {Router} = require('express')
const { request } = require('../controllers/request.controller') 

const route = Router();

route.route("/")
.get(request.getRequest)
.post(request.postRequest)

route.route("/:id")
.delete(request.deleteRequest)
.put(request.putRequest)

module.exports = route;