//Un trabajador gana 20 por hora y si llega a 40 horas se le paga doble todas las horas

let horas=22;
let horasfijas= 20;
let pagoHora=20;
let pagoExtra= pagoHora*2;
let pagoTotal=0;



//Un trabajador gana 20 por hora y si llega a mas de 20 horas se le paga doble todas las horas extra

if(horas>=20){
let horasextra = horas - horasfijas;
pagoTotal= (horasfijas*pagoHora) +  (horasextra*pagoExtra);
}

console.log(pagoTotal);
