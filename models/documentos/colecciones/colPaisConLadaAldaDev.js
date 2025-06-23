//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');
// control rudo documentos archivos



//
//relacion 

const ColPaisConLadaAldaDevSchema = Schema({
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



registroMiEmpresa: {
type: Schema.Types.ObjectId,
  ref: 'RegistroMiEmpresa'
 },

nombre : { 
        type :String,
 }, 

ladaInternacional : { 
        type :String,
 }, 

paisConLada : { 
        type :String,
 }, 


});

ColPaisConLadaAldaDevSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

//module.exports = model( 'ColPaisConLadaAldaDev', ColPaisConLadaAldaDevSchema );

const ColPaisConLadaAldaDev= model( 'ColPaisConLadaAldaDev', ColPaisConLadaAldaDevSchema );
 module.exports = {ColPaisConLadaAldaDev,ColPaisConLadaAldaDevSchema}

