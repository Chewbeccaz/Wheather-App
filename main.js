// FÖBÄTTRING: HÄMTA ALLA KÄLLOR SOM BEHÖVS FÖRST. 
//ONCHANGE - för att ge förslag medan man skriver?
//Se till att felmeddelandet försvinner när fetchen går bra igen
//Togglefunktion för fahrenheit-celsius?

//Knappfunktion för att byta mellan fahrenheit och celsius?
//Jämföra graderna mellan två ställen? 

//URLNASA: https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0


const apiKey = "72c683fa486d6d0335603532705a98ff";
const nasaKey ="PfosfTbZAfIs5okl0YCYmaGRVieJX9JHNsR2R2TW";


const h2 = document.querySelector('.h2');
const h1 = document.querySelector('.h1');
const searchBox =document.querySelector('.search');


async function checkWeather() {
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
        return null; // Return null or handle the error as needed
    }
}

const printResult = (dataInput) => {
    if (dataInput) {
        const displayContent = document.getElementById('display-content');
        displayContent.innerHTML = "";

        console.log(dataInput)

        h2.innerHTML = "Vädret i " + dataInput.name + " är:"
        h1.innerHTML = Math.round(dataInput.main.temp) + "°C";
        // document.querySelector('.icon').
        // document.querySelector('description').innerHTML = dataInput.weather[0]

        //Här kan man lägga till ikoner på väder om man vill. 
        if (dataInput.weather[0].main == "Clouds"){
            document.querySelector('.icon').src ="imgsourceurl."
        }

    } else {
        console.log("Something went wrong.");
        document.querySelector('.description').innerHTML = "Kunde inte hitta det du sökte efter. Försök igen."
    }
}

async function checkMars(){
    h1.innerHTML="";
    h2.innerHTML="";
    searchBox.style.display = "none";
    document.body.style.backgroundImage ="url('https://images.unsplash.com/photo-1559657693-e816ff3bd9af?auto=format&fit=crop&q=80&w=2942&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
    //Göm även searchbar och h1. 

    //Återanvända fetchdata, skriva om. 
    const nasaUrl = `https://api.nasa.gov/insight_weather/?api_key=${nasaKey}&feedtype=json&ver=1.0`;
    const marsData = await fetchData(nasaUrl);
    printMars(marsData);
}

const printMars = (dataInput) => {
    console.log(dataInput);
}

 //JOHAN EXEMPEL await fetch('https://url').then(yay, nooo)
// const yay = (data) => {
//     console.log(data)
// }

// const nooo = (error) => {
//     console.error(':(')
// }






// async function translateWord(){
//     const userInput = document.getElementById('user-input').value;
//     console.log(userInput)
//     try{ 
//     const fetchedWord = await fetchContent (userInput)
//     printResults(fetchedWord)
//     } catch (error){
//         console.error("Hoppsan, något har blivit tullut (läs: fel)", error); 
//          // Display errormsg
//          const displayContent = document.getElementById('display-data');
//          displayContent.innerHTML = "";
 
//          const errorP = document.createElement('p');
//          errorP.innerText = "Hoppsan, något har blivit tullut (läs: fel)";
//          displayContent.appendChild(errorP);
//      }
//     }

// async function fetchContent(aWord){
//     try {
//     const response = await fetch(`https://api.jamska.com/api/word/${aWord}`);
//     if (!response.ok){
//     throw new Error (`HTTP error! Status: ${response.status}`);
//     }
//     const data = await response.json(); //Eller kommer det bli text?? 
//     return data;
//     } catch (error){
//         throw error; 
//     }
// }

// const printResults = (dataInput) => {
//     const displayContent = document.getElementById('display-data');
//     displayContent.innerHTML = ""; 

//     const p = document.createElement('p');
//     p.innerText = dataInput.content; //Eller vad det nu står i detta API
//     displayContent.appendChild(p);
// }