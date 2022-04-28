import * as Filesystem from "fs";
import * as Cargo from "../model/cargo";

// CRUD para Cargo
export async function inserirCargo(req, res) {
    const cargos = new Cargo.Model(req.body);

    try {
        await cargos.save();
        res.send(cargos);
    } catch (error) {
        res.status(500).send(error);
    }
};

export async function listarCargo(req, res) {
    const cargos = await Cargo.Model.find({});

    try {
        res.send(cargos);
    } catch (error) {
        res.status(500).send(error);
    }
};

export async function alterarCargo(req, res) {
    try {
        const cargos = await Cargo.Model.findByIdAndUpdate(req.params.id, req.body);
        await Cargo.Model.save();
        res.send(cargos);
    } catch (error) {
        res.status(500).send(error);
    }
};

export async function removerCargo(req, res) {
    try {
        const cargos = await Cargo.Model.findByIdAndDelete(req.params.id);
    
        if (!cargos) res.status(404).send("No item found");
        res.status(200).send();
      } catch (error) {
        res.status(500).send(error);
      }};

    // Fim CRUD de Cargo
