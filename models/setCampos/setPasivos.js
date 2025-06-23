//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');


const SetPasivosSchema = Schema({
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
  setPasivos: {
    type: String,
  },
montoDeLaLinea : { 
        type :Number,
 }, 
tipoDeCredito : { 
        type :String,
 }, 
institucion : { 
        type :String,
 }, 
saldoALaFecha : { 
        type :Number,
 }, 
fechaDeVencimiento : { 
        type :Date,
 }, 
tasaMasSpread : { 
        type :String,
 }, 
fechaDeInicio : { 
        type :Date,
 }, 
plazoDelCredito : { 
        type :String,
 }, 
formaDePago : { 
        type :String,
 }, 

});

SetPasivosSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

//module.exports = model( 'SetPasivos', SetPasivosSchema );

const SetPasivos= model( 'SetPasivos', SetPasivosSchema );
 module.exports = {SetPasivos,SetPasivosSchema}

