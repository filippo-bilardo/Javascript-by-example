/**
 * 01.04 - Casi Pratici di Try...Catch
 * 
 * Esempi reali di quando e come usare try...catch.
 */

console.log("=== CASI PRATICI TRY...CATCH ===\n");

// ============================================
// CASO 1: JSON Parsing Sicuro
// ============================================
console.log("📋 CASO 1: JSON Parsing\n");

function parseJSONSafe(jsonString) {
    try {
        const data = JSON.parse(jsonString);
        console.log("✅ JSON parsing riuscito!");
        return data;
    } catch (error) {
        console.error("❌ JSON non valido:", error.message);
        return null; // Valore di fallback
    }
}

// Test con JSON valido
console.log("Test 1.1 - JSON valido:");
const validJSON = '{"nome": "Mario", "età": 30}';
const result1 = parseJSONSafe(validJSON);
console.log("Risultato:", result1);

console.log("\nTest 1.2 - JSON non valido:");
const invalidJSON = '{nome: "Mario"}'; // Chiavi senza virgolette
const result2 = parseJSONSafe(invalidJSON);
console.log("Risultato:", result2);

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// CASO 2: Accesso Sicuro a Proprietà
// ============================================
console.log("📋 CASO 2: Accesso Sicuro a Proprietà Annidate\n");

function getUserAge(user) {
    try {
        // Questa catena potrebbe fallire se user o profile sono null/undefined
        return user.profile.age;
    } catch (error) {
        console.log("⚠️ Impossibile ottenere età:", error.message);
        return 0; // Età di default
    }
}

// Test con oggetto valido
console.log("Test 2.1 - Oggetto valido:");
const user1 = { profile: { age: 25 } };
console.log("Età:", getUserAge(user1));

// Test con profile null
console.log("\nTest 2.2 - Profile null:");
const user2 = { profile: null };
console.log("Età:", getUserAge(user2));

// Test con user null
console.log("\nTest 2.3 - User null:");
const user3 = null;
console.log("Età:", getUserAge(user3));

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// CASO 3: Conversione Numerica Sicura
// ============================================
console.log("📋 CASO 3: Conversione Numerica\n");

function convertToNumber(value) {
    try {
        // toFixed() funziona solo su numeri
        const formatted = value.toFixed(2);
        return parseFloat(formatted);
    } catch (error) {
        console.log("⚠️ Conversione fallita:", error.message);
        return 0; // Valore di default
    }
}

// Test con numero valido
console.log("Test 3.1 - Numero valido:");
console.log("Input: 123.456 →", convertToNumber(123.456));

// Test con stringa
console.log("\nTest 3.2 - Stringa:");
console.log("Input: 'testo' →", convertToNumber('testo'));

// Test con null
console.log("\nTest 3.3 - Null:");
console.log("Input: null →", convertToNumber(null));

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// CASO 4: Operazioni Matematiche Sicure
// ============================================
console.log("📋 CASO 4: Divisione Sicura\n");

function divideSafe(a, b) {
    try {
        if (b === 0) {
            throw new Error("Divisione per zero!");
        }
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError("Entrambi gli argomenti devono essere numeri");
        }
        return a / b;
    } catch (error) {
        console.error(`❌ Errore: ${error.message}`);
        return NaN;
    }
}

// Test vari
console.log("Test 4.1: divideSafe(10, 2) =", divideSafe(10, 2));
console.log("Test 4.2: divideSafe(10, 0) =", divideSafe(10, 0));
console.log("Test 4.3: divideSafe('10', 2) =", divideSafe('10', 2));

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// CASO 5: Lettura File (simulato)
// ============================================
console.log("📋 CASO 5: Operazioni I/O (simulato)\n");

function readConfigFile(filename) {
    try {
        // Simula lettura file
        if (filename === 'config.json') {
            return { port: 3000, host: 'localhost' };
        } else {
            throw new Error(`File ${filename} non trovato`);
        }
    } catch (error) {
        console.error("❌ Errore lettura config:", error.message);
        // Ritorna configurazione di default
        return { port: 8080, host: '0.0.0.0' };
    }
}

console.log("Test 5.1 - File esistente:");
console.log(readConfigFile('config.json'));

console.log("\nTest 5.2 - File non esistente:");
console.log(readConfigFile('missing.json'));

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// RIEPILOGO
// ============================================
console.log("💡 QUANDO USARE TRY...CATCH:\n");
console.log("✅ JSON.parse() - dati che potrebbero essere malformati");
console.log("✅ Accesso a proprietà che potrebbero non esistere");
console.log("✅ Operazioni matematiche con input non validato");
console.log("✅ Operazioni I/O (file, rete, database)");
console.log("✅ Chiamate a API o librerie esterne");
console.log("✅ Conversioni di tipo che potrebbero fallire");
