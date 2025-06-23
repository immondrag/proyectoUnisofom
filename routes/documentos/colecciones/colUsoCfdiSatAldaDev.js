/*
    ColUsoCfdiSatAldaDevs
    ruta: '/api/colUsoCfdiSatAldaDev'
*/
const { Router } = require('express');
const { validarCampos } = require('../../../middlewares/validar-campos');

const { validarJWT } = require('../../../middlewares/validar-jwt');


const {
    getColUsoCfdiSatAldaDev,
    getColUsoCfdiSatAldaDevAll,
    crearColUsoCfdiSatAldaDev,
    actualizarColUsoCfdiSatAldaDev,
    borrarColUsoCfdiSatAldaDev,
    getColUsoCfdiSatAldaDevById
} = require('../../../controllers/documentos/colecciones/colUsoCfdiSatAldaDev')

const router = Router();

router.get( '/',
[
    validarJWT,
    validarCampos
], 
getColUsoCfdiSatAldaDev);

router.get( '/all',
    [
        validarJWT,
        validarCampos
    ], 
    getColUsoCfdiSatAldaDevAll);

    
router.post( '/',
[
    validarJWT,
    validarCampos
], 
    crearColUsoCfdiSatAldaDev 
);

router.put( '/:id',
[
    validarJWT,
    validarCampos
], 
    actualizarColUsoCfdiSatAldaDev
);

router.delete( '/:id',
[
    validarJWT,
    validarCampos
], 
    borrarColUsoCfdiSatAldaDev
);

router.get( '/:id',
[
    validarJWT,
    validarCampos
], 
    getColUsoCfdiSatAldaDevById
);

module.exports = router;

