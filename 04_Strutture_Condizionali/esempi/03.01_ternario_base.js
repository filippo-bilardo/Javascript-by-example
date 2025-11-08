/**
 * OPERATORE TERNARIO - BASE
 * 
 * Sintassi: condizione ? espressioneSe True : espressioneSeFalse
 * 
 * L'operatore ternario (anche chiamato operatore condizionale) è l'unico
 * operatore JavaScript che richiede tre operandi. È un modo conciso per
 * scrivere semplici if...else.
 */

console.log("=== 1. SINTASSI BASE DELL'OPERATORE TERNARIO ===\n");

// Sintassi: condizione ? valoreSeVero : valoreSeFalso

let età1 = 20;
let messaggio1 = età1 >= 18 ? "Maggiorenne" : "Minorenne";
console.log("Età:", età1);
console.log("Messaggio:", messaggio1);

// Equivalente con if...else
let età2 = 15;
let messaggio2;
if (età2 >= 18) {
  messaggio2 = "Maggiorenne";
} else {
  messaggio2 = "Minorenne";
}
console.log("\nEtà:", età2);
console.log("Messaggio:", messaggio2);

// Vantaggi del ternario:
// - Più conciso (1 riga vs 5 righe)
// - Restituisce un valore (può essere assegnato)
// - Ideale per assegnazioni condizionali semplici


console.log("\n=== 2. CONFRONTI SEMPLICI ===\n");

// Numeri
let temperatura = 30;
let statoTemp = temperatura > 25 ? "Caldo" : "Normale";
console.log(`Temperatura: ${temperatura}°C → ${statoTemp}`);

let voto = 7;
let risultato = voto >= 6 ? "Promosso" : "Bocciato";
console.log(`Voto: ${voto} → ${risultato}`);

// Stringhe
let nome = "Mario";
let saluto = nome ? `Ciao ${nome}!` : "Ciao!";
console.log(saluto);

let vuoto = "";
let messaggioVuoto = vuoto ? "Presente" : "Assente";
console.log(`Stringa vuota: "${vuoto}" → ${messaggioVuoto}`);

// Booleani
let isLogged = true;
let dashboard = isLogged ? "Dashboard" : "Login";
console.log(`Utente loggato: ${isLogged} → Mostra ${dashboard}`);


console.log("\n=== 3. CON OPERAZIONI MATEMATICHE ===\n");

// Nelle espressioni
let a = 10, b = 5;
let max = a > b ? a : b;
console.log(`max(${a}, ${b}) = ${max}`);

let min = a < b ? a : b;
console.log(`min(${a}, ${b}) = ${min}`);

// Con calcoli
let prezzo = 100;
let hasSconto = true;
let prezzoFinale = hasSconto ? prezzo * 0.8 : prezzo;
console.log(`Prezzo: €${prezzo}, Sconto: ${hasSconto} → Finale: €${prezzoFinale}`);

// Multipli ternari (evita se possibile, ma utile per capire)
let numero = 7;
let pariDispari = numero % 2 === 0 ? "Pari" : "Dispari";
let positivo = numero > 0 ? "Positivo" : "Non positivo";
console.log(`\n${numero} è ${pariDispari} e ${positivo}`);


console.log("\n=== 4. CON STRINGHE E TEMPLATE LITERALS ===\n");

// In template literals
let utente = "Anna";
let messaggioUtente = `Benvenuto ${utente ? utente : "ospite"}!`;
console.log(messaggioUtente);

// Costruzione stringhe
let items = 3;
let etichetta = `Hai ${items} ${items === 1 ? "elemento" : "elementi"}`;
console.log(etichetta);

let files = 1;
let etichettaFile = `${files} file${files !== 1 ? 's' : ''} selezionato${files !== 1 ? 'i' : ''}`;
console.log(etichettaFile);

// Concatenazione
let lingua = "it";
let benvenuto = lingua === "it" ? "Ciao" : lingua === "en" ? "Hello" : "Hola";
console.log(`Lingua: ${lingua} → ${benvenuto}`);


console.log("\n=== 5. VALORI TRUTHY E FALSY ===\n");

// Truthy/Falsy con ternario
let valore1 = 0;
let check1 = valore1 ? "Truthy" : "Falsy";
console.log(`${valore1} → ${check1}`);

let valore2 = "testo";
let check2 = valore2 ? "Truthy" : "Falsy";
console.log(`"${valore2}" → ${check2}`);

let valore3 = null;
let check3 = valore3 ? "Truthy" : "Falsy";
console.log(`${valore3} → ${check3}`);

// Uso pratico
let input = "";
let defaultValue = input ? input : "Valore di default";
console.log(`\nInput: "${input}" → ${defaultValue}`);

// Meglio con OR (ma ternario è più esplicito)
let input2 = "";
let default2 = input2 || "Default con OR";
console.log(`Input: "${input2}" → ${default2}`);


console.log("\n=== 6. IN ASSEGNAZIONI ===\n");

// Assegnazione semplice
let isAdmin = true;
let permessi = isAdmin ? "Tutti" : "Limitati";
console.log(`Admin: ${isAdmin} → Permessi: ${permessi}`);

// Assegnazione multipla (evita, ma esempio)
let user = { nome: "Luca", età: 25 };
let canVote = user.età >= 18 ? true : false;
let canDrink = user.età >= 21 ? true : false;
console.log(`\n${user.nome} (${user.età} anni):`);
console.log(`- Può votare: ${canVote}`);
console.log(`- Può bere (USA): ${canDrink}`);

// Proprietà oggetto
let config = {
  mode: "development",
  apiUrl: "development" === "production" 
    ? "https://api.prod.com" 
    : "http://localhost:3000"
};
console.log("\nConfig:", config);


console.log("\n=== 7. IN FUNZIONI (RETURN) ===\n");

// Return diretto
function isPositive(n) {
  return n > 0 ? "Positivo" : "Non positivo";
}
console.log(`isPositive(5): ${isPositive(5)}`);
console.log(`isPositive(-3): ${isPositive(-3)}`);

// Con parametri default
function saluta(nome) {
  return `Ciao ${nome ? nome : "sconosciuto"}!`;
}
console.log(saluta("Mario"));
console.log(saluta());

// Arrow function
const getAbsValue = (n) => n >= 0 ? n : -n;
console.log(`\ngetAbsValue(10): ${getAbsValue(10)}`);
console.log(`getAbsValue(-10): ${getAbsValue(-10)}`);

// Funzione più complessa
const calcolaSconto = (prezzo, hasSconto) => {
  return hasSconto ? prezzo * 0.9 : prezzo;
};
console.log(`\nPrezzo con sconto: €${calcolaSconto(100, true)}`);
console.log(`Prezzo senza sconto: €${calcolaSconto(100, false)}`);


console.log("\n=== 8. CON ARRAY ===\n");

// Filtro con ternario
let numeri = [1, 2, 3, 4, 5];
let etichette = numeri.map(n => n % 2 === 0 ? `${n} (pari)` : `${n} (dispari)`);
console.log("Numeri con etichette:", etichette);

// Con oggetti array
let prodotti = [
  { nome: "Libro", prezzo: 15, disponibile: true },
  { nome: "Penna", prezzo: 2, disponibile: false },
  { nome: "Quaderno", prezzo: 5, disponibile: true }
];

console.log("\nProdotti:");
prodotti.forEach(p => {
  let stato = p.disponibile ? "Disponibile" : "Esaurito";
  let badge = p.disponibile ? "✓" : "✗";
  console.log(`${badge} ${p.nome} - €${p.prezzo} (${stato})`);
});


console.log("\n=== 9. CON OGGETTI ===\n");

// Proprietà oggetto condizionale
let utente2 = {
  nome: "Paolo",
  età: 30,
  status: 30 >= 18 ? "adulto" : "minore"
};
console.log("Utente:", utente2);

// Accesso proprietà
let persona = { nome: "Sara", cognome: "Rossi" };
let nomeCompleto = persona.cognome 
  ? `${persona.nome} ${persona.cognome}` 
  : persona.nome;
console.log("Nome completo:", nomeCompleto);

// Oggetto dinamico
let isDev = true;
let settings = {
  environment: isDev ? "development" : "production",
  debug: isDev ? true : false,
  apiUrl: isDev ? "localhost:3000" : "api.example.com"
};
console.log("\nSettings:", settings);


console.log("\n=== 10. CASI D'USO PRATICI ===\n");

// 1. Validazione form
function validateEmail(email) {
  return email.includes("@") ? "Email valida" : "Email non valida";
}
console.log("1. Validazione:");
console.log(`  ${validateEmail("test@email.com")}`);
console.log(`  ${validateEmail("invalid")}`);

// 2. Classe CSS condizionale
let isActive = true;
let className = isActive ? "button active" : "button";
console.log(`\n2. Classe CSS: "${className}"`);

// 3. Messaggio carrello
let cartItems = 3;
let cartMessage = cartItems > 0 
  ? `Hai ${cartItems} articoli nel carrello` 
  : "Il carrello è vuoto";
console.log(`\n3. Carrello: ${cartMessage}`);

// 4. Prezzo con IVA
function calcolaPrezzoFinale(prezzo, includiIva) {
  return includiIva ? prezzo * 1.22 : prezzo;
}
console.log("\n4. Prezzo:");
console.log(`  Senza IVA: €${calcolaPrezzoFinale(100, false).toFixed(2)}`);
console.log(`  Con IVA: €${calcolaPrezzoFinale(100, true).toFixed(2)}`);

// 5. Icona stato
let isOnline = true;
let statusIcon = isOnline ? "🟢" : "🔴";
let statusText = isOnline ? "Online" : "Offline";
console.log(`\n5. Stato utente: ${statusIcon} ${statusText}`);

// 6. Pluralizzazione
function formatCount(count, singolare, plurale) {
  return `${count} ${count === 1 ? singolare : plurale}`;
}
console.log("\n6. Plurali:");
console.log(`  ${formatCount(1, "file", "files")}`);
console.log(`  ${formatCount(5, "file", "files")}`);
console.log(`  ${formatCount(0, "elemento", "elementi")}`);

console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO OPERATORE TERNARIO BASE");
console.log("=".repeat(50));
console.log(`
Sintassi: condizione ? valoreSeVero : valoreSeFalso

Quando usare:
✓ Assegnazioni condizionali semplici
✓ Return in funzioni
✓ Valori in oggetti/array
✓ Costruzione stringhe/template literals

Quando NON usare:
✗ Condizioni complesse (usa if-else)
✗ Più di 2-3 livelli annidati (illeggibile)
✗ Quando serve eseguire codice complesso (usa if-else)

Best practices:
- Mantieni l'espressione su 1 riga se possibile
- Usa per assegnazioni semplici
- Evita ternari annidati profondi
- Se diventa illeggibile, usa if-else
`);
