# Esercizi sui Tipi di Dati Primitivi in JavaScript

## Indice
1. [Esercizi Base](#esercizi-base)
2. [Esercizi Intermedi](#esercizi-intermedi)
3. [Esercizi Avanzati](#esercizi-avanzati)
4. [Progetti Completi](#progetti-completi)
5. [Soluzioni](#soluzioni)

---

## Esercizi Base

### Esercizio 1.1 - Tipi Primitivi e typeof
**Obiettivo**: Identificare i tipi primitivi usando typeof.

Scrivi un programma Node.js che:
- Crea variabili di ogni tipo primitivo (string, number, boolean, undefined, null, symbol, bigint)
- Usa `typeof` per verificare il tipo di ciascuna
- Stampa il tipo e il valore
- Nota il comportamento anomalo di `typeof null`

**Test:**
```bash
node es1_1.js
```

**Output atteso:**
```
string: "Ciao mondo" - typeof: string
number: 42 - typeof: number
boolean: true - typeof: boolean
undefined: undefined - typeof: undefined
null: null - typeof: object ⚠️  (bug storico!)
symbol: Symbol(id) - typeof: symbol
bigint: 123456789n - typeof: bigint
```

---

### Esercizio 1.2 - Operazioni con String
**Obiettivo**: Manipolare stringhe con metodi comuni.

Scrivi un programma che:
- Prende una stringa di input
- Applica diverse trasformazioni:
  - Maiuscolo/minuscolo
  - Estrazione di sottostringhe
  - Ricerca di caratteri
  - Sostituzione di testo
  - Split e join
- Stampa i risultati di ogni operazione

**Esempio:**
```javascript
const testo = "JavaScript è fantastico!";
// Applica le trasformazioni e stampa risultati
```

---

### Esercizio 1.3 - Operazioni con Number
**Obiettivo**: Lavorare con numeri e gestire casi speciali.

Scrivi un programma che:
- Esegue operazioni aritmetiche base
- Gestisce valori speciali (Infinity, -Infinity, NaN)
- Usa Math per operazioni avanzate
- Verifica limiti numerici (MAX_SAFE_INTEGER, MIN_SAFE_INTEGER)
- Testa precisione dei decimali

**Casi da testare:**
```javascript
console.log(1 / 0);
console.log(-1 / 0);
console.log(0 / 0);
console.log("abc" * 2);
console.log(0.1 + 0.2 === 0.3); // Sorpresa!
```

---

### Esercizio 1.4 - Boolean e Valori Truthy/Falsy
**Obiettivo**: Comprendere la conversione a boolean.

Scrivi un programma che:
- Testa una lista di valori diversi in contesti booleani
- Identifica quali sono truthy e quali falsy
- Usa operatori logici (&&, ||, !)
- Confronta == vs === con booleani

**Valori da testare:**
```javascript
const valori = [
  0, -0, 1, -1,
  "", "testo",
  null, undefined,
  NaN,
  [], {},
  true, false
];
```

---

### Esercizio 1.5 - Template Literals
**Obiettivo**: Utilizzare template literals per stringhe complesse.

Scrivi un programma che:
- Crea stringhe multilinea
- Usa interpolazione di variabili
- Esegue espressioni dentro i template
- Crea una funzione di formattazione personalizzata
- Confronta con concatenazione tradizionale

**Esempio:**
```javascript
const nome = "Mario";
const età = 30;
const città = "Roma";

// Crea un profilo formattato usando template literals
```

---

## Esercizi Intermedi

### Esercizio 2.1 - String Methods Challenge
**Obiettivo**: Padroneggiare i metodi delle stringhe.

Scrivi un programma che implementa le seguenti funzioni usando i metodi nativi delle stringhe:

```javascript
// 1. Conta le vocali in una stringa
function contaVocali(str) { }

// 2. Inverti una stringa
function invertiStringa(str) { }

// 3. Controlla se è un palindromo
function isPalindromo(str) { }

// 4. Capitalizza prima lettera di ogni parola
function capitalizzaParole(str) { }

// 5. Rimuovi spazi duplicati
function rimuoviSpaziDuplicati(str) { }

// 6. Censura parole proibite
function censura(str, paroleDaEvitare) { }
```

**Test:**
```javascript
console.log(contaVocali("JavaScript")); // 3
console.log(invertiStringa("ciao")); // "oaic"
console.log(isPalindromo("radar")); // true
console.log(capitalizzaParole("ciao mondo")); // "Ciao Mondo"
```

---

### Esercizio 2.2 - Number Precision e Rounding
**Obiettivo**: Gestire la precisione numerica correttamente.

Scrivi un programma che:
- Implementa una funzione per confrontare float con tolleranza
- Arrotonda numeri in modi diversi (up, down, nearest)
- Formatta numeri come valuta
- Converte tra diverse basi (binario, ottale, esadecimale)
- Gestisce calcoli monetari senza errori di precisione

**Esempio:**
```javascript
function compareFloat(a, b, epsilon = 0.0001) {
  // Implementa confronto con tolleranza
}

function formatCurrency(amount) {
  // Formatta come valuta (es. 1234.56 → "€1.234,56")
}

function toBase(number, base) {
  // Converte numero in base specificata
}

console.log(compareFloat(0.1 + 0.2, 0.3)); // true
console.log(formatCurrency(1234.567)); // "€1.234,57"
console.log(toBase(255, 16)); // "FF"
```

---

### Esercizio 2.3 - Symbol come Chiavi Uniche
**Obiettivo**: Utilizzare Symbol per creare identificatori unici.

Scrivi un programma che:
- Crea Symbol per proprietà private di oggetti
- Usa Symbol.for() per Symbol globali
- Implementa un sistema di metadati con Symbol
- Dimostra come Symbol previene collisioni di nomi

**Esempio:**
```javascript
// Sistema di validazione con metadati
const META_REQUIRED = Symbol('required');
const META_TYPE = Symbol('type');
const META_MIN = Symbol('min');

const userSchema = {
  nome: {
    [META_REQUIRED]: true,
    [META_TYPE]: 'string',
    [META_MIN]: 2
  },
  età: {
    [META_REQUIRED]: true,
    [META_TYPE]: 'number',
    [META_MIN]: 0
  }
};

function validate(schema, data) {
  // Implementa validazione usando i Symbol
}
```

---

### Esercizio 2.4 - BigInt per Grandi Numeri
**Obiettivo**: Lavorare con numeri interi molto grandi.

Scrivi un programma che:
- Implementa operazioni aritmetiche con BigInt
- Calcola fattoriali di numeri grandi
- Implementa sequenza di Fibonacci con BigInt
- Converte tra Number e BigInt gestendo i limiti
- Confronta performance BigInt vs Number

**Esempio:**
```javascript
function fattoriale(n) {
  // Calcola n! usando BigInt
  // Es: fattoriale(100) dovrebbe funzionare
}

function fibonacci(n) {
  // Calcola n-esimo numero Fibonacci con BigInt
}

function isPrime(n) {
  // Verifica se un BigInt è primo
}

console.log(fattoriale(50n));
console.log(fibonacci(100n));
console.log(isPrime(1000000007n));
```

---

### Esercizio 2.5 - Type Checker Utility
**Obiettivo**: Creare utility per verifica accurata dei tipi.

Scrivi un programma che implementa funzioni di type checking più precise di typeof:

```javascript
function isString(value) { }
function isNumber(value) { } // Esclude NaN
function isInteger(value) { }
function isFloat(value) { }
function isBoolean(value) { }
function isNull(value) { }
function isUndefined(value) { }
function isSymbol(value) { }
function isBigInt(value) { }
function isNaN(value) { } // Più preciso di isNaN globale
function isInfinity(value) { }

function getExactType(value) {
  // Ritorna tipo esatto come stringa
}

// Test
const testValues = [
  42, 3.14, NaN, Infinity,
  "hello", "",
  true, false,
  null, undefined,
  Symbol(), 42n,
  [], {}, new Date()
];

testValues.forEach(val => {
  console.log(`${val} → ${getExactType(val)}`);
});
```

---

## Esercizi Avanzati

### Esercizio 3.1 - String Compression Algorithm
**Obiettivo**: Implementare algoritmo di compressione stringhe.

Scrivi un programma che:
- Implementa compressione Run-Length Encoding (RLE)
- Comprime solo se risultato è più corto dell'originale
- Implementa decompressione
- Gestisce casi edge (stringhe vuote, caratteri speciali)
- Include tests di performance

**Esempio:**
```javascript
function compress(str) {
  // "aaabbbcccc" → "a3b3c4"
  // "abc" → "abc" (non comprime se più lungo)
}

function decompress(str) {
  // "a3b3c4" → "aaabbbcccc"
}

function testCompression(str) {
  const compressed = compress(str);
  const decompressed = decompress(compressed);
  const ratio = (compressed.length / str.length * 100).toFixed(2);
  
  console.log(`Originale: "${str}" (${str.length} caratteri)`);
  console.log(`Compressa: "${compressed}" (${compressed.length} caratteri)`);
  console.log(`Ratio: ${ratio}%`);
  console.log(`Decompressione OK: ${str === decompressed}`);
}

testCompression("aaabbbccccdddd");
testCompression("abcdefghij");
testCompression("aaaaaaaaaaaa");
```

---

### Esercizio 3.2 - Arbitrary Precision Calculator
**Obiettivo**: Creare calcolatrice con precisione arbitraria usando BigInt.

Scrivi un programma che:
- Implementa operazioni con precisione decimale arbitraria
- Gestisce numeri molto grandi e molto piccoli
- Implementa funzioni matematiche (potenza, radice, logaritmo)
- Mantiene precisione in calcoli finanziari
- Include gestione errori

**Esempio:**
```javascript
class BigDecimal {
  constructor(value, precision = 10) {
    // Implementa usando BigInt internamente
  }
  
  add(other) { }
  subtract(other) { }
  multiply(other) { }
  divide(other) { }
  power(exp) { }
  sqrt() { }
  
  toString() { }
  toFixed(decimals) { }
}

// Test
const a = new BigDecimal("123456789.123456789");
const b = new BigDecimal("987654321.987654321");
console.log(a.add(b).toString());
console.log(a.multiply(b).toFixed(4));
```

---

### Esercizio 3.3 - String Pattern Matcher (Regex Alternative)
**Obiettivo**: Implementare pattern matching senza usare regex.

Scrivi un programma che implementa funzionalità simili a regex usando solo string methods:

```javascript
class StringMatcher {
  constructor(pattern) {
    this.pattern = pattern;
  }
  
  // ? = qualsiasi carattere singolo
  // * = zero o più caratteri qualsiasi
  // [abc] = uno tra a, b, c
  // {n} = ripeti n volte
  
  test(str) {
    // Verifica se str corrisponde al pattern
  }
  
  match(str) {
    // Ritorna le parti che corrispondono
  }
  
  matchAll(str) {
    // Trova tutte le occorrenze
  }
  
  replace(str, replacement) {
    // Sostituisce parti che corrispondono
  }
}

// Test
const matcher = new StringMatcher("a*b");
console.log(matcher.test("axxxb")); // true
console.log(matcher.test("ab")); // true
console.log(matcher.test("axc")); // false

const matcher2 = new StringMatcher("te?t");
console.log(matcher2.match("test text tent")); // ["test", "text", "tent"]
```

---

### Esercizio 3.4 - Type Coercion Visualizer
**Obiettivo**: Visualizzare e spiegare le conversioni di tipo implicite.

Scrivi un programma che:
- Prende due valori e un operatore
- Mostra step-by-step come JavaScript converte i tipi
- Spiega le regole applicate
- Confronta risultati di operazioni diverse
- Include tutti i casi edge

**Esempio:**
```javascript
function explainCoercion(left, operator, right) {
  console.log(`\n=== ${left} ${operator} ${right} ===`);
  console.log(`Tipo sinistro: ${typeof left} (${left})`);
  console.log(`Tipo destro: ${typeof right} (${right})`);
  console.log(`\nConversioni applicate:`);
  
  // Analizza e spiega la conversione
  // Mostra il risultato finale
}

// Test casi interessanti
explainCoercion(1, '+', '1');      // "11"
explainCoercion(1, '-', '1');      // 0
explainCoercion('5', '*', '2');    // 10
explainCoercion([], '+', []);      // ""
explainCoercion({}, '+', []);      // "[object Object]"
explainCoercion(true, '+', false); // 1
explainCoercion(null, '+', undefined); // NaN
```

---

### Esercizio 3.5 - Primitive Values Sandbox
**Obiettivo**: Creare ambiente sandbox per sperimentare con primitivi.

Scrivi un REPL interattivo che:
- Permette di creare e manipolare valori primitivi
- Mostra tipo, valore, rappresentazione in memoria
- Esegue operazioni e mostra risultato step-by-step
- Include database di esempi e quiz
- Traccia conversioni automatiche

**Esempio di interazione:**
```
> create num 42
✓ Creato: num = 42 (type: number)
  Memoria: 64-bit float
  Binario: 00000000...

> create str "hello"
✓ Creato: str = "hello" (type: string)
  Lunghezza: 5 caratteri
  UTF-16: 0x0068 0x0065 0x006c 0x006c 0x006f

> compute num + str
⚠️  Conversione implicita rilevata!
  num (number) + str (string)
  → num convertito a string: "42"
  → Risultato: "42hello" (type: string)

> quiz
Domanda: Quale è il risultato di null == undefined?
a) true
b) false
c) TypeError
> _
```

---

## Progetti Completi

### Progetto 1 - Text Analysis Suite

Crea una suite completa di analisi testuale che:

**Funzionalità:**
- Conta caratteri, parole, frasi, paragrafi
- Analisi frequenza caratteri/parole
- Calcola leggibilità (Flesch-Kincaid, ecc.)
- Identifica pattern comuni
- Statistiche dettagliate
- Suggerimenti di miglioramento

**Esempio:**
```javascript
const analyzer = new TextAnalyzer(testo);

console.log(analyzer.getStats());
// {
//   caratteri: 1250,
//   parole: 215,
//   frasi: 18,
//   parolaMediLunghezza: 5.8,
//   leggibilità: "Facile",
//   vocaliPercentuale: 42.3,
//   ...
// }

console.log(analyzer.getTopWords(10));
// [['javascript', 15], ['programma', 12], ...]

console.log(analyzer.getSuggestions());
// ["Frasi troppo lunghe: ridurre lunghezza media", ...]
```

---

### Progetto 2 - Number Formatter Library

Crea una libreria completa per formattazione numeri:

**Funzionalità:**
- Formattazione valuta (multi-locale)
- Percentuali con precisione configurabile
- Notazione scientifica
- Numeri romani
- Ordinali (1st, 2nd, 3rd, ...)
- File size (KB, MB, GB, ...)
- Durate temporali (ms → "2h 30m 15s")
- Parsing flessibile da stringhe

**Esempio:**
```javascript
const fmt = new NumberFormatter();

fmt.currency(1234.56, 'EUR', 'it-IT');     // "€1.234,56"
fmt.currency(1234.56, 'USD', 'en-US');     // "$1,234.56"
fmt.percent(0.856, 2);                      // "85.60%"
fmt.scientific(123456789);                  // "1.23×10⁸"
fmt.roman(2024);                            // "MMXXIV"
fmt.ordinal(42);                            // "42nd"
fmt.fileSize(1536000);                      // "1.46 MB"
fmt.duration(125000);                       // "2m 5s"

// Parsing
fmt.parse("$1,234.56");                     // 1234.56
fmt.parse("85.60%");                        // 0.856
fmt.parse("MMXXIV");                        // 2024
```

---

### Progetto 3 - Primitive Type Validator

Crea sistema di validazione robusto per tipi primitivi:

**Funzionalità:**
- Schema definition
- Validazione con regole complesse
- Conversione automatica opzionale
- Messaggi di errore personalizzati
- Validazione asincrona
- Composizione di validatori

**Esempio:**
```javascript
const schema = {
  nome: {
    type: 'string',
    minLength: 2,
    maxLength: 50,
    pattern: /^[A-Za-z\s]+$/,
    required: true,
    message: 'Nome deve contenere solo lettere'
  },
  
  età: {
    type: 'number',
    integer: true,
    min: 0,
    max: 150,
    required: true
  },
  
  email: {
    type: 'string',
    format: 'email',
    required: true
  },
  
  sito: {
    type: 'string',
    format: 'url',
    required: false
  },
  
  accettaTermini: {
    type: 'boolean',
    equals: true,
    required: true,
    message: 'Devi accettare i termini'
  }
};

const validator = new PrimitiveValidator(schema);

const result = validator.validate({
  nome: "Mario Rossi",
  età: 30,
  email: "mario@example.com",
  accettaTermini: true
});

if (result.valid) {
  console.log('Dati validi!', result.data);
} else {
  console.log('Errori:', result.errors);
}
```

---

### Progetto 4 - Crypto Primitives (String Hashing)

Implementa funzioni crittografiche usando solo primitivi:

**Funzionalità:**
- Hash functions (semplice, non crittograficamente sicuro)
- Checksum calculation
- String encoding/decoding (Base64, Hex)
- Simple encryption (Caesar, Vigenere)
- Password strength checker
- UUID generator

**Esempio:**
```javascript
const crypto = new StringCrypto();

// Hash
const hash = crypto.simpleHash("password123");
console.log(hash); // numero hash

// Encoding
const base64 = crypto.toBase64("Hello World");
const decoded = crypto.fromBase64(base64);

// Simple encryption
const encrypted = crypto.caesar("secret", 3);
const decrypted = crypto.caesar(encrypted, -3);

// Password strength
const strength = crypto.passwordStrength("MyP@ssw0rd!");
console.log(strength);
// {
//   score: 85,
//   level: "strong",
//   suggestions: [...]
// }

// UUID
console.log(crypto.generateUUID());
// "550e8400-e29b-41d4-a716-446655440000"
```

---

### Progetto 5 - Interactive Type Converter REPL

Crea un REPL interattivo per conversioni di tipo:

**Funzionalità:**
- Conversione tra tutti i tipi primitivi
- Visualizzazione step-by-step
- Spiegazione delle regole applicate
- Modalità quiz per imparare
- Confronto tra conversioni implicite/esplicite
- Salvataggio storico conversioni

**Esempio di sessione:**
```
TypeConverter REPL v1.0
Type 'help' for commands

> convert "42" to number
Conversione: string → number
Metodo: Number("42")
Passaggi:
  1. Verifica formato numerico: ✓
  2. Parse della stringa: "42"
  3. Conversione a numero: 42
Risultato: 42 (type: number)

> convert null to number
Conversione: null → number
Metodo: Number(null)
Passaggi:
  1. null viene trattato come 0
Risultato: 0 (type: number)
⚠️  Comportamento speciale di null!

> compare "5" + 3 vs Number("5") + 3
Espressione 1: "5" + 3
  → Conversione implicita: 3 → "3"
  → Risultato: "53" (string)

Espressione 2: Number("5") + 3
  → Conversione esplicita: "5" → 5
  → Risultato: 8 (number)

Differenza: conversione implicita vs esplicita!

> quiz
Avvia modalità quiz (10 domande)...
```

---

## Soluzioni

### Soluzione Esercizio 1.1

```javascript
// es1_1.js
console.log('=== Test tipi primitivi con typeof ===\n');

// String
const str = "Ciao mondo";
console.log(`string: "${str}" - typeof: ${typeof str}`);

// Number
const num = 42;
console.log(`number: ${num} - typeof: ${typeof num}`);

// Boolean
const bool = true;
console.log(`boolean: ${bool} - typeof: ${typeof bool}`);

// Undefined
const undef = undefined;
console.log(`undefined: ${undef} - typeof: ${typeof undef}`);

// Null (nota il bug!)
const nul = null;
console.log(`null: ${nul} - typeof: ${typeof nul} ⚠️  (bug storico!)`);

// Symbol
const sym = Symbol('id');
console.log(`symbol: ${sym.toString()} - typeof: ${typeof sym}`);

// BigInt
const big = 123456789n;
console.log(`bigint: ${big} - typeof: ${typeof big}`);

// Spiegazione del bug di null
console.log('\n📝 Nota: typeof null ritorna "object" a causa di un bug');
console.log('   storico di JavaScript che non può essere corretto');
console.log('   per mantenere la retrocompatibilità.');
```

---

### Soluzione Esercizio 1.2

```javascript
// es1_2.js
const testo = "JavaScript è fantastico!";
console.log('Testo originale:', testo);
console.log('');

// Lunghezza
console.log('Lunghezza:', testo.length);

// Maiuscolo/minuscolo
console.log('Maiuscolo:', testo.toUpperCase());
console.log('Minuscolo:', testo.toLowerCase());

// Estrazione sottostringhe
console.log('Primi 10 caratteri:', testo.slice(0, 10));
console.log('Dal carattere 11:', testo.slice(11));
console.log('Ultimi 11 caratteri:', testo.slice(-11));

// Ricerca
console.log('Posizione di "è":', testo.indexOf('è'));
console.log('Contiene "fantastico"?:', testo.includes('fantastico'));
console.log('Inizia con "Java"?:', testo.startsWith('Java'));
console.log('Finisce con "!"?:', testo.endsWith('!'));

// Sostituzione
console.log('Sostituzione:', testo.replace('fantastico', 'incredibile'));

// Split e join
const parole = testo.split(' ');
console.log('Parole:', parole);
console.log('Join con "-":', parole.join('-'));

// Trim (rimozione spazi)
const testoConSpazi = "   testo   ";
console.log('Con spazi:', `"${testoConSpazi}"`);
console.log('Trim:', `"${testoConSpazi.trim()}"`);
```

---

### Soluzione Esercizio 1.3

```javascript
// es1_3.js
console.log('=== Operazioni aritmetiche base ===');
console.log('10 + 5 =', 10 + 5);
console.log('10 - 5 =', 10 - 5);
console.log('10 * 5 =', 10 * 5);
console.log('10 / 5 =', 10 / 5);
console.log('10 % 3 =', 10 % 3);
console.log('2 ** 8 =', 2 ** 8);

console.log('\n=== Valori speciali ===');
console.log('1 / 0 =', 1 / 0); // Infinity
console.log('-1 / 0 =', -1 / 0); // -Infinity
console.log('0 / 0 =', 0 / 0); // NaN
console.log('"abc" * 2 =', "abc" * 2); // NaN

console.log('\n=== Limiti numerici ===');
console.log('MAX_SAFE_INTEGER:', Number.MAX_SAFE_INTEGER);
console.log('MIN_SAFE_INTEGER:', Number.MIN_SAFE_INTEGER);
console.log('MAX_VALUE:', Number.MAX_VALUE);
console.log('MIN_VALUE:', Number.MIN_VALUE);

console.log('\n=== Precisione decimali ===');
console.log('0.1 + 0.2 =', 0.1 + 0.2);
console.log('0.1 + 0.2 === 0.3?', 0.1 + 0.2 === 0.3); // false!
console.log('Differenza:', Math.abs((0.1 + 0.2) - 0.3));

console.log('\n=== Math object ===');
console.log('Math.PI:', Math.PI);
console.log('Math.sqrt(16):', Math.sqrt(16));
console.log('Math.pow(2, 8):', Math.pow(2, 8));
console.log('Math.random():', Math.random());
console.log('Math.floor(4.7):', Math.floor(4.7));
console.log('Math.ceil(4.2):', Math.ceil(4.2));
console.log('Math.round(4.5):', Math.round(4.5));
console.log('Math.abs(-5):', Math.abs(-5));
console.log('Math.max(1, 5, 3, 9, 2):', Math.max(1, 5, 3, 9, 2));
console.log('Math.min(1, 5, 3, 9, 2):', Math.min(1, 5, 3, 9, 2));
```

---

### Soluzione Esercizio 1.4

```javascript
// es1_4.js
const valori = [
  { valore: 0, nome: '0' },
  { valore: -0, nome: '-0' },
  { valore: 1, nome: '1' },
  { valore: -1, nome: '-1' },
  { valore: "", nome: '""' },
  { valore: "testo", nome: '"testo"' },
  { valore: null, nome: 'null' },
  { valore: undefined, nome: 'undefined' },
  { valore: NaN, nome: 'NaN' },
  { valore: [], nome: '[]' },
  { valore: {}, nome: '{}' },
  { valore: true, nome: 'true' },
  { valore: false, nome: 'false' }
];

console.log('=== Test Truthy/Falsy ===\n');

valori.forEach(({valore, nome}) => {
  const isTruthy = valore ? true : false;
  const symbol = isTruthy ? '✓' : '✗';
  const tipo = isTruthy ? 'truthy' : 'falsy';
  console.log(`${symbol} ${nome.padEnd(15)} → ${tipo}`);
});

console.log('\n=== Operatori logici ===');
console.log('true && true =', true && true);
console.log('true && false =', true && false);
console.log('false || true =', false || true);
console.log('!true =', !true);
console.log('!false =', !false);

// Short-circuit evaluation
console.log('\n=== Short-circuit evaluation ===');
console.log('"hello" || "default" =', "hello" || "default");
console.log('"" || "default" =', "" || "default");
console.log('null && "mai valutato" =', null && "mai valutato");

console.log('\n=== Comparazioni == vs === ===');
console.log('0 == false:', 0 == false); // true
console.log('0 === false:', 0 === false); // false
console.log('"" == false:', "" == false); // true
console.log('"" === false:', "" === false); // false
console.log('null == undefined:', null == undefined); // true
console.log('null === undefined:', null === undefined); // false
```

---

### Soluzione Esercizio 1.5

```javascript
// es1_5.js
const nome = "Mario";
const età = 30;
const città = "Roma";
const professione = "Sviluppatore";

console.log('=== Concatenazione tradizionale ===');
const profilo1 = "Nome: " + nome + "\nEtà: " + età + " anni\nCittà: " + città;
console.log(profilo1);

console.log('\n=== Template literals ===');
const profilo2 = `Nome: ${nome}
Età: ${età} anni
Città: ${città}`;
console.log(profilo2);

console.log('\n=== Espressioni in template literals ===');
console.log(`${nome} ha ${età} anni, tra 5 anni ne avrà ${età + 5}`);
console.log(`${nome} è ${età >= 18 ? 'maggiorenne' : 'minorenne'}`);

console.log('\n=== Multilinea formattata ===');
const biglietto = `
╔════════════════════════════════╗
║        CARTA D'IDENTITÀ        ║
╠════════════════════════════════╣
║ Nome:        ${nome.padEnd(18)} ║
║ Età:         ${String(età).padEnd(18)} ║
║ Città:       ${città.padEnd(18)} ║
║ Professione: ${professione.padEnd(18)} ║
╚════════════════════════════════╝
`;
console.log(biglietto);

// Funzione che usa template literals
function formattaProfilo(persona) {
  return `
📋 Profilo Utente
━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 ${persona.nome}
🎂 ${persona.età} anni
🏠 ${persona.città}
💼 ${persona.professione}
`;
}

console.log(formattaProfilo({nome, età, città, professione}));
```

---

[Continua con altre soluzioni se necessario...]

[Torna all'indice della sezione Variabili e Tipi Dati](../README.md)
