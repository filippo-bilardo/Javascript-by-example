/**
 * Esempio: Scope Globale
 * 
 * Questo esempio dimostra come le variabili globali siano
 * accessibili da qualsiasi parte del programma.
 * 
 * Per eseguire: node 01_scope_globale.js
 */

console.log("=== SCOPE GLOBALE ===\n");

// Variabili globali - accessibili ovunque
var nomeUtente = "Mario Rossi";
let eta = 25;
const PAESE = "Italia";

console.log("Variabili globali dichiarate:");
console.log(`Nome: ${nomeUtente}`);
console.log(`Età: ${eta}`);
console.log(`Paese: ${PAESE}\n`);

// Funzione che accede alle variabili globali
function mostraProfilo() {
  console.log("Accesso da funzione mostraProfilo():");
  console.log(`${nomeUtente}, ${eta} anni, ${PAESE}`);
}

mostraProfilo();

// Blocco if che accede alle variabili globali
if (true) {
  console.log("\nAccesso da blocco if:");
  console.log(`Il signor ${nomeUtente} è maggiorenne: ${eta >= 18}`);
}

// Modifica di variabile globale dentro una funzione
function modificaEta() {
  eta = 26; // Modifica la variabile globale
  console.log("\nVariabile globale modificata dalla funzione");
}

modificaEta();
console.log(`Nuova età: ${eta}`);

// ATTENZIONE: Variabile globale accidentale (senza dichiarazione)
function creaGlobaleAccidentale() {
  citta = "Roma"; // Senza var/let/const diventa globale!
  console.log("\n⚠️  Variabile globale accidentale creata (cattiva pratica)");
}

creaGlobaleAccidentale();
console.log(`Città: ${citta}`); // Accessibile qui!

console.log("\n💡 Best Practice: Evitare variabili globali quando possibile");
console.log("💡 Usare sempre var/let/const per dichiarare variabili");
