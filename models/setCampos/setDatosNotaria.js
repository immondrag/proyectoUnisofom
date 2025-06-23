//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');


const SetDatosNotariaSchema = Schema({
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
  setDatosNotaria: {
    type: String,
  },
numeroNotaria : { 
        type :Number,
 }, 
nombreNotaria : { 
        type :String,
 }, 
demarcacionNotaria : { 
        type :String,
 }, 

});

SetDatosNotariaSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

//module.exports = model( 'SetDatosNotaria', SetDatosNotariaSchema );

const SetDatosNotaria= model( 'SetDatosNotaria', SetDatosNotariaSchema );
 module.exports = {SetDatosNotaria,SetDatosNotariaSchema}

