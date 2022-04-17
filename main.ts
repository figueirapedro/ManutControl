import * as Express from "express";
const App = Express();

import * as cargoRouter from "./routes/cargoRoute";
import * as funcionarioRouter from "./routes/funcionarioRoute";
import * as loginRouter from "./routes/loginRoute";
import * as equipamentoRouter from "./routes/equipamentoRoute";
import * as manutencaoRouter from "./routes/manutencaoRoute";
import * as pecaRouter from "./routes/pecaRoute";
import * as qrcodeRouter from "./routes/qrcodeRoute";
import * as setorRouter from "./routes/setorRoute";

App.use(Express.json());
App.use(Express.urlencoded({ extended: true }))
App.use(Express.static(__dirname));

App.use(cargoRouter);
App.use(funcionarioRouter);
App.use(loginRouter);
App.use(equipamentoRouter);
App.use(manutencaoRouter);
App.use(pecaRouter);
App.use(qrcodeRouter);
App.use(setorRouter);

App.listen(3000);

console.log("Executando...\n");