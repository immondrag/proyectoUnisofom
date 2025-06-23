//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');


const SetDatosNotarialesSchema = Schema({
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
  setDatosNotariales: {
    type: String,
  },
fechaInscripcionRpp : { 
        type :Date,
 }, 
datosNotaria : { 
        type :Array,
 }, 
fechaDeLaEscritura : { 
        type :Date,
 }, 
numeroEscritura : { 
        type :String,
 }, 
folioMercantil : { 
        type :String,
 }, 

});

SetDatosNotarialesSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

//module.exports = model( 'SetDatosNotariales', SetDatosNotarialesSchema );

const SetDatosNotariales= model( 'SetDatosNotariales', SetDatosNotarialesSchema );
 module.exports = {SetDatosNotariales,SetDatosNotarialesSchema}

