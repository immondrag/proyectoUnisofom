//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');
const {SetMailContactoSchema } = require('./setMailContacto');
const {SetDireccionSchema } = require('./setDireccion');
const {SetTelefonoContactoSchema } = require('./setTelefonoContacto');


const SetDatosBasicosVariasDireccionesPMSchema = Schema({
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
  setDatosBasicosVariasDireccionesPM: {
    type: String,
  },
denominacionORazonSocial : { 
        type :String,
 }, 
emailsContacto : { 
        type :Array,
 }, 
direcciones : { 
        type :Array,
 }, 
telefonosContacto : { 
        type :Array,
 }, 

});

SetDatosBasicosVariasDireccionesPMSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

//module.exports = model( 'SetDatosBasicosVariasDireccionesPM', SetDatosBasicosVariasDireccionesPMSchema );

const SetDatosBasicosVariasDireccionesPM= model( 'SetDatosBasicosVariasDireccionesPM', SetDatosBasicosVariasDireccionesPMSchema );
 module.exports = {SetDatosBasicosVariasDireccionesPM,SetDatosBasicosVariasDireccionesPMSchema}

