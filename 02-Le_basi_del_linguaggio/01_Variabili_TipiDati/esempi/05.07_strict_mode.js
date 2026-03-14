/**
 * Esempio: Strict Mode
 * 
 * Lo strict mode attiva controlli più rigorosi in JavaScript,
 * prevenendo errori comuni e comportamenti problematici.
 * 
 * Per eseguire: node 07_strict_mode.js
 */

console.log("=== STRICT MODE ===\n");

// 1. Variabili non dichiarate
console.log("1. Variabili non dichiarate:\n");

function normalMode() {
  x = 10; // Crea automaticamente una variabile globale
  console.log("Normal mode - x:", x);
}

function strictModeTest() {
  "use strict";
  
  try {
    y = 20; // Errore in strict mode
    console.log("Strict mode - y:", y);
  } catch (e) {
    console.log("❌ Errore in strict mode:", e.message);
  }
}

normalMode();
strictModeTest();

console.log("\n✓ Strict mode previene la creazione accidentale di globali\n");

// 2. Assegnazioni che fallirebbero silenziosamente
console.log("2. Assegnazioni problematiche:\n");

function testAssignments() {
  "use strict";
  
  // Assegnazione a proprietà non scrivibile
  try {
    let obj = {};
    Object.defineProperty(obj, "readonly", {
      value: 42,
      writable: false
    });
    obj.readonly = 100; // Errore in strict mode
  } catch (e) {
    console.log("❌ Proprietà readonly:", e.message);
  }
  
  // Assegnazione a proprietà getter-only
  try {
    let obj2 = {
      get solo() { return 42; }
    };
    obj2.solo = 100; // Errore in strict mode
  } catch (e) {
    console.log("❌ Getter-only:", e.message);
  }
  
  // Assegnazione a oggetto non estendibile
  try {
    let obj3 = {};
    Object.preventExtensions(obj3);
    obj3.nuova = 100; // Errore in strict mode
  } catch (e) {
    console.log("❌ Oggetto non estendibile:", e.message);
  }
}

testAssignments();

console.log("\n✓ Strict mode genera errori invece di fallire silenziosamente\n");

// 3. Duplicazione di parametri
console.log("3. Parametri duplicati:\n");

// In normal mode (genera warning ma funziona)
function normalFunction(a, a, b) {
  return a + b; // Quale 'a'?
}

console.log("Normal mode - risultato:", normalFunction(1, 2, 3));

// In strict mode (errore di sintassi)
// Questo codice non può essere eseguito:
console.log("In strict mode, parametri duplicati causano SyntaxError");

// 4. Eliminazione di variabili
console.log("\n4. Eliminazione di variabili:\n");

function testDelete() {
  "use strict";
  
  let variabile = 42;
  
  try {
    delete variabile; // Errore in strict mode
  } catch (e) {
    console.log("❌ Delete variabile:", e.message);
  }
  
  // Delete su proprietà di oggetto è OK
  let obj = { prop: 42 };
  delete obj.prop; // Funziona
  console.log("✓ Delete su proprietà oggetto: OK");
}

testDelete();

// 5. Parole riservate
console.log("\n5. Parole riservate per versioni future:\n");

function testReserved() {
  "use strict";
  
  // Queste causerebbero errori in strict mode:
  // let let = 42;
  // let static = 42;
  // let interface = 42;
  // let private = 42;
  
  console.log("✓ Strict mode protegge parole riservate future");
}

testReserved();

// 6. this in funzioni
console.log("\n6. Valore di 'this' nelle funzioni:\n");

function normalThis() {
  console.log("Normal mode - this:", this); // global object o window
}

function strictThis() {
  "use strict";
  console.log("Strict mode - this:", this); // undefined
}

normalThis();
strictThis();

console.log("\n✓ In strict mode, 'this' è undefined se non specificato\n");

// 7. Ottali
console.log("7. Notazione ottale:\n");

function testOctal() {
  "use strict";
  
  // In normal mode: let otale = 0755; // funziona
  // In strict mode: causa SyntaxError
  
  let ottaleModerno = 0o755; // Sintassi ES6 corretta
  console.log("Ottale moderno (0o755):", ottaleModerno);
  
  console.log("✓ Strict mode previene la vecchia sintassi ottale 0755");
}

testOctal();

// 8. Applicazione pratica
console.log("\n8. Esempio pratico completo:\n");

"use strict"; // Applicato a tutto il file da qui in poi

function creaUtente(nome, email) {
  // Tutte le best practices sono ora forzate
  
  if (!nome || !email) {
    throw new Error("Nome e email sono obbligatori");
  }
  
  let utente = {
    nome: nome,
    email: email,
    isValid: function() {
      return this.email.includes("@");
    }
  };
  
  // Congela l'oggetto per renderlo immutabile
  Object.freeze(utente);
  
  return utente;
}

let utente = creaUtente("Mario Rossi", "mario@example.com");
console.log("Utente creato:", utente);
console.log("Email valida?", utente.isValid());

try {
  utente.nome = "Luigi Verdi"; // Errore, oggetto frozen
} catch (e) {
  console.log("❌ Tentativo di modifica:", e.message);
}

console.log("\n💡 Best Practices:");
console.log("   - Usare 'use strict' all'inizio dei file o funzioni");
console.log("   - Dichiarare sempre le variabili con let/const/var");
console.log("   - Evitare assegnamenti problematici");
console.log("   - Gestire errori esplicitamente invece di fallire silenziosamente");
console.log("   - Strict mode è automatico nei moduli ES6");
