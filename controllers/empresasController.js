const Empresa = require("../models/Empresa")
const jwt = require("jsonwebtoken")
// const { isValidObjectId } = require('mongoose'); essa linha nao ta sendo usada
require("dotenv").config()

const createEmpresa = async (req, res) => {
  try {
    const empresa = new Empresa(req.body)
    await empresa.save()
    res.status(201).json({ message: "Empresa Criada com sucesso" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const readEmpresaCampos = async (req, res) => {
  const id = req.params.id
  try {
    const empresa = await Empresa.findOne({ _id: id })

    if (!empresa) {
      return res.status(404).json({ message: "Empresa não encontrada" })
    }

    const {
      tituloForm,
      descriptionForm,
      placeholderCamposForm,
      camposForm,
      typeOfCampo,
    } = empresa

    res.status(200).json({
      tituloForm,
      descriptionForm,
      placeholderCamposForm,
      camposForm,
      typeOfCampo,
    })
  } catch {
    res.status(500).json({ error: error })
  }
}

const updateEmpresa = async (req, res) => {
  const id = req.params.id

  try {
    const empresa = await Empresa.findById(id)

    if (!empresa) {
      return res.status(404).json({ message: "Empresa não encontrada" })
    }

    Object.assign(empresa, req.body)
    await empresa.save()
    res.status(201).json({ message: "Empresa atualizada com sucesso" })
  } catch {
    res.status(500).json({ message: "Erro ao atualizar empresa" })
  }
}

const deleteEmpresa = async (req, res) => {
  const id = req.params.id
  try {
    await Empresa.deleteOne({ _id: id })
    res.status(200).json({ messagem: "Empresa deletada com sucesso!" })
  } catch {
    res.status(500)
  }
}

// a funcao de login realmente deveria estar aqui? nao seria melhor que tivesse em um authController talvez?
const login = async (req, res) => {
  let isValidPassword
  const { username, password } = req.body

  const empresa = await Empresa.findOne({ username: username })
  if (!empresa) return res.status(404).json({ error: "Empresa não encontrado" })

  if (password == empresa.password) {
    isValidPassword = true
  } else {
    isvalidPassword = false
  }

  if (!isValidPassword) return res.status(401).json({ error: "Senha incorreta" })

  try {
    const token = jwt.sign({ empresaId: empresa._id }, process.env.JWT)

    res.status(200).json({ msg: "autorizado", token })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = { createEmpresa, readEmpresaCampos, updateEmpresa, deleteEmpresa, login }
