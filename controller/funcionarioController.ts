import * as Filesystem from "fs";

export function listarFuncionario(req, res) {
    res.send("Funcionario cadastrado com sucesso!\n" + JSON.stringify(req.body))
};
export function inserirFuncionario(req, res) {
    Filesystem.readFile('../assets/mock/funcionario.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(data)
    })
};

export function alterarFuncionario(req, res) {
    res.send("Funcionario de ID " + req.body.Id + " foi alterado com sucesso!\n" + JSON.stringify(req.body))
};

export function removerFuncionario(req, res) {
    res.send("Funcionario de ID " + req.body.Id + " foi removido com sucesso!\n" + JSON.stringify(req.body))
};