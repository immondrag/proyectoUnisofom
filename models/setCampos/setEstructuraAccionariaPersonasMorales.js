//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');


const SetEstructuraAccionariaPersonasMoralesSchema = Schema({
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
  setEstructuraAccionariaPersonasMorales: {
    type: String,
  },
numeroDeActa : { 
        type :String,
 }, 
porcentajeDeParticipacion : { 
        type :Number,
 }, 
fechaDeModificacion : { 
        type :Date,
 }, 
rfcConHomoclave : { 
        type :String,
 }, 
denominacionORazonSocial : { 
        type :String,
 }, 
folioMercantil : { 
        type :String,
 }, 
paisDeResidencia : { 
        type : String,
 }, 

});

SetEstructuraAccionariaPersonasMoralesSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

//module.exports = model( 'SetEstructuraAccionariaPersonasMorales', SetEstructuraAccionariaPersonasMoralesSchema );

const SetEstructuraAccionariaPersonasMorales= model( 'SetEstructuraAccionariaPersonasMorales', SetEstructuraAccionariaPersonasMoralesSchema );
 module.exports = {SetEstructuraAccionariaPersonasMorales,SetEstructuraAccionariaPersonasMoralesSchema}

