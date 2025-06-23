/*
    Catcie9s
    ruta: '/api/catcie9'
*/
const { Router } = require('express');
const { validarCampos } = require('../../middlewares/validar-campos');

const {
    getCatColeccion,
    getCatColeccionTermino,
    getCatColeccionPorId
} = require('../../controllers/catalogosGenerales/catcoleccion')

const router = Router();

router.get( '/:catalogo',
getCatColeccion
);
router.get( '/:catalogo/:termino',
getCatColeccionTermino
);

router.get(  '/id/:catalogo/:id',
getCatColeccionPorId
);


module.exports = router;
