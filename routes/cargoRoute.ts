import * as Express from "express";
const Router = Express.Router();
import { inserirCargo, listarCargo, alterarCargo, removerCargo }  from "../controller/cargoController";

Router.get("/cargo", listarCargo);
Router.post("/cargo", inserirCargo);
Router.put("/cargo", alterarCargo);
Router.delete("/cargo", removerCargo);

export = Router;