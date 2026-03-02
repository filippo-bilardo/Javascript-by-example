/**
 * ARROW FUNCTIONS (ES6)
 * 
 * Le arrow function sono una sintassi concisa per definire funzioni introdotta in ES6.
 * Sintassi: (param) => espressione
 * 
 * Caratteristiche chiave:
 * - Sintassi concisa
 * - Return implicito per espressioni singole
 * - NO proprio this, arguments, super
 * - NO hoisting
 * - Non possono essere usate come costruttori
 */

console.log("=== 1. SINTASSI BASE ===\n");

// Arrow function semplice
const saluta = () => "Ciao!";
console.log(saluta());

// Con un parametro (parentesi opzionali)
const quadrato = x => x * x;
console.log("Quadrato(5):", quadrato(5));

// Con più parametri (parentesi obbligatorie)
const somma = (a, b) => a + b;
console.log("Somma(3, 4):", somma(3, 4));

// Con corpo di blocco (return esplicito)
const moltiplica = (a, b) => {
  let risultato = a * b;
  return risultato;
};
console.log("Moltiplica(3, 4):", moltiplica(3, 4));


console.log("\n=== 2. RETURN IMPLICITO ===\n");

// Espressione singola → return implicito
const double = n => n * 2;
console.log("Double(10):", double(10));

// Return oggetto → usa parentesi
const creaPersona = (nome, età) => ({ nome: nome, età: età });
console.log("Persona:", creaPersona("Mario", 30));

// Senza parentesi → interpretato come blocco
const errore = (nome) => { nome: nome };  // ❌ Restituisce undefined!
console.log("Errore (senza parentesi):", errore("Test"));

// Corretto con parentesi
const corretto = (nome) => ({ nome: nome });
console.log("Corretto (con parentesi):", corretto("Test"));

// Espressioni multilinea
const complesso = (x, y) => (
  x * x +
  y * y
);
console.log("Complesso(3, 4):", complesso(3, 4));


console.log("\n=== 3. PARAMETRI ===\n");

// Zero parametri
const getTimestamp = () => Date.now();
console.log("Timestamp:", getTimestamp());

// Un parametro (parentesi opzionali)
const tripla1 = x => x * 3;
const tripla2 = (x) => x * 3;
console.log("Tripla1(5):", tripla1(5));
console.log("Tripla2(5):", tripla2(5));

// Due o più parametri (parentesi obbligatorie)
const area = (base, altezza) => base * altezza;
console.log("Area(5, 3):", area(5, 3));

// Parametri con valori default
const salutaPersona = (nome = "Ospite") => `Ciao, ${nome}!`;
console.log(salutaPersona("Mario"));
console.log(salutaPersona());

// Rest parameters
const sommaMultipla = (...numeri) => {
  return numeri.reduce((acc, n) => acc + n, 0);
};
console.log("Somma(1,2,3,4,5):", sommaMultipla(1, 2, 3, 4, 5));


console.log("\n=== 4. CONFRONTO CON FUNCTION EXPRESSION ===\n");

// Function expression
const funExp = function(x) {
  return x * 2;
};

// Arrow function equivalente
const arrow = x => x * 2;

console.log("funExp(5):", funExp(5));
console.log("arrow(5):", arrow(5));

// Function expression con più linee
const funExp2 = function(x) {
  let temp = x * 2;
  let result = temp + 1;
  return result;
};

// Arrow function equivalente
const arrow2 = x => {
  let temp = x * 2;
  let result = temp + 1;
  return result;
};

console.log("funExp2(5):", funExp2(5));
console.log("arrow2(5):", arrow2(5));


console.log("\n=== 5. ARRAY METHODS ===\n");

const numeri = [1, 2, 3, 4, 5];

// map
const doppi = numeri.map(n => n * 2);
console.log("Doppi:", doppi);

// filter
const pari = numeri.filter(n => n % 2 === 0);
console.log("Pari:", pari);

// reduce
const totale = numeri.reduce((acc, n) => acc + n, 0);
console.log("Totale:", totale);

// forEach
console.log("ForEach:");
numeri.forEach(n => console.log("  -", n));

// find
const primoMaggioreDi3 = numeri.find(n => n > 3);
console.log("Primo > 3:", primoMaggioreDi3);

// some
const haPari = numeri.some(n => n % 2 === 0);
console.log("Ha numeri pari?", haPari);

// every
const tuttiPositivi = numeri.every(n => n > 0);
console.log("Tutti positivi?", tuttiPositivi);


console.log("\n=== 6. CHAINING ===\n");

const prodotti = [
  { nome: "Libro", prezzo: 15, categoria: "Libri" },
  { nome: "Penna", prezzo: 2, categoria: "Cancelleria" },
  { nome: "Quaderno", prezzo: 5, categoria: "Cancelleria" },
  { nome: "Romanzo", prezzo: 20, categoria: "Libri" }
];

// Trova prodotti economici di cancelleria
const risultato = prodotti
  .filter(p => p.categoria === "Cancelleria")
  .filter(p => p.prezzo < 10)
  .map(p => p.nome);

console.log("Cancelleria economica:", risultato);

// Calcola totale prodotti sopra 10€
const totaleAlto = prodotti
  .filter(p => p.prezzo > 10)
  .reduce((acc, p) => acc + p.prezzo, 0);

console.log("Totale prodotti > 10€:", totaleAlto);


console.log("\n=== 7. SORTING ===\n");

const nomi = ["Mario", "Anna", "Luigi", "Carlo", "Beatrice"];

// Sort alfabetico
const ordinati = [...nomi].sort((a, b) => a.localeCompare(b));
console.log("Ordinati:", ordinati);

// Sort inverso
const inverso = [...nomi].sort((a, b) => b.localeCompare(a));
console.log("Inverso:", inverso);

// Sort numerico
const valori = [10, 5, 40, 25, 1000, 1];
const valoriOrdinati = [...valori].sort((a, b) => a - b);
console.log("Numeri ordinati:", valoriOrdinati);

// Sort oggetti
const persone = [
  { nome: "Mario", età: 30 },
  { nome: "Anna", età: 25 },
  { nome: "Luigi", età: 35 }
];

const perEtà = [...persone].sort((a, b) => a.età - b.età);
console.log("\nPer età:");
perEtà.forEach(p => console.log(`  ${p.nome}: ${p.età}`));


console.log("\n=== 8. CALLBACK E ASYNC ===\n");

// setTimeout simulato
const simulaTimeout = (callback, ms) => {
  console.log(`Attesa ${ms}ms...`);
  callback();
};

simulaTimeout(() => {
  console.log("Callback eseguito!");
}, 1000);

// Promise-like con arrow
const asyncOp = (success) => {
  return success
    ? Promise.resolve("Successo")
    : Promise.reject("Errore");
};

// then con arrow
console.log("\nPromise simulation:");
asyncOp(true)
  .then(result => console.log("Result:", result))
  .catch(err => console.log("Error:", err));

// Async/await style
const processData = async (data) => {
  return data.toUpperCase();
};

console.log("\nAsync arrow function example");


console.log("\n=== 9. HIGHER-ORDER FUNCTIONS ===\n");

// Funzione che restituisce funzione
const moltiplicaPer = factor => x => x * factor;

const moltiplicaPer2 = moltiplicaPer(2);
const moltiplicaPer10 = moltiplicaPer(10);

console.log("moltiplicaPer2(5):", moltiplicaPer2(5));
console.log("moltiplicaPer10(5):", moltiplicaPer10(5));

// Composizione
const componi = (f, g) => x => f(g(x));

const aggiungi1 = x => x + 1;
const moltPerDue = x => x * 2;

const composta = componi(moltPerDue, aggiungi1);
console.log("composta(5):", composta(5));  // (5+1)*2 = 12

// Currying
const somma3 = a => b => c => a + b + c;
console.log("somma3(1)(2)(3):", somma3(1)(2)(3));

const somma1e2 = somma3(1)(2);
console.log("somma1e2(3):", somma1e2(3));


console.log("\n=== 10. CASI D'USO PRATICI ===\n");

// 1. Validazione dati
const validatori = {
  èEmail: email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
  èTelefono: tel => /^\d{10}$/.test(tel),
  èCodicePostale: cap => /^\d{5}$/.test(cap),
  èNonVuoto: str => str && str.trim().length > 0
};

console.log("1. Validatori:");
console.log("  Email valida?", validatori.èEmail("test@example.com"));
console.log("  Telefono valido?", validatori.èTelefono("1234567890"));
console.log("  CAP valido?", validatori.èCodicePostale("12345"));

// 2. Trasformazioni
const trasformatori = {
  maiuscolo: str => str.toUpperCase(),
  minuscolo: str => str.toLowerCase(),
  capitalize: str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(),
  trim: str => str.trim(),
  inverti: str => str.split('').reverse().join('')
};

const testo = "  JavaScript  ";
console.log("\n2. Trasformazioni:");
console.log("  Originale:", `'${testo}'`);
console.log("  Maiuscolo:", trasformatori.maiuscolo(testo));
console.log("  Trim:", `'${trasformatori.trim(testo)}'`);
console.log("  Inverti:", trasformatori.inverti(testo.trim()));

// 3. Filtri avanzati
const utenti = [
  { nome: "Mario", età: 30, attivo: true },
  { nome: "Anna", età: 25, attivo: false },
  { nome: "Luigi", età: 35, attivo: true },
  { nome: "Carla", età: 28, attivo: true }
];

const utentiAttivi = utenti.filter(u => u.attivo);
const utentiGiovani = utenti.filter(u => u.età < 30);
const attiviGiovani = utenti.filter(u => u.attivo && u.età < 30);

console.log("\n3. Filtri utenti:");
console.log("  Attivi:", utentiAttivi.map(u => u.nome));
console.log("  Giovani:", utentiGiovani.map(u => u.nome));
console.log("  Attivi e giovani:", attiviGiovani.map(u => u.nome));

// 4. Aggregazioni
const vendite = [
  { prodotto: "Libro", quantità: 5, prezzo: 15 },
  { prodotto: "Penna", quantità: 20, prezzo: 2 },
  { prodotto: "Quaderno", quantità: 10, prezzo: 5 }
];

const totaleVendite = vendite.reduce((acc, v) => acc + (v.quantità * v.prezzo), 0);
const quantitàTotale = vendite.reduce((acc, v) => acc + v.quantità, 0);
const prodottiVenduti = vendite.map(v => v.prodotto);

console.log("\n4. Statistiche vendite:");
console.log("  Totale:", totaleVendite, "€");
console.log("  Quantità:", quantitàTotale, "pezzi");
console.log("  Prodotti:", prodottiVenduti.join(", "));

// 5. Utility functions
const utils = {
  range: (start, end) => Array.from({ length: end - start }, (_, i) => start + i),
  chunk: (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, 
    (_, i) => arr.slice(i * size, i * size + size)),
  unique: arr => [...new Set(arr)],
  shuffle: arr => [...arr].sort(() => Math.random() - 0.5),
  sum: arr => arr.reduce((a, b) => a + b, 0),
  avg: arr => arr.reduce((a, b) => a + b, 0) / arr.length
};

console.log("\n5. Utils:");
console.log("  range(1, 6):", utils.range(1, 6));
console.log("  chunk([1,2,3,4,5], 2):", utils.chunk([1,2,3,4,5], 2));
console.log("  unique([1,2,2,3,3,3]):", utils.unique([1,2,2,3,3,3]));
console.log("  sum([1,2,3,4,5]):", utils.sum([1,2,3,4,5]));
console.log("  avg([1,2,3,4,5]):", utils.avg([1,2,3,4,5]));

console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO ARROW FUNCTIONS");
console.log("=".repeat(50));
console.log(`
Sintassi: (param) => espressione

Varianti:
• () => valore              (zero parametri)
• x => valore               (un parametro)
• (x, y) => valore          (più parametri)
• x => { return valore; }   (blocco)
• x => ({ key: val })       (oggetto)

Caratteristiche:
✓ Sintassi concisa
✓ Return implicito (espressioni)
✓ Lexical this (eredita da scope esterno)
✓ NO hoisting
✓ NO arguments object
✓ NO constructor

Quando usare:
✓ Array methods (map, filter, reduce)
✓ Callback brevi
✓ Higher-order functions
✓ Functional programming
✓ Quando non serve this dinamico

NON usare quando:
✗ Serve this dinamico
✗ Metodi di oggetti
✗ Constructor functions
✗ Serve arguments object

Best Practices:
✓ Usa per callback semplici
✓ Preferisci per array methods
✓ Mantieni espressioni brevi
✓ Usa function per metodi
`);
