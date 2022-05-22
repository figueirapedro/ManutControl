import { Model } from "../model/manutencao";
import { consultaQRCodePorCodigo } from "./qrcodeController";
import { buscaFuncionarioPorId } from "./funcionarioController";

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
        const manutencao = await Model.findByIdAndUpdate(req.params.id, req.body);

        await manutencao.save();
        res.send(manutencao);
    } catch (error) {
        res.status(500).send(error);
    }
};

export async function removerManutencao(req, res) {
    try {
        const manutencao = await Model.findByIdAndDelete(req.params.id);

        if (!manutencao) res.status(404).send("No item found");
        res.status(200).send();
    } catch (error) {
        res.status(500).send(error);
    }
};

export async function inserirManutencaoValidacao(req, res) {

    const manutencao = new Model(req.body);

    try {
        if (!consultaQRCodePorCodigo(manutencao.QRCode.Codigo)) throw new Error("QRCode não existe")
        if (!buscaFuncionarioPorId(manutencao.Funcionario.Id)) throw new Error("Funcionário não existe")

        await manutencao.save();
        res.send(manutencao);
    } catch (error) {
        res.status(500).send(error);
    }
};