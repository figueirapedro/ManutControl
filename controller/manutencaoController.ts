import * as Filesystem from "fs";

export function listarManutencao(req, res) {
    res.send("Manutenção cadastrada com sucesso!\n" + JSON.stringify(req.body))
};
export function inserirManutencao(req, res) {
    Filesystem.readFile("../assets/mock/manutencao.json", "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(data)
    })
};

export function alterarManutencao(req, res) {
    res.send("Manutenção de ID " + req.body.Id + " foi alterada com sucesso!\n" + JSON.stringify(req.body))
};

export function removerManutencao(req, res) {
    res.send("Manutenção de ID " + req.body.Id + " foi removida com sucesso!\n" + JSON.stringify(req.body))
};