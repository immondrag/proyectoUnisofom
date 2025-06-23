//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');


const SetCuentaDeBancoSchema = Schema({
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
  setCuentaDeBanco: {
    type: String,
  },
institucionBancaria : { 
        type :String,
 }, 
clabe : { 
        type :Number,
 }, 
bancoEnMexico : { 
        type :Boolean,
 }, 
cuenta : { 
        type :Number,
 }, 
institucionBancariaCatalogo : { 
        type : String,
 }, 
moneda : { 
        type : String,
 }, 
tipoPagoAceptado : { 
        type : String,
 }, 

});

SetCuentaDeBancoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

//module.exports = model( 'SetCuentaDeBanco', SetCuentaDeBancoSchema );

const SetCuentaDeBanco= model( 'SetCuentaDeBanco', SetCuentaDeBancoSchema );
 module.exports = {SetCuentaDeBanco,SetCuentaDeBancoSchema}

