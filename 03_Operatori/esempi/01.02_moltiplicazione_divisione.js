/**
 * Esempio: Operatori di Moltiplicazione e Divisione
 * 
 * Moltiplicazione (*) e divisione (/) sono operatori aritmetici fondamentali.
 * Attenzione ai casi speciali: divisione per zero, precisione, overflow.
 * 
 * Per eseguire: node 01.02_moltiplicazione_divisione.js
 */

console.log("=== OPERATORI DI MOLTIPLICAZIONE E DIVISIONE ===\n");

// 1. Moltiplicazione di base
console.log("1. MOLTIPLICAZIONE (*):\n");

console.log("Numeri interi:");
console.log("5 * 3 =", 5 * 3); // 15
console.log("10 * 20 =", 10 * 20); // 200
console.log("7 * 8 =", 7 * 8); // 56

console.log("\nNumeri decimali:");
console.log("2.5 * 2 =", 2.5 * 2); // 5
console.log("3.14 * 2 =", 3.14 * 2); // 6.28
console.log("0.1 * 0.2 =", 0.1 * 0.2); // 0.020000000000000004

console.log("\nNegativi:");
console.log("5 * (-3) =", 5 * (-3)); // -15
console.log("-5 * 3 =", -5 * 3); // -15
console.log("-5 * (-3) =", -5 * (-3)); // 15 (negativo * negativo = positivo)

console.log("\nCon zero:");
console.log("5 * 0 =", 5 * 0); // 0
console.log("0 * 100 =", 0 * 100); // 0
console.log("-5 * 0 =", -5 * 0); // -0 (zero negativo!)

// 2. Divisione di base
console.log("\n2. DIVISIONE (/):\n");

console.log("Numeri interi:");
console.log("20 / 4 =", 20 / 4); // 5
console.log("100 / 5 =", 100 / 5); // 20
console.log("15 / 3 =", 15 / 3); // 5

console.log("\nRisultati decimali:");
console.log("10 / 3 =", 10 / 3); // 3.3333333333333335
console.log("7 / 2 =", 7 / 2); // 3.5
console.log("22 / 7 =", 22 / 7); // 3.142857142857143 (approssimazione di π)

console.log("\nNegativi:");
console.log("10 / (-2) =", 10 / (-2)); // -5
console.log("-10 / 2 =", -10 / 2); // -5
console.log("-10 / (-2) =", -10 / (-2)); // 5

// 3. Divisione per zero
console.log("\n3. DIVISIONE per ZERO:\n");

console.log("Positivo / 0:");
console.log("5 / 0 =", 5 / 0); // Infinity
console.log("100 / 0 =", 100 / 0); // Infinity

console.log("\nNegativo / 0:");
console.log("-5 / 0 =", -5 / 0); // -Infinity
console.log("-100 / 0 =", -100 / 0); // -Infinity

console.log("\n0 / 0:");
console.log("0 / 0 =", 0 / 0); // NaN (indeterminato)

console.log("\nVerifica Infinity:");
console.log("typeof Infinity =", typeof Infinity); // "number"
console.log("isFinite(5 / 0) =", isFinite(5 / 0)); // false
console.log("Number.isFinite(5 / 0) =", Number.isFinite(5 / 0)); // false

// 4. Conversione implicita
console.log("\n4. CONVERSIONE IMPLICITA:\n");

console.log("Moltiplicazione con stringhe:");
console.log("'5' * 2 =", "5" * 2); // 10 (converte stringa)
console.log("'3' * '4' =", "3" * "4"); // 12
console.log("typeof ('5' * 2) =", typeof ("5" * 2)); // "number"

console.log("\nDivisione con stringhe:");
console.log("'20' / 4 =", "20" / 4); // 5
console.log("'100' / '5' =", "100" / "5"); // 20

console.log("\nBoolean:");
console.log("true * 5 =", true * 5); // 5 (true = 1)
console.log("false * 10 =", false * 10); // 0 (false = 0)
console.log("10 / true =", 10 / true); // 10
console.log("10 / false =", 10 / false); // Infinity

console.log("\nNull e Undefined:");
console.log("5 * null =", 5 * null); // 0 (null = 0)
console.log("5 * undefined =", 5 * undefined); // NaN
console.log("10 / null =", 10 / null); // Infinity (10 / 0)
console.log("10 / undefined =", 10 / undefined); // NaN

console.log("\nStringhe non numeriche:");
console.log("'ciao' * 2 =", "ciao" * 2); // NaN
console.log("'10px' * 2 =", "10px" * 2); // NaN
console.log("100 / 'abc' =", 100 / "abc"); // NaN

// 5. Problemi di precisione
console.log("\n5. PROBLEMI di PRECISIONE:\n");

console.log("Moltiplicazione decimali:");
console.log("0.1 * 0.2 =", 0.1 * 0.2); // 0.020000000000000004
console.log("1.1 * 1.1 =", 1.1 * 1.1); // 1.2100000000000002

console.log("\nDivisione decimali:");
console.log("0.3 / 0.1 =", 0.3 / 0.1); // 2.9999999999999996
console.log("1 / 3 * 3 =", 1 / 3 * 3); // 1 (casualmente preciso)
console.log("(1 / 3) * 3 === 1:", (1 / 3) * 3 === 1); // true

console.log("\nSoluzione: arrotondamento");
let risultato = 0.1 * 0.2;
console.log("(0.1 * 0.2).toFixed(2) =", risultato.toFixed(2)); // "0.02"
console.log("Math.round(0.3 / 0.1) =", Math.round(0.3 / 0.1)); // 3

// 6. Valori speciali
console.log("\n6. Valori SPECIALI:\n");

console.log("Infinity:");
console.log("Infinity * 2 =", Infinity * 2); // Infinity
console.log("Infinity * -1 =", Infinity * -1); // -Infinity
console.log("Infinity * 0 =", Infinity * 0); // NaN
console.log("Infinity / Infinity =", Infinity / Infinity); // NaN
console.log("10 / Infinity =", 10 / Infinity); // 0

console.log("\nNaN:");
console.log("NaN * 5 =", NaN * 5); // NaN
console.log("NaN / 10 =", NaN / 10); // NaN
console.log("10 / NaN =", 10 / NaN); // NaN

console.log("\nZero negativo:");
console.log("-0 =", -0); // -0
console.log("-0 === 0:", -0 === 0); // true
console.log("1 / -0 =", 1 / -0); // -Infinity
console.log("1 / 0 =", 1 / 0); // Infinity

// 7. Overflow e Underflow
console.log("\n7. OVERFLOW e UNDERFLOW:\n");

console.log("Overflow (numero troppo grande):");
console.log("1e308 * 10 =", 1e308 * 10); // Infinity
console.log("Number.MAX_VALUE =", Number.MAX_VALUE);
console.log("Number.MAX_VALUE * 2 =", Number.MAX_VALUE * 2); // Infinity

console.log("\nUnderflow (numero troppo piccolo):");
console.log("1e-308 / 1e10 =", 1e-308 / 1e10); // 0
console.log("Number.MIN_VALUE =", Number.MIN_VALUE);
console.log("Number.MIN_VALUE / 2 =", Number.MIN_VALUE / 2); // 0

// 8. Operazioni comuni
console.log("\n8. OPERAZIONI COMUNI:\n");

// Calcolo area rettangolo
let base = 5;
let altezza = 10;
let area = base * altezza;
console.log("Area rettangolo:");
console.log(`  Base: ${base}, Altezza: ${altezza}`);
console.log(`  Area: ${area}`);

// Calcolo velocità media
let distanza = 150; // km
let tempo = 2.5; // ore
let velocita = distanza / tempo;
console.log("\nVelocità media:");
console.log(`  Distanza: ${distanza} km`);
console.log(`  Tempo: ${tempo} ore`);
console.log(`  Velocità: ${velocita} km/h`);

// Calcolo percentuale
let totale = 200;
let percentuale = 15;
let sconto = (totale * percentuale) / 100;
let prezzoFinale = totale - sconto;
console.log("\nCalcolo sconto:");
console.log(`  Prezzo iniziale: €${totale}`);
console.log(`  Sconto: ${percentuale}%`);
console.log(`  Sconto in €: €${sconto}`);
console.log(`  Prezzo finale: €${prezzoFinale}`);

// Conversione unità
let chilometri = 10;
let metri = chilometri * 1000;
let centimetri = metri * 100;
console.log("\nConversione unità:");
console.log(`  ${chilometri} km = ${metri} m = ${centimetri} cm`);

// 9. Divisione intera (emulata)
console.log("\n9. DIVISIONE INTERA (emulata):\n");

console.log("JavaScript non ha divisione intera nativa");
console.log("10 / 3 =", 10 / 3); // 3.3333...

console.log("\nMetodi per ottenere divisione intera:");
console.log("Math.floor(10 / 3) =", Math.floor(10 / 3)); // 3
console.log("Math.trunc(10 / 3) =", Math.trunc(10 / 3)); // 3
console.log("parseInt(10 / 3) =", parseInt(10 / 3)); // 3
console.log("~~(10 / 3) =", ~~(10 / 3)); // 3 (bitwise trick)
console.log("(10 / 3) | 0 =", (10 / 3) | 0); // 3 (bitwise OR)

console.log("\nDifferenza con negativi:");
console.log("Math.floor(-10 / 3) =", Math.floor(-10 / 3)); // -4 (arrotonda verso -∞)
console.log("Math.trunc(-10 / 3) =", Math.trunc(-10 / 3)); // -3 (tronca decimali)
console.log("Math.ceil(-10 / 3) =", Math.ceil(-10 / 3)); // -3 (arrotonda verso +∞)

// 10. Best practices
console.log("\n10. BEST PRACTICES:\n");

console.log("✓ Validare divisore prima della divisione:");
console.log(`
function dividiSicuro(a, b) {
  if (b === 0) {
    throw new Error("Divisione per zero");
  }
  return a / b;
}
`);

console.log("✓ Gestire precisione decimale:");
console.log(`
function moltiplica(a, b, decimali = 2) {
  const risultato = a * b;
  return Math.round(risultato * Math.pow(10, decimali)) / Math.pow(10, decimali);
}
`);

console.log("✓ Verificare risultati speciali:");
console.log(`
function isValidResult(num) {
  return Number.isFinite(num) && !Number.isNaN(num);
}
`);

console.log("\n⚠️  Evita:");
console.log("  - Divisione per zero senza controlli");
console.log("  - Confronto diretto di decimali (0.1 * 0.2 === 0.02)");
console.log("  - Operazioni con stringhe senza conversione esplicita");
console.log("  - Dimenticare che JavaScript ha solo type 'number' (no int/float)");

console.log("\n💡 Esempio codice robusto:");
console.log(`
function calcolaMedia(valori) {
  // Validazione
  if (!Array.isArray(valori) || valori.length === 0) {
    throw new Error("Array vuoto o invalido");
  }
  
  // Somma e divisione
  const somma = valori.reduce((acc, val) => acc + Number(val), 0);
  const media = somma / valori.length;
  
  // Verifica risultato
  if (!Number.isFinite(media)) {
    throw new Error("Risultato non valido");
  }
  
  // Arrotondamento
  return Math.round(media * 100) / 100;
}

const voti = [7.5, 8, 9, 6.5];
console.log("Media voti:", calcolaMedia(voti));
`);

console.log("\n✅ Moltiplicazione e divisione: potenti ma richiedono cautela!");
