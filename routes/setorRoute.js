"use strict";
var Express = require("express");
var Router = Express.Router();
var setorController_1 = require("../controller/setorController");
Router.get("/setor", setorController_1.listarSetor);
Router.post("/setor", setorController_1.inserirSetor);
Router.put("/setor", setorController_1.alterarSetor);
Router["delete"]("/setor", setorController_1.removerSetor);
module.exports = Router;
