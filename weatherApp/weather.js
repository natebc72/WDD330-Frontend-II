export const key = 'c15692945feb10ef84b935367d724b0b'
export const url = 'https://api.openweathermap.org/data/2.5/weather?q='
let input = localStorage.quickCity

window.addEventListener('load', () => {
    quickCity()
})


document.querySelector('.submit').addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.location').innerText = 'Spoting...'
    input = document.querySelector('.bar').value
    quickSearch(input)
})


function save() {
    localStorage.quickCity = input
}

function quickCity() {
    input = localStorage.quickCity
    quickSearch()
}

export default async function quickSearch() {   
    try {    
        const response = await Promise.all([fetch(`${url}${input}&units=imperial&appid=${key}`),
        ]);
        const weatherData = await Promise.all(response.map(r => r.json()))

        const fLocation = weatherData[0].name 
        const fTemp = weatherData[0].main.temp 

        const fFeels = weatherData[0].main.feels_like 
        const fHigh = weatherData[0].main.temp_max 
        const fMin = weatherData[0].main.temp_min 
        const fType = weatherData[0].weather[0].main 
        const fWind = weatherData[0].wind.speed 

        render(fLocation, fTemp, fType, fFeels, fHigh, fMin, fWind) 

    } catch (error) {
        console.error(error);
        document.querySelector('.location').innerHTML = '<em>Your lenses must be foggy!</em>'
        document.querySelector('.temp').innerHTML = 'o_O'
        document.querySelector('.type').innerHTML = '<strong>Rechecketh thy spelling!</strong>'
        document.querySelector('.real').innerHTML = '<strong>?</strong>'
        document.querySelector('.wind').innerHTML = '<strong>?</strong>'
        document.querySelector('.high-temp').innerHTML = '<strong>?</strong>'
        document.querySelector('.low-temp').innerHTML = '<strong>?</strong>'


    }
}

function render(fLocation, fTemp, fType, fFeels, fHigh, fMin, fWind) {
    // display information
    const location = document.querySelector('.location')
    const temp = document.querySelector('.temp')
    const type = document.querySelector('.type')
    const feelsLike = document.querySelector('.real')
    const highTemp = document.querySelector('.high-temp')
    const minTemp = document.querySelector('.low-temp')
    const wind = document.querySelector('.wind')
    
    location.innerText = fLocation
    type.innerHTML = `<u>${fType} Conditions</u>`
    wind.innerHTML = `<strong>Wind Speed:</strong> <em>${Math.round(fWind)}mph</em>`
    temp.innerHTML = `<em>${Math.round(fTemp)}°F</em>` 
    feelsLike.innerHTML = `<strong>Feels like:</strong> <em>${Math.round(fFeels)}°F</em>`
    highTemp.innerHTML = `<strong>Daily High:</strong> <em>${Math.round(fHigh)}°F</em>`
    minTemp.innerHTML = `<strong>Daily Low:</strong> <em>${Math.round(fMin)}°F</em>` 
    save()
}
quickCity()
export {quickCity}


    