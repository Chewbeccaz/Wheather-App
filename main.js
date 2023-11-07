// FÖBÄTTRING: HÄMTA ALLA KÄLLOR SOM BEHÖVS FÖRST. 
//ONCHANGE - för att ge förslag medan man skriver?
 

//En överraska mig knapp som genererar en random stad? 

//Få Ändra-knappen att endast synas efter man sökt en gång. 

//Ev. lägga till högsta och lägsta temp?? 
//Skriva ut även beskrivningen? 
//HOVER EFFEKT PÅ SEARCHBAR OCH FAHRENHEIT KNAPPEN
//Flytta farh knappen till höger längst ner. 
//Fixa ny fontfamily. 
//Städa
//Fixa root: styling. Korta ner. 


//JOHAN. 
//1. ERRORHANTERING. VART OCH VAD MER? paja url:n med flit 


const apiKey = "72c683fa486d6d0335603532705a98ff";
const baseUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}`

// variabel för att kunna toggla functionen. 
let isCelsius = true; 

const h2 = document.querySelector('.h2');
const h1 = document.querySelector('.h1');
const firstH3 = document.querySelector('.h3-1');
const secondH3 = document.querySelector('.h3-2');
const icon = document.querySelector('.icon');
const fahrBtn = document.querySelector('#fahrenheit-btn');
const searchBox = document.querySelector('.search');

function getUnit() {
    return isCelsius ? 'metric' : 'imperial';
}

async function checkWeather() {
    h1.innerHTML = "";
    h2.innerHTML = "";
    icon.style.display = 'none'; 
    document.querySelector('.wikipedia-content').innerHTML="";

    const inputCity = document.getElementById('search-bar').value;
    //Calling getUnit in the url to get the accurate unitvalue. 
    const weatherUrl = `${baseUrl}&units=${getUnit()}&q=${inputCity}`

    const fetchedData = await fetchData(weatherUrl);

    if (fetchedData) {
    const wikipediaSummary = await fetchData(`https://sv.wikipedia.org/api/rest_v1/page/summary/${inputCity}`)
    console.log(wikipediaSummary);
    
    printResult(fetchedData);
    printSummary(wikipediaSummary);
    }else {
        printError()
        console.error("something went wrong.");
    }
    
}

async function fetchData(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        console.error("API request failed:", response.status);
        return null; 
    }
}

const printResult = (dataInput) => {
    document.querySelector('.error').innerHTML = "";
   
    document.querySelector('.box2').style.borderRight = '2px solid transparent';
    document.querySelector('.box1').style.borderRight = '2px solid transparent';
    if (dataInput) {
        console.log(dataInput)

        firstH3.innerHTML = "Vädret i ";
        h2.innerHTML = dataInput.name;

        const temperature = Math.round(dataInput.main.temp);
        const unit = isCelsius ? '°C' : '°F';
        h1.innerHTML = `${temperature}${unit}`;
        //Make the borders visable. 
        document.querySelector('.box1').style.borderRight = '2px solid rgb(218, 218, 218)';
        document.querySelector('.box2').style.borderRight = '2px solid rgb(218, 218, 218)';

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
         else if (dataInput.weather[0].description.includes('cloud')) {
            document.querySelector('.icon').src = "IMG/clouds.png";
            document.querySelector('.icon').style.display = 'block';
         }
         else if (dataInput.weather[0].description.includes('fog')) {
            document.querySelector('.icon').src = "IMG/clouds.png";
            document.querySelector('.icon').style.display = 'block';
         }
         else if (dataInput.weather[0].description.includes('clear')) {
            document.querySelector('.icon').src = "IMG/sun.png";
            document.querySelector('.icon').style.display = 'block';
         }
    }
}

async function changeMetric() {
    console.log('funkar detta?')
    isCelsius = !isCelsius; // Toggle the value

    const inputCity = document.getElementById('search-bar').value;
    const weatherUrl = `${baseUrl}&units=${getUnit()}&q=${inputCity}`
    //const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?units=${units}&q=${inputCity}&appid=${apiKey}`;
    const fetchedData = await fetchData(weatherUrl);

    printResult(fetchedData);


    //Ändra text beroende på om isCelsius is true/false. 
    fahrBtn.innerText = isCelsius ? '°F' : '°C';
}

function printSummary(wikipediaSummary){
    document.querySelector('.wikipedia-content').style.display='block';
    document.querySelector('.wikipedia-content').innerHTML=(wikipediaSummary.extract);
 }

 function printError(){
    document.querySelector('.error').innerHTML = "Kunde inte hitta det du sökte efter. Försök igen."
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.box1').style.borderRight = '2px solid transparent';
    document.querySelector('.box2').style.borderRight = '2px solid transparent';
 }


 //JOHAN EXEMPEL await fetch('https://url').then(yay, nooo)
// const yay = (data) => {
//     console.log(data)
// }

// const nooo = (error) => {
//     console.error(':(')
// }