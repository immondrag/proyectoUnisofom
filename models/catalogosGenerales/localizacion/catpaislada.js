//<%IniModeloBC%>
const { Schema, model } = require('mongoose');
const CatPaisLadaSchema = Schema({
    Nombre: {type: String,},
    Ladainternacional: {type: String,},
    Formula:{type: String,},
    PAIS_LADA:{type: String,},
});

CatPaisLadaSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model( 'CatPaisLada', CatPaisLadaSchema );

