/**
 * OBJECT.DEFINEPROPERTY E DEFINEPROPERTIES
 * 
 * Definire proprietà con controllo completo sugli attributi
 */

console.log("=== 1. OBJECT.DEFINEPROPERTY BASE ===\n");

const persona = {};

// Definire una proprietà con attributi specifici
Object.defineProperty(persona, "nome", {
  value: "Mario",
  writable: true,      // può essere modificato
  enumerable: true,    // appare in for...in e Object.keys()
  configurable: true   // può essere cancellato e riconfigurato
});

console.log("Nome:", persona.nome);
console.log("Keys:", Object.keys(persona));

persona.nome = "Luigi";
console.log("Dopo modifica:", persona.nome);


console.log("\n=== 2. PROPRIETÀ NON WRITABLE ===\n");

const config = {};

Object.defineProperty(config, "API_KEY", {
  value: "abc123xyz",
  writable: false,     // NON modificabile
  enumerable: true,
  configurable: true
});

console.log("API Key:", config.API_KEY);

// Tentativo di modifica (ignorato in non-strict)
config.API_KEY = "nuova_chiave";
console.log("Dopo tentativo modifica:", config.API_KEY); // ancora "abc123xyz"


console.log("\n=== 3. PROPRIETÀ NON ENUMERABLE ===\n");

const utente = {
  username: "mario",
  email: "mario@test.com"
};

// Aggiungere proprietà nascosta
Object.defineProperty(utente, "password", {
  value: "secreta123",
  writable: true,
  enumerable: false,   // NON appare in enumerazioni
  configurable: true
});

console.log("Password:", utente.password); // accessibile direttamente

console.log("\nFor...in:");
for (let key in utente) {
  console.log(`  ${key}: ${utente[key]}`); // password NON appare
}

console.log("\nObject.keys():", Object.keys(utente)); // ["username", "email"]


console.log("\n=== 4. PROPRIETÀ NON CONFIGURABLE ===\n");

const immutabile = {};

Object.defineProperty(immutabile, "id", {
  value: 12345,
  writable: false,
  enumerable: true,
  configurable: false  // NON può essere cancellato o riconfigurato
});

console.log("ID:", immutabile.id);

// Tentativo di cancellazione (ignorato)
delete immutabile.id;
console.log("Dopo delete:", immutabile.id); // ancora presente

// Tentativo di riconfigurare (errore!)
try {
  Object.defineProperty(immutabile, "id", {
    value: 99999
  });
} catch (e) {
  console.log("Errore riconfigurare:", e.message);
}


console.log("\n=== 5. GETTER E SETTER CON DEFINEPROPERTY ===\n");

const cerchio = {
  _raggio: 5
};

Object.defineProperty(cerchio, "raggio", {
  get() {
    return this._raggio;
  },
  set(valore) {
    if (valore <= 0) {
      throw new Error("Il raggio deve essere positivo");
    }
    this._raggio = valore;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(cerchio, "area", {
  get() {
    return Math.PI * this._raggio ** 2;
  },
  enumerable: true,
  configurable: false
});

console.log("Raggio:", cerchio.raggio);
console.log("Area:", cerchio.area.toFixed(2));

cerchio.raggio = 10;
console.log("\nNuovo raggio:", cerchio.raggio);
console.log("Nuova area:", cerchio.area.toFixed(2));


console.log("\n=== 6. OBJECT.DEFINEPROPERTIES (MULTIPLO) ===\n");

const prodotto = {};

Object.defineProperties(prodotto, {
  nome: {
    value: "Laptop",
    writable: true,
    enumerable: true,
    configurable: true
  },
  
  prezzo: {
    value: 1200,
    writable: true,
    enumerable: true,
    configurable: true
  },
  
  categoria: {
    value: "Elettronica",
    writable: false,
    enumerable: true,
    configurable: false
  },
  
  _sconto: {
    value: 0.1,
    writable: true,
    enumerable: false, // nascosto
    configurable: true
  },
  
  prezzoScontato: {
    get() {
      return this.prezzo * (1 - this._sconto);
    },
    enumerable: true,
    configurable: true
  }
});

console.log("Prodotto:", prodotto);
console.log("Prezzo scontato:", prodotto.prezzoScontato);
console.log("Keys visibili:", Object.keys(prodotto));


console.log("\n=== 7. GETOWNPROPERTYDESCRIPTOR ===\n");

const oggetto = {
  normale: "valore"
};

Object.defineProperty(oggetto, "speciale", {
  value: "altro valore",
  writable: false,
  enumerable: false,
  configurable: false
});

// Ottenere descriptor di una proprietà
const descNormale = Object.getOwnPropertyDescriptor(oggetto, "normale");
console.log("Descriptor 'normale':", descNormale);

const descSpeciale = Object.getOwnPropertyDescriptor(oggetto, "speciale");
console.log("\nDescriptor 'speciale':", descSpeciale);

// Ottenere tutti i descriptors
const allDescriptors = Object.getOwnPropertyDescriptors(oggetto);
console.log("\nTutti descriptors:", allDescriptors);


console.log("\n=== 8. CLONAZIONE CON DESCRIPTORS ===\n");

const originale = {
  pub: "pubblico"
};

Object.defineProperty(originale, "priv", {
  value: "privato",
  writable: true,
  enumerable: false,
  configurable: true
});

// Clone shallow (perde descriptors)
const cloneShallow = { ...originale };
console.log("Clone shallow keys:", Object.keys(cloneShallow)); // solo "pub"

// Clone con descriptors
const cloneCompleto = Object.defineProperties(
  {},
  Object.getOwnPropertyDescriptors(originale)
);

console.log("\nClone completo keys (visibili):", Object.keys(cloneCompleto)); // solo "pub"
console.log("Clone completo ha 'priv':", cloneCompleto.priv); // accessibile


console.log("\n=== 9. PATTERN: COSTANTI ===\n");

const Costanti = {};

Object.defineProperties(Costanti, {
  PI: {
    value: 3.14159,
    writable: false,
    enumerable: true,
    configurable: false
  },
  
  E: {
    value: 2.71828,
    writable: false,
    enumerable: true,
    configurable: false
  },
  
  GRAVITY: {
    value: 9.81,
    writable: false,
    enumerable: true,
    configurable: false
  }
});

console.log("Costanti:", Costanti);

// Tentativo modifica (ignorato)
Costanti.PI = 3;
console.log("PI dopo tentativo modifica:", Costanti.PI);


console.log("\n=== 10. PATTERN AVANZATI ===\n");

// Pattern 1: Proprietà con logging
function createLoggedProperty(obj, prop, initialValue) {
  let value = initialValue;
  
  Object.defineProperty(obj, prop, {
    get() {
      console.log(`GET ${prop}: ${value}`);
      return value;
    },
    set(newValue) {
      console.log(`SET ${prop}: ${value} → ${newValue}`);
      value = newValue;
    },
    enumerable: true,
    configurable: true
  });
}

const logged = {};
createLoggedProperty(logged, "count", 0);

console.log("Valore:", logged.count);
logged.count = 5;
logged.count++;
console.log("Valore finale:", logged.count);

// Pattern 2: Proprietà read-only computed
const rettangolo = {
  larghezza: 10,
  altezza: 5
};

Object.defineProperties(rettangolo, {
  area: {
    get() {
      return this.larghezza * this.altezza;
    },
    enumerable: true,
    configurable: false
  },
  
  perimetro: {
    get() {
      return 2 * (this.larghezza + this.altezza);
    },
    enumerable: true,
    configurable: false
  }
});

console.log("\nRettangolo:", { 
  larghezza: rettangolo.larghezza, 
  altezza: rettangolo.altezza,
  area: rettangolo.area,
  perimetro: rettangolo.perimetro
});

// Pattern 3: Metadata nascosta
function addMetadata(obj) {
  Object.defineProperty(obj, "__meta__", {
    value: {
      created: new Date(),
      version: "1.0",
      author: "System"
    },
    writable: false,
    enumerable: false,  // nascosto
    configurable: false
  });
}

const documento = { title: "Doc1", content: "..." };
addMetadata(documento);

console.log("\nDocumento keys:", Object.keys(documento)); // solo title, content
console.log("Metadata:", documento.__meta__); // accessibile ma nascosto


console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO DEFINEPROPERTY");
console.log("=".repeat(50));
console.log(`
OBJECT.DEFINEPROPERTY:
Object.defineProperty(obj, "prop", descriptor)

ATTRIBUTI DESCRIPTOR:

• value: valore della proprietà
• writable: true/false - modificabile?
• enumerable: true/false - visibile in for...in?
• configurable: true/false - eliminabile/riconfigurabile?
• get: function() - getter
• set: function(val) - setter

TIPI DESCRIPTOR:

1. DATA DESCRIPTOR (con value):
   { value, writable, enumerable, configurable }
   
2. ACCESSOR DESCRIPTOR (con get/set):
   { get, set, enumerable, configurable }

NON PUOI MESCOLARE: value/writable con get/set

DEFAULT VALUES:
• Quando usi defineProperty:
  - writable: false
  - enumerable: false
  - configurable: false
  
• Quando definisci normalmente:
  - writable: true
  - enumerable: true
  - configurable: true

WRITABLE:
• false: proprietà immutabile (read-only)
• Tentativo modifica ignorato (non-strict) o errore (strict)
• Usa per costanti

ENUMERABLE:
• false: proprietà "nascosta"
• Non appare in: for...in, Object.keys(), Object.values()
• Appare in: Object.getOwnPropertyNames()
• Usa per: metadata, metodi helper, proprietà interne

CONFIGURABLE:
• false: proprietà "bloccata"
• Non può essere: eliminata, riconfigurata
• Eccezione: writable può passare da true a false
• Usa per: proprietà permanenti, API stabili

OBJECT.DEFINEPROPERTIES:
Definisce multiple proprietà in una volta:

Object.defineProperties(obj, {
  prop1: { value: 1, ... },
  prop2: { value: 2, ... }
});

GETOWNPROPERTYDESCRIPTOR(S):
• getOwnPropertyDescriptor(obj, "prop") - singola
• getOwnPropertyDescriptors(obj) - tutte
• Restituisce descriptor object

CASI D'USO:

✓ Costanti immutabili (writable: false, configurable: false)
✓ Metadata nascosta (enumerable: false)
✓ API stabili (configurable: false)
✓ Computed properties (get/set)
✓ Validazione (set con controlli)
✓ Logging/tracking (get/set con side effects)
✓ Clone completo (con descriptors)

BEST PRACTICES:
✓ Usa per controllo fine su proprietà
✓ Documenta proprietà non-enumerable
✓ writable:false per vere costanti
✓ configurable:false solo se necessario
✗ Non abusare (complessità)
✗ Attento a backward compatibility

CONFRONTO:
• obj.prop = val: writable/enumerable/configurable = true
• defineProperty: tutti false per default
• Usa defineProperty quando serve controllo preciso
`);
