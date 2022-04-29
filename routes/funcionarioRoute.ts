import * as Express from "express";
const Router = Express.Router();
import { inserirFuncionario, listarFuncionario, alterarFuncionario, removerFuncionario } from "../controller/funcionarioController";

Router.get("/funcionario", listarFuncionario);
Router.post("/funcionario", inserirFuncionario);
Router.put("/funcionario/:id", alterarFuncionario);
Router.delete("/funcionario/:id", removerFuncionario);

export = Router;