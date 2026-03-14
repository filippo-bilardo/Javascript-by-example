/**
 * Esempio: Confronto con Valori Speciali
 * 
 * Comportamento degli operatori di confronto con NaN, null, undefined, Infinity.
 * Casi limite e strategie per gestirli correttamente.
 * 
 * Per eseguire: node 02.03_valori_speciali.js
 */

console.log("=== CONFRONTO CON VALORI SPECIALI ===\n");

// 1. NaN - Not a Number
console.log("1. NaN - Not a Number:\n");

console.log("Identificare NaN:");
let notANumber = NaN;
console.log("typeof NaN:", typeof NaN); // "number"!
console.log("NaN === NaN:", NaN === NaN); // false!
console.log("NaN == NaN:", NaN == NaN); // false!
console.log("isNaN(NaN):", isNaN(NaN)); // true
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true

console.log("\nOperazioni che producono NaN:");
console.log("0 / 0:", 0 / 0); // NaN
console.log("Math.sqrt(-1):", Math.sqrt(-1)); // NaN
console.log("parseInt('hello'):", parseInt("hello")); // NaN
console.log("Number('not a number'):", Number("not a number")); // NaN
console.log("undefined + 1:", undefined + 1); // NaN

console.log("\nConfronto con NaN:");
console.log("NaN == 0:", NaN == 0); // false
console.log("NaN === 0:", NaN === 0); // false
console.log("NaN > 0:", NaN > 0); // false
console.log("NaN < 0:", NaN < 0); // false
console.log("NaN >= 0:", NaN >= 0); // false
console.log("⚠️  NaN non è uguale a nulla, nemmeno a se stesso!");

// 2. isNaN() vs Number.isNaN()
console.log("\n2. isNaN() vs Number.isNaN():\n");

console.log("isNaN() - converte prima:");
console.log("isNaN('hello'):", isNaN("hello")); // true (converte a NaN)
console.log("isNaN('123'):", isNaN("123")); // false (converte a 123)
console.log("isNaN(undefined):", isNaN(undefined)); // true
console.log("isNaN({}):", isNaN({})); // true
console.log("isNaN([]):", isNaN([])); // false! ([] -> 0)

console.log("\nNumber.isNaN() - strict check:");
console.log("Number.isNaN('hello'):", Number.isNaN("hello")); // false (è stringa)
console.log("Number.isNaN('123'):", Number.isNaN("123")); // false
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true
console.log("Number.isNaN(undefined):", Number.isNaN(undefined)); // false
console.log("✓ Usa Number.isNaN() per check precisi!");

// 3. null - valore assente intenzionale
console.log("\n3. null - valore assente intenzionale:\n");

console.log("null in confronti di uguaglianza:");
console.log("null == undefined:", null == undefined); // true (caso speciale)
console.log("null === undefined:", null === undefined); // false
console.log("null == 0:", null == 0); // false
console.log("null == false:", null == false); // false
console.log("null == '':", null == ""); // false

console.log("\nnull in confronti relazionali:");
console.log("null < 1:", null < 1); // true (null -> 0)
console.log("null > -1:", null > -1); // true (null -> 0)
console.log("null >= 0:", null >= 0); // true (null -> 0)
console.log("null <= 0:", null <= 0); // true (null -> 0)
console.log("⚠️  null == 0 è false, ma null >= 0 è true!");

console.log("\nnull in operazioni aritmetiche:");
console.log("null + 5:", null + 5); // 5 (null -> 0)
console.log("null * 10:", null * 10); // 0
console.log("null / 2:", null / 2); // 0

// 4. undefined - valore non inizializzato
console.log("\n4. undefined - valore non inizializzato:\n");

console.log("undefined in confronti:");
console.log("undefined == null:", undefined == null); // true
console.log("undefined === null:", undefined === null); // false
console.log("undefined == 0:", undefined == 0); // false
console.log("undefined == false:", undefined == false); // false

console.log("\nundefined in confronti relazionali:");
console.log("undefined < 1:", undefined < 1); // false (undefined -> NaN)
console.log("undefined > 0:", undefined > 0); // false (NaN)
console.log("undefined >= 0:", undefined >= 0); // false (NaN)
console.log("⚠️  undefined diventa NaN nei confronti numerici!");

console.log("\nundefined in operazioni:");
console.log("undefined + 5:", undefined + 5); // NaN
console.log("undefined * 10:", undefined * 10); // NaN
console.log("undefined / 2:", undefined / 2); // NaN

// 5. Infinity e -Infinity
console.log("\n5. INFINITY e -INFINITY:\n");

console.log("Operazioni che producono Infinity:");
console.log("1 / 0:", 1 / 0); // Infinity
console.log("-1 / 0:", -1 / 0); // -Infinity
console.log("Math.pow(10, 1000):", Math.pow(10, 1000)); // Infinity
console.log("Number.MAX_VALUE * 2:", Number.MAX_VALUE * 2); // Infinity

console.log("\nConfronto con Infinity:");
console.log("Infinity === Infinity:", Infinity === Infinity); // true
console.log("Infinity > 1000000:", Infinity > 1000000); // true
console.log("Infinity > Number.MAX_VALUE:", Infinity > Number.MAX_VALUE); // true
console.log("-Infinity < -1000000:", -Infinity < -1000000); // true

console.log("\nInfinity vs -Infinity:");
console.log("Infinity > -Infinity:", Infinity > -Infinity); // true
console.log("Infinity + Infinity:", Infinity + Infinity); // Infinity
console.log("Infinity - Infinity:", Infinity - Infinity); // NaN!

console.log("\nVerifica Infinity:");
console.log("isFinite(Infinity):", isFinite(Infinity)); // false
console.log("isFinite(100):", isFinite(100)); // true
console.log("isFinite(NaN):", isFinite(NaN)); // false
console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity)); // false

// 6. Tabella completa dei confronti speciali
console.log("\n6. TABELLA COMPLETA confronti speciali:\n");

console.log("Confronti di uguaglianza ==:");
console.log("null == undefined:", null == undefined); // true
console.log("null == 0:", null == 0); // false
console.log("undefined == 0:", undefined == 0); // false
console.log("NaN == NaN:", NaN == NaN); // false
console.log("Infinity == Infinity:", Infinity == Infinity); // true

console.log("\nConfronto relazionale > 0:");
console.log("null > 0:", null > 0); // false
console.log("undefined > 0:", undefined > 0); // false
console.log("NaN > 0:", NaN > 0); // false
console.log("Infinity > 0:", Infinity > 0); // true
console.log("-Infinity > 0:", -Infinity > 0); // false

console.log("\nConfronto >= 0:");
console.log("null >= 0:", null >= 0); // true!
console.log("undefined >= 0:", undefined >= 0); // false
console.log("NaN >= 0:", NaN >= 0); // false
console.log("Infinity >= 0:", Infinity >= 0); // true

// 7. Validazione dei valori speciali
console.log("\n7. VALIDAZIONE dei valori speciali:\n");

function isValidNumber(value) {
  return typeof value === "number" && 
         !isNaN(value) && 
         isFinite(value);
}

console.log("isValidNumber(42):", isValidNumber(42)); // true
console.log("isValidNumber(NaN):", isValidNumber(NaN)); // false
console.log("isValidNumber(Infinity):", isValidNumber(Infinity)); // false
console.log("isValidNumber('42'):", isValidNumber("42")); // false
console.log("isValidNumber(null):", isValidNumber(null)); // false

function isSafeInteger(value) {
  return Number.isSafeInteger(value);
}

console.log("\nisSafeInteger(42):", isSafeInteger(42)); // true
console.log("isSafeInteger(9007199254740991):", 
  isSafeInteger(9007199254740991)); // true (MAX_SAFE_INTEGER)
console.log("isSafeInteger(9007199254740992):", 
  isSafeInteger(9007199254740992)); // false

// 8. Gestione sicura dei confronti
console.log("\n8. GESTIONE SICURA dei confronti:\n");

function safeCompare(a, b) {
  // Gestisce null/undefined
  if (a == null || b == null) {
    return a === b;
  }
  
  // Gestisce NaN
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return false;
  }
  
  return a === b;
}

console.log("safeCompare(5, 5):", safeCompare(5, 5)); // true
console.log("safeCompare(null, null):", safeCompare(null, null)); // true
console.log("safeCompare(null, undefined):", safeCompare(null, undefined)); // false
console.log("safeCompare(NaN, NaN):", safeCompare(NaN, NaN)); // false

function safeMax(a, b) {
  if (!isFinite(a) || !isFinite(b)) {
    throw new Error("Valori non finiti non supportati");
  }
  return a > b ? a : b;
}

console.log("\nsafeMax(10, 20):", safeMax(10, 20)); // 20
try {
  console.log("safeMax(10, Infinity):", safeMax(10, Infinity));
} catch (e) {
  console.log("Errore:", e.message);
}

// 9. Casi d'uso pratici
console.log("\n9. CASI D'USO pratici:\n");

// Validazione input form
function validateAge(age) {
  if (age == null) {
    return "Età mancante";
  }
  
  const numAge = Number(age);
  
  if (Number.isNaN(numAge)) {
    return "Età non valida";
  }
  
  if (!isFinite(numAge)) {
    return "Età deve essere finita";
  }
  
  if (numAge < 0 || numAge > 150) {
    return "Età fuori range";
  }
  
  return "OK";
}

console.log("validateAge(25):", validateAge(25)); // OK
console.log("validateAge('abc'):", validateAge("abc")); // non valida
console.log("validateAge(null):", validateAge(null)); // mancante
console.log("validateAge(Infinity):", validateAge(Infinity)); // deve essere finita

// Gestione divisioni
function safeDivide(a, b) {
  if (b === 0) {
    return null; // o throw Error
  }
  
  const result = a / b;
  
  if (!isFinite(result)) {
    return null;
  }
  
  return result;
}

console.log("\nsafeDivide(10, 2):", safeDivide(10, 2)); // 5
console.log("safeDivide(10, 0):", safeDivide(10, 0)); // null
console.log("safeDivide(Infinity, 2):", safeDivide(Infinity, 2)); // null

// Ordinamento con valori speciali
function sortWithSpecials(arr) {
  return arr.sort((a, b) => {
    // NaN sempre alla fine
    if (Number.isNaN(a)) return 1;
    if (Number.isNaN(b)) return -1;
    
    // null/undefined prima dei numeri
    if (a == null) return -1;
    if (b == null) return 1;
    
    // Confronto normale
    return a - b;
  });
}

let mixed = [5, null, NaN, 2, undefined, 8, 1];
console.log("\nArray originale:", mixed);
console.log("Array ordinato:", sortWithSpecials([...mixed]));

// 10. Best practices
console.log("\n10. BEST PRACTICES:\n");

console.log("✓ Validare sempre gli input:");
console.log(`
function process(value) {
  if (value == null) {
    throw new Error("Valore richiesto");
  }
  
  if (Number.isNaN(value)) {
    throw new Error("NaN non supportato");
  }
  
  if (!isFinite(value)) {
    throw new Error("Deve essere finito");
  }
  
  // Processa valore valido
}
`);

console.log("✓ Usa Number.isNaN() invece di isNaN():");
console.log(`
// ✗ Sbagliato
if (isNaN(value)) { ... }  // converte prima

// ✓ Corretto
if (Number.isNaN(value)) { ... }  // strict check
`);

console.log("✓ Controlla null/undefined esplicitamente:");
console.log(`
// ✓ Controllo esplicito
if (value === null || value === undefined) { ... }

// ✓ Oppure con ==
if (value == null) { ... }  // copre entrambi

// ✗ Evita
if (!value) { ... }  // cattura anche 0, false, ''
`);

console.log("✓ Usa isFinite() per verificare numeri reali:");
console.log(`
// ✓ Corretto
if (isFinite(value) && value > 0) { ... }

// Esclude NaN, Infinity, -Infinity
`);

console.log("\n⚠️  RICORDA:");
console.log("  - NaN === NaN è false!");
console.log("  - null == undefined è true");
console.log("  - null >= 0 è true, ma null == 0 è false");
console.log("  - undefined nei confronti diventa NaN");
console.log("  - Infinity è un numero, usa isFinite()");
console.log("  - typeof NaN è 'number'!");

console.log("\n✅ Valida sempre prima di confrontare!");
