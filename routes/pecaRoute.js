"use strict";
var Express = require("express");
var pecaController_1 = require("../controller/pecaController");
var Router = Express.Router();
Router.get("/peca", pecaController_1.listarPeca);
Router.post("/peca", pecaController_1.inserirPeca);
Router.put("/peca/:id", pecaController_1.alterarPeca);
Router["delete"]("/peca/:id", pecaController_1.removerPeca);
module.exports = Router;
