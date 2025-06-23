//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');


const SetDatosClientesPersonaMoralSchema = Schema({
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
  setDatosClientesPersonaMoral: {
    type: String,
  },
nombreDelContacto : { 
        type :String,
 }, 
montoPromedioMensualOperado : { 
        type :Number,
 }, 
paginaWeb : { 
        type :String,
 }, 
datosBasicos : { 
        type :Array,
 }, 
plazo : { 
        type :String,
 }, 

});

SetDatosClientesPersonaMoralSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

//module.exports = model( 'SetDatosClientesPersonaMoral', SetDatosClientesPersonaMoralSchema );

const SetDatosClientesPersonaMoral= model( 'SetDatosClientesPersonaMoral', SetDatosClientesPersonaMoralSchema );
 module.exports = {SetDatosClientesPersonaMoral,SetDatosClientesPersonaMoralSchema}

