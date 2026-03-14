/**
 * Esempio: Operatori di Uguaglianza == e ===
 * 
 * Differenza tra uguaglianza debole (==) con conversione di tipo
 * e uguaglianza stretta (===) senza conversione.
 * 
 * Per eseguire: node 02.01_uguaglianza.js
 */

console.log("=== OPERATORI DI UGUAGLIANZA == e === ===\n");

// 1. Uguaglianza stretta (===)
console.log("1. UGUAGLIANZA STRETTA (===):\n");

console.log("Stesso tipo e valore:");
console.log("5 === 5:", 5 === 5); // true
console.log("'hello' === 'hello':", "hello" === "hello"); // true
console.log("true === true:", true === true); // true

console.log("\nTipi diversi (sempre false):");
console.log("5 === '5':", 5 === "5"); // false (number vs string)
console.log("0 === false:", 0 === false); // false (number vs boolean)
console.log("'' === false:", "" === false); // false (string vs boolean)
console.log("null === undefined:", null === undefined); // false

console.log("\nOggetti e array (confronto per riferimento):");
let obj1 = { a: 1 };
let obj2 = { a: 1 };
let obj3 = obj1;
console.log("{ a: 1 } === { a: 1 }:", obj1 === obj2); // false (oggetti diversi)
console.log("obj1 === obj3:", obj1 === obj3); // true (stesso riferimento)

let arr1 = [1, 2];
let arr2 = [1, 2];
console.log("[1, 2] === [1, 2]:", arr1 === arr2); // false

// 2. Uguaglianza debole (==)
console.log("\n2. UGUAGLIANZA DEBOLE (==):\n");

console.log("Con conversione di tipo:");
console.log("5 == '5':", 5 == "5"); // true (stringa -> numero)
console.log("0 == false:", 0 == false); // true
console.log("'' == false:", "" == false); // true
console.log("'0' == false:", "0" == false); // true
console.log("1 == true:", 1 == true); // true

console.log("\nNumeri e stringhe:");
console.log("'42' == 42:", "42" == 42); // true
console.log("'  100  ' == 100:", "  100  " == 100); // true (trim auto)
console.log("'3.14' == 3.14:", "3.14" == 3.14); // true

// 3. Casi speciali: null e undefined
console.log("\n3. CASI SPECIALI: null e undefined:\n");

console.log("Con ==:");
console.log("null == undefined:", null == undefined); // true (caso speciale!)
console.log("null == 0:", null == 0); // false
console.log("undefined == 0:", undefined == 0); // false
console.log("null == false:", null == false); // false
console.log("undefined == false:", undefined == false); // false

console.log("\nCon ===:");
console.log("null === undefined:", null === undefined); // false
console.log("null === null:", null === null); // true
console.log("undefined === undefined:", undefined === undefined); // true

// 4. Casi speciali: NaN
console.log("\n4. CASI SPECIALI: NaN:\n");

console.log("NaN con qualsiasi operatore:");
console.log("NaN == NaN:", NaN == NaN); // false!
console.log("NaN === NaN:", NaN === NaN); // false!
console.log("NaN != NaN:", NaN != NaN); // true

console.log("\nVerifica corretta di NaN:");
let notANumber = 0 / 0;
console.log("isNaN(0 / 0):", isNaN(notANumber)); // true
console.log("Number.isNaN(0 / 0):", Number.isNaN(notANumber)); // true (più rigoroso)
console.log("Number.isNaN('hello'):", Number.isNaN("hello")); // false
console.log("isNaN('hello'):", isNaN("hello")); // true (converte prima)

// 5. Tabella comparativa completa
console.log("\n5. TABELLA COMPARATIVA == vs ===:\n");

const comparisons = [
  [5, 5, "Stesso valore e tipo"],
  [5, "5", "Numero vs stringa numerica"],
  [0, false, "Zero vs false"],
  [0, "", "Zero vs stringa vuota"],
  ["", false, "Stringa vuota vs false"],
  ["0", 0, "Stringa '0' vs zero"],
  ["0", false, "Stringa '0' vs false"],
  [1, true, "Uno vs true"],
  [null, undefined, "Null vs undefined"],
  [null, 0, "Null vs zero"],
  [[], [], "Array vuoti (diversi)"],
  [[1], [1], "Array con stesso contenuto"],
  [{}, {}, "Oggetti vuoti (diversi)"],
];

console.log("Confronto".padEnd(35), "==".padEnd(8), "===");
console.log("-".repeat(50));

comparisons.forEach(([a, b, desc]) => {
  const loose = a == b;
  const strict = a === b;
  const looseStr = loose ? "true " : "false";
  const strictStr = strict ? "true " : "false";
  console.log(desc.padEnd(35), looseStr.padEnd(8), strictStr);
});

// 6. Disuguaglianza != e !==
console.log("\n6. DISUGUAGLIANZA != e !==:\n");

console.log("Disuguaglianza debole (!=):");
console.log("5 != '5':", 5 != "5"); // false (sono uguali con conversione)
console.log("5 != 3:", 5 != 3); // true
console.log("null != undefined:", null != undefined); // false

console.log("\nDisuguaglianza stretta (!==):");
console.log("5 !== '5':", 5 !== "5"); // true (tipi diversi)
console.log("5 !== 3:", 5 !== 3); // true
console.log("null !== undefined:", null !== undefined); // true

// 7. Array e oggetti in profondità
console.log("\n7. CONFRONTO PROFONDO array e oggetti:\n");

console.log("Array con stesso contenuto:");
let a1 = [1, 2, 3];
let a2 = [1, 2, 3];
console.log("[1,2,3] === [1,2,3]:", a1 === a2); // false
console.log("Soluzione: confronto manuale o JSON.stringify");
console.log("JSON.stringify(a1) === JSON.stringify(a2):",
  JSON.stringify(a1) === JSON.stringify(a2)); // true

console.log("\nOggetti con stesse proprietà:");
let o1 = { x: 1, y: 2 };
let o2 = { x: 1, y: 2 };
console.log("{x:1,y:2} === {x:1,y:2}:", o1 === o2); // false
console.log("JSON.stringify(o1) === JSON.stringify(o2):",
  JSON.stringify(o1) === JSON.stringify(o2)); // true

// Funzione confronto profondo
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (typeof obj1 !== "object" || typeof obj2 !== "object" ||
      obj1 === null || obj2 === null) return false;
  
  if (Array.isArray(obj1) !== Array.isArray(obj2)) return false;
  
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) return false;
  
  return keys1.every(key => deepEqual(obj1[key], obj2[key]));
}

console.log("\nCon funzione deepEqual:");
console.log("deepEqual([1,2,3], [1,2,3]):", deepEqual(a1, a2)); // true
console.log("deepEqual({x:1}, {x:1}):", deepEqual(o1, o2)); // true

// 8. Casi trappola comuni
console.log("\n8. CASI TRAPPOLA comuni:\n");

console.log("Array vuoto:");
console.log("[] == false:", [] == false); // true!
console.log("[] == 0:", [] == 0); // true!
console.log("[] == '':", [] == ""); // true!
console.log("[] === false:", [] === false); // false

console.log("\nStringhe particolari:");
console.log("'  ' == 0:", "  " == 0); // true (spazi -> 0)
console.log("'\\n' == 0:", "\n" == 0); // true
console.log("'\\t' == 0:", "\t" == 0); // true
console.log("'false' == false:", "false" == false); // false!

console.log("\nZero positivo e negativo:");
console.log("0 === -0:", 0 === -0); // true
console.log("Object.is(0, -0):", Object.is(0, -0)); // false

// 9. Object.is() (ES6) - confronto rigorosissimo
console.log("\n9. Object.is() - CONFRONTO RIGOROSISSIMO:\n");

console.log("Comportamento normale:");
console.log("Object.is(5, 5):", Object.is(5, 5)); // true
console.log("Object.is(5, '5'):", Object.is(5, "5")); // false

console.log("\nDifferenze da ===:");
console.log("+0 === -0:", +0 === -0); // true
console.log("Object.is(+0, -0):", Object.is(+0, -0)); // false

console.log("\nNaN === NaN:", NaN === NaN); // false
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN)); // true

// 10. Best practices
console.log("\n10. BEST PRACTICES:\n");

console.log("✓ PREFERISCI sempre ===:");
console.log(`
// ✓ Corretto
if (value === 5) { ... }
if (name === "John") { ... }

// ✗ Da evitare
if (value == 5) { ... }
`);

console.log("✓ Usa == solo per null/undefined insieme:");
console.log(`
// Unico caso accettabile di ==
if (value == null) {  // true per null E undefined
  // Equivale a: value === null || value === undefined
}
`);

console.log("✓ Per NaN usa Number.isNaN():");
console.log(`
// ✓ Corretto
if (Number.isNaN(value)) { ... }

// ✗ Sbagliato
if (value === NaN) { ... }  // Sempre false!
`);

console.log("✓ Per oggetti/array usa confronto profondo:");
console.log(`
// ✓ Per oggetti semplici
JSON.stringify(obj1) === JSON.stringify(obj2)

// ✓ Per confronti complessi
function deepEqual(a, b) { ... }

// ✗ Non funziona
if (obj1 === obj2) { ... }  // Confronta riferimenti!
`);

console.log("\n💡 Riepilogo rapido:");
console.log(`
===  -> Uguaglianza STRETTA (usa SEMPRE)
  - No conversione tipo
  - Più prevedibile
  - Meno bug

==   -> Uguaglianza DEBOLE (evita!)
  - Conversione tipo automatica
  - Comportamento sorprendente
  - Usa solo per: value == null

Object.is() -> Ancora più rigoroso
  - Object.is(NaN, NaN) = true
  - Object.is(+0, -0) = false
`);

console.log("\n✅ Regola d'oro: usa sempre === a meno che tu non sappia ESATTAMENTE cosa fa ==!");
