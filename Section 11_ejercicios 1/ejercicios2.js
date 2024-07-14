'use strict'
/* Bucle numeros hasta que aparezca numero negativo, y mostrar la media*/ 
var numero = 0;
var sumatoria = 0;
var cont = 0;
var media = 0;

while (numero >= 0) {
  numero = parseInt(prompt("Digite un numero", 0));
  if (numero >= 0) {
    sumatoria = sumatoria + numero;
    cont = cont + 1;
  } else {
    break; // Salir del bucle cuando se ingresa un número negativo
  }
}

if (cont > 0) {
  media = sumatoria / cont;
  console.log("La media de los numeros es: " + media);
} else {
  console.log("No se ingresaron números positivos.");
}