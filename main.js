const express = require('express');
const QRCode = require('qrcode');

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }))

server.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

server.get("/equipamentos", (req, res) => {
    res.send("{'nome': 'pedro'}");
})

server.post("/create/qrcode", (req, res) => {
    //res.send(QRCode.create( "texto bom" ))

    var x = req.body;

    console.log(x)

    QRCode.toDataURL(x.test, function (err, url) {
        res.send(url)
      })
})

server.listen(3000);

console.log("rodando")