/**
 * 03.01 - Proprietà Base dell'Oggetto Error
 * 
 * Esplora le proprietà standard: name, message, stack
 */

console.log("=== PROPRIETÀ OGGETTO ERROR ===\n");

// ============================================
// Proprietà 1: name
// ============================================
console.log("📋 PROPRIETÀ 1: name\n");

try {
    throw new Error("Errore generico");
} catch (error) {
    console.log("error.name:", error.name);
    console.log("Tipo:", typeof error.name);
    console.log("Descrizione: Nome della classe dell'errore\n");
}

console.log("=".repeat(50) + "\n");

// ============================================
// Proprietà 2: message
// ============================================
console.log("📋 PROPRIETÀ 2: message\n");

try {
    throw new Error("Questo è il messaggio descrittivo dell'errore");
} catch (error) {
    console.log("error.message:", error.message);
    console.log("Tipo:", typeof error.message);
    console.log("Descrizione: Messaggio leggibile dall'uomo\n");
}

console.log("=".repeat(50) + "\n");

// ============================================
// Proprietà 3: stack (Stack Trace)
// ============================================
console.log("📋 PROPRIETÀ 3: stack (Stack Trace)\n");

function livello3() {
    throw new Error("Errore al livello 3");
}

function livello2() {
    livello3();
}

function livello1() {
    livello2();
}

try {
    livello1();
} catch (error) {
    console.log("error.stack:");
    console.log(error.stack);
    console.log("\nLa stack trace mostra:");
    console.log("  1. Tipo e messaggio dell'errore");
    console.log("  2. Sequenza di chiamate (call stack)");
    console.log("  3. File e numeri di riga\n");
}

console.log("=".repeat(50) + "\n");

// ============================================
// Tutte le Proprietà insieme
// ============================================
console.log("📋 TUTTE LE PROPRIETÀ INSIEME\n");

function causaErrore() {
    const obj = null;
    return obj.proprieta; // TypeError
}

try {
    causaErrore();
} catch (error) {
    console.log("┌─────────────────────────────────────┐");
    console.log("│ OGGETTO ERROR COMPLETO              │");
    console.log("├─────────────────────────────────────┤");
    console.log(`│ name:    ${error.name.padEnd(27)}│`);
    console.log(`│ message: ${error.message.substring(0, 27).padEnd(27)}│`);
    console.log("├─────────────────────────────────────┤");
    console.log("│ stack:                              │");
    
    const stackLines = error.stack.split('\n').slice(0, 4);
    stackLines.forEach(line => {
        const truncated = line.substring(0, 35).padEnd(35);
        console.log(`│ ${truncated}│`);
    });
    
    console.log("└─────────────────────────────────────┘\n");
}

console.log("=".repeat(50) + "\n");

// ============================================
// Creazione di Error Personalizzati
// ============================================
console.log("📋 CREAZIONE ERROR CON MESSAGGI CUSTOM\n");

const errors = [
    new Error("Errore semplice"),
    new Error("Utente non autenticato"),
    new Error("File non trovato: config.json"),
    new Error("Connessione database fallita"),
    new Error("Valore non valido: -1")
];

errors.forEach((error, index) => {
    console.log(`Error ${index + 1}:`);
    console.log(`  name:    ${error.name}`);
    console.log(`  message: ${error.message}`);
    console.log();
});

console.log("=".repeat(50) + "\n");

// ============================================
// Confronto Error con e senza Messaggio
// ============================================
console.log("📋 ERROR CON E SENZA MESSAGGIO\n");

try {
    console.log("Test 1: Error senza messaggio");
    throw new Error();
} catch (error) {
    console.log("  name:", error.name);
    console.log("  message:", `"${error.message}"`, "← stringa vuota");
    console.log();
}

try {
    console.log("Test 2: Error con messaggio");
    throw new Error("Qualcosa è andato storto!");
} catch (error) {
    console.log("  name:", error.name);
    console.log("  message:", `"${error.message}"`);
    console.log();
}

console.log("=".repeat(50) + "\n");

// ============================================
// Estrazione Informazioni dalla Stack Trace
// ============================================
console.log("📋 PARSING STACK TRACE\n");

function parseStackTrace(error) {
    const lines = error.stack.split('\n');
    
    console.log("Stack Trace Parser:");
    console.log(`  Errore: ${lines[0]}`);
    console.log(`  Numero di frame: ${lines.length - 1}`);
    console.log("\n  Call Stack:");
    
    lines.slice(1, 4).forEach((line, index) => {
        const match = line.match(/at\s+(.+?)\s+\((.+):(\d+):(\d+)\)/) || 
                     line.match(/at\s+(.+):(\d+):(\d+)/);
        
        if (match) {
            console.log(`    ${index + 1}. Frame: ${line.trim()}`);
        }
    });
}

function testA() {
    testB();
}

function testB() {
    testC();
}

function testC() {
    throw new Error("Errore in testC");
}

try {
    testA();
} catch (error) {
    parseStackTrace(error);
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// RIEPILOGO
// ============================================
console.log("💡 RIEPILOGO PROPRIETÀ ERROR:\n");

console.log(`
┌──────────────┬────────────────────────────────────────┐
│ Proprietà    │ Descrizione                            │
├──────────────┼────────────────────────────────────────┤
│ name         │ Tipo di errore (es. "Error")           │
│ message      │ Messaggio descrittivo                  │
│ stack        │ Stack trace per debugging              │
└──────────────┴────────────────────────────────────────┘

✅ USA:
   - name: per identificare il tipo
   - message: per mostrare all'utente
   - stack: per debugging (non all'utente!)

❌ NON MOSTRARE:
   - stack all'utente finale (security risk)
   - Dettagli interni del sistema
`);
