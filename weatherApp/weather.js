let units = '°F'
let input = localStorage.userLocation 
let key = '3f64871ce090ee67c00bdac30749b6b1'

function userLocation() {
     input = localStorage.userLocation 
        hitAPI()
    }

  document.querySelector('.update').addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.location').innerText = 'Spoting...'
    input = document.getElementById('searchLocation').value
    document.querySelector('form').reset()
    hitAPI(input)
})

function save() {
    localStorage.userLocation = input
  }
  
async function hitAPI() {
    try {    
        const response = await Promise.all([
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&appid=${key}`, {mode: 'cors'}),
        ]);
        const weatherData = await Promise.all(response.map(r => r.json()))

        console.log(weatherData[0])
        const fLocation = weatherData[0].name 
        const fTemp = weatherData[0].main.temp
        const fFeels = weatherData[0].main.feels_like 
        const fHigh = weatherData[0].main.temp_max 
        const fMin = weatherData[0].main.temp_min 
        const fConditions = weatherData[0].weather[0].main 
        const fWind = weatherData[0].wind.speed 

        render(fLocation, fTemp, fConditions, fFeels, fHigh, fMin, fWind) 
    } catch (error) {
        console.error(error);

        document.querySelector('.location').innerText = 'Clean your Vector!'
        document.querySelector('.temp').innerText = ' No Idea Farenheit'
        document.querySelector('.conditions').innerText = 'Rechecketh thy spelling!'
    }
}

function render(fLocation, fTemp, fConditions, fFeels, fHigh, fMin, fWind) {
    // display information
    const location = document.querySelector('.location')
    const temp = document.querySelector('.temp')
    const conditions = document.querySelector('.conditions')
    const feelsLike = document.querySelector('.real')
    const highTemp = document.querySelector('.high-temp')
    const minTemp = document.querySelector('.min-temp')
    const wind = document.querySelector('.wind')
    
    location.innerText = fLocation
    conditions.innerText = fConditions
    wind.innerText = `Wind Speed: ${Math.round(fWind)}mph`
    temp.innerText = `${Math.round(fTemp)}${units}` 
    feelsLike.innerText = `Real Feel: ${Math.round(fFeels)}${units}`
    highTemp.innerText = `High-Temp: ${Math.round(fHigh)}${units}`
    minTemp.innerText = `Low Temp: ${Math.round(fMin)}${units}`
    }
    save()

hitAPI()



    