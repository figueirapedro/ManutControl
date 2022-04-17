export class Peca {

    Id;
    Descricao;
    Quantidade;
    QuantidadeMinima;
    Custo;
    DataEntrada;
    DataSaida;

    constructor(Id, Descricao, Quantidade, QuantidadeMinima, Custo, DataEntrada) {
        this.Id = Id;
        this.Descricao = Descricao;
        this.Quantidade = Quantidade;
        this.QuantidadeMinima = QuantidadeMinima;
        this.Custo = Custo;
        this.DataEntrada = DataEntrada;
    };

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
};