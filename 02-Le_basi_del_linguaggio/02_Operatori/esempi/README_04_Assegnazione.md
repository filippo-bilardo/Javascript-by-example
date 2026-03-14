# Operatori di Assegnazione - Esempi

Esempi pratici per comprendere gli operatori di assegnazione in JavaScript: =, +=, -=, destructuring, &&=, ||=, ??=.

## File degli esempi

### 04.01_assegnazione_base.js
Operatori di assegnazione base e composti:
- Assegnazione semplice (=)
- Assegnazione con addizione (+=)
- Assegnazione con sottrazione (-=)
- Assegnazione con moltiplicazione (*=)
- Assegnazione con divisione (/=)
- Assegnazione con modulo (%=)
- Assegnazione con esponente (**=)
- Confronto forme abbreviate vs estese
- Casi d'uso pratici (contatori, sconti, accumulo)
- Best practices per assegnazioni

### 04.02_destructuring.js
Destructuring assignment per array e oggetti:
- Destructuring di array base
- Rest operator (...) con array
- Valori di default in destructuring
- Destructuring di oggetti base
- Alias per rinominare proprietà
- Rest operator con oggetti
- Destructuring annidato
- Destructuring in parametri funzione
- Swap di variabili senza temp
- Casi d'uso pratici (return multipli, import, iterazioni)

### 04.03_logical_assignment.js
Operatori di assegnazione logica (ES2021):
- Logical AND assignment (&&=)
- Logical OR assignment (||=)
- Nullish coalescing assignment (??=)
- Confronto tra &&=, ||=, ??=
- Casi d'uso con ciascun operatore
- Combinazioni e precedenza
- Pattern comuni (memoization, lazy init, validazione)
- Best practices per assegnazioni condizionali

## Come usare gli esempi

### Eseguire un singolo esempio
```bash
node 04.01_assegnazione_base.js
node 04.02_destructuring.js
node 04.03_logical_assignment.js
```

### Eseguire tutti gli esempi
```bash
for file in 04.*.js; do
  echo "=== $file ==="
  node "$file"
  echo ""
done
```

## Concetti chiave

### Operatori composti
```javascript
// Forma estesa vs abbreviata
x = x + 5;    // ✗ Verbose
x += 5;       // ✓ Conciso

// Tutti gli operatori composti
x += 5;   // x = x + 5
x -= 3;   // x = x - 3
x *= 2;   // x = x * 2
x /= 4;   // x = x / 4
x %= 3;   // x = x % 3
x **= 2;  // x = x ** 2
```

### Destructuring di array
```javascript
// Estrazione per posizione
let [a, b, c] = [1, 2, 3];  // a=1, b=2, c=3

// Saltare elementi
let [first, , third] = [1, 2, 3];  // first=1, third=3

// Rest operator
let [head, ...tail] = [1, 2, 3, 4];  // head=1, tail=[2,3,4]

// Swap senza temp var
[x, y] = [y, x];
```

### Destructuring di oggetti
```javascript
// Estrazione per nome proprietà
let {name, age} = {name: "Alice", age: 25};

// Alias (rinominare)
let {name: userName} = {name: "Bob"};  // userName="Bob"

// Default
let {x = 10} = {};  // x=10

// Rest
let {a, ...rest} = {a: 1, b: 2, c: 3};  // rest={b:2, c:3}
```

### Logical assignment operators
```javascript
// &&= assegna solo se truthy
x &&= y;   // x && (x = y)
"Hello" &&= "World";  // "World"
0 &&= 100;            // 0 (non assegna)

// ||= assegna solo se falsy
x ||= y;   // x || (x = y)
"" ||= "Default";     // "Default"
"OK" ||= "Default";   // "OK" (non assegna)

// ??= assegna solo se null/undefined
x ??= y;   // x ?? (x = y)
0 ??= 100;             // 0 (non assegna!)
null ??= "Default";   // "Default"
```

## Esperimenti suggeriti

1. **Operatori composti**
   - Prova con diversi tipi (numeri, stringhe)
   - Sperimenta += con concatenazione
   - Testa divisione per zero con /=

2. **Destructuring**
   - Estrai da array annidati
   - Usa destructuring in forEach
   - Implementa swap di 3+ variabili

3. **Logical assignment**
   - Confronta ||= e ??= con 0
   - Testa &&= con oggetti
   - Crea inizializzazione lazy

## Trappole comuni

```javascript
// ❌ ERRORI COMUNI

// 1. Confondere = con ==
if (x = 5) { }  // Assegnazione! Non confronto
if (x === 5) { } // Corretto

// 2. += con stringhe vs numeri
let x = '5';
x += 2;  // '52' (concatena!)

let y = 5;
y += 2;  // 7 (somma)

// 3. Destructuring di undefined
let [a, b] = undefined;  // TypeError!
let {x, y} = null;       // TypeError!

// 4. Default solo con undefined
let [a = 10] = [null];   // a = null (non usa default!)
let [b = 10] = [];       // b = 10 (undefined usa default)

// 5. ||= con 0, false, '' validi
let volume = 0;
volume ||= 50;  // 50 (BUG! 0 è falsy)
volume ??= 50;  // 0 (CORRETTO! 0 non è nullish)

// 6. Rest non in ultima posizione
let [a, ...rest, b] = [1,2,3,4];  // SyntaxError!
```

## Best practices

### ✓ Usa forme abbreviate
```javascript
// ✓ Chiaro e conciso
count += 1;
total *= 2;
text += " suffix";

// ✗ Verbose
count = count + 1;
total = total * 2;
text = text + " suffix";
```

### ✓ Destructuring per parametri
```javascript
// ✓ Esplicito cosa serve
function greet({name, age = 18}) {
  return `${name}, ${age} anni`;
}

// ✗ Parametro generico
function greet(user) {
  return `${user.name}, ${user.age || 18} anni`;
}
```

### ✓ Destructuring per return multipli
```javascript
// ✓ Chiaro
function getCoords() {
  return [x, y];
}
let [x, y] = getCoords();

// ✗ Array indices
let coords = getCoords();
let x = coords[0];
let y = coords[1];
```

### ✓ ??= per valori 0, false, '' validi
```javascript
// ✓ 0 è valido
config.port ??= 8080;
config.timeout ??= 5000;

// ✗ 0 diventa default
config.port ||= 8080;  // BUG se port = 0
```

### ✓ &&= per update condizionale
```javascript
// ✓ Aggiorna solo se esiste
user.premium &&= upgradePlan();

// Equivale a (ma più breve):
if (user.premium) {
  user.premium = upgradePlan();
}
```

### ✓ Rest per rimanenti proprietà
```javascript
// ✓ Separa proprietà specifiche
const {id, type, ...data} = payload;
processId(id);
handleData(data);
```

## Pattern comuni

### Swap senza variabile temporanea
```javascript
[a, b] = [b, a];  // Swap
[x, y, z] = [z, x, y];  // Rotazione
```

### Default con destructuring
```javascript
function config({
  port = 8080,
  host = "localhost",
  debug = false
} = {}) {
  // ...
}
```

### Estrazione selettiva
```javascript
// Solo proprietà necessarie
const {name, email} = user;

// Solo elementi necessari
const [first, second] = longArray;
```

### Lazy initialization
```javascript
cache.data ??= loadData();
settings.theme ??= getDefaultTheme();
```

### Accumulo condizionale
```javascript
// Somma se esistente
total &&= total + value;

// Default se mancante
result ||= defaultValue;
```

## Risorse

- [MDN - Operatori di assegnazione](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators)
- [MDN - Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [MDN - Logical assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#logical_assignment)
- [JavaScript.info - Destructuring](https://javascript.info/destructuring-assignment)

## Note importanti

1. **x += y** equivale a **x = x + y**
2. **+= con stringhe concatena**, non somma
3. **Destructuring array** usa posizione, **oggetti** usa nome
4. **Default solo con undefined**, non null
5. **...rest deve essere ultimo** elemento
6. **&&= assegna solo se truthy**
7. **||= assegna solo se falsy**
8. **??= assegna solo se null/undefined**
9. **??= è meglio di ||=** per 0, false, '' validi
10. **Logical assignment** evita valutazione se non necessaria

---
**Torna a:** [03_Operatori](../../) | [Corso JavaScript](../../../../)
