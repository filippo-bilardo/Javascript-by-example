/**
 * 02.02 - Switch Fall-Through
 * 
 * Esempi sul comportamento fall-through dello switch.
 * Quando omettere break intenzionalmente.
 */

console.log("=".repeat(60));
console.log("02.02 - SWITCH FALL-THROUGH");
console.log("=".repeat(60));

// ============================================================
// 1. FALL-THROUGH SPIEGATO
// ============================================================
console.log("\n1. FALL-THROUGH SPIEGATO");
console.log("-".repeat(60));

// Senza break - esecuzione continua
let numero = 2;
console.log(`Numero: ${numero}\n`);
console.log("⚠️ SENZA BREAK (fall-through):");

switch (numero) {
    case 1:
        console.log("  Caso 1 eseguito");
    case 2:
        console.log("  ✓ Caso 2 eseguito");
    case 3:
        console.log("  ⚠️ Caso 3 eseguito (fall-through!)");
    case 4:
        console.log("  ⚠️ Caso 4 eseguito (fall-through!)");
        break;
    case 5:
        console.log("  Caso 5 NON eseguito (break precedente)");
}

// Con break - esecuzione si ferma
console.log(`\n✓ CON BREAK (normale):`);

switch (numero) {
    case 1:
        console.log("  Caso 1 eseguito");
        break;
    case 2:
        console.log("  ✓ Caso 2 eseguito");
        break;
    case 3:
        console.log("  Caso 3 NON eseguito");
        break;
}

// ============================================================
// 2. FALL-THROUGH INTENZIONALE: CASI MULTIPLI
// ============================================================
console.log("\n2. FALL-THROUGH INTENZIONALE: CASI MULTIPLI");
console.log("-".repeat(60));

// Weekend vs giorni lavorativi
let giorno = 6;  // Sabato
let tipoGiorno;

console.log(`Giorno numero: ${giorno}`);

switch (giorno) {
    case 0:  // Domenica
    case 6:  // Sabato
        // Fall-through intenzionale: entrambi sono weekend
        tipoGiorno = "Weekend 🎉";
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        // Fall-through intenzionale: tutti giorni lavorativi
        tipoGiorno = "Giorno lavorativo 💼";
        break;
    default:
        tipoGiorno = "Giorno non valido";
}

console.log(`✓ ${tipoGiorno}`);

// Vocali vs consonanti
let lettera = "a";
console.log(`\nLettera: "${lettera}"`);

switch (lettera.toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("✓ È una vocale");
        break;
    default:
        console.log("È una consonante");
}

// Stagioni
let mese = 8;  // Agosto
let stagione;

console.log(`\nMese: ${mese}`);

switch (mese) {
    case 12:
    case 1:
    case 2:
        stagione = "Inverno ❄️";
        break;
    case 3:
    case 4:
    case 5:
        stagione = "Primavera 🌸";
        break;
    case 6:
    case 7:
    case 8:
        stagione = "Estate ☀️";
        break;
    case 9:
    case 10:
    case 11:
        stagione = "Autunno 🍂";
        break;
    default:
        stagione = "Mese non valido";
}

console.log(`✓ ${stagione}`);

// ============================================================
// 3. FALL-THROUGH CUMULATIVO (PERMESSI)
// ============================================================
console.log("\n3. FALL-THROUGH CUMULATIVO (PERMESSI)");
console.log("-".repeat(60));

// Sistema di permessi cumulativi
let livelloAccesso = 2;
let permessi = [];

console.log(`Livello accesso: ${livelloAccesso}`);
console.log("Permessi concessi:");

switch (livelloAccesso) {
    case 3:
        permessi.push("Amministrazione sistema");
        console.log("  ✓ Amministrazione sistema");
        // fall-through intenzionale
    case 2:
        permessi.push("Modifica configurazioni");
        console.log("  ✓ Modifica configurazioni");
        // fall-through intenzionale
    case 1:
        permessi.push("Lettura dati");
        console.log("  ✓ Lettura dati");
        break;
    case 0:
        console.log("  ✗ Nessun permesso");
        break;
    default:
        console.log("  ✗ Livello non valido");
}

console.log(`\nTotale permessi: ${permessi.length}`);

// Sistema di badge accesso
let badgeLevel = 3;
let accessi = "Accessi consentiti:\n";

console.log(`\nLivello badge: ${badgeLevel}`);

switch (badgeLevel) {
    case 5:
        accessi += "  🔐 Sala server\n";
        // fall-through
    case 4:
        accessi += "  🏢 Area direzione\n";
        // fall-through
    case 3:
        accessi += "  ✓ 💼 Uffici\n";
        // fall-through
    case 2:
        accessi += "  ✓ 🍽️ Mensa\n";
        // fall-through
    case 1:
        accessi += "  ✓ 🚪 Reception\n";
        break;
    default:
        accessi = "  ✗ Nessun accesso";
}

console.log(accessi);

// ============================================================
// 4. FALL-THROUGH CON COMMENTI
// ============================================================
console.log("\n4. FALL-THROUGH CON COMMENTI");
console.log("-".repeat(60));

// Best practice: commentare fall-through intenzionali
let codiceErrore = 503;
console.log(`Codice errore: ${codiceErrore}`);

switch (codiceErrore) {
    case 500:
    case 501:
    case 502:
    case 503:
    case 504:
        // Tutti errori 5xx sono errori server
        // fall-through intenzionale
        console.log("✓ Errore server (5xx)");
        console.log("  → Riprova più tardi");
        break;
    case 400:
    case 401:
    case 403:
    case 404:
        // Tutti errori 4xx sono errori client
        // fall-through intenzionale
        console.log("Errore client (4xx)");
        console.log("  → Controlla la richiesta");
        break;
    case 200:
    case 201:
    case 204:
        // Tutte risposte 2xx sono successi
        // fall-through intenzionale
        console.log("Successo (2xx)");
        break;
    default:
        console.log("Codice non riconosciuto");
}

// ============================================================
// 5. FALL-THROUGH PARZIALE CON AZIONI DIVERSE
// ============================================================
console.log("\n5. FALL-THROUGH PARZIALE CON AZIONI DIVERSE");
console.log("-".repeat(60));

let tipoUtente = "premium";
console.log(`Tipo utente: "${tipoUtente}"`);

switch (tipoUtente) {
    case "admin":
        console.log("✓ Accesso amministrazione");
        // fall-through per permessi comuni
    case "premium":
        console.log("✓ Accesso contenuti premium");
        console.log("✓ Download illimitati");
        // fall-through per permessi base
    case "free":
        console.log("✓ Accesso contenuti base");
        console.log("✓ Streaming base");
        break;
    case "guest":
        console.log("✓ Solo preview");
        break;
    default:
        console.log("✗ Tipo utente non riconosciuto");
}

// ============================================================
// 6. FALL-THROUGH CON OPERAZIONI CUMULATIVE
// ============================================================
console.log("\n6. FALL-THROUGH CON OPERAZIONI CUMULATIVE");
console.log("-".repeat(60));

let faseProgetto = 3;
let tasksCompletati = [];

console.log(`Fase progetto: ${faseProgetto}`);
console.log("Tasks completati:");

switch (faseProgetto) {
    case 5:
        tasksCompletati.push("Deployment");
        console.log("  ✓ Fase 5: Deployment");
        // fall-through
    case 4:
        tasksCompletati.push("Testing");
        console.log("  ✓ Fase 4: Testing");
        // fall-through
    case 3:
        tasksCompletati.push("Implementazione");
        console.log("  ✓ Fase 3: Implementazione");
        // fall-through
    case 2:
        tasksCompletati.push("Design");
        console.log("  ✓ Fase 2: Design");
        // fall-through
    case 1:
        tasksCompletati.push("Pianificazione");
        console.log("  ✓ Fase 1: Pianificazione");
        break;
    case 0:
        console.log("  ⚠️ Progetto non iniziato");
        break;
    default:
        console.log("  ✗ Fase non valida");
}

console.log(`\nTotale fasi completate: ${tasksCompletati.length}/5`);

// ============================================================
// 7. FALL-THROUGH VS ALTERNATIVE
// ============================================================
console.log("\n7. FALL-THROUGH VS ALTERNATIVE");
console.log("-".repeat(60));

let priorità = "alta";

console.log(`Priorità: "${priorità}"\n`);

// Metodo 1: Fall-through
console.log("Metodo 1 - Switch con fall-through:");
switch (priorità) {
    case "critica":
    case "alta":
        console.log("  ✓ Richiede attenzione immediata");
        break;
    case "media":
        console.log("  Gestire entro oggi");
        break;
    case "bassa":
        console.log("  Può attendere");
        break;
}

// Metodo 2: Array includes
console.log("\nMetodo 2 - Array includes:");
if (["critica", "alta"].includes(priorità)) {
    console.log("  ✓ Richiede attenzione immediata");
} else if (priorità === "media") {
    console.log("  Gestire entro oggi");
} else if (priorità === "bassa") {
    console.log("  Può attendere");
}

// ============================================================
// 8. ERRORI COMUNI CON FALL-THROUGH
// ============================================================
console.log("\n8. ERRORI COMUNI CON FALL-THROUGH");
console.log("-".repeat(60));

let valore = "b";

console.log(`Valore: "${valore}"\n`);

// ❌ ERRORE: Dimenticare break
console.log("❌ ERRORE - Break dimenticato:");
switch (valore) {
    case "a":
        console.log("  Caso A");
        // OOPS! Manca break
    case "b":
        console.log("  ✓ Caso B");
        console.log("  ⚠️ Ma esegue anche questo!");
        break;
}

// ✓ CORRETTO: Break presente
console.log("\n✓ CORRETTO - Break incluso:");
switch (valore) {
    case "a":
        console.log("  Caso A");
        break;  // ✓
    case "b":
        console.log("  ✓ Caso B");
        break;  // ✓
}

// ✓ CORRETTO: Fall-through commentato
console.log("\n✓ CORRETTO - Fall-through documentato:");
switch (valore) {
    case "a":
        console.log("  Caso A");
        // fall-through intenzionale
    case "b":
        console.log("  ✓ Caso A o B");
        break;
}

// ============================================================
// 9. FALL-THROUGH IN FUNZIONI
// ============================================================
console.log("\n9. FALL-THROUGH IN FUNZIONI");
console.log("-".repeat(60));

function ottieniCategoriaEtà(età) {
    let categoria;
    
    switch (true) {
        case (età >= 65):
            categoria = "Senior";
            // fall-through per aggiungere info
        case (età >= 18):
            if (!categoria) categoria = "Adulto";
            console.log(`  Può votare`);
            // fall-through
        case (età >= 16):
            if (!categoria) categoria = "Adolescente";
            console.log(`  Può ottenere patentino`);
            // fall-through
        case (età >= 0):
            if (!categoria) categoria = "Bambino/Ragazzo";
            console.log(`  Categoria: ${categoria}`);
            return categoria;
        default:
            return "Età non valida";
    }
}

console.log(`\nEtà 25:`);
console.log(`Risultato: ${ottieniCategoriaEtà(25)}`);

console.log(`\nEtà 70:`);
console.log(`Risultato: ${ottieniCategoriaEtà(70)}`);

// ============================================================
// 10. CASI D'USO PRATICI
// ============================================================
console.log("\n10. CASI D'USO PRATICI");
console.log("-".repeat(60));

// Sistema di notifiche con priorità cumulative
let tipoNotifica = "warning";
let notificaConfig = {
    suono: false,
    popup: false,
    email: false,
    sms: false
};

console.log(`Tipo notifica: "${tipoNotifica}"`);

switch (tipoNotifica) {
    case "critical":
        notificaConfig.sms = true;
        console.log("  📱 SMS attivato");
        // fall-through
    case "error":
        notificaConfig.email = true;
        console.log("  📧 Email attivata");
        // fall-through
    case "warning":
        notificaConfig.popup = true;
        console.log("  ✓ 💬 Popup attivato");
        // fall-through
    case "info":
        notificaConfig.suono = true;
        console.log("  ✓ 🔔 Suono attivato");
        break;
    default:
        console.log("  ✗ Tipo non riconosciuto");
}

console.log("\nConfigurzione finale:", notificaConfig);

// Features abilitate per piano abbonamento
let pianoAbbonamento = "pro";
let features = [];

console.log(`\nPiano: "${pianoAbbonamento}"`);
console.log("Features abilitate:");

switch (pianoAbbonamento) {
    case "enterprise":
        features.push("API personalizzate");
        console.log("  🏢 API personalizzate");
        // fall-through
    case "pro":
        features.push("Reportistica avanzata");
        console.log("  ✓ 📊 Reportistica avanzata");
        features.push("Supporto prioritario");
        console.log("  ✓ 🎫 Supporto prioritario");
        // fall-through
    case "basic":
        features.push("Features base");
        console.log("  ✓ ⭐ Features base");
        break;
    case "free":
        console.log("  📝 Solo prova gratuita");
        break;
    default:
        console.log("  ✗ Piano non valido");
}

console.log(`\nTotale features: ${features.length}`);

// ============================================================
// BEST PRACTICES E REMINDER
// ============================================================
console.log("\n" + "=".repeat(60));
console.log("BEST PRACTICES");
console.log("=".repeat(60));

console.log(`
✓ Commenta sempre i fall-through intenzionali
✓ Usa fall-through per casi che condividono logica
✓ Fall-through cumulativo è utile per permessi/livelli
✓ Mantieni fall-through semplici e leggibili
✓ Documenta il comportamento atteso

⚠️ ATTENZIONE:
✗ Fall-through accidentale è un bug comune
✗ Non abusare: se troppo complesso, usa if-else
✗ Sempre commentare: /* fall-through */

💡 QUANDO USARE FALL-THROUGH:
→ Casi multipli con stessa logica
→ Permessi/features cumulativi
→ Categorie sovrapposte
→ Codici di errore simili

💡 ALTERNATIVE AL FALL-THROUGH:
→ Array.includes() per valori multipli
→ Operatori logici (||, &&)
→ Funzioni helper
→ Oggetti di mappatura

📝 PATTERN COMUNI:
1. Casi multipli: case A: case B: case C:
2. Cumulativo: case 3: add(); case 2: add(); case 1: add();
3. Documentato: case X: /* fall-through */ case Y:
`);

console.log("=".repeat(60));
console.log("Fine esempi 02.02 - Switch Fall-Through");
console.log("=".repeat(60));
