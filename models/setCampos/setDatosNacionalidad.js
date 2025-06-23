//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');


const SetDatosNacionalidadSchema = Schema({
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
  setDatosNacionalidad: {
    type: String,
  },
pais : { 
        type : String,
 }, 
fechaDeNacimiento : { 
        type : String,
 }, 
entidadFederativaNacimiento : { 
        type : String,
 }, 
nacionalidad : { 
        type : String,
 }, 

});

SetDatosNacionalidadSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

//module.exports = model( 'SetDatosNacionalidad', SetDatosNacionalidadSchema );

const SetDatosNacionalidad= model( 'SetDatosNacionalidad', SetDatosNacionalidadSchema );
 module.exports = {SetDatosNacionalidad,SetDatosNacionalidadSchema}

