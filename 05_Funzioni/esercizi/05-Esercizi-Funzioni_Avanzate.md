# Esercizi su Funzioni Avanzate in JavaScript

## Indice
1. [Esercizi Base](#esercizi-base)
2. [Esercizi Intermedi](#esercizi-intermedi)
3. [Esercizi Avanzati](#esercizi-avanzati)
4. [Progetti Completi](#progetti-completi)
5. [Soluzioni](#soluzioni)

---

## Esercizi Base

### Esercizio 1.1 - Prima Funzione Ricorsiva
**Obiettivo**: Comprendere il concetto di ricorsione.

Scrivi un programma che:
- Implementa il calcolo del fattoriale in modo ricorsivo
- Implementa il conto alla rovescia ricorsivo (da N a 0)
- Implementa la somma dei primi N numeri naturali ricorsivamente
- Per ogni funzione, aggiungi un caso base per terminare la ricorsione

**Suggerimenti:**
- Il caso base è fondamentale per evitare ricorsione infinita
- Fattoriale: n! = n * (n-1)! e 0! = 1

**File**: `esercizio1_1.js`

---

### Esercizio 1.2 - Fibonacci Ricorsivo
**Obiettivo**: Implementare la sequenza di Fibonacci.

Scrivi un programma che:
- Implementa Fibonacci ricorsivamente: F(n) = F(n-1) + F(n-2)
- Casi base: F(0) = 0, F(1) = 1
- Calcola i primi 10 numeri della sequenza
- Misura il tempo di calcolo per numeri crescenti
- Osserva come il tempo cresce esponenzialmente

**Esempio output:**
```
F(0) = 0
F(1) = 1
F(2) = 1
F(3) = 2
F(4) = 3
F(5) = 5
...
```

**File**: `esercizio1_2.js`

---

### Esercizio 1.3 - Higher-Order Function Base
**Obiettivo**: Creare funzioni che accettano altre funzioni.

Scrivi un programma che:
- Crea `eseguiOperazione(a, b, operazione)` che applica `operazione` a `a` e `b`
- Crea funzioni: `somma`, `sottrazione`, `moltiplicazione`, `divisione`
- Testa `eseguiOperazione` con tutte le operazioni
- Crea `ripeti(n, azione)` che esegue `azione` n volte

**File**: `esercizio1_3.js`

---

### Esercizio 1.4 - Currying Semplice
**Obiettivo**: Trasformare funzioni multi-parametro in funzioni curried.

Scrivi un programma che:
- Trasforma `somma(a, b, c)` in `somma(a)(b)(c)`
- Trasforma `moltiplica(a, b)` in `moltiplica(a)(b)`
- Crea funzioni specializzate: `aggiungi10`, `raddoppia`, `triplica`
- Usa le funzioni specializzate su un array di numeri

**Test:**
```javascript
const somma = a => b => c => a + b + c;
const aggiungi10 = somma(10);
console.log(aggiungi10(5)(3)); // 18
```

**File**: `esercizio1_4.js`

---

### Esercizio 1.5 - Funzione Pura vs Impura
**Obiettivo**: Distinguere tra funzioni pure e impure.

Scrivi un programma con:
- 3 funzioni pure (stesso input → stesso output, no side effects)
- 3 funzioni impure (modificano stato esterno o hanno comportamento non deterministico)
- Documenta perché ciascuna è pura o impura
- Dimostra i benefici delle funzioni pure (testabilità, prevedibilità)

**File**: `esercizio1_5.js`

---

## Esercizi Intermedi

### Esercizio 2.1 - Memoizzazione di Fibonacci
**Obiettivo**: Ottimizzare Fibonacci con memoizzazione.

Scrivi un programma dove:
- Implementi Fibonacci normale (ricorsivo)
- Implementi Fibonacci con memoizzazione
- Confronta i tempi di esecuzione per F(40)
- La versione memoizzata deve essere significativamente più veloce
- Stampa statistiche: numero di chiamate, tempo impiegato

**Schema:**
```javascript
const memo = {};
function fibMemo(n) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibMemo(n-1) + fibMemo(n-2);
  return memo[n];
}
```

**File**: `esercizio2_1.js`

---

### Esercizio 2.2 - Composizione di Funzioni
**Obiettivo**: Combinare più funzioni in una sola.

Scrivi un programma che:
- Implementa `componi(...funzioni)` che compone funzioni da destra a sinistra
- Implementa `pipe(...funzioni)` che compone da sinistra a destra
- Crea una pipeline di trasformazioni per elaborare stringhe
- Testa con diverse combinazioni di funzioni

**Esempio:**
```javascript
const elabora = pipe(
  str => str.trim(),
  str => str.toLowerCase(),
  str => str.split(' '),
  arr => arr.filter(word => word.length > 3),
  arr => arr.join('-')
);

console.log(elabora("  Hello World  ")); // "hello-world"
```

**File**: `esercizio2_2.js`

---

### Esercizio 2.3 - Funzioni Generatrici
**Obiettivo**: Usare generator functions per sequenze.

Scrivi un programma con:
- Un generatore di numeri da 1 a N
- Un generatore di Fibonacci infinito
- Un generatore di numeri pari
- Un generatore che prende N elementi da un altro generatore

**Esempio:**
```javascript
function* numeri(max) {
  for (let i = 1; i <= max; i++) {
    yield i;
  }
}

for (let n of numeri(5)) {
  console.log(n); // 1, 2, 3, 4, 5
}
```

**File**: `esercizio2_3.js`

---

### Esercizio 2.4 - Async/Await Base
**Obiettivo**: Comprendere le funzioni asincrone.

Scrivi un programma che:
- Simula operazioni asincrone con `setTimeout` wrapped in Promise
- Crea funzioni async: `caricaDati`, `elaboraDati`, `salvaDati`
- Concatena le operazioni usando async/await
- Gestisci errori con try/catch
- Confronta con il callback hell

**File**: `esercizio2_4.js`

---

### Esercizio 2.5 - Partial Application
**Obiettivo**: Applicare parzialmente argomenti a funzioni.

Scrivi un programma che:
- Implementa `partial(fn, ...args)` per applicazione parziale
- Crea funzioni specializzate da funzioni generiche
- Esempio: da `fetch(url, options)` crea `fetchJSON(url)`
- Implementa `partialRight` per applicare da destra

**File**: `esercizio2_5.js`

---

## Esercizi Avanzati

### Esercizio 3.1 - Trampoline per Ricorsione Tail-Call
**Obiettivo**: Evitare stack overflow con il pattern trampoline.

Scrivi un programma che:
- Implementa il pattern trampoline per ottimizzare ricorsione tail-call
- Converte fattoriale ricorsivo in versione tail-call optimized
- Confronta con versione normale (che va in stack overflow per numeri grandi)
- Testa con numeri molto grandi (10000+)

**Funzionalità:**
```javascript
function trampoline(fn) {
  return function(...args) {
    let result = fn(...args);
    while (typeof result === 'function') {
      result = result();
    }
    return result;
  };
}

const fattoriale = trampoline(function fact(n, acc = 1) {
  if (n <= 1) return acc;
  return () => fact(n - 1, n * acc);
});

console.log(fattoriale(10000)); // Non va in stack overflow
```

**File**: `esercizio3_1.js`

---

### Esercizio 3.2 - Monad Pattern
**Obiettivo**: Implementare Maybe e Either monad.

Scrivi un programma con:
- `Maybe` monad per valori nullable
- Metodi: `of`, `map`, `flatMap`, `getOrElse`
- `Either` monad per gestione errori
- Metodi: `left`, `right`, `map`, `flatMap`, `fold`
- Esempi pratici di utilizzo

**Esempio:**
```javascript
const utente = Maybe.of({ nome: "Mario", indirizzo: { citta: "Roma" } });

const citta = utente
  .map(u => u.indirizzo)
  .map(addr => addr.citta)
  .getOrElse("Città sconosciuta");

// Gestione errori con Either
const divide = (a, b) =>
  b === 0 
    ? Either.left("Divisione per zero")
    : Either.right(a / b);

divide(10, 2)
  .map(x => x * 2)
  .fold(
    err => console.error(err),
    val => console.log(val) // 10
  );
```

**File**: `esercizio3_2.js`

---

### Esercizio 3.3 - Lazy Evaluation
**Obiettivo**: Implementare valutazione pigra per ottimizzazioni.

Scrivi un programma che:
- Implementa una classe `Lazy` che ritarda l'esecuzione finché non necessario
- Supporta operazioni: `map`, `filter`, `take`, `toArray`
- Solo quando si chiama `toArray` vengono eseguite le operazioni
- Dimostra efficienza con grandi dataset

**Test con:**
- Processing di grandi array
- Operazioni costose che possono essere evitate
- Infinite sequences

**File**: `esercizio3_3.js`

---

### Esercizio 3.4 - Transducers
**Obiettivo**: Implementare transducers per composizione efficiente.

Scrivi un programma che:
- Implementa transducers per `map`, `filter`, `take`
- Componi transducers senza creare array intermedi
- Confronta performance con approccio normale (map + filter + take)
- Applica transducers a diverse strutture dati

**Funzionalità:**
```javascript
const xform = compose(
  map(x => x * 2),
  filter(x => x > 5),
  take(3)
);

const result = transduce(xform, array, [1, 2, 3, 4, 5, 6, 7, 8]);
// Più efficiente di: array.map().filter().slice()
```

**File**: `esercizio3_4.js`

---

### Esercizio 3.5 - Continuation-Passing Style (CPS)
**Obiettivo**: Trasformare funzioni in CPS per controllo del flusso.

Scrivi un programma che:
- Converte funzioni normali in CPS
- Implementa operazioni asincrone con CPS
- Gestisce errori in stile CPS
- Confronta con Promises e async/await

**Esempio:**
```javascript
// Normale
function add(a, b) {
  return a + b;
}

// CPS
function addCPS(a, b, cont) {
  cont(a + b);
}

addCPS(3, 4, result => {
  console.log(result); // 7
});
```

**File**: `esercizio3_5.js`

---

## Progetti Completi

### Progetto 1 - Parser Combinator Library
**Obiettivo**: Libreria per parsing usando combinatori funzionali.

Implementa una libreria di parser che:
- Parser atomici: `char`, `digit`, `letter`, `string`
- Combinatori: `seq`, `choice`, `many`, `optional`
- Operazioni: `map`, `chain`, `sepBy`
- Parser per JSON semplificato
- Parser per espressioni matematiche
- Error reporting dettagliato

**Funzionalità richieste:**
```javascript
const { char, digit, many, seq, choice } = ParserLib;

// Parser per numero intero
const integer = many(digit).map(digits => parseInt(digits.join('')));

// Parser per lista di numeri
const numberList = sepBy(integer, char(','));

// Uso
const result = numberList.parse("1,2,3,4,5");
console.log(result); // [1, 2, 3, 4, 5]

// Parser espressioni
const expr = choice([
  seq([integer, char('+'), integer]).map(([a, _, b]) => a + b),
  seq([integer, char('*'), integer]).map(([a, _, b]) => a * b),
  integer
]);

console.log(expr.parse("3+4")); // 7
console.log(expr.parse("3*4")); // 12
```

**File**: `progetto1_parser_combinators.js`

---

### Progetto 2 - Effect System
**Obiettivo**: Sistema per gestire side effects in modo funzionale.

Implementa un Effect System che:
- Incapsula side effects (I/O, random, time) in strutture pure
- Separa descrizione da esecuzione
- Combinatori per comporre effects: `map`, `flatMap`, `sequence`, `parallel`
- Interprete per eseguire effects
- Dependency injection per testabilità
- Retry, timeout, fallback per effects

**Esempio:**
```javascript
// Definizione (pura - no side effects)
const program = Effect.of()
  .flatMap(() => Effect.log("Avvio programma"))
  .flatMap(() => Effect.readFile("config.json"))
  .map(JSON.parse)
  .flatMap(config => Effect.httpGet(config.apiUrl))
  .map(response => response.data)
  .flatMap(data => Effect.writeFile("output.txt", JSON.stringify(data)))
  .flatMap(() => Effect.log("Completato"))
  .catch(err => Effect.log(`Errore: ${err}`));

// Esecuzione (side effects avvengono qui)
await Effect.run(program);

// Testing (mock dell'interprete)
const testResult = await Effect.runTest(program, {
  readFile: () => '{"apiUrl": "http://test"}',
  httpGet: () => ({ data: [1, 2, 3] }),
  writeFile: () => undefined
});
```

**File**: `progetto2_effect_system.js`

---

### Progetto 3 - Funzionale Reactive Programming (FRP)
**Obiettivo**: Sistema FRP completo per gestire flussi di dati temporali.

Implementa un sistema FRP che:
- `Signal` per valori che cambiano nel tempo
- `Event` per occorrenze discrete
- Combinatori: `map`, `filter`, `merge`, `combine`, `sample`
- `Behavior` per valori continui derivati
- Gestione automatica dipendenze
- Garbage collection di signals non usati
- Integration con DOM events

**Funzionalità:**
```javascript
// Signals
const mouseX = Signal.fromEvent(document, 'mousemove', e => e.clientX);
const mouseY = Signal.fromEvent(document, 'mousemove', e => e.clientY);

// Derived signals
const mousePos = Signal.combine(
  mouseX, 
  mouseY,
  (x, y) => ({ x, y })
);

// Behavior
const distance = mousePos.map(pos => 
  Math.sqrt(pos.x ** 2 + pos.y ** 2)
);

// Subscribe
distance.subscribe(d => {
  console.log(`Distanza dall'origine: ${d}`);
});

// Time-based
const seconds = Signal.interval(1000)
  .scan((acc, _) => acc + 1, 0);

// Events
const clicks = Event.fromDOMEvent(button, 'click');
const doubleClicks = clicks.debounce(300);

doubleClicks.subscribe(() => {
  console.log('Double click!');
});

// Combinazioni complesse
const searchResults = searchInput
  .map(e => e.target.value)
  .debounce(500)
  .distinctUntilChanged()
  .switchMap(query => Signal.fromPromise(fetch(`/api?q=${query}`)))
  .map(response => response.json());
```

**File**: `progetto3_frp_system.js`

---

### Progetto 4 - Type System con Funzioni
**Obiettivo**: Sistema di tipi runtime usando funzioni.

Implementa un type system che:
- Definizione tipi: `string`, `number`, `boolean`, `array`, `object`, `union`, `intersection`
- Type guards e refinements
- Validazione runtime con error messages dettagliati
- Type inference dove possibile
- Branded types per type safety
- Composizione di tipi complessi

**Funzionalità:**
```javascript
// Definizione tipi
const User = Type.object({
  id: Type.number,
  name: Type.string,
  email: Type.string.matches(/@/),
  age: Type.number.between(0, 150).optional,
  role: Type.union([Type.literal('admin'), Type.literal('user')]),
  address: Type.object({
    street: Type.string,
    city: Type.string,
    zip: Type.string.matches(/^\d{5}$/)
  }).optional
});

// Validazione
const result = User.validate({
  id: 1,
  name: "Mario",
  email: "mario@example.com",
  role: "admin"
});

if (result.success) {
  const user = result.value; // Typed!
} else {
  console.error(result.errors);
}

// Type guards
function processUser(data: unknown) {
  if (User.is(data)) {
    // TypeScript sa che data è User qui
    console.log(data.name);
  }
}

// Branded types
type UserId = Brand<number, 'UserId'>;
type Email = Brand<string, 'Email'>;

const userId = Type.brand<UserId>(Type.number.positive);
const email = Type.brand<Email>(Type.string.matches(/@/));

function getUser(id: UserId): User {
  // id è garantito essere un numero positivo
}

// Inference
const schema = Type.object({
  name: Type.string,
  age: Type.number
});

type Person = Type.Infer<typeof schema>;
// Person = { name: string, age: number }
```

**File**: `progetto4_type_system.js`

---

### Progetto 5 - Functional State Machine
**Obiettivo**: State machine funzionale con immutabilità totale.

Implementa una state machine che:
- Stati e transizioni definiti puramente
- Immutabile - ogni transizione restituisce nuova machine
- Guards per condizionare transizioni
- Actions (side effects) separate dallo stato
- Hierarchical state machines (substates)
- History states (ritorna a stato precedente)
- Parallel states (stati concorrenti)
- Visualizzazione grafica della macchina

**Esempio:**
```javascript
// Definizione
const trafficLight = createMachine({
  initial: 'green',
  states: {
    green: {
      on: {
        TIMER: {
          target: 'yellow',
          guard: (context) => context.timer > 30,
          actions: ['logTransition']
        }
      },
      entry: ['startTimer'],
      exit: ['stopTimer']
    },
    yellow: {
      on: {
        TIMER: 'red'
      }
    },
    red: {
      on: {
        TIMER: 'green'
      },
      after: {
        10000: 'green' // Automatico dopo 10s
      }
    }
  }
});

// Uso
let machine = trafficLight.initial();
console.log(machine.state); // 'green'

machine = machine.send('TIMER');
console.log(machine.state); // 'yellow'

machine = machine.send('TIMER');
console.log(machine.state); // 'red'

// History
const withHistory = createMachine({
  initial: 'idle',
  states: {
    idle: { on: { START: 'running' } },
    running: {
      initial: 'step1',
      states: {
        step1: { on: { NEXT: 'step2' } },
        step2: { on: { NEXT: 'step3' } },
        step3: { type: 'final' }
      },
      on: {
        PAUSE: 'paused'
      }
    },
    paused: {
      on: {
        RESUME: 'running.history' // Ritorna allo step dove era
      }
    }
  }
});

// Parallel states
const appMachine = createMachine({
  type: 'parallel',
  states: {
    upload: {
      initial: 'idle',
      states: {
        idle: { on: { START_UPLOAD: 'uploading' } },
        uploading: { on: { DONE: 'complete' } },
        complete: { type: 'final' }
      }
    },
    notifications: {
      initial: 'enabled',
      states: {
        enabled: { on: { MUTE: 'disabled' } },
        disabled: { on: { UNMUTE: 'enabled' } }
      }
    }
  }
});
```

**File**: `progetto5_state_machine.js`

---

## Soluzioni

### Soluzione Esercizio 1.1

```javascript
// esercizio1_1.js

console.log("=== Funzioni Ricorsive Base ===\n");

// 1. Fattoriale ricorsivo
function fattoriale(n) {
  // Caso base: 0! = 1
  if (n === 0 || n === 1) {
    return 1;
  }
  
  // Caso ricorsivo: n! = n * (n-1)!
  return n * fattoriale(n - 1);
}

console.log("1. Fattoriale:");
console.log("  5! =", fattoriale(5));   // 120
console.log("  7! =", fattoriale(7));   // 5040
console.log("  0! =", fattoriale(0));   // 1

// 2. Conto alla rovescia
function contoAllaRovescia(n) {
  // Caso base: arrivato a 0
  if (n < 0) {
    console.log("  BOOM!");
    return;
  }
  
  // Stampa numero corrente
  console.log(" ", n);
  
  // Caso ricorsivo: continua con n-1
  contoAllaRovescia(n - 1);
}

console.log("\n2. Conto alla rovescia da 5:");
contoAllaRovescia(5);

// 3. Somma primi N numeri naturali
function sommaNaturali(n) {
  // Caso base: somma di 0 numeri = 0
  if (n === 0) {
    return 0;
  }
  
  // Caso ricorsivo: n + somma dei precedenti
  return n + sommaNaturali(n - 1);
}

console.log("\n3. Somma primi N numeri:");
console.log("  Somma(5) =", sommaNaturali(5));   // 15 (1+2+3+4+5)
console.log("  Somma(10) =", sommaNaturali(10)); // 55

// 4. Potenza ricorsiva
function potenza(base, esponente) {
  // Caso base: qualsiasi numero^0 = 1
  if (esponente === 0) {
    return 1;
  }
  
  // Caso ricorsivo: base * base^(esponente-1)
  return base * potenza(base, esponente - 1);
}

console.log("\n4. Potenza:");
console.log("  2^5 =", potenza(2, 5));   // 32
console.log("  3^4 =", potenza(3, 4));   // 81

// 5. Visualizzazione chiamate ricorsive
function fattorialeDebug(n, indent = 0) {
  const spaces = ' '.repeat(indent * 2);
  console.log(`${spaces}fattoriale(${n})`);
  
  if (n === 0 || n === 1) {
    console.log(`${spaces}→ return 1`);
    return 1;
  }
  
  const result = n * fattorialeDebug(n - 1, indent + 1);
  console.log(`${spaces}→ return ${n} * ${result / n} = ${result}`);
  return result;
}

console.log("\n5. Visualizzazione chiamate ricorsive:");
fattorialeDebug(5);
```

**Esecuzione:**
```bash
node esercizio1_1.js
```

**Output atteso:**
```
=== Funzioni Ricorsive Base ===

1. Fattoriale:
  5! = 120
  7! = 5040
  0! = 1

2. Conto alla rovescia da 5:
  5
  4
  3
  2
  1
  0
  BOOM!

3. Somma primi N numeri:
  Somma(5) = 15
  Somma(10) = 55

4. Potenza:
  2^5 = 32
  3^4 = 81

5. Visualizzazione chiamate ricorsive:
fattoriale(5)
  fattoriale(4)
    fattoriale(3)
      fattoriale(2)
        fattoriale(1)
        → return 1
      → return 2 * 1 = 2
    → return 3 * 2 = 6
  → return 4 * 6 = 24
→ return 5 * 24 = 120
```

---

### Soluzione Esercizio 1.2

```javascript
// esercizio1_2.js

console.log("=== Fibonacci Ricorsivo ===\n");

// Implementazione ricorsiva base
function fibonacci(n) {
  // Casi base
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  // Caso ricorsivo
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Calcola e stampa i primi N numeri
console.log("1. Sequenza di Fibonacci (primi 10 numeri):");
for (let i = 0; i < 10; i++) {
  console.log(`  F(${i}) = ${fibonacci(i)}`);
}

// Misura tempo di esecuzione
function misuratempo(n) {
  const start = Date.now();
  const result = fibonacci(n);
  const end = Date.now();
  return { result, time: end - start };
}

console.log("\n2. Tempo di calcolo (crescita esponenziale):");
for (let n = 10; n <= 40; n += 5) {
  const { result, time } = misuratempo(n);
  console.log(`  F(${n}) = ${result} - Tempo: ${time}ms`);
}

// Contatore chiamate per vedere l'inefficienza
let contatoreChiamate = 0;

function fibonacciContato(n) {
  contatoreChiamate++;
  
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  return fibonacciContato(n - 1) + fibonacciContato(n - 2);
}

console.log("\n3. Numero di chiamate ricorsive:");
for (let n = 5; n <= 15; n += 5) {
  contatoreChiamate = 0;
  const result = fibonacciContato(n);
  console.log(`  F(${n}) = ${result} - Chiamate: ${contatoreChiamate}`);
}

console.log("\n4. Problema:");
console.log("  Fibonacci ricorsivo ricalcola gli stessi valori più volte!");
console.log("  Per F(5):");
console.log("    F(5) chiama F(4) e F(3)");
console.log("    F(4) chiama F(3) e F(2) - F(3) calcolato 2 volte!");
console.log("    F(3) chiama F(2) e F(1) - F(2) calcolato 3 volte!");
console.log("  Soluzione: MEMOIZATION (prossimo esercizio)");
```

**Esecuzione:**
```bash
node esercizio1_2.js
```

---

### Soluzione Esercizio 1.3

```javascript
// esercizio1_3.js

console.log("=== Higher-Order Functions ===\n");

// Funzione che accetta un'altra funzione come parametro
function eseguiOperazione(a, b, operazione) {
  return operazione(a, b);
}

// Funzioni operazione
const somma = (a, b) => a + b;
const sottrazione = (a, b) => a - b;
const moltiplicazione = (a, b) => a * b;
const divisione = (a, b) => b !== 0 ? a / b : "Errore: divisione per zero";

console.log("1. eseguiOperazione con diverse operazioni:");
console.log("  5 + 3 =", eseguiOperazione(5, 3, somma));
console.log("  5 - 3 =", eseguiOperazione(5, 3, sottrazione));
console.log("  5 * 3 =", eseguiOperazione(5, 3, moltiplicazione));
console.log("  5 / 3 =", eseguiOperazione(5, 3, divisione));

// Funzione che ripete un'azione N volte
function ripeti(n, azione) {
  for (let i = 0; i < n; i++) {
    azione(i);
  }
}

console.log("\n2. ripeti:");
ripeti(5, i => console.log(`  Iterazione ${i + 1}`));

// Applicazione pratica: transformare array
function trasformaArray(array, trasformazione) {
  const risultato = [];
  for (let elemento of array) {
    risultato.push(trasformazione(elemento));
  }
  return risultato;
}

const numeri = [1, 2, 3, 4, 5];
console.log("\n3. trasformaArray:");
console.log("  Originale:", numeri);
console.log("  Raddoppiati:", trasformaArray(numeri, x => x * 2));
console.log("  Quadrati:", trasformaArray(numeri, x => x * x));

// Filtra array
function filtraArray(array, predicato) {
  const risultato = [];
  for (let elemento of array) {
    if (predicato(elemento)) {
      risultato.push(elemento);
    }
  }
  return risultato;
}

console.log("\n4. filtraArray:");
console.log("  Solo pari:", filtraArray(numeri, x => x % 2 === 0));
console.log("  Maggiori di 3:", filtraArray(numeri, x => x > 3));

// Composizione di higher-order functions
console.log("\n5. Composizione:");
const pariRaddoppiati = trasformaArray(
  filtraArray(numeri, x => x % 2 === 0),
  x => x * 2
);
console.log("  Pari raddoppiati:", pariRaddoppiati);
```

**Esecuzione:**
```bash
node esercizio1_3.js
```

---

### Soluzione Esercizio 1.4

```javascript
// esercizio1_4.js

console.log("=== Currying ===\n");

// 1. Somma curried a 3 parametri
const somma = a => b => c => a + b + c;

console.log("1. Somma curried:");
console.log("  somma(1)(2)(3) =", somma(1)(2)(3));

// Applicazione parziale
const sommaConUno = somma(1);
const sommaConUnoPiuDue = sommaConUno(2);
console.log("  sommaConUno(2)(3) =", sommaConUnoPiuDue(3));

// 2. Moltiplica curried
const moltiplica = a => b => a * b;

console.log("\n2. Moltiplica curried:");
console.log("  moltiplica(3)(4) =", moltiplica(3)(4));

// Funzioni specializzate
const raddoppia = moltiplica(2);
const triplica = moltiplica(3);
const quadruplica = moltiplica(4);

console.log("\n3. Funzioni specializzate:");
console.log("  raddoppia(5) =", raddoppia(5));
console.log("  triplica(5) =", triplica(5));
console.log("  quadruplica(5) =", quadruplica(5));

// Applicazione su array
const numeri = [1, 2, 3, 4, 5];

console.log("\n4. Applicazione su array:");
console.log("  Originale:", numeri);
console.log("  Raddoppiati:", numeri.map(raddoppia));
console.log("  Triplicati:", numeri.map(triplica));

// Funzione curry generica
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

// Uso di curry generico
function somma3(a, b, c) {
  return a + b + c;
}

const somma3Curried = curry(somma3);

console.log("\n5. Curry generico:");
console.log("  somma3Curried(1)(2)(3) =", somma3Curried(1)(2)(3));
console.log("  somma3Curried(1, 2)(3) =", somma3Curried(1, 2)(3));
console.log("  somma3Curried(1)(2, 3) =", somma3Curried(1)(2, 3));

// Esempio pratico: configurazione
const saluta = lingua => nome => {
  const saluti = {
    'it': `Ciao, ${nome}!`,
    'en': `Hello, ${nome}!`,
    'es': `¡Hola, ${nome}!`,
    'fr': `Bonjour, ${nome}!`
  };
  return saluti[lingua] || `Hi, ${nome}!`;
};

const salutaItaliano = saluta('it');
const salutaInglese = saluta('en');

console.log("\n6. Esempio pratico:");
console.log("  " + salutaItaliano('Mario'));
console.log("  " + salutaInglese('Mario'));
console.log("  " + saluta('es')('Mario'));
```

**Esecuzione:**
```bash
node esercizio1_4.js
```

---

## Note per l'Esecuzione

### Prerequisiti
- Node.js installato (versione 14 o superiore)
- Supporto per features moderne (generators, async/await)

### Esecuzione di un Esercizio
```bash
# Navigare nella directory degli esercizi
cd /percorso/esercizi

# Eseguire un file JavaScript
node nome_file.js
```

### Performance Profiling
```bash
# Per misurare performance
node --prof nome_file.js
node --prof-process isolate-*.log > processed.txt

# Con inspector
node --inspect nome_file.js
```

### Testing Ricorsione
Per testare ricorsione profonda senza stack overflow:

```bash
# Aumenta stack size
node --stack-size=10000 nome_file.js
```

---

[Torna all'indice](../README.md) | [Vai alla teoria: Funzioni Avanzate](../teoria/05_Funzioni_Avanzate.md)
