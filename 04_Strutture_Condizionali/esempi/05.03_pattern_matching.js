/**
 * PATTERN MATCHING - PRATICHE E PATTERN
 * 
 * Pattern matching idiomatici in JavaScript usando destructuring,
 * guard clauses, e tecniche funzionali per codice espressivo
 * e manutenibile.
 */

console.log("=== 1. PATTERN MATCHING CON SWITCH ===\n");

// Pattern matching con destructuring in switch
function handleMessage(message) {
  let { type, payload } = message;
  
  switch (type) {
    case "TEXT": {
      let { text, sender } = payload;
      return `${sender}: ${text}`;
    }
    case "IMAGE": {
      let { url, alt } = payload;
      return `[Image: ${alt}] ${url}`;
    }
    case "FILE": {
      let { name, size } = payload;
      return `[File: ${name} (${size} bytes)]`;
    }
    default:
      return "Unknown message type";
  }
}

console.log(handleMessage({
  type: "TEXT",
  payload: { text: "Hello", sender: "Mario" }
}));

console.log(handleMessage({
  type: "IMAGE",
  payload: { url: "img.jpg", alt: "Photo" }
}));

console.log(handleMessage({
  type: "FILE",
  payload: { name: "doc.pdf", size: 1024 }
}));


console.log("\n=== 2. GUARD CLAUSES (EARLY RETURN) ===\n");

// Pattern per validazione con early return
function calculateDiscount(order) {
  // Guard: validazione input
  if (!order) {
    console.log("No order");
    return 0;
  }
  
  let { items = [], customer, total } = order;
  
  // Guard: nessun item
  if (items.length === 0) {
    console.log("No items");
    return 0;
  }
  
  // Guard: no customer
  if (!customer) {
    console.log("No customer");
    return 0;
  }
  
  let { isPremium = false, loyaltyPoints = 0 } = customer;
  
  // Pattern matching per tipo customer
  if (isPremium && loyaltyPoints > 1000) {
    console.log("Premium + High loyalty: 20% off");
    return total * 0.2;
  }
  
  if (isPremium) {
    console.log("Premium: 15% off");
    return total * 0.15;
  }
  
  if (loyaltyPoints > 500) {
    console.log("Loyalty: 10% off");
    return total * 0.1;
  }
  
  console.log("Standard: 5% off");
  return total * 0.05;
}

// Test cases
calculateDiscount(null);
calculateDiscount({ items: [], total: 100 });
calculateDiscount({ items: [1], total: 100, customer: { isPremium: true, loyaltyPoints: 1500 } });


console.log("\n=== 3. TYPE CHECKING PATTERNS ===\n");

// Pattern per gestire tipi diversi
function processValue(value) {
  // Null/undefined check
  if (value == null) {
    console.log("Null or undefined");
    return null;
  }
  
  // Type-based pattern matching
  if (typeof value === "string") {
    console.log(`String: "${value}" (length: ${value.length})`);
    return value.toUpperCase();
  }
  
  if (typeof value === "number") {
    console.log(`Number: ${value}`);
    return value * 2;
  }
  
  if (Array.isArray(value)) {
    let [first, ...rest] = value;
    console.log(`Array: first=${first}, rest=${rest.length}`);
    return value.map(x => x * 2);
  }
  
  if (typeof value === "object") {
    let { id, name, ...props } = value;
    console.log(`Object: id=${id}, name=${name}, props=${Object.keys(props).length}`);
    return { id, name, processed: true };
  }
  
  console.log("Unknown type");
  return value;
}

processValue(null);
processValue("hello");
processValue(42);
processValue([1, 2, 3]);
processValue({ id: 1, name: "Test", x: 1, y: 2 });


console.log("\n=== 4. OPTION/MAYBE PATTERN ===\n");

// Pattern Option/Maybe per valori che possono non esistere
function findUser(id) {
  let users = {
    1: { id: 1, name: "Mario", email: "m@test.com" },
    2: { id: 2, name: "Luigi", email: "l@test.com" }
  };
  
  return {
    exists: id in users,
    value: users[id] || null
  };
}

function processUser(result) {
  let { exists, value } = result;
  
  if (!exists) {
    console.log("User not found");
    return null;
  }
  
  let { id, name, email } = value;
  console.log(`User ${id}: ${name} (${email})`);
  return { id, name, email };
}

console.log("Find user 1:");
processUser(findUser(1));

console.log("\nFind user 99:");
processUser(findUser(99));

// Result pattern (success/error)
function divide(a, b) {
  if (b === 0) {
    return {
      success: false,
      error: "Division by zero"
    };
  }
  return {
    success: true,
    value: a / b
  };
}

function handleResult(result) {
  let { success, value, error } = result;
  
  if (success) {
    console.log(`Result: ${value}`);
  } else {
    console.log(`Error: ${error}`);
  }
}

console.log("\nDivide 10/2:");
handleResult(divide(10, 2));

console.log("\nDivide 10/0:");
handleResult(divide(10, 0));


console.log("\n=== 5. LISTA PATTERN (HEAD-TAIL) ===\n");

// Recursive list processing
function sum(list) {
  if (list.length === 0) return 0;
  
  let [head, ...tail] = list;
  return head + sum(tail);
}

console.log("Sum [1,2,3,4,5]:", sum([1, 2, 3, 4, 5]));

// Match first N elements
function processFirstN(list, n) {
  if (n === 0 || list.length === 0) {
    console.log("Done processing");
    return;
  }
  
  let [first, ...rest] = list;
  console.log(`Process: ${first}`);
  processFirstN(rest, n - 1);
}

console.log("\nProcess first 3:");
processFirstN([10, 20, 30, 40, 50], 3);

// Partition list
function partition(list, predicate) {
  return list.reduce(
    (acc, item) => {
      if (predicate(item)) {
        return { ...acc, pass: [...acc.pass, item] };
      } else {
        return { ...acc, fail: [...acc.fail, item] };
      }
    },
    { pass: [], fail: [] }
  );
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let { pass: evens, fail: odds } = partition(numbers, n => n % 2 === 0);
console.log("\nEvens:", evens);
console.log("Odds:", odds);


console.log("\n=== 6. BUILDER PATTERN ===\n");

// Pattern builder con destructuring
class QueryBuilder {
  constructor({ table, select = ["*"], where = {}, limit = null } = {}) {
    this.table = table;
    this.select = select;
    this.where = where;
    this.limit = limit;
  }
  
  build() {
    let query = `SELECT ${this.select.join(", ")} FROM ${this.table}`;
    
    let conditions = Object.entries(this.where)
      .map(([key, value]) => `${key} = '${value}'`)
      .join(" AND ");
    
    if (conditions) {
      query += ` WHERE ${conditions}`;
    }
    
    if (this.limit) {
      query += ` LIMIT ${this.limit}`;
    }
    
    return query;
  }
}

let query1 = new QueryBuilder({
  table: "users",
  select: ["id", "name"],
  where: { status: "active" },
  limit: 10
});

console.log(query1.build());

// Fluent API con destructuring
function createConfig(initial = {}) {
  let config = { ...initial };
  
  return {
    set({ key, value }) {
      config[key] = value;
      return this;
    },
    get(key) {
      return config[key];
    },
    getAll() {
      return { ...config };
    }
  };
}

let cfg = createConfig({ theme: "dark" });
cfg.set({ key: "lang", value: "it" })
   .set({ key: "size", value: 14 });

console.log("\nConfig:", cfg.getAll());


console.log("\n=== 7. STATE MACHINE PATTERN ===\n");

// Simple state machine con pattern matching
function createStateMachine(initialState) {
  let state = initialState;
  
  return {
    getState() {
      return state;
    },
    
    dispatch(action) {
      let { type, payload = {} } = action;
      
      switch (type) {
        case "START":
          if (state === "IDLE") {
            state = "RUNNING";
            console.log("State: IDLE → RUNNING");
          }
          break;
          
        case "PAUSE":
          if (state === "RUNNING") {
            state = "PAUSED";
            console.log("State: RUNNING → PAUSED");
          }
          break;
          
        case "RESUME":
          if (state === "PAUSED") {
            state = "RUNNING";
            console.log("State: PAUSED → RUNNING");
          }
          break;
          
        case "STOP":
          state = "IDLE";
          console.log(`State: * → IDLE`);
          break;
          
        default:
          console.log(`Unknown action: ${type}`);
      }
      
      return state;
    }
  };
}

let machine = createStateMachine("IDLE");
console.log("Initial:", machine.getState());
machine.dispatch({ type: "START" });
machine.dispatch({ type: "PAUSE" });
machine.dispatch({ type: "RESUME" });
machine.dispatch({ type: "STOP" });


console.log("\n=== 8. VISITOR PATTERN ===\n");

// Visitor pattern con destructuring
function visit(node, visitor) {
  let { type, ...props } = node;
  
  if (visitor[type]) {
    return visitor[type](props);
  }
  
  return `Unknown type: ${type}`;
}

// AST-like nodes
let nodes = [
  { type: "number", value: 42 },
  { type: "string", value: "hello" },
  { type: "binary", op: "+", left: 10, right: 5 },
  { type: "variable", name: "x" }
];

let visitor = {
  number: ({ value }) => `Number(${value})`,
  string: ({ value }) => `String("${value}")`,
  binary: ({ op, left, right }) => `Binary(${left} ${op} ${right})`,
  variable: ({ name }) => `Var(${name})`
};

console.log("Visiting nodes:");
nodes.forEach(node => {
  console.log(`  ${visit(node, visitor)}`);
});


console.log("\n=== 9. COMMAND PATTERN ===\n");

// Command pattern con destructuring
function executeCommand(command, context = {}) {
  let { type, params = {} } = command;
  
  let commands = {
    CREATE: ({ name, data }) => {
      console.log(`Creating ${name} with data:`, data);
      return { ...context, [name]: data };
    },
    
    UPDATE: ({ name, data }) => {
      console.log(`Updating ${name} with data:`, data);
      return { ...context, [name]: { ...context[name], ...data } };
    },
    
    DELETE: ({ name }) => {
      console.log(`Deleting ${name}`);
      let { [name]: deleted, ...rest } = context;
      return rest;
    },
    
    READ: ({ name }) => {
      console.log(`Reading ${name}:`, context[name]);
      return context;
    }
  };
  
  if (commands[type]) {
    return commands[type](params);
  }
  
  console.log("Unknown command:", type);
  return context;
}

let ctx = {};
ctx = executeCommand({ type: "CREATE", params: { name: "user1", data: { age: 25 } } }, ctx);
ctx = executeCommand({ type: "UPDATE", params: { name: "user1", data: { age: 26 } } }, ctx);
ctx = executeCommand({ type: "READ", params: { name: "user1" } }, ctx);
ctx = executeCommand({ type: "DELETE", params: { name: "user1" } }, ctx);
console.log("\nFinal context:", ctx);


console.log("\n=== 10. CASI D'USO PRATICI ===\n");

// 1. Router pattern
function matchRoute(path) {
  let routes = {
    "/": () => "Home",
    "/about": () => "About",
    "/user/:id": (params) => `User ${params.id}`,
    "/post/:id/comment/:commentId": (params) => `Post ${params.id}, Comment ${params.commentId}`
  };
  
  // Simple matching (in produzione usa regex)
  for (let [route, handler] of Object.entries(routes)) {
    if (route === path) {
      return handler();
    }
    
    // Match parametri
    let paramMatch = route.match(/:(\w+)/g);
    if (paramMatch) {
      let pattern = route.replace(/:(\w+)/g, "([^/]+)");
      let regex = new RegExp(`^${pattern}$`);
      let match = path.match(regex);
      
      if (match) {
        let params = {};
        paramMatch.forEach((param, i) => {
          let key = param.slice(1);  // Remove :
          params[key] = match[i + 1];
        });
        return handler(params);
      }
    }
  }
  
  return "404 Not Found";
}

console.log("1. Router:");
console.log("  /:", matchRoute("/"));
console.log("  /user/123:", matchRoute("/user/123"));
console.log("  /post/1/comment/5:", matchRoute("/post/1/comment/5"));
console.log("  /invalid:", matchRoute("/invalid"));

// 2. Form validation con pattern
function validateForm(data) {
  let errors = {};
  
  let { email, password, age, terms } = data;
  
  if (!email || !email.includes("@")) {
    errors.email = "Email non valida";
  }
  
  if (!password || password.length < 8) {
    errors.password = "Password troppo corta";
  }
  
  if (age && age < 18) {
    errors.age = "Devi avere almeno 18 anni";
  }
  
  if (!terms) {
    errors.terms = "Devi accettare i termini";
  }
  
  let isValid = Object.keys(errors).length === 0;
  
  return { isValid, errors };
}

console.log("\n2. Validation:");
let { isValid, errors } = validateForm({
  email: "test",
  password: "123",
  age: 15,
  terms: false
});
console.log("  Valid:", isValid);
console.log("  Errors:", errors);

// 3. API response transformer
function transformApiResponse(response) {
  let { status, data = {}, error = null } = response;
  
  if (status >= 200 && status < 300) {
    let { items = [], meta = {} } = data;
    return {
      success: true,
      data: items,
      pagination: meta
    };
  }
  
  let { message = "Unknown error", code = 500 } = error || {};
  return {
    success: false,
    error: { message, code }
  };
}

console.log("\n3. Transform success:");
console.log(transformApiResponse({
  status: 200,
  data: { items: [1, 2, 3], meta: { page: 1, total: 100 } }
}));

console.log("\n3. Transform error:");
console.log(transformApiResponse({
  status: 404,
  error: { message: "Not found", code: 404 }
}));

console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO PATTERN MATCHING");
console.log("=".repeat(50));
console.log(`
PATTERN PRINCIPALI:

1. Switch + Destructuring:
   switch(type) { case "X": let {a} = payload; }

2. Guard Clauses:
   if (!valid) return;  // Early return

3. Type Checking:
   if (typeof x === "string") { ... }

4. Option/Maybe:
   { exists: bool, value: T | null }

5. Result:
   { success: bool, value?: T, error?: E }

6. Head-Tail:
   let [head, ...tail] = list;

7. State Machine:
   dispatch({ type, payload })

8. Visitor:
   visit(node, { type1: fn1, type2: fn2 })

9. Command:
   execute({ type, params })

BEST PRACTICES:
✓ Early return per validazione
✓ Destructuring per chiarezza
✓ Guard clauses vs nested if
✓ Pattern matching vs catene if-else
✓ Immutabilità con spread operator
✓ Type checking esplicito
✓ Naming consistente (type, payload, etc.)

QUANDO USARE:
✓ Gestione eventi complessi
✓ State management
✓ API response handling
✓ Form validation
✓ Routing
✓ AST traversal
✗ Over-engineering per casi semplici
`);
