/**
 * 04.01 - Throw Base
 * 
 * Come lanciare errori manualmente con throw
 */

console.log("=== THROW BASE ===\n");

// ============================================
// 1. Throw con Error Object
// ============================================
console.log("📋 1. THROW CON ERROR OBJECT\n");

function dividi(a, b) {
    if (b === 0) {
        throw new Error("Divisione per zero non consentita");
    }
    return a / b;
}

console.log("Test 1: Divisione normale");
try {
    const risultato = dividi(10, 2);
    console.log(`  10 / 2 = ${risultato}`);
} catch (error) {
    console.log(`  ❌ Errore: ${error.message}`);
}

console.log("\nTest 2: Divisione per zero");
try {
    const risultato = dividi(10, 0);
    console.log(`  10 / 0 = ${risultato}`);
} catch (error) {
    console.log(`  ❌ Errore catturato: ${error.message}`);
    console.log(`  ✅ Programma continua normalmente`);
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// 2. Cosa si può Lanciare
// ============================================
console.log("📋 2. COSA SI PUÒ LANCIARE\n");

// Puoi lanciare qualsiasi tipo (ma non è raccomandato!)
console.log("Esempio 2.1: Lanciare una stringa (❌ non raccomandato)");
try {
    throw "Questo è un errore stringa";
} catch (error) {
    console.log(`  Catturato: ${error}`);
    console.log(`  Tipo: ${typeof error}`);
    console.log(`  Ha .stack? ${error.stack !== undefined}`);
}

console.log("\nEsempio 2.2: Lanciare un numero (❌ non raccomandato)");
try {
    throw 404;
} catch (error) {
    console.log(`  Catturato: ${error}`);
    console.log(`  Tipo: ${typeof error}`);
}

console.log("\nEsempio 2.3: Lanciare un oggetto generico (❌ non raccomandato)");
try {
    throw { code: 500, msg: "Server error" };
} catch (error) {
    console.log(`  Catturato:`, error);
    console.log(`  Ha .stack? ${error.stack !== undefined}`);
}

console.log("\nEsempio 2.4: Lanciare Error object (✅ raccomandato)");
try {
    throw new Error("Errore corretto");
} catch (error) {
    console.log(`  Catturato: ${error.message}`);
    console.log(`  Tipo: ${error.constructor.name}`);
    console.log(`  Ha .stack? ${error.stack !== undefined} ✓`);
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// 3. Interruzione del Flusso
// ============================================
console.log("📋 3. INTERRUZIONE DEL FLUSSO\n");

function processaOrdine(ordine) {
    console.log(`1️⃣ Inizio elaborazione ordine ${ordine.id}`);
    
    if (!ordine.prodotto) {
        console.log("2️⃣ Validazione fallita: prodotto mancante");
        throw new Error("Prodotto non specificato");
    }
    
    console.log("2️⃣ Validazione OK");
    console.log("3️⃣ Calcolo totale...");
    console.log("4️⃣ Salvataggio database...");
    console.log("5️⃣ Invio conferma email...");
    
    return { success: true };
}

console.log("Test A: Ordine valido\n");
try {
    processaOrdine({ id: 1, prodotto: "Laptop" });
    console.log("✅ Ordine completato\n");
} catch (error) {
    console.log(`❌ Ordine fallito: ${error.message}\n`);
}

console.log("Test B: Ordine non valido\n");
try {
    processaOrdine({ id: 2 }); // Manca prodotto
    console.log("✅ Ordine completato\n");
} catch (error) {
    console.log(`❌ Ordine fallito: ${error.message}`);
    console.log("   → I passi 3, 4, 5 NON sono eseguiti ✓\n");
}

console.log("=".repeat(50) + "\n");

// ============================================
// 4. Throw in Funzioni Annidate
// ============================================
console.log("📋 4. THROW IN FUNZIONI ANNIDATE\n");

function livello3() {
    console.log("    Livello 3: eseguo operazione...");
    throw new Error("Errore al livello 3");
}

function livello2() {
    console.log("  Livello 2: chiamo livello 3...");
    livello3();
    console.log("  Livello 2: completo (mai eseguito)");
}

function livello1() {
    console.log("Livello 1: chiamo livello 2...");
    livello2();
    console.log("Livello 1: completo (mai eseguito)");
}

try {
    livello1();
} catch (error) {
    console.log(`\n❌ Catturato al top level: ${error.message}`);
    console.log("   → L'errore risale la call stack fino al catch");
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// 5. Throw con Tipi di Errore Specifici
// ============================================
console.log("📋 5. TIPI DI ERRORE SPECIFICI\n");

function accediProprieta(obj, prop) {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError("Il primo argomento deve essere un oggetto");
    }
    
    if (!(prop in obj)) {
        throw new ReferenceError(`La proprietà '${prop}' non esiste`);
    }
    
    return obj[prop];
}

console.log("Test 1: Tipo sbagliato");
try {
    accediProprieta("stringa", "length");
} catch (error) {
    console.log(`  ${error.name}: ${error.message}`);
}

console.log("\nTest 2: Proprietà inesistente");
try {
    accediProprieta({ nome: "Mario" }, "età");
} catch (error) {
    console.log(`  ${error.name}: ${error.message}`);
}

console.log("\nTest 3: Tutto OK");
try {
    const valore = accediProprieta({ nome: "Mario" }, "nome");
    console.log(`  ✅ Valore: ${valore}`);
} catch (error) {
    console.log(`  ${error.name}: ${error.message}`);
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// 6. Throw vs Return
// ============================================
console.log("📋 6. THROW VS RETURN\n");

console.log("Approccio 1: Return con codici errore (vecchio stile)\n");

function trovaUtenteReturn(id) {
    if (id < 0) {
        return { error: true, message: "ID non valido" };
    }
    if (id > 1000) {
        return { error: true, message: "Utente non trovato" };
    }
    return { error: false, data: { id, nome: "Mario" } };
}

const result1 = trovaUtenteReturn(-5);
if (result1.error) {
    console.log(`  ❌ ${result1.message}`);
} else {
    console.log(`  ✅ ${result1.data.nome}`);
}

console.log("\nApproccio 2: Throw con eccezioni (moderno)\n");

function trovaUtenteThrow(id) {
    if (id < 0) {
        throw new RangeError("ID non valido");
    }
    if (id > 1000) {
        throw new Error("Utente non trovato");
    }
    return { id, nome: "Mario" };
}

try {
    const result2 = trovaUtenteThrow(-5);
    console.log(`  ✅ ${result2.nome}`);
} catch (error) {
    console.log(`  ❌ ${error.message}`);
}

console.log("\nVantaggi di throw:");
console.log("  • Separazione path normale da path errore");
console.log("  • Non serve controllare ogni return");
console.log("  • Stack trace automatica");
console.log("  • Errore non può essere ignorato accidentalmente");

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// 7. Quando Usare Throw
// ============================================
console.log("📋 7. QUANDO USARE THROW\n");

console.log("✅ USA THROW per:\n");

function validateEmail(email) {
    if (!email) {
        throw new Error("Email obbligatoria");
    }
    if (!email.includes("@")) {
        throw new Error("Email non valida");
    }
    console.log("  ✓ Email valida");
}

console.log("1. Validazione input:");
try {
    validateEmail("test");
} catch (e) {
    console.log(`   ${e.message}`);
}

console.log("\n2. Precondizioni violate:");
function withdraw(amount, balance) {
    if (amount > balance) {
        throw new Error("Saldo insufficiente");
    }
    return balance - amount;
}

try {
    withdraw(100, 50);
} catch (e) {
    console.log(`   ${e.message}`);
}

console.log("\n3. Stati impossibili:");
function getStatus(code) {
    const statuses = { 200: "OK", 404: "Not Found", 500: "Error" };
    if (!(code in statuses)) {
        throw new Error(`Status code ${code} non riconosciuto`);
    }
    return statuses[code];
}

try {
    getStatus(999);
} catch (e) {
    console.log(`   ${e.message}`);
}

console.log("\n❌ NON USARE THROW per:\n");

console.log("1. Flusso di controllo normale:");
function findUser(id) {
    // ❌ MALE
    // if (id > 100) throw new Error("Not found");
    
    // ✅ BENE
    if (id > 100) return null;
    
    return { id, name: "User" };
}

console.log("   → Usa return null o undefined");

console.log("\n2. Condizioni attese:");
function isEmpty(array) {
    // ❌ MALE
    // if (array.length === 0) throw new Error("Empty");
    
    // ✅ BENE
    return array.length === 0;
}

console.log("   → Usa return boolean");

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// RIEPILOGO
// ============================================
console.log("💡 RIEPILOGO THROW:\n");

console.log(`
✅ SINTASSI:
   throw new Error("messaggio");
   throw new TypeError("messaggio");
   throw new RangeError("messaggio");

✅ COMPORTAMENTO:
   - Interrompe l'esecuzione immediatamente
   - Risale la call stack fino al catch
   - Se non catturato, crasha il programma

✅ BEST PRACTICES:
   - Lancia sempre oggetti Error (non stringhe/numeri)
   - Usa tipi specifici (TypeError, RangeError, etc)
   - Messaggi chiari e descrittivi
   - Documenta quali errori lancia la funzione

✅ QUANDO LANCIARE:
   - Condizioni eccezionali
   - Precondizioni violate
   - Validazione fallita
   - Stati impossibili
   - Errori non recuperabili

❌ QUANDO NON LANCIARE:
   - Flusso di controllo normale
   - Condizioni attese (usa return)
   - Performance critical (loop intensi)
   - Situazioni recuperabili facilmente

📊 PATTERN:
   if (condizione_non_valida) {
       throw new ErrorType("Messaggio descrittivo");
   }
   // Continua solo se tutto OK
`);
