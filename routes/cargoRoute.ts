import * as Express from "express";
import { inserirCargo, listarCargo, alterarCargo, removerCargo }  from "../controller/cargoController";
import { autenticarJWT } from "../controller/loginController";

const Router = Express.Router();

Router.get("/cargo", listarCargo);
Router.post("/cargo", inserirCargo);
Router.put("/cargo/:id", autenticarJWT, alterarCargo);
Router.delete("/cargo/:id", autenticarJWT, removerCargo);

export = Router;