//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');


const SetPersonaContactoSchema = Schema({
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
  setPersonaContacto: {
    type: String,
  },
telefonoContacto : { 
        type :Array,
 }, 
mailContacto : { 
        type :Array,
 }, 
nombreCompleto : { 
        type :Array,
 }, 

});

SetPersonaContactoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

//module.exports = model( 'SetPersonaContacto', SetPersonaContactoSchema );

const SetPersonaContacto= model( 'SetPersonaContacto', SetPersonaContactoSchema );
 module.exports = {SetPersonaContacto,SetPersonaContactoSchema}

