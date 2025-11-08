/**
 * Esempio: Truthy e Falsy Values
 * 
 * In JavaScript, ogni valore ha un comportamento booleano intrinseco.
 * Comprendere truthy e falsy è essenziale per scrivere condizioni corrette.
 * 
 * Per eseguire: node 04.04_truthy_falsy.js
 */

console.log("=== TRUTHY E FALSY VALUES ===\n");

// 1. I 8 valori FALSY (convertiti a false)
console.log("1. I valori FALSY (convertiti a false):\n");

const falsyValues = [
  { value: false, name: "false", desc: "Il boolean false" },
  { value: 0, name: "0", desc: "Lo zero numerico" },
  { value: -0, name: "-0", desc: "Lo zero negativo" },
  { value: 0n, name: "0n", desc: "Zero BigInt" },
  { value: "", name: '""', desc: "Stringa vuota" },
  { value: null, name: "null", desc: "Assenza intenzionale di valore" },
  { value: undefined, name: "undefined", desc: "Valore non definito" },
  { value: NaN, name: "NaN", desc: "Not a Number" },
];

console.log("Questi sono GLI UNICI 8 valori falsy in JavaScript:\n");

falsyValues.forEach(({ value, name, desc }) => {
  console.log(`${name.padEnd(12)} -> Boolean: ${Boolean(value)}\t// ${desc}`);
});

// Verifica in if
console.log("\nVerifica in condizioni if:");
falsyValues.forEach(({ value, name }) => {
  if (value) {
    console.log(`${name}: Blocco eseguito`);
  } else {
    console.log(`${name}: Blocco NON eseguito ✓`);
  }
});

// 2. Tutti gli altri sono TRUTHY
console.log("\n2. Valori TRUTHY (convertiti a true):\n");

const truthyValues = [
  { value: true, name: "true", desc: "Il boolean true" },
  { value: 1, name: "1", desc: "Qualsiasi numero diverso da 0" },
  { value: -1, name: "-1", desc: "Anche numeri negativi" },
  { value: 3.14, name: "3.14", desc: "Anche decimali" },
  { value: Infinity, name: "Infinity", desc: "Infinito positivo" },
  { value: -Infinity, name: "-Infinity", desc: "Infinito negativo" },
  { value: "0", name: '"0"', desc: "Stringa '0' (non è zero!)" },
  { value: "false", name: '"false"', desc: "Stringa 'false'" },
  { value: " ", name: '" "', desc: "Stringa con spazio" },
  { value: [], name: "[]", desc: "Array vuoto" },
  { value: {}, name: "{}", desc: "Oggetto vuoto" },
  { value: function() {}, name: "function(){}", desc: "Funzione" },
];

console.log("TUTTO il resto è truthy:\n");

truthyValues.forEach(({ value, name, desc }) => {
  console.log(`${name.padEnd(15)} -> Boolean: ${Boolean(value)}\t// ${desc}`);
});

// 3. Trappole comuni
console.log("\n3. TRAPPOLE COMUNI con falsy/truthy:\n");

console.log("⚠️  Stringa '0' è TRUTHY:");
if ("0") {
  console.log('  "0" è truthy ✓');
}

console.log("\n⚠️  Stringa 'false' è TRUTHY:");
if ("false") {
  console.log('  "false" è truthy ✓');
}

console.log("\n⚠️  Array vuoto è TRUTHY:");
if ([]) {
  console.log("  [] è truthy ✓");
}

console.log("\n⚠️  Oggetto vuoto è TRUTHY:");
if ({}) {
  console.log("  {} è truthy ✓");
}

console.log("\n⚠️  Funzione è TRUTHY:");
if (function() {}) {
  console.log("  function(){} è truthy ✓");
}

console.log("\n✓ Ma sono falsy quando convertiti esplicitamente:");
console.log("  [] == false:", [] == false); // true (conversione!)
console.log("  [] === false:", [] === false); // false
console.log("  Boolean([]):", Boolean([])); // true

// 4. Uso pratico in condizioni
console.log("\n4. USO PRATICO in condizioni:\n");

// Verifica esistenza valore
let username = "";
if (username) {
  console.log("Username presente");
} else {
  console.log("Username NON presente ✓");
}

username = "Mario";
if (username) {
  console.log("Username presente: " + username + " ✓");
}

// Problema con zero!
let count = 0;
if (count) {
  console.log("Ci sono elementi");
} else {
  console.log("ATTENZIONE: 0 è falsy! ✗");
}

// Soluzione corretta
if (count !== undefined && count !== null) {
  console.log("Count è definito: " + count + " ✓");
}

// 5. Operatore OR (||) per valori di default
console.log("\n5. Operatore || per valori DEFAULT:\n");

function greet(name) {
  let displayName = name || "Guest";
  return "Ciao, " + displayName;
}

console.log("greet('Mario'):", greet("Mario")); // "Ciao, Mario"
console.log("greet(''):", greet("")); // "Ciao, Guest"
console.log("greet(null):", greet(null)); // "Ciao, Guest"
console.log("greet(undefined):", greet(undefined)); // "Ciao, Guest"

console.log("\n⚠️  Problema con || e valori falsy validi:");
function setCount(value) {
  return value || 10;
}

console.log("setCount(5):", setCount(5)); // 5 ✓
console.log("setCount(0):", setCount(0)); // 10 ✗ (volevamo 0!)
console.log("setCount(''):", setCount("")); // 10

// 6. Operatore ?? (Nullish Coalescing) - ES2020
console.log("\n6. Operatore ?? (Nullish Coalescing):\n");

console.log("?? considera falsy SOLO null e undefined:");

function setCountSafe(value) {
  return value ?? 10;
}

console.log("setCountSafe(5):", setCountSafe(5)); // 5 ✓
console.log("setCountSafe(0):", setCountSafe(0)); // 0 ✓ (mantiene 0!)
console.log("setCountSafe(''):", setCountSafe("")); // "" ✓ (mantiene stringa vuota!)
console.log("setCountSafe(null):", setCountSafe(null)); // 10 ✓
console.log("setCountSafe(undefined):", setCountSafe(undefined)); // 10 ✓

// Confronto || vs ??
console.log("\nConfr onto || vs ??:");
const testValues = [0, "", false, null, undefined, "value"];
testValues.forEach(val => {
  console.log(
    `${String(val).padEnd(10)} || 'default' =`,
    String(val || "default").padEnd(10),
    "||",
    `${String(val).padEnd(10)} ?? 'default' =`,
    val ?? "default"
  );
});

// 7. Optional Chaining (?.) con falsy
console.log("\n7. OPTIONAL CHAINING (?.) con falsy:\n");

let user = {
  name: "Mario",
  address: {
    city: "Roma"
  }
};

console.log("user?.name:", user?.name); // "Mario"
console.log("user?.address?.city:", user?.address?.city); // "Roma"
console.log("user?.contact?.phone:", user?.contact?.phone); // undefined

// Con null/undefined
user = null;
console.log("(null)?.name:", user?.name); // undefined (no errore!)

// Attenzione: ?. non aiuta con altri falsy
let emptyString = "";
console.log("''?.length:", emptyString?.length); // 0 (stringa esiste, è solo vuota)

// 8. Negazione logica con truthy/falsy
console.log("\n8. NEGAZIONE LOGICA (!):\n");

console.log("! converte a boolean e nega:");
console.log("!true:", !true); // false
console.log("!false:", !false); // true
console.log("!0:", !0); // true (0 è falsy)
console.log("!'':", !""); // true
console.log("!'ciao':", !"ciao"); // false

console.log("\n!! converte esplicitamente a boolean:");
console.log("!!0:", !!0); // false
console.log("!!'':", !!""); // false
console.log("!!'ciao':", !!"ciao"); // true
console.log("!![]:", !![]); // true
console.log("!!null:", !!null); // false

// 9. Array e Object: truthy ma "vuoti"
console.log("\n9. VERIFICARE se Array/Object sono VUOTI:\n");

// Array
let arr = [];
console.log("Array vuoto:");
console.log("  Boolean([]):", Boolean(arr)); // true
console.log("  [].length === 0:", arr.length === 0); // true ✓

arr = [1, 2, 3];
console.log("\nArray con elementi:");
console.log("  Boolean([1,2,3]):", Boolean(arr)); // true
console.log("  [1,2,3].length > 0:", arr.length > 0); // true ✓

// Object
let obj = {};
console.log("\nOggetto vuoto:");
console.log("  Boolean({}):", Boolean(obj)); // true
console.log("  Object.keys({}).length === 0:", Object.keys(obj).length === 0); // true ✓

obj = { name: "Mario" };
console.log("\nOggetto con proprietà:");
console.log("  Boolean({name:'Mario'}):", Boolean(obj)); // true
console.log("  Object.keys(obj).length > 0:", Object.keys(obj).length > 0); // true ✓

// 10. Funzioni di utilità
console.log("\n10. FUNZIONI DI UTILITÀ:\n");

// Verifica valore "presente" (non falsy)
function isPresent(value) {
  return Boolean(value);
}

console.log("isPresent('hello'):", isPresent("hello")); // true
console.log("isPresent(''):", isPresent("")); // false
console.log("isPresent(0):", isPresent(0)); // false

// Verifica valore "definito" (non null/undefined)
function isDefined(value) {
  return value !== null && value !== undefined;
}

console.log("\nisDefined('hello'):", isDefined("hello")); // true
console.log("isDefined(''):", isDefined("")); // true ✓
console.log("isDefined(0):", isDefined(0)); // true ✓
console.log("isDefined(null):", isDefined(null)); // false
console.log("isDefined(undefined):", isDefined(undefined)); // false

// Verifica valore "non vuoto" (specifico per tipo)
function isNotEmpty(value) {
  if (typeof value === "string") return value.length > 0;
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === "object" && value !== null) {
    return Object.keys(value).length > 0;
  }
  return Boolean(value);
}

console.log("\nisNotEmpty('hello'):", isNotEmpty("hello")); // true
console.log("isNotEmpty(''):", isNotEmpty("")); // false
console.log("isNotEmpty([]):", isNotEmpty([])); // false ✓
console.log("isNotEmpty([1]):", isNotEmpty([1])); // true
console.log("isNotEmpty({}):", isNotEmpty({})); // false ✓
console.log("isNotEmpty({a:1}):", isNotEmpty({ a: 1 })); // true
console.log("isNotEmpty(0):", isNotEmpty(0)); // false
console.log("isNotEmpty(null):", isNotEmpty(null)); // false

// 11. Casi pratici reali
console.log("\n11. CASI PRATICI reali:\n");

// Form validation
function validateForm(data) {
  console.log("Validazione form:");
  
  // ✗ Sbagliato
  // if (data.email) { ... }  // fallisce con "user@example.com"
  
  // ✓ Corretto
  if (typeof data.email === "string" && data.email.trim().length > 0) {
    console.log("  Email valida ✓");
  } else {
    console.log("  Email non valida");
  }
  
  // Per numeri - attenzione allo zero!
  if (data.age !== null && data.age !== undefined && !isNaN(data.age)) {
    console.log(`  Età valida: ${data.age} ✓`);
  }
}

validateForm({ email: "user@example.com", age: 0 });
validateForm({ email: "", age: null });

// API response handling
function handleResponse(response) {
  console.log("\nGestione risposta API:");
  
  // ✓ Usa ?? per null/undefined
  const data = response.data ?? [];
  console.log("  Dati:", data.length, "elementi");
  
  // ✓ Verifica esistenza corretta
  if (response.error !== null && response.error !== undefined) {
    console.log("  Errore presente:", response.error);
  } else {
    console.log("  Nessun errore ✓");
  }
}

handleResponse({ data: [1, 2, 3], error: null });
handleResponse({ data: null, error: "Not found" });

// 12. Best Practices
console.log("\n12. BEST PRACTICES:\n");

console.log("✓ Conoscere i 8 valori falsy a memoria:");
console.log("  false, 0, -0, 0n, '', null, undefined, NaN");

console.log("\n✓ Per valori di default:");
console.log("  - Usa ?? per accettare 0, '', false come validi");
console.log("  - Usa || solo se vuoi escludere tutti i falsy");

console.log("\n✓ Per verifiche specifiche:");
console.log("  - Stringhe: value && value.trim().length > 0");
console.log("  - Numeri: typeof value === 'number' && !isNaN(value)");
console.log("  - Array: Array.isArray(value) && value.length > 0");
console.log("  - Oggetti: value && Object.keys(value).length > 0");

console.log("\n✓ Evitare:");
console.log("  - if (x == true) // usa if (x)");
console.log("  - if (x == false) // usa if (!x)");
console.log("  - if (x == null) // usa if (x === null)");

console.log("\n⚠️  Attenzione:");
console.log("  - '0', 'false', [], {} sono TRUTHY");
console.log("  - 0 è falsy anche se è un numero valido");
console.log("  - '' è falsy anche se è una stringa valida");
console.log("  - NaN è l'unico valore !== a se stesso");

console.log("\n💡 Esempio codice sicuro:");
console.log(`
function processInput(value) {
  // 1. Verifica tipo e presenza
  if (typeof value !== 'string') {
    throw new Error('Valore deve essere stringa');
  }
  
  // 2. Gestisci stringa vuota
  const trimmed = value.trim();
  if (trimmed.length === 0) {
    return 'VUOTO'; // Comportamento esplicito
  }
  
  // 3. Processa
  return trimmed.toUpperCase();
}
`);

console.log("\n✅ Truthy/Falsy: potente ma usa con attenzione!");
