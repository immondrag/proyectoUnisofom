//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');
const MetodoPagoSchema = Schema({
    id: {
        type: String,
      },
      descripcion: {
        type: String,
      },
      fechaInicioDeVigencia: {
        type: String,
      },
      fechaFinDeVigencia: {
        type: String,
      },
});

MetodoPagoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model( 'MetodoPago', MetodoPagoSchema );

