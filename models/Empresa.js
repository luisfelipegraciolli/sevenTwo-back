const mongoose = require("mongoose");
const { Schema } = mongoose;

const empresaSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    tituloForm: { type: String, required: true },
    descriptionForm: { type: String, required: true },
    placeholderCamposForm: {
        type: Map,
        of: String,
        required: true,
    },
    camposForm: {
        type: Map,
        of: String,
        required: true,
    },
    typeOfCampo: {
        type: Map,
        of: String,
        required: true,
    },
});

const Empresa = mongoose.model("Empresa", empresaSchema);

module.exports = Empresa;
