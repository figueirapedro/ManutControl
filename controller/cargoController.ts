import { Model } from "../model/cargo";

// CRUD para Cargo
export async function inserirCargo(req, res) {
    const cargos = new Model(req.body);

    try {
        await cargos.save();
        res.send(cargos);
    } catch (error) {
        res.status(500).send(error);
    }
};

export async function listarCargo(req, res) {
    const cargos = await Model.find({});

    try {
        res.send(cargos);
    } catch (error) {
        res.status(500).send(error);
    }
};

export async function alterarCargo(req, res) {
    try {
        const cargos = await Model.findByIdAndUpdate(req.params.id, req.body);
        
        await cargos.save();
        res.send(cargos);
    } catch (error) {
        res.status(500).send(error);
    }
};

export async function removerCargo(req, res) {
    try {
        const cargos = await Model.findByIdAndDelete(req.params.id);

        if (!cargos) res.status(404).send("No item found");
        res.status(200).send();
    } catch (error) {
        res.status(500).send(error);
    }
};

    // Fim CRUD de Cargo

    //V0 para Teste

    export async function inserirCargoValidacao(req, res) {
        const cargos = new Model(req.body);

        try {
            if (!buscaSetorPorDescricao(cargos.Descricao)) throw new Error("Setor já existe");

            await cargos.save();
            res.send(cargos);
        } catch (error) {
            res.status(500).send(error);
        }
    };

    export async function buscaSetorPorDescricao(desc?) {
        if ( desc == undefined ) return false;
    
        const setor = await Model.find({ Descricao: desc });
    
        return setor[0] == undefined ? false : setor[0];
    };