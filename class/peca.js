class Peca {

    id;
    descricao;
    quantidade;
    quantidadeMinima;
    custo;
    dataEntrada;
    dataSaida;

    constructor(id, descricao, quantidade, quantidadeMinima, custo, dataEntrada) {
        this.id = id;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.quantidadeMinima = quantidadeMinima;
        this.custo = custo;
        this.dataEntrada = dataEntrada;
    };

    getId() {
        return this.id;
    }
    getDescricao() {
        return this.descricao;
    }
    getQuantidade() {
        return this.quantidade;
    }
    getQuantidadeMinima() {
        return this.quantidadeMinima;
    }
    getCusto() {
        return this.custo;
    }
    getDataEntrada() {
        return this.dataEntrada;
    }
    getDataSaida() {
        return this.dataSaida;
    }

    setId(id) {
        this.id = id;
    }

    setDescricao(descricao) {
        this.descricao = descricao;
    }

    setQuantidade(quantidade) {
        this.quantidade = quantidade;
    }

    setQuantidadeMinima(quantidadeMinima) {
        this.quantidadeMinima = quantidadeMinima;
    }

    setCusto(custo) {
        this.custo = custo;
    }

    setDataEntrada(dataEntrada) {
        this.dataEntrada = dataEntrada;
    }

    setDataSaida(dataSaida) {
        this.dataSaida = dataSaida;
    }
};