# Operatori di Confronto - Esempi

Esempi pratici per comprendere gli operatori di confronto in JavaScript: ==, ===, !=, !==, <, >, <=, >=.

## File degli esempi

### 02.01_uguaglianza.js
Confronti di uguaglianza strict (===) vs loose (==):
- Differenza tra == e ===
- Confronti con null e undefined
- Gestione di NaN
- Tabella completa delle conversioni
- Operatori di disuguaglianza (!= vs !==)
- Confronto profondo di oggetti e array
- Trappole comuni da evitare
- Object.is() come alternativa
- Best practices per i confronti

### 02.02_relazionali.js
Operatori relazionali <, >, <=, >=:
- Maggiore (>) e minore (<) con numeri
- Maggiore o uguale (>=) e minore o uguale (<=)
- Confronto lessicografico tra stringhe
- Conversione implicita stringhe-numeri
- Casi speciali con null e undefined
- Comportamento con NaN
- Infinity e -Infinity
- Boolean nei confronti
- Casi d'uso pratici (range, date, età)
- Best practices per confronti sicuri

### 02.03_valori_speciali.js
Gestione dei valori speciali nei confronti:
- NaN e come identificarlo
- isNaN() vs Number.isNaN()
- null nei confronti (paradosso null >= 0)
- undefined e conversione a NaN
- Infinity e -Infinity
- Tabella completa confronti speciali
- Validazione dei valori
- Gestione sicura dei confronti
- Casi d'uso pratici (validazione, divisioni, ordinamento)
- Best practices per gestire valori speciali

## Come usare gli esempi

### Eseguire un singolo esempio
```bash
node 02.01_uguaglianza.js
node 02.02_relazionali.js
node 02.03_valori_speciali.js
```

### Eseguire tutti gli esempi
```bash
for file in 02.*.js; do
  echo "=== $file ==="
  node "$file"
  echo ""
done
```

## Concetti chiave

### === vs ==
```javascript
// === strict equality (tipo + valore)
5 === 5      // true
5 === '5'    // false

// == loose equality (converte tipo)
5 == '5'     // true
null == undefined  // true (caso speciale)
```

### Paradosso di null
```javascript
null == 0    // false
null >= 0    // true (null -> 0)
null > 0     // false
// ⚠️ == ha regole speciali, relazionali convertono
```

### NaN - Not a Number
```javascript
NaN === NaN  // false (unico valore non uguale a se stesso)
NaN == NaN   // false
NaN > 0      // false
NaN < 0      // false

// Usa Number.isNaN() per check precisi
Number.isNaN(NaN)  // true
isNaN('hello')     // true (converte prima!)
Number.isNaN('hello')  // false (non è NaN)
```

### Confronto stringhe
```javascript
// Lessicografico (carattere per carattere)
'apple' < 'banana'  // true
'10' < '2'          // true! ('1' < '2')

// Con numeri: conversione
'10' < 2            // false (10 < 2)
'10' < '2'          // true (lessicografico)
```

## Esperimenti suggeriti

1. **Testa i paradossi**
   - Prova `null >= 0` vs `null == 0`
   - Confronta `NaN` con qualsiasi valore
   - Sperimenta con `undefined` nei confronti

2. **Conversioni implicite**
   - Confronta stringhe numeriche con numeri
   - Usa true/false in confronti numerici
   - Testa con array vuoti e oggetti

3. **Validazione sicura**
   - Implementa funzione di validazione input
   - Gestisci divisione per zero
   - Crea comparatore custom

## Trappole comuni

```javascript
// ❌ ERRORI COMUNI

// 1. Confondere == e ===
if (value == 5) { }  // Può convertire
if (value === 5) { } // Tipo + valore

// 2. Confrontare stringhe numeriche
'10' < '2'  // true! (lessicografico)
10 < 2      // false

// 3. Non gestire null/undefined
function calc(a, b) {
  return a > b;  // NaN se undefined!
}

// 4. Assumere NaN === NaN
let x = 0 / 0;
if (x === NaN) { }  // Sempre false!
if (Number.isNaN(x)) { }  // Corretto

// 5. Ignorare Infinity
1 / 0  // Infinity, non errore!
```

## Best practices

### ✓ Usa === per default
```javascript
// ✓ Sicuro
if (value === 5) { }

// ⚠️ Solo se necessario
if (value == null) { }  // Copre null e undefined
```

### ✓ Valida prima di confrontare
```javascript
function compare(a, b) {
  if (a == null || b == null) {
    throw new Error("Valori null");
  }
  
  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw new Error("NaN non supportato");
  }
  
  return a > b;
}
```

### ✓ Converti esplicitamente
```javascript
// ✓ Chiaro
Number(str) > 10

// ⚠️ Implicito
str > 10  // Conversione nascosta
```

### ✓ Per stringhe: localeCompare()
```javascript
// ✓ Ordinamento corretto con locale
arr.sort((a, b) => a.localeCompare(b));

// Gestisce correttamente:
// - Caratteri accentati
// - Maiuscole/minuscole
// - Regole specifiche della lingua
```

## Risorse

- [MDN - Operatori di confronto](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#relational_operators)
- [MDN - Equality comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
- [JavaScript.info - Comparisons](https://javascript.info/comparison)
- [MDN - NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)

## Note importanti

1. **=== è preferibile a ==** nella maggior parte dei casi
2. **NaN non è mai uguale a nulla**, nemmeno a se stesso
3. **null == undefined** è true, ma **null === undefined** è false
4. **Confronti relazionali convertono null a 0**, ma == no
5. **undefined diventa NaN** nei confronti numerici
6. **Stringhe numeriche** sono confrontate lessicograficamente tra loro
7. **Infinity** è un numero valido, usa `isFinite()` per escluderlo
8. **typeof NaN** è "number", non "NaN"!

---
**Torna a:** [03_Operatori](../../) | [Corso JavaScript](../../../../)
