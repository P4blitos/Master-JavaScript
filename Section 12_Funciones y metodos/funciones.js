'use strict'

function calculadora(){
    return "Hola soy una calculadora";
}

console.log(calculadora());
document.write(calculadora());


function calculadora2(){
    console.log("Esto es una calculadora 2.0");
    
    return "Pablo eres el mejor";
}
var res= calculadora2();
console.log(res);
console.log("--------------------------");

//con parametros
function calculadora3(numero1, numero2){

    console.log("La suma es: ",numero1+numero2);
    console.log("La resta es: ",numero1-numero2);
    console.log("La multiplicacion es: ",numero1*numero2);
    console.log("La division es: ",numero1/numero2);

}
calculadora3(25,12);
console.log("--------------------------");
//parametros opcionales, es un valor predeterminado si no tiene cuando lo llaman
function calculadora4(numero1, numero2, mostrar = false){

    console.log("La suma es: ",numero1+numero2);
    console.log("La resta es: ",numero1-numero2);
    console.log("La multiplicacion es: ",numero1*numero2);
    console.log("La division es: ",numero1/numero2);
    console.log(mostrar);

}
calculadora4(24,12, true);
