//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');
const {SetTelefonoContactoSchema } = require('./setTelefonoContacto');
const {SetMailContactoSchema } = require('./setMailContacto');


const SetDatosBasicosUnaDireccionSchema = Schema({
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
  setDatosBasicosUnaDireccion: {
    type: String,
  },
nombreCompleto : { 
        type :Array,
 }, 
pais: {
    type: String,
  },
  codigoPostal: {
    type: String,
  },
  ciudad: {
    type: String,
  },
  uso: {
    type: String,
  },
  estado: {
    type: String,
  },
  colonia: {
    type: String,
  },
  municipio: {
    type: String,
  },
  calle: {
    type: String,
  },
  numeroExterior: {
    type: String,
  },
  numeroInterior: {
    type: String,
  },telefonosContacto : { 
        type :Array,
 }, 
emailsContacto : { 
        type :Array,
 }, 

});

SetDatosBasicosUnaDireccionSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

//module.exports = model( 'SetDatosBasicosUnaDireccion', SetDatosBasicosUnaDireccionSchema );

const SetDatosBasicosUnaDireccion= model( 'SetDatosBasicosUnaDireccion', SetDatosBasicosUnaDireccionSchema );
 module.exports = {SetDatosBasicosUnaDireccion,SetDatosBasicosUnaDireccionSchema}

