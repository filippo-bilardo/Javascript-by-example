/**
 * 01.05 - Truthy e Falsy con If
 * 
 * Esempi completi sui valori truthy e falsy in JavaScript.
 * Comprendere come JavaScript valuta le condizioni booleane.
 */

console.log("=".repeat(60));
console.log("01.05 - TRUTHY E FALSY CON IF");
console.log("=".repeat(60));

// ============================================================
// 1. I 6 VALORI FALSY IN JAVASCRIPT
// ============================================================
console.log("\n1. I 6 VALORI FALSY IN JAVASCRIPT");
console.log("-".repeat(60));

console.log("Esistono esattamente 6 valori falsy in JavaScript:\n");

// 1. false
let valore1 = false;
console.log(`false: ${valore1}`);
if (valore1) {
    console.log("  Truthy");
} else {
    console.log("  ✓ Falsy");
}

// 2. 0 (zero)
let valore2 = 0;
console.log(`\n0 (zero): ${valore2}`);
if (valore2) {
    console.log("  Truthy");
} else {
    console.log("  ✓ Falsy");
}

// 3. "" (stringa vuota)
let valore3 = "";
console.log(`\n"" (stringa vuota): "${valore3}"`);
if (valore3) {
    console.log("  Truthy");
} else {
    console.log("  ✓ Falsy");
}

// 4. null
let valore4 = null;
console.log(`\nnull: ${valore4}`);
if (valore4) {
    console.log("  Truthy");
} else {
    console.log("  ✓ Falsy");
}

// 5. undefined
let valore5 = undefined;
console.log(`\nundefined: ${valore5}`);
if (valore5) {
    console.log("  Truthy");
} else {
    console.log("  ✓ Falsy");
}

// 6. NaN
let valore6 = NaN;
console.log(`\nNaN: ${valore6}`);
if (valore6) {
    console.log("  Truthy");
} else {
    console.log("  ✓ Falsy");
}

console.log("\n⚠️ TUTTI gli altri valori sono TRUTHY!");

// ============================================================
// 2. VALORI TRUTHY COMUNI
// ============================================================
console.log("\n2. VALORI TRUTHY COMUNI");
console.log("-".repeat(60));

// Numeri diversi da zero
let numPositivo = 1;
let numNegativo = -1;
let numGrande = 999;

console.log(`Numero positivo ${numPositivo}:`);
if (numPositivo) console.log("  ✓ Truthy");

console.log(`Numero negativo ${numNegativo}:`);
if (numNegativo) console.log("  ✓ Truthy");

console.log(`Numero grande ${numGrande}:`);
if (numGrande) console.log("  ✓ Truthy");

// Stringhe non vuote
let stringa = "testo";
let spazio = " "; // Spazio è una stringa non vuota!

console.log(`\nStringa "testo":`);
if (stringa) console.log("  ✓ Truthy");

console.log(`Stringa con spazio " ":`);
if (spazio) console.log("  ✓ Truthy (anche solo spazio!)");

// Oggetti e array (SEMPRE truthy, anche se vuoti!)
let arrayVuoto = [];
let oggettoVuoto = {};

console.log(`\nArray vuoto []:`);
if (arrayVuoto) console.log("  ✓ Truthy (⚠️ anche se vuoto!)");

console.log(`Oggetto vuoto {}:`);
if (oggettoVuoto) console.log("  ✓ Truthy (⚠️ anche se vuoto!)");

// Funzioni
let funzione = function() {};

console.log(`\nFunzione:`);
if (funzione) console.log("  ✓ Truthy");

// Infinity
let infinito = Infinity;

console.log(`\nInfinity:`);
if (infinito) console.log("  ✓ Truthy");

// ============================================================
// 3. TRAPPOLE COMUNI CON FALSY
// ============================================================
console.log("\n3. TRAPPOLE COMUNI CON FALSY");
console.log("-".repeat(60));

// Zero vs numero mancante
let contatore = 0;
console.log(`Contatore: ${contatore}`);

// ❌ SBAGLIATO: zero è falsy!
if (contatore) {
    console.log("  Ha valore");
} else {
    console.log("  ✓ Non ha valore (MA 0 È UN VALORE VALIDO!)");
}

// ✓ CORRETTO: confronto esplicito
if (contatore !== undefined && contatore !== null) {
    console.log(`  ✓ Ha valore: ${contatore} (anche se zero)`);
}

// Stringa "0" vs numero 0
let stringaZero = "0";
let numeroZero = 0;

console.log(`\nStringa "0":`);
if (stringaZero) {
    console.log("  ✓ Truthy (stringa non vuota!)");
}

console.log(`Numero 0:`);
if (numeroZero) {
    console.log("  Truthy");
} else {
    console.log("  ✓ Falsy");
}

// Array vuoto (truthy) vs lunghezza (falsy)
let listaVuota = [];

console.log(`\nArray []:`);
if (listaVuota) {
    console.log("  ✓ Array è truthy");
}

console.log(`Array.length (${listaVuota.length}):`);
if (listaVuota.length) {
    console.log("  Length truthy");
} else {
    console.log("  ✓ Length è falsy (0)");
}

// ============================================================
// 4. VALIDAZIONE INPUT CON TRUTHY/FALSY
// ============================================================
console.log("\n4. VALIDAZIONE INPUT CON TRUTHY/FALSY");
console.log("-".repeat(60));

// Esempio: validazione username
function validaUsername(username) {
    console.log(`\nValidazione username: "${username}"`);
    
    if (!username) {
        console.log("  ✗ Username mancante (falsy)");
        return false;
    }
    
    if (username.length < 3) {
        console.log("  ✗ Username troppo corto");
        return false;
    }
    
    console.log("  ✓ Username valido");
    return true;
}

validaUsername("");        // Stringa vuota (falsy)
validaUsername("ab");      // Troppo corto
validaUsername("mario");   // Valido

// Esempio: check dati opzionali
let datiUtente = {
    nome: "Mario",
    cognome: "",
    età: 0,
    email: null,
    telefono: undefined,
    indirizzo: "Via Roma 1"
};

console.log("\nDati utente:", datiUtente);

console.log("\nVerifica campi:");
if (datiUtente.nome) console.log("  ✓ Nome presente");
if (datiUtente.cognome) console.log("  Cognome presente"); else console.log("  ✗ Cognome mancante (stringa vuota)");
if (datiUtente.età) console.log("  Età presente"); else console.log("  ⚠️ Età 0 (falsy, ma potrebbe essere valida!)");
if (datiUtente.email) console.log("  Email presente"); else console.log("  ✗ Email mancante (null)");
if (datiUtente.telefono) console.log("  Telefono presente"); else console.log("  ✗ Telefono mancante (undefined)");
if (datiUtente.indirizzo) console.log("  ✓ Indirizzo presente");

// ============================================================
// 5. DOPPIA NEGAZIONE (!!)
// ============================================================
console.log("\n5. DOPPIA NEGAZIONE (!!)");
console.log("-".repeat(60));

console.log("Conversione esplicita a boolean con !!:\n");

let valori = [true, false, 0, 1, "", "testo", null, undefined, NaN, [], {}];

valori.forEach(val => {
    let strVal = typeof val === 'string' ? `"${val}"` : String(val);
    console.log(`!!${strVal.padEnd(10)} = ${!!val}`);
});

// Uso pratico
let inputUtente = "";
let haInput = !!inputUtente; // Converte a boolean esplicito

console.log(`\nInput: "${inputUtente}"`);
console.log(`haInput (!!inputUtente): ${haInput}`);

// ============================================================
// 6. OPERATORE OR (||) PER DEFAULT
// ============================================================
console.log("\n6. OPERATORE OR (||) PER DEFAULT");
console.log("-".repeat(60));

console.log("|| restituisce il primo valore truthy:\n");

let nome1;
let nomeDefault1 = nome1 || "Ospite";
console.log(`undefined || "Ospite" = "${nomeDefault1}"`);

let nome2 = "";
let nomeDefault2 = nome2 || "Ospite";
console.log(`"" || "Ospite" = "${nomeDefault2}"`);

let nome3 = "Mario";
let nomeDefault3 = nome3 || "Ospite";
console.log(`"Mario" || "Ospite" = "${nomeDefault3}"`);

// Attenzione con 0!
let punteggio1 = 0;
let punteggioODefault1 = punteggio1 || 100;
console.log(`\n⚠️ 0 || 100 = ${punteggioODefault1} (problema: 0 è valido!)`);

// Soluzione con nullish coalescing (??)
let punteggio2 = 0;
let punteggioODefault2 = punteggio2 ?? 100;
console.log(`✓ 0 ?? 100 = ${punteggioODefault2} (corretto con ??)`);

// ============================================================
// 7. OPERATORE AND (&&) PER ESECUZIONE CONDIZIONALE
// ============================================================
console.log("\n7. OPERATORE AND (&&) PER ESECUZIONE CONDIZIONALE");
console.log("-".repeat(60));

console.log("&& esegue il secondo operando solo se il primo è truthy:\n");

let utente1 = { nome: "Mario" };
console.log(`Con utente: utente && console.log()`);
utente1 && console.log(`  ✓ Benvenuto ${utente1.nome}!`);

let utente2 = null;
console.log(`\nSenza utente (null): utente && console.log()`);
utente2 && console.log("  Benvenuto!"); // Non eseguito
console.log("  (nessun output, null è falsy)");

// Catena di accessi sicuri (prima di optional chaining)
let config = { api: { url: "https://api.example.com" } };
let url = config && config.api && config.api.url;
console.log(`\nURL: ${url}`);

// ============================================================
// 8. IF CON CONTROLLI ESPLICITI VS IMPLICITI
// ============================================================
console.log("\n8. IF CON CONTROLLI ESPLICITI VS IMPLICITI");
console.log("-".repeat(60));

let valore = 0;
console.log(`Valore: ${valore}\n`);

// Controllo implicito (truthy/falsy)
console.log("if (valore):");
if (valore) {
    console.log("  Truthy");
} else {
    console.log("  ✓ Falsy (ma 0 potrebbe essere valido!)");
}

// Controllo esplicito
console.log("\nif (valore !== null && valore !== undefined):");
if (valore !== null && valore !== undefined) {
    console.log(`  ✓ Valore presente: ${valore}`);
}

// Controllo tipo specifico
console.log("\nif (typeof valore === 'number'):");
if (typeof valore === 'number') {
    console.log(`  ✓ È un numero: ${valore}`);
}

// ============================================================
// 9. ARRAY E OGGETTI: VERIFICA CORRETTA
// ============================================================
console.log("\n9. ARRAY E OGGETTI: VERIFICA CORRETTA");
console.log("-".repeat(60));

let arrayTest = [];
let oggettoTest = {};

console.log("Array vuoto:\n");

// ❌ SBAGLIATO: array è sempre truthy
if (arrayTest) {
    console.log("  Array esiste (ma potrebbe essere vuoto!)");
}

// ✓ CORRETTO: verifica lunghezza
if (arrayTest.length) {
    console.log("  Array ha elementi");
} else {
    console.log("  ✓ Array vuoto (length === 0)");
}

// ✓ CORRETTO: verifica esplicita
if (arrayTest.length > 0) {
    console.log("  Array ha elementi");
} else {
    console.log("  ✓ Array vuoto (length === 0)");
}

console.log("\nOggetto vuoto:\n");

// ❌ SBAGLIATO: oggetto è sempre truthy
if (oggettoTest) {
    console.log("  Oggetto esiste (ma potrebbe essere vuoto!)");
}

// ✓ CORRETTO: verifica proprietà
if (Object.keys(oggettoTest).length > 0) {
    console.log("  Oggetto ha proprietà");
} else {
    console.log("  ✓ Oggetto vuoto (nessuna proprietà)");
}

// ============================================================
// 10. CASI D'USO PRATICI
// ============================================================
console.log("\n10. CASI D'USO PRATICI");
console.log("-".repeat(60));

// Funzione con parametri opzionali
function creaMessaggio(testo, autore, data) {
    console.log("\nParametri ricevuti:");
    console.log(`  testo: "${testo}"`);
    console.log(`  autore: "${autore}"`);
    console.log(`  data: ${data}`);
    
    // Usa valori di default per parametri falsy
    let testoFinale = testo || "[Messaggio vuoto]";
    let autoreFinale = autore || "Anonimo";
    let dataFinale = data || new Date().toLocaleDateString();
    
    console.log("\nMessaggio creato:");
    console.log(`  "${testoFinale}"`);
    console.log(`  - ${autoreFinale}, ${dataFinale}`);
}

creaMessaggio("Ciao!", "Mario", "08/11/2025");
creaMessaggio("", null, undefined);

// Validazione form con truthy/falsy
function validaForm(dati) {
    console.log("\n\nValidazione form:", dati);
    let errori = [];
    
    if (!dati.email) {
        errori.push("Email richiesta");
    }
    
    if (!dati.password) {
        errori.push("Password richiesta");
    }
    
    if (!dati.accettaTermini) {
        errori.push("Devi accettare i termini");
    }
    
    // Note: età 0 sarebbe falsy ma valida!
    if (dati.età === null || dati.età === undefined) {
        errori.push("Età richiesta");
    }
    
    if (errori.length) {
        console.log("  ✗ Errori trovati:");
        errori.forEach(err => console.log(`    - ${err}`));
        return false;
    }
    
    console.log("  ✓ Form valido!");
    return true;
}

validaForm({
    email: "",
    password: "secret",
    accettaTermini: false,
    età: 0  // Valido ma falsy!
});

validaForm({
    email: "user@example.com",
    password: "secret123",
    accettaTermini: true,
    età: 25
});

// ============================================================
// BEST PRACTICES E REMINDER
// ============================================================
console.log("\n" + "=".repeat(60));
console.log("BEST PRACTICES");
console.log("=".repeat(60));

console.log(`
📋 I 6 VALORI FALSY (memorizza questi!):
  1. false
  2. 0 (zero)
  3. "" (stringa vuota)
  4. null
  5. undefined
  6. NaN

✓ TUTTI gli altri valori sono TRUTHY, inclusi:
  • Numeri diversi da 0 (anche negativi)
  • Stringhe non vuote (anche "0", "false", " ")
  • Array vuoti []
  • Oggetti vuoti {}
  • Funzioni
  • Infinity

⚠️ TRAPPOLE COMUNI:
  ✗ if (array) → sempre true, anche se vuoto!
    ✓ Usa: if (array.length)
  
  ✗ if (oggetto) → sempre true, anche se vuoto!
    ✓ Usa: if (Object.keys(oggetto).length)
  
  ✗ if (numero) → false se numero è 0!
    ✓ Usa: if (numero !== null && numero !== undefined)
  
  ✗ valore || default → problema se valore è 0
    ✓ Usa: valore ?? default (nullish coalescing)

💡 QUANDO USARE:
  • Truthy/falsy: per validazione semplice esistenza
  • Confronto esplicito: quando 0, "", false sono validi
  • typeof: per verificare tipo specifico
  • === null: per verificare null specificamente
  • === undefined: per verificare undefined specificamente

🔧 STRUMENTI UTILI:
  • !!valore → converte a boolean esplicito
  • valore || default → default se falsy
  • valore ?? default → default se null/undefined
  • valore && azione → esegue se truthy
`);

console.log("=".repeat(60));
console.log("Fine esempi 01.05 - Truthy e Falsy");
console.log("=".repeat(60));
