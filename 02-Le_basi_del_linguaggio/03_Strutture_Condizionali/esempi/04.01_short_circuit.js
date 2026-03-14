/**
 * VALUTAZIONE CONDIZIONALE - SHORT-CIRCUIT EVALUATION
 * 
 * Gli operatori logici && (AND) e || (OR) in JavaScript utilizzano
 * la valutazione "short-circuit" (corto circuito):
 * - && restituisce il primo valore falsy o l'ultimo valore
 * - || restituisce il primo valore truthy o l'ultimo valore
 * 
 * Questo comportamento può essere usato per assegnazioni condizionali
 * e esecuzione condizionale di codice.
 */

console.log("=== 1. SHORT-CIRCUIT CON OR (||) ===\n");

// || restituisce il primo valore truthy
let a = "Hello" || "Default";
console.log("'Hello' || 'Default':", a);  // "Hello"

let b = "" || "Default";
console.log("'' || 'Default':", b);  // "Default"

let c = null || "Default";
console.log("null || 'Default':", c);  // "Default"

let d = 0 || "Default";
console.log("0 || 'Default':", d);  // "Default" (0 è falsy!)

// Catena di OR
let e = "" || null || "Found" || "Last";
console.log("'' || null || 'Found' || 'Last':", e);  // "Found"

// Tutti falsy → ultimo valore
let f = false || 0 || "";
console.log("false || 0 || '':", f);  // "" (ultimo)


console.log("\n=== 2. DEFAULT VALUES CON OR ===\n");

// Pattern comune: default values
function greet(name) {
  let displayName = name || "Guest";
  return `Hello, ${displayName}!`;
}

console.log(greet("Mario"));  // "Hello, Mario!"
console.log(greet(""));       // "Hello, Guest!"
console.log(greet(null));     // "Hello, Guest!"
console.log(greet());         // "Hello, Guest!"

// Con numeri: ATTENZIONE ai falsy!
function setQuantity(qty) {
  let quantity = qty || 1;  // ⚠️ Problema: 0 è falsy!
  return `Quantity: ${quantity}`;
}

console.log("\nCon OR (problematico):");
console.log(setQuantity(5));   // "Quantity: 5" ✓
console.log(setQuantity(0));   // "Quantity: 1" ✗ (0 diventa 1!)
console.log(setQuantity());    // "Quantity: 1" ✓

// Soluzione 1: controllo esplicito
function setQuantityFixed(qty) {
  let quantity = qty !== undefined ? qty : 1;
  return `Quantity: ${quantity}`;
}

console.log("\nCon controllo esplicito:");
console.log(setQuantityFixed(5));   // "Quantity: 5" ✓
console.log(setQuantityFixed(0));   // "Quantity: 0" ✓
console.log(setQuantityFixed());    // "Quantity: 1" ✓


console.log("\n=== 3. SHORT-CIRCUIT CON AND (&&) ===\n");

// && restituisce il primo valore falsy o l'ultimo valore
let g = "Hello" && "World";
console.log("'Hello' && 'World':", g);  // "World"

let h = "" && "World";
console.log("'' && 'World':", h);  // ""

let i = null && "World";
console.log("null && 'World':", i);  // null

let j = "Hello" && 0 && "World";
console.log("'Hello' && 0 && 'World':", j);  // 0

// Tutti truthy → ultimo valore
let k = "A" && "B" && "C";
console.log("'A' && 'B' && 'C':", k);  // "C"


console.log("\n=== 4. ESECUZIONE CONDIZIONALE CON AND ===\n");

// && per eseguire codice solo se condizione è vera
let isLogged = true;

// Pattern: condition && action
isLogged && console.log("Utente loggato!");  // Eseguito

let isGuest = false;
isGuest && console.log("Questo non viene stampato");  // Non eseguito

// Equivalente a if
if (isLogged) {
  console.log("Con if: Utente loggato!");
}

// Esempio pratico: chiamata funzione condizionale
let user = { name: "Mario" };
user && console.log(`User name: ${user.name}`);  // Eseguito

let noUser = null;
noUser && console.log(`Non eseguito: ${noUser.name}`);  // Non eseguito


console.log("\n=== 5. VALIDAZIONE CON SHORT-CIRCUIT ===\n");

// Validazione input
function processData(data) {
  // Controlla se data esiste prima di usarlo
  let isValid = data && data.length > 0;
  console.log(`Data valido: ${isValid}`);
  return isValid && data.toUpperCase();
}

console.log("Risultato:", processData("hello"));  // "HELLO"
console.log("Risultato:", processData(""));       // false
console.log("Risultato:", processData(null));     // null

// Accesso proprietà sicuro (prima di ?.)
let person = { name: "Luca", address: { city: "Roma" } };
let city1 = person && person.address && person.address.city;
console.log("\nCittà (con &&):", city1);  // "Roma"

let noPerson = null;
let city2 = noPerson && noPerson.address && noPerson.address.city;
console.log("Città (null):", city2);  // null (non error!)


console.log("\n=== 6. COMBINAZIONI OR E AND ===\n");

// OR per default, AND per validazione
function saveConfig(config) {
  let settings = config || {};  // Default oggetto vuoto
  let hasName = settings.name && settings.name.length > 0;
  
  console.log("Config:", settings);
  console.log("Has valid name:", hasName);
  
  return hasName && `Saved: ${settings.name}`;
}

console.log(saveConfig({ name: "MyApp" }));  // "Saved: MyApp"
console.log(saveConfig({ name: "" }));       // false
console.log(saveConfig(null));               // false

// Catene complesse
let value = (null || 0 || "default") && "processed";
console.log("\n(null || 0 || 'default') && 'processed':", value);  // "processed"

let value2 = (false || 0) && "never";
console.log("(false || 0) && 'never':", value2);  // 0 (falsy!)


console.log("\n=== 7. TRUTHY E FALSY RECAP ===\n");

// I 6 valori falsy in JavaScript
let falsyValues = [false, 0, "", null, undefined, NaN];

console.log("Valori FALSY (6):");
falsyValues.forEach(val => {
  let result = val || "è falsy";
  console.log(`  ${val} || "è falsy" → "${result}"`);
});

// Tutti gli altri valori sono truthy
let truthyValues = [true, 1, -1, "0", "false", [], {}, function(){}];

console.log("\nValori TRUTHY (esempi):");
truthyValues.forEach(val => {
  let result = val && "è truthy";
  console.log(`  ${String(val).slice(0,20)} && "è truthy" → "${result}"`);
});


console.log("\n=== 8. IN FUNZIONI ===\n");

// Return con short-circuit
function getUserName(user) {
  return user && user.name || "Anonymous";
}

console.log(getUserName({ name: "Anna" }));  // "Anna"
console.log(getUserName({ name: "" }));      // "Anonymous"
console.log(getUserName(null));              // "Anonymous"

// Validazione con early return
function calculateDiscount(price, customer) {
  // Validation con &&
  let isValid = price && price > 0 && customer && customer.isMember;
  
  if (!isValid) {
    return 0;
  }
  
  return price * 0.1;
}

console.log("\nSconto:", calculateDiscount(100, { isMember: true }));   // 10
console.log("Sconto:", calculateDiscount(100, { isMember: false }));  // 0
console.log("Sconto:", calculateDiscount(0, { isMember: true }));     // 0

// Chiamata funzione condizionale
function onSuccess() {
  console.log("✓ Success callback eseguito");
}

function process(callback) {
  console.log("Processing...");
  callback && callback();  // Esegue callback solo se esiste
}

console.log("\nCon callback:");
process(onSuccess);

console.log("\nSenza callback:");
process(null);  // Non va in errore


console.log("\n=== 9. PATTERN COMUNI ===\n");

// 1. Cache/Memoization
let cache = {};
function getValue(key) {
  return cache[key] || (cache[key] = `Computed: ${key}`);
}

console.log("1. Cache:");
console.log("  Prima chiamata:", getValue("A"));
console.log("  Seconda (cached):", getValue("A"));
console.log("  Cache:", cache);

// 2. Configurazione con override
let defaultConfig = { theme: "light", lang: "it", timeout: 5000 };
let userConfig = { theme: "dark" };

let finalConfig = {
  theme: userConfig.theme || defaultConfig.theme,
  lang: userConfig.lang || defaultConfig.lang,
  timeout: userConfig.timeout || defaultConfig.timeout
};

console.log("\n2. Config merge:");
console.log("  Default:", defaultConfig);
console.log("  User:", userConfig);
console.log("  Final:", finalConfig);

// 3. Logging condizionale
let DEBUG = true;
DEBUG && console.log("\n3. Debug: applicazione avviata");

DEBUG = false;
DEBUG && console.log("Questo non viene stampato");


console.log("\n=== 10. CASI D'USO PRATICI ===\n");

// 1. Form validation
function validateForm(formData) {
  let isValid = 
    formData.name && formData.name.length > 0 &&
    formData.email && formData.email.includes("@") &&
    formData.age && formData.age >= 18;
  
  console.log("1. Form valido:", isValid);
  return isValid;
}

validateForm({ name: "Mario", email: "m@test.com", age: 25 });
validateForm({ name: "", email: "invalid", age: 15 });

// 2. API call con fallback
function fetchUser(id) {
  // Simulazione
  let users = { 1: "Mario", 2: "Luigi" };
  let user = users[id] || "User not found";
  console.log(`\n2. Fetch user ${id}:`, user);
  return user;
}

fetchUser(1);
fetchUser(99);

// 3. Conditional class names
function getButtonClass(isPrimary, isDisabled, isLarge) {
  let classes = ["btn"];
  isPrimary && classes.push("btn-primary");
  isDisabled && classes.push("disabled");
  isLarge && classes.push("btn-large");
  return classes.join(" ");
}

console.log("\n3. Button classes:");
console.log("  ", getButtonClass(true, false, true));
console.log("  ", getButtonClass(false, true, false));

// 4. Permissions check
function canEdit(user) {
  return user && user.isLogged && (user.role === "admin" || user.role === "editor");
}

console.log("\n4. Permissions:");
console.log("  Admin:", canEdit({ isLogged: true, role: "admin" }));
console.log("  Viewer:", canEdit({ isLogged: true, role: "viewer" }));
console.log("  Null:", canEdit(null));

// 5. Event handler safety
let button = { addEventListener: (e, cb) => cb() };  // Simulazione
let handler = () => console.log("  Button clicked!");

console.log("\n5. Event handler:");
button && button.addEventListener && button.addEventListener("click", handler);

console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO SHORT-CIRCUIT EVALUATION");
console.log("=".repeat(50));
console.log(`
OR (||):
- Restituisce primo valore TRUTHY o ultimo valore
- Uso: default values
- Attenzione: 0, "" sono falsy!

AND (&&):
- Restituisce primo valore FALSY o ultimo valore
- Uso: esecuzione condizionale, validazione
- Pattern: condition && action()

FALSY (6 valori):
false, 0, "", null, undefined, NaN

TRUTHY:
Tutti gli altri (inclusi [], {}, "0", "false")

BEST PRACTICES:
✓ OR per default values (con attenzione)
✓ AND per esecuzione condizionale
✓ Considera ?? per null/undefined
✗ Non abusare: se illeggibile, usa if
`);
