//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');


const SetDatosGeneralesCompletosPMSchema = Schema({
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
  setDatosGeneralesCompletosPM: {
    type: String,
  },
datosBasicos : { 
        type :Array,
 }, 
numeroSerieFirmaElectronica : { 
        type :String,
 }, 
fechaInicioOperaciones : { 
        type :Date,
 }, 
rfcConHomoclave : { 
        type :String,
 }, 
datosNotaria : { 
        type :Array,
 }, 
giroOActividad : { 
        type :String,
 }, 
tipoDeSociedad : { 
        type :String,
 }, 
datosNotariales : { 
        type :Array,
 }, 
nacionalidad : { 
        type : String,
 }, 

});

SetDatosGeneralesCompletosPMSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

//module.exports = model( 'SetDatosGeneralesCompletosPM', SetDatosGeneralesCompletosPMSchema );

const SetDatosGeneralesCompletosPM= model( 'SetDatosGeneralesCompletosPM', SetDatosGeneralesCompletosPMSchema );
 module.exports = {SetDatosGeneralesCompletosPM,SetDatosGeneralesCompletosPMSchema}

