# Guida 02: Parametri e Valori di Ritorno

Esempi completi su come gestire parametri e valori di ritorno nelle funzioni JavaScript.

## 📚 File Disponibili

### **02.01_parametri_base.js**
Tutto sui parametri delle funzioni: base, default, rest, arguments.

**Concetti trattati:**
- Parametri vs Argomenti (definizione vs valori passati)
- Parametri base (nessuno, uno, multipli)
- Parametri default ES6 (`param = valore`)
- Rest parameters (`...args`) per numero variabile
- Oggetto `arguments` (legacy, array-like)
- Destructuring parametri (array e oggetti)
- Spread operator negli argomenti
- Validazione parametri
- Pattern avanzati (options object, named parameters)

**Esegui:**
```bash
node 02.01_parametri_base.js
```

---

### **02.02_valori_ritorno.js**
Gestione completa dei valori di ritorno.

**Concetti trattati:**
- Return di valori primitivi (number, string, boolean, null, undefined)
- Return di oggetti (semplici, con metodi, complessi)
- Return di array (semplici, filtrati, trasformati, tuple)
- Early return pattern (guard clauses, validazione)
- Return di funzioni (factory, currying, higher-order)
- Return multipli simulati (oggetti, array, destructuring)
- Result objects pattern (success/error)
- Method chaining (return this)
- Async return (callback, Promise)
- Best practices

**Esegui:**
```bash
node 02.02_valori_ritorno.js
```

---

### **02.03_tecniche_avanzate.js**
Pattern avanzati per parametri e ritorno di livello professionale.

**Concetti trattati:**
- Higher-order functions (funzioni che accettano/restituiscono funzioni)
- Currying e partial application
- Callback patterns (error-first, options, chaining)
- Memoization (cache risultati per performance)
- Function composition (compose, pipe)
- Decorator pattern (logging, timing)
- Variadic functions (numero variabile argomenti)
- Fluent interfaces (builder pattern, method chaining)
- Optional parameters patterns
- Advanced return patterns (Maybe/Option, Result/Either)

**Esegui:**
```bash
node 02.03_tecniche_avanzate.js
```

---

## 🎯 Confronto Rapido

### Parametri

| Tipo | Sintassi | Quando Usare |
|------|----------|-------------|
| **Base** | `function f(a, b)` | Numero fisso di parametri |
| **Default** | `function f(a = 10)` | Valori opzionali con default |
| **Rest** | `function f(...args)` | Numero variabile |
| **Destructuring** | `function f({ x, y })` | Molti parametri correlati |
| **Options** | `function f(opts = {})` | Configurazione flessibile |

### Return

| Pattern | Esempio | Quando Usare |
|---------|---------|-------------|
| **Primitivo** | `return 42` | Singolo valore semplice |
| **Oggetto** | `return { x, y }` | Dati strutturati |
| **Array** | `return [a, b]` | Lista/tuple |
| **Funzione** | `return () => {}` | Factory/HOF |
| **Result** | `return { success, data }` | Gestione errori |

---

## 🔍 Trappole Comuni

### 1. **arguments non è un array**
```javascript
// ❌ Non funziona
function sum() {
  return arguments.reduce((a, b) => a + b);  // Error!
}

// ✅ Converti in array
function sum() {
  return Array.from(arguments).reduce((a, b) => a + b);
}

// ✅ Meglio: usa rest
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
```

### 2. **Default con valori falsy**
```javascript
// ❌ Problema
function greet(name = "Guest") {
  // Se name è "" (stringa vuota), usa "" non "Guest"!
}

// ✅ Se vuoi trattare "" come mancante
function greet(name) {
  name = name || "Guest";  // Usa || per valori falsy
}
```

### 3. **Modifica parametri oggetto/array**
```javascript
// ❌ Modifica l'originale
function addItem(arr, item) {
  arr.push(item);  // Muta l'array originale!
  return arr;
}

// ✅ Crea copia
function addItem(arr, item) {
  return [...arr, item];  // Nuovo array
}
```

### 4. **Return implicito undefined**
```javascript
// ❌ Restituisce undefined
function double(n) {
  n * 2;  // Manca return!
}

// ✅ Esplicito
function double(n) {
  return n * 2;
}
```

---

## 💡 Best Practices

### ✅ DO

```javascript
// Parametri: max 3-4, altrimenti usa oggetto
function createUser({ name, email, role = "user" }) { ... }

// Default values per parametri opzionali
function log(msg, level = "INFO") { ... }

// Rest per numero variabile
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

// Early return per validazione
function divide(a, b) {
  if (b === 0) return null;
  return a / b;
}

// Return consistente (sempre stesso tipo)
function getUser(id) {
  if (!id) return null;
  return { id, name: "..." };  // Sempre null o oggetto
}

// Destructuring per "return multipli"
function getStats(arr) {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
    avg: arr.reduce((a,b) => a+b) / arr.length
  };
}

const { min, max, avg } = getStats([1,2,3,4,5]);
```

### ❌ DON'T

```javascript
// Troppi parametri
function createUser(name, email, age, city, country, phone, address) { ... }  // ❌

// Modifica parametri
function addTax(price) {
  price = price * 1.2;  // ❌ Modifica parametro
  return price;
}

// Return inconsistente
function find(arr, val) {
  for (let item of arr) {
    if (item === val) return item;  // Oggetto
  }
  return false;  // ❌ Boolean invece di null/undefined
}

// Mancanza validazione
function divide(a, b) {
  return a / b;  // ❌ Nessun check su b===0
}
```

---

## 🚀 Pattern Comuni

### Function Factory
```javascript
function createMultiplier(factor) {
  return function(n) {
    return n * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15
```

### Options Object
```javascript
function makeRequest(url, options = {}) {
  const config = {
    method: 'GET',
    headers: {},
    timeout: 5000,
    ...options
  };
  
  // Use config...
}

makeRequest('/api/data', { method: 'POST', timeout: 10000 });
```

### Result Object
```javascript
function validateEmail(email) {
  if (!email) {
    return { valid: false, error: "Email required" };
  }
  if (!email.includes("@")) {
    return { valid: false, error: "Invalid format" };
  }
  return { valid: true, email: email.toLowerCase() };
}

const result = validateEmail("test@example.com");
if (result.valid) {
  console.log("Email:", result.email);
} else {
  console.log("Error:", result.error);
}
```

### Currying
```javascript
const add = a => b => c => a + b + c;

console.log(add(1)(2)(3));  // 6

const add5 = add(5);
const add5and10 = add5(10);
console.log(add5and10(3));  // 18
```

### Composition
```javascript
const compose = (...fns) => x => 
  fns.reduceRight((acc, fn) => fn(acc), x);

const double = x => x * 2;
const increment = x => x + 1;
const square = x => x * x;

const process = compose(square, increment, double);
console.log(process(5));  // ((5*2)+1)^2 = 121
```

---

## 📖 Quando Usare Cosa

### Parametri

**Default Parameters**: Valori opzionali semplici
```javascript
function greet(name = "Guest") { ... }
```

**Rest Parameters**: Numero variabile di argomenti
```javascript
function sum(...numbers) { ... }
```

**Destructuring**: Molti parametri correlati
```javascript
function createUser({ name, email, age }) { ... }
```

**Options Object**: Configurazione complessa
```javascript
function fetch(url, { method, headers, timeout } = {}) { ... }
```

### Return

**Primitivo**: Singolo valore semplice
```javascript
function sum(a, b) { return a + b; }
```

**Oggetto**: Dati strutturati o "multipli valori"
```javascript
function getStats(arr) { return { min, max, avg }; }
```

**null/undefined**: Nessun valore disponibile
```javascript
function find(arr, val) { 
  const found = arr.find(item => item === val);
  return found || null;
}
```

**Result Object**: Operazioni che possono fallire
```javascript
function divide(a, b) {
  if (b === 0) return { success: false, error: "Div by zero" };
  return { success: true, value: a / b };
}
```

**Funzione**: Factory o higher-order functions
```javascript
function createValidator(type) {
  return value => validate(value, type);
}
```

---

## 🎓 Esercizi Suggeriti

1. **Crea** una funzione con rest parameters che calcola la media
2. **Implementa** una funzione factory che crea validatori
3. **Scrivi** una funzione con options object per configurazione server
4. **Usa** destructuring per estrarre proprietà da oggetto parametro
5. **Crea** funzione curried per calcoli matematici
6. **Implementa** result object pattern per operazioni che possono fallire
7. **Scrivi** composition function che combina trasformazioni
8. **Usa** memoization per ottimizzare funzione ricorsiva

---

## 📚 Risorse Aggiuntive

- File teoria: `../02_Parametri_Valori_Ritorno.md`
- MDN Parameters: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_parameters
- MDN Return: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
- MDN Rest Parameters: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
- MDN Destructuring: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

---

*Ultimo aggiornamento: 2024*
*Repository: TPSIT2-Javascript-by-example*
