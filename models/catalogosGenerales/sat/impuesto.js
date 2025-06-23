//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');
const ImpuestoSchema = Schema({
    id: {
        type: String,
      },
      descripcion: {
        type: String,
      },
      retencion: {
        type: String,
      },
      traslado: {
        type: String,
      },
      localOFederal: {
        type: String,
      },
      fechaInicioDeVigencia: {
        type: String,
      },
      fechaFinDeVigencia: {
        type: String,
      },
});

ImpuestoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model( 'Impuesto', ImpuestoSchema );

