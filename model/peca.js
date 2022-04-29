"use strict";
exports.__esModule = true;
exports.Model = exports.Peca = void 0;
var Mongoose = require("mongoose");
var Peca = /** @class */ (function () {
    function Peca() {
    }
    Peca.prototype.getId = function () {
        return this.Id;
    };
    Peca.prototype.getDescricao = function () {
        return this.Descricao;
    };
    Peca.prototype.getQuantidade = function () {
        return this.Quantidade;
    };
    Peca.prototype.getQuantidadeMinima = function () {
        return this.QuantidadeMinima;
    };
    Peca.prototype.getCusto = function () {
        return this.Custo;
    };
    Peca.prototype.getDataEntrada = function () {
        return this.DataEntrada;
    };
    Peca.prototype.getDataSaida = function () {
        return this.DataSaida;
    };
    Peca.prototype.setId = function (Id) {
        this.Id = Id;
    };
    Peca.prototype.setDescricao = function (Descricao) {
        this.Descricao = Descricao;
    };
    Peca.prototype.setQuantidade = function (Quantidade) {
        this.Quantidade = Quantidade;
    };
    Peca.prototype.setQuantidadeMinima = function (QuantidadeMinima) {
        this.QuantidadeMinima = QuantidadeMinima;
    };
    Peca.prototype.setCusto = function (Custo) {
        this.Custo = Custo;
    };
    Peca.prototype.setDataEntrada = function (DataEntrada) {
        this.DataEntrada = DataEntrada;
    };
    Peca.prototype.setDataSaida = function (DataSaida) {
        this.DataSaida = DataSaida;
    };
    return Peca;
}());
exports.Peca = Peca;
var PecaSchema = new Mongoose.Schema({
    Id: Number,
    Descricao: String,
    Quantidade: Number,
    QuantidadeMinima: Number,
    Custo: String,
    DataEntrada: Date,
    DataSaida: Date
});
exports.Model = Mongoose.model("Peca", PecaSchema);
