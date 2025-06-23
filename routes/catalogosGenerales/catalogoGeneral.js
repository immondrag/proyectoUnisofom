/*
    CatalogoGenerals
    ruta: '/api/catalogoGeneral'
*/
const { Router } = require('express');
const { validarCampos } = require('../../middlewares/validar-campos');

const {
    getCatalogoGeneral,
    crearCatalogoGeneral,
    actualizarCatalogoGeneral,
    borrarCatalogoGeneral,
    getCatalogoGeneralById
} = require('../../controllers/catalogosGenerales/catalogoGeneral')

const router = Router();

router.get( '/', getCatalogoGeneral);

router.post( '/',
    [
        validarCampos
    ], 
    crearCatalogoGeneral 
);

router.put( '/:id',
    [
        validarCampos
    ],
    actualizarCatalogoGeneral
);

router.delete( '/:id',
    borrarCatalogoGeneral
);

router.get( '/:id',
    getCatalogoGeneralById
);

module.exports = router;

