import * as Filesystem from "fs";

// CRUD para Setor

export function inserirSetor(req, res) {
    res.send("Setor cadastrado com sucesso!\n" + JSON.stringify(req.body))
};

export function listarSetor(req, res) {
    Filesystem.readFile("../assets/mock/setor.json", "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(data)
    })
};

export function alterarSetor(req, res) {
    res.send("Setor de ID " + req.body.Id + " foi alterado com sucesso!\n" + JSON.stringify(req.body))
};

export function removerSetor(req, res) {
    res.send("Setor de ID " + req.body.Id + " foi removido com sucesso!\n" + JSON.stringify(req.body))
};

  // Fim CRUD de Setor