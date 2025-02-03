'use strict'
//parametros REST y SPREAD

//rest
//Guarda el resto en un array
function ListadoFrutas(fruta1, fruta2, ...resto_frutas){
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log("Resto de frutas: ", resto_frutas);
}

ListadoFrutas("Mango", "Curuba", "fresas", "Banano", "Uvas", "Piña");

//Spread
var frutas= ["Manzana", "Coco"];
ListadoFrutas(...frutas,"Mango", "Curuba", "fresas", "Banano", "Uvas", "Piña");