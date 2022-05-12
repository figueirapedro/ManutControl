import * as Mongoose from "mongoose";

export class Cargo {
    Id: String;
    Descricao: String;

    constructor(Id, Descricao) {
        this.Id = Id;
        this.Descricao = Descricao;
    }

    getId() {
        return this.Id;
    }
    getDescricao() {
        return this.Descricao;
    }

    setId(Id) {
        this.Id = Id;
    }

    setDescricao(Descricao) {
        this.Descricao = Descricao;
    }

}

const CargoSchema = new Mongoose.Schema({
    Descricao: String
})

export const Model = Mongoose.model("Cargo", CargoSchema);