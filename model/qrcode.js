"use strict";
exports.__esModule = true;
exports.Model = exports.QRCode = void 0;
var Mongoose = require("mongoose");
var QRCode = /** @class */ (function () {
    function QRCode() {
    }
    QRCode.prototype.getId = function () {
        return this.Id;
    };
    QRCode.prototype.getCode = function () {
        return this.Code;
    };
    QRCode.prototype.getdataCriacao = function () {
        return this.dataCriacao;
    };
    QRCode.prototype.getdataAtualizacao = function () {
        return this.dataAtualizacao;
    };
    QRCode.prototype.setId = function (Id) {
        this.Id = Id;
    };
    QRCode.prototype.setCode = function (Code) {
        this.Code = Code;
    };
    QRCode.prototype.setdataCriacao = function (dataCriacao) {
        this.dataCriacao = dataCriacao;
    };
    QRCode.prototype.setdataAtualizacao = function (dataAtualizacao) {
        this.dataAtualizacao = dataAtualizacao;
    };
    return QRCode;
}());
exports.QRCode = QRCode;
var QRCodechema = new Mongoose.Schema({
    Id: Number,
    Code: String,
    dataCriacao: Date,
    dataAtualizacao: Date
});
exports.Model = Mongoose.model("QRCode", QRCodechema);
