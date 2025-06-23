const { response } = require('express');

const {getIdRelacion,agregarLogDocumentos,agregarParticipante} = require("../../../middlewares/funciones")
const {ColRegimenFiscalAldaDev} = require('../../../models/documentos/colecciones/colRegimenFiscalAldaDev');
const { Participantes } = require('../../../models/controles/participantes');


//relacion externa
const crearColRegimenFiscalAldaDev = async (req, res = response) => {
    const uid = req.uid;
    try {
    const idrelacion = getIdRelacion(req);



    const colRegimenFiscalAldaDev = new ColRegimenFiscalAldaDev({
        usuario: uid,
    registroMiEmpresa : idrelacion,
        ...req.body
    });
    




     
     const colRegimenFiscalAldaDevBD = await colRegimenFiscalAldaDev.save();//
    res.json({ok: true,colRegimenFiscalAldaDev: colRegimenFiscalAldaDevBD,colRegimenFiscalAldaDevId:colRegimenFiscalAldaDevBD._id});//
    } catch (e) {
     console.log(e);
    res.status(500).json({ok: false,msg: "Hable con el administrador",});}
}

const getColRegimenFiscalAldaDev = async(req, res = response) => {
   const idrelacion = getIdRelacion(req);
   const usuarioAsignadoId = req.uid;
   const usuarioAsignadoRol = req.urolUsuario;

    try {

    let pt;
    if (req.query.filtro=='filtraPorRolActivo'){
     await Participantes.find({usuarioAsignadoRol}).populate("colRegimenFiscalAldaDev").then(participantes=>{pt=participantes.map((element)=>{
         if (element.colRegimenFiscalAldaDev){return {...element.colRegimenFiscalAldaDev._doc}}});
     })   
    } else if (req.query.filtro=='filtraPorUsuarioActivo'){
     await Participantes.find({usuarioAsignadoId}).populate("colRegimenFiscalAldaDev").then(participantes=>{pt=participantes.map((element)=>{
           if (element.colRegimenFiscalAldaDev){return {...element.colRegimenFiscalAldaDev._doc}}});
       })   
    }else{
      //  await Participantes.find().populate("colRegimenFiscalAldaDev").then(participantes=>{pt=participantes.map((element)=>{
      //        if (element.colRegimenFiscalAldaDev){return {...element.colRegimenFiscalAldaDev._doc}}});
        //  })   
        pt= await ColRegimenFiscalAldaDev.find({registroMiEmpresa: idrelacion});    const colRegimenFiscalAldaDev = await ColRegimenFiscalAldaDev.find({registroMiEmpresa: idrelacion});
      }

    let colRegimenFiscalAldaDev=pt.map(elD=> { if (elD){if(elD._doc) {elD=elD._doc;};return {...elD,
    } } });
    res.json({ok: true,colRegimenFiscalAldaDev,});
    } catch (e) {
    console.log(e);
    res.json({ok: true,msg: "Hable con el administrador",});}
}


const getColRegimenFiscalAldaDevAll = async(req, res = response) => {
   try {
   let colRegimenFiscalAldaDev = await ColRegimenFiscalAldaDev.find().populate('registroMiEmpresa');
    colRegimenFiscalAldaDev=colRegimenFiscalAldaDev.map(elD=> {return {...elD._doc,
    }  })
   res.json({ok: true,colRegimenFiscalAldaDev,});
   } catch (e) {
   console.log(e);
   res.json({ok: true,msg: "Hable con el administrador",});}
}




const borrarColRegimenFiscalAldaDev = async (req, res = response) => {
  const id = req.params.id;



  
  await ColRegimenFiscalAldaDev.findByIdAndDelete(id).then((valor) => {
  res.send({ok: true,msg: "Registro  se borro con exito",});
  }).catch((e) => {console.log(e);res.status(400).send(e);});


}



const getColRegimenFiscalAldaDevById = async(req, res = response) => {
  const id = req.params.id;
  await ColRegimenFiscalAldaDev.findById(id).then((valor) => {
  let colRegimenFiscalAldaDev={...valor._doc,
  }
  res.send({ok: true,colRegimenFiscalAldaDev:colRegimenFiscalAldaDev,});
  }).catch((e) => {console.log(e);res.status(400).send(e);});
}


const actualizarColRegimenFiscalAldaDev = async(req, res = response) => {
  const id = req.params.id;
  const uid = req.uid;


  //BORRA ELEMENTOS

//iNSERTA NUEVOS


  try {
  const colRegimenFiscalAldaDev =await ColRegimenFiscalAldaDev.findById(id);
  if (!colRegimenFiscalAldaDev) {return res.status(404).json({ok: true, msg: "Registro no encontrado por id",});};
  const cambiosColRegimenFiscalAldaDev = {...req.body,usuario: uid,};
  var ObjectId = require("mongodb").ObjectID;
  const colRegimenFiscalAldaDevActulizado =await ColRegimenFiscalAldaDev.updateOne({_id: new ObjectId(id),},cambiosColRegimenFiscalAldaDev);
  res.json({ok: true,colRegimenFiscalAldaDev: colRegimenFiscalAldaDevActulizado,});
  } catch (e) {console.log(e);res.status(500).json({ok: false,msg: "Hable con el administrador",}); }
}


module.exports = {
    getColRegimenFiscalAldaDev,
    getColRegimenFiscalAldaDevAll,
    crearColRegimenFiscalAldaDev,
    actualizarColRegimenFiscalAldaDev,
    borrarColRegimenFiscalAldaDev,
    getColRegimenFiscalAldaDevById
}
