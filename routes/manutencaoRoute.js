"use strict";
var Express = require("express");
var manutencaoController_1 = require("../controller/manutencaoController");
var Router = Express.Router();
Router.get('/manutencao', manutencaoController_1.listarManutencao);
Router.post('/manutencao', manutencaoController_1.inserirManutencao);
Router.put('/manutencao', manutencaoController_1.alterarManutencao);
Router["delete"]('/manutencao', manutencaoController_1.removerManutencao);
module.exports = Router;
