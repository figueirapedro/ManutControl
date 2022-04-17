"use strict";
exports.__esModule = true;
exports.removerPeca = exports.alterarPeca = exports.inserirPeca = exports.listarPeca = void 0;
var Filesystem = require("fs");
function listarPeca(req, res) {
    res.send("Peça cadastrada com sucesso!\n" + JSON.stringify(req.body));
}
exports.listarPeca = listarPeca;
;
function inserirPeca(req, res) {
    Filesystem.readFile('../assets/mock/peca.json', 'utf8', function (err, data) {
        if (err) {
            console.error(err);
            return;
        }
        res.send(data);
    });
}
exports.inserirPeca = inserirPeca;
;
function alterarPeca(req, res) {
    res.send("Peça de ID " + req.body.Id + " foi alterada com sucesso!\n" + JSON.stringify(req.body));
}
exports.alterarPeca = alterarPeca;
;
function removerPeca(req, res) {
    res.send("Peça de ID " + req.body.Id + " foi removida com sucesso!\n" + JSON.stringify(req.body));
}
exports.removerPeca = removerPeca;
;
