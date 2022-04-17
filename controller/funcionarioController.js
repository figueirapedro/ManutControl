"use strict";
exports.__esModule = true;
exports.removerFuncionario = exports.alterarFuncionario = exports.inserirFuncionario = exports.listarFuncionario = void 0;
var Filesystem = require("fs");
function listarFuncionario(req, res) {
    res.send("Funcionario cadastrado com sucesso!\n" + JSON.stringify(req.body));
}
exports.listarFuncionario = listarFuncionario;
;
function inserirFuncionario(req, res) {
    Filesystem.readFile('../assets/mock/funcionario.json', 'utf8', function (err, data) {
        if (err) {
            console.error(err);
            return;
        }
        res.send(data);
    });
}
exports.inserirFuncionario = inserirFuncionario;
;
function alterarFuncionario(req, res) {
    res.send("Funcionario de ID " + req.body.Id + " foi alterado com sucesso!\n" + JSON.stringify(req.body));
}
exports.alterarFuncionario = alterarFuncionario;
;
function removerFuncionario(req, res) {
    res.send("Funcionario de ID " + req.body.Id + " foi removido com sucesso!\n" + JSON.stringify(req.body));
}
exports.removerFuncionario = removerFuncionario;
;
