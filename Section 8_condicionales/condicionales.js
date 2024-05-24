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

//AND: && , OR: ||, Negacion: !
let year= 2021;
if(year > 2000 && year <= 2100 ){
    console.log("Estamos en el siglo 21");
}else if(year < 2000){
    console.log("Estamos en siglos pasados");
}

if(year==2020 || year==2021){
    console.log("Estamos en epoca de pandemia");
}

//switch
console.log("Switch");
var edad= 14;

switch(edad){
    case 18:
        console.log("eres mayor de edad");
        break;
    case 65:
        console.log("Eres un viejito");
        break;
    case 15:
        console.log("Eres  menor de edad");
        break;
    default:
        console.log("Eres un eterno");
        break;
}