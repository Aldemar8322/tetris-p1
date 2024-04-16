"use strict";

const $nombre = document.getElementById("nombre");
const $identificacion = document.getElementById("identificacion");
const $correo = document.getElementById("correo");
const $telefono = document.getElementById("telefono");
const $direccion = document.getElementById("direccion");
const $barrio = document.getElementById("barrio");
const $ciudad = document.getElementById("ciudad");
const $tipoVivienda = document.getElementById("tipoVivienda");
const $vivienda = document.getElementById("vivienda");
const $dueño = document.getElementById("dueño");
const $ocupacion = document.getElementById("ocupacion");
const $ingresos = document.getElementById("ingresos");
const $empresa = document.getElementById("empresa");
const $terminos = document.getElementById("terminos");
const $enviar = document.getElementById("enviar");

let nombre = null;
let identificacion = null;
let correo = null;
let telefono = null;
let direccion = null;
let barrio = null;
let ciudad = null;
let tipoVivienda = null;
let vivienda = null;
let dueño = null;
let ocupacion = null;
let ingresos = null;
let empresa = null;
let terminos = null;

$nombre.addEventListener("input", (evento) => {
  nombre = evento.target.value;
});

$identificacion.addEventListener("input", (evento) => {
  identificacion = evento.target.value;
});

$correo.addEventListener("input", (evento) => {
  correo = evento.target.value;
});

$telefono.addEventListener("input", (evento) => {
  telefono = evento.target.value;
});

$direccion.addEventListener("input", (evento) => {
  direccion = evento.target.value;
});

$barrio.addEventListener("input", (evento) => {
  barrio = evento.target.value;
});

$ciudad.addEventListener("input", (evento) => {
  ciudad = evento.target.value;
});

$tipoVivienda.addEventListener("input", (evento) => {
  tipoVivienda = evento.target.value;
});

$vivienda.addEventListener("input", (evento) => {
  vivienda = evento.target.value;
});

$dueño.addEventListener("input", (evento) => {
  dueño = evento.target.value;
});

$ocupacion.addEventListener("input", (evento) => {
  ocupacion = evento.target.value;
});

$ingresos.addEventListener("input", (evento) => {
  ingresos = evento.target.value;
});

$empresa.addEventListener("input", (evento) => {
  empresa = evento.target.value;
});

$terminos.addEventListener("input", (evento) => {
  terminos = evento.target.value;
});

$enviar.addEventListener("click", (evento) => {
  console.log(nombre);
  console.log(identificacion);
  console.log(correo);
  console.log(telefono);
  console.log(direccion);
  console.log(barrio);
  console.log(ciudad);
  console.log(tipoVivienda);
  console.log(vivienda);
  console.log(dueño);
  console.log(ocupacion);
  console.log(ingresos);
  console.log(empresa);
  console.log(terminos);
  alert("Tus datos fueron recibidos!");
});
