/**
 * Esempio: Number (Numeri)
 * 
 * Il tipo Number rappresenta numeri interi e decimali usando
 * il formato IEEE 754 a 64 bit.
 * 
 * Per eseguire: node 03.02_number.js
 */

console.log("=== NUMBER (NUMERI) ===\n");

// 1. Creazione di numeri
console.log("1. Creazione di numeri:\n");

let intero = 42;
let decimale = 3.14159;
let negativo = -273.15;
let esponenziale = 2.998e8; // 2.998 × 10^8

console.log("Intero:", intero);
console.log("Decimale:", decimale);
console.log("Negativo:", negativo);
console.log("Esponenziale:", esponenziale);

// Notazioni speciali
let binario = 0b1010; // 10 in decimale
let ottale = 0o744; // 484 in decimale
let esadecimale = 0xFF; // 255 in decimale

console.log("\nNotazioni speciali:");
console.log("Binario 0b1010:", binario);
console.log("Ottale 0o744:", ottale);
console.log("Esadecimale 0xFF:", esadecimale);

// 2. Valori speciali
console.log("\n2. Valori speciali:\n");

console.log("Infinity:", Infinity);
console.log("-Infinity:", -Infinity);
console.log("NaN:", NaN);

// Operazioni che producono Infinity
console.log("\n1 / 0 =", 1 / 0);
console.log("-1 / 0 =", -1 / 0);
console.log("Math.pow(10, 1000) =", Math.pow(10, 1000));

// Operazioni che producono NaN
console.log("\n'ciao' / 2 =", "ciao" / 2);
console.log("Math.sqrt(-1) =", Math.sqrt(-1));
console.log("0 / 0 =", 0 / 0);
console.log("Infinity - Infinity =", Infinity - Infinity);

// Verifica NaN
console.log("\nVerifica NaN:");
console.log("NaN === NaN:", NaN === NaN); // false!
console.log("isNaN(NaN):", isNaN(NaN));
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));
console.log("isNaN('ciao'):", isNaN("ciao")); // true (converte prima)
console.log("Number.isNaN('ciao'):", Number.isNaN("ciao")); // false (più rigoroso)

// 3. Limiti dei numeri
console.log("\n3. Limiti dei numeri:\n");

console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
console.log("MAX_VALUE:", Number.MAX_VALUE);
console.log("MIN_VALUE:", Number.MIN_VALUE);
console.log("EPSILON:", Number.EPSILON);

// Problema di precisione
console.log("\nProblema precisione:");
console.log("0.1 + 0.2 =", 0.1 + 0.2); // 0.30000000000000004
console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3); // false!

// Verifica numeri sicuri
console.log("\nisSafeInteger:");
console.log("9007199254740991 sicuro?", Number.isSafeInteger(9007199254740991));
console.log("9007199254740992 sicuro?", Number.isSafeInteger(9007199254740992));

// 4. Operazioni aritmetiche
console.log("\n4. Operazioni aritmetiche:\n");

let a = 10, b = 3;

console.log(`a = ${a}, b = ${b}`);
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b (resto) =", a % b);
console.log("a ** b (potenza) =", a ** b);

// Operatori di incremento/decremento
let x = 5;
console.log("\nx =", x);
console.log("x++ (post):", x++); // Ritorna 5, poi incrementa
console.log("x dopo:", x);
console.log("++x (pre):", ++x); // Incrementa, poi ritorna 7
console.log("x dopo:", x);

// 5. Metodi di Number
console.log("\n5. Metodi di Number:\n");

let numero = 123.456789;

// toFixed() - numero fisso di decimali
console.log("toFixed(2):", numero.toFixed(2)); // "123.46"
console.log("toFixed(0):", numero.toFixed(0)); // "123"

// toPrecision() - numero totale di cifre significative
console.log("toPrecision(5):", numero.toPrecision(5)); // "123.46"
console.log("toPrecision(3):", numero.toPrecision(3)); // "123"

// toExponential() - notazione esponenziale
console.log("toExponential(2):", numero.toExponential(2)); // "1.23e+2"

// toString() - conversione a stringa (con base opzionale)
let num = 255;
console.log("\ntoString():");
console.log("Base 10:", num.toString(10)); // "255"
console.log("Base 2:", num.toString(2)); // "11111111"
console.log("Base 16:", num.toString(16)); // "ff"

// 6. Parsing
console.log("\n6. Parsing stringhe a numeri:\n");

// parseInt()
console.log("parseInt('123'):", parseInt("123"));
console.log("parseInt('123.45'):", parseInt("123.45")); // Ignora decimali
console.log("parseInt('123px'):", parseInt("123px")); // Ferma ai caratteri non numerici
console.log("parseInt('   42   '):", parseInt("   42   ")); // Ignora spazi

// Con base
console.log("parseInt('FF', 16):", parseInt("FF", 16)); // 255
console.log("parseInt('1010', 2):", parseInt("1010", 2)); // 10

// parseFloat()
console.log("\nparseFloat('123.45'):", parseFloat("123.45"));
console.log("parseFloat('123.45.67'):", parseFloat("123.45.67")); // 123.45
console.log("parseFloat('3.14e2'):", parseFloat("3.14e2")); // 314

// Number() - conversione più rigorosa
console.log("\nNumber('123'):", Number("123"));
console.log("Number('123px'):", Number("123px")); // NaN
console.log("Number(true):", Number(true)); // 1
console.log("Number(false):", Number(false)); // 0
console.log("Number(null):", Number(null)); // 0
console.log("Number(undefined):", Number(undefined)); // NaN

// 7. Verifiche
console.log("\n7. Metodi di verifica:\n");

console.log("Number.isFinite(42):", Number.isFinite(42));
console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity));
console.log("Number.isFinite(NaN):", Number.isFinite(NaN));

console.log("\nNumber.isInteger(42):", Number.isInteger(42));
console.log("Number.isInteger(42.0):", Number.isInteger(42.0)); // true
console.log("Number.isInteger(42.5):", Number.isInteger(42.5));

console.log("\nNumber.isNaN(NaN):", Number.isNaN(NaN));
console.log("Number.isNaN('ciao'):", Number.isNaN("ciao")); // false (non converte)

// 8. Math object
console.log("\n8. Oggetto Math:\n");

console.log("Math.PI:", Math.PI);
console.log("Math.E:", Math.E);

console.log("\nFunzioni matematiche:");
console.log("Math.abs(-5):", Math.abs(-5));
console.log("Math.ceil(4.3):", Math.ceil(4.3)); // Arrotonda per eccesso
console.log("Math.floor(4.7):", Math.floor(4.7)); // Arrotonda per difetto
console.log("Math.round(4.5):", Math.round(4.5)); // Arrotonda al più vicino
console.log("Math.trunc(4.7):", Math.trunc(4.7)); // Rimuove decimali

console.log("\nPotenze e radici:");
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // 2³
console.log("Math.sqrt(16):", Math.sqrt(16)); // √16
console.log("Math.cbrt(27):", Math.cbrt(27)); // ³√27

console.log("\nMin e Max:");
console.log("Math.min(5, 2, 9, 1):", Math.min(5, 2, 9, 1));
console.log("Math.max(5, 2, 9, 1):", Math.max(5, 2, 9, 1));

console.log("\nNumeri casuali:");
console.log("Math.random():", Math.random()); // 0 <= n < 1
console.log("Random 1-10:", Math.floor(Math.random() * 10) + 1);
console.log("Random 1-100:", Math.floor(Math.random() * 100) + 1);

// 9. Confronto con precisione
console.log("\n9. Confronto con tolleranza:\n");

function sonoUgualiConTolleranza(a, b, tolleranza = Number.EPSILON) {
  return Math.abs(a - b) < tolleranza;
}

console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3);
console.log("Con tolleranza:", sonoUgualiConTolleranza(0.1 + 0.2, 0.3));

// 10. Casi d'uso pratici
console.log("\n10. Casi d'uso pratici:\n");

// Arrotondamento a N decimali
function arrotonda(numero, decimali) {
  return Math.round(numero * Math.pow(10, decimali)) / Math.pow(10, decimali);
}
console.log("Arrotonda 3.14159 a 2 decimali:", arrotonda(3.14159, 2));

// Random tra min e max
function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random tra 10 e 20:", randomRange(10, 20));

// Clamp (limita un valore tra min e max)
function clamp(valore, min, max) {
  return Math.min(Math.max(valore, min), max);
}
console.log("Clamp(150, 0, 100):", clamp(150, 0, 100)); // 100
console.log("Clamp(-10, 0, 100):", clamp(-10, 0, 100)); // 0

// Formattazione valuta
function formatValuta(numero) {
  return `€ ${numero.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
}
console.log("Formatta 1234567.89:", formatValuta(1234567.89));

// Percentuale
function calcolaPercentuale(valore, totale) {
  return ((valore / totale) * 100).toFixed(2) + "%";
}
console.log("25 su 80:", calcolaPercentuale(25, 80));

// Media
function media(...numeri) {
  return numeri.reduce((sum, n) => sum + n, 0) / numeri.length;
}
console.log("Media di 10, 20, 30:", media(10, 20, 30));

console.log("\n💡 Best Practices:");
console.log("   - Usare Number.isNaN() invece di isNaN()");
console.log("   - Attenzione alla precisione con decimali");
console.log("   - Usare BigInt per numeri molto grandi");
console.log("   - Verificare isFinite() prima di operazioni");
console.log("   - Usare toFixed() per arrotondamenti visivi");
