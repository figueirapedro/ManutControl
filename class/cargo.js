class Cargo {
    Id;
    Descricao;

    constructor (   Id, Descricao   ) {
        this.Id = Id;
        this.Descricao = Descricao;
    }

    getId () {
        return this.Id;
    }
    getDescricao () {
        return this.Descricao;
    }

    setId (Id) {
        this.Id = Id;
    }

    setDescricao (Descricao) {
        this.Descricao = Descricao;
    }

}