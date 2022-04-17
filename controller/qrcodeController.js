"use strict";
exports.__esModule = true;
exports.removerQrcode = exports.alterarQrcode = exports.inserirQrcode = exports.listarQrcode = exports.consultaCodigo = exports.toFile = exports.toDataURL = exports.toString = exports.testeGoogle = void 0;
var Filesystem = require("fs");
var QRCode = require("qrcode");
// Criar um QR Code aleatório para teste, direcionando para o Google
function testeGoogle(req, res) {
    QRCode.toString("www.google.com", function (err, url) {
        res.send(url);
    });
}
exports.testeGoogle = testeGoogle;
// Cria um QR Code em String com base no que é enviado na requisição
function toString(req, res) {
    QRCode.toString(req.body.texto, function (err, url) {
        res.send(url);
    });
}
exports.toString = toString;
// Cria um QR Code em DataURL com base no que é enviado na requisição
function toDataURL(req, res) {
    QRCode.toDataURL(req.body.texto, function (err, url) {
        res.send(url);
    });
}
exports.toDataURL = toDataURL;
// Cria um QR Code em PNG e salva com base no que é enviado na requisição (TESTE)
function toFile(req, res) {
    QRCode.toFile(req.body.local, req.body.texto, function (err, url) {
        res.send(url);
    });
}
exports.toFile = toFile;
// Retorna representação do código de QR Code informado
function consultaCodigo(req, res) {
    QRCode.toDataURL(req.body.codigo, function (err, url) {
        res.send(url);
    });
}
exports.consultaCodigo = consultaCodigo;
// CRUD para QRCode
function listarQrcode(req, res) {
    res.send("QRCode cadastrado com sucesso!\n" + JSON.stringify(req.body));
}
exports.listarQrcode = listarQrcode;
function inserirQrcode(req, res) {
    Filesystem.readFile("../assets/mock/qrcode.json", "utf8", function (err, data) {
        if (err) {
            console.error(err);
            return;
        }
        res.send(data);
    });
}
exports.inserirQrcode = inserirQrcode;
function alterarQrcode(req, res) {
    res.send("QRCode de ID " + req.body.Id + " foi alterado com sucesso!\n" + JSON.stringify(req.body));
}
exports.alterarQrcode = alterarQrcode;
function removerQrcode(req, res) {
    res.send("QRCode de ID " + req.body.Id + " foi removido com sucesso!\n" + JSON.stringify(req.body));
}
exports.removerQrcode = removerQrcode;
// Fim CRUD de QRCode
