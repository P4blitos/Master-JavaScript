'use strict'
console.log("Bucle FOR");

var numero= 100;
for(var i=0; i < numero; i++){
    console.log(i);
    if(i==10){
        //el break, para los ciclos
        break;
    }
}

console.log("Bucle While");

var year= 2020;
while(year > 2000){
    console.log("Estamos en el año: "+ year);
    if(year==2010){
        //el break, para los ciclos
        break;
    }
    year--;
}

console.log("Bucle do While");
var years=18;
do{
    alert("Solo cuando sea diferente a 20");
    years++;
}while(years != 20)