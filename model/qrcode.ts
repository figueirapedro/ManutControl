import * as Mongoose from "mongoose";

export class QRCode {
    Id:Number;
    Code:String;
    dataCriacao:Date;
    dataAtualizacao:Date;

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

const QRCodechema = new Mongoose.Schema({ 
    Id:Number,
    Code:String,
    dataCriacao:Date,
    dataAtualizacao:Date,
 })

export const Model = Mongoose.model("QRCode", QRCodechema);