/**
 * 02.03 - Switch vs Alternative
 * 
 * Confronto tra switch e alternative (if-else, oggetti, map).
 * Quando usare switch e quando altre soluzioni.
 */

console.log("=".repeat(60));
console.log("02.03 - SWITCH VS ALTERNATIVE");
console.log("=".repeat(60));

// ============================================================
// 1. SWITCH VS IF...ELSE
// ============================================================
console.log("\n1. SWITCH VS IF...ELSE");
console.log("-".repeat(60));

let statusCode = 404;

// Versione con SWITCH
console.log("Con SWITCH:");
console.log(`Status: ${statusCode}`);

switch (statusCode) {
    case 200:
        console.log("  OK");
        break;
    case 404:
        console.log("  ✓ Not Found");
        break;
    case 500:
        console.log("  Server Error");
        break;
    default:
        console.log("  Unknown");
}

// Versione con IF...ELSE
console.log("\nCon IF...ELSE:");
console.log(`Status: ${statusCode}`);

if (statusCode === 200) {
    console.log("  OK");
} else if (statusCode === 404) {
    console.log("  ✓ Not Found");
} else if (statusCode === 500) {
    console.log("  Server Error");
} else {
    console.log("  Unknown");
}

console.log("\n💡 Switch è più leggibile per molti valori discreti");

// ============================================================
// 2. SWITCH VS OGGETTO LOOKUP
// ============================================================
console.log("\n2. SWITCH VS OGGETTO LOOKUP");
console.log("-".repeat(60));

let giorno = 3;

// Versione con SWITCH
console.log("Con SWITCH:");
let nomeGiorno1;

switch (giorno) {
    case 0: nomeGiorno1 = "Domenica"; break;
    case 1: nomeGiorno1 = "Lunedì"; break;
    case 2: nomeGiorno1 = "Martedì"; break;
    case 3: nomeGiorno1 = "Mercoledì"; break;
    case 4: nomeGiorno1 = "Giovedì"; break;
    case 5: nomeGiorno1 = "Venerdì"; break;
    case 6: nomeGiorno1 = "Sabato"; break;
    default: nomeGiorno1 = "Invalido";
}

console.log(`  Giorno ${giorno}: ${nomeGiorno1}`);

// Versione con OGGETTO
console.log("\nCon OGGETTO LOOKUP:");

const giorniSettimana = {
    0: "Domenica",
    1: "Lunedì",
    2: "Martedì",
    3: "Mercoledì",
    4: "Giovedì",
    5: "Venerdì",
    6: "Sabato"
};

let nomeGiorno2 = giorniSettimana[giorno] || "Invalido";
console.log(`  ✓ Giorno ${giorno}: ${nomeGiorno2}`);

console.log("\n💡 Oggetto è più conciso per semplici mappature");

// ============================================================
// 3. SWITCH VS MAP
// ============================================================
console.log("\n3. SWITCH VS MAP");
console.log("-".repeat(60));

let comando = "START";

// Versione con SWITCH
console.log("Con SWITCH:");

switch (comando) {
    case "START":
        console.log("  ✓ Avvio sistema...");
        break;
    case "STOP":
        console.log("  Arresto sistema...");
        break;
    case "RESTART":
        console.log("  Riavvio sistema...");
        break;
    default:
        console.log("  Comando sconosciuto");
}

// Versione con MAP
console.log("\nCon MAP:");

const comandiMap = new Map([
    ["START", "Avvio sistema..."],
    ["STOP", "Arresto sistema..."],
    ["RESTART", "Riavvio sistema..."]
]);

console.log(`  ✓ ${comandiMap.get(comando) || "Comando sconosciuto"}`);

console.log("\n💡 Map offre metodi aggiuntivi e chiavi di qualsiasi tipo");

// ============================================================
// 4. SWITCH VS OPERATORE TERNARIO
// ============================================================
console.log("\n4. SWITCH VS OPERATORE TERNARIO");
console.log("-".repeat(60));

let età = 20;

// Con SWITCH
console.log("Con SWITCH:");
let categoria1;

switch (true) {
    case (età < 13):
        categoria1 = "Bambino";
        break;
    case (età < 18):
        categoria1 = "Adolescente";
        break;
    case (età < 65):
        categoria1 = "Adulto";
        break;
    default:
        categoria1 = "Senior";
}

console.log(`  Età ${età}: ${categoria1}`);

// Con TERNARIO (annidato)
console.log("\nCon TERNARIO:");

let categoria2 = 
    età < 13 ? "Bambino" :
    età < 18 ? "Adolescente" :
    età < 65 ? "Adulto" : "Senior";

console.log(`  ✓ Età ${età}: ${categoria2}`);

// Con IF...ELSE (più leggibile per range)
console.log("\nCon IF...ELSE (migliore per range):");

let categoria3;
if (età < 13) {
    categoria3 = "Bambino";
} else if (età < 18) {
    categoria3 = "Adolescente";
} else if (età < 65) {
    categoria3 = "Adulto";
} else {
    categoria3 = "Senior";
}

console.log(`  ✓ Età ${età}: ${categoria3}`);

console.log("\n💡 Per range, if...else è più chiaro del switch");

// ============================================================
// 5. SWITCH VS FUNZIONI IN OGGETTO
// ============================================================
console.log("\n5. SWITCH VS FUNZIONI IN OGGETTO");
console.log("-".repeat(60));

let operazione = "somma";
let a = 10, b = 5;

// Con SWITCH
console.log("Con SWITCH:");

let risultato1;
switch (operazione) {
    case "somma":
        risultato1 = a + b;
        break;
    case "sottrazione":
        risultato1 = a - b;
        break;
    case "moltiplicazione":
        risultato1 = a * b;
        break;
    case "divisione":
        risultato1 = a / b;
        break;
    default:
        risultato1 = "Operazione non valida";
}

console.log(`  ${a} ${operazione} ${b} = ${risultato1}`);

// Con OGGETTO DI FUNZIONI
console.log("\nCon OGGETTO DI FUNZIONI:");

const operazioni = {
    somma: (x, y) => x + y,
    sottrazione: (x, y) => x - y,
    moltiplicazione: (x, y) => x * y,
    divisione: (x, y) => x / y
};

let risultato2 = operazioni[operazione] 
    ? operazioni[operazione](a, b)
    : "Operazione non valida";

console.log(`  ✓ ${a} ${operazione} ${b} = ${risultato2}`);

console.log("\n💡 Oggetto di funzioni è più estensibile e testabile");

// ============================================================
// 6. PERFORMANCE: SWITCH VS ALTERNATIVE
// ============================================================
console.log("\n6. PERFORMANCE: SWITCH VS ALTERNATIVE");
console.log("-".repeat(60));

console.log("Test di performance (10000 iterazioni):\n");

// Setup
const iterations = 10000;
let testValue = 5;

// Test SWITCH
console.time("Switch");
for (let i = 0; i < iterations; i++) {
    let result;
    switch (testValue) {
        case 1: result = "uno"; break;
        case 2: result = "due"; break;
        case 3: result = "tre"; break;
        case 4: result = "quattro"; break;
        case 5: result = "cinque"; break;
        case 6: result = "sei"; break;
        case 7: result = "sette"; break;
        case 8: result = "otto"; break;
        case 9: result = "nove"; break;
        case 10: result = "dieci"; break;
        default: result = "altro";
    }
}
console.timeEnd("Switch");

// Test OGGETTO
const numeriMap = {
    1: "uno", 2: "due", 3: "tre", 4: "quattro", 5: "cinque",
    6: "sei", 7: "sette", 8: "otto", 9: "nove", 10: "dieci"
};

console.time("Oggetto");
for (let i = 0; i < iterations; i++) {
    let result = numeriMap[testValue] || "altro";
}
console.timeEnd("Oggetto");

// Test IF...ELSE
console.time("If...Else");
for (let i = 0; i < iterations; i++) {
    let result;
    if (testValue === 1) result = "uno";
    else if (testValue === 2) result = "due";
    else if (testValue === 3) result = "tre";
    else if (testValue === 4) result = "quattro";
    else if (testValue === 5) result = "cinque";
    else if (testValue === 6) result = "sei";
    else if (testValue === 7) result = "sette";
    else if (testValue === 8) result = "otto";
    else if (testValue === 9) result = "nove";
    else if (testValue === 10) result = "dieci";
    else result = "altro";
}
console.timeEnd("If...Else");

console.log("\n💡 Oggetto lookup è generalmente il più veloce");

// ============================================================
// 7. QUANDO USARE SWITCH
// ============================================================
console.log("\n7. QUANDO USARE SWITCH");
console.log("-".repeat(60));

console.log(`
✓ USA SWITCH quando:
  • Hai 3+ valori discreti da confrontare
  • Tutti i confronti sono su stesso valore
  • Vuoi fall-through intenzionale
  • Hai blocchi di codice per ogni caso
  • Codice deve essere molto leggibile

Esempio ideale: Menu, stati, codici
`);

// Esempio ideale per switch
let statoOrdine = "spedito";

switch (statoOrdine) {
    case "in_attesa":
        console.log("⏳ Ordine in attesa");
        inviaNotifica("in_attesa");
        break;
    case "confermato":
        console.log("✅ Ordine confermato");
        preparaSpedizione();
        break;
    case "spedito":
        console.log("✓ 🚚 Ordine spedito");
        aggiornaTracking();
        inviaNotifica("spedito");
        break;
    case "consegnato":
        console.log("🏠 Consegnato");
        richiediFeedback();
        break;
    default:
        console.log("Stato sconosciuto");
}

function inviaNotifica(stato) {
    console.log(`  → Notifica inviata (${stato})`);
}
function preparaSpedizione() {
    console.log(`  → Preparazione spedizione`);
}
function aggiornaTracking() {
    console.log(`  → Tracking aggiornato`);
}
function richiediFeedback() {
    console.log(`  → Richiesta feedback`);
}

// ============================================================
// 8. QUANDO USARE IF...ELSE
// ============================================================
console.log("\n8. QUANDO USARE IF...ELSE");
console.log("-".repeat(60));

console.log(`
✓ USA IF...ELSE quando:
  • Hai condizioni complesse
  • Serve confrontare range (<, >, <=, >=)
  • Condizioni con operatori logici (&&, ||)
  • Ogni ramo ha condizioni diverse
  • 1-2 alternative semplici

Esempio ideale: Range, combinazioni, calcoli
`);

// Esempio ideale per if...else
let temperatura = 22;
let umidità = 65;

if (temperatura > 30 && umidità > 70) {
    console.log("⚠️ Caldo e umido - disagevole");
} else if (temperatura > 30) {
    console.log("☀️ Caldo secco - sopportabile");
} else if (temperatura >= 20 && temperatura <= 25 && umidità < 60) {
    console.log("✓ ✨ Condizioni ideali!");
} else if (temperatura < 10) {
    console.log("❄️ Freddo");
} else {
    console.log("🌡️ Temperature normali");
}

// ============================================================
// 9. QUANDO USARE OGGETTO LOOKUP
// ============================================================
console.log("\n9. QUANDO USARE OGGETTO LOOKUP");
console.log("-".repeat(60));

console.log(`
✓ USA OGGETTO quando:
  • Semplice mappatura chiave-valore
  • Dati possono essere caricati dinamicamente
  • Serve performance ottimale
  • Configurazione separata da logica
  • Molti casi (10+)

Esempio ideale: Traduzioni, configurazioni, codici
`);

// Esempio ideale per oggetto
const messaggiErrore = {
    400: "Richiesta non valida",
    401: "Non autorizzato",
    403: "Accesso negato",
    404: "Risorsa non trovata",
    500: "Errore interno del server",
    502: "Bad Gateway",
    503: "Servizio non disponibile"
};

let codice = 404;
console.log(`Errore ${codice}: ${messaggiErrore[codice] || "Errore sconosciuto"}`);

// Configurazione dinamica
const config = {
    development: {
        apiUrl: "http://localhost:3000",
        debug: true
    },
    production: {
        apiUrl: "https://api.example.com",
        debug: false
    },
    testing: {
        apiUrl: "http://test.example.com",
        debug: true
    }
};

let ambiente = "production";
console.log(`\n✓ Ambiente: ${ambiente}`);
console.log(`  API: ${config[ambiente].apiUrl}`);
console.log(`  Debug: ${config[ambiente].debug}`);

// ============================================================
// 10. PATTERN AVANZATI E BEST PRACTICES
// ============================================================
console.log("\n10. PATTERN AVANZATI E BEST PRACTICES");
console.log("-".repeat(60));

// Pattern Strategy con oggetto di funzioni
console.log("Pattern Strategy:");

const strategiePagamento = {
    carta: (importo) => {
        console.log(`  ✓ Pagamento con carta: €${importo}`);
        return { successo: true, metodo: "carta" };
    },
    paypal: (importo) => {
        console.log(`  Pagamento PayPal: €${importo}`);
        return { successo: true, metodo: "paypal" };
    },
    bonifico: (importo) => {
        console.log(`  Pagamento bonifico: €${importo}`);
        return { successo: true, metodo: "bonifico" };
    }
};

let metodoPagamento = "carta";
let importo = 99.99;

if (strategiePagamento[metodoPagamento]) {
    strategiePagamento[metodoPagamento](importo);
} else {
    console.log("  Metodo di pagamento non supportato");
}

// Combinazione: Switch + oggetto per casi complessi
console.log("\nCombinazione Switch + Oggetto:");

const azioniUtente = {
    visualizza: () => console.log("  → Visualizzazione dati"),
    modifica: () => console.log("  → Modifica in corso"),
    elimina: () => console.log("  → Eliminazione confermata")
};

let ruolo = "editor";
let azione = "modifica";

switch (ruolo) {
    case "admin":
        // Admin può fare tutto
        if (azioniUtente[azione]) {
            console.log("✓ Admin esegue:", azione);
            azioniUtente[azione]();
        }
        break;
    case "editor":
        // Editor può solo visualizzare e modificare
        if (["visualizza", "modifica"].includes(azione) && azioniUtente[azione]) {
            console.log("✓ Editor esegue:", azione);
            azioniUtente[azione]();
        } else {
            console.log("✗ Azione non permessa per editor");
        }
        break;
    case "viewer":
        // Viewer può solo visualizzare
        if (azione === "visualizza") {
            console.log("Viewer esegue:", azione);
            azioniUtente[azione]();
        } else {
            console.log("✗ Azione non permessa per viewer");
        }
        break;
    default:
        console.log("✗ Ruolo non riconosciuto");
}

// ============================================================
// TABELLA COMPARATIVA
// ============================================================
console.log("\n" + "=".repeat(60));
console.log("TABELLA COMPARATIVA");
console.log("=".repeat(60));

console.log(`
┌─────────────┬──────────┬──────────┬──────────┬──────────┐
│ Criterio    │ Switch   │ If-Else  │ Oggetto  │ Ternario │
├─────────────┼──────────┼──────────┼──────────┼──────────┤
│ Leggibilità │ ⭐⭐⭐⭐   │ ⭐⭐⭐     │ ⭐⭐⭐⭐⭐  │ ⭐⭐       │
│ Performance │ ⭐⭐⭐     │ ⭐⭐       │ ⭐⭐⭐⭐⭐  │ ⭐⭐⭐     │
│ Flessibilità│ ⭐⭐⭐     │ ⭐⭐⭐⭐⭐  │ ⭐⭐⭐     │ ⭐⭐       │
│ Estendibile │ ⭐⭐       │ ⭐⭐       │ ⭐⭐⭐⭐⭐  │ ⭐         │
│ Manutenibile│ ⭐⭐⭐⭐   │ ⭐⭐⭐     │ ⭐⭐⭐⭐⭐  │ ⭐⭐       │
└─────────────┴──────────┴──────────┴──────────┴──────────┘

🎯 DECISIONE FINALE:
→ Switch: Menu, stati, codici discreti (3-10 casi)
→ If-Else: Range, condizioni complesse, logica combinata
→ Oggetto: Mappature semplici, molti casi (10+), config
→ Ternario: Assegnazioni semplici inline (1-2 casi)
→ Map: Chiavi non-string, metodi avanzati
→ Funzioni: Logica complessa, riusabilità

💡 PRINCIPIO: Scegli in base a:
  1. Leggibilità del codice
  2. Tipo di confronto necessario
  3. Numero di casi da gestire
  4. Necessità di estendibilità
  5. Performance (solo se critica)
`);

console.log("=".repeat(60));
console.log("Fine esempi 02.03 - Switch vs Alternative");
console.log("=".repeat(60));
