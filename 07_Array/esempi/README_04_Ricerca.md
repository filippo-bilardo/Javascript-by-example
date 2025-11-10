# Guida 04: Ricerca e Filtro

Metodi per cercare e filtrare elementi negli array.

## 📚 File Disponibili

### **04.01_find_includes.js**
Metodi di ricerca completi.

**Concetti:** `includes()`, `indexOf()`, `lastIndexOf()`, `find()`, `findIndex()`, `some()`, `every()`, Ricerca con condizioni, Performance, Pattern comuni.

**Esegui:** `node 04.01_find_includes.js`

## 🎯 Quick Reference

**VERIFICA:**
```javascript
arr.includes(elem)        // Elemento presente?
arr.some(fn)             // Almeno uno true?
arr.every(fn)            // Tutti true?
```

**RICERCA:**
```javascript
arr.find(fn)             // Primo elemento
arr.findIndex(fn)        // Indice primo
arr.indexOf(elem)        // Posizione esatta
arr.filter(fn)           // Tutti elementi
```

## 💡 Best Practices

✅ **includes** per presenza semplice
✅ **find** per primo match con logica
✅ **filter** per tutti i match
✅ **some/every** per verifiche booleane

❌ Non usare find se basta includes
❌ Non usare filter per trovare un solo elemento

*Repository: TPSIT2-Javascript-by-example*
