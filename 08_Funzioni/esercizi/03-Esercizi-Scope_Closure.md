# Esercizi su Scope e Closure in JavaScript

## Indice
1. [Esercizi Base](#esercizi-base)
2. [Esercizi Intermedi](#esercizi-intermedi)
3. [Esercizi Avanzati](#esercizi-avanzati)
4. [Progetti Completi](#progetti-completi)
5. [Soluzioni](#soluzioni)

---

## Esercizi Base

### Esercizio 1.1 - Global vs Local Scope
**Obiettivo**: Comprendere la differenza tra scope globale e locale.

Scrivi un programma che:
- Dichiara una variabile globale `contatore = 0`
- Crea una funzione `incrementa()` che incrementa il contatore
- Crea una funzione `mostraLocale()` con una variabile locale `contatore = 100`
- Stampa il contatore in diversi punti per vedere le differenze

**Suggerimenti:**
- La variabile globale è accessibile ovunque
- Le variabili locali esistono solo all'interno della funzione

**File**: `esercizio1_1.js`

---

### Esercizio 1.2 - Block Scope con let e const
**Obiettivo**: Comprendere lo scope di blocco.

Scrivi un programma che:
- Usa un blocco if con una variabile `let x = 10`
- Usa un blocco if con una variabile `var y = 20`
- Prova ad accedere a `x` e `y` fuori dal blocco
- Osserva e documenta le differenze
- Ripeti con `const` invece di `let`

**Esempio output:**
```
Dentro il blocco: x=10, y=20
Fuori dal blocco: x non accessibile, y=20
```

**File**: `esercizio1_2.js`

---

### Esercizio 1.3 - Prima Closure
**Obiettivo**: Creare e comprendere una closure semplice.

Scrivi un programma che:
- Crea una funzione `creaContatore()` che ha una variabile locale `conteggio = 0`
- La funzione restituisce un'altra funzione che incrementa e restituisce `conteggio`
- Crea due contatori indipendenti
- Incrementa ciascuno separatamente per dimostrare che mantengono stati diversi

**Test:**
```javascript
let contatore1 = creaContatore();
let contatore2 = creaContatore();

console.log(contatore1()); // 1
console.log(contatore1()); // 2
console.log(contatore2()); // 1
console.log(contatore1()); // 3
```

**File**: `esercizio1_3.js`

---

### Esercizio 1.4 - Scope Chain
**Obiettivo**: Comprendere la catena di scope.

Scrivi un programma con funzioni annidate:
- Funzione `livello1()` con variabile `a = 1`
- Dentro `livello1()`, funzione `livello2()` con variabile `b = 2`
- Dentro `livello2()`, funzione `livello3()` con variabile `c = 3`
- `livello3()` stampa tutte e tre le variabili
- Documenta come JavaScript risale la catena per trovare le variabili

**File**: `esercizio1_4.js`

---

### Esercizio 1.5 - Shadowing
**Obiettivo**: Comprendere il shadowing delle variabili.

Scrivi un programma che:
- Dichiara una variabile globale `nome = "Globale"`
- Crea una funzione con una variabile locale `nome = "Locale"`
- Dentro la funzione, crea un blocco con `let nome = "Blocco"`
- Stampa `nome` in ogni livello di scope
- Osserva come la variabile viene "oscurata" nei diversi scope

**File**: `esercizio1_5.js`

---

## Esercizi Intermedi

### Esercizio 2.1 - Private Variables con Closure
**Obiettivo**: Usare closure per creare variabili private.

Scrivi un programma dove:
- Crei una funzione `creaBancaAccount(saldoIniziale)` 
- La funzione restituisce un oggetto con metodi: `deposita`, `preleva`, `getSaldo`
- Il saldo deve essere privato (non accessibile direttamente)
- `preleva` deve verificare che ci siano fondi sufficienti
- Testa creando più account indipendenti

**Schema:**
```javascript
let account1 = creaBancaAccount(1000);
account1.deposita(500);
console.log(account1.getSaldo()); // 1500
account1.preleva(200);
console.log(account1.getSaldo()); // 1300
// account1.saldo NON deve essere accessibile
```

**File**: `esercizio2_1.js`

---

### Esercizio 2.2 - Loop e Closure (il problema classico)
**Obiettivo**: Comprendere il problema delle closure nei loop.

Scrivi un programma che:
- Crea un loop `for` con `var i` che crea 5 funzioni
- Ogni funzione dovrebbe stampare il proprio indice, ma stampa sempre 5
- Risolvi il problema usando: 1) IIFE, 2) `let` invece di `var`, 3) una funzione factory
- Confronta le tre soluzioni

**Problema:**
```javascript
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i); // Stampa sempre 5!
  }, 100);
}
```

**File**: `esercizio2_2.js`

---

### Esercizio 2.3 - Module Pattern
**Obiettivo**: Implementare il module pattern con closure.

Scrivi un programma che:
- Crea un modulo `CalcolatriceModule` usando IIFE
- Il modulo ha variabili private per memorizzare l'ultimo risultato
- Espone metodi pubblici: `somma`, `sottrai`, `moltiplica`, `dividi`, `getUltimoRisultato`, `reset`
- Ogni operazione aggiorna l'ultimo risultato
- Il modulo è un singleton (una sola istanza)

**Esempio:**
```javascript
CalcolatriceModule.somma(10, 5);
console.log(CalcolatriceModule.getUltimoRisultato()); // 15
CalcolatriceModule.moltiplica(3, 4);
console.log(CalcolatriceModule.getUltimoRisultato()); // 12
```

**File**: `esercizio2_3.js`

---

### Esercizio 2.4 - Currying con Closure
**Obiettivo**: Usare closure per implementare currying.

Scrivi un programma che:
- Crea una funzione `moltiplica(a)(b)` che usa closure
- Crea funzioni specializzate: `doppio`, `triplo`, `quadruplo`
- Crea una funzione `potenza(base)(esponente)` 
- Crea funzioni specializzate: `quadrato`, `cubo`

**Esempio:**
```javascript
let doppio = moltiplica(2);
console.log(doppio(5)); // 10
console.log(doppio(7)); // 14

let quadrato = potenza(2);
console.log(quadrato(5)); // 25
```

**File**: `esercizio2_4.js`

---

### Esercizio 2.5 - Function Factory
**Obiettivo**: Creare funzioni dinamiche usando closure.

Scrivi un programma che:
- Crea una funzione `creaValidatore(tipo)` che restituisce funzioni validatrici
- Tipi supportati: 'email', 'telefono', 'codiceFiscale', 'password'
- Ogni validatore ha il pattern regex appropriato "chiuso" nella closure
- Testa tutti i validatori con input validi e non validi

**Domanda**: Perché usare una factory invece di funzioni separate?

**File**: `esercizio2_5.js`

---

## Esercizi Avanzati

### Esercizio 3.1 - Memoizzazione con Closure
**Obiettivo**: Implementare memoizzazione usando closure.

Scrivi un programma che:
- Crea una funzione `memoize(fn)` che wrappa una funzione e memorizza i risultati
- Usa una closure per mantenere una cache privata
- La funzione memoizzata controlla se il risultato è già in cache
- Se sì, restituisce il valore cached; se no, calcola e memorizza
- Testa con la funzione Fibonacci per vedere l'ottimizzazione

**Funzionalità:**
```javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const fibMemo = memoize(fibonacci);

console.time('Prima chiamata');
console.log(fibMemo(40));
console.timeEnd('Prima chiamata');

console.time('Seconda chiamata (cached)');
console.log(fibMemo(40));
console.timeEnd('Seconda chiamata (cached)');
```

**File**: `esercizio3_1.js`

---

### Esercizio 3.2 - State Machine con Closure
**Obiettivo**: Implementare una state machine usando closure.

Scrivi un programma che:
- Crea una state machine per un semaforo (VERDE, GIALLO, ROSSO)
- Lo stato corrente è privato, accessibile solo tramite metodi
- Metodi: `getStato()`, `prossimo()`, `reset()`, `getStatistiche()`
- Tiene traccia di quante volte ogni stato è stato attivo
- Implementa un timer automatico per il cambio stato

**Test:**
```javascript
const semaforo = creaSemaforo();

console.log(semaforo.getStato()); // VERDE
semaforo.prossimo(); // -> GIALLO
semaforo.prossimo(); // -> ROSSO
semaforo.prossimo(); // -> VERDE

console.log(semaforo.getStatistiche());
// { VERDE: 2, GIALLO: 1, ROSSO: 1 }
```

**File**: `esercizio3_2.js`

---

### Esercizio 3.3 - Event Emitter con Closure
**Obiettivo**: Creare un sistema di eventi usando closure per dati privati.

Scrivi un programma con:
- Una funzione `creaEventEmitter()` che restituisce un emitter
- Array privato di listeners per evento
- Metodi: `on(evento, callback)`, `off(evento, callback)`, `emit(evento, ...args)`, `once(evento, callback)`
- `once` registra un listener che si rimuove automaticamente dopo la prima esecuzione
- Supporta wildcard `*` per ascoltare tutti gli eventi

**Esempio:**
```javascript
const emitter = creaEventEmitter();

emitter.on('user:login', (username) => {
  console.log(`${username} ha fatto login`);
});

emitter.once('app:start', () => {
  console.log('App avviata (solo una volta)');
});

emitter.emit('user:login', 'Mario');
emitter.emit('app:start');
emitter.emit('app:start'); // Non stampa nulla
```

**File**: `esercizio3_3.js`

---

### Esercizio 3.4 - Dependency Injection con Closure
**Obiettivo**: Implementare dependency injection usando closure.

Scrivi un programma che:
- Crea un container DI che gestisce dipendenze
- Dipendenze sono "chiuse" in closure e non accessibili direttamente
- Metodi: `register(nome, factory)`, `resolve(nome)`, `singleton(nome, factory)`
- `singleton` crea l'istanza una sola volta e la riusa
- Supporta dipendenze annidate (una dipendenza può dipendere da altre)

**Funzionalità:**
```javascript
const container = creaContainer();

// Registra dipendenze
container.register('config', () => ({ host: 'localhost', port: 3000 }));
container.register('logger', () => ({ log: (msg) => console.log(msg) }));

container.singleton('database', (container) => {
  const config = container.resolve('config');
  const logger = container.resolve('logger');
  return { 
    connect: () => logger.log(`Connecting to ${config.host}:${config.port}`)
  };
});

// Usa dipendenze
const db = container.resolve('database');
db.connect();
```

**File**: `esercizio3_4.js`

---

### Esercizio 3.5 - Throttle e Debounce con Closure
**Obiettivo**: Implementare funzioni di controllo timing con closure.

Scrivi un programma che:
- Implementa `throttle(func, limit)`: esegue `func` al massimo una volta ogni `limit` ms
- Implementa `debounce(func, delay)`: esegue `func` dopo `delay` ms di inattività
- Usa closure per mantenere timer e stato privati
- Implementa `leading` e `trailing` options per throttle
- Implementa `immediate` option per debounce

**Test con:**
- Simulazione di eventi scroll/resize
- Simulazione di input search
- Chiamate API

**File**: `esercizio3_5.js`

---

## Progetti Completi

### Progetto 1 - Shopping Cart con Closure
**Obiettivo**: Creare un sistema completo di carrello con scope privato.

Implementa un Shopping Cart che:
- Mantiene items privati, accessibili solo tramite metodi
- Metodi: `aggiungi(prodotto, quantita)`, `rimuovi(prodottoId)`, `aggiorna(prodottoId, quantita)`, `getItems()`, `getTotale()`, `svuota()`, `applicaSconto(percentuale)`, `getStorico()`
- Tiene traccia dello storico delle operazioni
- Supporta codici sconto (possono essere usati una sola volta)
- Calcola totale con tasse e spedizione
- Implementa validazione (quantità positive, prodotti esistenti, etc.)

**Funzionalità richieste:**
```javascript
const cart = creaShoppingCart();

cart.aggiungi({ id: 1, nome: 'Laptop', prezzo: 1000 }, 1);
cart.aggiungi({ id: 2, nome: 'Mouse', prezzo: 50 }, 2);

console.log(cart.getTotale()); // 1100

cart.applicaSconto(10); // 10% di sconto
console.log(cart.getTotale()); // 990

cart.rimuovi(2);
console.log(cart.getItems()); // Solo laptop

console.log(cart.getStorico());
// [
//   { azione: 'aggiungi', prodotto: 'Laptop', ... },
//   { azione: 'aggiungi', prodotto: 'Mouse', ... },
//   { azione: 'sconto', valore: 10, ... },
//   { azione: 'rimuovi', prodotto: 'Mouse', ... }
// ]
```

**File**: `progetto1_shopping_cart.js`

---

### Progetto 2 - Game State Manager
**Obiettivo**: Gestire lo stato di un gioco con closure e incapsulamento.

Implementa un Game State Manager che:
- Mantiene stato privato: livello, punteggio, vite, inventario, posizione
- Metodi: `inizia()`, `pausa()`, `riprendi()`, `gameOver()`, `salva()`, `carica()`
- Gestisce checkpoint automatici
- Implementa sistema di achievement (traguardi sbloccabili)
- Tiene traccia delle statistiche (tempo giocato, nemici sconfitti, etc.)
- Supporta undo/redo delle azioni
- Emette eventi per cambiamenti di stato importanti

**Esempio:**
```javascript
const game = creaGameState();

game.inizia();
game.aggiungiPunti(100);
game.avanzaLivello();
game.aggiungiItem('spada', 1);
game.salvaCheckpoint();

// Dopo un errore...
game.ripristinaCheckpoint();

console.log(game.getStatistiche());
// {
//   tempoGiocato: 3600,
//   livelloCorrente: 5,
//   punteggioTotale: 5000,
//   achievement: ['primo_livello', 'collezionista', ...]
// }
```

**File**: `progetto2_game_state.js`

---

### Progetto 3 - Rate Limiter
**Obiettivo**: Sistema di rate limiting per API con diverse strategie.

Implementa un Rate Limiter che:
- Supporta diverse strategie: Token Bucket, Leaky Bucket, Fixed Window, Sliding Window
- Ogni client ha il proprio rate limit (usando closure per stato privato)
- Metodi: `tentaRichiesta(clientId)`, `getRichiesteRimanenti(clientId)`, `resetClient(clientId)`, `getStatistiche()`
- Implementa whitelist/blacklist di client
- Supporta burst allowance (permette brevi spike di richieste)
- Logga richieste bloccate per analisi
- Configurabile per richiesta: limite, finestra temporale, strategia

**Funzionalità:**
```javascript
const limiter = creaRateLimiter({
  strategia: 'token-bucket',
  limite: 10,         // 10 richieste
  finestra: 60000,    // per minuto
  burst: 5            // permette burst di 5 richieste extra
});

// Client 1 fa richieste
for (let i = 0; i < 12; i++) {
  const risultato = limiter.tentaRichiesta('client1');
  console.log(`Richiesta ${i+1}: ${risultato.permesso ? 'OK' : 'BLOCCATO'}`);
  if (!risultato.permesso) {
    console.log(`Riprova tra ${risultato.ritardoMs}ms`);
  }
}

console.log(limiter.getStatistiche('client1'));
// {
//   richiestePermesse: 10,
//   richiesteBloccate: 2,
//   tokensRimanenti: 0,
//   prossimoReset: 45000
// }
```

**File**: `progetto3_rate_limiter.js`

---

### Progetto 4 - Observable Pattern
**Obiettivo**: Implementare il pattern Observable con closure.

Implementa un sistema Observable che:
- Permette di osservare cambiamenti a oggetti/valori
- Ogni observable mantiene valore corrente e lista observers privati
- Metodi: `getValue()`, `setValue(newValue)`, `subscribe(observer)`, `unsubscribe(observer)`
- Supporta trasformazioni: `map(fn)`, `filter(fn)`, `distinctUntilChanged()`
- Supporta combinazione di observable: `combineLatest()`, `merge()`
- Implementa operatori asincroni: `debounce()`, `throttle()`, `delay()`
- Gestione automatica memoria (weak references per observers)

**Esempio:**
```javascript
const temperatura = creaObservable(20);

// Sottoscrizione semplice
temperatura.subscribe(temp => {
  console.log(`Temperatura: ${temp}°C`);
});

// Sottoscrizione con trasformazione
temperatura
  .map(temp => temp * 9/5 + 32)
  .subscribe(tempF => {
    console.log(`Temperatura: ${tempF}°F`);
  });

// Cambia valore
temperatura.setValue(25);
// Output:
// Temperatura: 25°C
// Temperatura: 77°F

// Combinazione di observable
const umidita = creaObservable(60);

combineLatest(temperatura, umidita)
  .subscribe(([temp, hum]) => {
    console.log(`Condizioni: ${temp}°C, ${hum}% umidità`);
  });
```

**File**: `progetto4_observable.js`

---

### Progetto 5 - Redux-like State Manager
**Obiettivo**: Creare un gestore di stato globale come Redux.

Implementa uno State Manager che:
- Store centrale con stato privato accessibile solo tramite getters
- Actions per descrivere modifiche allo stato
- Reducers per applicare actions e produrre nuovo stato
- Middleware per intercettare actions (logging, async, validation)
- Subscriptions per notificare cambiamenti
- Time-travel debugging (undo/redo)
- Persistenza stato su localStorage
- DevTools per ispezionare stato e history

**Funzionalità:**
```javascript
// Setup
const store = creaStore(
  rootReducer,
  initialState,
  applyMiddleware(loggerMiddleware, thunkMiddleware)
);

// Definizione reducer
function counterReducer(state = { count: 0 }, action) {
  switch(action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'ADD':
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
}

// Sottoscrizione
store.subscribe((state) => {
  console.log('Nuovo stato:', state);
});

// Dispatch actions
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'ADD', payload: 5 });

// Async action con thunk
store.dispatch(async (dispatch, getState) => {
  const data = await fetch('/api/data');
  dispatch({ type: 'SET_DATA', payload: data });
});

// Time travel
store.undo();
store.redo();

// Salvataggio
store.saveToLocalStorage('app-state');
```

**File**: `progetto5_state_manager.js`

---

## Soluzioni

### Soluzione Esercizio 1.1

```javascript
// esercizio1_1.js

// Variabile globale
let contatore = 0;

function incrementa() {
  contatore++;
  console.log("Contatore globale dentro incrementa():", contatore);
}

function mostraLocale() {
  // Variabile locale con stesso nome - fa shadowing
  let contatore = 100;
  console.log("Contatore locale dentro mostraLocale():", contatore);
}

// Test
console.log("=== Test Scope ===\n");

console.log("1. Contatore globale iniziale:", contatore);

incrementa();
incrementa();

console.log("2. Contatore globale dopo incrementi:", contatore);

mostraLocale();

console.log("3. Contatore globale dopo mostraLocale():", contatore);

// Il contatore globale non è stato modificato da mostraLocale()
// perché quella funzione ha una variabile locale separata
```

**Esecuzione:**
```bash
node esercizio1_1.js
```

**Output atteso:**
```
=== Test Scope ===

1. Contatore globale iniziale: 0
Contatore globale dentro incrementa(): 1
Contatore globale dentro incrementa(): 2
2. Contatore globale dopo incrementi: 2
Contatore locale dentro mostraLocale(): 100
3. Contatore globale dopo mostraLocale(): 2
```

---

### Soluzione Esercizio 1.2

```javascript
// esercizio1_2.js

console.log("=== Test Block Scope ===\n");

// Test con let e var
console.log("1. Test in blocco if:");

if (true) {
  let x = 10;  // Block scope
  var y = 20;  // Function/Global scope
  console.log("  Dentro blocco - x:", x, "y:", y);
}

console.log("  Fuori blocco - y:", y);

try {
  console.log("  Fuori blocco - x:", x);
} catch (error) {
  console.log("  Fuori blocco - x: NON ACCESSIBILE (ReferenceError)");
}

// Test con const
console.log("\n2. Test con const:");

if (true) {
  const z = 30;
  console.log("  Dentro blocco - z:", z);
}

try {
  console.log("  Fuori blocco - z:", z);
} catch (error) {
  console.log("  Fuori blocco - z: NON ACCESSIBILE (ReferenceError)");
}

// Test con loop
console.log("\n3. Test in loop:");

for (let i = 0; i < 3; i++) {
  console.log("  Dentro loop - i:", i);
}

try {
  console.log("  Fuori loop - i:", i);
} catch (error) {
  console.log("  Fuori loop - i: NON ACCESSIBILE");
}

for (var j = 0; j < 3; j++) {
  // j sarà accessibile fuori dal loop
}

console.log("  Fuori loop - j:", j, "(var non rispetta block scope)");

// Conclusioni
console.log("\n=== Conclusioni ===");
console.log("- let e const rispettano il block scope");
console.log("- var ha function scope (o global se fuori da funzioni)");
console.log("- Preferire let/const per evitare bug");
```

**Esecuzione:**
```bash
node esercizio1_2.js
```

---

### Soluzione Esercizio 1.3

```javascript
// esercizio1_3.js

function creaContatore() {
  // Variabile privata - accessibile solo dalla funzione interna
  let conteggio = 0;
  
  // Funzione interna (closure) che ha accesso a conteggio
  return function() {
    conteggio++;
    return conteggio;
  };
}

// Test
console.log("=== Test Closure - Contatori Indipendenti ===\n");

let contatore1 = creaContatore();
let contatore2 = creaContatore();

console.log("Contatore 1:");
console.log("  Chiamata 1:", contatore1()); // 1
console.log("  Chiamata 2:", contatore1()); // 2
console.log("  Chiamata 3:", contatore1()); // 3

console.log("\nContatore 2:");
console.log("  Chiamata 1:", contatore2()); // 1
console.log("  Chiamata 2:", contatore2()); // 2

console.log("\nContatore 1 (di nuovo):");
console.log("  Chiamata 4:", contatore1()); // 4

console.log("\n=== Spiegazione ===");
console.log("Ogni chiamata a creaContatore() crea un nuovo scope");
console.log("con la propria variabile 'conteggio' privata.");
console.log("La funzione interna mantiene accesso alla variabile");
console.log("anche dopo che creaContatore() è terminata (CLOSURE).");
```

**Esecuzione:**
```bash
node esercizio1_3.js
```

---

### Soluzione Esercizio 1.4

```javascript
// esercizio1_4.js

function livello1() {
  let a = 1;
  console.log("Livello 1 - a:", a);
  
  function livello2() {
    let b = 2;
    console.log("Livello 2 - a:", a, "b:", b);
    
    function livello3() {
      let c = 3;
      console.log("Livello 3 - a:", a, "b:", b, "c:", c);
      
      // livello3 ha accesso a tutte le variabili
      // perché risale la scope chain:
      // 1. Cerca 'c' nel proprio scope -> trovato
      // 2. Cerca 'b' nel proprio scope -> non trovato
      //    Risale al parent (livello2) -> trovato
      // 3. Cerca 'a' nel proprio scope -> non trovato
      //    Risale al parent (livello2) -> non trovato
      //    Risale al parent (livello1) -> trovato
    }
    
    livello3();
    
    // livello2 NON può accedere a 'c'
    try {
      console.log("Tentativo accesso c da livello2:", c);
    } catch (error) {
      console.log("Livello 2 NON può accedere a 'c'");
    }
  }
  
  livello2();
  
  // livello1 NON può accedere a 'b' o 'c'
  try {
    console.log("Tentativo accesso b da livello1:", b);
  } catch (error) {
    console.log("Livello 1 NON può accedere a 'b' o 'c'");
  }
}

console.log("=== Test Scope Chain ===\n");
livello1();

console.log("\n=== Spiegazione ===");
console.log("La scope chain permette alle funzioni interne");
console.log("di accedere alle variabili delle funzioni esterne.");
console.log("L'accesso è unidirezionale: interno -> esterno");
console.log("Le funzioni esterne NON possono accedere alle");
console.log("variabili delle funzioni interne.");
```

**Esecuzione:**
```bash
node esercizio1_4.js
```

---

### Soluzione Esercizio 1.5

```javascript
// esercizio1_5.js

let nome = "Globale";

console.log("=== Test Shadowing ===\n");

console.log("1. Scope globale - nome:", nome);

function testShadowing() {
  let nome = "Locale Funzione";
  console.log("2. Scope funzione - nome:", nome);
  
  if (true) {
    let nome = "Locale Blocco";
    console.log("3. Scope blocco - nome:", nome);
    
    // Dentro il blocco, 'nome' si riferisce alla variabile del blocco
    // che "oscura" (shadow) le variabili con lo stesso nome negli scope esterni
  }
  
  // Fuori dal blocco, torniamo alla variabile della funzione
  console.log("4. Scope funzione (dopo blocco) - nome:", nome);
}

testShadowing();

// Fuori dalla funzione, torniamo alla variabile globale
console.log("5. Scope globale (dopo funzione) - nome:", nome);

// Esempio più complesso
console.log("\n=== Esempio Complesso ===\n");

let valore = "Livello 0 (Globale)";

function outer() {
  let valore = "Livello 1 (Outer)";
  console.log("Outer:", valore);
  
  function middle() {
    let valore = "Livello 2 (Middle)";
    console.log("Middle:", valore);
    
    function inner() {
      let valore = "Livello 3 (Inner)";
      console.log("Inner:", valore);
    }
    
    inner();
    console.log("Middle dopo inner:", valore);
  }
  
  middle();
  console.log("Outer dopo middle:", valore);
}

outer();
console.log("Globale dopo outer:", valore);

console.log("\n=== Nota ===");
console.log("Ogni livello ha la propria variabile 'nome'/'valore'");
console.log("che 'oscura' le variabili con lo stesso nome nei livelli esterni.");
console.log("Questo si chiama SHADOWING (oscuramento).");
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

### Debugging Scope e Closure
```bash
# Eseguire con debugger Chrome DevTools
node --inspect-brk nome_file.js

# Poi aprire chrome://inspect in Chrome
# per ispezionare scope e closure interattivamente
```

### Visualizzare Scope Chain
Per visualizzare la scope chain, usa breakpoint nel debugger
e ispeziona il pannello "Scope" nelle DevTools.

---

[Torna all'indice](../README.md) | [Vai alla teoria: Scope e Closure](../teoria/03_Scope_Closure.md)
