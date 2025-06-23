//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');
const NumPedimentoAduanaSchema = Schema({
    c_Aduana: {
        type: String,
      },
      patente: {
        type: String,
      },
      ejercicio: {
        type: String,
      },
      cantidad: {
        type: String,
      },
      fechaInicioDeVigencia: {
        type: String,
      },
      fechaFinDeVigencia: {
        type: String,
      },
});

NumPedimentoAduanaSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model( 'NumPedimentoAduana', NumPedimentoAduanaSchema );

