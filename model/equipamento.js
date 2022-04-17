"use strict";
exports.__esModule = true;
exports.Equipamento = void 0;
var Equipamento = /** @class */ (function () {
    function Equipamento(id, Descricao, dataEntrada, Tag, Status, Pecas, Local, Criticidade, QRCode) {
        this.id = id;
        this.Descricao = Descricao;
        this.dataEntrada = dataEntrada;
        this.Tag = Tag;
        this.Status = Status;
        this.Pecas = Pecas;
        this.Local = Local;
        this.Criticidade = Criticidade;
        this.QRCode = QRCode;
    }
    Equipamento.prototype.setId = function (id) {
        this.id = id;
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
        return this.id;
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
