//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');
const TasaOCuotaSchema = Schema({
    rangoOFijo: {
        type: String,
      },
      minimo: {
        type: String,
      },
      maximo: {
        type: String,
      },
      impuesto: {
        type: String,
      },
      factor: {
        type: String,
      },
      traslado: {

        type: String,
      },
      retencion: {
        type: String,
      },
      fechaInicioDeVigencia: {
        type: String,
      },
      fechaFinDeVigencia: {
        type: String,
      },

});

TasaOCuotaSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model( 'TasaOCuota', TasaOCuotaSchema );

