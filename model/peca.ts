import * as Mongoose from "mongoose";

export class Peca {

    Id: String;
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
    Descricao: String,
    Quantidade: Number,
    QuantidadeMinima: Number,
    Custo: String,
    DataEntrada: Date,
    DataSaida: Date,
})

export const Model = Mongoose.model("Peca", PecaSchema);

//Schema com validacao para Testes

const PecaSchemaTest = new Mongoose.Schema({
    Descricao: {
        type: String,
        required: true

    },
    Quantidade: {
        type: Number,
        required: true

    },
    QuantidadeMinima: {
        type: Number,
        required: true

    },
    Custo: {
        type: String,
        required: true

    },
    DataEntrada: {
        type: Date,
        required: true

    },
    DataSaida: Date,
})

//export const ModelTest = Mongoose.model("Peca", PecaSchemaTest);