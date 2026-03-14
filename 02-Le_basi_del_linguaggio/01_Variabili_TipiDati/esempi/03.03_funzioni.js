/**
 * Esempio: Funzioni in JavaScript
 * 
 * Le funzioni sono oggetti di prima classe in JavaScript,
 * possono essere assegnate, passate e restituite.
 * 
 * Per eseguire: node 10_funzioni.js
 */

console.log("=== FUNZIONI IN JAVASCRIPT ===\n");

// 1. Dichiarazione di funzioni
console.log("1. Dichiarazione di funzioni:\n");

// Function declaration
function saluta(nome) {
  return `Ciao, ${nome}!`;
}

console.log(saluta("Mario"));

// Function expression
const somma = function(a, b) {
  return a + b;
};

console.log("Somma:", somma(5, 3));

// Arrow function (ES6)
const moltiplica = (a, b) => a * b;
console.log("Moltiplica:", moltiplica(4, 5));

// Arrow function con corpo
const dividi = (a, b) => {
  if (b === 0) {
    return "Errore: divisione per zero";
  }
  return a / b;
};

console.log("Dividi:", dividi(10, 2));

// 2. Parametri
console.log("\n2. Parametri delle funzioni:\n");

// Parametri di default
function salutaPersonalizzato(nome = "Ospite", ora = "giorno") {
  return `Buon${ora}, ${nome}!`;
}

console.log(salutaPersonalizzato());
console.log(salutaPersonalizzato("Mario"));
console.log(salutaPersonalizzato("Luigi", "a sera"));

// Rest parameters (numero variabile di argomenti)
function sommaNumeri(...numeri) {
  return numeri.reduce((totale, n) => totale + n, 0);
}

console.log("Somma multipla:", sommaNumeri(1, 2, 3, 4, 5));
console.log("Somma 2 numeri:", sommaNumeri(10, 20));

// Destructuring nei parametri
function mostraUtente({ nome, età, città = "Non specificata" }) {
  console.log(`${nome}, ${età} anni, da ${città}`);
}

mostraUtente({ nome: "Mario", età: 30, città: "Roma" });
mostraUtente({ nome: "Luigi", età: 25 }); // città usa default

// 3. Return
console.log("\n3. Valore di ritorno:\n");

// Return esplicito
function quadrato(n) {
  return n * n;
}

console.log("Quadrato di 5:", quadrato(5));

// Return implicito in arrow function
const cubo = n => n * n * n;
console.log("Cubo di 3:", cubo(3));

// Return di oggetto (attenzione alle parentesi!)
const creaPersona = (nome, età) => ({ nome, età });
console.log("Persona:", creaPersona("Mario", 30));

// Return multipli
function categoriaEtà(età) {
  if (età < 13) return "Bambino";
  if (età < 20) return "Adolescente";
  if (età < 65) return "Adulto";
  return "Anziano";
}

console.log("Categoria:", categoriaEtà(25));

// 4. Funzioni come valori
console.log("\n4. Funzioni come valori (first-class):\n");

// Assegnazione a variabile
const f = function() { return "Sono una funzione"; };
console.log(f());

// In array
const operazioni = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => a / b
];

console.log("10 + 5 =", operazioni[0](10, 5));
console.log("10 - 5 =", operazioni[1](10, 5));

// In oggetto (metodi)
const calcolatrice = {
  somma: (a, b) => a + b,
  sottrai: (a, b) => a - b,
  risultato(a, b, operazione) {
    return operazione(a, b);
  }
};

console.log("Calc somma:", calcolatrice.somma(7, 3));
console.log("Calc custom:", calcolatrice.risultato(10, 2, (a, b) => a ** b));

// 5. Higher-order functions (funzioni che ricevono/restituiscono funzioni)
console.log("\n5. Higher-order functions:\n");

// Funzione che riceve funzione
function applicaOperazione(a, b, operazione) {
  return operazione(a, b);
}

console.log("Applica somma:", applicaOperazione(5, 3, (x, y) => x + y));
console.log("Applica max:", applicaOperazione(5, 3, Math.max));

// Funzione che restituisce funzione
function creaMultiplicatore(fattore) {
  return function(numero) {
    return numero * fattore;
  };
}

const raddoppia = creaMultiplicatore(2);
const triplica = creaMultiplicatore(3);

console.log("Raddoppia 5:", raddoppia(5));
console.log("Triplica 5:", triplica(5));

// 6. Callback
console.log("\n6. Callback:\n");

function processaArray(array, callback) {
  const risultato = [];
  for (let elemento of array) {
    risultato.push(callback(elemento));
  }
  return risultato;
}

let numeri = [1, 2, 3, 4, 5];
let quadrati = processaArray(numeri, n => n * n);
let doppi = processaArray(numeri, n => n * 2);

console.log("Quadrati:", quadrati);
console.log("Doppi:", doppi);

// 7. IIFE (Immediately Invoked Function Expression)
console.log("\n7. IIFE:\n");

(function() {
  let privato = "Variabile privata";
  console.log("IIFE eseguita:", privato);
})();

// Con parametri
let risultato = (function(a, b) {
  return a + b;
})(10, 20);

console.log("IIFE con parametri:", risultato);

// 8. Recursione
console.log("\n8. Funzioni ricorsive:\n");

// Fattoriale
function fattoriale(n) {
  if (n <= 1) return 1;
  return n * fattoriale(n - 1);
}

console.log("Fattoriale di 5:", fattoriale(5));

// Fibonacci
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci(7):", fibonacci(7));

// Countdown
function countdown(n) {
  if (n < 0) return;
  console.log(`  ${n}`);
  countdown(n - 1);
}

console.log("Countdown da 5:");
countdown(5);

// 9. Funzioni costruttore
console.log("\n9. Funzioni costruttore:\n");

function Persona(nome, età) {
  this.nome = nome;
  this.età = età;
  this.saluta = function() {
    return `Ciao, sono ${this.nome}`;
  };
}

let mario = new Persona("Mario", 30);
let luigi = new Persona("Luigi", 25);

console.log(mario.saluta());
console.log(luigi.saluta());
console.log("Mario ha", mario.età, "anni");

// 10. Arrow function e this
console.log("\n10. Arrow function e 'this':\n");

const oggetto = {
  nome: "Test",
  
  // Metodo tradizionale - this funziona
  metodoTradizionale: function() {
    console.log("  Tradizionale this.nome:", this.nome);
  },
  
  // Arrow function - this NON si riferisce all'oggetto
  metodoArrow: () => {
    console.log("  Arrow this.nome:", this.nome); // undefined
  },
  
  // Metodo che usa arrow function internamente
  metodoConTimer: function() {
    setTimeout(() => {
      // Arrow function eredita this dal contesto esterno
      console.log("  Timer this.nome:", this.nome);
    }, 100);
  }
};

oggetto.metodoTradizionale();
oggetto.metodoArrow();
oggetto.metodoConTimer();

// 11. Currying
setTimeout(() => {
  console.log("\n11. Currying:\n");
  
  // Trasforma f(a, b, c) in f(a)(b)(c)
  function sommaBase(a, b, c) {
    return a + b + c;
  }
  
  function sommaCurried(a) {
    return function(b) {
      return function(c) {
        return a + b + c;
      };
    };
  }
  
  console.log("Somma normale:", sommaBase(1, 2, 3));
  console.log("Somma curried:", sommaCurried(1)(2)(3));
  
  // Con arrow functions
  const sommaCurriedArrow = a => b => c => a + b + c;
  console.log("Curried arrow:", sommaCurriedArrow(1)(2)(3));
  
  // Applicazione parziale
  const somma5 = sommaCurried(5);
  const somma5e10 = somma5(10);
  console.log("Applicazione parziale:", somma5e10(15)); // 30
  
  // 12. Composizione di funzioni
  console.log("\n12. Composizione di funzioni:\n");
  
  const aggiungi10 = x => x + 10;
  const moltiplica2 = x => x * 2;
  const sottrai5 = x => x - 5;
  
  // Composizione manuale
  const risultato1 = sottrai5(moltiplica2(aggiungi10(5))); // ((5+10)*2)-5 = 25
  console.log("Composizione manuale:", risultato1);
  
  // Funzione di composizione
  const componi = (...funzioni) => x => 
    funzioni.reduceRight((valore, fn) => fn(valore), x);
  
  const elabora = componi(sottrai5, moltiplica2, aggiungi10);
  console.log("Con funzione componi:", elabora(5));
  
  console.log("\n💡 Best Practices:");
  console.log("   - Usare arrow function per callback brevi");
  console.log("   - Usare function declaration per funzioni principali");
  console.log("   - Evitare arrow function come metodi di oggetti");
  console.log("   - Preferire funzioni pure (senza side effects)");
  console.log("   - Usare nomi descrittivi per le funzioni");
}, 200);
