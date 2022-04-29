import { Model } from "../model/equipamento";

// CRUD para Equipamento

export async function inserirEquipamento(req, res) {
    const equipamentos = new Model(req.body);

    try {
        await equipamentos.save();
        res.send(equipamentos);
    } catch (error) {
        res.status(500).send(error);
    }
};

export async function listarEquipamento(req, res) {
    const equipamentos = await Model.find({});

    try {
        res.send(equipamentos);
    } catch (error) {
        res.status(500).send(error);
    }
};

export async function alterarEquipamento(req, res) {
    try {
        const equipamentos = await Model.findOneAndUpdate({ Id: req.params.id }, req.body);
        await equipamentos.save();
        res.send(equipamentos);
    } catch (error) {
        res.status(500).send(error);
    }
};

export async function removerEquipamento(req, res) {
    try {
        const equipamentos = await Model.findOneAndDelete({ Id: req.params.id });

        if (!equipamentos) res.status(404).send("No item found");
        res.status(200).send();
    } catch (error) {
        res.status(500).send(error);
    }
}

  // Fim CRUD de Equipamento