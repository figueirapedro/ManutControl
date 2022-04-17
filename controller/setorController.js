"use strict";
exports.__esModule = true;
exports.removerSetor = exports.alterarSetor = exports.listarSetor = exports.inserirSetor = void 0;
var Filesystem = require("fs");
// CRUD para Setor
function inserirSetor(req, res) {
    res.send("Setor cadastrado com sucesso!\n" + JSON.stringify(req.body));
}
exports.inserirSetor = inserirSetor;
;
function listarSetor(req, res) {
    Filesystem.readFile("../assets/mock/setor.json", "utf8", function (err, data) {
        if (err) {
            console.error(err);
            return;
        }
        res.send(data);
    });
}
exports.listarSetor = listarSetor;
;
function alterarSetor(req, res) {
    res.send("Setor de ID " + req.body.Id + " foi alterado com sucesso!\n" + JSON.stringify(req.body));
}
exports.alterarSetor = alterarSetor;
;
function removerSetor(req, res) {
    res.send("Setor de ID " + req.body.Id + " foi removido com sucesso!\n" + JSON.stringify(req.body));
}
exports.removerSetor = removerSetor;
;
// Fim CRUD de Setor
