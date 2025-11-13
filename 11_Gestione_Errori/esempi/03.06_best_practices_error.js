/**
 * 03.06 - Best Practices con Oggetto Error
 * 
 * Pattern consigliati e anti-pattern da evitare
 */

console.log("=== BEST PRACTICES OGGETTO ERROR ===\n");

// ============================================
// ✅ BEST PRACTICE 1: Errori Descrittivi
// ============================================
console.log("✅ BEST PRACTICE 1: ERRORI DESCRITTIVI\n");

console.log("❌ MALE - Messaggio generico:");
try {
    throw new Error("Errore");
} catch (error) {
    console.log(`  ${error.message}`);
}

console.log("\n✅ BENE - Messaggio specifico:");
try {
    throw new Error("Impossibile salvare utente: email 'test@' non valida");
} catch (error) {
    console.log(`  ${error.message}`);
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// ✅ BEST PRACTICE 2: Preserva Stack Trace
// ============================================
console.log("✅ BEST PRACTICE 2: PRESERVA STACK TRACE\n");

console.log("❌ MALE - Crea nuovo errore senza stack originale:");

function badErrorWrapping() {
    try {
        null.property;
    } catch (error) {
        // Perde la stack trace originale
        throw new Error("Operazione fallita");
    }
}

try {
    badErrorWrapping();
} catch (error) {
    console.log("Stack trace persa:");
    console.log(error.stack.split('\n').slice(0, 3).join('\n'));
}

console.log("\n✅ BENE - Preserva errore originale:");

class WrappedError extends Error {
    constructor(message, originalError) {
        super(message);
        this.name = "WrappedError";
        this.originalError = originalError;
        this.originalStack = originalError.stack;
    }
}

function goodErrorWrapping() {
    try {
        null.property;
    } catch (error) {
        throw new WrappedError("Operazione fallita", error);
    }
}

try {
    goodErrorWrapping();
} catch (error) {
    console.log("Messaggio wrapper:", error.message);
    console.log("Errore originale:", error.originalError.message);
    console.log("Stack originale preservata: ✓");
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// ✅ BEST PRACTICE 3: Usa Tipi Specifici
// ============================================
console.log("✅ BEST PRACTICE 3: USA TIPI SPECIFICI\n");

console.log("❌ MALE - Sempre Error generico:");

function badValidation(user) {
    if (!user.email) {
        throw new Error("Validazione fallita");
    }
    if (user.age < 0) {
        throw new Error("Validazione fallita");
    }
}

console.log("try { badValidation({}) }");
console.log("  → Impossibile distinguere quale validazione è fallita\n");

console.log("✅ BENE - Errori custom specifici:");

class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
    }
}

class RangeValidationError extends ValidationError {
    constructor(field, value, min, max) {
        super(`${field} deve essere tra ${min} e ${max}, ricevuto: ${value}`);
        this.name = "RangeValidationError";
        this.value = value;
        this.min = min;
        this.max = max;
    }
}

function goodValidation(user) {
    if (!user.email) {
        throw new ValidationError("Email obbligatoria", "email");
    }
    if (user.age < 0 || user.age > 150) {
        throw new RangeValidationError("age", user.age, 0, 150);
    }
}

try {
    goodValidation({ email: "", age: -5 });
} catch (error) {
    if (error instanceof RangeValidationError) {
        console.log(`Campo: ${error.field}`);
        console.log(`Valore: ${error.value}`);
        console.log(`Range valido: ${error.min}-${error.max}`);
        console.log("  → Facile applicare correzione automatica!");
    }
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// ✅ BEST PRACTICE 4: Non Esporre Stack
// ============================================
console.log("✅ BEST PRACTICE 4: NON ESPORRE STACK ALL'UTENTE\n");

console.log("❌ MALE - Mostra stack all'utente:");

function badUserError() {
    try {
        throw new Error("Database error");
    } catch (error) {
        return {
            success: false,
            message: error.stack  // ❌ Security risk!
        };
    }
}

console.log("Risposta utente:");
console.log(JSON.stringify(badUserError(), null, 2).substring(0, 150) + "...");

console.log("\n✅ BENE - Messaggio user-friendly, log tecnico:");

class ErrorHandler {
    static handleForUser(error, context = {}) {
        // Log dettagliato per sviluppatori
        console.error("[LOG INTERNO]", {
            name: error.name,
            message: error.message,
            stack: error.stack,
            context
        });
        
        // Risposta sicura per utente
        return {
            success: false,
            message: "Si è verificato un errore. Riprova più tardi.",
            errorCode: "ERR_500"
        };
    }
}

console.log("\nRisposta utente:");
const userResponse = ErrorHandler.handleForUser(
    new Error("Database connection failed"),
    { userId: 123 }
);
console.log(JSON.stringify(userResponse, null, 2));

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// ✅ BEST PRACTICE 5: Gestione Asincrona
// ============================================
console.log("✅ BEST PRACTICE 5: GESTIONE ASINCRONA CORRETTA\n");

console.log("❌ MALE - Promise rejection non gestita:");

function badAsync() {
    // Promise rejection non catturata
    Promise.reject(new Error("Async error"));
    console.log("  → Unhandled Promise Rejection!\n");
}

console.log("✅ BENE - Gestione con try-catch async/await:");

async function goodAsync() {
    try {
        await Promise.reject(new Error("Async error"));
    } catch (error) {
        console.log(`  ✓ Catturato: ${error.message}`);
        console.log(`  ✓ Tipo: ${error.name}`);
    }
}

// Esegui esempio
(async () => {
    badAsync();
    
    // Aspetta per mostrare l'output
    await new Promise(resolve => setTimeout(resolve, 100));
    
    await goodAsync();
    
    console.log("\n" + "=".repeat(50) + "\n");
    
    continueExamples();
})();

function continueExamples() {

// ============================================
// ✅ BEST PRACTICE 6: Error Boundaries
// ============================================
console.log("✅ BEST PRACTICE 6: ERROR BOUNDARIES\n");

console.log("❌ MALE - Un errore blocca tutto:");

function processItems(items) {
    const results = [];
    for (const item of items) {
        results.push(item.toUpperCase()); // Crash se item non è stringa
    }
    return results;
}

console.log("try { processItems([\"ok\", null, \"test\"]) }");
console.log("  → Crash totale, nessun risultato\n");

console.log("✅ BENE - Isola gli errori:");

function processItemsSafely(items) {
    const results = [];
    const errors = [];
    
    for (let i = 0; i < items.length; i++) {
        try {
            results.push(items[i].toUpperCase());
        } catch (error) {
            errors.push({
                index: i,
                item: items[i],
                error: error.message
            });
            results.push(null); // Placeholder
        }
    }
    
    return { results, errors };
}

const outcome = processItemsSafely(["ok", null, "test"]);
console.log("Risultati:", outcome.results);
console.log("Errori:", outcome.errors);
console.log("  → Elaborazione parziale riuscita!\n");

console.log("=".repeat(50) + "\n");

// ============================================
// ✅ BEST PRACTICE 7: Errori vs Flusso di Controllo
// ============================================
console.log("✅ BEST PRACTICE 7: ERRORI VS FLUSSO CONTROLLO\n");

console.log("❌ MALE - Usa errori per flusso normale:");

function badFind(array, value) {
    try {
        const index = array.indexOf(value);
        if (index === -1) {
            throw new Error("Non trovato"); // ❌ Non è un errore!
        }
        return index;
    } catch (error) {
        return -1;
    }
}

console.log("badFind([1,2,3], 5)");
console.log("  → Usa errori per controllo normale ❌\n");

console.log("✅ BENE - Ritorna valori speciali:");

function goodFind(array, value) {
    const index = array.indexOf(value);
    return index; // -1 se non trovato, valore normale
}

console.log("goodFind([1,2,3], 5) =", goodFind([1,2,3], 5));
console.log("  → Usa return values ✓\n");

console.log("✅ LANCIA ERRORI solo per condizioni eccezionali:");

function findOrThrow(array, value) {
    if (!Array.isArray(array)) {
        throw new TypeError("Primo parametro deve essere array"); // ✓ Errore reale
    }
    return array.indexOf(value); // -1 è un valore valido
}

console.log("findOrThrow(\"not array\", 5)");
console.log("  → Errore solo per input invalido ✓\n");

console.log("=".repeat(50) + "\n");

// ============================================
// ✅ BEST PRACTICE 8: Documentazione Errori
// ============================================
console.log("✅ BEST PRACTICE 8: DOCUMENTA GLI ERRORI\n");

console.log("❌ MALE - Nessuna documentazione:");

function badFunction(data) {
    if (!data) throw new Error("Invalid");
    return data.process();
}

console.log("function badFunction(data)");
console.log("  → Quali errori può lanciare? 🤷\n");

console.log("✅ BENE - Documenta con JSDoc:");

/**
 * Processa i dati utente
 * 
 * @param {Object} data - Dati da processare
 * @throws {TypeError} Se data non è un oggetto
 * @throws {ValidationError} Se data.email non è valido
 * @throws {ProcessError} Se processing fallisce
 * @returns {Object} Dati processati
 */
function goodFunction(data) {
    if (typeof data !== 'object' || data === null) {
        throw new TypeError("data deve essere un oggetto");
    }
    // ... resto del codice
    return data;
}

console.log("/**");
console.log(" * @throws {TypeError} Se data non è un oggetto");
console.log(" * @throws {ValidationError} Se data.email non è valido");
console.log(" */");
console.log("  → Chiamante sa cosa aspettarsi ✓\n");

console.log("=".repeat(50) + "\n");

// ============================================
// ✅ BEST PRACTICE 9: Errori Testabili
// ============================================
console.log("✅ BEST PRACTICE 9: ERRORI TESTABILI\n");

console.log("❌ MALE - Errori difficili da testare:");

function badOperation() {
    const random = Math.random();
    if (random < 0.5) {
        throw new Error("Random error");
    }
}

console.log("Test impossibile: comportamento randomico\n");

console.log("✅ BENE - Errori deterministici:");

class ServiceError extends Error {
    constructor(message, code, isRetryable = false) {
        super(message);
        this.name = "ServiceError";
        this.code = code;
        this.isRetryable = isRetryable;
    }
}

function testableOperation(input) {
    if (input === null) {
        throw new ServiceError(
            "Input nullo",
            "NULL_INPUT",
            false
        );
    }
    if (input < 0) {
        throw new ServiceError(
            "Input negativo",
            "NEGATIVE_INPUT",
            true
        );
    }
    return input * 2;
}

// Test facili
console.log("Test 1: input null");
try {
    testableOperation(null);
} catch (error) {
    console.log(`  ✓ Code: ${error.code}`);
    console.log(`  ✓ Retryable: ${error.isRetryable}`);
}

console.log("\nTest 2: input negativo");
try {
    testableOperation(-1);
} catch (error) {
    console.log(`  ✓ Code: ${error.code}`);
    console.log(`  ✓ Retryable: ${error.isRetryable}`);
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// ✅ BEST PRACTICE 10: Performance
// ============================================
console.log("✅ BEST PRACTICE 10: PERFORMANCE\n");

console.log("❌ MALE - Genera errori nel loop:");

function badLoop() {
    const start = Date.now();
    let count = 0;
    
    for (let i = 0; i < 10000; i++) {
        try {
            throw new Error("Test");
        } catch (e) {
            count++;
        }
    }
    
    return Date.now() - start;
}

console.log("10000 throw/catch nel loop:");
console.log(`  Tempo: ${badLoop()}ms ❌ Lento!\n`);

console.log("✅ BENE - Valida prima, evita errori:");

function goodLoop() {
    const start = Date.now();
    let count = 0;
    
    for (let i = 0; i < 10000; i++) {
        // Validazione senza throw
        if (i >= 0) {
            count++;
        }
    }
    
    return Date.now() - start;
}

console.log("10000 validazioni senza throw:");
console.log(`  Tempo: ${goodLoop()}ms ✓ Veloce!\n`);

console.log("=".repeat(50) + "\n");

// ============================================
// RIEPILOGO GENERALE
// ============================================
console.log("💡 RIEPILOGO BEST PRACTICES:\n");

console.log(`
┌────────────────────────────────────────────────────┐
│ BEST PRACTICES OGGETTO ERROR                       │
├────────────────────────────────────────────────────┤
│                                                    │
│ ✅ CREAZIONE ERRORI:                               │
│   1. Messaggi descrittivi e specifici             │
│   2. Usa tipi custom per domini diversi           │
│   3. Aggiungi proprietà utili (code, field, ...)  │
│   4. Preserva stack trace originale                │
│                                                    │
│ ✅ GESTIONE ERRORI:                                │
│   5. Usa instanceof per tipi specifici             │
│   6. Isola errori con error boundaries             │
│   7. Gestione asincrona corretta (async/await)     │
│   8. Non usare errori per flusso normale           │
│                                                    │
│ ✅ SICUREZZA & UX:                                 │
│   9. NON esporre stack all'utente finale           │
│  10. Messaggi user-friendly per utenti             │
│  11. Log dettagliati per sviluppatori              │
│  12. Error codes per client API                    │
│                                                    │
│ ✅ QUALITÀ CODICE:                                 │
│  13. Documenta errori con JSDoc @throws           │
│  14. Rendi errori testabili e deterministici       │
│  15. Considera performance (evita throw nei loop)  │
│                                                    │
└────────────────────────────────────────────────────┘

❌ ANTI-PATTERNS DA EVITARE:

1. Error("Errore")                    → Troppo generico
2. throw error.message                → Lancia stringa, non Error
3. catch(e) {}                        → Ignora silenziosamente
4. new Error() senza messaggio        → Non informativo
5. Esporre stack all'utente           → Security risk
6. throw per flusso normale           → Performance + design
7. Perdere errore originale           → Perde contesto
8. Catch troppo ampio                 → Nasconde bug
9. Errori non documentati             → API imprevedibile
10. throw nei loop frequenti          → Lento

✅ CHECKLIST ERRORE PERFETTO:

[ ] Tipo specifico (custom class)
[ ] Messaggio descrittivo
[ ] Proprietà utili (code, field, etc)
[ ] Stack trace preservata
[ ] Documentato con @throws
[ ] Testabile
[ ] User-friendly quando necessario
[ ] Performance considerata
[ ] Serializzabile (toJSON)
[ ] Logging appropriato

🎯 RICORDA:

- Gli errori sono per CONDIZIONI ECCEZIONALI
- Usa return values per flusso normale
- L'utente vede messaggi, lo sviluppatore vede stack
- Errori specifici > Errori generici
- Documenta sempre quali errori può lanciare una funzione
`);

}
