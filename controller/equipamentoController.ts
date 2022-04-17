import * as Filesystem from "fs";

// CRUD para Equipamento

export function inserirEquipamento(req, res) {
    res.send("equipamento cadastrado com sucesso!\n" + JSON.stringify(req.body))
};

export function listarEquipamento(req, res) {
    Filesystem.readFile(__dirname + '/assets/mock/equipamento.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(data)
    })
};

export function alterarEquipamento(req, res) {
    res.send("Equipamento de ID " + req.body.Id + " foi alterado com sucesso!\n" + JSON.stringify(req.body))
};

export function removerEquipamento(req, res) {
    res.send("Equipamento de ID " + req.body.Id + " foi removido com sucesso!\n" + JSON.stringify(req.body))
};

  // Fim CRUD de Equipamento