import * as Express from "express";
import { inserirQrcode, alterarQrcode, removerQrcode, listarQrcode, testeGoogle, toString, toDataURL, toFile, consultaCodigo } from "../controller/qrcodeController";
const Router = Express.Router();

Router.get("/qrcode/teste", testeGoogle);
Router.post("/qrcode/string", toString);
Router.post("/qrcode/dataurl", toDataURL);
Router.post("/qrcode/file", toFile);
Router.get("/qrcode/consulta", consultaCodigo);
Router.post("/qrcode", inserirQrcode);
Router.get("/qrcode", listarQrcode);
Router.put("/qrcode/:id", alterarQrcode);
Router.delete("/qrcode/:id", removerQrcode);

export = Router;