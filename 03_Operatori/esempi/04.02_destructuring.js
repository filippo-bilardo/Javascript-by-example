/**
 * Esempio: Destructuring Assignment
 * 
 * Assegnazione destrutturata per array e oggetti.
 * Estrazione di valori multipli in modo conciso.
 * 
 * Per eseguire: node 04.02_destructuring.js
 */

console.log("=== DESTRUCTURING ASSIGNMENT ===\n");

// 1. Destructuring di array - base
console.log("1. DESTRUCTURING di ARRAY - base:\n");

console.log("Sintassi base:");
let [a, b, c] = [1, 2, 3];
console.log("let [a, b, c] = [1, 2, 3]");
console.log("a =", a, ", b =", b, ", c =", c); // 1, 2, 3

console.log("\nEquivalente a:");
console.log("let a = arr[0], b = arr[1], c = arr[2]");

console.log("\nSaltare elementi:");
let [first, , third] = [1, 2, 3];
console.log("let [first, , third] = [1, 2, 3]");
console.log("first =", first, ", third =", third); // 1, 3

console.log("\nPrimi elementi:");
let [x, y] = [1, 2, 3, 4, 5];
console.log("let [x, y] = [1, 2, 3, 4, 5]");
console.log("x =", x, ", y =", y); // 1, 2 (resto ignorato)

// 2. Destructuring di array - rest operator
console.log("\n2. DESTRUCTURING di ARRAY - rest operator:\n");

console.log("Rest operator (...):");
let [head, ...tail] = [1, 2, 3, 4, 5];
console.log("let [head, ...tail] = [1, 2, 3, 4, 5]");
console.log("head =", head); // 1
console.log("tail =", tail); // [2, 3, 4, 5]

console.log("\nRest in mezzo non supportato:");
// let [first, ...middle, last] = [1,2,3,4,5]; // SyntaxError!
console.log("⚠️  ...rest deve essere ultimo elemento");

console.log("\nTutti gli elementi in rest:");
let [...copy] = [1, 2, 3];
console.log("let [...copy] = [1, 2, 3]");
console.log("copy =", copy); // [1, 2, 3] (shallow copy)

// 3. Destructuring di array - valori di default
console.log("\n3. DESTRUCTURING di ARRAY - valori di default:\n");

console.log("Default se elemento mancante:");
let [d = 10, e = 20] = [5];
console.log("let [d = 10, e = 20] = [5]");
console.log("d =", d, ", e =", e); // 5, 20

console.log("\nDefault con undefined:");
let [f = 1, g = 2] = [undefined, null];
console.log("let [f = 1, g = 2] = [undefined, null]");
console.log("f =", f, ", g =", g); // 1, null (solo undefined usa default!)

console.log("\nDefault da espressioni:");
function getDefault() {
  console.log("  → getDefault() chiamato");
  return 100;
}
let [h = getDefault()] = [50];
console.log("h =", h); // 50 (getDefault non chiamato)

let [i = getDefault()] = [];
console.log("i =", i); // 100 (getDefault chiamato)

// 4. Destructuring di oggetti - base
console.log("\n4. DESTRUCTURING di OGGETTI - base:\n");

console.log("Sintassi base:");
let {name, age} = {name: "Alice", age: 25, city: "Roma"};
console.log("let {name, age} = {name: 'Alice', age: 25, city: 'Roma'}");
console.log("name =", name, ", age =", age); // Alice, 25

console.log("\n✓ Ordine non conta (usa nome proprietà):");
let {city, country} = {country: "Italia", city: "Milano"};
console.log("city =", city, ", country =", country); // Milano, Italia

console.log("\nProprietà mancante:");
let {x1, y1, z1} = {x1: 10, y1: 20};
console.log("let {x1, y1, z1} = {x1: 10, y1: 20}");
console.log("z1 =", z1); // undefined

// 5. Destructuring di oggetti - alias
console.log("\n5. DESTRUCTURING di OGGETTI - alias:\n");

console.log("Rinominare variabili:");
let {name: userName, age: userAge} = {name: "Bob", age: 30};
console.log("let {name: userName, age: userAge} = {name: 'Bob', age: 30}");
console.log("userName =", userName, ", userAge =", userAge); // Bob, 30

console.log("\nEvitare conflitti:");
let name2 = "Existing";
let {name: newName} = {name: "Different"};
console.log("name2 =", name2, ", newName =", newName);

console.log("\nAlias con default:");
let {prop: value = 10} = {};
console.log("let {prop: value = 10} = {}");
console.log("value =", value); // 10

// 6. Destructuring di oggetti - rest operator
console.log("\n6. DESTRUCTURING di OGGETTI - rest operator:\n");

console.log("Rest per rimanenti proprietà:");
let {a1, b1, ...rest} = {a1: 1, b1: 2, c1: 3, d1: 4};
console.log("let {a1, b1, ...rest} = {a1: 1, b1: 2, c1: 3, d1: 4}");
console.log("a1 =", a1, ", b1 =", b1); // 1, 2
console.log("rest =", rest); // {c1: 3, d1: 4}

console.log("\nSeparare proprietà specifiche:");
let user = {id: 1, name: "Alice", email: "alice@test.com", role: "admin"};
let {id, ...userDetails} = user;
console.log("id =", id); // 1
console.log("userDetails =", userDetails); // {name, email, role}

// 7. Destructuring annidato
console.log("\n7. DESTRUCTURING ANNIDATO:\n");

console.log("Oggetti annidati:");
let person = {
  name: "Alice",
  address: {
    city: "Roma",
    zip: "00100"
  }
};

let {name: personName, address: {city: personCity}} = person;
console.log("personName =", personName, ", personCity =", personCity);

console.log("\nArray annidati:");
let matrix = [[1, 2], [3, 4], [5, 6]];
let [[a2, b2], [c2, d2]] = matrix;
console.log("[[a2, b2], [c2, d2]] = [[1,2], [3,4], [5,6]]");
console.log("a2 =", a2, ", b2 =", b2, ", c2 =", c2, ", d2 =", d2);

console.log("\nMisto array e oggetti:");
let data = [{id: 1, value: "A"}, {id: 2, value: "B"}];
let [{id: id1, value: val1}] = data;
console.log("id1 =", id1, ", val1 =", val1); // 1, A

// 8. Destructuring in funzioni
console.log("\n8. DESTRUCTURING in FUNZIONI:\n");

console.log("Parametri array:");
function sum([a, b]) {
  return a + b;
}
console.log("sum([5, 3]):", sum([5, 3])); // 8

console.log("\nParametri oggetto:");
function greet({name, age = 18}) {
  return `${name} ha ${age} anni`;
}
console.log("greet({name: 'Alice', age: 25}):", 
  greet({name: "Alice", age: 25}));
console.log("greet({name: 'Bob'}):", 
  greet({name: "Bob"})); // usa default age

console.log("\nRest in parametri:");
function logAll(first, ...rest) {
  console.log("  first:", first);
  console.log("  rest:", rest);
}
logAll(1, 2, 3, 4, 5);

// 9. Swap di variabili
console.log("\n9. SWAP di variabili:\n");

console.log("Swap senza variabile temporanea:");
let var1 = 10;
let var2 = 20;
console.log("Prima: var1 =", var1, ", var2 =", var2);

[var1, var2] = [var2, var1];
console.log("Dopo [var1, var2] = [var2, var1]:");
console.log("var1 =", var1, ", var2 =", var2); // 20, 10

console.log("\nSwap multiplo:");
let [n1, n2, n3] = [1, 2, 3];
console.log("Prima: n1 =", n1, ", n2 =", n2, ", n3 =", n3);
[n1, n2, n3] = [n3, n1, n2];
console.log("Dopo [n1, n2, n3] = [n3, n1, n2]:");
console.log("n1 =", n1, ", n2 =", n2, ", n3 =", n3); // 3, 1, 2

// 10. Casi d'uso pratici
console.log("\n10. CASI D'USO pratici:\n");

console.log("Return multipli da funzione:");
function getCoordinates() {
  return [10, 20];
}
let [x2, y2] = getCoordinates();
console.log("x =", x2, ", y =", y2); // 10, 20

console.log("\nEstrazione da regex:");
let match = "2024-11-08".match(/(\d{4})-(\d{2})-(\d{2})/);
if (match) {
  let [, year, month, day] = match; // salta match[0]
  console.log(`Anno: ${year}, Mese: ${month}, Giorno: ${day}`);
}

console.log("\nImport selettivo (simulato):");
let module = {
  func1: () => "A",
  func2: () => "B",
  func3: () => "C"
};
let {func1, func3} = module;
console.log("func1():", func1(), ", func3():", func3());

console.log("\nIterazione array di oggetti:");
let users = [
  {name: "Alice", age: 25},
  {name: "Bob", age: 30}
];
users.forEach(({name, age}) => {
  console.log(`  ${name}: ${age} anni`);
});

console.log("\nConfigurazione con default:");
function createServer({port = 8080, host = "localhost"} = {}) {
  return `Server su ${host}:${port}`;
}
console.log(createServer({port: 3000})); // custom port
console.log(createServer({})); // tutti default
console.log(createServer()); // oggetto vuoto default

console.log("\nCopia proprietà specifiche:");
let original = {a: 1, b: 2, c: 3, d: 4};
let {a: a3, c: c3} = original;
let subset = {a: a3, c: c3};
console.log("subset =", subset); // {a: 1, c: 3}

// Best practices
console.log("\n11. BEST PRACTICES:\n");

console.log("✓ Usa destructuring per codice più leggibile:");
console.log(`
// ✗ Verbose
const name = user.name;
const age = user.age;
const email = user.email;

// ✓ Conciso
const {name, age, email} = user;
`);

console.log("✓ Default per parametri opzionali:");
console.log(`
// ✓ Sicuro
function config({timeout = 5000, retries = 3} = {}) {
  // ...
}
`);

console.log("✓ Rest per rimanenti proprietà:");
console.log(`
// ✓ Separa proprietà note da altre
const {id, ...rest} = data;
saveId(id);
processRest(rest);
`);

console.log("✓ Alias per evitare conflitti:");
console.log(`
// ✓ Nomi chiari
const {name: userName, name: productName} = obj;
`);

console.log("✓ Destructuring in forEach/map:");
console.log(`
// ✓ Leggibile
users.forEach(({name, age}) => {
  console.log(name, age);
});
`);

console.log("\n⚠️  RICORDA:");
console.log("  - Destructuring array usa posizione");
console.log("  - Destructuring oggetti usa nome proprietà");
console.log("  - Default solo con undefined (non null)");
console.log("  - ...rest deve essere ultimo");
console.log("  - Ordine non conta per oggetti");
console.log("  - Perfetto per swap senza temp var");
console.log("  - Usa in parametri funzione per chiarezza");

console.log("\n✅ Destructuring rende il codice più espressivo!");
