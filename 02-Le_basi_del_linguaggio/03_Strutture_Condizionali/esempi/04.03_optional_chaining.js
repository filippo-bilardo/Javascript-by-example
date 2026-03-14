/**
 * VALUTAZIONE CONDIZIONALE - OPTIONAL CHAINING (?.)
 * 
 * L'operatore optional chaining (?.) permette di accedere a proprietà
 * annidate di oggetti senza causare errori se una proprietà intermedia
 * è null o undefined.
 * 
 * Restituisce undefined invece di lanciare un TypeError.
 * 
 * Sintassi:
 * - obj?.prop        // Proprietà
 * - obj?.[expr]      // Proprietà con bracket notation
 * - func?.()         // Chiamata funzione
 * - arr?.[index]     // Elemento array
 * 
 * Introdotto in ES2020 (ES11)
 */

console.log("=== 1. OPTIONAL CHAINING BASE ===\n");

// Senza optional chaining (ERRORE)
let user = null;
// console.log(user.name);  // ❌ TypeError: Cannot read property 'name' of null

// Con optional chaining (SICURO)
console.log("user?.name:", user?.name);  // undefined (non errore!)

// Con oggetto esistente
let user2 = { name: "Mario", age: 30 };
console.log("user2?.name:", user2?.name);  // "Mario"
console.log("user2?.email:", user2?.email);  // undefined (proprietà non esiste)

// Confronto con controllo manuale
let nameManual = user2 && user2.name;
console.log("Con &&:", nameManual);  // "Mario"

let nameOptional = user2?.name;
console.log("Con ?.:", nameOptional);  // "Mario"


console.log("\n=== 2. PROPRIETÀ ANNIDATE ===\n");

// Oggetto con proprietà annidate
let person = {
  name: "Luca",
  address: {
    street: "Via Roma",
    city: "Milano",
    coords: {
      lat: 45.4642,
      lng: 9.1900
    }
  }
};

// Accesso normale
console.log("City:", person.address.city);                  // "Milano"
console.log("Lat:", person.address.coords.lat);             // 45.4642

// Con optional chaining
console.log("City con ?.:", person?.address?.city);         // "Milano"
console.log("Lat con ?.:", person?.address?.coords?.lat);   // 45.4642

// Proprietà mancante
let person2 = { name: "Anna" };  // Senza address

// Senza ?. → ERRORE
// console.log(person2.address.city);  // ❌ TypeError

// Con ?. → SICURO
console.log("\nSenza address:");
console.log("City:", person2?.address?.city);               // undefined
console.log("Lat:", person2?.address?.coords?.lat);         // undefined

// Con null nel mezzo
let person3 = { name: "Sara", address: null };
console.log("\nAddress = null:");
console.log("City:", person3?.address?.city);               // undefined


console.log("\n=== 3. OPTIONAL CHAINING + NULLISH COALESCING ===\n");

// Combina ?. con ?? per default values
let user3 = { name: "Paolo" };
let city = user3?.address?.city ?? "Città sconosciuta";
console.log("City:", city);  // "Città sconosciuta"

let user4 = {
  name: "Maria",
  address: {
    city: "Roma"
  }
};
let city2 = user4?.address?.city ?? "Città sconosciuta";
console.log("City:", city2);  // "Roma"

// Pattern comune: accesso sicuro con fallback
function getUserCity(user) {
  return user?.profile?.address?.city ?? "Unknown";
}

console.log("\nGetUserCity:");
console.log(getUserCity({ profile: { address: { city: "Torino" } } }));  // "Torino"
console.log(getUserCity({ profile: {} }));                                 // "Unknown"
console.log(getUserCity(null));                                            // "Unknown"


console.log("\n=== 4. CON ARRAY ===\n");

// Optional chaining con array
let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];

console.log("Primo utente:", users[0]?.name);        // "Alice"
console.log("Terzo utente:", users[2]?.name);        // undefined

// Array potenzialmente null
let emptyUsers = null;
console.log("Array null:", emptyUsers?.[0]?.name);   // undefined

// Proprietà array annidato
let data = {
  items: [
    { id: 1, values: [10, 20, 30] },
    { id: 2, values: [40, 50] }
  ]
};

console.log("\nArray annidato:");
console.log("Item 0, value 1:", data?.items?.[0]?.values?.[1]);  // 20
console.log("Item 5, value 0:", data?.items?.[5]?.values?.[0]);  // undefined


console.log("\n=== 5. CON FUNZIONI (OPTIONAL CALL) ===\n");

// Chiamata funzione opzionale
let obj = {
  greet: function() {
    return "Hello!";
  }
};

console.log("greet esiste:", obj.greet?.());              // "Hello!"
console.log("missing esiste:", obj.missing?.());          // undefined (non errore!)

// Con parametri
let calculator = {
  add: (a, b) => a + b,
  multiply: (a, b) => a * b
};

console.log("\nCalcolatrice:");
console.log("add:", calculator.add?.(5, 3));              // 8
console.log("divide:", calculator.divide?.(10, 2));       // undefined

// Callback opzionale
function processData(data, callback) {
  console.log("Processing:", data);
  callback?.();  // Chiama solo se esiste
  console.log("Done");
}

console.log("\nCon callback:");
processData("data1", () => console.log("  Callback eseguito"));

console.log("\nSenza callback:");
processData("data2", null);  // Non va in errore


console.log("\n=== 6. DELETE E ASSIGNMENT ===\n");

// Optional chaining con delete
let config = {
  settings: {
    theme: "dark",
    lang: "it"
  }
};

console.log("Config prima:", config);

// Delete sicuro
delete config?.settings?.theme;
console.log("Dopo delete theme:", config);

// Delete su proprietà non esistente (sicuro)
delete config?.missing?.property;  // Non fa nulla, non errore
console.log("Dopo delete missing:", config);

// ⚠️ NON si può usare ?. sul lato sinistro di assegnamento
// config?.settings?.theme = "light";  // ❌ Errore di sintassi!

// Usa controllo normale
if (config?.settings) {
  config.settings.theme = "light";  // ✓ OK
}
console.log("\nDopo assegnamento:", config);


console.log("\n=== 7. IN ESPRESSIONI COMPLESSE ===\n");

// Con operatori
let product = {
  name: "Laptop",
  price: 1000,
  discount: {
    percentage: 10
  }
};

let finalPrice = product?.price - (product?.discount?.percentage ?? 0) * 10;
console.log("Prezzo finale:", finalPrice);  // 900

// Senza discount
let product2 = { name: "Mouse", price: 50 };
let finalPrice2 = product2?.price - (product2?.discount?.percentage ?? 0) * 10;
console.log("Prezzo senza sconto:", finalPrice2);  // 50

// In condizioni
let person4 = { name: "Carlo", address: { city: "Napoli" } };
if (person4?.address?.city) {
  console.log("\nCittà presente:", person4.address.city);
}

// In operatore ternario
let displayCity = person4?.address?.city ? person4.address.city : "N/A";
console.log("Display:", displayCity);


console.log("\n=== 8. CON METODI E THIS ===\n");

// Metodi oggetto
let account = {
  balance: 1000,
  getBalance: function() {
    return this.balance;
  },
  deposit: function(amount) {
    this.balance += amount;
    return this.balance;
  }
};

console.log("Balance:", account.getBalance?.());           // 1000
console.log("Dopo deposit:", account.deposit?.(500));      // 1500
console.log("Metodo inesistente:", account.withdraw?.(100)); // undefined

// Con null
let nullAccount = null;
console.log("Null account:", nullAccount?.getBalance?.());  // undefined

// Metodi annidati
let app = {
  user: {
    getName: () => "Admin",
    getRole: () => "admin"
  }
};

console.log("\nUser name:", app?.user?.getName?.());       // "Admin"
console.log("User email:", app?.user?.getEmail?.());       // undefined


console.log("\n=== 9. PATTERN COMUNI ===\n");

// 1. API response handling
function handleApiResponse(response) {
  let data = response?.data?.items ?? [];
  let error = response?.error?.message ?? null;
  let count = response?.data?.count ?? 0;
  
  console.log("1. API Response:");
  console.log("  Data length:", data.length);
  console.log("  Error:", error);
  console.log("  Count:", count);
}

handleApiResponse({ data: { items: [1,2,3], count: 3 } });
handleApiResponse({ error: { message: "Failed" } });
handleApiResponse(null);

// 2. DOM element access (simulazione)
let document = {
  getElementById: (id) => id === "app" ? { textContent: "Hello" } : null
};

let element = document.getElementById("app");
console.log("\n2. Element:", element?.textContent);         // "Hello"

let missing = document.getElementById("missing");
console.log("Missing:", missing?.textContent);              // undefined

// 3. Event handler
function setupEventListener(element, event, handler) {
  element?.addEventListener?.(event, handler);
  console.log("3. Event listener setup attempted");
}

setupEventListener(null, "click", () => {});  // Non fa nulla, sicuro

// 4. Configuration access
let appConfig = {
  api: {
    baseUrl: "https://api.example.com",
    endpoints: {
      users: "/users",
      posts: "/posts"
    }
  }
};

let usersEndpoint = appConfig?.api?.endpoints?.users ?? "/default";
console.log("\n4. Endpoint:", usersEndpoint);


console.log("\n=== 10. CASI D'USO PRATICI ===\n");

// 1. User profile display
function displayUserProfile(user) {
  console.log("1. User Profile:");
  console.log("  Name:", user?.name ?? "Anonymous");
  console.log("  Email:", user?.contact?.email ?? "N/A");
  console.log("  Phone:", user?.contact?.phone ?? "N/A");
  console.log("  City:", user?.address?.city ?? "Unknown");
  console.log("  Country:", user?.address?.country ?? "Unknown");
}

let fullUser = {
  name: "Giovanni",
  contact: { email: "g@test.com", phone: "1234567" },
  address: { city: "Firenze", country: "Italy" }
};

let partialUser = {
  name: "Lucia"
};

displayUserProfile(fullUser);
console.log();
displayUserProfile(partialUser);
console.log();
displayUserProfile(null);

// 2. Nested property validation
function hasRequiredFields(data) {
  return !!(
    data?.user?.id &&
    data?.user?.name &&
    data?.user?.email
  );
}

console.log("\n2. Validation:");
console.log("Valid:", hasRequiredFields({
  user: { id: 1, name: "Test", email: "t@t.com" }
}));
console.log("Invalid:", hasRequiredFields({
  user: { id: 1, name: "Test" }
}));
console.log("Null:", hasRequiredFields(null));

// 3. Safe method chaining
let api = {
  users: {
    list: () => [{ id: 1 }, { id: 2 }],
    get: (id) => ({ id, name: `User${id}` })
  }
};

let userList = api?.users?.list?.() ?? [];
console.log("\n3. User list:", userList.length);

let user5 = api?.users?.get?.(1);
console.log("User 1:", user5);

let missingApi = null;
let emptyList = missingApi?.users?.list?.() ?? [];
console.log("Missing API list:", emptyList.length);

// 4. Cleanup/Dispose pattern
function cleanup(resource) {
  console.log("\n4. Cleanup:");
  resource?.connection?.close?.();
  resource?.timer?.stop?.();
  resource?.listener?.remove?.();
  console.log("  Cleanup completato (no errors)");
}

cleanup({ connection: { close: () => console.log("  Connection closed") } });
cleanup(null);

console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO OPTIONAL CHAINING");
console.log("=".repeat(50));
console.log(`
?. (Optional Chaining):
- Accesso sicuro a proprietà annidate
- Restituisce undefined invece di TypeError
- Si ferma al primo null/undefined

SINTASSI:
obj?.prop           // Proprietà
obj?.[expr]         // Bracket notation
func?.()            // Chiamata funzione
arr?.[index]        // Array element

COMBINAZIONI:
?. + ??  → Accesso sicuro + default value
?. + ?.  → Catena multipla
delete obj?.prop  → Delete sicuro

QUANDO USARE:
✓ Proprietà annidate incerte
✓ API responses
✓ DOM manipulation
✓ Callback opzionali
✓ Oggetti da fonti esterne

NON USARE PER:
✗ Lato sinistro assegnamento (obj?.prop = x)
✗ Nascondere bug di design
✗ Quando null è un errore da gestire

BEST PRACTICES:
✓ Combina con ?? per defaults
✓ Usa per oggetti da fonti esterne
✓ Preferisci a && per leggibilità
✓ Non abusare: null può indicare bug
`);
