

const heladonormal = 1900;

function helados (topping){
    if (topping === 1000){
        alert(`El topping escogido es Oreo $ ${1000}, el helado vale $ ${heladonormal+topping}`);
    }else if (topping === 1500){
        alert(`El topping escogido es Kitkat $ ${1500}, el helado vale $ ${heladonormal+topping}`);
    }else if (topping === 750){
        alert(`El topping escogido es Brownie $ ${750}, el helado vale $ ${heladonormal+topping}`);
    }else if (topping === 950){
        alert(`El topping escogido es Lacacitos $ ${950}, el helado vale $ ${heladonormal+topping}`);
    }else if (topping === 0){
        alert(`El helado sin topping cuesta ${heladonormal}`);
    }else{
        alert(`El topping no esta disponible`);
    }
}

const topping = Number (prompt(`Ingrese el precio del topping \n 1. Oreo $1000 \n 2. Kitkat $1500 \n 3. Brownie $750 \n 4. Lacacitos $950`));
helados(topping);




/*
let topping;
topping =prompt(`Ingrese el toping que desea: \n 1. Oreo \n 2.Kitkat \n 3. Brownie \n 4.Lacacitos`);

switch (topping){
    case 'oreo':
        alert(`El topping escogido es Oreo $ ${1000}, el helado vale $ ${heladonormal+1000}`);
    break;

    case 'kitkat':
        alert(`El topping escogido es Kitkat $ ${1500}, el helado vale $ ${heladonormal+1500}`);
    break;

    case 'brownie':
        alert(`El topping escogido es Brownie $ ${750}, el helado vale $ ${heladonormal+750}`);
    break;

    case 'lacacitos':
        alert(`El topping escogido es Lacacitos $ ${950}, el helado vale $ ${heladonormal+950}`);
    break;

    default:
        alert(`El topping no esta disponible. \n El helado sin topping cuesta ${heladonormal}`);


}
*/