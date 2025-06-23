const mongoose = require('mongoose');
const { env } = require("process");
const { response } = require ('express');
const xlsxFile = require('read-excel-file/node');

const CatalogoGeneral= require('../models/generales/catalogoGeneral');
const CatalogoCIE10= require('../models/medicos/catalogoCIE10');
const CatalogoCIE9= require('../models/medicos/catalogoCIE9');
const { catalogoGeneral,catalogoCIE10,catalogoCIE9} = require('../models/generales/catalogo');

const dataCatalogosXLS = () =>{

    xlsxFile(env.pathExcel, { getSheets: true }).then((sheets) => {
    sheets.forEach((obj)=>{
      
        var hoja= obj.name;
        
        var flag=false;
        var schema;
         switch (hoja){
            case 'catalogoGeneral':  
                schema= catalogoGeneral; 
                flag=true;
            break;
            case 'catalogoCIE10':
                schema= catalogoCIE10; 
                flag=true;
            break;
            case 'catalogoCIE9':
                schema= catalogoCIE9;  
                flag=true;
             break;
          
        }

        if (flag){
            xlsxFile(env.pathExcel,{schema,sheet:hoja}).then((rows) => {
               //console.log(schema);
                guardarNotas({rows,hoja}); 
            });
        }
    })
});
}

const guardarNotas= async({rows,hoja}, res = response)=>{

    try {
        switch (hoja){
            case 'catalogoGeneral':  
                const catalogoGeneral = CatalogoGeneral.find();
                const catalogoGeneralresult = await catalogoGeneral.deleteMany({});;
                console.log("Deleted " + catalogoGeneralresult.deletedCount + " "+hoja);
                rows.rows.forEach(element => {
                    const nota = new CatalogoGeneral(element);
                     nota.save();
                });
                console.log('Registros insertados '+hoja);
            break;
            case 'catalogoCIE10':
                const cie10 = CatalogoCIE10.find();
                const cie10result = await cie10.deleteMany({});;
                console.log("Deleted " + cie10result.deletedCount + " "+hoja);
                rows.rows.forEach(element => {
                    
                    const nota = new CatalogoCIE10(element);
                     nota.save();
                });
                console.log('Registros insertados '+hoja);
            break;
            case 'catalogoCIE9':
                const cie9 = CatalogoCIE9.find();
                const cie9result = await cie9.deleteMany({});;
                console.log("Deleted " + cie9result.deletedCount + " "+hoja);
                
                rows.rows.forEach(element => {
                    const nota = new CatalogoCIE9(element);
                    nota.save();
                });
                console.log('Registros insertados '+hoja);
            break;
        }
    } catch (error) {
        console.log(error)
    }
 
}

module.exports = {
    dataCatalogosXLS
}
