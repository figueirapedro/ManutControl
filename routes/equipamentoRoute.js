"use strict";
var Express = require("express");
var Router = Express.Router();
var equipamentoController_1 = require("../controller/equipamentoController");
Router.get("/equipamento", equipamentoController_1.listarEquipamento);
Router.post("/equipamento", equipamentoController_1.inserirEquipamento);
Router.put("/equipamento/:id", equipamentoController_1.alterarEquipamento);
Router["delete"]("/equipamento/:id", equipamentoController_1.removerEquipamento);
module.exports = Router;
