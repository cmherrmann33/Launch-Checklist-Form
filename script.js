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

   if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
      alert("All fields are required.");
      event.preventDefault();
   } else if (isNaN(Number(fuelLevel.value))) {
      alert("Fuel level must be a number and in L");
   } else if (isNaN(Number(cargoMass.value))) {
      alert("Cargo mass must be a number and in kg")
   }
});


window.addEventListener("load", function() {
   let pilotForm = document.querySelector("form");
   pilotForm.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName");
      alert("Pilot Name: " + pilotNameInput.value);
   });
});