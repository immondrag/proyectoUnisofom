require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
const path = require('path');
// const {whatsapp} = require('./lib/whatsapp');
// Crear el servidor de express
const app = express();
// Configurar CORS
app.use( cors() );
// Lectura y parseo del body
app.use( express.json() );
// Base de datos
dbConnection();
//produccion
app.use(express.static('public'));
// whatsapp.initialize();
// app.use(function (req, res, next) {
//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://35.168.38.93:3000/');
   
//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     // Pass to next layer of middleware
//     next();
// });
//inicio de sesion 
app.use( '/api/login', require('./routes/controles/auth') );
app.use( '/api/registroMiEmpresa', require('./routes/registroMiEmpresa') );

app.use( '/api/registroUsuario', require('./routes/registroUsuario') );
//catalogos generales alda
app.use( '/api/catalogoColeccion', require('./routes/catalogosGenerales/catalogoColeccion') );
app.use( '/api/catalogoGeneral', require('./routes/catalogosGenerales/catalogoGeneral') );

//catalogos
app.use( '/api/catalogoClienteGeneral', require('./routes/catalogosMiEmpresa/generales') );

//control imagenes

//Fin. Alda controles controles
//<%Catalogolinea%>app.use( '/api/<%PLMi-claveDocumento%>', require('./routes/documentos/<%modulo%>/<%PLMi-claveDocumento%>') )
app.use( '/api/registroNuevoFormulario', require('./routes/documentos/principalunisofom/registroNuevoFormulario') )
app.use( '/api/colRegimenFiscalAldaDev', require('./routes/documentos/colecciones/colRegimenFiscalAldaDev') )
app.use( '/api/colPaisConLadaAldaDev', require('./routes/documentos/colecciones/colPaisConLadaAldaDev') )
app.use( '/api/colUsoCfdiSatAldaDev', require('./routes/documentos/colecciones/colUsoCfdiSatAldaDev') )

//<%Pantallalinea%>app.use( '/api/<%PLMi-clavePantalla%>', require('./routes/pantallas/<%PLMi-clavePantalla%>') )
//control de archivo
app.use( '/api/albums', require('./routes/controles/albumsRoutes') )
app.use( '/api/photos', require('./routes/controles/photosRoutes') )
app.use( '/api/controlarchivos', require('./routes/controles/archivosRoutes') )
app.use("/uploads", express.static("uploads"));
app.use( '/api/participantes', require('./routes/controles/participantes') )

// Lo último
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve( __dirname, 'public/index.html' ) );
// });
//produccion
app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'public/index.html' ));
});
app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT );
});










