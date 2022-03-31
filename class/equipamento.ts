class Equipamento {

    id;
    descricao;
    dataEntrada;
    tag;
    status;
    pecas;
    local;
    criticidade;
    QRCode;

    constructor(id, descricao, dataEntrada, tag, status, pecas, local, criticidade, QRCode) {
        this.id = id;
        this.descricao = descricao;
        this.dataEntrada = dataEntrada;
        this.tag = tag;
        this.status = status;
        this.pecas = pecas;
        this.local = local;
        this.criticidade = criticidade;
        this.QRCode = QRCode;
    }

    constructor(id, descricao, dataEntrada, tag, status, pecas, local, criticidade) {
        this.id = id;
        this.descricao = descricao;
        this.dataEntrada = dataEntrada;
        this.tag = tag;
        this.status = status;
        this.pecas = pecas;
        this.local = local;
        this.criticidade = criticidade;
    }

    setId(id) {
        this.id = id;
    }

    setDescricao(descricao) {
        this.descricao = descricao;
    }

    setDataEntrada(dataEntrada) {
        this.dataEntrada = dataEntrada;
    }

    setTag(tag) {
        this.tag = tag;
    }

    setStatus(status) {
        this.status = status;
    }

    setPecas(pecas) {
        this.pecas = pecas;
    }

    setLocal(local) {
        this.local = local;
    }

    setCriticidade(criticidade) {
        this.criticidade = criticidade;
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
        return this.descricao;
    }

    getDataEntrada() {
        return this.dataEntrada;
    }

    getTag() {
        return this.tag;
    }

    getStatus() {
        return this.status;
    }

    getPecas() {
        return this.pecas;
    }

    getLocal() {
        return this.local;
    }

    getCriticidade() {
        return this.criticidade;
    }
}