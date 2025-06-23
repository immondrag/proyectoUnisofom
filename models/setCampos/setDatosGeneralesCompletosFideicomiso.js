//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');
const {SetTelefonoContactoSchema } = require('./setTelefonoContacto');


const SetDatosGeneralesCompletosFideicomisoSchema = Schema({
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
  setDatosGeneralesCompletosFideicomiso: {
    type: String,
  },
rfcConHomoclave : { 
        type :String,
 }, 
numeroReferenciaFideicomiso : { 
        type :String,
 }, 
tipoDeFideicomiso : { 
        type :String,
 }, 
numeroSerieFirmaElectronica : { 
        type :String,
 }, 
actividadEconomicaQueRealiza : { 
        type :String,
 }, 
patrimonioFideicomiso : { 
        type :String,
 }, 
lugarDeConstitucionDelFideicomiso : { 
        type :String,
 }, 
fechaConstitucionFideicomiso : { 
        type :String,
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
finalidadDelFideicomiso : { 
        type :String,
 }, 
denominacionORazonSocialFid : { 
        type :String,
 }, 
cuentaConComiteTecnico : { 
        type : String,
 }, 

});

SetDatosGeneralesCompletosFideicomisoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

//module.exports = model( 'SetDatosGeneralesCompletosFideicomiso', SetDatosGeneralesCompletosFideicomisoSchema );

const SetDatosGeneralesCompletosFideicomiso= model( 'SetDatosGeneralesCompletosFideicomiso', SetDatosGeneralesCompletosFideicomisoSchema );
 module.exports = {SetDatosGeneralesCompletosFideicomiso,SetDatosGeneralesCompletosFideicomisoSchema}

