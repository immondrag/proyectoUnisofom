//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');


const SetMailContactoSchema = Schema({
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
  setMailContacto: {
    type: String,
  },
mail : { 
        type :String,
 }, 
usoMedioContacto : { 
        type : String,
 }, 

});

SetMailContactoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

//module.exports = model( 'SetMailContacto', SetMailContactoSchema );

const SetMailContacto= model( 'SetMailContacto', SetMailContactoSchema );
 module.exports = {SetMailContacto,SetMailContactoSchema}

