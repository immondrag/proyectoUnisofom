const { response } = require('express');

const {getIdRelacion,agregarLogDocumentos,agregarParticipante} = require("../../../middlewares/funciones")
const {RegistroNuevoFormulario} = require('../../../models/documentos/principalunisofom/registroNuevoFormulario');
const {SetDireccionEmpresa } =  require("../../../models/setCampos/setDireccionEmpresa");
// const {SetTelefonoContacto } =  require("../../../models/setCampos/setTelefonoContacto");
// const {SetMailContacto } =  require("../../../models/setCampos/setMailContacto");
// const {SetDireccionEmpresa } =  require("../../../models/setCampos/setDireccionEmpresa");
// const {SetTelefonoContacto } =  require("../../../models/setCampos/setTelefonoContacto");
const {SetMailContacto } =  require("../../../models/setCampos/setMailContacto");
const {SetDependenciaPuestoPeriodo } =  require("../../../models/setCampos/setDependenciaPuestoPeriodo");
const {SetEstructuraAccionariaPersonasFisicas } =  require("../../../models/setCampos/setEstructuraAccionariaPersonasFisicas");
const {SetEstructuraAccionariaPersonasMorales } =  require("../../../models/setCampos/setEstructuraAccionariaPersonasMorales");
const {SetPersonasQueEjercenControl } =  require("../../../models/setCampos/setPersonasQueEjercenControl");
// const {SetPersonasQueEjercenControl } =  require("../../../models/setCampos/setPersonasQueEjercenControl");
// const {SetPersonasQueEjercenControl } =  require("../../../models/setCampos/setPersonasQueEjercenControl");
const {SetTelefonoContacto } =  require("../../../models/setCampos/setTelefonoContacto");
// const {SetMailContacto } =  require("../../../models/setCampos/setMailContacto");
// const {SetDependenciaPuestoPeriodo } =  require("../../../models/setCampos/setDependenciaPuestoPeriodo");
const {SetDatosGeneralesCompletosPF } =  require("../../../models/setCampos/setDatosGeneralesCompletosPF");
// const {SetDatosGeneralesCompletosPF } =  require("../../../models/setCampos/setDatosGeneralesCompletosPF");
// const {SetDatosGeneralesCompletosPM } =  require("../../../models/setCampos/setDatosGeneralesCompletosPM");
// const {SetDatosGeneralesCompletosPF } =  require("../../../models/setCampos/setDatosGeneralesCompletosPF");
// const {SetDatosGeneralesCompletosPM } =  require("../../../models/setCampos/setDatosGeneralesCompletosPM");
// const {SetDatosGeneralesCompletosPF } =  require("../../../models/setCampos/setDatosGeneralesCompletosPF");
// const {SetDatosGeneralesCompletosPM } =  require("../../../models/setCampos/setDatosGeneralesCompletosPM");
const {SetDatosGeneralesCompletosFideicomiso } =  require("../../../models/setCampos/setDatosGeneralesCompletosFideicomiso");
const {SetGarantiaHipotecaria } =  require("../../../models/setCampos/setGarantiaHipotecaria");
const {SetOtrasGarantias } =  require("../../../models/setCampos/setOtrasGarantias");
const {SetDatosProveedorPrincipalPersonaFisica } =  require("../../../models/setCampos/setDatosProveedorPrincipalPersonaFisica");
const {SetDatosProveedorPrincipalPersonaMoral } =  require("../../../models/setCampos/setDatosProveedorPrincipalPersonaMoral");
const {SetDatosClientesPersonaFisica } =  require("../../../models/setCampos/setDatosClientesPersonaFisica");
const {SetDatosClientesPersonaMoral } =  require("../../../models/setCampos/setDatosClientesPersonaMoral");
const {SetPasivos } =  require("../../../models/setCampos/setPasivos");
const {SetReferencias } =  require("../../../models/setCampos/setReferencias");
const { Participantes } = require('../../../models/controles/participantes');


//relacion externa
const crearRegistroNuevoFormulario = async (req, res = response) => {
    const uid = req.uid;
    try {
    const idrelacion = getIdRelacion(req);



    const registroNuevoFormulario = new RegistroNuevoFormulario({
        usuario: uid,
    registroMiEmpresa : idrelacion,
        ...req.body
    });
    




     
     const registroNuevoFormularioBD = await registroNuevoFormulario.save();//
    res.json({ok: true,registroNuevoFormulario: registroNuevoFormularioBD,registroNuevoFormularioId:registroNuevoFormularioBD._id});//
    } catch (e) {
     console.log(e);
    res.status(500).json({ok: false,msg: "Hable con el administrador",});}
}

const getRegistroNuevoFormulario = async(req, res = response) => {
   const idrelacion = getIdRelacion(req);
   const usuarioAsignadoId = req.uid;
   const usuarioAsignadoRol = req.urolUsuario;

    try {

    let pt;
    if (req.query.filtro=='filtraPorRolActivo'){
     await Participantes.find({usuarioAsignadoRol}).populate("registroNuevoFormulario").then(participantes=>{pt=participantes.map((element)=>{
         if (element.registroNuevoFormulario){return {...element.registroNuevoFormulario._doc}}});
     })   
    } else if (req.query.filtro=='filtraPorUsuarioActivo'){
     await Participantes.find({usuarioAsignadoId}).populate("registroNuevoFormulario").then(participantes=>{pt=participantes.map((element)=>{
           if (element.registroNuevoFormulario){return {...element.registroNuevoFormulario._doc}}});
       })   
    }else{
      //  await Participantes.find().populate("registroNuevoFormulario").then(participantes=>{pt=participantes.map((element)=>{
      //        if (element.registroNuevoFormulario){return {...element.registroNuevoFormulario._doc}}});
        //  })   
        pt= await RegistroNuevoFormulario.find({registroMiEmpresa: idrelacion});    const registroNuevoFormulario = await RegistroNuevoFormulario.find({registroMiEmpresa: idrelacion});
      }

    let registroNuevoFormulario=pt.map(elD=> { if (elD){if(elD._doc) {elD=elD._doc;};return {...elD,
    direccionEmpresaD: elD.direccionEmpresa.map(el => el.setDireccionEmpresa).join(" "),
    setMailContactoD: elD.setMailContacto.map(el => el.setSetMailContacto).join(" "),
    setTelefonoContactoD: elD.setTelefonoContacto.map(el => el.setSetTelefonoContacto).join(" "),
    domicilioFiscalD: elD.domicilioFiscal.map(el => el.setDomicilioFiscal).join(" "),
    dependenciaPuestoPeriodoD: elD.dependenciaPuestoPeriodo.map(el => el.setDependenciaPuestoPeriodo).join(" "),
    estructuraAccionariaPersonasFisicasD: elD.estructuraAccionariaPersonasFisicas.map(el => el.setEstructuraAccionariaPersonasFisicas).join(" "),
    estructuraAccionariaPersonasMoralesD: elD.estructuraAccionariaPersonasMorales.map(el => el.setEstructuraAccionariaPersonasMorales).join(" "),
    presidenteConsejoDeAdministracionD: elD.presidenteConsejoDeAdministracion.map(el => el.setPresidenteConsejoDeAdministracion).join(" "),
    miembrosDelConsejoConControlD: elD.miembrosDelConsejoConControl.map(el => el.setMiembrosDelConsejoConControl).join(" "),
    miembrosDelConsejoSinControlD: elD.miembrosDelConsejoSinControl.map(el => el.setMiembrosDelConsejoSinControl).join(" "),
    proveedoresRecursosCuandoPFD: elD.proveedoresRecursosCuandoPF.map(el => el.setProveedoresRecursosCuandoPF).join(" "),
    avalYOObligadoSolidarioCuandoPMD: elD.avalYOObligadoSolidarioCuandoPM.map(el => el.setAvalYOObligadoSolidarioCuandoPM).join(" "),
    garanteCuandoPFD: elD.garanteCuandoPF.map(el => el.setGaranteCuandoPF).join(" "),
    avalYOObligadoSolidarioCuandoPFD: elD.avalYOObligadoSolidarioCuandoPF.map(el => el.setAvalYOObligadoSolidarioCuandoPF).join(" "),
    garanteCuandoPMD: elD.garanteCuandoPM.map(el => el.setGaranteCuandoPM).join(" "),
    proveedoresRecursosCuandoPFD: elD.proveedoresRecursosCuandoPF.map(el => el.setProveedoresRecursosCuandoPF).join(" "),
    proveedoresRecursosCuandoPMD: elD.proveedoresRecursosCuandoPM.map(el => el.setProveedoresRecursosCuandoPM).join(" "),
    garanteCuandoFideicomisoD: elD.garanteCuandoFideicomiso.map(el => el.setGaranteCuandoFideicomiso).join(" "),
    garantiaHipotecariaD: elD.garantiaHipotecaria.map(el => el.setGarantiaHipotecaria).join(" "),
    otrasGarantiasD: elD.otrasGarantias.map(el => el.setOtrasGarantias).join(" "),
    principalesProveedoresPFD: elD.principalesProveedoresPF.map(el => el.setPrincipalesProveedoresPF).join(" "),
    principalesClientesPFD: elD.principalesClientesPF.map(el => el.setPrincipalesClientesPF).join(" "),
    principalesProveedoresPMD: elD.principalesProveedoresPM.map(el => el.setPrincipalesProveedoresPM).join(" "),
    principalesClientesPMD: elD.principalesClientesPM.map(el => el.setPrincipalesClientesPM).join(" "),
    pasivosD: elD.pasivos.map(el => el.setPasivos).join(" "),
    referenciasD: elD.referencias.map(el => el.setReferencias).join(" "),
    } } });
    res.json({ok: true,registroNuevoFormulario,});
    } catch (e) {
    console.log(e);
    res.json({ok: true,msg: "Hable con el administrador",});}
}


const getRegistroNuevoFormularioAll = async(req, res = response) => {
   try {
   let registroNuevoFormulario = await RegistroNuevoFormulario.find().populate('registroMiEmpresa');
    registroNuevoFormulario=registroNuevoFormulario.map(elD=> {return {...elD._doc,
    direccionEmpresaD: elD._doc.direccionEmpresa.map(el => el.setDireccionEmpresa).join(" "),
    setMailContactoD: elD._doc.setMailContacto.map(el => el.setSetMailContacto).join(" "),
    setTelefonoContactoD: elD._doc.setTelefonoContacto.map(el => el.setSetTelefonoContacto).join(" "),
    domicilioFiscalD: elD._doc.domicilioFiscal.map(el => el.setDomicilioFiscal).join(" "),
    dependenciaPuestoPeriodoD: elD._doc.dependenciaPuestoPeriodo.map(el => el.setDependenciaPuestoPeriodo).join(" "),
    estructuraAccionariaPersonasFisicasD: elD._doc.estructuraAccionariaPersonasFisicas.map(el => el.setEstructuraAccionariaPersonasFisicas).join(" "),
    estructuraAccionariaPersonasMoralesD: elD._doc.estructuraAccionariaPersonasMorales.map(el => el.setEstructuraAccionariaPersonasMorales).join(" "),
    presidenteConsejoDeAdministracionD: elD._doc.presidenteConsejoDeAdministracion.map(el => el.setPresidenteConsejoDeAdministracion).join(" "),
    miembrosDelConsejoConControlD: elD._doc.miembrosDelConsejoConControl.map(el => el.setMiembrosDelConsejoConControl).join(" "),
    miembrosDelConsejoSinControlD: elD._doc.miembrosDelConsejoSinControl.map(el => el.setMiembrosDelConsejoSinControl).join(" "),
    proveedoresRecursosCuandoPFD: elD._doc.proveedoresRecursosCuandoPF.map(el => el.setProveedoresRecursosCuandoPF).join(" "),
    avalYOObligadoSolidarioCuandoPMD: elD._doc.avalYOObligadoSolidarioCuandoPM.map(el => el.setAvalYOObligadoSolidarioCuandoPM).join(" "),
    garanteCuandoPFD: elD._doc.garanteCuandoPF.map(el => el.setGaranteCuandoPF).join(" "),
    avalYOObligadoSolidarioCuandoPFD: elD._doc.avalYOObligadoSolidarioCuandoPF.map(el => el.setAvalYOObligadoSolidarioCuandoPF).join(" "),
    garanteCuandoPMD: elD._doc.garanteCuandoPM.map(el => el.setGaranteCuandoPM).join(" "),
    proveedoresRecursosCuandoPFD: elD._doc.proveedoresRecursosCuandoPF.map(el => el.setProveedoresRecursosCuandoPF).join(" "),
    proveedoresRecursosCuandoPMD: elD._doc.proveedoresRecursosCuandoPM.map(el => el.setProveedoresRecursosCuandoPM).join(" "),
    garanteCuandoFideicomisoD: elD._doc.garanteCuandoFideicomiso.map(el => el.setGaranteCuandoFideicomiso).join(" "),
    garantiaHipotecariaD: elD._doc.garantiaHipotecaria.map(el => el.setGarantiaHipotecaria).join(" "),
    otrasGarantiasD: elD._doc.otrasGarantias.map(el => el.setOtrasGarantias).join(" "),
    principalesProveedoresPFD: elD._doc.principalesProveedoresPF.map(el => el.setPrincipalesProveedoresPF).join(" "),
    principalesClientesPFD: elD._doc.principalesClientesPF.map(el => el.setPrincipalesClientesPF).join(" "),
    principalesProveedoresPMD: elD._doc.principalesProveedoresPM.map(el => el.setPrincipalesProveedoresPM).join(" "),
    principalesClientesPMD: elD._doc.principalesClientesPM.map(el => el.setPrincipalesClientesPM).join(" "),
    pasivosD: elD._doc.pasivos.map(el => el.setPasivos).join(" "),
    referenciasD: elD._doc.referencias.map(el => el.setReferencias).join(" "),
    }  })
   res.json({ok: true,registroNuevoFormulario,});
   } catch (e) {
   console.log(e);
   res.json({ok: true,msg: "Hable con el administrador",});}
}




const borrarRegistroNuevoFormulario = async (req, res = response) => {
  const id = req.params.id;



  
  await RegistroNuevoFormulario.findByIdAndDelete(id).then((valor) => {
  res.send({ok: true,msg: "Registro  se borro con exito",});
  }).catch((e) => {console.log(e);res.status(400).send(e);});


}



const getRegistroNuevoFormularioById = async(req, res = response) => {
  const id = req.params.id;
  await RegistroNuevoFormulario.findById(id).then((valor) => {
  let registroNuevoFormulario={...valor._doc,
  direccionEmpresaD: valor._doc.direccionEmpresa.map(el => el.setDireccionEmpresa).join(" "),
  setMailContactoD: valor._doc.setMailContacto.map(el => el.setSetMailContacto).join(" "),
  setTelefonoContactoD: valor._doc.setTelefonoContacto.map(el => el.setSetTelefonoContacto).join(" "),
  domicilioFiscalD: valor._doc.domicilioFiscal.map(el => el.setDomicilioFiscal).join(" "),
  dependenciaPuestoPeriodoD: valor._doc.dependenciaPuestoPeriodo.map(el => el.setDependenciaPuestoPeriodo).join(" "),
  estructuraAccionariaPersonasFisicasD: valor._doc.estructuraAccionariaPersonasFisicas.map(el => el.setEstructuraAccionariaPersonasFisicas).join(" "),
  estructuraAccionariaPersonasMoralesD: valor._doc.estructuraAccionariaPersonasMorales.map(el => el.setEstructuraAccionariaPersonasMorales).join(" "),
  presidenteConsejoDeAdministracionD: valor._doc.presidenteConsejoDeAdministracion.map(el => el.setPresidenteConsejoDeAdministracion).join(" "),
  miembrosDelConsejoConControlD: valor._doc.miembrosDelConsejoConControl.map(el => el.setMiembrosDelConsejoConControl).join(" "),
  miembrosDelConsejoSinControlD: valor._doc.miembrosDelConsejoSinControl.map(el => el.setMiembrosDelConsejoSinControl).join(" "),
  proveedoresRecursosCuandoPFD: valor._doc.proveedoresRecursosCuandoPF.map(el => el.setProveedoresRecursosCuandoPF).join(" "),
  avalYOObligadoSolidarioCuandoPMD: valor._doc.avalYOObligadoSolidarioCuandoPM.map(el => el.setAvalYOObligadoSolidarioCuandoPM).join(" "),
  garanteCuandoPFD: valor._doc.garanteCuandoPF.map(el => el.setGaranteCuandoPF).join(" "),
  avalYOObligadoSolidarioCuandoPFD: valor._doc.avalYOObligadoSolidarioCuandoPF.map(el => el.setAvalYOObligadoSolidarioCuandoPF).join(" "),
  garanteCuandoPMD: valor._doc.garanteCuandoPM.map(el => el.setGaranteCuandoPM).join(" "),
  proveedoresRecursosCuandoPFD: valor._doc.proveedoresRecursosCuandoPF.map(el => el.setProveedoresRecursosCuandoPF).join(" "),
  proveedoresRecursosCuandoPMD: valor._doc.proveedoresRecursosCuandoPM.map(el => el.setProveedoresRecursosCuandoPM).join(" "),
  garanteCuandoFideicomisoD: valor._doc.garanteCuandoFideicomiso.map(el => el.setGaranteCuandoFideicomiso).join(" "),
  garantiaHipotecariaD: valor._doc.garantiaHipotecaria.map(el => el.setGarantiaHipotecaria).join(" "),
  otrasGarantiasD: valor._doc.otrasGarantias.map(el => el.setOtrasGarantias).join(" "),
  principalesProveedoresPFD: valor._doc.principalesProveedoresPF.map(el => el.setPrincipalesProveedoresPF).join(" "),
  principalesClientesPFD: valor._doc.principalesClientesPF.map(el => el.setPrincipalesClientesPF).join(" "),
  principalesProveedoresPMD: valor._doc.principalesProveedoresPM.map(el => el.setPrincipalesProveedoresPM).join(" "),
  principalesClientesPMD: valor._doc.principalesClientesPM.map(el => el.setPrincipalesClientesPM).join(" "),
  pasivosD: valor._doc.pasivos.map(el => el.setPasivos).join(" "),
  referenciasD: valor._doc.referencias.map(el => el.setReferencias).join(" "),
  }
  res.send({ok: true,registroNuevoFormulario:registroNuevoFormulario,});
  }).catch((e) => {console.log(e);res.status(400).send(e);});
}


const actualizarRegistroNuevoFormulario = async(req, res = response) => {
  const id = req.params.id;
  const uid = req.uid;


  //BORRA ELEMENTOS

//iNSERTA NUEVOS


  try {
  const registroNuevoFormulario =await RegistroNuevoFormulario.findById(id);
  if (!registroNuevoFormulario) {return res.status(404).json({ok: true, msg: "Registro no encontrado por id",});};
  const cambiosRegistroNuevoFormulario = {...req.body,usuario: uid,};
  var ObjectId = require("mongodb").ObjectID;
  const registroNuevoFormularioActulizado =await RegistroNuevoFormulario.updateOne({_id: new ObjectId(id),},cambiosRegistroNuevoFormulario);
  res.json({ok: true,registroNuevoFormulario: registroNuevoFormularioActulizado,});
  } catch (e) {console.log(e);res.status(500).json({ok: false,msg: "Hable con el administrador",}); }
}


module.exports = {
    getRegistroNuevoFormulario,
    getRegistroNuevoFormularioAll,
    crearRegistroNuevoFormulario,
    actualizarRegistroNuevoFormulario,
    borrarRegistroNuevoFormulario,
    getRegistroNuevoFormularioById
}
