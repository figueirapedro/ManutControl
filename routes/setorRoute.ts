import * as Express from "express";
const Router = Express.Router();
import { inserirSetor, listarSetor, alterarSetor, removerSetor } from "../controller/setorController";

Router.get("/setor", listarSetor);
Router.post("/setor", inserirSetor);
Router.put("/setor/:id", alterarSetor);
Router.delete("/setor/:id", removerSetor);

export = Router;