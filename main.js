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
var Server = Express();
var Port = process.env.port;
Mongoose.connect(process.env.PRD_DB_CONN_STRING);
Server.use(Express.json());
Server.use(Express.urlencoded({ extended: true }));
Server.use(Express.static(__dirname));
Server.use("/api/v1", loginRouter);
Server.use("/api/v1", funcionarioRouter);
Server.use("/api/v1", cargoRouter);
Server.use("/api/v1", equipamentoRouter);
Server.use("/api/v1", manutencaoRouter);
Server.use("/api/v1", pecaRouter);
Server.use("/api/v1", qrcodeRouter);
Server.use("/api/v1", setorRouter);
Server.listen(Port, function () {
    console.log("Server running on Port ".concat(Port, "...\n"));
});