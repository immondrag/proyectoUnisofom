//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');
const ClaveProdServSchema = Schema({
 id: {
    type: String,
  },
  descripcion: {
    type: String,
  },
  incluirIVATrasladado: {
    type: String,
  },
  incluirIEPSTrasladado: {
    type: String,
  },
  complementoQueDebeIncluir: {
    type: String,
  },
  fechaInicioVigencia: {
    type: String,
  },
  fechaFinVigencia: {
    type: String,
  },
  estimuloFranjaFronteriza: {
    type: String,
  },
  palabrasSimilares: {
    type: String,
  },
});

ClaveProdServSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model( 'ClaveProdServ', ClaveProdServSchema );

