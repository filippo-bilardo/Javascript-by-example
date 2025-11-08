/**
 * Esempio: Symbol e BigInt
 * 
 * Symbol (ES6) e BigInt (ES2020) sono tipi primitivi più recenti
 * per identificatori unici e numeri interi arbitrariamente grandi.
 * 
 * Per eseguire: node 03.04_symbol_bigint.js
 */

console.log("=== SYMBOL E BIGINT ===\n");

// ========== SYMBOL ==========
console.log("🔣 SYMBOL (ES6)\n");

// 1. Creazione di Symbol
console.log("1. Creazione di Symbol:\n");

let simbolo1 = Symbol();
let simbolo2 = Symbol();
let simbolo3 = Symbol("descrizione"); // Descrizione opzionale per debug
let simbolo4 = Symbol("descrizione");

console.log("simbolo1:", simbolo1);
console.log("simbolo3:", simbolo3);
console.log("typeof Symbol():", typeof simbolo1);

// 2. Unicità dei Symbol
console.log("\n2. Unicità dei Symbol:\n");

console.log("simbolo1 === simbolo2:", simbolo1 === simbolo2); // false
console.log("simbolo3 === simbolo4:", simbolo3 === simbolo4); // false
console.log("Anche con stessa descrizione, sono diversi!");

// Symbol.for() - Symbol globali
let globalSym1 = Symbol.for("app.id");
let globalSym2 = Symbol.for("app.id");
console.log("\nSymbol.for('app.id') === Symbol.for('app.id'):", 
  globalSym1 === globalSym2); // true!

// Symbol.keyFor() - recupera la chiave
console.log("Symbol.keyFor(globalSym1):", Symbol.keyFor(globalSym1));
console.log("Symbol.keyFor(simbolo1):", Symbol.keyFor(simbolo1)); // undefined

// 3. Uso come chiavi di proprietà
console.log("\n3. Symbol come chiavi di proprietà:\n");

let id = Symbol("id");
let utente = {
  nome: "Mario",
  [id]: 12345 // Proprietà con Symbol come chiave
};

console.log("utente.nome:", utente.nome);
console.log("utente[id]:", utente[id]);

// Le proprietà Symbol sono "nascoste"
console.log("\nObject.keys(utente):", Object.keys(utente));
console.log("for...in non vede Symbol:");
for (let key in utente) {
  console.log("  ", key);
}

// Per accedere alle proprietà Symbol
console.log("\nObject.getOwnPropertySymbols(utente):", 
  Object.getOwnPropertySymbols(utente));

// 4. Well-known Symbols
console.log("\n4. Well-known Symbols (built-in):\n");

// Symbol.iterator - definisce come oggetto viene iterato
let rangeIterabile = {
  from: 1,
  to: 5,
  
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      
      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};

console.log("Range iterabile 1-5:");
for (let num of rangeIterabile) {
  console.log("  ", num);
}

// Symbol.toStringTag - personalizza Object.prototype.toString
class ValidatorClass {
  get [Symbol.toStringTag]() {
    return "Validator";
  }
}

let validator = new ValidatorClass();
console.log("\nObject.prototype.toString.call(validator):", 
  Object.prototype.toString.call(validator));

// Symbol.toPrimitive - conversione a primitivo
let oggetto = {
  valore: 100,
  
  [Symbol.toPrimitive](hint) {
    if (hint === "number") {
      return this.valore;
    }
    if (hint === "string") {
      return `Valore: ${this.valore}`;
    }
    return this.valore;
  }
};

console.log("\nConversioni con Symbol.toPrimitive:");
console.log("Numerico (+oggetto):", +oggetto); // 100
console.log("Stringa (String(oggetto)):", String(oggetto)); // "Valore: 100"
console.log("Default (oggetto + ''):", oggetto + ""); // "100"

// 5. Casi d'uso pratici
console.log("\n5. Casi d'uso pratici dei Symbol:\n");

// Proprietà private (non proprio, ma nascoste)
const _privato = Symbol("privato");

class ContoBancario {
  constructor(saldo) {
    this[_privato] = saldo;
  }
  
  getSaldo() {
    return this[_privato];
  }
  
  deposita(importo) {
    this[_privato] += importo;
  }
}

let conto = new ContoBancario(1000);
console.log("Saldo:", conto.getSaldo());
conto.deposita(500);
console.log("Dopo deposito:", conto.getSaldo());
console.log("Accesso diretto a _privato:", conto._privato); // undefined
console.log("Keys visibili:", Object.keys(conto));

// Enum-like constants
const LOG_LEVEL = {
  DEBUG: Symbol("debug"),
  INFO: Symbol("info"),
  WARN: Symbol("warn"),
  ERROR: Symbol("error")
};

function log(livello, messaggio) {
  const prefissi = {
    [LOG_LEVEL.DEBUG]: "🐛",
    [LOG_LEVEL.INFO]: "ℹ️",
    [LOG_LEVEL.WARN]: "⚠️",
    [LOG_LEVEL.ERROR]: "❌"
  };
  console.log(`${prefissi[livello]} ${messaggio}`);
}

console.log("\nLogger con Symbol:");
log(LOG_LEVEL.INFO, "Applicazione avviata");
log(LOG_LEVEL.WARN, "Attenzione: bassa memoria");
log(LOG_LEVEL.ERROR, "Connessione fallita");

// ========== BIGINT ==========
console.log("\n\n🔢 BIGINT (ES2020)\n");

// 1. Creazione di BigInt
console.log("1. Creazione di BigInt:\n");

// Con suffisso 'n'
let big1 = 9007199254740991n;
let big2 = 1234567890123456789012345678901234567890n;

// Con costruttore BigInt()
let big3 = BigInt(9007199254740991);
let big4 = BigInt("1234567890123456789012345678901234567890");

console.log("Con 'n':", big1);
console.log("Numero enorme:", big2);
console.log("Con BigInt():", big3);
console.log("typeof BigInt:", typeof big1);

// 2. Limiti di Number vs BigInt
console.log("\n2. Problema con Number:\n");

console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("MAX + 1:", Number.MAX_SAFE_INTEGER + 1);
console.log("MAX + 2:", Number.MAX_SAFE_INTEGER + 2); // Uguale al precedente!
console.log("Perdita di precisione! ⚠️");

console.log("\nCon BigInt - nessun limite:");
let maxSafe = BigInt(Number.MAX_SAFE_INTEGER);
console.log("maxSafe:", maxSafe);
console.log("maxSafe + 1n:", maxSafe + 1n);
console.log("maxSafe + 2n:", maxSafe + 2n);
console.log("Precisione perfetta! ✅");

// 3. Operazioni con BigInt
console.log("\n3. Operazioni aritmetiche:\n");

let a = 100n;
let b = 50n;

console.log(`a = ${a}, b = ${b}`);
console.log("a + b:", a + b);
console.log("a - b:", a - b);
console.log("a * b:", a * b);
console.log("a / b:", a / b); // Divisione intera
console.log("a % b:", a % b);
console.log("a ** b:", a ** 3n); // Potenza

// Divisione sempre intera
console.log("\n100n / 3n:", 100n / 3n); // 33n (non 33.333...)

// 4. Limitazioni di BigInt
console.log("\n4. Limitazioni:\n");

// Non si può mescolare BigInt con Number
try {
  console.log("10n + 5:", 10n + 5);
} catch (e) {
  console.log("❌ Errore:", e.message);
}

// Soluzione: conversione esplicita
console.log("10n + BigInt(5):", 10n + BigInt(5));
console.log("Number(10n) + 5:", Number(10n) + 5);

// Non funziona con Math
try {
  console.log("Math.sqrt(16n):", Math.sqrt(16n));
} catch (e) {
  console.log("❌ Math con BigInt:", e.message);
}

// Non può avere decimali
console.log("\nBigInt non supporta decimali");
console.log("10n / 3n =", 10n / 3n, "(non 3.333...)");

// 5. Confronti
console.log("\n5. Confronti:\n");

console.log("10n === 10:", 10n === 10); // false (tipi diversi)
console.log("10n == 10:", 10n == 10); // true (conversione)
console.log("10n > 5:", 10n > 5); // true
console.log("10n < 20:", 10n < 20); // true

// Ordinamento
let numeri = [5n, 10, 3n, 8, 1n];
console.log("\nArray misto:", numeri);
console.log("Ordinato:", numeri.sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}));

// 6. Conversioni
console.log("\n6. Conversioni:\n");

let bigNum = 123456789n;

// BigInt to Number (attenzione alla perdita di precisione)
console.log("Number(123456789n):", Number(bigNum));

// BigInt to String
console.log("String(123456789n):", String(bigNum));
console.log("toString():", bigNum.toString());
console.log("toString(16) hex:", bigNum.toString(16));
console.log("toString(2) bin:", bigNum.toString(2));

// Number to BigInt
console.log("BigInt(123):", BigInt(123));

// String to BigInt
console.log("BigInt('999999999999999999'):", BigInt("999999999999999999"));

// 7. Casi d'uso pratici
console.log("\n7. Casi d'uso pratici:\n");

// Fattoriale di numeri grandi
function fattorialeBigInt(n) {
  if (n <= 1n) return 1n;
  return n * fattorialeBigInt(n - 1n);
}

console.log("Fattoriale di 20n:");
console.log(fattorialeBigInt(20n));

// Fibonacci con BigInt
function fibonacciBigInt(n) {
  if (n <= 1n) return n;
  let a = 0n, b = 1n;
  for (let i = 2n; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}

console.log("\nFibonacci(100n):");
console.log(fibonacciBigInt(100n));

// Potenze di 2 grandi
function potenzaDi2(esponente) {
  return 2n ** BigInt(esponente);
}

console.log("\n2^100:");
console.log(potenzaDi2(100));

// Timestamp precisi (nanoseconds)
const NANOSECONDS_PER_SECOND = 1000000000n;

function timestampNano() {
  const hrTime = process.hrtime.bigint();
  return hrTime;
}

console.log("\nTimestamp in nanosecondi:");
console.log(timestampNano());

// 8. Verifica tipo
console.log("\n8. Verifica tipo:\n");

function isBigInt(valore) {
  return typeof valore === "bigint";
}

console.log("isBigInt(123n):", isBigInt(123n));
console.log("isBigInt(123):", isBigInt(123));

// JSON non supporta BigInt nativamente
console.log("\nJSON.stringify(123n):");
try {
  console.log(JSON.stringify({ valore: 123n }));
} catch (e) {
  console.log("❌", e.message);
}

// Soluzione: custom serializer
const oggettoConBigInt = { valore: 123n };
const json = JSON.stringify(oggettoConBigInt, (key, value) =>
  typeof value === "bigint" ? value.toString() + "n" : value
);
console.log("Con serializer custom:", json);

console.log("\n💡 Best Practices:");
console.log("   Symbol:");
console.log("   - Usare per proprietà uniche e 'private'");
console.log("   - Utilizzare Symbol.for() per Symbol globali");
console.log("   - Ideale per costanti enum-like");
console.log("\n   BigInt:");
console.log("   - Usare per calcoli con interi molto grandi");
console.log("   - Non mescolare con Number nelle operazioni");
console.log("   - Attenzione: non supporta decimali");
console.log("   - Perfetto per calcoli crittografici e ID lunghi");
