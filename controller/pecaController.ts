import { Model } from "../model/peca";

export async function listarPeca(req, res) {
    const pecas = await Model.find({});

    try {
        res.send(pecas);
    } catch (error) {
        res.status(500).send(error);
    }
};
export async function inserirPeca(req, res) {
    const pecas = new Model(req.body);

    try {
        await pecas.save();
        res.send(pecas);
    } catch (error) {
        res.status(500).send(error);
    }
};

export async function alterarPeca(req, res) {
    try {
        const pecas = await Model.findOneAndUpdate({ Id: req.params.id }, req.body);
        await pecas.save();
        res.send(pecas);
    } catch (error) {
        res.status(500).send(error);
    }};

export async function removerPeca(req, res) {
    try {
        const pecas = await Model.findOneAndDelete({ Id: req.params.id });

        if (!pecas) res.status(404).send("No item found");
        res.status(200).send();
    } catch (error) {
        res.status(500).send(error);
    }};