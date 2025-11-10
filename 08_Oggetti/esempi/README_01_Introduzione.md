# Guida 01: Introduzione agli Oggetti

Concetti fondamentali sugli oggetti in JavaScript.

## 📚 File Disponibili

### **01.01_creazione_oggetti.js**
Tutti i metodi per creare oggetti.

**Concetti:** Object literal `{}`, Costruttore `Object()`, Funzioni costruttore, `Object.create()`, Classi ES6, Factory functions, Metodi, Oggetti nested, Computed properties, `Object.assign()`.

**Esegui:** `node 01.01_creazione_oggetti.js`

### **01.02_accesso_proprieta.js**
Modi per accedere alle proprietà.

**Concetti:** Dot notation, Bracket notation, Computed access, Optional chaining `?.`, Destructuring, Accesso nested, Metodi e `this`, Getters/Setters, Iterazione, Accesso con fallback.

**Esegui:** `node 01.02_accesso_proprieta.js`

### **01.03_verifica_proprieta.js**
Verificare esistenza delle proprietà.

**Concetti:** Operatore `in`, `hasOwnProperty()`, `Object.hasOwn()`, Confronto con undefined, `Object.keys()`, `propertyIsEnumerable()`, Pattern di validazione.

**Esegui:** `node 01.03_verifica_proprieta.js`

### **01.04_riferimenti_copia.js**
Riferimenti, clonazione e immutabilità.

**Concetti:** Passaggio per riferimento, Shallow copy (spread, `Object.assign()`), Deep copy (`JSON.parse/stringify`, `structuredClone`), Confronto oggetti, `Object.freeze()`, `Object.seal()`, Deep freeze.

**Esegui:** `node 01.04_riferimenti_copia.js`

## 🎯 Quick Reference

**CREAZIONE:**
```javascript
const obj = { key: value }           // Literal (più comune)
const obj = new Object()             // Costruttore
class MyClass { ... }                // Classe ES6
const obj = Object.create(proto)     // Con prototipo
```

**ACCESSO:**
```javascript
obj.prop                             // Dot notation
obj["prop"]                          // Bracket notation
obj?.nested?.prop                    // Optional chaining
const { a, b } = obj                 // Destructuring
```

**VERIFICA:**
```javascript
"prop" in obj                        // Include ereditate
obj.hasOwnProperty("prop")           // Solo proprie
Object.hasOwn(obj, "prop")           // Moderno, sicuro
```

**COPIA:**
```javascript
const copy = { ...obj }              // Shallow copy
const copy = structuredClone(obj)    // Deep copy
Object.freeze(obj)                   // Immutabile
```

## 💡 Best Practices

✅ Usa literal `{}` per oggetti semplici  
✅ Classi per entità complesse e OOP  
✅ Dot notation quando possibile  
✅ Optional chaining `?.` per accesso sicuro  
✅ `Object.hasOwn()` per verifiche moderne  
✅ Spread `{...}` per shallow copy  
✅ `structuredClone()` per deep copy (ES2022)

❌ Non usare `new Object()` (verboso)  
❌ Attento a shallow copy con oggetti nested  
❌ Non confrontare oggetti con `===` per contenuto

*Repository: TPSIT2-Javascript-by-example*
