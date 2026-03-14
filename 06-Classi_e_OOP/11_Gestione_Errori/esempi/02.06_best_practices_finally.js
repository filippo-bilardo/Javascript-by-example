/**
 * 02.06 - Best Practices e Anti-Pattern Finally
 * 
 * Cosa fare e cosa evitare quando usi finally.
 */

console.log("=== BEST PRACTICES & ANTI-PATTERN FINALLY ===\n");

// ============================================
// ✅ GOOD PRACTICE 1: Cleanup Risorse
// ============================================
console.log("✅ GOOD PRACTICE 1: Cleanup Risorse\n");

function goodPractice1() {
    let resource = null;
    
    try {
        resource = { name: "DB Connection", active: true };
        console.log("✅ Risorsa allocata:", resource.name);
        
        // Operazione
        console.log("✅ Operazione completata");
        
    } finally {
        // ✅ GOOD: Cleanup garantito
        if (resource && resource.active) {
            resource.active = false;
            console.log("✅ Risorsa rilasciata nel finally");
        }
    }
}

goodPractice1();
console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// ❌ BAD PRACTICE 1: Return nel Finally
// ============================================
console.log("❌ BAD PRACTICE 1: Return nel Finally\n");

function badPractice1() {
    try {
        console.log("TRY: return 'try'");
        return "try";
    } finally {
        // ❌ BAD: Sovrascrive il return del try!
        console.log("FINALLY: return 'finally'");
        return "finally";
    }
}

console.log("Risultato:", badPractice1());
console.log("⚠️  Il return del try è stato sovrascritto!\n");

// ✅ VERSIONE CORRETTA
function goodPractice1Fixed() {
    let result = "default";
    
    try {
        result = "try";
        console.log("TRY: imposta result = 'try'");
    } finally {
        // ✅ GOOD: Cleanup, non return
        console.log("FINALLY: cleanup (no return)");
    }
    
    return result;
}

console.log("Versione corretta:", goodPractice1Fixed());
console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// ❌ BAD PRACTICE 2: Logica Business nel Finally
// ============================================
console.log("❌ BAD PRACTICE 2: Logica Business nel Finally\n");

function badPractice2(data) {
    let result = null;
    
    try {
        console.log("TRY: validazione dati");
        if (!data) throw new Error("Dati mancanti");
        result = data;
    } catch (error) {
        console.log("CATCH: errore -", error.message);
    } finally {
        // ❌ BAD: Logica business nel finally
        if (result) {
            result = result.toUpperCase();
            console.log("FINALLY: trasformazione dati (BAD!)");
        }
    }
    
    return result;
}

console.log("Risultato:", badPractice2("hello"));
console.log("⚠️  La logica dovrebbe essere nel try/catch!\n");

// ✅ VERSIONE CORRETTA
function goodPractice2Fixed(data) {
    let result = null;
    
    try {
        console.log("TRY: validazione e trasformazione");
        if (!data) throw new Error("Dati mancanti");
        result = data.toUpperCase(); // ✅ Logica nel try
    } catch (error) {
        console.log("CATCH: errore -", error.message);
    } finally {
        // ✅ GOOD: Solo cleanup
        console.log("FINALLY: cleanup risorse");
    }
    
    return result;
}

console.log("Versione corretta:", goodPractice2Fixed("hello"));
console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// ✅ GOOD PRACTICE 2: Null Check nel Finally
// ============================================
console.log("✅ GOOD PRACTICE 2: Null Check nel Finally\n");

function goodPractice2() {
    let resource = null;
    
    try {
        // Resource potrebbe non essere allocata se c'è errore
        resource = allocateResource();
        useResource(resource);
        
    } catch (error) {
        console.log("Errore:", error.message);
        
    } finally {
        // ✅ GOOD: Verifica che resource esista
        if (resource) {
            releaseResource(resource);
            console.log("✅ Risorsa rilasciata (con null check)");
        } else {
            console.log("ℹ️  Nessuna risorsa da rilasciare");
        }
    }
}

function allocateResource() {
    return { id: 1, name: "Resource" };
}

function useResource(r) {
    console.log("Uso risorsa:", r.name);
}

function releaseResource(r) {
    console.log("Rilascio risorsa:", r.name);
}

goodPractice2();
console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// ❌ BAD PRACTICE 3: Throw nel Finally
// ============================================
console.log("❌ BAD PRACTICE 3: Throw nel Finally\n");

function badPractice3() {
    try {
        console.log("TRY: operazione normale");
        throw new Error("Errore originale");
        
    } catch (error) {
        console.log("CATCH: errore -", error.message);
        
    } finally {
        // ❌ BAD: Throw nel finally nasconde l'errore originale!
        console.log("FINALLY: throw nuovo errore (BAD!)");
        throw new Error("Errore nel finally");
    }
}

try {
    badPractice3();
} catch (error) {
    console.log("⚠️  Catturato:", error.message);
    console.log("   L'errore originale è stato perso!\n");
}

// ✅ VERSIONE CORRETTA
function goodPractice3Fixed() {
    let cleanupError = null;
    
    try {
        console.log("TRY: operazione normale");
        throw new Error("Errore originale");
        
    } catch (error) {
        console.log("CATCH: errore -", error.message);
        throw error; // Ri-lancia l'errore
        
    } finally {
        try {
            // ✅ GOOD: Gestisci errori di cleanup separatamente
            console.log("FINALLY: cleanup (con try interno)");
            // cleanup che potrebbe fallire
        } catch (err) {
            cleanupError = err;
            console.log("⚠️  Errore cleanup:", err.message);
        }
    }
}

try {
    goodPractice3Fixed();
} catch (error) {
    console.log("✅ Catturato errore originale:", error.message);
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// ✅ GOOD PRACTICE 3: Finally Specifico
// ============================================
console.log("✅ GOOD PRACTICE 3: Finally Specifico\n");

function goodPractice3() {
    let connection = null;
    let transaction = null;
    
    try {
        connection = openConnection();
        transaction = beginTransaction(connection);
        
        performOperation(transaction);
        commitTransaction(transaction);
        
    } catch (error) {
        if (transaction) {
            rollbackTransaction(transaction);
        }
        console.log("Errore:", error.message);
        
    } finally {
        // ✅ GOOD: Finally specifico per ogni risorsa
        if (transaction) {
            closeTransaction(transaction);
        }
        if (connection) {
            closeConnection(connection);
        }
        console.log("✅ Tutte le risorse rilasciate");
    }
}

// Funzioni helper
function openConnection() {
    console.log("  🔌 Connection opened");
    return { id: 1 };
}

function closeConnection(c) {
    console.log("  🔌 Connection closed");
}

function beginTransaction(c) {
    console.log("  📊 Transaction started");
    return { id: 1, conn: c };
}

function closeTransaction(t) {
    console.log("  📊 Transaction closed");
}

function commitTransaction(t) {
    console.log("  ✅ Transaction committed");
}

function rollbackTransaction(t) {
    console.log("  ⏪ Transaction rolled back");
}

function performOperation(t) {
    console.log("  ⚙️  Operation performed");
}

goodPractice3();
console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// ❌ BAD PRACTICE 4: Finally Vuoto
// ============================================
console.log("❌ BAD PRACTICE 4: Finally Vuoto\n");

function badPractice4() {
    try {
        console.log("TRY: operazione");
    } catch (error) {
        console.log("CATCH: errore");
    } finally {
        // ❌ BAD: Finally vuoto - perché c'è?
    }
}

console.log("⚠️  Finally vuoto è inutile - rimuovilo!\n");

console.log("=".repeat(50) + "\n");

// ============================================
// RIEPILOGO BEST PRACTICES
// ============================================
console.log("📋 RIEPILOGO BEST PRACTICES:\n");

console.log(`
✅ DO (FARE):
   1. Usa finally per cleanup risorse
   2. Fai null check prima di rilasciare
   3. Gestisci multipli errori separatamente
   4. Documenta perché usi finally
   5. Mantieni finally semplice e chiaro
   6. Usa try interno per cleanup rischioso

❌ DON'T (NON FARE):
   1. Return nel finally (confonde!)
   2. Logica business nel finally
   3. Throw nel finally (nasconde errori)
   4. Finally vuoto (inutile)
   5. Modificare valori di ritorno
   6. Assumere che risorse esistano

💡 QUANDO USARE FINALLY:
   ✅ Chiudere file/connessioni
   ✅ Rilasciare lock
   ✅ Cancellare timer
   ✅ Rimuovere listener
   ✅ Ripristinare UI state
   ✅ Logging finale

❌ QUANDO NON SERVE:
   ❌ Semplice gestione errori
   ❌ Nessuna risorsa da rilasciare
   ❌ Nessun cleanup necessario

📊 PATTERN IDIOMATICO:
   let resource = null;
   try {
       resource = acquire();
       use(resource);
   } catch (error) {
       handleError(error);
   } finally {
       if (resource) {
           release(resource);
       }
   }
`);
