import * as Express from "express";
import { listarPeca, inserirPeca, alterarPeca, removerPeca } from "../controller/pecaController";
import { autenticarJWT } from "../controller/loginController";

const Router = Express.Router();


Router.get("/peca", autenticarJWT, listarPeca);
Router.post("/peca", autenticarJWT, inserirPeca);
Router.put("/peca/:id", autenticarJWT, alterarPeca);
Router.delete("/peca/:id", autenticarJWT, removerPeca);

export = Router;