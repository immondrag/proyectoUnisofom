//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');


const SetPersonasQueEjercenControlSchema = Schema({
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
  setPersonasQueEjercenControl: {
    type: String,
  },
nombreCompleto : { 
        type :Array,
 }, 
puesto : { 
        type :String,
 }, 
rfcConHomoclave : { 
        type :String,
 }, 
folioMercantil : { 
        type :String,
 }, 
acciones : { 
        type :Number,
 }, 
numeroDeActa : { 
        type :String,
 }, 
paisDeResidencia : { 
        type : String,
 }, 

});

SetPersonasQueEjercenControlSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

//module.exports = model( 'SetPersonasQueEjercenControl', SetPersonasQueEjercenControlSchema );

const SetPersonasQueEjercenControl= model( 'SetPersonasQueEjercenControl', SetPersonasQueEjercenControlSchema );
 module.exports = {SetPersonasQueEjercenControl,SetPersonasQueEjercenControlSchema}

