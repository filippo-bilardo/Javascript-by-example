# Guida 02: Proprietà e Metodi

Gestione avanzata di proprietà e metodi degli oggetti.

## 📚 File Disponibili

### **02.01_getter_setter.js**
Getter e setter per proprietà di accesso.

**Concetti:** Getter base, Setter base, Validazione con setter, Proprietà calcolate, `Object.defineProperty` per getter/setter, Proprietà read-only, Lazy loading, Side effects, Getter/setter in classi, Pattern avanzati (normalizzazione, tracciamento, cache).

**Esegui:** `node 02.01_getter_setter.js`

### **02.02_define_property.js**
Definizione dettagliata delle proprietà.

**Concetti:** `Object.defineProperty()`, Attributi (writable, enumerable, configurable), Proprietà non modificabili, Proprietà nascoste, Proprietà immutabili, `Object.defineProperties()`, `Object.getOwnPropertyDescriptor()`, Clonazione con descriptors, Pattern per costanti e metadata.

**Esegui:** `node 02.02_define_property.js`

## 🎯 Quick Reference

**GETTER/SETTER:**
```javascript
const obj = {
  get prop() { return this._prop; },
  set prop(val) { this._prop = val; }
};
```

**DEFINEPROPERTY:**
```javascript
Object.defineProperty(obj, "prop", {
  value: "val",
  writable: true,
  enumerable: true,
  configurable: true
});
```

**ATTRIBUTI:**
- `writable`: modificabile?
- `enumerable`: visibile in enumerazioni?
- `configurable`: eliminabile/riconfigurabile?

## 💡 Best Practices

✅ Usa getter per proprietà calcolate  
✅ Usa setter per validazione  
✅ `writable: false` per costanti  
✅ `enumerable: false` per metadata  
✅ Documenta proprietà non-enumerable  

❌ Non abusare di getter/setter (mantieni semplice)  
❌ Non lanciare errori nei getter  
❌ Attento a `configurable: false` (irreversibile)

*Repository: TPSIT2-Javascript-by-example*
