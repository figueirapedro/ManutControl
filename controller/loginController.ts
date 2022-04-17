import * as AES from "crypto-js/aes";

const key:String = "j*xNBXZVQ*jqFih*@!KjG32o";

// Login
export function loginAutenticar (req, res) {
    const senha = AES.encrypt(req.body.senha, key).toString();
    const login = req.body.login;
    req.body.cript = senha;

    res.send("Validando Login....\n\n" + JSON.stringify(req.body));
}

// Teste para Criptografar Senhas
export function loginEncrypt (req, res) {
    res.send(AES.encrypt(req.body.senha, key).toString());
}