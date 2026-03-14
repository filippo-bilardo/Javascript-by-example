/**
 * FIND, INCLUDES E METODI RICERCA
 * 
 * Trovare elementi negli array con vari metodi di ricerca
 */

console.log("=== 1. INCLUDES - VERIFICA PRESENZA ===\n");

const numeri = [1, 2, 3, 4, 5];

// includes verifica se elemento è presente
console.log("includes(3):", numeri.includes(3));  // true
console.log("includes(6):", numeri.includes(6));  // false

// Con secondo parametro: indice di partenza
console.log("\nincludes(2, 2):", numeri.includes(2, 2));  // false (cerca da indice 2)

const frutta = ["mela", "banana", "arancia"];
console.log("\nincludes('banana'):", frutta.includes("banana"));

// Case sensitive!
console.log("includes('Banana'):", frutta.includes("Banana"));  // false


console.log("\n=== 2. INDEXOF E LASTINDEXOF ===\n");

const letters = ["a", "b", "c", "b", "d"];

// indexOf: prima occorrenza
console.log("indexOf('b'):", letters.indexOf("b"));  // 1

// lastIndexOf: ultima occorrenza  
console.log("lastIndexOf('b'):", letters.lastIndexOf("b"));  // 3

// Elemento non presente: -1
console.log("\nindexOf('z'):", letters.indexOf("z"));  // -1

// Con indice di partenza
console.log("indexOf('b', 2):", letters.indexOf("b", 2));  // 3


console.log("\n=== 3. FIND - TROVA ELEMENTO ===\n");

const nums = [5, 12, 8, 130, 44];

// find restituisce primo elemento che soddisfa condizione
const trovato = nums.find(n => n > 10);
console.log("Primo > 10:", trovato);  // 12

const pari = nums.find(n => n % 2 === 0);
console.log("Primo pari:", pari);  // 12

// Non trovato: undefined
const nonTrovato = nums.find(n => n > 200);
console.log("\nPrimo > 200:", nonTrovato);  // undefined


console.log("\n=== 4. FIND CON OGGETTI ===\n");

const utenti = [
  { id: 1, nome: "Mario", attivo: true },
  { id: 2, nome: "Luigi", attivo: false },
  { id: 3, nome: "Anna", attivo: true }
];

// Trova per ID
const utente = utenti.find(u => u.id === 2);
console.log("Utente ID 2:", utente);

// Trova per condizione
const primoAttivo = utenti.find(u => u.attivo);
console.log("\nPrimo attivo:", primoAttivo);

// Non trovato
const nonEsiste = utenti.find(u => u.id === 999);
console.log("ID 999:", nonEsiste);  // undefined


console.log("\n=== 5. FINDINDEX - TROVA INDICE ===\n");

const values = [10, 20, 30, 40, 50];

// findIndex restituisce indice primo elemento
const indice1 = values.findIndex(v => v > 25);
console.log("Indice primo > 25:", indice1);  // 2 (valore 30)

const indice2 = values.findIndex(v => v === 40);
console.log("Indice di 40:", indice2);  // 3

// Non trovato: -1
const nonTrovato2 = values.findIndex(v => v > 100);
console.log("\nIndice > 100:", nonTrovato2);  // -1


console.log("\n=== 6. FIND VS FILTER ===\n");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// find: primo elemento
const first = numbers.find(n => n > 5);
console.log("find (primo > 5):", first);  // 6

// filter: tutti gli elementi
const all = numbers.filter(n => n > 5);
console.log("filter (tutti > 5):", all);  // [6, 7, 8]

// find si ferma al primo
console.log("\nfind è più veloce per primo match");


console.log("\n=== 7. SOME E EVERY ===\n");

const ages = [18, 20, 16, 25, 30];

// some: almeno uno soddisfa
const haMinorenni = ages.some(age => age < 18);
console.log("Ha minorenni?", haMinorenni);  // true

const haMaggiorenni = ages.some(age => age >= 18);
console.log("Ha maggiorenni?", haMaggiorenni);  // true

// every: tutti soddisfano
const tuttiMaggiorenni = ages.every(age => age >= 18);
console.log("\nTutti maggiorenni?", tuttiMaggiorenni);  // false

const tuttiPositivi = ages.every(age => age > 0);
console.log("Tutti positivi?", tuttiPositivi);  // true


console.log("\n=== 8. RICERCA MULTIPLA ===\n");

const products = [
  { id: 1, name: "Laptop", price: 1000, inStock: true },
  { id: 2, name: "Mouse", price: 25, inStock: false },
  { id: 3, name: "Keyboard", price: 75, inStock: true },
  { id: 4, name: "Monitor", price: 300, inStock: true }
];

// Trova primo disponibile economico
const cheapAvailable = products.find(p => 
  p.inStock && p.price < 100
);
console.log("Economico disponibile:", cheapAvailable?.name);

// Trova tutti disponibili
const available = products.filter(p => p.inStock);
console.log("\nDisponibili:", available.map(p => p.name));

// Verifica se tutti disponibili
const allAvailable = products.every(p => p.inStock);
console.log("Tutti disponibili?", allAvailable);

// Verifica se almeno uno economico
const hasAffordable = products.some(p => p.price < 50);
console.log("Ha prodotti < €50?", hasAffordable);


console.log("\n=== 9. PATTERN RICERCA ===\n");

const data = [
  { type: "A", value: 10 },
  { type: "B", value: 20 },
  { type: "A", value: 30 },
  { type: "C", value: 40 }
];

// Trova per tipo
function findByType(arr, type) {
  return arr.find(item => item.type === type);
}

console.log("Trova tipo A:", findByType(data, "A"));

// Trova tutti per tipo
function findAllByType(arr, type) {
  return arr.filter(item => item.type === type);
}

console.log("\nTutti tipo A:", findAllByType(data, "A"));

// Esiste tipo?
function hasType(arr, type) {
  return arr.some(item => item.type === type);
}

console.log("\nEsiste tipo B?", hasType(data, "B"));
console.log("Esiste tipo D?", hasType(data, "D"));


console.log("\n=== 10. PERFORMANCE ===\n");

const big = Array.from({length: 100000}, (_, i) => i);

// includes (ottimizzato)
console.time("includes");
const res1 = big.includes(99999);
console.timeEnd("includes");

// find (più flessibile ma più lento)
console.time("find");
const res2 = big.find(n => n === 99999);
console.timeEnd("find");

// indexOf (veloce per uguaglianza)
console.time("indexOf");
const res3 = big.indexOf(99999);
console.timeEnd("indexOf");

console.log("\nRisultati equivalenti:", 
  res1 && res2 === 99999 && res3 === 99999);


console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO METODI RICERCA");
console.log("=".repeat(50));
console.log(`
INCLUDES:
• arr.includes(elem) - verifica presenza
• Restituisce boolean
• Usa === (strict equality)
• Parametro opzionale: fromIndex

INDEXOF/LASTINDEXOF:
• indexOf(elem) - indice prima occorrenza
• lastIndexOf(elem) - indice ultima occorrenza
• Restituisce -1 se non trovato
• Usa === (strict equality)

FIND:
• arr.find(fn) - primo elemento che soddisfa
• Restituisce elemento o undefined
• Si ferma al primo match
• Uso: ricerca con condizione

FINDINDEX:
• arr.findIndex(fn) - indice primo match
• Restituisce indice o -1
• Si ferma al primo match
• Uso: ottenere posizione

SOME/EVERY:
• some(fn) - almeno uno true
• every(fn) - tutti true
• Restituiscono boolean
• Short-circuit (si fermano appena possibile)

QUANDO USARE:
✓ includes - verifica presenza semplice
✓ indexOf - trova posizione valore esatto
✓ find - trova elemento con condizione
✓ findIndex - trova posizione con condizione
✓ filter - trova TUTTI elementi
✓ some - verifica esistenza condizione
✓ every - verifica condizione universale

PERFORMANCE:
• includes/indexOf: O(n) ottimizzati
• find/findIndex: O(n) con callback
• some/every: short-circuit
• filter: sempre O(n) completo

BEST PRACTICES:
✓ includes per presenza semplice
✓ find per primo match con logica
✓ filter per tutti i match
✓ some/every per verifiche booleane
✓ indexOf per posizione esatta
`);
