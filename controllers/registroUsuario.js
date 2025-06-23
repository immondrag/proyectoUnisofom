const { response } = require("express");
const { generarJWT } = require("../helpers/jwt");
const bcrypt = require("bcryptjs");
const { RegistroUsuario } = require("../models/registroUsuario");
const { getIdRelacion } = require("../middlewares/funciones");
var nodemailer = require("nodemailer");
const {
  sendMailValidacion,
  validaCreacionUsuarios,
} = require("../middlewares/funciones");

const enviarCorreoElectronico = async (req, res = response) => {
  console.log(req.uid);
  console.log("No entra");
  // sendMailValidacion
};
const crearRegistroUsuario = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    const existeEmail = await RegistroUsuario.findOne({ email });
    if (existeEmail) {
      return res.status(400).json({
        ok: false,
        msg: "El correo ya está registrado",
      });
    }
    const idrelacion = getIdRelacion(req);
    const registroUsuario = new RegistroUsuario({
      registroMiEmpresa: idrelacion,
      ...req.body,
    });

    if (registroUsuario.rolUsuario == "Doctor(a)") {
      registroUsuario.role = "USER_MEDICO";
    }
    if (
      await validaCreacionUsuarios(
        registroUsuario.registroMiEmpresa,
        registroUsuario.role
      )
    ) {
      if (password) {
        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        registroUsuario.password = bcrypt.hashSync(password, salt);
      } else {
        registroUsuario.password = "SP";
      }

      // Guardar usuario
      const registroUsuarioBD = await registroUsuario.save();

      //Enviar Email de validacion

      // sendMailValidacion(registroUsuarioBD);

      const registroUsuarios = await RegistroUsuario.find({
        registroMiEmpresa: registroUsuarioBD.registroMiEmpresa,
      });

      res.json({ ok: true, registroUsuarios: registroUsuarios });
    } else {
      res.status(450).json({
        ok: false,
        msg: "Llego al limite de usuarios permitidos en la cuenta actual",
        statusText:
          "Llego al limite de usuarios permitidos en la cuenta actual",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "Hable con el administrador" });
  }
};

const getRegistroMedicos = async (req, res = response) => {
  const idrelacion = getIdRelacion(req);
  try {
    const registroUsuario = await RegistroUsuario.find({
      registroMiEmpresa: idrelacion,
      rolUsuario: "Doctor(a)",
    });

    res.json({ ok: true, registroUsuario });
  } catch (error) {
    console.log(error);
    res.json({ ok: true, msg: "Hable con el administrador" });
  }
};

const getRegistroUsuarios = async (req, res = response) => {
  const idrelacion = getIdRelacion(req);
  let termino = req.query.termino;
  try {
    // const registroUsuario = await RegistroUsuario.find({
    //   registroMiEmpresa: idrelacion,
    // });

    termino = termino.replace("registroUsuario.rol", "");
    termino = termino.replace(/,/g, "");
    termino = termino.replace(/=/g, "");
    termino = termino.replace('in(', "");
    termino = termino.replace('(', "");
    termino = termino.replace(')', "");
    termino = termino.replace(" ", "");



    console.log(termino);

    if (termino != "") {
      switch (termino) {
        case "abogadoSrAbogadoJr":
          await RegistroUsuario.aggregate([
            {
              $match: {
                rolUsuario: {
                  $in: ["abogadoSr","AbogadoJr"],
                },
              },
            },
          ]).then((registroUsuario) => {
            res.json({ ok: true, registroUsuario });
          });
          break;
        default:
          await RegistroUsuario.find({
            rolUsuario: termino.trim(),
          }).then((registroUsuario) => {
            res.json({ ok: true, registroUsuario });
          });
      }
    } else {
      await RegistroUsuario.find({
        registroMiEmpresa: idrelacion,
      }).then((registroUsuario) => {
        res.json({ ok: true, registroUsuario });
      });
    }
  } catch (error) {
    console.log(error);
    res.json({ ok: true, msg: "Hable con el administrador" });
  }
};

const getRegistroUsuariosAll = async (req, res = response) => {
  try {
    await RegistroUsuario.find().then((registroUsuario) => {
      res.json({ ok: true, registroUsuario });
    });
  } catch (error) {
    console.log(error);
    res.json({ ok: true, msg: "Hable con el administrador" });
  }
};

const borrarRegistroUsuario = async (req, res = response) => {
  const id = req.params.id;

  await RegistroUsuario.findByIdAndDelete(id)
    .then((valor) => {
      res.send({ ok: true, msg: "Registro  se borro con exito" });
    })
    .catch((e) => {
      console.log(error);
      res.status(400).send(e);
    });
};
const getRegistroUsuarioById = async (req, res = response) => {
  const id = req.params.id;
  await RegistroUsuario.findById(id)
    .then((valor) => {
      res.send({ ok: true, registroUsuario: valor });
    })
    .catch((e) => {
      console.log(error);
      res.status(400).send(e);
    });
};

const actualizarRegistroUsuario = async (req, res = response) => {
  const id = req.params.id;
  const uid = req.uid;
  try {
    const registroUsuario = await RegistroUsuario.findById(id);
    if (!registroUsuario) {
      return res
        .status(404)
        .json({ ok: true, msg: "Registro no encontrado por id" });
    }

    const cambiosRegistroUsuario = { ...req.body, usuario: uid };
    if (cambiosRegistroUsuario.password) {
      // Encriptar contraseña
      const salt = bcrypt.genSaltSync();
      cambiosRegistroUsuario.password = bcrypt.hashSync(
        cambiosRegistroUsuario.password,
        salt
      );
    } else {
      cambiosRegistroUsuario.password = "SP";
    }

    if (cambiosRegistroUsuario.rolUsuario == "Doctor(a)") {
      cambiosRegistroUsuario.role = "USER_MEDICO";
    } else {
      cambiosRegistroUsuario.role = "USER_ASISTENTE";
    }

    var valida = true;
    if (registroUsuario.role != cambiosRegistroUsuario.role) {
      valida = await validaCreacionUsuarios(
        registroUsuario.registroMiEmpresa,
        cambiosRegistroUsuario.role
      );
    }
    //eliminar valida=true
    valida = true;
    if (valida) {
      var ObjectId = require("mongodb").ObjectID;

      console.log(cambiosRegistroUsuario);
      const registroUsuarioActulizado = await RegistroUsuario.updateOne(
        { _id: new ObjectId(id) },
        cambiosRegistroUsuario
      );

      const registroUsuarios = await RegistroUsuario.find({
        registroMiEmpresa: registroUsuario.registroMiEmpresa,
      });

      res.json({ ok: true, registroUsuarios: registroUsuarios });
    } else {
      res.status(450).json({
        ok: false,
        msg: "Llego al limite de usuarios permitidos en la cuenta actual",
        statusText:
          "Llego al limite de usuarios permitidos en la cuenta actual",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "Hable con el administrador" });
  }
};

module.exports = {
  getRegistroUsuarios,
  getRegistroUsuariosAll,
  crearRegistroUsuario,
  actualizarRegistroUsuario,
  borrarRegistroUsuario,
  getRegistroUsuarioById,
  enviarCorreoElectronico,
  getRegistroMedicos,
};
