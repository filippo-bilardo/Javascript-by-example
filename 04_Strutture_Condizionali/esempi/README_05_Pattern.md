# Pattern Matching e Destructuring - Esempi Pratici

Esempi completi per comprendere il pattern matching in JavaScript attraverso destructuring, guard clauses, e pattern funzionali avanzati.

## File degli esempi

### 05.01_destructuring_base.js
Destructuring fondamentale:
- Array destructuring base ([a, b] = arr)
- Rest operator in array ([first, ...rest])
- Default values in array
- Object destructuring base ({ name, age })
- Default values in object
- Nested destructuring (oggetti e array annidati)
- Rest in object ({ a, ...rest })
- In function parameters
- Array di oggetti (map, filter con destructuring)
- Casi pratici (API, config, swap, React props)

### 05.02_destructuring_avanzato.js
Tecniche avanzate:
- Computed property names ([key]: value)
- Destructuring con validazione (throw in default)
- Try-catch pattern (success/error handling)
- Array pattern matching (head-tail, length checks)
- Object pattern matching (type-based)
- Mixed patterns (array di oggetti complessi)
- Rename e transform (snake_case → camelCase)
- Conditional destructuring (tipo-based)
- Immutable updates (spread operator)
- Real-world patterns (React, Redux, API, DB queries)

### 05.03_pattern_matching.js
Pattern matching idiomatici:
- Pattern matching con switch
- Guard clauses (early return pattern)
- Type checking patterns (typeof, Array.isArray)
- Option/Maybe pattern ({ exists, value })
- Result pattern ({ success, value, error })
- Lista pattern (head-tail recursion)
- Builder pattern con destructuring
- State machine pattern (dispatch actions)
- Visitor pattern (AST traversal)
- Command pattern (CREATE/UPDATE/DELETE/READ)
- Casi pratici (router, validation, API transform)

## Come usare gli esempi

```bash
node 05.01_destructuring_base.js
node 05.02_destructuring_avanzato.js
node 05.03_pattern_matching.js
```

## Concetti chiave

### Array Destructuring
```javascript
// Base
let [a, b, c] = [1, 2, 3];

// Skip elementi
let [first, , third] = [1, 2, 3];

// Rest operator
let [head, ...tail] = [1, 2, 3, 4];  // tail = [2,3,4]

// Default
let [x = 10, y = 20] = [5];  // x=5, y=20

// Swap
[a, b] = [b, a];

// In funzioni
function sum([a, b]) { return a + b; }
```

### Object Destructuring
```javascript
// Base
let { name, age } = { name: "Mario", age: 30 };

// Rename
let { name: fullName } = obj;

// Default
let { status = "active" } = obj;

// Rest
let { id, ...rest } = obj;

// Nested
let { user: { address: { city } } } = data;

// In funzioni
function greet({ name, age = 18 }) { }
```

### Pattern Matching
```javascript
// Switch pattern
function handle(msg) {
  let { type, payload } = msg;
  switch (type) {
    case "TEXT": {
      let { text, sender } = payload;
      return `${sender}: ${text}`;
    }
    case "IMAGE": {
      let { url } = payload;
      return `<img src="${url}">`;
    }
  }
}

// Guard clauses
function process(data) {
  if (!data) return null;  // Early return
  if (!data.valid) return null;
  // ... processo principale
}

// Option pattern
function findUser(id) {
  return {
    exists: id in users,
    value: users[id] || null
  };
}

// Result pattern
function divide(a, b) {
  if (b === 0) {
    return { success: false, error: "Div by zero" };
  }
  return { success: true, value: a / b };
}
```

## Pattern comuni

### Head-Tail (Liste)
```javascript
// Functional list processing
function sum(list) {
  if (list.length === 0) return 0;
  let [head, ...tail] = list;
  return head + sum(tail);
}

// First N elements
let [first, second, ...rest] = array;
```

### Option/Maybe
```javascript
// JavaScript non ha Option/Maybe nativo, ma possiamo simularlo
function safeDivide(a, b) {
  if (b === 0) {
    return { isSome: false, value: null };
  }
  return { isSome: true, value: a / b };
}

function process(result) {
  let { isSome, value } = result;
  if (isSome) {
    console.log("Value:", value);
  } else {
    console.log("No value");
  }
}
```

### Success/Error
```javascript
// Result pattern
function fetchData(url) {
  try {
    let data = fetch(url);
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

function handle(result) {
  let { success, data, error } = result;
  if (success) {
    console.log("Data:", data);
  } else {
    console.log("Error:", error);
  }
}
```

### Guard Clauses
```javascript
// Invece di nested if
function badProcess(data) {
  if (data) {
    if (data.valid) {
      if (data.items.length > 0) {
        // logica principale
      }
    }
  }
}

// Usa guard clauses (early return)
function goodProcess(data) {
  if (!data) return null;
  if (!data.valid) return null;
  if (data.items.length === 0) return null;
  
  // logica principale chiara
  return processItems(data.items);
}
```

### Immutable Updates
```javascript
// Update oggetto
let updated = { ...obj, name: "New" };

// Update nested
let { settings, ...rest } = user;
let updated = {
  ...rest,
  settings: { ...settings, theme: "dark" }
};

// Update array
let updated = array.map((item, i) =>
  i === index ? { ...item, status: "done" } : item
);

// Rimuovi proprietà
let { password, ...public } = user;
```

## Quando usare cosa

### ✓ Usa DESTRUCTURING per:
- Estrarre valori da oggetti/array
- Parametri funzione (auto-documentazione)
- Swap variables
- Return multipli
- Props in componenti
- **Esempio**: `let { id, name } = user`

### ✓ Usa GUARD CLAUSES per:
- Validazione input
- Early return
- Evitare nested if
- Rendere il codice lineare
- **Esempio**: `if (!valid) return null;`

### ✓ Usa PATTERN MATCHING per:
- Gestione eventi (type + payload)
- State machines
- Routing
- Command pattern
- **Esempio**: `switch(type) { case "X": ... }`

### ✓ Usa OPTION/RESULT per:
- Operazioni che possono fallire
- Evitare eccezioni per flow control
- API responses
- Validazioni
- **Esempio**: `{ success, value, error }`

## Vantaggi e svantaggi

### ✓ Vantaggi Destructuring
```javascript
// 1. Più conciso
let { name, age } = user;
// vs
let name = user.name;
let age = user.age;

// 2. Auto-documentazione
function greet({ name, age }) { }  // Chiaro cosa serve
// vs
function greet(user) { }  // Cosa contiene user?

// 3. Default values
function create({ name = "Guest", age = 18 } = {}) { }

// 4. Swap facile
[a, b] = [b, a];
// vs
let temp = a; a = b; b = temp;

// 5. Estrazione parziale
let { id, ...rest } = obj;
```

### ✗ Svantaggi / Attenzioni
```javascript
// 1. Può essere illeggibile se troppo annidato
let { a: { b: { c: { d } } } } = obj;  // Difficile

// 2. Errore se proprietà non esiste in nested
let { user: { name } } = {};  // ❌ TypeError
let { user: { name } = {} } = {};  // ✓ OK con default

// 3. Nome variabili deve matchare (oggetti)
let { name } = obj;  // Deve essere obj.name
let { name: userName } = obj;  // Rename necessario

// 4. null non usa default
let [x = 10] = [null];  // x = null (non 10!)
let [x = 10] = [undefined];  // x = 10 ✓
```

## Best practices

### ✓ Usa default per sicurezza
```javascript
// Oggetto potenzialmente null
function process({ data = {}, settings = {} } = {}) {
  // Sicuro anche se chiamato senza parametri
}

// Nested con default
let { user: { name } = {} } = data;
```

### ✓ Guard clauses per validazione
```javascript
function calculateTotal(items) {
  // Valida all'inizio
  if (!items || items.length === 0) return 0;
  if (!Array.isArray(items)) return 0;
  
  // Logica principale chiara
  return items.reduce((sum, item) => sum + item.price, 0);
}
```

### ✓ Rename per chiarezza
```javascript
// API response con nomi brutti
let {
  user_name: userName,
  user_age: userAge,
  created_at: createdAt
} = apiResponse;
```

### ✓ Rest per flessibilità
```javascript
// Estrai alcuni, mantieni altri
function updateUser(user, { name, email, ...settings }) {
  return {
    ...user,
    name,
    email,
    settings: { ...user.settings, ...settings }
  };
}
```

### ✓ Pattern matching per complessità
```javascript
// Invece di if-else multipli
function handle(event) {
  let { type, payload } = event;
  
  let handlers = {
    CLICK: ({ x, y }) => console.log(`Click at ${x}, ${y}`),
    KEYPRESS: ({ key }) => console.log(`Key: ${key}`),
    SCROLL: ({ delta }) => console.log(`Scroll: ${delta}`)
  };
  
  handlers[type]?.(payload);
}
```

## Trappole comuni

```javascript
// ❌ Nested destructuring su null
let { user: { name } } = { user: null };  // TypeError!

// ✓ Usa default
let { user: { name } = {} } = { user: null };  // undefined

// ❌ null non è undefined (default non usato)
let [x = 10] = [null];  // x = null

// ✓ Controlla esplicitamente
let val = maybeNull ?? 10;

// ❌ Troppo annidato (illeggibile)
let { a: { b: { c: { d: { e } } } } } = obj;

// ✓ Split in step
let { a: { b } } = obj;
let { c: { d } } = b;

// ❌ Destructuring in assegnamenti (confusione)
let x;
({ x } = obj);  // ✓ Serve parentesi!
{x} = obj;  // ❌ Errore di sintassi

// ✓ Usa in dichiarazione
let { x } = obj;  // Chiaro
```

## Pattern avanzati

### State Machine
```javascript
function createMachine(initial) {
  let state = initial;
  
  return {
    dispatch({ type, payload = {} }) {
      switch (type) {
        case "START":
          state = "RUNNING";
          break;
        case "STOP":
          state = "IDLE";
          break;
      }
      return state;
    }
  };
}
```

### Visitor Pattern
```javascript
function visit(node, visitor) {
  let { type, ...props } = node;
  return visitor[type]?.(props) ?? "Unknown";
}

let visitor = {
  number: ({ value }) => `Num(${value})`,
  string: ({ value }) => `Str("${value}")`
};
```

### Command Pattern
```javascript
let commands = {
  CREATE: ({ name, data }, ctx) => ({ ...ctx, [name]: data }),
  UPDATE: ({ name, data }, ctx) => ({
    ...ctx,
    [name]: { ...ctx[name], ...data }
  }),
  DELETE: ({ name }, ctx) => {
    let { [name]: _, ...rest } = ctx;
    return rest;
  }
};

function execute(command, context) {
  let { type, params } = command;
  return commands[type]?.(params, context) ?? context;
}
```

## Compatibilità

- **Destructuring**: ES6 (ES2015) - tutti i browser moderni
- **Rest/Spread**: ES6 (ES2015) - tutti i browser moderni
- **Nested patterns**: ES6 (ES2015) - tutti i browser moderni
- **Default values**: ES6 (ES2015) - tutti i browser moderni

Per browser vecchi: usa transpiler (Babel).

## Risorse

- [MDN - Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [MDN - Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [MDN - Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

## Note importanti

1. **Destructuring** rende il codice più espressivo e leggibile
2. **Default values** prevengono errori con valori mancanti
3. **Rest operator** cattura elementi rimanenti
4. **Guard clauses** rendono il codice lineare (no nested if)
5. **Pattern matching** gestisce complessità in modo dichiarativo
6. **Null ≠ undefined**: solo undefined usa default
7. **Nested destructuring**: usa default `= {}` per sicurezza
8. **Rename** con `:` per nomi migliori
9. **Immutabilità**: usa spread per update non-mutativi
10. **Leggibilità** > concisione: non annidare troppo

---
**Torna a:** [04_Strutture_Condizionali](../../) | [Corso JavaScript](../../../../)
