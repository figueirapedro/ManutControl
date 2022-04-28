import * as Mongoose from "mongoose";

export class Funcionario {

    Id;
    Nome;
    Cargo;
    Disponibilidade;
    Data;
    Senha;

    constructor(Id, Nome, Cargo, Disponibilidade, Data) {
        this.Id = Id;
        this.Nome = Nome;
        this.Cargo = Cargo;
        this.Disponibilidade = Disponibilidade;
        this.Data = Data;
    }

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

const FuncionarioSchema = new Mongoose.Schema({ Funcionario })

export const Model = Mongoose.model("Cargo", FuncionarioSchema);