"use strict";
var Express = require("express");
var Router = Express.Router();
var funcionarioController_1 = require("../controller/funcionarioController");
Router.get("/funcionario", funcionarioController_1.listarFuncionario);
Router.post("/funcionario", funcionarioController_1.inserirFuncionario);
Router.put("/funcionario", funcionarioController_1.alterarFuncionario);
Router["delete"]("/funcionario", funcionarioController_1.removerFuncionario);
module.exports = Router;
