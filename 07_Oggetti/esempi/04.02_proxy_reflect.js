/**
 * PROXY E REFLECT
 * 
 * Meta-programmazione con Proxy e Reflect API
 */

console.log("=== 1. PROXY BASE ===\n");

const target = {
  nome: "Mario",
  età: 30
};

const handler = {
  get(target, prop) {
    console.log(`GET: ${prop}`);
    return target[prop];
  },
  
  set(target, prop, value) {
    console.log(`SET: ${prop} = ${value}`);
    target[prop] = value;
    return true; // indica successo
  }
};

const proxy = new Proxy(target, handler);

console.log("Accesso:", proxy.nome);
proxy.età = 31;
console.log("Nuovo valore:", proxy.età);


console.log("\n=== 2. VALIDAZIONE CON PROXY ===\n");

const validator = {
  set(target, prop, value) {
    if (prop === "età") {
      if (typeof value !== "number") {
        throw new TypeError("L'età deve essere un numero");
      }
      if (value < 0 || value > 150) {
        throw new RangeError("Età non valida");
      }
    }
    
    if (prop === "email") {
      if (!value.includes("@")) {
        throw new TypeError("Email non valida");
      }
    }
    
    target[prop] = value;
    return true;
  }
};

const persona = new Proxy({}, validator);

persona.nome = "Mario"; // OK
persona.età = 30;       // OK
console.log("Persona:", persona);

try {
  persona.età = -5;
} catch (e) {
  console.log("Errore:", e.message);
}

try {
  persona.email = "invalid";
} catch (e) {
  console.log("Errore:", e.message);
}


console.log("\n=== 3. DEFAULT VALUES ===\n");

const defaults = {
  get(target, prop) {
    return prop in target ? target[prop] : "N/A";
  }
};

const config = new Proxy({ tema: "scuro" }, defaults);

console.log("tema:", config.tema);         // "scuro"
console.log("lingua:", config.lingua);     // "N/A"
console.log("notifiche:", config.notifiche); // "N/A"


console.log("\n=== 4. LOGGING E TRACCIAMENTO ===\n");

function createLoggingProxy(obj, name) {
  return new Proxy(obj, {
    get(target, prop) {
      console.log(`[${name}] GET ${String(prop)}`);
      return target[prop];
    },
    
    set(target, prop, value) {
      console.log(`[${name}] SET ${String(prop)} = ${value}`);
      target[prop] = value;
      return true;
    },
    
    deleteProperty(target, prop) {
      console.log(`[${name}] DELETE ${String(prop)}`);
      delete target[prop];
      return true;
    }
  });
}

const utente = createLoggingProxy({ username: "mario" }, "Utente");

utente.email = "mario@test.com";
console.log(utente.username);
delete utente.email;


console.log("\n=== 5. PROPRIETÀ NEGATIVE ARRAY ===\n");

function createArrayProxy(arr) {
  return new Proxy(arr, {
    get(target, prop) {
      const index = Number(prop);
      
      // Accesso con indici negativi (stile Python)
      if (Number.isInteger(index) && index < 0) {
        return target[target.length + index];
      }
      
      return target[prop];
    }
  });
}

const arr = createArrayProxy([10, 20, 30, 40, 50]);

console.log("arr[0]:", arr[0]);     // 10
console.log("arr[-1]:", arr[-1]);   // 50 (ultimo)
console.log("arr[-2]:", arr[-2]);   // 40 (penultimo)


console.log("\n=== 6. PRIVATE PROPERTIES ===\n");

const privateProps = {
  get(target, prop) {
    if (String(prop).startsWith("_")) {
      throw new Error(`Proprietà privata: ${String(prop)}`);
    }
    return target[prop];
  },
  
  set(target, prop, value) {
    if (String(prop).startsWith("_")) {
      throw new Error(`Proprietà privata: ${String(prop)}`);
    }
    target[prop] = value;
    return true;
  }
};

const obj = new Proxy({ nome: "Mario", _password: "secret" }, privateProps);

console.log("nome:", obj.nome); // OK

try {
  console.log(obj._password);
} catch (e) {
  console.log("Errore:", e.message);
}


console.log("\n=== 7. REFLECT API ===\n");

const target2 = {
  a: 1,
  b: 2
};

// Reflect fornisce metodi per operazioni su oggetti
console.log("Reflect.get:", Reflect.get(target2, "a"));

Reflect.set(target2, "c", 3);
console.log("Dopo set:", target2);

console.log("\nReflect.has:", Reflect.has(target2, "b"));

Reflect.deleteProperty(target2, "b");
console.log("Dopo delete:", target2);

console.log("\nReflect.ownKeys:", Reflect.ownKeys(target2));


console.log("\n=== 8. PROXY + REFLECT ===\n");

const smartHandler = {
  get(target, prop, receiver) {
    console.log(`Getting ${String(prop)}`);
    // Usa Reflect per default behavior corretto
    return Reflect.get(target, prop, receiver);
  },
  
  set(target, prop, value, receiver) {
    console.log(`Setting ${String(prop)} = ${value}`);
    
    // Validazione
    if (prop === "età" && typeof value !== "number") {
      return false; // fallimento
    }
    
    return Reflect.set(target, prop, value, receiver);
  },
  
  has(target, prop) {
    console.log(`Checking ${String(prop)}`);
    return Reflect.has(target, prop);
  }
};

const smart = new Proxy({ nome: "Mario" }, smartHandler);

smart.nome;
smart.età = 30;
console.log("\n'nome' in smart:", "nome" in smart);


console.log("\n=== 9. OBSERVABLE PATTERN ===\n");

function observable(obj, onChange) {
  return new Proxy(obj, {
    set(target, prop, value, receiver) {
      const oldValue = target[prop];
      const result = Reflect.set(target, prop, value, receiver);
      
      if (result && oldValue !== value) {
        onChange(prop, oldValue, value);
      }
      
      return result;
    },
    
    deleteProperty(target, prop) {
      const oldValue = target[prop];
      const result = Reflect.deleteProperty(target, prop);
      
      if (result) {
        onChange(prop, oldValue, undefined);
      }
      
      return result;
    }
  });
}

const stato = observable(
  { count: 0, nome: "Test" },
  (prop, oldVal, newVal) => {
    console.log(`Cambiamento: ${prop} ${oldVal} → ${newVal}`);
  }
);

stato.count = 5;
stato.nome = "Nuovo";
delete stato.nome;


console.log("\n=== 10. REVOCABLE PROXY ===\n");

const { proxy: revocableProxy, revoke } = Proxy.revocable(
  { data: "importante" },
  {
    get(target, prop) {
      return target[prop];
    }
  }
);

console.log("Prima revoca:", revocableProxy.data);

// Revocare il proxy
revoke();

try {
  console.log(revocableProxy.data); // errore!
} catch (e) {
  console.log("Errore dopo revoca:", e.message);
}


console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO PROXY E REFLECT");
console.log("=".repeat(50));
console.log(`
PROXY:

SINTASSI:
const proxy = new Proxy(target, handler);

HANDLER TRAPS (interceptors):

• get(target, prop, receiver)
  - Intercetta lettura: obj.prop, obj[prop]
  
• set(target, prop, value, receiver)
  - Intercetta scrittura: obj.prop = val
  - Return true per successo, false per fallimento
  
• has(target, prop)
  - Intercetta: 'prop' in obj
  
• deleteProperty(target, prop)
  - Intercetta: delete obj.prop
  
• apply(target, thisArg, args)
  - Intercetta chiamata funzione: fn()
  
• construct(target, args, newTarget)
  - Intercetta: new Constructor()
  
• getPrototypeOf(target)
  - Intercetta: Object.getPrototypeOf()
  
• setPrototypeOf(target, proto)
  - Intercetta: Object.setPrototypeOf()
  
• defineProperty(target, prop, descriptor)
  - Intercetta: Object.defineProperty()
  
• getOwnPropertyDescriptor(target, prop)
  - Intercetta: Object.getOwnPropertyDescriptor()
  
• ownKeys(target)
  - Intercetta: Object.keys(), for...in
  
• preventExtensions(target)
  - Intercetta: Object.preventExtensions()
  
• isExtensible(target)
  - Intercetta: Object.isExtensible()

REFLECT:

METODI:
• Tutti i metodi corrispondono alle trap di Proxy
• Stessa signature delle trap
• Default behavior per operazioni

Reflect.get(target, prop, receiver)
Reflect.set(target, prop, value, receiver)
Reflect.has(target, prop)
Reflect.deleteProperty(target, prop)
Reflect.apply(fn, thisArg, args)
Reflect.construct(Constructor, args)
Reflect.getPrototypeOf(target)
Reflect.setPrototypeOf(target, proto)
Reflect.defineProperty(target, prop, descriptor)
Reflect.getOwnPropertyDescriptor(target, prop)
Reflect.ownKeys(target)
Reflect.preventExtensions(target)
Reflect.isExtensible(target)

PERCHÉ REFLECT?
• API unificata per operazioni su oggetti
• Restituisce boolean invece di throw
• Funziona meglio con Proxy
• Default behavior corretto

CASI D'USO PROXY:

✓ VALIDAZIONE:
  Controllare valori prima assegnazione
  
✓ LOGGING/TRACKING:
  Registrare accessi e modifiche
  
✓ DEFAULT VALUES:
  Fornire valori default per proprietà mancanti
  
✓ OBSERVABLE:
  Notificare cambiamenti (reactive programming)
  
✓ PRIVATE PROPERTIES:
  Nascondere/proteggere proprietà
  
✓ NEGATIVE INDEXING:
  Array con indici negativi (stile Python)
  
✓ TYPE CHECKING:
  Validazione runtime dei tipi
  
✓ CACHING:
  Memorizzare risultati costosi

PROXY REVOCABLE:
const {proxy, revoke} = Proxy.revocable(target, handler);
• Proxy che può essere disabilitato
• revoke() disabilita il proxy
• Utile per sicurezza, cleanup

BEST PRACTICES:
✓ Usa Reflect nelle trap per default behavior
✓ Return boolean corretto in set/delete
✓ Documenta behaviour custom
✓ Performance: proxy ha overhead
✓ Usa per meta-programming, non abusare
✗ Non usare per performance-critical code
✗ Non sempre serialize bene (JSON)
✗ Debug può essere complesso

CONFRONTO:

GETTER/SETTER:
• Solo proprietà specifiche
• Definite in anticipo
• Semplici

PROXY:
• Tutte le proprietà (anche future)
• Dinamico
• Più potente ma complesso

QUANDO USARE:
✓ Framework/librerie (validazione, reactive)
✓ Testing (mock objects)
✓ Security (access control)
✓ Logging/debugging
✗ Semplici casi (usa getter/setter)
✗ Performance critical paths
✗ Quando semplicità è priorità

LIMITAZIONI:
• Performance overhead
• Non funziona con alcune built-in (Date, Map, Set)
• Serializzazione complessa
• TypeScript support limitato
• Browser support (IE no)
`);
