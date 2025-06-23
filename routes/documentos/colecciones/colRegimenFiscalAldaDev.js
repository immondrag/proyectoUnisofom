/*
    ColRegimenFiscalAldaDevs
    ruta: '/api/colRegimenFiscalAldaDev'
*/
const { Router } = require('express');
const { validarCampos } = require('../../../middlewares/validar-campos');

const { validarJWT } = require('../../../middlewares/validar-jwt');


const {
    getColRegimenFiscalAldaDev,
    getColRegimenFiscalAldaDevAll,
    crearColRegimenFiscalAldaDev,
    actualizarColRegimenFiscalAldaDev,
    borrarColRegimenFiscalAldaDev,
    getColRegimenFiscalAldaDevById
} = require('../../../controllers/documentos/colecciones/colRegimenFiscalAldaDev')

const router = Router();

router.get( '/',
[
    validarJWT,
    validarCampos
], 
getColRegimenFiscalAldaDev);

router.get( '/all',
    [
        validarJWT,
        validarCampos
    ], 
    getColRegimenFiscalAldaDevAll);

    
router.post( '/',
[
    validarJWT,
    validarCampos
], 
    crearColRegimenFiscalAldaDev 
);

router.put( '/:id',
[
    validarJWT,
    validarCampos
], 
    actualizarColRegimenFiscalAldaDev
);

router.delete( '/:id',
[
    validarJWT,
    validarCampos
], 
    borrarColRegimenFiscalAldaDev
);

router.get( '/:id',
[
    validarJWT,
    validarCampos
], 
    getColRegimenFiscalAldaDevById
);

module.exports = router;

