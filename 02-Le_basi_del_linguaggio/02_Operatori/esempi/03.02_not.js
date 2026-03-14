/**
 * Esempio: Operatore Logico NOT (!)
 * 
 * Operatore di negazione logica.
 * Conversione a boolean e doppia negazione.
 * 
 * Per eseguire: node 03.02_not.js
 */

console.log("=== OPERATORE LOGICO NOT (!) ===\n");

// 1. NOT logico - negazione
console.log("1. NOT LOGICO - negazione:\n");

console.log("Tabella di verità NOT:");
console.log("!true:", !true); // false
console.log("!false:", !false); // true
console.log("✓ NOT inverte il valore booleano");

console.log("\nCon variabili:");
let isOpen = true;
console.log("isOpen:", isOpen); // true
console.log("!isOpen:", !isOpen); // false
console.log("Negozio chiuso?", !isOpen); // false

let hasError = false;
console.log("hasError:", hasError); // false
console.log("!hasError:", !hasError); // true
console.log("Tutto ok?", !hasError); // true

// 2. NOT con valori non-boolean (conversione)
console.log("\n2. NOT con valori non-boolean:\n");

console.log("Con valori falsy:");
console.log("!0:", !0); // true
console.log("!'':", !""); // true
console.log("!null:", !null); // true
console.log("!undefined:", !undefined); // true
console.log("!NaN:", !NaN); // true
console.log("✓ Falsy diventa true");

console.log("\nCon valori truthy:");
console.log("!1:", !1); // false
console.log("!'hello':", !"hello"); // false
console.log("![]:", ![]); // false
console.log("!{}:", !{}); // false
console.log("!function(){}:", !function(){}); // false
console.log("✓ Truthy diventa false");

// 3. Doppia negazione (!!) - conversione a boolean
console.log("\n3. DOPPIA NEGAZIONE (!!) - conversione a boolean:\n");

console.log("Converte valori a boolean:");
console.log("!!true:", !!true); // true
console.log("!!false:", !!false); // false
console.log("!!1:", !!1); // true
console.log("!!0:", !!0); // false
console.log("!!'hello':", !!"hello"); // true
console.log("!!'':", !!""); // false
console.log("!!null:", !!null); // false
console.log("!!undefined:", !!undefined); // false
console.log("!![]:", !![]); // true
console.log("✓ !! equivale a Boolean()");

console.log("\nConfonto con Boolean():");
let value = "test";
console.log("!!value:", !!value); // true
console.log("Boolean(value):", Boolean(value)); // true
console.log("Sono equivalenti!");

// 4. NOT in condizioni
console.log("\n4. NOT in condizioni:\n");

let isEmpty = true;
if (!isEmpty) {
  console.log("Lista non vuota");
} else {
  console.log("Lista vuota"); // Eseguito
}

let isLoggedIn = false;
if (!isLoggedIn) {
  console.log("✓ Reindirizza al login"); // Eseguito
}

console.log("\nVerifica assenza:");
let user = null;
if (!user) {
  console.log("✓ Utente non trovato"); // Eseguito
}

let count = 0;
if (!count) {
  console.log("✓ Nessun elemento"); // Eseguito (0 è falsy!)
}

// 5. NOT con operatori di confronto
console.log("\n5. NOT con operatori di confronto:\n");

let age = 15;
console.log("age >= 18:", age >= 18); // false
console.log("!(age >= 18):", !(age >= 18)); // true (minorenne)

console.log("\nNegazione di uguaglianza:");
console.log("5 === 5:", 5 === 5); // true
console.log("!(5 === 5):", !(5 === 5)); // false

console.log("\n⚠️  Meglio usare operatori specifici:");
console.log("!(a === b) → meglio: a !== b");
console.log("!(a < b) → meglio: a >= b");

// 6. NOT multipli e precedenza
console.log("\n6. NOT MULTIPLI e precedenza:\n");

console.log("NOT multipli:");
console.log("!true:", !true); // false
console.log("!!true:", !!true); // true
console.log("!!!true:", !!!true); // false
console.log("!!!!true:", !!!!true); // true

console.log("\nPrecedenza operatori:");
console.log("!false && true:", !false && true); // true (! ha precedenza)
console.log("!(false && true):", !(false && true)); // true
console.log("!false || false:", !false || false); // true

console.log("\nUsa parentesi per chiarezza:");
let a = true, b = false;
console.log("!a && b:", !a && b); // false
console.log("!(a && b):", !(a && b)); // true
console.log("Sono diversi!");

// 7. Leggi di De Morgan
console.log("\n7. LEGGI DI DE MORGAN:\n");

console.log("Legge 1: !(A && B) === !A || !B");
let x = true, y = false;
console.log(`!(${x} && ${y}):`, !(x && y)); // true
console.log(`!${x} || !${y}:`, !x || !y); // true
console.log("Sono equivalenti!");

console.log("\nLegge 2: !(A || B) === !A && !B");
console.log(`!(${x} || ${y}):`, !(x || y)); // false
console.log(`!${x} && !${y}:`, !x && !y); // false
console.log("Sono equivalenti!");

console.log("\nApplicazione pratica:");
// Invece di: !(age < 18 || age > 65)
// Usa: age >= 18 && age <= 65
let age2 = 25;
console.log("!(age < 18 || age > 65):", !(age2 < 18 || age2 > 65));
console.log("age >= 18 && age <= 65:", age2 >= 18 && age2 <= 65);

// 8. Pattern comuni con NOT
console.log("\n8. PATTERN COMUNI con NOT:\n");

console.log("Check esistenza:");
let username = "";
if (!username) {
  console.log("✓ Username mancante");
}

console.log("\nCheck array vuoto:");
let items = [];
if (!items.length) {
  console.log("✓ Array vuoto"); // length = 0 (falsy)
}

console.log("\nToggle boolean:");
let isVisible = true;
console.log("Prima:", isVisible);
isVisible = !isVisible;
console.log("Dopo toggle:", isVisible);

console.log("\nValidazione con NOT:");
function isInvalid(value) {
  return !value || typeof value !== "string" || value.trim().length === 0;
}
console.log("isInvalid(''):", isInvalid("")); // true
console.log("isInvalid('  '):", isInvalid("  ")); // true
console.log("isInvalid('ok'):", isInvalid("ok")); // false

// 9. Trappole comuni con NOT
console.log("\n9. TRAPPOLE COMUNI con NOT:\n");

console.log("⚠️  NOT con 0 (falsy):");
let counter = 0;
if (!counter) {
  console.log("Eseguito! (0 è falsy)"); // Può essere un bug!
}
console.log("Meglio: if (counter === 0) { }");

console.log("\n⚠️  NOT con stringhe vuote:");
let input = "";
if (!input) {
  console.log("Eseguito! (stringa vuota è falsy)");
}
console.log("Meglio: if (input === '') { } o if (input.length === 0) { }");

console.log("\n⚠️  NOT con array vuoti:");
let list = [];
console.log("![]:", ![]); // false ([] è truthy!)
console.log("![].length:", ![].length); // true (0 è falsy)
console.log("Usa .length per check array vuoti!");

console.log("\n⚠️  NOT con oggetti:");
let obj = {};
console.log("!{}:", !{}); // false ({} è sempre truthy!)
console.log("!Object.keys({}).length:", !Object.keys({}).length); // true
console.log("Usa Object.keys() per check oggetti vuoti!");

// 10. Best practices
console.log("\n10. BEST PRACTICES:\n");

console.log("✓ Nomi variabili positive:");
console.log(`
// ✗ Doppia negazione confusa
if (!isNotReady) { }

// ✓ Nome positivo
if (isReady) { }
`);

console.log("✓ Usa operatori specifici invece di NOT:");
console.log(`
// ⚠️  Verbose
if (!(a === b)) { }

// ✓ Chiaro
if (a !== b) { }

// ⚠️  Confuso
if (!(a < b)) { }

// ✓ Chiaro
if (a >= b) { }
`);

console.log("✓ Evita NOT multipli:");
console.log(`
// ✗ Confuso
if (!!!value) { }

// ✓ Chiaro
if (!value) { }
`);

console.log("✓ Preferisci esplicitezza a !:");
console.log(`
// ⚠️  Implicito (può includere 0, '', false)
if (!value) { }

// ✓ Esplicito
if (value === null || value === undefined) { }
if (value === 0) { }
if (value === '') { }
`);

console.log("✓ Usa !! per conversione esplicita:");
console.log(`
// ✓ Converte a boolean
const isValid = !!value;
const hasItems = !!array.length;

// Equivale a:
const isValid = Boolean(value);
`);

console.log("✓ Documenta logica negativa complessa:");
console.log(`
// ✓ Con commento
// Escludi minori e pensionati
if (!(age < 18 || age > 65)) { }

// ✓ Meglio: riscrivi positivamente
if (age >= 18 && age <= 65) { }
`);

console.log("\n⚠️  RICORDA:");
console.log("  - ! inverte il valore booleano");
console.log("  - ! converte automaticamente a boolean");
console.log("  - !! converte esplicitamente a boolean");
console.log("  - [] e {} sono truthy (! li rende false)");
console.log("  - 0, '', null, undefined sono falsy");
console.log("  - ! ha precedenza alta");
console.log("  - Usa operatori specifici (!=, !==, >=) invece di !(==, ===, <)");

console.log("\n✅ NOT è potente ma usa con attenzione!");
