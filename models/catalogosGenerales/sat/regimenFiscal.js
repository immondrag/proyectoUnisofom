//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');
const RegimenFiscalSchema = Schema({
    id: {
        type: String,
      },
      descripcion: {
        type: String,
      },
      fisica: {
        type: String,
      },
      moral: {
        type: String,
      },
      fechaDeInicioDeVigencia: {
        type: String,
      },
      fechaDeFinDeVigencia: {
        type: String,
      },
});

RegimenFiscalSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model( 'RegimenFiscal', RegimenFiscalSchema );

