# Esercizi su Parametri e Valori di Ritorno in JavaScript

## Indice
1. [Esercizi Base](#esercizi-base)
2. [Esercizi Intermedi](#esercizi-intermedi)
3. [Esercizi Avanzati](#esercizi-avanzati)
4. [Progetti Completi](#progetti-completi)
5. [Soluzioni](#soluzioni)

---

## Esercizi Base

### Esercizio 1.1 - Parametri Multipli
**Obiettivo**: Comprendere come passare e usare più parametri.

Scrivi un programma che:
- Dichiara una funzione `calcolaMedia` che accetta 3 parametri numerici
- La funzione restituisce la media aritmetica dei tre numeri
- Testa la funzione con diverse terne di numeri
- Stampa i risultati in modo formattato

**Suggerimenti:**
- Media = (a + b + c) / 3
- Usa template literals per formattare l'output

**File**: `esercizio1_1.js`

---

### Esercizio 1.2 - Parametri di Default
**Obiettivo**: Usare valori predefiniti per i parametri.

Scrivi un programma che:
- Crea una funzione `creaMessaggio` con parametri: `testo`, `prefisso = "INFO"`, `timestamp = true`
- Se `timestamp` è true, aggiungi la data/ora corrente al messaggio
- Il messaggio finale ha formato: `[PREFISSO] timestamp: testo`
- Testa la funzione con diverse combinazioni di parametri

**Esempio output:**
```
[INFO] 2024-01-15 10:30:00: Server avviato
[ERROR] Connessione fallita
[WARNING] 2024-01-15 10:31:00: Memoria quasi esaurita
```

**File**: `esercizio1_2.js`

---

### Esercizio 1.3 - Return di Oggetti
**Obiettivo**: Restituire strutture dati complesse.

Scrivi un programma che:
- Crea una funzione `analizzaStringa` che accetta una stringa
- La funzione restituisce un oggetto con: `lunghezza`, `maiuscole`, `minuscole`, `numeri`, `primaLettera`, `ultimaLettera`
- Testa con diverse stringhe
- Stampa i risultati in formato tabellare

**Test:**
```javascript
let analisi = analizzaStringa("Ciao123Mondo");
console.log(analisi);
// { lunghezza: 12, maiuscole: 2, minuscole: 8, numeri: 3, ... }
```

**File**: `esercizio1_3.js`

---

### Esercizio 1.4 - Return Anticipato
**Obiettivo**: Usare return per uscire anticipatamente da una funzione.

Scrivi un programma che:
- Crea una funzione `validaPassword` che accetta una stringa password
- Valida: lunghezza minima 8 caratteri, almeno una maiuscola, almeno un numero
- Usa return anticipato per ciascuna condizione non soddisfatta
- Restituisce un oggetto: `{ valida: boolean, errore: string }`

**Esempio:**
```javascript
validaPassword("abc"); 
// { valida: false, errore: "Password troppo corta" }

validaPassword("abcdefgh"); 
// { valida: false, errore: "Manca maiuscola" }

validaPassword("Abcdefgh"); 
// { valida: false, errore: "Manca numero" }

validaPassword("Abcdefg1"); 
// { valida: true, errore: null }
```

**File**: `esercizio1_4.js`

---

### Esercizio 1.5 - Funzioni senza Return
**Obiettivo**: Comprendere la differenza tra funzioni void e funzioni con return.

Scrivi un programma con 4 funzioni:
- `logMessaggio(msg)`: stampa il messaggio, non restituisce nulla
- `getMessaggio(msg)`: restituisce il messaggio formattato
- `scriviFile(nome, contenuto)`: simula scrittura file, stampa "File scritto", non restituisce nulla
- `leggiFile(nome)`: simula lettura file, restituisce il contenuto

Testa tutte le funzioni e cattura i loro valori di ritorno con `console.log()`.

**File**: `esercizio1_5.js`

---

## Esercizi Intermedi

### Esercizio 2.1 - Parametri Rest
**Obiettivo**: Usare il parametro rest per accettare un numero variabile di argomenti.

Scrivi un programma dove:
- Crei una funzione `calcolaStatistiche(...numeri)` che accetta qualsiasi numero di argomenti
- La funzione restituisce un oggetto con: `somma`, `media`, `min`, `max`, `conteggio`
- Testa con diversi numeri di argomenti (1, 3, 10, 100 numeri)
- Gestisci il caso di zero argomenti

**Schema:**
```javascript
console.log(calcolaStatistiche(5, 10, 15, 20));
// { somma: 50, media: 12.5, min: 5, max: 20, conteggio: 4 }
```

**File**: `esercizio2_1.js`

---

### Esercizio 2.2 - Destrutturazione dei Parametri
**Obiettivo**: Usare la destrutturazione per estrarre proprietà da oggetti passati come parametri.

Scrivi un programma dove:
- Crei una funzione `creaCartaIdentita({ nome, cognome, dataNascita, luogoNascita })`
- La funzione calcola l'età dalla data di nascita
- Restituisce una stringa formattata con tutti i dati
- Gestisci parametri opzionali con valori di default
- Crea diverse carte d'identità con dati parziali

**Output atteso:**
```
CARTA D'IDENTITÀ
Nome: Mario
Cognome: Rossi
Data di nascita: 15/03/1990
Luogo di nascita: Roma
Età: 34 anni
```

**File**: `esercizio2_2.js`

---

### Esercizio 2.3 - Oggetto arguments
**Obiettivo**: Comprendere e utilizzare l'oggetto arguments.

Scrivi un programma che:
- Crea una funzione `concatenaTutto()` che NON dichiara parametri espliciti
- Usa l'oggetto `arguments` per accedere a tutti gli argomenti passati
- Concatena tutti gli argomenti in una stringa, separati da spazio
- Confronta con una versione che usa il parametro rest
- Testa con diversi tipi di argomenti (stringhe, numeri, oggetti)

**Domanda**: Quali differenze noti tra `arguments` e il parametro rest?

**File**: `esercizio2_3.js`

---

### Esercizio 2.4 - Return di Funzioni (Factory)
**Obiettivo**: Creare funzioni che restituiscono altre funzioni.

Scrivi un programma che:
- Crea una funzione `creaFormattatore(tipo)` che restituisce una funzione
- I tipi supportati: 'maiuscolo', 'minuscolo', 'capitalizza', 'inverti'
- Ogni funzione restituita formatta una stringa secondo il tipo
- Testa creando diversi formattatori e usandoli su varie stringhe

**Esempio:**
```javascript
let maiuscolo = creaFormattatore('maiuscolo');
let capitalizza = creaFormattatore('capitalizza');

console.log(maiuscolo("ciao mondo")); // "CIAO MONDO"
console.log(capitalizza("ciao mondo")); // "Ciao Mondo"
```

**File**: `esercizio2_4.js`

---

### Esercizio 2.5 - Validazione Parametri
**Obiettivo**: Implementare validazione robusta dei parametri.

Scrivi un programma che:
- Crea una funzione `divide(a, b)` con validazione completa dei parametri
- Verifica che entrambi i parametri siano numeri
- Verifica che b non sia zero
- Verifica che i parametri non siano NaN o Infinity
- Restituisce un oggetto: `{ successo: boolean, risultato: number, errore: string }`
- Includi test completi per tutti i casi edge

**File**: `esercizio2_5.js`

---

## Esercizi Avanzati

### Esercizio 3.1 - Sistema di Validazione Parametri
**Obiettivo**: Creare un sistema generico di validazione per funzioni.

Scrivi un programma che:
- Implementa una funzione `validaParametri(schema)` che restituisce un validatore
- Lo schema definisce tipo, obbligatorietà, valori min/max, pattern regex
- Il validatore wrappa una funzione e valida i parametri prima dell'esecuzione
- Se la validazione fallisce, lancia un errore descrittivo
- Se passa, esegue la funzione normalmente

**Funzionalità:**
```javascript
const schema = {
  nome: { tipo: 'string', obbligatorio: true, minLength: 2 },
  eta: { tipo: 'number', obbligatorio: true, min: 0, max: 150 },
  email: { tipo: 'string', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }
};

const creaUtente = validaParametri(schema)(function(nome, eta, email) {
  return { nome, eta, email };
});

creaUtente("Mario", 30, "mario@example.com"); // OK
creaUtente("M", 30, "mario@example.com"); // Errore: nome troppo corto
creaUtente("Mario", 200, "mario@example.com"); // Errore: età fuori range
```

**File**: `esercizio3_1.js`

---

### Esercizio 3.2 - Currying Automatico
**Obiettivo**: Implementare una funzione che trasforma qualsiasi funzione in versione curried.

Scrivi un programma che:
- Crea una funzione `curry(func)` che trasforma `func` in versione curried
- La funzione curried raccoglie gli argomenti finché non ha tutti quelli necessari
- Supporta l'applicazione parziale
- Funziona con funzioni di qualsiasi arità (numero di parametri)

**Output:**
```javascript
function somma(a, b, c) {
  return a + b + c;
}

const sommaCurried = curry(somma);

console.log(sommaCurried(1)(2)(3)); // 6
console.log(sommaCurried(1, 2)(3)); // 6
console.log(sommaCurried(1)(2, 3)); // 6

const sommaConUno = sommaCurried(1);
console.log(sommaConUno(2)(3)); // 6
```

**File**: `esercizio3_2.js`

---

### Esercizio 3.3 - Sistema di Overloading
**Obiettivo**: Simulare l'overloading delle funzioni (stesso nome, parametri diversi).

Scrivi un programma con:
- Una funzione `creaOverload()` che permette di registrare multiple implementazioni
- Ogni implementazione è associata a una "signature" (tipi e numero di parametri)
- La funzione seleziona automaticamente l'implementazione corretta in base agli argomenti
- Gestisci il caso in cui nessuna signature corrisponde

**Esempio:**
```javascript
const formatta = creaOverload();

formatta.add(['string'], (str) => str.toUpperCase());
formatta.add(['number'], (num) => num.toFixed(2));
formatta.add(['string', 'number'], (str, num) => `${str}: ${num}`);
formatta.add(['array'], (arr) => arr.join(', '));

console.log(formatta.call("ciao")); // "CIAO"
console.log(formatta.call(3.14159)); // "3.14"
console.log(formatta.call("Prezzo", 19.99)); // "Prezzo: 19.99"
console.log(formatta.call([1, 2, 3])); // "1, 2, 3"
```

**File**: `esercizio3_3.js`

---

### Esercizio 3.4 - Pipe con Trasformazioni
**Obiettivo**: Creare un sistema di pipeline per la trasformazione dati.

Scrivi un programma che:
- Implementa una funzione `pipe(...trasformazioni)` che applica trasformazioni in sequenza
- Ogni trasformazione può modificare il tipo di dato
- Supporta trasformazioni asincrone (restituisce una Promise)
- Implementa gestione errori con possibilità di recovery
- Permette di "tappare" la pipeline per debugging (logging valori intermedi)

**Test con:**
- Pipeline di elaborazione stringhe
- Pipeline di elaborazione dati numerici
- Pipeline con operazioni asincrone simulate

**File**: `esercizio3_4.js`

---

### Esercizio 3.5 - Sistema di Configurazione con Builder
**Obiettivo**: Implementare il pattern Builder per configurazioni complesse.

Scrivi un programma che:
- Crea una classe/funzione `ConfigBuilder` per costruire configurazioni complesse
- Ogni metodo di configurazione restituisce `this` per permettere method chaining
- Il metodo `build()` valida la configurazione e restituisce l'oggetto finale
- Supporta validazione incrementale e suggerimenti per parametri mancanti
- Implementa preset per configurazioni comuni

**Esempio:**
```javascript
const config = new ConfigBuilder()
  .setHost('localhost')
  .setPort(3000)
  .setDatabase('mydb')
  .enableSSL(true)
  .setConnectionPool({ min: 2, max: 10 })
  .setRetry({ attempts: 3, delay: 1000 })
  .build();

// Con preset
const configProd = ConfigBuilder
  .preset('production')
  .setHost('prod.example.com')
  .build();
```

**File**: `esercizio3_5.js`

---

## Progetti Completi

### Progetto 1 - Calculator DSL
**Obiettivo**: Creare un sistema di calcolo con Domain-Specific Language.

Implementa un calcolatore che:
- Supporta sintassi fluent/chainable per operazioni matematiche
- Ogni operazione restituisce un nuovo oggetto calcolatore
- Metodi: `add()`, `subtract()`, `multiply()`, `divide()`, `power()`, `sqrt()`, `abs()`
- Supporta variabili e funzioni personalizzate
- Metodo `equals()` restituisce il risultato finale
- Metodo `reset()` resetta lo stato
- Mantiene storico delle operazioni

**Funzionalità richieste:**
```javascript
const calc = new Calculator();

calc.value(10)
  .add(5)
  .multiply(2)
  .subtract(3)
  .divide(2)
  .equals(); // ((10+5)*2-3)/2 = 13.5

calc.reset()
  .value(4)
  .power(2)
  .sqrt()
  .equals(); // sqrt(4^2) = 4

calc.history(); // Mostra tutte le operazioni eseguite

// Con variabili
calc.set('x', 10)
  .value('x')
  .add(5)
  .equals(); // 15

// Con funzioni custom
calc.defineFunction('double', x => x * 2);
calc.value(5).apply('double').equals(); // 10
```

**File**: `progetto1_calculator_dsl.js`

---

### Progetto 2 - Query Builder
**Obiettivo**: Creare un costruttore di query SQL con validazione.

Implementa un Query Builder che:
- Costruisce query SQL in modo programmatico
- Metodi chainable: `select()`, `from()`, `where()`, `join()`, `orderBy()`, `limit()`
- Supporta query parametrizzate (protezione SQL injection)
- Valida la query prima dell'esecuzione
- Supporta query complesse con subquery
- Metodo `toSQL()` restituisce la query SQL
- Metodo `execute()` simula l'esecuzione (restituisce dati mock)

**Esempio di utilizzo:**
```javascript
const query = new QueryBuilder();

query.select('users.nome', 'users.email', 'ordini.totale')
  .from('users')
  .join('ordini', 'users.id = ordini.user_id')
  .where('users.attivo', '=', true)
  .where('ordini.totale', '>', 100)
  .orderBy('ordini.totale', 'DESC')
  .limit(10)
  .toSQL();

// Output: SELECT users.nome, users.email, ordini.totale 
//         FROM users 
//         JOIN ordini ON users.id = ordini.user_id 
//         WHERE users.attivo = ? AND ordini.totale > ? 
//         ORDER BY ordini.totale DESC 
//         LIMIT 10

// Con parametri
query.getParameters(); // [true, 100]

// Esecuzione
query.execute().then(risultati => {
  console.log(risultati);
});
```

**File**: `progetto2_query_builder.js`

---

### Progetto 3 - Validation Framework
**Obiettivo**: Framework completo per validazione dati.

Implementa un framework di validazione che:
- Definisce regole di validazione composable
- Validatori built-in: `required`, `string`, `number`, `email`, `url`, `minLength`, `maxLength`, `pattern`, `range`
- Supporta validatori custom
- Validazione asincrona (es. verifica unicità email via API)
- Messaggi di errore personalizzabili e internazionalizzati
- Validazione di oggetti annidati e array
- Può validare sia singoli valori che interi oggetti

**Funzionalità:**
```javascript
const schema = validator.object({
  nome: validator.string().required().minLength(2).maxLength(50),
  email: validator.string().email().required()
    .custom(async (email) => {
      // Simula verifica unicità
      return !await emailExists(email);
    }, "Email già registrata"),
  eta: validator.number().required().range(18, 100),
  indirizzo: validator.object({
    via: validator.string().required(),
    citta: validator.string().required(),
    cap: validator.string().pattern(/^\d{5}$/)
  }),
  hobby: validator.array().of(validator.string()).minItems(1).maxItems(5)
});

// Validazione
const risultato = await schema.validate({
  nome: "Mario",
  email: "mario@example.com",
  eta: 30,
  indirizzo: {
    via: "Via Roma 1",
    citta: "Milano",
    cap: "20100"
  },
  hobby: ["Calcio", "Lettura"]
});

if (!risultato.valid) {
  console.log(risultato.errors);
  // { email: ["Email già registrata"], ... }
}
```

**File**: `progetto3_validation_framework.js`

---

### Progetto 4 - Function Memoization con Strategie
**Obiettivo**: Sistema avanzato di memoizzazione con diverse strategie di caching.

Implementa un sistema di memoizzazione che:
- Supporta diverse strategie: LRU, LFU, TTL-based
- Configurazione per dimensione massima cache
- Serializzazione personalizzabile delle chiavi (per oggetti complessi)
- Supporta funzioni con multipli parametri
- Statistiche dettagliate (hit rate, cache size, evictions)
- Persistenza cache (salvataggio/caricamento)
- Invalidazione selettiva o completa
- Supporto per funzioni asincrone

**Funzionalità:**
```javascript
// Fibonacci con LRU cache
const fibonacci = memoize(
  (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  },
  {
    strategy: 'LRU',
    maxSize: 100,
    keySerializer: (args) => JSON.stringify(args)
  }
);

console.log(fibonacci(50)); // Calcolo veloce

// API call con TTL
const fetchUser = memoize(
  async (userId) => {
    const response = await fetch(`/api/users/${userId}`);
    return response.json();
  },
  {
    strategy: 'TTL',
    ttl: 60000, // 1 minuto
    async: true
  }
);

// Statistiche
fibonacci.stats();
// { hits: 45, misses: 5, hitRate: 0.9, size: 50, evictions: 0 }

// Invalidazione
fibonacci.invalidate(10); // Invalida risultato per n=10
fibonacci.clear(); // Svuota cache

// Persistenza
fibonacci.save('cache.json');
fibonacci.load('cache.json');
```

**File**: `progetto4_memoization_system.js`

---

### Progetto 5 - Functional Programming Toolkit
**Obiettivo**: Libreria completa per programmazione funzionale.

Implementa una libreria FP che fornisce:
- **Transformations**: `map`, `filter`, `reduce`, `flatMap`, `groupBy`, `partition`
- **Composition**: `compose`, `pipe`, `curry`, `partial`, `flip`
- **Predicates**: `and`, `or`, `not`, `equals`, `greaterThan`, `lessThan`
- **Utilities**: `identity`, `constant`, `tap`, `memoize`, `debounce`, `throttle`
- **Maybe/Option**: gestione valori nullable
- **Either**: gestione errori funzionale
- **Lazy evaluation**: evaluation pigra per ottimizzazioni

Tutte le funzioni devono essere:
- Pure (senza side effects)
- Immutabili
- Componibili
- Curry-abili per default

**Esempio:**
```javascript
const F = FunctionalToolkit;

// Composizione
const elabora = F.pipe(
  F.map(x => x * 2),
  F.filter(x => x > 10),
  F.reduce((acc, x) => acc + x, 0)
);

const risultato = elabora([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(risultato); // Somma di numeri raddoppiati > 10

// Maybe monad
const utente = F.Maybe.of({ nome: "Mario", indirizzo: { citta: "Roma" } });

const citta = utente
  .map(u => u.indirizzo)
  .map(addr => addr.citta)
  .getOrElse("Città sconosciuta");

console.log(citta); // "Roma"

// Either per gestione errori
const divide = (a, b) => 
  b === 0 
    ? F.Either.left("Divisione per zero")
    : F.Either.right(a / b);

divide(10, 2)
  .map(x => x * 2)
  .fold(
    errore => console.error(errore),
    risultato => console.log(risultato) // 10
  );

// Lazy evaluation
const numeri = F.lazy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

numeri
  .map(x => { console.log(`map ${x}`); return x * 2; })
  .filter(x => { console.log(`filter ${x}`); return x > 10; })
  .take(3)
  .toArray(); // Solo i primi 3 elementi vengono elaborati
```

**File**: `progetto5_functional_toolkit.js`

---

## Soluzioni

### Soluzione Esercizio 1.1

```javascript
// esercizio1_1.js

function calcolaMedia(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

// Test
console.log(`Media di 10, 20, 30: ${calcolaMedia(10, 20, 30)}`);
console.log(`Media di 5, 7, 9: ${calcolaMedia(5, 7, 9)}`);
console.log(`Media di 100, 50, 75: ${calcolaMedia(100, 50, 75)}`);

// Versione con formattazione migliore
function mostraMedia(a, b, c) {
  const media = calcolaMedia(a, b, c);
  console.log(`La media di ${a}, ${b}, ${c} è ${media.toFixed(2)}`);
}

mostraMedia(10, 15, 20);
mostraMedia(8.5, 9.2, 7.8);
```

**Esecuzione:**
```bash
node esercizio1_1.js
```

**Output atteso:**
```
Media di 10, 20, 30: 20
Media di 5, 7, 9: 7
Media di 100, 50, 75: 75
La media di 10, 15, 20 è 15.00
La media di 8.5, 9.2, 7.8 è 8.50
```

---

### Soluzione Esercizio 1.2

```javascript
// esercizio1_2.js

function creaMessaggio(testo, prefisso = "INFO", timestamp = true) {
  let messaggio = `[${prefisso}]`;
  
  if (timestamp) {
    const now = new Date();
    const dataOra = now.toISOString().replace('T', ' ').substring(0, 19);
    messaggio += ` ${dataOra}:`;
  }
  
  messaggio += ` ${testo}`;
  
  return messaggio;
}

// Test con diverse combinazioni di parametri
console.log(creaMessaggio("Server avviato"));
console.log(creaMessaggio("Connessione fallita", "ERROR", false));
console.log(creaMessaggio("Memoria quasi esaurita", "WARNING"));
console.log(creaMessaggio("Utente loggato", "DEBUG", true));
console.log(creaMessaggio("Sistema operativo", "INFO", false));
```

**Esecuzione:**
```bash
node esercizio1_2.js
```

---

### Soluzione Esercizio 1.3

```javascript
// esercizio1_3.js

function analizzaStringa(str) {
  return {
    lunghezza: str.length,
    maiuscole: (str.match(/[A-Z]/g) || []).length,
    minuscole: (str.match(/[a-z]/g) || []).length,
    numeri: (str.match(/[0-9]/g) || []).length,
    primaLettera: str.charAt(0),
    ultimaLettera: str.charAt(str.length - 1)
  };
}

// Test
const test1 = "Ciao123Mondo";
const test2 = "JavaScript2024";
const test3 = "ABC123xyz";

console.log("Analisi di:", test1);
console.log(analizzaStringa(test1));

console.log("\nAnalisi di:", test2);
console.log(analizzaStringa(test2));

console.log("\nAnalisi di:", test3);
console.log(analizzaStringa(test3));

// Versione con output formattato
function mostraAnalisi(str) {
  const analisi = analizzaStringa(str);
  console.log("\n" + "=".repeat(50));
  console.log(`Stringa: "${str}"`);
  console.log("=".repeat(50));
  console.log(`Lunghezza:     ${analisi.lunghezza}`);
  console.log(`Maiuscole:     ${analisi.maiuscole}`);
  console.log(`Minuscole:     ${analisi.minuscole}`);
  console.log(`Numeri:        ${analisi.numeri}`);
  console.log(`Prima lettera: ${analisi.primaLettera}`);
  console.log(`Ultima lettera: ${analisi.ultimaLettera}`);
}

mostraAnalisi("Hello123World!");
```

**Esecuzione:**
```bash
node esercizio1_3.js
```

---

### Soluzione Esercizio 1.4

```javascript
// esercizio1_4.js

function validaPassword(password) {
  // Controllo lunghezza minima
  if (password.length < 8) {
    return { 
      valida: false, 
      errore: "Password troppo corta (minimo 8 caratteri)" 
    };
  }
  
  // Controllo presenza maiuscola
  if (!/[A-Z]/.test(password)) {
    return { 
      valida: false, 
      errore: "Manca almeno una lettera maiuscola" 
    };
  }
  
  // Controllo presenza numero
  if (!/[0-9]/.test(password)) {
    return { 
      valida: false, 
      errore: "Manca almeno un numero" 
    };
  }
  
  // Tutti i controlli passati
  return { 
    valida: true, 
    errore: null 
  };
}

// Test con diverse password
const passwords = [
  "abc",
  "abcdefgh",
  "Abcdefgh",
  "Abcdefg1",
  "Pass123",
  "MySecurePassword123"
];

console.log("Test validazione password:\n");
passwords.forEach(pwd => {
  const risultato = validaPassword(pwd);
  console.log(`Password: "${pwd}"`);
  console.log(`Valida: ${risultato.valida}`);
  if (!risultato.valida) {
    console.log(`Errore: ${risultato.errore}`);
  }
  console.log("---");
});
```

**Esecuzione:**
```bash
node esercizio1_4.js
```

---

### Soluzione Esercizio 1.5

```javascript
// esercizio1_5.js

// Funzione void - stampa ma non restituisce
function logMessaggio(msg) {
  console.log(`[LOG] ${msg}`);
  // Nessun return - implicitamente restituisce undefined
}

// Funzione con return - restituisce valore
function getMessaggio(msg) {
  return `[MSG] ${msg}`;
}

// Funzione void - simula operazione
function scriviFile(nome, contenuto) {
  console.log(`Scrittura file "${nome}"...`);
  console.log(`Contenuto: ${contenuto}`);
  console.log("File scritto con successo!");
  // Nessun return
}

// Funzione con return - simula lettura
function leggiFile(nome) {
  console.log(`Lettura file "${nome}"...`);
  return `Contenuto del file ${nome}`;
}

// Test delle funzioni
console.log("=== Test Funzioni ===\n");

// Test logMessaggio
console.log("1. Test logMessaggio:");
let risultato1 = logMessaggio("Questo è un messaggio di log");
console.log("Valore restituito:", risultato1); // undefined
console.log();

// Test getMessaggio
console.log("2. Test getMessaggio:");
let risultato2 = getMessaggio("Questo è un messaggio");
console.log("Valore restituito:", risultato2);
console.log();

// Test scriviFile
console.log("3. Test scriviFile:");
let risultato3 = scriviFile("dati.txt", "Contenuto importante");
console.log("Valore restituito:", risultato3); // undefined
console.log();

// Test leggiFile
console.log("4. Test leggiFile:");
let risultato4 = leggiFile("config.json");
console.log("Valore restituito:", risultato4);
console.log();

// Riepilogo
console.log("=== Riepilogo ===");
console.log("Funzioni void restituiscono:", typeof risultato1, "(" + risultato1 + ")");
console.log("Funzioni con return restituiscono:", typeof risultato2, "con valori utili");
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

### Test con diversi parametri
```bash
# Creare uno script di test
cat > test_parametri.js << 'EOF'
const args = process.argv.slice(2);
console.log('Parametri ricevuti:', args);
EOF

# Eseguire con parametri
node test_parametri.js param1 param2 param3
```

---

[Torna all'indice](../README.md) | [Vai alla teoria: Parametri e Valori di Ritorno](../teoria/02_Parametri_Valori_Ritorno.md)
