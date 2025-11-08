/**
 * Esempio: Valori Truthy e Falsy
 * 
 * Lista completa dei valori falsy e truthy.
 * Come JavaScript converte valori in contesti booleani.
 * 
 * Per eseguire: node 03.04_truthy_falsy.js
 */

console.log("=== VALORI TRUTHY e FALSY ===\n");

// 1. I 7 valori FALSY (tutti gli altri sono truthy!)
console.log("1. I 7 VALORI FALSY:\n");

console.log("Lista completa dei falsy:");
console.log("1. false:", Boolean(false)); // false
console.log("2. 0:", Boolean(0)); // false
console.log("3. -0:", Boolean(-0)); // false
console.log("4. 0n (BigInt zero):", Boolean(0n)); // false
console.log("5. '' (stringa vuota):", Boolean("")); // false
console.log("6. null:", Boolean(null)); // false
console.log("7. undefined:", Boolean(undefined)); // false
console.log("8. NaN:", Boolean(NaN)); // false

console.log("\n⚠️  SOLO questi 8 valori sono falsy!");
console.log("✓ Tutto il resto è truthy");

// 2. Valori truthy comuni
console.log("\n2. VALORI TRUTHY comuni:\n");

console.log("Numeri:");
console.log("Boolean(1):", Boolean(1)); // true
console.log("Boolean(-1):", Boolean(-1)); // true
console.log("Boolean(3.14):", Boolean(3.14)); // true
console.log("Boolean(Infinity):", Boolean(Infinity)); // true
console.log("Boolean(-Infinity):", Boolean(-Infinity)); // true

console.log("\nStringhe:");
console.log("Boolean('hello'):", Boolean("hello")); // true
console.log("Boolean('0'):", Boolean("0")); // true (stringa!)
console.log("Boolean('false'):", Boolean("false")); // true (stringa!)
console.log("Boolean(' '):", Boolean(" ")); // true (spazio!)

console.log("\nOggetti e array:");
console.log("Boolean([]):", Boolean([])); // true (array vuoto!)
console.log("Boolean({}):", Boolean({})); // true (oggetto vuoto!)
console.log("Boolean([0]):", Boolean([0])); // true
console.log("Boolean({a:0}):", Boolean({a:0})); // true

console.log("\nFunzioni e Date:");
console.log("Boolean(function(){}):", Boolean(function(){})); // true
console.log("Boolean(new Date()):", Boolean(new Date())); // true
console.log("Boolean(/regex/):", Boolean(/regex/)); // true

// 3. Trappole comuni - valori che sembrano falsy ma non lo sono
console.log("\n3. TRAPPOLE COMUNI - sembrano falsy ma sono truthy:\n");

console.log("⚠️  Array vuoto:");
console.log("Boolean([]):", Boolean([])); // true!
console.log("[] == false:", [] == false); // true (conversione!)
console.log("if ([]) { } → esegue!");

console.log("\n⚠️  Oggetto vuoto:");
console.log("Boolean({}):", Boolean({})); // true!
console.log("{} == false:", {} == false); // false
console.log("if ({}) { } → esegue!");

console.log("\n⚠️  Stringa '0' e 'false':");
console.log("Boolean('0'):", Boolean("0")); // true!
console.log("Boolean('false'):", Boolean("false")); // true!
console.log("'0' == false:", "0" == false); // true (conversione!)

console.log("\n⚠️  Stringa con spazi:");
console.log("Boolean(' '):", Boolean(" ")); // true!
console.log("Boolean('\\t'):", Boolean("\t")); // true!
console.log("if (' ') { } → esegue!");

console.log("\n⚠️  new Boolean(false):");
console.log("Boolean(new Boolean(false)):", Boolean(new Boolean(false))); // true!
console.log("new Boolean(false) è un oggetto, quindi truthy!");

// 4. Conversione implicita in contesti booleani
console.log("\n4. CONVERSIONE IMPLICITA in contesti booleani:\n");

console.log("if statement:");
if (1) {
  console.log("✓ 1 è truthy");
}

if ("hello") {
  console.log("✓ 'hello' è truthy");
}

if (0) {
  console.log("Non eseguito");
} else {
  console.log("✓ 0 è falsy");
}

console.log("\nOperatori logici:");
console.log("5 && 'ok':", 5 && "ok"); // 'ok' (5 è truthy)
console.log("0 && 'ok':", 0 && "ok"); // 0 (0 è falsy)
console.log("null || 'default':", null || "default"); // 'default'

console.log("\nTernary operator:");
let value = "";
let result = value ? "Truthy" : "Falsy";
console.log("'' ? 'Truthy' : 'Falsy':", result); // Falsy

console.log("\nWhile loop:");
let count = 3;
console.log("Count down:");
while (count) {
  console.log(count);
  count--;
}
console.log("✓ Loop termina quando count diventa 0 (falsy)");

// 5. Tabella completa di conversione
console.log("\n5. TABELLA COMPLETA di conversione:\n");

let testValues = [
  false, true,
  0, 1, -1, 0.5,
  "", "hello", " ", "0",
  null, undefined,
  NaN, Infinity,
  [], [0], [1, 2],
  {}, {a: 1},
  function(){}
];

console.log("Valore → Boolean → Type:");
testValues.forEach(val => {
  let str = String(val);
  if (str === "") str = "(stringa vuota)";
  if (str === " ") str = "(spazio)";
  if (typeof val === "object" && val !== null) {
    str = JSON.stringify(val);
  }
  if (typeof val === "function") {
    str = "function(){}";
  }
  console.log(`${str.padEnd(20)} → ${Boolean(val).toString().padEnd(5)} → ${typeof val}`);
});

// 6. Check espliciti vs impliciti
console.log("\n6. CHECK ESPLICITI vs IMPLICITI:\n");

let input = "";

console.log("Check implicito (truthy/falsy):");
if (input) {
  console.log("Ha valore");
} else {
  console.log("✓ Vuoto o falsy"); // Eseguito
}

console.log("\nCheck esplicito (tipo e valore):");
if (input === "") {
  console.log("✓ Specificamente stringa vuota"); // Eseguito
}

if (typeof input === "string" && input.length === 0) {
  console.log("✓ Stringa vuota con type check"); // Eseguito
}

// 7. Casi d'uso pratici
console.log("\n7. CASI D'USO pratici:\n");

// Validazione form
function validateInput(value) {
  if (!value) {
    return "Campo obbligatorio"; // Copre '', null, undefined, 0, false
  }
  return "OK";
}

console.log("validateInput(''):", validateInput(""));
console.log("validateInput('test'):", validateInput("test"));

// Default con ||
function greet(name) {
  let userName = name || "Guest";
  return `Hello, ${userName}!`;
}

console.log("greet('Alice'):", greet("Alice"));
console.log("greet(''):", greet("")); // '' è falsy
console.log("greet(null):", greet(null));

// Check esistenza proprietà
let user = { name: "Alice", age: 0 };

console.log("\nCheck proprietà:");
if (user.name) {
  console.log("✓ Ha nome:", user.name);
}

if (user.age) {
  console.log("Ha età (non eseguito, 0 è falsy!)");
} else {
  console.log("⚠️  age=0 è considerato falsy!");
}

// Meglio:
if (user.age !== undefined) {
  console.log("✓ Ha età:", user.age);
}

// 8. Array e oggetti vuoti
console.log("\n8. ARRAY e OGGETTI VUOTI:\n");

let emptyArray = [];
let emptyObject = {};

console.log("Check esistenza (truthy):");
if (emptyArray) {
  console.log("✓ Array esiste (anche se vuoto)");
}

if (emptyObject) {
  console.log("✓ Oggetto esiste (anche se vuoto)");
}

console.log("\nCheck vuoto:");
if (emptyArray.length === 0) {
  console.log("✓ Array vuoto");
}

if (!emptyArray.length) {
  console.log("✓ Array vuoto (0 è falsy)");
}

if (Object.keys(emptyObject).length === 0) {
  console.log("✓ Oggetto vuoto");
}

// 9. Funzioni per conversione esplicita
console.log("\n9. FUNZIONI per conversione esplicita:\n");

console.log("Boolean():");
console.log("Boolean('test'):", Boolean("test")); // true
console.log("Boolean(0):", Boolean(0)); // false

console.log("\n!! (doppia negazione):");
console.log("!!'test':", !!"test"); // true
console.log("!!0:", !!0); // false
console.log("✓ !! equivale a Boolean()");

console.log("\nVerifica tipo boolean:");
let flag = true;
console.log("typeof flag:", typeof flag); // "boolean"
console.log("flag === true:", flag === true); // true
console.log("flag === false:", flag === false); // false

// 10. Best practices
console.log("\n10. BEST PRACTICES:\n");

console.log("✓ Sii esplicito quando conta il tipo:");
console.log(`
// ⚠️  Implicito
if (value) { }  // Cattura '', 0, false, null, undefined, NaN

// ✓ Esplicito per null/undefined
if (value != null) { }
if (value !== null && value !== undefined) { }

// ✓ Esplicito per stringhe
if (value !== '' && typeof value === 'string') { }

// ✓ Esplicito per numeri
if (typeof value === 'number' && !isNaN(value)) { }
`);

console.log("✓ Usa check espliciti per 0, '', false validi:");
console.log(`
// 0 può essere valore valido
if (score !== undefined && score !== null) { }

// '' può essere valore valido
if (typeof name === 'string') { }

// false può essere valore valido
if (typeof flag === 'boolean') { }
`);

console.log("✓ Usa ?? invece di || per 0, false, '' validi:");
console.log(`
// ✗ 0 diventa default
let volume = level || 50;

// ✓ Solo null/undefined usano default
let volume = level ?? 50;
`);

console.log("✓ Check array/oggetti vuoti:");
console.log(`
// ✓ Array vuoto
if (arr.length === 0) { }
if (!arr.length) { }

// ✓ Oggetto vuoto
if (Object.keys(obj).length === 0) { }
`);

console.log("✓ Converti esplicitamente quando serve boolean:");
console.log(`
// ✓ Conversione esplicita
const isValid = Boolean(value);
const hasItems = !!array.length;
`);

console.log("\n⚠️  RICORDA:");
console.log("  - Solo 8 valori sono falsy");
console.log("  - [] e {} sono TRUTHY!");
console.log("  - '0' e 'false' (stringhe) sono TRUTHY!");
console.log("  - ' ' (spazio) è TRUTHY!");
console.log("  - 0 è falsy, ma può essere valore valido");
console.log("  - '' è falsy, ma può essere valore valido");
console.log("  - false è falsy, ma può essere valore valido");
console.log("  - Sii esplicito quando il tipo conta!");

console.log("\n✅ Conosci i falsy per usare correttamente le condizioni!");
