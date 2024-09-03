var express = require("express")
var router = express.Router()
const authController = require("../controllers/empresasController")
const authMiddleware = require("../middlewares/authMiddleware")

router.post("/login", authController.login)
router.post("/jwt", authMiddleware.authenticateToken)

module.exports = router
