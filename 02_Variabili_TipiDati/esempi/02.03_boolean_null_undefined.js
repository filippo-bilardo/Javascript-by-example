/**
 * Esempio: Boolean, Undefined, Null
 * 
 * Questi tipi primitivi rappresentano valori logici e
 * l'assenza di valore in JavaScript.
 * 
 * Per eseguire: node 03.03_boolean_null_undefined.js
 */

console.log("=== BOOLEAN, UNDEFINED, NULL ===\n");

// ========== BOOLEAN ==========
console.log("📌 BOOLEAN\n");

// 1. Valori boolean
console.log("1. Valori boolean:\n");

let vero = true;
let falso = false;

console.log("true:", vero);
console.log("false:", falso);
console.log("typeof true:", typeof true);

// 2. Operatori di confronto (restituiscono boolean)
console.log("\n2. Operatori di confronto:\n");

console.log("10 > 5:", 10 > 5);
console.log("10 < 5:", 10 < 5);
console.log("10 >= 10:", 10 >= 10);
console.log("10 <= 5:", 10 <= 5);

console.log("\n5 == '5':", 5 == '5'); // true (conversione di tipo)
console.log("5 === '5':", 5 === '5'); // false (confronto rigoroso)
console.log("5 != '5':", 5 != '5');
console.log("5 !== '5':", 5 !== '5');

// 3. Operatori logici
console.log("\n3. Operatori logici:\n");

console.log("AND (&&):");
console.log("  true && true:", true && true);
console.log("  true && false:", true && false);
console.log("  false && false:", false && false);

console.log("\nOR (||):");
console.log("  true || false:", true || false);
console.log("  false || false:", false || false);
console.log("  false || true:", false || true);

console.log("\nNOT (!):");
console.log("  !true:", !true);
console.log("  !false:", !false);
console.log("  !!true:", !!true); // Double negation

// 4. Short-circuit evaluation
console.log("\n4. Short-circuit evaluation:\n");

let a = 10;
let b = 0;

// AND - se il primo è false, non valuta il secondo
console.log("false && (qualsiasi):", false && console.log("Non eseguito"));
console.log("true && 'eseguito':", true && "eseguito");

// OR - se il primo è true, non valuta il secondo
console.log("true || (qualsiasi):", true || console.log("Non eseguito"));
console.log("false || 'eseguito':", false || "eseguito");

// Uso pratico
let username = "" || "Guest"; // Valore di default
console.log("Username:", username);

let userInput = "Mario" || "Guest";
console.log("UserInput:", userInput);

// 5. Valori truthy e falsy
console.log("\n5. Valori truthy e falsy:\n");

// Falsy values (convertiti a false)
console.log("Falsy values:");
console.log("  Boolean(false):", Boolean(false));
console.log("  Boolean(0):", Boolean(0));
console.log("  Boolean(-0):", Boolean(-0));
console.log("  Boolean(''):", Boolean(""));
console.log("  Boolean(null):", Boolean(null));
console.log("  Boolean(undefined):", Boolean(undefined));
console.log("  Boolean(NaN):", Boolean(NaN));

// Tutti gli altri sono truthy
console.log("\nTruthy values:");
console.log("  Boolean(true):", Boolean(true));
console.log("  Boolean(1):", Boolean(1));
console.log("  Boolean(-1):", Boolean(-1));
console.log("  Boolean('hello'):", Boolean("hello"));
console.log("  Boolean('0'):", Boolean("0")); // String "0" è truthy!
console.log("  Boolean([]):", Boolean([])); // Array vuoto è truthy
console.log("  Boolean({}):", Boolean({})); // Oggetto vuoto è truthy

// 6. Conversione esplicita a boolean
console.log("\n6. Conversione a boolean:\n");

// Con Boolean()
console.log("Boolean(1):", Boolean(1));
console.log("Boolean(0):", Boolean(0));
console.log("Boolean('ciao'):", Boolean("ciao"));

// Con double negation !!
console.log("!!1:", !!1);
console.log("!!0:", !!0);
console.log("!!'ciao':", !!"ciao");
console.log("!!'':", !!"");

// 7. Uso in condizioni
console.log("\n7. Uso pratico in condizioni:\n");

let età = 25;
let maggiorenne = età >= 18;
console.log("Maggiorenne?", maggiorenne);

if (maggiorenne) {
  console.log("Accesso consentito");
}

// Ternary operator
let stato = maggiorenne ? "Adulto" : "Minore";
console.log("Stato:", stato);

// ========== UNDEFINED ==========
console.log("\n\n📌 UNDEFINED\n");

// 1. Quando si ottiene undefined
console.log("1. Casi di undefined:\n");

// Variabile dichiarata ma non assegnata
let variabileNonAssegnata;
console.log("Variabile non assegnata:", variabileNonAssegnata);
console.log("typeof undefined:", typeof variabileNonAssegnata);

// Proprietà inesistente
let obj = { nome: "Mario" };
console.log("Proprietà inesistente:", obj.cognome);

// Funzione senza return
function senzaReturn() {
  // Nessun return
}
console.log("Funzione senza return:", senzaReturn());

// Parametro non fornito
function saluta(nome) {
  console.log("Nome parametro:", nome);
}
saluta(); // undefined

// Array oltre la lunghezza
let arr = [1, 2, 3];
console.log("Array[10]:", arr[10]);

// 2. Verifica di undefined
console.log("\n2. Verifica di undefined:\n");

let valore;

console.log("valore === undefined:", valore === undefined);
console.log("typeof valore === 'undefined':", typeof valore === "undefined");

// Uso pratico - valori di default
function saluta2(nome) {
  if (nome === undefined) {
    nome = "Guest";
  }
  return `Ciao ${nome}!`;
}
console.log(saluta2());
console.log(saluta2("Mario"));

// Con ES6 default parameters
function saluta3(nome = "Guest") {
  return `Ciao ${nome}!`;
}
console.log(saluta3());

// ========== NULL ==========
console.log("\n\n📌 NULL\n");

// 1. Uso di null
console.log("1. Uso di null:\n");

let vuoto = null;
console.log("Valore null:", vuoto);
console.log("typeof null:", typeof null); // "object" - bug storico!

// Null rappresenta assenza intenzionale
let utente = null; // Nessun utente loggato
console.log("Utente:", utente);

// 2. Differenza null vs undefined
console.log("\n2. Null vs Undefined:\n");

let nonDefinito;
let intenzionalmenteVuoto = null;

console.log("undefined:", nonDefinito);
console.log("null:", intenzionalmenteVuoto);

console.log("\ntypeof undefined:", typeof nonDefinito);
console.log("typeof null:", typeof intenzionalmenteVuoto);

console.log("\nundefined == null:", undefined == null); // true
console.log("undefined === null:", undefined === null); // false

// 3. Quando usare null vs undefined
console.log("\n3. Quando usare cosa:\n");

console.log("Undefined:");
console.log("  - Variabile non inizializzata");
console.log("  - Parametro non fornito");
console.log("  - Proprietà inesistente");
console.log("  - Return implicito");

console.log("\nNull:");
console.log("  - Assenza intenzionale di valore");
console.log("  - Reset di una variabile");
console.log("  - API che possono non restituire nulla");

// 4. Verifica di null
console.log("\n4. Verifica di null:\n");

let dato = null;

console.log("dato === null:", dato === null);
console.log("dato == null:", dato == null); // true anche per undefined!
console.log("dato == undefined:", dato == undefined); // true!

// Verifica null o undefined
console.log("dato == null (null o undefined):", dato == null);

// Nullish coalescing operator ?? (ES2020)
let valore1 = null;
let valore2 = undefined;
let valore3 = 0;
let valore4 = "";

console.log("\nNullish coalescing (??):");
console.log("null ?? 'default':", valore1 ?? "default");
console.log("undefined ?? 'default':", valore2 ?? "default");
console.log("0 ?? 'default':", valore3 ?? "default"); // 0 (non null/undefined)
console.log("'' ?? 'default':", valore4 ?? "default"); // '' (non null/undefined)

// Confronto con OR
console.log("\nConfonto con ||:");
console.log("0 || 'default':", valore3 || "default"); // 'default'
console.log("'' || 'default':", valore4 || "default"); // 'default'

// 5. Optional chaining ?. (ES2020)
console.log("\n5. Optional chaining (?.):\n");

let user = {
  nome: "Mario",
  indirizzo: {
    via: "Via Roma",
    città: "Milano"
  }
};

let userSenzaIndirizzo = {
  nome: "Luigi"
};

// Senza optional chaining - errore se proprietà non esiste
// console.log(userSenzaIndirizzo.indirizzo.città); // TypeError

// Con optional chaining
console.log("user.indirizzo?.città:", user.indirizzo?.città);
console.log("userSenzaIndirizzo.indirizzo?.città:", 
  userSenzaIndirizzo.indirizzo?.città); // undefined, non errore

// Con array
let utenti = [{ nome: "Mario" }, { nome: "Luigi" }];
console.log("utenti[0]?.nome:", utenti[0]?.nome);
console.log("utenti[10]?.nome:", utenti[10]?.nome);

// Con funzioni
let oggetto = {
  metodo: function() { return "Eseguito"; }
};
console.log("oggetto.metodo?.():", oggetto.metodo?.());
console.log("oggetto.altro?.():", oggetto.altro?.()); // undefined, non errore

// 6. Casi d'uso pratici
console.log("\n6. Casi d'uso pratici:\n");

// Controllo valori
function elaboraDati(dati) {
  if (dati === null || dati === undefined) {
    console.log("Nessun dato da elaborare");
    return;
  }
  console.log("Elaboro:", dati);
}

elaboraDati(null);
elaboraDati(undefined);
elaboraDati({ id: 1 });

// Valori di default con ??
function creaConfig(opzioni) {
  const config = {
    timeout: opzioni?.timeout ?? 3000,
    retry: opzioni?.retry ?? 3,
    debug: opzioni?.debug ?? false
  };
  return config;
}

console.log("\nConfig default:", creaConfig());
console.log("Config custom:", creaConfig({ timeout: 5000 }));

console.log("\n💡 Best Practices:");
console.log("   - Usare === per confronti boolean");
console.log("   - Usare ?? invece di || per valori di default");
console.log("   - Usare ?. per accesso sicuro a proprietà");
console.log("   - Preferire undefined per valori non inizializzati");
console.log("   - Usare null per rappresentare 'nessun valore' intenzionale");
