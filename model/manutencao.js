"use strict";
exports.__esModule = true;
exports.Model = exports.Manutencao = void 0;
var Mongoose = require("mongoose");
var Manutencao = /** @class */ (function () {
    function Manutencao() {
    }
    Manutencao.prototype.setId = function (Id) {
        this.Id = Id;
    };
    Manutencao.prototype.setDescricao = function (Descricao) {
        this.Descricao = Descricao;
    };
    Manutencao.prototype.setTipo = function (Tipo) {
        this.Tipo = Tipo;
    };
    Manutencao.prototype.setFuncionario = function (Funcionario) {
        this.Funcionario = Funcionario;
    };
    Manutencao.prototype.setData = function (Data) {
        this.Data = Data;
    };
    Manutencao.prototype.setEquipamento = function (Equipamento) {
        this.Equipamento = Equipamento;
    };
    Manutencao.prototype.setQRCode = function (QRCode) {
        this.QRCode = QRCode;
    };
    Manutencao.prototype.getId = function () {
        return this.Id;
    };
    Manutencao.prototype.getDescricao = function () {
        return this.Descricao;
    };
    Manutencao.prototype.getTipo = function () {
        return this.Tipo;
    };
    Manutencao.prototype.getFuncionario = function () {
        return this.Funcionario;
    };
    Manutencao.prototype.getData = function () {
        return this.Data;
    };
    Manutencao.prototype.getEquipamento = function () {
        return this.Equipamento;
    };
    Manutencao.prototype.getQRCode = function () {
        return this.QRCode;
    };
    return Manutencao;
}());
exports.Manutencao = Manutencao;
var ManutencaoSchema = new Mongoose.Schema({
    Id: Number,
    Descricao: String,
    Tipo: String,
    Funcionario: String,
    Data: Date,
    Equipamento: String,
    QRCode: String
});
exports.Model = Mongoose.model("Manutencao", ManutencaoSchema);
