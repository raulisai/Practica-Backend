//Bucles es un iteracion o repeticion hasta cierta condicional

//for(inicio;condicional; accion al final e cada ciclo)

let array=["juan","abelardo","paco","chui"];
let longitudArray=array.length;
let search='abela';
let validacion= false;


for(let i=0;i<longitudArray;i++){
        if(array[i] == search){
            validacion= true;
            console.log('esta en la posicion: '+ i);
        }
}

if(!validacion){
console.log("no se encontraron coincidencias");
}






/*

let arra22 = ["miguel","jose","maria","josefina","josefa","josefino","josefinita","josefinito","josefiniti","josefinitu"];


console.log(longitudArray);

for(let i=0;i<longitudArray;i=i+1){
    //bloque de codigo a ejecutar
    console.log(i);

    console.log("hola "+array[i])
}

*/