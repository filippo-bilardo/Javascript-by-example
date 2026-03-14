/**
 * Esempio: Conversione Esplicita (Casting)
 * 
 * La conversione esplicita permette di controllare precisamente
 * come i valori vengono convertiti tra tipi diversi.
 * 
 * Per eseguire: node 04.02_conversione_esplicita.js
 */

console.log("=== CONVERSIONE ESPLICITA (CASTING) ===\n");

// 1. Conversione esplicita a STRING
console.log("1. Conversione esplicita a STRING:\n");

// String() constructor - metodo più esplicito
console.log("Con String():");
console.log("String(42) =", String(42)); // "42"
console.log("String(true) =", String(true)); // "true"
console.log("String(false) =", String(false)); // "false"
console.log("String(null) =", String(null)); // "null"
console.log("String(undefined) =", String(undefined)); // "undefined"
console.log("String([1,2,3]) =", String([1, 2, 3])); // "1,2,3"
console.log("String({a: 1}) =", String({ a: 1 })); // "[object Object]"

// toString() method
console.log("\nCon toString():");
let num = 42;
console.log("(42).toString() =", num.toString()); // "42"

let bool = true;
console.log("true.toString() =", bool.toString()); // "true"

let arr = [1, 2, 3];
console.log("[1,2,3].toString() =", arr.toString()); // "1,2,3"

// toString con base (solo per numeri)
console.log("\ntoString() con base numerica:");
let numero = 255;
console.log("255.toString(10) =", numero.toString(10)); // "255" (decimale)
console.log("255.toString(2) =", numero.toString(2)); // "11111111" (binario)
console.log("255.toString(8) =", numero.toString(8)); // "377" (ottale)
console.log("255.toString(16) =", numero.toString(16)); // "ff" (esadecimale)

// Template literals
console.log("\nCon template literals:");
console.log(`${42}` + " = ", `${42}`); // "42"
console.log(`${true}` + " = ", `${true}`); // "true"
console.log(`${null}` + " = ", `${null}`); // "null"

// toFixed, toPrecision, toExponential
console.log("\nFormattazione numerica:");
let pi = 3.14159265359;
console.log("toFixed(2) =", pi.toFixed(2)); // "3.14" (string!)
console.log("toPrecision(4) =", pi.toPrecision(4)); // "3.142"
console.log("toExponential(2) =", pi.toExponential(2)); // "3.14e+0"

// 2. Conversione esplicita a NUMBER
console.log("\n2. Conversione esplicita a NUMBER:\n");

// Number() constructor - più rigoroso
console.log("Con Number():");
console.log("Number('42') =", Number("42")); // 42
console.log("Number('3.14') =", Number("3.14")); // 3.14
console.log("Number('') =", Number("")); // 0
console.log("Number('   123   ') =", Number("   123   ")); // 123 (trim automatico)
console.log("Number('42px') =", Number("42px")); // NaN
console.log("Number(true) =", Number(true)); // 1
console.log("Number(false) =", Number(false)); // 0
console.log("Number(null) =", Number(null)); // 0
console.log("Number(undefined) =", Number(undefined)); // NaN
console.log("Number([]) =", Number([])); // 0
console.log("Number([42]) =", Number([42])); // 42
console.log("Number([1,2]) =", Number([1, 2])); // NaN

// parseInt() - parsing intero
console.log("\nCon parseInt():");
console.log("parseInt('42') =", parseInt("42")); // 42
console.log("parseInt('3.14') =", parseInt("3.14")); // 3 (ignora decimali)
console.log("parseInt('42px') =", parseInt("42px")); // 42 (ferma ai non-numerici)
console.log("parseInt('px42') =", parseInt("px42")); // NaN
console.log("parseInt('   100   ') =", parseInt("   100   ")); // 100
console.log("parseInt('010') =", parseInt("010")); // 10 (non ottale in ES5+)

// parseInt con base
console.log("\nparseInt() con base:");
console.log("parseInt('FF', 16) =", parseInt("FF", 16)); // 255
console.log("parseInt('1010', 2) =", parseInt("1010", 2)); // 10
console.log("parseInt('77', 8) =", parseInt("77", 8)); // 63
console.log("parseInt('10', 10) =", parseInt("10", 10)); // 10

// parseFloat() - parsing decimale
console.log("\nCon parseFloat():");
console.log("parseFloat('3.14') =", parseFloat("3.14")); // 3.14
console.log("parseFloat('3.14.15') =", parseFloat("3.14.15")); // 3.14 (ferma al secondo punto)
console.log("parseFloat('42') =", parseFloat("42")); // 42
console.log("parseFloat('42px') =", parseFloat("42px")); // 42
console.log("parseFloat('3.14e2') =", parseFloat("3.14e2")); // 314
console.log("parseFloat('   3.14   ') =", parseFloat("   3.14   ")); // 3.14

// Operatore unario + (più conciso ma meno chiaro)
console.log("\nCon operatore unario +:");
console.log("+'42' =", +"42"); // 42
console.log("+'3.14' =", +"3.14"); // 3.14
console.log("+'42px' =", +"42px"); // NaN
console.log("+true =", +true); // 1
console.log("+false =", +false); // 0
console.log("+null =", +null); // 0
console.log("+'' =", +""); // 0

// 3. Confronto metodi di conversione a Number
console.log("\n3. CONFRONTO metodi Number:\n");

const testStrings = ["42", "3.14", "42px", "px42", "", "  10  ", "0xFF", "true"];

console.log("Valore".padEnd(10), "Number()", "parseInt()", "parseFloat()", "+");
console.log("-".repeat(60));

testStrings.forEach(str => {
  const n1 = Number(str);
  const n2 = parseInt(str);
  const n3 = parseFloat(str);
  const n4 = +str;
  
  console.log(
    `'${str}'`.padEnd(10),
    String(n1).padEnd(10),
    String(n2).padEnd(12),
    String(n3).padEnd(14),
    String(n4)
  );
});

// 4. Conversione esplicita a BOOLEAN
console.log("\n4. Conversione esplicita a BOOLEAN:\n");

// Boolean() constructor
console.log("Con Boolean():");
console.log("Boolean(1) =", Boolean(1)); // true
console.log("Boolean(0) =", Boolean(0)); // false
console.log("Boolean('ciao') =", Boolean("ciao")); // true
console.log("Boolean('') =", Boolean("")); // false
console.log("Boolean('0') =", Boolean("0")); // true (attenzione!)
console.log("Boolean('false') =", Boolean("false")); // true (attenzione!)
console.log("Boolean(null) =", Boolean(null)); // false
console.log("Boolean(undefined) =", Boolean(undefined)); // false
console.log("Boolean([]) =", Boolean([])); // true
console.log("Boolean({}) =", Boolean({})); // true
console.log("Boolean(NaN) =", Boolean(NaN)); // false

// Doppia negazione !! (più conciso)
console.log("\nCon doppia negazione !!:");
console.log("!!1 =", !!1); // true
console.log("!!0 =", !!0); // false
console.log("!!'ciao' =", !!"ciao"); // true
console.log("!!'' =", !!""); // false
console.log("!!null =", !!null); // false
console.log("!![] =", !![]); // true

// 5. Conversione di Array
console.log("\n5. Conversione di ARRAY:\n");

let array = [1, 2, 3, 4, 5];

// Array to String
console.log("Array to String:");
console.log("String([1,2,3]) =", String(array)); // "1,2,3"
console.log("array.toString() =", array.toString()); // "1,2,3"
console.log("array.join() =", array.join()); // "1,2,3"
console.log("array.join('-') =", array.join("-")); // "1-2-3-4-5"
console.log("array.join('') =", array.join("")); // "12345"

// Array to Number
console.log("\nArray to Number:");
console.log("Number([]) =", Number([])); // 0
console.log("Number([42]) =", Number([42])); // 42
console.log("Number([1,2]) =", Number([1, 2])); // NaN

// 6. Conversione di Object
console.log("\n6. Conversione di OBJECT:\n");

let obj = { a: 1, b: 2 };

// Object to String
console.log("Object to String:");
console.log("String({a:1,b:2}) =", String(obj)); // "[object Object]"
console.log("obj.toString() =", obj.toString()); // "[object Object]"
console.log("JSON.stringify() =", JSON.stringify(obj)); // '{"a":1,"b":2}' (meglio!)

// Object personalizzato con toString e valueOf
let customObj = {
  value: 42,
  toString: function() {
    return `Valore: ${this.value}`;
  },
  valueOf: function() {
    return this.value;
  }
};

console.log("\nObject personalizzato:");
console.log("String(customObj) =", String(customObj)); // "Valore: 42"
console.log("Number(customObj) =", Number(customObj)); // 42
console.log("customObj + '' =", customObj + ""); // "42" (usa valueOf)
console.log("customObj + 10 =", customObj + 10); // 52

// 7. Conversione Date
console.log("\n7. Conversione di DATE:\n");

let now = new Date();

console.log("Date to String:");
console.log("String(date) =", String(now));
console.log("date.toString() =", now.toString());
console.log("date.toISOString() =", now.toISOString());
console.log("date.toLocaleDateString() =", now.toLocaleDateString());

console.log("\nDate to Number:");
console.log("Number(date) =", Number(now)); // Timestamp in millisecondi
console.log("+date =", +now); // Timestamp
console.log("date.getTime() =", now.getTime()); // Timestamp (più esplicito)

// 8. Verifica del risultato
console.log("\n8. VERIFICA conversioni:\n");

// isNaN e Number.isNaN
console.log("Verifica NaN:");
console.log("isNaN('ciao') =", isNaN("ciao")); // true (converte prima)
console.log("Number.isNaN('ciao') =", Number.isNaN("ciao")); // false (più rigoroso)
console.log("isNaN(NaN) =", isNaN(NaN)); // true
console.log("Number.isNaN(NaN) =", Number.isNaN(NaN)); // true

// isFinite e Number.isFinite
console.log("\nVerifica finito:");
console.log("isFinite(42) =", isFinite(42)); // true
console.log("isFinite('42') =", isFinite("42")); // true (converte)
console.log("Number.isFinite('42') =", Number.isFinite("42")); // false (rigoroso)
console.log("isFinite(Infinity) =", isFinite(Infinity)); // false

// 9. Casi d'uso pratici
console.log("\n9. Casi d'uso PRATICI:\n");

// Validazione input utente
function parseUserInput(input) {
  // Converte a numero e valida
  const num = Number(input);
  
  if (Number.isNaN(num)) {
    return { valid: false, error: "Non è un numero valido" };
  }
  
  if (!Number.isFinite(num)) {
    return { valid: false, error: "Il numero non è finito" };
  }
  
  return { valid: true, value: num };
}

console.log("parseUserInput('42'):", parseUserInput("42"));
console.log("parseUserInput('abc'):", parseUserInput("abc"));
console.log("parseUserInput('Infinity'):", parseUserInput("Infinity"));

// Formattazione sicura
function formatCurrency(value) {
  const num = Number(value);
  if (Number.isNaN(num)) return "N/A";
  return `€ ${num.toFixed(2)}`;
}

console.log("\nformatCurrency('123.456'):", formatCurrency("123.456"));
console.log("formatCurrency('abc'):", formatCurrency("abc"));

// Parsing con fallback
function safeParseInt(value, defaultValue = 0) {
  const parsed = parseInt(value, 10);
  return Number.isNaN(parsed) ? defaultValue : parsed;
}

console.log("\nsafeParseInt('42'):", safeParseInt("42"));
console.log("safeParseInt('abc'):", safeParseInt("abc"));
console.log("safeParseInt('abc', 10):", safeParseInt("abc", 10));

// 10. Best practices
console.log("\n10. BEST PRACTICES:\n");

console.log("✓ Preferire metodi espliciti:");
console.log("  - String(val) invece di val + ''");
console.log("  - Number(val) invece di +val");
console.log("  - Boolean(val) invece di !!val (quando serve chiarezza)");

console.log("\n✓ Parsing stringhe numeriche:");
console.log("  - Number() per validazione rigorosa");
console.log("  - parseInt() per estrarre interi da stringhe");
console.log("  - parseFloat() per estrarre decimali");
console.log("  - Specificare sempre la base in parseInt()");

console.log("\n✓ Validazione:");
console.log("  - Number.isNaN() invece di isNaN()");
console.log("  - Number.isFinite() invece di isFinite()");
console.log("  - Verificare typeof prima di convertire");

console.log("\n⚠️  Attenzione:");
console.log("  - Boolean('0') è true!");
console.log("  - Boolean('false') è true!");
console.log("  - Number('') è 0!");
console.log("  - parseInt('0xFF') riconosce esadecimale");

console.log("\n💡 Esempio codice pulito:");
console.log(`
function processAge(input) {
  // 1. Converti esplicitamente
  const age = Number(input);
  
  // 2. Valida
  if (Number.isNaN(age)) {
    throw new Error("Età non valida");
  }
  
  if (age < 0 || age > 150) {
    throw new Error("Età fuori range");
  }
  
  // 3. Usa
  return age >= 18 ? "Adulto" : "Minore";
}
`);

console.log("\n✅ Conversione esplicita = Codice più chiaro e meno bug!");
