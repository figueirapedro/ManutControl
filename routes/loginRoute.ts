import * as Express from "express";
import { loginAutenticar } from "../controller/loginController";

const Router = Express.Router();

Router.post("/login", loginAutenticar);


export = Router;