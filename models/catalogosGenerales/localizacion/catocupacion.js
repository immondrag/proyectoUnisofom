//<%IniModeloBC%>
const { Schema, model } = require('mongoose');
const CatOcupacionSchema = Schema({
  CLAVE: {type: String,},
  CLASIFICACION: {type: String,},
});

CatOcupacionSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model( 'CatOcupacion', CatOcupacionSchema );

