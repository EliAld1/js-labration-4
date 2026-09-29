/* Lösning till uppgift 9. Av Elina Aldevärn, 2026 */
"use strict";

// Array som innehåller tre objekt
const people = [
  {
    name: "Clara",
    age: 15,
    city: "Malaga",
  },
  {
    name: "Mia",
    age: 32,
    city: "Madrid",
  },
  {
    name: "Lovisa",
    age: 40,
    city: "Barcelona",
  },
];

function info(peopleObject) {
  // Skapar funktion med if-sats för att kontrollera ålder och sätta regler
  if (peopleObject.age <= 17) {
    console.log(
      peopleObject.name +
        " bor i " +
        peopleObject.city +
        " och är inte myndig.",
    );
  } else {
    console.log(
      peopleObject.name + " bor i " + peopleObject.city + " och är myndig.",
    );
  }
}

for (let i = 0; i < people.length; i++) { // Skapar loop för att gå igenom alla objekt i array
  info(people[i]); // Skriver ut funktion(objekt[loop])
}
