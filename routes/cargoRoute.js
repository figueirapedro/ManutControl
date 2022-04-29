"use strict";
var Express = require("express");
var Router = Express.Router();
var cargoController_1 = require("../controller/cargoController");
Router.get("/cargo", cargoController_1.listarCargo);
Router.post("/cargo", cargoController_1.inserirCargo);
Router.put("/cargo/:id", cargoController_1.alterarCargo);
Router["delete"]("/cargo/:id", cargoController_1.removerCargo);
module.exports = Router;
