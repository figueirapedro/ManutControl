import * as JWT from "jsonwebtoken";
import * as dotenv from "dotenv";
import * as funcionarioController from "./funcionarioController";
import * as Bcrypt from "bcrypt";

export function hashearTexto(texto: string) {
    if (typeof texto == "undefined") return;

    return Bcrypt.hashSync(texto, 10);
}

export function validarEmail(email: string) {
    const regexpEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    return regexpEmail.test(email);
}

dotenv.config({ path: "../.env" });


// Login
export async function loginAutenticar(req, res) {
    const senha = req.body.Senha;
    const email = req.body.Email;

    const funcionario = await funcionarioController.buscaFuncionarioPorEmail(email);

    if (Bcrypt.compareSync(senha, funcionario.Senha))
        res.status(200).send({ token: JWT.sign({ userId: funcionario._id }, process.env.secret, { expiresIn: 1800 }), userId: funcionario._id });
    else
        res.status(401).send("Erro ao Autenticar, Email ou Senha incorretos!")
}

export function autenticarJWT(req, res, next) {
    const token = req.headers['x-access-token'];

    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

    JWT.verify(token, process.env.secret, function (err, decoded) {
        if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });

        // se tudo estiver ok, salva no request para uso posterior
        req.userId = decoded.id;
        next();
    });
}