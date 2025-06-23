//<%IniModeloBC%>
const { Schema, model } = require('mongoose');
const CatNacionalidadSchema = Schema({
      codigopais: {type: String,},
      pais: {type: String,},
      clavenacionalidad: {type: String,},

});

CatNacionalidadSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model( 'CatNacionalidad', CatNacionalidadSchema );

