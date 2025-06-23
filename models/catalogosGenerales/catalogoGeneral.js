//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require('mongoose');
/* 
Catalogos sat integrados 

aduana
exportacion
Meses
objetoImp
patenteAduanal
periodicidad
moneda
tipoFactor
tipoRelacion
*/

const CatalogoGeneralSchema = Schema({
claveCatalogo : { 
        type :String,
 }, 
elemento : { 
        type :String,
 }, 
claveElemento : { 
        type :String,
 }, 
orden : { 
        type :String,
 }, 
subCatalogoDe : { 
        type :String,
 }, 
definicion : { 
        type :String,
 }, 
claveCatalogoNom024 : { 
        type :String,
 }, 
elementoNom024 : { 
        type :String,
 }, 
claveElementoNom024 : { 
        type :String,
 }, 
include : { 
        type :String,
 }, 
exclude : { 
        type :String,
 }, 



});

CatalogoGeneralSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model( 'CatalogoGeneral', CatalogoGeneralSchema );
