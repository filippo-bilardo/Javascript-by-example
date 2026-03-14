# Guida 05: Tecniche Avanzate

Pattern avanzati e tecniche moderne con gli array.

## 📚 File Disponibili

### **05.01_destructuring_spread.js**
Destructuring e spread operator.

**Concetti:** Array destructuring, Rest operator, Spread operator, Skip elementi, Default values, Swap valori, Nested destructuring, Clone e merge, Pattern avanzati.

**Esegui:** `node 05.01_destructuring_spread.js`

### **05.02_flat_flatmap.js**
Appiattimento array multidimensionali.

**Concetti:** `flat()` con depth, `flatMap()`, Rimozione buchi, Alternative a flat, Flat ricorsivo, Applicazioni pratiche, Performance considerations.

**Esegui:** `node 05.02_flat_flatmap.js`

## 🎯 Quick Reference

**DESTRUCTURING:**
```javascript
const [a, b, c] = arr          // Estrai
const [first, ...rest] = arr   // Rest
const [x = 0, y = 0] = arr     // Defaults
[a, b] = [b, a]                // Swap
```

**SPREAD:**
```javascript
[...arr]                       // Clone
[...arr1, ...arr2]             // Merge
Math.max(...arr)               // Expand
```

**FLAT:**
```javascript
arr.flat()                     // 1 livello
arr.flat(Infinity)             // Tutto
arr.flatMap(x => ...)          // Map + flat
```

## 💡 Best Practices

✅ Spread per immutabilità e merge
✅ Destructuring per leggibilità
✅ flat() per nested structures
✅ flatMap() invece di map().flat()

❌ Spread di array enormi (performance)
❌ Ricorda: shallow copy!

*Repository: TPSIT2-Javascript-by-example*
