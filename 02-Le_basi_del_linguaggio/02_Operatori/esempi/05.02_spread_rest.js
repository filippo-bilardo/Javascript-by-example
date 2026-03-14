/**
 * Esempio: Spread e Rest Operators (...)
 * 
 * Operatore ... per espandere (spread) o raccogliere (rest) elementi.
 * Usi con array, oggetti e funzioni.
 * 
 * Per eseguire: node 05.02_spread_rest.js
 */

console.log("=== SPREAD e REST OPERATORS (...) ===\n");

// 1. Spread operator con array
console.log("1. SPREAD OPERATOR con ARRAY:\n");

console.log("Espandere array:");
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log("arr1:", arr1);
console.log("arr2:", arr2);
console.log("[...arr1, ...arr2]:", combined); // [1,2,3,4,5,6]

console.log("\nInserire elementi:");
let numbers = [1, 2, 3];
let extended = [0, ...numbers, 4, 5];
console.log("[0, ...numbers, 4, 5]:", extended); // [0,1,2,3,4,5]

console.log("\nCopia shallow:");
let original = [1, 2, 3];
let copy = [...original];
copy.push(4);
console.log("original:", original); // [1,2,3]
console.log("copy:", copy); // [1,2,3,4]
console.log("✓ Sono array separati");

console.log("\nMax/Min con spread:");
let nums = [5, 2, 8, 1, 9];
console.log("nums:", nums);
console.log("Math.max(...nums):", Math.max(...nums)); // 9
console.log("Math.min(...nums):", Math.min(...nums)); // 1

// 2. Spread operator con oggetti
console.log("\n2. SPREAD OPERATOR con OGGETTI:\n");

console.log("Unire oggetti:");
let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};
let merged = {...obj1, ...obj2};
console.log("obj1:", obj1);
console.log("obj2:", obj2);
console.log("{...obj1, ...obj2}:", merged); // {a:1, b:2, c:3, d:4}

console.log("\nSovrascrivere proprietà:");
let defaults = {color: "blue", size: "M"};
let custom = {size: "L", price: 20};
let config = {...defaults, ...custom};
console.log("config:", config); // size: "L" (sovrascritto)

console.log("\nCopia shallow:");
let user = {name: "Alice", age: 25};
let userCopy = {...user};
userCopy.age = 30;
console.log("user:", user); // age: 25
console.log("userCopy:", userCopy); // age: 30

console.log("\n⚠️  Shallow copy - oggetti annidati:");
let person = {name: "Bob", address: {city: "Roma"}};
let personCopy = {...person};
personCopy.address.city = "Milano";
console.log("person.address.city:", person.address.city); // Milano!
console.log("⚠️  Oggetti annidati sono condivisi!");

// 3. Rest operator in funzioni
console.log("\n3. REST OPERATOR in FUNZIONI:\n");

console.log("Parametri variabili:");
function sum(...numbers) {
  console.log("  numbers:", numbers); // Array
  return numbers.reduce((acc, n) => acc + n, 0);
}

console.log("sum(1, 2, 3):", sum(1, 2, 3)); // 6
console.log("sum(1, 2, 3, 4, 5):", sum(1, 2, 3, 4, 5)); // 15

console.log("\nRest dopo parametri fissi:");
function greet(greeting, ...names) {
  console.log(`  ${greeting}: ${names.join(", ")}`);
}

greet("Hello", "Alice", "Bob", "Charlie");

console.log("\n⚠️  Rest deve essere ultimo:");
// function invalid(...rest, last) {} // SyntaxError!

console.log("\nRest con destructuring:");
function getInfo({name, ...rest}) {
  console.log("  name:", name);
  console.log("  rest:", rest);
}

getInfo({name: "Alice", age: 25, city: "Roma"});

// 4. Rest operator in destructuring
console.log("\n4. REST OPERATOR in DESTRUCTURING:\n");

console.log("Array destructuring:");
let [first, second, ...remaining] = [1, 2, 3, 4, 5];
console.log("first:", first); // 1
console.log("second:", second); // 2
console.log("remaining:", remaining); // [3,4,5]

console.log("\nOggetto destructuring:");
let {name, age, ...otherInfo} = {
  name: "Alice",
  age: 25,
  city: "Roma",
  country: "Italia"
};
console.log("name:", name);
console.log("age:", age);
console.log("otherInfo:", otherInfo); // {city, country}

console.log("\nEscludere proprietà:");
let data = {id: 1, password: "secret", name: "Bob", email: "bob@test.com"};
let {password, ...safeData} = data;
console.log("safeData:", safeData); // senza password

// 5. Spread per convertire iterabili
console.log("\n5. SPREAD per CONVERTIRE ITERABILI:\n");

console.log("String a array:");
let str = "Hello";
let chars = [...str];
console.log("[...str]:", chars); // ['H','e','l','l','o']

console.log("\nSet a array:");
let set = new Set([1, 2, 2, 3, 3, 4]);
let uniqueArray = [...set];
console.log("set:", set);
console.log("[...set]:", uniqueArray); // [1,2,3,4]

console.log("\nMap a array:");
let map = new Map([["a", 1], ["b", 2]]);
let entries = [...map];
console.log("[...map]:", entries); // [['a',1], ['b',2]]

console.log("\nNodeList a array (simulato):");
let nodeList = {0: "div", 1: "span", length: 2, [Symbol.iterator]: Array.prototype[Symbol.iterator]};
let elements = [...nodeList];
console.log("elements:", elements);

// 6. Spread per clonare e modificare
console.log("\n6. SPREAD per CLONARE e MODIFICARE:\n");

console.log("Aggiungere a array:");
let items = ["A", "B", "C"];
let withNew = [...items, "D"];
console.log("withNew:", withNew); // ['A','B','C','D']

console.log("\nInserire in mezzo:");
let list = [1, 2, 5];
let listUpdated = [1, 2, 3, 4, 5];
// Più pratico: [...list.slice(0, 2), 3, 4, ...list.slice(2)]
console.log("listUpdated:", listUpdated);

console.log("\nAggiungere proprietà:");
let product = {name: "Book", price: 10};
let productWithTax = {...product, tax: 2, total: 12};
console.log("productWithTax:", productWithTax);

console.log("\nModificare proprietà:");
let settings = {theme: "dark", lang: "it", notifications: true};
let updatedSettings = {...settings, theme: "light"};
console.log("updatedSettings:", updatedSettings);

// 7. Combinazioni avanzate
console.log("\n7. COMBINAZIONI AVANZATE:\n");

console.log("Merge condizionale:");
let baseConfig = {port: 8080, host: "localhost"};
let isDev = true;
let finalConfig = {
  ...baseConfig,
  ...(isDev ? {debug: true, verbose: true} : {})
};
console.log("finalConfig:", finalConfig);

console.log("\nFlattening array (1 livello):");
let nested = [[1, 2], [3, 4], [5, 6]];
let flat = [].concat(...nested);
console.log("flat:", flat); // [1,2,3,4,5,6]

console.log("\nRimuovere duplicati:");
let withDuplicates = [1, 2, 2, 3, 3, 4];
let unique = [...new Set(withDuplicates)];
console.log("unique:", unique); // [1,2,3,4]

console.log("\nMerge multipli oggetti:");
let obj3 = {a: 1};
let obj4 = {b: 2};
let obj5 = {c: 3};
let allMerged = {...obj3, ...obj4, ...obj5};
console.log("allMerged:", allMerged);

// 8. Spread vs altri metodi
console.log("\n8. SPREAD vs ALTRI METODI:\n");

console.log("Array concatenazione:");
let a1 = [1, 2];
let a2 = [3, 4];

console.log("concat:", a1.concat(a2)); // [1,2,3,4]
console.log("spread:", [...a1, ...a2]); // [1,2,3,4]
console.log("✓ Spread più flessibile");

console.log("\nArray copy:");
let arr = [1, 2, 3];
console.log("slice:", arr.slice()); // [1,2,3]
console.log("spread:", [...arr]); // [1,2,3]
console.log("✓ Entrambi fanno shallow copy");

console.log("\nOggetto merge:");
let o1 = {a: 1};
let o2 = {b: 2};
console.log("Object.assign:", Object.assign({}, o1, o2));
console.log("spread:", {...o1, ...o2});
console.log("✓ Spread più leggibile");

// 9. Casi d'uso pratici
console.log("\n9. CASI D'USO pratici:\n");

console.log("Immutable update (React-style):");
let state = {count: 0, items: [1, 2, 3]};

// Incrementa count
let newState1 = {...state, count: state.count + 1};
console.log("newState1:", newState1);

// Aggiungi item
let newState2 = {...state, items: [...state.items, 4]};
console.log("newState2:", newState2);

console.log("\nDefault options:");
function createUser(options) {
  const defaults = {role: "user", active: true};
  return {...defaults, ...options};
}

console.log("createUser({name: 'Alice'}):", 
  createUser({name: "Alice"}));
console.log("createUser({name: 'Bob', role: 'admin'}):", 
  createUser({name: "Bob", role: "admin"}));

console.log("\nVariadic functions:");
function multiply(factor, ...numbers) {
  return numbers.map(n => n * factor);
}

console.log("multiply(2, 1, 2, 3, 4):", multiply(2, 1, 2, 3, 4));

console.log("\nConversione arguments:");
function oldStyle() {
  let args = [...arguments]; // arguments non è vero array
  console.log("  args:", args);
  return args.reduce((a, b) => a + b, 0);
}

console.log("oldStyle(1, 2, 3):", oldStyle(1, 2, 3));

// 10. Best practices
console.log("\n10. BEST PRACTICES:\n");

console.log("✓ Usa spread per immutabilità:");
console.log(`
// ✓ Immutable
const newArr = [...arr, newItem];
const newObj = {...obj, prop: value};

// ✗ Mutabile
arr.push(newItem);
obj.prop = value;
`);

console.log("✓ Preferisci spread a concat/assign:");
console.log(`
// ✓ Più chiaro
[...arr1, ...arr2, ...arr3]
{...obj1, ...obj2, ...obj3}

// ⚠️  Verbose
arr1.concat(arr2, arr3)
Object.assign({}, obj1, obj2, obj3)
`);

console.log("✓ Usa rest per parametri variabili:");
console.log(`
// ✓ Moderno
function sum(...numbers) { }

// ✗ Vecchio stile
function sum() {
  let numbers = Array.from(arguments);
}
`);

console.log("✓ Ricorda: è shallow copy:");
console.log(`
// ⚠️  Oggetti annidati condivisi
const copy = {...original};

// ✓ Deep copy se necessario
const deepCopy = JSON.parse(JSON.stringify(original));
// O usa libreria come lodash.cloneDeep
`);

console.log("✓ Rest deve essere ultimo:");
console.log(`
// ✓ Corretto
function fn(a, b, ...rest) { }
let [x, y, ...rest] = arr;

// ✗ Errore
function fn(a, ...rest, b) { }  // SyntaxError
`);

console.log("✓ Usa spread per convertire iterabili:");
console.log(`
// ✓ Conciso
[...set]
[...map.keys()]
[...string]
`);

console.log("\n⚠️  RICORDA:");
console.log("  - ... è spread (espande) o rest (raccoglie)");
console.log("  - Spread: [...arr] copia array, {...obj} copia oggetto");
console.log("  - Rest: ...args in parametri, ...rest in destructuring");
console.log("  - Copia è shallow (oggetti annidati condivisi)");
console.log("  - Rest deve essere ultimo parametro");
console.log("  - Spread funziona con iterabili (array, string, Set, Map)");
console.log("  - Perfetto per immutabilità");

console.log("\n✅ Spread/rest rendono il codice più moderno ed elegante!");
