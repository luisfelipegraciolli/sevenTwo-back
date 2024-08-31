const Empresa = require('../models/Empresa');

const empresa = new Empresa();

const createEmpresa = async (req, res) => {
    try {
        const empresa = new Empresa(req.body);
        await empresa.save();
        res.status(201).json(empresa);
    }
    catch{
        res.status(500).json({error: error});
    }
} 

const readEmpresaCampos = async (req, res) => {
    const id = req.params.id;
    try{

        const empresa = await Empresa.findOne({ _id: id });
        res.status(200).json(empresa.camposForm);
    }
    catch{
        res.status(500).json({error: error});
    }
}

const updateEmpresa = async (req, res) => {
    const id = req.params.id;

    try{
        const empresa = await Empresa.findById(id);

        if (!empresa) {
            return res.status(404).json({ message: 'Empresa não encontrada' });
        }

        Object.assign(empresa, req.body);
        await empresa.save();
        res.status(201).json({message: "Empresa atualizada com sucesso"});
    }catch{
        res.status(500).json({ message: 'Erro ao atualizar empresa' });
    }
}

const deleteEmpresa = async (req, res) => {
    const id = req.params.id;
    try{

        const empresa = await Empresa.deleteOne({ _id: id });
        res.status(200).json({messagem: "Empresa deletada com sucesso!"});
    }
    catch{
        res.status(500);
    }
}

module.exports = {createEmpresa, readEmpresaCampos, updateEmpresa, deleteEmpresa};