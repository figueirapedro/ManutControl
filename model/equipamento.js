"use strict";
exports.__esModule = true;
exports.Model = exports.Equipamento = void 0;
var Mongoose = require("mongoose");
var Equipamento = /** @class */ (function () {
    function Equipamento() {
    }
    Equipamento.prototype.setId = function (id) {
        this.Id = id;
    };
    Equipamento.prototype.setDescricao = function (Descricao) {
        this.Descricao = Descricao;
    };
    Equipamento.prototype.setDataEntrada = function (dataEntrada) {
        this.dataEntrada = dataEntrada;
    };
    Equipamento.prototype.setTag = function (Tag) {
        this.Tag = Tag;
    };
    Equipamento.prototype.setStatus = function (Status) {
        this.Status = Status;
    };
    Equipamento.prototype.setPecas = function (Pecas) {
        this.Pecas = Pecas;
    };
    Equipamento.prototype.setLocal = function (Local) {
        this.Local = Local;
    };
    Equipamento.prototype.setCriticidade = function (Criticidade) {
        this.Criticidade = Criticidade;
    };
    Equipamento.prototype.setQRcode = function (QRCode) {
        this.QRCode = QRCode;
    };
    Equipamento.prototype.getQRCode = function () {
        return this.QRCode;
    };
    Equipamento.prototype.getId = function () {
        return this.Id;
    };
    Equipamento.prototype.getDescricao = function () {
        return this.Descricao;
    };
    Equipamento.prototype.getDataEntrada = function () {
        return this.dataEntrada;
    };
    Equipamento.prototype.getTag = function () {
        return this.Tag;
    };
    Equipamento.prototype.getStatus = function () {
        return this.Status;
    };
    Equipamento.prototype.getPecas = function () {
        return this.Pecas;
    };
    Equipamento.prototype.getLocal = function () {
        return this.Local;
    };
    Equipamento.prototype.getCriticidade = function () {
        return this.Criticidade;
    };
    return Equipamento;
}());
exports.Equipamento = Equipamento;
var EquipamentoSchema = new Mongoose.Schema({
    Id: Number,
    Descricao: String,
    dataEntrada: Date,
    Tag: String,
    Status: String,
    Pecas: String,
    Local: String,
    Criticidade: String,
    QRCode: String
});
exports.Model = Mongoose.model("Equipamento", EquipamentoSchema);
