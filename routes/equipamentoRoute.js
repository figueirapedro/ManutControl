"use strict";
var Express = require("express");
var Router = Express.Router();
var equipamentoController_1 = require("../controller/equipamentoController");
Router.post("/equipamento", equipamentoController_1.inserirEquipamento);
Router.get("/equipamento", equipamentoController_1.listarEquipamento);
Router.put("/equipamento", equipamentoController_1.alterarEquipamento);
Router["delete"]("/equipamento", equipamentoController_1.removerEquipamento);
module.exports = Router;
