/**
 * Esempio: Uguaglianza e Confronti
 * 
 * JavaScript ha due operatori di uguaglianza: == (loose) e === (strict).
 * Comprendere le differenze è fondamentale per evitare bug.
 * 
 * Per eseguire: node 04.03_uguaglianza_confronti.js
 */

console.log("=== UGUAGLIANZA E CONFRONTI ===\n");

// 1. Uguaglianza stretta (===) - Strict Equality
console.log("1. UGUAGLIANZA STRETTA (===):\n");

console.log("Stesso tipo e valore:");
console.log("5 === 5:", 5 === 5); // true
console.log("'ciao' === 'ciao':", "ciao" === "ciao"); // true
console.log("true === true:", true === true); // true

console.log("\nTipo diverso (sempre false):");
console.log("5 === '5':", 5 === "5"); // false
console.log("0 === false:", 0 === false); // false
console.log("'' === false:", "" === false); // false
console.log("null === undefined:", null === undefined); // false

console.log("\nValori speciali:");
console.log("NaN === NaN:", NaN === NaN); // false (unico caso!)
console.log("Infinity === Infinity:", Infinity === Infinity); // true
console.log("+0 === -0:", +0 === -0); // true

console.log("\nOggetti e array (confronto per riferimento):");
let obj1 = { a: 1 };
let obj2 = { a: 1 };
let obj3 = obj1;

console.log("{ a: 1 } === { a: 1 }:", obj1 === obj2); // false (oggetti diversi)
console.log("obj1 === obj3:", obj1 === obj3); // true (stesso riferimento)

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = arr1;

console.log("[1,2,3] === [1,2,3]:", arr1 === arr2); // false
console.log("arr1 === arr3:", arr1 === arr3); // true

// 2. Uguaglianza debole (==) - Loose Equality
console.log("\n2. UGUAGLIANZA DEBOLE (==):\n");

console.log("Con conversione di tipo:");
console.log("5 == '5':", 5 == "5"); // true (converte stringa a numero)
console.log("0 == false:", 0 == false); // true
console.log("'' == false:", "" == false); // true
console.log("'0' == false:", "0" == false); // true

console.log("\nNull e undefined (caso speciale):");
console.log("null == undefined:", null == undefined); // true
console.log("null == 0:", null == 0); // false
console.log("undefined == 0:", undefined == 0); // false
console.log("null == false:", null == false); // false

console.log("\nStringhe e numeri:");
console.log("'42' == 42:", "42" == 42); // true
console.log("'  42  ' == 42:", "  42  " == 42); // true (trim)
console.log("'042' == 42:", "042" == 42); // true

console.log("\nBoolean:");
console.log("true == 1:", true == 1); // true
console.log("false == 0:", false == 0); // true
console.log("true == '1':", true == "1"); // true
console.log("false == '':", false == ""); // true

// 3. Tabella completa == vs ===
console.log("\n3. TABELLA COMPARATIVA == vs ===:\n");

const comparisons = [
  [5, 5, "Stesso valore e tipo"],
  [5, "5", "Numero vs stringa"],
  [0, false, "Zero vs false"],
  [0, "", "Zero vs stringa vuota"],
  ["", false, "Stringa vuota vs false"],
  ["0", false, "Stringa '0' vs false"],
  ["0", 0, "Stringa '0' vs zero"],
  [null, undefined, "Null vs undefined"],
  [null, 0, "Null vs zero"],
  [NaN, NaN, "NaN vs NaN"],
  [[], [], "Array vuoti (diversi)"],
];

console.log("Confronto".padEnd(30), "==", "===");
console.log("-".repeat(45));

comparisons.forEach(([a, b, desc]) => {
  const loose = a == b;
  const strict = a === b;
  console.log(
    desc.padEnd(30),
    String(loose).padEnd(5),
    String(strict)
  );
});

// 4. Disuguaglianza
console.log("\n4. DISUGUAGLIANZA (!= e !==):\n");

console.log("Disuguaglianza debole (!=):");
console.log("5 != '5':", 5 != "5"); // false (converte)
console.log("0 != false:", 0 != false); // false
console.log("null != undefined:", null != undefined); // false

console.log("\nDisuguaglianza stretta (!==):");
console.log("5 !== '5':", 5 !== "5"); // true
console.log("0 !== false:", 0 !== false); // true
console.log("null !== undefined:", null !== undefined); // true

// 5. Operatori di confronto relazionali
console.log("\n5. CONFRONTI RELAZIONALI (<, >, <=, >=):\n");

console.log("Numeri:");
console.log("10 > 5:", 10 > 5); // true
console.log("10 < 20:", 10 < 20); // true
console.log("10 >= 10:", 10 >= 10); // true
console.log("10 <= 9:", 10 <= 9); // false

console.log("\nStringhe (ordine lessicografico):");
console.log("'a' < 'b':", "a" < "b"); // true
console.log("'apple' < 'banana':", "apple" < "banana"); // true
console.log("'10' < '2':", "10" < "2"); // true (lessicografico, non numerico!)
console.log("'10' < '9':", "10" < "9"); // true

console.log("\nStringhe vs numeri (converte a numero):");
console.log("'10' < 20:", "10" < 20); // true (converte '10' a 10)
console.log("'100' > 50:", "100" > 50); // true
console.log("'abc' > 5:", "abc" > 5); // false (NaN)

console.log("\nBoolean (converte a 0 o 1):");
console.log("true > false:", true > false); // true (1 > 0)
console.log("true >= 1:", true >= 1); // true

console.log("\nNull e undefined:");
console.log("null >= 0:", null >= 0); // true (null -> 0)
console.log("null == 0:", null == 0); // false (caso speciale!)
console.log("undefined > 0:", undefined > 0); // false (NaN)
console.log("undefined < 0:", undefined < 0); // false (NaN)

// 6. Casi particolari e trappole
console.log("\n6. CASI PARTICOLARI e TRAPPOLE:\n");

console.log("Array e stringhe:");
console.log("[1,2,3] == '1,2,3':", [1, 2, 3] == "1,2,3"); // true
console.log("[1] == 1:", [1] == 1); // true
console.log("[] == '':", [] == ""); // true
console.log("[] == 0:", [] == 0); // true
console.log("[] == false:", [] == false); // true
console.log("![] == false:", ![] == false); // true (! converte [] a false)

console.log("\nStringhe particolari:");
console.log("'  ' == 0:", "  " == 0); // true (spazi -> 0)
console.log("'\\n' == 0:", "\n" == 0); // true (newline -> 0)
console.log("'\\t' == 0:", "\t" == 0); // true (tab -> 0)

console.log("\nOggetti:");
console.log("{} == {}:", {} == {}); // false (riferimenti diversi)
console.log("{} === {}:", {} === {}); // false

// 7. Object.is() (ES6) - ancora più rigoroso
console.log("\n7. Object.is() - CONFRONTO RIGOROSISSIMO:\n");

console.log("Comportamento standard:");
console.log("Object.is(5, 5):", Object.is(5, 5)); // true
console.log("Object.is(5, '5'):", Object.is(5, "5")); // false

console.log("\nCasi speciali dove Object.is() è diverso da ===:");
console.log("NaN === NaN:", NaN === NaN); // false
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN)); // true

console.log("\n+0 === -0:", +0 === -0); // true
console.log("Object.is(+0, -0):", Object.is(+0, -0)); // false

// 8. Confronto profondo di oggetti
console.log("\n8. CONFRONTO PROFONDO di oggetti:\n");

function deepEqual(obj1, obj2) {
  // Stesso riferimento
  if (obj1 === obj2) return true;
  
  // Tipi diversi o null
  if (typeof obj1 !== "object" || typeof obj2 !== "object" || 
      obj1 === null || obj2 === null) {
    return obj1 === obj2;
  }
  
  // Array
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) return false;
    for (let i = 0; i < obj1.length; i++) {
      if (!deepEqual(obj1[i], obj2[i])) return false;
    }
    return true;
  }
  
  // Oggetti
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) return false;
  
  for (let key of keys1) {
    if (!keys2.includes(key)) return false;
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }
  
  return true;
}

let o1 = { a: 1, b: { c: 2 } };
let o2 = { a: 1, b: { c: 2 } };
let o3 = { a: 1, b: { c: 3 } };

console.log("o1 === o2:", o1 === o2); // false
console.log("deepEqual(o1, o2):", deepEqual(o1, o2)); // true
console.log("deepEqual(o1, o3):", deepEqual(o1, o3)); // false

let a1 = [1, 2, [3, 4]];
let a2 = [1, 2, [3, 4]];
let a3 = [1, 2, [3, 5]];

console.log("\na1 === a2:", a1 === a2); // false
console.log("deepEqual(a1, a2):", deepEqual(a1, a2)); // true
console.log("deepEqual(a1, a3):", deepEqual(a1, a3)); // false

// 9. Best practices
console.log("\n9. BEST PRACTICES:\n");

console.log("✓ USARE === e !== (strict equality)");
console.log("  - Più prevedibile");
console.log("  - Nessuna conversione nascosta");
console.log("  - Meno bug");

console.log("\n✓ Evitare == e != (loose equality)");
console.log("  - Conversioni implicite confuse");
console.log("  - Comportamento controintuitivo");
console.log("  - Difficile da debuggare");

console.log("\n✓ Confrontare stringhe numeriche:");
console.log("  Number(a) === Number(b)");
console.log("  invece di a == b");

console.log("\n✓ Verificare NaN:");
console.log("  Number.isNaN(value)");
console.log("  non value === NaN");

console.log("\n✓ Confrontare oggetti:");
console.log("  Implementare funzione deepEqual()");
console.log("  O usare librerie (lodash _.isEqual)");

console.log("\n✓ Ordinare stringhe:");
console.log("  string1.localeCompare(string2)");
console.log("  invece di string1 < string2");

// 10. Esempi pratici corretti
console.log("\n10. ESEMPI PRATICI:\n");

// Validazione input
function validateInput(value) {
  // ✓ Corretto
  if (typeof value === "string" && value.trim() !== "") {
    return true;
  }
  return false;
  
  // ✗ Da evitare
  // if (value == true) { ... }
}

console.log("validateInput('hello'):", validateInput("hello"));
console.log("validateInput(''):", validateInput(""));

// Verifica null/undefined
function processValue(value) {
  // ✓ Corretto
  if (value === null || value === undefined) {
    return "Valore mancante";
  }
  
  // Alternativa con nullish coalescing
  return value ?? "Default";
}

console.log("processValue(null):", processValue(null));
console.log("processValue(0):", processValue(0));

// Confronto numeri con tolleranza
function numbersEqual(a, b, epsilon = 0.0001) {
  return Math.abs(a - b) < epsilon;
}

console.log("\n0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3); // false
console.log("numbersEqual(0.1 + 0.2, 0.3):", numbersEqual(0.1 + 0.2, 0.3)); // true

console.log("\n💡 Ricorda:");
console.log("   === è quasi sempre la scelta giusta!");
console.log("   Usa == solo se sai ESATTAMENTE cosa stai facendo");
console.log("   Per null/undefined insieme, usa value == null (caso speciale ok)");
