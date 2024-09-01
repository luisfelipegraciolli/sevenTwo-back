var createError = require("http-errors")
var express = require("express")
// var path = require('path'); essa variavel nao ta sendo usada
var logger = require("morgan") // oq eh essa lib morgan?
require("dotenv").config()

const mongoose = require("mongoose")

var empresaRouter = require("./routes/empresa")
var authRouter = require("./routes/auth")

var app = express()

app.use(logger("dev")) // oq essa linha faz?
app.use(express.json())
app.use(express.urlencoded({ extended: false })) // oq essa linha faz?

app.use("/empresa", empresaRouter)
app.use("/auth", authRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404)) // oq essa linha faz?
})

//Conecta ao mongoose e abre a porta
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Conectado ao Banco de Dados")
    app.listen(process.env.PORT, () => {
      console.log(`Servidor rodando na porta ${process.env.PORT}`)
    })
  })
  .catch((err) => {
    console.log(err)
  })

module.exports = app
