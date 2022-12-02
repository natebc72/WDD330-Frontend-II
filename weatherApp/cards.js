const cards = document.querySelector('.cards');



let savedCities = JSON.parse(window.localStorage.getItem('city-list')) ?? [];
for (city in savedCities) {
    console.log(savedCities)
    buildCards(city)
};




document.querySelector('.save').addEventListener('click',(ev)=> {
    ev.preventDefault();
    let city = {    
        Kingdom: document.querySelector('.bar').value
    }
    savedCities.push(city);
    window.localStorage.setItem('city-list', JSON.stringify(savedCities) )
    document.querySelector('#form').reset();
    buildCards(city)
})

function deleteCity() {}


async function buildCards() {   
        const response = await Promise.all([fetch(`${url}${input}&units=imperial&appid=${key}`),]);
        const weatherData = await Promise.all(response.map(r => r.json()))

        const sLocation = weatherData[0].name
        const sTemp = weatherData[0].main.temp
        const sType = weatherData[0].weather[0].main
        
        let card = document.createElement('section');
        let btn = document.createElement('button')
        let hr = document.createElement('hr');
        let h1 = document.createElement('h1');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        

        h1.textContent = `${sLocation}`;
        btn.textContent = `☠`;
        h2.textContent = `${Math.round(sTemp)}°F`;
        h3.textContent = `${sType}`;

        card.setAttribute('class','card')
        btn.setAttribute('class', 'delete')

        card.appendChild(h1);
        card.appendChild(btn);
        card.appendChild(hr);
        card.appendChild(h2);
        card.appendChild(h3);

        document.querySelector('div.cards').appendChild(card);
}