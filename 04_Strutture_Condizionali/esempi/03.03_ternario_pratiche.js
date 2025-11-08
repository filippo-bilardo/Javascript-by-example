/**
 * OPERATORE TERNARIO - PATTERN PRATICI
 * 
 * Casi d'uso reali e pattern comuni con l'operatore ternario.
 * Focus su leggibilità, manutenibilità e best practices.
 */

console.log("=== 1. DEFAULT VALUES (VALORI DI DEFAULT) ===\n");

// Con ternario
let username = "";
let displayName = username ? username : "Guest";
console.log(`Username: "${username}" → Display: "${displayName}"`);

// Confronto con OR (più comune)
let username2 = "";
let displayName2 = username2 || "Guest";
console.log(`Con OR: "${username2}" → "${displayName2}"`);

// Con nullish coalescing (ancora meglio per null/undefined)
let username3 = null;
let displayName3 = username3 ?? "Guest";
console.log(`Con ??: ${username3} → "${displayName3}"`);

// Quando ternario è meglio: controllo esplicito
let count = 0;
let message = count !== 0 ? count : "Nessuno";  // ✓ Esplicito
console.log(`\nCount: ${count} → "${message}"`);

let messageOR = count || "Nessuno";  // ✗ 0 è falsy
console.log(`Con OR: ${count} → "${messageOR}"`);


console.log("\n=== 2. CONDITIONAL RENDERING (MOSTRA/NASCONDI) ===\n");

// Simulazione componenti UI
let isLogged = true;
let userPanel = isLogged ? "<UserDashboard />" : "<LoginForm />";
console.log(`Utente loggato: ${isLogged}`);
console.log(`Mostra: ${userPanel}`);

// Con contenuto
let hasMessages = true;
let badge = hasMessages ? "🔴 (3)" : "";
console.log(`\nNotifiche${badge}`);

// Classe CSS condizionale
let isActive = true;
let buttonClass = `btn ${isActive ? "active" : ""}`;
console.log(`Classe button: "${buttonClass}"`);

// Attributo disabled
let isValid = false;
let disabled = isValid ? "" : "disabled";
console.log(`<button ${disabled}>Invia</button>`);


console.log("\n=== 3. FORMATTING (FORMATTAZIONE) ===\n");

// Singolare/Plurale
function formatItems(count) {
  return `${count} ${count === 1 ? "elemento" : "elementi"}`;
}
console.log(formatItems(0));
console.log(formatItems(1));
console.log(formatItems(5));

// Con unità
function formatSize(bytes) {
  return bytes < 1024 
    ? `${bytes} B` 
    : `${(bytes / 1024).toFixed(2)} KB`;
}
console.log(`\n${formatSize(500)}`);
console.log(formatSize(2048));

// Numeri con segno
function formatDelta(n) {
  return n > 0 ? `+${n}` : (n < 0 ? `${n}` : "0");
}
console.log(`\nDelta: ${formatDelta(5)}`);
console.log(`Delta: ${formatDelta(-3)}`);
console.log(`Delta: ${formatDelta(0)}`);

// Percentuali colorate
function formatPercentage(value, threshold) {
  let color = value >= threshold ? "🟢" : "🔴";
  return `${color} ${value}%`;
}
console.log(`\nSuccesso: ${formatPercentage(85, 75)}`);
console.log(`Fallimento: ${formatPercentage(50, 75)}`);


console.log("\n=== 4. VALIDATION (VALIDAZIONE) ===\n");

// Validazione email
function validateEmail(email) {
  return email.includes("@") && email.includes(".") 
    ? "✓ Email valida" 
    : "✗ Email non valida";
}
console.log(validateEmail("test@example.com"));
console.log(validateEmail("invalid"));

// Password strength
function checkPassword(pwd) {
  return pwd.length >= 8 
    ? (pwd.length >= 12 ? "🟢 Forte" : "🟡 Media") 
    : "🔴 Debole";
}
console.log(`\nPassword "abc": ${checkPassword("abc")}`);
console.log(`Password "password": ${checkPassword("password")}`);
console.log(`Password "MyStrongPass123!": ${checkPassword("MyStrongPass123!")}`);

// Form validation
function validateForm(data) {
  let nameValid = data.name ? "✓" : "✗";
  let emailValid = data.email.includes("@") ? "✓" : "✗";
  let ageValid = data.age >= 18 ? "✓" : "✗";
  
  console.log(`\nValidazione form:`);
  console.log(`  Nome: ${nameValid} ${data.name || "(vuoto)"}`);
  console.log(`  Email: ${emailValid} ${data.email}`);
  console.log(`  Età: ${ageValid} ${data.age}`);
  
  return data.name && data.email.includes("@") && data.age >= 18;
}

let formData = { name: "Mario", email: "mario@test.com", age: 25 };
let isValid2 = validateForm(formData);
console.log(`Form valido: ${isValid2 ? "✓ Sì" : "✗ No"}`);


console.log("\n=== 5. CONDITIONAL EXECUTION (ESECUZIONE CONDIZIONALE) ===\n");

// Con side effects (sconsigliato ma esempio)
let count2 = 0;
let shouldIncrement = true;

// ❌ Sconsigliato: side effects nel ternario
let result1 = shouldIncrement ? ++count2 : count2;
console.log(`Count dopo ternario: ${count2}`);

// ✓ Meglio: if per side effects
if (shouldIncrement) {
  count2++;
}
console.log(`Count dopo if: ${count2}`);

// ✓ OK: solo return valore
function increment(n, should) {
  return should ? n + 1 : n;
}
console.log(`\nIncrement(5, true): ${increment(5, true)}`);
console.log(`Increment(5, false): ${increment(5, false)}`);


console.log("\n=== 6. CONFIGURATION (CONFIGURAZIONE) ===\n");

// Configurazione ambiente
const ENV = "development";
const config = {
  apiUrl: ENV === "production" 
    ? "https://api.example.com" 
    : "http://localhost:3000",
  debug: ENV === "development" ? true : false,
  timeout: ENV === "production" ? 5000 : 30000
};
console.log("Config:", config);

// Feature flags
const features = {
  darkMode: true,
  theme: true ? "dark" : "light",
  language: false ? "en" : "it"
};
console.log("\nFeatures:", features);

// Prezzi per regione
function getPrice(base, region) {
  return region === "EU" 
    ? base * 1.22  // IVA 22%
    : (region === "US" ? base : base * 1.10);
}
console.log(`\nPrezzo EU: €${getPrice(100, "EU")}`);
console.log(`Prezzo US: $${getPrice(100, "US")}`);
console.log(`Prezzo resto: €${getPrice(100, "OTHER")}`);


console.log("\n=== 7. ARRAY E OGGETTI ===\n");

// Map con ternario
let numeri = [1, 2, 3, 4, 5];
let labels = numeri.map(n => n % 2 === 0 ? "even" : "odd");
console.log("Numeri:", numeri);
console.log("Labels:", labels);

// Filter con ternario (meno comune)
let scores = [45, 78, 92, 34, 67];
let results = scores.map(s => s >= 60 ? "Pass" : "Fail");
console.log("\nScores:", scores);
console.log("Results:", results);

// Reduce con ternario
let numbers = [1, -2, 3, -4, 5];
let sum = numbers.reduce((acc, n) => n > 0 ? acc + n : acc, 0);
console.log(`\nSolo positivi [${numbers}]: ${sum}`);

// Sort con ternario
let words = ["banana", "apple", "cherry"];
words.sort((a, b) => a < b ? -1 : (a > b ? 1 : 0));
console.log(`Sorted: [${words}]`);


console.log("\n=== 8. IN JSX/TEMPLATE (SIMULAZIONE) ===\n");

// Simulazione React/Vue
function renderComponent(props) {
  let {isLoading, hasError, data} = props;
  
  return isLoading 
    ? "<LoadingSpinner />" 
    : (hasError 
      ? "<ErrorMessage />" 
      : `<DataDisplay data="${data}" />`);
}

console.log("Loading:", renderComponent({isLoading: true, hasError: false, data: null}));
console.log("Error:", renderComponent({isLoading: false, hasError: true, data: null}));
console.log("Data:", renderComponent({isLoading: false, hasError: false, data: "content"}));

// Conditional attributes
function getButtonProps(type) {
  return {
    className: type === "primary" ? "btn-primary" : "btn-secondary",
    disabled: type === "disabled" ? true : false,
    icon: type === "primary" ? "✓" : "○"
  };
}
console.log("\nPrimary button:", getButtonProps("primary"));
console.log("Secondary button:", getButtonProps("secondary"));


console.log("\n=== 9. PERFORMANCE PATTERNS ===\n");

// Caching con ternario
let cache = {};
function getExpensiveValue(key) {
  return cache[key] 
    ? cache[key] 
    : (cache[key] = `Computed-${key}`);
}

console.log("Prima chiamata:", getExpensiveValue("A"));
console.log("Cache:", cache);
console.log("Seconda chiamata (cached):", getExpensiveValue("A"));

// Lazy evaluation
function processData(data, shouldProcess) {
  // Processa solo se necessario
  return shouldProcess 
    ? data.map(x => x * 2)  // Costoso
    : data;  // Veloce
}

let data = [1, 2, 3, 4, 5];
console.log("\nNon processato:", processData(data, false));
console.log("Processato:", processData(data, true));

// Memoization semplice
let memo = {};
function fibonacci(n) {
  return n <= 1 
    ? n 
    : (memo[n] ?? (memo[n] = fibonacci(n-1) + fibonacci(n-2)));
}
console.log("\nFibonacci(10):", fibonacci(10));
console.log("Memo:", memo);


console.log("\n=== 10. BEST PRACTICES E ANTI-PATTERNS ===\n");

console.log("✓ DO (Fai):\n");

// 1. Usa per assegnazioni semplici
let status = isActive ? "active" : "inactive";
console.log("1. Assegnazione semplice:", status);

// 2. Mantieni leggibile
let price = hasDiscount ? basePrice * 0.9 : basePrice;
console.log("2. Leggibile:", price);

// 3. Usa per return
const getMax = (a, b) => a > b ? a : b;
console.log("3. Return diretto:", getMax(10, 5));

console.log("\n✗ DON'T (Non fare):\n");

// 1. ❌ Troppo complesso
let bad1 = condition1 ? (condition2 ? (condition3 ? "A" : "B") : "C") : "D";
console.log("1. Troppo annidato (usa if-else)");

// 2. ❌ Side effects
let counter = 0;
let bad2 = shouldCount ? counter++ : counter--;  // Confusionario
console.log("2. Side effects (usa if-else)");

// 3. ❌ Chiamate funzioni complesse
// let bad3 = cond ? complexFunction1() : complexFunction2();
console.log("3. Funzioni complesse (usa if-else)");

console.log("\n✓ ALTERNATIVE MIGLIORI:\n");

// Invece di ternario complesso, usa:

// 1. If-else per logica complessa
function processOrder(order) {
  if (!order.items.length) {
    return "Carrello vuoto";
  }
  if (order.total < 10) {
    return "Ordine troppo piccolo";
  }
  if (!order.paymentMethod) {
    return "Seleziona pagamento";
  }
  return "Ordine valido";
}

// 2. Switch per molti valori
function getStatus(code) {
  switch(code) {
    case 200: return "OK";
    case 404: return "Not Found";
    case 500: return "Server Error";
    default: return "Unknown";
  }
}

// 3. Oggetto per mappature
const statusMessages = {
  pending: "In attesa",
  processing: "In elaborazione",
  completed: "Completato",
  failed: "Fallito"
};
let statusMsg = statusMessages[order.status] || "Sconosciuto";

console.log("Usa l'approccio più leggibile per il tuo caso!");

console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO PATTERN TERNARIO");
console.log("=".repeat(50));
console.log(`
✓ USA TERNARIO per:
  - Assegnazioni semplici
  - Return in funzioni
  - Default values (con controllo esplicito)
  - Formattazione semplice
  - Classi CSS condizionali
  - Singolare/Plurale
  
✗ NON usare per:
  - Logica complessa
  - Side effects
  - 3+ livelli annidati
  - Quando if-else è più chiaro

💡 REGOLA D'ORO:
Se serve più di 10 secondi per capire il ternario,
usa if-else o switch!

ALTERNATIVE:
  - if-else: logica complessa
  - switch: molti valori discreti
  - oggetto: mappature chiave-valore
  - ||/&&: short-circuit evaluation
  - ??: nullish coalescing
`);
