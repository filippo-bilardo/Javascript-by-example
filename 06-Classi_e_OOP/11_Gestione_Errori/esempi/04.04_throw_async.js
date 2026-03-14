/**
 * 04.04 - Throw in Contesti Asincroni
 * 
 * Come gestire throw con Promise e async/await
 */

console.log("=== THROW IN CONTESTI ASINCRONI ===\n");

// ============================================
// 1. Throw in Promise
// ============================================
console.log("📋 1. THROW IN PROMISE\n");

console.log("Esempio 1.1: Throw in Promise executor\n");

const promise1 = new Promise((resolve, reject) => {
    console.log("  Eseguo validazione...");
    const valid = false;
    
    if (!valid) {
        throw new Error("Validazione fallita");
        // throw viene convertito automaticamente in reject
    }
    
    resolve("successo");
});

promise1
    .then(result => console.log("  ✅", result))
    .catch(error => console.log("  ❌ Catturato:", error.message));

console.log("\nEsempio 1.2: Throw in then handler\n");

Promise.resolve("dato")
    .then(data => {
        console.log("  Elaboro dato:", data);
        throw new Error("Errore durante elaborazione");
    })
    .then(result => {
        console.log("  ✅ Questo non viene eseguito");
    })
    .catch(error => {
        console.log("  ❌ Catturato nel catch:", error.message);
    });

// Aspetta per mostrare output
setTimeout(() => {
    console.log("\n" + "=".repeat(50) + "\n");
    continueExamples();
}, 100);

function continueExamples() {

// ============================================
// 2. Async/Await con Throw
// ============================================
console.log("📋 2. ASYNC/AWAIT CON THROW\n");

async function fetchUser(id) {
    if (id < 0) {
        throw new RangeError("ID deve essere positivo");
    }
    
    // Simula fetch
    if (id > 1000) {
        throw new Error("Utente non trovato");
    }
    
    return { id, name: "Mario" };
}

async function test1() {
    console.log("Test 1: ID valido");
    try {
        const user = await fetchUser(123);
        console.log("  ✅ Utente:", user.name);
    } catch (error) {
        console.log("  ❌", error.message);
    }
}

async function test2() {
    console.log("\nTest 2: ID negativo");
    try {
        const user = await fetchUser(-5);
        console.log("  ✅ Utente:", user.name);
    } catch (error) {
        console.log("  ❌", error.name, "-", error.message);
    }
}

async function test3() {
    console.log("\nTest 3: ID non trovato");
    try {
        const user = await fetchUser(9999);
        console.log("  ✅ Utente:", user.name);
    } catch (error) {
        console.log("  ❌", error.message);
    }
}

// Esegui test
(async () => {
    await test1();
    await test2();
    await test3();
    
    console.log("\n" + "=".repeat(50) + "\n");
    
    await asyncExamples();
})();

async function asyncExamples() {

// ============================================
// 3. Propagazione Errori Async
// ============================================
console.log("📋 3. PROPAGAZIONE ERRORI ASYNC\n");

async function validateData(data) {
    if (!data) {
        throw new Error("Dati mancanti");
    }
    return data;
}

async function processData(data) {
    const validated = await validateData(data);
    return validated.toUpperCase();
}

async function saveData(data) {
    const processed = await processData(data);
    console.log("  Salvataggio:", processed);
    return processed;
}

console.log("Test: Errore propaga attraverso chain async\n");
try {
    await saveData(null);
} catch (error) {
    console.log("  ❌ Errore catturato al top:", error.message);
    console.log("  → Propagato da validateData → processData → saveData");
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// 4. Promise.all con Throw
// ============================================
console.log("📋 4. PROMISE.ALL CON THROW\n");

async function taskA() {
    console.log("  Task A: inizio");
    await new Promise(r => setTimeout(r, 50));
    console.log("  Task A: completato");
    return "A";
}

async function taskB() {
    console.log("  Task B: inizio");
    await new Promise(r => setTimeout(r, 30));
    throw new Error("Task B fallito");
}

async function taskC() {
    console.log("  Task C: inizio");
    await new Promise(r => setTimeout(r, 40));
    console.log("  Task C: completato");
    return "C";
}

console.log("Esecuzione parallela con Promise.all:\n");
try {
    const results = await Promise.all([taskA(), taskB(), taskC()]);
    console.log("  ✅ Risultati:", results);
} catch (error) {
    console.log("\n  ❌ Promise.all fallito:", error.message);
    console.log("  → Un errore fa fallire tutto");
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// 5. Promise.allSettled per Gestire Errori Parziali
// ============================================
console.log("📋 5. PROMISE.ALLSETTLED PER ERRORI PARZIALI\n");

async function apiCall1() {
    return "API 1 OK";
}

async function apiCall2() {
    throw new Error("API 2 fallita");
}

async function apiCall3() {
    return "API 3 OK";
}

console.log("Esecuzione con Promise.allSettled:\n");
const results = await Promise.allSettled([
    apiCall1(),
    apiCall2(),
    apiCall3()
]);

results.forEach((result, i) => {
    if (result.status === 'fulfilled') {
        console.log(`  ✅ API ${i + 1}: ${result.value}`);
    } else {
        console.log(`  ❌ API ${i + 1}: ${result.reason.message}`);
    }
});

console.log("\n  → Tutte le promise completate, gestisci errori individualmente");

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// 6. Timeout con Throw
// ============================================
console.log("📋 6. TIMEOUT CON THROW\n");

class TimeoutError extends Error {
    constructor(message) {
        super(message);
        this.name = "TimeoutError";
    }
}

function withTimeout(promise, ms) {
    const timeout = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new TimeoutError(`Timeout dopo ${ms}ms`));
        }, ms);
    });
    
    return Promise.race([promise, timeout]);
}

async function slowOperation() {
    console.log("  Operazione lenta iniziata...");
    await new Promise(r => setTimeout(r, 2000));
    return "completato";
}

console.log("Test timeout:\n");
try {
    const result = await withTimeout(slowOperation(), 100);
    console.log("  ✅", result);
} catch (error) {
    if (error instanceof TimeoutError) {
        console.log("  ⏱️  Timeout:", error.message);
    } else {
        console.log("  ❌", error.message);
    }
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// 7. Retry con Async Throw
// ============================================
console.log("📋 7. RETRY CON ASYNC THROW\n");

let attemptCount = 0;

async function unreliableAsyncOp() {
    attemptCount++;
    console.log(`  Tentativo ${attemptCount}...`);
    
    if (attemptCount < 3) {
        throw new Error("Operazione fallita temporaneamente");
    }
    
    return "successo";
}

async function retryAsync(operation, maxRetries = 3, delay = 100) {
    let lastError;
    
    for (let i = 0; i < maxRetries; i++) {
        try {
            const result = await operation();
            return result;
        } catch (error) {
            lastError = error;
            console.log(`  ❌ ${error.message}`);
            
            if (i < maxRetries - 1) {
                console.log(`  ⏳ Attendo ${delay}ms prima di riprovare...`);
                await new Promise(r => setTimeout(r, delay));
            }
        }
    }
    
    throw lastError;
}

try {
    const result = await retryAsync(unreliableAsyncOp);
    console.log(`  ✅ Risultato: ${result}`);
} catch (error) {
    console.log(`  ❌ Fallito dopo tutti i tentativi: ${error.message}`);
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// 8. Error Boundary Pattern per Async
// ============================================
console.log("📋 8. ERROR BOUNDARY ASYNC\n");

class AsyncErrorBoundary {
    async execute(asyncFn, errorHandler) {
        try {
            return await asyncFn();
        } catch (error) {
            if (errorHandler) {
                return errorHandler(error);
            }
            throw error;
        }
    }
    
    async executeAll(tasks, continueOnError = false) {
        const results = [];
        const errors = [];
        
        for (let i = 0; i < tasks.length; i++) {
            try {
                const result = await tasks[i]();
                results.push({ index: i, status: 'success', value: result });
            } catch (error) {
                errors.push({ index: i, status: 'error', error: error.message });
                
                if (!continueOnError) {
                    throw error;
                }
            }
        }
        
        return { results, errors };
    }
}

const boundary = new AsyncErrorBoundary();

console.log("Test 1: Execute singolo con handler\n");
await boundary.execute(
    async () => {
        throw new Error("Operazione fallita");
    },
    (error) => {
        console.log(`  ⚠️  Errore gestito: ${error.message}`);
        return "valore di fallback";
    }
);

console.log("\nTest 2: Execute all con continueOnError\n");
const outcome = await boundary.executeAll([
    async () => { console.log("  Task 1 OK"); return "A"; },
    async () => { throw new Error("Task 2 fallito"); },
    async () => { console.log("  Task 3 OK"); return "C"; }
], true);

console.log("\n  Risultati:", outcome.results);
console.log("  Errori:", outcome.errors);

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// BEST PRACTICES
// ============================================
console.log("💡 BEST PRACTICES ASYNC THROW:\n");

console.log(`
✅ ASYNC/AWAIT:
   - Usa try/catch con await
   - throw viene catturato automaticamente
   - Errori propagano come sync code
   
   async function example() {
       try {
           await riskyOp();
       } catch (error) {
           // Gestisci throw da riskyOp
       }
   }

✅ PROMISE:
   - throw in executor → reject automatico
   - throw in .then → catch
   - Sempre aggiungere .catch finale
   
   promise
       .then(() => { throw new Error(); })
       .catch(error => { /* gestisci */ });

✅ PROMISE.ALL:
   - Un errore fa fallire tutto
   - Usa allSettled per errori parziali
   - Gestisci ciascun result.status

✅ PATTERNS UTILI:
   - Timeout con Promise.race
   - Retry con loop e await
   - Error boundaries per isolamento
   - allSettled per operazioni indipendenti

❌ EVITA:
   - throw senza try/catch in async
   - Promise senza .catch
   - Ignorare rejected promises
   - Unhandled promise rejections

⚠️  ATTENZIONE:
   // ❌ MALE
   async function bad() {
       doSomething(); // Promise non awaited
       throw new Error(); // Può non essere catturato
   }
   
   // ✅ BENE
   async function good() {
       await doSomething();
       throw new Error(); // Catturato correttamente
   }

📊 GESTIONE ERRORI:
   1. try/catch per await
   2. .catch() per promise chains
   3. Promise.allSettled per batch
   4. Error boundaries per UI/batch
`);

}
}
