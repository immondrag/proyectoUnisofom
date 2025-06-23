//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');

const DocumentosSchema = Schema({
  creado: {
    type: Date,
    required: true,
    default:Date.now()
},
modificado: {
    type: Date,
    required: true,
    default:Date.now()
},
status: {
    type: String,
    required: true,
    default: 'SIN FIRMAR',
  },
  nombreDocumento : { 
    type: String,
}, 

origen : { 
    type: String,
}, 
origenID : { 
    type: Schema.Types.ObjectId,
},
usuarioNombre: {
    type: String,
    required: true,
  },
  usuarioRol: {
    type: String,
    required: true,
  },
usuario: {
type: Schema.Types.ObjectId,
ref: 'RegistroUsuario',
required: true
},

nombreDocumento : { 
        type :String,
 }, 

statusAbre : { 
        type :String,
 }, 

statusCierre : { 
        type :String,
 }, 

 registroNuevoProyectoCtc: {
  type: Schema.Types.ObjectId,
    ref: 'RegistroNuevoProyectoCtc'
   },
  

});

DocumentosSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

//module.exports = model( 'Documentos', DocumentosSchema );

const Documentos= model( 'Documentos', DocumentosSchema );
 module.exports = {Documentos,DocumentosSchema}

