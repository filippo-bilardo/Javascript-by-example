/**
 * TECNICHE AVANZATE - DESTRUCTURING E SPREAD
 * 
 * Destructuring, spread operator, rest parameters e pattern moderni
 */

console.log("=== 1. DESTRUCTURING BASE ===\n");

const colori = ["rosso", "verde", "blu"];

// Estrai valori in variabili
const [primo, secondo, terzo] = colori;
console.log("Primo:", primo);
console.log("Secondo:", secondo);
console.log("Terzo:", terzo);

// Funziona con qualsiasi iterabile
const [a, b, c] = "abc";
console.log("\nDa stringa:", a, b, c);


console.log("\n=== 2. DESTRUCTURING CON SKIP ===\n");

const numeri = [1, 2, 3, 4, 5];

// Saltare elementi
const [first, , third] = numeri;
console.log("Primo e terzo:", first, third);

// Primi e ultimi
const [primissimo, , , , ultimo] = numeri;
console.log("Primo e ultimo:", primissimo, ultimo);


console.log("\n=== 3. REST OPERATOR (...rest) ===\n");

const letters = ["a", "b", "c", "d", "e"];

// Rest raccoglie elementi rimanenti
const [head, ...tail] = letters;
console.log("Head:", head);
console.log("Tail:", tail);

// Primi n elementi + resto
const [first1, first2, ...others] = letters;
console.log("\nPrimi 2:", first1, first2);
console.log("Altri:", others);

// Solo resto (copia array)
const [...copy] = letters;
console.log("\nCopia:", copy);


console.log("\n=== 4. DEFAULT VALUES ===\n");

const arr = [1, 2];

// Valori di default se elemento non esiste
const [x = 0, y = 0, z = 0] = arr;
console.log("x, y, z:", x, y, z);  // 1, 2, 0

const [val1 = 10, val2 = 20, val3 = 30, val4 = 40] = [1, 2];
console.log("Con defaults:", val1, val2, val3, val4);  // 1, 2, 30, 40


console.log("\n=== 5. SPREAD OPERATOR ===\n");

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combinare array
const combined = [...arr1, ...arr2];
console.log("Combinato:", combined);

// Inserire in mezzo
const middle = [...arr1, 99, ...arr2];
console.log("Con elemento in mezzo:", middle);

// Clonare
const clone = [...arr1];
console.log("\nClone:", clone);
console.log("È copia:", clone !== arr1);


console.log("\n=== 6. SPREAD CON FUNZIONI ===\n");

const nums = [5, 2, 8, 1, 9];

// Passare array come argomenti
console.log("Math.max(...nums):", Math.max(...nums));
console.log("Math.min(...nums):", Math.min(...nums));

// Spread in push
const base = [1, 2, 3];
base.push(...[4, 5, 6]);
console.log("\nDopo push(...arr):", base);

// Funzione con più parametri
function somma(a, b, c) {
  return a + b + c;
}

const values = [10, 20, 30];
console.log("\nsomma(...values):", somma(...values));


console.log("\n=== 7. NESTED DESTRUCTURING ===\n");

const nested = [[1, 2], [3, 4], [5, 6]];

// Destructuring nested
const [[n1, n2], [m1, m2]] = nested;
console.log("n1, n2:", n1, n2);
console.log("m1, m2:", m1, m2);

// Con oggetti nested
const users = [
  { name: "Mario", address: { city: "Roma" } },
  { name: "Luigi", address: { city: "Milano" } }
];

const [{ name: name1, address: { city: city1 } }] = users;
console.log("\nNome e città:", name1, city1);


console.log("\n=== 8. SWAP VALORI ===\n");

let x1 = 10;
let y1 = 20;
console.log("Prima:", { x1, y1 });

// Swap con destructuring
[x1, y1] = [y1, x1];
console.log("Dopo swap:", { x1, y1 });

// Swap elementi array
const arr3 = [1, 2, 3, 4, 5];
[arr3[0], arr3[4]] = [arr3[4], arr3[0]];
console.log("\nArray dopo swap:", arr3);


console.log("\n=== 9. FUNZIONI CON DESTRUCTURING ===\n");

// Parametri destructured
function printFirst([first, ...rest]) {
  console.log("Primo:", first);
  console.log("Resto:", rest);
}

printFirst([10, 20, 30, 40]);

// Return multiple con destructuring
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

const [min, max] = minMax([5, 2, 8, 1, 9]);
console.log("\nMin e Max:", min, max);

// Default parameters
function process([a = 0, b = 0, c = 0] = []) {
  return a + b + c;
}

console.log("\nprocess([1, 2]):", process([1, 2]));
console.log("process():", process());


console.log("\n=== 10. PATTERN AVANZATI ===\n");

// Rimuovere duplicati
const duplicati = [1, 2, 2, 3, 3, 3, 4, 5, 5];
const unique = [...new Set(duplicati)];
console.log("Unique:", unique);

// Merge array di oggetti
const arr1Obj = [{ id: 1 }, { id: 2 }];
const arr2Obj = [{ id: 3 }, { id: 4 }];
const merged = [...arr1Obj, ...arr2Obj];
console.log("\nMerged objects:", merged);

// Flatten shallow
const shallow = [[1, 2], [3, 4], [5, 6]];
const flattened = [].concat(...shallow);
console.log("\nFlattened:", flattened);

// Alternativa con flat()
const flattened2 = shallow.flat();
console.log("Con flat():", flattened2);

// Rimuovere elementi
const original = [1, 2, 3, 4, 5];
const [, , ...withoutFirstTwo] = original;
console.log("\nSenza primi 2:", withoutFirstTwo);

// Inserire elemento
const arr4 = [1, 2, 5, 6];
const inserted = [...arr4.slice(0, 2), 3, 4, ...arr4.slice(2)];
console.log("\nCon 3,4 inseriti:", inserted);


console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO DESTRUCTURING E SPREAD");
console.log("=".repeat(50));
console.log(`
DESTRUCTURING:
• [a, b, c] = arr - estrai in variabili
• [a, , c] = arr - skip elementi
• [a, ...rest] = arr - primi + resto
• [a = 0] = arr - default values
• [[a, b]] = nested - nested destructuring

SPREAD OPERATOR (...):
• [...arr] - clone/copy
• [...arr1, ...arr2] - concatena
• Math.max(...arr) - espandi in args
• arr.push(...values) - spread in metodi
• [a, ...b, c] ❌ - rest deve essere ultimo

REST OPERATOR:
• [...rest] - in destructuring
• function(...args) - parametri variabili
• Raccoglie elementi rimanenti
• Sempre ultimo in destructuring

CASI D'USO:
✓ Clone: [...arr]
✓ Merge: [...a, ...b]
✓ Swap: [a, b] = [b, a]
✓ Unique: [...new Set(arr)]
✓ Flatten: [].concat(...nested)
✓ Remove: [, , ...rest] = arr
✓ Insert: [...slice(0,i), val, ...slice(i)]

CON FUNZIONI:
• Return multiple: return [a, b]
• Params variabili: (...args) => {}
• Default params: ([a=0, b=0]) => {}
• Destructure params: ([first, ...rest]) => {}

BEST PRACTICES:
✓ Spread per immutabilità
✓ Destructuring per leggibilità
✓ Rest per parametri variabili
✓ Preferisci spread a concat
✗ Evita spread di array enormi
✗ Shallow copy! Attento a nested

PERFORMANCE:
• Spread veloce per array piccoli
• Considerare loop per grandi array
• Clone sempre shallow (un livello)
• Per deep copy: structuredClone()
`);
