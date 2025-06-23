//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');


const SetDireccionEmpresaSchema = Schema({
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
  setDireccionEmpresa: {
    type: String,
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
  },direccionCompleta : { 
        type :String,
 }, 
tipoDireccionEmpresa : { 
        type : String,
 }, 

});

SetDireccionEmpresaSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

//module.exports = model( 'SetDireccionEmpresa', SetDireccionEmpresaSchema );

const SetDireccionEmpresa= model( 'SetDireccionEmpresa', SetDireccionEmpresaSchema );
 module.exports = {SetDireccionEmpresa,SetDireccionEmpresaSchema}

