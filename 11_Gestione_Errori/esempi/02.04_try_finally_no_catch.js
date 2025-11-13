/**
 * 02.04 - Try...Finally senza Catch
 * 
 * Finally può essere usato senza catch.
 * L'errore viene propagato ma il cleanup viene garantito.
 */

console.log("=== TRY...FINALLY (SENZA CATCH) ===\n");

// ============================================
// CASO 1: Cleanup anche senza gestire l'errore
// ============================================
console.log("📋 CASO 1: CLEANUP SENZA GESTIONE ERRORE\n");

function openAndProcessFile(filename, shouldFail = false) {
    let file = { name: filename, isOpen: false };
    
    console.log(`📂 Apertura file: ${filename}`);
    file.isOpen = true;
    
    try {
        console.log("🔄 Processing file...");
        
        if (shouldFail) {
            throw new Error("Errore durante il processing!");
        }
        
        console.log("✅ File processato con successo");
        return "success";
        
    } finally {
        // ✅ Cleanup GARANTITO anche senza catch
        if (file.isOpen) {
            console.log(`📁 Chiusura file: ${filename}`);
            file.isOpen = false;
        }
        console.log("🔒 Cleanup nel finally\n");
    }
}

// Test senza errore
console.log("Test 1.1 - Senza errore:");
try {
    openAndProcessFile("data.txt", false);
} catch (error) {
    console.log("⚠️  Errore catturato all'esterno");
}

console.log("=".repeat(50) + "\n");

// Test con errore (l'errore viene propagato)
console.log("Test 1.2 - Con errore (propagato):");
try {
    openAndProcessFile("data.txt", true);
} catch (error) {
    console.log("⚠️  Errore catturato all'esterno:", error.message);
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// CASO 2: Propagazione Errore con Cleanup
// ============================================
console.log("📋 CASO 2: PROPAGAZIONE ERRORE\n");

function processWithCleanup(data) {
    console.log("1️⃣ Inizio processamento");
    let resource = { active: true };
    
    try {
        console.log("2️⃣ Attivazione risorsa");
        
        if (!data) {
            throw new Error("Dati non validi!");
        }
        
        console.log("3️⃣ Processing dati:", data);
        return `Processed: ${data}`;
        
    } finally {
        console.log("4️⃣ FINALLY - cleanup risorsa");
        resource.active = false;
        console.log("5️⃣ Risorsa disattivata");
        
        // L'errore viene propagato DOPO questo blocco
    }
    
    console.log("❌ Mai eseguito");
}

console.log("Test 2.1 - Dati validi:");
try {
    const result = processWithCleanup("test data");
    console.log("6️⃣ Risultato:", result);
} catch (error) {
    console.log("❌ Errore esterno");
}

console.log("\nTest 2.2 - Dati non validi:");
try {
    const result = processWithCleanup(null);
    console.log("❌ Mai raggiunto");
} catch (error) {
    console.log("6️⃣ Errore catturato all'esterno:", error.message);
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// CASO 3: Multiple Funzioni con Try...Finally
// ============================================
console.log("📋 CASO 3: CHAIN DI FUNZIONI\n");

function level3(shouldFail) {
    console.log("  Level 3: start");
    
    try {
        if (shouldFail) {
            throw new Error("Errore al level 3!");
        }
        console.log("  Level 3: operation");
        return "Level 3 OK";
    } finally {
        console.log("  Level 3: cleanup in finally");
    }
}

function level2(shouldFail) {
    console.log(" Level 2: start");
    
    try {
        const result = level3(shouldFail);
        console.log(" Level 2: got result from level 3");
        return result;
    } finally {
        console.log(" Level 2: cleanup in finally");
    }
}

function level1(shouldFail) {
    console.log("Level 1: start");
    
    try {
        const result = level2(shouldFail);
        console.log("Level 1: got result from level 2");
        return result;
    } finally {
        console.log("Level 1: cleanup in finally");
    }
}

console.log("Test 3.1 - Tutto OK:\n");
try {
    const result = level1(false);
    console.log("\n✅ Risultato finale:", result);
} catch (error) {
    console.log("\n❌ Errore catturato:", error.message);
}

console.log("\n" + "-".repeat(50) + "\n");

console.log("Test 3.2 - Con Errore:\n");
try {
    const result = level1(true);
    console.log("\n❌ Mai raggiunto");
} catch (error) {
    console.log("\n⚠️  Errore propagato attraverso tutti i livelli:", error.message);
    console.log("    Ma TUTTI i finally sono stati eseguiti!");
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// CASO 4: Confronto Try-Catch-Finally vs Try-Finally
// ============================================
console.log("📋 CASO 4: CONFRONTO\n");

console.log("Try-Catch-Finally:");
console.log("  → Gestisce l'errore (catch)");
console.log("  → Garantisce cleanup (finally)");
console.log("  → Esecuzione continua dopo il blocco\n");

console.log("Try-Finally:");
console.log("  → NON gestisce l'errore (lo propaga)");
console.log("  → Garantisce cleanup (finally)");
console.log("  → Errore viene propagato al chiamante\n");

console.log("=".repeat(50) + "\n");

// ============================================
// QUANDO USARE TRY...FINALLY
// ============================================
console.log("💡 QUANDO USARE TRY...FINALLY:\n");

console.log(`
✅ USA Try...Finally QUANDO:
   - Vuoi garantire cleanup ma non gestire l'errore
   - L'errore deve essere propagato al chiamante
   - Hai risorse che DEVONO essere rilasciate
   - Il chiamante gestirà l'errore in modo più appropriato

✅ USA Try...Catch...Finally QUANDO:
   - Vuoi gestire l'errore E garantire cleanup
   - Hai una strategia di recovery
   - Vuoi loggare E continuare l'esecuzione

❌ NON SERVE Try...Finally SE:
   - Non hai risorse da rilasciare
   - Non ti interessa il cleanup
   - Puoi lasciare che l'errore propaghi senza cleanup

📊 PATTERN COMUNE:
   function outer() {
       try {
           inner(); // Può fallire
       } catch (error) {
           // Gestione errore
       }
   }
   
   function inner() {
       try {
           // Operazione rischiosa
       } finally {
           // Cleanup garantito
       }
       // Errore propagato a outer()
   }
`);
