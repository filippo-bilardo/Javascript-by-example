/**
 * DICHIARAZIONE DI FUNZIONI - FUNCTION DECLARATION
 * 
 * La function declaration è il modo più comune di definire funzioni in JavaScript.
 * Sintassi: function nomeFunzione(parametri) { corpo }
 * 
 * Caratteristiche chiave:
 * - Hoisting: può essere chiamata prima della definizione
 * - Ha un nome (named function)
 * - Crea una proprietà nel contesto corrente
 */

console.log("=== 1. SINTASSI BASE ===\n");

// Dichiarazione funzione semplice
function saluta() {
  console.log("Ciao!");
}

// Invocazione
saluta();  // "Ciao!"

// Funzione con parametri
function salutaPersona(nome) {
  console.log("Ciao, " + nome + "!");
}

salutaPersona("Mario");  // "Ciao, Mario!"
salutaPersona("Luigi");  // "Ciao, Luigi!"

// Funzione con return
function somma(a, b) {
  return a + b;
}

let risultato = somma(5, 3);
console.log("\nSomma(5, 3):", risultato);  // 8


console.log("\n=== 2. HOISTING ===\n");

// Le function declaration possono essere chiamate PRIMA della definizione
console.log("Chiamata prima della definizione:");
let area = calcolaArea(5, 3);
console.log("Area:", area);  // 15

// Definizione DOPO l'uso (funziona grazie all'hoisting!)
function calcolaArea(base, altezza) {
  return base * altezza;
}

// Ancora un altro uso
console.log("Perimetro:", calcolaPerimetro(5, 3));  // 16

function calcolaPerimetro(base, altezza) {
  return 2 * (base + altezza);
}


console.log("\n=== 3. PARAMETRI MULTIPLI ===\n");

// Nessun parametro
function getTimestamp() {
  return new Date().toISOString();
}
console.log("Timestamp:", getTimestamp());

// Un parametro
function quadrato(n) {
  return n * n;
}
console.log("Quadrato di 4:", quadrato(4));

// Due parametri
function moltiplica(a, b) {
  return a * b;
}
console.log("3 x 7 =", moltiplica(3, 7));

// Tre parametri
function calcolaVolume(lunghezza, larghezza, altezza) {
  return lunghezza * larghezza * altezza;
}
console.log("Volume (2x3x4):", calcolaVolume(2, 3, 4));

// Molti parametri (evita quando possibile)
function creaUtente(nome, cognome, email, età, città, paese) {
  return {
    nome: nome,
    cognome: cognome,
    email: email,
    età: età,
    città: città,
    paese: paese
  };
}
let utente = creaUtente("Mario", "Rossi", "m@r.com", 30, "Roma", "Italia");
console.log("\nUtente:", utente.nome, utente.cognome);


console.log("\n=== 4. VALORI DI RITORNO ===\n");

// Return valore primitivo
function getPi() {
  return 3.14159;
}
console.log("Pi:", getPi());

// Return stringa
function getNome() {
  return "JavaScript";
}
console.log("Linguaggio:", getNome());

// Return booleano
function èPari(n) {
  return n % 2 === 0;
}
console.log("10 è pari?", èPari(10));
console.log("7 è pari?", èPari(7));

// Return oggetto
function creaPersona(nome, età) {
  return {
    nome: nome,
    età: età,
    saluta: function() {
      return "Ciao, sono " + this.nome;
    }
  };
}
let persona = creaPersona("Anna", 25);
console.log("\nPersona:", persona);
console.log(persona.saluta());

// Return array
function getColoriPrimari() {
  return ["rosso", "giallo", "blu"];
}
console.log("\nColori primari:", getColoriPrimari());

// Senza return (restituisce undefined)
function logMessaggio(msg) {
  console.log(msg);
  // nessun return
}
let res = logMessaggio("Test");
console.log("Risultato senza return:", res);  // undefined


console.log("\n=== 5. EARLY RETURN ===\n");

// Return multipli (early return pattern)
function calcolaSconto(prezzo, tipoCliente) {
  if (prezzo <= 0) {
    return 0;  // Early return per input invalido
  }
  
  if (tipoCliente === "premium") {
    return prezzo * 0.2;  // 20% sconto
  }
  
  if (tipoCliente === "standard") {
    return prezzo * 0.1;  // 10% sconto
  }
  
  return 0;  // Nessuno sconto
}

console.log("Sconto premium (100€):", calcolaSconto(100, "premium"));
console.log("Sconto standard (100€):", calcolaSconto(100, "standard"));
console.log("Sconto base (100€):", calcolaSconto(100, "base"));
console.log("Prezzo invalido:", calcolaSconto(-10, "premium"));


console.log("\n=== 6. FUNZIONI ANNIDATE ===\n");

// Funzione che contiene altre funzioni
function calcolatrice(operazione, a, b) {
  
  function somma(x, y) {
    return x + y;
  }
  
  function sottrai(x, y) {
    return x - y;
  }
  
  function moltiplica(x, y) {
    return x * y;
  }
  
  function dividi(x, y) {
    if (y === 0) return "Errore: divisione per zero";
    return x / y;
  }
  
  // Usa le funzioni interne
  switch(operazione) {
    case "+": return somma(a, b);
    case "-": return sottrai(a, b);
    case "*": return moltiplica(a, b);
    case "/": return dividi(a, b);
    default: return "Operazione non valida";
  }
}

console.log("10 + 5 =", calcolatrice("+", 10, 5));
console.log("10 - 5 =", calcolatrice("-", 10, 5));
console.log("10 * 5 =", calcolatrice("*", 10, 5));
console.log("10 / 5 =", calcolatrice("/", 10, 5));


console.log("\n=== 7. SCOPE E VARIABILI ===\n");

// Variabili globali vs locali
let globale = "Sono globale";

function testScope() {
  let locale = "Sono locale";
  console.log("Dentro funzione:");
  console.log("  - Globale:", globale);  // Accessibile
  console.log("  - Locale:", locale);    // Accessibile
}

testScope();
console.log("\nFuori funzione:");
console.log("  - Globale:", globale);    // Accessibile
// console.log("  - Locale:", locale);    // ❌ Errore! Non accessibile

// Shadowing (variabile locale nasconde globale)
let nome = "Mario";

function testShadowing() {
  let nome = "Luigi";  // Variabile locale con stesso nome
  console.log("\nDentro funzione:", nome);  // "Luigi"
}

testShadowing();
console.log("Fuori funzione:", nome);  // "Mario"


console.log("\n=== 8. PARAMETRI VS ARGOMENTI ===\n");

// Meno argomenti dei parametri
function salutaCompleto(nome, cognome, titolo) {
  console.log("Nome:", nome);      // "Mario"
  console.log("Cognome:", cognome);  // undefined
  console.log("Titolo:", titolo);    // undefined
}

console.log("Con un solo argomento:");
salutaCompleto("Mario");

// Più argomenti dei parametri
function sommaBase(a, b) {
  console.log("\nParametri:", a, b);  // 1, 2
  console.log("Extra ignorato");
  return a + b;
}

console.log("Risultato:", sommaBase(1, 2, 3, 4));  // Extra (3,4) ignorati


console.log("\n=== 9. NAMING CONVENTIONS ===\n");

// camelCase (standard JavaScript)
function calcolaTotaleConIva(prezzo, iva) {
  return prezzo + (prezzo * iva);
}

// Nomi descrittivi
function convertiCelsiusInFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Verbi per azioni
function validaEmail(email) {
  return email.includes("@");
}

function getEtàUtente(utente) {
  return utente.età;
}

function setTema(tema) {
  console.log("Tema impostato:", tema);
}

// Boolean: inizia con is, has, can
function isPari(n) {
  return n % 2 === 0;
}

function hasPermessi(utente) {
  return utente.role === "admin";
}

function canEdit(utente, documento) {
  return utente.id === documento.authorId;
}

console.log("Celsius → Fahrenheit:", convertiCelsiusInFahrenheit(30));
console.log("Email valida?", validaEmail("test@example.com"));
console.log("5 è pari?", isPari(5));


console.log("\n=== 10. CASI D'USO PRATICI ===\n");

// 1. Validazione
function validaPassword(password) {
  if (!password) return false;
  if (password.length < 8) return false;
  if (!/[A-Z]/.test(password)) return false;
  if (!/[0-9]/.test(password)) return false;
  return true;
}

console.log("1. Validazione password:");
console.log("  'abc': ", validaPassword("abc"));
console.log("  'Abcd1234': ", validaPassword("Abcd1234"));

// 2. Formattazione
function formattaPrezzo(prezzo) {
  return "€ " + prezzo.toFixed(2);
}

console.log("\n2. Formattazione:");
console.log("  100:", formattaPrezzo(100));
console.log("  99.5:", formattaPrezzo(99.5));

// 3. Calcoli
function calcolaScontoPercentuale(prezzo, percentuale) {
  return prezzo * (percentuale / 100);
}

function applicaSconto(prezzo, percentuale) {
  let sconto = calcolaScontoPercentuale(prezzo, percentuale);
  return prezzo - sconto;
}

console.log("\n3. Calcoli:");
console.log("  Prezzo originale: €100");
console.log("  Sconto 20%:", formattaPrezzo(calcolaScontoPercentuale(100, 20)));
console.log("  Prezzo finale:", formattaPrezzo(applicaSconto(100, 20)));

// 4. Conversioni
function celsiusToFahrenheit(c) {
  return (c * 9/5) + 32;
}

function fahrenheitToCelsius(f) {
  return (f - 32) * 5/9;
}

console.log("\n4. Conversioni temperatura:");
console.log("  30°C =", celsiusToFahrenheit(30).toFixed(1), "°F");
console.log("  86°F =", fahrenheitToCelsius(86).toFixed(1), "°C");

// 5. Utility functions
function generaId() {
  return Date.now() + Math.random().toString(36).substr(2, 9);
}

function isVuoto(str) {
  return !str || str.trim().length === 0;
}

function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

console.log("\n5. Utility:");
console.log("  ID generato:", generaId());
console.log("  '' è vuoto?", isVuoto(""));
console.log("  '  ' è vuoto?", isVuoto("  "));
console.log("  capitalize('mario'):", capitalize("mario"));

console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO FUNCTION DECLARATION");
console.log("=".repeat(50));
console.log(`
Sintassi: function nome(param1, param2) { return valore; }

Caratteristiche:
✓ Hoisting (disponibile prima della definizione)
✓ Named function (ha un nome)
✓ Crea binding nel contesto

Quando usare:
✓ Funzioni top-level del modulo
✓ Funzioni che devono essere chiamate prima
✓ Metodi helper riutilizzabili
✓ Quando serve hoisting

Best Practices:
✓ Nomi descrittivi (verbi per azioni)
✓ camelCase per naming
✓ Una funzione = un compito
✓ Limita parametri (max 3-4)
✓ Early return per validazione
✓ Commenta comportamenti complessi
`);
