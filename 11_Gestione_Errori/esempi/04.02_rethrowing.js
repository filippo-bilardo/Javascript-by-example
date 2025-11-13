/**
 * 04.02 - Re-throwing Errors
 * 
 * Come rilanciare errori per gestione a livelli superiori
 */

console.log("=== RE-THROWING ERRORS ===\n");

// ============================================
// 1. Concetto Base di Re-throwing
// ============================================
console.log("📋 1. CONCETTO BASE RE-THROWING\n");

function operazioneRischiosa() {
    throw new TypeError("Errore di tipo nella operazione");
}

function middleware() {
    try {
        operazioneRischiosa();
    } catch (error) {
        console.log("  Middleware: ho catturato un errore");
        console.log(`  → Tipo: ${error.name}`);
        console.log("  → Rilancio per livello superiore...\n");
        throw error; // Re-throw
    }
}

try {
    middleware();
} catch (error) {
    console.log("✅ Livello superiore: errore ricevuto");
    console.log(`   ${error.name}: ${error.message}`);
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// 2. Re-throw Selettivo
// ============================================
console.log("📋 2. RE-THROW SELETTIVO\n");

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function processData(data) {
    try {
        // Simula vari tipi di errori
        if (!data) {
            throw new ValidationError("Dati mancanti");
        }
        if (data.value < 0) {
            throw new RangeError("Valore fuori range");
        }
        if (data.value === 999) {
            throw new Error("Errore database imprevisto");
        }
        
        return data.value * 2;
        
    } catch (error) {
        if (error instanceof ValidationError) {
            console.log("  ✅ Gestisco ValidationError qui");
            console.log(`     Uso valore di default`);
            return 0; // Gestito
            
        } else {
            console.log(`  ⚠️  ${error.name} non gestito qui`);
            console.log(`     Rilancio...`);
            throw error; // Re-throw
        }
    }
}

console.log("Test 1: ValidationError (gestito)\n");
try {
    const result = processData(null);
    console.log(`  Risultato: ${result}\n`);
} catch (error) {
    console.log(`  ❌ Catturato fuori: ${error.message}\n`);
}

console.log("Test 2: RangeError (rilanciato)\n");
try {
    const result = processData({ value: -5 });
    console.log(`  Risultato: ${result}\n`);
} catch (error) {
    console.log(`  ❌ Catturato fuori: ${error.name}`);
    console.log(`     Messaggio: ${error.message}\n`);
}

console.log("=".repeat(50) + "\n");

// ============================================
// 3. Chain di Re-throwing
// ============================================
console.log("📋 3. CHAIN DI RE-THROWING\n");

function livelloDatabase() {
    console.log("  [DB] Eseguo query...");
    throw new Error("Connessione database persa");
}

function livelloService() {
    console.log("[Service] Chiamo database...");
    try {
        livelloDatabase();
    } catch (error) {
        console.log("[Service] Errore DB catturato");
        console.log("[Service] → Rilancio dopo cleanup");
        // Cleanup risorse
        throw error;
    }
}

function livelloAPI() {
    console.log("[API] Chiamo service...");
    try {
        livelloService();
    } catch (error) {
        console.log("[API] Errore service catturato");
        console.log("[API] → Rilancio con logging");
        // Log per monitoring
        throw error;
    }
}

try {
    livelloAPI();
} catch (error) {
    console.log("\n[Controller] Errore finale catturato");
    console.log(`[Controller] → Ritorno errore HTTP 500`);
    console.log(`[Controller] Messaggio: ${error.message}`);
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// 4. Wrapping e Re-throwing
// ============================================
console.log("📋 4. WRAPPING E RE-THROWING\n");

class ApplicationError extends Error {
    constructor(message, originalError) {
        super(message);
        this.name = "ApplicationError";
        this.originalError = originalError;
    }
}

function lowLevelOperation() {
    throw new TypeError("Null reference error");
}

function highLevelOperation() {
    try {
        lowLevelOperation();
    } catch (error) {
        console.log(`  Catturato: ${error.message}`);
        console.log(`  → Wrapping in ApplicationError`);
        
        // Wrap e rilancia
        throw new ApplicationError(
            "Operazione utente fallita",
            error
        );
    }
}

try {
    highLevelOperation();
} catch (error) {
    console.log(`\n✅ ApplicationError catturato:`);
    console.log(`   Messaggio: ${error.message}`);
    console.log(`   Errore originale: ${error.originalError.message}`);
    console.log(`   Tipo originale: ${error.originalError.name}`);
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// 5. Pattern: Retry con Re-throw
// ============================================
console.log("📋 5. RETRY CON RE-THROW\n");

class TransientError extends Error {
    constructor(message) {
        super(message);
        this.name = "TransientError";
        this.retryable = true;
    }
}

let attempts = 0;

function unreliableOperation() {
    attempts++;
    if (attempts < 3) {
        throw new TransientError("Servizio temporaneamente non disponibile");
    }
    return "successo";
}

function operationWithRetry(maxRetries = 3) {
    let lastError;
    
    for (let i = 0; i < maxRetries; i++) {
        try {
            console.log(`  Tentativo ${i + 1}/${maxRetries}...`);
            const result = unreliableOperation();
            console.log(`  ✅ Successo: ${result}`);
            return result;
            
        } catch (error) {
            lastError = error;
            
            if (error instanceof TransientError && i < maxRetries - 1) {
                console.log(`  ⚠️  ${error.message} → Riprovo`);
                continue;
            } else {
                console.log(`  ❌ Errore non recuperabile o max tentativi`);
                break;
            }
        }
    }
    
    // Re-throw ultimo errore
    console.log(`  → Rilancio ultimo errore`);
    throw lastError;
}

try {
    operationWithRetry();
} catch (error) {
    console.log(`\n❌ Fallito definitivamente: ${error.message}`);
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// 6. Enrichment e Re-throwing
// ============================================
console.log("📋 6. ENRICHMENT E RE-THROWING\n");

class EnrichedError extends Error {
    constructor(originalError, context) {
        super(originalError.message);
        this.name = "EnrichedError";
        this.originalError = originalError;
        this.context = context;
        this.timestamp = new Date();
    }
}

function businessOperation(userId, action) {
    try {
        // Simula errore
        const data = null;
        return data.property;
        
    } catch (error) {
        console.log(`  Errore originale: ${error.message}`);
        console.log(`  → Arricchisco con contesto e rilancio`);
        
        throw new EnrichedError(error, {
            userId,
            action,
            module: "BusinessLogic"
        });
    }
}

try {
    businessOperation(123, "updateProfile");
} catch (error) {
    console.log(`\n✅ EnrichedError ricevuto:`);
    console.log(`   Errore: ${error.originalError.name}`);
    console.log(`   Contesto:`, error.context);
    console.log(`   Timestamp: ${error.timestamp.toISOString()}`);
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// 7. Anti-pattern: Re-throw Inutile
// ============================================
console.log("📋 7. ANTI-PATTERN RE-THROW INUTILE\n");

console.log("❌ MALE - Re-throw senza valore aggiunto:\n");

function badRethrow() {
    try {
        throw new Error("Errore originale");
    } catch (error) {
        // Non fa nulla di utile
        throw error;
    }
}

console.log("try {");
console.log("    throw new Error('test');");
console.log("} catch (error) {");
console.log("    throw error; // ❌ Inutile!");
console.log("}");

console.log("\n✅ BENE - Re-throw solo se aggiungi valore:\n");

function goodRethrow() {
    try {
        throw new Error("Errore originale");
    } catch (error) {
        // Log, cleanup, enrichment, etc.
        console.log("  [LOG] Errore catturato, eseguo cleanup");
        // cleanup risorse
        throw error; // ✅ Utile!
    }
}

try {
    goodRethrow();
} catch (error) {
    console.log(`  [Handler] ${error.message}`);
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// PATTERN DECISION TREE
// ============================================
console.log("📋 DECISION TREE RE-THROWING\n");

console.log(`
┌─────────────────────────────────────────┐
│ Errore catturato nel catch              │
└─────────────┬───────────────────────────┘
              │
              ▼
     ┌────────┴────────┐
     │ Posso gestirlo? │
     └────────┬────────┘
              │
        ┌─────┴─────┐
        │           │
       Sì          No
        │           │
        ▼           ▼
  ┌─────────┐  ┌──────────┐
  │ Gestisci│  │ Re-throw │
  │ e return│  │  throw e │
  └─────────┘  └──────────┘
        │           │
        ▼           ▼
     Fine      Livello sup.

QUANDO RE-THROW:
  ✅ Errore fuori dalla tua competenza
  ✅ Dopo cleanup/logging
  ✅ Dopo arricchimento contesto
  ✅ Gestione parziale (alcuni tipi sì, altri no)

QUANDO NON RE-THROW:
  ❌ Puoi gestire completamente
  ❌ Hai una strategia di recovery
  ❌ Errore atteso e gestibile
  ❌ Non aggiungi nessun valore
`);

console.log("=".repeat(50) + "\n");

// ============================================
// RIEPILOGO
// ============================================
console.log("💡 RIEPILOGO RE-THROWING:\n");

console.log(`
✅ SINTASSI BASE:
   catch (error) {
       // Fai qualcosa
       throw error;  // Re-throw
   }

✅ RE-THROW SELETTIVO:
   catch (error) {
       if (error instanceof MyError) {
           // Gestisci
           return defaultValue;
       }
       throw error;  // Altri tipi
   }

✅ WRAPPING:
   catch (error) {
       throw new MyError(
           "Messaggio alto livello",
           error  // Preserva originale
       );
   }

✅ ENRICHMENT:
   catch (error) {
       error.context = { ... };
       throw error;
   }

✅ BEST PRACTICES:
   - Rilancia solo se non puoi gestire
   - Aggiungi sempre valore (log, cleanup, context)
   - Preserva errore originale quando wrappi
   - Documenta quali errori rilanci
   - Usa instanceof per filtrare

❌ EVITA:
   - Re-throw senza valore aggiunto
   - Perdere informazioni originali
   - Creare nuovi errori senza contesto
   - Troppi livelli di wrapping
`);
