/**
 * PATTERN MATCHING - ADVANCED DESTRUCTURING
 * 
 * Tecniche avanzate di destructuring per pattern matching complessi,
 * validazione, e manipolazione di strutture dati annidate.
 */

console.log("=== 1. COMPUTED PROPERTY NAMES ===\n");

// Destructuring con proprietà calcolate
let key = "username";
let obj = { username: "mario", email: "m@test.com" };

let { [key]: value } = obj;
console.log(`${key}:`, value);  // "mario"

// Con espressioni
let prefix = "user";
let data = { userName: "Alice", userAge: 25 };

let { [`${prefix}Name`]: name, [`${prefix}Age`]: age } = data;
console.log("Name:", name);  // "Alice"
console.log("Age:", age);    // 25

// Dinamico
function extract(obj, prop) {
  let { [prop]: extracted } = obj;
  return extracted;
}

console.log("\nExtract 'email':", extract(obj, "email"));


console.log("\n=== 2. DESTRUCTURING CON VALIDAZIONE ===\n");

// Validazione con default e type check
function validateUser(user = {}) {
  let {
    id = (() => { throw new Error("ID required"); })(),
    name = "Anonymous",
    age = 18,
    email = null
  } = user;
  
  // Validazioni aggiuntive
  if (typeof id !== "number") throw new Error("ID must be number");
  if (age < 18) throw new Error("Must be 18+");
  
  return { id, name, age, email };
}

try {
  console.log("Valid user:");
  console.log(validateUser({ id: 1, name: "Mario", age: 25 }));
} catch (e) {
  console.log("Error:", e.message);
}

try {
  console.log("\nInvalid user (no ID):");
  console.log(validateUser({ name: "Test" }));
} catch (e) {
  console.log("Error:", e.message);
}

// Pattern con controlli
function processOrder({ items = [], total = 0, status = "pending" } = {}) {
  if (!Array.isArray(items) || items.length === 0) {
    return { error: "No items" };
  }
  if (total <= 0) {
    return { error: "Invalid total" };
  }
  
  return { items, total, status, processed: true };
}

console.log("\nOrder valid:", processOrder({ items: ["A"], total: 100 }));
console.log("Order invalid:", processOrder({ items: [], total: 0 }));


console.log("\n=== 3. DESTRUCTURING IN TRY-CATCH ===\n");

// Pattern per error handling
function fetchUser(id) {
  if (id === 1) {
    return {
      success: true,
      data: { id: 1, name: "Mario" },
      error: null
    };
  }
  return {
    success: false,
    data: null,
    error: { code: 404, message: "User not found" }
  };
}

// Pattern matching per success/error
function handleResponse(response) {
  let { success, data, error } = response;
  
  if (success) {
    let { id, name } = data;
    console.log(`✓ User ${id}: ${name}`);
  } else {
    let { code, message } = error;
    console.log(`✗ Error ${code}: ${message}`);
  }
}

console.log("Success case:");
handleResponse(fetchUser(1));

console.log("\nError case:");
handleResponse(fetchUser(99));

// Con optional chaining
function safeHandle(response) {
  let { 
    success,
    data: { id, name } = {},  // Default per evitare errore
    error: { message } = {}
  } = response || {};
  
  console.log("Safe handle:");
  console.log("  Success:", success);
  console.log("  ID:", id);
  console.log("  Name:", name);
  console.log("  Error:", message);
}

console.log("\nSafe handle:");
safeHandle(fetchUser(1));
safeHandle(null);


console.log("\n=== 4. ARRAY PATTERN MATCHING ===\n");

// Match e extract pattern
function matchArray(arr) {
  if (arr.length === 0) {
    console.log("Empty array");
  } else if (arr.length === 1) {
    let [single] = arr;
    console.log("Single item:", single);
  } else if (arr.length === 2) {
    let [first, second] = arr;
    console.log("Pair:", first, second);
  } else {
    let [first, second, ...rest] = arr;
    console.log("Multiple:", first, second, `+${rest.length} more`);
  }
}

matchArray([]);
matchArray([1]);
matchArray([1, 2]);
matchArray([1, 2, 3, 4, 5]);

// Head-tail pattern (functional)
function processList(list) {
  if (list.length === 0) return "Empty";
  
  let [head, ...tail] = list;
  return `Head: ${head}, Tail length: ${tail.length}`;
}

console.log("\n" + processList([1, 2, 3, 4]));
console.log(processList([1]));


console.log("\n=== 5. OBJECT PATTERN MATCHING ===\n");

// Match per tipo
function handleEvent(event) {
  let { type, payload = {} } = event;
  
  switch (type) {
    case "USER_LOGIN": {
      let { username, timestamp } = payload;
      console.log(`Login: ${username} at ${timestamp}`);
      break;
    }
    case "USER_LOGOUT": {
      let { username } = payload;
      console.log(`Logout: ${username}`);
      break;
    }
    case "ERROR": {
      let { message, code } = payload;
      console.log(`Error ${code}: ${message}`);
      break;
    }
    default:
      console.log("Unknown event:", type);
  }
}

handleEvent({
  type: "USER_LOGIN",
  payload: { username: "mario", timestamp: "2023-01-01" }
});

handleEvent({
  type: "ERROR",
  payload: { message: "Connection failed", code: 500 }
});

// Pattern per Redux-like actions
function reducer(state = {}, action) {
  let { type, payload } = action;
  
  switch (type) {
    case "SET_USER": {
      let { user } = payload;
      return { ...state, user };
    }
    case "UPDATE_SETTINGS": {
      let { settings } = payload;
      return { ...state, settings: { ...state.settings, ...settings } };
    }
    default:
      return state;
  }
}

console.log("\nReducer:");
let state1 = reducer({}, {
  type: "SET_USER",
  payload: { user: { name: "Mario" } }
});
console.log("State after SET_USER:", state1);


console.log("\n=== 6. MIXED PATTERNS ===\n");

// Array di oggetti con destructuring complesso
let transactions = [
  { id: 1, type: "debit", amount: 100, meta: { category: "food" } },
  { id: 2, type: "credit", amount: 200, meta: { category: "salary" } },
  { id: 3, type: "debit", amount: 50, meta: { category: "transport" } }
];

// Extract specific fields
let debits = transactions
  .filter(({ type }) => type === "debit")
  .map(({ amount, meta: { category } }) => ({ amount, category }));

console.log("Debits:", debits);

// Group by type
function groupTransactions(txs) {
  return txs.reduce((acc, { type, amount }) => {
    acc[type] = (acc[type] || 0) + amount;
    return acc;
  }, {});
}

console.log("\nTotals by type:", groupTransactions(transactions));


console.log("\n=== 7. RENAME E TRANSFORM ===\n");

// Rename multiple fields
let apiResponse = {
  user_name: "Mario",
  user_age: 30,
  user_email: "m@test.com",
  created_at: "2023-01-01"
};

// Rename snake_case → camelCase
let {
  user_name: userName,
  user_age: userAge,
  user_email: userEmail,
  created_at: createdAt
} = apiResponse;

let transformed = { userName, userAge, userEmail, createdAt };
console.log("Transformed:", transformed);

// Function per batch transform
function transformKeys(obj, mapping) {
  let result = {};
  for (let [oldKey, newKey] of Object.entries(mapping)) {
    if (oldKey in obj) {
      result[newKey] = obj[oldKey];
    }
  }
  return result;
}

let mapping = {
  user_name: "name",
  user_age: "age",
  user_email: "email"
};

console.log("\nBatch transform:", transformKeys(apiResponse, mapping));


console.log("\n=== 8. CONDITIONAL DESTRUCTURING ===\n");

// Destructuring condizionale
function processData(data) {
  if (Array.isArray(data)) {
    let [first, ...rest] = data;
    console.log("Array:", { first, restLength: rest.length });
  } else if (typeof data === "object" && data !== null) {
    let { id, name, ...props } = data;
    console.log("Object:", { id, name, propCount: Object.keys(props).length });
  } else {
    console.log("Primitive:", data);
  }
}

processData([1, 2, 3]);
processData({ id: 1, name: "Test", x: 1, y: 2 });
processData("string");

// Type-based destructuring
function format(value) {
  if (typeof value === "object" && value !== null) {
    if ("x" in value && "y" in value) {
      let { x, y } = value;
      return `Point(${x}, ${y})`;
    }
    if ("width" in value && "height" in value) {
      let { width, height } = value;
      return `Rect(${width}x${height})`;
    }
  }
  return String(value);
}

console.log("\nFormat:");
console.log(format({ x: 10, y: 20 }));
console.log(format({ width: 100, height: 50 }));


console.log("\n=== 9. IMMUTABLE UPDATES ===\n");

// Pattern per update immutabili
let user = {
  id: 1,
  name: "Mario",
  settings: {
    theme: "dark",
    lang: "it"
  }
};

// Update con spread e destructuring
function updateUser(user, updates) {
  return { ...user, ...updates };
}

let updated1 = updateUser(user, { name: "Luigi" });
console.log("Updated name:", updated1);

// Nested update
function updateUserSettings(user, settingsUpdates) {
  let { settings, ...rest } = user;
  return {
    ...rest,
    settings: { ...settings, ...settingsUpdates }
  };
}

let updated2 = updateUserSettings(user, { theme: "light" });
console.log("\nUpdated settings:", updated2);

// Array update (replace item)
function updateItem(array, index, updates) {
  return array.map((item, i) =>
    i === index ? { ...item, ...updates } : item
  );
}

let items = [
  { id: 1, name: "A", status: "pending" },
  { id: 2, name: "B", status: "pending" }
];

let updatedItems = updateItem(items, 0, { status: "done" });
console.log("\nUpdated items:", updatedItems);


console.log("\n=== 10. REAL-WORLD PATTERNS ===\n");

// 1. React-like props extraction
function Component({
  title = "Default Title",
  children = [],
  className = "",
  onClick = () => {},
  ...restProps
}) {
  console.log("1. Component props:");
  console.log("  Title:", title);
  console.log("  Children:", children.length);
  console.log("  Class:", className);
  console.log("  Rest props:", Object.keys(restProps));
}

Component({
  title: "My Title",
  children: ["child1", "child2"],
  className: "container",
  onClick: () => {},
  id: "comp-1",
  dataTest: "value"
});

// 2. API pagination
function fetchPage({ page = 1, limit = 10, sort = "id", order = "asc" } = {}) {
  console.log("\n2. Fetch page:");
  console.log(`  Page ${page}, limit ${limit}, sort by ${sort} (${order})`);
  return { page, limit, sort, order };
}

fetchPage({ page: 2, limit: 20 });
fetchPage();

// 3. Database-like query builder
function buildQuery({
  table,
  select = ["*"],
  where = {},
  orderBy = null,
  limit = null
}) {
  let query = `SELECT ${select.join(", ")} FROM ${table}`;
  
  let { id, status, ...restWhere } = where;
  if (id) query += ` WHERE id = ${id}`;
  if (status) query += ` AND status = '${status}'`;
  
  if (orderBy) query += ` ORDER BY ${orderBy}`;
  if (limit) query += ` LIMIT ${limit}`;
  
  return query;
}

console.log("\n3. Query:");
console.log(buildQuery({
  table: "users",
  select: ["id", "name"],
  where: { status: "active" },
  orderBy: "name",
  limit: 10
}));

// 4. Options merge
function mergeOptions(defaults, custom) {
  let {
    timeout: defaultTimeout,
    retries: defaultRetries,
    ...restDefaults
  } = defaults;
  
  let {
    timeout: customTimeout = defaultTimeout,
    retries: customRetries = defaultRetries,
    ...restCustom
  } = custom;
  
  return {
    timeout: customTimeout,
    retries: customRetries,
    ...restDefaults,
    ...restCustom
  };
}

let defaults = { timeout: 5000, retries: 3, debug: false };
let custom = { timeout: 10000, cache: true };

console.log("\n4. Merged options:");
console.log(mergeOptions(defaults, custom));

console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO ADVANCED DESTRUCTURING");
console.log("=".repeat(50));
console.log(`
TECNICHE AVANZATE:

1. Computed properties:
   let { [key]: value } = obj;

2. Validazione:
   let { id = throw Error() } = obj;

3. Try-catch pattern:
   let { success, data = {}, error = {} } = response;

4. Pattern matching:
   switch(type) { case "X": let {a,b} = payload; }

5. Conditional destructuring:
   if (Array.isArray()) { let [x] = arr; }

6. Immutable updates:
   { ...obj, ...updates }
   [... arr.slice(0, i), updated, ...arr.slice(i+1)]

7. Transform/Rename:
   let { old_name: newName } = obj;

8. Nested safe:
   let { a: { b } = {} } = obj;

BEST PRACTICES:
✓ Usa default per evitare errori
✓ Combina con optional chaining (?.)
✓ Rename per chiarezza
✓ Rest per flessibilità
✓ Validazione nei default
✗ Non abusare: leggibilità prima di tutto
`);
