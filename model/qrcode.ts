import * as Mongoose from "mongoose";

export class QRCode {
    Id;
    Code;
    dataCriacao;
    dataAtualizacao;

    constructor(Id, Code,) {
        this.Id = Id;
        this.Code = Code;

    }

    getId() {
        return this.Id;
    }

    getCode() {
        return this.Code;
    }

    getdataCriacao() {
        return this.dataCriacao;
    }

    getdataAtualizacao() {
        return this.dataAtualizacao;
    }

    setId(Id) {
        this.Id = Id;
    }

    setCode(Code) {
        this.Code = Code;
    }

    setdataCriacao(dataCriacao) {
        this.dataCriacao = dataCriacao;
    }

    setdataAtualizacao(dataAtualizacao) {
        this.dataAtualizacao = dataAtualizacao;
    }

}

const QRCodechema = new Mongoose.Schema({ QRCode })

export const Model = Mongoose.model("QRCode", QRCodechema);