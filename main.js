// main.js
const apiKey = "72c683fa486d6d0335603532705a98ff";

async function checkWeather() {
    const inputCity = document.getElementById('search-bar').value;
    const fetchedData = await fetchData(inputCity);
    printResult(fetchedData);
}

async function fetchData(inputCity) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${inputCity}&appid=${apiKey}`);
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

        document.querySelector('.city').innerHTML = "Vädret i " + dataInput.name + " är:"
        document.querySelector('.temp').innerHTML = Math.round(dataInput.main.temp) + "°C";
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



// const apiKey ="72c683fa486d6d0335603532705a98ff";

// /* FUNGERANDE LÄNK… ERSÄTT MED VARIABLER
// https://api.openweathermap.org/data/2.5/weather?q=Denver&units=metric&appid=72c683fa486d6d0335603532705a98ff
// */

// async function checkWeather(){
//     const inputCity = document.getElementById('search-bar').value;
//     console.log(inputCity)
//     const fetchedData = fetchData(inputCity)
//     printResult(fetchedData)
// }

// async function fetchData(){
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}`)
//     if (response.ok) {
//     const data = await response.json();
//     console.log(data);
//     return data; 
//     } else {
//         console.error("API request failed:", response.status);
//     }
// }

// const printResult = (dataInput) => {
//     const displayContent = document.getElementById('display-content');
//     displayContent.innerHTML = ""; 

//     document.querySelector('.city').innerHTML = dataInput.name;
//     document.querySelector('.temp').innerHTML = dataInput.main.temp;


    // console.log(dataInput)
    // console.log(dataInput.main)
    // console.log(dataInput.weather)
   
    //     // hämta id från api
    //     const cityName = dataInput.name;
    //     const temperature = dataInput.main.temp;
    //     const weatherDescription = dataInput.weather[0].description;

    //     const h2 = document.createElement('h2');
    //     h2.innerText = `Väder i ${cityName}:`;
    //     displayContent.appendChild(h2);

    //     const h1 = document.createElement('h1');
    //     h1.innerText = `${temperature}°C`;
    //     displayContent.appendChild(h1);

    //     const p = document.createElement('p');
    //     p.innerText = weatherDescription;
    //     displayContent.appendChild(p);

}

    // const { name } = dataInput.name;
    // const { description } = dataInput.weather[0];
    // const { temp } = dataInput.main.temp; 
    // const { speed } = dataInput.wind.speed; 
    // console.log(name, description, temp, speed);


    // }

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