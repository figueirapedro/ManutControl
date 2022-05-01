"use strict";
var Express = require("express");
var loginController_1 = require("../controller/loginController");
var Router = Express.Router();
Router.get("/login", loginController_1.loginAutenticar);
module.exports = Router;
