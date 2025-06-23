//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');
const {SetDatosBasicosUnaDireccionPMSchema } = require('./setDatosBasicosUnaDireccionPM');


const SetDatosProveedorPrincipalPersonaMoralSchema = Schema({
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
  setDatosProveedorPrincipalPersonaMoral: {
    type: String,
  },
rfcConHomoclave : { 
        type :String,
 }, 
datosBasicos : { 
        type :Array,
 }, 
montoPromedioMensualOperado : { 
        type :Number,
 }, 
plazo : { 
        type :String,
 }, 
paginaWeb : { 
        type :String,
 }, 

});

SetDatosProveedorPrincipalPersonaMoralSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

//module.exports = model( 'SetDatosProveedorPrincipalPersonaMoral', SetDatosProveedorPrincipalPersonaMoralSchema );

const SetDatosProveedorPrincipalPersonaMoral= model( 'SetDatosProveedorPrincipalPersonaMoral', SetDatosProveedorPrincipalPersonaMoralSchema );
 module.exports = {SetDatosProveedorPrincipalPersonaMoral,SetDatosProveedorPrincipalPersonaMoralSchema}

