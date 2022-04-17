"use strict";
exports.__esModule = true;
exports.loginEncrypt = exports.loginAutenticar = void 0;
var AES = require("crypto-js/aes");
var key = "j*xNBXZVQ*jqFih*@!KjG32o";
// Login
function loginAutenticar(req, res) {
    var senha = AES.encrypt(req.body.senha, key).toString();
    var login = req.body.login;
    req.body.cript = senha;
    res.send("Validando Login....\n\n" + JSON.stringify(req.body));
}
exports.loginAutenticar = loginAutenticar;
// Teste para Criptografar Senhas
function loginEncrypt(req, res) {
    res.send(AES.encrypt(req.body.senha, key).toString());
}
exports.loginEncrypt = loginEncrypt;
