/**
 * VERIFICA ESISTENZA PROPRIETÀ
 * 
 * Metodi per controllare se una proprietà esiste in un oggetto
 */

console.log("=== 1. OPERATORE IN ===\n");

const persona = {
  nome: "Mario",
  cognome: "Rossi",
  età: 30,
  professione: "Sviluppatore"
};

// Verifica con 'in'
console.log("'nome' in persona:", "nome" in persona); // true
console.log("'città' in persona:", "città" in persona); // false
console.log("'età' in persona:", "età" in persona); // true

// Verifica proprietà ereditate
console.log("\n'toString' in persona:", "toString" in persona); // true (ereditata)
console.log("'hasOwnProperty' in persona:", "hasOwnProperty" in persona); // true (ereditata)


console.log("\n=== 2. HASOWNPROPERTY() ===\n");

const auto = {
  marca: "Fiat",
  modello: "500",
  anno: 2020
};

// Solo proprietà proprie (non ereditate)
console.log("auto.hasOwnProperty('marca'):", auto.hasOwnProperty('marca')); // true
console.log("auto.hasOwnProperty('colore'):", auto.hasOwnProperty('colore')); // false
console.log("auto.hasOwnProperty('toString'):", auto.hasOwnProperty('toString')); // false

// Differenza con 'in'
console.log("\n'toString' in auto:", "toString" in auto); // true (ereditata)
console.log("auto.hasOwnProperty('toString'):", auto.hasOwnProperty('toString')); // false


console.log("\n=== 3. CONFRONTO CON UNDEFINED ===\n");

const config = {
  tema: "scuro",
  lingua: "it",
  notifiche: true,
  timeout: 0,
  debug: false
};

// Verifica con undefined
console.log("config.tema !== undefined:", config.tema !== undefined); // true
console.log("config.dimensione !== undefined:", config.dimensione !== undefined); // false

// ATTENZIONE: problema con valori falsy!
console.log("\nconfig.timeout !== undefined:", config.timeout !== undefined); // true
console.log("config.debug !== undefined:", config.debug !== undefined); // true

// Se proprietà vale undefined
const obj = { prop: undefined };
console.log("\nobj.prop !== undefined:", obj.prop !== undefined); // false (ma la prop esiste!)
console.log("'prop' in obj:", "prop" in obj); // true (corretto)


console.log("\n=== 4. OBJECT.PROTOTYPE.HASOWNPROPERTY.CALL() ===\n");

// Metodo sicuro (evita override di hasOwnProperty)
const oggettoSpeciale = {
  hasOwnProperty: function() {
    return false; // override del metodo
  },
  nome: "Test"
};

console.log("oggettoSpeciale.hasOwnProperty('nome'):", oggettoSpeciale.hasOwnProperty('nome')); // false (override!)

// Metodo sicuro
const hasOwn = Object.prototype.hasOwnProperty;
console.log("hasOwn.call(oggettoSpeciale, 'nome'):", hasOwn.call(oggettoSpeciale, 'nome')); // true


console.log("\n=== 5. OBJECT.HASOWN() (ES2022) ===\n");

// Metodo moderno e sicuro
const prodotto = {
  id: 101,
  nome: "Laptop",
  prezzo: 999
};

// Object.hasOwn() (ES2022+)
if (typeof Object.hasOwn === 'function') {
  console.log("Object.hasOwn(prodotto, 'nome'):", Object.hasOwn(prodotto, 'nome')); // true
  console.log("Object.hasOwn(prodotto, 'sconto'):", Object.hasOwn(prodotto, 'sconto')); // false
  console.log("Object.hasOwn(prodotto, 'toString'):", Object.hasOwn(prodotto, 'toString')); // false
} else {
  console.log("Object.hasOwn non disponibile in questo ambiente");
}


console.log("\n=== 6. TYPEOF E CONTROLLI ===\n");

const utente = {
  username: "mario.rossi",
  email: "mario@test.com",
  isAdmin: false,
  loginCount: 0
};

// typeof per verificare tipo
console.log("typeof utente.username:", typeof utente.username); // "string"
console.log("typeof utente.telefono:", typeof utente.telefono); // "undefined"

// Verifica tipo specifico
function hasPropType(obj, prop, type) {
  return prop in obj && typeof obj[prop] === type;
}

console.log("\nusername è string:", hasPropType(utente, "username", "string")); // true
console.log("isAdmin è boolean:", hasPropType(utente, "isAdmin", "boolean")); // true
console.log("loginCount è number:", hasPropType(utente, "loginCount", "number")); // true


console.log("\n=== 7. VERIFICA MULTIPLA ===\n");

const dati = {
  nome: "Mario",
  cognome: "Rossi",
  email: "mario@test.com"
};

// Verificare più proprietà
const richiesteProps = ["nome", "cognome", "email", "telefono"];

console.log("Proprietà richieste:");
richiesteProps.forEach(prop => {
  const esiste = prop in dati;
  console.log(`  ${prop}: ${esiste ? "✓" : "✗"}`);
});

// Funzione helper
function hasAllProps(obj, props) {
  return props.every(prop => prop in obj);
}

console.log("\nHa tutte [nome, cognome]:", hasAllProps(dati, ["nome", "cognome"])); // true
console.log("Ha tutte [nome, telefono]:", hasAllProps(dati, ["nome", "telefono"])); // false


console.log("\n=== 8. OBJECT.KEYS() PER VERIFICA ===\n");

const libro = {
  titolo: "JavaScript",
  autore: "Mario Rossi",
  anno: 2024,
  pagine: 350
};

// Ottenere tutte le chiavi
const chiavi = Object.keys(libro);
console.log("Chiavi:", chiavi);

// Verificare con includes
console.log("\nContiene 'titolo':", chiavi.includes("titolo")); // true
console.log("Contiene 'editore':", chiavi.includes("editore")); // false

// Numero di proprietà
console.log("\nNumero proprietà:", chiavi.length);


console.log("\n=== 9. PROPERTYISENUMERABLE() ===\n");

const oggetto = {
  visibile: "sì"
};

// Definire proprietà non enumerabile
Object.defineProperty(oggetto, "nascosta", {
  value: "no",
  enumerable: false
});

console.log("'visibile' in oggetto:", "visibile" in oggetto); // true
console.log("'nascosta' in oggetto:", "nascosta" in oggetto); // true

console.log("\noggetto.propertyIsEnumerable('visibile'):", oggetto.propertyIsEnumerable('visibile')); // true
console.log("oggetto.propertyIsEnumerable('nascosta'):", oggetto.propertyIsEnumerable('nascosta')); // false

// In Object.keys()
console.log("\nObject.keys(oggetto):", Object.keys(oggetto)); // solo ['visibile']


console.log("\n=== 10. PATTERN PRATICI ===\n");

// Pattern 1: Accesso sicuro con default
function getProp(obj, prop, defaultValue = null) {
  return prop in obj ? obj[prop] : defaultValue;
}

const settings = { tema: "scuro" };
console.log("Tema:", getProp(settings, "tema", "chiaro")); // "scuro"
console.log("Lingua:", getProp(settings, "lingua", "it")); // "it"

// Pattern 2: Validazione schema
function validateSchema(obj, schema) {
  const errors = [];
  
  for (let prop in schema) {
    if (!(prop in obj)) {
      errors.push(`Manca proprietà: ${prop}`);
    } else if (typeof obj[prop] !== schema[prop]) {
      errors.push(`Tipo errato per ${prop}: atteso ${schema[prop]}, ricevuto ${typeof obj[prop]}`);
    }
  }
  
  return errors.length === 0 ? { valid: true } : { valid: false, errors };
}

const userSchema = {
  username: "string",
  age: "number",
  isActive: "boolean"
};

const user1 = { username: "mario", age: 30, isActive: true };
const user2 = { username: "luigi", age: "25" }; // age è string e manca isActive

console.log("\nValidazione user1:", validateSchema(user1, userSchema));
console.log("Validazione user2:", validateSchema(user2, userSchema));

// Pattern 3: Merge sicuro
function safeMerge(target, source, allowedProps) {
  const result = { ...target };
  
  for (let prop of allowedProps) {
    if (prop in source) {
      result[prop] = source[prop];
    }
  }
  
  return result;
}

const base = { a: 1, b: 2, c: 3 };
const updates = { b: 20, c: 30, d: 40 };
const merged = safeMerge(base, updates, ["b", "c"]);

console.log("\nBase:", base);
console.log("Updates:", updates);
console.log("Merged (solo b,c):", merged);


console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO VERIFICA PROPRIETÀ");
console.log("=".repeat(50));
console.log(`
METODI DI VERIFICA:

1. OPERATORE IN:
   "prop" in obj
   • Verifica proprietà proprie ed ereditate
   • Restituisce boolean
   • Caso d'uso: verifica generale esistenza
   
2. HASOWNPROPERTY():
   obj.hasOwnProperty("prop")
   • Solo proprietà proprie (non ereditate)
   • Può essere overridden (attenzione!)
   • Caso d'uso: escludere proprietà prototype
   
3. OBJECT.HASOWN() (ES2022):
   Object.hasOwn(obj, "prop")
   • Versione sicura di hasOwnProperty
   • Non può essere overridden
   • Caso d'uso: verifica sicura (preferibile)
   
4. CONFRONTO UNDEFINED:
   obj.prop !== undefined
   • Semplice ma impreciso
   • Problema: prop può valere undefined
   • Caso d'uso: quando certo prop != undefined
   
5. OBJECT.KEYS():
   Object.keys(obj).includes("prop")
   • Array di chiavi proprie enumerabili
   • Più lento per singola verifica
   • Caso d'uso: liste di proprietà

DIFFERENZE CHIAVE:

IN vs HASOWNPROPERTY:
• in: include ereditate
• hasOwnProperty: solo proprie

HASOWNPROPERTY vs OBJECT.HASOWN:
• hasOwnProperty: può essere overridden
• Object.hasOwn: sicuro, moderno (ES2022)

UNDEFINED vs IN:
• undefined: false positive se prop = undefined
• in: verifica esistenza reale

QUANDO USARE:

✓ 'in' - verifica rapida, ereditate OK
✓ Object.hasOwn() - verifica sicura moderne
✓ hasOwnProperty() - compatibilità vecchi browser
✓ Object.keys() - lista completa proprietà
✓ typeof - verifica tipo + esistenza
✗ !== undefined - impreciso, evitare

BEST PRACTICES:

✓ Preferisci Object.hasOwn() se disponibile
✓ Usa 'in' per check rapidi
✓ hasOwnProperty con .call() se override possibile
✓ Verifica tipo con typeof quando necessario
✗ Non fare affidamento solo su !== undefined
✗ Attento a proprietà ereditate con 'in'

PATTERN COMUNI:

• Accesso sicuro: prop in obj ? obj[prop] : default
• Validazione: props.every(p => p in obj)
• Merge selettivo: filtra solo prop esistenti
• Schema validation: controlla tipo + esistenza

EDGE CASES:

• Proprietà con valore undefined
• Proprietà non enumerabili
• Proprietà ereditate da prototype
• Override di hasOwnProperty
• Symbol come chiave
`);
