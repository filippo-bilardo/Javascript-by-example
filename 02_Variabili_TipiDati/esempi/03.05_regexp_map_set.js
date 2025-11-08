/**
 * Esempio: RegExp, Map e Set
 * 
 * Espressioni regolari, Map e Set sono strutture dati avanzate
 * per gestire pattern di testo e collezioni.
 * 
 * Per eseguire: node 12_regexp_map_set.js
 */

console.log("=== REGEXP, MAP E SET ===\n");

// ========== REGEXP ==========
console.log("📝 ESPRESSIONI REGOLARI (RegExp)\n");

// 1. Creazione di RegExp
console.log("1. Creazione RegExp:\n");

// Notazione letterale
let regex1 = /pattern/;
let regex2 = /javascript/i; // i = case insensitive

// Constructor
let regex3 = new RegExp("pattern");
let regex4 = new RegExp("javascript", "gi"); // g = global, i = case insensitive

console.log("Regex letterale:", regex1);
console.log("Regex con flag:", regex2);

// 2. Flag comuni
console.log("\n2. Flag comuni:\n");
console.log("i - case insensitive");
console.log("g - global (tutte le occorrenze)");
console.log("m - multiline");
console.log("s - dotAll (. include newline)");
console.log("u - unicode");

// 3. Test e Match
console.log("\n3. Test e Match:\n");

let testo = "JavaScript è un linguaggio potente. javascript è versatile!";

// test() - ritorna true/false
let contiene = /javascript/i.test(testo);
console.log("Contiene 'javascript' (case insensitive)?", contiene);

// match() - ritorna array di match
let prima = testo.match(/javascript/i);
console.log("Prima occorrenza:", prima[0]);

let tutte = testo.match(/javascript/gi);
console.log("Tutte le occorrenze:", tutte);

// exec() - ritorna dettagli del match
let pattern = /javascript/gi;
let risultato;
console.log("\nUsando exec():");
while ((risultato = pattern.exec(testo)) !== null) {
  console.log(`  Trovato '${risultato[0]}' all'indice ${risultato.index}`);
}

// 4. Pattern comuni
console.log("\n4. Pattern comuni:\n");

// Email
let email = "mario.rossi@example.com";
let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log("Email valida?", emailPattern.test(email));

// Telefono italiano
let telefono = "+39 333 1234567";
let telPattern = /^(\+39)?[\s]?[0-9]{3}[\s]?[0-9]{7}$/;
console.log("Telefono valido?", telPattern.test(telefono));

// URL
let url = "https://www.example.com";
let urlPattern = /^https?:\/\/[\w.-]+\.[a-z]{2,}$/i;
console.log("URL valida?", urlPattern.test(url));

// Codice fiscale italiano (semplificato)
let cf = "RSSMRA90A15F205X";
let cfPattern = /^[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z]$/;
console.log("Codice fiscale valido?", cfPattern.test(cf));

// 5. Replace con RegExp
console.log("\n5. Replace con RegExp:\n");

let frase = "I gatti neri sono gatti fortunati";

// Sostituzione semplice (solo prima occorrenza)
let nuovaFrase1 = frase.replace(/gatti/, "cani");
console.log("Replace semplice:", nuovaFrase1);

// Sostituzione globale
let nuovaFrase2 = frase.replace(/gatti/g, "cani");
console.log("Replace globale:", nuovaFrase2);

// Con funzione
let censurato = frase.replace(/gatti/g, (match) => "*".repeat(match.length));
console.log("Censurato:", censurato);

// 6. Gruppi di cattura
console.log("\n6. Gruppi di cattura:\n");

let dataText = "Oggi è il 08/11/2024";
let dataPattern = /(\d{2})\/(\d{2})\/(\d{4})/;
let match = dataText.match(dataPattern);

if (match) {
  console.log("Data completa:", match[0]);
  console.log("Giorno:", match[1]);
  console.log("Mese:", match[2]);
  console.log("Anno:", match[3]);
}

// Named groups (ES2018)
let dataPattern2 = /(?<giorno>\d{2})\/(?<mese>\d{2})\/(?<anno>\d{4})/;
let match2 = dataText.match(dataPattern2);
if (match2) {
  console.log("\nCon named groups:");
  console.log("Giorno:", match2.groups.giorno);
  console.log("Mese:", match2.groups.mese);
  console.log("Anno:", match2.groups.anno);
}

// ========== MAP ==========
console.log("\n\n🗺️  MAP\n");

// 1. Creazione di Map
console.log("1. Creazione di Map:\n");

// Map vuota
let mappa = new Map();

// Con array di coppie [chiave, valore]
let utenti = new Map([
  ["mario", { nome: "Mario Rossi", età: 30 }],
  ["luigi", { nome: "Luigi Verdi", età: 25 }],
  ["anna", { nome: "Anna Bianchi", età: 28 }]
]);

console.log("Map utenti creata con", utenti.size, "elementi");

// 2. Operazioni base
console.log("\n2. Operazioni base su Map:\n");

// set() - aggiunge/modifica
mappa.set("nome", "Mario");
mappa.set("età", 30);
mappa.set(42, "risposta"); // Chiave numerica
mappa.set({ id: 1 }, "oggetto"); // Chiave oggetto!

console.log("Elementi aggiunti, size:", mappa.size);

// get() - recupera valore
console.log("Nome:", mappa.get("nome"));
console.log("Età:", mappa.get("età"));

// has() - verifica esistenza
console.log("Ha 'nome'?", mappa.has("nome"));
console.log("Ha 'cognome'?", mappa.has("cognome"));

// delete() - rimuove
mappa.delete("età");
console.log("Dopo delete, size:", mappa.size);

// clear() - svuota
// mappa.clear();

// 3. Iterazione su Map
console.log("\n3. Iterazione su Map:\n");

console.log("forEach:");
utenti.forEach((valore, chiave) => {
  console.log(`  ${chiave}: ${valore.nome}, ${valore.età} anni`);
});

console.log("\nfor...of con entries():");
for (let [username, dati] of utenti.entries()) {
  console.log(`  ${username} => ${dati.nome}`);
}

console.log("\nSolo chiavi:");
for (let key of utenti.keys()) {
  console.log(`  ${key}`);
}

console.log("\nSolo valori:");
for (let valore of utenti.values()) {
  console.log(`  ${valore.nome}`);
}

// 4. Conversioni
console.log("\n4. Conversioni Map:\n");

// Map to Array
let arrayDaMap = Array.from(utenti);
console.log("Array da Map:", arrayDaMap);

// Map to Object
let oggettoDaMap = Object.fromEntries(utenti);
console.log("Oggetto da Map:", oggettoDaMap);

// Object to Map
let oggetto = { a: 1, b: 2, c: 3 };
let mapDaOggetto = new Map(Object.entries(oggetto));
console.log("Map da oggetto:", mapDaOggetto);

// 5. Map vs Object
console.log("\n5. Map vs Object:\n");
console.log("✓ Map: chiavi di qualsiasi tipo");
console.log("✓ Map: mantiene ordine di inserimento");
console.log("✓ Map: ha proprietà size");
console.log("✓ Map: migliori performance per add/delete frequenti");
console.log("✓ Object: sintassi più semplice per JSON");

// ========== SET ==========
console.log("\n\n📦 SET\n");

// 1. Creazione di Set
console.log("1. Creazione di Set:\n");

// Set vuoto
let insieme = new Set();

// Con array
let numeri = new Set([1, 2, 3, 4, 5]);
console.log("Set numeri:", numeri);

// Set rimuove duplicati automaticamente
let conDuplicati = new Set([1, 2, 2, 3, 3, 3, 4, 4, 5]);
console.log("Set senza duplicati:", conDuplicati);

// 2. Operazioni base
console.log("\n2. Operazioni base su Set:\n");

let colori = new Set();

// add() - aggiunge elemento
colori.add("rosso");
colori.add("verde");
colori.add("blu");
colori.add("rosso"); // Ignorato (duplicato)

console.log("Colori (size):", colori.size);

// has() - verifica esistenza
console.log("Ha 'rosso'?", colori.has("rosso"));
console.log("Ha 'giallo'?", colori.has("giallo"));

// delete() - rimuove elemento
colori.delete("verde");
console.log("Dopo delete 'verde', size:", colori.size);

// clear() - svuota
// colori.clear();

// 3. Iterazione su Set
console.log("\n3. Iterazione su Set:\n");

let linguaggi = new Set(["JavaScript", "Python", "Java", "C++"]);

console.log("forEach:");
linguaggi.forEach(lang => {
  console.log(`  ${lang}`);
});

console.log("\nfor...of:");
for (let lang of linguaggi) {
  console.log(`  ${lang}`);
}

// 4. Operazioni su insiemi
console.log("\n4. Operazioni matematiche su Set:\n");

let a = new Set([1, 2, 3, 4, 5]);
let b = new Set([4, 5, 6, 7, 8]);

// Unione
let unione = new Set([...a, ...b]);
console.log("Unione:", unione);

// Intersezione
let intersezione = new Set([...a].filter(x => b.has(x)));
console.log("Intersezione:", intersezione);

// Differenza (a - b)
let differenza = new Set([...a].filter(x => !b.has(x)));
console.log("Differenza (a-b):", differenza);

// Differenza simmetrica
let diffSim = new Set([
  ...[...a].filter(x => !b.has(x)),
  ...[...b].filter(x => !a.has(x))
]);
console.log("Diff. simmetrica:", diffSim);

// 5. Uso pratico di Set
console.log("\n5. Usi pratici di Set:\n");

// Rimuovere duplicati da array
let arrayConDup = [1, 2, 2, 3, 3, 3, 4, 4, 5];
let arraySenzaDup = [...new Set(arrayConDup)];
console.log("Rimozione duplicati:", arraySenzaDup);

// Verificare elementi unici
function soloElementiUnici(array) {
  return array.length === new Set(array).size;
}

console.log("[1,2,3] ha solo unici?", soloElementiUnici([1, 2, 3]));
console.log("[1,2,2,3] ha solo unici?", soloElementiUnici([1, 2, 2, 3]));

// Contare lettere uniche
function lettereUniche(stringa) {
  return new Set(stringa.toLowerCase()).size;
}

console.log("Lettere uniche in 'Hello':", lettereUniche("Hello"));

// 6. WeakMap e WeakSet
console.log("\n6. WeakMap e WeakSet:\n");
console.log("✓ WeakMap: chiavi solo oggetti, garbage collected");
console.log("✓ WeakSet: valori solo oggetti, garbage collected");
console.log("✓ Non iterabili e senza size");
console.log("✓ Utili per metadata e cache private");

let weakMap = new WeakMap();
let obj = { id: 1 };
weakMap.set(obj, "metadata");
console.log("WeakMap get:", weakMap.get(obj));

console.log("\n💡 Best Practices:");
console.log("   - Usare Map quando servono chiavi non-stringa");
console.log("   - Usare Set per rimuovere duplicati");
console.log("   - RegExp per validazioni e parsing");
console.log("   - WeakMap/WeakSet per evitare memory leaks");
