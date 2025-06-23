//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');
const UsoCFDIchema = Schema({
    id: {
        type: String,
      },
      descripcion: {
        type: String,
      },
      aplicaParaTipoPersonaFisica: {
        type: String,
      },
      aplicaParaTipoPersonaMoral: {
        type: String,
      },
      fechaInicioDeVigencia: {
        type: String,
      },
      fechaFinDeVigencia: {
        type: String,
      },
      regimenFiscalReceptor: {
        type: String,
      },
});

UsoCFDIchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model( 'UsoCFDI', UsoCFDIchema );

