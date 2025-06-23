const estado = {
  id: {
    prop: "id",
    type: String,
  },
  c_Pais: {
    prop: "c_Pais",
    type: String,
  },
  nombreDelEstado: {
    prop: "nombreDelEstado",
    type: String,
  },
  fechaInicioDeVigencia: {
    prop: "fechaInicioDeVigencia",
    type: String,
  },
  fechaFinDeVigencia: {
    prop: "fechaFinDeVigencia",
    type: String,
  },
};

const impuesto = {
  id: {
    prop: "id",
    type: String,
  },
  descripcion: {
    prop: "descripcion",
    type: String,
  },
  retencion: {
    prop: "retencion",
    type: String,
  },
  traslado: {
    prop: "traslado",
    type: String,
  },
  localOFederal: {
    prop: "localOFederal",
    type: String,
  },
  fechaInicioDeVigencia: {
    prop: "fechaInicioDeVigencia",
    type: String,
  },
  fechaFinDeVigencia: {
    prop: "fechaFinDeVigencia",
    type: String,
  },
};

const localidad = {
  c_Localidad: {
    prop: "c_Localidad",
    type: String,
  },
  c_Estado: {
    prop: "c_Estado",
    type: String,
  },
  descripcion: {
    prop: "descripcion",
    type: String,
  },
  fechaDeInicioDeVigencia: {
    prop: "fechaDeInicioDeVigencia",
    type: String,
  },
  fechaDeFinDeVigencia: {
    prop: "fechaDeFinDeVigencia",
    type: String,
  },
};

const meses = {
  id: {
    prop: "id",
    type: String,
  },
  descripcion: {
    prop: "descripcion",
    type: String,
  },
  fechaInicioDeVigencia: {
    prop: "fechaFinDeVigencia",
    type: String,
  },
  fechaFinDeVigencia: {
    prop: "fechaFinDeVigencia",
    type: String,
  },
};

const metodoPago = {
  id: {
    prop: "id",
    type: String,
  },
  descripcion: {
    prop: "descripcion",
    type: String,
  },
  fechaInicioDeVigencia: {
    prop: "fechaFinDeVigencia",
    type: String,
  },
  fechaFinDeVigencia: {
    prop: "fechaFinDeVigencia",
    type: String,
  },
};

const moneda = {
  id: {
    prop: "id",
    type: String,
  },
  descripcion: {
    prop: "descripcion",
    type: String,
  },
  decimales: {
    prop: "decimales",
    type: String,
  },
  porcentajeVariacion: {
    prop: "porcentajeVariacion",
    type: String,
  },
  fechaInicioDeVigencia: {
    prop: "fechaFinDeVigencia",
    type: String,
  },
  fechaFinDeVigencia: {
    prop: "fechaFinDeVigencia",
    type: String,
  },
};

const municipio = {
  c_Municipio: {
    prop: "c_Municipio",
    type: String,
  },
  c_Estado: {
    prop: "c_Estado",
    type: String,
  },
  descripcion: {
    prop: "descripcion",
    type: String,
  },
  fechaInicioDeVigencia: {
    prop: "fechaFinDeVigencia",
    type: String,
  },
  fechaFinDeVigencia: {
    prop: "fechaFinDeVigencia",
    type: String,
  },
};

const numPedimentoAduana = {
  c_Aduana: {
    prop: "c_Aduana",
    type: String,
  },
  patente: {
    prop: "patente",
    type: String,
  },
  ejercicio: {
    prop: "ejercicio",
    type: String,
  },
  cantidad: {
    prop: "cantidad",
    type: String,
  },
  fechaInicioDeVigencia: {
    prop: "fechaFinDeVigencia",
    type: String,
  },
  fechaFinDeVigencia: {
    prop: "fechaFinDeVigencia",
    type: String,
  },
};

const objetoImp = {
  id: {
    prop: "id",
    type: String,
  },
  descripcion: {
    prop: "descripcion",
    type: String,
  },
  fechaInicioDeVigencia: {
    prop: "fechaFinDeVigencia",
    type: String,
  },
  fechaFinDeVigencia: {
    prop: "fechaFinDeVigencia",
    type: String,
  },
};

const pais = {
  id: {
    prop: "id",
    type: String,
  },
  descripcion: {
    prop: "descripcion",
    type: String,
  },
  formatoDeCodigoPostal: {
    prop: "formatoDeCodigoPostal",
    type: String,
  },
  formatoDeRegistroDeIdentidadTributaria: {
    prop: "formatoDeRegistroDeIdentidadTributaria",
    type: String,
  },
  validacionDelRegistroDeIdentidadTributaria: {
    prop: "validacionDelRegistroDeIdentidadTributaria",
    type: String,
  },
  agrupaciones: {
    prop: "agrupaciones",
    type: String,
  },
};

const patenteAduanal = {
  c_PatenteAduanal: {
    prop: "c_PatenteAduanal",
    type: String,
  },
  inicioDeVigenciaDeLaPatente: {
    prop: "inicioDeVigenciaDeLaPatente",
    type: String,
  },
  finDeVigenciaDeLaPatente: {
    prop: "finDeVigenciaDeLaPatente",
    type: String,
  },
};

const regimenFiscal = {
  id: {
    prop: "id",
    type: String,
  },
  descripcion: {
    prop: "descripcion",
    type: String,
  },
  fisica: {
    prop: "fisica",
    type: String,
  },
  moral: {
    prop: "moral",
    type: String,
  },
  fechaDeInicioDeVigencia: {
    prop: "fechaDeInicioDeVigencia",
    type: String,
  },
  fechaDeFinDeVigencia: {
    prop: "fechaDeFinDeVigencia",
    type: String,
  },
};

const tasaOCuota = {
  rangoOFijo: {
    prop: "rangoOFijo",
    type: String,
  },
  minimo: {
    prop: "minimo",
    type: String,
  },
  maximo: {
    prop: "maximo",
    type: String,
  },
  impuesto: {
    prop: "impuesto",
    type: String,
  },
  factor: {
    prop: "factor",
    type: String,
  },
  traslado: {
    prop: "traslado",
    type: String,
  },
  retencion: {
    prop: "retencion",
    type: String,
  },
  fechaInicioDeVigencia: {
    prop: "fechaInicioDeVigencia",
    type: String,
  },
  fechaFinDeVigencia: {
    prop: "fechaFinDeVigencia",
    type: String,
  },
};

const periodicidad = {
  id: {
    prop: "id",
    type: String,
  },
  descripcion: {
    prop: "descripcion",
    type: String,
  },
  fechaInicioDeVigencia: {
    prop: "fechaInicioDeVigencia",
    type: String,
  },
  fechaFinDeVigencia: {
    prop: "fechaFinDeVigencia",
    type: String,
  },
};

const tipoComprobante = {
  id: {
    prop: "id",
    type: String,
  },
  descripcion: {
    prop: "descripcion",
    type: String,
  },
  valorMaximoNS: {
    prop: "valorMaximoNS",
    type: String,
  },
  valorMaximoNdS: {
    prop: "valorMaximoNdS",
    type: String,
  },
  fechaInicioDeVigencia: {
    prop: "fechaInicioDeVigencia",
    type: String,
  },
  fechaFinDeVigencia: {
    prop: "fechaFinDeVigencia",
    type: String,
  },
};

const tipoFactor = {
  id: {
    prop: "id",
    type: String,
  },
  fechaInicioDeVigencia: {
    prop: "fechaInicioDeVigencia",
    type: String,
  },
  fechaFinDeVigencia: {
    prop: "fechaFinDeVigencia",
    type: String,
  },
};

const tipoRelacion = {
  id: {
    prop: "id",
    type: String,
  },
  descripcion: {
    prop: "descripcion",
    type: String,
  },
  fechaInicioDeVigencia: {
    prop: "fechaInicioDeVigencia",
    type: String,
  },
  fechaFinDeVigencia: {
    prop: "fechaFinDeVigencia",
    type: String,
  },
};

const usoCFDI = {
  id: {
    prop: "id",
    type: String,
  },
  descripcion: {
    prop: "descripcion",
    type: String,
  },
  aplicaParaTipoPersonaFisica: {
    prop: "aplicaParaTipoPersonaFisica",
    type: String,
  },
  aplicaParaTipoPersonaMoral: {
    prop: "aplicaParaTipoPersonaMoral",
    type: String,
  },
  fechaInicioDeVigencia: {
    prop: "fechaInicioDeVigencia",
    type: String,
  },
  fechaFinDeVigencia: {
    prop: "fechaFinDeVigencia",
    type: String,
  },
  regimenFiscalReceptor: {
    prop: "regimenFiscalReceptor",
    type: String,
  },
};

const aduana = {
  id: {
    prop: "id",
    type: String,
  },
  descripcion: {
    prop: "descripcion",
    type: String,
  },
  fechaInicioDeVigencia: {
    prop: "fechaInicioDeVigencia",
    type: String,
  },
  fechaFinDeVigencia: {
    prop: "fechaFinDeVigencia",
    type: String,
  },
};

const claveProdServ = {
  id: {
    prop: "id",
    type: String,
  },
  descripcion: {
    prop: "descripcion",
    type: String,
  },
  incluirIVATrasladado: {
    prop: "incluirIVATrasladado",
    type: String,
  },
  incluirIEPSTrasladado: {
    prop: "incluirIEPSTrasladado",
    type: String,
  },
  complementoQueDebeIncluir: {
    prop: "complementoQueDebeIncluir",
    type: String,
  },
  fechaInicioVigencia: {
    prop: "fechaInicioVigencia",
    type: String,
  },
  fechaFinVigencia: {
    prop: "fechaFinVigencia",
    type: String,
  },
  estimuloFranjaFronteriza: {
    prop: "estimuloFranjaFronteriza",
    type: String,
  },
  palabrasSimilares: {
    prop: "palabrasSimilares",
    type: String,
  },
};

const claveUnidad = {
  id: {
    prop: "id",
    type: String,
  },
  nombre: {
    prop: "nombre",
    type: String,
  },
  descripcion: {
    prop: "descripcion",
    type: String,
  },
  nota: {
    prop: "nota",
    type: String,
  },
  fechaDeInicioDeVigencia: {
    prop: "fechaDeInicioDeVigencia",
    type: String,
  },
  fechaDeFinDeVigencia: {
    prop: "fechaDeFinDeVigencia",
    type: String,
  },
  simbolo: {
    prop: "simbolo",
    type: String,
  },
};

const codigoPostal = {
  id: {
    prop: "id",
    type: String,
  },
  c_Estado: {
    prop: "c_Estado",
    type: String,
  },
  c_Municipio: {
    prop: "c_Municipio",
    type: String,
  },
  c_Localidad: {
    prop: "c_Localidad",
    type: String,
  },
  estimuloFranjaFronteriza: {
    prop: "estimuloFranjaFronteriza",
    type: String,
  },
  fechaInicioDeVigencia: {
    prop: "fechaInicioDeVigencia",
    type: String,
  },
  fechaFinDeVigencia: {
    prop: "fechaFinDeVigencia",
    type: String,
  },
  referenciasDelHusoHorario: {
    prop: "referenciasDelHusoHorario",
    type: String,
  },
};

const colonia = {
  c_Colonia: {
    prop: "c_Colonia",
    type: String,
  },
  c_CodigoPostal: {
    prop: "c_CodigoPostal",
    type: String,
  },
  nombreDelAsentamiento: {
    prop: "nombreDelAsentamiento",
    type: String,
  },
};

const exportacion = {
  id: {
    prop: "id",
    type: String,
  },
  descripcion: {
    prop: "descripcion",
    type: String,
  },
  fechaInicioDeVigencia: {
    prop: "fechaInicioDeVigencia",
    type: String,
  },
};


const formaPago = {
  id: {
    prop: "id",
    type: String,
  },
  descripcion: {
    prop: "descripcion",
    type: String,
  },
  bancarizado: {
    prop: "bancarizado",
    type: String,
  },
  numeroDeOperacion: {
    prop: "numeroDeOperacion",
    type: String,
  },
  rFCDelEmisorDeLaCuentaOrdenante: {
    prop: "rFCDelEmisorDeLaCuentaOrdenante",
    type: String,
  },
  cuentaOrdenante: {
    prop: "cuentaOrdenante",
    type: String,
  },
  patronParaCuentaOrdenante: {
    prop: "patronParaCuentaOrdenante",
    type: String,
  },
  rFCDelEmisorCuentaDeBeneficiario: {
    prop: "rFCDelEmisorCuentaDeBeneficiario",
    type: String,
  },
  cuentaDeBenenficiario: {
    prop: "cuentaDeBenenficiario",
    type: String,
  },
  patronParaCuentaBeneficiaria: {
    prop: "patronParaCuentaBeneficiaria",
    type: String,
  },

  tipoCadenaPago: {
    prop: "tipoCadenaPago",
    type: String,
  },
  nombreDelBancoEmisorDeLaCuentaOrdenanteEnCasoDeExtranjero: {
    prop: "nombreDelBancoEmisorDeLaCuentaOrdenanteEnCasoDeExtranjero",
    type: String,
  },
  fechaInicioDeVigencia: {
    prop: "fechaInicioDeVigencia",
    type: String,
  },
  fechaFinDeVigencia: {
    prop: "fechaFinDeVigencia",
    type: String,
  },
};

module.exports = {
  estado,
  impuesto,
  localidad,
  meses,
  metodoPago,
  moneda,
  municipio,
  numPedimentoAduana,
  objetoImp,
  pais,
  patenteAduanal,
  periodicidad,
  regimenFiscal,
  tasaOCuota,
  tipoComprobante,
  tipoFactor,
  tipoRelacion,
  usoCFDI,
  aduana,
  claveProdServ,
  claveUnidad,
  codigoPostal,
  colonia,
  exportacion,
};
