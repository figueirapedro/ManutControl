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

// Criar um QR Code aleatório para teste, direcionando para o Google

server.get("/qrcode/teste", (req, res) => {
  QRCode.toString( "www.google.com" , function (err, url) {
      res.send(url);
    })
})

// Cria um QR Code em String com base no que é enviado na requisição

server.post("/qrcode/string", (req, res) => {
  QRCode.toString(req.body.texto, function (err, url) {
      res.send(url);
    })
})

// Cria um QR Code em DataURL com base no que é enviado na requisição

server.post("/qrcode/dataurl", (req, res) => {
  QRCode.toDataURL(req.body.texto, function (err, url) {
      res.send(url);
    })
})

// Cria um QR Code em PNG e salva com base no que é enviado na requisição (TESTE)

server.post("/qrcode/file", (req, res) => {
  QRCode.toFile(req.body.local, req.body.texto, function (err, url) {
      res.send(url);
    })
})

// Retorna representação do código de QR Code informado

server.get("/qrcode/consulta", (req, res) => {
    QRCode.toDataURL(req.body.codigo, function (err, url) {
        res.send(url);
      })
})

// CRUD para Peças

server.post("/peca", (req, res) => {
  res.send("Peça cadastrada com sucesso!\n" + JSON.stringify(req.body))
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
  res.send("Peça de ID " + req.body.Id + " foi alterada com sucesso!\n" + JSON.stringify(req.body))
});

server.delete("/peca", (req, res) => {
  res.send("Peça de ID " + req.body.Id + " foi removida com sucesso!\n" + JSON.stringify(req.body))
});

// Fim CRUD de Peças

// CRUD para Cargo

server.post("/cargo", (req, res) => {
  res.send("Cargo cadastrado com sucesso!\n" + JSON.stringify(req.body))
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
  res.send("Cargo de ID " + req.body.Id + " foi alterado com sucesso!\n" + JSON.stringify(req.body))
});

server.delete("/cargo", (req, res) => {
  res.send("Cargo de ID " + req.body.Id + " foi removido com sucesso!\n" + JSON.stringify(req.body))
});

// Fim CRUD de Cargo

// CRUD para Equipamento

server.post("/equipamento", (req, res) => {
  res.send("equipamento cadastrado com sucesso!\n" + JSON.stringify(req.body))
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
  res.send("Equipamento de ID " + req.body.Id + " foi alterado com sucesso!\n" + JSON.stringify(req.body))
});

server.delete("/equipamento", (req, res) => {
  res.send("Equipamento de ID " + req.body.Id + " foi removido com sucesso!\n" + JSON.stringify(req.body))
});

// Fim CRUD de Equipamento

// CRUD para Funcionario

server.post("/funcionario", (req, res) => {
  res.send("funcionario cadastrado com sucesso!\n" + JSON.stringify(req.body))
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
  res.send("Funcionario de ID " + req.body.Id + " foi alterado com sucesso!\n" + JSON.stringify(req.body))
});

server.delete("/funcionario", (req, res) => {
  res.send("Funcionario de ID " + req.body.Id + " foi removido com sucesso!\n" + JSON.stringify(req.body))
});

// Fim CRUD de Funcionario

// CRUD para QRCode

server.post("/qrcode", (req, res) => {
  res.send("QRCode cadastrado com sucesso!\n" + JSON.stringify(req.body))
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
  res.send("QRCode de ID " + req.body.Id + " foi alterado com sucesso!\n" + JSON.stringify(req.body))
});

server.delete("/qrcode", (req, res) => {
  res.send("QRCode de ID " + req.body.Id + " foi removido com sucesso!\n" + JSON.stringify(req.body))
});

// Fim CRUD de QRCode

// CRUD para Setor

server.post("/setor", (req, res) => {
  res.send("Setor cadastrado com sucesso!\n" + JSON.stringify(req.body))
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
  res.send("Setor de ID " + req.body.Id + " foi alterado com sucesso!\n" + JSON.stringify(req.body))
});

server.delete("/setor", (req, res) => {
  res.send("Setor de ID " + req.body.Id + " foi removido com sucesso!\n" + JSON.stringify(req.body))
});

// Fim CRUD de Setor

// CRUD para Manutenção

server.post("/manutencao", (req, res) => {
  res.send("Manutenção cadastrada com sucesso!\n" + JSON.stringify(req.body))
});

server.get("/manutencao", (req, res) => {
    fs.readFile(__dirname + '/assets/mock/manutencao.json', 'utf8' , (err, data) => {
        if (err) {
          console.error(err);
          return ;
        }
        res.send (data)
      })
});

server.put("/manutencao", (req, res) => {
  res.send("Manutenção de ID " + req.body.Id + " foi alterada com sucesso!\n" + JSON.stringify(req.body))
});

server.delete("/manutencao", (req, res) => {
  res.send("Manutenção de ID " + req.body.Id + " foi removida com sucesso!\n" + JSON.stringify(req.body))
});

// Fim CRUD de Manutenção

server.listen(3000);

console.log("Executando...")