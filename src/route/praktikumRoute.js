const express = require('express')
const app = express()

app.use(express.json())


const praktikumController = require('../controllers/praktikumController')
const bangunRuangController = require('../controllers/bangunRuangController')

app.get("/profile/:name/:age/:kelas", praktikumController.profil)
app.get("/arya/:ras/:nama_joni/:type/:gender", praktikumController.arya)

app.post("/balok", bangunRuangController.balok)
app.post("/kubus", bangunRuangController.kubus)
app.post("/tabung", bangunRuangController.tabung)
app.post("/bola", bangunRuangController.bola)

module.exports = app