'use strict'
/* pedir numero y decir cuales son los divisores */
var num1= parseInt(prompt("Digita el primer numero", 0)) ;
for(var i=0; i< num1;i++){
    if(num1%i == 0){
        console.log("Divisor: "+i);
    }
}