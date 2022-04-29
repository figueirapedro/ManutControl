import { Model } from "../model/setor";

// CRUD para Setor

export async function inserirSetor(req, res) {
    const setor = new Model(req.body);

    try {
        await setor.save();
        res.send(setor);
    } catch (error) {
        res.status(500).send(error);
    }
};

export async function listarSetor(req, res) {
    const setor = await Model.find({});

    try {
        res.send(setor);
    } catch (error) {
        res.status(500).send(error);
    }
};

export async function alterarSetor(req, res) {
    try {
        const setor = await Model.findOneAndUpdate({ Id: req.params.id }, req.body);
        await setor.save();
        res.send(setor);
    } catch (error) {
        res.status(500).send(error);
    }
};

export async function removerSetor(req, res) {
    try {
        const setor = await Model.findOneAndDelete({ Id: req.params.id });

        if (!setor) res.status(404).send("No item found");
        res.status(200).send();
    } catch (error) {
        res.status(500).send(error);
    }
};

  // Fim CRUD de Setor