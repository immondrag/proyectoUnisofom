//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');


const SetDatosClientesPersonaFisicaSchema = Schema({
      creado: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  modificado: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  status: {
    type: String,
    required: true,
    default: "SIN FIRMAR",
  },
  origen: {
    type: String,
  },
  origenID: {
    type: Schema.Types.ObjectId,
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "RegistroUsuario",
  },
  setDatosClientesPersonaFisica: {
    type: String,
  },
datosBasicos : { 
        type :Array,
 }, 
plazo : { 
        type :String,
 }, 
montoPromedioMensualOperado : { 
        type :Number,
 }, 

});

SetDatosClientesPersonaFisicaSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

//module.exports = model( 'SetDatosClientesPersonaFisica', SetDatosClientesPersonaFisicaSchema );

const SetDatosClientesPersonaFisica= model( 'SetDatosClientesPersonaFisica', SetDatosClientesPersonaFisicaSchema );
 module.exports = {SetDatosClientesPersonaFisica,SetDatosClientesPersonaFisicaSchema}

