'use strict'
console.log("Estoy viendo tipos de datos y operadores");
var num1=12;
var num2=8;
var operacion= num1+num2;
//operadores existe el +, - , /, *, %(modulo)
console.log("El resultado es: "+ operacion);

//tipos de datos
var numero_entero= 5;
var cadena_texto= "Hola mama";
var boleano = true;

var numero_falso="50";
//la funcion nomber convierte un dato en numero
Number(numero_falso);
console.log(numero_falso+2);

//parseInt sirve para tambien convertir a entero. y el parseFloat lo convierte en un decimal. String lo vuelve cadena de texto.
var numero_falso2="60";
console.log(parseInt(numero_falso2)+5);
console.log(parseFloat(numero_falso2)+5);
console.log(String(numero_entero)+ numero_entero);

//pasa saber que tipo de dato es una variable se usa typeof
console.log(typeof numero_entero)
console.log(typeof boleano);
