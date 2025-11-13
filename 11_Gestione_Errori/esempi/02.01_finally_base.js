/**
 * 02.01 - Finally Base - Esecuzione Garantita
 * 
 * Il blocco finally viene SEMPRE eseguito, indipendentemente da:
 * - Se si verifica un errore
 * - Se l'errore viene catturato
 * - Se c'è un return
 */

console.log("=== FINALLY - ESECUZIONE GARANTITA ===\n");

// ============================================
// SCENARIO 1: Nessun Errore
// ============================================
console.log("📊 SCENARIO 1: NESSUN ERRORE\n");

function scenario1() {
    console.log("1️⃣ Inizio funzione");
    
    try {
        console.log("2️⃣ Blocco TRY - operazione sicura");
        let x = 10 + 20;
        console.log("3️⃣ Risultato:", x);
    } catch (error) {
        console.log("❌ Blocco CATCH - non eseguito (nessun errore)");
    } finally {
        console.log("4️⃣ Blocco FINALLY - eseguito SEMPRE!");
    }
    
    console.log("5️⃣ Fine funzione\n");
}

scenario1();

console.log("=".repeat(50) + "\n");

// ============================================
// SCENARIO 2: Con Errore Gestito
// ============================================
console.log("📊 SCENARIO 2: CON ERRORE (GESTITO)\n");

function scenario2() {
    console.log("1️⃣ Inizio funzione");
    
    try {
        console.log("2️⃣ Blocco TRY - operazione pericolosa");
        let obj = null;
        obj.metodo(); // ❌ ERRORE!
        console.log("❌ Non eseguito");
    } catch (error) {
        console.log("3️⃣ Blocco CATCH - errore catturato:", error.name);
    } finally {
        console.log("4️⃣ Blocco FINALLY - eseguito anche dopo errore!");
    }
    
    console.log("5️⃣ Fine funzione\n");
}

scenario2();

console.log("=".repeat(50) + "\n");

// ============================================
// SCENARIO 3: Try...Finally (senza catch)
// ============================================
console.log("📊 SCENARIO 3: TRY...FINALLY (SENZA CATCH)\n");

function scenario3() {
    console.log("1️⃣ Inizio funzione");
    
    try {
        console.log("2️⃣ Blocco TRY - operazione sicura");
        let x = 100 / 2;
        console.log("3️⃣ Risultato:", x);
    } finally {
        console.log("4️⃣ Blocco FINALLY - eseguito (no catch!)");
    }
    
    console.log("5️⃣ Fine funzione\n");
}

scenario3();

console.log("=".repeat(50) + "\n");

// ============================================
// SCENARIO 4: Finally con Return
// ============================================
console.log("📊 SCENARIO 4: FINALLY CON RETURN\n");

function scenario4() {
    console.log("1️⃣ Inizio funzione");
    
    try {
        console.log("2️⃣ Blocco TRY");
        console.log("3️⃣ Eseguo RETURN...");
        return "valore di ritorno";
        console.log("❌ Questa riga non viene mai raggiunta");
    } finally {
        console.log("4️⃣ Blocco FINALLY - eseguito PRIMA del return!");
    }
    
    console.log("❌ Questa riga non viene mai raggiunta\n");
}

const result = scenario4();
console.log("5️⃣ Risultato ricevuto:", result);

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// TABELLA RIEPILOGATIVA
// ============================================
console.log("📋 TABELLA RIEPILOGATIVA:\n");
console.log("┌─────────────────────┬──────┬────────┬─────────┐");
console.log("│ Scenario            │ TRY  │ CATCH  │ FINALLY │");
console.log("├─────────────────────┼──────┼────────┼─────────┤");
console.log("│ Nessun errore       │  ✅  │   ❌  │   ✅    │");
console.log("│ Errore gestito      │  ⚠️  │   ✅  │   ✅    │");
console.log("│ Con return          │  ✅  │   -    │   ✅   │");
console.log("│ Errore non gestito  │  ⚠️  │   ❌  │   ✅    │");
console.log("└─────────────────────┴──────┴────────┴─────────┘\n");

console.log("💡 REGOLA D'ORO: Finally viene SEMPRE eseguito!\n");
