/* Lösning till uppgift 5. Av Elina Aldevärn, 2026 */
"use strict";

// Array för maträtter
let food = ["Pizza", "Pasta", "Paj", "Tacos", "Sushi"];
console.log(food); // Skriver ut hela array

console.log(food[0]); // Skriver ut första element
console.log(food[food.length - 1]); // Skriver ut sista element

food.push("Soppa"); // Lägger till "Soppa" på sista elementet
food.shift(); // Tar bort första elementet
console.log(food); // Skriver ut hela array
