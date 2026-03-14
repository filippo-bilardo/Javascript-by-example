# Guida 02: Metodi Base degli Array

Esempi per i metodi fondamentali di manipolazione array.

## 📚 File Disponibili

### **02.01_concat_slice_join.js**
Metodi per concatenare, estrarre e convertire array.

**Concetti:** `concat()` per unire array, `slice()` per estrarre porzioni, `join()` per conversione a stringa, Spread operator, Clonazione, Paginazione, Pattern comuni.

**Esegui:** `node 02.01_concat_slice_join.js`

### **02.02_sort_reverse.js**
Ordinamento e inversione array.

**Concetti:** `reverse()`, `sort()` alfabetico, Sort numerico (crescente/decrescente), Sort oggetti, `localeCompare()`, Criteri multipli, Sort stabile, Custom comparators.

**Esegui:** `node 02.02_sort_reverse.js`

## 🎯 Quick Reference

**IMMUTABILI:**
```javascript
arr.concat([1,2])    // Unisce array
arr.slice(1, 4)      // Estrae porzione
arr.join(', ')       // Array → string
```

**MUTABILI:**
```javascript
arr.reverse()                  // Inverte
arr.sort()                    // Alfabetico
arr.sort((a,b) => a - b)      // Numerico
```

## 💡 Best Practices

✅ Usa `[...arr]` prima di sort/reverse per immutabilità
✅ `sort((a,b) => a - b)` per numeri
✅ `localeCompare()` per stringhe
✅ `slice()` senza args per clonare

❌ Non usare `sort()` default per numeri
❌ Ricorda che sort/reverse modificano originale

*Repository: TPSIT2-Javascript-by-example*
