# Esercizi sui Tipi di Dati Complessi in JavaScript

## Indice
1. [Esercizi Base](#esercizi-base)
2. [Esercizi Intermedi](#esercizi-intermedi)
3. [Esercizi Avanzati](#esercizi-avanzati)
4. [Progetti Completi](#progetti-completi)
5. [Soluzioni](#soluzioni)

---

## Esercizi Base

### Esercizio 1.1 - Creazione e Accesso a Oggetti
**Obiettivo**: Comprendere la sintassi degli oggetti e l'accesso alle proprietà.

Scrivi un programma Node.js che:
- Crea un oggetto `persona` con proprietà (nome, cognome, età, città)
- Accede alle proprietà con notazione punto e parentesi quadre
- Aggiunge nuove proprietà dinamicamente
- Modifica proprietà esistenti
- Elimina una proprietà

**Test:**
```bash
node es1_1.js
```

**Output atteso:**
```
Oggetto originale: { nome: 'Mario', cognome: 'Rossi', età: 30, città: 'Roma' }
Accesso con punto: Mario
Accesso con []​: Rossi
Dopo aggiunta: { nome: 'Mario', ..., professione: 'Sviluppatore' }
Dopo modifica età: { ..., età: 31, ... }
Dopo eliminazione: { nome: 'Mario', cognome: 'Rossi', età: 31, professione: 'Sviluppatore' }
```

---

### Esercizio 1.2 - Array e Metodi Base
**Obiettivo**: Padroneggiare i metodi base degli array.

Scrivi un programma che:
- Crea un array di numeri
- Usa push, pop, shift, unshift
- Trova la lunghezza dell'array
- Accede a elementi specifici
- Stampa i risultati di ogni operazione

**Esempio:**
```javascript
let numeri = [1, 2, 3, 4, 5];
// Applica le operazioni e stampa risultati
```

---

### Esercizio 1.3 - Iterazione su Oggetti e Array
**Obiettivo**: Iterare su collezioni in modi diversi.

Scrivi un programma che:
- Itera un oggetto con for...in
- Itera un array con for, forEach, for...of
- Usa Object.keys(), Object.values(), Object.entries()
- Confronta i diversi metodi di iterazione

**Test:**
```bash
node es1_3.js
```

---

### Esercizio 1.4 - Funzioni: Dichiarazione ed Espressioni
**Obiettivo**: Comprendere i diversi modi di definire funzioni.

Scrivi un programma che implementa la stessa funzionalità in tre modi:
- Dichiarazione di funzione
- Espressione di funzione
- Arrow function

Implementa una funzione che calcola l'area di un rettangolo.

**Confronta:**
- Sintassi
- Hoisting
- Binding di `this`

---

### Esercizio 1.5 - Date: Operazioni Base
**Obiettivo**: Lavorare con date e orari.

Scrivi un programma che:
- Crea la data odierna
- Crea una data specifica
- Estrae giorno, mese, anno, ore, minuti
- Formatta date in diversi modi
- Calcola differenze tra date

**Esempio:**
```javascript
// Data di nascita e calcolo età
const dataNascita = new Date(1990, 0, 15);
const oggi = new Date();
// Calcola età...
```

---

## Esercizi Intermedi

### Esercizio 2.1 - Array Methods: map, filter, reduce
**Obiettivo**: Padroneggiare i metodi funzionali degli array.

Scrivi un programma con un array di prodotti (oggetti con nome, prezzo, categoria):

```javascript
const prodotti = [
  { nome: "Laptop", prezzo: 999, categoria: "Elettronica" },
  { nome: "Mouse", prezzo: 25, categoria: "Elettronica" },
  { nome: "Libro", prezzo: 15, categoria: "Libri" },
  { nome: "Tastiera", prezzo: 75, categoria: "Elettronica" },
  { nome: "Quaderno", prezzo: 5, categoria: "Cancelleria" }
];

// Implementa le seguenti operazioni:
// 1. Estrai solo i nomi (map)
// 2. Filtra prodotti elettronica (filter)
// 3. Calcola prezzo totale (reduce)
// 4. Trova prodotti > 50€ (filter)
// 5. Aumenta tutti i prezzi del 10% (map)
// 6. Raggruppa per categoria (reduce)
```

---

### Esercizio 2.2 - Object Destructuring e Spread
**Obiettivo**: Utilizzare sintassi moderna per oggetti e array.

Scrivi un programma che:
- Usa destructuring per estrarre proprietà da oggetti
- Usa destructuring nei parametri di funzioni
- Usa spread operator per clonare/merge oggetti
- Usa rest parameter nelle funzioni

**Esempio:**
```javascript
const persona = {
  nome: "Mario",
  cognome: "Rossi",
  età: 30,
  indirizzo: {
    via: "Via Roma 1",
    città: "Milano"
  }
};

// Destructuring
const { nome, età } = persona;

// Nested destructuring
const { indirizzo: { città } } = persona;

// Spread
const personaCompleta = { ...persona, professione: "Dev" };
```

---

### Esercizio 2.3 - Closure e Factory Functions
**Obiettivo**: Creare funzioni che mantengono stato privato.

Scrivi un programma che implementa:

```javascript
// Factory per contatore
function creaContatore(iniziale = 0) {
  let conteggio = iniziale; // Variabile privata
  
  return {
    incrementa: () => ++conteggio,
    decrementa: () => --conteggio,
    reset: () => conteggio = iniziale,
    valore: () => conteggio
  };
}

// Factory per conto bancario
function creaContoBancario(saldoIniziale) {
  // Implementa deposita, preleva, getSaldo
  // Saldo privato, non modificabile direttamente
}

// Factory per timer
function creaTimer() {
  // Implementa start, stop, reset, getElapsed
}
```

---

### Esercizio 2.4 - RegExp: Pattern Matching
**Obiettivo**: Utilizzare espressioni regolari per validazione.

Scrivi un programma che valida:

```javascript
// Email
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Telefono italiano (+39 o 0039, 10 cifre)
function isValidPhone(phone) { }

// Codice fiscale italiano
function isValidCodiceFiscale(cf) { }

// Password (min 8 char, almeno 1 maiuscola, 1 minuscola, 1 numero)
function isValidPassword(pwd) { }

// URL
function isValidURL(url) { }

// Estrai tutti gli hashtag da un testo
function estraiHashtag(testo) { }
```

**Test:**
```javascript
console.log(isValidEmail("mario@example.com")); // true
console.log(isValidEmail("invalid.email")); // false
```

---

### Esercizio 2.5 - Map e Set Operations
**Obiettivo**: Utilizzare Map e Set per operazioni su collezioni.

Scrivi un programma che:

```javascript
// Usando Map
// 1. Crea una mappa di studenti (ID → oggetto studente)
// 2. Aggiungi, cerca, rimuovi studenti
// 3. Itera sulla mappa

// Usando Set
// 4. Rimuovi duplicati da un array
// 5. Trova intersezione di due array
// 6. Trova differenza tra due array
// 7. Trova unione di due array

function rimuoviDuplicati(array) {
  return [...new Set(array)];
}

function intersezione(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter(x => set2.has(x));
}

function differenza(arr1, arr2) { }
function unione(arr1, arr2) { }
```

---

## Esercizi Avanzati

### Esercizio 3.1 - Deep Clone e Deep Compare
**Obiettivo**: Implementare clonazione profonda e confronto di oggetti.

Scrivi un programma che implementa:

```javascript
function deepClone(obj) {
  // Clona ricorsivamente oggetti annidati
  // Gestisce: oggetti, array, Date, Map, Set
  // Gestisce riferimenti circolari
}

function deepEqual(obj1, obj2) {
  // Confronta ricorsivamente due oggetti
  // Gestisce tutti i tipi
  // Ritorna true se identici
}

// Test
const orig = {
  nome: "Mario",
  hobby: ["calcio", "lettura"],
  indirizzo: {
    via: "Roma 1",
    città: "Milano"
  },
  data: new Date()
};

const clone = deepClone(orig);
clone.hobby.push("nuoto");
console.log(orig.hobby); // Non deve includere "nuoto"

console.log(deepEqual(orig, clone)); // false (hobby diverso)
```

---

### Esercizio 3.2 - Object Path Manipulation
**Obiettivo**: Accesso e modifica di proprietà annidate con path.

Scrivi un programma che implementa:

```javascript
function getPath(obj, path) {
  // path = "a.b.c" o "a[0].b" o "a.b[1].c"
  // Ritorna il valore o undefined
}

function setPath(obj, path, value) {
  // Imposta il valore al path specificato
  // Crea oggetti intermedi se necessari
}

function deletePath(obj, path) {
  // Elimina la proprietà al path specificato
}

function hasPath(obj, path) {
  // Verifica se il path esiste
}

// Test
const data = {
  user: {
    name: "Mario",
    addresses: [
      { city: "Roma", zip: "00100" },
      { city: "Milano", zip: "20100" }
    ]
  }
};

console.log(getPath(data, "user.name")); // "Mario"
console.log(getPath(data, "user.addresses[0].city")); // "Roma"

setPath(data, "user.email", "mario@example.com");
setPath(data, "user.addresses[0].country", "Italia");

console.log(hasPath(data, "user.email")); // true
deletePath(data, "user.addresses[1]");
```

---

### Esercizio 3.3 - Custom Array-like Object
**Obiettivo**: Creare oggetto che si comporta come un array.

Scrivi un programma che implementa:

```javascript
class ArrayLike {
  constructor(...items) {
    this.length = 0;
    for (let item of items) {
      this.push(item);
    }
  }
  
  push(item) {
    this[this.length] = item;
    this.length++;
    return this.length;
  }
  
  pop() { }
  shift() { }
  unshift(item) { }
  
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.length) {
          return { value: this[index++], done: false };
        }
        return { done: true };
      }
    };
  }
  
  map(fn) { }
  filter(fn) { }
  reduce(fn, initial) { }
  
  toString() {
    return Array.from(this).join(',');
  }
}

// Test
const arr = new ArrayLike(1, 2, 3);
arr.push(4);
console.log(arr.length); // 4
console.log([...arr]); // [1, 2, 3, 4]
console.log(arr.map(x => x * 2)); // ArrayLike [2, 4, 6, 8]
```

---

### Esercizio 3.4 - Event Emitter Pattern
**Obiettivo**: Implementare pattern Observer/PubSub.

Scrivi un programma che implementa:

```javascript
class EventEmitter {
  constructor() {
    this.events = new Map();
  }
  
  on(event, listener) {
    // Registra listener per evento
  }
  
  once(event, listener) {
    // Listener eseguito una sola volta
  }
  
  off(event, listener) {
    // Rimuove listener
  }
  
  emit(event, ...args) {
    // Emette evento, chiama tutti i listener
  }
  
  listenerCount(event) {
    // Ritorna numero di listener per evento
  }
  
  removeAllListeners(event) {
    // Rimuove tutti i listener (o per evento specifico)
  }
}

// Test
const emitter = new EventEmitter();

emitter.on('data', (data) => {
  console.log('Ricevuto:', data);
});

emitter.on('data', (data) => {
  console.log('Anche questo riceve:', data);
});

emitter.once('ready', () => {
  console.log('Pronto! (solo una volta)');
});

emitter.emit('data', { id: 1, value: 'test' });
emitter.emit('ready');
emitter.emit('ready'); // Non stampa nulla (once)
```

---

### Esercizio 3.5 - Proxy e Reactive Objects
**Obiettivo**: Creare oggetti reattivi usando Proxy.

Scrivi un programma che implementa:

```javascript
function createReactive(obj, onChange) {
  // Crea un proxy che intercetta modifiche
  // Chiama onChange quando l'oggetto cambia
  // Gestisce anche proprietà annidate
}

function createValidated(obj, schema) {
  // Crea un proxy che valida modifiche
  // Schema definisce regole per ogni proprietà
}

// Test reactive
const state = createReactive(
  { count: 0, user: { name: 'Mario' } },
  (path, oldVal, newVal) => {
    console.log(`${path}: ${oldVal} → ${newVal}`);
  }
);

state.count = 5; // Log: "count: 0 → 5"
state.user.name = 'Luigi'; // Log: "user.name: Mario → Luigi"

// Test validated
const user = createValidated(
  { name: '', age: 0 },
  {
    name: { type: 'string', minLength: 2 },
    age: { type: 'number', min: 0, max: 150 }
  }
);

user.name = "M"; // Errore: minLength non rispettato
user.age = 200; // Errore: max non rispettato
user.name = "Mario"; // OK
```

---

## Progetti Completi

### Progetto 1 - Database In-Memory

Crea un database in-memory completo:

**Funzionalità:**
- CRUD operations (Create, Read, Update, Delete)
- Query con filtri multipli
- Ordinamento
- Paginazione
- Indici per performance
- Relazioni (one-to-one, one-to-many, many-to-many)
- Transazioni
- Validazione schema
- Import/Export JSON

**Esempio:**
```javascript
const db = new InMemoryDB();

// Definisci schema
db.defineTable('users', {
  id: { type: 'number', primary: true, autoIncrement: true },
  name: { type: 'string', required: true },
  email: { type: 'string', unique: true },
  age: { type: 'number', min: 0 }
});

db.defineTable('posts', {
  id: { type: 'number', primary: true, autoIncrement: true },
  userId: { type: 'number', foreignKey: 'users.id' },
  title: { type: 'string', required: true },
  content: { type: 'string' }
});

// Insert
const user1 = db.insert('users', { name: 'Mario', email: 'mario@example.com', age: 30 });
const user2 = db.insert('users', { name: 'Luigi', email: 'luigi@example.com', age: 28 });

db.insert('posts', { userId: user1.id, title: 'Primo post', content: '...' });
db.insert('posts', { userId: user1.id, title: 'Secondo post', content: '...' });

// Query
const result = db.select('users')
  .where({ age: { $gte: 25 } })
  .orderBy('name', 'ASC')
  .limit(10)
  .offset(0)
  .execute();

// Join
const postsWithUsers = db.select('posts')
  .join('users', 'userId', 'id')
  .execute();

// Update
db.update('users', { age: 31 }, { id: user1.id });

// Delete
db.delete('posts', { userId: user2.id });

// Transaction
db.transaction(() => {
  db.update('users', { age: 32 }, { id: 1 });
  db.insert('posts', { userId: 1, title: 'Nuovo post' });
});

// Export
const backup = db.export();
// Import
db.import(backup);
```

---

### Progetto 2 - Query Builder (SQL-like)

Crea un query builder fluente per array di oggetti:

**Funzionalità:**
- select, where, orderBy, groupBy, having
- Operatori: $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin, $like
- Aggregazioni: count, sum, avg, min, max
- Join multipli
- Subquery
- Query optimization

**Esempio:**
```javascript
const users = [
  { id: 1, name: 'Mario', age: 30, city: 'Roma' },
  { id: 2, name: 'Luigi', age: 28, city: 'Milano' },
  { id: 3, name: 'Giovanna', age: 35, city: 'Roma' }
];

const orders = [
  { id: 1, userId: 1, amount: 100 },
  { id: 2, userId: 1, amount: 200 },
  { id: 3, userId: 2, amount: 150 }
];

const query = new QueryBuilder(users);

// Query semplice
const result1 = query
  .where({ age: { $gte: 30 } })
  .select(['name', 'age'])
  .orderBy('age', 'DESC')
  .execute();

// Con aggregazione
const result2 = query
  .groupBy('city')
  .select({
    city: 'city',
    count: { $count: '*' },
    avgAge: { $avg: 'age' }
  })
  .execute();

// Con join
const query2 = new QueryBuilder(orders)
  .join(users, 'userId', 'id')
  .select({
    userName: 'users.name',
    orderAmount: 'orders.amount'
  })
  .where({ 'orders.amount': { $gt: 100 } })
  .execute();
```

---

### Progetto 3 - Object Validator Framework

Crea framework completo per validazione oggetti:

**Funzionalità:**
- Regole di validazione componibili
- Validazione asincrona
- Messaggi di errore personalizzati
- Validazione condizionale
- Sanitizzazione automatica
- Validazione cross-field

**Esempio:**
```javascript
const schema = {
  username: {
    type: 'string',
    required: true,
    minLength: 3,
    maxLength: 20,
    pattern: /^[a-zA-Z0-9_]+$/,
    custom: async (value) => {
      // Check unicità nel db
      const exists = await db.userExists(value);
      if (exists) throw new Error('Username già in uso');
    }
  },
  
  email: {
    type: 'string',
    required: true,
    format: 'email',
    normalize: true // Converte in lowercase
  },
  
  password: {
    type: 'string',
    required: true,
    minLength: 8,
    custom: (value, data) => {
      // Validazione cross-field
      if (value === data.username) {
        throw new Error('Password non può essere uguale a username');
      }
    }
  },
  
  confirmPassword: {
    type: 'string',
    required: true,
    equals: 'password'
  },
  
  age: {
    type: 'number',
    required: false,
    min: 18,
    max: 120
  },
  
  termsAccepted: {
    type: 'boolean',
    required: true,
    equals: true
  },
  
  tags: {
    type: 'array',
    items: { type: 'string', minLength: 2 },
    minLength: 1,
    maxLength: 5
  }
};

const validator = new Validator(schema);

const result = await validator.validate({
  username: 'mario_123',
  email: 'MARIO@EXAMPLE.COM',
  password: 'SecureP@ss123',
  confirmPassword: 'SecureP@ss123',
  age: 30,
  termsAccepted: true,
  tags: ['javascript', 'nodejs']
});

if (result.valid) {
  console.log('Dati validi:', result.data); // Dati sanitizzati
} else {
  console.log('Errori:', result.errors);
  // {
  //   username: ['Username già in uso'],
  //   email: []
  // }
}
```

---

### Progetto 4 - State Management Library

Crea una libreria di state management (tipo Redux):

**Funzionalità:**
- Store immutabile
- Actions e Reducers
- Middleware support
- Async actions (thunks)
- Selectors con memoization
- DevTools integration
- Time-travel debugging

**Esempio:**
```javascript
// Actions
const actions = {
  increment: () => ({ type: 'INCREMENT' }),
  decrement: () => ({ type: 'DECREMENT' }),
  setUser: (user) => ({ type: 'SET_USER', payload: user }),
  fetchUser: (id) => async (dispatch, getState) => {
    dispatch({ type: 'FETCH_USER_START' });
    try {
      const user = await api.getUser(id);
      dispatch({ type: 'FETCH_USER_SUCCESS', payload: user });
    } catch (error) {
      dispatch({ type: 'FETCH_USER_ERROR', payload: error });
    }
  }
};

// Reducers
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: return state;
  }
};

const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_USER': return action.payload;
    default: return state;
  }
};

// Store
const store = createStore({
  counter: counterReducer,
  user: userReducer
}, {
  middleware: [loggerMiddleware, thunkMiddleware]
});

// Subscribe
store.subscribe((state) => {
  console.log('State cambiato:', state);
});

// Dispatch
store.dispatch(actions.increment());
store.dispatch(actions.setUser({ name: 'Mario' }));
store.dispatch(actions.fetchUser(1)); // Async

// Selectors con memoization
const getCounter = createSelector(
  state => state.counter,
  counter => counter
);

const getUserName = createSelector(
  state => state.user,
  user => user?.name
);

console.log(getUserName(store.getState()));
```

---

### Progetto 5 - Collection Utils Library

Crea libreria di utility per collezioni (tipo Lodash):

**Funzionalità:**
- Array utils (chunk, flatten, groupBy, partition, uniq, ...)
- Object utils (merge, pick, omit, mapKeys, mapValues, ...)
- Function utils (debounce, throttle, memoize, curry, ...)
- String utils (camelCase, snakeCase, kebabCase, ...)
- Date utils
- Type checking utils
- Performance ottimizzata

**Esempio:**
```javascript
const _ = new CollectionUtils();

// Array
_.chunk([1,2,3,4,5], 2); // [[1,2], [3,4], [5]]
_.flatten([[1,2], [3,[4,5]]]); // [1,2,3,[4,5]]
_.flattenDeep([[1,2], [3,[4,5]]]); // [1,2,3,4,5]
_.groupBy(users, 'city'); // { Roma: [...], Milano: [...] }
_.uniq([1,2,2,3,3,3]); // [1,2,3]
_.difference([1,2,3], [2,3,4]); // [1]

// Object
_.merge({a: 1}, {b: 2}); // {a: 1, b: 2}
_.pick({a:1, b:2, c:3}, ['a', 'c']); // {a:1, c:3}
_.omit({a:1, b:2, c:3}, ['b']); // {a:1, c:3}
_.mapKeys({a:1, b:2}, (v,k) => k.toUpperCase()); // {A:1, B:2}

// Function
const expensive = (n) => { /* ... */ };
const memoized = _.memoize(expensive);

const log = () => console.log('chiamato');
const debounced = _.debounce(log, 1000);
const throttled = _.throttle(log, 1000);

const add = (a, b, c) => a + b + c;
const curriedAdd = _.curry(add);
curriedAdd(1)(2)(3); // 6

// String
_.camelCase('hello-world'); // 'helloWorld'
_.snakeCase('helloWorld'); // 'hello_world'
_.kebabCase('helloWorld'); // 'hello-world'
_.capitalize('hello'); // 'Hello'

// Type
_.isPlainObject({a: 1}); // true
_.isArray([1,2,3]); // true
_.isEmpty([]); // true
_.isEqual({a:1}, {a:1}); // true
```

---

## Soluzioni

### Soluzione Esercizio 1.1

```javascript
// es1_1.js
console.log('=== Creazione oggetto ===');
const persona = {
  nome: 'Mario',
  cognome: 'Rossi',
  età: 30,
  città: 'Roma'
};
console.log('Oggetto originale:', persona);

console.log('\n=== Accesso proprietà ===');
console.log('Accesso con punto:', persona.nome);
console.log('Accesso con []:', persona['cognome']);

// Accesso dinamico
const prop = 'età';
console.log('Accesso dinamico:', persona[prop]);

console.log('\n=== Aggiunta proprietà ===');
persona.professione = 'Sviluppatore';
console.log('Dopo aggiunta:', persona);

console.log('\n=== Modifica proprietà ===');
persona.età = 31;
console.log('Dopo modifica:', persona);

console.log('\n=== Eliminazione proprietà ===');
delete persona.città;
console.log('Dopo eliminazione:', persona);

console.log('\n=== Verifica esistenza proprietà ===');
console.log('Ha "nome"?', 'nome' in persona);
console.log('Ha "città"?', 'città' in persona);
console.log('hasOwnProperty "età"?', persona.hasOwnProperty('età'));
```

---

### Soluzione Esercizio 1.2

```javascript
// es1_2.js
console.log('=== Array iniziale ===');
let numeri = [1, 2, 3, 4, 5];
console.log('Array:', numeri);
console.log('Lunghezza:', numeri.length);

console.log('\n=== push (aggiunge alla fine) ===');
numeri.push(6);
console.log('Dopo push(6):', numeri);

console.log('\n=== pop (rimuove dalla fine) ===');
const ultimo = numeri.pop();
console.log('Rimosso:', ultimo);
console.log('Array:', numeri);

console.log('\n=== unshift (aggiunge all\'inizio) ===');
numeri.unshift(0);
console.log('Dopo unshift(0):', numeri);

console.log('\n=== shift (rimuove dall\'inizio) ===');
const primo = numeri.shift();
console.log('Rimosso:', primo);
console.log('Array:', numeri);

console.log('\n=== Accesso elementi ===');
console.log('Primo elemento:', numeri[0]);
console.log('Ultimo elemento:', numeri[numeri.length - 1]);
console.log('Elemento in posizione 2:', numeri[2]);

console.log('\n=== Modifica elementi ===');
numeri[0] = 10;
console.log('Dopo modifica numeri[0] = 10:', numeri);

console.log('\n=== indexOf e includes ===');
console.log('Posizione di 3:', numeri.indexOf(3));
console.log('Contiene 5?', numeri.includes(5));
console.log('Contiene 99?', numeri.includes(99));
```

---

### Soluzione Esercizio 1.3

```javascript
// es1_3.js
const persona = {
  nome: 'Mario',
  cognome: 'Rossi',
  età: 30,
  città: 'Roma'
};

const numeri = [10, 20, 30, 40, 50];

console.log('=== for...in su oggetto ===');
for (let chiave in persona) {
  console.log(`${chiave}: ${persona[chiave]}`);
}

console.log('\n=== for tradizionale su array ===');
for (let i = 0; i < numeri.length; i++) {
  console.log(`numeri[${i}] = ${numeri[i]}`);
}

console.log('\n=== forEach su array ===');
numeri.forEach((valore, indice) => {
  console.log(`numeri[${indice}] = ${valore}`);
});

console.log('\n=== for...of su array ===');
for (let valore of numeri) {
  console.log('Valore:', valore);
}

console.log('\n=== Object.keys() ===');
const chiavi = Object.keys(persona);
console.log('Chiavi:', chiavi);
chiavi.forEach(chiave => {
  console.log(`${chiave}: ${persona[chiave]}`);
});

console.log('\n=== Object.values() ===');
const valori = Object.values(persona);
console.log('Valori:', valori);

console.log('\n=== Object.entries() ===');
const entries = Object.entries(persona);
console.log('Entries:', entries);
entries.forEach(([chiave, valore]) => {
  console.log(`${chiave}: ${valore}`);
});
```

---

[Continua con altre soluzioni se necessario...]

[Torna all'indice della sezione Variabili e Tipi Dati](../README.md)
