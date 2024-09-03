var express = require("express")
var router = express.Router()
var empresaController = require("../controllers/empresasController")
const authMiddleware = require("../middlewares/authMiddleware")

/* Create */
router
    .post("/", empresaController.createEmpresa)

    /* Read */
    .get(
        "/:id",
        authMiddleware.authenticateToken,
        empresaController.readEmpresaCampos
    )

    /* Update */
    .patch(
        "/:id",
        authMiddleware.authenticateToken,
        empresaController.updateEmpresa
    )

    /* Delete */
    .delete(
        "/:id",
        authMiddleware.authenticateToken,
        empresaController.deleteEmpresa
    )

module.exports = router
