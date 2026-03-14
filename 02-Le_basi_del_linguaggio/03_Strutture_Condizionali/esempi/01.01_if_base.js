/**
 * 01.01 - If Base
 * 
 * Esempi completi sull'istruzione if fondamentale in JavaScript.
 * L'if esegue un blocco di codice solo se la condizione è vera.
 */

console.log("=".repeat(60));
console.log("01.01 - IF BASE");
console.log("=".repeat(60));

// ============================================================
// 1. SINTASSI BASE DELL'IF
// ============================================================
console.log("\n1. SINTASSI BASE DELL'IF");
console.log("-".repeat(60));

// If semplice con condizione vera
let temperatura = 25;
console.log(`Temperatura: ${temperatura}°C`);

if (temperatura > 20) {
    console.log("✓ È una giornata calda!");
}

// If semplice con condizione falsa
let pioggia = false;
console.log(`\nSta piovendo? ${pioggia}`);

if (pioggia) {
    console.log("Porta l'ombrello!"); // Non viene eseguito
}
console.log("(nessun output perché la condizione è falsa)");

// If con espressione più complessa
let età = 25;
console.log(`\nEtà: ${età} anni`);

if (età >= 18) {
    console.log("✓ Sei maggiorenne");
}

// ============================================================
// 2. IF CON OPERATORI DI CONFRONTO
// ============================================================
console.log("\n2. IF CON OPERATORI DI CONFRONTO");
console.log("-".repeat(60));

let punteggio = 85;
console.log(`Punteggio: ${punteggio}`);

// Maggiore di
if (punteggio > 80) {
    console.log("✓ Punteggio superiore a 80");
}

// Maggiore o uguale
if (punteggio >= 85) {
    console.log("✓ Punteggio almeno 85");
}

// Minore di
let velocità = 45;
console.log(`\nVelocità: ${velocità} km/h (limite: 50)`);

if (velocità < 50) {
    console.log("✓ Velocità entro i limiti");
}

// Uguaglianza stretta (===)
let codice = "ABC123";
console.log(`\nCodice: "${codice}"`);

if (codice === "ABC123") {
    console.log("✓ Codice corretto!");
}

// Diversità stretta (!==)
let stato = "attivo";
console.log(`\nStato: "${stato}"`);

if (stato !== "disabilitato") {
    console.log("✓ Il servizio è disponibile");
}

// ============================================================
// 3. IF CON VARIABILI BOOLEANE
// ============================================================
console.log("\n3. IF CON VARIABILI BOOLEANE");
console.log("-".repeat(60));

// Variabile booleana diretta
let èLoggato = true;
console.log(`Utente loggato? ${èLoggato}`);

if (èLoggato) {
    console.log("✓ Benvenuto nell'area riservata!");
}

// Variabile booleana negata
let èBloccato = false;
console.log(`\nAccount bloccato? ${èBloccato}`);

if (!èBloccato) {
    console.log("✓ Account attivo e funzionante");
}

// Risultato di un'espressione booleana
let haPermessi = true;
let èVerificato = true;
console.log(`\nHa permessi? ${haPermessi}, È verificato? ${èVerificato}`);

if (haPermessi && èVerificato) {
    console.log("✓ Accesso consentito");
}

// ============================================================
// 4. IF CON VALORI TRUTHY E FALSY
// ============================================================
console.log("\n4. IF CON VALORI TRUTHY E FALSY");
console.log("-".repeat(60));

// Stringa non vuota (truthy)
let username = "Mario";
console.log(`Username: "${username}"`);

if (username) {
    console.log(`✓ Benvenuto, ${username}!`);
}

// Stringa vuota (falsy)
let email = "";
console.log(`\nEmail: "${email}"`);

if (email) {
    console.log("Email presente"); // Non eseguito
} else {
    console.log("✗ Email mancante");
}

// Numero diverso da zero (truthy)
let saldo = 150;
console.log(`\nSaldo: €${saldo}`);

if (saldo) {
    console.log("✓ Hai fondi disponibili");
}

// Zero (falsy)
let errori = 0;
console.log(`\nNumero errori: ${errori}`);

if (errori) {
    console.log("Ci sono errori"); // Non eseguito
}
console.log("✓ Nessun errore (0 è falsy)");

// Array (sempre truthy, anche se vuoto!)
let items = [];
console.log(`\nArray: [${items}], length: ${items.length}`);

if (items) {
    console.log("⚠️ Array esiste (sempre truthy anche se vuoto!)");
}

if (items.length) {
    console.log("Array ha elementi");
} else {
    console.log("✓ Array vuoto (verifica con .length)");
}

// ============================================================
// 5. IF CON OPERAZIONI MATEMATICHE
// ============================================================
console.log("\n5. IF CON OPERAZIONI MATEMATICHE");
console.log("-".repeat(60));

let numero = 42;
console.log(`Numero: ${numero}`);

// Resto della divisione (modulo)
if (numero % 2 === 0) {
    console.log("✓ Il numero è pari");
}

// Multiplo di un numero
let valore = 15;
console.log(`\nValore: ${valore}`);

if (valore % 5 === 0) {
    console.log("✓ È multiplo di 5");
}

// Calcolo nell'if
let prezzo = 50;
let sconto = 10;
console.log(`\nPrezzo: €${prezzo}, Sconto: ${sconto}%`);

if (prezzo - (prezzo * sconto / 100) < 50) {
    console.log("✓ Prezzo scontato sotto i 50€");
}

// ============================================================
// 6. IF CON CONFRONTI DI STRINGHE
// ============================================================
console.log("\n6. IF CON CONFRONTI DI STRINGHE");
console.log("-".repeat(60));

let linguaggio = "JavaScript";
console.log(`Linguaggio: "${linguaggio}"`);

if (linguaggio === "JavaScript") {
    console.log("✓ Stai imparando JavaScript!");
}

// Confronto case-sensitive
let input = "javascript";
console.log(`\nInput utente: "${input}"`);

if (input === "JavaScript") {
    console.log("Match esatto");
} else {
    console.log("✗ Case diverso! (JavaScript !== javascript)");
}

// Confronto case-insensitive
if (input.toLowerCase() === "javascript") {
    console.log("✓ Match case-insensitive");
}

// Confronto lessicografico
let parola1 = "apple";
let parola2 = "banana";
console.log(`\n"${parola1}" vs "${parola2}"`);

if (parola1 < parola2) {
    console.log(`✓ "${parola1}" viene prima di "${parola2}" alfabeticamente`);
}

// Lunghezza stringa
let password = "secret123";
console.log(`\nPassword: "${password}" (${password.length} caratteri)`);

if (password.length >= 8) {
    console.log("✓ Password abbastanza lunga");
}

// ============================================================
// 7. IF CON METODI DI STRINGA
// ============================================================
console.log("\n7. IF CON METODI DI STRINGA");
console.log("-".repeat(60));

let testo = "Hello, World!";
console.log(`Testo: "${testo}"`);

// includes
if (testo.includes("World")) {
    console.log("✓ Il testo contiene 'World'");
}

// startsWith
if (testo.startsWith("Hello")) {
    console.log("✓ Il testo inizia con 'Hello'");
}

// endsWith
if (testo.endsWith("!")) {
    console.log("✓ Il testo termina con '!'");
}

// match con regex
let codicePostale = "12345";
console.log(`\nCodice postale: "${codicePostale}"`);

if (/^\d{5}$/.test(codicePostale)) {
    console.log("✓ Codice postale valido (5 cifre)");
}

// ============================================================
// 8. IF CON PROPRIETÀ DI OGGETTI E ARRAY
// ============================================================
console.log("\n8. IF CON PROPRIETÀ DI OGGETTI E ARRAY");
console.log("-".repeat(60));

// Lunghezza array
let frutti = ["mela", "banana", "arancia"];
console.log(`Array frutti: [${frutti}]`);

if (frutti.length > 0) {
    console.log(`✓ Ci sono ${frutti.length} frutti`);
}

// Presenza in array
if (frutti.includes("banana")) {
    console.log("✓ Banana è nella lista");
}

// Proprietà di oggetto
let utente = {
    nome: "Mario",
    età: 30,
    premium: true
};
console.log(`\nUtente:`, utente);

if (utente.premium) {
    console.log("✓ Utente premium");
}

if (utente.età >= 18) {
    console.log("✓ Utente maggiorenne");
}

// Verifica esistenza proprietà
if (utente.nome) {
    console.log(`✓ Nome presente: ${utente.nome}`);
}

// ============================================================
// 9. IF A BLOCCO SINGOLO VS MULTIPLO
// ============================================================
console.log("\n9. IF A BLOCCO SINGOLO VS MULTIPLO");
console.log("-".repeat(60));

let count = 5;
console.log(`Count: ${count}`);

// Blocco singolo (sconsigliato senza graffe)
if (count > 0)
    console.log("⚠️ Singola istruzione senza graffe");

// Blocco singolo con graffe (consigliato)
if (count > 0) {
    console.log("✓ Singola istruzione con graffe (best practice)");
}

// Blocco multiplo (richiede graffe)
if (count > 0) {
    let messaggio = "Il contatore è positivo";
    console.log(`✓ ${messaggio}: ${count}`);
}

// ============================================================
// 10. CASI D'USO PRATICI
// ============================================================
console.log("\n10. CASI D'USO PRATICI");
console.log("-".repeat(60));

// Validazione input
let inputEtà = 25;
console.log(`Input età: ${inputEtà}`);

if (inputEtà > 0 && inputEtà < 150) {
    console.log("✓ Età valida");
}

// Controllo disponibilità
let stock = 5;
let richiesta = 3;
console.log(`\nStock: ${stock}, Richiesta: ${richiesta}`);

if (stock >= richiesta) {
    console.log("✓ Prodotto disponibile");
}

// Controllo scadenza
let dataScadenza = new Date("2025-12-31");
let oggi = new Date();
console.log(`\nScadenza: ${dataScadenza.toLocaleDateString()}`);

if (dataScadenza > oggi) {
    console.log("✓ Ancora valido");
}

// Verifica permessi
let ruolo = "admin";
console.log(`\nRuolo utente: "${ruolo}"`);

if (ruolo === "admin") {
    console.log("✓ Accesso completo garantito");
}

// Controllo range
let temperatura2 = 22;
console.log(`\nTemperatura: ${temperatura2}°C`);

if (temperatura2 >= 20 && temperatura2 <= 25) {
    console.log("✓ Temperatura confortevole");
}

// Feature detection
let hasFetch = typeof fetch !== 'undefined';
console.log(`\nFetch API disponibile? ${hasFetch}`);

if (hasFetch) {
    console.log("✓ Puoi usare fetch()");
}

// ============================================================
// BEST PRACTICES E REMINDER
// ============================================================
console.log("\n" + "=".repeat(60));
console.log("BEST PRACTICES");
console.log("=".repeat(60));

console.log(`
✓ Usa sempre le graffe {} anche per singole istruzioni
✓ Usa === invece di == per confronti
✓ Verifica array.length, non solo l'array
✓ Attenzione ai valori falsy: 0, "", false, null, undefined, NaN
✓ Usa nomi di variabili booleane con è/ha (èValido, haPermessi)
✓ Mantieni le condizioni semplici e leggibili
✓ Non assegnare (=) nelle condizioni, usa confronto (===)
✓ Per stringhe, considera case-insensitive con toLowerCase()
✓ Estrai condizioni complesse in variabili con nomi significativi
✓ Commenta condizioni non ovvie
`);

console.log("=".repeat(60));
console.log("Fine esempi 01.01 - If Base");
console.log("=".repeat(60));
