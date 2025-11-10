# Guida 04: Oggetti Avanzati

Tecniche avanzate e metaprogrammazione con oggetti.

## 📚 File Disponibili

### **04.01_object_methods.js**
Metodi statici avanzati di Object.

**Concetti:** `Object.keys/values/entries()`, `Object.assign()`, `Object.freeze/seal/preventExtensions()`, `Object.is()`, `Object.fromEntries()`, `getOwnPropertyNames/Symbols()`, `getPrototypeOf/setPrototypeOf()`, `Object.hasOwn()`, `groupBy()`, Pattern comuni (filter, map, pick, omit, deep freeze).

**Esegui:** `node 04.01_object_methods.js`

### **04.02_proxy_reflect.js**
Proxy e Reflect API per metaprogrammazione.

**Concetti:** Proxy base, Trap handlers (get, set, has, deleteProperty), Validazione con Proxy, Default values, Logging e tracciamento, Proprietà negative array, Private properties, Reflect API, Observable pattern, Revocable proxy.

**Esegui:** `node 04.02_proxy_reflect.js`

## 🎯 Quick Reference

**OBJECT METHODS:**
```javascript
Object.keys(obj)              // chiavi
Object.values(obj)            // valori
Object.entries(obj)           // [[k,v],...]
Object.assign(target, src)    // merge
Object.freeze(obj)            // immutabile
Object.fromEntries(entries)   // crea oggetto
```

**PROXY:**
```javascript
const proxy = new Proxy(target, {
  get(target, prop) { ... },
  set(target, prop, value) { ... }
});
```

**REFLECT:**
```javascript
Reflect.get(obj, prop)
Reflect.set(obj, prop, value)
Reflect.has(obj, prop)
```

## 💡 Best Practices

✅ `entries()` + `map()` + `fromEntries()` per trasformare oggetti  
✅ `Object.freeze()` per configurazioni immutabili  
✅ Proxy per validazione e metaprogrammazione  
✅ Reflect nelle trap per comportamento default  
✅ `hasOwn()` invece di `hasOwnProperty()`  

❌ Attenzione: `freeze/seal/assign` sono shallow  
❌ Proxy ha overhead di performance  
❌ Non modificare `Object.prototype`

*Repository: TPSIT2-Javascript-by-example*
