const express = require('express');
const QRCode = require('qrcode');
const fs = require('fs');

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }))
server.use(express.static(__dirname));


// Página Home default
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/static/index.html");
})

// Criar um QR Code
server.post("/qrcode/gerar", (req, res) => {
    QRCode.toDataURL(req.body, function (err, url) {
        res.send(url);
      })
})

// CRUD para Peças

server.post("/peca", (req, res) => {
  res.send("Peça cadastrada com sucesso!\n" + req.body)
});

server.get("/peca", (req, res) => {
    fs.readFile(__dirname + '/assets/mock/peca.json', 'utf8' , (err, data) => {
        if (err) {
          console.error(err);
          return ;
        }
        res.send (data)
      })
});

server.put("/peca", (req, res) => {
  res.send("Peça de ID " + req.body.Id + " foi alterada com sucesso!\n" + req.body)
});

server.delete("/peca", (req, res) => {
  res.send("Peça de ID " + req.body.Id + " foi removida com sucesso!\n" + req.body)
});

// Fim CRUD de Peças

// CRUD para Cargo

server.post("/cargo", (req, res) => {
  res.send("Cargo cadastrado com sucesso!\n" + req.body)
});

server.get("/cargo", (req, res) => {
    fs.readFile(__dirname + '/assets/mock/cargo.json', 'utf8' , (err, data) => {
        if (err) {
          console.error(err);
          return ;
        }
        res.send (data)
      })
});

server.put("/cargo", (req, res) => {
  res.send("Cargo de ID " + req.body.Id + " foi alterado com sucesso!\n" + req.body)
});

server.delete("/cargo", (req, res) => {
  res.send("Cargo de ID " + req.body.Id + " foi removido com sucesso!\n" + req.body)
});

// Fim CRUD de Cargo

// CRUD para Criticidade

server.post("/criticidade", (req, res) => {
  res.send("Criticidade cadastrada com sucesso!\n" + req.body)
});

server.get("/criticidade", (req, res) => {
    fs.readFile(__dirname + '/assets/mock/criticidade.json', 'utf8' , (err, data) => {
        if (err) {
          console.error(err);
          return ;
        }
        res.send (data)
      })
});

server.put("/criticidade", (req, res) => {
  res.send("Criticidade de ID " + req.body.Id + " foi alterado com sucesso!\n" + req.body)
});

server.delete("/peca", (req, res) => {
  res.send("Criticidade de ID " + req.body.Id + " foi removido com sucesso!\n" + req.body)
});

// Fim CRUD de Criticidade

// CRUD para Equipamento

server.post("/equipamento", (req, res) => {
  res.send("equipamento cadastrado com sucesso!\n" + req.body)
});

server.get("/equipamento", (req, res) => {
    fs.readFile(__dirname + '/assets/mock/equipamento.json', 'utf8' , (err, data) => {
        if (err) {
          console.error(err);
          return ;
        }
        res.send (data)
      })
});

server.put("/equipamento", (req, res) => {
  res.send("Equipamento de ID " + req.body.Id + " foi alterado com sucesso!\n" + req.body)
});

server.delete("/equipamento", (req, res) => {
  res.send("Equipamento de ID " + req.body.Id + " foi removido com sucesso!\n" + req.body)
});

// Fim CRUD de Equipamento

// CRUD para Funcionario

server.post("/funcionario", (req, res) => {
  res.send("funcionario cadastrado com sucesso!\n" + req.body)
});

server.get("/funcionario", (req, res) => {
    fs.readFile(__dirname + '/assets/mock/funcionario.json', 'utf8' , (err, data) => {
        if (err) {
          console.error(err);
          return ;
        }
        res.send (data)
      })
});

server.put("/funcionario", (req, res) => {
  res.send("Funcionario de ID " + req.body.Id + " foi alterado com sucesso!\n" + req.body)
});

server.delete("/funcionario", (req, res) => {
  res.send("Funcionario de ID " + req.body.Id + " foi removido com sucesso!\n" + req.body)
});

// Fim CRUD de Funcionario

// CRUD para QRCode

server.post("/qrcode", (req, res) => {
  res.send("QRCode cadastrado com sucesso!\n" + req.body)
});

server.get("/qrcode", (req, res) => {
    fs.readFile(__dirname + '/assets/mock/qrcode.json', 'utf8' , (err, data) => {
        if (err) {
          console.error(err);
          return ;
        }
        res.send (data)
      })
});

server.put("/qrcode", (req, res) => {
  res.send("QRCode de ID " + req.body.Id + " foi alterado com sucesso!\n" + req.body)
});

server.delete("/qrcode", (req, res) => {
  res.send("QRCode de ID " + req.body.Id + " foi removido com sucesso!\n" + req.body)
});

// Fim CRUD de QRCode

// CRUD para Setor

server.post("/setor", (req, res) => {
  res.send("Setor cadastrado com sucesso!\n" + req.body)
});

server.get("/setor", (req, res) => {
    fs.readFile(__dirname + '/assets/mock/setor.json', 'utf8' , (err, data) => {
        if (err) {
          console.error(err);
          return ;
        }
        res.send (data)
      })
});

server.put("/setor", (req, res) => {
  res.send("Setor de ID " + req.body.Id + " foi alterado com sucesso!\n" + req.body)
});

server.delete("/setor", (req, res) => {
  res.send("Setor de ID " + req.body.Id + " foi removido com sucesso!\n" + req.body)
});

// Fim CRUD de Setor

server.listen(3000);

console.log("Executando...")