//<%IniModeloBC%>
const { Schema, model, Decimal128 } = require("mongoose");
// control rudo documentos archivos

const { ArchivosSchema } = require("../../controles/archivos");

//
const {
  SetDireccionEmpresaSchema,
} = require("../../setCampos/setDireccionEmpresa");
const {
  SetTelefonoContactoSchema,
} = require("../../setCampos/setTelefonoContacto");
const { SetMailContactoSchema } = require("../../setCampos/setMailContacto");
// const {SetDireccionEmpresaSchema } = require('../../setCampos/setDireccionEmpresa');
// const {SetTelefonoContactoSchema } = require('../../setCampos/setTelefonoContacto');
// const {SetMailContactoSchema } = require('../../setCampos/setMailContacto');
const {
  SetDependenciaPuestoPeriodoSchema,
} = require("../../setCampos/setDependenciaPuestoPeriodo");
const {
  SetEstructuraAccionariaPersonasFisicasSchema,
} = require("../../setCampos/setEstructuraAccionariaPersonasFisicas");
const {
  SetEstructuraAccionariaPersonasMoralesSchema,
} = require("../../setCampos/setEstructuraAccionariaPersonasMorales");
const {
  SetPersonasQueEjercenControlSchema,
} = require("../../setCampos/setPersonasQueEjercenControl");
// const {SetPersonasQueEjercenControlSchema } = require('../../setCampos/setPersonasQueEjercenControl');
// const {SetPersonasQueEjercenControlSchema } = require('../../setCampos/setPersonasQueEjercenControl');
// const {SetTelefonoContactoSchema } = require('../../setCampos/setTelefonoContacto');
// const {SetMailContactoSchema } = require('../../setCampos/setMailContacto');
// const {SetDependenciaPuestoPeriodoSchema } = require('../../setCampos/setDependenciaPuestoPeriodo');
const {
  SetDatosGeneralesCompletosPFSchema,
} = require("../../setCampos/setDatosGeneralesCompletosPF");
// const {SetDatosGeneralesCompletosPFSchema } = require('../../setCampos/setDatosGeneralesCompletosPF');
const {
  SetDatosGeneralesCompletosPMSchema,
} = require("../../setCampos/setDatosGeneralesCompletosPM");
// const {SetDatosGeneralesCompletosPFSchema } = require('../../setCampos/setDatosGeneralesCompletosPF');
// const {SetDatosGeneralesCompletosPMSchema } = require('../../setCampos/setDatosGeneralesCompletosPM');
// const {SetDatosGeneralesCompletosPFSchema } = require('../../setCampos/setDatosGeneralesCompletosPF');
// const {SetDatosGeneralesCompletosPMSchema } = require('../../setCampos/setDatosGeneralesCompletosPM');
const {
  SetDatosGeneralesCompletosFideicomisoSchema,
} = require("../../setCampos/setDatosGeneralesCompletosFideicomiso");
const {
  SetGarantiaHipotecariaSchema,
} = require("../../setCampos/setGarantiaHipotecaria");
const {
  SetOtrasGarantiasSchema,
} = require("../../setCampos/setOtrasGarantias");
const {
  SetDatosProveedorPrincipalPersonaFisicaSchema,
} = require("../../setCampos/setDatosProveedorPrincipalPersonaFisica");
const {
  SetDatosProveedorPrincipalPersonaMoralSchema,
} = require("../../setCampos/setDatosProveedorPrincipalPersonaMoral");
const {
  SetDatosClientesPersonaFisicaSchema,
} = require("../../setCampos/setDatosClientesPersonaFisica");
const {
  SetDatosClientesPersonaMoralSchema,
} = require("../../setCampos/setDatosClientesPersonaMoral");
const { SetPasivosSchema } = require("../../setCampos/setPasivos");
const { SetReferenciasSchema } = require("../../setCampos/setReferencias");
//relacion

const RegistroNuevoFormularioSchema = Schema({
  creado: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  modificado: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  status: {
    type: String,
    required: true,
    default: "SIN FIRMAR",
  },
  origen: {
    type: String,
  },
  origenID: {
    type: Schema.Types.ObjectId,
  },
  usuarioNombre: {
    type: String,
    required: true,
  },
  usuarioRol: {
    type: String,
    required: true,
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "RegistroUsuario",
    required: true,
  },

  archivos: [ArchivosSchema],

  registroMiEmpresa: {
    type: Schema.Types.ObjectId,
    ref: "RegistroMiEmpresa",
  },

  tipoDePersona: {
    type: String,
  },
  catPersonaFiscalTipoDePersona: {
    type: Schema.Types.ObjectId,
    ref: "CatalogoGeneral",
  },
  razonSocial: {
    type: String,
  },

  numeroActaConstitutiva: {
    type: String,
  },

  fechaDeConstitucion: {
    type: Date,
  },

  notariaNumeroYNombre: {
    type: String,
  },

  demarcacionNotarial: {
    type: String,
  },

  folioMercantil: {
    type: String,
  },

  fechaInscripcionRpp: {
    type: Date,
  },

  tipoDeSociedad: {
    type: String,
  },

  giroOActividadComercial: {
    type: String,
  },

  fechaInicioOperaciones: {
    type: Date,
  },

  rfcConHomoclaveSolicitante: {
    type: String,
  },

  numeroSerieFirmaElectronicaSolicitante: {
    type: String,
  },

  nacionalidad: {
    type: String,
  },

  direccionEmpresa: [SetDireccionEmpresaSchema],

  setTelefonoContacto: [SetTelefonoContactoSchema],

  setMailContacto: [SetMailContactoSchema],

  numeroDeEmpleados: {
    type: String,
  },
  catNumeroEmpleadosNumeroDeEmpleados: {
    type: Schema.Types.ObjectId,
    ref: "CatalogoGeneral",
  },
  situacionDeLasInstalaciones: {
    type: String,
  },

  marcasComerciales: {
    type: String,
  },

  principalesProductos: {
    type: String,
  },

  principalesCompetidores: {
    type: String,
  },

  paginaWeb: {
    type: String,
  },

  redesSociales: {
    type: String,
  },

  domicilioFiscal: [SetDireccionEmpresaSchema],

  trato: {
    type: String,
  },
  catTratoTrato: { type: Schema.Types.ObjectId, ref: "CatalogoGeneral" },
  nombre: {
    type: String,
  },

  apellidoPaterno: {
    type: String,
  },

  apellidoMaterno: {
    type: String,
  },

  nombreCompleto: {
    type: String,
  },

  destinoRecursosOtorgados: {
    type: String,
  },
  catDestinoRecursosDestinoRecursosOtorgados: {
    type: Schema.Types.ObjectId,
    ref: "CatalogoGeneral",
  },
  descripcionRecursosOtorgados: {
    type: String,
  },

  plazo: {
    type: String,
  },

  monto: {
    type: String,
  },

  moneda: {
    type: String,
  },
  catMonedaMoneda: { type: Schema.Types.ObjectId, ref: "CatalogoGeneral" },
  tipoPagoAceptado: {
    type: String,
  },
  catFormaDePagoAceptadoTipoPagoAceptado: {
    type: Schema.Types.ObjectId,
    ref: "CatalogoGeneral",
  },
  bancoEnMexico: {
    type: Boolean,
    default: "true",
  },

  institucionBancariaCatalogo: {
    type: String,
  },
  catBancosMexicoInstitucionBancariaCatalogo: {
    type: Schema.Types.ObjectId,
    ref: "CatalogoGeneral",
  },
  institucionBancaria: {
    type: String,
  },

  moneda: {
    type: String,
  },
  catMonedaMoneda: { type: Schema.Types.ObjectId, ref: "CatalogoGeneral" },
  cuenta: {
    type: String,
  },

  clabe: {
    type: String,
  },

  origenDeLosRecursos: {
    type: String,
  },

  frecuenciaDepositosARealizar: {
    type: String,
  },

  tipoDeMonedaAOperar: {
    type: String,
  },
  catMonedaTipoDeMonedaAOperar: {
    type: Schema.Types.ObjectId,
    ref: "CatalogoGeneral",
  },
  instrumentoMonetario: {
    type: String,
  },

  montoPromedioDeDepositosARealizar: {
    type: String,
  },

  numeroDeTransacciones: {
    type: String,
  },

  planeasRealizarAnticipos: {
    type: String,
  },
  catSiNoPlaneasRealizarAnticipos: {
    type: Schema.Types.ObjectId,
    ref: "CatalogoGeneral",
  },
  enQueOcasiones: {
    type: String,
  },

  tipoDeGarantia: {
    type: String,
  },

  atiendeOtraActividadQueGenereIngresos: {
    type: String,
  },
  catSiNoAtiendeOtraActividadQueGenereIngresos: {
    type: Schema.Types.ObjectId,
    ref: "CatalogoGeneral",
  },
  cualOtraActividadQueGenereIngresos: {
    type: String,
  },

  ocuparaRecursosDeUnTercero: {
    type: String,
  },
  catSiNoOcuparaRecursosDeUnTercero: {
    type: Schema.Types.ObjectId,
    ref: "CatalogoGeneral",
  },
  trato: {
    type: String,
  },
  catTratoTrato: { type: Schema.Types.ObjectId, ref: "CatalogoGeneral" },
  nombre: {
    type: String,
  },

  apellidoPaterno: {
    type: String,
  },

  apellidoMaterno: {
    type: String,
  },

  nombreCompleto: {
    type: String,
  },

  pais: {
    type: String,
  },
  codigoPostal: {
    type: String,
  },
  ciudad: {
    type: String,
  },
  uso: {
    type: String,
  },
  estado: {
    type: String,
  },
  colonia: {
    type: String,
  },
  municipio: {
    type: String,
  },
  calle: {
    type: String,
  },
  numeroExterior: {
    type: String,
  },
  numeroInterior: {
    type: String,
  },
  telefonosContacto: [SetTelefonoContactoSchema],

  emailsContacto: [SetMailContactoSchema],

  genero: {
    type: String,
  },
  catSexoGenero: { type: Schema.Types.ObjectId, ref: "CatalogoGeneral" },
  fechaDeNacimiento: {
    type: String,
  },
  catSexoFechaDeNacimiento: {
    type: Schema.Types.ObjectId,
    ref: "CatalogoGeneral",
  },
  entidadFederativaNacimiento: {
    type: String,
  },
  catEntidadesEntidadFederativaNacimiento: {
    type: Schema.Types.ObjectId,
    ref: "CatalogoGeneral",
  },
  pais: {
    type: String,
  },
  catPaisesPais: { type: Schema.Types.ObjectId, ref: "CatalogoGeneral" },
  nacionalidad: {
    type: String,
  },
  catNacionalidadesNacionalidad: {
    type: Schema.Types.ObjectId,
    ref: "CatalogoGeneral",
  },
  rfcConHomoclaveRepresentanteLegal: {
    type: String,
  },

  curpRepresentanteLegal: {
    type: String,
  },

  numeroSerieFirmaElectronicaRL: {
    type: String,
  },

  numeroEscritura: {
    type: String,
  },

  fechaDeLaEscritura: {
    type: Date,
  },

  nombreNotaria: {
    type: String,
  },

  numeroNotaria: {
    type: String,
  },

  demarcacionNotaria: {
    type: String,
  },

  fechaInscripcionRpp: {
    type: Date,
  },

  folioMercantil: {
    type: String,
  },

  calidadMigratoria: {
    type: String,
  },

  ocupacion: {
    type: String,
  },

  profesion: {
    type: String,
  },

  caracterConElQueRepresenta: {
    type: String,
  },

  actividadOGiroDeNegocio: {
    type: String,
  },

  cargoPublico: {
    type: String,
  },
  catSiNoCargoPublico: { type: Schema.Types.ObjectId, ref: "CatalogoGeneral" },
  dependenciaPuestoPeriodo: [SetDependenciaPuestoPeriodoSchema],

  estructuraAccionariaPersonasFisicas: [
    SetEstructuraAccionariaPersonasFisicasSchema,
  ],

  estructuraAccionariaPersonasMorales: [
    SetEstructuraAccionariaPersonasMoralesSchema,
  ],

  presidenteConsejoDeAdministracion: [SetPersonasQueEjercenControlSchema],

  miembrosDelConsejoConControl: [SetPersonasQueEjercenControlSchema],

  miembrosDelConsejoSinControl: [SetPersonasQueEjercenControlSchema],

  nombreCompleto: {
    type: Array,
  },

  pais: {
    type: String,
  },
  codigoPostal: {
    type: String,
  },
  ciudad: {
    type: String,
  },
  uso: {
    type: String,
  },
  estado: {
    type: String,
  },
  colonia: {
    type: String,
  },
  municipio: {
    type: String,
  },
  calle: {
    type: String,
  },
  numeroExterior: {
    type: String,
  },
  numeroInterior: {
    type: String,
  },
  telefonosContacto: [SetTelefonoContactoSchema],

  emailsContacto: [SetMailContactoSchema],

  genero: {
    type: String,
  },
  catSexoGenero: { type: Schema.Types.ObjectId, ref: "CatalogoGeneral" },
  fechaDeNacimiento: {
    type: String,
  },
  catSexoFechaDeNacimiento: {
    type: Schema.Types.ObjectId,
    ref: "CatalogoGeneral",
  },
  entidadFederativaNacimiento: {
    type: String,
  },
  catEntidadesEntidadFederativaNacimiento: {
    type: Schema.Types.ObjectId,
    ref: "CatalogoGeneral",
  },
  pais: {
    type: String,
  },
  catPaisesPais: { type: Schema.Types.ObjectId, ref: "CatalogoGeneral" },
  nacionalidad: {
    type: String,
  },
  catNacionalidadesNacionalidad: {
    type: Schema.Types.ObjectId,
    ref: "CatalogoGeneral",
  },
  rfcConHomoclave: {
    type: String,
  },

  curp: {
    type: String,
  },

  numeroSerieFirmaElectronica: {
    type: String,
  },

  calidadMigratoria: {
    type: String,
  },

  estadoCivilYRegimen: {
    type: String,
  },

  ocupacionPropietario: {
    type: String,
  },

  profesionPropietario: {
    type: String,
  },

  actividadOGiroDeNegocio: {
    type: String,
  },

  cargoPublico: {
    type: String,
  },
  catSiNoCargoPublico: { type: Schema.Types.ObjectId, ref: "CatalogoGeneral" },
  dependenciaPuestoPeriodo: [SetDependenciaPuestoPeriodoSchema],

  enCasoQueLaPersonaFisicaTengaRL: {
    type: Boolean,
  },

  trato: {
    type: String,
  },
  catTratoTrato: { type: Schema.Types.ObjectId, ref: "CatalogoGeneral" },
  nombre: {
    type: String,
  },

  apellidoPaterno: {
    type: String,
  },

  apellidoMaterno: {
    type: String,
  },

  nombreCompleto: {
    type: String,
  },

  paisDeResidenciaRlDePFisica: {
    type: String,
  },
  catPaisesPaisDeResidenciaRlDePFisica: {
    type: Schema.Types.ObjectId,
    ref: "CatalogoGeneral",
  },
  numeroEscritura: {
    type: String,
  },

  fechaDeLaEscritura: {
    type: Date,
  },

  nombreNotaria: {
    type: String,
  },

  numeroNotaria: {
    type: String,
  },

  demarcacionNotaria: {
    type: String,
  },

  fechaInscripcionRpp: {
    type: Date,
  },

  folioMercantil: {
    type: String,
  },

  proveedoresRecursosCuandoPF: [SetDatosGeneralesCompletosPFSchema],

  enCasoQueLaPersonaFisicaTengaRLPR: {
    type: Boolean,
  },

  trato: {
    type: String,
  },
  catTratoTrato: { type: Schema.Types.ObjectId, ref: "CatalogoGeneral" },
  nombre: {
    type: String,
  },

  apellidoPaterno: {
    type: String,
  },

  apellidoMaterno: {
    type: String,
  },

  nombreCompleto: {
    type: String,
  },

  paisDeResidenciaRlDeRLPR: {
    type: String,
  },
  catPaisesPaisDeResidenciaRlDeRLPR: {
    type: Schema.Types.ObjectId,
    ref: "CatalogoGeneral",
  },
  numeroEscritura: {
    type: String,
  },

  fechaDeLaEscritura: {
    type: Date,
  },

  nombreNotaria: {
    type: String,
  },

  numeroNotaria: {
    type: String,
  },

  demarcacionNotaria: {
    type: String,
  },

  fechaInscripcionRpp: {
    type: Date,
  },

  folioMercantil: {
    type: String,
  },

  proveedoresRecursosCuandoPF: [SetDatosGeneralesCompletosPFSchema],

  proveedoresRecursosCuandoPM: [SetDatosGeneralesCompletosPMSchema],

  avalYOObligadoSolidarioCuandoPF: [SetDatosGeneralesCompletosPFSchema],

  avalYOObligadoSolidarioCuandoPM: [SetDatosGeneralesCompletosPMSchema],

  garanteCuandoPF: [SetDatosGeneralesCompletosPFSchema],

  garanteCuandoPM: [SetDatosGeneralesCompletosPMSchema],

  garanteCuandoFideicomiso: [SetDatosGeneralesCompletosFideicomisoSchema],

  garantiaHipotecaria: [SetGarantiaHipotecariaSchema],

  otrasGarantias: [SetOtrasGarantiasSchema],

  principalesProveedoresPF: [SetDatosProveedorPrincipalPersonaFisicaSchema],

  principalesProveedoresPM: [SetDatosProveedorPrincipalPersonaMoralSchema],

  principalesClientesPF: [SetDatosClientesPersonaFisicaSchema],

  principalesClientesPM: [SetDatosClientesPersonaMoralSchema],

  pasivos: [SetPasivosSchema],

  referencias: [SetReferenciasSchema],
});

RegistroNuevoFormularioSchema.method("toJSON", function () {
  const { __v, ...object } = this.toObject();
  return object;
});

//module.exports = model( 'RegistroNuevoFormulario', RegistroNuevoFormularioSchema );

const RegistroNuevoFormulario = model(
  "RegistroNuevoFormulario",
  RegistroNuevoFormularioSchema
);
module.exports = { RegistroNuevoFormulario, RegistroNuevoFormularioSchema };
