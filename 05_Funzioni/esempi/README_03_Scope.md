# Guida 03: Scope e Closure

Comprensione completa di scope e closure in JavaScript.

## 📚 File Disponibili

### **03.01_scope.js**
Tutti i tipi di scope in JavaScript.

**Concetti:** Global scope, Function scope, Block scope (let/const), Lexical scope, Scope chain, Shadowing, Hoisting, Scope nei loops, this e scope, Best practices.

**Esegui:** `node 03.01_scope.js`

### **03.02_closure.js**
Closure complete con casi d'uso pratici.

**Concetti:** Closure base, Con parametri, Dati privati, Closure in loops, Module pattern, Factory functions, Async operations, Currying, Memoization, Best practices.

**Esegui:** `node 03.02_closure.js`

## 🎯 Quick Reference

**SCOPE TYPES:**
- **Global**: accessibile ovunque
- **Function**: locale alla funzione
- **Block**: locale al blocco `{ }` (let/const)
- **Lexical**: inner functions vedono outer scope

**CLOSURE**: Funzione + ambiente lessicale esterno preservato.

## 💡 Best Practices

✅ **DO:**
- Usa `let`/`const`, evita `var`
- Limita scope variabili
- Usa closure per privacy
- Block scope nei loop

❌ **DON'T:**
- Variabili globali eccessive
- var in loops con async
- Memory leaks con closure

*Repository: TPSIT2-Javascript-by-example*
