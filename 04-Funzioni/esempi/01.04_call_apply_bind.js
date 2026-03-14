/**
 * METODI DI INVOCAZIONE: call(), apply(), bind()
 * 
 * JavaScript offre tre metodi per controllare il valore di 'this'
 * e invocare funzioni con un contesto specifico.
 * 
 * - call(thisArg, arg1, arg2, ...): invoca con this e argomenti separati
 * - apply(thisArg, [args]): invoca con this e array di argomenti
 * - bind(thisArg): crea nuova funzione con this legato
 */

console.log("=== 1. IL PROBLEMA DI 'this' ===\n");

// In JavaScript, 'this' dipende da COME viene chiamata la funzione
function mostraThis() {
  console.log("this:", this);
}

// Invocazione diretta → this è undefined (strict mode) o global
// mostraThis();  // undefined o window/global

// Come metodo → this è l'oggetto
const obj1 = {
  nome: "Oggetto1",
  mostra: mostraThis
};

obj1.mostra();  // this è obj1

// Problema: perdita del contesto
const metodo = obj1.mostra;
// metodo();  // this è undefined!


console.log("\n=== 2. METODO call() ===\n");

// call() invoca la funzione specificando 'this'
// Sintassi: funzione.call(thisArg, arg1, arg2, ...)

function saluta(saluto, punteggiatura) {
  return saluto + ", " + this.nome + punteggiatura;
}

const persona1 = { nome: "Mario" };
const persona2 = { nome: "Luigi" };

// Usa call per specificare 'this'
console.log(saluta.call(persona1, "Ciao", "!"));
console.log(saluta.call(persona2, "Hello", "."));

// Senza argomenti extra
function presentati() {
  return "Sono " + this.nome;
}

console.log(presentati.call(persona1));
console.log(presentati.call(persona2));


console.log("\n=== 3. METODO apply() ===\n");

// apply() è come call() ma accetta array di argomenti
// Sintassi: funzione.apply(thisArg, [args])

function somma(a, b, c) {
  console.log("this.nome:", this.nome);
  return a + b + c;
}

const obj = { nome: "Calcolatrice" };

// Con call: argomenti separati
const res1 = somma.call(obj, 1, 2, 3);
console.log("Con call:", res1);

// Con apply: array di argomenti
const res2 = somma.apply(obj, [1, 2, 3]);
console.log("Con apply:", res2);

// Utile con array esistenti
const numeri = [10, 20, 30];
const res3 = somma.apply(obj, numeri);
console.log("Con array:", res3);


console.log("\n=== 4. CONFRONTO call vs apply ===\n");

function operazione(op, a, b) {
  console.log(`${this.nome}: ${a} ${op} ${b}`);
  if (op === "+") return a + b;
  if (op === "*") return a * b;
  return 0;
}

const calc = { nome: "MiaCalc" };

// call: argomenti separati
console.log("call:", operazione.call(calc, "+", 5, 3));
console.log("call:", operazione.call(calc, "*", 5, 3));

// apply: array
console.log("apply:", operazione.apply(calc, ["+", 5, 3]));
console.log("apply:", operazione.apply(calc, ["*", 5, 3]));

// Quando serve apply: numero variabile di argomenti
const args1 = ["+", 10, 20];
const args2 = ["*", 5, 8];

console.log("dinamico 1:", operazione.apply(calc, args1));
console.log("dinamico 2:", operazione.apply(calc, args2));


console.log("\n=== 5. METODO bind() ===\n");

// bind() NON invoca la funzione, ma CREA una nuova funzione
// con 'this' permanentemente legato
// Sintassi: funzione.bind(thisArg, arg1, arg2, ...)

function info() {
  return this.nome + " (" + this.età + " anni)";
}

const utente1 = { nome: "Mario", età: 30 };
const utente2 = { nome: "Anna", età: 25 };

// Crea funzioni con this legato
const infoMario = info.bind(utente1);
const infoAnna = info.bind(utente2);

console.log(infoMario());  // "Mario (30 anni)"
console.log(infoAnna());   // "Anna (25 anni)"

// Anche se riassegnata, this rimane legato
const temp = infoMario;
console.log(temp());  // Ancora "Mario (30 anni)"


console.log("\n=== 6. PARTIAL APPLICATION con bind() ===\n");

// bind() può anche pre-configurare argomenti
function moltiplica(a, b) {
  return a * b;
}

// Lega il primo argomento
const doppio = moltiplica.bind(null, 2);
const triplo = moltiplica.bind(null, 3);

console.log("doppio(5):", doppio(5));    // 2 * 5 = 10
console.log("triplo(5):", triplo(5));    // 3 * 5 = 15

// Con this e argomenti
function calcola(op, a, b) {
  console.log("Context:", this.nome);
  if (op === "+") return a + b;
  if (op === "*") return a * b;
  return 0;
}

const calculator = { nome: "SuperCalc" };

const sommaCon = calcola.bind(calculator, "+");
const moltCon = calcola.bind(calculator, "*");

console.log("\nsommaCon(5, 3):", sommaCon(5, 3));
console.log("moltCon(5, 3):", moltCon(5, 3));


console.log("\n=== 7. BORROWING METHODS ===\n");

// Usare metodi di un oggetto su un altro

const persona = {
  nome: "Mario",
  saluta: function(frase) {
    return frase + ", sono " + this.nome;
  }
};

const animale = {
  nome: "Fido"
};

// "Presta" il metodo di persona ad animale
console.log(persona.saluta.call(animale, "Bau"));

// Array methods su array-like
const arrayLike = {
  0: "a",
  1: "b",
  2: "c",
  length: 3
};

// Usa slice di Array
const arr = Array.prototype.slice.call(arrayLike);
console.log("Array da array-like:", arr);

// Usa join
const str = Array.prototype.join.call(arrayLike, "-");
console.log("Join:", str);


console.log("\n=== 8. CASI D'USO CON Math ===\n");

// Math.max e Math.min non accettano array
const valori = [5, 2, 9, 1, 7];

// ❌ Non funziona
console.log("Math.max(valori):", Math.max(valori));  // NaN

// ✓ Con apply
console.log("Math.max.apply(null, valori):", Math.max.apply(null, valori));
console.log("Math.min.apply(null, valori):", Math.min.apply(null, valori));

// ✓ Alternativa moderna: spread
console.log("Math.max(...valori):", Math.max(...valori));
console.log("Math.min(...valori):", Math.min(...valori));


console.log("\n=== 9. EVENT HANDLERS ===\n");

// Problema comune: perdita di this nei callback

const bottone = {
  testo: "Cliccami",
  clicks: 0,
  
  // Metodo normale
  handleClick: function() {
    this.clicks++;
    console.log(this.testo + " - Click #" + this.clicks);
  }
};

// Simulazione event listener
const simulaClick = (handler) => {
  handler();  // 'this' perso!
};

// ❌ Non funziona
// simulaClick(bottone.handleClick);  // Errore: this è undefined

// ✓ Soluzione 1: bind
simulaClick(bottone.handleClick.bind(bottone));

// ✓ Soluzione 2: arrow function
simulaClick(() => bottone.handleClick());

// ✓ Soluzione 3: call
const handleClickBound = function() {
  bottone.handleClick.call(bottone);
};
simulaClick(handleClickBound);


console.log("\n=== 10. CASI D'USO PRATICI ===\n");

// 1. Logger con contesto
const logger = {
  prefix: "[LOG]",
  
  log: function(...args) {
    console.log(this.prefix, ...args);
  },
  
  error: function(...args) {
    console.log(this.prefix, "[ERROR]", ...args);
  }
};

// Crea logger dedicati
const appLogger = {
  prefix: "[APP]"
};

const dbLogger = {
  prefix: "[DB]"
};

console.log("1. Logger con contesto:");
logger.log.call(appLogger, "Applicazione avviata");
logger.log.call(dbLogger, "Connessione al database");
logger.error.call(appLogger, "Errore critico");

// 2. Method chaining con bind
const calculator2 = {
  valore: 0,
  
  set: function(n) {
    this.valore = n;
    return this;
  },
  
  add: function(n) {
    this.valore += n;
    return this;
  },
  
  multiply: function(n) {
    this.valore *= n;
    return this;
  },
  
  result: function() {
    return this.valore;
  }
};

console.log("\n2. Method chaining:");
const risultato = calculator2
  .set(5)
  .add(3)
  .multiply(2)
  .result();
console.log("Risultato:", risultato);  // (5+3)*2 = 16

// 3. Validatori con contesto
const validatore = {
  regole: {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    telefono: /^\d{10}$/
  },
  
  valida: function(tipo, valore) {
    if (!this.regole[tipo]) {
      return false;
    }
    return this.regole[tipo].test(valore);
  }
};

const validatoreCustom = {
  regole: {
    codice: /^[A-Z]{3}\d{3}$/
  }
};

console.log("\n3. Validatori:");
console.log("Email valida?", validatore.valida("email", "test@example.com"));
console.log("Codice valido?", validatore.valida.call(validatoreCustom, "codice", "ABC123"));

// 4. Debounce con bind
function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

const input = {
  valore: "",
  
  onChange: function(newValue) {
    this.valore = newValue;
    console.log("  Valore aggiornato:", this.valore);
  }
};

const debouncedChange = debounce(input.onChange.bind(input), 300);

console.log("\n4. Debounce (simulazione):");
debouncedChange("a");
debouncedChange("ab");
debouncedChange("abc");

// 5. Factory di funzioni bound
function creaContatore(nome) {
  return {
    nome: nome,
    count: 0,
    
    incrementa: function() {
      this.count++;
      return this.count;
    },
    
    getInfo: function() {
      return this.nome + ": " + this.count;
    }
  };
}

const contatore1 = creaContatore("Counter1");
const contatore2 = creaContatore("Counter2");

// Crea versioni bound
const inc1 = contatore1.incrementa.bind(contatore1);
const inc2 = contatore2.incrementa.bind(contatore2);

console.log("\n5. Contatori:");
inc1(); inc1(); inc1();
inc2(); inc2();

console.log(contatore1.getInfo());
console.log(contatore2.getInfo());

console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO call, apply, bind");
console.log("=".repeat(50));
console.log(`
CALL:
• func.call(thisArg, arg1, arg2, ...)
• Invoca SUBITO con this e argomenti separati
• Usa quando: argomenti conosciuti e separati

APPLY:
• func.apply(thisArg, [args])
• Invoca SUBITO con this e array di argomenti
• Usa quando: argomenti in array o numero variabile

BIND:
• func.bind(thisArg, arg1, ...)
• NON invoca, CREA nuova funzione con this fisso
• Usa quando: serve funzione da riusare con this legato

Quando usare:
✓ call: borrowing methods, this dinamico
✓ apply: con array di argomenti, Math.max/min
✓ bind: event handlers, callback, partial application

Differenze chiave:
• call/apply → eseguono subito
• bind → crea nuova funzione
• call → argomenti separati
• apply → array di argomenti
• bind → può pre-configurare argomenti (partial)
`);
