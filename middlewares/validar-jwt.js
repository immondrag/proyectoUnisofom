const jwt = require('jsonwebtoken');
const {RegistroMiEmpresa} = require('../models/registroMiEmpresa');
const {RegistroUsuario} = require('../models/registroUsuario')


const validarJWT = async(req, res, next) => {

    // Leer el Token
    const token = req.header('x-token');


 
    if ( !token ) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }
   
    try {
        
        const { uid } = jwt.verify( token, process.env.JWT_SECRET );
        req.uid = uid;


        const usuario=await RegistroUsuario.findById(uid);
        req.uidregistromiempresa= usuario.registroMiEmpresa;
        req.urolUsuario= usuario.rolUsuario;
        req.unombreCompleto= usuario.nombreCompleto;

        next();

    } catch (error) {
        
        console.log(error)
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }
 
}


const validarJWTPaciente = async(req, res, next) => {

    // Leer el Token
    const token = req.header('x-tokenpaciente');
    
    if ( !token ) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    try {
        
        const { uid } = jwt.verify( token, process.env.JWT_SECRET );
        req.uid = uid;

        next();

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }
 
}

const varlidarADMIN_ROLE = async(req, res, next)  => {

    const uid = req.uid;
    
    try {
        
        const usuarioDB = await RegistroUsuario.findById(uid);

        if ( !usuarioDB ) {
            return res.status(404).json({
                ok: false,
                msg: 'RegistroUsuario no existe'
            });
        }

        if ( usuarioDB.role !== 'ADMIN_ROLE' ) {
            return res.status(403).json({
                ok: false,
                msg: 'No tiene privilegios para hacer eso'
            });
        }

        next();


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

}

const varlidarADMIN_ROLE_o_MismoRegistroUsuario = async(req, res, next)  => {

    const uid = req.uid;
    const id  = req.params.id;
    
    try {
        const usuarioDB = await RegistroUsuario.findById(uid);

        if ( !usuarioDB ) {
            return res.status(404).json({
                ok: false,
                msg: 'RegistroUsuario no existe'
            });
        }

        if ( usuarioDB.role === 'ADMIN_ROLE' || uid === id ) {
        
            next();
            
        } else {
            return res.status(403).json({
                ok: false,
                msg: 'No tiene privilegios para hacer eso'
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

}


const varlidarADMIN_ROLE_o_MismoRegistroMiEmpresa = async(req, res, next)  => {

    const uid = req.uid;
    const id  = req.params.id;
    
    try {
        const usuario=await RegistroUsuario.findById(uid);
        req.uidregistromiempresa= usuario.registroMiEmpresa;
        const clienteDB = await RegistroMiEmpresa.findById(  req.uidregistromiempresa);

        if ( !clienteDB ) {
            return res.status(404).json({
                ok: false,
                msg: 'El cliente no existe'
            });
        }

        if ( clienteDB.role === 'ADMIN_ROLE' || uid === id ) {
        
            next();
            
        } else {
            return res.status(403).json({
                ok: false,
                msg: 'No tiene privilegios para hacer eso'
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

}


module.exports = {
    validarJWT,
    validarJWTPaciente,
    varlidarADMIN_ROLE,
    varlidarADMIN_ROLE_o_MismoRegistroUsuario,
    varlidarADMIN_ROLE_o_MismoRegistroMiEmpresa
}