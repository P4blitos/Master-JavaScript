//esto ayuda para que la sintaxis sea correcta
'use strict'
/*esto esta comentado*/
//variables

var nombre ="pablo";
var ciudad= "medellin";
var edad= 21;
var nombre_edad= nombre+' '+edad;
console.log(nombre, ciudad, edad);
alert(nombre_edad);

let apellido= "Serna";
//se puede definir variables con let y var. let es de manera mas local, var mas global. let es mas 'limitado'

let num=15;
console.log(num);
if(true){
    num=25;
    console.log(num)
}
console.log(num);

//const crea variables que no se pueden cambiar el valor, el valor siempre sera el mismo desde el inicio.
const num2=20;
console.log(num2);
if(true){
    num2=30;
    console.log(num2)
}
console.log(num2);
