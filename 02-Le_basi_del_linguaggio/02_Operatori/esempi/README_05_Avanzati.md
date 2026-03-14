# Operatori Avanzati - Esempi

Esempi pratici per comprendere gli operatori avanzati in JavaScript: ternario, spread/rest, optional chaining, typeof, instanceof.

## File degli esempi

### 05.01_ternario.js
Operatore ternario (? :):
- Sintassi base del ternario
- Confronto con if-else
- Ternario con espressioni
- Ternario annidato
- Ternario in return e template literals
- Side effects con ternario
- Valori di default
- Casi d'uso pratici (formattazione, CSS classes, validazione)
- Best practices per leggibilità

### 05.02_spread_rest.js
Spread e Rest operators (...):
- Spread operator con array
- Spread operator con oggetti
- Rest operator in funzioni
- Rest operator in destructuring
- Spread per convertire iterabili
- Spread per clonare e modificare
- Combinazioni avanzate
- Spread vs altri metodi
- Casi d'uso pratici (immutabilità, merge, variadic functions)
- Best practices per spread/rest

### 05.03_optional_chaining.js
Optional Chaining (?.) - ES2020:
- Problema senza optional chaining
- Sintassi base di ?.
- Optional chaining con array
- Optional chaining con funzioni
- Combinazioni con nullish coalescing
- Optional chaining con delete
- Casi limite e comportamento
- Limitazioni (non in assegnazione)
- Casi d'uso pratici (API, DOM, callbacks)
- Best practices per accesso sicuro

### 05.04_typeof_instanceof.js
typeof, instanceof e altri operatori:
- Operatore typeof per tipi primitivi
- typeof per validazione
- Operatore instanceof per oggetti
- typeof vs instanceof
- Operatore in per proprietà
- Operatore delete per rimozione
- Operatore void per undefined
- Check di tipo robusti
- Casi d'uso pratici (type guards, validazione, feature detection)
- Best practices per type checking

## Come usare gli esempi

### Eseguire un singolo esempio
```bash
node 05.01_ternario.js
node 05.02_spread_rest.js
node 05.03_optional_chaining.js
node 05.04_typeof_instanceof.js
```

### Eseguire tutti gli esempi
```bash
for file in 05.*.js; do
  echo "=== $file ==="
  node "$file"
  echo ""
done
```

## Concetti chiave

### Operatore Ternario
```javascript
// Sintassi: condizione ? seTrue : seFalse
let status = age >= 18 ? "Adulto" : "Minorenne";

// Annidato
let grade = 
  score >= 90 ? 'A' :
  score >= 80 ? 'B' :
  score >= 70 ? 'C' : 'F';

// In template literals
console.log(`Hai ${count} ${count === 1 ? 'file' : 'files'}`);
```

### Spread Operator (...)
```javascript
// Array
let combined = [...arr1, ...arr2];
let copy = [...original];

// Oggetti
let merged = {...obj1, ...obj2};
let updated = {...obj, prop: newValue};

// Funzioni
Math.max(...numbers);
[...string];  // String to array
[...set];     // Set to array
```

### Rest Operator (...)
```javascript
// Parametri
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

// Destructuring array
let [first, ...rest] = [1, 2, 3, 4];

// Destructuring oggetti
let {name, ...otherInfo} = user;
```

### Optional Chaining (?.)
```javascript
// Proprietà
obj?.prop
obj?.prop?.nested

// Array
arr?.[0]
arr?.[index]?.prop

// Funzioni
obj.method?.()
callback?.()

// Con ??
let value = obj?.prop?.nested ?? defaultValue;
```

### typeof e instanceof
```javascript
// typeof - restituisce stringa
typeof 42              // "number"
typeof "hello"         // "string"
typeof true            // "boolean"
typeof undefined       // "undefined"
typeof function(){}    // "function"
typeof {}              // "object"
typeof []              // "object" (⚠️)
typeof null            // "object" (⚠️ bug!)

// instanceof - verifica prototipo
[] instanceof Array           // true
new Date() instanceof Date    // true
obj instanceof MyClass        // true
```

## Esperimenti suggeriti

1. **Ternario**
   - Annida 3-4 livelli e vedi la leggibilità
   - Confronta con if-else per velocità
   - Usa in array/oggetti condizionali

2. **Spread/Rest**
   - Clona oggetti annidati (shallow vs deep)
   - Crea funzioni variadic
   - Merge array/oggetti multipli

3. **Optional Chaining**
   - Combina con ?? per default
   - Testa con callback opzionali
   - Prova accesso array annidati

4. **typeof/instanceof**
   - Crea type guard robusto
   - Testa instanceof con ereditarietà
   - Confronta 'in' vs hasOwnProperty

## Trappole comuni

```javascript
// ❌ ERRORI COMUNI

// 1. Ternario troppo annidato
a ? b : c ? d : e ? f : g  // ✗ Illeggibile

// 2. Spread è shallow copy
let copy = {...obj};
copy.nested.value = 1;  // Modifica anche obj!

// 3. Rest non ultimo
function fn(...rest, last) { }  // SyntaxError!

// 4. Optional chaining in assegnazione
obj?.prop = value;  // SyntaxError!

// 5. typeof con array e null
typeof [] === "object"    // true (⚠️)
typeof null === "object"  // true (⚠️)
Array.isArray([])         // ✓ Corretto

// 6. instanceof con primitivi
"hello" instanceof String  // false
42 instanceof Number       // false

// 7. delete con array
delete arr[1];  // Crea "hole", length non cambia
arr.splice(1, 1);  // ✓ Corretto

// 8. void confuso con operatore
void function(){}()  // IIFE
void(function(){})() // ✗ Non esegue!
```

## Best practices

### ✓ Ternario per assegnazioni semplici
```javascript
// ✓ Chiaro
let msg = isValid ? "OK" : "Error";

// ✗ Complesso, usa if-else
condition ? doThis() : doThat();
```

### ✓ Spread per immutabilità
```javascript
// ✓ Immutable update
const newState = {...state, count: state.count + 1};
const newArr = [...arr, newItem];

// ✗ Mutazione
state.count++;
arr.push(newItem);
```

### ✓ Optional chaining per dati esterni
```javascript
// ✓ API response
const email = response?.data?.user?.email ?? 'no-email';

// ✓ Callback opzionali
onSuccess?.('Done');

// ⚠️ Non su oggetti interni (nasconde bug)
this?.config?.value  // Se deve esistere, è un errore!
```

### ✓ typeof per primitivi, instanceof per oggetti
```javascript
// ✓ Primitivi
if (typeof value === "string") { }

// ✓ Array
if (Array.isArray(value)) { }

// ✓ Oggetti custom
if (value instanceof MyClass) { }

// ✓ null
if (value === null) { }
```

### ✓ Rest per parametri variabili
```javascript
// ✓ Moderno
function fn(...args) { }

// ✗ Vecchio
function fn() {
  let args = Array.from(arguments);
}
```

## Pattern comuni

### Immutable updates
```javascript
// Stato
const newState = {...state, prop: newValue};

// Array
const newArr = [...arr, item];
const filtered = arr.filter(x => x !== item);
```

### Default con ternario
```javascript
let displayName = user.name ? user.name : "Guest";
// Meglio: let displayName = user.name || "Guest";
// O: let displayName = user.name ?? "Guest";
```

### Merge condizionale
```javascript
const config = {
  ...baseConfig,
  ...(isDev ? {debug: true} : {})
};
```

### Safe navigation
```javascript
const value = obj?.nested?.prop ?? defaultValue;
callback?.();
arr?.[index]?.method?.();
```

### Type validation
```javascript
function validate(value) {
  if (typeof value !== "string") {
    throw new TypeError("Expected string");
  }
  // ...
}
```

## Risorse

- [MDN - Operatore condizionale](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
- [MDN - Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [MDN - Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [MDN - Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [MDN - typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
- [MDN - instanceof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)

## Note importanti

1. **Ternario**: max 2-3 livelli annidati per leggibilità
2. **Spread**: fa shallow copy (oggetti annidati condivisi)
3. **Rest**: deve essere ultimo parametro
4. **?. restituisce undefined** se null/undefined
5. **?. non funziona** in assegnazione o con new
6. **typeof null** è "object" (bug storico)
7. **typeof []** è "object" (usa Array.isArray)
8. **instanceof non funziona** con primitivi
9. **'in' include** proprietà ereditate
10. **delete** con array crea "holes", usa splice()

---
**Torna a:** [03_Operatori](../../) | [Corso JavaScript](../../../../)
