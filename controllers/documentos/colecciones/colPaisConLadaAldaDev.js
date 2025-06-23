const { response } = require('express');

const {getIdRelacion,agregarLogDocumentos,agregarParticipante} = require("../../../middlewares/funciones")
const {ColPaisConLadaAldaDev} = require('../../../models/documentos/colecciones/colPaisConLadaAldaDev');
const { Participantes } = require('../../../models/controles/participantes');


//relacion externa
const crearColPaisConLadaAldaDev = async (req, res = response) => {
    const uid = req.uid;
    try {
    const idrelacion = getIdRelacion(req);



    const colPaisConLadaAldaDev = new ColPaisConLadaAldaDev({
        usuario: uid,
    registroMiEmpresa : idrelacion,
        ...req.body
    });
    




     
     const colPaisConLadaAldaDevBD = await colPaisConLadaAldaDev.save();//
    res.json({ok: true,colPaisConLadaAldaDev: colPaisConLadaAldaDevBD,colPaisConLadaAldaDevId:colPaisConLadaAldaDevBD._id});//
    } catch (e) {
     console.log(e);
    res.status(500).json({ok: false,msg: "Hable con el administrador",});}
}

const getColPaisConLadaAldaDev = async(req, res = response) => {
   const idrelacion = getIdRelacion(req);
   const usuarioAsignadoId = req.uid;
   const usuarioAsignadoRol = req.urolUsuario;

    try {

    let pt;
    if (req.query.filtro=='filtraPorRolActivo'){
     await Participantes.find({usuarioAsignadoRol}).populate("colPaisConLadaAldaDev").then(participantes=>{pt=participantes.map((element)=>{
         if (element.colPaisConLadaAldaDev){return {...element.colPaisConLadaAldaDev._doc}}});
     })   
    } else if (req.query.filtro=='filtraPorUsuarioActivo'){
     await Participantes.find({usuarioAsignadoId}).populate("colPaisConLadaAldaDev").then(participantes=>{pt=participantes.map((element)=>{
           if (element.colPaisConLadaAldaDev){return {...element.colPaisConLadaAldaDev._doc}}});
       })   
    }else{
      //  await Participantes.find().populate("colPaisConLadaAldaDev").then(participantes=>{pt=participantes.map((element)=>{
      //        if (element.colPaisConLadaAldaDev){return {...element.colPaisConLadaAldaDev._doc}}});
        //  })   
        pt= await ColPaisConLadaAldaDev.find({registroMiEmpresa: idrelacion});    const colPaisConLadaAldaDev = await ColPaisConLadaAldaDev.find({registroMiEmpresa: idrelacion});
      }

    let colPaisConLadaAldaDev=pt.map(elD=> { if (elD){if(elD._doc) {elD=elD._doc;};return {...elD,
    } } });
    res.json({ok: true,colPaisConLadaAldaDev,});
    } catch (e) {
    console.log(e);
    res.json({ok: true,msg: "Hable con el administrador",});}
}


const getColPaisConLadaAldaDevAll = async(req, res = response) => {
   try {
   let colPaisConLadaAldaDev = await ColPaisConLadaAldaDev.find().populate('registroMiEmpresa');
    colPaisConLadaAldaDev=colPaisConLadaAldaDev.map(elD=> {return {...elD._doc,
    }  })
   res.json({ok: true,colPaisConLadaAldaDev,});
   } catch (e) {
   console.log(e);
   res.json({ok: true,msg: "Hable con el administrador",});}
}




const borrarColPaisConLadaAldaDev = async (req, res = response) => {
  const id = req.params.id;



  
  await ColPaisConLadaAldaDev.findByIdAndDelete(id).then((valor) => {
  res.send({ok: true,msg: "Registro  se borro con exito",});
  }).catch((e) => {console.log(e);res.status(400).send(e);});


}



const getColPaisConLadaAldaDevById = async(req, res = response) => {
  const id = req.params.id;
  await ColPaisConLadaAldaDev.findById(id).then((valor) => {
  let colPaisConLadaAldaDev={...valor._doc,
  }
  res.send({ok: true,colPaisConLadaAldaDev:colPaisConLadaAldaDev,});
  }).catch((e) => {console.log(e);res.status(400).send(e);});
}


const actualizarColPaisConLadaAldaDev = async(req, res = response) => {
  const id = req.params.id;
  const uid = req.uid;


  //BORRA ELEMENTOS

//iNSERTA NUEVOS


  try {
  const colPaisConLadaAldaDev =await ColPaisConLadaAldaDev.findById(id);
  if (!colPaisConLadaAldaDev) {return res.status(404).json({ok: true, msg: "Registro no encontrado por id",});};
  const cambiosColPaisConLadaAldaDev = {...req.body,usuario: uid,};
  var ObjectId = require("mongodb").ObjectID;
  const colPaisConLadaAldaDevActulizado =await ColPaisConLadaAldaDev.updateOne({_id: new ObjectId(id),},cambiosColPaisConLadaAldaDev);
  res.json({ok: true,colPaisConLadaAldaDev: colPaisConLadaAldaDevActulizado,});
  } catch (e) {console.log(e);res.status(500).json({ok: false,msg: "Hable con el administrador",}); }
}


module.exports = {
    getColPaisConLadaAldaDev,
    getColPaisConLadaAldaDevAll,
    crearColPaisConLadaAldaDev,
    actualizarColPaisConLadaAldaDev,
    borrarColPaisConLadaAldaDev,
    getColPaisConLadaAldaDevById
}
