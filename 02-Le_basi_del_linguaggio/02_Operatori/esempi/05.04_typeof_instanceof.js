/**
 * Esempio: typeof, instanceof e altri operatori di tipo
 * 
 * Operatori per verificare e controllare i tipi in JavaScript.
 * typeof, instanceof, in, delete, void.
 * 
 * Per eseguire: node 05.04_typeof_instanceof.js
 */

console.log("=== TYPEOF, INSTANCEOF E ALTRI OPERATORI ===\n");

// 1. Operatore typeof
console.log("1. OPERATORE TYPEOF:\n");

console.log("Sintassi: typeof value\n");

console.log("Tipi primitivi:");
console.log("typeof 42:", typeof 42); // "number"
console.log("typeof 3.14:", typeof 3.14); // "number"
console.log("typeof 'hello':", typeof "hello"); // "string"
console.log("typeof true:", typeof true); // "boolean"
console.log("typeof undefined:", typeof undefined); // "undefined"
console.log("typeof 123n:", typeof 123n); // "bigint"
console.log("typeof Symbol():", typeof Symbol()); // "symbol"

console.log("\nOggetti e funzioni:");
console.log("typeof {}:", typeof {}); // "object"
console.log("typeof []:", typeof []); // "object" (⚠️)
console.log("typeof null:", typeof null); // "object" (⚠️ bug storico!)
console.log("typeof function(){}:", typeof function(){}); // "function"

console.log("\n⚠️  Casi speciali:");
console.log("typeof NaN:", typeof NaN); // "number" (Not a Number è number!)
console.log("typeof Infinity:", typeof Infinity); // "number"
console.log("typeof new Date():", typeof new Date()); // "object"
console.log("typeof /regex/:", typeof /regex/); // "object"

// 2. typeof per validazione
console.log("\n2. TYPEOF per VALIDAZIONE:\n");

function processValue(value) {
  if (typeof value === "string") {
    console.log("  È una stringa:", value.toUpperCase());
  } else if (typeof value === "number") {
    console.log("  È un numero:", value * 2);
  } else if (typeof value === "boolean") {
    console.log("  È un boolean:", !value);
  } else {
    console.log("  Tipo:", typeof value);
  }
}

processValue("hello");
processValue(42);
processValue(true);
processValue(null);

console.log("\nCheck esistenza variabile:");
// if (unknownVar) { } // ReferenceError!
if (typeof unknownVar !== "undefined") {
  console.log("unknownVar esiste");
} else {
  console.log("unknownVar non definita"); // Eseguito
}

// 3. Operatore instanceof
console.log("\n3. OPERATORE INSTANCEOF:\n");

console.log("Sintassi: object instanceof Constructor\n");

console.log("Con classi built-in:");
let arr = [1, 2, 3];
let obj = {};
let date = new Date();

console.log("[] instanceof Array:", arr instanceof Array); // true
console.log("[] instanceof Object:", arr instanceof Object); // true (!)
console.log("{} instanceof Object:", obj instanceof Object); // true
console.log("{} instanceof Array:", obj instanceof Array); // false
console.log("new Date() instanceof Date:", date instanceof Date); // true

console.log("\nCon classi custom:");
class Person {
  constructor(name) {
    this.name = name;
  }
}

class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }
}

let person = new Person("Alice");
let student = new Student("Bob", 10);

console.log("person instanceof Person:", person instanceof Person); // true
console.log("person instanceof Student:", person instanceof Student); // false
console.log("student instanceof Student:", student instanceof Student); // true
console.log("student instanceof Person:", student instanceof Person); // true (ereditarietà!)
console.log("student instanceof Object:", student instanceof Object); // true

console.log("\n⚠️  Non funziona con primitivi:");
console.log("'hello' instanceof String:", "hello" instanceof String); // false
console.log("42 instanceof Number:", 42 instanceof Number); // false
console.log("true instanceof Boolean:", true instanceof Boolean); // false

console.log("\nMa con wrapper objects:");
console.log("new String('hello') instanceof String:", 
  new String("hello") instanceof String); // true

// 4. typeof vs instanceof
console.log("\n4. TYPEOF vs INSTANCEOF:\n");

let value1 = [1, 2, 3];
console.log("typeof []:", typeof value1); // "object"
console.log("[] instanceof Array:", value1 instanceof Array); // true
console.log("Array.isArray([]):", Array.isArray(value1)); // true ✓

console.log("\nPer array usa Array.isArray():");
function isArray(val) {
  return Array.isArray(val);
}
console.log("isArray([1,2,3]):", isArray([1, 2, 3])); // true
console.log("isArray({}):", isArray({})); // false

console.log("\nPer null:");
let value2 = null;
console.log("typeof null:", typeof value2); // "object" (bug!)
console.log("null === null:", value2 === null); // true ✓
console.log("null instanceof Object:", value2 instanceof Object); // false

// 5. Operatore in
console.log("\n5. OPERATORE IN:\n");

console.log("Sintassi: 'prop' in object\n");

let car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2024
};

console.log("Check proprietà:");
console.log("'brand' in car:", "brand" in car); // true
console.log("'color' in car:", "color" in car); // false

console.log("\nProprietà ereditata:");
console.log("'toString' in car:", "toString" in car); // true (da Object.prototype)

console.log("\nProprietà undefined vs mancante:");
let obj2 = {prop: undefined};
console.log("'prop' in obj:", "prop" in obj2); // true (esiste ma è undefined)
console.log("obj.prop:", obj2.prop); // undefined
console.log("obj.missing:", obj2.missing); // undefined

console.log("\n✓ 'in' distingue tra proprietà undefined e mancante");

console.log("\nCon array:");
let numbers = [10, 20, 30];
console.log("0 in numbers:", 0 in numbers); // true (indice)
console.log("1 in numbers:", 1 in numbers); // true
console.log("5 in numbers:", 5 in numbers); // false
console.log("'length' in numbers:", "length" in numbers); // true

// 6. Operatore delete
console.log("\n6. OPERATORE DELETE:\n");

console.log("Sintassi: delete object.property\n");

let user = {
  name: "Alice",
  age: 25,
  city: "Roma"
};

console.log("Prima:", user);

delete user.age;
console.log("Dopo delete user.age:", user);
console.log("user.age:", user.age); // undefined

console.log("\nReturn value:");
let result = delete user.city;
console.log("delete user.city restituisce:", result); // true
console.log("user:", user);

console.log("\nProprietà non esistente:");
result = delete user.missing;
console.log("delete user.missing:", result); // true (nessun errore)

console.log("\nCon array:");
let arr2 = [1, 2, 3, 4, 5];
console.log("Prima:", arr2);
delete arr2[2];
console.log("Dopo delete arr[2]:", arr2); // [1, 2, empty, 4, 5]
console.log("arr[2]:", arr2[2]); // undefined
console.log("arr.length:", arr2.length); // 5 (⚠️ length non cambia!)

console.log("\n✓ Per array usa splice() invece di delete");

// 7. Operatore void
console.log("\n7. OPERATORE VOID:\n");

console.log("Sintassi: void expression\n");

console.log("void valuta espressione e restituisce undefined:");
console.log("void 0:", void 0); // undefined
console.log("void 1:", void 1); // undefined
console.log("void 'hello':", void "hello"); // undefined

console.log("\nCon side effects:");
let counter = 0;
console.log("void counter++:", void counter++); // undefined
console.log("counter:", counter); // 1 (incrementato!)

console.log("\nUso classico: void(0) per undefined sicuro:");
let undef = void 0;
console.log("undef:", undef); // undefined

console.log("\nIn link HTML (simula):");
console.log(`
<a href="javascript:void(0)" onclick="doSomething()">Click</a>
// void(0) previene navigazione
`);

// 8. Check di tipo robusti
console.log("\n8. CHECK DI TIPO robusti:\n");

function getType(value) {
  // Più preciso di typeof
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  if (value instanceof Date) return "date";
  if (value instanceof RegExp) return "regexp";
  return typeof value;
}

console.log("getType(null):", getType(null));
console.log("getType([]):", getType([]));
console.log("getType(new Date()):", getType(new Date()));
console.log("getType(/test/):", getType(/test/));
console.log("getType('hello'):", getType("hello"));

console.log("\nObject.prototype.toString (metodo definitivo):");
function preciseType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

console.log("preciseType(null):", preciseType(null)); // "Null"
console.log("preciseType([]):", preciseType([])); // "Array"
console.log("preciseType({}):", preciseType({})); // "Object"
console.log("preciseType(new Date()):", preciseType(new Date())); // "Date"
console.log("preciseType(/test/):", preciseType(/test/)); // "RegExp"

// 9. Casi d'uso pratici
console.log("\n9. CASI D'USO pratici:\n");

console.log("Type guard in funzioni:");
function processInput(input) {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input * 2;
  } else if (Array.isArray(input)) {
    return input.length;
  } else {
    throw new Error("Tipo non supportato");
  }
}

console.log("processInput('hello'):", processInput("hello"));
console.log("processInput(21):", processInput(21));
console.log("processInput([1,2,3]):", processInput([1, 2, 3]));

console.log("\nValidazione parametri:");
function createUser(name, age) {
  if (typeof name !== "string" || name.length === 0) {
    throw new Error("Nome deve essere stringa non vuota");
  }
  if (typeof age !== "number" || age < 0) {
    throw new Error("Età deve essere numero positivo");
  }
  return {name, age};
}

console.log("createUser('Alice', 25):", createUser("Alice", 25));

console.log("\nPolymorphic function:");
function add(a, b) {
  if (typeof a === "string" || typeof b === "string") {
    return String(a) + String(b); // Concatenazione
  }
  return a + b; // Somma
}

console.log("add(5, 3):", add(5, 3)); // 8
console.log("add('Hello', 'World'):", add("Hello", "World")); // "HelloWorld"
console.log("add('Value: ', 42):", add("Value: ", 42)); // "Value: 42"

console.log("\nFeature detection:");
function hasLocalStorage() {
  return typeof localStorage !== "undefined" && localStorage !== null;
}

console.log("hasLocalStorage():", hasLocalStorage()); // false (Node.js)

// 10. Best practices
console.log("\n10. BEST PRACTICES:\n");

console.log("✓ typeof per tipi primitivi:");
console.log(`
// ✓ Corretto
if (typeof value === "string") { }
if (typeof value === "number") { }
if (typeof value === "boolean") { }
if (typeof value === "function") { }
`);

console.log("✓ Array.isArray() per array:");
console.log(`
// ✗ Sbagliato
if (typeof arr === "object") { }  // Anche {} è object!

// ✓ Corretto
if (Array.isArray(arr)) { }
`);

console.log("✓ === null per null:");
console.log(`
// ✗ Sbagliato
if (typeof value === "object") { }  // null è "object"!

// ✓ Corretto
if (value === null) { }
if (value == null) { }  // Cattura null e undefined
`);

console.log("✓ instanceof per oggetti custom:");
console.log(`
// ✓ Per classi custom
if (obj instanceof MyClass) { }

// ⚠️  Non per primitivi
if (str instanceof String) { }  // false per "hello"
`);

console.log("✓ 'in' per check esistenza proprietà:");
console.log(`
// ✓ Distingue undefined da mancante
if ('prop' in obj) { }

// ⚠️  Non distingue
if (obj.prop !== undefined) { }
`);

console.log("✓ hasOwnProperty() per proprietà non ereditata:");
console.log(`
// ✓ Solo proprietà diretta
if (obj.hasOwnProperty('prop')) { }

// 'in' include anche ereditate
if ('toString' in obj) { }  // true
if (obj.hasOwnProperty('toString')) { }  // false
`);

console.log("\n⚠️  RICORDA:");
console.log("  - typeof restituisce stringa con nome tipo");
console.log("  - typeof null è 'object' (bug storico!)");
console.log("  - typeof [] è 'object' (usa Array.isArray)");
console.log("  - instanceof verifica catena prototipi");
console.log("  - instanceof non funziona con primitivi");
console.log("  - 'in' check esistenza proprietà (anche ereditate)");
console.log("  - delete rimuove proprietà (restituisce true)");
console.log("  - void valuta espressione e restituisce undefined");

console.log("\n✅ Usa gli operatori giusti per type checking robusto!");
