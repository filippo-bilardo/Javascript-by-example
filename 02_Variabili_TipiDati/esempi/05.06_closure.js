/**
 * Esempio: Closure (Chiusure)
 * 
 * Una closure è una funzione che "ricorda" l'ambiente in cui
 * è stata creata, anche quando viene eseguita altrove.
 * 
 * Per eseguire: node 06_closure.js
 */

console.log("=== CLOSURE (CHIUSURE) ===\n");

// 1. Esempio base di closure
console.log("1. Esempio base:\n");

function esterna() {
  let messaggio = "Sono nell'ambiente esterno";
  
  function interna() {
    console.log(messaggio); // Accede a messaggio della funzione esterna
  }
  
  return interna; // Restituisce la funzione interna
}

let miaFunzione = esterna(); // miaFunzione è ora la funzione interna
miaFunzione(); // Stampa "Sono nell'ambiente esterno"

console.log("✓ La funzione interna 'ricorda' l'ambiente della funzione esterna\n");

// 2. Closure per creare funzioni private
console.log("2. Funzioni e variabili private:\n");

function creaContatore() {
  let conteggio = 0; // Variabile privata
  
  return {
    incrementa: function() {
      conteggio++;
      console.log(`Conteggio: ${conteggio}`);
      return conteggio;
    },
    decrementa: function() {
      conteggio--;
      console.log(`Conteggio: ${conteggio}`);
      return conteggio;
    },
    valore: function() {
      return conteggio;
    },
    reset: function() {
      conteggio = 0;
      console.log("Contatore azzerato");
    }
  };
}

let contatore1 = creaContatore();
contatore1.incrementa(); // 1
contatore1.incrementa(); // 2
contatore1.incrementa(); // 3
contatore1.decrementa(); // 2

// La variabile conteggio è privata!
// console.log(conteggio); // Errore se decommentato

let contatore2 = creaContatore(); // Nuovo contatore indipendente
contatore2.incrementa(); // 1 (non 3!)

console.log("\n✓ Ogni closure mantiene il proprio ambiente separato\n");

// 3. Closure per configurazione
console.log("3. Factory function con configurazione:\n");

function creaCalcolatrice(tassa) {
  return {
    calcolaPrezzo: function(prezzo) {
      let totale = prezzo * (1 + tassa);
      console.log(`Prezzo: €${prezzo} + ${tassa * 100}% = €${totale.toFixed(2)}`);
      return totale;
    }
  };
}

let calcolatriceIVA = creaCalcolatrice(0.22); // IVA 22%
let calcolatriceUSA = creaCalcolatrice(0.07); // Tax 7%

calcolatriceIVA.calcolaPrezzo(100);
calcolatriceUSA.calcolaPrezzo(100);

console.log("\n✓ Closure permette di 'congelare' configurazioni\n");

// 4. Closure nei loop (problema comune)
console.log("4. Problema comune con var nei loop:\n");

function creaFunzioniSbagliate() {
  var funzioni = [];
  
  for (var i = 0; i < 3; i++) {
    funzioni.push(function() {
      console.log(`Valore: ${i}`);
    });
  }
  
  return funzioni;
}

let funzioniSbagliate = creaFunzioniSbagliate();
console.log("Con var (tutte stampano 3):");
funzioniSbagliate[0](); // 3 (non 0!)
funzioniSbagliate[1](); // 3 (non 1!)
funzioniSbagliate[2](); // 3 (non 2!)

// Soluzione 1: usando let
function creaFunzioniCorrette() {
  var funzioni = [];
  
  for (let i = 0; i < 3; i++) { // let invece di var
    funzioni.push(function() {
      console.log(`Valore: ${i}`);
    });
  }
  
  return funzioni;
}

let funzioniCorrette = creaFunzioniCorrette();
console.log("\nCon let (ognuna ha il suo valore):");
funzioniCorrette[0](); // 0
funzioniCorrette[1](); // 1
funzioniCorrette[2](); // 2

// Soluzione 2: usando IIFE (vecchio metodo)
function creaFunzioniIIFE() {
  var funzioni = [];
  
  for (var i = 0; i < 3; i++) {
    funzioni.push((function(indice) {
      return function() {
        console.log(`Valore: ${indice}`);
      };
    })(i)); // IIFE cattura il valore di i
  }
  
  return funzioni;
}

let funzioniIIFE = creaFunzioniIIFE();
console.log("\nCon IIFE (metodo classico):");
funzioniIIFE[0](); // 0
funzioniIIFE[1](); // 1
funzioniIIFE[2](); // 2

// 5. Closure per eventi ritardati
console.log("\n5. Closure con setTimeout:\n");

function impostaTimer(nome, secondi) {
  console.log(`Timer impostato per ${nome}...`);
  
  setTimeout(function() {
    console.log(`⏰ ${nome}: ${secondi} secondi trascorsi!`);
  }, secondi * 1000);
}

impostaTimer("Timer A", 1);
impostaTimer("Timer B", 2);
impostaTimer("Timer C", 3);

// 6. Closure per memoization
console.log("\n6. Memoization con closure:\n");

function creaFibonacci() {
  let cache = {};
  
  return function fibonacci(n) {
    if (n in cache) {
      console.log(`Cache hit per n=${n}`);
      return cache[n];
    }
    
    console.log(`Calcolo fibonacci(${n})`);
    
    if (n <= 1) {
      return n;
    }
    
    let risultato = fibonacci(n - 1) + fibonacci(n - 2);
    cache[n] = risultato;
    return risultato;
  };
}

let fib = creaFibonacci();
console.log(`fibonacci(5) = ${fib(5)}`);
console.log(`fibonacci(6) = ${fib(6)}`); // Usa valori in cache
console.log(`fibonacci(7) = ${fib(7)}`); // Usa valori in cache

console.log("\n💡 Le closure sono potenti per:");
console.log("   - Creare variabili e funzioni private");
console.log("   - Factory functions con configurazione");
console.log("   - Gestire eventi asincroni");
console.log("   - Implementare memoization e caching");
