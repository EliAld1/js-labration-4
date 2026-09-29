/* Lösning till uppgift 7. Av Elina Aldevärn, 2026 */
"use strict";

// Array med sex tal
let numbers = [1,2,3,4,5,6]; 

function calculateSum(numbersArray) { // Skapat funktion
    let sum = 0; // Startvärde
    for (let i = 0; i < numbersArray.length; i++) { // Loopar för att gå igenom hela innehållet i array
        sum += numbersArray[i];
    }
        return sum; // Retunerar summan
}

console.log("Summan är " + calculateSum(numbers));