//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');
const CatCodigoPostalSchema = Schema({
    d_codigo: {type: String,},
    d_asenta:{type: String,},
    d_tipo_asenta: {type: String,},
    D_mnpio: {type: String,},
    d_estado: {type: String,},
    d_ciudad: {type: String,},
    d_CP: {type: String,},
    c_estado: {type: String,},
    c_oficina: {type: String,},
    c_tipo_asenta: {type: String,},
    c_mnpio: {type: String,},
    id_asenta_cpcons: {type: String,},
    d_zona: {type: String,},
    c_cve_ciudad: {type: String,},     
});

CatCodigoPostalSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model( 'CatCodigoPostal', CatCodigoPostalSchema );

