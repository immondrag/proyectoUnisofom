/*
    Participantess
    ruta: '/api/participantes'
*/
const { Router } = require('express');
const { validarCampos } = require('../../middlewares/validar-campos');

const { validarJWT } = require('../../middlewares/validar-jwt');


const {
    getParticipantes,
    getParticipantesAll,
    crearParticipantes,
    actualizarParticipantes,
    borrarParticipantes,
    getParticipantesById
} = require('../../controllers/controles/participantes')

const router = Router();

router.get( '/',
[
    validarJWT,
    validarCampos
], 
getParticipantes);

router.get( '/all',
    [
        validarJWT,
        validarCampos
    ], 
    getParticipantesAll);

    
router.post( '/',
[
    validarJWT,
    validarCampos
], 
    crearParticipantes 
);

router.put( '/:id',
[
    validarJWT,
    validarCampos
], 
    actualizarParticipantes
);

router.delete( '/:id',
[
    validarJWT,
    validarCampos
], 
    borrarParticipantes
);

router.get( '/:id',
[
    validarJWT,
    validarCampos
], 
    getParticipantesById
);

module.exports = router;

