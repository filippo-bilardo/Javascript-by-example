# Esercizi su Scope e Hoisting in JavaScript

## Indice
1. [Esercizi Base](#esercizi-base)
2. [Esercizi Intermedi](#esercizi-intermedi)
3. [Esercizi Avanzati](#esercizi-avanzati)
4. [Progetti Completi](#progetti-completi)
5. [Soluzioni](#soluzioni)

---

## Esercizi Base

### Esercizio 1.1 - Scope Globale vs Locale
**Obiettivo**: Comprendere la differenza tra scope globale e locale.

Scrivi un programma Node.js che:
- Dichiara variabili in scope globale
- Dichiara variabili in funzioni (scope locale)
- Dimostra l'accessibilità delle variabili
- Mostra shadowing (variabili con stesso nome in scope diversi)

**Test:**
```bash
node es1_1.js
```

**Output atteso:**
```
=== Scope Globale ===
Variabile globale: 10

=== Scope Locale ===
Dentro funzione - locale: 20
Dentro funzione - globale: 10

=== Shadowing ===
Dentro funzione - x: 30 (locale)
Fuori funzione - x: 10 (globale)
```

---

### Esercizio 1.2 - Block Scope con let e const
**Obiettivo**: Comprendere lo scope di blocco introdotto con let/const.

Scrivi un programma che:
- Usa let/const dentro blocchi if/for
- Prova ad accedere alle variabili fuori dal blocco
- Confronta con var che non ha block scope
- Dimostra con esempi pratici

**Esempio:**
```javascript
if (true) {
  let x = 10;
  const y = 20;
  var z = 30;
}
// Quali variabili sono accessibili qui?
```

---

### Esercizio 1.3 - Hoisting di var
**Obiettivo**: Comprendere il meccanismo di hoisting con var.

Scrivi un programma che:
- Usa variabili var prima della dichiarazione
- Mostra che la dichiarazione è "sollevata" ma non l'inizializzazione
- Confronta con let/const (Temporal Dead Zone)
- Spiega il comportamento

**Test casi:**
```javascript
console.log(x); // Cosa stampa?
var x = 10;

console.log(y); // Cosa succede?
let y = 20;
```

---

### Esercizio 1.4 - Hoisting di Funzioni
**Obiettivo**: Comprendere l'hoisting delle dichiarazioni di funzione.

Scrivi un programma che:
- Chiama funzioni prima della loro dichiarazione
- Confronta function declaration vs function expression
- Mostra che function declaration sono completamente sollevate
- Dimostra con esempi

**Esempio:**
```javascript
saluta(); // Funziona?

function saluta() {
  console.log("Ciao!");
}

saluta2(); // Funziona?

const saluta2 = function() {
  console.log("Ciao!");
};
```

---

### Esercizio 1.5 - Closure Base
**Obiettivo**: Comprendere il concetto di closure.

Scrivi un programma che:
- Crea una funzione che ritorna un'altra funzione
- La funzione interna accede a variabili della funzione esterna
- Dimostra che la closure "ricorda" il suo ambiente
- Include esempi pratici

**Esempio:**
```javascript
function creaContatore() {
  let conteggio = 0;
  
  return function() {
    conteggio++;
    return conteggio;
  };
}

const contatore = creaContatore();
// Usa il contatore...
```

---

## Esercizi Intermedi

### Esercizio 2.1 - Scope Chain Exploration
**Obiettivo**: Comprendere la catena di scope.

Scrivi un programma con funzioni annidate a 3-4 livelli:

```javascript
const globale = "GLOBALE";

function livello1() {
  const var1 = "LIVELLO_1";
  
  function livello2() {
    const var2 = "LIVELLO_2";
    
    function livello3() {
      const var3 = "LIVELLO_3";
      
      // Quale variabili sono accessibili qui?
      // In quale ordine vengono cercate?
      
      console.log(globale); // Da dove viene?
      console.log(var1); // Da dove viene?
      console.log(var2); // Da dove viene?
      console.log(var3); // Da dove viene?
    }
    
    livello3();
  }
  
  livello2();
}

livello1();

// Aggiungi:
// 1. Shadowing a diversi livelli
// 2. Stampa che mostra la risoluzione delle variabili
// 3. Diagramma testuale della scope chain
```

---

### Esercizio 2.2 - Temporal Dead Zone (TDZ)
**Obiettivo**: Comprendere la Temporal Dead Zone di let/const.

Scrivi un programma che:

```javascript
function testTDZ() {
  console.log("Inizio funzione");
  
  // TDZ per x inizia qui
  
  // Cosa succede se accedi a x qui?
  // console.log(x); // ???
  
  // x è ancora nella TDZ qui
  
  let x = 10; // TDZ per x finisce qui
  
  console.log(x); // OK
  
  if (true) {
    // TDZ per y inizia qui
    
    // console.log(y); // ???
    
    let y = 20; // TDZ per y finisce qui
    
    console.log(y); // OK
  }
}

// Implementa:
// 1. Test di tutti i casi di TDZ
// 2. Cattura e spiega gli errori
// 3. Confronto con var (no TDZ)
// 4. Casi complessi (funzioni annidate, loops)
```

---

### Esercizio 2.3 - Closure per Dati Privati
**Obiettivo**: Usare closure per incapsulamento.

Scrivi un programma che implementa pattern per dati privati:

```javascript
// Pattern 1: Simple Counter
function creaContatore(iniziale = 0) {
  let conteggio = iniziale; // Variabile privata
  
  return {
    incrementa() { return ++conteggio; },
    decrementa() { return --conteggio; },
    reset() { conteggio = iniziale; },
    valore() { return conteggio; }
  };
}

// Pattern 2: Bank Account
function creaContoBancario(saldoIniziale) {
  let saldo = saldoIniziale; // Privato
  const transazioni = []; // Privato
  
  return {
    deposita(importo) {
      // Valida e deposita
      // Registra transazione
    },
    preleva(importo) {
      // Valida e preleva
      // Registra transazione
    },
    getSaldo() {
      return saldo;
    },
    getStorico() {
      return [...transazioni]; // Copia per sicurezza
    }
  };
}

// Pattern 3: User Session
function creaSessione(userId) {
  // Implementa gestione sessione con dati privati
}

// Test tutti i pattern
```

---

### Esercizio 2.4 - Closure in Loops (Problema Classico)
**Obiettivo**: Risolvere il problema delle closure nei loop.

Scrivi un programma che dimostra il problema e le soluzioni:

```javascript
// PROBLEMA con var
console.log("=== Problema con var ===");
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // Stampa sempre 3!
  }, 100);
}

// SOLUZIONE 1: let (block scope)
console.log("\n=== Soluzione 1: let ===");
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // Stampa 0, 1, 2
  }, 100);
}

// SOLUZIONE 2: IIFE
console.log("\n=== Soluzione 2: IIFE ===");
for (var i = 0; i < 3; i++) {
  (function(i) {
    setTimeout(function() {
      console.log(i); // Stampa 0, 1, 2
    }, 100);
  })(i);
}

// SOLUZIONE 3: forEach
console.log("\n=== Soluzione 3: forEach ===");
[0, 1, 2].forEach(function(i) {
  setTimeout(function() {
    console.log(i); // Stampa 0, 1, 2
  }, 100);
});

// ESERCIZIO:
// 1. Spiega perché si verifica il problema
// 2. Spiega come ogni soluzione lo risolve
// 3. Crea esempio pratico (es. event handlers su bottoni)
```

---

### Esercizio 2.5 - IIFE Pattern
**Obiettivo**: Utilizzare Immediately Invoked Function Expression.

Scrivi un programma che usa IIFE per:

```javascript
// 1. Creare scope isolato
(function() {
  const privato = "Non accessibile fuori";
  console.log("IIFE eseguita");
})();

// console.log(privato); // Errore

// 2. Module Pattern
const modulo = (function() {
  // Variabili private
  let stato = 0;
  
  // API pubblica
  return {
    getStato() { return stato; },
    incrementa() { stato++; }
  };
})();

// 3. Namespace pattern
const MiaApp = (function() {
  // Namespace isolato per evitare collisioni
  
  return {
    utils: {
      // utility functions
    },
    config: {
      // configuration
    }
  };
})();

// ESERCIZIO:
// Implementa:
// - Plugin system con IIFE
// - Config loader
// - Feature detection module
```

---

## Esercizi Avanzati

### Esercizio 3.1 - Scope Analyzer Tool
**Obiettivo**: Creare tool che analizza scope nel codice.

Scrivi un programma che:

```javascript
class ScopeAnalyzer {
  analyze(code) {
    // Analizza il codice e mostra:
    // - Scope tree
    // - Variabili per scope
    // - Shadowing
    // - Closure
  }
  
  visualize(scopeTree) {
    // Visualizza graficamente la struttura
  }
  
  findVariable(name) {
    // Trova dove una variabile è definita
  }
}

// Esempio
const analyzer = new ScopeAnalyzer();

const code = `
const globale = 1;

function outer() {
  const x = 10;
  
  function inner() {
    const y = 20;
    console.log(x, y, globale);
  }
  
  inner();
}

outer();
`;

const result = analyzer.analyze(code);

/* Output:
SCOPE TREE
══════════
Global Scope
├─ globale: 1
└─ outer (function)
   └─ Function Scope (outer)
      ├─ x: 10
      └─ inner (function)
         └─ Function Scope (inner)
            ├─ y: 20
            └─ Accesses from outer scopes:
               - x (from outer)
               - globale (from global)
*/

analyzer.visualize(result);
```

---

### Esercizio 3.2 - Advanced Closure Patterns
**Obiettivo**: Implementare pattern avanzati con closure.

Scrivi un programma che implementa:

```javascript
// 1. Memoization
function memoize(fn) {
  const cache = new Map();
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      console.log('Cache hit!');
      return cache.get(key);
    }
    
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

const fibonacci = memoize(function(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

// 2. Partial Application
function partial(fn, ...fixedArgs) {
  return function(...remainingArgs) {
    return fn(...fixedArgs, ...remainingArgs);
  };
}

function sum(a, b, c) {
  return a + b + c;
}

const add5 = partial(sum, 5);
console.log(add5(10, 15)); // 30

// 3. Currying
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function(...nextArgs) {
      return curried(...args, ...nextArgs);
    };
  };
}

const curriedSum = curry((a, b, c) => a + b + c);
console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6

// 4. Once (execute only once)
function once(fn) {
  let called = false;
  let result;
  
  return function(...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}

// 5. Debounce
function debounce(fn, delay) {
  let timeoutId;
  
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

// 6. Throttle
function throttle(fn, limit) {
  let inThrottle;
  
  return function(...args) {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// TEST tutti i pattern
```

---

### Esercizio 3.3 - Module System Implementation
**Obiettivo**: Implementare un semplice module system.

Scrivi un programma che:

```javascript
class ModuleSystem {
  constructor() {
    this.modules = new Map();
    this.globalScope = {};
  }
  
  define(name, dependencies, factory) {
    // Definisce un modulo
    // dependencies: array di nomi moduli
    // factory: function che ritorna exports
  }
  
  require(name) {
    // Carica e ritorna un modulo
    // Gestisce dipendenze circolari
  }
  
  resolve(name) {
    // Risolve il path del modulo
  }
}

// Uso
const modules = new ModuleSystem();

// Definisci moduli
modules.define('math', [], function() {
  return {
    add: (a, b) => a + b,
    multiply: (a, b) => a * b
  };
});

modules.define('calculator', ['math'], function(math) {
  return {
    calculate: (expr) => {
      // Usa math module
    }
  };
});

// Usa moduli
const calc = modules.require('calculator');
console.log(calc.calculate('2 + 3'));

// FEATURES AVANZATE:
// - Lazy loading
// - Hot module replacement
// - Dependency injection
// - Plugin system
```

---

### Esercizio 3.4 - Hoisting Simulator
**Obiettivo**: Simulare il processo di hoisting di JavaScript.

Scrivi un programma che:

```javascript
class HoistingSimulator {
  simulate(code) {
    // Analizza il codice
    // Mostra come JS lo "trasforma" internamente
  }
  
  showPhases(code) {
    // Mostra le fasi:
    // 1. Creation phase (hoisting)
    // 2. Execution phase
  }
}

const simulator = new HoistingSimulator();

const code = `
console.log(x);
var x = 10;

foo();
function foo() {
  console.log("foo");
}

bar();
var bar = function() {
  console.log("bar");
};
`;

simulator.showPhases(code);

/* Output:
═══ CREATION PHASE (Hoisting) ═══

Codice trasformato internamente:
─────────────────────────────────
var x = undefined;  // Dichiarazione sollevata
function foo() {    // Funzione sollevata completamente
  console.log("foo");
}
var bar = undefined; // Solo dichiarazione sollevata

console.log(x);
x = 10;

foo();

bar();
bar = function() {
  console.log("bar");
};


═══ EXECUTION PHASE ═══

Step 1: console.log(x)
  → x è undefined (dichiarato ma non inizializzato)
  → Output: undefined

Step 2: x = 10
  → x viene assegnato il valore 10

Step 3: foo()
  → foo è già definita (hoisting completo)
  → Output: "foo"

Step 4: bar()
  → bar è undefined (non ancora assegnata la funzione)
  → Errore: bar is not a function

[Esecuzione interrotta]
*/
```

---

### Esercizio 3.5 - Scope-safe Constructor
**Obiettivo**: Creare costruttori safe rispetto allo scope.

Scrivi un programma che:

```javascript
// PROBLEMA: costruttore chiamato senza new
function Persona(nome) {
  this.nome = nome; // this è global se chiamato senza new!
}

const p1 = Persona("Mario"); // Errore! Inquina scope globale
console.log(global.nome); // "Mario" (male!)

// SOLUZIONE 1: Check instanceof
function PersonaSafe1(nome) {
  if (!(this instanceof PersonaSafe1)) {
    return new PersonaSafe1(nome);
  }
  this.nome = nome;
}

// SOLUZIONE 2: new.target (ES6)
function PersonaSafe2(nome) {
  if (!new.target) {
    return new PersonaSafe2(nome);
  }
  this.nome = nome;
}

// SOLUZIONE 3: Factory pattern
function creaPersona(nome) {
  return {
    nome,
    saluta() {
      return `Ciao, sono ${this.nome}`;
    }
  };
}

// SOLUZIONE 4: Class (ES6)
class Persona {
  constructor(nome) {
    this.nome = nome;
  }
  
  saluta() {
    return `Ciao, sono ${this.nome}`;
  }
}

// ESERCIZIO:
// Implementa utility per rendere safe qualsiasi costruttore
function makeSafe(Constructor) {
  // Wrappa il costruttore rendendolo safe
}

// Test
function Test(value) {
  this.value = value;
}

const SafeTest = makeSafe(Test);
const t1 = SafeTest(42); // Funziona anche senza new
const t2 = new SafeTest(42); // Funziona anche con new
```

---

## Progetti Completi

### Progetto 1 - JavaScript Debugger/REPL

Crea REPL interattivo che mostra scope e hoisting:

**Funzionalità:**
- Esegui codice step-by-step
- Visualizza scope tree in tempo reale
- Mostra hoisting transformation
- Evidenzia TDZ
- Traccia closure
- Visualizza scope chain
- Breakpoint e watch variables

**Esempio:**
```
╔════════════════════════════════════════════╗
║     JavaScript Scope Debugger v1.0         ║
╚════════════════════════════════════════════╝

> const x = 10;
> function outer() {
>   const y = 20;
>   function inner() {
>     console.log(x, y);
>   }
>   return inner;
> }
> const fn = outer();

SCOPE ANALYSIS:
═══════════════

Global Scope
├─ x: 10
├─ outer: function
└─ fn: function (closure)

outer() execution created:
├─ y: 20
└─ inner: function
   └─ Captures: x (global), y (outer)

> fn()

Executing inner() with captured scope:
  x: 10 (from global)
  y: 20 (from outer - closure)

Output: 10 20

───────────────────────────────────────────
Commands: [s]tep [n]ext [c]ontinue [q]uit
         [b]reakpoint [w]atch [scope] [help]
```

---

### Progetto 2 - Dependency Injection Container

Crea container DI che sfrutta scope e closure:

**Funzionalità:**
- Registrazione servizi
- Risoluzione dipendenze
- Scope management (singleton, transient, scoped)
- Lazy loading
- Circular dependency detection
- Lifetime management

**Esempio:**
```javascript
const container = new DIContainer();

// Registra servizi
container.register('logger', () => {
  return {
    log: (msg) => console.log(`[LOG] ${msg}`)
  };
}, { lifetime: 'singleton' });

container.register('database', ['logger'], (logger) => {
  return {
    query: (sql) => {
      logger.log(`Executing: ${sql}`);
      // ...
    }
  };
}, { lifetime: 'singleton' });

container.register('userService', ['database', 'logger'], (db, logger) => {
  return {
    getUser: (id) => {
      logger.log(`Getting user ${id}`);
      return db.query(`SELECT * FROM users WHERE id = ${id}`);
    }
  };
}, { lifetime: 'transient' });

// Risolvi e usa
const userService = container.resolve('userService');
userService.getUser(1);

// Scopes
const scope = container.createScope();
const scopedService = scope.resolve('userService');
scope.dispose(); // Pulisce scope
```

---

### Progetto 3 - Memory Leak Detector

Crea tool per rilevare memory leak causati da closure:

**Funzionalità:**
- Analizza closure attive
- Detecta riferimenti pendenti
- Identifica potenziali leak
- Suggerisce fix
- Memory profiling
- GC simulation

**Esempio:**
```javascript
const detector = new MemoryLeakDetector();

// Codice con potenziale leak
function createLeak() {
  const bigData = new Array(1000000).fill('x');
  
  return function() {
    console.log(bigData[0]); // Mantiene bigData in memoria!
  };
}

const leaks = [];
for (let i = 0; i < 100; i++) {
  leaks.push(createLeak());
}

// Analisi
const report = detector.analyze(leaks);

console.log(report);
/*
═══ MEMORY LEAK ANALYSIS ═══

⚠️  POTENTIAL LEAK DETECTED

Function: anonymous (createLeak)
Location: line 5
Retained memory: ~100 MB

Closure captures:
  └─ bigData: Array(1000000) [~1 MB each × 100 instances]

Issue: Large array captured unnecessarily
Suggestion: 
  - Extract only needed data before creating closure
  - Use WeakMap for large objects
  - Clear references when done

Example fix:
─────────────
function createLeak() {
  const bigData = new Array(1000000).fill('x');
  const firstItem = bigData[0]; // Extract only what's needed
  
  return function() {
    console.log(firstItem); // Uses only small value
  };
}
*/
```

---

### Progetto 4 - Scope Management Library

Crea libreria per gestione avanzata dello scope:

**Funzionalità:**
- Isolamento scope
- Context management
- Variable binding
- Scope hierarchy
- Permission system
- Sandboxing

**Esempio:**
```javascript
const scopeManager = new ScopeManager();

// Crea scope isolati
const scope1 = scopeManager.createScope({
  name: 'Scope1',
  parent: 'global',
  variables: {
    x: 10,
    y: 20
  }
});

const scope2 = scopeManager.createScope({
  name: 'Scope2',
  parent: scope1,
  variables: {
    z: 30
  }
});

// Esegui codice in scope specifico
scope2.execute(function() {
  console.log(x, y, z); // 10, 20, 30
});

// Permessi
scope2.restrict(['x']); // x diventa read-only
scope2.execute(function() {
  x = 100; // Errore!
});

// Sandbox per codice non fidato
const sandbox = scopeManager.createSandbox({
  allowed: ['console.log', 'Math'],
  timeout: 1000,
  memoryLimit: 1024 * 1024 // 1MB
});

sandbox.run(`
  console.log("Hello from sandbox");
  Math.sqrt(16);
  
  // fetch() // Not allowed!
  // while(true) {} // Timeout!
`);
```

---

### Progetto 5 - Closure Performance Optimizer

Crea tool che ottimizza performance delle closure:

**Funzionalità:**
- Analizza closure overhead
- Identifica optimizations
- Automatic refactoring
- Benchmark comparison
- Memory profiling

**Esempio:**
```javascript
const optimizer = new ClosureOptimizer();

// Codice non ottimizzato
const code = `
function createHandlers() {
  const data = fetchLargeDataset();
  
  return {
    handler1: () => processData(data),
    handler2: () => validateData(data),
    handler3: () => transformData(data)
  };
}
`;

const analysis = optimizer.analyze(code);

console.log(analysis);
/*
═══ CLOSURE ANALYSIS ═══

Issues found: 2

1. Large captured variable: 'data'
   Size: ~50 MB
   Captured by: 3 functions
   Impact: HIGH
   
   Suggestion: Share data reference instead of capturing
   
2. Unused closure: 'handler3'
   Never called
   Memory: ~17 MB
   Impact: MEDIUM
   
   Suggestion: Remove or lazy-load

Optimized code:
───────────────
*/

const optimized = optimizer.optimize(code);
console.log(optimized);

// Benchmark
const comparison = optimizer.benchmark(code, optimized);
/*
Original:  Memory: 150 MB, Time: 1250ms
Optimized: Memory:  50 MB, Time:  420ms
Improvement: 66% less memory, 66% faster
*/
```

---

## Soluzioni

### Soluzione Esercizio 1.1

```javascript
// es1_1.js
console.log('=== Scope Globale ===');
const globale = 10;
console.log('Variabile globale:', globale);

function testScope() {
  const locale = 20;
  console.log('\n=== Scope Locale ===');
  console.log('Dentro funzione - locale:', locale);
  console.log('Dentro funzione - globale:', globale);
}

testScope();

// console.log(locale); // Errore: locale non è definita

console.log('\n=== Shadowing ===');
let x = 10;
console.log('Fuori funzione - x:', x);

function testShadowing() {
  let x = 30; // Shadowing della variabile globale
  console.log('Dentro funzione - x:', x, '(locale)');
}

testShadowing();
console.log('Fuori funzione - x:', x, '(globale)');
```

---

### Soluzione Esercizio 1.2

```javascript
// es1_2.js
console.log('=== Test Block Scope con let/const ===');

if (true) {
  let x = 10;
  const y = 20;
  var z = 30;
  
  console.log('Dentro blocco if:');
  console.log('  x (let):', x);
  console.log('  y (const):', y);
  console.log('  z (var):', z);
}

console.log('\nFuori blocco if:');
// console.log('x:', x); // Errore: x is not defined
// console.log('y:', y); // Errore: y is not defined
console.log('z:', z); // Funziona! var non ha block scope

console.log('\n=== Test con for loop ===');
for (let i = 0; i < 3; i++) {
  console.log('i dentro loop:', i);
}
// console.log('i fuori loop:', i); // Errore

for (var j = 0; j < 3; j++) {
  // ...
}
console.log('j fuori loop:', j); // Funziona! j è 3
```

---

### Soluzione Esercizio 1.5

```javascript
// es1_5.js
console.log('=== Closure: Contatore ===');

function creaContatore(iniziale = 0) {
  let conteggio = iniziale; // Variabile privata
  
  return function() {
    conteggio++;
    return conteggio;
  };
}

const contatore1 = creaContatore();
console.log('Contatore1:', contatore1()); // 1
console.log('Contatore1:', contatore1()); // 2
console.log('Contatore1:', contatore1()); // 3

const contatore2 = creaContatore(10);
console.log('Contatore2:', contatore2()); // 11
console.log('Contatore2:', contatore2()); // 12

console.log('\nI due contatori sono indipendenti!');
console.log('Contatore1:', contatore1()); // 4
console.log('Contatore2:', contatore2()); // 13
```

---

[Torna all'indice della sezione Variabili e Tipi Dati](../README.md)
