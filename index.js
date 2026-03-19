const express = require("express");
const app = express();

app.use(express.json());

let ultimaVenta = Date.now();

app.post("/webhook", (req, res) => {
  console.log("💰 Nueva venta recibida");
  ultimaVenta = Date.now();
  res.sendStatus(200);
});

app.get("/check", (req, res) => {
  res.json({ ultimaVenta });
});

app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});
