import * as Mongoose from "mongoose";
import { Cargo } from "./cargo";

export class Funcionario {

    Id: String;
    CPF: Number;
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

    setCPF(CPF) {
        this.CPF = CPF;
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
    CPF: Number,
    Nome: String,
    Cargo: String,
    Disponibilidade: String,
    Data: Date,
    Senha: String,
})

export const Model = Mongoose.model("Funcionario", FuncionarioSchema);