/**
 * 01.06 - Best Practices Try...Catch
 * 
 * Buone pratiche e anti-pattern nell'uso di try...catch.
 */

console.log("=== BEST PRACTICES TRY...CATCH ===\n");

// ============================================
// ✅ GOOD: Blocco Try Specifico
// ============================================
console.log("✅ GOOD PRACTICE 1: Try su codice specifico\n");

function goodPractice1() {
    console.log("Inizio operazione");
    
    let data;
    // ✅ Try solo sul codice che può fallire
    try {
        data = JSON.parse('{"nome": "Mario"}');
    } catch (error) {
        console.error("Errore parsing:", error.message);
        data = {}; // Default
    }
    
    // Resto del codice fuori dal try
    console.log("Processing data:", data);
    console.log("Fine operazione");
}

goodPractice1();
console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// ❌ BAD: Try su tutto il codice
// ============================================
console.log("❌ BAD PRACTICE 1: Try su troppo codice\n");

function badPractice1() {
    // ❌ Try su tutto - difficile capire dove è l'errore
    try {
        console.log("Inizio operazione");
        let data = JSON.parse('{"nome": "Mario"}');
        console.log("Processing data:", data);
        // Tanto altro codice...
        console.log("Fine operazione");
    } catch (error) {
        // Quale operazione è fallita? 🤷
        console.error("Errore generico:", error.message);
    }
}

badPractice1();
console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// ✅ GOOD: Messaggi di errore descrittivi
// ============================================
console.log("✅ GOOD PRACTICE 2: Messaggi descrittivi\n");

function loadUserData(userId) {
    try {
        if (!userId) {
            throw new Error("UserID mancante");
        }
        // Simula caricamento
        return { id: userId, name: "Mario" };
    } catch (error) {
        // ✅ Messaggio chiaro con contesto
        console.error(`❌ Impossibile caricare user ${userId}:`, error.message);
        return null;
    }
}

loadUserData(null);
console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// ✅ GOOD: Ritorna valori di default sensati
// ============================================
console.log("✅ GOOD PRACTICE 3: Valori di default\n");

function getConfigValue(key) {
    try {
        const config = JSON.parse('{"theme": "dark"}');
        return config[key];
    } catch (error) {
        console.log("Config non valida, uso default");
        // ✅ Default sensato
        return key === 'theme' ? 'light' : null;
    }
}

console.log("Theme:", getConfigValue('theme'));
console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// ❌ BAD: Catch vuoto o che nasconde errori
// ============================================
console.log("❌ BAD PRACTICE 2: Catch vuoto\n");

function badPractice2() {
    try {
        let x = variabileNonEsistente;
    } catch (error) {
        // ❌ Catch vuoto - "silently fail"
        // L'errore viene nascosto!
    }
    
    console.log("⚠️ L'errore è stato nascosto - problematico per il debugging!");
}

badPractice2();
console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// ✅ GOOD: Log degli errori anche se gestiti
// ============================================
console.log("✅ GOOD PRACTICE 4: Log sempre gli errori\n");

function goodPractice4() {
    try {
        let x = variabileNonEsistente;
    } catch (error) {
        // ✅ Anche se gestisci, logga per debugging
        console.error("⚠️ Errore catturato:", error.name, error.message);
        // Poi gestisci come necessario
    }
}

goodPractice4();
console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// ✅ GOOD: Distinzione per tipo di errore
// ============================================
console.log("✅ GOOD PRACTICE 5: Gestione per tipo\n");

function processData(data) {
    try {
        if (data === null) {
            throw new TypeError("Data è null");
        }
        if (typeof data !== 'object') {
            throw new TypeError("Data deve essere un oggetto");
        }
        return data;
    } catch (error) {
        if (error instanceof TypeError) {
            console.error("❌ Errore di tipo:", error.message);
        } else {
            console.error("❌ Errore generico:", error.message);
        }
        return {};
    }
}

processData(null);
processData("stringa");
console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// ✅ GOOD: Non usare try...catch per flow control
// ============================================
console.log("✅ GOOD PRACTICE 6: Non usare per flow control\n");

// ❌ BAD - usa try...catch per logica
function badFlowControl(arr, index) {
    try {
        return arr[index];
    } catch (error) {
        return undefined;
    }
}

// ✅ GOOD - usa if per validazione
function goodFlowControl(arr, index) {
    if (!arr || index < 0 || index >= arr.length) {
        return undefined;
    }
    return arr[index];
}

const testArr = [1, 2, 3];
console.log("Bad approach:", badFlowControl(testArr, 10));
console.log("Good approach:", goodFlowControl(testArr, 10));

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// RIEPILOGO BEST PRACTICES
// ============================================
console.log("📋 RIEPILOGO BEST PRACTICES:\n");
console.log("✅ 1. Usa try su blocchi di codice SPECIFICI");
console.log("✅ 2. Scrivi messaggi di errore DESCRITTIVI");
console.log("✅ 3. Ritorna valori di default SENSATI");
console.log("✅ 4. LOGGA sempre gli errori (anche se gestiti)");
console.log("✅ 5. Distingui per TIPO di errore quando serve");
console.log("✅ 6. NON usare try...catch per flow control");
console.log("✅ 7. Non lasciare mai catch VUOTI");
console.log("✅ 8. Documenta perché usi try...catch");
