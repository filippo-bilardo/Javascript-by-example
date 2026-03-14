/**
 * 02.03 - Finally con Return e Flow Control
 * 
 * Comportamento di finally con return, break, continue
 */

console.log("=== FINALLY CON RETURN E FLOW CONTROL ===\n");

// ============================================
// CASO 1: Return nel Try
// ============================================
console.log("📋 CASO 1: RETURN NEL TRY\n");

function returnInTry() {
    console.log("1️⃣ Inizio funzione");
    
    try {
        console.log("2️⃣ Blocco TRY");
        console.log("3️⃣ RETURN dal try...");
        return "valore dal try";
        console.log("❌ Mai eseguito");
    } catch (error) {
        console.log("❌ CATCH non eseguito");
        return "valore dal catch";
    } finally {
        console.log("4️⃣ FINALLY eseguito PRIMA del return!");
        // Nota: non fare return qui (sovrascrive il return del try)
    }
    
    console.log("❌ Mai eseguito dopo try-catch-finally");
}

const result1 = returnInTry();
console.log("5️⃣ Valore ritornato:", result1);
console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// CASO 2: Return nel Catch
// ============================================
console.log("📋 CASO 2: RETURN NEL CATCH\n");

function returnInCatch() {
    console.log("1️⃣ Inizio funzione");
    
    try {
        console.log("2️⃣ Blocco TRY");
        throw new Error("Errore forzato!");
    } catch (error) {
        console.log("3️⃣ CATCH - errore:", error.message);
        console.log("4️⃣ RETURN dal catch...");
        return "valore dal catch";
    } finally {
        console.log("5️⃣ FINALLY eseguito PRIMA del return!");
    }
    
    console.log("❌ Mai eseguito");
}

const result2 = returnInCatch();
console.log("6️⃣ Valore ritornato:", result2);
console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// CASO 3: Return nel Finally (⚠️ EVITARE!)
// ============================================
console.log("📋 CASO 3: RETURN NEL FINALLY (⚠️ EVITARE!)\n");

function returnInFinally() {
    console.log("1️⃣ Inizio funzione");
    
    try {
        console.log("2️⃣ Blocco TRY");
        return "valore dal try";
    } finally {
        console.log("3️⃣ FINALLY - SOVRASCRIVE il return del try!");
        return "valore dal finally"; // ⚠️ BAD PRACTICE!
    }
}

const result3 = returnInFinally();
console.log("4️⃣ Valore ritornato:", result3);
console.log("⚠️  Il return del try è stato sovrascritto!\n");

console.log("=".repeat(50) + "\n");

// ============================================
// CASO 4: Return Multipli - Confronto
// ============================================
console.log("📋 CASO 4: CONFRONTO RETURN MULTIPLI\n");

function testMultipleReturns(scenario) {
    console.log(`\nTest scenario: ${scenario}`);
    
    try {
        if (scenario === 'success') {
            console.log("  ✅ TRY - return success");
            return "success";
        } else {
            console.log("  ❌ TRY - throw error");
            throw new Error("errore");
        }
    } catch (error) {
        console.log("  🎯 CATCH - return error");
        return "error";
    } finally {
        console.log("  🔒 FINALLY - sempre eseguito");
        // NO return qui!
    }
}

console.log("Risultato:", testMultipleReturns('success'));
console.log("Risultato:", testMultipleReturns('error'));

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// CASO 5: Finally con Loop (break/continue)
// ============================================
console.log("📋 CASO 5: FINALLY CON LOOP\n");

function loopWithFinally() {
    console.log("Loop con finally:\n");
    
    for (let i = 0; i < 5; i++) {
        try {
            console.log(`  Iterazione ${i}:`);
            
            if (i === 2) {
                console.log("    → BREAK!");
                break;
            }
            
            console.log("    → Esecuzione normale");
            
        } finally {
            console.log(`    → FINALLY iterazione ${i}`);
        }
    }
    
    console.log("\nFine loop");
}

loopWithFinally();

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// CASO 6: Finally con Continue
// ============================================
console.log("📋 CASO 6: FINALLY CON CONTINUE\n");

function loopWithContinue() {
    console.log("Loop con continue:\n");
    
    for (let i = 0; i < 5; i++) {
        try {
            console.log(`  Iterazione ${i}:`);
            
            if (i % 2 === 0) {
                console.log("    → CONTINUE (numero pari)");
                continue;
            }
            
            console.log("    → Esecuzione (numero dispari)");
            
        } finally {
            console.log(`    → FINALLY sempre eseguito`);
        }
    }
    
    console.log("\nFine loop");
}

loopWithContinue();

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// BEST PRACTICES
// ============================================
console.log("💡 BEST PRACTICES:\n");

console.log(`
✅ GOOD PRACTICES:
   - Finally viene eseguito PRIMA di return/break/continue
   - Usa finally per cleanup, non per flow control
   - NON fare return nel finally (confusione!)
   - NON modificare il valore di ritorno nel finally

❌ BAD PRACTICES:
   - return nel finally (sovrascrive altri return)
   - Logica business nel finally
   - Ignorare che finally viene sempre eseguito
   - Dimenticare che finally viene prima del return

📊 ORDINE DI ESECUZIONE:
   1. Codice nel try/catch
   2. Blocco finally ← SEMPRE!
   3. Return/break/continue ← DOPO finally
`);
