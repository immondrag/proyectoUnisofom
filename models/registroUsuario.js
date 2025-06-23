//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require("mongoose");

//relacion

const RegistroUsuarioSchema = Schema({
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
  registroMiEmpresa: {
    type: Schema.Types.ObjectId,
    ref: "RegistroMiEmpresa",
  },

  trato: {
    type: String,
  },
  nombre: {
    type: String,
  },
  apellidoPaterno: {
    type: String,
  },
  apellidoMaterno: {
    type: String,
  },
  nombreCompleto: {
    type: String,
  },
  statusUsuario: {
    type: String,
  },
  rolUsuario: {
    type: String,
     default: 'USUARIO',
  },
  email: {
    type: String,
  },
  emailConfirmado: {
    type: Boolean,
    default: true,
  },
  password: {
    type: String,
  },
  google: {
    type: Boolean,
    default: false,
  },
  img: {
    type: String,
    default: "assets/images/users/1.jpg",
  },

  fechaNacimiento: {
    type: Date,
  },
  edadActual: {
    type: String,
  },
  sexo: {
    type: String,
  },
});

RegistroUsuarioSchema.method("toJSON", function () {
  const { __v, ...object } = this.toObject();
  return object;
});

//module.exports = model( 'RegistroUsuario', RegistroUsuarioSchema );

const RegistroUsuario = model("RegistroUsuario", RegistroUsuarioSchema);
module.exports = { RegistroUsuario, RegistroUsuarioSchema };
