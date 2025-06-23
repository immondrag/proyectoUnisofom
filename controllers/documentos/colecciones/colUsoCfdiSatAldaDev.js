const { response } = require('express');

const {getIdRelacion,agregarLogDocumentos,agregarParticipante} = require("../../../middlewares/funciones")
const {ColUsoCfdiSatAldaDev} = require('../../../models/documentos/colecciones/colUsoCfdiSatAldaDev');
const { Participantes } = require('../../../models/controles/participantes');


//relacion externa
const crearColUsoCfdiSatAldaDev = async (req, res = response) => {
    const uid = req.uid;
    try {
    const idrelacion = getIdRelacion(req);



    const colUsoCfdiSatAldaDev = new ColUsoCfdiSatAldaDev({
        usuario: uid,
    registroMiEmpresa : idrelacion,
        ...req.body
    });
    




     
     const colUsoCfdiSatAldaDevBD = await colUsoCfdiSatAldaDev.save();//
    res.json({ok: true,colUsoCfdiSatAldaDev: colUsoCfdiSatAldaDevBD,colUsoCfdiSatAldaDevId:colUsoCfdiSatAldaDevBD._id});//
    } catch (e) {
     console.log(e);
    res.status(500).json({ok: false,msg: "Hable con el administrador",});}
}

const getColUsoCfdiSatAldaDev = async(req, res = response) => {
   const idrelacion = getIdRelacion(req);
   const usuarioAsignadoId = req.uid;
   const usuarioAsignadoRol = req.urolUsuario;

    try {

    let pt;
    if (req.query.filtro=='filtraPorRolActivo'){
     await Participantes.find({usuarioAsignadoRol}).populate("colUsoCfdiSatAldaDev").then(participantes=>{pt=participantes.map((element)=>{
         if (element.colUsoCfdiSatAldaDev){return {...element.colUsoCfdiSatAldaDev._doc}}});
     })   
    } else if (req.query.filtro=='filtraPorUsuarioActivo'){
     await Participantes.find({usuarioAsignadoId}).populate("colUsoCfdiSatAldaDev").then(participantes=>{pt=participantes.map((element)=>{
           if (element.colUsoCfdiSatAldaDev){return {...element.colUsoCfdiSatAldaDev._doc}}});
       })   
    }else{
      //  await Participantes.find().populate("colUsoCfdiSatAldaDev").then(participantes=>{pt=participantes.map((element)=>{
      //        if (element.colUsoCfdiSatAldaDev){return {...element.colUsoCfdiSatAldaDev._doc}}});
        //  })   
        pt= await ColUsoCfdiSatAldaDev.find({registroMiEmpresa: idrelacion});    const colUsoCfdiSatAldaDev = await ColUsoCfdiSatAldaDev.find({registroMiEmpresa: idrelacion});
      }

    let colUsoCfdiSatAldaDev=pt.map(elD=> { if (elD){if(elD._doc) {elD=elD._doc;};return {...elD,
    } } });
    res.json({ok: true,colUsoCfdiSatAldaDev,});
    } catch (e) {
    console.log(e);
    res.json({ok: true,msg: "Hable con el administrador",});}
}


const getColUsoCfdiSatAldaDevAll = async(req, res = response) => {
   try {
   let colUsoCfdiSatAldaDev = await ColUsoCfdiSatAldaDev.find().populate('registroMiEmpresa');
    colUsoCfdiSatAldaDev=colUsoCfdiSatAldaDev.map(elD=> {return {...elD._doc,
    }  })
   res.json({ok: true,colUsoCfdiSatAldaDev,});
   } catch (e) {
   console.log(e);
   res.json({ok: true,msg: "Hable con el administrador",});}
}




const borrarColUsoCfdiSatAldaDev = async (req, res = response) => {
  const id = req.params.id;



  
  await ColUsoCfdiSatAldaDev.findByIdAndDelete(id).then((valor) => {
  res.send({ok: true,msg: "Registro  se borro con exito",});
  }).catch((e) => {console.log(e);res.status(400).send(e);});


}



const getColUsoCfdiSatAldaDevById = async(req, res = response) => {
  const id = req.params.id;
  await ColUsoCfdiSatAldaDev.findById(id).then((valor) => {
  let colUsoCfdiSatAldaDev={...valor._doc,
  }
  res.send({ok: true,colUsoCfdiSatAldaDev:colUsoCfdiSatAldaDev,});
  }).catch((e) => {console.log(e);res.status(400).send(e);});
}


const actualizarColUsoCfdiSatAldaDev = async(req, res = response) => {
  const id = req.params.id;
  const uid = req.uid;


  //BORRA ELEMENTOS

//iNSERTA NUEVOS


  try {
  const colUsoCfdiSatAldaDev =await ColUsoCfdiSatAldaDev.findById(id);
  if (!colUsoCfdiSatAldaDev) {return res.status(404).json({ok: true, msg: "Registro no encontrado por id",});};
  const cambiosColUsoCfdiSatAldaDev = {...req.body,usuario: uid,};
  var ObjectId = require("mongodb").ObjectID;
  const colUsoCfdiSatAldaDevActulizado =await ColUsoCfdiSatAldaDev.updateOne({_id: new ObjectId(id),},cambiosColUsoCfdiSatAldaDev);
  res.json({ok: true,colUsoCfdiSatAldaDev: colUsoCfdiSatAldaDevActulizado,});
  } catch (e) {console.log(e);res.status(500).json({ok: false,msg: "Hable con el administrador",}); }
}


module.exports = {
    getColUsoCfdiSatAldaDev,
    getColUsoCfdiSatAldaDevAll,
    crearColUsoCfdiSatAldaDev,
    actualizarColUsoCfdiSatAldaDev,
    borrarColUsoCfdiSatAldaDev,
    getColUsoCfdiSatAldaDevById
}
