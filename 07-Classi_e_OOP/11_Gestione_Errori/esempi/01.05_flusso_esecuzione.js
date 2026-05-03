/**
 * 01.05 - Flusso di Esecuzione Try...Catch
 * 
 * Questo esempio mostra passo-passo come funziona il flusso
 * di esecuzione con try...catch.
 */

console.log("=== FLUSSO DI ESECUZIONE TRY...CATCH ===\n");

// ============================================
// SCENARIO 1: Nessun Errore
// ============================================
console.log("📊 SCENARIO 1: NESSUN ERRORE\n");

function scenario1() {
    console.log("1️⃣ Inizio funzione");
    
    try {
        console.log("2️⃣ Entrato nel blocco TRY");
        console.log("3️⃣ Eseguo operazione sicura...");
        
        let x = 10;
        let y = 20;
        let risultato = x + y;
        
        console.log("4️⃣ Operazione completata:", risultato);
        console.log("5️⃣ Uscita dal blocco TRY");
    } catch (error) {
        // Questo blocco viene SALTATO
        console.log("❌ Questo NON viene eseguito (nessun errore)");
    }
    
    console.log("6️⃣ Dopo try...catch - esecuzione normale");
    console.log("7️⃣ Fine funzione\n");
}

scenario1();

console.log("=".repeat(50) + "\n");

// ============================================
// SCENARIO 2: Con Errore
// ============================================
console.log("📊 SCENARIO 2: CON ERRORE\n");

function scenario2() {
    console.log("1️⃣ Inizio funzione");
    
    try {
        console.log("2️⃣ Entrato nel blocco TRY");
        console.log("3️⃣ Eseguo operazione pericolosa...");
        
        let obj = null;
        let risultato = obj.proprieta; // ❌ ERRORE!
        
        // Questa riga NON viene eseguita
        console.log("❌ Questa riga viene saltata");
    } catch (error) {
        // Il controllo passa QUI
        console.log("4️⃣ ⚡ ERRORE! Entrato nel blocco CATCH");
        console.log("5️⃣ Tipo errore:", error.name);
        console.log("6️⃣ Messaggio:", error.message);
        console.log("7️⃣ Errore gestito");
    }
    
    console.log("8️⃣ Dopo try...catch - esecuzione continua");
    console.log("9️⃣ Fine funzione\n");
}

scenario2();

console.log("=".repeat(50) + "\n");

// ============================================
// SCENARIO 3: Multipli Try...Catch
// ============================================
console.log("📊 SCENARIO 3: MULTIPLI TRY...CATCH\n");

function scenario3() {
    console.log("1️⃣ Inizio funzione");
    
    // Primo try...catch
    try {
        console.log("2️⃣ Primo TRY - operazione sicura");
        let a = 5 + 5;
        console.log("3️⃣ Risultato:", a);
    } catch (error) {
        console.log("❌ Primo CATCH - non eseguito");
    }
    
    console.log("4️⃣ Tra i due blocchi try...catch");
    
    // Secondo try...catch
    try {
        console.log("5️⃣ Secondo TRY - operazione pericolosa");
        let b = variabileNonEsistente; // ❌ ERRORE!
        console.log("❌ Questa riga viene saltata");
    } catch (error) {
        console.log("6️⃣ Secondo CATCH - gestisce l'errore");
        console.log("7️⃣ Errore:", error.message);
    }
    
    console.log("8️⃣ Fine funzione\n");
}

scenario3();

console.log("=".repeat(50) + "\n");

// ============================================
// SCENARIO 4: Try...Catch Annidati
// ============================================
console.log("📊 SCENARIO 4: TRY...CATCH ANNIDATI\n");

function scenario4() {
    console.log("1️⃣ Inizio funzione");
    
    try {
        console.log("2️⃣ TRY esterno - inizio");
        
        try {
            console.log("3️⃣ TRY interno - inizio");
            let x = undefined.metodo(); // ❌ ERRORE!
            console.log("❌ Non eseguito");
        } catch (innerError) {
            console.log("4️⃣ CATCH interno - cattura l'errore");
            console.log("5️⃣ Errore interno:", innerError.message);
        }
        
        console.log("6️⃣ TRY esterno - continua dopo catch interno");
        
    } catch (outerError) {
        console.log("❌ CATCH esterno - non eseguito");
    }
    
    console.log("7️⃣ Fine funzione\n");
}

scenario4();

console.log("=".repeat(50) + "\n");

// ============================================
// DIAGRAMMA FLUSSO
// ============================================
console.log("📋 DIAGRAMMA DI FLUSSO:\n");
console.log("┌─────────────────────────────────────┐");
console.log("│  1. Inizio esecuzione               │");
console.log("└─────────────────────────────────────┘");
console.log("              ↓");
console.log("┌─────────────────────────────────────┐");
console.log("│  2. Entra nel blocco TRY            │");
console.log("└─────────────────────────────────────┘");
console.log("              ↓");
console.log("        ┌─────┴─────┐");
console.log("        │           │");
console.log("    ERRORE?      NESSUN ERRORE?");
console.log("        │           │");
console.log("        ↓           ↓");
console.log("   ┌─────────┐  ┌─────────────────┐");
console.log("   │  CATCH  │  │  Salta CATCH    │");
console.log("   └─────────┘  └─────────────────┘");
console.log("        │           │");
console.log("        └─────┬─────┘");
console.log("              ↓");
console.log("┌─────────────────────────────────────┐");
console.log("│  3. Continua dopo try...catch       │");
console.log("└─────────────────────────────────────┘");
console.log("              ↓");
console.log("┌─────────────────────────────────────┐");
console.log("│  4. Fine esecuzione                 │");
console.log("└─────────────────────────────────────┘");
