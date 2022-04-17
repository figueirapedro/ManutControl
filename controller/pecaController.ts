import * as Filesystem from "fs";

export function listarPeca(req, res) {
    res.send("Peça cadastrada com sucesso!\n" + JSON.stringify(req.body))
};
export function inserirPeca(req, res) {
    Filesystem.readFile('../assets/mock/peca.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(data)
    })
};

export function alterarPeca(req, res) {
    res.send("Peça de ID " + req.body.Id + " foi alterada com sucesso!\n" + JSON.stringify(req.body))
};

export function removerPeca(req, res) {
    res.send("Peça de ID " + req.body.Id + " foi removida com sucesso!\n" + JSON.stringify(req.body))
};