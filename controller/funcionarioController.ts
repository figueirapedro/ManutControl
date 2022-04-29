import { Model } from "../model/funcionario";

export async function listarFuncionario(req, res) {
    const funcionarios = await Model.find({});

    try {
        res.send(funcionarios);
    } catch (error) {
        res.status(500).send(error);
    }
};
export async function inserirFuncionario(req, res) {

    const funcionarios = new Model(req.body);

    try {
        await funcionarios.save();
        res.send(funcionarios);
    } catch (error) {
        res.status(500).send(error);
    }
};

export async function alterarFuncionario(req, res) {
    try {
        const funcionarios = await Model.findOneAndUpdate({ Id: req.params.id }, req.body);

        await funcionarios.save();
        res.send(funcionarios);
    } catch (error) {
        res.status(500).send(error);
    }
};

export async function removerFuncionario(req, res) {
    try {
        const funcionarios = await Model.findOneAndDelete({ Id: req.params.id });

        if (!funcionarios) res.status(404).send("No item found");
        res.status(200).send();
    } catch (error) {
        res.status(500).send(error);
    }
};