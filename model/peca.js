"use strict";
exports.__esModule = true;
exports.Peca = void 0;
var Peca = /** @class */ (function () {
    function Peca(Id, Descricao, Quantidade, QuantidadeMinima, Custo, DataEntrada) {
        this.Id = Id;
        this.Descricao = Descricao;
        this.Quantidade = Quantidade;
        this.QuantidadeMinima = QuantidadeMinima;
        this.Custo = Custo;
        this.DataEntrada = DataEntrada;
    }
    ;
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
;
