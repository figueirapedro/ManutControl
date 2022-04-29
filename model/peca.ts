import * as Mongoose from "mongoose";

export class Peca {

    Id: Number;
    Descricao: String;
    Quantidade: Number;
    QuantidadeMinima: Number;
    Custo: String;
    DataEntrada: Date;
    DataSaida: Date;

    getId() {
        return this.Id;
    }
    getDescricao() {
        return this.Descricao;
    }
    getQuantidade() {
        return this.Quantidade;
    }
    getQuantidadeMinima() {
        return this.QuantidadeMinima;
    }
    getCusto() {
        return this.Custo;
    }
    getDataEntrada() {
        return this.DataEntrada;
    }
    getDataSaida() {
        return this.DataSaida;
    }

    setId(Id) {
        this.Id = Id;
    }

    setDescricao(Descricao) {
        this.Descricao = Descricao;
    }

    setQuantidade(Quantidade) {
        this.Quantidade = Quantidade;
    }

    setQuantidadeMinima(QuantidadeMinima) {
        this.QuantidadeMinima = QuantidadeMinima;
    }

    setCusto(Custo) {
        this.Custo = Custo;
    }

    setDataEntrada(DataEntrada) {
        this.DataEntrada = DataEntrada;
    }

    setDataSaida(DataSaida) {
        this.DataSaida = DataSaida;
    }
}

const PecaSchema = new Mongoose.Schema({
    Id: Number,
    Descricao: String,
    Quantidade: Number,
    QuantidadeMinima: Number,
    Custo: String,
    DataEntrada: Date,
    DataSaida: Date,
})

export const Model = Mongoose.model("Peca", PecaSchema);