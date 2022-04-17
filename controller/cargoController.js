"use strict";
exports.__esModule = true;
exports.removerCargo = exports.alterarCargo = exports.listarCargo = exports.inserirCargo = void 0;
var Filesystem = require("fs");
// CRUD para Cargo
function inserirCargo(req, res) {
    res.send("Cargo cadastrado com sucesso!\n" + JSON.stringify(req.body));
}
exports.inserirCargo = inserirCargo;
;
function listarCargo(req, res) {
    Filesystem.readFile("../assets/mock/cargo.json", "utf8", function (err, data) {
        if (err) {
            console.error(err);
            return;
        }
        res.send(data);
    });
}
exports.listarCargo = listarCargo;
;
function alterarCargo(req, res) {
    res.send("Cargo de ID " + req.body.Id + " foi alterado com sucesso!\n" + JSON.stringify(req.body));
}
exports.alterarCargo = alterarCargo;
;
function removerCargo(req, res) {
    res.send("Cargo de ID " + req.body.Id + " foi removido com sucesso!\n" + JSON.stringify(req.body));
}
exports.removerCargo = removerCargo;
;
// Fim CRUD de Cargo
