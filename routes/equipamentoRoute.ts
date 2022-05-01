import * as Express from "express";
const Router = Express.Router();
import { inserirEquipamento, listarEquipamento, alterarEquipamento, removerEquipamento } from "../controller/equipamentoController";

Router.get("/equipamento", listarEquipamento);
Router.post("/equipamento",inserirEquipamento );
Router.put("/equipamento/:id", alterarEquipamento);
Router.delete("/equipamento/:id", removerEquipamento);

export = Router;