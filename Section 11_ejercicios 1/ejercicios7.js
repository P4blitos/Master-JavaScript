'use strict'
//tabla de multiplicar por un numero introducido por pantalla
var num1= parseInt(prompt("Digita el numero para dar la tabla de multiplicar", 0)) ;
while(isNaN(num1) || num1 < 0){
    num1= parseInt(prompt("Digita otro numero diferente", 0)) ;    
}

for(var i=1; i <= 10; i++){
    console.log(num1 +" X "+ i + " = "+ (num1*i));
    document.write(num1 +" X "+ i + " = "+ (num1*i) +"<br>");
}