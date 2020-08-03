// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("submit", function() {
   let form = document.querySelector("form")
   event.preventDefault();

   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName");
   let fuelLevel = document.querySelector("input[name=fuelLevel");
   let cargoMass = document.querySelector("input[name=cargoMass");

   let faultyItems = document.getElementById("faultyItems");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let launchStatus = document.getElementById("launchStatus");


   if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
      alert("All fields are required.");
   } else if (isNaN(Number(fuelLevel.value))) {
      alert("Fuel level must be a number and in L");
   } else if (isNaN(Number(cargoMass.value))) {
      alert("Cargo mass must be a number and in kg");
   } else {
      pilotStatus.innerHTML = `Pilot ${pilotName.value} cleared for launch`;
      copilotStatus.innerHTML = `Copilot ${copilotName.value} cleared for launch`;
   }

   if (Number(fuelLevel.value) < 10000) {
      faultyItems.style.visibility = "visible";
      fuelStatus.innerHTML = "Fuel amount too low for takeoff";
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = red;
   } 

   if (Number(cargoMass.value) > 10000) {
      faultyItems.style.visibility = "visible";
      cargoStatus.innerHTML = "Cargo weight too high for takeoff";
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = red;
   }

   if (Number(fuelLevel.value) >= 10000 && Number(cargoMass.value) <= 10000) {
      launchStatus.innerHTML = "Shuttle is ready for launch";
      launchStatus.style.color = green;
   }

});