/**
 * PARAMETRI DELLE FUNZIONI - BASE
 * 
 * I parametri sono variabili usate nelle funzioni per ricevere valori
 * quando la funzione viene chiamata (invocata).
 * 
 * Terminologia:
 * - PARAMETRI: variabili nella definizione della funzione
 * - ARGOMENTI: valori passati quando si chiama la funzione
 */

console.log("=== 1. PARAMETRI BASE ===\n");

// Nessun parametro
function saluta() {
  return "Ciao!";
}

console.log(saluta());  // "Ciao!"

// Un parametro
function salutaPersona(nome) {
  return "Ciao, " + nome + "!";
}

console.log(salutaPersona("Mario"));
console.log(salutaPersona("Luigi"));

// Due parametri
function somma(a, b) {
  return a + b;
}

console.log("5 + 3 =", somma(5, 3));
console.log("10 + 20 =", somma(10, 20));

// Tre parametri
function calcolaVolume(lunghezza, larghezza, altezza) {
  return lunghezza * larghezza * altezza;
}

console.log("Volume (2x3x4):", calcolaVolume(2, 3, 4));


console.log("\n=== 2. PARAMETRI VS ARGOMENTI ===\n");

// Definizione: 'a' e 'b' sono PARAMETRI
function moltiplica(a, b) {
  console.log("Parametro a:", a);
  console.log("Parametro b:", b);
  return a * b;
}

// Chiamata: 5 e 3 sono ARGOMENTI
console.log("Risultato:", moltiplica(5, 3));

// Più argomenti dei parametri: extra ignorati
function dividi(a, b) {
  return a / b;
}

console.log("\nDividi(10, 2, 999, 'extra'):", dividi(10, 2, 999, "extra"));
// 999 e "extra" vengono ignorati

// Meno argomenti dei parametri: undefined
function concatena(str1, str2, str3) {
  console.log("str1:", str1);
  console.log("str2:", str2);
  console.log("str3:", str3);
  return str1 + " " + str2 + " " + str3;
}

console.log("\nCon 2 argomenti invece di 3:");
console.log("Risultato:", concatena("Hello", "World"));


console.log("\n=== 3. PARAMETRI DEFAULT (ES6) ===\n");

// Parametro con valore predefinito
function salutaConDefault(nome = "Ospite") {
  return "Ciao, " + nome + "!";
}

console.log(salutaConDefault());           // Usa default
console.log(salutaConDefault("Mario"));    // Usa argomento

// Multipli parametri default
function creaUtente(nome = "Anonimo", ruolo = "User", attivo = true) {
  return {
    nome: nome,
    ruolo: ruolo,
    attivo: attivo
  };
}

console.log("\nTutti default:", creaUtente());
console.log("Solo nome:", creaUtente("Mario"));
console.log("Nome e ruolo:", creaUtente("Anna", "Admin"));
console.log("Tutti i parametri:", creaUtente("Luigi", "Editor", false));

// Default con espressioni
function aggiungiPrefisso(testo, prefisso = "Sig. ") {
  return prefisso + testo;
}

console.log("\nCon default:", aggiungiPrefisso("Rossi"));
console.log("Con custom:", aggiungiPrefisso("Verdi", "Dott. "));

// Default dinamici
function logTimestamp(messaggio, timestamp = new Date().toISOString()) {
  return `[${timestamp}] ${messaggio}`;
}

console.log("\n" + logTimestamp("Evento 1"));
// Aspetta un momento...
setTimeout(() => {
  console.log(logTimestamp("Evento 2"));
}, 100);


console.log("\n=== 4. REST PARAMETERS (...args) ===\n");

// Rest parameter: raccoglie tutti gli argomenti in array
function sommaMultipla(...numeri) {
  console.log("Numeri ricevuti:", numeri);
  console.log("Tipo:", typeof numeri);
  console.log("È array?", Array.isArray(numeri));
  
  let totale = 0;
  for (let num of numeri) {
    totale += num;
  }
  return totale;
}

console.log("Somma(1,2,3):", sommaMultipla(1, 2, 3));
console.log("Somma(1,2,3,4,5):", sommaMultipla(1, 2, 3, 4, 5));
console.log("Somma(10,20,30,40,50,60):", sommaMultipla(10, 20, 30, 40, 50, 60));

// Rest parameter con altri parametri (deve essere l'ultimo!)
function presentaGruppo(leader, ...membri) {
  console.log("\nLeader:", leader);
  console.log("Membri:", membri.join(", "));
  return membri.length + 1;  // +1 per il leader
}

console.log("Totale persone:", presentaGruppo("Mario", "Luigi", "Peach", "Toad"));

// Esempio pratico: logger con livello
function log(livello, ...messaggi) {
  const timestamp = new Date().toISOString();
  console.log(`\n[${timestamp}] [${livello}]`, ...messaggi);
}

log("INFO", "Applicazione avviata");
log("ERROR", "Errore critico:", "Database non disponibile");
log("DEBUG", "Variabili:", { x: 10, y: 20 });


console.log("\n=== 5. OGGETTO arguments (Legacy) ===\n");

// arguments: oggetto array-like disponibile in function normali
function mostraArguments() {
  console.log("arguments:", arguments);
  console.log("Tipo:", typeof arguments);
  console.log("È array?", Array.isArray(arguments));
  console.log("Lunghezza:", arguments.length);
  
  // Accesso per indice
  for (let i = 0; i < arguments.length; i++) {
    console.log(`  arguments[${i}]:`, arguments[i]);
  }
}

mostraArguments("uno", "due", "tre", 4, 5);

// Convertire arguments in array
function sommaConArguments() {
  // Converte in array vero
  const numeri = Array.from(arguments);
  return numeri.reduce((acc, n) => acc + n, 0);
}

console.log("\nSomma con arguments:", sommaConArguments(1, 2, 3, 4, 5));

// ⚠️ Arrow functions NON hanno arguments!
const arrowFunc = () => {
  // console.log(arguments);  // ❌ ReferenceError!
  console.log("\nArrow function: arguments non disponibile");
};

arrowFunc(1, 2, 3);


console.log("\n=== 6. DESTRUCTURING PARAMETRI (ARRAY) ===\n");

// Destructuring di array nei parametri
function mostraCoordinate([x, y]) {
  console.log("X:", x);
  console.log("Y:", y);
}

mostraCoordinate([10, 20]);

// Con valori default
function disegnaPunto([x = 0, y = 0] = []) {
  return `Punto at (${x}, ${y})`;
}

console.log("\n" + disegnaPunto([5, 10]));
console.log(disegnaPunto([5]));
console.log(disegnaPunto());

// Ignorare valori
function primoUltimo([primo, , , ultimo]) {
  return { primo, ultimo };
}

console.log("\nPrimo e ultimo:", primoUltimo([1, 2, 3, 4]));

// Rest in destructuring
function separaPrimoResto([primo, ...resto]) {
  return {
    primo: primo,
    resto: resto
  };
}

console.log("\nSepara:", separaPrimoResto([10, 20, 30, 40, 50]));


console.log("\n=== 7. DESTRUCTURING PARAMETRI (OGGETTI) ===\n");

// Destructuring di oggetti nei parametri
function mostraPersona({ nome, età }) {
  return `${nome} ha ${età} anni`;
}

console.log(mostraPersona({ nome: "Mario", età: 30 }));
console.log(mostraPersona({ nome: "Anna", età: 25, città: "Roma" }));

// Con valori default
function creaConfig({ 
  host = "localhost", 
  port = 3000, 
  ssl = false 
} = {}) {
  return { host, port, ssl };
}

console.log("\nConfig default:", creaConfig());
console.log("Config custom:", creaConfig({ host: "example.com", ssl: true }));
console.log("Config parziale:", creaConfig({ port: 8080 }));

// Rinominare variabili
function formattaUtente({ nome: nomeUtente, email: indirizzoEmail }) {
  return `Utente: ${nomeUtente} (${indirizzoEmail})`;
}

console.log("\n" + formattaUtente({ 
  nome: "Mario", 
  email: "mario@example.com" 
}));

// Nested destructuring
function mostraIndirizzo({ nome, indirizzo: { via, città, cap } }) {
  return `${nome} abita in ${via}, ${città} (${cap})`;
}

console.log("\n" + mostraIndirizzo({
  nome: "Luigi",
  indirizzo: {
    via: "Via Roma 10",
    città: "Milano",
    cap: "20100"
  }
}));


console.log("\n=== 8. SPREAD OPERATOR NEGLI ARGOMENTI ===\n");

// Spread: espande array in argomenti separati
function somma3(a, b, c) {
  return a + b + c;
}

const numeri = [1, 2, 3];
console.log("Somma array:", somma3(...numeri));

// Spread con Math
const valori = [5, 2, 9, 1, 7];
console.log("Max:", Math.max(...valori));
console.log("Min:", Math.min(...valori));

// Combinare array
function unisciArray(...arrays) {
  return [].concat(...arrays);
}

console.log("\nUnisci:", unisciArray([1, 2], [3, 4], [5, 6]));

// Spread in funzioni
function creaPersonaCompleta(nome, età, ...hobby) {
  return {
    nome,
    età,
    hobby
  };
}

const hobbies = ["lettura", "sport", "musica"];
console.log("\nPersona:", creaPersonaCompleta("Mario", 30, ...hobbies));


console.log("\n=== 9. VALIDAZIONE PARAMETRI ===\n");

// Validazione base
function dividiSicuro(a, b) {
  // Valida tipi
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError("I parametri devono essere numeri");
  }
  
  // Valida divisione per zero
  if (b === 0) {
    throw new Error("Divisione per zero non permessa");
  }
  
  return a / b;
}

try {
  console.log("10 / 2 =", dividiSicuro(10, 2));
  console.log("10 / 0 =", dividiSicuro(10, 0));
} catch (err) {
  console.log("Errore:", err.message);
}

// Validazione con return
function creaUtenteSicuro(nome, email) {
  // Validazioni
  if (!nome || nome.trim().length === 0) {
    return { error: "Nome richiesto" };
  }
  
  if (!email || !email.includes("@")) {
    return { error: "Email non valida" };
  }
  
  // Successo
  return {
    success: true,
    utente: { nome, email }
  };
}

console.log("\nUtente valido:", creaUtenteSicuro("Mario", "m@test.com"));
console.log("Nome mancante:", creaUtenteSicuro("", "m@test.com"));
console.log("Email invalida:", creaUtenteSicuro("Mario", "invalid"));

// Required parameters pattern
function required(param) {
  throw new Error(`Parametro ${param} è obbligatorio`);
}

function registraUtente(
  nome = required('nome'),
  email = required('email')
) {
  return { nome, email };
}

try {
  console.log("\nRegistra:", registraUtente("Mario", "m@test.com"));
  // console.log(registraUtente("Mario"));  // Errore!
} catch (err) {
  console.log("Errore:", err.message);
}


console.log("\n=== 10. PATTERN AVANZATI ===\n");

// Options object pattern
function creaServer(options = {}) {
  const defaults = {
    host: 'localhost',
    port: 3000,
    ssl: false,
    timeout: 30000
  };
  
  // Merge con defaults
  const config = { ...defaults, ...options };
  
  console.log("Server config:", config);
  return config;
}

creaServer({ port: 8080, ssl: true });

// Named parameters con destructuring
function inviaEmail({
  to,
  from = "noreply@example.com",
  subject = "No Subject",
  body = "",
  cc = [],
  bcc = []
} = {}) {
  console.log("\nInvio email:");
  console.log("  To:", to);
  console.log("  From:", from);
  console.log("  Subject:", subject);
  console.log("  Body:", body.substring(0, 30) + "...");
  console.log("  CC:", cc);
}

inviaEmail({
  to: "user@example.com",
  subject: "Test",
  body: "Questo è un messaggio di test"
});

// Function overloading simulato
function formatta(...args) {
  if (args.length === 1 && typeof args[0] === 'string') {
    // Un solo string
    return args[0].toUpperCase();
  }
  
  if (args.length === 2 && typeof args[0] === 'string') {
    // String e formato
    const [str, formato] = args;
    if (formato === 'upper') return str.toUpperCase();
    if (formato === 'lower') return str.toLowerCase();
    if (formato === 'title') {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
  }
  
  if (args.length === 1 && typeof args[0] === 'number') {
    // Numero
    return args[0].toFixed(2);
  }
  
  return String(args[0]);
}

console.log("\nFormatta string:", formatta("javascript"));
console.log("Formatta con tipo:", formatta("javascript", "title"));
console.log("Formatta numero:", formatta(3.14159));

console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO PARAMETRI");
console.log("=".repeat(50));
console.log(`
PARAMETRI BASE:
• function nome(a, b) { ... }
• Parametri = definizione, Argomenti = valori passati

DEFAULT:
• function f(a = 10) { ... }
• Valore usato se argomento mancante/undefined

REST:
• function f(...args) { ... }
• Raccoglie argomenti rimanenti in array
• Deve essere ultimo parametro

DESTRUCTURING:
• Array: function f([x, y]) { ... }
• Object: function f({ nome, età }) { ... }
• Con default: function f({ x = 0 } = {}) { ... }

SPREAD:
• f(...array) → espande array in argomenti
• Utile per Math.max/min, concat, ecc.

VALIDAZIONE:
✓ Type checking (typeof)
✓ Range checking (>, <, ===)
✓ Required parameters pattern
✓ Return error objects

BEST PRACTICES:
✓ Max 3-4 parametri
✓ Usa oggetti per molti parametri
✓ Valida sempre gli input
✓ Default sensati
✓ Nomi descrittivi
`);
