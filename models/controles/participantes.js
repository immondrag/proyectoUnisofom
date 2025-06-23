//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require("mongoose");

const ParticipantesSchema = Schema({
  creado: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  status: {
    type: String,
    required: true,
    default: "Activo",
  },
  nombreDocumento: {
    type: String,
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
    required: true,
  },
  usuarioAsignadoId: {
    type: Schema.Types.ObjectId,
    ref: "RegistroUsuario",
  },
  usuarioAsignadoRol: {
    type: String,
  },
  usuarioAsignadoNombre: {
    type: String,
  },
  nombreDocumento: {
    type: String,
  },
  registroNuevoProyectoCtc: {
    type: Schema.Types.ObjectId,
    ref: "RegistroNuevoProyectoCtc",
  },
});

ParticipantesSchema.method("toJSON", function () {
  const { __v, ...object } = this.toObject();
  return object;
});

//module.exports = model( 'Documentos', DocumentosSchema );

const Participantes = model("Participantes", ParticipantesSchema);
module.exports = { Participantes, ParticipantesSchema };
