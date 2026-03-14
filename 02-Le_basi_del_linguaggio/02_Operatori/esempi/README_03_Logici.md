# Operatori Logici - Esempi

Esempi pratici per comprendere gli operatori logici in JavaScript: &&, ||, !, ??, valori truthy/falsy.

## File degli esempi

### 03.01_and_or.js
Operatori AND (&&) e OR (||):
- Tabelle di verità per AND e OR
- Condizioni multiple e alternative
- Valori truthy e falsy
- Short-circuit evaluation (corto circuito)
- AND restituisce ultimo valore valutato
- OR restituisce primo valore truthy
- Pattern comuni (default, guard conditions)
- Combinazioni complesse e precedenza
- Best practices per controllo flusso

### 03.02_not.js
Operatore NOT (!):
- Negazione logica e inversione
- NOT con valori non-boolean
- Doppia negazione (!!) per conversione
- NOT in condizioni e confronti
- NOT multipli e precedenza
- Leggi di De Morgan
- Pattern comuni con NOT
- Trappole comuni (0, '', [], {})
- Best practices per negazioni

### 03.03_nullish_coalescing.js
Nullish Coalescing Operator (??):
- Sintassi base di ??
- Differenza tra ?? e ||
- Casi d'uso pratici (0, false, '' validi)
- Chain di ??
- ?? con oggetti e proprietà opzionali
- Combinazione con optional chaining (?.)
- Limitazioni e precedenza
- Nullish assignment (??=)
- Confronto ||, ??, default parameter
- Best practices per valori di default

### 03.04_truthy_falsy.js
Valori Truthy e Falsy:
- Lista completa degli 8 valori falsy
- Valori truthy comuni
- Trappole comuni ([], {}, '0', ' ')
- Conversione implicita in contesti booleani
- Tabella completa di conversione
- Check espliciti vs impliciti
- Array e oggetti vuoti
- Funzioni per conversione esplicita
- Best practices per validazione

## Come usare gli esempi

### Eseguire un singolo esempio
```bash
node 03.01_and_or.js
node 03.02_not.js
node 03.03_nullish_coalescing.js
node 03.04_truthy_falsy.js
```

### Eseguire tutti gli esempi
```bash
for file in 03.*.js; do
  echo "=== $file ==="
  node "$file"
  echo ""
done
```

## Concetti chiave

### AND (&&) - Entrambi devono essere veri
```javascript
true && true    // true
true && false   // false
false && true   // false

// Restituisce primo falsy o ultimo valore
5 && 10         // 10
0 && 10         // 0
null && 'ok'    // null
```

### OR (||) - Almeno uno deve essere vero
```javascript
true || false   // true
false || true   // true
false || false  // false

// Restituisce primo truthy o ultimo valore
5 || 10         // 5
0 || 10         // 10
null || 'ok'    // 'ok'
```

### NOT (!) - Inversione
```javascript
!true           // false
!false          // true
!0              // true (0 è falsy)
!''             // true ('' è falsy)

// Doppia negazione per conversione
!!1             // true
!!0             // false
!![]            // true (array è truthy!)
```

### Nullish Coalescing (??) - Solo null/undefined
```javascript
// ?? considera solo null/undefined come "mancanti"
0 ?? 100        // 0 (non è nullish!)
'' ?? 'default' // '' (non è nullish!)
false ?? true   // false (non è nullish!)
null ?? 'default'      // 'default'
undefined ?? 'default' // 'default'

// Differenza con ||
0 || 100        // 100 (0 è falsy)
0 ?? 100        // 0 (non è nullish)
```

### Gli 8 valori Falsy
```javascript
false       // boolean false
0           // zero
-0          // zero negativo
0n          // BigInt zero
''          // stringa vuota
null        // null
undefined   // undefined
NaN         // Not a Number

// TUTTI gli altri valori sono truthy!
// Inclusi [], {}, '0', ' ', function(){}
```

## Esperimenti suggeriti

1. **Short-circuit evaluation**
   - Prova a modificare variabili in AND/OR
   - Osserva quando l'espressione si ferma
   - Sperimenta con side effects

2. **Truthy/Falsy**
   - Testa [] e {} in condizioni if
   - Confronta '0' == false vs Boolean('0')
   - Prova new Boolean(false)

3. **?? vs ||**
   - Crea funzione setVolume con 0 valido
   - Testa con 0, null, undefined, ''
   - Confronta comportamento

## Trappole comuni

```javascript
// ❌ ERRORI COMUNI

// 1. Array/oggetti vuoti sono truthy!
if ([]) { }  // Esegue! [] è truthy
if ({}) { }  // Esegue! {} è truthy

// ✓ Check corretto
if (arr.length > 0) { }
if (Object.keys(obj).length > 0) { }

// 2. || con 0, false, '' validi
function setVolume(level) {
  return level || 50;  // BUG se level = 0!
}

// ✓ Usa ??
function setVolume(level) {
  return level ?? 50;  // 0 è valido
}

// 3. Stringhe '0' e 'false' sono truthy
if ('0') { }       // Esegue!
if ('false') { }   // Esegue!

// ✓ Converti esplicitamente
if (Number('0')) { }      // Non esegue
if (value === 'false') { } // Check esplicito

// 4. && ha precedenza su ||
true || false && false  // true (not false)
// Letto come: true || (false && false)

// 5. NOT con side effects
if (!x++) { }  // x viene incrementato!
```

## Best practices

### ✓ Short-circuit per performance
```javascript
// Valuta secondo operando solo se necessario
isLoggedIn && fetchUserData();  // Fetch solo se logged in
cache || fetchFromAPI();        // Usa cache se disponibile
```

### ✓ ?? per valori 0, false, '' validi
```javascript
// ✓ Volume può essere 0
const volume = settings.volume ?? 50;

// ✓ Flag può essere false
const enabled = config.enabled ?? true;

// ✓ Stringa vuota valida
const name = user.name ?? "Anonymous";
```

### ✓ Combina ?. e ??
```javascript
// ✓ Accesso sicuro + default
const email = user?.contact?.email ?? "no-email";
const count = data?.items?.length ?? 0;
```

### ✓ ??= per inizializzazione lazy
```javascript
// Assegna solo se null/undefined
config.timeout ??= 5000;
cache.data ??= fetchData();
```

### ✓ Usa parentesi per chiarezza
```javascript
// ⚠️  Confuso
if (a && b || c && d) { }

// ✓ Chiaro
if ((a && b) || (c && d)) { }
```

### ✓ Evita side effects in condizioni
```javascript
// ✗ Sbagliato
if (x++ > 5 || y++ < 10) { }

// ✓ Corretto
x++;
y++;
if (x > 5 || y < 10) { }
```

### ✓ Check espliciti quando il tipo conta
```javascript
// ⚠️  Implicito (cattura 0, '', false, null, undefined)
if (value) { }

// ✓ Esplicito
if (value !== null && value !== undefined) { }
if (typeof value === 'string' && value.length > 0) { }
if (typeof value === 'number' && !isNaN(value)) { }
```

## Pattern comuni

### Guard conditions con &&
```javascript
// Esecuzione condizionale
isLoggedIn && loadDashboard();
user && user.profile && console.log(user.profile.name);

// Moderno con ?.
user?.profile?.name && console.log(user.profile.name);
```

### Default values con || o ??
```javascript
// Con || (tutti i falsy usano default)
const name = input || "Guest";

// Con ?? (solo null/undefined usano default)
const volume = level ?? 50;
```

### Toggle boolean con !
```javascript
isVisible = !isVisible;  // Inverte stato
```

### Validazione con !
```javascript
function isEmpty(value) {
  return !value || !value.length;
}
```

## Risorse

- [MDN - Operatori logici](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#logical_operators)
- [MDN - Nullish coalescing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [JavaScript.info - Logical operators](https://javascript.info/logical-operators)
- [MDN - Truthy/Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)

## Note importanti

1. **AND (&&) ha precedenza su OR (||)**
2. **Solo 8 valori sono falsy**, tutto il resto è truthy
3. **[] e {} sono TRUTHY** anche se vuoti
4. **'0' e 'false' (stringhe) sono TRUTHY**
5. **Short-circuit**: && si ferma al primo falsy, || al primo truthy
6. **?? considera solo null/undefined** come nullish
7. **|| considera tutti i falsy** (0, false, '', null, undefined, NaN)
8. **??= assegna solo se null/undefined**
9. **!! converte a boolean** (equivale a Boolean())
10. **Usa parentesi** per rendere chiara la precedenza

---
**Torna a:** [03_Operatori](../../) | [Corso JavaScript](../../../../)
