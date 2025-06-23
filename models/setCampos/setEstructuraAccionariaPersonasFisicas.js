//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');


const SetEstructuraAccionariaPersonasFisicasSchema = Schema({
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
  setEstructuraAccionariaPersonasFisicas: {
    type: String,
  },
nombreCompleto : { 
        type :Array,
 }, 
fechaDeModificacion : { 
        type :Date,
 }, 
numeroDeActa : { 
        type :String,
 }, 
folioMercantil : { 
        type :String,
 }, 
rfcConHomoclave : { 
        type :String,
 }, 
porcentajeDeParticipacion : { 
        type :Number,
 }, 
paisDeResidencia : { 
        type : String,
 }, 

});

SetEstructuraAccionariaPersonasFisicasSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

//module.exports = model( 'SetEstructuraAccionariaPersonasFisicas', SetEstructuraAccionariaPersonasFisicasSchema );

const SetEstructuraAccionariaPersonasFisicas= model( 'SetEstructuraAccionariaPersonasFisicas', SetEstructuraAccionariaPersonasFisicasSchema );
 module.exports = {SetEstructuraAccionariaPersonasFisicas,SetEstructuraAccionariaPersonasFisicasSchema}

