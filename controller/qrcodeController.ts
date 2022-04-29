import * as QRCode from "qrcode";
import { Model } from "../model/qrcode";


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

export async function listarQrcode(req, res) {
  const qrcodes = await Model.find({});

  try {
    res.send(qrcodes);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function inserirQrcode(req, res) {
  const qrcodes = new Model(req.body);

  try {
    await qrcodes.save();
    res.send(qrcodes);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function alterarQrcode(req, res) {
  try {
    const qrcodes = await Model.findOneAndUpdate({ Id: req.params.id }, req.body);
    
    await qrcodes.save();
    res.send(qrcodes);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function removerQrcode(req, res) {
  try {
    const qrcodes = await Model.findOneAndDelete({ Id: req.params.id });

    if (!qrcodes) res.status(404).send("No item found");
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
}

  // Fim CRUD de QRCode