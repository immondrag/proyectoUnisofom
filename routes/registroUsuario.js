/*
    RegistroUsuarios
    ruta: '/api/registroUsuario'
*/
const { Router } = require("express");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");
const {
  enviarCorreoElectronico,
  getRegistroUsuarios,
  getRegistroUsuariosAll,
  crearRegistroUsuario,
  actualizarRegistroUsuario,
  borrarRegistroUsuario,
  getRegistroUsuarioById,
  obtenerUsuarioPorToken,
  getRegistroMedicos
} = require("../controllers/registroUsuario");

const router = Router();

router.get("/medicos", [validarJWT, validarCampos], getRegistroMedicos);

router.get("/", [validarJWT, validarCampos], getRegistroUsuarios);
router.get("/all", [validarJWT, validarCampos], getRegistroUsuariosAll);

router.put("/:id/:id2", [validarJWT, validarCampos], enviarCorreoElectronico);

router.post("/", crearRegistroUsuario);

router.put("/:id", [validarJWT, validarCampos], actualizarRegistroUsuario);

router.delete("/:id", [validarJWT, validarCampos], borrarRegistroUsuario);

router.get("/:id", [validarJWT, validarCampos], getRegistroUsuarioById);





module.exports = router;
