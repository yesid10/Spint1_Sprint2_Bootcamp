
//Ejercicio 1

/*const num1 = Number(prompt('Ingrese el primer numero:'));
const num2 = Number(prompt('Ingrese el segundo numero:'));

const sumarNumeros = (num1, num2) => {
    let suma;
    if (num2){
        suma = num1 + num2;
    }else {
        suma = num1+10;
    }
    return suma;
};
alert(sumarNumeros(num1,num2));*/


//Ejercicio 2



const arrayFrutas = [ 
    'Mango', 
    'Maracuya', 
    'Mora', 
    'Lulo', 
    'Tamarindo',  
    'Naranja'
];

const addFrutas = (list, fruta = '') => {
    if (fruta){
        list.push (fruta);
        console.log(list);
        return true;
}
};


const deleteFruit = (list, index = null) => {
    const ultimaPosicion = list.lenhth - 1;
    const posicion = index === null ? ultimaPosicion: index;
    list.splice (posicion,1);
    console.log(list);
};


const addOrDeleteFruits = (callback, list, frutaOrPosicion) =>{
    callback(list, frutaOrPosicion);
}

addOrDeleteFruits (addFrutas, arrayFrutas, 'Manzana');
addOrDeleteFruits (deleteFruit, arrayFrutas, 2);


for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}