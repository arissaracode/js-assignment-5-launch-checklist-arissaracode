// Write your JavaScript code here!

// window.addEventListener("load", function() {

//    let listedPlanets;
//    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//    let listedPlanetsResponse;
//    listedPlanetsResponse.then(function (result) {
//        listedPlanets = result;
//        console.log(listedPlanets);
//    }).then(function () {
//        console.log(listedPlanets);
//        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//    })
   
// });

// Write your JavaScript code here!


let fuelLevelReady = false;
let cargoLevelReady = false;
let fieldCheck = false;

window.addEventListener("load", function () {

    let listedPlanetResponse = myFetch();

    listedPlanetResponse.then(function (result) {
        result.json().then(function (json) {

            let selectedPlanet = pickPlanet(json);

            addDestinationInfo(selectedPlanet, document)
        })

    })
    let form = document.querySelector("form");
    form.addEventListener("submit", function () {
    event.preventDefault();


    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let coPilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    let pilot = pilotNameInput.value ;
    let copilot = coPilotNameInput.value;
    let fuel = fuelLevelInput.value;
    let cargo = cargoMassInput.value;
    let list = document.getElementById("faultyItems");
    formSubmission(document,list,pilot,copilot,fuel,cargo)

    })

});
