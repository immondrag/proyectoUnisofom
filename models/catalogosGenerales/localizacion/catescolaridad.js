//<%IniModeloBC%>
const { Schema, model } = require('mongoose');
const CatEscolaridadSchema = Schema({
    NOMBRE_PAIS: {type: String,},
    CATALOG_KEY:{type: String,},
    FORMACION_ACADEMICA: {type: String,},
    AGRUPACION: {type: String,},
    GRADO: {type: String,},
});

CatEscolaridadSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model( 'CatEscolaridad', CatEscolaridadSchema );

