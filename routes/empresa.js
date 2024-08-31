var express = require('express');
var router = express.Router();
var empresaController = require('../controllers/empresasController')



/* Create */
router.post('/',   empresaController.createEmpresa)

/* Read */
.get('/:id', empresaController.readEmpresaCampos)

/* Update */
.patch('/:id', empresaController.updateEmpresa)

/* Delete */
.delete('/:id', empresaController.deleteEmpresa);

module.exports = router;