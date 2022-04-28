import { Criticidade } from './criticidade';
import { Peca } from "./peca";
import * as Mongoose from "mongoose";

export class Equipamento {

    id;
    Descricao;
    dataEntrada;
    Tag;
    Status;
    Pecas: Peca;
    Local;
    Criticidade: Criticidade;
    QRCode;

    constructor(id, Descricao, dataEntrada, Tag, Status, Pecas, Local, Criticidade, QRCode) {
        this.id = id;
        this.Descricao = Descricao;
        this.dataEntrada = dataEntrada;
        this.Tag = Tag;
        this.Status = Status;
        this.Pecas = Pecas;
        this.Local = Local;
        this.Criticidade = Criticidade;
        this.QRCode = QRCode;
    }

    setId(id) {
        this.id = id;
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
        return this.id;
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
const EquipamentoSchema = new Mongoose.Schema({ Equipamento });

export const Model = Mongoose.model("Cargo", EquipamentoSchema);