'use strict'
/* Ejercicio que pida dos numeros y que diga cual es mayor, menor o iguales */

var num1= parseInt(prompt("Digita el primer numero", 0)) ;
var num2= parseInt(prompt("Digita el segundo numero", 0)) ;
if(isNaN(num1) || isNaN(num2)){
    while(isNaN(num1) || isNaN(num2)){
        num1= parseInt(prompt("Digita el primer numero", 0)) ;
        num2= parseInt(prompt("Digita el segundo numero", 0)) ;
    }
}

if(num1 > num2){
    console.log("El numero mayor es: "+ num1 + "\n" + "El numero menor es: "+ num2);
}else if(num2 > num1){
    console.log("El numero mayor es: "+ num2 + "\n" + "El numero menor es: "+ num1)
}else if(num1==num2){
    console.log("Los dos numeros son iguales: "+ num1);
}else{
    console.log("escribe numeros correctos");
}