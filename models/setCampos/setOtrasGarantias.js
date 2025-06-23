//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');


const SetOtrasGarantiasSchema = Schema({
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
  setOtrasGarantias: {
    type: String,
  },
garantePrendario : { 
        type :String,
 }, 
tipoDeGarantia : { 
        type :String,
 }, 
fechaInicio : { 
        type :Date,
 }, 
fechaVencimiento : { 
        type :Date,
 }, 
montoDeLaGarantia : { 
        type :Number,
 }, 

});

SetOtrasGarantiasSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

//module.exports = model( 'SetOtrasGarantias', SetOtrasGarantiasSchema );

const SetOtrasGarantias= model( 'SetOtrasGarantias', SetOtrasGarantiasSchema );
 module.exports = {SetOtrasGarantias,SetOtrasGarantiasSchema}

