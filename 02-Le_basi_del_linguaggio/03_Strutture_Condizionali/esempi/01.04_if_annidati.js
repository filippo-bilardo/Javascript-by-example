/**
 * 01.04 - If Annidati
 * 
 * Esempi completi sugli if annidati in JavaScript.
 * If dentro altri if per creare logiche condizionali più complesse.
 */

console.log("=".repeat(60));
console.log("01.04 - IF ANNIDATI");
console.log("=".repeat(60));

// ============================================================
// 1. SINTASSI BASE IF ANNIDATI
// ============================================================
console.log("\n1. SINTASSI BASE IF ANNIDATI");
console.log("-".repeat(60));

// Esempio semplice: età e patente
let età = 25;
let haPatente = true;

console.log(`Età: ${età}, Ha patente: ${haPatente}`);

if (età >= 18) {
    console.log("✓ Sei maggiorenne");
    
    // If annidato dentro il primo if
    if (haPatente) {
        console.log("  ✓ Puoi guidare!");
    } else {
        console.log("  ✗ Devi ottenere la patente");
    }
} else {
    console.log("✗ Sei troppo giovane per guidare");
}

// Due livelli di nesting
let èLoggato = true;
let haPermessi = true;

console.log(`\nLoggato: ${èLoggato}, Ha permessi: ${haPermessi}`);

if (èLoggato) {
    console.log("✓ Utente autenticato");
    
    if (haPermessi) {
        console.log("  ✓ Accesso area riservata consentito");
    } else {
        console.log("  ✗ Permessi insufficienti");
    }
} else {
    console.log("✗ Devi effettuare il login");
}

// ============================================================
// 2. IF ANNIDATI CON ELSE
// ============================================================
console.log("\n2. IF ANNIDATI CON ELSE");
console.log("-".repeat(60));

let temperatura = 28;
let èSoleggiato = true;

console.log(`Temperatura: ${temperatura}°C, Soleggiato: ${èSoleggiato}`);

if (temperatura > 25) {
    console.log("✓ Fa caldo");
    
    if (èSoleggiato) {
        console.log("  ✓ Perfetto per la spiaggia!");
    } else {
        console.log("  → Fa caldo ma è nuvoloso");
    }
} else {
    console.log("Non fa molto caldo");
    
    if (èSoleggiato) {
        console.log("  → Fresco ma soleggiato, buono per passeggiata");
    } else {
        console.log("  → Meglio stare in casa");
    }
}

// ============================================================
// 3. MULTIPLE CONDIZIONI ANNIDATE (3 LIVELLI)
// ============================================================
console.log("\n3. MULTIPLE CONDIZIONI ANNIDATE (3 LIVELLI)");
console.log("-".repeat(60));

let isAdmin = false;
let isEditor = true;
let isVerified = true;

console.log(`Admin: ${isAdmin}, Editor: ${isEditor}, Verificato: ${isVerified}`);

if (isAdmin) {
    console.log("Livello 1: Amministratore");
    console.log("  → Accesso completo a tutto");
} else {
    console.log("✓ Livello 1: Non amministratore");
    
    if (isEditor) {
        console.log("  ✓ Livello 2: Editor");
        
        if (isVerified) {
            console.log("    ✓ Livello 3: Editor verificato - Può pubblicare");
        } else {
            console.log("    ✗ Livello 3: Editor non verificato - Solo bozze");
        }
    } else {
        console.log("  → Livello 2: Utente normale (solo lettura)");
    }
}

// ============================================================
// 4. VALIDAZIONE DATI CON IF ANNIDATI
// ============================================================
console.log("\n4. VALIDAZIONE DATI CON IF ANNIDATI");
console.log("-".repeat(60));

// Validazione form
let username = "mario_rossi";
let password = "Pass123!";
let email = "mario@example.com";

console.log(`Username: "${username}"`);
console.log(`Password: "${password}"`);
console.log(`Email: "${email}"`);

// Primo livello: username
if (username.length >= 5) {
    console.log("✓ Username valido (lunghezza OK)");
    
    // Secondo livello: password
    if (password.length >= 8) {
        console.log("  ✓ Password valida (lunghezza OK)");
        
        // Terzo livello: email
        if (email.includes("@") && email.includes(".")) {
            console.log("    ✓ Email valida");
            console.log("    🎉 Registrazione completata!");
        } else {
            console.log("    ✗ Email non valida");
        }
    } else {
        console.log(`  ✗ Password troppo corta (min 8, attuale ${password.length})`);
    }
} else {
    console.log(`✗ Username troppo corto (min 5, attuale ${username.length})`);
}

// ============================================================
// 5. RANGE CHECK ANNIDATI
// ============================================================
console.log("\n5. RANGE CHECK ANNIDATI");
console.log("-".repeat(60));

let punteggio = 85;
let bonus = 10;

console.log(`Punteggio base: ${punteggio}, Bonus: ${bonus}`);

if (punteggio >= 60) {
    console.log("✓ Test superato!");
    
    if (punteggio >= 90) {
        console.log("  ✓ Valutazione: Eccellente");
        
        if (bonus >= 10) {
            console.log("    🌟 Con lode e bonus massimo!");
        }
    } else if (punteggio >= 75) {
        console.log("  ✓ Valutazione: Ottimo");
        
        if (bonus >= 5) {
            console.log("    ⭐ Con bonus apprezzabile");
        }
    } else {
        console.log("  → Valutazione: Sufficiente");
    }
} else {
    console.log("✗ Test non superato");
}

// ============================================================
// 6. CATEGORIZZAZIONE COMPLESSA
// ============================================================
console.log("\n6. CATEGORIZZAZIONE COMPLESSA");
console.log("-".repeat(60));

let tipoUtente = "premium";
let etàUtente = 17;
let paese = "IT";

console.log(`Tipo: "${tipoUtente}", Età: ${etàUtente}, Paese: "${paese}"`);

if (tipoUtente === "premium") {
    console.log("✓ Utente Premium");
    
    if (paese === "IT") {
        console.log("  ✓ Paese: Italia");
        
        if (etàUtente >= 18) {
            console.log("    ✓ Accesso: Contenuti premium completi");
        } else {
            console.log("    ⚠️ Accesso: Contenuti premium limitati (minorenne)");
        }
    } else {
        console.log("  → Paese estero: verificare disponibilità regionale");
    }
} else if (tipoUtente === "free") {
    console.log("Utente Free");
    
    if (etàUtente >= 18) {
        console.log("  → Accesso: Contenuti base per adulti");
    } else {
        console.log("  → Accesso: Contenuti base per minorenni");
    }
} else {
    console.log("Tipo utente non riconosciuto");
}

// ============================================================
// 7. CONTROLLO INVENTARIO COMPLESSO
// ============================================================
console.log("\n7. CONTROLLO INVENTARIO COMPLESSO");
console.log("-".repeat(60));

let quantitàRichiesta = 5;
let quantitàDisponibile = 8;
let èInPromozione = true;
let prezzoUnitario = 29.99;

console.log(`Richiesta: ${quantitàRichiesta} unità`);
console.log(`Disponibile: ${quantitàDisponibile} unità`);
console.log(`Promozione: ${èInPromozione}`);

if (quantitàDisponibile >= quantitàRichiesta) {
    console.log("✓ Quantità disponibile");
    
    let totale = quantitàRichiesta * prezzoUnitario;
    
    if (quantitàRichiesta >= 5) {
        console.log("  ✓ Ordine >= 5 unità: sconto quantità 10%");
        totale *= 0.9;
        
        if (èInPromozione) {
            console.log("    ✓ + Promozione attiva: ulteriore 5%");
            totale *= 0.95;
        }
    } else {
        if (èInPromozione) {
            console.log("  ✓ Promozione attiva: sconto 5%");
            totale *= 0.95;
        }
    }
    
    console.log(`  💰 Totale finale: €${totale.toFixed(2)}`);
} else {
    console.log(`✗ Quantità insufficiente (mancano ${quantitàRichiesta - quantitàDisponibile} unità)`);
}

// ============================================================
// 8. SISTEMA DI AUTENTICAZIONE MULTI-LIVELLO
// ============================================================
console.log("\n8. SISTEMA DI AUTENTICAZIONE MULTI-LIVELLO");
console.log("-".repeat(60));

let credenziali = {
    username: "admin",
    password: "correct",
    twoFactor: "123456",
    ipWhitelisted: true
};

console.log("Tentativo di accesso:", credenziali);

if (credenziali.username === "admin") {
    console.log("✓ Step 1: Username corretto");
    
    if (credenziali.password === "correct") {
        console.log("  ✓ Step 2: Password corretta");
        
        if (credenziali.twoFactor === "123456") {
            console.log("    ✓ Step 3: 2FA verificato");
            
            if (credenziali.ipWhitelisted) {
                console.log("      ✓ Step 4: IP autorizzato");
                console.log("      🎉 ACCESSO CONSENTITO!");
            } else {
                console.log("      ✗ Step 4: IP non autorizzato");
            }
        } else {
            console.log("    ✗ Step 3: Codice 2FA errato");
        }
    } else {
        console.log("  ✗ Step 2: Password errata");
    }
} else {
    console.log("✗ Step 1: Username non trovato");
}

// ============================================================
// 9. ALTERNATIVA: OPERATORI LOGICI VS IF ANNIDATI
// ============================================================
console.log("\n9. ALTERNATIVA: OPERATORI LOGICI VS IF ANNIDATI");
console.log("-".repeat(60));

let etàCheck = 25;
let patenteCheck = true;
let assicurazioneCheck = true;

console.log(`Età: ${etàCheck}, Patente: ${patenteCheck}, Assicurazione: ${assicurazioneCheck}`);

// Versione con if annidati (verbosa)
console.log("\n📋 Versione con IF annidati:");
if (etàCheck >= 18) {
    if (patenteCheck) {
        if (assicurazioneCheck) {
            console.log("✓ Può noleggiare auto");
        }
    }
}

// Versione con operatori logici (compatta)
console.log("\n📋 Versione con operatori logici (&&):");
if (etàCheck >= 18 && patenteCheck && assicurazioneCheck) {
    console.log("✓ Può noleggiare auto");
}

console.log("\n💡 Quando usare if annidati:");
console.log("  - Quando ogni livello richiede azioni diverse");
console.log("  - Per fornire messaggi di errore specifici");
console.log("  - Quando la logica è sequenziale");

console.log("\n💡 Quando usare operatori logici:");
console.log("  - Quando servono tutte le condizioni (AND)");
console.log("  - Per codice più compatto e leggibile");
console.log("  - Quando non servono azioni intermedie");

// ============================================================
// 10. CASI D'USO PRATICI AVANZATI
// ============================================================
console.log("\n10. CASI D'USO PRATICI AVANZATI");
console.log("-".repeat(60));

// Sistema di raccomandazione film
let etàSpettatore = 16;
let tipoFilm = "azione";
let haAbbonamentoPremium = false;
let disponibilitàRegionale = true;

console.log(`Età: ${etàSpettatore}, Tipo: "${tipoFilm}", Premium: ${haAbbonamentoPremium}`);

if (disponibilitàRegionale) {
    console.log("✓ Film disponibile nella tua regione");
    
    if (tipoFilm === "horror" || tipoFilm === "violento") {
        if (etàSpettatore >= 18) {
            console.log("  ✓ Età appropriata per contenuto");
            
            if (haAbbonamentoPremium) {
                console.log("    ✓ Accesso completo (Premium)");
            } else {
                console.log("    ⚠️ Disponibile con pubblicità (Free)");
            }
        } else {
            console.log("  ✗ Contenuto vietato ai minori");
        }
    } else {
        console.log("  ✓ Contenuto adatto a tutte le età");
        
        if (haAbbonamentoPremium) {
            console.log("    ✓ Visione 4K senza pubblicità");
        } else {
            console.log("    → Visione SD con pubblicità");
        }
    }
} else {
    console.log("✗ Film non disponibile nella tua regione");
}

// Calcolo prezzo biglietto aereo con fattori multipli
let destinazione = "internazionale";
let classeVolo = "economy";
let bagagliExtra = 2;
let èFestivo = true;

console.log(`\nDestinazione: ${destinazione}, Classe: ${classeVolo}`);
console.log(`Bagagli extra: ${bagagliExtra}, Festivo: ${èFestivo}`);

let prezzoBiglietto = 0;

if (destinazione === "nazionale") {
    prezzoBiglietto = 100;
    console.log("Base nazionale: €100");
} else if (destinazione === "internazionale") {
    prezzoBiglietto = 500;
    console.log("✓ Base internazionale: €500");
    
    if (classeVolo === "business") {
        prezzoBiglietto += 300;
        console.log("  + Business class: €300");
        
        if (bagagliExtra > 0) {
            let costoBagagli = bagagliExtra * 30;
            prezzoBiglietto += costoBagagli;
            console.log(`    + ${bagagliExtra} bagagli extra: €${costoBagagli}`);
        }
    } else {
        if (bagagliExtra > 0) {
            let costoBagagli = bagagliExtra * 50;
            prezzoBiglietto += costoBagagli;
            console.log(`  + ${bagagliExtra} bagagli extra: €${costoBagagli}`);
        }
    }
    
    if (èFestivo) {
        let supplementoFestivo = prezzoBiglietto * 0.15;
        prezzoBiglietto += supplementoFestivo;
        console.log(`  + Supplemento festivo (15%): €${supplementoFestivo.toFixed(2)}`);
    }
}

console.log(`💰 TOTALE: €${prezzoBiglietto.toFixed(2)}`);

// ============================================================
// BEST PRACTICES E REMINDER
// ============================================================
console.log("\n" + "=".repeat(60));
console.log("BEST PRACTICES");
console.log("=".repeat(60));

console.log(`
✓ Usa if annidati quando serve logica sequenziale
✓ Limita la profondità a 2-3 livelli max
✓ Indenta correttamente per leggibilità
✓ Considera operatori logici (&&, ||) per condizioni multiple semplici
✓ Estrai logiche complesse in funzioni separate
✓ Ogni livello deve avere uno scopo chiaro
✓ Fornisci feedback specifico per ogni livello
✓ Usa early return per evitare nesting eccessivo
✓ Commenta la logica di ogni livello di nesting
✓ Se hai >3 livelli, refactoring consigliato

⚠️ ANTI-PATTERN da evitare:
✗ Più di 4-5 livelli di nesting (piramide di doom)
✗ If annidati quando basta operatore && o ||
✗ Duplicazione codice in branch diversi
✗ Condizioni complesse senza variabili esplicative

💡 ALTERNATIVE:
→ Early return in funzioni
→ Guard clauses
→ Operatori logici (&&, ||)
→ Operatore ternario per assegnazioni
→ Switch statement per molti valori
→ Funzioni helper separate
`);

console.log("=".repeat(60));
console.log("Fine esempi 01.04 - If Annidati");
console.log("=".repeat(60));
