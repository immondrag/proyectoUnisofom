//<%IniModeloBC%>
const { Schema, model } = require('mongoose');
const CatMunicipioSchema = Schema({
    EFE_KEY: {type: String,},
    CATALOG_KEY: {type: String,},
    MUNICIPIO: {type: String,},
});

CatMunicipioSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model( 'CatMunicipio', CatMunicipioSchema );

