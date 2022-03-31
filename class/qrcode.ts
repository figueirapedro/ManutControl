class QRCode {
    Id;
    Code;
    dataCriacao;
    dataAtualizacao;

    constructor(Id, Code, dataCriacao, dataAtualizacao) {
        this.Id = Id;
        this.Code = Code;
        this.dataCriacao = dataCriacao;
        this.dataAtualizacao = dataAtualizacao;
    }

    constructor(Id, Code, dataCriacao) {
        this.Id = Id;
        this.Code = Code;
        this.dataCriacao = dataCriacao;
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