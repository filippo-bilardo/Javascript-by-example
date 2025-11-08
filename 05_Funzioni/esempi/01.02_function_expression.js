/**
 * ESPRESSIONI DI FUNZIONE - FUNCTION EXPRESSION
 * 
 * Una function expression definisce una funzione come parte di un'espressione.
 * Sintassi: let nome = function(parametri) { corpo }
 * 
 * Caratteristiche chiave:
 * - NO hoisting: deve essere definita prima dell'uso
 * - Può essere anonima o nominata
 * - Può essere assegnata a variabili, passata come argomento, restituita
 */

console.log("=== 1. SINTASSI BASE ===\n");

// Function expression anonima
let saluta = function() {
  return "Ciao!";
};

console.log(saluta());  // "Ciao!"

// Function expression con parametri
let somma = function(a, b) {
  return a + b;
};

console.log("Somma(5, 3):", somma(5, 3));

// Function expression nominata (utile per debugging e ricorsione)
let fattoriale = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);  // Usa il nome interno
};

console.log("Fattoriale(5):", fattoriale(5));


console.log("\n=== 2. NO HOISTING ===\n");

// ❌ Questo causerebbe un errore!
// console.log(moltiplica(2, 3));  // ReferenceError: Cannot access before initialization

// ✓ Definisci prima, usa dopo
let moltiplica = function(a, b) {
  return a * b;
};

console.log("Moltiplica(2, 3):", moltiplica(2, 3));  // OK

// Confronto con function declaration
console.log("\nCon declaration (hoisting funziona):");
console.log("Dividi(10, 2):", dividi(10, 2));  // OK anche prima!

function dividi(a, b) {
  return a / b;
}


console.log("\n=== 3. ASSEGNAZIONE A VARIABILI ===\n");

// Assegnazione con let
let calcola1 = function(x) {
  return x * 2;
};

// Assegnazione con const (preferito per funzioni)
// Perché non dovrebbe essere riassegnata
const calcola2 = function(x) {
  return x * 3;
};

console.log("calcola1(5):", calcola1(5));
console.log("calcola2(5):", calcola2(5));

// Riassegnazione con let (possibile ma sconsigliato)
calcola1 = function(x) {
  return x * 10;
};
console.log("calcola1 riassegnato(5):", calcola1(5));

// calcola2 = function(x) { return x; };  // ❌ Errore con const!


console.log("\n=== 4. FUNZIONI COME VALORI ===\n");

// Funzioni in array
const operazioni = [
  function(x) { return x + 1; },
  function(x) { return x * 2; },
  function(x) { return x * x; }
];

let num = 5;
console.log("Applica operazioni a", num);
operazioni.forEach((op, i) => {
  console.log(`  Operazione ${i}:`, op(num));
});

// Funzioni in oggetti
const calcolatrice = {
  somma: function(a, b) { return a + b; },
  sottrai: function(a, b) { return a - b; },
  moltiplica: function(a, b) { return a * b; },
  dividi: function(a, b) { return b !== 0 ? a / b : "Errore"; }
};

console.log("\nCalcolatrice:");
console.log("  10 + 5 =", calcolatrice.somma(10, 5));
console.log("  10 - 5 =", calcolatrice.sottrai(10, 5));
console.log("  10 * 5 =", calcolatrice.moltiplica(10, 5));
console.log("  10 / 5 =", calcolatrice.dividi(10, 5));


console.log("\n=== 5. CALLBACK FUNCTIONS ===\n");

// Funzione che accetta callback
function elaboraDati(dati, callback) {
  console.log("Elaborazione in corso...");
  let risultato = callback(dati);
  console.log("Elaborazione completata");
  return risultato;
}

// Callback come function expression
let raddoppia = function(arr) {
  return arr.map(function(x) { return x * 2; });
};

let numeri = [1, 2, 3, 4, 5];
let risultato = elaboraDati(numeri, raddoppia);
console.log("Risultato:", risultato);

// Callback inline
let sommaArray = elaboraDati(numeri, function(arr) {
  return arr.reduce(function(acc, x) { return acc + x; }, 0);
});
console.log("Somma array:", sommaArray);


console.log("\n=== 6. HIGHER-ORDER FUNCTIONS ===\n");

// Funzione che restituisce funzione
let creaContatore = function() {
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
};

let contatore1 = creaContatore();
console.log("Contatore1:", contatore1());  // 1
console.log("Contatore1:", contatore1());  // 2
console.log("Contatore1:", contatore1());  // 3

let contatore2 = creaContatore();
console.log("\nContatore2:", contatore2());  // 1 (nuovo contatore)

// Funzione che accetta e restituisce funzioni
let creaOperazione = function(operatore) {
  if (operatore === "+") {
    return function(a, b) { return a + b; };
  }
  if (operatore === "*") {
    return function(a, b) { return a * b; };
  }
  return function() { return 0; };
};

let sommaOp = creaOperazione("+");
let multOp = creaOperazione("*");

console.log("\nOperazioni create:");
console.log("  sommaOp(3, 4):", sommaOp(3, 4));
console.log("  multOp(3, 4):", multOp(3, 4));


console.log("\n=== 7. CLOSURE ===\n");

// Closure: funzione interna accede a variabili esterne
let creaSaluto = function(saluto) {
  return function(nome) {
    return saluto + ", " + nome + "!";
  };
};

let salutaItaliano = creaSaluto("Ciao");
let salutaInglese = creaSaluto("Hello");

console.log(salutaItaliano("Mario"));   // "Ciao, Mario!"
console.log(salutaInglese("John"));     // "Hello, John!"

// Closure per privacy (private variables)
let creaPersona = function(nomeIniziale) {
  let nome = nomeIniziale;  // Variabile privata
  
  return {
    getNome: function() {
      return nome;
    },
    setNome: function(nuovoNome) {
      if (nuovoNome && nuovoNome.length > 0) {
        nome = nuovoNome;
      }
    }
  };
};

let persona = creaPersona("Mario");
console.log("\nPersona:", persona.getNome());
persona.setNome("Luigi");
console.log("Dopo set:", persona.getNome());
// console.log(persona.nome);  // undefined (privato!)


console.log("\n=== 8. FUNCTION EXPRESSION VS DECLARATION ===\n");

console.log("Confronto:");

// Declaration: disponibile subito (hoisting)
console.log("  1. Declaration (prima):", decl(5));
function decl(x) { return x * 2; }
console.log("  2. Declaration (dopo):", decl(5));

// Expression: disponibile solo dopo definizione
// console.log("  1. Expression (prima):", expr(5));  // ❌ Errore!
let expr = function(x) { return x * 2; };
console.log("  2. Expression (dopo):", expr(5));

// Declaration: può essere ridefinita
function test1() { return "Prima"; }
console.log("\ntest1 prima:", test1());
function test1() { return "Dopo"; }  // Ridefinita
console.log("test1 dopo:", test1());

// Expression con const: non può essere riassegnata
const test2 = function() { return "Prima"; };
console.log("test2:", test2());
// test2 = function() { return "Dopo"; };  // ❌ Errore!


console.log("\n=== 9. CONDITIONAL FUNCTION ASSIGNMENT ===\n");

// Assegnare funzioni diverse in base a condizioni
let ambiente = "produzione";

let logger = ambiente === "sviluppo"
  ? function(msg) { console.log("[DEV]", msg); }
  : function(msg) { /* non logga in produzione */ };

logger("Questo è un log");  // Non stampa nulla in produzione

// Cambia ambiente
ambiente = "sviluppo";
logger = ambiente === "sviluppo"
  ? function(msg) { console.log("[DEV]", msg); }
  : function(msg) { /* non logga in produzione */ };

logger("Questo è un log");  // Stampa in sviluppo


console.log("\n=== 10. CASI D'USO PRATICI ===\n");

// 1. Event handlers (simulazione)
const button = {
  listeners: [],
  addEventListener: function(event, handler) {
    this.listeners.push({ event, handler });
  },
  click: function() {
    this.listeners
      .filter(l => l.event === "click")
      .forEach(l => l.handler());
  }
};

button.addEventListener("click", function() {
  console.log("1. Button clicked!");
});

button.click();

// 2. Array methods con callback
const prodotti = [
  { nome: "Libro", prezzo: 15 },
  { nome: "Penna", prezzo: 2 },
  { nome: "Quaderno", prezzo: 5 }
];

const economici = prodotti.filter(function(p) {
  return p.prezzo < 10;
});

console.log("\n2. Prodotti economici:", economici.map(p => p.nome));

// 3. Timer callbacks
console.log("\n3. Timer (setTimeout simulato):");
const simulateTimeout = function(callback, delay) {
  console.log(`  Attendi ${delay}ms...`);
  callback();
};

simulateTimeout(function() {
  console.log("  Callback eseguito!");
}, 1000);

// 4. Factory functions
const creaUtente = function(nome, ruolo) {
  return {
    nome: nome,
    ruolo: ruolo,
    info: function() {
      return this.nome + " (" + this.ruolo + ")";
    }
  };
};

const utente1 = creaUtente("Mario", "Admin");
const utente2 = creaUtente("Luigi", "User");

console.log("\n4. Utenti:");
console.log("  ", utente1.info());
console.log("  ", utente2.info());

// 5. Module pattern
const modulo = (function() {
  // Private
  let privato = "Segreto";
  
  let funzionePrivata = function() {
    return "Funzione privata: " + privato;
  };
  
  // Public
  return {
    pubblica: function() {
      return "Funzione pubblica";
    },
    usaPrivato: function() {
      return funzionePrivata();
    }
  };
})();

console.log("\n5. Module pattern:");
console.log("  ", modulo.pubblica());
console.log("  ", modulo.usaPrivato());
// console.log(modulo.privato);  // undefined
// console.log(modulo.funzionePrivata);  // undefined

console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO FUNCTION EXPRESSION");
console.log("=".repeat(50));
console.log(`
Sintassi: let/const nome = function(param) { return val; }

Caratteristiche:
✓ NO hoisting (usa dopo definizione)
✓ Può essere anonima
✓ Può essere assegnata a variabili
✓ Prima-class value (passabile, restituibile)

Quando usare:
✓ Callback functions
✓ Higher-order functions
✓ Closure e privacy
✓ Conditional assignment
✓ Metodi in oggetti

Vantaggi:
✓ Controllo su quando disponibile
✓ Può essere riassegnata (con let)
✓ Ideale per functional programming
✓ Closure naturali

Preferisci const per function expression!
`);
