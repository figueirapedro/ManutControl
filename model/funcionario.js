"use strict";
exports.__esModule = true;
exports.Model = exports.Funcionario = void 0;
var Mongoose = require("mongoose");
var Funcionario = /** @class */ (function () {
    function Funcionario() {
    }
    Funcionario.prototype.getId = function () {
        return this.Id;
    };
    Funcionario.prototype.getNome = function () {
        return this.Nome;
    };
    Funcionario.prototype.getCargo = function () {
        return this.Cargo;
    };
    Funcionario.prototype.getDisponibilidade = function () {
        return this.Disponibilidade;
    };
    Funcionario.prototype.getData = function () {
        return this.Data;
    };
    Funcionario.prototype.getCPF = function () {
        return this.CPF;
    };
    Funcionario.prototype.setCPF = function (CPF) {
        this.CPF = CPF;
    };
    Funcionario.prototype.setId = function (Id) {
        this.Id = Id;
    };
    Funcionario.prototype.setNome = function (Nome) {
        this.Nome = Nome;
    };
    Funcionario.prototype.setCargo = function (Cargo) {
        this.Cargo = Cargo;
    };
    Funcionario.prototype.setDisponibilidade = function (Disponibilidade) {
        this.Disponibilidade = Disponibilidade;
    };
    Funcionario.prototype.setData = function (Data) {
        this.Data = Data;
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
var FuncionarioSchema = new Mongoose.Schema({
    CPF: Number,
    Nome: String,
    Cargo: String,
    Disponibilidade: String,
    Data: Date,
    Senha: String
});
exports.Model = Mongoose.model("Funcionario", FuncionarioSchema);
