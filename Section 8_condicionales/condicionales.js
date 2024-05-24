'use strict'
//el if
var edad1=20;
var edad2=32;
if(edad1 > edad2){
    console.log("La persona 1 es mayor que la persona 2");
}else{
    console.log("La edad de la persona 2 es mayor que la persona 1");
}

let nombre="Pablo";
let edadP= 71;
if(edadP >=18 && edadP <60){
    console.log(nombre + " es mayor de edad, con una edad de "+edadP);
}else if(edadP < 18){
    console.log(nombre+" es menor de edad, con una edad de "+edadP);
}else if(edadP >=60){
    console.log(nombre+" es un anciano, con una edad de "+edadP);
}