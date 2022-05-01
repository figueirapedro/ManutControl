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

dotenv.config();

const App = Express();

Mongoose.connect(
    process.env.PRD_DB_CONN_STRING,
);

App.use(Express.json());
App.use(Express.urlencoded({ extended: true }))
App.use(Express.static(__dirname));

App.use("/api/v1", cargoRouter);
App.use("/api/v1", funcionarioRouter);
App.use("/api/v1", loginRouter);
App.use("/api/v1", equipamentoRouter);
App.use("/api/v1", manutencaoRouter);
App.use("/api/v1", pecaRouter);
App.use("/api/v1", qrcodeRouter);
App.use("/api/v1", setorRouter);

App.listen(3000, () => {
    console.log("Running on Port 3000...\n");
});