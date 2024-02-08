import { disneyCharacters } from "./data.js";

const logo = document.querySelector('.header__figure');

logo.addEventListener('click', () => {
    window.location.href = "../index.html"
})


// Función para pintar la información
const showCharacterInfo = (contenedor, character) => {
    const figure = document.createElement("figure");
    figure.classList.add('main__figure')
    figure.innerHTML = `
    <img src="${character.image}" alt=="${character.name}">
    `;
    contenedor.appendChild(figure);

    //Inserta la información del personaje
    const list = document.createElement("ul");
    list.classList.add('main__list');
    for(const key in character.seenIn){
        console.log(key,"--->", character.seenIn[key]);
        const item = document.createElement("li");
        item.innerHTML= `<strong>${key}:</strong>${character.seenIn[key]}`;
        list.appendChild(item);
    }

    contenedor.appendChild(list);
    
}
document.addEventListener('DOMContentLoaded', () => {
    //capturar la info del sessionStorage
const idCharacter = Number (JSON.parse(sessionStorage.getItem('idCharacter')) || 0);

//Hacer la busqueda del personaje al cual se la ha dado click;\
const character = disneyCharacters.find(person => person.id === idCharacter);

//Actualizar titulo;

const title = document.getElementById('title');
title.innerText = character.name;

//capturar el contenedor donde se va a mostrar la información
const infoCharacterContainer = document.getElementById('information');
console.log(infoCharacterContainer);
showCharacterInfo(infoCharacterContainer, character);
});