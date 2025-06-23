/*
    Generals
    ruta: '/api/general'
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../../middlewares/validar-campos');
const { validarJWT } = require('../../middlewares/validar-jwt');

const {
    getCatalogoGeneral,
    crearGeneral,
    actualizarGeneral,
    borrarGeneral,
    // getGeneralById
} = require('../../controllers/catalogosMiEmpresa/generales')


const router = Router();

// router.get( '/', getCatalogoGeneral );

router.post( '/',
    [
        validarJWT,
        validarCampos
    ], 
    crearGeneral 
);

router.put( '/:id',
    [
        validarJWT,
        validarCampos
    ],
    actualizarGeneral
);

router.delete( '/:id',
    validarJWT,
    borrarGeneral
);

router.get( '/:catalogo/:id',
    validarJWT,
    getCatalogoGeneral
);


module.exports = router;


