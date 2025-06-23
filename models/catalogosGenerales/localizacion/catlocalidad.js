//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');
const CatLocalidadSchema = Schema({
      CVE_ENT:{type: String,},
      CVE_MUN: {type: String,},
      CVE_LOC: {type: String,},
      NOM_LOC: {type: String,},
});

CatLocalidadSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model( 'CatLocalidad', CatLocalidadSchema );

