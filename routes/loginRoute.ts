import * as Express from "express";
import { loginAutenticar } from "../controller/loginController";

const Router = Express.Router();

Router.get("/login", loginAutenticar);


export = Router;