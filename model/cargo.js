"use strict";
exports.__esModule = true;
exports.Model = exports.Cargo = void 0;
var Mongoose = require("mongoose");
var Cargo = /** @class */ (function () {
    function Cargo(Id, Descricao) {
        this.Id = Id;
        this.Descricao = Descricao;
    }
    Cargo.prototype.getId = function () {
        return this.Id;
    };
    Cargo.prototype.getDescricao = function () {
        return this.Descricao;
    };
    Cargo.prototype.setId = function (Id) {
        this.Id = Id;
    };
    Cargo.prototype.setDescricao = function (Descricao) {
        this.Descricao = Descricao;
    };
    return Cargo;
}());
exports.Cargo = Cargo;
var CargoSchema = new Mongoose.Schema({
    Id: String,
    Descricao: String
});
exports.Model = Mongoose.model("Cargo", CargoSchema);
