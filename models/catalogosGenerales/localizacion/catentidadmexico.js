//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');
const CatEntidadMexicoSchema = Schema({
      CATALOG_KEY: {
        type: String,
      },
      ENTIDAD_FEDERATIVA: {
        type: String,
      },
      ABREVIATURA: {
        type: String,
      },
});

CatEntidadMexicoSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object._id = _id;
  return object;
});

module.exports = model( 'CatEntidadMexico', CatEntidadMexicoSchema );

