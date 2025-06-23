const { response } = require("express");
const bcrypt = require("bcryptjs");
const { model } = require("mongoose");
var nodemailer= require('nodemailer');
const {RegistroMiEmpresa} = require("../models/registroMiEmpresa");
const {RegistroUsuario} = require("../models/registroUsuario");


const catalogosGenerales = require("../data/catalogoClienteGeneral.json");
const { sendMailValidacion } = require("../middlewares/funciones");



const crearRegistroMiEmpresa = async (req, res = response) => {

  try {

    console.log('entra')
    const { usuarioPrincipal, emailUsuarioPrincipal, password } = req.body;
    const existeEmail = await RegistroMiEmpresa.findOne({ emailUsuarioPrincipal });

    if (existeEmail) {
      return res.status(400).json({
        ok: false,
        msg: "El correo ya está registrado",
      });
    }
    var registro = {
      ...req.body,
      catalogosGenerales: catalogosGenerales,
    };

    // Guardar registroMiEmpresa
    var registroMiEmpresa = new RegistroMiEmpresa(registro);
    await registroMiEmpresa.save();

    //crea usuario default
    const salt = bcrypt.genSaltSync();
    var usuario = {
      registroMiEmpresa: registroMiEmpresa._id,
      nombreDeUsuario: usuarioPrincipal,
      email: emailUsuarioPrincipal,
      configuracionNota: configuracionNotas,
      role:'USER_MEDICO',
      // Encriptar contraseña
      password: bcrypt.hashSync(password, salt),
    };
    var registroUsuario = new RegistroUsuario(usuario);
    // Guardar registroUsuario
    await registroUsuario.save();


    sendMailValidacion(registroUsuario)

    // Generar el TOKEN - JWT
    // const token = await generarJWT(registroUsuario.id);

    res.json({
      ok: true,
      registroUsuario,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado... revisar logs",
    });
  }
};


const actualizarRegistroMiEmpresa = async (req, res = response) => {
  // TODO: Validar token y comprobar si es el usuario correcto

  const id = req.uidregistromiempresa;

  try {
    const registroMiEmpresaDB = await RegistroMiEmpresa.findById(id);

    if (!registroMiEmpresaDB) {
      return res.status(404).json({
        ok: false,
        msg:"No existe el registro de la empresa",
      });
    }

    // Actualizaciones
    const {emailUsuarioPrincipal, ...campos } = req.body;

    if (registroMiEmpresaDB.emailUsuarioPrincipal !== emailUsuarioPrincipal) {
      const existeEmail = await RegistroMiEmpresa.findOne({ emailUsuarioPrincipal });
      if (existeEmail) {
        return res.status(400).json({
          ok: false,
          msg: "Ya existe un usuario con ese email",
        });
      }
    }

    // if (!registroMiEmpresaDB.google) {
    //   campos.email = email;
    // } else if (registroMiEmpresaDB.email !== email) {
    //   return res.status(400).json({
    //     ok: false,
    //     msg: "RegistroMiEmpresa de google no pueden cambiar su correo",
    //   });
    // }

    const registroMiEmpresaAct = await RegistroMiEmpresa.findByIdAndUpdate(
      id,
      campos,
      { new: true }
    );
    res.json({
      ok: true,
      registroMiEmpresa: registroMiEmpresaAct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};



const getRegistroMiEmpresa = async(req, res = response) => {
  const id = req.uidregistromiempresa;

  await RegistroMiEmpresa.findById(id).then((valor) => {
  res.send({ok: true,registroMiEmpresa:valor,});
  }).catch((e) => {console.log(error);res.status(400).send(e);});
}




module.exports = {
  crearRegistroMiEmpresa,
  actualizarRegistroMiEmpresa,
  getRegistroMiEmpresa

};
