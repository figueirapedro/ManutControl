"use strict";
exports.__esModule = true;
exports.removerEquipamento = exports.alterarEquipamento = exports.listarEquipamento = exports.inserirEquipamento = void 0;
var Filesystem = require("fs");
// CRUD para Equipamento
function inserirEquipamento(req, res) {
    res.send("equipamento cadastrado com sucesso!\n" + JSON.stringify(req.body));
}
exports.inserirEquipamento = inserirEquipamento;
;
function listarEquipamento(req, res) {
    Filesystem.readFile(__dirname + '/assets/mock/equipamento.json', 'utf8', function (err, data) {
        if (err) {
            console.error(err);
            return;
        }
        res.send(data);
    });
}
exports.listarEquipamento = listarEquipamento;
;
function alterarEquipamento(req, res) {
    res.send("Equipamento de ID " + req.body.Id + " foi alterado com sucesso!\n" + JSON.stringify(req.body));
}
exports.alterarEquipamento = alterarEquipamento;
;
function removerEquipamento(req, res) {
    res.send("Equipamento de ID " + req.body.Id + " foi removido com sucesso!\n" + JSON.stringify(req.body));
}
exports.removerEquipamento = removerEquipamento;
;
// Fim CRUD de Equipamento
