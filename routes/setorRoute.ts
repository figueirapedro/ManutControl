import * as Express from "express";
import { inserirSetor, listarSetor, alterarSetor, removerSetor } from "../controller/setorController";
import { autenticarJWT } from "../controller/loginController";

const Router = Express.Router();

Router.get("/setor", autenticarJWT, listarSetor);
Router.post("/setor", autenticarJWT, inserirSetor);
Router.put("/setor/:id", autenticarJWT, alterarSetor);
Router.delete("/setor/:id", autenticarJWT, removerSetor);

export = Router;