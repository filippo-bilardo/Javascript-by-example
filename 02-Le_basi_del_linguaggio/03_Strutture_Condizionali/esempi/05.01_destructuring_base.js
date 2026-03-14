/**
 * PATTERN MATCHING - DESTRUCTURING BASE
 * 
 * Il destructuring permette di estrarre valori da array e oggetti
 * assegnandoli a variabili in modo conciso ed espressivo.
 * 
 * È una forma di "pattern matching" che JavaScript supporta
 * per rendere il codice più leggibile e dichiarativo.
 * 
 * Introdotto in ES6 (ES2015)
 */

console.log("=== 1. ARRAY DESTRUCTURING BASE ===\n");

// Sintassi base
let numbers = [1, 2, 3];
let [a, b, c] = numbers;
console.log("a:", a);  // 1
console.log("b:", b);  // 2
console.log("c:", c);  // 3

// Senza destructuring
let x = numbers[0];
let y = numbers[1];
let z = numbers[2];
console.log("\nSenza destructuring:", x, y, z);

// Swap variables
let num1 = 10, num2 = 20;
console.log("\nPrima dello swap:", num1, num2);
[num1, num2] = [num2, num1];
console.log("Dopo lo swap:", num1, num2);

// Skipping elementi
let colors = ["red", "green", "blue", "yellow"];
let [first, , third] = colors;  // Salta "green"
console.log("\nFirst:", first);   // "red"
console.log("Third:", third);     // "blue"


console.log("\n=== 2. REST OPERATOR IN ARRAY ===\n");

// Rest operator (...)
let nums = [1, 2, 3, 4, 5];
let [primo, secondo, ...resto] = nums;
console.log("Primo:", primo);      // 1
console.log("Secondo:", secondo);  // 2
console.log("Resto:", resto);      // [3, 4, 5]

// Tutti tranne il primo
let [, ...others] = nums;
console.log("Altri:", others);     // [2, 3, 4, 5]

// Primi e ultimi
let values = [1, 2, 3, 4, 5, 6];
let [head, ...middle] = values;
console.log("\nHead:", head);
console.log("Middle:", middle);


console.log("\n=== 3. DEFAULT VALUES IN ARRAY ===\n");

// Con default
let [p = 10, q = 20] = [5];
console.log("p:", p);  // 5 (usa valore array)
console.log("q:", q);  // 20 (usa default)

let [r = 10, s = 20] = [];
console.log("\nr:", r);  // 10 (default)
console.log("s:", s);    // 20 (default)

// Default con undefined
let [t = 100] = [undefined];
console.log("t:", t);    // 100 (undefined → default)

let [u = 100] = [null];
console.log("u:", u);    // null (null non usa default!)


console.log("\n=== 4. OBJECT DESTRUCTURING BASE ===\n");

// Sintassi base
let person = {
  name: "Mario",
  age: 30,
  city: "Roma"
};

let { name, age, city } = person;
console.log("name:", name);  // "Mario"
console.log("age:", age);    // 30
console.log("city:", city);  // "Roma"

// Ordine non importa
let { city: c1, name: n1, age: age1 } = person;
console.log("\nRiordinato:", n1, age1, c1);

// Rename variables
let { name: fullName, age: years } = person;
console.log("\nRename:", fullName, years);


console.log("\n=== 5. DEFAULT VALUES IN OBJECT ===\n");

// Con default
let user = { username: "mario", role: "user" };
let { username, role, active = true } = user;
console.log("username:", username);  // "mario"
console.log("role:", role);          // "user"
console.log("active:", active);      // true (default)

// Default + rename
let { status: userStatus = "pending" } = user;
console.log("\nstatus:", userStatus);  // "pending" (default)

// Con proprietà esistente
let config2 = { theme: "dark", lang: null };
let { theme: theme1, lang: lang1 = "en" } = config2;
console.log("\ntheme:", theme1);  // "dark"
console.log("lang:", lang1);      // null (non usa default!)


console.log("\n=== 6. NESTED DESTRUCTURING ===\n");

// Array annidati
let matrix = [[1, 2], [3, 4], [5, 6]];
let [[m1, m2], [m3, m4]] = matrix;
console.log("Array annidato:", m1, m2, m3, m4);

// Oggetti annidati
let employee = {
  name: "Luca",
  position: "Developer",
  address: {
    street: "Via Roma",
    city: "Milano",
    zip: "20100"
  }
};

let {
  name: empName,
  address: { city: empCity, zip: empZip }
} = employee;

console.log("\nEmployee:", empName);
console.log("City:", empCity);
console.log("ZIP:", empZip);

// Più livelli
let data = {
  user: {
    profile: {
      personal: {
        firstName: "Anna",
        lastName: "Rossi"
      }
    }
  }
};

let {
  user: {
    profile: {
      personal: { firstName, lastName }
    }
  }
} = data;

console.log("\nNested:", firstName, lastName);


console.log("\n=== 7. REST IN OBJECT ===\n");

// Rest in oggetti
let book = {
  title: "JavaScript Guide",
  author: "John Doe",
  year: 2023,
  pages: 500,
  isbn: "123-456"
};

let { title, author, ...bookDetails } = book;
console.log("Title:", title);
console.log("Author:", author);
console.log("Details:", bookDetails);

// Copia oggetto senza alcune proprietà
let { isbn, ...bookWithoutIsbn } = book;
console.log("\nSenza ISBN:", bookWithoutIsbn);


console.log("\n=== 8. IN FUNCTION PARAMETERS ===\n");

// Parametri array
function sum([a, b]) {
  return a + b;
}
console.log("sum([10, 20]):", sum([10, 20]));

// Parametri oggetto
function greet({ name, age }) {
  return `Hello ${name}, you are ${age} years old`;
}
console.log(greet({ name: "Mario", age: 30 }));

// Con default
function createUser({ name = "Guest", role = "user" } = {}) {
  return { name, role };
}
console.log("\nCon valori:", createUser({ name: "Admin", role: "admin" }));
console.log("Con default:", createUser({ name: "Paolo" }));
console.log("Vuoto:", createUser());

// Con rest
function processData({ id, type, ...metadata }) {
  console.log("\nID:", id);
  console.log("Type:", type);
  console.log("Metadata:", metadata);
}

processData({
  id: 1,
  type: "user",
  created: "2023-01-01",
  updated: "2023-12-01",
  status: "active"
});


console.log("\n=== 9. ARRAY DI OGGETTI ===\n");

// Destructuring in loop
let users = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "user" },
  { id: 3, name: "Charlie", role: "user" }
];

console.log("Users:");
for (let { name, role } of users) {
  console.log(`  ${name}: ${role}`);
}

// Map con destructuring
let userNames = users.map(({ name }) => name);
console.log("\nNames:", userNames);

// Filter con destructuring
let admins = users.filter(({ role }) => role === "admin");
console.log("Admins:", admins);


console.log("\n=== 10. CASI D'USO PRATICI ===\n");

// 1. Ritorno multiplo da funzione
function getCoordinates() {
  return [45.4642, 9.1900];
}

let [lat, lng] = getCoordinates();
console.log("1. Coordinate:", lat, lng);

// 2. Swap senza variabile temporanea
let min = 5, max = 10;
if (min > max) {
  [min, max] = [max, min];
}
console.log("\n2. Min/Max:", min, max);

// 3. Props in React-like components
function Button({ label, onClick, disabled = false }) {
  return `<button ${disabled ? "disabled" : ""} onclick="${onClick}">${label}</button>`;
}
console.log("\n3. Button:", Button({
  label: "Click me",
  onClick: "handleClick()"
}));

// 4. Config options
function initApp({ apiUrl, timeout = 5000, retries = 3 } = {}) {
  console.log("\n4. Init app:");
  console.log("  API:", apiUrl);
  console.log("  Timeout:", timeout);
  console.log("  Retries:", retries);
}

initApp({ apiUrl: "https://api.example.com", timeout: 10000 });

// 5. API Response
let response = {
  data: { id: 1, content: "Hello" },
  meta: { timestamp: "2023-01-01", version: "1.0" },
  error: null
};

let {
  data: { id: resId, content },
  meta: { timestamp },
  error = "No error"
} = response;

console.log("\n5. API Response:");
console.log("  ID:", resId);
console.log("  Content:", content);
console.log("  Time:", timestamp);
console.log("  Error:", error);

// 6. Array methods con destructuring
let points = [[10, 20], [30, 40], [50, 60]];
points.forEach(([x, y]) => {
  console.log(`\n6. Point: x=${x}, y=${y}`);
});

// 7. Partial object extraction
let settings = {
  theme: "dark",
  lang: "it",
  notifications: true,
  autoSave: true,
  fontSize: 14,
  lineNumbers: true
};

let { theme: settingsTheme, lang: settingsLang, ...otherSettings } = settings;
console.log("\n7. Theme:", settingsTheme);
console.log("   Lang:", settingsLang);
console.log("   Others:", Object.keys(otherSettings));

console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO DESTRUCTURING BASE");
console.log("=".repeat(50));
console.log(`
ARRAY DESTRUCTURING:
let [a, b, c] = [1, 2, 3];      // Base
let [first, , third] = arr;     // Skip
let [head, ...tail] = arr;      // Rest
let [x = 10] = [];              // Default

OBJECT DESTRUCTURING:
let { name, age } = obj;        // Base
let { name: n } = obj;          // Rename
let { x = 10 } = {};            // Default
let { a, ...rest } = obj;       // Rest

NESTED:
let { user: { name } } = data;  // Nested object
let [[a, b], [c, d]] = matrix;  // Nested array

IN FUNCTIONS:
function f([a, b]) { }          // Array param
function f({ x, y }) { }        // Object param
function f({ x = 0 } = {}) { }  // Con default

BEST PRACTICES:
✓ Più leggibile di accesso indicizzato
✓ Auto-documentazione nei parametri
✓ Evita variabili temporanee
✓ Ottimo per API responses
✓ Usa default per parametri opzionali
`);
