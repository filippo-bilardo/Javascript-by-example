# Valutazione Condizionale - Esempi Pratici

Esempi completi per comprendere gli operatori di valutazione condizionale moderni in JavaScript: short-circuit (&&, ||), nullish coalescing (??), e optional chaining (?.).

## File degli esempi

### 04.01_short_circuit.js
Short-circuit evaluation con AND e OR:
- OR (||) per primi valori truthy
- Default values con OR
- AND (&&) per primi valori falsy
- Esecuzione condizionale con AND
- Validazione con short-circuit
- Combinazioni OR e AND
- Truthy e falsy recap (6 falsy values)
- In funzioni (return, validazione)
- Pattern comuni (cache, config merge, logging)
- Casi pratici (form, API, permissions)

### 04.02_nullish_coalescing.js
Nullish coalescing (??) e nullish assignment (??=):
- Sintassi base (?? solo per null/undefined)
- OR vs NULLISH (differenze chiave)
- Preservazione 0, false, "" (vs OR)
- Con parametri funzione
- Configurazioni e oggetti
- Nullish assignment (??=)
- Catene di nullish
- Accesso proprietà sicuro
- In funzioni (memoization)
- Casi pratici (API, env variables, settings)

### 04.03_optional_chaining.js
Optional chaining (?.) per accesso sicuro:
- Sintassi base (obj?.prop)
- Proprietà annidate sicure
- Optional chaining + nullish coalescing
- Con array (arr?.[index])
- Con funzioni - optional call (func?.())
- Delete e assignment
- In espressioni complesse
- Con metodi e this
- Pattern comuni (API, DOM, config)
- Casi pratici (user profile, validation, cleanup)

## Come usare gli esempi

```bash
node 04.01_short_circuit.js
node 04.02_nullish_coalescing.js
node 04.03_optional_chaining.js
```

## Concetti chiave

### Short-Circuit Evaluation
```javascript
// OR (||) - primo truthy o ultimo valore
"" || "default"           // "default"
"value" || "default"      // "value"
0 || 10                   // 10 (⚠️ 0 è falsy!)

// AND (&&) - primo falsy o ultimo valore
true && "result"          // "result"
false && "never"          // false
"a" && "b" && "c"         // "c"

// Uso pratico
let name = username || "Guest";              // Default value
isLogged && console.log("Logged in");        // Conditional execution
```

### Nullish Coalescing (??)
```javascript
// ?? - solo null/undefined → valore destro
null ?? "default"         // "default"
undefined ?? "default"    // "default"
0 ?? "default"            // 0 (preservato!)
false ?? "default"        // false (preservato!)
"" ?? "default"           // "" (preservato!)

// vs OR
let qty1 = 0 || 10;       // 10 (✗ 0 perso)
let qty2 = 0 ?? 10;       // 0 (✓ preservato)

// Nullish assignment
config.port ??= 3000;     // Assegna solo se null/undefined
```

### Optional Chaining (?.)
```javascript
// ?. - accesso sicuro (undefined invece di error)
user?.name                // undefined se user è null
user?.address?.city       // undefined se qualsiasi parte è null
arr?.[0]                  // undefined se arr è null
func?.()                  // undefined se func è null

// Combinato con ??
let city = user?.address?.city ?? "Unknown";

// Con metodi
user?.getName?.()         // Chiamata sicura
element?.addEventListener?.("click", handler)
```

## Valori Falsy e Truthy

### 6 Valori FALSY
```javascript
false       // Boolean false
0           // Zero
""          // Stringa vuota
null        // Null
undefined   // Undefined
NaN         // Not a Number

// Tutti sono falsy
if (!value) { /* eseguito per tutti i falsy */ }
```

### Valori TRUTHY
```javascript
// Tutto il resto è truthy:
true        // Boolean true
1, -1, 0.5  // Numeri (eccetto 0)
"0"         // Stringa "0" (⚠️ non è 0)
"false"     // Stringa "false"
[]          // Array vuoto (⚠️)
{}          // Oggetto vuoto (⚠️)
function(){} // Funzioni

// Tutti sono truthy
if (value) { /* eseguito per tutti i truthy */ }
```

## Quando usare cosa

### ✓ Usa OR (||) per:
- Default values con stringhe (quando "" = invalid)
- Primi valori truthy in generale
- Concatenazioni di fallback
- **Attenzione**: converte 0, false, "" in falsy
- **Esempio**: `let name = input || "Guest"`

### ✓ Usa AND (&&) per:
- Esecuzione condizionale
- Validazione (tutti devono essere truthy)
- Primi valori falsy
- **Esempio**: `isLogged && showDashboard()`

### ✓ Usa NULLISH (??) per:
- Default values con numeri/boolean
- Preservare 0, false, "" come validi
- Solo null/undefined sono "mancanti"
- Configurazioni
- **Esempio**: `let count = input ?? 0`

### ✓ Usa OPTIONAL CHAINING (?.) per:
- Accesso proprietà annidate incerte
- API responses
- Oggetti da fonti esterne
- Chiamate metodi/funzioni opzionali
- **Esempio**: `user?.address?.city`

## Confronto operatori

| Operatore | Considera falsy | Restituisce | Uso principale |
|-----------|-----------------|-------------|----------------|
| `\|\|` (OR) | Tutti i 6 falsy | Primo truthy o ultimo | Default values (stringhe) |
| `&&` (AND) | Tutti i 6 falsy | Primo falsy o ultimo | Validazione, esecuzione condizionale |
| `??` (Nullish) | Solo null/undefined | Primo non-null o destro | Default values (numeri/boolean) |
| `?.` (Optional) | Solo null/undefined | undefined se null | Accesso sicuro proprietà |

## Pattern comuni

### Default Values
```javascript
// Con OR (stringhe)
let name = username || "Anonymous";

// Con NULLISH (numeri/boolean)
let count = input ?? 0;
let enabled = flag ?? true;

// Con ternario (esplicito)
let value = input !== undefined ? input : "default";
```

### Accesso Sicuro
```javascript
// Vecchio modo (&&)
let city = user && user.address && user.address.city;

// Nuovo modo (?.)
let city = user?.address?.city;

// Con default (?. + ??)
let city = user?.address?.city ?? "Unknown";
```

### Esecuzione Condizionale
```javascript
// Con AND
isValid && processData();

// Con if (più chiaro per side effects)
if (isValid) {
  processData();
}

// Callback opzionale
callback?.();
```

### Validazione
```javascript
// Tutti devono esistere
let isValid = name && email && age >= 18;

// Con optional chaining
let hasAddress = user?.address?.city && user?.address?.country;

// Nullish per controllare solo null/undefined
let hasValue = value ?? false;  // false se null/undefined
```

## Trappole comuni

```javascript
// ❌ OR con numeri (0 diventa falsy)
let qty = 0;
let result = qty || 10;  // 10 (✗ perde 0)

// ✓ NULLISH preserva 0
let result = qty ?? 10;  // 0 (✓)

// ❌ Array/oggetti vuoti sono truthy
let arr = [];
if (arr) {  // ✓ True (array vuoto è truthy!)
  console.log("Truthy");
}
if (arr.length) {  // ✗ False (length è 0)
  console.log("Has items");
}

// ❌ Stringhe "0" e "false" sono truthy
if ("0") {  // ✓ True
  console.log("Truthy");
}
if ("false") {  // ✓ True
  console.log("Truthy");
}

// ❌ Mixare ?? con && o ||
// let bad = a || b ?? c;  // Errore di sintassi!
let good = (a || b) ?? c;  // ✓ Usa parentesi

// ❌ Optional chaining in assegnamento
// obj?.prop = value;  // Errore!
if (obj) obj.prop = value;  // ✓
```

## Best practices

### ✓ Combina operatori appropriatamente
```javascript
// ?. + ?? per accesso sicuro con default
let city = user?.address?.city ?? "Unknown";

// && per validazione, poi ??
let discount = isValid && price > 100 ? 10 : 0;

// OR per fallback chain
let value = cache || computed || default;
```

### ✓ Scegli l'operatore giusto
```javascript
// OR per stringhe (quando "" = invalid)
let title = data.title || "Untitled";

// NULLISH per numeri (0 è valido)
let score = data.score ?? 0;

// OPTIONAL per oggetti incerti
let name = response?.data?.user?.name;
```

### ✓ Non nascondere bug
```javascript
// ✗ Troppo permissivo
let result = data?.a?.b?.c?.d?.e ?? "default";

// ✓ Valida input prima
if (!data || !data.a || !data.a.b) {
  throw new Error("Invalid data structure");
}
let result = data.a.b.c;
```

### ✓ Preferisci chiarezza
```javascript
// OK per casi semplici
let name = user?.name ?? "Guest";

// Meglio if per logica complessa
if (user && user.isActive && user.hasPermission) {
  grantAccess();
} else {
  denyAccess();
}
```

## Compatibilità

- **|| (OR)** e **&& (AND)**: ES1 (tutti i browser)
- **?? (Nullish)**: ES2020 (Chrome 80+, Firefox 72+, Safari 13.1+)
- **?. (Optional)**: ES2020 (Chrome 80+, Firefox 74+, Safari 13.1+)
- **??= (Nullish Assignment)**: ES2021 (Chrome 85+, Firefox 79+, Safari 14+)

Per browser vecchi: usa transpiler (Babel) o polyfill.

## Risorse

- [MDN - Logical OR (||)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [MDN - Logical AND (&&)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)
- [MDN - Nullish coalescing (??)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [MDN - Optional chaining (?.)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

## Note importanti

1. **6 valori falsy**: false, 0, "", null, undefined, NaN
2. **OR (||)**: primo truthy o ultimo valore
3. **AND (&&)**: primo falsy o ultimo valore
4. **?? considera solo**: null e undefined (non 0, false, "")
5. **?. restituisce**: undefined (non errore)
6. **Array/oggetti vuoti**: sono TRUTHY ([], {})
7. **Stringhe "0", "false"**: sono TRUTHY
8. **Combina ?? con ?.**: per accesso sicuro con default
9. **Non abusare**: null può indicare bug
10. **Usa transpiler**: per compatibilità browser vecchi

---
**Torna a:** [04_Strutture_Condizionali](../../) | [Corso JavaScript](../../../../)
