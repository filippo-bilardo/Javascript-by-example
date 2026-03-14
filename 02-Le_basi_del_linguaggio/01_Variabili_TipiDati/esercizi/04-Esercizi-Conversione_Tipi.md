# Esercizi sulla Conversione tra Tipi in JavaScript

## Indice
1. [Esercizi Base](#esercizi-base)
2. [Esercizi Intermedi](#esercizi-intermedi)
3. [Esercizi Avanzati](#esercizi-avanzati)
4. [Progetti Completi](#progetti-completi)
5. [Soluzioni](#soluzioni)

---

## Esercizi Base

### Esercizio 1.1 - Conversione Esplicita a String
**Obiettivo**: Padroneggiare i metodi di conversione a stringa.

Scrivi un programma Node.js che:
- Converte diversi tipi in stringa usando String()
- Usa toString() sui tipi che lo supportano
- Usa template literals
- Confronta i risultati
- Gestisce casi particolari (null, undefined, oggetti)

**Test:**
```bash
node es1_1.js
```

**Output atteso:**
```
=== Conversione a String ===
Number 42:
  String(42) = "42"
  (42).toString() = "42"
  `${42}` = "42"

Boolean true:
  String(true) = "true"
  true.toString() = "true"
  
null:
  String(null) = "null"
  null.toString() → Errore!
```

---

### Esercizio 1.2 - Conversione Esplicita a Number
**Obiettivo**: Utilizzare diversi metodi di conversione a numero.

Scrivi un programma che:
- Usa Number(), parseInt(), parseFloat()
- Usa operatore unario +
- Converte stringhe numeriche, booleani, null, undefined
- Gestisce casi edge (stringhe non numeriche, NaN)
- Mostra differenze tra i metodi

**Esempio:**
```javascript
const valori = ["42", "3.14", "42px", "abc", true, false, null, undefined];
// Prova tutti i metodi di conversione
```

---

### Esercizio 1.3 - Conversione Esplicita a Boolean
**Obiettivo**: Comprendere truthy/falsy e conversione a booleano.

Scrivi un programma che:
- Usa Boolean() per conversione esplicita
- Usa doppia negazione !! come shortcut
- Testa lista completa di valori falsy
- Verifica valori truthy
- Crea funzione helper isTruthy/isFalsy

**Test valori:**
```javascript
const valori = [
  0, -0, 1, -1,
  "", "0", "false",
  null, undefined, NaN,
  [], [1], {},
  true, false
];
```

---

### Esercizio 1.4 - Coercizione con Operatore +
**Obiettivo**: Comprendere il comportamento dell'operatore + con tipi diversi.

Scrivi un programma che:
- Testa + con combinazioni di string/number
- Mostra quando concatena vs quando somma
- Spiega le regole di coercizione applicate
- Include casi edge interessanti

**Casi da testare:**
```javascript
console.log(1 + "1");
console.log("1" + 1);
console.log(1 + 1 + "1");
console.log("1" + 1 + 1);
console.log(true + 1);
console.log(false + "10");
console.log([] + []);
console.log({} + []);
```

---

### Esercizio 1.5 - Comparazioni == vs ===
**Obiettivo**: Comprendere differenza tra uguaglianza debole e stretta.

Scrivi un programma che:
- Confronta coppie di valori con == e ===
- Mostra quando i risultati differiscono
- Spiega le conversioni di tipo applicate da ==
- Include tabella delle comparazioni comuni

**Comparazioni da testare:**
```javascript
const coppie = [
  [0, false],
  [1, true],
  ["", false],
  ["0", false],
  [null, undefined],
  [null, 0],
  [undefined, 0]
];
```

---

## Esercizi Intermedi

### Esercizio 2.1 - Type Coercion Debugger
**Obiettivo**: Creare tool che spiega conversioni implicite.

Scrivi un programma che:
- Prende espressione con operatore
- Analizza tipi degli operandi
- Mostra step-by-step la conversione
- Spiega la regola applicata
- Mostra il risultato finale

**Esempio:**
```javascript
function explainCoercion(left, operator, right) {
  console.log(`\nAnalisi: ${left} ${operator} ${right}`);
  console.log(`Tipo sx: ${typeof left}`);
  console.log(`Tipo dx: ${typeof right}`);
  
  // Analizza e spiega...
  
  const result = eval(`${left} ${operator} ${right}`);
  console.log(`Risultato: ${result} (${typeof result})`);
}

explainCoercion(1, '+', '1');
explainCoercion('5', '*', '2');
explainCoercion(true, '+', false);
```

**Output atteso:**
```
Analisi: 1 + "1"
Tipo sx: number
Tipo dx: string
Regola: + con string → concatenazione
Conversione: 1 → "1" (toString)
Operazione: "1" + "1"
Risultato: "11" (string)
```

---

### Esercizio 2.2 - Safe Type Converters
**Obiettivo**: Implementare convertitori sicuri con validazione.

Scrivi un programma con funzioni di conversione robuste:

```javascript
function toSafeNumber(value, defaultValue = 0) {
  // Converte a numero, ritorna default se invalido
  // Gestisce NaN, Infinity
}

function toSafeString(value, defaultValue = "") {
  // Converte a stringa gestendo null/undefined
}

function toSafeBoolean(value) {
  // Conversione esplicita e chiara
}

function toSafeInteger(value, defaultValue = 0) {
  // Converte a intero, gestisce decimali
}

function toSafeArray(value) {
  // Converte in array se possibile
  // Gestisce: string → split, iterabili, singoli valori
}

// Test
console.log(toSafeNumber("42")); // 42
console.log(toSafeNumber("abc")); // 0
console.log(toSafeNumber("abc", -1)); // -1
console.log(toSafeNumber(Infinity, 999)); // 999

console.log(toSafeString(null)); // ""
console.log(toSafeString(undefined, "N/A")); // "N/A"

console.log(toSafeInteger(3.7)); // 3
console.log(toSafeInteger("5.9")); // 5

console.log(toSafeArray("hello")); // ["h","e","l","l","o"]
console.log(toSafeArray(42)); // [42]
```

---

### Esercizio 2.3 - Numeric Conversion Validator
**Obiettivo**: Validare e parsare input numerici in modo robusto.

Scrivi un programma che:

```javascript
function parseNumericInput(input) {
  // Ritorna oggetto con:
  // { valid: boolean, value: number, error: string|null }
  
  // Gestisce:
  // - Numeri validi: "42", "3.14", "-5"
  // - Con spazi: "  42  "
  // - Con unità: "42px", "100%" (opzionale)
  // - Separatori migliaia: "1,234.56"
  // - Notazione scientifica: "1e5"
  // - Invalidi: "abc", "", null, undefined
}

function parseIntegerInput(input, options = {}) {
  // Opzioni: min, max, radix
  // Valida range
}

function parseFloatInput(input, options = {}) {
  // Opzioni: min, max, decimals
  // Arrotonda a decimali specificati
}

// Test
console.log(parseNumericInput("42")); 
// { valid: true, value: 42, error: null }

console.log(parseNumericInput("abc")); 
// { valid: false, value: NaN, error: "Invalid number format" }

console.log(parseIntegerInput("42", { min: 0, max: 100 })); 
// { valid: true, value: 42, error: null }

console.log(parseIntegerInput("150", { min: 0, max: 100 })); 
// { valid: false, value: 150, error: "Value exceeds maximum (100)" }
```

---

### Esercizio 2.4 - Object to Primitive Conversion
**Obiettivo**: Comprendere valueOf() e toString() negli oggetti.

Scrivi un programma che:

```javascript
// Crea oggetti personalizzati con valueOf e toString
class Money {
  constructor(amount, currency = 'EUR') {
    this.amount = amount;
    this.currency = currency;
  }
  
  valueOf() {
    return this.amount;
  }
  
  toString() {
    return `${this.amount} ${this.currency}`;
  }
}

// Testa conversioni
const money = new Money(100, 'EUR');

console.log(money + 50); // Usa valueOf → 150
console.log(String(money)); // Usa toString → "100 EUR"
console.log(`Hai ${money}`); // Template → toString

// Crea altre classi con conversioni custom:
// - Temperature (Celsius/Fahrenheit)
// - Distance (km/miles)
// - Duration (ms → formato leggibile)

class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  
  valueOf() { }
  toString() { }
  toFahrenheit() { }
}

// Test vari scenari
```

---

### Esercizio 2.5 - Type Conversion Matrix
**Obiettivo**: Creare matrice completa delle conversioni.

Scrivi un programma che:
- Genera tabella di conversioni tra tutti i tipi
- Mostra risultato e tipo risultante
- Evidenzia conversioni lossy (perdita informazioni)
- Include spiegazioni

**Output esempio:**
```
MATRICE CONVERSIONI
===================

Da Number a String:
  Number(42) → String: "42" ✓
  42 .toString(): "42" ✓
  `${42}`: "42" ✓

Da String a Number:
  String("42") → Number: 42 ✓
  String("abc") → Number: NaN ⚠️ (lossy)
  Number("42px"): NaN ⚠️ (lossy)
  parseInt("42px"): 42 ⚠️ (partial)

Da Boolean a Number:
  Boolean(true) → Number: 1 ✓
  Boolean(false) → Number: 0 ✓

[...]
```

---

## Esercizi Avanzati

### Esercizio 3.1 - Smart Type Converter
**Obiettivo**: Implementare sistema intelligente di conversione.

Scrivi un programma che:

```javascript
class TypeConverter {
  convert(value, targetType, options = {}) {
    // Converte value nel tipo target
    // Opzioni: strict, default, format, locale
    
    // Supporta: 'string', 'number', 'boolean', 'date',
    //           'array', 'object', 'json'
  }
  
  canConvert(value, targetType) {
    // Verifica se conversione è possibile senza perdita
  }
  
  getBestType(value) {
    // Inferisce il tipo più appropriato per il valore
  }
}

const converter = new TypeConverter();

// Conversioni base
converter.convert("42", "number"); // 42
converter.convert(42, "string"); // "42"

// Conversioni date
converter.convert("2024-01-15", "date"); // Date object
converter.convert(new Date(), "string", { format: "ISO" });

// Conversioni array
converter.convert("1,2,3", "array"); // [1,2,3]
converter.convert([1,2,3], "string"); // "1,2,3"

// JSON
converter.convert('{"name":"Mario"}', "object"); // { name: "Mario" }
converter.convert({ name: "Mario" }, "json"); // '{"name":"Mario"}'

// Con opzioni
converter.convert("42.567", "number", { decimals: 2 }); // 42.57
converter.convert(1234.56, "string", { 
  locale: "it-IT", 
  format: "currency",
  currency: "EUR"
}); // "€1.234,56"

// Verifica possibilità
converter.canConvert("42", "number"); // true
converter.canConvert("abc", "number"); // false

// Inferenza tipo
converter.getBestType("42"); // "number"
converter.getBestType("2024-01-15"); // "date"
converter.getBestType("true"); // "boolean"
```

---

### Esercizio 3.2 - Type Coercion Simulator
**Obiettivo**: Simulare il motore di type coercion di JavaScript.

Scrivi un programma che:

```javascript
class CoercionEngine {
  evaluate(expression) {
    // Parse ed esegui con spiegazione dettagliata
  }
  
  explainStep(left, operator, right) {
    // Spiega singolo step di coercion
  }
  
  getCoercionRules() {
    // Ritorna database di regole
  }
}

const engine = new CoercionEngine();

const result = engine.evaluate("1 + '2' + 3");

/* Output:
VALUTAZIONE: 1 + '2' + 3
═══════════════════════════

Step 1: 1 + '2'
  Operatore: +
  Sinistra: 1 (number)
  Destra: '2' (string)
  
  Regola applicata:
  ➤ Operatore + con almeno un operando string
  ➤ Converte entrambi a string e concatena
  
  Conversioni:
  1 → "1" (number → string)
  
  Operazione: "1" + "2"
  Risultato parziale: "12" (string)

Step 2: "12" + 3
  Operatore: +
  Sinistra: "12" (string)
  Destra: 3 (number)
  
  Regola applicata:
  ➤ Operatore + con almeno un operando string
  ➤ Converte entrambi a string e concatena
  
  Conversioni:
  3 → "3" (number → string)
  
  Operazione: "12" + "3"
  Risultato finale: "123" (string)

═══════════════════════════
RISULTATO: "123"
*/
```

---

### Esercizio 3.3 - Bi-directional Type Converter
**Obiettivo**: Implementare conversioni reversibili.

Scrivi un programma che:

```javascript
class BiConverter {
  constructor() {
    this.history = [];
  }
  
  encode(value, format) {
    // Codifica in formato specifico
    // Salva in history per reverse
  }
  
  decode(encoded, originalType) {
    // Decodifica ricostruendo tipo originale
  }
  
  roundTrip(value, format) {
    // Encode → Decode → verifica uguaglianza
  }
}

const converter = new BiConverter();

// Numeri → String con formato
let encoded = converter.encode(1234.56, "string:fixed:2");
console.log(encoded); // "1234.56"
let decoded = converter.decode(encoded, "number");
console.log(decoded); // 1234.56

// Date → ISO String
encoded = converter.encode(new Date(), "string:iso");
decoded = converter.decode(encoded, "date");

// Oggetti → JSON
encoded = converter.encode({ name: "Mario" }, "string:json");
decoded = converter.decode(encoded, "object");

// Array → CSV
encoded = converter.encode([1,2,3,4], "string:csv");
decoded = converter.decode(encoded, "array:number");

// Test round-trip
const original = { name: "Mario", age: 30 };
const result = converter.roundTrip(original, "string:json");
console.log(result.success); // true
console.log(result.equal); // true
```

---

### Esercizio 3.4 - Type Sanitizer
**Obiettivo**: Sanitizzare input da fonti non sicure.

Scrivi un programma che:

```javascript
class InputSanitizer {
  sanitize(input, expectedType, rules = {}) {
    // Pulisce e valida input
    // Previene injection attacks
    // Normalizza formato
  }
  
  sanitizeObject(obj, schema) {
    // Sanitizza oggetto basandosi su schema
  }
  
  getSanitizationReport(input) {
    // Report di cosa è stato modificato
  }
}

const sanitizer = new InputSanitizer();

// String sanitization
sanitizer.sanitize('<script>alert("XSS")</script>', 'string', {
  escapeHtml: true
}); 
// "&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;"

// Number sanitization
sanitizer.sanitize('  42.5678  ', 'number', {
  decimals: 2,
  min: 0,
  max: 100
}); 
// 42.57

// Object sanitization
const userInput = {
  name: '  Mario  ',
  age: '30',
  email: 'MARIO@EXAMPLE.COM',
  website: 'javascript:alert("XSS")',
  bio: '<script>bad</script>Good user'
};

const schema = {
  name: { type: 'string', trim: true, maxLength: 50 },
  age: { type: 'number', integer: true, min: 0, max: 150 },
  email: { type: 'string', lowercase: true, format: 'email' },
  website: { type: 'string', format: 'url', allowedProtocols: ['http', 'https'] },
  bio: { type: 'string', escapeHtml: true, maxLength: 500 }
};

const sanitized = sanitizer.sanitizeObject(userInput, schema);
console.log(sanitized);
/*
{
  name: "Mario",
  age: 30,
  email: "mario@example.com",
  website: null, // Protocollo non permesso
  bio: "&lt;script&gt;bad&lt;/script&gt;Good user"
}
*/

const report = sanitizer.getSanitizationReport(userInput);
console.log(report);
/*
{
  modified: ['name', 'age', 'email', 'website', 'bio'],
  errors: [{ field: 'website', reason: 'Invalid protocol' }],
  warnings: []
}
*/
```

---

### Esercizio 3.5 - Universal Data Transformer
**Obiettivo**: Creare sistema completo di trasformazione dati.

Scrivi un programma che:

```javascript
class DataTransformer {
  transform(data, transformations) {
    // Applica serie di trasformazioni
  }
  
  createPipeline(...transforms) {
    // Crea pipeline di trasformazioni
  }
  
  addTransform(name, fn) {
    // Registra trasformazione custom
  }
}

const transformer = new DataTransformer();

// Trasformazioni built-in
transformer.addTransform('uppercase', str => str.toUpperCase());
transformer.addTransform('trim', str => str.trim());
transformer.addTransform('parseNumber', str => parseFloat(str));
transformer.addTransform('toFixed', (num, decimals) => num.toFixed(decimals));

// Pipeline
const pipeline = transformer.createPipeline(
  { type: 'trim' },
  { type: 'parseNumber' },
  { type: 'toFixed', args: [2] }
);

const result = pipeline.execute('  42.567  ');
console.log(result); // "42.57"

// Trasformazione oggetto complesso
const userTransform = transformer.transform({
  name: '  mario rossi  ',
  age: '30',
  email: 'MARIO@EXAMPLE.COM',
  salary: '45000.789'
}, {
  name: [
    { type: 'trim' },
    { type: 'capitalize' }
  ],
  age: [
    { type: 'parseNumber' },
    { type: 'floor' }
  ],
  email: [
    { type: 'trim' },
    { type: 'lowercase' }
  ],
  salary: [
    { type: 'parseNumber' },
    { type: 'toFixed', args: [2] },
    { type: 'formatCurrency', args: ['EUR'] }
  ]
});

console.log(userTransform);
/*
{
  name: "Mario Rossi",
  age: 30,
  email: "mario@example.com",
  salary: "€45,000.79"
}
*/
```

---

## Progetti Completi

### Progetto 1 - Type System Library

Crea libreria completa per gestione tipi in JavaScript:

**Funzionalità:**
- Type detection accurata
- Type validation con schema
- Type conversion sicura
- Type guards
- Runtime type checking
- Type assertion
- Custom types

**Esempio:**
```javascript
const types = require('./type-system');

// Type detection
types.is(42, 'number'); // true
types.is([], 'array'); // true
types.isPlainObject({}); // true
types.getType(new Date()); // 'date'

// Validation
const userSchema = types.object({
  name: types.string().required().minLength(2),
  age: types.number().integer().min(0).max(150),
  email: types.string().email(),
  tags: types.array(types.string()),
  metadata: types.object().optional()
});

const result = userSchema.validate({
  name: 'Mario',
  age: 30,
  email: 'mario@example.com',
  tags: ['js', 'node']
});

// Conversion
types.convert('42', 'number'); // 42
types.convert([1,2,3], 'string'); // "1,2,3"

// Type guards
function processUser(user) {
  types.assert(user, userSchema);
  // TypeScript sa che user è valido
}

// Custom types
types.registerType('email', {
  validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
  convert: (val) => String(val).toLowerCase().trim()
});
```

---

### Progetto 2 - Input Parser & Validator

Crea sistema robusto per parsing e validazione input utente:

**Funzionalità:**
- Parse stringhe in tipi appropriati
- Validazione con regole complesse
- Normalizzazione dati
- Errori dettagliati
- Support per formati comuni (date, phone, currency, etc.)

**Esempio:**
```javascript
const parser = new InputParser();

// Parse automatico (inferisce tipo)
parser.parse('42'); // 42 (number)
parser.parse('true'); // true (boolean)
parser.parse('2024-01-15'); // Date object
parser.parse('[1,2,3]'); // [1,2,3] (array)

// Parse con tipo esplicito
parser.parse('42', 'string'); // "42"
parser.parse('42px', 'number'); // 42 (ignora px)

// Parse con schema
const formSchema = {
  username: { type: 'string', trim: true, minLength: 3 },
  age: { type: 'number', integer: true, min: 18 },
  birthdate: { type: 'date', format: 'YYYY-MM-DD' },
  email: { type: 'email', lowercase: true },
  phone: { type: 'phone', country: 'IT' },
  website: { type: 'url', optional: true },
  terms: { type: 'boolean', equals: true }
};

const formData = {
  username: '  Mario123  ',
  age: '25',
  birthdate: '1999-01-15',
  email: 'MARIO@EXAMPLE.COM',
  phone: '+39 333 1234567',
  website: '',
  terms: 'true'
};

const result = parser.parseObject(formData, formSchema);

if (result.success) {
  console.log(result.data);
  // {
  //   username: "Mario123",
  //   age: 25,
  //   birthdate: Date(1999-01-15),
  //   email: "mario@example.com",
  //   phone: "+393331234567",
  //   website: null,
  //   terms: true
  // }
} else {
  console.log(result.errors);
}
```

---

[Torna all'indice della sezione Variabili e Tipi Dati](../README.md)
