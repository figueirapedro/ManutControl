import * as Express from "express";
import { loginEncrypt, loginAutenticar } from "../controller/loginController";
const Router = Express.Router();

Router.get('/login', loginAutenticar);
Router.get('/encrypt', loginEncrypt);

export = Router;