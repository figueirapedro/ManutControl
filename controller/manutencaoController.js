"use strict";
exports.__esModule = true;
exports.removerManutencao = exports.alterarManutencao = exports.inserirManutencao = exports.listarManutencao = void 0;
var Filesystem = require("fs");
function listarManutencao(req, res) {
    res.send("Manutenção cadastrada com sucesso!\n" + JSON.stringify(req.body));
}
exports.listarManutencao = listarManutencao;
;
function inserirManutencao(req, res) {
    Filesystem.readFile("../assets/mock/manutencao.json", "utf8", function (err, data) {
        if (err) {
            console.error(err);
            return;
        }
        res.send(data);
    });
}
exports.inserirManutencao = inserirManutencao;
;
function alterarManutencao(req, res) {
    res.send("Manutenção de ID " + req.body.Id + " foi alterada com sucesso!\n" + JSON.stringify(req.body));
}
exports.alterarManutencao = alterarManutencao;
;
function removerManutencao(req, res) {
    res.send("Manutenção de ID " + req.body.Id + " foi removida com sucesso!\n" + JSON.stringify(req.body));
}
exports.removerManutencao = removerManutencao;
;
