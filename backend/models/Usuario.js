const mongoose = require('../db/connection');

const {Schema} = mongoose;

const Usuario = mongoose.model(

  'Usuario',

  new Schema({
    nome: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    cpf: {
      type: String,
      required: true,
    },
    dataNascimento: {
      type: String,
      required: true,
    },
    veiculos: [{
      type: Schema.Types.ObjectId,
      ref:'Veiculo'
    }],
  }, {timestamps: true}),
)

module.exports = Usuario;