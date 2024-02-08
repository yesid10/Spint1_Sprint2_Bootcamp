/*Desarrollar un programa que me permita solicitar 5 datos de personas, incluyendo: nombre, apellido, teléfono,
correo, y la dirección debe ser en el siguiente formato: ciudad, barrio, y calle. Esta información debo
almacenarla en un array de objetos. Posteriormente, debo solicitar al usuario que escriba un nombre, y mostrar
por consola toda la información del usuario que tenga dicho nombre. Si el nombre no existe en el arreglo,
debería mostrar un mensaje que diga: EI usuario no existe.*/


let arrPersona = [];


for (let i = 0; i < 1; i++){
    nombre = prompt(`Ingrese los datos de la persona N° ${i+=1} \n Ingrese su nombre:`);
    apellido = prompt('Ingrese el apellido');
    tel = Number(prompt('Ingrese su teléfono:'));
    correo = prompt('Ingrese su correo:');
    ciudad = prompt('Ingrese su ciudad:');
    barrio = prompt('Ingrese su barrio:');
    calle = prompt('Ingrese su calle:');


    const infoPersona = {
        nombre,
        apellido,
        tel,
        correo,
        dirección: {
            ciudad,
            barrio,
            calle,
        }

    }
    
    arrPersona.push(infoPersona);
}



const nameUser = prompt(`Busque un usuario para saber su información: `);
const foundUser = arrPersona.find(function(infoPersona){
    return infoPersona.nombre === nameUser;
})







