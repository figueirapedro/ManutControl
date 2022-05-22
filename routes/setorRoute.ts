import * as Express from "express";
import { inserirSetor, listarSetor, alterarSetor, removerSetor } from "../controller/setorController";
import { autenticarJWT } from "../controller/loginController";

const Router = Express.Router();

Router.get("/setor", autenticarJWT, listarSetor);
Router.post("/setor", autenticarJWT, inserirSetor);
Router.put("/setor/:id", autenticarJWT, alterarSetor);
Router.delete("/setor/:id", autenticarJWT, removerSetor);

Router.get("/test/setor", listarSetor);
Router.post("/test/setor", inserirSetor);
Router.put("/test/setor/:id", alterarSetor);
Router.delete("/test/setor/:id", removerSetor);

export = Router;