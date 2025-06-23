//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require("mongoose");

const ArchivosSchema = Schema({
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

  nombreArchivo: {
    type: String,
  },

  categoriaArchivo: {
    type: String,
  },
  catCategoriaArchivosCategoriaArchivo: {
    type: Schema.Types.ObjectId,
    ref: "CatalogoGeneral",
  },
  nombreOriginal: {
    type: String,
  },

  subCategoriaArchivo: {
    type: String,
  },
  catSubCategoriaArchivosSubCategoriaArchivo: {
    type: Schema.Types.ObjectId,
    ref: "CatalogoGeneral",
  },
  path: {
    type: String,
  },

  mimetype: {
    type: String,
  },
});

ArchivosSchema.method("toJSON", function () {
  const { __v, ...object } = this.toObject();
  return object;
});

//module.exports = model( 'Archivos', ArchivosSchema );

const Archivos = model("Archivos", ArchivosSchema);
module.exports = { Archivos, ArchivosSchema };
