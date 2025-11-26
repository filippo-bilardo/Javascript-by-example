# Esercizi su Dichiarazione e Invocazione di Funzioni in JavaScript

## Indice
1. [Esercizi Base](#esercizi-base)
2. [Esercizi Intermedi](#esercizi-intermedi)
3. [Esercizi Avanzati](#esercizi-avanzati)
4. [Progetti Completi](#progetti-completi)
5. [Soluzioni](#soluzioni)

---

## Esercizi Base

### Esercizio 1.1 - Prima Dichiarazione di Funzione
**Obiettivo**: Comprendere la sintassi base delle funzioni.

Scrivi un programma che:
- Dichiara una funzione `saluta` che accetta un parametro `nome`
- La funzione stampa "Ciao, [nome]!" sulla console
- Invoca la funzione 3 volte con nomi diversi

**Suggerimenti:**
- Usa `console.log()` per stampare
- La sintassi base è: `function nomeFunzione(parametro) { ... }`

**File**: `esercizio1_1.js`

---

### Esercizio 1.2 - Function Expression
**Obiettivo**: Comprendere la differenza tra function declaration e function expression.

Scrivi un programma che:
- Dichiara una funzione usando function expression chiamata `moltiplica`
- La funzione accetta due parametri e restituisce il loro prodotto
- Prova a chiamare la funzione PRIMA della sua dichiarazione e osserva il risultato
- Poi chiamala DOPO la dichiarazione

**Esempio output:**
```
Errore: Cannot access 'moltiplica' before initialization
Risultato: 15
```

**File**: `esercizio1_2.js`

---

### Esercizio 1.3 - Hoisting
**Obiettivo**: Comprendere il meccanismo di hoisting delle funzioni.

Scrivi un programma che:
- Chiama la funzione `calcolaArea` PRIMA di dichiararla
- La funzione calcola l'area di un rettangolo (base * altezza)
- Dichiara la funzione DOPO averla chiamata
- Confronta con una function expression e documenta la differenza

**Test:**
```javascript
console.log(calcolaArea(5, 10)); // Dovrebbe funzionare
console.log(calcolaPerimetro(5, 10)); // Dovrebbe dare errore se è una function expression
```

**File**: `esercizio1_3.js`

---

### Esercizio 1.4 - Funzioni come Valori
**Obiettivo**: Comprendere che le funzioni sono valori first-class.

Scrivi un programma che:
- Dichiara una funzione `somma` che restituisce la somma di due numeri
- Assegna questa funzione a una nuova variabile `operazione`
- Invoca la funzione usando entrambi i riferimenti
- Stampa i risultati per verificare che funzionano allo stesso modo

**File**: `esercizio1_4.js`

---

### Esercizio 1.5 - Return Statement
**Obiettivo**: Comprendere l'uso del return.

Scrivi un programma con 3 funzioni:
- `calcolaQuadrato`: restituisce il quadrato di un numero
- `stampaSaluto`: stampa un saluto ma NON restituisce nulla
- `verificaPari`: restituisce `true` se il numero è pari, `false` altrimenti

Chiama tutte e tre le funzioni e stampa i risultati con `console.log()` per vedere le differenze.

**File**: `esercizio1_5.js`

---

## Esercizi Intermedi

### Esercizio 2.1 - IIFE (Immediately Invoked Function Expression)
**Obiettivo**: Comprendere le funzioni auto-invocanti.

Scrivi un programma dove:
- Crei una IIFE che stampa "Funzione eseguita immediatamente!"
- La IIFE accetta un parametro `nome` e lo stampa
- Crea una seconda IIFE che restituisce un valore e lo assegni a una variabile
- Stampa il valore restituito

**Schema:**
```javascript
(function(nome) {
  // codice
})(argomento);

let risultato = (function() {
  // codice
  return valore;
})();
```

**File**: `esercizio2_1.js`

---

### Esercizio 2.2 - Funzioni come Callback
**Obiettivo**: Usare funzioni come argomenti di altre funzioni.

Scrivi un programma dove:
- Crei una funzione `elaboraDati` che accetta un array e una funzione callback
- La funzione applica il callback a ogni elemento dell'array
- Crea 3 diverse callback: `raddoppia`, `quadrato`, `incrementa`
- Testa la funzione con un array `[1, 2, 3, 4, 5]` e tutte e tre le callback

**Output atteso:**
```
Raddoppia: [2, 4, 6, 8, 10]
Quadrato: [1, 4, 9, 16, 25]
Incrementa: [2, 3, 4, 5, 6]
```

**File**: `esercizio2_2.js`

---

### Esercizio 2.3 - Call, Apply e Bind
**Obiettivo**: Comprendere i metodi call, apply e bind.

Scrivi un programma che:
- Dichiara una funzione `presentati` che usa `this.nome` e `this.eta`
- Crea due oggetti: `persona1` e `persona2` con proprietà nome ed età
- Usa `call()` per invocare la funzione con `persona1`
- Usa `apply()` per invocare la funzione con `persona2`
- Usa `bind()` per creare una nuova funzione legata a `persona1`

**File**: `esercizio2_3.js`

---

### Esercizio 2.4 - Funzioni Annidate
**Obiettivo**: Comprendere le funzioni annidate e il loro scope.

Scrivi un programma che:
- Crea una funzione esterna `calcolatrice` che accetta un operatore (+, -, *, /)
- All'interno di `calcolatrice`, definisci 4 funzioni annidate: `somma`, `sottrai`, `moltiplica`, `dividi`
- La funzione esterna restituisce la funzione appropriata basata sull'operatore
- Testa il programma con diversi operatori

**Esempio:**
```javascript
let addizione = calcolatrice('+');
console.log(addizione(5, 3)); // 8

let moltiplicazione = calcolatrice('*');
console.log(moltiplicazione(5, 3)); // 15
```

**File**: `esercizio2_4.js`

---

### Esercizio 2.5 - Function Constructor
**Obiettivo**: Comprendere il costruttore Function.

Scrivi un programma che:
- Usa il costruttore `Function` per creare dinamicamente una funzione che somma due numeri
- Crea una seconda funzione usando il costruttore che calcola l'area di un cerchio
- Confronta le prestazioni con funzioni dichiarate normalmente
- Documenta quando è appropriato usare il costruttore Function

**Domanda**: Quali sono i vantaggi e svantaggi del costruttore Function?

**File**: `esercizio2_5.js`

---

## Esercizi Avanzati

### Esercizio 3.1 - Sistema di Plugin
**Obiettivo**: Creare un sistema di plugin usando funzioni.

Scrivi un programma che:
- Crea un oggetto `app` con un array `plugins`
- Implementa un metodo `registraPlugin(nome, funzione)` che aggiunge plugin
- Implementa un metodo `eseguiPlugin(nome, ...args)` che esegue un plugin per nome
- Implementa un metodo `listaPlugin()` che elenca tutti i plugin registrati
- Crea almeno 3 plugin diversi (es. logger, validatore, formattatore)

**Funzionalità:**
```javascript
app.registraPlugin('logger', (msg) => console.log(`[LOG]: ${msg}`));
app.registraPlugin('uppercase', (str) => str.toUpperCase());
app.eseguiPlugin('logger', 'Test messaggio');
app.eseguiPlugin('uppercase', 'hello'); // HELLO
app.listaPlugin(); // ['logger', 'uppercase']
```

**File**: `esercizio3_1.js`

---

### Esercizio 3.2 - Debounce e Throttle
**Obiettivo**: Implementare funzioni di controllo dell'esecuzione.

Scrivi un programma che:
- Implementa una funzione `debounce(func, delay)` che ritarda l'esecuzione di `func` fino a quando non passano `delay` millisecondi senza nuove chiamate
- Implementa una funzione `throttle(func, limit)` che garantisce che `func` venga eseguita al massimo una volta ogni `limit` millisecondi
- Testa entrambe le funzioni simulando eventi frequenti (usa `setInterval` o chiamate ripetute)

**Output:**
```
Debounce: esegue solo dopo che le chiamate si fermano
Throttle: esegue al massimo una volta ogni X ms
```

**File**: `esercizio3_2.js`

---

### Esercizio 3.3 - Function Pipeline
**Obiettivo**: Creare un sistema di pipeline per l'elaborazione dati.

Scrivi un programma con:
- Una funzione `pipeline(...funzioni)` che accetta un numero variabile di funzioni
- La pipeline esegue le funzioni in sequenza, passando il risultato di una alla successiva
- Crea una funzione `pipelineAsync` per funzioni asincrone
- Testa con una serie di trasformazioni su dati

**Esempio:**
```javascript
const elabora = pipeline(
  x => x * 2,
  x => x + 10,
  x => x / 2
);

console.log(elabora(5)); // ((5*2)+10)/2 = 10
```

**File**: `esercizio3_3.js`

---

### Esercizio 3.4 - Memoizzazione Avanzata
**Obiettivo**: Implementare un sistema di caching per funzioni.

Scrivi un programma che:
- Crea una funzione `memoize(func, options)` che memorizza i risultati delle chiamate
- Opzioni: `maxSize` (numero massimo di risultati in cache), `ttl` (time to live in ms)
- Quando la cache è piena, rimuovi l'elemento meno recentemente usato (LRU)
- Implementa metodi: `cache.clear()`, `cache.stats()` (hit/miss ratio)

**Test con:**
- Funzione Fibonacci
- Chiamate API simulate
- Calcoli costosi

**File**: `esercizio3_4.js`

---

### Esercizio 3.5 - Function Decorator System
**Obiettivo**: Implementare un sistema di decoratori per funzioni.

Scrivi un programma che:
- Crea decoratori riutilizzabili: `@log`, `@time`, `@validate`, `@retry`
- `@log`: logga argomenti e risultato della funzione
- `@time`: misura il tempo di esecuzione
- `@validate`: valida i parametri prima dell'esecuzione
- `@retry`: riprova l'esecuzione in caso di errore (max 3 tentativi)
- Permetti di combinare più decoratori su una singola funzione

**Esempio:**
```javascript
function log(func) {
  return function(...args) {
    console.log(`Chiamata ${func.name} con args:`, args);
    const result = func(...args);
    console.log(`Risultato:`, result);
    return result;
  };
}

let somma = log(function somma(a, b) { return a + b; });
somma(5, 3); // Logga chiamata e risultato
```

**File**: `esercizio3_5.js`

---

## Progetti Completi

### Progetto 1 - Task Scheduler
**Obiettivo**: Creare un sistema di gestione task con priorità e scheduling.

Implementa un Task Scheduler che:
- Registra task (funzioni) con priorità e tempo di esecuzione
- Esegue i task in ordine di priorità
- Supporta task ricorrenti (eseguiti periodicamente)
- Supporta dipendenze tra task (task A deve completarsi prima di task B)
- Gestisce errori nei task senza bloccare lo scheduler
- Implementa pause/resume dello scheduler

**Funzionalità richieste:**
```javascript
const scheduler = new TaskScheduler();

scheduler.addTask('task1', () => console.log('Task 1'), { priority: 1 });
scheduler.addTask('task2', () => console.log('Task 2'), { priority: 2, recurring: 5000 });
scheduler.addTask('task3', () => console.log('Task 3'), { priority: 1, dependsOn: ['task1'] });

scheduler.start();
scheduler.pause();
scheduler.resume();
scheduler.stop();
```

**File**: `progetto1_task_scheduler.js`

---

### Progetto 2 - Event Emitter Avanzato
**Obiettivo**: Creare un sistema di gestione eventi con funzionalità avanzate.

Implementa un Event Emitter che:
- Registra listener per eventi con `on(evento, callback)`
- Registra listener una-tantum con `once(evento, callback)`
- Rimuove listener con `off(evento, callback)`
- Emette eventi con `emit(evento, ...args)`
- Supporta wildcard nei nomi eventi (es. `user:*`)
- Implementa priorità per i listener
- Supporta listener asincroni
- Tiene traccia delle statistiche (numero di eventi emessi, listener registrati)

**Esempio di utilizzo:**
```javascript
const emitter = new EventEmitter();

emitter.on('user:login', (user) => console.log(`${user} logged in`));
emitter.once('app:start', () => console.log('App started'));
emitter.on('user:*', (event, data) => console.log(`User event: ${event}`));

emitter.emit('user:login', 'Mario');
emitter.emit('app:start');
emitter.stats(); // Mostra statistiche
```

**File**: `progetto2_event_emitter.js`

---

### Progetto 3 - Middleware Chain
**Obiettivo**: Creare un sistema di middleware come Express.js.

Implementa un sistema middleware che:
- Permette di registrare funzioni middleware con `use(middleware)`
- Ogni middleware riceve `(req, res, next)` come parametri
- Chiama `next()` per passare al middleware successivo
- Supporta middleware per route specifiche (es. `/api/*`)
- Gestisce errori con middleware di error handling
- Supporta middleware asincroni
- Implementa timeout per middleware lenti

**Esempio:**
```javascript
const app = new MiddlewareChain();

app.use((req, res, next) => {
  console.log('Logger middleware');
  next();
});

app.use('/api', (req, res, next) => {
  console.log('API middleware');
  next();
});

app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status = 500;
  next();
});

app.execute({ url: '/api/users' });
```

**File**: `progetto3_middleware_chain.js`

---

### Progetto 4 - Function Cache Manager
**Obiettivo**: Sistema avanzato di caching con multiple strategie.

Implementa un Cache Manager che:
- Supporta diverse strategie di caching: LRU, LFU, FIFO
- Implementa cache persistence (salva su file)
- Supporta cache distribuita (simulata con eventi)
- Implementa cache warming (precarica dati frequenti)
- Gestisce invalidazione della cache
- Fornisce statistiche dettagliate (hit rate, miss rate, memory usage)
- Supporta cache layers (L1, L2)

**Funzionalità:**
```javascript
const cache = new CacheManager({
  strategy: 'LRU',
  maxSize: 100,
  ttl: 60000,
  persistent: true,
  layers: ['memory', 'disk']
});

cache.set('key1', 'value1');
cache.get('key1');
cache.invalidate('key1');
cache.stats(); // Hit rate, miss rate, ecc.
cache.export('cache_backup.json');
```

**File**: `progetto4_cache_manager.js`

---

### Progetto 5 - Function Composition Library
**Obiettivo**: Creare una libreria per la programmazione funzionale.

Implementa una libreria che fornisce:
- `compose(...funzioni)`: compone funzioni da destra a sinistra
- `pipe(...funzioni)`: compone funzioni da sinistra a destra
- `curry(funzione)`: trasforma una funzione in versione curried
- `partial(funzione, ...argsFissi)`: applicazione parziale
- `memoize(funzione)`: memorizzazione risultati
- `debounce(funzione, delay)`: ritarda esecuzione
- `throttle(funzione, limit)`: limita frequenza esecuzione
- `retry(funzione, attempts)`: riprova in caso di errore
- `timeout(funzione, ms)`: timeout per funzioni asincrone

Tutti i metodi devono essere chainable e composable.

**Esempio:**
```javascript
const F = FunctionLib;

const elabora = F.pipe(
  F.curry((x, y) => x + y),
  F.memoize(x => x * 2),
  F.throttle(1000)
);

const risultato = elabora(5)(3); // (5+3)*2 = 16
```

**File**: `progetto5_function_library.js`

---

## Soluzioni

### Soluzione Esercizio 1.1

```javascript
// esercizio1_1.js

function saluta(nome) {
  console.log(`Ciao, ${nome}!`);
}

// Invocazioni
saluta("Mario");
saluta("Luigi");
saluta("Peach");
```

**Esecuzione:**
```bash
node esercizio1_1.js
```

**Output atteso:**
```
Ciao, Mario!
Ciao, Luigi!
Ciao, Peach!
```

---

### Soluzione Esercizio 1.2

```javascript
// esercizio1_2.js

// Tentativo di chiamata prima della dichiarazione
try {
  console.log(moltiplica(5, 3));
} catch (error) {
  console.log("Errore:", error.message);
}

// Dichiarazione con function expression
let moltiplica = function(a, b) {
  return a * b;
};

// Chiamata dopo la dichiarazione
console.log("Risultato:", moltiplica(5, 3));
```

**Esecuzione:**
```bash
node esercizio1_2.js
```

**Output atteso:**
```
Errore: Cannot access 'moltiplica' before initialization
Risultato: 15
```

---

### Soluzione Esercizio 1.3

```javascript
// esercizio1_3.js

// Chiamata PRIMA della dichiarazione - funziona grazie al hoisting
console.log("Area (declaration):", calcolaArea(5, 10));

// Tentativo con function expression - genera errore
try {
  console.log("Perimetro (expression):", calcolaPerimetro(5, 10));
} catch (error) {
  console.log("Errore perimetro:", error.message);
}

// Function declaration - soggetta a hoisting
function calcolaArea(base, altezza) {
  return base * altezza;
}

// Function expression - NON soggetta a hoisting
let calcolaPerimetro = function(base, altezza) {
  return 2 * (base + altezza);
};

// Chiamata dopo le dichiarazioni - entrambe funzionano
console.log("Area:", calcolaArea(5, 10));
console.log("Perimetro:", calcolaPerimetro(5, 10));

/* 
SPIEGAZIONE:
- Function declaration viene "sollevata" (hoisting) all'inizio dello scope
- Function expression viene trattata come una normale variabile let/const
- Con let/const, la variabile è in "temporal dead zone" prima della dichiarazione
*/
```

**Esecuzione:**
```bash
node esercizio1_3.js
```

---

### Soluzione Esercizio 1.4

```javascript
// esercizio1_4.js

// Dichiarazione della funzione
function somma(a, b) {
  return a + b;
}

// Assegnazione della funzione a una nuova variabile
let operazione = somma;

// Invocazione usando il nome originale
console.log("Usando 'somma':", somma(5, 3));

// Invocazione usando il nuovo riferimento
console.log("Usando 'operazione':", operazione(5, 3));

// Verifica che puntano alla stessa funzione
console.log("Sono la stessa funzione?", somma === operazione);

// Dimostrazione che la funzione è un valore
let funzioni = [somma, operazione];
console.log("Chiamata dall'array:", funzioni[0](10, 20));
```

**Esecuzione:**
```bash
node esercizio1_4.js
```

---

### Soluzione Esercizio 1.5

```javascript
// esercizio1_5.js

// Funzione che RESTITUISCE un valore
function calcolaQuadrato(numero) {
  return numero * numero;
}

// Funzione che NON restituisce un valore (void)
function stampaSaluto(nome) {
  console.log(`Ciao, ${nome}!`);
  // Nessun return esplicito - restituisce undefined
}

// Funzione che restituisce un booleano
function verificaPari(numero) {
  return numero % 2 === 0;
}

// Test delle funzioni
console.log("Quadrato di 5:", calcolaQuadrato(5));
console.log("Risultato di stampaSaluto:", stampaSaluto("Mario"));
console.log("8 è pari?", verificaPari(8));
console.log("7 è pari?", verificaPari(7));

/*
OUTPUT:
Quadrato di 5: 25
Ciao, Mario!
Risultato di stampaSaluto: undefined
8 è pari? true
7 è pari? false
*/
```

**Esecuzione:**
```bash
node esercizio1_5.js
```

---

## Note per l'Esecuzione

### Prerequisiti
- Node.js installato (versione 14 o superiore)
- Editor di testo o IDE

### Esecuzione di un Esercizio
```bash
# Navigare nella directory degli esercizi
cd /percorso/esercizi

# Eseguire un file JavaScript
node nome_file.js
```

### Debugging
```bash
# Eseguire con debugger
node inspect nome_file.js

# Eseguire con output dettagliato
node --trace-warnings nome_file.js
```

### Verifica Sintassi
```bash
# Verificare la sintassi senza eseguire
node --check nome_file.js
```

---

[Torna all'indice](../README.md) | [Vai alla teoria: Dichiarazione e Invocazione](../teoria/01_Dichiarazione_Invocazione.md)
