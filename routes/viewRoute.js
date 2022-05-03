"use strict";
var Express = require("express");
var Path = require("path");
var Router = Express.Router();
Router.get("/home", function (req, res) {
    res.sendFile(Path.join(__dirname, "../view/index.html"));
});
module.exports = Router;
