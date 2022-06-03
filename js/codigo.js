//Una empresa de llamadas telefónicas, necesita un programa que le calcule el costo por llamada dede tener en cuenta:A FIJO:0.20 CETIMOS POR MINUTO, A CLARO:0.40 CÉNTIMOS POR MINUTO, A MOVISTAR: 0.60 CÉNTIMOS POR MINUTO, A ENTEL: 1 SOL EL MINUTO.


let operador=prompt("Ingrese operador:(FIJO, CLARO, MOVISTAR, ENTEL) ");
let costoxmin=parseFloat(prompt("Ingrese costo:(A FIJO:0.20, A CLARO:0.40, A MOVISTAR:0.60, A ENTEL:1.00)"));
let min=parseFloat(prompt("Ingrese cantidad de minutos"));

let costoxllam=costoxmin*min

document.write("El costo por llamada es de: "    + costoxllam+ "<br>")

if(costoxmin==0.20){
    document.write(`El costo por minuto es ${costoxmin}  operador FIJO`);
}else if(costoxmin==0.40){
    document.write(`El costo por minuto es ${costoxmin} operador CLARO`);
}else if(costoxmin==0.60){
    document.write(`El costo por minuto es ${costoxmin} operador MOVISTAR`);
}else if(costoxmin==1.00){
    document.write(`El costo por minuto es ${costoxmin} operador ENTEL`)
}else{
    document.write('ingreso datos incorrectos');
} 





