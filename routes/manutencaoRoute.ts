import * as Express from "express";
import { listarManutencao, inserirManutencao, alterarManutencao, removerManutencao } from "../controller/manutencaoController";
import { autenticarJWT } from "../controller/loginController";

const Router = Express.Router();

Router.get("/manutencao", autenticarJWT, listarManutencao);
Router.post("/manutencao", autenticarJWT, inserirManutencao);
Router.put("/manutencao/:id", autenticarJWT, alterarManutencao);
Router.delete("/manutencao/:id", autenticarJWT, removerManutencao);

Router.get("/test/manutencao", listarManutencao);
Router.post("/test/manutencao", inserirManutencao);
Router.put("/test/manutencao/:id", alterarManutencao);
Router.delete("/test/manutencao/:id", removerManutencao);

export = Router;