"use strict";
exports.__esModule = true;
exports.Model = exports.Funcionario = exports.validarCPF = void 0;
var Mongoose = require("mongoose");
var loginController_1 = require("../controller/loginController");
function validarCPF(value) {
    if (typeof value !== 'string') {
        return false;
    }
    value = value.replace(/[^\d]+/g, '');
    if (value.length !== 11 || !!value.match(/(\d)\1{10}/)) {
        return false;
    }
    var values = value.split('').map(function (el) { return +el; });
    var rest = function (count) { return (values.slice(0, count - 12).reduce(function (soma, el, index) { return (soma + el * (count - index)); }, 0) * 10) % 11 % 10; };
    return rest(10) === values[9] && rest(11) === values[10];
}
exports.validarCPF = validarCPF;
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
    Funcionario.prototype.getSenha = function () {
        return this.Senha;
    };
    Funcionario.prototype.getEmail = function () {
        return this.Email;
    };
    Funcionario.prototype.setEmail = function (Email) {
        this.Email = (0, loginController_1.validarEmail)(Email) ? Email : undefined;
    };
    Funcionario.prototype.setSenha = function (Senha) {
        this.Senha = Senha;
    };
    Funcionario.prototype.setCPF = function (CPF) {
        this.CPF = validarCPF(CPF) ? CPF : undefined;
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
    CPF: String,
    Email: String,
    Nome: String,
    Cargo: String,
    Disponibilidade: String,
    Data: Date,
    Senha: String
});
exports.Model = Mongoose.model("Funcionario", FuncionarioSchema);
