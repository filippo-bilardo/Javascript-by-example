/**
 * Esempio: Scope di Funzione
 * 
 * Questo esempio dimostra come le variabili dichiarate dentro
 * una funzione siano accessibili solo all'interno di essa.
 * 
 * Per eseguire: node 02_scope_funzione.js
 */

console.log("=== SCOPE DI FUNZIONE ===\n");

function calcolaPrezzo() {
  // Variabili locali alla funzione
  var prezzoBase = 100;
  let sconto = 0.15;
  const IVA = 0.22;
  
  var prezzoScontato = prezzoBase * (1 - sconto);
  var prezzoFinale = prezzoScontato * (1 + IVA);
  
  console.log("Dentro calcolaPrezzo():");
  console.log(`Prezzo base: €${prezzoBase}`);
  console.log(`Sconto: ${sconto * 100}%`);
  console.log(`IVA: ${IVA * 100}%`);
  console.log(`Prezzo finale: €${prezzoFinale.toFixed(2)}\n`);
  
  return prezzoFinale;
}

calcolaPrezzo();

// Tentativo di accesso alle variabili locali (causerà errori se decommentato)
// console.log(prezzoBase); // ReferenceError: prezzoBase is not defined
// console.log(sconto);     // ReferenceError: sconto is not defined
// console.log(IVA);        // ReferenceError: IVA is not defined

console.log("❌ Le variabili locali non sono accessibili fuori dalla funzione\n");

// Esempio di shadowing (variabile locale con stesso nome di una globale)
var temperatura = 20; // Variabile globale

function verificaTemperatura() {
  var temperatura = 25; // Variabile locale (shadowing)
  console.log("Shadowing - Temperatura locale nella funzione:", temperatura);
}

console.log("Temperatura globale:", temperatura);
verificaTemperatura();
console.log("Temperatura globale (invariata):", temperatura);

// Funzioni annidate
console.log("\n=== FUNZIONI ANNIDATE ===\n");

function esterna() {
  var messaggio = "Sono nella funzione esterna";
  var numero = 42;
  
  console.log("Funzione esterna:");
  console.log(messaggio);
  
  function interna() {
    var messaggioInterno = "Sono nella funzione interna";
    console.log("\nFunzione interna:");
    console.log(messaggioInterno);
    console.log("Accesso a variabile esterna:", messaggio); // OK
    console.log("Accesso a numero:", numero); // OK
  }
  
  interna();
  
  // console.log(messaggioInterno); // Errore se decommentato
}

esterna();

console.log("\n💡 Le funzioni interne possono accedere alle variabili delle funzioni esterne");
console.log("💡 Le funzioni esterne NON possono accedere alle variabili delle funzioni interne");
