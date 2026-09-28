/* Lösning till uppgift 2. Av Elina Aldevärn, 2026 */
"use strict";

// Priset för produkt
let price = 100;
console.log("Pris" + ": " + price + " kr");

// Antal
let quantity = 3;
console.log("Antal" + ": " + quantity);

// Totalbelopp
let totalPrice = price * quantity;
console.log("Totalt" + ": " + totalPrice + " kr");

// Belopp inkl moms
let withVat = totalPrice * 1.25;
console.log("Totalt inklusive moms" + ": " + withVat + " kr");