/**
 * 01.03 - Esplorazione dell'Oggetto Error
 * 
 * Questo esempio mostra le proprietà dell'oggetto Error catturato
 * nel blocco catch.
 */

console.log("=== OGGETTO ERROR - PROPRIETÀ ===\n");

// Test 1: ReferenceError
console.log("📋 Test 1: ReferenceError\n");
try {
    let x = variabileNonEsistente;
} catch (error) {
    console.log("Tipo errore (name):", error.name);
    console.log("Messaggio (message):", error.message);
    console.log("Stack trace (stack):");
    console.log(error.stack);
    console.log("\n" + "=".repeat(50) + "\n");
}

// Test 2: TypeError
console.log("📋 Test 2: TypeError\n");
try {
    let obj = null;
    obj.metodoInesistente();
} catch (error) {
    console.log("Tipo errore (name):", error.name);
    console.log("Messaggio (message):", error.message);
    console.log("Stack trace (stack):");
    console.log(error.stack);
    console.log("\n" + "=".repeat(50) + "\n");
}

// Test 3: RangeError
console.log("📋 Test 3: RangeError\n");
try {
    let arr = new Array(-1); // Lunghezza negativa non valida
} catch (error) {
    console.log("Tipo errore (name):", error.name);
    console.log("Messaggio (message):", error.message);
    console.log("\n" + "=".repeat(50) + "\n");
}

// Test 4: SyntaxError (con JSON.parse)
console.log("📋 Test 4: SyntaxError (JSON non valido)\n");
try {
    JSON.parse("{chiave: 'valore non valido'}");
} catch (error) {
    console.log("Tipo errore (name):", error.name);
    console.log("Messaggio (message):", error.message);
    console.log("\n" + "=".repeat(50) + "\n");
}

// Riepilogo proprietà
console.log("📦 RIEPILOGO PROPRIETÀ OGGETTO ERROR:\n");
console.log("• name:    Tipo di errore (ReferenceError, TypeError, etc.)");
console.log("• message: Descrizione leggibile dell'errore");
console.log("• stack:   Traccia completa dello stack (dove è avvenuto)\n");

console.log("💡 USO PRATICO:");
console.log("  - name: per distinguere diversi tipi di errori");
console.log("  - message: per mostrare messaggi all'utente");
console.log("  - stack: per debugging (NON mostrare all'utente!)");
