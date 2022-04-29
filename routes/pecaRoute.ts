import * as Express from "express";
import { listarPeca, inserirPeca, alterarPeca, removerPeca } from "../controller/pecaController";
const Router = Express.Router();

Router.get('/peca', listarPeca);
Router.post('/peca', inserirPeca);
Router.put('/peca/:id', alterarPeca);
Router.delete('/peca/:id', removerPeca);

export = Router;