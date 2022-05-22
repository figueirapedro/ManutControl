import { QRCode } from './qrcode';
import { Criticidade } from './criticidade';
import { Status } from './status';
import { Manutencao } from './manutencao';
import { Peca } from "./peca";
import * as Mongoose from "mongoose";

export class Equipamento {

    Id: String;
    Codigo: String;
    Descricao: String;
    dataEntrada: Date;
    Tag: String;
    Status: Status;
    Pecas: Peca;
    Local: String;
    Criticidade: Criticidade;
    QRCode: QRCode;
    Manutencao: Manutencao;

    setId(id) {
        this.Id = id;
    }

    setDescricao(Descricao) {
        this.Descricao = Descricao;
    }

    setDataEntrada(dataEntrada) {
        this.dataEntrada = dataEntrada;
    }

    setTag(Tag) {
        this.Tag = Tag;
    }

    setStatus(Status) {
        this.Status = Status;
    }

    setPecas(Pecas) {
        this.Pecas = Pecas;
    }

    setLocal(Local) {
        this.Local = Local;
    }

    setCriticidade(Criticidade) {
        this.Criticidade = Criticidade;
    }

    setQRcode(QRCode) {
        this.QRCode = QRCode;
    }

    setCodigo(Codigo) {
        this.Codigo = Codigo;
    }

    setManutencao(Manutencao) {
        this.Manutencao = Manutencao;
    }

    getManutencao() {
        return this.Manutencao;
    }

    getCodigo() {
        return this.Codigo;
    }

    getQRCode() {
        return this.QRCode;
    }

    getId() {
        return this.Id;
    }

    getDescricao() {
        return this.Descricao;
    }

    getDataEntrada() {
        return this.dataEntrada;
    }

    getTag() {
        return this.Tag;
    }

    getStatus() {
        return this.Status;
    }

    getPecas() {
        return this.Pecas;
    }

    getLocal() {
        return this.Local;
    }

    getCriticidade() {
        return this.Criticidade;
    }
}

const EquipamentoSchema = new Mongoose.Schema({
    Descricao: String,
    Codigo: String,
    dataEntrada: Date,
    Tag: String,
    Status: String,
    Pecas: String,
    Local: String,
    Criticidade: String,
    QRCode: String,
    Manutencao: String
});

export const Model = Mongoose.model("Equipamento", EquipamentoSchema);

const EquipamentoSchemaTest = new Mongoose.Schema({
    Descricao: {
        type: String,
        required: true
    },
    Codigo: {
        type: String,
        required: true
    },
    dataEntrada: {
        type: Date,
        required: true
    },
    Tag: {
        type: String,
        required: true
    },
    Status: {
        type: String,
        required: true
    },
    Pecas: {
        type: String,
        required: true
    },
    Local: {
        type: String,
        required: true
    },
    Criticidade: {
        type: String,
        required: true
    },
    QRCode: {
        type: String,
        required: true
    },
    Manutencao: String
});

//const ModelTest = Mongoose.model("Equipamento", EquipamentoSchemaTest);