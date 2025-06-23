

const { Schema, model } = require("mongoose");
//const  {RegistroUsuarioSchema }= require('../../models/controles/registroUsuario');


const RegistroMiEmpresaSchema = Schema({
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
  estatus: {
    type: String,
    required: true,
    default: "ALTA",
  },
  usuarioPrincipal: {
    type: String,
  },
  especialidadUsuarioPrincipal: {
    type: Schema.Types.ObjectId,
    ref: "catalogoGeneral",
  },
  emailUsuarioPrincipal: {
    type: String,
  },
  nombrePersonaOEmpresa: {
    type: String,
  },
  telefonoUsuarioPrincipal: {
    type: String,
  },
  paisConLada: {
     type: String,
  },

  //relaciones

});

RegistroMiEmpresaSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.uid = _id;
  return object;
});

const RegistroMiEmpresa = model("RegistroMiEmpresa", RegistroMiEmpresaSchema);
module.exports = { RegistroMiEmpresa, RegistroMiEmpresaSchema };
