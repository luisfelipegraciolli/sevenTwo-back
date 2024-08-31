const mongoose = require('mongoose');
const { Schema } = mongoose;

const empresaSchema = new Schema({
    username: String,
    password: String,
    camposForm: {
        type: Map,
        of: String
    }
})

const Empresa = mongoose.model('Empresa', empresaSchema);

module.exports = Empresa
    