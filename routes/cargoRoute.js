"use strict";
var Express = require("express");
var cargoController_1 = require("../controller/cargoController");
var loginController_1 = require("../controller/loginController");
var Router = Express.Router();
Router.get("/cargo", cargoController_1.listarCargo);
Router.post("/cargo", cargoController_1.inserirCargo);
Router.put("/cargo/:id", loginController_1.autenticarJWT, cargoController_1.alterarCargo);
Router["delete"]("/cargo/:id", loginController_1.autenticarJWT, cargoController_1.removerCargo);
module.exports = Router;
