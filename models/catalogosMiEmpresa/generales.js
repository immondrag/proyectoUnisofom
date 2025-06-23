//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require("mongoose");

const GeneralesSchema = Schema({
  status: {
    type: String,
    default: 'finalizado',
  },
  claveCatalogo: {
    type: String,
  },
  claveElemento: {
    type: String,
  },
  nombreElemento: {
    type: String,
  },
  orden: {
    type: Number,
  },
  color: {
    type: String,
  },
  ubicacion: {
    type: String,
  },
  img: {
    type: String,
  },
  subElemento: [
    {
      claveCatalogo: {
        type: String,
      },
      claveElemento: {
        type: String,
      },
      elemento: {
        type: String,
      },
      orden: {
        type: Number,
      },
      ubicacion: {
        type: String,
      },
      img: {
        type: String,
      },
      color: {
        type: String,
    },
    },
  ],
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "RegistroUsuario",
  },
});

GeneralesSchema.method("toJSON", function () {
  const { __v, ...object } = this.toObject();
  return object;
});

//module.exports = model("Generales", GeneralesSchema);

const Generales = model("Generales", GeneralesSchema);
module.exports = { Generales, GeneralesSchema };
