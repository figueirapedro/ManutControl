"use strict";
exports.__esModule = true;
var Express = require("express");
var Mongoose = require("mongoose");
var dotenv = require("dotenv");
var cargoRouter = require("./routes/cargoRoute");
var funcionarioRouter = require("./routes/funcionarioRoute");
var loginRouter = require("./routes/loginRoute");
var equipamentoRouter = require("./routes/equipamentoRoute");
var manutencaoRouter = require("./routes/manutencaoRoute");
var pecaRouter = require("./routes/pecaRoute");
var qrcodeRouter = require("./routes/qrcodeRoute");
var setorRouter = require("./routes/setorRoute");
dotenv.config();
var App = Express();
Mongoose.connect(process.env.PRD_DB_CONN_STRING);
App.use(Express.json());
App.use(Express.urlencoded({ extended: true }));
App.use(Express.static(__dirname));
App.use("/api/v1", cargoRouter);
App.use("/api/v1", funcionarioRouter);
App.use("/api/v1", loginRouter);
App.use("/api/v1", equipamentoRouter);
App.use("/api/v1", manutencaoRouter);
App.use("/api/v1", pecaRouter);
App.use("/api/v1", qrcodeRouter);
App.use("/api/v1", setorRouter);
App.listen(3000, function () {
    console.log("Running on Port 3000...\n");
});
