/**
 * 01.02 - If...Else
 * 
 * Esempi completi sull'istruzione if...else in JavaScript.
 * L'else fornisce un blocco alternativo quando la condizione è falsa.
 */

console.log("=".repeat(60));
console.log("01.02 - IF...ELSE");
console.log("=".repeat(60));

// ============================================================
// 1. SINTASSI BASE IF...ELSE
// ============================================================
console.log("\n1. SINTASSI BASE IF...ELSE");
console.log("-".repeat(60));

// Esempio base
let ora = 20;
console.log(`Ora corrente: ${ora}:00`);

if (ora < 18) {
    console.log("Buongiorno!");
} else {
    console.log("✓ Buonasera!");
}

// Esempio con numeri
let età = 15;
console.log(`\nEtà: ${età} anni`);

if (età >= 18) {
    console.log("Sei maggiorenne");
} else {
    console.log("✓ Sei minorenne");
}

// Esempio con boolean
let èDisponibile = false;
console.log(`\nProdotto disponibile? ${èDisponibile}`);

if (èDisponibile) {
    console.log("Puoi acquistare");
} else {
    console.log("✓ Prodotto esaurito");
}

// ============================================================
// 2. IF...ELSE CON CONFRONTI
// ============================================================
console.log("\n2. IF...ELSE CON CONFRONTI");
console.log("-".repeat(60));

// Maggiore/minore
let temperatura = 15;
console.log(`Temperatura: ${temperatura}°C`);

if (temperatura >= 20) {
    console.log("Fa caldo");
} else {
    console.log("✓ Fa freddo");
}

// Uguaglianza
let password = "secret123";
let inputPassword = "wrong";
console.log(`\nPassword corretta: "${password}"`);
console.log(`Input utente: "${inputPassword}"`);

if (inputPassword === password) {
    console.log("Accesso consentito");
} else {
    console.log("✓ Password errata!");
}

// Diversità
let stato = "offline";
console.log(`\nStato connessione: "${stato}"`);

if (stato !== "offline") {
    console.log("Connesso");
} else {
    console.log("✓ Non connesso");
}

// ============================================================
// 3. IF...ELSE CON OPERAZIONI
// ============================================================
console.log("\n3. IF...ELSE CON OPERAZIONI");
console.log("-".repeat(60));

// Numero pari/dispari
let numero = 7;
console.log(`Numero: ${numero}`);

if (numero % 2 === 0) {
    console.log("Il numero è pari");
} else {
    console.log("✓ Il numero è dispari");
}

// Divisibilità
let valore = 17;
let divisore = 3;
console.log(`\n${valore} è divisibile per ${divisore}?`);

if (valore % divisore === 0) {
    console.log(`Sì, ${valore} / ${divisore} = ${valore / divisore}`);
} else {
    console.log(`✓ No, resto = ${valore % divisore}`);
}

// Range check
let punteggio = 45;
let soglia = 50;
console.log(`\nPunteggio: ${punteggio}, Soglia: ${soglia}`);

if (punteggio >= soglia) {
    console.log("Test superato!");
} else {
    console.log(`✓ Test non superato (mancano ${soglia - punteggio} punti)`);
}

// ============================================================
// 4. IF...ELSE CON STRINGHE
// ============================================================
console.log("\n4. IF...ELSE CON STRINGHE");
console.log("-".repeat(60));

// Confronto esatto
let linguaggio = "Python";
console.log(`Linguaggio: "${linguaggio}"`);

if (linguaggio === "JavaScript") {
    console.log("Stai usando JavaScript");
} else {
    console.log(`✓ Stai usando ${linguaggio}`);
}

// Stringa vuota
let nome = "";
console.log(`\nNome utente: "${nome}"`);

if (nome) {
    console.log(`Benvenuto, ${nome}!`);
} else {
    console.log("✓ Per favore, inserisci il tuo nome");
}

// Lunghezza stringa
let username = "usr";
let minLength = 5;
console.log(`\nUsername: "${username}" (min ${minLength} caratteri)`);

if (username.length >= minLength) {
    console.log("Username valido");
} else {
    console.log(`✓ Username troppo corto (${username.length} < ${minLength})`);
}

// Metodi stringa
let email = "user@example.com";
console.log(`\nEmail: "${email}"`);

if (email.includes("@")) {
    console.log("✓ Email contiene @");
} else {
    console.log("Email non valida");
}

// ============================================================
// 5. IF...ELSE CON VALORI TRUTHY/FALSY
// ============================================================
console.log("\n5. IF...ELSE CON VALORI TRUTHY/FALSY");
console.log("-".repeat(60));

// Numero zero vs non-zero
let saldo = 0;
console.log(`Saldo: €${saldo}`);

if (saldo) {
    console.log("Hai fondi disponibili");
} else {
    console.log("✓ Saldo esaurito (0 è falsy)");
}

// Undefined
let variabileNonDefinita;
console.log(`\nVariabile: ${variabileNonDefinita}`);

if (variabileNonDefinita) {
    console.log("Variabile definita");
} else {
    console.log("✓ Variabile undefined (falsy)");
}

// Null
let risultato = null;
console.log(`\nRisultato: ${risultato}`);

if (risultato) {
    console.log("Risultato presente");
} else {
    console.log("✓ Risultato null (falsy)");
}

// Array vuoto (truthy!)
let lista = [];
console.log(`\nArray: [${lista}], length: ${lista.length}`);

if (lista) {
    console.log("✓ Array esiste (truthy anche se vuoto)");
} else {
    console.log("Array non esiste");
}

// Verifica corretta dell'array
if (lista.length) {
    console.log("Array ha elementi");
} else {
    console.log("✓ Array vuoto (verifica .length)");
}

// ============================================================
// 6. IF...ELSE CON OPERATORI LOGICI
// ============================================================
console.log("\n6. IF...ELSE CON OPERATORI LOGICI");
console.log("-".repeat(60));

// AND (&&)
let haPermessi = true;
let èAttivo = false;
console.log(`Ha permessi? ${haPermessi}, È attivo? ${èAttivo}`);

if (haPermessi && èAttivo) {
    console.log("Accesso consentito");
} else {
    console.log("✓ Accesso negato (serve entrambe le condizioni)");
}

// OR (||)
let èAmministratore = false;
let èModeratote = true;
console.log(`\nAmministratore? ${èAmministratore}, Moderatore? ${èModeratote}`);

if (èAmministratore || èModeratote) {
    console.log("✓ Ha privilegi speciali");
} else {
    console.log("Utente normale");
}

// NOT (!)
let èBloccato = true;
console.log(`\nAccount bloccato? ${èBloccato}`);

if (!èBloccato) {
    console.log("Account attivo");
} else {
    console.log("✓ Account bloccato");
}

// ============================================================
// 7. IF...ELSE CON ARRAY E OGGETTI
// ============================================================
console.log("\n7. IF...ELSE CON ARRAY E OGGETTI");
console.log("-".repeat(60));

// Array includes
let frutti = ["mela", "banana", "arancia"];
let fruttoCercato = "pera";
console.log(`Frutti disponibili: [${frutti}]`);
console.log(`Cerco: "${fruttoCercato}"`);

if (frutti.includes(fruttoCercato)) {
    console.log(`${fruttoCercato} trovata!`);
} else {
    console.log(`✓ ${fruttoCercato} non disponibile`);
}

// Proprietà oggetto
let utente = {
    nome: "Mario",
    età: 17,
    verificato: false
};
console.log(`\nUtente:`, utente);

if (utente.verificato) {
    console.log("Email verificata");
} else {
    console.log("✓ Email non verificata");
}

if (utente.età >= 18) {
    console.log("Maggiorenne");
} else {
    console.log(`✓ Minorenne (${18 - utente.età} anni per maggiore età)`);
}

// ============================================================
// 8. IF...ELSE ANNIDATO (PREVIEW)
// ============================================================
console.log("\n8. IF...ELSE ANNIDATO (PREVIEW)");
console.log("-".repeat(60));

let punteggioTest = 65;
console.log(`Punteggio: ${punteggioTest}`);

if (punteggioTest >= 60) {
    console.log("✓ Test superato");
    
    // Nested if dentro il blocco true
    if (punteggioTest >= 90) {
        console.log("  → Con lode!");
    } else {
        console.log("  → Punteggio standard");
    }
} else {
    console.log("Test non superato");
}

// ============================================================
// 9. ASSEGNAZIONE CON IF...ELSE
// ============================================================
console.log("\n9. ASSEGNAZIONE CON IF...ELSE");
console.log("-".repeat(60));

// Assegnare un valore in base a condizione
let orario = 14;
let saluto;

console.log(`Orario: ${orario}:00`);

if (orario < 12) {
    saluto = "Buongiorno";
} else {
    saluto = "Buon pomeriggio";
}

console.log(`✓ Saluto: "${saluto}"`);

// Calcolo condizionale
let importo = 150;
let sconto;

console.log(`\nImporto: €${importo}`);

if (importo >= 100) {
    sconto = 0.10; // 10%
} else {
    sconto = 0.05; // 5%
}

let totale = importo * (1 - sconto);
console.log(`✓ Sconto: ${sconto * 100}%, Totale: €${totale.toFixed(2)}`);

// ============================================================
// 10. CASI D'USO PRATICI
// ============================================================
console.log("\n10. CASI D'USO PRATICI");
console.log("-".repeat(60));

// Login validation
let credenziali = "admin";
let passwordCorreta = "admin123";
let tentativo = "wrong";

console.log(`Credenziali corrette: "${passwordCorreta}"`);
console.log(`Tentativo: "${tentativo}"`);

if (tentativo === passwordCorreta) {
    console.log("Login effettuato con successo");
} else {
    console.log("✓ Credenziali errate. Riprova.");
}

// Disponibilità prodotto
let quantitàRichiesta = 5;
let quantitàDisponibile = 3;

console.log(`\nRichiesti: ${quantitàRichiesta}, Disponibili: ${quantitàDisponibile}`);

if (quantitàDisponibile >= quantitàRichiesta) {
    console.log("Ordine confermato");
} else {
    console.log(`✓ Stock insufficiente (mancano ${quantitàRichiesta - quantitàDisponibile} unità)`);
}

// Validazione età
let etàUtente = 16;
let etàMinima = 18;

console.log(`\nEtà utente: ${etàUtente}, Età minima: ${etàMinima}`);

if (etàUtente >= etàMinima) {
    console.log("Accesso consentito");
} else {
    console.log(`✓ Accesso negato (serve ${etàMinima - etàUtente} anni in più)`);
}

// File upload check
let dimensioneFile = 6; // MB
let limiteMax = 5; // MB

console.log(`\nDimensione file: ${dimensioneFile}MB, Limite: ${limiteMax}MB`);

if (dimensioneFile <= limiteMax) {
    console.log("Upload consentito");
} else {
    console.log(`✓ File troppo grande (eccede di ${dimensioneFile - limiteMax}MB)`);
}

// Status check
let responseStatus = 404;

console.log(`\nHTTP Status: ${responseStatus}`);

if (responseStatus === 200) {
    console.log("Richiesta riuscita");
} else {
    console.log(`✓ Errore: ${responseStatus}`);
}

// Controllo parità
let totalePagamento = 101;

console.log(`\nTotale: €${totalePagamento}`);

if (totalePagamento % 1 === 0) {
    console.log("✓ Importo intero (nessun centesimo)");
} else {
    console.log("Importo con decimali");
}

// ============================================================
// BEST PRACTICES E REMINDER
// ============================================================
console.log("\n" + "=".repeat(60));
console.log("BEST PRACTICES");
console.log("=".repeat(60));

console.log(`
✓ Usa if...else per decisioni binarie (una o l'altra)
✓ Il blocco else è opzionale ma rende il codice più chiaro
✓ Evita else vuoti: se non serve, usa solo if
✓ Considera l'operatore ternario (? :) per assegnazioni semplici
✓ Mantieni i blocchi if ed else bilanciati in complessità
✓ L'else cattura TUTTI i casi non gestiti dall'if
✓ Usa graffe {} sempre, anche per blocchi singoli
✓ Commenta perché una condizione è vera o falsa
✓ Non duplicare codice nei blocchi if/else
✓ Per più di 2 condizioni, considera if...else if...else
`);

console.log("=".repeat(60));
console.log("Fine esempi 01.02 - If...Else");
console.log("=".repeat(60));
