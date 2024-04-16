"use strict";

const $nombre = document.getElementById("nombre");
const $telefono = document.getElementById("telefono");
const $email = document.getElementById("email");
const $edad = document.getElementById("edad");
const $mensaje = document.getElementById("mensaje");
const $botonEnviar = document.getElementById("botonEnviar");

let nombre = null;
let telefono = null;
let email = null;
let edad = null;
let mensaje = null;

$nombre.addEventListener("input", (evento) => {
  nombre = evento.target.value;
});

$telefono.addEventListener("input", (evento) => {
  telefono = evento.target.value;
});

$email.addEventListener("input", (evento) => {
  email = evento.target.value;
});

$edad.addEventListener("input", (evento) => {
  edad = evento.target.value;
});

$mensaje.addEventListener("input", (evento) => {
  mensaje = evento.target.value;
});

$botonEnviar.addEventListener("click", (evento) => {
  console.log(nombre);
  console.log(telefono);
  console.log(email);
  console.log(edad);
  console.log(mensaje);
  alert("Tus datos fueron recibidos!");
});
