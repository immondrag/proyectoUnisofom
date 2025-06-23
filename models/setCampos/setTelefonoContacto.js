//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');


const SetTelefonoContactoSchema = Schema({
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
  setTelefonoContacto: {
    type: String,
  },
telefono : { 
        type :Number,
 }, 
extension : { 
        type :String,
 }, 
paisConLada : { 
        type : String,
 }, 
usoMedioContacto : { 
        type : String,
 }, 

});

SetTelefonoContactoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

//module.exports = model( 'SetTelefonoContacto', SetTelefonoContactoSchema );

const SetTelefonoContacto= model( 'SetTelefonoContacto', SetTelefonoContactoSchema );
 module.exports = {SetTelefonoContacto,SetTelefonoContactoSchema}

