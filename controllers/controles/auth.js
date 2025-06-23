const { response } = require('express');
const bcrypt = require('bcryptjs');

const  { RegistroUsuario }  = require('../../models/registroUsuario');
const { generarJWT } = require('../../helpers/jwt');
// const { googleVerify } = require('../../helpers/google-verify');


const login = async( req, res = response ) => {

    const { email, password } = req.body;
    try {
        
        // Verificar email
        const usuarioDB = await RegistroUsuario.findOne({ email }).populate('registroMiEmpresa');

        if ( !usuarioDB ) {
            return res.status(404).json({
                ok: false,
                msg: 'Email no encontrado'
            });
        }

        // Verificar contraseña
        const validPassword = bcrypt.compareSync( password, usuarioDB.password );
        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña no válida'
            });
        }

        // Generar el TOKEN - JWT
        const token = await generarJWT( usuarioDB.id );


        res.json({
            ok: true,
            usuario:usuarioDB,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }


}


// const googleSignIn = async( req, res = response ) => {

//     const googleToken = req.body.token;

//     try {

//         const { name, email, picture } = await googleVerify( googleToken );

//         const usuarioDB = await RegistroUsuario.findOne({ email });
//         let usuario;

//         if ( !usuarioDB ) {
//             // si no existe el usuario
//             usuario = new RegistroUsuario({
//                 nombre: name,
//                 email,
//                 password: '@@@',
//                 img: picture,
//                 google: true
//             });
//         } else {
//             // existe usuario
//             usuario = usuarioDB;
//             usuario.google = true;
//         }

//         // Guardar en DB
//         await usuario.save();

//         // Generar el TOKEN - JWT
//         const token = await generarJWT( usuario.id );
        
//         res.json({
//             ok: true,
//             usuario,
//             token
//         });

//     } catch (error) {
//         res.status(401).json({
//             ok: false,
//             msg: 'Token no es correcto',
//         });
//     }

// }


const renewToken = async(req, res = response) => {
    const uid = req.uid;
    // Generar el TOKEN - JWT
    const token = await generarJWT( uid );
    // Obtener el usuario por UID

    const usuario = await RegistroUsuario.findById( uid );
    res.json({
        ok: true,
        token,
        usuario
    });
}

module.exports = {
    login,
    // googleSignIn,
    renewToken
}
