# Operatore Ternario - Esempi Pratici

Esempi completi per comprendere l'operatore ternario (operatore condizionale) in JavaScript.

## File degli esempi

### 03.01_ternario_base.js
Operatore ternario fondamentale:
- Sintassi base (condizione ? valoreSeVero : valoreSeFalso)
- Confronti semplici (numeri, stringhe, booleani)
- Con operazioni matematiche
- Con stringhe e template literals
- Valori truthy e falsy
- In assegnazioni
- In funzioni (return)
- Con array (map, filter)
- Con oggetti (proprietà dinamiche)
- Casi d'uso pratici (validazione, CSS, plurali)

### 03.02_ternario_annidato.js
Ternario annidato (più livelli):
- Annidamento base (1-2 livelli)
- Confronti multipli (temperatura, punteggi)
- Condizioni combinate (AND, OR)
- In funzioni (rating, categorie)
- Formattazione (leggibile vs illeggibile)
- Con stringhe e oggetti
- Alternative migliori (switch, oggetto lookup)
- Errori comuni (troppo annidato, senza parentesi)
- Usi pratici moderati
- Quando usare vs evitare

### 03.03_ternario_pratiche.js
Pattern pratici e best practices:
- Default values (vs OR, vs nullish ??)
- Conditional rendering (UI, badge, classi CSS)
- Formattazione (singolare/plurale, unità, percentuali)
- Validazione (email, password, form)
- Conditional execution (return vs side effects)
- Configurazione (ambiente, feature flags, prezzi)
- Con array (map, filter, reduce, sort)
- In JSX/Template (simulazione React/Vue)
- Performance patterns (caching, lazy evaluation)
- Best practices e anti-patterns

## Come usare gli esempi

```bash
node 03.01_ternario_base.js
node 03.02_ternario_annidato.js
node 03.03_ternario_pratiche.js
```

## Concetti chiave

### Sintassi Base
```javascript
// Sintassi
condizione ? valoreSeVero : valoreSeFalso

// Esempio
let età = 20;
let status = età >= 18 ? "Maggiorenne" : "Minorenne";

// Equivalente if-else
let status2;
if (età >= 18) {
  status2 = "Maggiorenne";
} else {
  status2 = "Minorenne";
}
```

### Ternario Annidato
```javascript
// Un livello (OK)
let età = 25;
let categoria = età < 18 
  ? "Minorenne" 
  : (età < 65 ? "Adulto" : "Senior");

// Due livelli (limite)
let voto = 8;
let valutazione = voto >= 9 
  ? "Ottimo" 
  : (voto >= 7 ? "Buono" : (voto >= 6 ? "Sufficiente" : "Insufficiente"));

// Tre+ livelli (NO! Usa if-else)
```

### Pattern Comuni
```javascript
// 1. Default value
let name = username ? username : "Guest";
let name2 = username || "Guest";  // Più comune
let name3 = username ?? "Guest";  // Per null/undefined

// 2. Pluralizzazione
let count = 5;
let msg = `${count} ${count === 1 ? "file" : "files"}`;

// 3. Classe CSS
let className = `btn ${isActive ? "active" : ""}`;

// 4. Return in funzione
const max = (a, b) => a > b ? a : b;

// 5. In map
let nums = [1, 2, 3, 4];
let labels = nums.map(n => n % 2 === 0 ? "even" : "odd");
```

## Quando usare cosa

### ✓ Usa TERNARIO per:
- Assegnazioni condizionali semplici
- Return in funzioni (1 riga)
- Valori in oggetti/array
- Formattazione semplice (plurali, classi CSS)
- Default values (con controllo esplicito)
- **Esempio**: status, badge, labels, formatting

### ✓ Usa IF...ELSE per:
- Logica complessa
- Più di 2 azioni per caso
- Side effects (modifiche variabili)
- Quando ternario diventa illeggibile
- **Esempio**: Validazione complessa, algoritmi

### ✓ Usa SWITCH per:
- Molti valori discreti (5+)
- Stesso valore confrontato multiple volte
- Stati/menu/codici
- **Esempio**: Menu, giorni, stati ordine

### ✓ Usa OGGETTO per:
- Mappature chiave-valore
- 10+ casi
- Configurazione
- **Esempio**: Traduzioni, configurazioni

## Vantaggi e svantaggi

### ✓ Vantaggi Ternario
```javascript
// 1. Conciso (1 riga vs 5)
let msg = età >= 18 ? "Adulto" : "Minore";

// 2. Restituisce valore (assegnabile)
let config = {
  mode: isDev ? "dev" : "prod"
};

// 3. Usabile in espressioni
console.log(`Stato: ${isActive ? "ON" : "OFF"}`);

// 4. Ottimo per casi semplici
const getSign = n => n > 0 ? "+" : (n < 0 ? "-" : "0");
```

### ✗ Svantaggi Ternario
```javascript
// 1. Illeggibile se annidato troppo
let bad = a ? (b ? (c ? "A" : "B") : "C") : "D";

// 2. Non ideale per side effects
let bad2 = cond ? counter++ : counter--;  // Confusionario

// 3. Non supporta più statement
// let bad3 = cond ? (doThis(); doThat()) : doOther();  // Errore

// 4. Diventa complesso con logica
let bad4 = (a && b) ? (c || d ? "X" : "Y") : "Z";
```

## Trappole comuni

```javascript
// ❌ Troppo annidato
let bad = score > 90 
  ? "A" 
  : (score > 80 
    ? "B" 
    : (score > 70 
      ? "C" 
      : (score > 60 ? "D" : "F")));  // ILLEGGIBILE!

// ✓ Meglio con if-else
function getGrade(score) {
  if (score > 90) return "A";
  if (score > 80) return "B";
  if (score > 70) return "C";
  if (score > 60) return "D";
  return "F";
}

// ❌ Senza parentesi (ambiguo)
let x = a ? b : c ? d : e;  // Confuso

// ✓ Con parentesi (chiaro)
let y = a ? b : (c ? d : e);  // OK

// ❌ Side effects nel ternario
let count = 0;
let bad2 = shouldInc ? ++count : count;  // Confusionario

// ✓ Side effects con if
if (shouldInc) count++;  // Chiaro

// ❌ Falsy inaspettati
let num = 0;
let bad3 = num ? num : "default";  // "default" anche per 0!

// ✓ Controllo esplicito
let good = num !== undefined ? num : "default";
```

## Best practices

### ✓ Mantieni semplice
```javascript
// ✓ Buono: 1 riga, chiaro
let status = isActive ? "ON" : "OFF";

// ✓ Buono: max 2 livelli con parentesi
let category = age < 18 
  ? "Junior" 
  : (age < 65 ? "Adult" : "Senior");

// ✗ NO: troppo complesso
let bad = a ? (b ? (c ? (d ? "W" : "X") : "Y") : "Z") : "K";
```

### ✓ Usa parentesi per chiarezza
```javascript
// Meglio con parentesi
let result = condition1 
  ? value1 
  : (condition2 ? value2 : value3);

// Formatta su più righe se necessario
let message = hasError 
  ? "Errore critico" 
  : (hasWarning 
    ? "Attenzione" 
    : "Tutto OK");
```

### ✓ Preferisci alternative quando appropriato
```javascript
// Ternario per default (OK ma verbose)
let name1 = username ? username : "Guest";

// OR più idiomatico (attenzione ai falsy)
let name2 = username || "Guest";

// Nullish per null/undefined (meglio)
let name3 = username ?? "Guest";

// Switch per molti casi
switch(status) {
  case "pending": return "⏳";
  case "done": return "✓";
  case "error": return "✗";
  default: return "?";
}

// Oggetto per mappature
const icons = {
  pending: "⏳",
  done: "✓",
  error: "✗"
};
let icon = icons[status] ?? "?";
```

### ✓ Return diretto in funzioni
```javascript
// ✓ Ottimo uso del ternario
const isEven = n => n % 2 === 0 ? true : false;
const isEven2 = n => n % 2 === 0;  // Ancora meglio

const max = (a, b) => a > b ? a : b;
const min = (a, b) => a < b ? a : b;

const getAbsValue = n => n >= 0 ? n : -n;
```

## Pattern comuni

### Pluralizzazione
```javascript
function formatCount(n, singular, plural) {
  return `${n} ${n === 1 ? singular : plural}`;
}

console.log(formatCount(1, "file", "files"));  // "1 file"
console.log(formatCount(5, "file", "files"));  // "5 files"
```

### Classi CSS
```javascript
let buttonClass = `btn ${isPrimary ? "btn-primary" : "btn-secondary"}`;
let itemClass = `item ${isActive ? "active" : ""} ${isDisabled ? "disabled" : ""}`;
```

### Default values
```javascript
// Con controllo esplicito
let value = input !== "" ? input : "default";

// Attenzione ai falsy
let count = input || 0;  // ✗ "" diventa 0
let count2 = input !== "" ? input : 0;  // ✓ OK
```

### Validazione
```javascript
const validateEmail = email => 
  email.includes("@") && email.includes(".") 
    ? "✓ Valida" 
    : "✗ Non valida";

const checkPassword = pwd => 
  pwd.length >= 12 ? "🟢 Forte" 
    : (pwd.length >= 8 ? "🟡 Media" : "🔴 Debole");
```

### Formattazione
```javascript
// Numeri con segno
const formatDelta = n => n > 0 ? `+${n}` : `${n}`;

// Bytes
const formatSize = b => 
  b < 1024 ? `${b} B` : `${(b/1024).toFixed(2)} KB`;

// Percentuali
const formatPercent = (val, threshold) => 
  val >= threshold ? `🟢 ${val}%` : `🔴 ${val}%`;
```

## Confronto con alternative

| Caso | Ternario | if-else | switch | Oggetto |
|------|----------|---------|--------|---------|
| Assegnazione semplice | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐ | ⭐⭐ |
| Return in funzione | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| 2 condizioni | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ⭐ |
| 3-4 condizioni | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| 5+ condizioni | ⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Logica complessa | ⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐ |
| Mappature | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Leggibilità | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

## Risorse

- [MDN - Operatore condizionale (ternario)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
- [MDN - Espressioni e operatori](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

## Note importanti

1. **L'unico operatore con 3 operandi** in JavaScript
2. **Restituisce un valore** (assegnabile)
3. **Max 1-2 livelli** di annidamento (leggibilità)
4. **Usa parentesi** per chiarezza negli annidamenti
5. **Non per side effects** (usa if-else)
6. **Non per logica complessa** (usa if-else)
7. **Ottimo per return** in arrow functions
8. **Attenzione ai falsy** (0, "", false, null, undefined, NaN)
9. **Se illeggibile, usa if-else** (regola d'oro)
10. **Considera alternative** (||, ??, switch, oggetto)

---
**Torna a:** [04_Strutture_Condizionali](../../) | [Corso JavaScript](../../../../)
