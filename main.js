// FÖBÄTTRING: HÄMTA ALLA KÄLLOR SOM BEHÖVS FÖRST. 
//ONCHANGE - för att ge förslag medan man skriver?
//Se till att felmeddelandet försvinner när fetchen går bra igen
//Togglefunktion för fahrenheit-celsius?
//En överraska mig knapp som genererar en random stad? 

//Knappfunktion för att byta mellan fahrenheit och celsius?
//Jämföra graderna mellan två ställen? 

//URLNASA: https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0


const apiKey = "72c683fa486d6d0335603532705a98ff";
// const nasaKey ="PfosfTbZAfIs5okl0YCYmaGRVieJX9JHNsR2R2TW";

// variabel för att kunna toggla functionen. 
let isCelsius = true; 

const h2 = document.querySelector('.h2');
const h1 = document.querySelector('.h1');
const icon = document.querySelector('.icon');
const fahrBtn = document.querySelector('#fahrenheit-btn')
const searchBox =document.querySelector('.search');


async function checkWeather() {
    h1.innerHTML="";
    h2.innerHTML="";
    icon.style.display='none'; 
   

    const inputCity = document.getElementById('search-bar').value;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${inputCity}&appid=${apiKey}`;
    const fetchedData = await fetchData(weatherUrl);
    printResult(fetchedData);
}
//Uppdatera så man bara skickar in URL: så man kan återanvända denna.
async function fetchData(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        console.error("API request failed:", response.status);
        return null; //Måste den finnas? 
    }
}

const printResult = (dataInput, isCelsius) => {
    if (dataInput) {
        

        console.log(dataInput)

        h2.innerHTML = "Vädret i " + dataInput.name + " är:"
        h1.innerHTML = Math.round(dataInput.main.temp) + "°C";

        const temperature = Math.round(dataInput.main.temp);
        const unit = isCelsius ? '°C' : '°F';
        h1.innerHTML = `${temperature}${unit}`;
        // document.querySelector('.icon').
        // document.querySelector('description').innerHTML = dataInput.weather[0]

        //Här kan man lägga till ikoner på väder om man vill. 
        //Lägger till en ikon för varje beskrivning som innehåller ordet snow. 
        if (dataInput.weather[0].description.includes('snow')) {
            document.querySelector('.icon').src = "IMG/snow.png";
            document.querySelector('.icon').style.display = 'block';
         }
         else if (dataInput.weather[0].description.includes('rain')) {
            document.querySelector('.icon').src = "IMG/rain.png";
            document.querySelector('.icon').style.display = 'block';
         }
         else if (dataInput.weather[0].description.includes('clouds')) {
            document.querySelector('.icon').src = "IMG/clouds.png";
            document.querySelector('.icon').style.display = 'block';
         }
         else if (dataInput.weather[0].description.includes('sun')) {
            document.querySelector('.icon').src = "IMG/sun.png";
            document.querySelector('.icon').style.display = 'block';
         }

    } else {
        console.log("Something went wrong.");
        document.querySelector('.error').innerHTML = "Kunde inte hitta det du sökte efter. Försök igen."
        document.querySelector('.error').style.display = 'block';
    }
}

async function changeMetric(){
    isCelsius = !isCelsius; // Toggle the value
    const inputCity = document.getElementById('search-bar').value;
    const units = isCelsius ? 'metric' : 'imperial'; // Change 'units' based on 'isCelsius'
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?units=${units}&q=${inputCity}&appid=${apiKey}`;
    const fetchedData = await fetchData(weatherUrl);
    printResult(fetchedData, isCelsius)
}

 //JOHAN EXEMPEL await fetch('https://url').then(yay, nooo)
// const yay = (data) => {
//     console.log(data)
// }

// const nooo = (error) => {
//     console.error(':(')
// }