import * as Express from "express";
import { listarManutencao, inserirManutencao, alterarManutencao, removerManutencao } from "../controller/manutencaoController";
const Router = Express.Router();

Router.get("/manutencao", listarManutencao);
Router.post("/manutencao", inserirManutencao);
Router.put("/manutencao/:id", alterarManutencao);
Router.delete("/manutencao/:id", removerManutencao);

export = Router;