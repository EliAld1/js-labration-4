/* Lösning till uppgift 3. Av Elina Aldevärn, 2026 */
"use strict";

let age = 65;

// Kontrollerar under 18 år
if (age < 18) {
    console.log("Barn")
    // Kontrollerar mellan 18 och 64
} else if (age >= 18 && age <= 64) {
    console.log("Vuxen")
    // 65 år och uppåt
} else {
    console.log("Pensionär")
}
