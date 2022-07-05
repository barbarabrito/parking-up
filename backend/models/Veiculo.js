const mongoose = require('../db/connection');

const {Schema} = mongoose;

const Veiculo = mongoose.model(
    'Veiculo',
    new Schema({
        marca: {
            type: String,
            required: true,
        },
        modelo: {
            type: String,
            required: true,
        },
        ano: {
            type: String,
            required: true,
        },
        placaVeiculo: {
            type: String,
            required: true,
        },
        dono: {
            type: Schema.Types.ObjectId,
            ref: 'Usuario'
        },
    }, {timestamps: true}),
)

module.exports = Veiculo;