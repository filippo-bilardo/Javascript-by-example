# Guida 01: Introduzione agli Array

Esempi completi per comprendere la creazione, l'accesso e la gestione degli array in JavaScript.

## 📚 File Disponibili

### **01.01_creazione_array.js**
Tutti i modi per creare array in JavaScript.

**Concetti:** Notazione letterale `[]`, Costruttore `new Array()`, `Array.of()`, `Array.from()`, Array misti, Array da range, Multidimensionali, Array sparsi, Clonazione, Conversioni.

**Esegui:** `node 01.01_creazione_array.js`

### **01.02_accesso_elementi.js**
Come accedere, leggere e cercare elementi negli array.

**Concetti:** Accesso con indici, Metodo `at()` (indici negativi), Indici fuori range, Primo/ultimo elemento, Destructuring, Ricerca (`indexOf`, `includes`, `find`), Iterazione, Accesso sicuro con optional chaining.

**Esegui:** `node 01.02_accesso_elementi.js`

### **01.03_proprieta_caratteristiche.js**
Proprietà fondamentali e caratteristiche speciali degli array.

**Concetti:** Proprietà `length`, Modifica `length`, Array sparsi, Array vs Oggetti, Array multidimensionali (2D, 3D), Mutabilità, Riferimenti, Confronto array, Proprietà custom.

**Esegui:** `node 01.03_proprieta_caratteristiche.js`

### **01.04_modifica_array.js**
Metodi per aggiungere, rimuovere e modificare elementi.

**Concetti:** `push`/`pop` (fine array), `unshift`/`shift` (inizio array), `splice` (versatile), `delete`, Sostituzione diretta, Metodi mutanti vs immutanti, Confronto operazioni.

**Esegui:** `node 01.04_modifica_array.js`

## 🎯 Quick Reference

**CREAZIONE:**
```javascript
[]                           // Letterale
Array.of(1, 2, 3)           // Da elementi
Array.from('abc')           // Da iterabile
[...array]                  // Clone
```

**ACCESSO:**
```javascript
arr[0]                      // Primo
arr[arr.length - 1]         // Ultimo
arr.at(-1)                  // Ultimo (ES2022)
arr.indexOf(elem)           // Trova indice
arr.includes(elem)          // Verifica presenza
```

**MODIFICA:**
```javascript
arr.push(elem)              // Aggiunge fine
arr.pop()                   // Rimuove fine
arr.unshift(elem)           // Aggiunge inizio
arr.shift()                 // Rimuove inizio
arr.splice(pos, n, ...items) // Versatile
```

## 💡 Best Practices

✅ **DO:**
- Usa `[]` invece di `new Array()`
- Usa `at(-1)` per ultimo elemento
- Preferisci metodi immutanti quando possibile
- Usa `Array.isArray()` per verificare tipo
- Clone con spread `[...arr]`

❌ **DON'T:**
- `new Array(5)` crea array vuoto (confuso)
- `delete arr[i]` crea buchi (usa splice)
- Aggiungere proprietà custom agli array
- Confrontare array con `===` (confronta riferimenti)

## 🔑 Concetti Chiave

**Array Sparsi:** Array con "buchi" (elementi non definiti). Evitarli quando possibile.

**Mutabilità:** Array modificabili anche se dichiarati `const` (const impedisce riassegnazione, non modifica).

**Riferimenti:** Assegnazione crea riferimento, non copia. Usare spread o `slice()` per copiare.

**Indici:** 0-based. Indici negativi non funzionano con `[]`, usare `at()`.

*Repository: TPSIT2-Javascript-by-example*
