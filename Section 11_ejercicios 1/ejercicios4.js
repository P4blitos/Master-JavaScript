'use strict'
/* Mostrar numeros impares entre dos numeros ingresados*/

var num1= parseInt(prompt("Digita el primer numero", 0)) ;
var num2= parseInt(prompt("Digita el segundo numero", 0)) ;
while(isNaN(num1) || isNaN(num2)){
    num1= parseInt(prompt("Digita el primer numero", 0)) ;
    num2= parseInt(prompt("Digita el segundo numero", 0)) ;
}

if(num1 > num2){
    for(var i=num2; i <= num1; i++){
        if(i%2 != 0){
            console.log(i);
        }
    }

}else if(num2 > num1){
    for(var i=num1; i < num2; i++){
        if(i%2 != 0){
            console.log(i);
        }
    }

}else if(num1==num2){
    console.log("Los dos numeros son iguales: "+ num1 + " no se puede");
}else{
    console.log("escribe numeros correctos");
}