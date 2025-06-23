//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require("mongoose");

const ControlArchivosSchema = Schema({
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
  origen: {
    type: String,
  },
  origenID: {
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
    ref: "RegistroUsuario",
    required: true,
  },

  nombreArchivo:{
    type: String,
  },
  nombreOriginal:{
    type: String,
  },
  path:{
    type: String,
  },
  mimetype:{
    type: String,
  },
  categoriaArchivo: {
    type: String,
  },
  catCategoriaArchivoId: {
    type: Schema.Types.ObjectId,
    ref: "CatCategoriaArchivo",
  },
  subCategoriaArchivo: {
    type: String,
  },
  catSubCategoriaArchivoId: {
    type: Schema.Types.ObjectId,
    ref: "CatSubCategoriaArchivo",
  }
});

ControlArchivosSchema.method("toJSON", function () {
  const { __v, ...object } = this.toObject();
  return object;
});

//module.exports = model( 'Archivos', ArchivosSchema );

const ControlArchivos = model(
  "ControlArchivos",
  ControlArchivosSchema
);
module.exports = { ControlArchivos, ControlArchivosSchema };
