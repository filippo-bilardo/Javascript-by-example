/**
 * Esempio: Hoisting delle Funzioni
 * 
 * Questo esempio dimostra come le dichiarazioni di funzioni
 * vengono completamente sollevate, mentre le espressioni no.
 * 
 * Per eseguire: node 05_hoisting_funzioni.js
 */

console.log("=== HOISTING DELLE FUNZIONI ===\n");

// 1. Dichiarazione di funzione (function declaration)
console.log("1. Dichiarazione di funzione:\n");

saluta("Mario"); // Funziona! La funzione è sollevata completamente

function saluta(nome) {
  console.log(`Ciao, ${nome}!`);
}

console.log("\n✓ Le dichiarazioni di funzione sono completamente sollevate");
console.log("✓ Possiamo chiamarle prima della loro definizione nel codice");

// 2. Espressione di funzione (function expression)
console.log("\n2. Espressione di funzione:\n");

try {
  arrivederci("Mario"); // Errore!
} catch (e) {
  console.log("❌ Errore:", e.message);
}

var arrivederci = function(nome) {
  console.log(`Arrivederci, ${nome}!`);
};

arrivederci("Luigi"); // Ora funziona

console.log("\n✓ Le espressioni di funzione si comportano come variabili");
console.log("✓ Solo la dichiarazione var viene sollevata, non l'assegnazione");

// 3. Arrow function
console.log("\n3. Arrow function:\n");

try {
  benvenuto("Mario"); // Errore!
} catch (e) {
  console.log("❌ Errore:", e.message);
}

const benvenuto = (nome) => {
  console.log(`Benvenuto, ${nome}!`);
};

benvenuto("Carlo"); // Ora funziona

console.log("\n✓ Le arrow function si comportano come le espressioni");
console.log("✓ const non viene inizializzata durante l'hoisting (TDZ)");

// 4. Confronto pratico
console.log("\n4. Confronto tra dichiarazione ed espressione:\n");

// Dichiarazione - funziona prima
console.log("Chiamata prima della definizione:");
somma(5, 3);

function somma(a, b) {
  console.log(`${a} + ${b} = ${a + b}`);
}

// Espressione - NON funziona prima
console.log("\nEspressione con var:");
console.log("sottrazione prima:", typeof sottrazione); // "undefined"

var sottrazione = function(a, b) {
  console.log(`${a} - ${b} = ${a - b}`);
};

sottrazione(10, 4);

// 5. Ordine di hoisting
console.log("\n5. Ordine di hoisting:\n");

var valore = 42;

function test() {
  console.log("valore:", valore); // undefined
  console.log("funzioneInterna:", typeof funzioneInterna); // "function"
  
  var valore = 100; // variabile locale
  
  function funzioneInterna() {
    console.log("Sono una funzione interna");
  }
  
  funzioneInterna();
  console.log("valore finale:", valore);
}

test();

console.log("\n✓ Le funzioni vengono sollevate prima delle variabili");

// 6. Sovrascrizione
console.log("\n6. Sovrascrizione di funzioni:\n");

mostraMessaggio(); // Quale versione verrà chiamata?

function mostraMessaggio() {
  console.log("Prima versione");
}

function mostraMessaggio() {
  console.log("Seconda versione");
}

console.log("\n⚠️  La seconda dichiarazione sovrascrive la prima!");

// 7. Best practice
console.log("\n7. Best practice:\n");

// ✓ BUONO: Dichiarare le funzioni all'inizio
function calcola(x, y) {
  return x * y;
}

// ✓ BUONO: Usare const per espressioni di funzioni
const moltiplica = function(x, y) {
  return x * y;
};

// ✓ BUONO: Usare const per arrow functions
const dividi = (x, y) => {
  return y !== 0 ? x / y : "Errore: divisione per zero";
};

console.log("Calcola:", calcola(4, 5));
console.log("Moltiplica:", moltiplica(3, 7));
console.log("Dividi:", dividi(20, 4));

console.log("\n💡 Preferire le dichiarazioni di funzione per funzioni principali");
console.log("💡 Usare const con espressioni/arrow per callback e funzioni assegnate");
console.log("💡 Dichiarare sempre le funzioni prima di usarle per chiarezza");
