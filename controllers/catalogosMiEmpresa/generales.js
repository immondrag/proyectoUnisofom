const { response } = require("express");
const { model } = require("mongoose");
const General = require("../../models/catalogosMiEmpresa/generales");
const {
  GeneralesSchema,
} = require("../../models/catalogosMiEmpresa/generales");
const Generales = model("Generales", GeneralesSchema);
const { RegistroMiEmpresa } = require("../../models/registroMiEmpresa");
const { getIdRelacion } = require("../../middlewares/funciones");

const getCatalogoGeneral = async (req, res = response) => {
  const idrelacion = getIdRelacion(req);
  const uid = req.uid;
  const busqueda = req.params.id;
  const catalogo = req.params.catalogo;

  await RegistroMiEmpresa.findById(idrelacion)
    .then((valor) => {
      switch (catalogo) {
        case "catalogosGenerales":
          const generals = valor.catalogosGenerales.filter(
            (element) => element.claveCatalogo == busqueda
          );
     
          res.json({
            ok: true,
            catalogoGenerals: generals,
          });
          break;

        case "colecion":
          let catalogo;
          switch (busqueda) {
            case "registroAgenda":
               catalogo = valor.registroAgenda;
              res.json({
                ok: true,
                catalogo,
              });
              break;
              case "registroCategoria":
                 catalogo = valor.registroCategoria;
                 res.json({
                   ok: true,
                   catalogo,
                 });
                 break;
          }


          break;
     
     
          case "registroEmpresaRelacionada":
            const registroEmpresaRelacionada = valor.registroEmpresaRelacionada.filter(
              (element) => element.claveCatalogo == busqueda
            );
       
            res.json({
              ok: true,
              registroEmpresaRelacionada,
            });
            break;
     
        }
    })

    .catch((e) => {
      console.log(e);
      res.status(400).send(e);
    });
};

const crearGeneral = async (req, res = response) => {
  const uid = req.uid;
  const general = new Generales({
    usuario: uid,
    ...req.body,
  });

  try {
    const generalDB = await general.save();

    res.json({
      ok: true,
      general: generalDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const actualizarGeneral = async (req, res = response) => {
  const id = req.params.id;
  const uid = req.uid;

  try {
    const general = await General.findById(id);

    if (!general) {
      return res.status(404).json({
        ok: true,
        msg: "General no encontrado por id",
      });
    }

    const cambiosGeneral = {
      ...req.body,
      usuario: uid,
    };

    const generalActualizado = await General.findByIdAndUpdate(
      id,
      cambiosGeneral,
      { new: true }
    );

    res.json({
      ok: true,
      general: generalActualizado,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const borrarGeneral = async (req, res = response) => {
  const id = req.params.id;

  try {
    const general = await General.findById(id);

    if (!general) {
      return res.status(404).json({
        ok: true,
        msg: "General no encontrado por id",
      });
    }

    await General.findByIdAndDelete(id);

    res.json({
      ok: true,
      msg: "General borrada",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

module.exports = {
  getCatalogoGeneral,
  crearGeneral,
  actualizarGeneral,
  borrarGeneral,
  // getGeneralById
};
