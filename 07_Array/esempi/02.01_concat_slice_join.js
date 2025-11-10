/**
 * METODI BASE - CONCATENAZIONE E DIVISIONE
 * 
 * concat(), slice(), join() - metodi per combinare e dividere array
 */

console.log("=== 1. CONCAT - CONCATENARE ARRAY ===\n");

// concat() unisce array creando un nuovo array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const unito = arr1.concat(arr2);
console.log("arr1:", arr1);
console.log("arr2:", arr2);
console.log("concat:", unito);

// Concatenare multipli
const arr3 = [7, 8];
const arr4 = [9, 10];
const tutti = arr1.concat(arr2, arr3, arr4);
console.log("\nconcat multipli:", tutti);

// Concatenare array e valori singoli
const misto = arr1.concat(99, arr2, 100, 101);
console.log("concat misto:", misto);

// Alternativa moderna: spread
const spread = [...arr1, ...arr2];
console.log("\nCon spread:", spread);


console.log("\n=== 2. SLICE - ESTRARRE PORZIONI ===\n");

const frutta = ["mela", "banana", "arancia", "kiwi", "uva", "pera"];
console.log("Array originale:", frutta);

// slice(start, end) - end non incluso
const porzione1 = frutta.slice(1, 4);
console.log("\nslice(1, 4):", porzione1);

// slice(start) - fino alla fine
const porzione2 = frutta.slice(2);
console.log("slice(2):", porzione2);

// slice() - copia completa
const copia = frutta.slice();
console.log("slice():", copia);
console.log("È una copia:", copia !== frutta);

// Indici negativi (dalla fine)
const ultimi2 = frutta.slice(-2);
console.log("\nslice(-2):", ultimi2);

const intermedi = frutta.slice(1, -1);
console.log("slice(1, -1):", intermedi);

// slice non modifica originale
console.log("\nOriginale immutato:", frutta);


console.log("\n=== 3. JOIN - ARRAY A STRINGA ===\n");

const parole = ["JavaScript", "è", "fantastico"];
console.log("Array:", parole);

// join(separatore)
const frase = parole.join(" ");
console.log("\njoin(' '):", frase);

// Separatori diversi
console.log("join(', '):", parole.join(", "));
console.log("join(' - '):", parole.join(" - "));
console.log("join(''):", parole.join(""));

// join() senza argomenti usa virgola
console.log("join():", parole.join());

// Esempio pratico: path
const pathParts = ["home", "user", "documents", "file.txt"];
const path = pathParts.join("/");
console.log("\nPath:", path);

// CSV format
const dati = ["Mario", "Rossi", "30", "Roma"];
const csvLine = dati.join(",");
console.log("CSV:", csvLine);


console.log("\n=== 4. SPLIT E JOIN INSIEME ===\n");

// split (String) + join (Array)
const testo = "Hello-World-JavaScript";
console.log("Testo originale:", testo);

// split → array
const parti = testo.split("-");
console.log("split('-'):", parti);

// join → stringa
const risultato = parti.join(" ");
console.log("join(' '):", risultato);

// One-liner: sostituire caratteri
const sostituito = "one-two-three".split("-").join(" ");
console.log("\nSostituisci '-' con ' ':", sostituito);

// Maiuscole per ogni parola
const frase2 = "hello world javascript";
const capitalized = frase2
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log("\nCapitalized:", capitalized);


console.log("\n=== 5. CONCAT VS SPREAD ===\n");

const a = [1, 2, 3];
const b = [4, 5, 6];

// Metodo 1: concat
console.time("concat");
const result1 = a.concat(b);
console.timeEnd("concat");
console.log("concat:", result1);

// Metodo 2: spread
console.time("spread");
const resultSpread = [...a, ...b];
console.timeEnd("spread");
console.log("spread:", resultSpread);

// Metodo 3: push con spread
const resultPush = [...a];
resultPush.push(...b);
console.log("push spread:", resultPush);

console.log("\nTutti danno stesso risultato:", 
  JSON.stringify(result1) === JSON.stringify(resultSpread));


console.log("\n=== 6. SLICE PER CLONAZIONE ===\n");

const originale = [1, 2, 3, 4, 5];

// Metodo 1: slice()
const clone1 = originale.slice();

// Metodo 2: spread
const clone2 = [...originale];

// Metodo 3: Array.from()
const clone3 = Array.from(originale);

// Metodo 4: concat
const clone4 = [].concat(originale);

// Verifiche
clone1[0] = 999;
console.log("Originale:", originale);
console.log("Clone modificato:", clone1);
console.log("Sono indipendenti:", originale[0] !== clone1[0]);

// ⚠️ Shallow copy con oggetti nested
const arrObj = [{id: 1}, {id: 2}];
const shallowCopy = arrObj.slice();
shallowCopy[0].id = 999;
console.log("\n⚠️ Shallow copy:");
console.log("Originale modificato:", arrObj);
console.log("Copia:", shallowCopy);


console.log("\n=== 7. JOIN CON NUMERI ===\n");

const numeri = [1, 2, 3, 4, 5];

// join converte numeri in stringhe
const strNumeri = numeri.join(", ");
console.log("join numeri:", strNumeri);
console.log("tipo:", typeof strNumeri);

// Somma visiva
const sommaStr = numeri.join(" + ");
console.log("\nSomma visiva:", sommaStr);
console.log("Risultato:", eval(sommaStr));

// Moltiplicazione
const prodStr = numeri.join(" * ");
console.log("\nProdotto visivo:", prodStr);
console.log("Risultato:", eval(prodStr));


console.log("\n=== 8. SLICE CON PATTERN ===\n");

const letters = ["a", "b", "c", "d", "e", "f", "g"];

// Primi n elementi
function primi(arr, n) {
  return arr.slice(0, n);
}
console.log("Primi 3:", primi(letters, 3));

// Ultimi n elementi
function ultimi(arr, n) {
  return arr.slice(-n);
}
console.log("Ultimi 3:", ultimi(letters, 3));

// Senza primi e ultimi
function intermedi(arr) {
  return arr.slice(1, -1);
}
console.log("Intermedi:", intermedi(letters));

// Ogni n elementi
function ogni(arr, n) {
  return arr.filter((_, i) => i % n === 0);
}
console.log("Ogni 2:", ogni(letters, 2));


console.log("\n=== 9. APPLICAZIONI PRATICHE ===\n");

// Breadcrumb navigation
const urlPath = "home/products/electronics/laptops";
const crumbs = urlPath.split("/");
console.log("Breadcrumbs:");
crumbs.forEach((crumb, i) => {
  const path = crumbs.slice(0, i + 1).join("/");
  console.log(`  ${crumb} → ${path}`);
});

// Paginazione
function paginate(arr, pageSize) {
  const pages = [];
  for (let i = 0; i < arr.length; i += pageSize) {
    pages.push(arr.slice(i, i + pageSize));
  }
  return pages;
}

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pages = paginate(items, 3);
console.log("\nPaginazione (3 per pagina):");
pages.forEach((page, i) => {
  console.log(`  Pagina ${i + 1}:`, page);
});

// CSV parsing
const csvData = "Mario,Rossi,30\nLuigi,Verdi,25\nAnna,Bianchi,28";
const rows = csvData.split("\n").map(row => row.split(","));
console.log("\nCSV parsed:");
rows.forEach(row => console.log("  ", row));


console.log("\n=== 10. PERFORMANCE CONSIDERATIONS ===\n");

// concat vs push per grandi array
const big1 = new Array(10000).fill(1);
const big2 = new Array(10000).fill(2);

console.time("concat grande");
const result = big1.concat(big2);
console.timeEnd("concat grande");

console.time("spread grande");
const resultSpread2 = [...big1, ...big2];
console.timeEnd("spread grande");

console.time("push loop");
const resultPush2 = [...big1];
for (let item of big2) {
  resultPush2.push(item);
}
console.timeEnd("push loop");

console.log("\nTutti creano array di lunghezza:", result.length);


console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO METODI BASE");
console.log("=".repeat(50));
console.log(`
CONCAT:
• arr1.concat(arr2) - unisce array
• Non modifica originali
• Restituisce nuovo array
• Può concatenare valori singoli
• Alternativa: spread [...arr1, ...arr2]

SLICE:
• arr.slice(start, end) - estrae porzione
• end non incluso
• Non modifica originale
• Indici negativi (dalla fine)
• slice() senza args → copia completa
• Uso: clonazione, paginazione, estrazione

JOIN:
• arr.join(sep) - array → stringa
• Separatore personalizzabile
• join() → usa virgola default
• join('') → concatena senza separatore
• Inverso di split()

PATTERN COMUNI:
• Clonazione: arr.slice() o [...arr]
• Concatenazione: concat() o spread
• Conversione: join() per stringhe
• Paginazione: slice con loop
• Breadcrumbs: split + slice + join

IMMUTABILITÀ:
✓ concat, slice, join NON modificano originale
✓ Sicuri per programmazione funzionale
✓ Creano sempre nuovi valori

PERFORMANCE:
• concat/spread simili per array piccoli
• slice molto veloce (shallow copy)
• join efficiente per conversione stringa
• Considerare spread per leggibilità
`);
