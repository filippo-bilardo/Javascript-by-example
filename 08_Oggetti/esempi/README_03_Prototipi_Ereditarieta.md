# Guida 03: Prototipi ed Ereditarietà

Sistema dei prototipi e ereditarietà in JavaScript.

## 📚 File Disponibili

### **03.01_prototipi_chain.js**
Prototipi e catena prototypale.

**Concetti:** Prototype chain, `__proto__` vs `prototype`, Aggiungere metodi al prototype, Ricerca nella chain, Ereditarietà con funzioni costruttore, Override metodi, `instanceof` e `isPrototypeOf`, `Object.create()`, Modificare prototype dinamicamente, Mixin pattern.

**Esegui:** `node 03.01_prototipi_chain.js`

### **03.02_classi_ereditarieta.js**
Classi ES6 e ereditarietà moderna.

**Concetti:** Sintassi classi, `extends` e `super`, Metodi statici, Getter/setter in classi, Proprietà private `#`, Metodi privati, Ereditarietà multi-livello, Composizione vs ereditarietà, Abstract base class pattern, Factory pattern.

**Esegui:** `node 03.02_classi_ereditarieta.js`

## 🎯 Quick Reference

**PROTOTIPI:**
```javascript
function Parent(val) { this.val = val; }
Parent.prototype.method = function() {...};

function Child(val) {
  Parent.call(this, val);
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
```

**CLASSI ES6:**
```javascript
class Parent {
  constructor(val) { this.val = val; }
  method() {...}
}

class Child extends Parent {
  constructor(val) {
    super(val);
  }
}
```

**PRIVATE (ES2022):**
```javascript
class MyClass {
  #privateField = 0;
  #privateMethod() {...}
}
```

## 💡 Best Practices

✅ Usa classi ES6 per codice più leggibile  
✅ `super()` come prima cosa in constructor figlio  
✅ Metodi sul prototype, dati sull'istanza  
✅ Preferisci composizione a ereditarietà profonda  
✅ Private fields `#` per vera privacy  

❌ Non modificare `Object.prototype`  
❌ Evita catene prototypali troppo lunghe  
❌ Non fare affidamento su `__proto__`

*Repository: TPSIT2-Javascript-by-example*
