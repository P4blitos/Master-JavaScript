'use strict'

//funcion anonima, que no tiene nombre
var pelicula = function(nombre){
    return "La pelicula "+nombre;
}

function sumame(num1, num2, sumaYmuestra, sumaXdos){
    var sumar= num1 + num2;
    sumaYmuestra(sumar);
    sumaXdos(sumar);
}

sumame(2, 3, function(dato){
    console.log("La suma es: "+ dato);
}, function(dato){
    console.log("La suma por dos es: "+(dato*2));
}
);

//Funcion flecha
var persona = (nombre, apellido )=> {

    console.log("Gracias "+nombre+" "+apellido+" Por escogernos");
}

persona("Pablo","Serna");