/*
    Ruta: /api/usuarios
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { getRegistroMiEmpresas, crearRegistroMiEmpresa, actualizarRegistroMiEmpresa, borrarRegistroMiEmpresa,    
    getRegistroMiEmpresa}
 = require('../controllers/registroMiEmpresa');



const { 
    validarJWT, 
    varlidarADMIN_ROLE,
    varlidarADMIN_ROLE_o_MismoRegistroMiEmpresa
 } = require('../middlewares/validar-jwt');


const router = Router();

router.post( '/',
    [
        validarCampos,
    ], 
    crearRegistroMiEmpresa 
);

router.put( '/',
    [
        validarJWT,
        // varlidarADMIN_ROLE_o_MismoRegistroMiEmpresa,
        check('nombrePersonaOEmpresa', 'El nombre es obligatorio').not().isEmpty(),
        check('emailUsuarioPrincipal', 'El email es obligatorio').isEmail(),
        check('usuarioPrincipal', 'El nombre es obligatorio').not().isEmpty(),
        validarCampos,
    ],
    actualizarRegistroMiEmpresa
);

router.get( '/',
[
    validarJWT,
    validarCampos
], 
getRegistroMiEmpresa
);

module.exports = router;