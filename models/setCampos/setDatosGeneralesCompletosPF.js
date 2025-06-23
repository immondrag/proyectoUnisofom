//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');
const {SetDependenciaPuestoPeriodoSchema } = require('./setDependenciaPuestoPeriodo');


const SetDatosGeneralesCompletosPFSchema = Schema({
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
  setDatosGeneralesCompletosPF: {
    type: String,
  },
datosDeNacionalidad : { 
        type :Array,
 }, 
rfcConHomoclave : { 
        type :String,
 }, 
datosBasicos : { 
        type :Array,
 }, 
actividadOGiroDeNegocio : { 
        type :String,
 }, 
ocupacionPropietario : { 
        type :String,
 }, 
estadoCivilYRegimen : { 
        type :String,
 }, 
calidadMigratoria : { 
        type :String,
 }, 
profesionPropietario : { 
        type :String,
 }, 
numeroSerieFirmaElectronica : { 
        type :String,
 }, 
curp : { 
        type :String,
 }, 
dependenciaPuestoPeriodo : { 
        type :Array,
 }, 
cargoPublico : { 
        type : String,
 }, 
genero : { 
        type : String,
 }, 

});

SetDatosGeneralesCompletosPFSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

//module.exports = model( 'SetDatosGeneralesCompletosPF', SetDatosGeneralesCompletosPFSchema );

const SetDatosGeneralesCompletosPF= model( 'SetDatosGeneralesCompletosPF', SetDatosGeneralesCompletosPFSchema );
 module.exports = {SetDatosGeneralesCompletosPF,SetDatosGeneralesCompletosPFSchema}

