'use strict'
//calculadora.
var opcion=1;
var num1, num2, res;
while(opcion != 0){
    opcion= parseInt(prompt("Digita el numero de la operacion que quieras hacer \n"+"1) Sumar \n 2) Restar \n 3) Multiplicar \n 4) Dividir \n 0) Salir", 0)) ;
    switch(opcion){
        case 1:
            num1= parseInt(prompt("Digita el primer numero de la suma", 0)) ; 
            num2= parseInt(prompt("Digita el segundo numero de la suma", 0)) ; 
            while(isNaN(num1) || isNaN(num2)){
                num1= parseInt(prompt("Digita otro numero diferente para el numero 1", 0)) ;   
                num2= parseInt(prompt("Digita otro numero diferente para el numero 2", 0)) ; 
            } 
            res=num1+num2;
            alert("El resultado de la suma es: "+res);
            console.log("El resultado de la suma es: "+res);
            break;
        
        case 2:
            num1= parseInt(prompt("Digita el primer numero de la resta", 0)) ; 
            num2= parseInt(prompt("Digita el segundo numero de la resta", 0)) ; 
            while(isNaN(num1) || isNaN(num2)){
                num1= parseInt(prompt("Digita otro numero diferente para el numero 1", 0)) ;   
                num2= parseInt(prompt("Digita otro numero diferente para el numero 2", 0)) ; 
            } 
            res=num1-num2;
            alert("El resultado de la resta es: "+res);
            console.log("El resultado de la resta es: "+res);
            break;
        
        case 3:
            num1= parseInt(prompt("Digita el primer numero de la multiplicacion", 0)) ; 
            num2= parseInt(prompt("Digita el segundo numero de la multiplicacion", 0)) ; 
            while(isNaN(num1) || isNaN(num2)){
                num1= parseInt(prompt("Digita otro numero diferente para el numero 1", 0)) ;   
                num2= parseInt(prompt("Digita otro numero diferente para el numero 2", 0)) ; 
            } 
            res=num1*num2;
            alert("El resultado de la multiplicacion es: "+res);
            console.log("El resultado de la multiplicacion es: "+res);
            break;
        
        case 4:
            num1= parseInt(prompt("Digita el primer numero de la division", 0)) ; 
            num2= parseInt(prompt("Digita el segundo numero de la division", 0)) ; 
            while(isNaN(num1) || isNaN(num2)){
                num1= parseInt(prompt("Digita otro numero diferente para el numero 1", 0)) ;   
                num2= parseInt(prompt("Digita otro numero diferente para el numero 2", 0)) ; 
            } 
            res=num1/num2;
            alert("El resultado de la division es: "+res);
            console.log("El resultado de la division es: "+res);
            break;
        case 0:
            opcion=0;
            break;
        default:
            alert("Seleccionaste un numero erroneo");
            break;
    }
}