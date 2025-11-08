/**
 * Esempio: Optional Chaining (?.)
 * 
 * Operatore per accesso sicuro a proprietà annidate.
 * Evita errori quando oggetti/proprietà sono null/undefined.
 * 
 * Per eseguire: node 05.03_optional_chaining.js
 */

console.log("=== OPTIONAL CHAINING (?.) ===\n");

// 1. Problema senza optional chaining
console.log("1. PROBLEMA senza optional chaining:\n");

let user1 = {
  name: "Alice",
  address: {
    city: "Roma"
  }
};

let user2 = {
  name: "Bob"
  // address mancante
};

console.log("Accesso normale:");
console.log("user1.address.city:", user1.address.city); // "Roma"

console.log("\nCon proprietà mancante:");
try {
  console.log("user2.address.city:", user2.address.city);
} catch (e) {
  console.log("✗ TypeError:", e.message);
}

console.log("\nSoluzione classica (verbose):");
let city1 = user1.address && user1.address.city;
let city2 = user2.address && user2.address.city;
console.log("city1:", city1); // "Roma"
console.log("city2:", city2); // undefined

// 2. Optional chaining - sintassi base
console.log("\n2. OPTIONAL CHAINING - sintassi base:\n");

console.log("Sintassi: obj?.prop");

let user3 = {
  name: "Alice",
  address: {
    city: "Roma"
  }
};

let user4 = null;

console.log("user3?.name:", user3?.name); // "Alice"
console.log("user4?.name:", user4?.name); // undefined (no error!)

console.log("\nProprietà annidate:");
console.log("user3?.address?.city:", user3?.address?.city); // "Roma"

let user5 = {name: "Bob"};
console.log("user5?.address?.city:", user5?.address?.city); // undefined

console.log("\n✓ Restituisce undefined invece di lanciare errore");

// 3. Optional chaining con array
console.log("\n3. OPTIONAL CHAINING con ARRAY:\n");

let data = {
  users: [
    {name: "Alice"},
    {name: "Bob"}
  ]
};

console.log("Accesso array:");
console.log("data?.users?.[0]:", data?.users?.[0]); // {name: "Alice"}
console.log("data?.users?.[0]?.name:", data?.users?.[0]?.name); // "Alice"

let emptyData = null;
console.log("emptyData?.users?.[0]:", emptyData?.users?.[0]); // undefined

console.log("\nIndice fuori range:");
console.log("data?.users?.[10]:", data?.users?.[10]); // undefined
console.log("data?.users?.[10]?.name:", data?.users?.[10]?.name); // undefined

// 4. Optional chaining con funzioni
console.log("\n4. OPTIONAL CHAINING con FUNZIONI:\n");

let obj = {
  method: function() {
    return "Hello";
  }
};

console.log("Chiamata metodo:");
console.log("obj.method?.():", obj.method?.()); // "Hello"

let objNoMethod = {};
console.log("objNoMethod.method?.():", objNoMethod.method?.()); // undefined

console.log("\nCon parametri:");
let calculator = {
  add: (a, b) => a + b
};

console.log("calculator.add?.(5, 3):", calculator.add?.(5, 3)); // 8
console.log("calculator.subtract?.(5, 3):", calculator.subtract?.(5, 3)); // undefined

console.log("\n⚠️  Differenza tra ?. e ():");
// obj.method?.()  - chiama solo se method esiste
// obj?.method()   - accede a method solo se obj esiste

// 5. Combinazioni con nullish coalescing
console.log("\n5. COMBINAZIONI con NULLISH COALESCING (??):\n");

let userData = {
  profile: {
    settings: {
      theme: null
    }
  }
};

console.log("Optional chaining + ??:");
let theme = userData?.profile?.settings?.theme ?? "light";
console.log("theme:", theme); // "light"

let missingUser = null;
let userName = missingUser?.profile?.name ?? "Guest";
console.log("userName:", userName); // "Guest"

console.log("\nDefault per proprietà annidate:");
let config = {server: {port: null}};
let port = config?.server?.port ?? 8080;
console.log("port:", port); // 8080

// 6. Optional chaining con delete
console.log("\n6. OPTIONAL CHAINING con DELETE:\n");

let object = {
  a: {
    b: {
      c: 123
    }
  }
};

console.log("Prima:", object);

delete object?.a?.b?.c;
console.log("Dopo delete object?.a?.b?.c:", object);

delete object?.x?.y?.z; // Nessun errore anche se non esiste
console.log("Dopo delete object?.x?.y?.z:", object);

// 7. Casi limite e comportamento
console.log("\n7. CASI LIMITE e COMPORTAMENTO:\n");

console.log("Con undefined:");
let undef = undefined;
console.log("undef?.prop:", undef?.prop); // undefined

console.log("\nCon null:");
let nul = null;
console.log("nul?.prop:", nul?.prop); // undefined

console.log("\nCon 0, false, '':");
console.log("(0)?.toString():", (0)?.toString()); // "0" (0 non è nullish!)
console.log("(false)?.toString():", (false)?.toString()); // "false"
console.log("('')?.length:", ('')?.length); // 0

console.log("\n✓ ?. controlla solo null e undefined, non falsy!");

console.log("\nShort-circuit:");
let x = 0;
null?.prop && (x = 10);
console.log("x:", x); // 0 (espressione non valutata)

// 8. Limitazioni
console.log("\n8. LIMITAZIONI:\n");

console.log("⚠️  Non può essere usato in assegnazione:");
// obj?.prop = value;  // SyntaxError!
console.log("Non puoi fare: obj?.prop = value");

console.log("\n⚠️  Non può essere usato con new:");
// new obj?.constructor();  // SyntaxError!
console.log("Non puoi fare: new obj?.constructor()");

console.log("\n⚠️  Non può essere sul lato sinistro:");
// obj?.prop++  // SyntaxError!
console.log("Non puoi fare: obj?.prop++");

console.log("\n✓ Ma puoi leggere e usare in espressioni:");
let value = obj?.prop || 0;
let result = (obj?.method?.() ?? 0) + 10;
console.log("Queste funzionano!");

// 9. Casi d'uso pratici
console.log("\n9. CASI D'USO pratici:\n");

console.log("API response:");
let response = {
  data: {
    user: {
      profile: {
        avatar: "url"
      }
    }
  }
};

let avatar = response?.data?.user?.profile?.avatar ?? "default.png";
console.log("avatar:", avatar);

console.log("\nEvent handlers:");
function handleClick(event) {
  let targetId = event?.target?.id;
  console.log("  targetId:", targetId ?? "no id");
}

handleClick({target: {id: "btn-1"}}); // "btn-1"
handleClick({}); // "no id"
handleClick(null); // "no id"

console.log("\nCallback opzionali:");
function process(data, onSuccess, onError) {
  try {
    console.log("  Processing...");
    onSuccess?.("Success!");
  } catch (e) {
    onError?.(e);
  }
}

process("data", (msg) => console.log("  ✓", msg));
process("data"); // onSuccess undefined, nessun errore

console.log("\nDOM access (simulato):");
let document = {
  getElementById: (id) => id === "main" ? {textContent: "Hello"} : null
};

let content = document.getElementById("main")?.textContent;
console.log("content:", content); // "Hello"

let missing = document.getElementById("missing")?.textContent;
console.log("missing:", missing); // undefined

console.log("\nIterazione sicura:");
let items = {
  list: [1, 2, 3]
};

items?.list?.forEach?.(item => console.log("  item:", item));

let noItems = null;
noItems?.list?.forEach?.(item => console.log("  item:", item)); // Niente

// 10. Best practices
console.log("\n10. BEST PRACTICES:\n");

console.log("✓ Usa per dati esterni (API, user input):");
console.log(`
// ✓ API response
const email = response?.data?.user?.email ?? 'no-email';

// ✓ Configuration
const port = config?.server?.port ?? 8080;
`);

console.log("✓ Combina con ?? per default:");
console.log(`
// ✓ Default sicuro
const name = user?.profile?.name ?? 'Anonymous';
const count = data?.items?.length ?? 0;
`);

console.log("✓ Callback opzionali:");
console.log(`
// ✓ Non serve if
onSuccess?.('Done');
onChange?.(newValue);
callback?.();
`);

console.log("✓ Non abusare su oggetti controllati:");
console.log(`
// ⚠️  Eccessivo per oggetti interni
this?.config?.settings?.value

// ✓ Meglio
this.config.settings.value

// Se non sei sicuro della struttura, c'è un problema di design
`);

console.log("✓ Usa con array e funzioni:");
console.log(`
// ✓ Array
arr?.[0]?.name
arr?.[index]?.method?.()

// ✓ Funzioni
obj.method?.()
callbacks[type]?.()
`);

console.log("✓ Non per proprietà che devono esistere:");
console.log(`
// ✗ Nasconde bug
this.config?.apiKey  // Se manca, è un errore!

// ✓ Lascia fallire
this.config.apiKey  // TypeError se mancante
`);

console.log("\n⚠️  RICORDA:");
console.log("  - ?. restituisce undefined se null/undefined");
console.log("  - Funziona con proprietà, array, funzioni");
console.log("  - 0, false, '' NON sono nullish (controllo passa)");
console.log("  - Non può essere usato in assegnazione");
console.log("  - Combina con ?? per valori di default");
console.log("  - Utile per dati esterni/opzionali");
console.log("  - Non abusare su strutture controllate");
console.log("  - Supporto da ES2020");

console.log("\n✅ Optional chaining rende l'accesso ai dati più sicuro!");
