const RegistroUsuario = require("../models/registroUsuario");
const fs = require("fs");


const borrarImagen = (path) => {
  if (fs.existsSync(path)) {
    // borrar la imagen anterior
    fs.unlinkSync(path);
  }
};

const actualizarImagen = async (
  tipo,
  idRelacion,
  id,
  nombreArchivo,
  nombre = ""
) => {
  let pathViejo = "";

  switch (tipo) {

    case "registroUsuario":
      const usuario = await RegistroUsuario.findById(id);
      if (!usuario) {
        console.log("No es un usuario por id");
        return false;
      }

      pathViejo = `./uploads/registroUsuario/${usuario.img}`;
      borrarImagen(pathViejo);

      usuario.img = nombreArchivo;
      await usuario.save();
      return true;

      break;
  }
};

module.exports = {
  actualizarImagen,
};
