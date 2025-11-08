/**
 * Esempio: Array in JavaScript
 * 
 * Gli array sono oggetti speciali per memorizzare sequenze
 * ordinate di valori.
 * 
 * Per eseguire: node 09_array.js
 */

console.log("=== ARRAY IN JAVASCRIPT ===\n");

// 1. Creazione di array
console.log("1. Creazione di array:\n");

// Notazione letterale (più comune)
let numeri = [1, 2, 3, 4, 5];
let misto = [1, "due", true, null, { chiave: "valore" }];
let vuoto = [];

console.log("Numeri:", numeri);
console.log("Misto:", misto);
console.log("Vuoto:", vuoto);

// Array constructor
let altroArray = new Array(1, 2, 3);
console.log("Con constructor:", altroArray);

// Array di lunghezza specifica
let arrayLunghezza = new Array(5); // [empty × 5]
console.log("Lunghezza 5:", arrayLunghezza);

// Array.of() e Array.from()
let arrayOf = Array.of(1, 2, 3);
let arrayFrom = Array.from("Hello"); // ['H', 'e', 'l', 'l', 'o']
console.log("Array.of:", arrayOf);
console.log("Array.from:", arrayFrom);

// 2. Accesso e modifica
console.log("\n2. Accesso e modifica elementi:\n");

let frutta = ["mela", "banana", "arancia"];
console.log("Primo elemento:", frutta[0]);
console.log("Ultimo elemento:", frutta[frutta.length - 1]);

// Modifica
frutta[1] = "pera";
console.log("Dopo modifica:", frutta);

// Lunghezza
console.log("Lunghezza:", frutta.length);

// 3. Aggiunta e rimozione elementi
console.log("\n3. Aggiunta e rimozione:\n");

let lista = [1, 2, 3];

// push() - aggiunge alla fine
lista.push(4, 5);
console.log("Dopo push:", lista);

// pop() - rimuove dall'ultimo
let ultimo = lista.pop();
console.log("Rimosso:", ultimo, "- Array:", lista);

// unshift() - aggiunge all'inizio
lista.unshift(0);
console.log("Dopo unshift:", lista);

// shift() - rimuove dal primo
let primo = lista.shift();
console.log("Rimosso:", primo, "- Array:", lista);

// splice() - rimuove/inserisce in qualsiasi posizione
let colori = ["rosso", "verde", "blu", "giallo"];
colori.splice(2, 1, "viola", "arancione"); // Rimuove 1 elemento all'indice 2, inserisce 2
console.log("Dopo splice:", colori);

// 4. Iterazione
console.log("\n4. Iterazione sugli array:\n");

let animali = ["cane", "gatto", "uccello"];

// For classico
console.log("For classico:");
for (let i = 0; i < animali.length; i++) {
  console.log(`  ${i}: ${animali[i]}`);
}

// For...of
console.log("\nFor...of:");
for (let animale of animali) {
  console.log(`  ${animale}`);
}

// forEach()
console.log("\nforEach:");
animali.forEach((animale, indice) => {
  console.log(`  ${indice}: ${animale}`);
});

// 5. Metodi di trasformazione
console.log("\n5. Metodi di trasformazione:\n");

let nums = [1, 2, 3, 4, 5];

// map() - trasforma ogni elemento
let quadrati = nums.map(n => n * n);
console.log("Originale:", nums);
console.log("Quadrati (map):", quadrati);

// filter() - filtra elementi
let pari = nums.filter(n => n % 2 === 0);
console.log("Pari (filter):", pari);

// reduce() - riduce a singolo valore
let somma = nums.reduce((acc, n) => acc + n, 0);
console.log("Somma (reduce):", somma);

// Esempio reduce complesso - trovare max
let max = nums.reduce((max, n) => n > max ? n : max, nums[0]);
console.log("Massimo (reduce):", max);

// 6. Ricerca e verifica
console.log("\n6. Ricerca e verifica:\n");

let prodotti = ["laptop", "mouse", "tastiera", "monitor"];

// indexOf() e lastIndexOf()
console.log("Indice 'mouse':", prodotti.indexOf("mouse"));
console.log("Indice 'stampante':", prodotti.indexOf("stampante")); // -1 se non trovato

// includes()
console.log("Include 'tastiera'?", prodotti.includes("tastiera"));

// find() - trova primo elemento che soddisfa condizione
let numeri2 = [5, 12, 8, 130, 44];
let trovato = numeri2.find(n => n > 10);
console.log("Primo > 10:", trovato);

// findIndex() - indice del primo elemento
let indice = numeri2.findIndex(n => n > 10);
console.log("Indice primo > 10:", indice);

// some() - almeno un elemento soddisfa condizione
let haPari = numeri2.some(n => n % 2 === 0);
console.log("Ha numeri pari?", haPari);

// every() - tutti gli elementi soddisfano condizione
let tuttiPositivi = numeri2.every(n => n > 0);
console.log("Tutti positivi?", tuttiPositivi);

// 7. Ordinamento
console.log("\n7. Ordinamento:\n");

let numeriDisordinati = [3, 1, 4, 1, 5, 9, 2, 6];

// sort() - ordina in place
let ordinati = [...numeriDisordinati].sort((a, b) => a - b);
console.log("Ordinati crescente:", ordinati);

let decrescenti = [...numeriDisordinati].sort((a, b) => b - a);
console.log("Ordinati decrescente:", decrescenti);

// Ordinamento stringhe
let parole = ["banana", "arancia", "mela", "ciliegia"];
parole.sort();
console.log("Parole ordinate:", parole);

// Ordinamento oggetti
let persone = [
  { nome: "Mario", età: 30 },
  { nome: "Luigi", età: 25 },
  { nome: "Anna", età: 35 }
];

persone.sort((a, b) => a.età - b.età);
console.log("Persone per età:");
persone.forEach(p => console.log(`  ${p.nome}: ${p.età} anni`));

// reverse() - inverte l'ordine
let invertito = [1, 2, 3, 4, 5].reverse();
console.log("Invertito:", invertito);

// 8. Estrazione e concatenazione
console.log("\n8. Estrazione e concatenazione:\n");

let serie = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// slice() - estrae porzione (non modifica originale)
let porzione = serie.slice(2, 5); // Da indice 2 a 4
console.log("Slice(2, 5):", porzione);
console.log("Originale:", serie);

// concat() - concatena array
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let concatenato = array1.concat(array2);
console.log("Concatenato:", concatenato);

// Spread operator (ES6)
let unito = [...array1, ...array2];
console.log("Con spread:", unito);

// 9. Conversioni
console.log("\n9. Conversioni:\n");

let elementi = ["a", "b", "c", "d"];

// join() - array a stringa
let stringa = elementi.join("-");
console.log("Join con '-':", stringa);

// split() - stringa ad array (metodo di String)
let testo = "Hello,World,JavaScript";
let arrayDaStringa = testo.split(",");
console.log("Split da stringa:", arrayDaStringa);

// toString()
console.log("toString():", elementi.toString());

// 10. Array multidimensionali
console.log("\n10. Array multidimensionali:\n");

let matrice = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("Matrice:");
matrice.forEach(riga => console.log("  ", riga));

console.log("Elemento [1][2]:", matrice[1][2]); // 6

// Iterazione matrice
console.log("Tutti gli elementi:");
for (let i = 0; i < matrice.length; i++) {
  for (let j = 0; j < matrice[i].length; j++) {
    console.log(`  matrice[${i}][${j}] = ${matrice[i][j]}`);
  }
}

// 11. Destructuring e rest
console.log("\n11. Destructuring e rest:\n");

let valori = [10, 20, 30, 40, 50];

// Destructuring
let [primo2, secondo] = valori;
console.log("Primo:", primo2, "Secondo:", secondo);

// Con rest
let [a, b, ...resto] = valori;
console.log("a:", a, "b:", b, "resto:", resto);

// Swap con destructuring
let x = 1, y = 2;
[x, y] = [y, x];
console.log("Dopo swap - x:", x, "y:", y);

// 12. Array avanzati
console.log("\n12. Operazioni avanzate:\n");

// Rimozione duplicati
let conDuplicati = [1, 2, 2, 3, 3, 3, 4, 4, 5];
let unici = [...new Set(conDuplicati)];
console.log("Senza duplicati:", unici);

// Flat() - appiattisce array annidati
let annidato = [1, [2, 3], [4, [5, 6]]];
let piatto = annidato.flat(2); // 2 livelli di profondità
console.log("Appiattito:", piatto);

// FlatMap() - map + flat
let frasi = ["Ciao mondo", "JavaScript array"];
let parole2 = frasi.flatMap(frase => frase.split(" "));
console.log("FlatMap:", parole2);

// Fill() - riempie con valore
let riempito = new Array(5).fill(0);
console.log("Riempito con 0:", riempito);

console.log("\n💡 Best Practices:");
console.log("   - Preferire metodi funzionali (map, filter, reduce)");
console.log("   - Usare spread operator per copie superficiali");
console.log("   - Attenzione: sort() modifica l'array originale");
console.log("   - Usare const per array che non verranno riassegnati");
console.log("   - Preferire for...of a for classico per leggibilità");
