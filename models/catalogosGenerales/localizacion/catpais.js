//<%IniModeloBC%>
const { Schema, model } = require('mongoose');
const CatPaisSchema = Schema({

    NOMBRE_PAIS: {type: String,},
      'ISO3166-1alfa-2': {
        type: String,
      },

});

CatPaisSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model( 'CatPais', CatPaisSchema );

