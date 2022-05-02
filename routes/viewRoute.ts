import * as Express from "express";
import * as Path from "path";

const Router = Express.Router();

Router.get("/home", (req, res) => {
    res.sendFile(Path.join(__dirname, "../view/index.html"))
});

export = Router;