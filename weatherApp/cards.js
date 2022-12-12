import url from "./weather.js"
import key from "./weather.js"

//this gets a city from the the savedCities list
let savedCities = JSON.parse(window.localStorage.getItem('city-list')) ?? [];

//Save Button triggers event that saves city to local storage and builds a cards for it
document.querySelector('.save').addEventListener('click',(ev)=> {
    ev.preventDefault();
    let city = {    
        name: document.querySelector('.bar').value
    }
    savedCities.push(city);
    window.localStorage.setItem('city-list', JSON.stringify(savedCities) )
    document.querySelector('#form').reset();
    renderCards()
})

//Card delete function
function deleteCity(id) {
    savedCities.splice(id);
    localStorage.setItem("city-list", JSON.stringify(savedCities));
    renderCards()
}

export default class Cards {
    constructor(cards) {
        this.cards = document.getElementById(cards)
    }

    getSavedCities() {
        return savedCities;
    }

    getCityByName(location) {
        return this.getSavedCity().find(city => city.name === location)
    }

    buildKingdoms() {
        this.cards.innerHTML = '';
        renderCards(this.cards, this.getSavedCities());
    }
}

// My render cards function
function renderCards(cards, savedCities) {
    savedCities.forEach(city => {
        cards.appendChild(buildCard(city));
    });
}


// This is my async function which calls to the Api for each saved card and displays the info
async function buildCard(id) {
    //this is to make a fetch call for each card
    const result = await fetch(`${url}${city}&units=imperial&appid=${key}`)
    .then (response => response.json())
    const wData = await(result.map(r => r.json()))
    const location = wData[0].name
    const temp = wData[0].main.temp
    const type = wData[0].weather[0].main
    //This is to set the inner html to reflect the api details
    const item = document.createElement('li');
    item.classList.add('card');
    item.setAttribute('id', `${id}`);
    item.innerHTML = `<label for="${id}"
    <h1>${location}</h1></label>
    <button class ="delete" onclick ="deleteCity(${id})">☠</button>
    <hr>
    <h2>${Math.round(temp)}°F</h2>
    <h3>${type}</h3>`;

    return item;
}