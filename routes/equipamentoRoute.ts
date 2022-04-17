import * as Express from "express";
const Router = Express.Router();
import { inserirEquipamento, listarEquipamento, alterarEquipamento, removerEquipamento } from "../controller/equipamentoController";

Router.post("/equipamento",inserirEquipamento );
Router.get("/equipamento", listarEquipamento);
Router.put("/equipamento", alterarEquipamento);
Router.delete("/equipamento", removerEquipamento);

export = Router;