const mongoose = require('mongoose');
const { Schema } = mongoose;

const empresaSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    camposForm: {
        type: Map,
        of: String,
        required: true
    }
})

const Empresa = mongoose.model('Empresa', empresaSchema);

module.exports = Empresa
    