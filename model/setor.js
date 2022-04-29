"use strict";
exports.__esModule = true;
exports.Model = exports.Setor = void 0;
var Mongoose = require("mongoose");
var Setor = /** @class */ (function () {
    function Setor(Id, Nome) {
        this.Id = Id;
        this.Nome = Nome;
    }
    Setor.prototype.getId = function () {
        return this.Id;
    };
    Setor.prototype.getNome = function () {
        return this.Nome;
    };
    Setor.prototype.setId = function (Id) {
        this.Id = Id;
    };
    Setor.prototype.setNome = function (Nome) {
        this.Nome = Nome;
    };
    return Setor;
}());
exports.Setor = Setor;
var SetorSchema = new Mongoose.Schema({
    Id: Number,
    Nome: String
});
exports.Model = Mongoose.model("Setor", SetorSchema);
