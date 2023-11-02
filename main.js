
async function translateWord(){
    const userInput = document.getElementById('user-input').value;
    console.log(userInput)
    try{ 
    const fetchedWord = await fetchContent (userInput)
    printResults(fetchedWord)
    } catch (error){
        console.error("Hoppsan, något har blivit tullut (läs: fel)", error); 
         // Display errormsg
         const displayContent = document.getElementById('display-data');
         displayContent.innerHTML = "";
 
         const errorP = document.createElement('p');
         errorP.innerText = "Hoppsan, något har blivit tullut (läs: fel)";
         displayContent.appendChild(errorP);
     }
    }

async function fetchContent(aWord){
    try {
    const response = await fetch(`https://api.jamska.com/api/word/${aWord}`);
    if (!response.ok){
    throw new Error (`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json(); //Eller kommer det bli text?? 
    return data;
    } catch (error){
        throw error; 
    }
}

const printResults = (dataInput) => {
    const displayContent = document.getElementById('display-data');
    displayContent.innerHTML = ""; 

    const p = document.createElement('p');
    p.innerText = dataInput.content; //Eller vad det nu står i detta API
    displayContent.appendChild(p);
}