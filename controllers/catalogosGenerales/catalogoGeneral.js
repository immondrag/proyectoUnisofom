const { response } = require("express");

const CatalogoGeneral = require("../../models/catalogosGenerales/catalogoGeneral");

const getCatalogoGeneral = async (req, res = response) => {
  const catalogoGenerals = await CatalogoGeneral.find(req.query).sort({
    orden: 1,
  });
  res.json({
    ok: true,
    catalogoGenerals,
  });
};

const getCatalogoGeneralById = async (req, res = response) => {
  const id = req.params.id;

  try {
    const catalogoGeneral = await CatalogoGeneral.findById(id);

    res.json({
      ok: true,
      catalogoGeneral,
    });
  } catch (error) {
    console.log(error);
    res.json({
      ok: true,
      msg: "Hable con el administrador",
    });
  }
};

const crearCatalogoGeneral = async (req, res = response) => {
  const uid = req.uid;
  const catalogoGeneral = new CatalogoGeneral({
    usuario: uid,
    ...req.body,
  });
  try {
    const catalogoGeneralDB = await catalogoGeneral.save();
    res.json({
      ok: true,
      catalogoGeneral: catalogoGeneralDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const actualizarCatalogoGeneral = async (req, res = response) => {
  const id = req.params.id;
  const uid = req.uid;

  try {
    const catalogoGeneral = await CatalogoGeneral.findById(id);

    if (!catalogoGeneral) {
      return res.status(404).json({
        ok: true,
        msg: "CatalogoGeneral no encontrado por id",
      });
    }

    const cambiosCatalogoGeneral = {
      ...req.body,
      usuario: uid,
    };

    const catalogoGeneralActualizado = await CatalogoGeneral.findByIdAndUpdate(
      id,
      cambiosCatalogoGeneral,
      { new: true }
    );

    res.json({
      ok: true,
      catalogoGeneral: catalogoGeneralActualizado,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const borrarCatalogoGeneral = async (req, res = response) => {
  const id = req.params.id;

  try {
    const catalogoGeneral = await CatalogoGeneral.findById(id);

    if (!catalogoGeneral) {
      return res.status(404).json({
        ok: true,
        msg: "CatalogoGeneral no encontrado por id",
      });
    }

    await CatalogoGeneral.findByIdAndDelete(id);

    res.json({
      ok: true,
      msg: "CatalogoGeneral borrado",
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
  crearCatalogoGeneral,
  actualizarCatalogoGeneral,
  borrarCatalogoGeneral,
  getCatalogoGeneralById,
};
