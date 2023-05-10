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
