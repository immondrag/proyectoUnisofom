/*
    RegistroNuevoFormularios
    ruta: '/api/registroNuevoFormulario'
*/
const { Router } = require('express');
const { validarCampos } = require('../../../middlewares/validar-campos');

const { validarJWT } = require('../../../middlewares/validar-jwt');


const {
    getRegistroNuevoFormulario,
    getRegistroNuevoFormularioAll,
    crearRegistroNuevoFormulario,
    actualizarRegistroNuevoFormulario,
    borrarRegistroNuevoFormulario,
    getRegistroNuevoFormularioById
} = require('../../../controllers/documentos/principalunisofom/registroNuevoFormulario')

const router = Router();

router.get( '/',
[
    validarJWT,
    validarCampos
], 
getRegistroNuevoFormulario);

router.get( '/all',
    [
        validarJWT,
        validarCampos
    ], 
    getRegistroNuevoFormularioAll);

    
router.post( '/',
[
    validarJWT,
    validarCampos
], 
    crearRegistroNuevoFormulario 
);

router.put( '/:id',
[
    validarJWT,
    validarCampos
], 
    actualizarRegistroNuevoFormulario
);

router.delete( '/:id',
[
    validarJWT,
    validarCampos
], 
    borrarRegistroNuevoFormulario
);

router.get( '/:id',
[
    validarJWT,
    validarCampos
], 
    getRegistroNuevoFormularioById
);

module.exports = router;

