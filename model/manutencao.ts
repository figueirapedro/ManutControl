import * as Mongoose from "mongoose";

export class Manutencao {

    Id;
    Descricao;
    Tipo;
    Funcionario;
    Data;
    Equipamento;
    QRCode;

    constructor(Id, Descricao, Tipo, Funcionario, Data, Equipamento, QRCode) {
        this.Id = Id;
        this.Descricao = Descricao;
        this.Tipo = Tipo;
        this.Funcionario = Funcionario;
        this.Data = Data;
        this.Equipamento = Equipamento;
        this.QRCode = QRCode;
    }

    setId(Id) {
        this.Id = Id;
    }

    setDescricao(Descricao) {
        this.Descricao = Descricao;
    }

    setTipo(Tipo) {
        this.Tipo = Tipo;
    }

    setFuncionario(Funcionario) {
        this.Funcionario = Funcionario;
    }

    setData(Data) {
        this.Data = Data;
    }

    setEquipamento(Equipamento) {
        this.Equipamento = Equipamento;
    }

    setQRCode(QRCode) {
        this.QRCode = QRCode;
    }

    getId() {
        return this.Id;
    }

    getDescricao() {
        return this.Descricao;
    }

    getTipo() {
        return this.Tipo;
    }

    getFuncionario() {
        return this.Funcionario;
    }

    getData() {
        return this.Data;
    }

    getEquipamento() {
        return this.Equipamento;
    }

    getQRCode() {
        return this.QRCode;
    }
}

const ManutencaoSchema = new Mongoose.Schema({ Manutencao })

export const Model = Mongoose.model("Manutencao", ManutencaoSchema);