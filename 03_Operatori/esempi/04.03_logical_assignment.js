/**
 * Esempio: Logical Assignment Operators
 * 
 * Operatori di assegnazione logica: &&=, ||=, ??=
 * Combinano logica e assegnazione condizionale.
 * 
 * Per eseguire: node 04.03_logical_assignment.js
 */

console.log("=== LOGICAL ASSIGNMENT OPERATORS ===\n");

// 1. Logical AND assignment (&&=)
console.log("1. LOGICAL AND ASSIGNMENT (&&=):\n");

console.log("Sintassi: x &&= y");
console.log("Assegna y a x SOLO se x è truthy\n");

let value1 = "Hello";
console.log("value1 =", value1); // "Hello"
value1 &&= "World";
console.log("value1 &&= 'World', value1 =", value1); // "World"

let value2 = 0;
console.log("\nvalue2 =", value2); // 0
value2 &&= 100;
console.log("value2 &&= 100, value2 =", value2); // 0 (non assegnato!)

console.log("\n✓ x &&= y equivale a: x && (x = y)");
console.log("✓ Assegna SOLO se x è truthy");

console.log("\nCon null/undefined:");
let x = null;
x &&= 10;
console.log("null &&= 10:", x); // null (non assegnato)

let y = undefined;
y &&= 20;
console.log("undefined &&= 20:", y); // undefined (non assegnato)

// 2. Logical OR assignment (||=)
console.log("\n2. LOGICAL OR ASSIGNMENT (||=):\n");

console.log("Sintassi: x ||= y");
console.log("Assegna y a x SOLO se x è falsy\n");

let name1 = "";
console.log("name1 =", name1); // ""
name1 ||= "Guest";
console.log("name1 ||= 'Guest', name1 =", name1); // "Guest"

let name2 = "Alice";
console.log("\nname2 =", name2); // "Alice"
name2 ||= "Guest";
console.log("name2 ||= 'Guest', name2 =", name2); // "Alice" (non cambiato)

console.log("\n✓ x ||= y equivale a: x || (x = y)");
console.log("✓ Assegna SOLO se x è falsy");

console.log("\nCon 0:");
let count = 0;
count ||= 10;
console.log("0 ||= 10:", count); // 10 (0 è falsy)

// 3. Nullish coalescing assignment (??=)
console.log("\n3. NULLISH COALESCING ASSIGNMENT (??=):\n");

console.log("Sintassi: x ??= y");
console.log("Assegna y a x SOLO se x è null o undefined\n");

let value3 = null;
console.log("value3 =", value3); // null
value3 ??= "Default";
console.log("value3 ??= 'Default', value3 =", value3); // "Default"

let value4 = 0;
console.log("\nvalue4 =", value4); // 0
value4 ??= 100;
console.log("value4 ??= 100, value4 =", value4); // 0 (non cambiato!)

console.log("\n✓ x ??= y equivale a: x ?? (x = y)");
console.log("✓ Assegna SOLO se x è null o undefined");

console.log("\nCon false:");
let flag = false;
flag ??= true;
console.log("false ??= true:", flag); // false (non cambiato!)

console.log("\nCon stringa vuota:");
let text = "";
text ??= "Default";
console.log("'' ??= 'Default':", text); // "" (non cambiato!)

// 4. Confronto tra &&=, ||=, ??=
console.log("\n4. CONFRONTO tra &&=, ||=, ??=:\n");

console.log("Con valore 0:");
let a1 = 0, a2 = 0, a3 = 0;
a1 &&= 10;
a2 ||= 10;
a3 ??= 10;
console.log("0 &&= 10:", a1); // 0 (falsy, non assegna)
console.log("0 ||= 10:", a2); // 10 (falsy, assegna)
console.log("0 ??= 10:", a3); // 0 (non nullish, non assegna)

console.log("\nCon stringa vuota '':");
let b1 = "", b2 = "", b3 = "";
b1 &&= "X";
b2 ||= "X";
b3 ??= "X";
console.log("'' &&= 'X':", b1); // "" (falsy, non assegna)
console.log("'' ||= 'X':", b2); // "X" (falsy, assegna)
console.log("'' ??= 'X':", b3); // "" (non nullish, non assegna)

console.log("\nCon null:");
let c1 = null, c2 = null, c3 = null;
c1 &&= "Y";
c2 ||= "Y";
c3 ??= "Y";
console.log("null &&= 'Y':", c1); // null (falsy, non assegna)
console.log("null ||= 'Y':", c2); // "Y" (falsy, assegna)
console.log("null ??= 'Y':", c3); // "Y" (nullish, assegna)

console.log("\nCon valore truthy:");
let d1 = "OK", d2 = "OK", d3 = "OK";
d1 &&= "NEW";
d2 ||= "NEW";
d3 ??= "NEW";
console.log("'OK' &&= 'NEW':", d1); // "NEW" (truthy, assegna)
console.log("'OK' ||= 'NEW':", d2); // "OK" (truthy, non assegna)
console.log("'OK' ??= 'NEW':", d3); // "OK" (non nullish, non assegna)

// 5. Casi d'uso con &&=
console.log("\n5. CASI D'USO con &&=:\n");

console.log("Aggiornare solo se esiste:");
let user = {name: "Alice", premium: true};
user.premium &&= "Gold"; // Upgrade solo se già premium
console.log("user.premium =", user.premium); // "Gold"

let guest = {name: "Bob"};
guest.premium &&= "Gold"; // Non esiste, non assegna
console.log("guest.premium =", guest.premium); // undefined

console.log("\nAbilitare feature se già attiva:");
let settings = {notifications: true};
settings.notifications &&= {email: true, sms: false};
console.log("settings.notifications =", settings.notifications);

console.log("\nShort-circuit per performance:");
let cache = "data";
cache &&= expensiveComputation();
function expensiveComputation() {
  console.log("  → Computation eseguita");
  return "new data";
}
console.log("cache =", cache);

// 6. Casi d'uso con ||=
console.log("\n6. CASI D'USO con ||=:\n");

console.log("Inizializzazione lazy:");
let config = {};
config.port ||= 8080;
config.host ||= "localhost";
console.log("config =", config); // {port: 8080, host: "localhost"}

console.log("\nDefault per variabili:");
let username = "";
username ||= "Anonymous";
console.log("username =", username); // "Anonymous"

console.log("\nDefault in oggetti:");
let options = {timeout: 0}; // 0 è valore ma falsy!
options.timeout ||= 5000;
console.log("options.timeout =", options.timeout); // 5000 (⚠️ BUG!)
console.log("⚠️  Meglio usare ??= per valori 0 validi");

console.log("\nAccumulatore con fallback:");
let results = [];
results[0] ||= "First";
results[1] ||= "Second";
console.log("results =", results); // ["First", "Second"]

// 7. Casi d'uso con ??=
console.log("\n7. CASI D'USO con ??=:\n");

console.log("Default solo per null/undefined:");
let volume = 0;
volume ??= 50;
console.log("volume (0) ??= 50:", volume); // 0 (✓ corretto!)

let brightness = null;
brightness ??= 80;
console.log("brightness (null) ??= 80:", brightness); // 80

console.log("\nConfigurazione sicura:");
let appConfig = {
  port: 0,        // 0 valido
  debug: false,   // false valido
  timeout: null   // da impostare
};

appConfig.port ??= 8080;
appConfig.debug ??= true;
appConfig.timeout ??= 5000;

console.log("appConfig =", appConfig);
// {port: 0, debug: false, timeout: 5000}

console.log("\nInizialization in classi:");
class Counter {
  constructor(initial) {
    this.count ??= initial ?? 0;
  }
}
let c = new Counter(5);
console.log("c.count =", c.count); // 5

console.log("\nCache con valori falsy validi:");
let dataCache = {
  result: 0,      // 0 è risultato valido
  error: null     // null = da caricare
};

dataCache.result ??= fetchData();
dataCache.error ??= checkErrors();

function fetchData() { return 100; }
function checkErrors() { return "No errors"; }

console.log("dataCache.result =", dataCache.result); // 0 (mantiene)
console.log("dataCache.error =", dataCache.error); // "No errors"

// 8. Combinazioni e precedenza
console.log("\n8. COMBINAZIONI e precedenza:\n");

console.log("Non usare insieme senza parentesi:");
// let x = a ||= b &&= c; // Ambiguo!

console.log("✓ Sequenza separata:");
let value = null;
value ??= 10;
value &&= value * 2;
console.log("value =", value); // 20

console.log("\nChain di assegnamenti:");
let obj = {};
obj.a ??= {};
obj.a.b ??= {};
obj.a.b.c ??= "deep";
console.log("obj =", JSON.stringify(obj));

// 9. Pattern comuni
console.log("\n9. PATTERN COMUNI:\n");

console.log("Memoization:");
function fibonacci(n, memo = {}) {
  memo[n] ??= (n <= 1) ? n : fibonacci(n-1, memo) + fibonacci(n-2, memo);
  return memo[n];
}
console.log("fibonacci(10) =", fibonacci(10)); // 55

console.log("\nDefault con side effects solo se necessario:");
let data = null;
data ??= (() => {
  console.log("  → Caricamento dati...");
  return "Loaded data";
})();
console.log("data =", data);

console.log("\nValidazione condizionale:");
function validate(input) {
  input.value ||= "required";
  input.min ??= 0;
  input.max ??= 100;
  return input;
}
console.log(validate({value: ""})); // {value: "required", min: 0, max: 100}
console.log(validate({value: "ok", min: 10})); // {value: "ok", min: 10, max: 100}

// 10. Best practices
console.log("\n10. BEST PRACTICES:\n");

console.log("✓ Usa ??= per default su null/undefined:");
console.log(`
// ✓ 0, false, '' validi
config.port ??= 8080;
config.enabled ??= true;
config.name ??= '';
`);

console.log("✓ Usa ||= per default su tutti i falsy:");
console.log(`
// ✓ Voglio default per '', 0, false, null, undefined
username ||= 'Guest';
message ||= 'No message';
`);

console.log("✓ Usa &&= per update condizionale:");
console.log(`
// ✓ Aggiorna solo se esiste e truthy
user.premium &&= upgradePlan(user.premium);
cache.data &&= refresh(cache.data);
`);

console.log("✓ Evita side effects inutili:");
console.log(`
// ✓ expensiveFunction solo se necessario
value ??= expensiveFunction();

// ✗ Sempre eseguito
value = value ?? expensiveFunction();
`);

console.log("✓ Preferisci ??= a ||= per numeri e boolean:");
console.log(`
// ✗ 0 diventa 100
count ||= 100;

// ✓ 0 rimane 0
count ??= 100;
`);

console.log("\n⚠️  RICORDA:");
console.log("  - &&= assegna solo se truthy");
console.log("  - ||= assegna solo se falsy");
console.log("  - ??= assegna solo se null/undefined");
console.log("  - ??= è preferibile per 0, false, '' validi");
console.log("  - Evitano valutazione se non necessaria");
console.log("  - Più concisi di if con assegnazione");
console.log("  - Supporto da ES2021");

console.log("\n✅ Usa logical assignment per codice più espressivo!");
