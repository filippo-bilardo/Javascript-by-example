/**
 * METODI STATICI DI OBJECT
 * 
 * Metodi avanzati per manipolare oggetti
 */

console.log("=== 1. OBJECT.KEYS/VALUES/ENTRIES ===\n");

const persona = {
  nome: "Mario",
  cognome: "Rossi",
  età: 30,
  professione: "Sviluppatore"
};

// Object.keys() - array di chiavi
const chiavi = Object.keys(persona);
console.log("Chiavi:", chiavi);

// Object.values() - array di valori
const valori = Object.values(persona);
console.log("Valori:", valori);

// Object.entries() - array di [chiave, valore]
const entries = Object.entries(persona);
console.log("Entries:", entries);

// Iterare con entries
console.log("\nIterazione:");
for (const [chiave, valore] of Object.entries(persona)) {
  console.log(`  ${chiave}: ${valore}`);
}


console.log("\n=== 2. OBJECT.ASSIGN() ===\n");

const base = { a: 1, b: 2 };
const extra = { c: 3, d: 4 };
const override = { b: 99 };

// Merge oggetti (modifica target)
const merged = Object.assign(base, extra, override);
console.log("Merged:", merged);
console.log("Base (modificato!):", base);

// Clone (target vuoto)
const original = { x: 1, y: 2 };
const clone = Object.assign({}, original);
clone.x = 999;
console.log("\nOriginale:", original);
console.log("Clone:", clone);

// Default options pattern
const defaults = { tema: "chiaro", lingua: "it", notifiche: true };
const userPrefs = { tema: "scuro" };
const config = Object.assign({}, defaults, userPrefs);
console.log("\nConfig:", config);


console.log("\n=== 3. OBJECT.FREEZE/SEAL/PREVENTEXTENSIONS ===\n");

// freeze() - completamente immutabile
const frozen = Object.freeze({ a: 1, b: { c: 2 } });
frozen.a = 999; // ignorato
frozen.d = 4;   // ignorato
delete frozen.b; // ignorato
console.log("Frozen:", frozen);
console.log("Is frozen:", Object.isFrozen(frozen));

// ATTENZIONE: shallow freeze
frozen.b.c = 999; // FUNZIONA! oggetto nested non frozen
console.log("Nested modificato:", frozen.b.c);

// seal() - no add/delete, ma modifica OK
const sealed = Object.seal({ a: 1, b: 2 });
sealed.a = 999;   // OK
sealed.c = 3;     // ignorato
delete sealed.b;  // ignorato
console.log("\nSealed:", sealed);
console.log("Is sealed:", Object.isSealed(sealed));

// preventExtensions() - no add, delete/modifica OK
const nonExt = Object.preventExtensions({ a: 1, b: 2 });
nonExt.a = 999;  // OK
delete nonExt.b; // OK
nonExt.c = 3;    // ignorato
console.log("\nNon estendibile:", nonExt);
console.log("Is extensible:", Object.isExtensible(nonExt));


console.log("\n=== 4. OBJECT.IS() ===\n");

// Confronto più preciso di ===
console.log("Object.is(5, 5):", Object.is(5, 5));
console.log("Object.is(5, '5'):", Object.is(5, '5'));

// Differenze con ===
console.log("\nNaN === NaN:", NaN === NaN);
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN));

console.log("\n+0 === -0:", +0 === -0);
console.log("Object.is(+0, -0):", Object.is(+0, -0));


console.log("\n=== 5. OBJECT.FROMENTRIES() ===\n");

// Da entries a oggetto
const entries2 = [
  ["nome", "Mario"],
  ["età", 30],
  ["città", "Milano"]
];

const obj = Object.fromEntries(entries2);
console.log("Da entries:", obj);

// Utile con Map
const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3]
]);

const fromMap = Object.fromEntries(map);
console.log("\nDa Map:", fromMap);

// Trasformare oggetti
const prices = { apple: 1.5, banana: 0.8, orange: 2.0 };
const doubled = Object.fromEntries(
  Object.entries(prices).map(([key, val]) => [key, val * 2])
);
console.log("\nPrezzi originali:", prices);
console.log("Prezzi raddoppiati:", doubled);


console.log("\n=== 6. OBJECT.GETOWNPROPERTYNAMES/SYMBOLS ===\n");

const obj2 = { a: 1, b: 2 };
Object.defineProperty(obj2, "hidden", {
  value: "segreto",
  enumerable: false
});

const sym = Symbol("mySymbol");
obj2[sym] = "valore simbolo";

// getOwnPropertyNames - tutte le proprietà string (anche non-enumerabili)
console.log("Property names:", Object.getOwnPropertyNames(obj2));

// Object.keys - solo enumerabili
console.log("Keys:", Object.keys(obj2));

// getOwnPropertySymbols - solo simboli
console.log("Symbols:", Object.getOwnPropertySymbols(obj2));


console.log("\n=== 7. OBJECT.GETPROTOTYPEOF/SETPROTOTYPEOF ===\n");

const proto = {
  saluta() {
    return "Ciao!";
  }
};

const oggetto = { nome: "Mario" };

// Impostare prototipo
Object.setPrototypeOf(oggetto, proto);

console.log("oggetto.saluta():", oggetto.saluta());
console.log("Prototype:", Object.getPrototypeOf(oggetto) === proto);

// Meglio usare Object.create() per performance
const oggetto2 = Object.create(proto);
oggetto2.nome = "Luigi";
console.log("oggetto2.saluta():", oggetto2.saluta());


console.log("\n=== 8. OBJECT.HASOWN() (ES2022) ===\n");

const obj3 = { a: 1 };
Object.prototype.b = 2; // aggiungo al prototype (sconsigliato!)

// hasOwnProperty - metodo dell'oggetto (può essere overridden)
console.log("obj3.hasOwnProperty('a'):", obj3.hasOwnProperty('a'));
console.log("obj3.hasOwnProperty('b'):", obj3.hasOwnProperty('b'));

// Object.hasOwn - metodo statico (più sicuro)
if (typeof Object.hasOwn === 'function') {
  console.log("\nObject.hasOwn(obj3, 'a'):", Object.hasOwn(obj3, 'a'));
  console.log("Object.hasOwn(obj3, 'b'):", Object.hasOwn(obj3, 'b'));
}

delete Object.prototype.b; // cleanup


console.log("\n=== 9. OBJECT.GROUPBY() (ES2024) ===\n");

// Nota: potrebbe non essere disponibile in tutti gli ambienti
const persone = [
  { nome: "Mario", età: 30, città: "Milano" },
  { nome: "Luigi", età: 25, città: "Roma" },
  { nome: "Anna", età: 30, città: "Milano" },
  { nome: "Giovanni", età: 35, città: "Roma" }
];

// Polyfill per groupBy se non disponibile
if (typeof Object.groupBy !== 'function') {
  Object.groupBy = function(array, callback) {
    return array.reduce((groups, item) => {
      const key = callback(item);
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(item);
      return groups;
    }, {});
  };
}

const perCittà = Object.groupBy(persone, p => p.città);
console.log("Raggruppati per città:", perCittà);

const perEtà = Object.groupBy(persone, p => p.età);
console.log("\nRaggruppati per età:", perEtà);


console.log("\n=== 10. PATTERN COMUNI ===\n");

// Pattern 1: Filtrare proprietà
function filterObject(obj, predicate) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, val]) => predicate(key, val))
  );
}

const dati = { a: 1, b: 2, c: 3, d: 4 };
const pari = filterObject(dati, (k, v) => v % 2 === 0);
console.log("Solo valori pari:", pari);

// Pattern 2: Mappare valori
function mapObject(obj, mapper) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, val]) => [key, mapper(val, key)])
  );
}

const numeri = { a: 1, b: 2, c: 3 };
const raddoppiati = mapObject(numeri, v => v * 2);
console.log("\nNumeri raddoppiati:", raddoppiati);

// Pattern 3: Deep freeze
function deepFreeze(obj) {
  Object.freeze(obj);
  Object.getOwnPropertyNames(obj).forEach(prop => {
    if (obj[prop] !== null &&
        (typeof obj[prop] === "object" || typeof obj[prop] === "function") &&
        !Object.isFrozen(obj[prop])) {
      deepFreeze(obj[prop]);
    }
  });
  return obj;
}

const nested = { a: 1, b: { c: 2, d: { e: 3 } } };
deepFreeze(nested);
nested.a = 999;           // ignorato
nested.b.d.e = 999;       // ignorato (deep frozen!)
console.log("\nDeep frozen:", nested);

// Pattern 4: Pick properties
function pick(obj, ...keys) {
  return Object.fromEntries(
    keys.filter(key => key in obj)
        .map(key => [key, obj[key]])
  );
}

const user = { id: 1, nome: "Mario", email: "mario@test.com", password: "secret" };
const publicData = pick(user, "id", "nome", "email");
console.log("\nDati pubblici:", publicData);

// Pattern 5: Omit properties
function omit(obj, ...keys) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keys.includes(key))
  );
}

const safeUser = omit(user, "password");
console.log("Dati sicuri:", safeUser);


console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO METODI OBJECT");
console.log("=".repeat(50));
console.log(`
ISPEZIONARE:
• Object.keys(obj) - array chiavi enumerabili
• Object.values(obj) - array valori enumerabili
• Object.entries(obj) - array [[k,v],...] enumerabili
• Object.getOwnPropertyNames(obj) - tutte chiavi string
• Object.getOwnPropertySymbols(obj) - chiavi symbol

MANIPOLARE:
• Object.assign(target, ...sources) - merge oggetti
• Object.fromEntries(entries) - da [[k,v],...] a oggetto
• Object.setPrototypeOf(obj, proto) - imposta prototipo

CONTROLLARE:
• Object.freeze(obj) - immutabile (shallow)
• Object.seal(obj) - no add/delete proprietà
• Object.preventExtensions(obj) - no add proprietà

VERIFICARE:
• Object.isFrozen(obj) - è frozen?
• Object.isSealed(obj) - è sealed?
• Object.isExtensible(obj) - è estendibile?
• Object.hasOwn(obj, prop) - ha proprietà propria? (ES2022)
• Object.is(val1, val2) - confronto preciso

PROTOTIPI:
• Object.getPrototypeOf(obj) - ottiene prototipo
• Object.setPrototypeOf(obj, proto) - imposta prototipo
• Object.create(proto, descriptors) - crea con prototipo

DESCRIPTORS:
• Object.getOwnPropertyDescriptor(obj, prop) - singolo
• Object.getOwnPropertyDescriptors(obj) - tutti
• Object.defineProperty(obj, prop, descriptor)
• Object.defineProperties(obj, descriptors)

NUOVI (ES2024):
• Object.groupBy(array, fn) - raggruppa array

DIFFERENZE CHIAVE:

KEYS VS GETOWNPROPERTYNAMES:
• keys: solo enumerabili
• getOwnPropertyNames: tutte (anche non-enumerabili)

ASSIGN VS SPREAD:
• Object.assign(target, src) - modifica target
• {...obj} - crea nuovo oggetto
• Entrambi shallow copy

FREEZE VS SEAL VS PREVENTEXTENSIONS:
• freeze: no modifica, no add, no delete
• seal: SI modifica, no add, no delete
• preventExtensions: SI modifica, SI delete, no add

IS VS ===:
• === : NaN !== NaN, +0 === -0
• Object.is: NaN === NaN, +0 !== -0

PATTERN COMUNI:
✓ Filter oggetti: entries + filter + fromEntries
✓ Map oggetti: entries + map + fromEntries
✓ Pick props: filtra chiavi desiderate
✓ Omit props: escludi chiavi
✓ Deep freeze: ricorsivo su nested
✓ Merge con defaults: assign({}, defaults, options)

BEST PRACTICES:
✓ keys/values/entries per iterazione
✓ assign per merge opzioni
✓ freeze per configurazioni immutabili
✓ is per confronti precisi (NaN, ±0)
✓ hasOwn invece di hasOwnProperty (più sicuro)
✗ Non modificare Object.prototype
✗ Attenzione: freeze/seal/assign sono shallow
✗ setPrototypeOf lento (usa create)
`);
