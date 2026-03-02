# Guida 05: Pattern di Progettazione

Pattern (Design Patterns) classici applicati a JavaScript.

## 📚 File Disponibili

### **05.01_pattern_creazionali.js**
Pattern per la creazione di oggetti.

**Concetti:** Singleton, Singleton con closure, Factory, Factory con registrazione, Builder, Builder avanzato, Constructor, Constructor con privati, Abstract Factory, Prototype pattern.

**Esegui:** `node 05.01_pattern_creazionali.js`

### **05.02_pattern_strutturali.js**
Pattern per comporre classi e oggetti.

**Concetti:** Adapter, Adapter per logger, Decorator, Decorator funzionale, Proxy, Proxy con caching, Facade, Facade per API, Composite (strutture ad albero), Flyweight (condivisione stato).

**Esegui:** `node 05.02_pattern_strutturali.js`

### **05.03_pattern_comportamentali.js**
Pattern per gestire algoritmi e responsabilità.

**Concetti:** Observer, Observer con eventi (EventEmitter), Strategy, Strategy per sorting, Command, Command con macro, Chain of Responsibility, Iterator, Custom Iterable (Symbol.iterator), Mediator.

**Esegui:** `node 05.03_pattern_comportamentali.js`

## 🎯 Quick Reference

**CREAZIONALI:**
```javascript
// Singleton: una sola istanza
class Singleton {
  static instance;
  constructor() {
    if (Singleton.instance) return Singleton.instance;
    Singleton.instance = this;
  }
}

// Factory: crea oggetti
Factory.create("type", ...args)

// Builder: costruisce step-by-step
new Builder().setA().setB().build()
```

**STRUTTURALI:**
```javascript
// Adapter: adatta interfaccia
new Adapter(oldAPI).newMethod()

// Decorator: aggiunge funzionalità
new Decorator(component).operation()

// Proxy: controlla accesso
new Proxy(target, handler)

// Facade: semplifica
facade.simpleMethod()
```

**COMPORTAMENTALI:**
```javascript
// Observer: notifica cambiamenti
subject.attach(observer)
subject.notify()

// Strategy: swap algoritmi
context.setStrategy(strategy)

// Command: incapsula azioni
command.execute()
command.undo()

// Chain: pipeline handler
handler1.setNext(handler2).setNext(handler3)
```

## 💡 Best Practices

✅ Singleton per risorse condivise (database, config)  
✅ Factory per creare famiglie di oggetti correlati  
✅ Builder per oggetti con molti parametri opzionali  
✅ Observer per eventi e reattività  
✅ Strategy per sostituire condizionali complessi  
✅ Command per undo/redo e macro  
✅ Decorator per estendere funzionalità dinamicamente  
✅ Proxy per lazy loading e caching  

❌ Non forzare pattern dove non servono  
❌ JavaScript ha funzioni first-class: Strategy può essere semplice funzione  
❌ Valuta semplicità vs complessità pattern  
❌ YAGNI: "You Aren't Gonna Need It"

## 📖 Categorie Pattern

**Creazionali** (come creare):
- Singleton, Factory, Builder, Prototype

**Strutturali** (come comporre):
- Adapter, Decorator, Proxy, Facade, Composite, Flyweight

**Comportamentali** (come interagire):
- Observer, Strategy, Command, Chain, Iterator, Mediator, State

*Repository: TPSIT2-Javascript-by-example*
