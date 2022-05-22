import * as Express from "express";
const Router = Express.Router();
import { inserirEquipamento, listarEquipamento, alterarEquipamento, removerEquipamento } from "../controller/equipamentoController";
import { autenticarJWT } from "../controller/loginController";

Router.get("/equipamento", autenticarJWT, listarEquipamento);
Router.post("/equipamento",autenticarJWT, inserirEquipamento );
Router.put("/equipamento/:id", autenticarJWT, alterarEquipamento);
Router.delete("/equipamento/:id", autenticarJWT, removerEquipamento);

Router.get("/test/equipamento", listarEquipamento);
Router.post("/test/equipamento",inserirEquipamento );
Router.put("/test/equipamento/:id", alterarEquipamento);
Router.delete("/test/equipamento/:id", removerEquipamento);

export = Router;