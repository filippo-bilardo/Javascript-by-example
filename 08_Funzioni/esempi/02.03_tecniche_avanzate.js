/**
 * TECNICHE AVANZATE: PARAMETRI E RITORNO
 * 
 * Questo file copre pattern avanzati per gestire parametri
 * e valori di ritorno in modo più sofisticato e professionale.
 */

console.log("=== 1. HIGHER-ORDER FUNCTIONS ===\n");

// Funzione che accetta funzione come parametro
function applicaOperazione(a, b, operazione) {
  return operazione(a, b);
}

const somma = (x, y) => x + y;
const moltiplica = (x, y) => x * y;
const potenza = (x, y) => Math.pow(x, y);

console.log("Somma:", applicaOperazione(5, 3, somma));
console.log("Moltiplica:", applicaOperazione(5, 3, moltiplica));
console.log("Potenza:", applicaOperazione(5, 3, potenza));

// Array method style
function trasforma(arr, trasformatore) {
  let risultato = [];
  for (let item of arr) {
    risultato.push(trasformatore(item));
  }
  return risultato;
}

let numeri = [1, 2, 3, 4, 5];
console.log("\nDoppi:", trasforma(numeri, n => n * 2));
console.log("Quadrati:", trasforma(numeri, n => n * n));
console.log("Stringhe:", trasforma(numeri, n => "Numero: " + n));

// Funzione che restituisce funzione
function creaValidatore(tipo) {
  if (tipo === 'email') {
    return email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  if (tipo === 'phone') {
    return phone => /^\d{10}$/.test(phone);
  }
  if (tipo === 'number') {
    return val => !isNaN(val) && val !== '';
  }
  return () => true;
}

let validaEmail = creaValidatore('email');
let validaPhone = creaValidatore('phone');

console.log("\nEmail 'test@example.com':", validaEmail("test@example.com"));
console.log("Email 'invalid':", validaEmail("invalid"));
console.log("Phone '1234567890':", validaPhone("1234567890"));


console.log("\n=== 2. CURRYING E PARTIAL APPLICATION ===\n");

// Currying manuale
function sommaC(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log("Somma curried:", sommaC(1)(2)(3));

// Partial application
const sommaCon5 = sommaC(5);
const sommaCon5E10 = sommaCon5(10);

console.log("Partial 5+10+2:", sommaCon5E10(2));
console.log("Partial 5+20+3:", sommaCon5(20)(3));

// Currying con arrow
const moltiplicaC = a => b => c => a * b * c;
console.log("\nMoltiplica curried:", moltiplicaC(2)(3)(4));

// Utility: curry automatico
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...nextArgs) {
      return curried.apply(this, args.concat(nextArgs));
    };
  };
}

function sommaTre(a, b, c) {
  return a + b + c;
}

const sommaTreCurried = curry(sommaTre);
console.log("\nCurry auto:", sommaTreCurried(1)(2)(3));
console.log("Curry auto partial:", sommaTreCurried(1, 2)(3));
console.log("Curry auto all:", sommaTreCurried(1, 2, 3));


console.log("\n=== 3. CALLBACK PATTERNS ===\n");

// Callback con error-first pattern (Node.js style)
function leggiFile(filename, callback) {
  setTimeout(() => {
    if (filename === "") {
      callback("Nome file mancante", null);
    } else {
      callback(null, `Contenuto di ${filename}`);
    }
  }, 100);
}

leggiFile("test.txt", (err, data) => {
  if (err) {
    console.log("Errore:", err);
  } else {
    console.log("Dati:", data);
  }
});

// Callback con options
function elaboraDati(dati, options, callback) {
  const config = {
    verbose: false,
    transform: x => x,
    ...options
  };
  
  if (config.verbose) {
    console.log("\nElaborazione dati...");
  }
  
  setTimeout(() => {
    let risultato = dati.map(config.transform);
    callback(risultato);
  }, 100);
}

elaboraDati([1, 2, 3], 
  { verbose: true, transform: x => x * 2 },
  (result) => console.log("Risultato:", result)
);

// Chaining callbacks
function step1(val, next) {
  console.log("\nStep 1:", val);
  setTimeout(() => next(val + 1), 50);
}

function step2(val, next) {
  console.log("Step 2:", val);
  setTimeout(() => next(val * 2), 50);
}

function step3(val, next) {
  console.log("Step 3:", val);
  next(val + 10);
}

step1(5, (res1) => {
  step2(res1, (res2) => {
    step3(res2, (res3) => {
      console.log("Finale:", res3);
    });
  });
});


console.log("\n=== 4. MEMOIZATION ===\n");

// Funzione costosa
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Con memoization
function memoize(fn) {
  const cache = {};
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (key in cache) {
      console.log("  Cache hit per:", args);
      return cache[key];
    }
    
    console.log("  Calcolo per:", args);
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

const fibMemo = memoize(fibonacci);

console.log("Fib(10):", fibMemo(10));
console.log("Fib(10) di nuovo:", fibMemo(10));  // Da cache
console.log("Fib(5):", fibMemo(5));  // Da cache (calcolato prima)

// Memoization generica per operazioni
const sommaLenta = memoize((a, b) => {
  console.log("  Somma complessa...");
  return a + b;
});

console.log("\nSomma(5,3):", sommaLenta(5, 3));
console.log("Somma(5,3) ancora:", sommaLenta(5, 3));  // Cache


console.log("\n=== 5. FUNCTION COMPOSITION ===\n");

// Compose manuale
const doppio = x => x * 2;
const incrementa = x => x + 1;
const quadrato = x => x * x;

// Composizione manuale: f(g(h(x)))
const elabora1 = x => quadrato(incrementa(doppio(x)));
console.log("Elabora1(5):", elabora1(5));  // ((5*2)+1)^2 = 121

// Utility compose
function compose(...funzioni) {
  return function(x) {
    return funzioni.reduceRight((acc, fn) => fn(acc), x);
  };
}

const elabora2 = compose(quadrato, incrementa, doppio);
console.log("Elabora2(5):", elabora2(5));

// Pipe (ordine inverso)
function pipe(...funzioni) {
  return function(x) {
    return funzioni.reduce((acc, fn) => fn(acc), x);
  };
}

const elabora3 = pipe(doppio, incrementa, quadrato);
console.log("Elabora3(5):", elabora3(5));

// Composizione con nomi
const preparaTesto = pipe(
  str => str.trim(),
  str => str.toLowerCase(),
  str => str.replace(/\s+/g, '-')
);

console.log("\nPrepara:", preparaTesto("  Hello World  "));


console.log("\n=== 6. DECORATOR PATTERN ===\n");

// Decorator per logging
function withLogging(fn, nome) {
  return function(...args) {
    console.log(`\n[LOG] Chiamata ${nome}(${args.join(', ')})`);
    const result = fn(...args);
    console.log(`[LOG] Risultato: ${result}`);
    return result;
  };
}

const sommaLog = withLogging((a, b) => a + b, "somma");
sommaLog(5, 3);

// Decorator per timing
function withTiming(fn, nome) {
  return function(...args) {
    const start = Date.now();
    const result = fn(...args);
    const end = Date.now();
    console.log(`\n[TIME] ${nome}: ${end - start}ms`);
    return result;
  };
}

const fibTime = withTiming(fibonacci, "fibonacci");
fibTime(20);

// Decorator multipli
function decorateAll(fn, ...decorators) {
  return decorators.reduce((decorated, decorator) => 
    decorator(decorated), fn);
}

const sommaDecor = decorateAll(
  (a, b) => a + b,
  fn => withLogging(fn, "somma"),
  fn => withTiming(fn, "somma")
);

sommaDecor(10, 20);


console.log("\n=== 7. VARIADIC FUNCTIONS ===\n");

// Funzione con numero variabile di argomenti
function concatena(...stringhe) {
  return stringhe.join(' ');
}

console.log(concatena("Hello"));
console.log(concatena("Hello", "World"));
console.log(concatena("a", "b", "c", "d", "e"));

// Math operations variadiche
function media(...numeri) {
  if (numeri.length === 0) return 0;
  return numeri.reduce((a, b) => a + b) / numeri.length;
}

console.log("\nMedia(1,2,3,4,5):", media(1, 2, 3, 4, 5));
console.log("Media(10,20,30):", media(10, 20, 30));

// Con parametri fissi e variabili
function formattaLista(tipo, ...elementi) {
  if (tipo === 'numbered') {
    return elementi.map((el, i) => `${i + 1}. ${el}`).join('\n');
  }
  if (tipo === 'bulleted') {
    return elementi.map(el => `• ${el}`).join('\n');
  }
  return elementi.join(', ');
}

console.log("\nNumerata:");
console.log(formattaLista('numbered', 'Primo', 'Secondo', 'Terzo'));

console.log("\nBullet:");
console.log(formattaLista('bulleted', 'Item A', 'Item B', 'Item C'));


console.log("\n=== 8. FLUENT INTERFACES ===\n");

// Builder pattern con fluent interface
class QueryBuilder {
  constructor() {
    this._select = '*';
    this._from = '';
    this._where = [];
    this._orderBy = '';
  }
  
  select(fields) {
    this._select = fields;
    return this;
  }
  
  from(table) {
    this._from = table;
    return this;
  }
  
  where(condition) {
    this._where.push(condition);
    return this;
  }
  
  orderBy(field) {
    this._orderBy = field;
    return this;
  }
  
  build() {
    let query = `SELECT ${this._select} FROM ${this._from}`;
    if (this._where.length > 0) {
      query += ` WHERE ${this._where.join(' AND ')}`;
    }
    if (this._orderBy) {
      query += ` ORDER BY ${this._orderBy}`;
    }
    return query;
  }
}

const query = new QueryBuilder()
  .select('name, email')
  .from('users')
  .where('age > 18')
  .where('active = true')
  .orderBy('name')
  .build();

console.log("Query:", query);

// String builder
class StringBuilder {
  constructor(str = '') {
    this.value = str;
  }
  
  append(str) {
    this.value += str;
    return this;
  }
  
  prepend(str) {
    this.value = str + this.value;
    return this;
  }
  
  uppercase() {
    this.value = this.value.toUpperCase();
    return this;
  }
  
  lowercase() {
    this.value = this.value.toLowerCase();
    return this;
  }
  
  toString() {
    return this.value;
  }
}

const text = new StringBuilder('hello')
  .append(' ')
  .append('world')
  .uppercase()
  .prepend('SAY: ')
  .toString();

console.log("\nText:", text);


console.log("\n=== 9. OPTIONAL PARAMETERS PATTERNS ===\n");

// Usando undefined
function greet(name, greeting, punctuation) {
  greeting = greeting !== undefined ? greeting : "Hello";
  punctuation = punctuation !== undefined ? punctuation : "!";
  return `${greeting}, ${name}${punctuation}`;
}

console.log(greet("Mario"));
console.log(greet("Luigi", "Hi"));
console.log(greet("Peach", "Hey", "."));

// Usando default parameters (moderno)
function greet2(name, greeting = "Hello", punctuation = "!") {
  return `${greeting}, ${name}${punctuation}`;
}

console.log("\n" + greet2("Mario"));
console.log(greet2("Luigi", "Hi"));

// Options object
function createUser(options = {}) {
  const defaults = {
    name: "Anonymous",
    role: "user",
    active: true,
    permissions: []
  };
  
  const config = { ...defaults, ...options };
  
  return {
    ...config,
    id: Date.now()
  };
}

console.log("\nUtente default:", createUser());
console.log("Utente custom:", createUser({ 
  name: "Admin", 
  role: "admin",
  permissions: ["read", "write", "delete"]
}));


console.log("\n=== 10. ADVANCED RETURN PATTERNS ===\n");

// Maybe/Option type simulation
function Maybe(value) {
  return {
    isPresent: () => value !== null && value !== undefined,
    get: () => value,
    orElse: (defaultValue) => value !== null && value !== undefined ? value : defaultValue,
    map: (fn) => value !== null && value !== undefined ? Maybe(fn(value)) : Maybe(null),
    flatMap: (fn) => value !== null && value !== undefined ? fn(value) : Maybe(null)
  };
}

function trovaUtente(id) {
  const users = {
    1: { id: 1, name: "Mario" },
    2: { id: 2, name: "Luigi" }
  };
  return Maybe(users[id]);
}

const user1 = trovaUtente(1);
console.log("User found?", user1.isPresent());
console.log("User:", user1.get());

const user3 = trovaUtente(3);
console.log("\nUser 3 found?", user3.isPresent());
console.log("User 3 or default:", user3.orElse({ id: 0, name: "Guest" }));

// Map operation
const userName = trovaUtente(1)
  .map(u => u.name)
  .map(n => n.toUpperCase())
  .get();

console.log("\nUser name processed:", userName);

// Result type (Either)
function Result(value, error = null) {
  return {
    isSuccess: () => error === null,
    isFailure: () => error !== null,
    getValue: () => value,
    getError: () => error,
    map: (fn) => error === null ? Result(fn(value)) : Result(null, error),
    flatMap: (fn) => error === null ? fn(value) : Result(null, error)
  };
}

function divide(a, b) {
  if (b === 0) {
    return Result(null, "Division by zero");
  }
  return Result(a / b);
}

const result1 = divide(10, 2);
console.log("\n10/2 success?", result1.isSuccess());
console.log("Value:", result1.getValue());

const result2 = divide(10, 0);
console.log("\n10/0 success?", result2.isSuccess());
console.log("Error:", result2.getError());

console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO TECNICHE AVANZATE");
console.log("=".repeat(50));
console.log(`
HIGHER-ORDER:
• Funzioni che accettano funzioni
• Funzioni che restituiscono funzioni
• Array methods, validators, factories

CURRYING:
• f(a)(b)(c) invece di f(a,b,c)
• Partial application
• Funzioni specializzate

CALLBACK:
• Error-first pattern
• Options object
• Chaining

MEMOIZATION:
• Cache risultati
• Ottimizza calcoli ripetuti
• Funzioni pure

COMPOSITION:
• compose: da destra a sinistra
• pipe: da sinistra a destra
• Combina funzioni semplici

DECORATOR:
• Aggiunge comportamento
• Logging, timing, caching
• Composizione decoratori

FLUENT INTERFACE:
• Method chaining
• return this
• Builder pattern

PATTERNS:
• Maybe/Option type
• Result/Either type
• Variadic functions
• Optional parameters
`);
