import * as Mongoose from "mongoose";

export class Setor {
    Id:Number;
    Nome:String;

    constructor(Id, Nome) {
        this.Id = Id;
        this.Nome = Nome;
    }

    getId() {
        return this.Id;
    }
    getNome() {
        return this.Nome;
    }

    setId(Id) {
        this.Id = Id;
    }

    setNome(Nome) {
        this.Nome = Nome;
    }

}

const SetorSchema = new Mongoose.Schema({ 
    Id:Number,
    Nome:String,
 })

export const Model = Mongoose.model("Setor", SetorSchema);