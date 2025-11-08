# Guida 01: Dichiarazione e Invocazione di Funzioni

Esempi pratici completi sui diversi modi di dichiarare e invocare funzioni in JavaScript.

## 📚 File Disponibili

### **01.01_function_declaration.js**
Sintassi base delle function declaration e loro caratteristiche.

**Concetti trattati:**
- Sintassi base (`function nome() {}`)
- Hoisting (disponibilità prima della definizione)
- Parametri multipli
- Valori di ritorno (primitivi, oggetti, array)
- Early return pattern
- Funzioni annidate
- Scope e variabili (globali vs locali)
- Parametri vs argomenti
- Naming conventions (camelCase, verbi, boolean)
- Casi d'uso pratici (validazione, formattazione, calcoli, conversioni, utility)

**Quando usare:**
- ✅ Funzioni top-level del modulo
- ✅ Quando serve hoisting
- ✅ Metodi helper riutilizzabili
- ✅ Codice che deve essere chiaro e tradizionale

**Esegui:**
```bash
node 01.01_function_declaration.js
```

---

### **01.02_function_expression.js**
Function expression e loro utilizzo come valori first-class.

**Concetti trattati:**
- Sintassi base (`let nome = function() {}`)
- Assenza di hoisting
- Function expression anonime e nominate
- Assegnazione a variabili (let vs const)
- Funzioni come valori (in array, oggetti)
- Callback functions
- Higher-order functions (funzioni che restituiscono funzioni)
- Closure e privacy
- Confronto con function declaration
- Conditional function assignment

**Quando usare:**
- ✅ Callback functions
- ✅ Higher-order functions
- ✅ Closure e variabili private
- ✅ Quando NON serve hoisting
- ✅ Functional programming

**Vantaggi:**
- Controllo su quando la funzione è disponibile
- Può essere riassegnata (con let)
- Ideale per closure
- Può essere passata come valore

**Esegui:**
```bash
node 01.02_function_expression.js
```

---

### **01.03_arrow_functions.js**
Arrow functions ES6: sintassi concisa e moderna.

**Concetti trattati:**
- Sintassi base (`() => {}`)
- Varianti sintattiche (zero, uno, multipli parametri)
- Return implicito per espressioni
- Return oggetti (con parentesi)
- Parametri default e rest parameters
- Confronto con function expression
- Array methods (map, filter, reduce, forEach, find, some, every)
- Method chaining
- Sorting e ordering
- Callback e async/await
- Higher-order functions
- Currying e composizione

**Quando usare:**
- ✅ Array methods (map, filter, reduce)
- ✅ Callback brevi
- ✅ Functional programming
- ✅ Quando NON serve this dinamico

**NON usare quando:**
- ❌ Serve this dinamico
- ❌ Metodi di oggetti
- ❌ Constructor functions
- ❌ Serve arguments object

**Esegui:**
```bash
node 01.03_arrow_functions.js
```

---

### **01.04_call_apply_bind.js**
Controllo esplicito del contesto (this) con call, apply e bind.

**Concetti trattati:**
- Il problema di this in JavaScript
- `call()`: invocazione con this e argomenti separati
- `apply()`: invocazione con this e array di argomenti
- `bind()`: creazione di funzione con this legato
- Confronto call vs apply vs bind
- Partial application (pre-configurazione argomenti)
- Borrowing methods (prestito di metodi tra oggetti)
- Array-like objects
- Math.max/min con apply
- Event handlers e perdita di this
- Casi pratici (logger, debounce, validatori)

**Differenze chiave:**
```javascript
// call: invoca subito con argomenti separati
func.call(thisArg, arg1, arg2)

// apply: invoca subito con array di argomenti
func.apply(thisArg, [arg1, arg2])

// bind: NON invoca, crea nuova funzione
const boundFunc = func.bind(thisArg, arg1)
```

**Quando usare:**
- ✅ **call**: borrowing methods, this dinamico
- ✅ **apply**: array di argomenti, Math.max/min
- ✅ **bind**: event handlers, callback, partial application

**Esegui:**
```bash
node 01.04_call_apply_bind.js
```

---

### **01.05_iife_best_practices.js**
IIFE (Immediately Invoked Function Expression) e best practices generali.

**Concetti trattati:**
- Sintassi IIFE base (`(function() {})()`)
- IIFE con parametri e return
- IIFE con arrow functions
- Scope isolation (protezione variabili)
- Module pattern (API pubblica/privata)
- Namespace pattern
- Inizializzazione e setup
- Counter pattern con closure
- Best practices naming (camelCase, verbi, boolean)
- Best practices parametri (max 3-4, oggetti, default, destructuring)
- Single responsibility principle
- Error handling (validazione, guard clauses, result objects)
- Esempio completo (GestoreUtenti)

**IIFE quando usare:**
- ✅ Isolare scope ed evitare globali
- ✅ Module pattern
- ✅ Namespace
- ✅ Inizializzazione one-time
- ✅ Creare closure private

**Best Practices Riepilogo:**
```
NAMING:        camelCase, verbi, is/has/can per boolean
PARAMETRI:     Max 3-4, usa oggetti, default values
STRUCTURE:     Una funzione = un compito, early return
ERROR:         Valida input, gestisci edge cases
ORGANIZATION:  Module pattern, API chiara
QUALITY:       DRY, KISS, testa funzioni critiche
```

**Esegui:**
```bash
node 01.05_iife_best_practices.js
```

---

## 🎯 Confronto Rapido

| Caratteristica | Declaration | Expression | Arrow |
|----------------|-------------|------------|-------|
| **Hoisting** | ✅ Sì | ❌ No | ❌ No |
| **this dinamico** | ✅ Sì | ✅ Sì | ❌ No (lexical) |
| **arguments** | ✅ Sì | ✅ Sì | ❌ No |
| **Constructor** | ✅ Sì | ✅ Sì | ❌ No |
| **Return implicito** | ❌ No | ❌ No | ✅ Sì |
| **Sintassi concisa** | ❌ No | ❌ No | ✅ Sì |

---

## 🔍 Trappole Comuni

### 1. **Hoisting confusion**
```javascript
// ❌ Function expression
console.log(somma(5, 3));  // Error!
const somma = (a, b) => a + b;

// ✅ Function declaration
console.log(somma(5, 3));  // OK: 8
function somma(a, b) { return a + b; }
```

### 2. **Perdita di this**
```javascript
const obj = {
  nome: "Mario",
  saluta: function() {
    setTimeout(function() {
      console.log(this.nome);  // ❌ undefined!
    }, 100);
  }
};

// ✅ Soluzione: arrow function
const obj2 = {
  nome: "Mario",
  saluta: function() {
    setTimeout(() => {
      console.log(this.nome);  // ✅ "Mario"
    }, 100);
  }
};
```

### 3. **Return oggetto con arrow**
```javascript
// ❌ Interpretato come blocco
const crea = () => { nome: "Mario" };  // undefined

// ✅ Usa parentesi
const crea = () => ({ nome: "Mario" });  // OK
```

### 4. **Arrow function come metodo**
```javascript
// ❌ Non usare arrow per metodi
const obj = {
  nome: "Mario",
  saluta: () => {
    console.log(this.nome);  // undefined!
  }
};

// ✅ Usa function normale
const obj2 = {
  nome: "Mario",
  saluta: function() {
    console.log(this.nome);  // "Mario"
  }
};
```

---

## 💡 Best Practices Summary

### ✅ DO

```javascript
// Nomi descrittivi
function calcolaTotaleConIva(prezzo) { ... }

// Una funzione = un compito
function validaEmail(email) { ... }
function salvaUtente(utente) { ... }

// Early return
function dividi(a, b) {
  if (b === 0) return 0;
  return a / b;
}

// Arrow per callback
numeri.map(n => n * 2)

// const per function expression
const somma = (a, b) => a + b;

// Parametri default
function saluta(nome = "Ospite") { ... }

// Result objects per errori
function dividi(a, b) {
  if (b === 0) return { success: false, error: "Div by zero" };
  return { success: true, result: a / b };
}
```

### ❌ DON'T

```javascript
// Nomi generici
function f(x) { ... }

// Troppe responsabilità
function faiTutto() { valida(); formatta(); salva(); email(); }

// Troppi parametri
function crea(a, b, c, d, e, f, g, h) { ... }

// Arrow come metodo
const obj = {
  metodo: () => { ... }  // ❌
};

// Nesting profondo
function test() {
  if (...) {
    if (...) {
      if (...) {
        // ❌ Troppo profondo
      }
    }
  }
}
```

---

## 🚀 Quando Usare Cosa

### Function Declaration
```javascript
// ✅ Funzioni top-level
function inizializzaApp() { ... }

// ✅ Utility riusabili
function formattaData(date) { ... }

// ✅ Serve hoisting
calcolaTotale();  // OK
function calcolaTotale() { ... }
```

### Function Expression
```javascript
// ✅ Callback
button.addEventListener('click', function() { ... });

// ✅ Closure
const counter = (function() {
  let count = 0;
  return { inc: () => ++count };
})();

// ✅ Conditional assignment
const logger = isDev ? function(msg) { ... } : function() {};
```

### Arrow Function
```javascript
// ✅ Array methods
nums.filter(n => n > 0).map(n => n * 2)

// ✅ Callback brevi
setTimeout(() => console.log("Done"), 1000)

// ✅ Higher-order
const multi = n => x => x * n;

// ✅ Functional programming
const compose = (f, g) => x => f(g(x));
```

### call/apply/bind
```javascript
// ✅ Borrowing methods
Array.prototype.slice.call(arrayLike)

// ✅ Event handlers
button.onclick = handleClick.bind(this)

// ✅ Partial application
const double = multiply.bind(null, 2)

// ✅ Math con array
Math.max.apply(null, numbers)
```

### IIFE
```javascript
// ✅ Module pattern
const module = (function() {
  const private = "secret";
  return { public: () => private };
})();

// ✅ Scope isolation
(function() {
  const temp = "non inquino global";
})();

// ✅ Inizializzazione
(function init() {
  setupApp();
  loadConfig();
})();
```

---

## 📖 Risorse Aggiuntive

- File teoria: `../01_Dichiarazione_Invocazione.md`
- MDN Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
- MDN Arrow Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
- MDN this: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

---

## ✍️ Esercizi Suggeriti

1. **Converti** function declaration in arrow function
2. **Crea** un modulo con IIFE che gestisca una lista TODO
3. **Usa** call/apply/bind per borrowing methods
4. **Implementa** higher-order functions (map, filter custom)
5. **Scrivi** validatori con closure e privacy

---

*Ultimo aggiornamento: 2024*
*Repository: TPSIT2-Javascript-by-example*
