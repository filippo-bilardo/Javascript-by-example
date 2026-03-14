/**
 * 03.04 - Gestione Errori per Tipo
 * 
 * Pattern e strategie per gestire diversi tipi di errori
 */

console.log("=== GESTIONE ERRORI PER TIPO ===\n");

// ============================================
// 1. Pattern Base: Switch su Type
// ============================================
console.log("📋 1. PATTERN SWITCH SU TIPO\n");

function handleError(error) {
    if (error instanceof TypeError) {
        console.log("❌ TypeError - Controlla i tipi");
        console.log(`   ${error.message}`);
        return { handled: true, type: 'TypeError' };
        
    } else if (error instanceof ReferenceError) {
        console.log("❌ ReferenceError - Variabile non definita");
        console.log(`   ${error.message}`);
        return { handled: true, type: 'ReferenceError' };
        
    } else if (error instanceof RangeError) {
        console.log("❌ RangeError - Valore fuori range");
        console.log(`   ${error.message}`);
        return { handled: true, type: 'RangeError' };
        
    } else if (error instanceof SyntaxError) {
        console.log("❌ SyntaxError - Problema di sintassi");
        console.log(`   ${error.message}`);
        return { handled: true, type: 'SyntaxError' };
        
    } else {
        console.log("❌ Errore generico");
        console.log(`   ${error.message}`);
        return { handled: true, type: 'Error' };
    }
}

// Test
try {
    null.method();
} catch (error) {
    const result = handleError(error);
    console.log("Risultato:", result);
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// 2. Pattern: Handler Map
// ============================================
console.log("📋 2. PATTERN HANDLER MAP\n");

class ErrorHandlerMap {
    constructor() {
        this.handlers = new Map();
        
        // Registra handler per tipo
        this.handlers.set(TypeError, this.handleTypeError);
        this.handlers.set(ReferenceError, this.handleReferenceError);
        this.handlers.set(RangeError, this.handleRangeError);
        this.handlers.set(SyntaxError, this.handleSyntaxError);
    }
    
    handleTypeError(error) {
        console.log("🔧 Handler TypeError");
        console.log("   → Verifica null/undefined");
        console.log("   → Controlla tipi variabili");
        return { action: 'retry', fallback: null };
    }
    
    handleReferenceError(error) {
        console.log("🔧 Handler ReferenceError");
        console.log("   → Dichiara la variabile");
        console.log("   → Controlla lo scope");
        return { action: 'abort', fallback: undefined };
    }
    
    handleRangeError(error) {
        console.log("🔧 Handler RangeError");
        console.log("   → Valida input numerici");
        console.log("   → Imposta limiti corretti");
        return { action: 'useDefault', fallback: 0 };
    }
    
    handleSyntaxError(error) {
        console.log("🔧 Handler SyntaxError");
        console.log("   → Verifica JSON/parsing");
        console.log("   → Usa default sicuro");
        return { action: 'useDefault', fallback: {} };
    }
    
    handle(error) {
        // Cerca handler specifico
        for (const [ErrorType, handler] of this.handlers) {
            if (error instanceof ErrorType) {
                console.log(`\nGestione: ${error.name}`);
                console.log(`Messaggio: ${error.message}`);
                return handler.call(this, error);
            }
        }
        
        // Fallback generico
        console.log("\nGestione: Errore generico");
        return { action: 'log', fallback: null };
    }
}

const errorHandler = new ErrorHandlerMap();

// Test vari errori
const testErrors = [
    () => null.prop,
    () => { let x = notDefined; },
    () => new Array(-1),
    () => JSON.parse("{bad}")
];

testErrors.forEach((fn, index) => {
    try {
        fn();
    } catch (error) {
        const result = errorHandler.handle(error);
        console.log(`Strategia:`, result);
        console.log();
    }
});

console.log("=".repeat(50) + "\n");

// ============================================
// 3. Pattern: Error Recovery Strategy
// ============================================
console.log("📋 3. ERROR RECOVERY STRATEGY\n");

class ErrorRecovery {
    static retry(operation, maxAttempts = 3) {
        let lastError;
        
        for (let i = 0; i < maxAttempts; i++) {
            try {
                console.log(`  Tentativo ${i + 1}/${maxAttempts}`);
                return operation();
            } catch (error) {
                lastError = error;
                console.log(`  ❌ Fallito: ${error.message}`);
                
                if (i < maxAttempts - 1) {
                    console.log(`  🔄 Riprovo...`);
                }
            }
        }
        
        console.log(`  ⚠️  Tutti i tentativi falliti`);
        throw lastError;
    }
    
    static withFallback(operation, fallbackValue) {
        try {
            return operation();
        } catch (error) {
            console.log(`  ⚠️  Errore: ${error.message}`);
            console.log(`  ✅ Uso fallback: ${JSON.stringify(fallbackValue)}`);
            return fallbackValue;
        }
    }
    
    static gracefulDegrade(operations) {
        for (const op of operations) {
            try {
                const result = op.fn();
                console.log(`  ✅ ${op.name} riuscita`);
                return result;
            } catch (error) {
                console.log(`  ❌ ${op.name} fallita: ${error.message}`);
                console.log(`  ↓ Provo alternativa...`);
            }
        }
        
        console.log(`  ⚠️  Tutte le alternative fallite`);
        return null;
    }
}

// Test Retry
console.log("Test 1: Retry Strategy");
let attempts = 0;
try {
    ErrorRecovery.retry(() => {
        attempts++;
        if (attempts < 3) {
            throw new Error("Connessione temporaneamente non disponibile");
        }
        return "successo";
    });
} catch (error) {
    console.log("  Operazione fallita definitivamente");
}

console.log("\nTest 2: Fallback Strategy");
const config = ErrorRecovery.withFallback(
    () => JSON.parse("{invalid}"),
    { port: 3000, host: 'localhost' }
);
console.log("  Config finale:", config);

console.log("\nTest 3: Graceful Degradation");
const data = ErrorRecovery.gracefulDegrade([
    {
        name: "API primaria",
        fn: () => { throw new Error("API down"); }
    },
    {
        name: "API secondaria",
        fn: () => { throw new Error("Timeout"); }
    },
    {
        name: "Cache locale",
        fn: () => ({ cached: true, data: [] })
    }
]);
console.log("  Dati ottenuti:", data);

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// 4. Pattern: Error Context Enrichment
// ============================================
console.log("📋 4. ERROR CONTEXT ENRICHMENT\n");

class EnrichedError extends Error {
    constructor(originalError, context) {
        super(originalError.message);
        this.name = "EnrichedError";
        this.originalError = originalError;
        this.context = context;
        this.timestamp = new Date();
    }
    
    toString() {
        return `
${this.name}: ${this.message}
  Original: ${this.originalError.name}
  Context: ${JSON.stringify(this.context)}
  Time: ${this.timestamp.toISOString()}
        `.trim();
    }
}

function enrichError(error, context) {
    return new EnrichedError(error, context);
}

function processUser(userId) {
    try {
        // Simula operazione che fallisce
        const user = null;
        return user.profile.name; // TypeError
        
    } catch (error) {
        // Arricchisci l'errore con contesto
        throw enrichError(error, {
            operation: 'processUser',
            userId: userId,
            module: 'UserService'
        });
    }
}

try {
    processUser(123);
} catch (error) {
    console.log(error.toString());
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// 5. Pattern: Error Aggregation
// ============================================
console.log("📋 5. ERROR AGGREGATION\n");

class AggregateError extends Error {
    constructor(errors) {
        const messages = errors.map(e => e.message).join('; ');
        super(`Multiple errors: ${messages}`);
        this.name = "AggregateError";
        this.errors = errors;
    }
    
    getErrorsByType(ErrorType) {
        return this.errors.filter(e => e instanceof ErrorType);
    }
    
    hasErrorType(ErrorType) {
        return this.errors.some(e => e instanceof ErrorType);
    }
    
    summarize() {
        const summary = new Map();
        
        this.errors.forEach(error => {
            const name = error.name;
            summary.set(name, (summary.get(name) || 0) + 1);
        });
        
        return Array.from(summary.entries())
            .map(([name, count]) => `${name}: ${count}`)
            .join(', ');
    }
}

// Simula validazione multipla
function validateUser(user) {
    const errors = [];
    
    if (!user.email) {
        errors.push(new TypeError("Email mancante"));
    }
    if (!user.age || user.age < 0) {
        errors.push(new RangeError("Età non valida"));
    }
    if (user.username && user.username.length < 3) {
        errors.push(new TypeError("Username troppo corto"));
    }
    
    if (errors.length > 0) {
        throw new AggregateError(errors);
    }
    
    return true;
}

try {
    validateUser({ age: -5 });
} catch (error) {
    if (error instanceof AggregateError) {
        console.log("❌ Errori di validazione:");
        console.log(`   Totale: ${error.errors.length}`);
        console.log(`   Summary: ${error.summarize()}`);
        console.log("\n   Dettagli:");
        error.errors.forEach((e, i) => {
            console.log(`   ${i + 1}. [${e.name}] ${e.message}`);
        });
    }
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// BEST PRACTICES
// ============================================
console.log("💡 PATTERN GESTIONE ERRORI:\n");

console.log(`
✅ STRATEGIE DI RECOVERY:
   1. Retry - Riprova l'operazione
   2. Fallback - Usa valore di default
   3. Graceful Degradation - Prova alternative
   4. Fail Fast - Fallisci subito
   5. Circuit Breaker - Interrompi dopo N fallimenti

✅ PATTERN UTILI:
   - Handler Map: Gestori per tipo
   - Context Enrichment: Aggiungi info contestuali
   - Error Aggregation: Raccogli errori multipli
   - Error Wrapping: Incapsula errori originali

✅ QUANDO USARE COSA:
   - instanceof: Per tipi built-in e custom
   - error.name: Per string matching
   - error.code: Per error codes applicativi
   - Map/Switch: Per gestione strutturata

❌ EVITA:
   - Gestire tutti gli errori uguale
   - Perdere informazioni originali
   - Ignorare il tipo di errore
   - Recovery non appropriata

📊 DECISION TREE:
   Errore → Tipo?
     ├─ Temporaneo → Retry
     ├─ Validazione → Fallback
     ├─ Critico → Fail Fast
     └─ Altro → Log + Continue
`);
