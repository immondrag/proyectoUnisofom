var nodemailer = require("nodemailer");


function obtenerInicioYFinDeMes(fecha) {
  const date = new Date(fecha); // Convertir a objeto Date

  // Obtener el primer día del mes
  const inicio = new Date(date.getFullYear(), date.getMonth(), 1);

  // Obtener el último día del mes
  const fin = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
    23,
    59,
    59,
    999
  );

  return { inicio, fin };
}

function obtenerInicioYFinDeAnio(fecha) {
  const date = new Date(fecha); // Convertir a objeto Date

  // Obtener el primer día del mes
  const inicio = new Date(date.getFullYear(), 1, 1);

  // Obtener el último día del mes
  const fin = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
    23,
    59,
    59,
    999
  );

  return { inicio, fin };
}

module.exports = {
  obtenerInicioYFinDeMes,
  obtenerInicioYFinDeAnio,
};
