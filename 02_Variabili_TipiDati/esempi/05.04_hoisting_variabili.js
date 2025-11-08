/**
 * Esempio: Hoisting delle Variabili
 * 
 * Questo esempio dimostra come JavaScript "solleva" le dichiarazioni
 * di variabili all'inizio del loro scope.
 * 
 * Per eseguire: node 04_hoisting_variabili.js
 */

console.log("=== HOISTING DELLE VARIABILI ===\n");

// 1. Hoisting di var
console.log("1. Hoisting con var:\n");

console.log("Prima della dichiarazione:", x); // undefined (non errore!)
var x = 10;
console.log("Dopo la dichiarazione:", x); // 10

console.log("\nCosa succede realmente:");
console.log("var x;              // dichiarazione sollevata");
console.log("console.log(x);     // undefined");
console.log("x = 10;             // assegnazione");
console.log("console.log(x);     // 10");

// 2. Hoisting di let (Temporal Dead Zone)
console.log("\n2. Hoisting con let (Temporal Dead Zone):\n");

try {
  console.log("Prima della dichiarazione:", y);
  let y = 20;
} catch (e) {
  console.log("❌ Errore:", e.message);
  console.log("let viene sollevata ma non inizializzata!");
}

let y = 20; // Dichiarazione corretta
console.log("Dopo la dichiarazione:", y);

// 3. Hoisting di const
console.log("\n3. Hoisting con const:\n");

try {
  console.log("Prima della dichiarazione:", z);
  const z = 30;
} catch (e) {
  console.log("❌ Errore:", e.message);
  console.log("const si comporta come let!");
}

const z = 30; // Dichiarazione corretta
console.log("Dopo la dichiarazione:", z);

// 4. Hoisting in funzioni
console.log("\n4. Hoisting dentro funzioni:\n");

function esempio() {
  console.log("a prima della dichiarazione:", a); // undefined
  var a = 100;
  console.log("a dopo la dichiarazione:", a); // 100
  
  try {
    console.log("b prima della dichiarazione:", b);
    let b = 200;
  } catch (e) {
    console.log("❌ Errore con let:", e.message);
  }
}

esempio();

// 5. Hoisting e scope di blocco
console.log("\n5. Hoisting e scope di blocco:\n");

function testBlocco() {
  console.log("Inizio funzione - m:", m); // undefined
  
  if (true) {
    console.log("Dentro if - m:", m); // undefined
    var m = "var è sollevata a livello di funzione";
    console.log("Dopo dichiarazione - m:", m);
  }
  
  console.log("Fine funzione - m:", m); // accessibile!
  
  if (true) {
    // console.log(n); // Errore se decommentato (TDZ)
    let n = "let è sollevata solo nel blocco";
    console.log("Dentro if - n:", n);
  }
  
  // console.log(n); // Errore se decommentato
}

testBlocco();

// 6. Problema comune con hoisting
console.log("\n6. Problema comune con hoisting:\n");

var nome = "Mario";

function saluta() {
  console.log("Ciao", nome); // undefined (non "Mario"!)
  var nome = "Luigi"; // Questa dichiarazione viene sollevata
  console.log("Ciao", nome); // Luigi
}

saluta();

console.log("\nPerché succede:");
console.log("La var nome locale viene sollevata all'inizio della funzione,");
console.log("facendo 'shadow' alla variabile globale!");

console.log("\n💡 Dichiarare sempre le variabili all'inizio del loro scope");
console.log("💡 Preferire let e const per evitare problemi di hoisting");
console.log("💡 La Temporal Dead Zone protegge da errori con let/const");
