import { QRCode } from './qrcode';
import { Criticidade } from './criticidade';
import { Status } from './status';
import { Peca } from "./peca";
import * as Mongoose from "mongoose";

export class Equipamento {

    Id: Number;
    Descricao: String;
    dataEntrada: Date;
    Tag: String;
    Status: Status;
    Pecas: Peca;
    Local: String;
    Criticidade: Criticidade;
    QRCode: QRCode;

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
    Id: Number,
    Descricao: String,
    dataEntrada: Date,
    Tag: String,
    Status: String,
    Pecas: String,
    Local: String,
    Criticidade: String,
    QRCode: String,
});

export const Model = Mongoose.model("Equipamento", EquipamentoSchema);