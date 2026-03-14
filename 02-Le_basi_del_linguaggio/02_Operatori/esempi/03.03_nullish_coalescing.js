/**
 * Esempio: Nullish Coalescing Operator (??)
 * 
 * Operatore per fornire valori di default solo per null/undefined.
 * Differenza con || e quando usarlo.
 * 
 * Per eseguire: node 03.03_nullish_coalescing.js
 */

console.log("=== NULLISH COALESCING OPERATOR (??) ===\n");

// 1. Sintassi base del ??
console.log("1. SINTASSI BASE del ??:\n");

console.log("Restituisce il primo valore non-nullish:");
console.log("null ?? 'default':", null ?? "default"); // 'default'
console.log("undefined ?? 'default':", undefined ?? "default"); // 'default'
console.log("'value' ?? 'default':", "value" ?? "default"); // 'value'

console.log("\nCon variabili:");
let name = null;
let userName = name ?? "Guest";
console.log("userName:", userName); // Guest

let age = undefined;
let userAge = age ?? 18;
console.log("userAge:", userAge); // 18

// 2. Differenza tra ?? e ||
console.log("\n2. DIFFERENZA tra ?? e ||:\n");

console.log("Con valori falsy NON nullish:");
console.log("0 || 100:", 0 || 100); // 100 (0 è falsy)
console.log("0 ?? 100:", 0 ?? 100); // 0 (0 non è nullish!)

console.log("\n'' || 'default':", "" || "default"); // 'default' ('' è falsy)
console.log("'' ?? 'default':", "" ?? "default"); // '' (non è nullish!)

console.log("\nfalse || true:", false || true); // true (false è falsy)
console.log("false ?? true:", false ?? true); // false (non è nullish!)

console.log("\nCon null/undefined:");
console.log("null || 'default':", null || "default"); // 'default'
console.log("null ?? 'default':", null ?? "default"); // 'default'
console.log("undefined || 'default':", undefined || "default"); // 'default'
console.log("undefined ?? 'default':", undefined ?? "default"); // 'default'

console.log("\n✓ ?? considera solo null e undefined come 'mancanti'");
console.log("✓ || considera tutti i falsy come 'mancanti'");

// 3. Casi d'uso pratici
console.log("\n3. CASI D'USO pratici:\n");

console.log("Configurazione con valori 0 o false validi:");

// Volume che può essere 0
function setVolume(level) {
  // ✗ Problema con ||
  let volume1 = level || 50;
  console.log("Con ||, volume(0):", volume1); // 50 (BUG!)
  
  // ✓ Corretto con ??
  let volume2 = level ?? 50;
  console.log("Con ??, volume(0):", volume2); // 0 (CORRETTO!)
}

setVolume(0);
setVolume(undefined);

console.log("\nContatore che può essere 0:");
let count = 0;
let displayCount1 = count || "Nessuno"; // "Nessuno" (BUG!)
let displayCount2 = count ?? "Nessuno"; // 0 (CORRETTO!)
console.log("Con ||:", displayCount1);
console.log("Con ??:", displayCount2);

console.log("\nFlag boolean che può essere false:");
let isEnabled = false;
let status1 = isEnabled || "Non impostato"; // "Non impostato" (BUG!)
let status2 = isEnabled ?? "Non impostato"; // false (CORRETTO!)
console.log("Con ||:", status1);
console.log("Con ??:", status2);

// 4. Chain di ??
console.log("\n4. CHAIN di ??:\n");

let value1 = null;
let value2 = undefined;
let value3 = "";
let value4 = "Trovato!";

console.log("Chain multipli:");
let result = value1 ?? value2 ?? value3 ?? value4 ?? "Default";
console.log("Risultato:", result); // "" (primo non-nullish)

console.log("\nPrecedenza da sinistra:");
let a = null, b = undefined, c = 0, d = 42;
console.log("null ?? undefined ?? 0 ?? 42:", a ?? b ?? c ?? d); // 0

// 5. ?? con oggetti e proprietà opzionali
console.log("\n5. ?? con oggetti e proprietà opzionali:\n");

let config = {
  port: 0,
  timeout: null,
  retries: undefined
};

console.log("Accesso a proprietà con default:");
console.log("port:", config.port ?? 8080); // 0 (valido!)
console.log("timeout:", config.timeout ?? 5000); // 5000
console.log("retries:", config.retries ?? 3); // 3

let user = {
  name: "Alice",
  age: 0,
  email: null
};

console.log("\nDati utente con fallback:");
console.log("name:", user.name ?? "Anonymous"); // Alice
console.log("age:", user.age ?? 18); // 0
console.log("email:", user.email ?? "no-email@example.com"); // no-email@...

// 6. ?? con optional chaining (?.)
console.log("\n6. ?? con OPTIONAL CHAINING (?.):\n");

let userData = {
  profile: {
    settings: {
      theme: null
    }
  }
};

console.log("Combinazione ?. e ??:");
let theme = userData?.profile?.settings?.theme ?? "light";
console.log("theme:", theme); // light

let missingUser = null;
let userName2 = missingUser?.profile?.name ?? "Guest";
console.log("userName:", userName2); // Guest

console.log("\nAccesso sicuro con default:");
let obj = { a: { b: { c: 0 } } };
console.log("obj?.a?.b?.c ?? 10:", obj?.a?.b?.c ?? 10); // 0
console.log("obj?.x?.y?.z ?? 10:", obj?.x?.y?.z ?? 10); // 10

// 7. Limitazioni e precedenza
console.log("\n7. LIMITAZIONI e precedenza:\n");

console.log("⚠️  Non si può combinare direttamente con && o ||:");
// console.log(true || false ?? true); // SyntaxError!
// console.log(true && false ?? true); // SyntaxError!

console.log("✓ Usa parentesi:");
console.log("(true || false) ?? true:", (true || false) ?? true); // true
console.log("true || (false ?? true):", true || (false ?? true)); // true

console.log("\nPrecedenza con altri operatori:");
console.log("null ?? 5 + 3:", null ?? 5 + 3); // 8 (5+3 prima)
console.log("(null ?? 5) + 3:", (null ?? 5) + 3); // 8

// 8. Nullish assignment (??=)
console.log("\n8. NULLISH ASSIGNMENT (??=):\n");

let settings = {
  volume: 0,
  brightness: null
};

console.log("Assegnamento solo se nullish:");
settings.volume ??= 50;
console.log("volume dopo ??=:", settings.volume); // 0 (non cambia!)

settings.brightness ??= 80;
console.log("brightness dopo ??=:", settings.brightness); // 80 (assegnato!)

console.log("\nEquivalente a:");
console.log("x ??= y  →  x = x ?? y");

let counter = 0;
counter ??= 10;
console.log("counter:", counter); // 0 (non cambia)

let total = undefined;
total ??= 100;
console.log("total:", total); // 100 (assegnato)

// 9. Confronto completo: ||, ?? e default parameter
console.log("\n9. CONFRONTO: ||, ??, default parameter:\n");

function test1(value) {
  return value || "default"; // Tutti i falsy
}

function test2(value) {
  return value ?? "default"; // Solo null/undefined
}

function test3(value = "default") {
  return value; // Solo undefined (non null!)
}

console.log("Con 0:");
console.log("test1(0):", test1(0)); // "default"
console.log("test2(0):", test2(0)); // 0
console.log("test3(0):", test3(0)); // 0

console.log("\nCon null:");
console.log("test1(null):", test1(null)); // "default"
console.log("test2(null):", test2(null)); // "default"
console.log("test3(null):", test3(null)); // null (!)

console.log("\nCon undefined:");
console.log("test1(undefined):", test1(undefined)); // "default"
console.log("test2(undefined):", test2(undefined)); // "default"
console.log("test3(undefined):", test3(undefined)); // "default"

console.log("\nCon '':");
console.log("test1(''):", test1("")); // "default"
console.log("test2(''):", test2("")); // ""
console.log("test3(''):", test3("")); // ""

// 10. Best practices
console.log("\n10. BEST PRACTICES:\n");

console.log("✓ Usa ?? per valori numerici che possono essere 0:");
console.log(`
function updateScore(points) {
  // ✓ 0 è valido
  this.score = points ?? 0;
  
  // ✗ 0 diventerebbe 0 di default
  // this.score = points || 0;
}
`);

console.log("✓ Usa ?? per boolean che possono essere false:");
console.log(`
function setFlag(enabled) {
  // ✓ false è valido
  this.enabled = enabled ?? true;
  
  // ✗ false diventerebbe true
  // this.enabled = enabled || true;
}
`);

console.log("✓ Usa ?? per stringhe vuote valide:");
console.log(`
function setName(name) {
  // ✓ '' è valido
  this.name = name ?? "Unnamed";
  
  // ✗ '' diventerebbe "Unnamed"
  // this.name = name || "Unnamed";
}
`);

console.log("✓ Usa || solo quando TUTTI i falsy devono usare default:");
console.log(`
function displayValue(value) {
  // ✓ Voglio default per 0, '', false, null, undefined
  return value || "Nessun valore";
}
`);

console.log("✓ Combina con optional chaining:");
console.log(`
// ✓ Accesso sicuro + default
const email = user?.contact?.email ?? "no-email";
const count = data?.items?.length ?? 0;
`);

console.log("✓ Usa ??= per inizializzazione lazy:");
console.log(`
// ✓ Assegna solo se non esiste
config.timeout ??= 5000;
cache.data ??= fetchData();
`);

console.log("\n⚠️  RICORDA:");
console.log("  - ?? restituisce il primo valore NON nullish");
console.log("  - Solo null e undefined sono considerati nullish");
console.log("  - 0, false, '' NON sono nullish");
console.log("  - ?? è più specifico di ||");
console.log("  - Non mescolare con && o || senza parentesi");
console.log("  - ??= assegna solo se nullish");
console.log("  - Default parameter usa solo undefined (non null)");

console.log("\n✅ Usa ?? quando 0, false, '' sono valori validi!");
