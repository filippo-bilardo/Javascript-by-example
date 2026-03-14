/**
 * Esempio: Operatori Logici AND (&&) e OR (||)
 * 
 * Operatori per combinare espressioni booleane.
 * Short-circuit evaluation e valori truthy/falsy.
 * 
 * Per eseguire: node 03.01_and_or.js
 */

console.log("=== OPERATORI LOGICI AND (&&) e OR (||) ===\n");

// 1. AND logico (&&)
console.log("1. AND LOGICO (&&):\n");

console.log("Tabella di verità AND:");
console.log("true && true:", true && true); // true
console.log("true && false:", true && false); // false
console.log("false && true:", false && true); // false
console.log("false && false:", false && false); // false
console.log("✓ AND restituisce true solo se ENTRAMBI true");

console.log("\nCondizioni multiple:");
let age = 25;
let hasLicense = true;
console.log("Può guidare?", age >= 18 && hasLicense); // true

let temperature = 22;
console.log("Temperatura confortevole?",
  temperature >= 20 && temperature <= 25); // true

// 2. OR logico (||)
console.log("\n2. OR LOGICO (||):\n");

console.log("Tabella di verità OR:");
console.log("true || true:", true || true); // true
console.log("true || false:", true || false); // true
console.log("false || true:", false || true); // true
console.log("false || false:", false || false); // false
console.log("✓ OR restituisce true se ALMENO UNO è true");

console.log("\nCondizioni alternative:");
let isWeekend = true;
let isHoliday = false;
console.log("Giorno libero?", isWeekend || isHoliday); // true

let hasDiscount = false;
let isMember = true;
console.log("Sconto applicabile?", hasDiscount || isMember); // true

// 3. Valori truthy e falsy
console.log("\n3. VALORI TRUTHY e FALSY:\n");

console.log("Valori FALSY (convertiti a false):");
console.log("Boolean(false):", Boolean(false)); // false
console.log("Boolean(0):", Boolean(0)); // false
console.log("Boolean(-0):", Boolean(-0)); // false
console.log("Boolean(''):", Boolean("")); // false
console.log("Boolean(null):", Boolean(null)); // false
console.log("Boolean(undefined):", Boolean(undefined)); // false
console.log("Boolean(NaN):", Boolean(NaN)); // false
console.log("⚠️  Solo questi 7 valori sono falsy!");

console.log("\nValori TRUTHY (convertiti a true):");
console.log("Boolean(true):", Boolean(true)); // true
console.log("Boolean(1):", Boolean(1)); // true
console.log("Boolean(-1):", Boolean(-1)); // true
console.log("Boolean('hello'):", Boolean("hello")); // true
console.log("Boolean(' '):", Boolean(" ")); // true (stringa con spazio!)
console.log("Boolean([]):", Boolean([])); // true
console.log("Boolean({}):", Boolean({})); // true
console.log("Boolean(function(){}):", Boolean(function(){})); // true
console.log("✓ TUTTI gli altri valori sono truthy");

// 4. Short-circuit evaluation (valutazione a corto circuito)
console.log("\n4. SHORT-CIRCUIT EVALUATION:\n");

console.log("AND (&&) - si ferma al primo false:");
let x = 0;
console.log("false && (x = 10):", false && (x = 10)); // false
console.log("x =", x); // 0 (assegnazione non eseguita!)

console.log("true && (x = 20):", true && (x = 20)); // 20
console.log("x =", x); // 20 (assegnazione eseguita)

console.log("\nOR (||) - si ferma al primo true:");
let y = 0;
console.log("true || (y = 10):", true || (y = 10)); // true
console.log("y =", y); // 0 (assegnazione non eseguita!)

console.log("false || (y = 20):", false || (y = 20)); // 20
console.log("y =", y); // 20 (assegnazione eseguita)

// 5. AND restituisce l'ultimo valore valutato
console.log("\n5. AND restituisce ultimo valore valutato:\n");

console.log("Primo operando falsy:");
console.log("0 && 10:", 0 && 10); // 0 (si ferma)
console.log("null && 'hello':", null && "hello"); // null
console.log("'' && true:", "" && true); // ''

console.log("\nEntrambi truthy:");
console.log("5 && 10:", 5 && 10); // 10 (ultimo)
console.log("'hello' && 'world':", "hello" && "world"); // 'world'
console.log("[] && {}:", [] && {}); // {}

console.log("\nChain di AND:");
console.log("1 && 2 && 3:", 1 && 2 && 3); // 3
console.log("1 && 0 && 3:", 1 && 0 && 3); // 0 (si ferma)

// 6. OR restituisce il primo valore truthy
console.log("\n6. OR restituisce primo valore truthy:\n");

console.log("Primo operando truthy:");
console.log("10 || 0:", 10 || 0); // 10 (si ferma)
console.log("'hello' || null:", "hello" || null); // 'hello'
console.log("true || '':", true || ""); // true

console.log("\nEntrambi falsy:");
console.log("0 || '':", 0 || ""); // '' (ultimo)
console.log("null || undefined:", null || undefined); // undefined
console.log("false || 0:", false || 0); // 0

console.log("\nChain di OR:");
console.log("null || '' || 'default':", null || "" || "default"); // 'default'
console.log("0 || false || 10:", 0 || false || 10); // 10

// 7. Pattern comuni: valori di default con ||
console.log("\n7. PATTERN: valori di default con ||:\n");

function greet(name) {
  let userName = name || "Guest";
  return `Hello, ${userName}!`;
}

console.log("greet('Alice'):", greet("Alice")); // Hello, Alice!
console.log("greet(''):", greet("")); // Hello, Guest!
console.log("greet(null):", greet(null)); // Hello, Guest!
console.log("greet():", greet()); // Hello, Guest!

// ⚠️ Problema con valori falsy validi
function setVolume(level) {
  let volume = level || 50; // Problema con 0!
  return volume;
}

console.log("\nsetVolume(80):", setVolume(80)); // 80
console.log("setVolume(0):", setVolume(0)); // 50 (BUG! 0 è falsy)
console.log("⚠️  Usa ?? (nullish coalescing) per evitare questo!");

// 8. Pattern comuni: guard conditions con &&
console.log("\n8. PATTERN: guard conditions con &&:\n");

let user = {
  name: "Alice",
  profile: {
    email: "alice@example.com"
  }
};

console.log("Accesso sicuro con &&:");
console.log(user && user.profile && user.profile.email); // alice@example.com

let noUser = null;
console.log(noUser && noUser.profile && noUser.profile.email); // null

console.log("\nEsecuzione condizionale:");
let isLoggedIn = true;
isLoggedIn && console.log("✓ Utente loggato"); // Eseguito

let isGuest = false;
isGuest && console.log("Questo non viene stampato"); // Non eseguito

// 9. Combinazioni complesse
console.log("\n9. COMBINAZIONI COMPLESSE:\n");

console.log("AND ha precedenza su OR:");
console.log("true || false && false:", true || false && false); // true
console.log("(true || false) && false:", (true || false) && false); // false
console.log("⚠️  && si valuta prima di ||");

console.log("\nCondizioni multiple:");
let hour = 14;
let day = "Monday";
let isOpen = (hour >= 9 && hour < 18) && (day !== "Sunday");
console.log(`Negozio aperto alle ${hour} di ${day}?`, isOpen); // true

let age2 = 25;
let income = 30000;
let hasJob = true;
let eligible = (age2 >= 18 && age2 <= 65) && (income > 20000 || hasJob);
console.log("Eligible?", eligible); // true

// 10. Best practices
console.log("\n10. BEST PRACTICES:\n");

console.log("✓ Usa parentesi per chiarezza:");
console.log(`
// ✗ Confuso
if (a && b || c && d) { }

// ✓ Chiaro
if ((a && b) || (c && d)) { }
`);

console.log("✓ Evita side effects in condizioni:");
console.log(`
// ✗ Sbagliato
if (x++ > 5 || y++ < 10) { }

// ✓ Corretto
x++;
y++;
if (x > 5 || y < 10) { }
`);

console.log("✓ Preferisci esplicitezza per boolean:");
console.log(`
// ⚠️  Implicito
if (value) { }

// ✓ Esplicito
if (value !== null && value !== undefined) { }
if (typeof value === 'string' && value.length > 0) { }
`);

console.log("✓ Usa ?? invece di || per default:");
console.log(`
// ⚠️  Problema con 0, '', false
let value = input || 'default';

// ✓ Solo null/undefined
let value = input ?? 'default';
`);

console.log("✓ Optional chaining invece di && chain:");
console.log(`
// ⚠️  Verbose
if (obj && obj.prop && obj.prop.value) { }

// ✓ Moderno
if (obj?.prop?.value) { }
`);

console.log("\n⚠️  RICORDA:");
console.log("  - && restituisce primo falsy o ultimo valore");
console.log("  - || restituisce primo truthy o ultimo valore");
console.log("  - Solo 7 valori sono falsy!");
console.log("  - [] e {} sono truthy!");
console.log("  - && ha precedenza su ||");
console.log("  - Short-circuit può prevenire esecuzione");

console.log("\n✅ Usa operatori logici per controllo flusso!");
