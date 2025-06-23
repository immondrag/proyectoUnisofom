//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');
const TipoComprobanteSchema = Schema({
    id: {
        type: String,
      },
      descripcion: {
        type: String,
      },
      valorMaximoNS: {
        type: String,
      },
      valorMaximoNdS: {
        type: String,
      },
      fechaInicioDeVigencia: {
        type: String,
      },
      fechaFinDeVigencia: {
        type: String,
      },
});

TipoComprobanteSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model( 'TipoComprobante', TipoComprobanteSchema );

