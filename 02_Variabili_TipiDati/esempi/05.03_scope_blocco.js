/**
 * Esempio: Scope di Blocco
 * 
 * Questo esempio dimostra la differenza tra var (function scope)
 * e let/const (block scope).
 * 
 * Per eseguire: node 03_scope_blocco.js
 */

console.log("=== SCOPE DI BLOCCO ===\n");

// Differenza tra var e let/const nei blocchi
console.log("1. Differenza tra var, let e const in un blocco if:\n");

if (true) {
  var varVariable = "Sono var - scope di funzione";
  let letVariable = "Sono let - scope di blocco";
  const constVariable = "Sono const - scope di blocco";
  
  console.log("Dentro il blocco if:");
  console.log(varVariable);
  console.log(letVariable);
  console.log(constVariable);
}

console.log("\nFuori dal blocco if:");
console.log("var:", varVariable); // Accessibile
try {
  console.log("let:", letVariable); // Errore
} catch (e) {
  console.log("let: ❌", e.message);
}
try {
  console.log("const:", constVariable); // Errore
} catch (e) {
  console.log("const: ❌", e.message);
}

// Esempio con ciclo for
console.log("\n2. var vs let nei cicli for:\n");

console.log("Con var:");
for (var i = 0; i < 3; i++) {
  console.log(`Dentro loop: i = ${i}`);
}
console.log(`Fuori loop: i = ${i}`); // i è ancora accessibile!

console.log("\nCon let:");
for (let j = 0; j < 3; j++) {
  console.log(`Dentro loop: j = ${j}`);
}
try {
  console.log(`Fuori loop: j = ${j}`);
} catch (e) {
  console.log(`Fuori loop: ❌ ${e.message}`);
}

// Problema comune con var nei loop
console.log("\n3. Problema classico con var nei timeout:\n");

console.log("Con var (comportamento inaspettato):");
for (var k = 1; k <= 3; k++) {
  setTimeout(function() {
    console.log(`Timeout var: ${k}`); // Stamperà sempre 4!
  }, k * 100);
}

setTimeout(function() {
  console.log("\nCon let (comportamento corretto):");
  for (let k = 1; k <= 3; k++) {
    setTimeout(function() {
      console.log(`Timeout let: ${k}`); // Stamperà 1, 2, 3
    }, k * 100);
  }
}, 500);

// Blocchi switch
setTimeout(function() {
  console.log("\n4. Scope nei blocchi switch:\n");
  
  let valore = 2;
  
  switch (valore) {
    case 1:
      let risultato = "Uno";
      console.log(risultato);
      break;
    case 2: {
      // Necessario creare un blocco per usare let/const con stesso nome
      let risultato = "Due";
      const MESSAGGIO = "Hai scelto due";
      console.log(risultato, "-", MESSAGGIO);
      break;
    }
    case 3: {
      let risultato = "Tre";
      console.log(risultato);
      break;
    }
  }
  
  console.log("\n💡 Usare let e const per evitare problemi di scope");
  console.log("💡 var non rispetta lo scope di blocco!");
}, 800);
