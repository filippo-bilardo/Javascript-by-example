/**
 * FOREACH E ALTRI METODI ITERAZIONE
 * 
 * forEach(), entries(), keys(), values() e pattern di iterazione
 */

console.log("=== 1. FOREACH BASE ===\n");

const numeri = [10, 20, 30, 40, 50];

// forEach esegue funzione per ogni elemento
numeri.forEach(function(elemento) {
  console.log("Elemento:", elemento);
});

// Con arrow function
console.log("\nCon arrow:");
numeri.forEach(n => console.log("  ", n));


console.log("\n=== 2. FOREACH CON PARAMETRI ===\n");

const frutta = ["mela", "banana", "arancia"];

// forEach(elemento, indice, array)
frutta.forEach((elem, idx, arr) => {
  console.log(`[${idx}] ${elem} (array di ${arr.length})`);
});


console.log("\n=== 3. FOREACH VS MAP ===\n");

const nums = [1, 2, 3, 4, 5];

// forEach: esegue side effects, restituisce undefined
let somma = 0;
nums.forEach(n => {
  somma += n;
});
console.log("Somma con forEach:", somma);

// map: trasforma e restituisce array
const doppi = nums.map(n => n * 2);
console.log("Doppi con map:", doppi);

// forEach NON restituisce nulla
const risultato = nums.forEach(n => n * 2);
console.log("\nforEach restituisce:", risultato); // undefined


console.log("\n=== 4. ENTRIES, KEYS, VALUES ===\n");

const colori = ["rosso", "verde", "blu"];

// entries(): iteratore [indice, valore]
console.log("entries():");
for (const [idx, val] of colori.entries()) {
  console.log(`  ${idx}: ${val}`);
}

// keys(): iteratore indici
console.log("\nkeys():");
for (const idx of colori.keys()) {
  console.log(`  Indice ${idx}`);
}

// values(): iteratore valori
console.log("\nvalues():");
for (const val of colori.values()) {
  console.log(`  ${val}`);
}

// Convertire in array
const entriesArr = [...colori.entries()];
console.log("\nEntries come array:", entriesArr);


console.log("\n=== 5. FOR...OF VS FOREACH ===\n");

const letters = ["a", "b", "c", "d"];

// for...of: può usare break/continue
console.log("for...of con break:");
for (const letter of letters) {
  if (letter === "c") break;
  console.log("  ", letter);
}

// forEach: NON può usare break
console.log("\nforEach (no break):");
letters.forEach(letter => {
  // break/continue non funzionano qui!
  if (letter === "c") return; // Salta solo questo elemento
  console.log("  ", letter);
});


console.log("\n=== 6. FOREACH CON OGGETTI ===\n");

const persone = [
  { nome: "Mario", età: 30 },
  { nome: "Luigi", età: 25 },
  { nome: "Anna", età: 35 }
];

// Iterare oggetti
persone.forEach((persona, i) => {
  console.log(`${i + 1}. ${persona.nome} (${persona.età} anni)`);
});

// Modificare oggetti (riferimenti!)
persone.forEach(persona => {
  persona.maggiorenne = persona.età >= 18;
});

console.log("\nDopo modifica:");
console.log(persone);


console.log("\n=== 7. PATTERN COMUNI ===\n");

const prodotti = [
  { nome: "Laptop", prezzo: 1000, disponibile: true },
  { nome: "Mouse", prezzo: 25, disponibile: false },
  { nome: "Tastiera", prezzo: 75, disponibile: true }
];

// Filtrare e stampare
console.log("Prodotti disponibili:");
prodotti
  .filter(p => p.disponibile)
  .forEach((p, i) => {
    console.log(`  ${i + 1}. ${p.nome} - €${p.prezzo}`);
  });

// Accumulare valore
let totale = 0;
prodotti.forEach(p => {
  if (p.disponibile) {
    totale += p.prezzo;
  }
});
console.log("\nTotale disponibili: €", totale);

// Raggruppare
const byAvailability = { disponibili: [], esauriti: [] };
prodotti.forEach(p => {
  if (p.disponibile) {
    byAvailability.disponibili.push(p.nome);
  } else {
    byAvailability.esauriti.push(p.nome);
  }
});
console.log("\nRaggruppati:", byAvailability);


console.log("\n=== 8. ITERAZIONE CON INDEX ===\n");

const tasks = ["Setup", "Development", "Testing", "Deploy"];

// Con forEach
console.log("Tasks con forEach:");
tasks.forEach((task, i) => {
  console.log(`  ${i + 1}/${tasks.length}: ${task}`);
});

// Con entries
console.log("\nTasks con entries:");
for (const [i, task] of tasks.entries()) {
  console.log(`  Step ${i}: ${task}`);
}

// Con map per creare lista numerata
const numbered = tasks.map((task, i) => `${i + 1}. ${task}`);
console.log("\nLista numerata:");
numbered.forEach(line => console.log("  " + line));


console.log("\n=== 9. METODI DI CONTROLLO FLUSSO ===\n");

const values = [1, 2, 3, 4, 5];

// some: almeno uno true
const hasPari = values.some(n => n % 2 === 0);
console.log("Ha almeno un pari?", hasPari);

// every: tutti true
const tuttiPositivi = values.every(n => n > 0);
console.log("Tutti positivi?", tuttiPositivi);

// find: primo che soddisfa
const primo = values.find(n => n > 3);
console.log("Primo > 3:", primo);

// findIndex: indice primo che soddisfa
const indice = values.findIndex(n => n > 3);
console.log("Indice primo > 3:", indice);


console.log("\n=== 10. PERFORMANCE E BEST PRACTICES ===\n");

const big = Array.from({length: 100000}, (_, i) => i);

// forEach
console.time("forEach");
let sum1 = 0;
big.forEach(n => sum1 += n);
console.timeEnd("forEach");

// for...of
console.time("for...of");
let sum2 = 0;
for (const n of big) {
  sum2 += n;
}
console.timeEnd("for...of");

// for classico (più veloce)
console.time("for");
let sum3 = 0;
for (let i = 0; i < big.length; i++) {
  sum3 += big[i];
}
console.timeEnd("for");

console.log("\nTutti danno stesso risultato:", 
  sum1 === sum2 && sum2 === sum3);


console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO FOREACH E ITERAZIONE");
console.log("=".repeat(50));
console.log(`
FOREACH:
• arr.forEach(fn) - esegue fn per ogni elemento
• Restituisce undefined (no return utile)
• Non interrompibile (no break/continue)
• Callback: (elem, idx, arr) => {}
• Uso: side effects, logging, accumulo

FOR...OF:
• for (const elem of arr)
• Può usare break/continue
• return esce dalla funzione
• Più leggibile di for classico
• Uso: iterazione con controllo flusso

ENTRIES/KEYS/VALUES:
• arr.entries() - [indice, valore]
• arr.keys() - solo indici
• arr.values() - solo valori
• Restituiscono iteratori
• Uso: for...of con destructuring

CONTROLLO FLUSSO:
• forEach: no break (usa return per skip)
• for...of: break/continue OK
• some/every: short-circuit
• find/findIndex: si fermano al primo match

QUANDO USARE:
✓ forEach: side effects, logging
✓ for...of: iterazione con break
✓ map/filter/reduce: trasformazioni
✓ for: massima performance

BEST PRACTICES:
✓ forEach per side effects semplici
✓ for...of quando serve break
✓ map/filter per trasformazioni
✓ for classico per performance critiche
✗ forEach per creare array (usa map)
✗ forEach quando serve valore ritorno

PERFORMANCE:
• for classico: più veloce
• for...of: buon compromesso
• forEach: overhead minimo
• Differenze trascurabili per array piccoli
`);
