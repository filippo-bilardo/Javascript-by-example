# Guida 03: Metodi di Iterazione

Esempi completi per iterare e trasformare array.

## 📚 File Disponibili

### **03.01_map_filter_reduce.js**
I tre metodi funzionali fondamentali.

**Concetti:** `map()` per trasformare, `filter()` per filtrare, `reduce()` per ridurre, Pipeline concatenate, Casi d'uso pratici, Performance considerations.

**Esegui:** `node 03.01_map_filter_reduce.js`

### **03.02_foreach_iteratori.js**
forEach e metodi di iterazione avanzati.

**Concetti:** `forEach()`, `entries()`, `keys()`, `values()`, for...of vs forEach, some/every, find/findIndex, Pattern comuni, Break/continue.

**Esegui:** `node 03.02_foreach_iteratori.js`

## 🎯 Quick Reference

**TRASFORMAZIONE:**
```javascript
arr.map(x => x * 2)           // Trasforma
arr.filter(x => x > 5)        // Filtra
arr.reduce((a,b) => a+b, 0)   // Riduce
```

**ITERAZIONE:**
```javascript
arr.forEach(x => console.log(x))  // Side effects
for (const x of arr) {}           // Con break
for (const [i,x] of arr.entries()) {} // Con indice
```

## 💡 Best Practices

✅ **map** per trasformare tutti gli elementi
✅ **filter** per selezionare sottoinsieme
✅ **reduce** per calcolare valore singolo
✅ **forEach** per side effects
✅ **for...of** quando serve break

❌ Non usare forEach per creare array (usa map)
❌ Non usare map se non usi il risultato (usa forEach)

*Repository: TPSIT2-Javascript-by-example*
