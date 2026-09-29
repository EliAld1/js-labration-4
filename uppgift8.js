/* Lösning till uppgift 8. Av Elina Aldevärn, 2026 */
"use strict";

// Skapat objekt för boken
const book = {
  title: "Hobbit",
  writer: "J.R.R. Tolkien",
  year: 1937
}
// Skapat funktion utanför objekt
function bookInfo(bookObject) {
console.log("Titel: " + bookObject.title); // Titel
console.log("Författare: " + bookObject.writer); // Författare
console.log("Utgivningsår: " + bookObject.year); // År
}

bookInfo(book); // Skriver ut funktion(objekt)