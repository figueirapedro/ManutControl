import * as Filesystem from "fs";
import * as QRCode from "qrcode";

// Criar um QR Code aleatório para teste, direcionando para o Google

export function testeGoogle(req, res) {
  QRCode.toString("www.google.com", function (err, url) {
    res.send(url);
  })
}

// Cria um QR Code em String com base no que é enviado na requisição

export function toString(req, res) {
  QRCode.toString(req.body.texto, function (err, url) {
    res.send(url);
  })
}

// Cria um QR Code em DataURL com base no que é enviado na requisição

export function toDataURL(req, res) {
  QRCode.toDataURL(req.body.texto, function (err, url) {
    res.send(url);
  })
}

// Cria um QR Code em PNG e salva com base no que é enviado na requisição (TESTE)

export function toFile(req, res) {
  QRCode.toFile(req.body.local, req.body.texto, function (err, url) {
    res.send(url);
  })
}

// Retorna representação do código de QR Code informado

export function consultaCodigo(req, res) {
  QRCode.toDataURL(req.body.codigo, function (err, url) {
    res.send(url);
  })
}

// CRUD para QRCode

export function listarQrcode(req, res) {
  res.send("QRCode cadastrado com sucesso!\n" + JSON.stringify(req.body))
}

export function inserirQrcode(req, res) {
  Filesystem.readFile("../assets/mock/qrcode.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.send(data)
  })
}

export function alterarQrcode(req, res) {
  res.send("QRCode de ID " + req.body.Id + " foi alterado com sucesso!\n" + JSON.stringify(req.body))
}

export function removerQrcode(req, res) {
  res.send("QRCode de ID " + req.body.Id + " foi removido com sucesso!\n" + JSON.stringify(req.body))
}

  // Fim CRUD de QRCode