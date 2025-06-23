/*
    ColPaisConLadaAldaDevs
    ruta: '/api/colPaisConLadaAldaDev'
*/
const { Router } = require('express');
const { validarCampos } = require('../../../middlewares/validar-campos');

const { validarJWT } = require('../../../middlewares/validar-jwt');


const {
    getColPaisConLadaAldaDev,
    getColPaisConLadaAldaDevAll,
    crearColPaisConLadaAldaDev,
    actualizarColPaisConLadaAldaDev,
    borrarColPaisConLadaAldaDev,
    getColPaisConLadaAldaDevById
} = require('../../../controllers/documentos/colecciones/colPaisConLadaAldaDev')

const router = Router();

router.get( '/',
[
    validarJWT,
    validarCampos
], 
getColPaisConLadaAldaDev);

router.get( '/all',
    [
        validarJWT,
        validarCampos
    ], 
    getColPaisConLadaAldaDevAll);

    
router.post( '/',
[
    validarJWT,
    validarCampos
], 
    crearColPaisConLadaAldaDev 
);

router.put( '/:id',
[
    validarJWT,
    validarCampos
], 
    actualizarColPaisConLadaAldaDev
);

router.delete( '/:id',
[
    validarJWT,
    validarCampos
], 
    borrarColPaisConLadaAldaDev
);

router.get( '/:id',
[
    validarJWT,
    validarCampos
], 
    getColPaisConLadaAldaDevById
);

module.exports = router;

