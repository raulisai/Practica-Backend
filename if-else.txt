//decciones de flujo


//if(condicional logica donde espera obtener un true o false)
//condicionales matematgica; >,<,>=,<=,==,!=   5>3, 5<3, 5>=3, 5<=3, 5==3, 5!=3
//condicionales logicas; &&, ||, !   true && true, true || false, !true

let p=11;

if(p >=5 && p<=10){
   // console.log("p esta entre 5 y 10");
}else{
  //  console.log("p es menor que 5");
}


let edad=45;

if(edad>=18 && edad<45){
    console.log("acceso");

}else{
    console.log("no acceso");
}

let edad2=100;

if(edad2<=12){
    console.log("niño");
}else if(edad2>=12 && edad2<=18){
    console.log("joven");
}else if(edad2>=18 && edad2<=50){
    console.log("adulto");
}else{
    console.log("anciano");
}

switch(edad2){
    case edad2<=12:
        console.log("niño");
        break;
    case edad2>=12 && edad2<=18:
        console.log("joven");
        break;
    case edad2>=18 && edad2<=50:
        console.log("adulto");
        break;
    default:
        console.log("anciano");
        break;
}


//Un trabajador gana 20 por hora y si llega a 40 horas se le paga doble todas las horas

let horas=25;
let horasfijas= 20;
let pagoHora=20;
let pagoExtra= pagoHora*2;
let pagoExtra3= pagoHora*3;
let pagoTotal=0;



//Un trabajador gana 20 por hora y si llega a mas de 20 horas se le paga doble todas las horas extra

//if(horas>=20){
//let horasextra = horas - horasfijas;
//pagoTotal= (horasfijas*pagoHora) +  (horasextra*pagoExtra);
//}else{
  //  pagoTotal= (horas*pagoHora)



//Un trabajador gana 20 por hora y si llega a mas de 20 horas se le paga doble y si son mas de 30 se le paga triple y si tiene la variable vacaciones activa sumar $1000

let horastrabajadas=31;
let vacaciones=true;    

if(horas>=30){
    let horasextra3 = horas - horasfijas;
    pagoTotal= (horasfijas*pagoHora) + (horasextra*pagoExtra3)
}else if(horas>=20){
    let horasextra = horas - horasfijas;
    pagoTotal= (pagoHora*horasfijas) + (horasextra*pagoExtra)

}
console.log(pagoTotal);




