"use strict";
var Express = require("express");
var manutencaoController_1 = require("../controller/manutencaoController");
var loginController_1 = require("../controller/loginController");
var Router = Express.Router();
Router.get("/manutencao", loginController_1.autenticarJWT, manutencaoController_1.listarManutencao);
Router.post("/manutencao", loginController_1.autenticarJWT, manutencaoController_1.inserirManutencao);
Router.put("/manutencao/:id", loginController_1.autenticarJWT, manutencaoController_1.alterarManutencao);
Router["delete"]("/manutencao/:id", loginController_1.autenticarJWT, manutencaoController_1.removerManutencao);
module.exports = Router;
