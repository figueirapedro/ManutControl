import * as Express from "express";
import { inserirCargo, listarCargo, alterarCargo, removerCargo }  from "../controller/cargoController";
import { autenticarJWT } from "../controller/loginController";

const Router = Express.Router();

Router.get("/cargo", autenticarJWT, listarCargo);
Router.post("/cargo", autenticarJWT, inserirCargo);
Router.put("/cargo/:id", autenticarJWT, alterarCargo);
Router.delete("/cargo/:id", autenticarJWT, removerCargo);

export = Router;