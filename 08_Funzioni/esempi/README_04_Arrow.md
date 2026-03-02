# Guida 04: Arrow Functions Dettagli

Deep dive nelle arrow functions con focus su `this` binding e casi d'uso specifici.

## 📚 File Disponibili

### **04.01_arrow_this.js**
**Binding lessicale di this nelle arrow functions.**

Quando usare: callbacks, metodi array, event handlers (quando vuoi mantenere this esterno).
Quando evitare: metodi oggetti, costruttori, quando serve this dinamico.

**Esegui:** `node 04.01_arrow_this.js`

## 🎯 Key Points

**Arrow Functions:**
- Sintassi concisa: `(a, b) => a + b`
- Return implicito per espressioni
- Lexical `this` (NON proprio this)
- NO `arguments`, `super`, `new.target`
- NON usabili come costruttori

**Quando usare:** Array methods, callbacks brevi, quando NON serve this dinamico.
**Quando evitare:** Metodi oggetti, costruttori, arguments necessario.

*Repository: TPSIT2-Javascript-by-example*
