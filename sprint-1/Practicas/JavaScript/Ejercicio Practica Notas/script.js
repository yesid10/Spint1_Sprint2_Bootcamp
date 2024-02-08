let prom;
const cantidadDeNotas = 5;
let sumaNotas = 0 ;


/*for (let i = 0; i < cantidadDeNotas; i++) {
    let nota = Number(prompt(`Ingrese la nota ${i+1}`));
    sumaNotas += nota;
}*/
let i =0;
while (i<cantidadDeNotas){
    let nota = Number(prompt(`Ingrese la nota ${i+1}`));
    sumaNotas += nota;
    i++;
}
prom = Number (sumaNotas/cantidadDeNotas);

if (prom < 3.0){
    alert(`Su nota es ${prom}, esta suspendido.`)

}else {
    alert(`Su nota es ${prom}, esta aprobado.`);
}