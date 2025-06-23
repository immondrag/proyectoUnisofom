//<%IniModeloBC%>
const { Schema, model } = require('mongoose');
const CatReligionSchema = Schema({
    CLAVECREDO: {type: String,},
    CREDO: {type: String,},
    CLAVEGRUPO: {type: String,},
    GRUPO: {type: String,},
    CLAVEDENOMINACION: {type: String,},
    DENOMINACION: {type: String,},
    CLAVERELIGION: {type: String,},
    RELIGION: {type: String,},
});

CatReligionSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model( 'CatReligion', CatReligionSchema );

