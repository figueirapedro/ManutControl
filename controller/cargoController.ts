import * as Filesystem from "fs";

// CRUD para Cargo
export function inserirCargo(req, res) {
    res.send("Cargo cadastrado com sucesso!\n" + JSON.stringify(req.body))
};

export function listarCargo(req, res) {
    Filesystem.readFile("../assets/mock/cargo.json", "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(data)
    })
};

export function alterarCargo(req, res) {
    res.send("Cargo de ID " + req.body.Id + " foi alterado com sucesso!\n" + JSON.stringify(req.body))
};

export function removerCargo(req, res) {
    res.send("Cargo de ID " + req.body.Id + " foi removido com sucesso!\n" + JSON.stringify(req.body))
};

    // Fim CRUD de Cargo
