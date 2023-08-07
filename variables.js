//variables x,y,z

//NUMBERS
var a=10;

var newvalue=a.toString();

//console.log(newvalue);

//strings
var saludo="hola mundo";

var index=saludo.indexOf("m");

console.log(index);


//booleanos
var b=false;

b=!b;

console.log(b);


//constantes
const c=10;

//----estructuras de datos compuestos de los pasados ejemplos

//arreglos o arrays  [] arreglo vacio
let arreglo = [1,2,3,4,5,6,7,8,9,10];
            //  0 1 2 3 4 5 6 7 8 9
let extraccion = arreglo[7];
//console.log(extraccion);

let arra2 = ["a","b","c","d","e","f","g","h","i","j"];

let extraccion2 = arra2[3];
console.log(extraccion2);

let arra22 = ["miguel","jose","maria","josefina","josefa","josefino","josefinita","josefinito","josefiniti","josefinitu"];

let arra=[1,"ba",2,true,false,"hello"]


console.log(arra22[1]+" dice que "+arra[5]);


//objetos
let persona = {
    nombre:"miguel",
    apellido:"perez",
    edad:20,
    sexo:"masculino"
};