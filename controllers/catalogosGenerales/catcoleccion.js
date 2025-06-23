const { response } = require("express");

const CatEntidadMexico = require("../../models/catalogosGenerales/localizacion/catentidadmexico");
const CatPais = require("../../models/catalogosGenerales/localizacion/catpais");
const CatCodigoPostal = require("../../models/catalogosGenerales/localizacion/catcodigopostal");
const CatLocalidad = require("../../models/catalogosGenerales/localizacion/catlocalidad");
const CatMunicipio = require("../../models/catalogosGenerales/localizacion/catmunicipio");
const CatNacionalidad = require("../../models/catalogosGenerales/localizacion/catnacionalidad");
const CatReligion = require("../../models/catalogosGenerales/localizacion/catreligion");
const CatEscolaridad = require("../../models/catalogosGenerales/localizacion/catescolaridad");
const CatOcupacion = require("../../models/catalogosGenerales/localizacion/catocupacion");
const CatPaisLada = require("../../models/catalogosGenerales/localizacion/catpaislada");
const RegimenFiscal = require("../../models/catalogosGenerales/sat/regimenFiscal");

//*cliente

// const ColClaveProdServAldaDev = require("../../models/cliente/colclaveprodservaldadev");

// const ColRegimenFiscalAldaDev = require("../../models/documentos/colecciones/colRegimenFiscalAldaDev");
// const ColUsoCfdiSatAldaDev = require("../../models/documentos/colecciones/colUsoCfdiSatAldaDev");

const getCatColeccion = async (req, res = response) => {

  switch (req.params.catalogo) {
   

    case "catPais":
      await CatPais.find()
        .sort({ NOMBRE_PAIS: 1 })
        // .limit(1000)
        .then((catalogo) => {
          res.send({
            ok: true,
            catalogo,
          });
        });
      break;

    case "catEntidadMexico":
      await CatEntidadMexico.find()
        .sort({ ENTIDAD_FEDERATIVA: 1 })
        // .limit(1000)
        .then((catalogo) => {
          res.send({
            ok: true,
            catalogo,
          });
        });

      break;

    case "catMunicipio":
      const catEntidadMexicoBD = await CatEntidadMexico.findOne({
        ENTIDAD_FEDERATIVA: req.query.claveestado,
      });

      if (catEntidadMexicoBD) {
        CatMunicipio.find({ EFE_KEY: catEntidadMexicoBD.CATALOG_KEY })
          .sort({ MUNICIPIO: 1 })
          .then((catalogo) => {
            res.send({
              ok: true,
              catalogo,
            });
          });
      } else {
        res.send({
          ok: true,
          catalogo: [],
        });
      }

      break;

    case "catLocalidad": //ciudad
      const catEntidadBD = await CatEntidadMexico.findOne({
        ENTIDAD_FEDERATIVA: req.query.claveestado,
      });

      if (catEntidadBD) {
        const catMunicipioBD = await CatMunicipio.findOne({
          MUNICIPIO: req.query.clavemunicipio,
          EFE_KEY: catEntidadBD.CATALOG_KEY,
        });
        if (catMunicipioBD) {
          CatLocalidad.find({
            CVE_ENT: catEntidadBD.CATALOG_KEY,
            CVE_MUN: catMunicipioBD.CATALOG_KEY,
          })
            .sort({ NOM_LOC: 1 })
            .then((catalogo) => {
              res.send({
                ok: true,
                catalogo,
              });
            });
        } else {
          res.send({
            ok: true,
            catalogo: [],
          });
        }
      } else {
        res.send({
          ok: true,
          catalogo: [],
        });
      }

      break;
    case "catColonia":
      const catEntidadBD1 = await CatEntidadMexico.findOne({
        ENTIDAD_FEDERATIVA: req.query.claveestado,
      });
      if (catEntidadBD1) {
        const catMunicipioBD1 = await CatMunicipio.findOne({
          MUNICIPIO: req.query.clavemunicipio,
          EFE_KEY: catEntidadBD1.CATALOG_KEY,
        });

        if (catMunicipioBD1) {
          CatCodigoPostal.find({
            c_estado: catEntidadBD1.CATALOG_KEY,
            c_mnpio: catMunicipioBD1.CATALOG_KEY,
          })
            .sort({ d_asenta: 1 })
            .then((catalogo) => {
              res.send({
                ok: true,
                catalogo,
              });
            });
        } else {
          res.send({
            ok: true,
            catalogo: [],
          });
        }
      } else {
        res.send({
          ok: true,
          catalogo: [],
        });
      }

      break;

    case "catCodigoPostal":
  // 
      await CatCodigoPostal.find()
        // .sort({ d_codigo: 1 })
        .limit(500)
        .then((catalogo) => {

          // console.log(catalogo)
          res.send({
            ok: true,
            catalogo,
          });
        });

      break;

    case "catEscolaridad":
      await CatEscolaridad.distinct("AGRUPACION")

        // .limit(100)
        .then((resultado) => {
          let cat = resultado.map((element) => {
            return { FORMACION_ACADEMICA: element };
          });

          res.send({
            ok: true,
            catalogo: cat,
          });
        });
      break;

    case "catOcupacion":
      await CatOcupacion.distinct("CLASIFICACION")
        // .sort({ CLASIFICACION: 1 })
        // .limit(100)
        .then((resp) => {
          let clas = resp.map((element) => {
            return { CLASIFICACION: element };
          });
          res.send({
            ok: true,
            catalogo: clas,
          });
        });
      break;

    case "catReligion":
      await CatReligion.find()
        .sort({ RELIGION: 1 })
        // .limit(100)
        .then((catalogo) => {
          res.send({
            ok: true,
            catalogo,
          });
        });
      break;

    case "catNacionalidad":
      await CatNacionalidad.find()
        .sort({ pais: 1 })
        // .limit(100)
        .then((catalogo) => {
          res.send({
            ok: true,
            catalogo,
          });
        });
      break;

    case "catBancosMexico":
      await CatBancosMexico.find()
        .limit(100)
        .then((catalogo) => {
          res.send({
            ok: true,
            catalogo,
          });
        });
      break;

    case "catPaisLada":
      await CatPaisLada.find()
        .limit(100)
        .then((catalogo) => {
          res.send({
            ok: true,
            catalogo,
          });
        });
      break;

    case "catRegimenFiscalSat":
      console.log("entra");
      await RegimenFiscal.find().then((catalogo) => {
        console.log(catalogo);

        res.send({
          ok: true,
          catalogo,
        });
      });
      break;

    //* cliente

    case "registroProducto":
      await RegistroProducto.find().then((catalogo) => {
        res.send({
          ok: true,
          catalogo,
        });
      });
      break;

    case "colClaveProdServAlda":
      console.log("entra prov");
      await ColClaveProdServAldaDev.find()
        .sort({ c_ClaveProdServ: 1 })
        .limit(500)
        .then((catalogo) => {
          res.send({
            ok: true,
            catalogo,
          });
        });

      break;
    case "colUsoCFDI":
      console.log("entra prov");
      await ColUsoCfdiSatAldaDev.find()
        .sort({ Descripcion: 1 })
        .limit(500)
        .then((catalogo) => {
          res.send({
            ok: true,
            catalogo,
          });
        });

      break;
    case "colRegimenFiscal":
      console.log("entra prov");
      await ColRegimenFiscalAldaDev.find()
        .sort({ Descripcion: 1 })
        .limit(500)
        .then((catalogo) => {
          res.send({
            ok: true,
            catalogo,
          });
        });

      break;
  }
};

const getCatColeccionTermino = async (req, res = response) => {
  const regex = new RegExp(req.params.termino, "i");
 
console.log('entra')
  switch (req.params.catalogo) {
    case "catCie9":
      await Catcie9.find({
        $or: [{ PRO_NOMBRE: regex }, { CATALOG_KEY: regex }],
      })
        .limit(100)
        .then((catalogo) => {
          res.send({
            ok: true,
            catalogo,
          });
        });
      break;
    case "catCie10":
      await Catcie10.find({ $or: [{ NOMBRE: regex }, { CATALOG_KEY: regex }] })
        .limit(100)
        .then((catalogo) => {
          res.send({
            ok: true,
            catalogo,
          });
        });
      break;

    // cliente
    case "colClaveProdServAlda":
      console.log("entra prov");
      await ColClaveProdServAldaDev.find({
        $or: [
          { c_ClaveProdServ: regex },
          { Descripción: regex },
          { claveYDescripcion: regex },
        ],
      })
        .sort({ c_ClaveProdServ: 1 })

        .limit(100)
        .then((catalogo) => {
          res.send({
            ok: true,
            catalogo,
          });
        });

      break;

    case "colRegimenFiscal":
      console.log("entra prov");
      await ColRegimenFiscalAldaDev.find({
        $or: [{ c_RegimenFiscal: regex }, { Descripcion: regex }],
      })
        .sort({ Descripcion: 1 })

        .limit(100)
        .then((catalogo) => {
          res.send({
            ok: true,
            catalogo,
          });
        });

      break;

    case "colUsoCFDI":
      console.log("entra prov");
      await ColUsoCfdiSatAldaDev.find({
        $or: [{ c_UsoCFDI: regex }, { Descripcion: regex }],
      })
        .sort({ Descripcion: 1 })

        .limit(100)
        .then((catalogo) => {
          res.send({
            ok: true,
            catalogo,
          });
        });

      break;

    // fin cliente

    case "catCodigoPostal":
      console.log(regex)
      await CatCodigoPostal.find({
        $or: [
          { d_codigo: regex },
          { d_asenta: regex },
          { d_tipo_asenta: regex },
          { D_mnpio: regex },
          { d_estado: regex },
          { d_ciudad: regex },
        ],
      })
        .sort({ d_estado: 1 })
        // await CatCodigoPostal.find(
        //   {$text: {
        //     $search: regex,
        //     $diacriticSensitive: false,
        //   }}
        // ).sort({d_estado:1})
        .limit(100)
        .then((catalogo) => {
          res.send({
            ok: true,
            catalogo,
          });
        });

      break;

    case "catEscolaridad":
      await CatEscolaridad.find({
        $or: [
          { CATALOG_KEY: regex },
          { FORMACION_ACADEMICA: regex },
          { AGRUPACION: regex },
        ],
      })
        .limit(100)
        .then((catalogo) => {
          res.send({
            ok: true,
            catalogo,
          });
        });
      break;
    case "catLocalidad":
      await CatLocalidad.find({ $or: [{ CVE_LOC: regex }, { NOM_LOC: regex }] })
        .limit(100)
        .then((catalogo) => {
          res.send({
            ok: true,
            catalogo,
          });
        });
      break;
    case "catMunicipio":
      await CatMunicipio.find({
        $or: [{ CATALOG_KEY: regex }, { MUNICIPIO: regex }],
      })
        .limit(100)
        .then((catalogo) => {
          res.send({
            ok: true,
            catalogo,
          });
        });
      break;
    case "catOcupacion":
      await CatOcupacion.find({
        $or: [{ CLAVE: regex }, { CLASIFICACION: regex }],
      })
        .limit(100)
        .then((catalogo) => {
          res.send({
            ok: true,
            catalogo,
          });
        });
      break;
    case "catReligion":
      await CatReligion.find({
        $or: [
          { CREDO: regex },
          { GRUPO: regex },
          { DENOMINACION: regex },
          { CLAVERELIGION: regex },
          { RELIGION: regex },
        ],
      })
        .limit(100)
        .then((catalogo) => {
          res.send({
            ok: true,
            catalogo,
          });
        });
      break;
  }
};

const getCatColeccionPorId = async (req, res = response) => {
  const id = req.params.id;

  switch (req.params.catalogo) {
    case "catCodigoPostal":
      await CatCodigoPostal.findById(id).then((catalogo) => {
        // CatMunicipio;
        // CatLocalidad;
        // CatEntidadMexico;

        res.send({
          ok: true,
          catalogo,
        });
      });

      break;
  }
};

module.exports = {
  getCatColeccion,
  getCatColeccionTermino,
  getCatColeccionPorId,
};
