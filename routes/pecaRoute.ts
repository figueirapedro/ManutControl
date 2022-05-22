import * as Express from "express";
import { listarPeca, inserirPeca, alterarPeca, removerPeca } from "../controller/pecaController";
import { autenticarJWT } from "../controller/loginController";

const Router = Express.Router();


Router.get("/peca", autenticarJWT, listarPeca);
Router.post("/peca", autenticarJWT, inserirPeca);
Router.put("/peca/:id", autenticarJWT, alterarPeca);
Router.delete("/peca/:id", autenticarJWT, removerPeca);

Router.get("/test/peca", listarPeca);
Router.post("/test/peca", inserirPeca);
Router.put("/test/peca/:id", alterarPeca);
Router.delete("/test/peca/:id", removerPeca);

export = Router;