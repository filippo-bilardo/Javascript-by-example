/**
 * Esempio: Operatore Ternario (? :)
 * 
 * Operatore condizionale ternario per espressioni if-else compatte.
 * Sintassi, casi d'uso e best practices.
 * 
 * Per eseguire: node 05.01_ternario.js
 */

console.log("=== OPERATORE TERNARIO (? :) ===\n");

// 1. Sintassi base
console.log("1. SINTASSI BASE:\n");

console.log("Forma: condizione ? valoreSeTrue : valoreSeFalse\n");

let age = 20;
let status = age >= 18 ? "Adulto" : "Minorenne";
console.log(`age = ${age}, status = ${status}`); // Adulto

let score = 75;
let result = score >= 60 ? "Promosso" : "Bocciato";
console.log(`score = ${score}, result = ${result}`); // Promosso

console.log("\n✓ Equivale a:");
console.log(`
if (condizione) {
  valore1;
} else {
  valore2;
}
`);

// 2. Confronto con if-else
console.log("\n2. CONFRONTO con if-else:\n");

console.log("Con if-else:");
let number = 10;
let parity1;
if (number % 2 === 0) {
  parity1 = "Pari";
} else {
  parity1 = "Dispari";
}
console.log("parity1 =", parity1);

console.log("\nCon ternario:");
let parity2 = number % 2 === 0 ? "Pari" : "Dispari";
console.log("parity2 =", parity2);

console.log("\n✓ Ternario è più conciso per assegnazioni semplici");

// 3. Ternario con espressioni
console.log("\n3. TERNARIO con espressioni:\n");

console.log("Espressioni in condizione:");
let x = 10, y = 20;
let max = (x > y) ? x : y;
console.log(`max(${x}, ${y}) =`, max); // 20

console.log("\nEspressioni nei valori:");
let price = 100;
let discount = price > 50 ? price * 0.9 : price * 0.95;
console.log(`price = ${price}, discount = ${discount}`);

console.log("\nChiamate a funzione:");
let isValid = true;
let message = isValid ? getMessage() : getError();

function getMessage() {
  return "Operazione riuscita";
}

function getError() {
  return "Errore";
}

console.log("message =", message);

// 4. Ternario annidato
console.log("\n4. TERNARIO ANNIDATO:\n");

let grade = 75;
let rating = grade >= 90 ? "Eccellente" :
             grade >= 75 ? "Buono" :
             grade >= 60 ? "Sufficiente" : "Insufficiente";

console.log(`grade = ${grade}, rating = ${rating}`); // Buono

console.log("\n✓ Formattazione per leggibilità:");
console.log(`
let result = 
  condition1 ? value1 :
  condition2 ? value2 :
  condition3 ? value3 :
  defaultValue;
`);

console.log("\n⚠️  Evita troppi livelli:");
let score2 = 85;
// ✗ Difficile da leggere
let level = score2 > 90 ? "A" : score2 > 80 ? "B" : score2 > 70 ? "C" : score2 > 60 ? "D" : "F";
console.log("level (annidato):", level);

// ✓ Meglio usare if-else o switch per molte condizioni

// 5. Ternario in return
console.log("\n5. TERNARIO in RETURN:\n");

function getDiscount(isMember) {
  return isMember ? 0.2 : 0.1;
}

console.log("getDiscount(true):", getDiscount(true)); // 0.2
console.log("getDiscount(false):", getDiscount(false)); // 0.1

function abs(n) {
  return n >= 0 ? n : -n;
}

console.log("abs(5):", abs(5)); // 5
console.log("abs(-5):", abs(-5)); // 5

console.log("\n✓ Più conciso di if-else con return");

// 6. Ternario in template literals
console.log("\n6. TERNARIO in TEMPLATE LITERALS:\n");

let count = 5;
console.log(`Hai ${count} ${count === 1 ? 'messaggio' : 'messaggi'}`);

let isOnline = true;
console.log(`Stato: ${isOnline ? '🟢 Online' : '🔴 Offline'}`);

let temperature = 25;
console.log(`Temperatura: ${temperature}°C (${temperature > 30 ? 'Caldo' : temperature < 10 ? 'Freddo' : 'Moderato'})`);

// 7. Ternario con side effects
console.log("\n7. TERNARIO con SIDE EFFECTS:\n");

let logs = [];
let success = true;

success ? logs.push("Success") : logs.push("Error");
console.log("logs:", logs); // ["Success"]

console.log("\n⚠️  Meglio evitare side effects complessi:");
console.log(`
// ✗ Confuso
condition ? doThis() : doThat();

// ✓ Più chiaro
if (condition) {
  doThis();
} else {
  doThat();
}
`);

// 8. Ternario per valori di default
console.log("\n8. TERNARIO per valori di DEFAULT:\n");

console.log("Default semplice:");
let username = null;
let displayName = username ? username : "Guest";
console.log("displayName:", displayName); // Guest

console.log("\n⚠️  Meglio usare ?? o ||:");
let name1 = username || "Guest";
let name2 = username ?? "Guest";
console.log("Con ||:", name1);
console.log("Con ??:", name2);

console.log("\nMa ternario per condizioni complesse:");
let user = {name: "", isAdmin: true};
let greeting = user.isAdmin && user.name ? `Admin ${user.name}` : "Guest";
console.log("greeting:", greeting); // Guest

// 9. Casi d'uso pratici
console.log("\n9. CASI D'USO pratici:\n");

console.log("Formattazione:");
let balance = 1500;
let formatted = balance >= 0 ? `+${balance}€` : `${balance}€`;
console.log("formatted:", formatted);

console.log("\nClasse CSS condizionale:");
let isActive = true;
let className = `button ${isActive ? 'active' : 'inactive'}`;
console.log("className:", className);

console.log("\nValidazione:");
function validateAge(age) {
  return age >= 18 ? {valid: true} : {valid: false, error: "Minorenne"};
}
console.log("validateAge(20):", validateAge(20));
console.log("validateAge(15):", validateAge(15));

console.log("\nArray/oggetti condizionali:");
let includeExtra = true;
let items = [
  "base",
  includeExtra ? "extra" : null
].filter(Boolean);
console.log("items:", items);

console.log("\nPluralizzazione:");
function pluralize(count, singular, plural) {
  return `${count} ${count === 1 ? singular : plural}`;
}
console.log(pluralize(1, "file", "files")); // "1 file"
console.log(pluralize(5, "file", "files")); // "5 files"

// 10. Best practices
console.log("\n10. BEST PRACTICES:\n");

console.log("✓ Usa per assegnazioni semplici:");
console.log(`
// ✓ Chiaro
let status = isActive ? 'ON' : 'OFF';

// ✗ Overkill
let status;
if (isActive) {
  status = 'ON';
} else {
  status = 'OFF';
}
`);

console.log("✓ Evita per logica complessa:");
console.log(`
// ✗ Difficile da leggere
let result = a ? b ? c ? d : e : f : g;

// ✓ Usa if-else
let result;
if (a) {
  if (b) {
    result = c ? d : e;
  } else {
    result = f;
  }
} else {
  result = g;
}
`);

console.log("✓ Formatta ternari annidati:");
console.log(`
// ✓ Leggibile
let grade = 
  score >= 90 ? 'A' :
  score >= 80 ? 'B' :
  score >= 70 ? 'C' :
  'F';
`);

console.log("✓ Considera alternative:");
console.log(`
// Ternario
let msg = user ? user.name : 'Guest';

// Optional chaining + ??
let msg = user?.name ?? 'Guest';

// Logical OR
let msg = user && user.name || 'Guest';
`);

console.log("✓ Non usare per side effects:");
console.log(`
// ✗ Non chiaro
condition ? doThis() : doThat();

// ✓ Esplicito
if (condition) {
  doThis();
} else {
  doThat();
}
`);

console.log("✓ Parentesi per chiarezza:");
console.log(`
// ⚠️  Ambiguo
let x = a ? b : c + d;

// ✓ Chiaro
let x = a ? b : (c + d);
let x = (a ? b : c) + d;
`);

console.log("\n⚠️  RICORDA:");
console.log("  - Sintassi: condizione ? seTrue : seFalse");
console.log("  - È un'espressione, non statement");
console.log("  - Entrambi i rami devono restituire valore");
console.log("  - Ottimo per assegnazioni semplici");
console.log("  - Evita annidamenti profondi (max 2-3 livelli)");
console.log("  - Non abusare per side effects");
console.log("  - Considera ??, ||, optional chaining come alternative");

console.log("\n✅ Usa il ternario per codice più conciso, ma leggibile!");
