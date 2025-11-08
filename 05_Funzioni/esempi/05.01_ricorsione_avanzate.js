/**
 * FUNZIONI AVANZATE
 * 
 * Ricorsione, memoization, generators, async/await, funzioni pure.
 * Tecniche avanzate per codice elegante e performante.
 */

console.log("=== 1. RICORSIONE BASE ===\n");

// Ricorsione: funzione chiama se stessa
function fattoriale(n) {
  // Caso base: terminazione
  if (n <= 1) return 1;
  
  // Caso ricorsivo
  return n * fattoriale(n - 1);
}

console.log("5! =", fattoriale(5));  // 120
console.log("Passi: 5*4*3*2*1 =", fattoriale(5));

// Countdown ricorsivo
function countdown(n) {
  if (n < 0) return;
  console.log("  ", n);
  countdown(n - 1);
}

console.log("\nCountdown da 5:");
countdown(5);


console.log("\n=== 2. RICORSIONE FIBONACCI ===\n");

// Fibonacci ricorsivo (inefficiente)
function fibRecursive(n) {
  if (n <= 1) return n;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

console.log("Fibonacci ricorsivo:");
for (let i = 0; i <= 8; i++) {
  console.log(`  fib(${i}) =`, fibRecursive(i));
}

// Problema: calcola stesso valore molte volte!
// fib(5) calcola fib(3) due volte, fib(2) tre volte...


console.log("\n=== 3. MEMOIZATION ===\n");

// Memoization: cache risultati per velocizzare
function memoize(fn) {
  const cache = {};
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (key in cache) {
      console.log(`  Cache hit: ${key}`);
      return cache[key];
    }
    
    console.log(`  Computing: ${key}`);
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

// Fibonacci con memoization
const fibMemo = memoize(function fib(n) {
  if (n <= 1) return n;
  return fibMemo(n - 1) + fibMemo(n - 2);
});

console.log("Fibonacci memoized:");
console.log("fib(10) =", fibMemo(10));
console.log("\nRicalcolo fib(10):");
console.log("fib(10) =", fibMemo(10));  // Molto più veloce!


console.log("\n=== 4. TAIL CALL OPTIMIZATION ===\n");

// Ricorsione con accumulator (tail call)
function fattorialeTail(n, acc = 1) {
  if (n <= 1) return acc;
  return fattorialeTail(n - 1, n * acc);  // Tail call
}

console.log("Fattoriale tail recursive:");
console.log("10! =", fattorialeTail(10));

// Fibonacci tail recursive
function fibTail(n, a = 0, b = 1) {
  if (n === 0) return a;
  if (n === 1) return b;
  return fibTail(n - 1, b, a + b);
}

console.log("\nFibonacci tail recursive:");
console.log("fib(10) =", fibTail(10));


console.log("\n=== 5. GENERATORS ===\n");

// Generator function: produce sequenza valori
function* numberGenerator() {
  console.log("  Start");
  yield 1;
  console.log("  After 1");
  yield 2;
  console.log("  After 2");
  yield 3;
  console.log("  End");
}

const gen = numberGenerator();
console.log("Chiamata next():");
console.log("Value:", gen.next());  // { value: 1, done: false }
console.log("\nSeconda next():");
console.log("Value:", gen.next());  // { value: 2, done: false }
console.log("\nTerza next():");
console.log("Value:", gen.next());  // { value: 3, done: false }
console.log("\nQuarta next():");
console.log("Value:", gen.next());  // { value: undefined, done: true }


console.log("\n=== 6. GENERATOR INFINITI ===\n");

// Generator per sequenze infinite
function* fibonacci() {
  let [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fibGen = fibonacci();
console.log("Primi 10 Fibonacci:");
for (let i = 0; i < 10; i++) {
  console.log(`  ${i}:`, fibGen.next().value);
}

// Generator con parametri
function* range(start, end, step = 1) {
  for (let i = start; i < end; i += step) {
    yield i;
  }
}

console.log("\nRange 0-10 step 2:");
for (const n of range(0, 10, 2)) {
  console.log("  ", n);
}


console.log("\n=== 7. ASYNC/AWAIT BASE ===\n");

// Promise base
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function restituisce Promise
async function loadUser() {
  console.log("  Loading user...");
  await delay(100);
  return { id: 1, name: "Mario" };
}

// Await aspetta Promise
async function showUser() {
  const user = await loadUser();
  console.log("  User:", user);
}

console.log("Async/await:");
showUser();


console.log("\n=== 8. ASYNC ERROR HANDLING ===\n");

// Try/catch con async
async function fetchData(url) {
  try {
    console.log(`  Fetching ${url}...`);
    await delay(100);
    
    if (url.includes("error")) {
      throw new Error("Network error!");
    }
    
    return { data: "Success" };
  } catch (error) {
    console.error("  Error:", error.message);
    return { error: error.message };
  }
}

async function testFetch() {
  const result1 = await fetchData("api/users");
  console.log("  Result 1:", result1);
  
  const result2 = await fetchData("api/error");
  console.log("  Result 2:", result2);
}

setTimeout(() => {
  console.log("\nAsync error handling:");
  testFetch();
}, 300);


console.log("\n=== 9. FUNZIONI PURE ===\n");

// Pure: stesso input → stesso output, no side effects
function add(a, b) {
  return a + b;  // ✓ Pure
}

console.log("Pure function:");
console.log("add(2, 3) =", add(2, 3));
console.log("add(2, 3) =", add(2, 3));  // Sempre stesso risultato

// Impure: modifica stato esterno
let total = 0;
function addToTotal(n) {
  total += n;  // ✗ Side effect
  return total;
}

console.log("\nImpure function:");
console.log("addToTotal(5) =", addToTotal(5));
console.log("addToTotal(5) =", addToTotal(5));  // Risultato diverso!

// Pure con array (non modifica originale)
function doubleArray(arr) {
  return arr.map(x => x * 2);  // ✓ Nuovo array
}

const nums = [1, 2, 3];
const doubled = doubleArray(nums);
console.log("\nArray originale:", nums);
console.log("Array doubled:", doubled);


console.log("\n=== 10. COMPOSITION FUNZIONI ===\n");

// Compose: combina funzioni
const compose = (...fns) => x => 
  fns.reduceRight((acc, fn) => fn(acc), x);

const pipe = (...fns) => x => 
  fns.reduce((acc, fn) => fn(acc), x);

// Funzioni base
const add1 = x => x + 1;
const times2 = x => x * 2;
const square = x => x * x;

// Compose: destra → sinistra
const calc1 = compose(times2, add1);
console.log("compose(times2, add1)(5):", calc1(5));  // (5+1)*2 = 12

// Pipe: sinistra → destra
const calc2 = pipe(add1, times2);
console.log("pipe(add1, times2)(5):", calc2(5));  // (5+1)*2 = 12

const calc3 = pipe(add1, square, times2);
console.log("pipe(add1, square, times2)(2):", calc3(2));  // ((2+1)²)*2 = 18


console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO FUNZIONI AVANZATE");
console.log("=".repeat(50));
console.log(`
RICORSIONE:
• Funzione chiama se stessa
• Serve CASO BASE (terminazione)
• Caso ricorsivo riduce problema
• Attenzione: stack overflow!
• Tail call optimization quando possibile

MEMOIZATION:
• Cache risultati già calcolati
• Velocizza funzioni pure
• Trade-off: memoria vs velocità
• Utile per ricorsione ripetuta

GENERATORS (function*):
• Producono sequenza valori con yield
• Lazy evaluation (calcolo on demand)
• Possono essere infiniti
• Iterabili con for...of
• Mantengono stato tra yield

ASYNC/AWAIT:
• Sintassi sincrona per codice asincrono
• async function restituisce Promise
• await aspetta Promise
• try/catch per error handling
• Più leggibile di .then()

FUNZIONI PURE:
• Stesso input → stesso output sempre
• NO side effects (no modifiche esterne)
• Più testabili e predicibili
• Facilitano reasoning sul codice
• Composable e riusabili

COMPOSITION:
• Combina funzioni piccole
• compose: destra → sinistra
• pipe: sinistra → destra
• Functional programming
• Codice modulare e riusabile

BEST PRACTICES:
• Preferisci funzioni pure quando possibile
• Usa memoization per ricorsione costosa
• Async/await per readability asincrono
• Generators per sequenze lazy
• Tail recursion per ricorsione profonda
• Composition per logica complessa

PATTERN COMUNI:
• Fibonacci memoized
• Async data fetching
• Generator iterators
• Pure data transformations
• Pipeline di operazioni

PERFORMANCE:
• Memoization: O(n) invece di O(2ⁿ)
• Tail call: evita stack overflow
• Generators: lazy evaluation
• Pure functions: cacheable
• Composition: nessun overhead
`);
