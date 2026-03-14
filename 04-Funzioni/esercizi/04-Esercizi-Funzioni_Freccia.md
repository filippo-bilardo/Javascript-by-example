# Esercizi sulle Funzioni Freccia in JavaScript

## Indice
1. [Esercizi Base](#esercizi-base)
2. [Esercizi Intermedi](#esercizi-intermedi)
3. [Esercizi Avanzati](#esercizi-avanzati)
4. [Progetti Completi](#progetti-completi)
5. [Soluzioni](#soluzioni)

---

## Esercizi Base

### Esercizio 1.1 - Sintassi Base
**Obiettivo**: Convertire funzioni tradizionali in arrow function.

Scrivi un programma che:
- Converte queste funzioni in arrow function:
  - `function somma(a, b) { return a + b; }`
  - `function quadrato(x) { return x * x; }`
  - `function saluta() { return "Ciao!"; }`
- Testa entrambe le versioni per verificare che funzionano allo stesso modo
- Scrivi le versioni più concise possibili

**Suggerimenti:**
- Un solo parametro: le parentesi sono opzionali
- Espressione singola: il return è implicito

**File**: `esercizio1_1.js`

---

### Esercizio 1.2 - Return Implicito
**Obiettivo**: Comprendere il return implicito nelle arrow function.

Scrivi un programma che:
- Crea arrow function per: `doppio`, `triplo`, `incrementa`, `decrementa`
- Usa la sintassi più concisa (return implicito)
- Crea una arrow function che restituisce un oggetto (attenzione alla sintassi!)
- Testa tutte le funzioni

**Esempio:**
```javascript
const creaPersona = (nome, eta) => ({ nome, eta });
console.log(creaPersona("Mario", 30));
// { nome: "Mario", eta: 30 }
```

**File**: `esercizio1_2.js`

---

### Esercizio 1.3 - Arrow Function con Array Methods
**Obiettivo**: Usare arrow function con metodi di array.

Scrivi un programma che:
- Crea un array di numeri `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`
- Usa `map` con arrow function per raddoppiare i valori
- Usa `filter` con arrow function per prendere solo i pari
- Usa `reduce` con arrow function per calcolare la somma
- Confronta con la sintassi tradizionale

**File**: `esercizio1_3.js`

---

### Esercizio 1.4 - Problema con `this`
**Obiettivo**: Comprendere il binding lessicale di `this`.

Scrivi un programma che:
- Crea un oggetto `contatore` con funzione tradizionale che usa `setTimeout`
- Il setTimeout perde il riferimento a `this`
- Risolvi il problema usando una arrow function
- Confronta i due approcci

**Test:**
```javascript
const contatore = {
  valore: 0,
  incrementaTraditional: function() {
    setTimeout(function() {
      this.valore++; // 'this' non si riferisce a contatore!
      console.log(this.valore);
    }, 100);
  },
  incrementaArrow: function() {
    setTimeout(() => {
      this.valore++; // 'this' si riferisce correttamente a contatore
      console.log(this.valore);
    }, 100);
  }
};
```

**File**: `esercizio1_4.js`

---

### Esercizio 1.5 - Quando NON Usare Arrow Function
**Obiettivo**: Comprendere i limiti delle arrow function.

Scrivi un programma che dimostra quando NON usare arrow function:
- Come metodi di oggetti che usano `this`
- Come costruttori (prova con `new` e osserva l'errore)
- Quando serve l'oggetto `arguments`
- Come metodi di event handler che necessitano di `this`

Documenta ogni caso con commenti esplicativi.

**File**: `esercizio1_5.js`

---

## Esercizi Intermedi

### Esercizio 2.1 - Chaining di Operazioni
**Obiettivo**: Concatenare operazioni usando arrow function.

Scrivi un programma dove:
- Hai un array di oggetti studenti: `{ nome, voti: [] }`
- Usa arrow function per:
  - Filtrare studenti con media >= 7
  - Mappare per ottenere solo i nomi
  - Ordinare alfabeticamente
- Fai tutto in una singola expression concatenata

**Schema:**
```javascript
const studenti = [
  { nome: "Mario", voti: [8, 7, 9] },
  { nome: "Luigi", voti: [6, 5, 7] },
  { nome: "Peach", voti: [9, 9, 10] }
];

const promossi = studenti
  .filter(...)
  .map(...)
  .sort(...);
```

**File**: `esercizio2_1.js`

---

### Esercizio 2.2 - Arrow Function in Callback
**Obiettivo**: Usare arrow function come callback in operazioni asincrone.

Scrivi un programma che:
- Simula operazioni asincrone con `setTimeout`
- Usa arrow function per i callback
- Implementa una catena di operazioni: carica dati → elabora → salva
- Gestisci errori con arrow function nei catch

**Esempio:**
```javascript
const caricaDati = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, nome: "Dati" }), 1000);
  });
};
```

**File**: `esercizio2_2.js`

---

### Esercizio 2.3 - Higher-Order Functions con Arrow
**Obiettivo**: Creare funzioni di ordine superiore con arrow function.

Scrivi un programma che:
- Crea `creaIncrementatore(n)` che restituisce una arrow function
- Crea `creaValidatore(tipo)` che restituisce un validatore
- Crea `componi(...funzioni)` che compone funzioni in sequenza
- Tutte implementate con arrow function

**Esempio:**
```javascript
const addDieci = creaIncrementatore(10);
console.log(addDieci(5)); // 15

const isEmail = creaValidatore('email');
console.log(isEmail('test@example.com')); // true
```

**File**: `esercizio2_3.js`

---

### Esercizio 2.4 - Currying con Arrow Function
**Obiettivo**: Implementare currying usando arrow function.

Scrivi un programma che:
- Implementa versioni curried di funzioni comuni usando arrow syntax
- `somma` → `a => b => a + b`
- `moltiplica` → `a => b => c => a * b * c`
- `condizioneMultipla` → `pred1 => pred2 => value => pred1(value) && pred2(value)`
- Crea utility functions curried riutilizzabili

**File**: `esercizio2_4.js`

---

### Esercizio 2.5 - Destructuring nei Parametri
**Obiettivo**: Usare destructuring nei parametri delle arrow function.

Scrivi un programma che:
- Crea arrow function che usano destructuring per parametri oggetto
- Crea arrow function che usano destructuring per parametri array
- Combina destructuring con valori di default
- Usa rest parameters con arrow function

**Esempio:**
```javascript
const saluta = ({ nome, eta = 18 }) => `Ciao ${nome}, hai ${eta} anni`;

const sommaArray = ([a, b, ...rest]) => {
  return a + b + rest.reduce((sum, n) => sum + n, 0);
};
```

**File**: `esercizio2_5.js`

---

## Esercizi Avanzati

### Esercizio 3.1 - Pipeline Funzionale
**Obiettivo**: Creare una pipeline di trasformazioni dati.

Scrivi un programma che:
- Implementa `pipe(...funzioni)` usando arrow function
- Ogni funzione nella pipe trasforma i dati
- Supporta funzioni asincrone nella pipeline
- Gestisce errori in qualsiasi punto della pipeline
- Implementa anche `compose` (pipe inversa)

**Funzionalità:**
```javascript
const elabora = pipe(
  str => str.trim(),
  str => str.toLowerCase(),
  str => str.split(' '),
  arr => arr.filter(word => word.length > 3),
  arr => arr.join('-')
);

console.log(elabora("  Hello World From JavaScript  "));
// "hello-world-from-javascript"
```

**File**: `esercizio3_1.js`

---

### Esercizio 3.2 - Partial Application
**Obiettivo**: Implementare partial application con arrow function.

Scrivi un programma che:
- Crea una funzione `partial(fn, ...args)` che applica parzialmente argomenti
- Supporta placeholder `_` per argomenti da fornire dopo
- Implementa `partialRight` per applicare da destra
- Crea esempi pratici di utilizzo

**Esempio:**
```javascript
const add = (a, b, c) => a + b + c;
const add5 = partial(add, 5);
console.log(add5(3, 2)); // 10

const addTo10 = partial(add, _, _, 10);
console.log(addTo10(5, 3)); // 18
```

**File**: `esercizio3_2.js`

---

### Esercizio 3.3 - Memoizzazione Avanzata con Arrow
**Obiettivo**: Sistema di caching intelligente con arrow function.

Scrivi un programma con:
- Funzione `memoize` implementata con arrow function
- Supporto per resolver personalizzato (serializzazione chiavi)
- Supporto per cache con scadenza (TTL)
- Statistiche cache (hits, misses)
- Implementazione di `weakMemoize` con WeakMap

**Test con:**
- Funzioni con parametri complessi (oggetti, array)
- Funzioni ricorsive
- Funzioni asincrone

**File**: `esercizio3_3.js`

---

### Esercizio 3.4 - Reactive System con Arrow
**Obiettivo**: Sistema reattivo usando arrow function.

Scrivi un programma che:
- Implementa `createSignal(initialValue)` che restituisce `[getter, setter]`
- Implementa `createEffect(fn)` che ri-esegue `fn` quando le dipendenze cambiano
- Implementa `createMemo(fn)` per valori derivati computati
- Tracking automatico delle dipendenze
- Tutte le API usano arrow function

**Esempio:**
```javascript
const [count, setCount] = createSignal(0);
const [name, setName] = createSignal("Mario");

const greeting = createMemo(() => 
  `Ciao ${name()}, count: ${count()}`
);

createEffect(() => {
  console.log(greeting());
});

setCount(1); // Trigger effect
setName("Luigi"); // Trigger effect
```

**File**: `esercizio3_4.js`

---

### Esercizio 3.5 - Async Pipeline con Error Handling
**Obiettivo**: Pipeline asincrona robusta con arrow function.

Scrivi un programma che:
- Implementa `pipeAsync(...funzioni)` per operazioni asincrone
- Ogni funzione può essere sync o async
- Gestione errori con `recover` functions
- Retry automatico per operazioni fallite
- Timeout per operazioni lente
- Logging dettagliato di ogni step

**Funzionalità:**
```javascript
const processUser = pipeAsync(
  async userId => await fetchUser(userId),
  user => validateUser(user),
  user => enrichUserData(user),
  async user => await saveUser(user),
  {
    onError: (err, stage) => console.error(`Error at ${stage}:`, err),
    retry: 3,
    timeout: 5000
  }
);

await processUser(123);
```

**File**: `esercizio3_5.js`

---

## Progetti Completi

### Progetto 1 - Functional Array Library
**Obiettivo**: Libreria di utility per array usando solo arrow function.

Implementa una libreria che fornisce:
- `map`, `filter`, `reduce`, `forEach` custom
- `flatMap`, `flatten`, `chunk`, `zip`
- `groupBy`, `partition`, `unique`
- `take`, `drop`, `takeWhile`, `dropWhile`
- `sortBy`, `reverse`, `shuffle`
- Tutte lazy-evaluated per efficienza
- Tutte chainable

**Funzionalità richieste:**
```javascript
const A = ArrayLib;

const result = A([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  .filter(x => x % 2 === 0)
  .map(x => x * 2)
  .take(3)
  .value();

console.log(result); // [4, 8, 12]

// Lazy evaluation
const nums = A([1, 2, 3, 4, 5]);
const doubled = nums.map(x => {
  console.log(`Mapping ${x}`);
  return x * 2;
}); // Nessun output qui

doubled.value(); // Solo ora esegue il mapping
```

**File**: `progetto1_array_library.js`

---

### Progetto 2 - State Management con Arrow Functions
**Obiettivo**: Sistema di gestione stato usando arrow function.

Implementa uno state manager che:
- State è immutabile
- Tutte le operazioni restituiscono nuovo stato
- Updaters sono funzioni pure
- Supporta selectors per derivare dati
- Supporta middleware (logging, persistence)
- Subscriptions per notifiche cambiamenti
- Time-travel debugging

**Esempio:**
```javascript
const store = createStore(
  { count: 0, user: null },
  {
    increment: state => ({ ...state, count: state.count + 1 }),
    setUser: (state, user) => ({ ...state, user }),
    reset: () => ({ count: 0, user: null })
  }
);

// Selectors
const getCount = state => state.count;
const getDoubleCount = state => state.count * 2;

// Subscribe
store.subscribe(state => {
  console.log('Count:', getCount(state));
});

// Dispatch
store.dispatch('increment');
store.dispatch('setUser', { name: 'Mario' });

// Time travel
store.undo();
store.redo();
```

**File**: `progetto2_state_management.js`

---

### Progetto 3 - Form Validation DSL
**Obiettivo**: DSL per validazione form con arrow function.

Implementa un sistema di validazione che:
- Regole di validazione composable con arrow function
- Sintassi fluent per definire regole
- Validazione sincrona e asincrona
- Messaggi di errore personalizzabili
- Validazione dipendente (un campo dipende da altro)
- Validazione di oggetti annidati
- Debounce automatico per validazioni async

**Funzionalità:**
```javascript
const userSchema = object({
  username: string()
    .required('Username obbligatorio')
    .minLength(3, 'Minimo 3 caratteri')
    .maxLength(20, 'Massimo 20 caratteri')
    .matches(/^[a-zA-Z0-9_]+$/, 'Solo alfanumerici e underscore')
    .test(async username => {
      const available = await checkUsername(username);
      return available || 'Username già in uso';
    }),
  
  email: string()
    .required()
    .email('Email non valida')
    .test(async email => {
      const exists = await checkEmail(email);
      return !exists || 'Email già registrata';
    }),
  
  password: string()
    .required()
    .minLength(8)
    .matches(/[A-Z]/, 'Serve almeno una maiuscola')
    .matches(/[0-9]/, 'Serve almeno un numero'),
  
  confirmPassword: string()
    .required()
    .equals('password', 'Le password non corrispondono'),
  
  age: number()
    .required()
    .min(18, 'Devi essere maggiorenne')
    .max(120, 'Età non valida'),
  
  address: object({
    street: string().required(),
    city: string().required(),
    zip: string().matches(/^\d{5}$/, 'CAP non valido')
  })
});

// Validazione
const result = await userSchema.validate(formData);

if (!result.valid) {
  console.log(result.errors);
  // {
  //   username: ['Username già in uso'],
  //   password: ['Serve almeno una maiuscola'],
  //   ...
  // }
}
```

**File**: `progetto3_form_validation.js`

---

### Progetto 4 - Query Language per Oggetti
**Obiettivo**: Linguaggio di query simile a SQL per array di oggetti.

Implementa un query builder che:
- Sintassi fluent con arrow function
- Operazioni: `select`, `where`, `orderBy`, `groupBy`, `join`, `limit`, `offset`
- Aggregazioni: `sum`, `avg`, `count`, `min`, `max`
- Supporta funzioni custom nei selettori
- Supporta subquery
- Ottimizzazione automatica delle query
- Lazy execution

**Esempio:**
```javascript
const users = [
  { id: 1, name: 'Mario', age: 30, cityId: 1 },
  { id: 2, name: 'Luigi', age: 25, cityId: 2 },
  { id: 3, name: 'Peach', age: 28, cityId: 1 }
];

const cities = [
  { id: 1, name: 'Milano' },
  { id: 2, name: 'Roma' }
];

// Query semplice
const result1 = query(users)
  .where(u => u.age > 25)
  .select('name', 'age')
  .orderBy('age', 'desc')
  .execute();

// Query con join
const result2 = query(users)
  .join(cities, 'cityId', 'id', 'city')
  .select('name', u => u.age * 2, 'city.name')
  .where(u => u.city.name === 'Milano')
  .execute();

// Query con aggregazione
const result3 = query(users)
  .groupBy('cityId')
  .select(
    'cityId',
    users => users.length,
    users => avg(users.map(u => u.age))
  )
  .execute();

// Query con subquery
const avgAge = query(users).avg('age').execute();
const result4 = query(users)
  .where(u => u.age > avgAge)
  .execute();
```

**File**: `progetto4_query_language.js`

---

### Progetto 5 - Reactive Data Flow con Arrow Functions
**Obiettivo**: Sistema reattivo completo per data flow.

Implementa un sistema che:
- Observable streams con arrow function
- Operatori: `map`, `filter`, `reduce`, `scan`, `merge`, `combine`, `switchMap`, `debounce`, `throttle`, `distinct`
- Hot e cold observables
- Subscription management (auto-unsubscribe)
- Error handling e retry logic
- Backpressure handling
- Testing utilities per streams

**Funzionalità:**
```javascript
const { fromEvent, interval, merge } = Reactive;

// Click stream
const clicks = fromEvent(button, 'click')
  .map(e => e.clientX)
  .filter(x => x > 100)
  .debounce(300);

// Timer stream
const timer = interval(1000)
  .map(n => n + 1)
  .take(10);

// Combined stream
const combined = merge(
  clicks.map(x => ({ type: 'click', x })),
  timer.map(n => ({ type: 'tick', n }))
);

// Subscribe
const subscription = combined.subscribe(
  data => console.log('Data:', data),
  error => console.error('Error:', error),
  () => console.log('Complete')
);

// Auto cleanup
setTimeout(() => subscription.unsubscribe(), 5000);

// Operatori avanzati
const searchResults = searchInput
  .map(e => e.target.value)
  .debounce(500)
  .distinctUntilChanged()
  .switchMap(query => fetch(`/api/search?q=${query}`))
  .map(response => response.json())
  .retry(3)
  .catch(error => of([]))
  .subscribe(results => {
    displayResults(results);
  });
```

**File**: `progetto5_reactive_dataflow.js`

---

## Soluzioni

### Soluzione Esercizio 1.1

```javascript
// esercizio1_1.js

console.log("=== Conversione a Arrow Function ===\n");

// 1. Funzione tradizionale
function sommaTraditional(a, b) {
  return a + b;
}

// Arrow function versione completa
const sommaArrow1 = (a, b) => {
  return a + b;
};

// Arrow function versione concisa (return implicito)
const somma = (a, b) => a + b;

console.log("1. Somma:");
console.log("  Traditional:", sommaTraditional(5, 3));
console.log("  Arrow:", somma(5, 3));

// 2. Funzione con un solo parametro
function quadratoTraditional(x) {
  return x * x;
}

// Senza parentesi (un solo parametro) + return implicito
const quadrato = x => x * x;

console.log("\n2. Quadrato:");
console.log("  Traditional:", quadratoTraditional(5));
console.log("  Arrow:", quadrato(5));

// 3. Funzione senza parametri
function salutaTraditional() {
  return "Ciao!";
}

// Parentesi obbligatorie (nessun parametro) + return implicito
const saluta = () => "Ciao!";

console.log("\n3. Saluta:");
console.log("  Traditional:", salutaTraditional());
console.log("  Arrow:", saluta());

// Esempi aggiuntivi
const doppio = x => x * 2;
const triplo = x => x * 3;
const isPositivo = x => x > 0;
const getPrimoCarattere = str => str.charAt(0);

console.log("\n4. Esempi aggiuntivi:");
console.log("  doppio(10):", doppio(10));
console.log("  triplo(10):", triplo(10));
console.log("  isPositivo(-5):", isPositivo(-5));
console.log("  getPrimoCarattere('Hello'):", getPrimoCarattere('Hello'));
```

**Esecuzione:**
```bash
node esercizio1_1.js
```

---

### Soluzione Esercizio 1.2

```javascript
// esercizio1_2.js

console.log("=== Return Implicito ===\n");

// Funzioni semplici con return implicito
const doppio = x => x * 2;
const triplo = x => x * 3;
const incrementa = x => x + 1;
const decrementa = x => x - 1;

console.log("1. Operazioni numeriche:");
console.log("  doppio(5):", doppio(5));
console.log("  triplo(5):", triplo(5));
console.log("  incrementa(5):", incrementa(5));
console.log("  decrementa(5):", decrementa(5));

// Return di oggetto - ATTENZIONE: serve parentesi!
// SBAGLIATO: const creaPersona = (nome, eta) => { nome, eta }
// JavaScript interpreta {} come blocco di codice!

// CORRETTO: avvolgere l'oggetto in parentesi
const creaPersona = (nome, eta) => ({ nome, eta });

console.log("\n2. Return di oggetto:");
console.log("  creaPersona('Mario', 30):", creaPersona("Mario", 30));

// Altri esempi di return oggetto
const creaPunto = (x, y) => ({ x, y });
const creaRettangolo = (larghezza, altezza) => ({ 
  larghezza, 
  altezza, 
  area: larghezza * altezza 
});

console.log("\n3. Altri esempi:");
console.log("  creaPunto(10, 20):", creaPunto(10, 20));
console.log("  creaRettangolo(5, 10):", creaRettangolo(5, 10));

// Return di array
const creaArray = (a, b, c) => [a, b, c];
const range = (start, end) => 
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

console.log("\n4. Return di array:");
console.log("  creaArray(1, 2, 3):", creaArray(1, 2, 3));
console.log("  range(1, 5):", range(1, 5));

// Espressioni complesse
const calcolaSconto = (prezzo, percentuale) => 
  prezzo - (prezzo * percentuale / 100);

const formattaPrezzo = prezzo => 
  `€ ${prezzo.toFixed(2)}`;

console.log("\n5. Espressioni complesse:");
console.log("  calcolaSconto(100, 20):", calcolaSconto(100, 20));
console.log("  formattaPrezzo(99.99):", formattaPrezzo(99.99));
```

**Esecuzione:**
```bash
node esercizio1_2.js
```

---

### Soluzione Esercizio 1.3

```javascript
// esercizio1_3.js

const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("=== Arrow Function con Array Methods ===\n");
console.log("Array originale:", numeri);

// 1. MAP - raddoppia i valori
console.log("\n1. MAP - Raddoppia valori:");

// Con arrow function
const raddoppiati = numeri.map(n => n * 2);
console.log("  Arrow:", raddoppiati);

// Con funzione tradizionale (per confronto)
const raddoppiatiTrad = numeri.map(function(n) {
  return n * 2;
});
console.log("  Traditional:", raddoppiatiTrad);

// 2. FILTER - solo numeri pari
console.log("\n2. FILTER - Solo numeri pari:");

// Con arrow function
const pari = numeri.filter(n => n % 2 === 0);
console.log("  Arrow:", pari);

// Con funzione tradizionale
const pariTrad = numeri.filter(function(n) {
  return n % 2 === 0;
});
console.log("  Traditional:", pariTrad);

// 3. REDUCE - somma tutti i valori
console.log("\n3. REDUCE - Somma totale:");

// Con arrow function
const somma = numeri.reduce((acc, n) => acc + n, 0);
console.log("  Arrow:", somma);

// Con funzione tradizionale
const sommaTrad = numeri.reduce(function(acc, n) {
  return acc + n;
}, 0);
console.log("  Traditional:", sommaTrad);

// 4. Combinazione di operazioni
console.log("\n4. Combinazione - Somma dei quadrati dei pari:");

const risultato = numeri
  .filter(n => n % 2 === 0)        // solo pari
  .map(n => n * n)                  // quadrato
  .reduce((acc, n) => acc + n, 0);  // somma

console.log("  Risultato:", risultato);

// 5. Altri esempi pratici
console.log("\n5. Altri esempi:");

const persone = [
  { nome: 'Mario', eta: 30 },
  { nome: 'Luigi', eta: 25 },
  { nome: 'Peach', eta: 28 }
];

// Estrai solo i nomi
const nomi = persone.map(p => p.nome);
console.log("  Nomi:", nomi);

// Filtra maggiorenni (>= 27)
const over27 = persone.filter(p => p.eta >= 27);
console.log("  Over 27:", over27);

// Età media
const etaMedia = persone.reduce((sum, p) => sum + p.eta, 0) / persone.length;
console.log("  Età media:", etaMedia);

// Trova (find)
const mario = persone.find(p => p.nome === 'Mario');
console.log("  Trova Mario:", mario);

// Some / Every
const tuttiMaggiorenni = persone.every(p => p.eta >= 18);
const qualcunoOver25 = persone.some(p => p.eta > 25);
console.log("  Tutti maggiorenni:", tuttiMaggiorenni);
console.log("  Qualcuno over 25:", qualcunoOver25);
```

**Esecuzione:**
```bash
node esercizio1_3.js
```

---

### Soluzione Esercizio 1.4

```javascript
// esercizio1_4.js

console.log("=== Problema con 'this' e Arrow Function ===\n");

// Problema: funzione tradizionale in setTimeout perde 'this'
const contatoreTradizionale = {
  valore: 0,
  incrementa: function() {
    console.log("Prima di setTimeout - this.valore:", this.valore);
    
    setTimeout(function() {
      this.valore++; // 'this' non si riferisce a contatoreTradizionale!
      console.log("Dentro setTimeout (traditional) - this.valore:", this.valore);
      // Stamperà NaN perché 'this' si riferisce a window (o undefined in strict mode)
    }, 100);
  }
};

// Soluzione 1: Arrow function
const contatoreArrow = {
  valore: 0,
  incrementa: function() {
    console.log("Prima di setTimeout - this.valore:", this.valore);
    
    setTimeout(() => {
      this.valore++; // Arrow function eredita 'this' dal contesto esterno!
      console.log("Dentro setTimeout (arrow) - this.valore:", this.valore);
    }, 200);
  }
};

// Soluzione 2: Salvare 'this' in una variabile (old style)
const contatoreOldStyle = {
  valore: 0,
  incrementa: function() {
    const self = this; // Salva il riferimento
    
    setTimeout(function() {
      self.valore++;
      console.log("Dentro setTimeout (old style) - self.valore:", self.valore);
    }, 300);
  }
};

// Soluzione 3: bind()
const contatoreBind = {
  valore: 0,
  incrementa: function() {
    setTimeout(function() {
      this.valore++;
      console.log("Dentro setTimeout (bind) - this.valore:", this.valore);
    }.bind(this), 400);
  }
};

// Test
console.log("1. Test con funzione tradizionale (problema):");
contatoreTradizionale.incrementa();

setTimeout(() => {
  console.log("\n2. Test con arrow function (soluzione):");
  contatoreArrow.incrementa();
}, 500);

setTimeout(() => {
  console.log("\n3. Test con old style (variabile self):");
  contatoreOldStyle.incrementa();
}, 1000);

setTimeout(() => {
  console.log("\n4. Test con bind:");
  contatoreBind.incrementa();
}, 1500);

// Esempio più complesso
setTimeout(() => {
  console.log("\n5. Esempio pratico - Timer con metodi:");
  
  const timer = {
    secondi: 0,
    avvia: function() {
      // Arrow function per mantenere 'this'
      setInterval(() => {
        this.secondi++;
        this.mostraStato();
      }, 1000);
    },
    mostraStato: function() {
      console.log(`  Timer: ${this.secondi} secondi`);
    }
  };
  
  timer.avvia();
  
  // Ferma dopo 3 secondi
  setTimeout(() => {
    console.log("\n=== Fine test ===");
    process.exit(0);
  }, 3500);
}, 2000);
```

**Esecuzione:**
```bash
node esercizio1_4.js
```

---

### Soluzione Esercizio 1.5

```javascript
// esercizio1_5.js

console.log("=== Quando NON Usare Arrow Function ===\n");

// 1. PROBLEMA: Metodi di oggetti che usano 'this'
console.log("1. Metodi di oggetti:");

const persona = {
  nome: "Mario",
  eta: 30,
  
  // SBAGLIATO: arrow function come metodo
  salutaArrow: () => {
    // 'this' non si riferisce a 'persona'!
    console.log("  Arrow - this.nome:", this.nome); // undefined
  },
  
  // CORRETTO: funzione tradizionale
  salutaTraditional: function() {
    console.log("  Traditional - this.nome:", this.nome); // "Mario"
  }
};

persona.salutaArrow();
persona.salutaTraditional();

// 2. PROBLEMA: Costruttori
console.log("\n2. Costruttori:");

// CORRETTO: funzione tradizionale come costruttore
function PersonaTraditional(nome, eta) {
  this.nome = nome;
  this.eta = eta;
}

const mario = new PersonaTraditional("Mario", 30);
console.log("  Traditional constructor:", mario);

// SBAGLIATO: arrow function NON può essere usata con 'new'
const PersonaArrow = (nome, eta) => {
  this.nome = nome;
  this.eta = eta;
};

try {
  const luigi = new PersonaArrow("Luigi", 25);
} catch (error) {
  console.log("  Arrow constructor ERROR:", error.message);
  // "PersonaArrow is not a constructor"
}

// 3. PROBLEMA: Oggetto arguments
console.log("\n3. Oggetto 'arguments':");

// CORRETTO: funzione tradizionale ha 'arguments'
function sommaTraditional() {
  let totale = 0;
  for (let i = 0; i < arguments.length; i++) {
    totale += arguments[i];
  }
  return totale;
}

console.log("  Traditional arguments:", sommaTraditional(1, 2, 3, 4, 5));

// SBAGLIATO: arrow function NON ha 'arguments'
const sommaArrow = () => {
  // arguments non è definito!
  console.log("  Arrow arguments:", typeof arguments);
};

try {
  sommaArrow(1, 2, 3);
} catch (error) {
  console.log("  Arrow ERROR:", error.message);
}

// SOLUZIONE per arrow: usa rest parameters
const sommaArrowRest = (...numeri) => {
  return numeri.reduce((sum, n) => sum + n, 0);
};

console.log("  Arrow con rest:", sommaArrowRest(1, 2, 3, 4, 5));

// 4. PROBLEMA: Event handlers che necessitano di 'this'
console.log("\n4. Event handlers:");

// Simulazione di event handler
const button = {
  text: "Clicca qui",
  
  // SBAGLIATO: 'this' non si riferisce al button
  handleClickArrow: () => {
    console.log("  Arrow - this.text:", this.text); // undefined
  },
  
  // CORRETTO: 'this' si riferisce al button
  handleClickTraditional: function() {
    console.log("  Traditional - this.text:", this.text); // "Clicca qui"
  }
};

button.handleClickArrow();
button.handleClickTraditional();

// 5. QUANDO usare arrow function
console.log("\n5. Quando USARE arrow function:");

const counter = {
  count: 0,
  start: function() {
    // CORRETTO: arrow function in callback
    // per mantenere 'this' dell'oggetto
    setInterval(() => {
      this.count++;
      console.log(`  Count: ${this.count}`);
      if (this.count >= 3) {
        console.log("\n=== Fine test ===");
        process.exit(0);
      }
    }, 1000);
  }
};

counter.start();
```

**Esecuzione:**
```bash
node esercizio1_5.js
```

---

## Note per l'Esecuzione

### Prerequisiti
- Node.js installato (versione 14 o superiore)
- Supporto ES6+ (arrow function)

### Esecuzione di un Esercizio
```bash
# Navigare nella directory degli esercizi
cd /percorso/esercizi

# Eseguire un file JavaScript
node nome_file.js
```

### Transpilazione per Compatibilità
Se hai bisogno di supportare ambienti che non supportano arrow function:

```bash
# Installa Babel
npm install --save-dev @babel/core @babel/cli @babel/preset-env

# Transpila
npx babel esercizio.js --out-file esercizio-es5.js
```

### Testing con Arrow Function
```javascript
// Test framework come Jest supportano arrow function
test('somma function', () => {
  expect(somma(2, 3)).toBe(5);
});
```

---

[Torna all'indice](../README.md) | [Vai alla teoria: Funzioni Freccia](../teoria/04_Funzioni_Freccia.md)
