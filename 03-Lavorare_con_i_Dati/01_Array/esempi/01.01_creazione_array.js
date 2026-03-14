/**
 * CREAZIONE DI ARRAY IN JAVASCRIPT
 * 
 * Esplora tutti i modi per creare array in JavaScript:
 * notazione letterale, costruttore, Array.of(), Array.from()
 */

console.log("=== 1. NOTAZIONE LETTERALE (ARRAY LITERAL) ===\n");

// Il modo più comune: parentesi quadre []
const numeri = [1, 2, 3, 4, 5];
console.log("Numeri:", numeri);
console.log("Tipo:", typeof numeri);
console.log("È un array?", Array.isArray(numeri));

// Array di stringhe
const frutta = ["mela", "banana", "arancia", "kiwi"];
console.log("\nFrutta:", frutta);

// Array vuoto
const vuoto = [];
console.log("\nArray vuoto:", vuoto);
console.log("Lunghezza:", vuoto.length);

// Array con un solo elemento
const singolo = [42];
console.log("\nArray singolo:", singolo);
console.log("Lunghezza:", singolo.length);


console.log("\n=== 2. ARRAY MISTI (TIPI DIVERSI) ===\n");

// JavaScript permette tipi diversi nello stesso array
const misto = [
  1,                    // numero
  "due",                // stringa
  true,                 // boolean
  {nome: "Mario"},      // oggetto
  [5, 6],               // array (nested)
  function() {          // funzione
    return "ciao";
  },
  null,                 // null
  undefined             // undefined
];

console.log("Array misto:", misto);
console.log("Lunghezza:", misto.length);
console.log("\nAccesso elementi:");
console.log("  misto[0]:", misto[0]);
console.log("  misto[1]:", misto[1]);
console.log("  misto[3].nome:", misto[3].nome);
console.log("  misto[4][1]:", misto[4][1]);
console.log("  misto[5]():", misto[5]());


console.log("\n=== 3. COSTRUTTORE ARRAY ===\n");

// Usando new Array()
const arr1 = new Array(1, 2, 3, 4, 5);
console.log("new Array(1,2,3,4,5):", arr1);

const arr2 = new Array("mela", "banana");
console.log("new Array('mela', 'banana'):", arr2);

// ⚠️ ATTENZIONE: un solo argomento numerico crea array vuoto!
const arr3 = new Array(5);  // NON crea [5], ma array di lunghezza 5
console.log("\nnew Array(5):", arr3);
console.log("Lunghezza:", arr3.length);
console.log("Elementi:", arr3);  // [empty × 5]

// Per evitare confusione, meglio usare []
const arr4 = [5];  // Crea [5]
console.log("\n[5]:", arr4);


console.log("\n=== 4. ARRAY.OF() - ES6 ===\n");

// Array.of() risolve il problema del costruttore con un solo numero
const of1 = Array.of(5);  // Crea [5], NON array di lunghezza 5
console.log("Array.of(5):", of1);

const of2 = Array.of(1, 2, 3, 4, 5);
console.log("Array.of(1,2,3,4,5):", of2);

const of3 = Array.of("solo una stringa");
console.log("Array.of('solo una stringa'):", of3);

// Confronto costruttore vs Array.of()
console.log("\nConfronto:");
console.log("  new Array(5):", new Array(5).length, "elementi");
console.log("  Array.of(5):", Array.of(5).length, "elemento");


console.log("\n=== 5. ARRAY.FROM() - ES6 ===\n");

// Array.from() crea array da oggetti iterabili o array-like

// Da stringa (iterabile)
const str = "Ciao";
const arrDaStr = Array.from(str);
console.log("Array.from('Ciao'):", arrDaStr);

// Da Set (iterabile)
const set = new Set([1, 2, 3, 2, 1]);  // Set rimuove duplicati
const arrDaSet = Array.from(set);
console.log("\nArray.from(Set):", arrDaSet);

// Da NodeList (array-like) - simulazione
const arrayLike = {
  0: "primo",
  1: "secondo",
  2: "terzo",
  length: 3
};
const arrDaLike = Array.from(arrayLike);
console.log("\nArray.from(array-like):", arrDaLike);

// Con funzione di mapping (secondo parametro)
const numeriOriginali = [1, 2, 3, 4, 5];
const numeriDoppi = Array.from(numeriOriginali, x => x * 2);
console.log("\nArray.from([1,2,3,4,5], x => x*2):", numeriDoppi);

const caratteriMaiuscole = Array.from("hello", c => c.toUpperCase());
console.log("Array.from('hello', c => c.toUpperCase()):", caratteriMaiuscole);


console.log("\n=== 6. ARRAY DA RANGE ===\n");

// Creare array con sequenza di numeri

// Metodo 1: Array.from con length
const range1 = Array.from({length: 5}, (_, i) => i);
console.log("Range 0-4:", range1);

const range2 = Array.from({length: 5}, (_, i) => i + 1);
console.log("Range 1-5:", range2);

const range3 = Array.from({length: 10}, (_, i) => i * 2);
console.log("Numeri pari 0-18:", range3);

// Metodo 2: spread con keys()
const range4 = [...Array(5).keys()];
console.log("\n[...Array(5).keys()]:", range4);

// Range personalizzato
function createRange(start, end, step = 1) {
  const length = Math.floor((end - start) / step) + 1;
  return Array.from({length}, (_, i) => start + i * step);
}

console.log("\nRange 10-20 step 2:", createRange(10, 20, 2));
console.log("Range 5-0 step -1:", createRange(5, 0, -1));


console.log("\n=== 7. ARRAY DI ARRAY (MULTIDIMENSIONALI) ===\n");

// Matrice 2D
const matrice = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("Matrice 3x3:");
console.log(matrice);

console.log("\nAccesso elementi:");
console.log("  matrice[0][0]:", matrice[0][0]);  // 1
console.log("  matrice[1][2]:", matrice[1][2]);  // 6
console.log("  matrice[2][1]:", matrice[2][1]);  // 8

// Tabella con intestazioni
const tabella = [
  ["Nome", "Età", "Città"],
  ["Mario", 30, "Roma"],
  ["Luigi", 25, "Milano"],
  ["Anna", 28, "Napoli"]
];

console.log("\nTabella:");
tabella.forEach(riga => {
  console.log("  ", riga.join(" | "));
});

// Cubo 3D
const cubo = [
  [[1, 2], [3, 4]],
  [[5, 6], [7, 8]]
];
console.log("\nCubo 3D:", cubo);
console.log("cubo[1][0][1]:", cubo[1][0][1]);  // 6


console.log("\n=== 8. ARRAY SPARSI ===\n");

// Array con "buchi" (elementi non definiti)
const sparso1 = [1, , 3, , 5];  // Virgole extra creano "buchi"
console.log("Array sparso:", sparso1);
console.log("Lunghezza:", sparso1.length);

// Accesso a elementi sparsi
console.log("\nAccesso:");
console.log("  sparso1[0]:", sparso1[0]);  // 1
console.log("  sparso1[1]:", sparso1[1]);  // undefined
console.log("  sparso1[2]:", sparso1[2]);  // 3

// Array sparso da costruttore
const sparso2 = new Array(5);
console.log("\nnew Array(5):", sparso2);
sparso2[0] = "primo";
sparso2[4] = "ultimo";
console.log("Dopo assegnazioni:", sparso2);

// ⚠️ Problemi con array sparsi
console.log("\nProblemi:");
const denso = [1, 2, 3, 4, 5];
const sparso = [1, , 3, , 5];

console.log("  denso.map(x => x * 2):", denso.map(x => x * 2));
console.log("  sparso.map(x => x * 2):", sparso.map(x => x * 2));  // Salta buchi


console.log("\n=== 9. CLONAZIONE ARRAY ===\n");

const originale = [1, 2, 3, 4, 5];

// Metodo 1: spread operator (shallow copy)
const copia1 = [...originale];
console.log("Spread:", copia1);

// Metodo 2: Array.from()
const copia2 = Array.from(originale);
console.log("Array.from():", copia2);

// Metodo 3: slice()
const copia3 = originale.slice();
console.log("slice():", copia3);

// Metodo 4: concat()
const copia4 = [].concat(originale);
console.log("concat():", copia4);

// Verifica indipendenza
copia1[0] = 999;
console.log("\nDopo modifica copia1[0] = 999:");
console.log("  Originale:", originale);
console.log("  Copia:", copia1);

// ⚠️ Shallow copy con oggetti nested
const arrOggetti = [{id: 1}, {id: 2}];
const copiaShallow = [...arrOggetti];
copiaShallow[0].id = 999;

console.log("\nShallow copy con oggetti:");
console.log("  Originale:", arrOggetti);  // Modificato!
console.log("  Copia:", copiaShallow);

// Deep copy con JSON (limitato)
const copiaDeep = JSON.parse(JSON.stringify(arrOggetti));
console.log("  Deep copy:", copiaDeep);


console.log("\n=== 10. CONVERSIONE IN ARRAY ===\n");

// Da arguments (funzioni)
function somma() {
  const args = Array.from(arguments);
  console.log("Arguments come array:", args);
  return args.reduce((a, b) => a + b, 0);
}

console.log("somma(1, 2, 3, 4, 5):", somma(1, 2, 3, 4, 5));

// Da Map
const mappa = new Map([["a", 1], ["b", 2], ["c", 3]]);
const arrDaMappa = Array.from(mappa);
console.log("\nArray.from(Map):", arrDaMappa);

// Solo chiavi o valori
const chiavi = Array.from(mappa.keys());
const valori = Array.from(mappa.values());
console.log("Chiavi:", chiavi);
console.log("Valori:", valori);

// Da oggetto (Object.entries, keys, values)
const obj = {nome: "Mario", età: 30, città: "Roma"};
const entries = Object.entries(obj);
const keys = Object.keys(obj);
const values = Object.values(obj);

console.log("\nDa oggetto:");
console.log("  Object.entries():", entries);
console.log("  Object.keys():", keys);
console.log("  Object.values():", values);


console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO CREAZIONE ARRAY");
console.log("=".repeat(50));
console.log(`
METODI PRINCIPALI:
1. [] - Notazione letterale (CONSIGLIATO)
2. new Array() - Costruttore (ATTENZIONE con 1 arg)
3. Array.of() - Crea array da elementi (ES6)
4. Array.from() - Da iterabili/array-like (ES6)

BEST PRACTICES:
✓ Usa [] per array semplici
✓ Usa Array.of() invece di new Array(n)
✓ Usa Array.from() per conversioni
✓ Evita array sparsi quando possibile
✓ Attento a shallow vs deep copy

CASI D'USO:
• Array.from(str) - stringa → array caratteri
• Array.from({length: n}, (_, i) => i) - range
• [...array] - clone shallow
• Array.from(Set) - rimuove duplicati
• Object.entries(obj) - oggetto → array

TIPI:
• Array omogenei: [1, 2, 3]
• Array misti: [1, "two", true]
• Array nested: [[1, 2], [3, 4]]
• Array sparsi: [1, , 3] (⚠️ evitare)
`);
