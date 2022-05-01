import * as Mongoose from "mongoose";
import { TipoManuntecao } from "./tipoManutencao";
import { Funcionario } from "./funcionario";
import { Equipamento } from "./equipamento";
import { QRCode } from "./qrcode";

export class Manutencao {

    Id: String;
    Descricao: String;
    Tipo: TipoManuntecao;
    Funcionario: Funcionario;
    Data: Date;
    Equipamento: Equipamento;
    QRCode: QRCode;

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

const ManutencaoSchema = new Mongoose.Schema({
    Descricao: String,
    Tipo: String,
    Funcionario: String,
    Data: Date,
    Equipamento: String,
    QRCode: String,
})

export const Model = Mongoose.model("Manutencao", ManutencaoSchema);