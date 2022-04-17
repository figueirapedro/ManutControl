import * as Express from "express";
import { listarPeca, inserirPeca, alterarPeca, removerPeca } from "../controller/pecaController";
const Router = Express.Router();

Router.get('/peca', listarPeca);
Router.post('/peca', inserirPeca);
Router.put('/peca', alterarPeca);
Router.delete('/peca', removerPeca);

export = Router;