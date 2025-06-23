//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');
const {SetDatosBasicosUnaDireccionSchema } = require('./setDatosBasicosUnaDireccion');


const SetDatosProveedorPrincipalPersonaFisicaSchema = Schema({
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
  setDatosProveedorPrincipalPersonaFisica: {
    type: String,
  },
plazo : { 
        type :String,
 }, 
rfcConHomoclave : { 
        type :String,
 }, 
montoPromedioMensualOperado : { 
        type :Number,
 }, 
datosBasicos : { 
        type :Array,
 }, 
nacionalidad : { 
        type : String,
 }, 
entidadFederativaNacimiento : { 
        type : String,
 }, 
pais : { 
        type : String,
 }, 

});

SetDatosProveedorPrincipalPersonaFisicaSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

//module.exports = model( 'SetDatosProveedorPrincipalPersonaFisica', SetDatosProveedorPrincipalPersonaFisicaSchema );

const SetDatosProveedorPrincipalPersonaFisica= model( 'SetDatosProveedorPrincipalPersonaFisica', SetDatosProveedorPrincipalPersonaFisicaSchema );
 module.exports = {SetDatosProveedorPrincipalPersonaFisica,SetDatosProveedorPrincipalPersonaFisicaSchema}

