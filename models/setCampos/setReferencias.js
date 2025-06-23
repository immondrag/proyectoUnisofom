//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');


const SetReferenciasSchema = Schema({
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
  setReferencias: {
    type: String,
  },
nombreCompleto : { 
        type :Array,
 }, 
tiempoDeConocerle : { 
        type :String,
 }, 
telefonoContacto : { 
        type :Array,
 }, 
mailContacto : { 
        type :Array,
 }, 
relacion : { 
        type : String,
 }, 

});

SetReferenciasSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

//module.exports = model( 'SetReferencias', SetReferenciasSchema );

const SetReferencias= model( 'SetReferencias', SetReferenciasSchema );
 module.exports = {SetReferencias,SetReferenciasSchema}

