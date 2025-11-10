/**
 * FLAT E FLATMAP - APPIATTIMENTO ARRAY
 * 
 * Gestire array multidimensionali e nested structures
 */

console.log("=== 1. FLAT BASE ===\n");

// flat() appiattisce array nested
const nested = [1, 2, [3, 4], 5];
const flat1 = nested.flat();
console.log("Nested:", nested);
console.log("Flat:", flat1);

// Un livello alla volta
const nested2 = [1, [2, [3, [4]]]];
console.log("\nNested profondo:", nested2);
console.log("flat():", nested2.flat());
console.log("flat(2):", nested2.flat(2));
console.log("flat(3):", nested2.flat(3));


console.log("\n=== 2. FLAT CON DEPTH ===\n");

const deep = [
  [1, 2],
  [3, [4, 5]],
  [6, [7, [8, 9]]]
];

console.log("Deep array:", deep);
console.log("\nflat(1):", deep.flat(1));
console.log("flat(2):", deep.flat(2));
console.log("flat(Infinity):", deep.flat(Infinity));


console.log("\n=== 3. FLAT CON BUCHI ===\n");

// flat rimuove buchi (empty slots)
const sparse = [1, 2, , 4, 5];
const dense = sparse.flat();
console.log("Sparse:", sparse);
console.log("Dense:", dense);
console.log("Lunghezze:", sparse.length, "→", dense.length);


console.log("\n=== 4. FLATMAP - MAP + FLAT ===\n");

const frasi = ["Hello world", "JavaScript rocks"];

// Con map + flat
const parole1 = frasi.map(f => f.split(" ")).flat();
console.log("map + flat:", parole1);

// Con flatMap (più efficiente)
const parole2 = frasi.flatMap(f => f.split(" "));
console.log("flatMap:", parole2);


console.log("\n=== 5. FLATMAP CASI D'USO ===\n");

// Duplicare elementi
const nums = [1, 2, 3];
const duplicated = nums.flatMap(n => [n, n]);
console.log("Duplicati:", duplicated);

// Filtrare e trasformare
const values = [1, 2, 3, 4, 5];
const evenDoubled = values.flatMap(n => 
  n % 2 === 0 ? [n * 2] : []
);
console.log("\nPari raddoppiati:", evenDoubled);

// Espandere oggetti
const users = [
  { name: "Mario", tags: ["js", "react"] },
  { name: "Luigi", tags: ["python", "django"] }
];

const allTags = users.flatMap(u => u.tags);
console.log("\nTutti i tag:", allTags);


console.log("\n=== 6. ALTERNATIVE A FLAT ===\n");

const arr = [[1, 2], [3, 4], [5, 6]];

// Metodo 1: reduce + concat
const flat2 = arr.reduce((acc, val) => acc.concat(val), []);
console.log("reduce + concat:", flat2);

// Metodo 2: concat con spread
const flat3 = [].concat(...arr);
console.log("concat spread:", flat3);

// Metodo 3: flat() (più moderno)
const flat4 = arr.flat();
console.log("flat():", flat4);


console.log("\n=== 7. FLAT RICORSIVO CUSTOM ===\n");

// Implementazione flat custom
function flattenDeep(arr) {
  return arr.reduce((acc, val) =>
    Array.isArray(val)
      ? acc.concat(flattenDeep(val))
      : acc.concat(val),
    []
  );
}

const deepNested = [1, [2, [3, [4, [5]]]]];
console.log("Deep nested:", deepNested);
console.log("flattenDeep:", flattenDeep(deepNested));


console.log("\n=== 8. APPLICAZIONI PRATICHE ===\n");

// Struttura menu nested
const menu = [
  { name: "File", items: ["New", "Open", "Save"] },
  { name: "Edit", items: ["Cut", "Copy", "Paste"] },
  { name: "View", items: ["Zoom In", "Zoom Out"] }
];

const allMenuItems = menu.flatMap(m => m.items);
console.log("Tutti menu items:", allMenuItems);

// CSV parsing
const csvLines = [
  "name,age,city",
  "Mario,30,Roma",
  "Luigi,25,Milano"
];

const parsed = csvLines
  .map(line => line.split(","))
  .flat();
console.log("\nCSV flat:", parsed);

// Query results aggregation
const results = [
  [{ id: 1 }, { id: 2 }],
  [{ id: 3 }],
  [{ id: 4 }, { id: 5 }]
];

const allResults = results.flat();
console.log("\nAll results:", allResults);


console.log("\n=== 9. PERFORMANCE ===\n");

const bigNested = Array.from({length: 1000}, () => [1, 2, 3]);

console.time("flat()");
const result1 = bigNested.flat();
console.timeEnd("flat()");

console.time("concat spread");
const result2 = [].concat(...bigNested);
console.timeEnd("concat spread");

console.time("reduce concat");
const result3 = bigNested.reduce((a, b) => a.concat(b), []);
console.timeEnd("reduce concat");

console.log("\nTutti stessa lunghezza:", result1.length);


console.log("\n=== 10. EDGE CASES ===\n");

// Array vuoti
const withEmpty = [1, [], 2, [3, []], 4];
console.log("Con vuoti:", withEmpty);
console.log("flat():", withEmpty.flat(2));

// Non array elements
const mixed = [1, "two", [3, 4], null, [5, [6]]];
console.log("\nMixed:", mixed);
console.log("flat():", mixed.flat());
console.log("flat(2):", mixed.flat(2));

// undefined e null
const withNulls = [1, [null, undefined], [2, [3]]];
console.log("\nCon nulls:", withNulls);
console.log("flat(2):", withNulls.flat(2));


console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO FLAT E FLATMAP");
console.log("=".repeat(50));
console.log(`
FLAT:
• arr.flat() - appiattisce 1 livello
• arr.flat(depth) - appiattisce n livelli
• arr.flat(Infinity) - appiattisce tutto
• Rimuove buchi (empty slots)
• Restituisce nuovo array

FLATMAP:
• arr.flatMap(fn) - map + flat(1)
• Più efficiente di .map().flat()
• Usa: trasforma in array + appiattisci
• Esempi: split, duplica, filtra+mappa

QUANDO USARE:
✓ flat() - array nested semplici
✓ flatMap() - trasforma + appiattisci
✓ flat(Infinity) - ignora profondità
✓ flat(n) - controllo profondità

ALTERNATIVE:
• reduce + concat - compatibilità
• [].concat(...arr) - shallow flat
• reduce ricorsivo - deep flat custom
• flat() - preferibile (ES2019+)

CASI D'USO:
• Unire array di array
• Parsing CSV/dati strutturati
• Aggregare risultati nested
• Rimuovere nesting da API response
• Duplicare/espandere elementi
• Filtrare e trasformare in un passo

PERFORMANCE:
• flat() ottimizzato
• flatMap() meglio di map+flat separati
• Considerare alternative per array enormi
• Profondità impatta performance

BEST PRACTICES:
✓ flat() per nested semplici
✓ flatMap() invece di map().flat()
✓ flat(Infinity) quando profondità sconosciuta
✓ Verifica supporto browser (ES2019)
✗ Evita flat profondo su array enormi
✗ Non flat se non necessario (overhead)
`);
