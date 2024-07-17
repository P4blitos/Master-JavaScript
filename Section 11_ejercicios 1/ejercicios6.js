'use strict'
/* Si es par o no */
var num1= parseInt(prompt("Digita el primer numero", 0)) ;

while(isNaN(num1)){
    num1= parseInt(prompt("Digita otro numero diferente", 0)) ;    
}
if(num1%2 ==0){
    console.log(num1 +" Es numero par");
}else{
    console.log(num1 + " Es numero impar");
}