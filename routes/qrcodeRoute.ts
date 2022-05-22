import * as Express from "express";
import { inserirQrcode, alterarQrcode, removerQrcode, listarQrcode, testeGoogle, toString, toDataURL, toFile, consultaCodigo } from "../controller/qrcodeController";
import { autenticarJWT } from "../controller/loginController";

const Router = Express.Router();

Router.get("/qrcode/teste", autenticarJWT, testeGoogle);
Router.post("/qrcode/string", autenticarJWT, toString);
Router.post("/qrcode/dataurl", autenticarJWT, toDataURL);
Router.post("/qrcode/file", autenticarJWT, toFile);
Router.get("/qrcode/consulta", autenticarJWT, consultaCodigo);
Router.post("/qrcode", autenticarJWT, inserirQrcode);
Router.get("/qrcode", autenticarJWT, listarQrcode);
Router.put("/qrcode/:id", autenticarJWT, alterarQrcode);
Router.delete("/qrcode/:id", autenticarJWT, removerQrcode);

Router.get("/test/qrcode/teste", testeGoogle);
Router.post("/test/qrcode/string", toString);
Router.post("/test/qrcode/dataurl", toDataURL);
Router.post("/test/qrcode/file", toFile);
Router.get("/test/qrcode/consulta", consultaCodigo);
Router.post("/test/qrcode", inserirQrcode);
Router.get("/test/qrcode", listarQrcode);
Router.put("/test/qrcode/:id", alterarQrcode);
Router.delete("/test/qrcode/:id", removerQrcode);

export = Router;