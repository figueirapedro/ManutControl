import * as Express from "express";
import * as Mongoose from "mongoose";
import * as dotenv from "dotenv";
import * as cargoRouter from "./routes/cargoRoute";
import * as funcionarioRouter from "./routes/funcionarioRoute";
import * as loginRouter from "./routes/loginRoute";
import * as equipamentoRouter from "./routes/equipamentoRoute";
import * as manutencaoRouter from "./routes/manutencaoRoute";
import * as pecaRouter from "./routes/pecaRoute";
import * as qrcodeRouter from "./routes/qrcodeRoute";
import * as setorRouter from "./routes/setorRoute";
import * as viewRouter from "./routes/viewRoute";
import * as Cors from "cors";

dotenv.config();

const Server = Express();
const Port = process.env.PORT || 3000;
var distDir = __dirname + "/dist/";

Mongoose.connect(
    process.env.PRD_DB_CONN_STRING,
);

Server.use(Cors());
Server.use(Express.json());
Server.use(Express.urlencoded({ extended: true }));
Server.use(Express.static(__dirname));
Server.use(Express.static(distDir));

Server.use(viewRouter);

Server.use("/api/v1", loginRouter);
Server.use("/api/v1", funcionarioRouter);
Server.use("/api/v1", cargoRouter);
Server.use("/api/v1", equipamentoRouter);
Server.use("/api/v1", manutencaoRouter);
Server.use("/api/v1", pecaRouter);
Server.use("/api/v1", qrcodeRouter);
Server.use("/api/v1", setorRouter);

Server.listen(Port, () => {
    console.log(`Server running on Port ${Port}...\n`);
});