// Write your helper functions here!

// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(planet, document) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */

    document.getElementById("missionTarget").innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                    <li>Name: ${planet.name}</li>
                    <li>Diameter: ${planet.diameter}</li>
                    <li>Star: ${planet.star}</li>
                    <li>Distance from Earth: ${planet.distance}</li>
                    <li>Number of Moons: ${planet.moons}</li>
                 </ol>
                 <img src="${planet.image}">
                 `;
};


function validateInput(testInput) {
    if (testInput === "") {

        return "Empty";


    } else if (isNaN(testInput) === true ) {

        return "Not a Number";

    } else if (isNaN(testInput) === false ) {

        return "Is a Number";
    }



}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {




    fuelLevelReady = false;
    cargoLevelReady = false;
    fieldCheck = false;

    // validateInput(pilotNameInput.value.trim());

    if (validateInput(pilot.trim()) === "Empty" || validateInput(copilot.trim()) === "Empty" || validateInput(fuelLevel.trim()) === "Empty" || validateInput(cargoLevel.trim()) === "Empty") {
        alert("All fields are required!");

        fieldCheck = false;
        list.style.visibility = "hidden";

    } else if (validateInput(pilot.trim()) === "Is a Number" || validateInput(copilot.trim()) === "Is a Number" || validateInput(fuelLevel.trim()) === "Not a Number" || validateInput(cargoLevel.trim()) === "Not a Number") {
        alert("Make sure to enter valid information for each field!");

        fieldCheck = false;
        list.style.visibility = "hidden";

    }else{
        fieldCheck = true ;
    }



    if (Number(fuelLevel) < 10000 && fieldCheck) {
        list.style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = `There is not enough fuel for the journey! We have ${fuelLevel}L loaded and at least 10,000L are needed!`
        document.getElementById('launchStatus').innerHTML= 'Shuttle not ready for launch!';
        document.getElementById('launchStatus').style.color = "red";
        fuelReady = false;

    } else {
        fuelReady = true;
    }
    if (Number(cargoLevel) > 10000 && fieldCheck) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("cargoStatus").innerText = `There is too much mass for the shuttle to take off! Max load is 10,000kg and we have ${cargoLevel}kg!`
        document.getElementById('launchStatus').innerText = 'Shuttle not ready for launch!';
        document.getElementById('launchStatus').style.color = "red";
        cargoReady = false;

    } else {
        cargoReady = true;
    }

    if (fuelReady && cargoReady && fieldCheck) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById('launchStatus').innerText = 'Shuttle is ready for launch!';
        document.getElementById('launchStatus').style.color = "green";

    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    console.log(planets[index].name);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;