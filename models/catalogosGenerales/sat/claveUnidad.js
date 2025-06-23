//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');
const ClaveUnidadSchema = Schema({
    id: {
        type: String,
      },
      nombre: {
        type: String,
      },
      descripcion: {
        type: String,
      },
      nota: {
        type: String,
      },
      fechaDeInicioDeVigencia: {
        type: String,
      },
      fechaDeFinDeVigencia: {
        type: String,
      },
      simbolo: {
        type: String,
      },

});

ClaveUnidadSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model( 'ClaveUnidad', ClaveUnidadSchema );

