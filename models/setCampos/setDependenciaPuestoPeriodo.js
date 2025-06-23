//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');


const SetDependenciaPuestoPeriodoSchema = Schema({
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
  setDependenciaPuestoPeriodo: {
    type: String,
  },
puesto : { 
        type :String,
 }, 
dependencia : { 
        type :String,
 }, 
periodo : { 
        type :String,
 }, 

});

SetDependenciaPuestoPeriodoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

//module.exports = model( 'SetDependenciaPuestoPeriodo', SetDependenciaPuestoPeriodoSchema );

const SetDependenciaPuestoPeriodo= model( 'SetDependenciaPuestoPeriodo', SetDependenciaPuestoPeriodoSchema );
 module.exports = {SetDependenciaPuestoPeriodo,SetDependenciaPuestoPeriodoSchema}

