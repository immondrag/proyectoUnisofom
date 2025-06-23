const { response } = require('express');

const {getIdRelacion,agregarLogDocumentos,agregarParticipante} = require("../../middlewares/funciones")
const {Participantes} = require('../../models/controles/participantes');


//relacion externa
const crearParticipantes = async (req, res = response) => {
    const uid = req.uid;
    try {
    const idrelacion = getIdRelacion(req);



    const participantes = new Participantes({
        usuario: uid,
    registroNuevoProyectoCtc : idrelacion,
        ...req.body
    });
    




     
     const participantesBD = await participantes.save();//
     agregarLogDocumentos(idrelacion,'',uid,req.body,participantesBD._id,'Participantes');
    res.json({ok: true,participantes: participantesBD,participantesId:participantesBD._id});//
    } catch (e) {
     console.log(e);
    res.status(500).json({ok: false,msg: "Hable con el administrador",});}
}

const getParticipantes = async(req, res = response) => {
   const idrelacion = getIdRelacion(req);

    try {
    let participantes = await Participantes.find({registroNuevoProyectoCtc: idrelacion});
    participantes=participantes.map(elD=> {return {...elD._doc,
      }  })
    res.json({ok: true,participantes,});
    } catch (e) {
    console.log(e);
    res.json({ok: true,msg: "Hable con el administrador",});}
}


const getParticipantesAll = async(req, res = response) => {
   try {
   let participantes = await Participantes.find().populate('registroNuevoProyectoCtc');
    participantes=participantes.map(elD=> {return {...elD._doc,
    }  })
   res.json({ok: true,participantes,});
   } catch (e) {
   console.log(e);
   res.json({ok: true,msg: "Hable con el administrador",});}
}




const borrarParticipantes = async (req, res = response) => {
  const id = req.params.id;



  
  await Participantes.findByIdAndDelete(id).then((valor) => {
  res.send({ok: true,msg: "Registro  se borro con exito",});
  }).catch((e) => {console.log(e);res.status(400).send(e);});


}



const getParticipantesById = async(req, res = response) => {
  const id = req.params.id;
  await Participantes.findById(id).then((valor) => {
  let participantes={...valor._doc,
  }
  res.send({ok: true,participantes:participantes,});
  }).catch((e) => {console.log(e);res.status(400).send(e);});
}


const actualizarParticipantes = async(req, res = response) => {
  const id = req.params.id;
  const uid = req.uid;


  //BORRA ELEMENTOS

//iNSERTA NUEVOS


  try {
  const participantes =await Participantes.findById(id);
  if (!participantes) {return res.status(404).json({ok: true, msg: "Registro no encontrado por id",});};
  const cambiosParticipantes = {...req.body,usuario: uid,};
  var ObjectId = require("mongodb").ObjectID;
  const participantesActulizado =await Participantes.updateOne({_id: new ObjectId(id),},cambiosParticipantes);
  res.json({ok: true,participantes: participantesActulizado,});
  } catch (e) {console.log(e);res.status(500).json({ok: false,msg: "Hable con el administrador",}); }
}


module.exports = {
    getParticipantes,
    getParticipantesAll,
    crearParticipantes,
    actualizarParticipantes,
    borrarParticipantes,
    getParticipantesById
}
