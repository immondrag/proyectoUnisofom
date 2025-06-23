//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');


const SetDatosPersonalesNombreCompletoSchema = Schema({
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
  setDatosPersonalesNombreCompleto: {
    type: String,
  },
apellidoPaterno : { 
        type :String,
 }, 
nombre : { 
        type :String,
 }, 
nombreCompleto : { 
        type :String,
 }, 
apellidoMaterno : { 
        type :String,
 }, 
trato : { 
        type : String,
 }, 

});

SetDatosPersonalesNombreCompletoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

//module.exports = model( 'SetDatosPersonalesNombreCompleto', SetDatosPersonalesNombreCompletoSchema );

const SetDatosPersonalesNombreCompleto= model( 'SetDatosPersonalesNombreCompleto', SetDatosPersonalesNombreCompletoSchema );
 module.exports = {SetDatosPersonalesNombreCompleto,SetDatosPersonalesNombreCompletoSchema}

