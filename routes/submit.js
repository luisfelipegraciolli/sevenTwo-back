const express = require("express");
const Empresa = require("../models/Empresa");

const router = express.Router();

router.post("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const empresa = await Empresa.findOne({ _id: id });

        if (!empresa) {
            return res.status(404).json({ message: "Empresa não encontrada" });
        }

        const { path } = empresa;

        const params = req.body;

        const operation = require(`${process.cwd()}/clients/data/${path}`);
        const result = operation({ ...params });
        res.status(200).json({ ...result });
    } catch (error) {
        res.status(500).json({
            message: "Erro ao ler a empresa!",
            erro: error.message,
        });
    }
});

module.exports = router;
