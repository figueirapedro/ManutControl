import * as Express from "express";
import { inserirFuncionario, listarFuncionario, alterarFuncionario, removerFuncionario } from "../controller/funcionarioController";
import { autenticarJWT } from "../controller/loginController";

const Router = Express.Router();

Router.get("/funcionario", listarFuncionario);
Router.post("/funcionario", inserirFuncionario);
Router.put("/funcionario/:id", autenticarJWT, alterarFuncionario);
Router.delete("/funcionario/:id", autenticarJWT, removerFuncionario);

export = Router;