# Esercizi sulla Dichiarazione di Variabili in JavaScript

## Indice
1. [Esercizi Base](#esercizi-base)
2. [Esercizi Intermedi](#esercizi-intermedi)
3. [Esercizi Avanzati](#esercizi-avanzati)
4. [Progetti Completi](#progetti-completi)
5. [Soluzioni](#soluzioni)

---

## Esercizi Base

### Esercizio 1.1 - Differenza tra var, let e const
**Obiettivo**: Comprendere le differenze fondamentali tra var, let e const.

Scrivi un programma Node.js che:
- Dichiara tre variabili (una con `var`, una con `let`, una con `const`)
- Prova a riassegnare valori a ciascuna
- Stampa i risultati e cattura eventuali errori

**Suggerimenti:**
- Usa try-catch per gestire gli errori
- Osserva quale dichiarazione genera errori

**Test:**
```bash
node es1_1.js
```

**Output atteso:**
```
var x = 10
var x riassegnato = 20
let y = 30
let y riassegnato = 40
const z = 50
Errore: Assignment to constant variable
```

---

### Esercizio 1.2 - Scope di var vs let
**Obiettivo**: Comprendere la differenza di scope tra var e let.

Scrivi un programma che:
- Usa un ciclo `for` con una variabile dichiarata con `var`
- Usa un altro ciclo `for` con una variabile dichiarata con `let`
- Prova ad accedere alle variabili fuori dal ciclo
- Stampa i risultati

**Esempio:**
```javascript
for (var i = 0; i < 3; i++) {
  // ...
}
console.log('var i fuori dal ciclo:', i);

for (let j = 0; j < 3; j++) {
  // ...
}
console.log('let j fuori dal ciclo:', j); // Genera errore?
```

---

### Esercizio 1.3 - Hoisting di var
**Obiettivo**: Comprendere il meccanismo di hoisting con var.

Scrivi un programma che:
- Prova a stampare una variabile `var` prima della sua dichiarazione
- Prova a stampare una variabile `let` prima della sua dichiarazione
- Gestisci gli errori con try-catch
- Spiega la differenza nei commenti

**Test:**
```bash
node es1_3.js
```

---

### Esercizio 1.4 - Const con oggetti
**Obiettivo**: Comprendere che const previene la riassegnazione, non la mutabilità.

Scrivi un programma che:
- Dichiara un oggetto con `const`
- Modifica le proprietà dell'oggetto
- Prova a riassegnare l'oggetto
- Dichiara un array con `const`
- Modifica gli elementi dell'array
- Prova a riassegnare l'array

**Domande da rispondere nei commenti:**
- Quali operazioni funzionano?
- Quali generano errori?
- Perché?

---

### Esercizio 1.5 - Block Scope
**Obiettivo**: Comprendere lo scope di blocco con let e const.

Scrivi un programma che:
- Usa if/else con variabili let e const all'interno
- Prova ad accedere a queste variabili fuori dal blocco
- Confronta con var nello stesso scenario
- Stampa i risultati

---

## Esercizi Intermedi

### Esercizio 2.1 - Closure e var vs let
**Obiettivo**: Comprendere il comportamento di var e let nelle closure.

Scrivi un programma che:
- Crea un array di funzioni usando `var` in un ciclo
- Crea un array di funzioni usando `let` in un ciclo
- Esegue tutte le funzioni e stampa i risultati
- Spiega la differenza nel comportamento

**Esempio classico:**
```javascript
// Con var
let funzioniVar = [];
for (var i = 0; i < 3; i++) {
  funzioniVar.push(function() {
    console.log('var i:', i);
  });
}

// Con let
let funzioniLet = [];
for (let j = 0; j < 3; j++) {
  funzioniLet.push(function() {
    console.log('let j:', j);
  });
}

// Esegui entrambe
funzioniVar.forEach(f => f());
funzioniLet.forEach(f => f());
```

**Output atteso:**
```
var i: 3
var i: 3
var i: 3
let j: 0
let j: 1
let j: 2
```

---

### Esercizio 2.2 - Temporal Dead Zone
**Obiettivo**: Comprendere la Temporal Dead Zone di let e const.

Scrivi un programma che:
- Dimostra la TDZ con esempi pratici
- Usa try-catch per catturare ReferenceError
- Confronta con il comportamento di var
- Include esempi con funzioni annidate

**Struttura:**
```javascript
function testTDZ() {
  // Prova ad accedere a x qui (errore)
  
  let x = 10;
  
  // Accedi a x qui (ok)
  
  if (true) {
    // Prova ad accedere a y qui (errore)
    
    let y = 20;
    
    // Accedi a y qui (ok)
  }
}
```

---

### Esercizio 2.3 - Ridichiarazione
**Obiettivo**: Comprendere le regole di ridichiarazione.

Scrivi un programma che:
- Prova a ridichiarare variabili `var` nello stesso scope
- Prova a ridichiarare variabili `let` nello stesso scope
- Prova a ridichiarare variabili `const` nello stesso scope
- Prova a dichiarare let dopo var con stesso nome
- Gestisci gli errori e stampa i risultati

---

### Esercizio 2.4 - Global Scope Pollution
**Obiettivo**: Comprendere come var inquina lo scope globale.

Scrivi un programma che:
- Dichiara variabili globali con var, let e const
- Verifica quali finiscono nell'oggetto `global` (Node.js)
- Dimostra i problemi di var nello scope globale
- Mostra come let e const prevengono questi problemi

**Test:**
```bash
node es2_4.js
```

---

### Esercizio 2.5 - Best Practices Checker
**Obiettivo**: Creare uno strumento che analizza l'uso delle variabili.

Scrivi un programma che:
- Legge un file JavaScript
- Conta l'uso di var, let e const
- Identifica variabili che potrebbero essere const ma sono let
- Stampa un report con suggerimenti

**Esempio output:**
```
Report Analisi Variabili:
- var: 5 utilizzi (⚠️  Considera di usare let/const)
- let: 10 utilizzi (3 potrebbero essere const)
- const: 15 utilizzi (✓ Ottimo!)

Suggerimenti:
- Linea 5: 'counter' è let ma non viene mai riassegnato
- Linea 12: 'config' è let ma non viene mai riassegnato
```

---

## Esercizi Avanzati

### Esercizio 3.1 - Scope Chain Visualizer
**Obiettivo**: Visualizzare la catena di scope in funzioni annidate.

Scrivi un programma che:
- Crea funzioni annidate a più livelli
- Usa var, let e const a diversi livelli
- Implementa un sistema che visualizza quale variabile viene trovata in quale scope
- Gestisce shadowing (variabili con stesso nome in scope diversi)

**Esempio:**
```javascript
let globale = 'GLOBAL';

function livello1() {
  let var1 = 'LIVELLO1';
  
  function livello2() {
    let var2 = 'LIVELLO2';
    let globale = 'SHADOWED'; // Shadowing
    
    function livello3() {
      console.log('Scope chain:');
      // Implementa logica per mostrare dove ogni variabile viene trovata
    }
    
    livello3();
  }
  
  livello2();
}

livello1();
```

**Output atteso:**
```
Scope chain per livello3:
- globale: trovato in livello2 (shadowing)
- var1: trovato in livello1
- var2: trovato in livello2
- globale (originale): trovato in global scope
```

---

### Esercizio 3.2 - Variable Lifecycle Tracker
**Obiettivo**: Tracciare il ciclo di vita delle variabili.

Scrivi un programma che:
- Implementa un sistema di proxy/wrapper per tracciare:
  - Quando una variabile viene creata
  - Quando viene letta
  - Quando viene modificata
  - Quando esce dallo scope
- Stampa una timeline delle operazioni
- Calcola statistiche (numero letture, modifiche, ecc.)

---

### Esercizio 3.3 - Module Pattern Evolution
**Obiettivo**: Implementare il Module Pattern con var, let/const e ES6 modules.

Scrivi tre versioni di un modulo Counter:

**Versione 1: Con var (vecchio stile)**
```javascript
var counterModule = (function() {
  var count = 0;
  
  return {
    increment: function() { count++; },
    get: function() { return count; }
  };
})();
```

**Versione 2: Con let/const (moderno)**
```javascript
const counterModule = (() => {
  let count = 0;
  
  return {
    increment: () => count++,
    get: () => count
  };
})();
```

**Versione 3: ES6 Module**
```javascript
// counter.js
let count = 0;

export const increment = () => count++;
export const get = () => count;
```

Confronta le tre implementazioni in termini di:
- Sicurezza
- Leggibilità
- Performance
- Modularità

---

### Esercizio 3.4 - Const Deep Freeze
**Obiettivo**: Implementare l'immutabilità profonda per const.

Scrivi un programma che:
- Crea una funzione `deepFreeze(obj)` che rende immutabile ricorsivamente un oggetto
- Testa con oggetti annidati complessi
- Confronta con `Object.freeze()` normale
- Gestisce casi speciali (array, Date, Map, Set, ecc.)

**Esempio:**
```javascript
const config = deepFreeze({
  api: {
    url: 'https://api.example.com',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json'
    }
  },
  features: ['login', 'signup', 'profile']
});

// Nessuna di queste dovrebbe funzionare
config.api.url = 'hacked';
config.api.headers.auth = 'token';
config.features.push('admin');
```

---

### Esercizio 3.5 - Variable Declaration Linter
**Obiettivo**: Creare un mini-linter per le dichiarazioni di variabili.

Scrivi un programma che:
- Analizza file JavaScript
- Identifica problemi comuni:
  - Uso di var invece di let/const
  - let che potrebbe essere const
  - Variabili non usate
  - Variabili usate prima della dichiarazione
  - Shadowing problematico
- Genera un report dettagliato
- Suggerisce fix automatici

**Output esempio:**
```
Analisi di mycode.js:

⚠️  Problemi trovati:

1. Linea 5: Uso di 'var'
   var counter = 0;
   ^^^^^^^^^^^^^
   Suggerimento: Usa 'let' o 'const'
   Fix: let counter = 0;

2. Linea 12: 'config' potrebbe essere const
   let config = { ... };
   ^^^
   Suggerimento: Questa variabile non viene mai riassegnata
   Fix: const config = { ... };

3. Linea 23: Shadowing della variabile 'result'
   function process(result) { // 'result' già dichiarato in parent scope
   ^^^^^^^^^^^^^^^^^^^^^^^^^
   Suggerimento: Rinomina il parametro

Statistiche:
- Problemi critici: 1
- Warning: 2
- Righe analizzate: 150
- Score: 82/100
```

---

## Progetti Completi

### Progetto 1 - Sistema di Configurazione Tipizzato

Crea un sistema di configurazione che:
- Usa const per valori immutabili
- Usa let solo dove necessario
- Implementa validazione dei tipi
- Supporta configurazioni annidate
- Previene modifiche accidentali
- Include sistema di merging sicuro

**Funzionalità:**
```javascript
const config = createConfig({
  database: {
    host: 'localhost',
    port: 5432,
    credentials: {
      user: 'admin',
      password: 'secret'
    }
  },
  features: {
    auth: true,
    cache: false
  }
});

// Accesso sicuro
console.log(config.get('database.host'));

// Previene modifiche
config.set('database.host', 'hacked'); // Errore

// Merge sicuro
const newConfig = config.merge({
  database: { port: 3306 }
});
```

---

### Progetto 2 - Transpiler var → let/const

Crea un tool che:
- Legge codice JavaScript con var
- Analizza l'uso di ogni variabile
- Converte automaticamente in let o const
- Gestisce casi complessi (hoisting, closure, scope)
- Genera report delle modifiche
- Include tests per verificare equivalenza

**Esempio:**
```javascript
// Input
function oldCode() {
  var x = 10;
  var y = 20;
  x = x + 5;
  console.log(x, y);
}

// Output
function oldCode() {
  let x = 10;
  const y = 20;
  x = x + 5;
  console.log(x, y);
}
```

---

### Progetto 3 - Interactive Scope Debugger

Crea uno strumento interattivo che:
- Carica codice JavaScript
- Permette di eseguirlo step-by-step
- Visualizza lo scope corrente ad ogni step
- Mostra la scope chain
- Evidenzia variabili accessibili/non accessibili
- Spiega hoisting e TDZ in tempo reale

**UI (CLI):**
```
Debugger - Step 3/15

Codice:
1: function outer() {
2:   let x = 10;
3: ▶ let y = 20;
4:   function inner() {
5:     console.log(x, y);
6:   }
7: }

Scope Corrente:
┌─ outer() scope
│  ├─ x: 10 (let)
│  └─ y: <TDZ> (not initialized yet)
└─ global scope
   └─ outer: function

Comandi: [n]ext [s]tep-in [o]ut [r]un [q]uit
```

---

### Progetto 4 - Memory Leak Detector

Crea un tool che:
- Monitora l'uso della memoria
- Identifica closure che catturano variabili inutilmente
- Trova riferimenti pendenti che prevengono garbage collection
- Suggerisce fix usando const/let appropriatamente
- Genera report di ottimizzazione

---

### Progetto 5 - Variable Naming Analyzer

Crea uno strumento che:
- Analizza i nomi delle variabili nel codice
- Verifica conformità alle convenzioni:
  - camelCase per let/var
  - SNAKE_CASE_MAIUSCOLO per const globali
  - PascalCase per classi
- Identifica nomi non descrittivi (x, y, temp, etc.)
- Suggerisce nomi migliori basati sull'uso
- Rileva inconsistenze (stile misto)

**Report esempio:**
```
Analisi Naming:

✓ Convenzioni rispettate: 85%

⚠️  Problemi trovati:

1. Variabile 'x' (linea 5)
   Tipo: let
   Uso: contatore in ciclo
   Suggerimento: Usa nome più descrittivo come 'index' o 'counter'

2. Costante 'apiUrl' (linea 12)
   Tipo: const
   Scope: global
   Problema: Dovrebbe essere API_URL (maiuscolo)

3. Inconsistenza: mix di camelCase e snake_case
   - userAge (linea 20)
   - user_name (linea 21)
   Suggerimento: Unifica lo stile (camelCase consigliato)
```

---

## Soluzioni

### Soluzione Esercizio 1.1

```javascript
// es1_1.js
console.log('=== Test var ===');
var x = 10;
console.log('var x =', x);
x = 20;
console.log('var x riassegnato =', x);

console.log('\n=== Test let ===');
let y = 30;
console.log('let y =', y);
y = 40;
console.log('let y riassegnato =', y);

console.log('\n=== Test const ===');
const z = 50;
console.log('const z =', z);
try {
  z = 60;
  console.log('const z riassegnato =', z);
} catch (error) {
  console.log('Errore:', error.message);
}
```

**Test:**
```bash
node es1_1.js
```

---

### Soluzione Esercizio 1.2

```javascript
// es1_2.js
console.log('=== Test var nel ciclo ===');
for (var i = 0; i < 3; i++) {
  console.log('dentro ciclo, var i =', i);
}
console.log('fuori ciclo, var i =', i); // Funziona! i è accessibile

console.log('\n=== Test let nel ciclo ===');
for (let j = 0; j < 3; j++) {
  console.log('dentro ciclo, let j =', j);
}
try {
  console.log('fuori ciclo, let j =', j);
} catch (error) {
  console.log('Errore:', error.message); // j is not defined
}
```

---

### Soluzione Esercizio 1.3

```javascript
// es1_3.js
console.log('=== Test hoisting var ===');
try {
  console.log('var prima della dichiarazione:', x);
  var x = 10;
  console.log('var dopo la dichiarazione:', x);
} catch (error) {
  console.log('Errore:', error.message);
}

console.log('\n=== Test hoisting let ===');
try {
  console.log('let prima della dichiarazione:', y);
  let y = 20;
  console.log('let dopo la dichiarazione:', y);
} catch (error) {
  console.log('Errore:', error.message);
}

// Spiegazione nei commenti:
// var: hoisting completo, undefined prima della dichiarazione
// let: Temporal Dead Zone, ReferenceError prima della dichiarazione
```

---

### Soluzione Esercizio 1.4

```javascript
// es1_4.js
console.log('=== Test const con oggetto ===');
const obj = { nome: 'Mario', età: 30 };
console.log('Oggetto iniziale:', obj);

// Modifica proprietà (OK)
obj.nome = 'Luigi';
obj.città = 'Milano';
console.log('Oggetto modificato:', obj);

// Riassegnazione oggetto (Errore)
try {
  obj = { nome: 'Giovanni' };
} catch (error) {
  console.log('Errore riassegnazione oggetto:', error.message);
}

console.log('\n=== Test const con array ===');
const arr = [1, 2, 3];
console.log('Array iniziale:', arr);

// Modifica elementi (OK)
arr.push(4);
arr[0] = 10;
console.log('Array modificato:', arr);

// Riassegnazione array (Errore)
try {
  arr = [5, 6, 7];
} catch (error) {
  console.log('Errore riassegnazione array:', error.message);
}

// Risposta alle domande:
// const previene la RIASSEGNAZIONE della variabile
// NON previene la MUTAZIONE del valore (se è un oggetto/array)
```

---

### Soluzione Esercizio 1.5

```javascript
// es1_5.js
console.log('=== Test let in blocco if ===');
if (true) {
  let x = 10;
  console.log('dentro if, let x =', x);
}
try {
  console.log('fuori if, let x =', x);
} catch (error) {
  console.log('Errore:', error.message); // x is not defined
}

console.log('\n=== Test const in blocco if ===');
if (true) {
  const y = 20;
  console.log('dentro if, const y =', y);
}
try {
  console.log('fuori if, const y =', y);
} catch (error) {
  console.log('Errore:', error.message); // y is not defined
}

console.log('\n=== Test var in blocco if ===');
if (true) {
  var z = 30;
  console.log('dentro if, var z =', z);
}
console.log('fuori if, var z =', z); // Funziona! z è accessibile
```

---

### Soluzione Esercizio 2.1

```javascript
// es2_1.js
console.log('=== Closure con var ===');
let funzioniVar = [];
for (var i = 0; i < 3; i++) {
  funzioniVar.push(function() {
    console.log('var i:', i);
  });
}

console.log('Esecuzione funzioni con var:');
funzioniVar.forEach(f => f());

console.log('\n=== Closure con let ===');
let funzioniLet = [];
for (let j = 0; j < 3; j++) {
  funzioniLet.push(function() {
    console.log('let j:', j);
  });
}

console.log('Esecuzione funzioni con let:');
funzioniLet.forEach(f => f());

// Spiegazione:
// Con var: tutte le closure condividono la stessa variabile i (scope di funzione)
//          alla fine del ciclo i vale 3
// Con let: ogni iterazione crea un nuovo scope, ogni closure cattura il proprio j
```

---

[Torna all'indice della sezione Variabili e Tipi Dati](../README.md)
