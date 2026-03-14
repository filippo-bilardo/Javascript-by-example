/**
 * 02.01 - Switch Base
 * 
 * Esempi completi sull'istruzione switch in JavaScript.
 * Switch confronta un valore con multipli casi.
 */

console.log("=".repeat(60));
console.log("02.01 - SWITCH BASE");
console.log("=".repeat(60));

// ============================================================
// 1. SINTASSI BASE SWITCH
// ============================================================
console.log("\n1. SINTASSI BASE SWITCH");
console.log("-".repeat(60));

// Esempio classico: giorni della settimana
let giorno = 3;
let nomeGiorno;

console.log(`Giorno numero: ${giorno}`);

switch (giorno) {
    case 1:
        nomeGiorno = "Lunedì";
        break;
    case 2:
        nomeGiorno = "Martedì";
        break;
    case 3:
        nomeGiorno = "Mercoledì";
        break;
    case 4:
        nomeGiorno = "Giovedì";
        break;
    case 5:
        nomeGiorno = "Venerdì";
        break;
    case 6:
        nomeGiorno = "Sabato";
        break;
    case 0:
        nomeGiorno = "Domenica";
        break;
    default:
        nomeGiorno = "Giorno non valido";
}

console.log(`✓ Oggi è ${nomeGiorno}`);

// Switch con stringhe
let comando = "start";
console.log(`\nComando: "${comando}"`);

switch (comando) {
    case "start":
        console.log("✓ Avvio del sistema...");
        break;
    case "stop":
        console.log("Arresto del sistema...");
        break;
    case "pause":
        console.log("Sistema in pausa...");
        break;
    case "restart":
        console.log("Riavvio del sistema...");
        break;
    default:
        console.log("Comando non riconosciuto");
}

// ============================================================
// 2. IMPORTANZA DEL BREAK
// ============================================================
console.log("\n2. IMPORTANZA DEL BREAK");
console.log("-".repeat(60));

// Senza break (fall-through involontario)
let numero = 2;
console.log(`\n⚠️ ESEMPIO SENZA BREAK (sbagliato):`);
console.log(`Numero: ${numero}`);

switch (numero) {
    case 1:
        console.log("  Uno");
        // MANCA break!
    case 2:
        console.log("  ✓ Due");
        // MANCA break!
    case 3:
        console.log("  ⚠️ Tre (eseguito anche se numero è 2!)");
        break;
}

// Con break (corretto)
console.log(`\n✓ ESEMPIO CON BREAK (corretto):`);
console.log(`Numero: ${numero}`);

switch (numero) {
    case 1:
        console.log("  Uno");
        break;
    case 2:
        console.log("  ✓ Due");
        break;
    case 3:
        console.log("  Tre");
        break;
}

// ============================================================
// 3. CASO DEFAULT
// ============================================================
console.log("\n3. CASO DEFAULT");
console.log("-".repeat(60));

// Con valore valido
let mese = 5;
let nomeMese;

console.log(`Mese numero: ${mese}`);

switch (mese) {
    case 1: nomeMese = "Gennaio"; break;
    case 2: nomeMese = "Febbraio"; break;
    case 3: nomeMese = "Marzo"; break;
    case 4: nomeMese = "Aprile"; break;
    case 5: nomeMese = "Maggio"; break;
    case 6: nomeMese = "Giugno"; break;
    case 7: nomeMese = "Luglio"; break;
    case 8: nomeMese = "Agosto"; break;
    case 9: nomeMese = "Settembre"; break;
    case 10: nomeMese = "Ottobre"; break;
    case 11: nomeMese = "Novembre"; break;
    case 12: nomeMese = "Dicembre"; break;
    default:
        nomeMese = "Mese non valido";
}

console.log(`✓ ${nomeMese}`);

// Con valore non valido
let meseInvalido = 13;
console.log(`\nMese numero: ${meseInvalido}`);

switch (meseInvalido) {
    case 1: nomeMese = "Gennaio"; break;
    case 2: nomeMese = "Febbraio"; break;
    // ... altri casi
    default:
        nomeMese = "Mese non valido";
        console.log("✓ Default eseguito!");
}

console.log(`${nomeMese}`);

// ============================================================
// 4. SWITCH CON NUMERI
// ============================================================
console.log("\n4. SWITCH CON NUMERI");
console.log("-".repeat(60));

// Codici di errore HTTP
let statusCode = 404;
let statusMessage;

console.log(`Status Code: ${statusCode}`);

switch (statusCode) {
    case 200:
        statusMessage = "OK - Richiesta riuscita";
        break;
    case 201:
        statusMessage = "Created - Risorsa creata";
        break;
    case 400:
        statusMessage = "Bad Request - Richiesta non valida";
        break;
    case 401:
        statusMessage = "Unauthorized - Non autorizzato";
        break;
    case 403:
        statusMessage = "Forbidden - Accesso negato";
        break;
    case 404:
        statusMessage = "Not Found - Risorsa non trovata";
        break;
    case 500:
        statusMessage = "Internal Server Error - Errore server";
        break;
    default:
        statusMessage = "Status code sconosciuto";
}

console.log(`✓ ${statusMessage}`);

// Punteggi e voti
let punteggio = 8;
let voto;

console.log(`\nPunteggio: ${punteggio}/10`);

switch (punteggio) {
    case 10:
    case 9:
        voto = "Eccellente";
        break;
    case 8:
        voto = "Ottimo";
        break;
    case 7:
        voto = "Buono";
        break;
    case 6:
        voto = "Sufficiente";
        break;
    default:
        voto = "Insufficiente";
}

console.log(`✓ Voto: ${voto}`);

// ============================================================
// 5. SWITCH CON STRINGHE
// ============================================================
console.log("\n5. SWITCH CON STRINGHE");
console.log("-".repeat(60));

// Comandi utente
let azione = "salva";
console.log(`Azione: "${azione}"`);

switch (azione) {
    case "salva":
        console.log("✓ Salvataggio in corso...");
        console.log("  File salvato con successo!");
        break;
    case "carica":
        console.log("Caricamento file...");
        break;
    case "elimina":
        console.log("Eliminazione file...");
        break;
    case "annulla":
        console.log("Operazione annullata");
        break;
    default:
        console.log("Azione non riconosciuta");
}

// Case sensitive
let linguaggio = "javascript";
console.log(`\nLinguaggio: "${linguaggio}"`);

switch (linguaggio) {
    case "JavaScript":  // Nota: maiuscola
        console.log("JavaScript riconosciuto");
        break;
    case "javascript":  // Nota: minuscolo
        console.log("✓ javascript riconosciuto (case diverse!)");
        break;
    case "Python":
        console.log("Python riconosciuto");
        break;
    default:
        console.log("Linguaggio non riconosciuto");
}

// Estensioni file
let file = "documento.pdf";
let estensione = file.split('.').pop();

console.log(`\nFile: "${file}"`);
console.log(`Estensione: .${estensione}`);

switch (estensione) {
    case "jpg":
    case "jpeg":
    case "png":
    case "gif":
        console.log("Tipo: Immagine");
        break;
    case "pdf":
        console.log("✓ Tipo: Documento PDF");
        break;
    case "doc":
    case "docx":
        console.log("Tipo: Documento Word");
        break;
    case "txt":
        console.log("Tipo: File di testo");
        break;
    default:
        console.log("Tipo: Sconosciuto");
}

// ============================================================
// 6. CONFRONTO STRETTO (===)
// ============================================================
console.log("\n6. CONFRONTO STRETTO (===)");
console.log("-".repeat(60));

// Switch usa === (confronto stretto)
let valore1 = "2";
console.log(`Valore: "${valore1}" (tipo: ${typeof valore1})`);

switch (valore1) {
    case 2:  // numero
        console.log("Match con numero 2");
        break;
    case "2":  // stringa
        console.log("✓ Match con stringa '2'");
        break;
    default:
        console.log("Nessun match");
}

// Numero vs stringa
let valore2 = 0;
console.log(`\nValore: ${valore2} (tipo: ${typeof valore2})`);

switch (valore2) {
    case "0":
        console.log("Match con stringa '0'");
        break;
    case 0:
        console.log("✓ Match con numero 0");
        break;
    case false:
        console.log("Match con false");
        break;
}

// ============================================================
// 7. SWITCH CON ESPRESSIONI
// ============================================================
console.log("\n7. SWITCH CON ESPRESSIONI");
console.log("-".repeat(60));

// Espressione come condizione switch
let ora = 14;
console.log(`Ora: ${ora}:00`);

switch (true) {  // ⚠️ Pattern particolare
    case (ora >= 6 && ora < 12):
        console.log("✓ Buongiorno (mattina)");
        break;
    case (ora >= 12 && ora < 18):
        console.log("✓ Buon pomeriggio");
        break;
    case (ora >= 18 && ora < 22):
        console.log("Buonasera");
        break;
    default:
        console.log("Buonanotte");
}

// Con operazioni matematiche
let numero2 = 15;
console.log(`\nNumero: ${numero2}`);

switch (numero2 % 3) {
    case 0:
        console.log("✓ Divisibile per 3");
        break;
    case 1:
        console.log("Resto 1 nella divisione per 3");
        break;
    case 2:
        console.log("Resto 2 nella divisione per 3");
        break;
}

// ============================================================
// 8. SWITCH IN FUNZIONI
// ============================================================
console.log("\n8. SWITCH IN FUNZIONI");
console.log("-".repeat(60));

// Funzione con switch e return
function ottieniGiornoSettimana(num) {
    switch (num) {
        case 1: return "Lunedì";
        case 2: return "Martedì";
        case 3: return "Mercoledì";
        case 4: return "Giovedì";
        case 5: return "Venerdì";
        case 6: return "Sabato";
        case 0: return "Domenica";
        default: return "Giorno non valido";
    }
    // Nota: con return non serve break
}

console.log(`Giorno 1: ${ottieniGiornoSettimana(1)}`);
console.log(`Giorno 5: ${ottieniGiornoSettimana(5)}`);
console.log(`Giorno 0: ${ottieniGiornoSettimana(0)}`);

// Funzione con switch per operazioni
function calcolatrice(operazione, a, b) {
    console.log(`\nCalcolo: ${a} ${operazione} ${b}`);
    
    switch (operazione) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return b !== 0 ? a / b : "Errore: divisione per zero";
        case "%":
            return a % b;
        default:
            return "Operazione non valida";
    }
}

console.log(`Risultato: ${calcolatrice("+", 10, 5)}`);
console.log(`Risultato: ${calcolatrice("*", 10, 5)}`);
console.log(`Risultato: ${calcolatrice("/", 10, 0)}`);

// ============================================================
// 9. SWITCH CON BLOCCHI
// ============================================================
console.log("\n9. SWITCH CON BLOCCHI");
console.log("-".repeat(60));

let operazione = "login";
console.log(`Operazione: "${operazione}"`);

switch (operazione) {
    case "login": {
        // Blocco con variabili locali
        let messaggio = "Accesso effettuato";
        let timestamp = new Date().toLocaleTimeString();
        console.log(`✓ ${messaggio} alle ${timestamp}`);
        break;
    }
    case "logout": {
        let messaggio = "Disconnessione effettuata";
        let timestamp = new Date().toLocaleTimeString();
        console.log(`${messaggio} alle ${timestamp}`);
        break;
    }
    default: {
        console.log("Operazione sconosciuta");
    }
}

// ============================================================
// 10. CASI D'USO PRATICI
// ============================================================
console.log("\n10. CASI D'USO PRATICI");
console.log("-".repeat(60));

// Sistema di navigazione menu
let sceltaMenu = 2;
console.log(`Scelta menu: ${sceltaMenu}`);

switch (sceltaMenu) {
    case 1:
        console.log("→ Home");
        console.log("  Benvenuto nella pagina principale");
        break;
    case 2:
        console.log("✓ → Prodotti");
        console.log("  Visualizzazione catalogo prodotti");
        break;
    case 3:
        console.log("→ Servizi");
        console.log("  I nostri servizi");
        break;
    case 4:
        console.log("→ Contatti");
        console.log("  Informazioni di contatto");
        break;
    default:
        console.log("→ Pagina non trovata");
}

// Sistema di permessi
let ruoloUtente = "editor";
console.log(`\nRuolo: "${ruoloUtente}"`);

switch (ruoloUtente) {
    case "admin":
        console.log("Permessi: Completo accesso");
        console.log("  - Lettura");
        console.log("  - Scrittura");
        console.log("  - Cancellazione");
        console.log("  - Amministrazione");
        break;
    case "editor":
        console.log("✓ Permessi: Editor");
        console.log("  - Lettura");
        console.log("  - Scrittura");
        break;
    case "viewer":
        console.log("Permessi: Solo lettura");
        console.log("  - Lettura");
        break;
    default:
        console.log("Permessi: Nessuno");
}

// Stato ordine e-commerce
let statoOrdine = "spedito";
console.log(`\nStato ordine: "${statoOrdine}"`);

switch (statoOrdine) {
    case "in_attesa":
        console.log("📝 Ordine in attesa di conferma");
        break;
    case "confermato":
        console.log("✅ Ordine confermato");
        break;
    case "in_preparazione":
        console.log("📦 Ordine in preparazione");
        break;
    case "spedito":
        console.log("✓ 🚚 Ordine spedito");
        console.log("  Tracciamento: XYZ123456");
        break;
    case "consegnato":
        console.log("🏠 Ordine consegnato");
        break;
    case "annullato":
        console.log("❌ Ordine annullato");
        break;
    default:
        console.log("⚠️ Stato sconosciuto");
}

// ============================================================
// BEST PRACTICES E REMINDER
// ============================================================
console.log("\n" + "=".repeat(60));
console.log("BEST PRACTICES");
console.log("=".repeat(60));

console.log(`
✓ Usa switch per 3+ casi sullo stesso valore
✓ Includi sempre break (tranne fall-through intenzionale)
✓ Posiziona default come ultimo caso
✓ Switch usa confronto stretto (===)
✓ Commenta fall-through intenzionali
✓ Considera return invece di break in funzioni
✓ Usa blocchi {} per variabili locali nei casi
✓ Per condizioni complesse, preferisci if...else
✓ Per molti casi, considera oggetti lookup

⚠️ LIMITAZIONI:
✗ Non supporta range (case x > 10)
✗ Non supporta condizioni complesse
✗ Confronta solo uguaglianza stretta (===)
✗ Casi devono essere valori costanti

💡 QUANDO USARE SWITCH:
→ Molti valori specifici da confrontare (>3)
→ Stesso valore confrontato più volte
→ Valori discreti (numeri, stringhe, simboli)
→ Menu, comandi, stati, codici

💡 QUANDO USARE IF...ELSE:
→ Condizioni complesse o range
→ Confronti con operatori (<, >, <=, >=)
→ Combinazioni di condizioni (&&, ||)
→ 1-2 alternative semplici
`);

console.log("=".repeat(60));
console.log("Fine esempi 02.01 - Switch Base");
console.log("=".repeat(60));
