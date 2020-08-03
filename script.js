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

   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName");
   let fuelLevel = document.querySelector("input[name=fuelLevel");
   let cargoMass = document.querySelector("input[name=cargoMass");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");


   if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
      alert("All fields are required.");
      event.preventDefault();
   } else if (isNaN(Number(fuelLevel.value))) {
      alert("Fuel level must be a number and in L");
      event.preventDefault();
   } else if (isNaN(Number(cargoMass.value))) {
      alert("Cargo mass must be a number and in kg");
      event.preventDefault();
   } else {
      pilotStatus.innerText = `Pilot ${pilotName.value} ready for launch.`;
      copilotStatus.innerText = `Copilot ${copilotName.value} ready for launch.`;
      setVisibility(fuelLevel, cargoMass);
   }
});