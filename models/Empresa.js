const mongoose = require("mongoose");
const { Schema } = mongoose;

const fieldSchema = new Schema({
    name: { type: String, required: true },
    label: { type: String, required: true },
    placeholder: { type: String, required: true },
    type: { type: String, required: true },

    required: {
        type: Boolean,
        enum: ["text", "date", "time", "textarea"],
        required: true,
    },
    //enum: Array, creates a validator that checks if the value is strictly equal to one of the values in the given array.
});

const empresaSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    title: { type: String, required: true },
    operation: { type: String, required: true },
    description: { type: String, required: true },
    fields: [fieldSchema],
    submitText: { type: String, required: true },
});

const Empresa = mongoose.model("Empresa", empresaSchema);

module.exports = Empresa;
