/**
 * 03.02 - Tipi di Errore Predefiniti
 * 
 * Esplora i diversi tipi di errore built-in in JavaScript
 */

console.log("=== TIPI DI ERRORE PREDEFINITI ===\n");

// ============================================
// 1. ReferenceError
// ============================================
console.log("📋 1. ReferenceError\n");
console.log("Quando: Variabile non dichiarata\n");

try {
    console.log("Tentativo: usare variabileNonEsistente");
    let x = variabileNonEsistente;
} catch (error) {
    console.log("✅ Catturato!");
    console.log("  name:", error.name);
    console.log("  message:", error.message);
    console.log("  instanceof ReferenceError:", error instanceof ReferenceError);
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// 2. TypeError
// ============================================
console.log("📋 2. TypeError\n");
console.log("Quando: Tipo non corretto per l'operazione\n");

// Esempio 2.1: null/undefined
try {
    console.log("Test 2.1: null.metodo()");
    let obj = null;
    obj.metodo();
} catch (error) {
    console.log("  name:", error.name);
    console.log("  message:", error.message);
    console.log();
}

// Esempio 2.2: Chiamare non-funzione
try {
    console.log("Test 2.2: chiamare numero come funzione");
    let notAFunction = 42;
    notAFunction();
} catch (error) {
    console.log("  name:", error.name);
    console.log("  message:", error.message);
    console.log();
}

// Esempio 2.3: Assegnazione a const
try {
    console.log("Test 2.3: modificare const");
    const PI = 3.14;
    PI = 3.15;
} catch (error) {
    console.log("  name:", error.name);
    console.log("  message:", error.message);
    console.log();
}

console.log("=".repeat(50) + "\n");

// ============================================
// 3. RangeError
// ============================================
console.log("📋 3. RangeError\n");
console.log("Quando: Valore fuori range consentito\n");

// Esempio 3.1: Array con lunghezza negativa
try {
    console.log("Test 3.1: new Array(-1)");
    const arr = new Array(-1);
} catch (error) {
    console.log("  name:", error.name);
    console.log("  message:", error.message);
    console.log();
}

// Esempio 3.2: toFixed con decimali troppi
try {
    console.log("Test 3.2: (1.5).toFixed(101)");
    const num = (1.5).toFixed(101);
} catch (error) {
    console.log("  name:", error.name);
    console.log("  message:", error.message);
    console.log();
}

// Esempio 3.3: Ricorsione infinita (stack overflow)
console.log("Test 3.3: Stack overflow (commentato per non crashare)");
console.log("  // function infiniteRecursion() {");
console.log("  //     infiniteRecursion();");
console.log("  // }");
console.log("  // infiniteRecursion(); // RangeError: Maximum call stack size exceeded");
console.log();

console.log("=".repeat(50) + "\n");

// ============================================
// 4. SyntaxError
// ============================================
console.log("📋 4. SyntaxError\n");
console.log("Quando: Sintassi non valida (parsing)\n");

// Esempio 4.1: JSON.parse con JSON non valido
try {
    console.log("Test 4.1: JSON.parse con sintassi errata");
    JSON.parse("{chiave: 'valore'}"); // Chiavi devono avere ""
} catch (error) {
    console.log("  name:", error.name);
    console.log("  message:", error.message);
    console.log();
}

// Esempio 4.2: eval con codice non valido
try {
    console.log("Test 4.2: eval con sintassi errata");
    eval("let x = ;");
} catch (error) {
    console.log("  name:", error.name);
    console.log("  message:", error.message);
    console.log();
}

console.log("=".repeat(50) + "\n");

// ============================================
// 5. URIError
// ============================================
console.log("📋 5. URIError\n");
console.log("Quando: Uso errato di funzioni URI\n");

try {
    console.log("Test 5.1: decodeURIComponent con sequenza non valida");
    decodeURIComponent('%E0%A4%A');
} catch (error) {
    console.log("  name:", error.name);
    console.log("  message:", error.message);
    console.log();
}

console.log("=".repeat(50) + "\n");

// ============================================
// Tabella Riepilogativa
// ============================================
console.log("📊 TABELLA TIPI DI ERRORE\n");

console.log("┌─────────────────┬────────────────────────────────────────┐");
console.log("│ Tipo            │ Quando si verifica                     │");
console.log("├─────────────────┼────────────────────────────────────────┤");
console.log("│ ReferenceError  │ Variabile non dichiarata               │");
console.log("│ TypeError       │ Tipo sbagliato per operazione          │");
console.log("│ RangeError      │ Valore fuori range                     │");
console.log("│ SyntaxError     │ Sintassi non valida                    │");
console.log("│ URIError        │ Funzioni URI usate male                │");
console.log("│ EvalError       │ Errori eval() (raro)                   │");
console.log("│ Error           │ Errore generico                        │");
console.log("└─────────────────┴────────────────────────────────────────┘\n");

// ============================================
// Esempio Pratico: Gestione per Tipo
// ============================================
console.log("📋 GESTIONE SPECIFICA PER TIPO\n");

function handleOperation(operation) {
    try {
        operation();
        console.log("  ✅ Operazione completata\n");
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log("  ❌ ReferenceError:", error.message);
            console.log("  → Controlla che tutte le variabili siano dichiarate\n");
        } else if (error instanceof TypeError) {
            console.log("  ❌ TypeError:", error.message);
            console.log("  → Controlla i tipi e null/undefined\n");
        } else if (error instanceof RangeError) {
            console.log("  ❌ RangeError:", error.message);
            console.log("  → Controlla i valori numerici\n");
        } else if (error instanceof SyntaxError) {
            console.log("  ❌ SyntaxError:", error.message);
            console.log("  → Controlla la sintassi del codice/JSON\n");
        } else {
            console.log("  ❌ Errore generico:", error.message);
            console.log("  → Gestione standard\n");
        }
    }
}

console.log("Test 1: ReferenceError");
handleOperation(() => {
    let x = undefinedVar;
});

console.log("Test 2: TypeError");
handleOperation(() => {
    null.method();
});

console.log("Test 3: RangeError");
handleOperation(() => {
    new Array(-1);
});

console.log("Test 4: SyntaxError");
handleOperation(() => {
    JSON.parse("{bad json}");
});

console.log("=".repeat(50) + "\n");

// ============================================
// Test instanceof
// ============================================
console.log("📋 TEST INSTANCEOF\n");

function testErrorType(errorGenerator, description) {
    try {
        errorGenerator();
    } catch (error) {
        console.log(`${description}:`);
        console.log(`  instanceof Error:           ${error instanceof Error}`);
        console.log(`  instanceof ReferenceError:  ${error instanceof ReferenceError}`);
        console.log(`  instanceof TypeError:       ${error instanceof TypeError}`);
        console.log(`  instanceof RangeError:      ${error instanceof RangeError}`);
        console.log(`  instanceof SyntaxError:     ${error instanceof SyntaxError}`);
        console.log(`  Tipo effettivo: ${error.name}\n`);
    }
}

testErrorType(
    () => { let x = notDefined; },
    "ReferenceError"
);

testErrorType(
    () => { null.prop; },
    "TypeError"
);

testErrorType(
    () => { new Array(-1); },
    "RangeError"
);

console.log("=".repeat(50) + "\n");

// ============================================
// RIEPILOGO
// ============================================
console.log("💡 BEST PRACTICES:\n");

console.log(`
✅ USA instanceof per:
   - Gestire tipi di errori in modo diverso
   - Distinguere errori di sistema da errori applicativi
   - Implementare strategie di recovery specifiche

✅ TIPI PIÙ COMUNI:
   1. TypeError     - Il più frequente (null, undefined, tipi sbagliati)
   2. ReferenceError - Variabili non dichiarate
   3. SyntaxError   - JSON.parse, eval
   4. RangeError    - Array, numeri fuori range

❌ EVITA:
   - Catturare tutti gli errori allo stesso modo
   - Ignorare il tipo di errore
   - Usare solo Error generico

📊 PATTERN:
   try {
       riskyOperation();
   } catch (error) {
       if (error instanceof TypeError) {
           // Gestione specifica
       } else if (error instanceof RangeError) {
           // Gestione specifica
       } else {
           // Gestione generica
       }
   }
`);
