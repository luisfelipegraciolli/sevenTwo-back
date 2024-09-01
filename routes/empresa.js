var express = require("express")
var router = express.Router()
var empresaController = require("../controllers/empresasController")
const authMiddleware = require("../middlewares/authMiddleware")

// ja pensou em inserir o middleware que eh usado nas 3 rotas?
// assim vc n precisa repetir a mesma coisa 3 vezes

/* Create */
router
  .post("/", empresaController.createEmpresa)

  /* Read */
  .get("/:id", authMiddleware.authenticateToken, empresaController.readEmpresaCampos)

  /* Update */
  .patch("/:id", authMiddleware.authenticateToken, empresaController.updateEmpresa)

  /* Delete */
  .delete("/:id", authMiddleware.authenticateToken, empresaController.deleteEmpresa)

module.exports = router
