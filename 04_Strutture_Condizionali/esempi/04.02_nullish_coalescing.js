/**
 * VALUTAZIONE CONDIZIONALE - NULLISH COALESCING (??)
 * 
 * L'operatore nullish coalescing (??) restituisce l'operando destro
 * quando quello sinistro è null o undefined, altrimenti restituisce
 * l'operando sinistro.
 * 
 * Differenza con OR (||):
 * - || considera TUTTI i falsy (false, 0, "", null, undefined, NaN)
 * - ?? considera SOLO null e undefined
 * 
 * Introdotto in ES2020 (ES11)
 */

console.log("=== 1. NULLISH COALESCING BASE (??) ===\n");

// ?? restituisce il valore destro solo per null/undefined
let a = null ?? "Default";
console.log("null ?? 'Default':", a);  // "Default"

let b = undefined ?? "Default";
console.log("undefined ?? 'Default':", b);  // "Default"

let c = "Hello" ?? "Default";
console.log("'Hello' ?? 'Default':", c);  // "Hello"

// DIFFERENZA CHIAVE con OR: gestione di 0, false, ""
let d = 0 ?? "Default";
console.log("0 ?? 'Default':", d);  // 0 (non "Default"!)

let e = false ?? "Default";
console.log("false ?? 'Default':", e);  // false (non "Default"!)

let f = "" ?? "Default";
console.log("'' ?? 'Default':", f);  // "" (non "Default"!)


console.log("\n=== 2. CONFRONTO OR VS NULLISH ===\n");

// Esempio con numeri
function setQuantity_OR(qty) {
  return qty || 10;  // ⚠️ 0 diventa 10
}

function setQuantity_NULLISH(qty) {
  return qty ?? 10;  // ✓ 0 rimane 0
}

console.log("Con OR (||):");
console.log("  qty=5:", setQuantity_OR(5));      // 5 ✓
console.log("  qty=0:", setQuantity_OR(0));      // 10 ✗ (problema!)
console.log("  qty=null:", setQuantity_OR(null)); // 10 ✓

console.log("\nCon NULLISH (??):");
console.log("  qty=5:", setQuantity_NULLISH(5));      // 5 ✓
console.log("  qty=0:", setQuantity_NULLISH(0));      // 0 ✓ (corretto!)
console.log("  qty=null:", setQuantity_NULLISH(null)); // 10 ✓

// Esempio con stringhe
function setName_OR(name) {
  return name || "Anonymous";  // ⚠️ "" diventa "Anonymous"
}

function setName_NULLISH(name) {
  return name ?? "Anonymous";  // ✓ "" rimane ""
}

console.log("\nCon OR:");
console.log("  name='Mario':", setName_OR("Mario"));  // "Mario" ✓
console.log("  name='':", setName_OR(""));            // "Anonymous" (forse voluto?)
console.log("  name=null:", setName_OR(null));        // "Anonymous" ✓

console.log("\nCon NULLISH:");
console.log("  name='Mario':", setName_NULLISH("Mario"));  // "Mario" ✓
console.log("  name='':", setName_NULLISH(""));            // "" (preservato!)
console.log("  name=null:", setName_NULLISH(null));        // "Anonymous" ✓

// Esempio con booleani
function setFlag_OR(flag) {
  return flag || true;  // ⚠️ false diventa true!
}

function setFlag_NULLISH(flag) {
  return flag ?? true;  // ✓ false rimane false
}

console.log("\nCon OR:");
console.log("  flag=true:", setFlag_OR(true));   // true ✓
console.log("  flag=false:", setFlag_OR(false)); // true ✗ (problema!)
console.log("  flag=null:", setFlag_OR(null));   // true ✓

console.log("\nCon NULLISH:");
console.log("  flag=true:", setFlag_NULLISH(true));   // true ✓
console.log("  flag=false:", setFlag_NULLISH(false)); // false ✓ (corretto!)
console.log("  flag=null:", setFlag_NULLISH(null));   // true ✓


console.log("\n=== 3. USO CON PARAMETRI FUNZIONE ===\n");

// Default parameters con ??
function createUser(name, age, role) {
  return {
    name: name ?? "Anonymous",
    age: age ?? 18,
    role: role ?? "user"
  };
}

console.log("User completo:");
console.log(createUser("Mario", 25, "admin"));

console.log("\nUser con null:");
console.log(createUser(null, null, null));

console.log("\nUser con 0 e '':");
console.log(createUser("", 0, ""));  // Preserva 0 e ""

// Confronto con default parameters ES6
function createUser2(name = "Anonymous", age = 18, role = "user") {
  return { name, age, role };
}

console.log("\nCon default parameters:");
console.log(createUser2(undefined, undefined, undefined));
console.log(createUser2("", 0, ""));  // Preserva 0 e "" ✓


console.log("\n=== 4. CON OGGETTI E CONFIGURAZIONI ===\n");

// Configurazione con override
let defaultConfig = {
  theme: "light",
  fontSize: 14,
  autoSave: true,
  notifications: true
};

let userConfig = {
  theme: "dark",
  fontSize: 0,        // Vuole font piccolo
  autoSave: false,    // Vuole disabilitare
  notifications: null // Non specificato
};

// Con OR (problematico)
let configOR = {
  theme: userConfig.theme || defaultConfig.theme,
  fontSize: userConfig.fontSize || defaultConfig.fontSize,      // ✗ 0 → 14
  autoSave: userConfig.autoSave || defaultConfig.autoSave,      // ✗ false → true
  notifications: userConfig.notifications || defaultConfig.notifications
};

console.log("Config con OR:");
console.log(configOR);

// Con NULLISH (corretto)
let configNullish = {
  theme: userConfig.theme ?? defaultConfig.theme,
  fontSize: userConfig.fontSize ?? defaultConfig.fontSize,      // ✓ 0 preservato
  autoSave: userConfig.autoSave ?? defaultConfig.autoSave,      // ✓ false preservato
  notifications: userConfig.notifications ?? defaultConfig.notifications // ✓ null → true
};

console.log("\nConfig con NULLISH:");
console.log(configNullish);


console.log("\n=== 5. NULLISH ASSIGNMENT (??=) ===\n");

// ??= assegna solo se null o undefined
let config = { name: "App" };

config.name ??= "Default App";
console.log("name dopo ??=:", config.name);  // "App" (non cambia)

config.version ??= "1.0.0";
console.log("version dopo ??=:", config.version);  // "1.0.0" (assegnato)

config.version ??= "2.0.0";
console.log("version dopo secondo ??=:", config.version);  // "1.0.0" (non cambia)

// Con valori falsy
let settings = {
  count: 0,
  enabled: false,
  text: ""
};

console.log("\nSettings iniziali:", settings);

settings.count ??= 10;    // Non cambia (0 non è null)
settings.enabled ??= true;  // Non cambia (false non è null)
settings.text ??= "default";  // Non cambia ("" non è null)
settings.missing ??= "added";  // Aggiunto (undefined)

console.log("Settings dopo ??=:", settings);

// Equivalente a:
settings.count = settings.count ?? 10;


console.log("\n=== 6. CATENE DI NULLISH ===\n");

// Catena di fallback
let value1 = null ?? undefined ?? "default" ?? "last";
console.log("null ?? undefined ?? 'default':", value1);  // "default"

let value2 = 0 ?? false ?? "" ?? "never";
console.log("0 ?? false ?? '':", value2);  // 0 (primo non-null)

// Con variabili
let userInput = null;
let savedValue = undefined;
let defaultValue = "Default";

let finalValue = userInput ?? savedValue ?? defaultValue;
console.log("\nChain:", finalValue);  // "Default"

// Attenzione: non mescolare ?? con && o ||
// let bad = value1 || value2 ?? value3;  // Errore di sintassi!
// Usa parentesi:
let mixed = (value1 || value2) ?? value3;
console.log("\nCon parentesi:", mixed);


console.log("\n=== 7. ACCESSO PROPRIETÀ SICURO ===\n");

// Con nullish per default su proprietà
let user = {
  name: "Mario",
  settings: {
    theme: null,
    lang: undefined,
    fontSize: 0
  }
};

console.log("Theme:", user.settings.theme ?? "light");       // "light"
console.log("Lang:", user.settings.lang ?? "en");            // "en"
console.log("FontSize:", user.settings.fontSize ?? 14);      // 0 (preservato!)

// Senza settings
let user2 = { name: "Luigi" };
// console.log(user2.settings.theme);  // ✗ Error!

// Soluzione: combinare con optional chaining
console.log("\nCon ?.:", user2.settings?.theme ?? "light");  // "light"


console.log("\n=== 8. IN FUNZIONI ===\n");

// Funzione utility per get con default
function getWithDefault(obj, key, defaultVal) {
  return obj[key] ?? defaultVal;
}

let data = { name: "Test", count: 0, active: false };

console.log("name:", getWithDefault(data, "name", "Unknown"));       // "Test"
console.log("count:", getWithDefault(data, "count", 10));            // 0
console.log("active:", getWithDefault(data, "active", true));        // false
console.log("missing:", getWithDefault(data, "missing", "Default")); // "Default"

// Memoization con nullish
let cache = {};
function compute(key) {
  return cache[key] ?? (cache[key] = `Computed: ${key}`);
}

console.log("\nCompute A:", compute("A"));
console.log("Cache:", cache);
console.log("Compute A again:", compute("A"));  // Cached


console.log("\n=== 9. VALIDAZIONE AVANZATA ===\n");

// Form validation con nullish
function validateFormData(data) {
  let validation = {
    name: data.name ?? "❌ Nome mancante",
    age: data.age ?? "❌ Età mancante",
    email: data.email ?? "❌ Email mancante"
  };
  
  console.log("Validation:", validation);
  
  // Controlla se ci sono errori (stringhe con ❌)
  let hasErrors = Object.values(validation).some(v => 
    typeof v === "string" && v.startsWith("❌")
  );
  
  return !hasErrors;
}

console.log("\nForm valido:");
validateFormData({ name: "Mario", age: 25, email: "m@test.com" });

console.log("\nForm con null:");
validateFormData({ name: null, age: null, email: null });

console.log("\nForm con 0 e false:");
validateFormData({ name: "", age: 0, email: "" });  // Valido! (no null)


console.log("\n=== 10. CASI D'USO PRATICI ===\n");

// 1. API response con default
function processApiResponse(response) {
  return {
    data: response.data ?? [],
    count: response.count ?? 0,
    error: response.error ?? null,
    message: response.message ?? "Success"
  };
}

console.log("1. API Response:");
console.log(processApiResponse({ data: [1,2,3], count: 3 }));
console.log(processApiResponse({ count: 0 }));  // count=0 preservato

// 2. Environment variables
let ENV = {
  PORT: 0,  // Vuole porta 0 (random)
  DEBUG: false,  // Vuole debug off
  HOST: null  // Non specificato
};

let config2 = {
  port: ENV.PORT ?? 3000,           // 0 (preservato)
  debug: ENV.DEBUG ?? true,         // false (preservato)
  host: ENV.HOST ?? "localhost"    // "localhost" (null)
};

console.log("\n2. Environment config:");
console.log(config2);

// 3. Pagination
function getPaginationParams(params) {
  return {
    page: params.page ?? 1,
    limit: params.limit ?? 10,
    offset: params.offset ?? 0  // 0 è valido!
  };
}

console.log("\n3. Pagination:");
console.log(getPaginationParams({ page: 2, limit: 20, offset: 0 }));
console.log(getPaginationParams({}));

// 4. Settings merge
function mergeSettings(defaults, custom) {
  let merged = {};
  for (let key in defaults) {
    merged[key] = custom[key] ?? defaults[key];
  }
  return merged;
}

let defaults = { volume: 50, muted: false, quality: "high" };
let custom = { volume: 0, muted: true };  // volume=0 intenzionale

console.log("\n4. Settings merge:");
console.log(mergeSettings(defaults, custom));

console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO NULLISH COALESCING");
console.log("=".repeat(50));
console.log(`
?? (Nullish Coalescing):
- Restituisce valore destro SOLO per null/undefined
- Preserva: 0, false, "", NaN
- Meglio di || per valori numerici/booleani

??= (Nullish Assignment):
- Assegna SOLO se null/undefined
- Non sovrascrive valori esistenti

QUANDO USARE:
✓ Parametri funzione con default
✓ Configurazioni che accettano 0/false
✓ Preservare valori "falsy" validi
✓ Merge di oggetti

OR (||) vs NULLISH (??):
|| → usa per stringhe vuote non valide
?? → usa per numeri/boolean che includono 0/false

BEST PRACTICES:
✓ ?? per numeri, boolean, configurazioni
✓ || per stringhe (quando "" = invalid)
✓ Usa con ?. per accesso proprietà sicuro
✓ ??= per inizializzazione lazy
`);
