var nodemailer= require('nodemailer');
const {RegistroMiEmpresa} = require("../models/registroMiEmpresa");
const { RegistroUsuario } = require("../models/registroUsuario");
const { Documentos } = require("../models/controles/documentos");
const { Participantes } = require("../models/controles/participantes");

function getIdRelacion(req) {
  var idrelacion;
  var tiporelacion;
  var uidregistromiempresa;
  idrelacion = req.query.idrelacion;
  tiporelacion = req.query.tiporelacion;
  uidregistromiempresa = req.uidregistromiempresa;
  
  switch (tiporelacion) {
    case "registroMiEmpresa":
      return uidregistromiempresa;
    default:
      return idrelacion;
  }
}
const validaCreacionUsuarios = async (idrelacion,tipo)=>{
  const registroMiEmpresa = await RegistroMiEmpresa.findById(idrelacion);


  // if (tipo=='USER_MEDICO'){
  //   const registroUsuario = await RegistroUsuario.countDocuments({
  //     registroMiEmpresa: idrelacion, role:'USER_MEDICO'
  //   });
  //   if (registroMiEmpresa.totalMedicos>registroUsuario){
  //     return true;
  //   }  
  // }else{
  //   const registroUsuarioAsist = await RegistroUsuario.countDocuments({
  //     registroMiEmpresa: idrelacion, role:'USER_ASISTENTE'
  //   });
  //   if (registroMiEmpresa.totalAsistentes>registroUsuarioAsist){
  //     return true;
  //   }  
  // }
//quitar el true 
  return true;

}

const sendMailValidacion = async (existeEmail) => {

  // console.log(process.env.LKPASSWORD);
  const link = `http://35.168.38.93:3000#/validaremail/${existeEmail._id}`;
  //  const link = `${process.env.LKPASSWORD}#/validaremail/${existeEmail._id}`;

  if (existeEmail) {
  

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "ignaciomondragonm@gmail.com",
        pass: "mhiihffaaazluixs",
      },
      tls: { rejectUnauthorized: false },
      logger: false,
      transactionLog: false,
    });

    const Imagen=getImagenCorreo();

    var mailOptions = {
      from: "Remitente",
      to: existeEmail.email,
      subject: "Validación de Correo Electronico",
      //text: 'Cuerpo de correo para cambio de contrasenia, token, Link',
      html: `
      <a title="ALDA SALUD" />
<img src="${Imagen}">
</a>
    <h2 class="ql-align-justify">
      </h2><p class="ql-align-justify"><br></p><h2 class="ql-align-justify">
      <strong style="color: rgb(0, 102, 204);">Validación de Correo Electronico</strong></h2>
      <p class="ql-align-justify">&nbsp;</p>
<p class="ql-align-justify">Que tal&nbsp;${existeEmail.nombreDeUsuario}</p>
<p class="ql-align-justify"><br></p>
<p class="ql-align-justify">Gracias por utilizar nuestro software! Para ingresar al sistema, haz clic en el siguiente vinculo por única ocasión para validar tu correo electrónico</p>
<h3 class="ql-align-justify"><a href="${link}" rel="noopener noreferrer" target="_blank" style="background-color: rgb(204, 224, 245);">Validar ahora</a></h3>
<p class="ql-align-justify">&nbsp;</p>
<p class="ql-align-justify">Si no solicitaste&nbsp;<span style="color: inherit;">validar</span>&nbsp;tu cuenta, no dudes en eliminar este mensaje.</p>
<p class="ql-align-justify">Por motivos de seguridad, este enlace caducará 24 horas después de la hora de envío. </p>
<p class="ql-align-justify"><br></p><p class="ql-align-justify">Si necesitas ayuda adicional, comunícate al Teléfono +52 55-4068-9673</p>
<p class="ql-align-justify"><span style="color: rgb(51, 51, 51);">Visita </span><a href="http://software-medico.com/" rel="noopener noreferrer" target="_blank">http://software-medico.com/</a></p><h2>&nbsp;</h2><p><strong style="color: rgb(0, 112, 196);">ANTES DE IMPRIMIR ESTE E-MAIL PIENSE BIEN SI ES NECESARIO HACERLO</strong></p><p><span style="color: rgb(0, 112, 196);">&nbsp;</span></p><p><strong style="color: rgb(0, 112, 196);">AVISO DE CONFIDENCIALIDAD</strong><span style="color: rgb(0, 112, 196);">: La información contenida en este correo electrónico es confidencial y para uso exclusivo de la(s) persona(s) a quien(es) va dirigida. Está prohibido difundir la información aquí contenida, si la ha recibido 
por error le suplicamos notificar inmediatamente al remitente. La empresa Virtuamedic no garantizan la integridad del presente correo electrónico o archivos adjuntos, ni que el mismo esté libre de interferencias o virus, por lo que su lectura, recepción y retransmisión será responsabilidad de quién lo haga.</span></p><p><span style="color: rgb(0, 112, 196);">&nbsp;</span></p
<p><strong style="color: rgb(0, 112, 196);">AVISO DE PRIVACIDAD</strong><span style="color: rgb(0, 112, 196);">: Los datos personales que nos 
proporcione están sujetos a los términos de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP). Para mayor información acerca del tratamiento y de los derechos que pueda hacer valer, usted puede acceder al Aviso de Privacidad completo a través de la página&nbsp;</span><a href="http://www.aldasalud.com.mx/" rel="noopener noreferrer" target="_blank" style="color: rgb(5, 99, 193);">http://www.aldasalud.com.mx</a><span style="color: rgb(0, 112, 196);">&nbsp;</span></p><p><span style="color: rgb(0, 112, 196);">Virtuamedic utilizará sus datos personales únicamente para la finalidad a la que son obtenidos. Av. Jesús del Monte #37, Piso 2 Oficina B19, Col. Jesús de Monte, 52764, Huxiquilucan , Edo de&nbsp;México. Todos los Derechos Reservados: Alda Innovaciones SAPI de CV</span></p>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(500).send(error.message);
      } else {
        console.log("Email enviado...");
        res.status(200).jsonp(req.body);
      }
    });
  } else {
    res.status(400).send("Email no encontrado");
  }
};



function getImagenCorreo(){
  return "data:image/png;base64,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"
}

const agregarLogDocumentos = async(idrelacion,statusCierre,idUsuario,body,origenId,origen,nombreDocumento)=>{

  const documentoReg = new Documentos({
    usuario: idUsuario,
    statusCierre: statusCierre,
    statusAbre: body.status,
    usuarioNombre: body.usuarioNombre,
    usuarioRol: body.usuarioRol,
    origenID: origenId,
    origen:origen,
    registroNuevoProyectoCtc :idrelacion,
    nombreDocumento
  });

 
  const documentoRegBD = await documentoReg.save();

  return documentoRegBD;
  }

const agregarParticipante = async(idrelacion,idUsuario,body,origenId,origen,nombreDocumento)=>{

console.log(body)
    const usuario= await  RegistroUsuario.findById(body.registroUsuarioRegistroUsuario);
  

  
    const participanteReg = new Participantes({
      status:body.statusUsuario,
      usuario: idUsuario,
      origenID: origenId,
      origen:origen,
      registroNuevoProyectoCtc :idrelacion,
      nombreDocumento,
      usuarioAsignadoId:usuario._id,
      usuarioAsignadoRol:usuario.rolUsuario,
      usuarioAsignadoNombre:usuario.nombreCompleto,
    });
  
   
    const participanteRegBD = await participanteReg.save();
  
    return participanteRegBD;
}
  

//codigo duro CTC 


const agregarParticipantesDefault = async(proyecto,req)=>{
  

  const participanteReg = new Participantes({
    status:'Activo',
    usuario: req.uid,
    origenID: proyecto._id,
    origen:'registroNuevoProyectoCtc',
    registroNuevoProyectoCtc :proyecto._id,
    nombreDocumento:'Registro Nuevo Proyecto',
    usuarioAsignadoId:req.uid,
    usuarioAsignadoRol:req.urolUsuario,
    usuarioAsignadoNombre:req.unombreCompleto,
  });

  const participanteRegBD = await participanteReg.save();


  agregarParticipanteDefault(proyecto.usuario,'registroNuevoProyectoCtc','Registro Nuevo Proyecto',proyecto._id,'directorGeneral');
  agregarParticipanteDefault(proyecto.usuario,'registroNuevoProyectoCtc','Registro Nuevo Proyecto',proyecto._id,'gerenteLegal');
  agregarParticipanteDefault(proyecto.usuario,'registroNuevoProyectoCtc','Registro Nuevo Proyecto',proyecto._id,'directorFinanciero');
  agregarParticipanteDefault(proyecto.usuario,'registroNuevoProyectoCtc','Registro Nuevo Proyecto',proyecto._id,'gerenteOperaciones');
  agregarParticipanteDefault(proyecto.usuario,'registroNuevoProyectoCtc','Registro Nuevo Proyecto',proyecto._id,'branchManagerCompras');
  agregarParticipanteDefault(proyecto.usuario,'registroNuevoProyectoCtc','Registro Nuevo Proyecto',proyecto._id,'branchManagerRegional');
  agregarParticipanteDefault(proyecto.usuario,'registroNuevoProyectoCtc','Registro Nuevo Proyecto',proyecto._id,'gerenteVentas');

}


const agregarParticipanteDefault = async(idUsuario,origen,nombreDocumento,id,usuarioAsignadoRol)=>{
  const participanteReg = new Participantes({
    status:'Activo',
    usuario: idUsuario,
    origenID: id,
    origen:origen,
    registroNuevoProyectoCtc :id,
    nombreDocumento,
    // usuarioAsignadoId:usuario._id,
    usuarioAsignadoRol,
    // usuarioAsignadoNombre:usuario.nombreCompleto,
  });

  const participanteRegBD = await participanteReg.save();


}



module.exports = {
  getIdRelacion,
  getImagenCorreo,
  sendMailValidacion,
  validaCreacionUsuarios,
  agregarLogDocumentos,
  agregarParticipante,

  //codigo duro CTC

  agregarParticipantesDefault
};


