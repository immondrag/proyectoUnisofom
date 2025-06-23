//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');
const {SetDireccionSchema } = require('./setDireccion');
const {SetMailContactoSchema } = require('./setMailContacto');
const {SetTelefonoContactoSchema } = require('./setTelefonoContacto');


const SetDatosBasicosVariasDireccionSchema = Schema({
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
  setDatosBasicosVariasDireccion: {
    type: String,
  },
nombreCompleto : { 
        type :Array,
 }, 
direcciones : { 
        type :Array,
 }, 
emailsContacto : { 
        type :Array,
 }, 
telefonosContacto : { 
        type :Array,
 }, 

});

SetDatosBasicosVariasDireccionSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

//module.exports = model( 'SetDatosBasicosVariasDireccion', SetDatosBasicosVariasDireccionSchema );

const SetDatosBasicosVariasDireccion= model( 'SetDatosBasicosVariasDireccion', SetDatosBasicosVariasDireccionSchema );
 module.exports = {SetDatosBasicosVariasDireccion,SetDatosBasicosVariasDireccionSchema}

