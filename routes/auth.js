var express = require("express")
var router = express.Router()
const authController = require("../controllers/empresasController")
const authMiddleware = require("../middlewares/authMiddleware")

router.post("/login", authController.login)

module.exports = router
