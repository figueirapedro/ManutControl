import { validarCPF, Model, Funcionario } from "../model/funcionario";
import { hashearTexto } from "./loginController";

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
        if (typeof funcionarios.CPF != "undefined" && !validarCPF(funcionarios.CPF)) 
            throw new Error("CPF Inválido!");

        const consultaCPF = await buscaFuncionarioPorCPF(funcionarios.CPF);
        const consultaEmail = await buscaFuncionarioPorEmail(funcionarios.Email);

        if (consultaCPF || consultaEmail) 
            throw new Error("Funcionario já cadastrado!");

        funcionarios.CPF = hashearTexto(funcionarios.CPF);
        funcionarios.Senha = hashearTexto(funcionarios.Senha);

        await funcionarios.save();
        res.send(funcionarios);
    } catch (error) {
        res.status(500).send(error);
    }
};

export async function alterarFuncionario(req, res) {
    try {
        const funcionarios = await Model.findByIdAndUpdate(req.params.id, req.body);

        if (typeof funcionarios.CPF == "undefined" && !validarCPF(funcionarios.CPF)) throw new Error("CPF Inválido!");

        await funcionarios.save();
        res.send(funcionarios);
    } catch (error) {
        res.status(500).send(error);
    }
};

export async function removerFuncionario(req, res) {
    try {
        const funcionarios = await Model.findByIdAndDelete(req.params.id);

        if (!funcionarios) res.status(404).send("No item found");
        res.status(200).send();
    } catch (error) {
        res.status(500).send(error);
    }
};

export async function buscaFuncionarioPorEmail(email: string) {
    if ( email == undefined ) return false;

    const funcionario = await Model.find({ Email: email });

    return funcionario[0] == undefined ? false : funcionario[0];
};

export async function buscaFuncionarioPorCPF(cpf: string) {
    if ( cpf == undefined ) return false;

    const funcionario = await Model.find({ CPF: cpf });

    return funcionario[0] == undefined ? false : funcionario[0];
};