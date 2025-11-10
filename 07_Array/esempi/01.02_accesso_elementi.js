/**
 * ACCESSO AGLI ELEMENTI DELL'ARRAY
 * 
 * Come leggere, modificare e verificare elementi in un array.
 * Indici, indici negativi, bounds checking, iterazione.
 */

console.log("=== 1. ACCESSO BASE CON INDICI ===\n");

const frutta = ["mela", "banana", "arancia", "kiwi", "uva"];

// Accesso con indice (0-based)
console.log("Array completo:", frutta);
console.log("\nAccesso singoli elementi:");
console.log("  frutta[0]:", frutta[0]);    // primo elemento
console.log("  frutta[1]:", frutta[1]);
console.log("  frutta[2]:", frutta[2]);
console.log("  frutta[4]:", frutta[4]);    // ultimo elemento

// Ultimo elemento
const lunghezza = frutta.length;
console.log("\nUltimo elemento:");
console.log("  frutta[frutta.length - 1]:", frutta[lunghezza - 1]);


console.log("\n=== 2. INDICI FUORI RANGE ===\n");

console.log("frutta.length:", frutta.length);

// Accesso oltre il limite
console.log("\nIndici fuori range:");
console.log("  frutta[10]:", frutta[10]);        // undefined
console.log("  frutta[100]:", frutta[100]);      // undefined
console.log("  frutta[-1]:", frutta[-1]);        // undefined (non funziona)

// Verifica esistenza
function esisteElemento(arr, indice) {
  return indice >= 0 && indice < arr.length;
}

console.log("\nVerifica esistenza:");
console.log("  Esiste frutta[2]?", esisteElemento(frutta, 2));
console.log("  Esiste frutta[10]?", esisteElemento(frutta, 10));


console.log("\n=== 3. METODO AT() - ES2022 ===\n");

// at() permette indici negativi (accesso da fine)
console.log("frutta:", frutta);
console.log("\nMetodo at():");
console.log("  frutta.at(0):", frutta.at(0));      // primo
console.log("  frutta.at(2):", frutta.at(2));      // terzo
console.log("  frutta.at(-1):", frutta.at(-1));    // ultimo
console.log("  frutta.at(-2):", frutta.at(-2));    // penultimo
console.log("  frutta.at(-5):", frutta.at(-5));    // primo (con indice negativo)

// Confronto con notazione tradizionale
console.log("\nConfronto:");
console.log("  Ultimo con []:", frutta[frutta.length - 1]);
console.log("  Ultimo con at():", frutta.at(-1));  // Più conciso!

// at() fuori range
console.log("\nat() fuori range:");
console.log("  frutta.at(10):", frutta.at(10));    // undefined
console.log("  frutta.at(-10):", frutta.at(-10));  // undefined


console.log("\n=== 4. MODIFICA ELEMENTI ===\n");

const numeri = [1, 2, 3, 4, 5];
console.log("Array originale:", numeri);

// Modifica elemento esistente
numeri[2] = 999;
console.log("\nDopo numeri[2] = 999:", numeri);

// Modifica ultimo
numeri[numeri.length - 1] = 555;
console.log("Dopo numeri[length-1] = 555:", numeri);

// Modifica oltre il limite (crea buchi!)
numeri[10] = 100;
console.log("\nDopo numeri[10] = 100:", numeri);
console.log("Lunghezza:", numeri.length);  // 11!


console.log("\n=== 5. PRIMO E ULTIMO ELEMENTO ===\n");

const colori = ["rosso", "verde", "blu", "giallo"];

// Primo elemento
const primo = colori[0];
console.log("Primo:", primo);

// Ultimo elemento - vari modi
const ultimo1 = colori[colori.length - 1];
const ultimo2 = colori.at(-1);
const ultimo3 = colori.slice(-1)[0];

console.log("\nUltimo elemento (vari modi):");
console.log("  [length-1]:", ultimo1);
console.log("  at(-1):", ultimo2);
console.log("  slice(-1)[0]:", ultimo3);

// Funzioni helper
function primo(arr) {
  return arr[0];
}

function ultimo(arr) {
  return arr.at(-1);
}

console.log("\nHelper functions:");
console.log("  primo(colori):", primo(colori));
console.log("  ultimo(colori):", ultimo(colori));


console.log("\n=== 6. ESTRAZIONE MULTIPLA ===\n");

const lettere = ['a', 'b', 'c', 'd', 'e', 'f'];

// Destructuring per primi elementi
const [primo1, secondo, terzo] = lettere;
console.log("Destructuring:");
console.log("  primo:", primo1);
console.log("  secondo:", secondo);
console.log("  terzo:", terzo);

// Skip elementi
const [, , terzo2, , quinto] = lettere;
console.log("\nSkip elementi:");
console.log("  terzo:", terzo2);
console.log("  quinto:", quinto);

// Rest operator
const [first, ...resto] = lettere;
console.log("\nRest operator:");
console.log("  first:", first);
console.log("  resto:", resto);

// Primo e ultimo con destructuring
const [primoEl, ...middle] = lettere;
const ultimoEl = middle.pop();
console.log("\nPrimo e ultimo:");
console.log("  primo:", primoEl);
console.log("  ultimo:", ultimoEl);


console.log("\n=== 7. RICERCA ELEMENTO ===\n");

const animali = ["cane", "gatto", "coniglio", "pesce", "gatto"];

// indexOf - trova prima occorrenza
const indice1 = animali.indexOf("gatto");
console.log("indexOf('gatto'):", indice1);

// indexOf con start position
const indice2 = animali.indexOf("gatto", 2);  // cerca da indice 2
console.log("indexOf('gatto', 2):", indice2);

// indexOf elemento non presente
const indice3 = animali.indexOf("leone");
console.log("indexOf('leone'):", indice3);  // -1

// lastIndexOf - trova ultima occorrenza
const indice4 = animali.lastIndexOf("gatto");
console.log("\nlastIndexOf('gatto'):", indice4);

// includes - verifica presenza (ES2016)
const presente1 = animali.includes("cane");
const presente2 = animali.includes("leone");
console.log("\nincludes('cane'):", presente1);
console.log("includes('leone'):", presente2);

// find - trova elemento con condizione
const lungo = animali.find(a => a.length > 6);
console.log("\nfind(a => a.length > 6):", lungo);

// findIndex - trova indice con condizione
const indice5 = animali.findIndex(a => a.length > 6);
console.log("findIndex(a => a.length > 6):", indice5);


console.log("\n=== 8. VERIFICA ESISTENZA ===\n");

const nums = [10, 20, 30, 40, 50];

// Metodo 1: indexOf !== -1
const esiste1 = nums.indexOf(30) !== -1;
console.log("indexOf(30) !== -1:", esiste1);

// Metodo 2: includes (più leggibile)
const esiste2 = nums.includes(30);
console.log("includes(30):", esiste2);

// Metodo 3: some
const esiste3 = nums.some(n => n === 30);
console.log("some(n => n === 30):", esiste3);

// Con condizione complessa
const esisteMaggioreDi35 = nums.some(n => n > 35);
console.log("\nsome(n => n > 35):", esisteMaggioreDi35);

// Tutti gli elementi soddisfano condizione
const tuttiPositivi = nums.every(n => n > 0);
const tuttiMaggioreDi15 = nums.every(n => n > 15);
console.log("\nevery(n => n > 0):", tuttiPositivi);
console.log("every(n => n > 15):", tuttiMaggioreDi15);


console.log("\n=== 9. ITERAZIONE E ACCESSO ===\n");

const prodotti = ["laptop", "mouse", "tastiera", "monitor"];

// For classico con indice
console.log("For classico:");
for (let i = 0; i < prodotti.length; i++) {
  console.log(`  ${i}: ${prodotti[i]}`);
}

// For...of (solo valori)
console.log("\nFor...of:");
for (const prodotto of prodotti) {
  console.log("  ", prodotto);
}

// For...of con entries (indice + valore)
console.log("\nFor...of con entries:");
for (const [indice, prodotto] of prodotti.entries()) {
  console.log(`  ${indice}: ${prodotto}`);
}

// forEach
console.log("\nforEach:");
prodotti.forEach((prodotto, indice) => {
  console.log(`  ${indice}: ${prodotto}`);
});


console.log("\n=== 10. ACCESSO SICURO ===\n");

const dati = ["uno", "due", "tre"];

// Funzione di accesso sicuro
function getElementoSicuro(arr, indice, defaultValue = undefined) {
  if (indice < 0 || indice >= arr.length) {
    return defaultValue;
  }
  return arr[indice];
}

console.log("Array:", dati);
console.log("\nAccesso sicuro:");
console.log("  Indice 1:", getElementoSicuro(dati, 1));
console.log("  Indice 10:", getElementoSicuro(dati, 10));
console.log("  Indice 10 (default 'N/A'):", getElementoSicuro(dati, 10, "N/A"));
console.log("  Indice -5:", getElementoSicuro(dati, -5, "errore"));

// Optional chaining con array (ES2020)
const arr = ["a", "b", "c"];
console.log("\nOptional chaining:");
console.log("  arr?.[0]:", arr?.[0]);
console.log("  arr?.[10]:", arr?.[10]);

const arrNull = null;
console.log("  arrNull?.[0]:", arrNull?.[0]);  // undefined, non errore

// Accesso nested sicuro
const nested = [[1, 2], [3, 4], [5, 6]];
console.log("\nAccesso nested:");
console.log("  nested[1][0]:", nested[1][0]);
console.log("  nested[10]?.[0]:", nested[10]?.[0]);  // undefined


console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO ACCESSO ELEMENTI");
console.log("=".repeat(50));
console.log(`
ACCESSO BASE:
• arr[i] - accesso con indice (0-based)
• arr[arr.length - 1] - ultimo elemento
• arr.at(i) - accesso con indici negativi (ES2022)
• arr.at(-1) - ultimo elemento (conciso)

RICERCA:
• indexOf(elem) - prima occorrenza (o -1)
• lastIndexOf(elem) - ultima occorrenza
• includes(elem) - verifica presenza (boolean)
• find(fn) - primo elemento che soddisfa condizione
• findIndex(fn) - indice primo elemento

VERIFICA:
• some(fn) - almeno uno soddisfa condizione
• every(fn) - tutti soddisfano condizione
• includes(elem) - elemento presente

ITERAZIONE:
• for (let i = 0; i < arr.length; i++)
• for (const elem of arr)
• for (const [i, elem] of arr.entries())
• arr.forEach((elem, i) => ...)

DESTRUCTURING:
• [a, b, c] = arr - primi 3 elementi
• [first, ...rest] = arr - primo + resto
• [, , third] = arr - skip elementi

SICUREZZA:
• Controlla indice < arr.length
• Usa arr.at() per indici negativi
• Optional chaining: arr?.[i]
• Default values per fuori range

ATTENZIONE:
⚠ arr[i] fuori range → undefined
⚠ arr[i] = val con i > length → crea buchi
⚠ arr[-1] non funziona (usa at(-1))
`);
