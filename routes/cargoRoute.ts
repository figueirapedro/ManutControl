import * as Express from "express";
import { inserirCargo, listarCargo, alterarCargo, removerCargo }  from "../controller/cargoController";
import { autenticarJWT } from "../controller/loginController";

const Router = Express.Router();

Router.get("/cargo", autenticarJWT, listarCargo);
Router.post("/cargo", autenticarJWT, inserirCargo);
Router.put("/cargo/:id", autenticarJWT, alterarCargo);
Router.delete("/cargo/:id", autenticarJWT, removerCargo);

Router.get("/test/cargo", listarCargo);
Router.post("/test/cargo", inserirCargo);
Router.put("/test/cargo/:id", alterarCargo);
Router.delete("/test/cargo/:id", removerCargo);

export = Router;