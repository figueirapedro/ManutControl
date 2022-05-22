import * as Mongoose from "mongoose";
import { Cargo } from "./cargo";
import { validarEmail } from "../controller/loginController";

export function validarCPF(value: string) {
    if (typeof value !== 'string') {
        return false;
    }

    value = value.replace(/[^\d]+/g, '');

    if (value.length !== 11 || !!value.match(/(\d)\1{10}/)) {
        return false;
    }

    const values = value.split('').map(el => +el);
    const rest = (count) => (values.slice(0, count - 12).reduce((soma, el, index) => (soma + el * (count - index)), 0) * 10) % 11 % 10;

    return rest(10) === values[9] && rest(11) === values[10];
}

export class Funcionario {

    Id: String;
    Email: String;
    CPF: String;
    Nome: String;
    Cargo: Cargo;
    Disponibilidade: String;
    Data: Date;
    Senha: String;

    getId() {
        return this.Id;
    }

    getNome() {
        return this.Nome;
    }

    getCargo() {
        return this.Cargo;
    }

    getDisponibilidade() {
        return this.Disponibilidade;
    }

    getData() {
        return this.Data;
    }

    getCPF() {
        return this.CPF;
    }

    getSenha() {
        return this.Senha;
    }

    getEmail() {
        return this.Email;
    }

    setEmail(Email) {
        this.Email = validarEmail(Email) ? Email : undefined;
    }

    setSenha(Senha) {
        this.Senha = Senha;
    }

    setCPF(CPF) {
        this.CPF = validarCPF(CPF) ? CPF : undefined;
    }

    setId(Id) {
        this.Id = Id;
    }

    setNome(Nome) {
        this.Nome = Nome;
    }

    setCargo(Cargo) {
        this.Cargo = Cargo;
    }

    setDisponibilidade(Disponibilidade) {
        this.Disponibilidade = Disponibilidade;
    }

    setData(Data) {
        this.Data = Data;
    }
}

const FuncionarioSchema = new Mongoose.Schema({
    CPF: String,
    Email: String,
    Nome: String,
    Cargo: String,
    Disponibilidade: String,
    Data: Date,
    Senha: String
})

export const Model = Mongoose.model("Funcionario", FuncionarioSchema);

const FuncionarioSchemaTest = new Mongoose.Schema({
    CPF: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Nome: {
        type: String,
        required: true
    },
    Cargo: {
        type: String,
        required: true
    },
    Disponibilidade: {
        type: String,
        required: true
    },
    Data: {
        type: Date,
        required: true
    },
    Senha: {
        type: String,
        required: true
    },
})

//export const ModelTest = Mongoose.model("Funcionario", FuncionarioSchemaTest);