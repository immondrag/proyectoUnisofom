


const cuantosDocumentosStatusIguala = async (Modelo,filtroStatus) => {
    return await Modelo.countDocuments({
      status: filtroStatus,
    });
  };
  
  const cuantosDocumentosStatusDiferentea = async (Modelo,filtroStatus) => {
    return await Modelo.countDocuments({
      $nor: [{ status: filtroStatus }],
    });
    // return await RegistroNuevoProyectoCtc.countDocuments({
    //   $nor: [{ status: filtroStatus }],
    // });
  };
  
  const cuantosDocumentosStatusEn = async (Modelo,filtroStatus) => {
    return await Modelo.countDocuments({
      status: { $in: filtroStatus },
    });
  };
  
  const sumaCampoStatus = async (Modelo,campo, filtroStatus) => {
    widgetValor = await Modelo.aggregate([
      {
        $match: {
          status: {
            $in: filtroStatus,
          },
        },
      },
      {
        $group: {
          _id: "todos",
          suma: {
            $sum: campo,
          },
          count: {
            $sum: 1,
          },
        },
      },
    ]);
    if (widgetValor.length <= 0) {
      widgetValor = 0;
    } else {
      widgetValor = widgetValor[0].suma;
    }
    return widgetValor;
  };
  
  const restarySumarResultadoCampoStatus = async (Modelo,campo1,campo2, filtroStatus) => {

    console.log(filtroStatus)
    if (filtroStatus){
      
    }
    widgetValor = await Modelo.aggregate([
      {
        $match: {
          status: {
            $in: filtroStatus,
          },
        },
      },
      {
        $group: {
          _id: "todos",
          suma: {
            $sum: {$subtract:[campo1,campo2]},
          },
          count: {
            $sum: 1,
          },
        },
      },
    ]);
    if (widgetValor.length <= 0) {
      widgetValor = 0;
    } else {
      widgetValor = widgetValor[0].suma;
    }
    return widgetValor;
  };
  




module.exports = {
    cuantosDocumentosStatusIguala,
    cuantosDocumentosStatusDiferentea,
    cuantosDocumentosStatusEn,
    sumaCampoStatus,
    restarySumarResultadoCampoStatus
  };
  
  