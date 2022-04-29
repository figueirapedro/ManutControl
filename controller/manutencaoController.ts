import { Model } from "../model/manutencao";

export async function listarManutencao(req, res) {
    const manutencao = await Model.find({});

    try {
        res.send(manutencao);
    } catch (error) {
        res.status(500).send(error);
    }
};
export async function inserirManutencao(req, res) {

    const manutencao = new Model(req.body);

    try {
        await manutencao.save();
        res.send(manutencao);
    } catch (error) {
        res.status(500).send(error);
    }
};

export async function alterarManutencao(req, res) {
    try {
        const manutencao = await Model.findOneAndUpdate({ Id: req.params.id }, req.body);
        await manutencao.save();
        res.send(manutencao);
    } catch (error) {
        res.status(500).send(error);
    }
};

export async function removerManutencao(req, res) {
    try {
        const manutencao = await Model.findOneAndDelete({ Id: req.params.id });

        if (!manutencao) res.status(404).send("No item found");
        res.status(200).send();
    } catch (error) {
        res.status(500).send(error);
    }
};