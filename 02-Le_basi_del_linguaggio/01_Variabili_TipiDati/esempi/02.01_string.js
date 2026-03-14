/**
 * Esempio: String (Stringhe)
 * 
 * Le stringhe rappresentano sequenze di caratteri e sono
 * uno dei tipi più utilizzati in JavaScript.
 * 
 * Per eseguire: node 03.01_string.js
 */

console.log("=== STRING (STRINGHE) ===\n");

// 1. Creazione di stringhe
console.log("1. Creazione di stringhe:\n");

// Tre modi per creare stringhe
let stringa1 = "Ciao mondo"; // Doppi apici
let stringa2 = 'Hello world'; // Apici singoli
let stringa3 = `Buongiorno`; // Template literals (ES6)

console.log("Doppi apici:", stringa1);
console.log("Apici singoli:", stringa2);
console.log("Template literals:", stringa3);

// Quando usare quale?
let citazione = "L'uomo disse: 'Che bella giornata!'"; // Mix di apici
console.log("Mix apici:", citazione);

// Caratteri di escape
let escape = "Prima riga\nSeconda riga\tcon tab";
console.log("\nCaratteri escape:\n" + escape);

// 2. Template Literals (ES6)
console.log("\n2. Template Literals:\n");

// Interpolazione di variabili
let nome = "Mario";
let cognome = "Rossi";
let età = 30;

let presentazione = `Mi chiamo ${nome} ${cognome} e ho ${età} anni.`;
console.log(presentazione);

// Espressioni nelle template literals
let a = 5, b = 10;
console.log(`La somma di ${a} e ${b} è ${a + b}`);

// Stringhe multilinea
let poesia = `Roses are red,
Violets are blue,
JavaScript is awesome,
And so are you!`;
console.log("\nPoesia:\n" + poesia);

// 3. Proprietà e metodi base
console.log("\n3. Proprietà e metodi base:\n");

let testo = "JavaScript";

// Lunghezza
console.log("Lunghezza di 'JavaScript':", testo.length);

// Accesso ai caratteri
console.log("Primo carattere:", testo[0]);
console.log("Ultimo carattere:", testo[testo.length - 1]);
console.log("Carattere all'indice 4:", testo.charAt(4));

// Code point (valore Unicode)
console.log("Code point di 'J':", testo.charCodeAt(0));

// 4. Trasformazione
console.log("\n4. Trasformazione:\n");

let frase = "JavaScript è Fantastico";

console.log("Originale:", frase);
console.log("Maiuscolo:", frase.toUpperCase());
console.log("Minuscolo:", frase.toLowerCase());
console.log("Trim:", "  spazi  ".trim()); // Rimuove spazi
console.log("TrimStart:", "  spazi  ".trimStart());
console.log("TrimEnd:", "  spazi  ".trimEnd());

// 5. Ricerca e posizione
console.log("\n5. Ricerca e posizione:\n");

let lorem = "Lorem ipsum dolor sit amet, ipsum consectetur";

console.log("indexOf('ipsum'):", lorem.indexOf("ipsum")); // Prima occorrenza
console.log("lastIndexOf('ipsum'):", lorem.lastIndexOf("ipsum")); // Ultima occorrenza
console.log("indexOf('xyz'):", lorem.indexOf("xyz")); // -1 se non trovato

console.log("includes('dolor'):", lorem.includes("dolor")); // true/false
console.log("startsWith('Lorem'):", lorem.startsWith("Lorem"));
console.log("endsWith('tur'):", lorem.endsWith("tur"));

// Con posizione di inizio
console.log("includes('ipsum', 10):", lorem.includes("ipsum", 10));

// 6. Estrazione di sottostringhe
console.log("\n6. Estrazione:\n");

let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// slice(start, end) - end non incluso
console.log("slice(0, 5):", alfabeto.slice(0, 5)); // ABCDE
console.log("slice(5):", alfabeto.slice(5)); // Da 5 alla fine
console.log("slice(-5):", alfabeto.slice(-5)); // Ultimi 5 caratteri

// substring(start, end) - simile a slice ma non accetta negativi
console.log("substring(0, 5):", alfabeto.substring(0, 5));

// substr(start, length) - DEPRECATO
console.log("substr(5, 5):", alfabeto.substr(5, 5)); // 5 caratteri da posizione 5

// 7. Sostituzione
console.log("\n7. Sostituzione:\n");

let testo2 = "I gatti sono animali. I gatti sono carini.";

// replace() - sostituisce solo la prima occorrenza
console.log("replace('gatti', 'cani'):");
console.log(testo2.replace("gatti", "cani"));

// replaceAll() - sostituisce tutte (ES2021)
console.log("\nreplaceAll('gatti', 'cani'):");
console.log(testo2.replaceAll("gatti", "cani"));

// Con RegExp
console.log("\nCon RegExp (global):");
console.log(testo2.replace(/gatti/g, "cani"));

// 8. Split e Join
console.log("\n8. Split e Join:\n");

// split() - stringa ad array
let csv = "Mario,Rossi,30,Roma";
let dati = csv.split(",");
console.log("Split CSV:", dati);

let fraseCompleta = "JavaScript è un linguaggio fantastico";
let parole = fraseCompleta.split(" ");
console.log("Split per spazi:", parole);

// Limitare il numero di split
console.log("Split con limit 3:", fraseCompleta.split(" ", 3));

// join() - array a stringa (metodo di Array)
let ricostruita = parole.join(" ");
console.log("Join:", ricostruita);

let daTrattini = parole.join("-");
console.log("Join con trattini:", daTrattini);

// 9. Ripetizione e padding
console.log("\n9. Ripetizione e padding:\n");

// repeat()
console.log("'Ha' * 3:", "Ha".repeat(3));
console.log("'*' * 10:", "*".repeat(10));

// padStart() e padEnd() (ES2017)
let numero = "5";
console.log("padStart(3, '0'):", numero.padStart(3, "0")); // "005"

let codice = "42";
console.log("padEnd(5, 'X'):", codice.padEnd(5, "X")); // "42XXX"

// Uso pratico: allineamento
let prezzi = ["9.99", "149.99", "1299.99"];
console.log("\nPrezzi allineati:");
prezzi.forEach(p => {
  console.log(`€ ${p.padStart(8, " ")}`);
});

// 10. Confronto stringhe
console.log("\n10. Confronto stringhe:\n");

let str1 = "apple";
let str2 = "banana";
let str3 = "Apple";

console.log("'apple' < 'banana':", str1 < str2); // Confronto lessicografico
console.log("'apple' === 'Apple':", str1 === str3); // Case-sensitive

// localeCompare() - confronto locale-aware
console.log("'a'.localeCompare('b'):", "a".localeCompare("b")); // -1 (a < b)
console.log("'b'.localeCompare('a'):", "b".localeCompare("a")); // 1 (b > a)
console.log("'a'.localeCompare('a'):", "a".localeCompare("a")); // 0 (uguali)

// 11. Concatenazione
console.log("\n11. Concatenazione:\n");

// Con operatore +
let parte1 = "Java";
let parte2 = "Script";
console.log("Con +:", parte1 + parte2);

// Con concat()
console.log("Con concat():", parte1.concat(parte2));
console.log("Multipla:", "Hello".concat(" ", "World", "!"));

// Con template literals (preferito)
let saluto2 = `${parte1}${parte2} è fantastico!`;
console.log("Con template:", saluto2);

// 12. Casi d'uso pratici
console.log("\n12. Casi d'uso pratici:\n");

// Capitalizza prima lettera
function capitalizza(stringa) {
  return stringa.charAt(0).toUpperCase() + stringa.slice(1).toLowerCase();
}
console.log("Capitalizza 'javascript':", capitalizza("javascript"));

// Conta occorrenze
function contaOccorrenze(testo, parola) {
  return (testo.match(new RegExp(parola, "gi")) || []).length;
}
console.log("Occorrenze di 'a' in 'banana':", contaOccorrenze("banana", "a"));

// Inverti stringa
function inverti(str) {
  return str.split("").reverse().join("");
}
console.log("Inverti 'JavaScript':", inverti("JavaScript"));

// Palindromo
function èPalindromo(str) {
  let pulita = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return pulita === inverti(pulita);
}
console.log("'anna' è palindromo?", èPalindromo("anna"));
console.log("'A man a plan a canal Panama' è palindromo?", 
  èPalindromo("A man a plan a canal Panama"));

// Tronca testo
function tronca(testo, lunghezza) {
  return testo.length > lunghezza 
    ? testo.slice(0, lunghezza) + "..." 
    : testo;
}
console.log("\nTronca:", tronca("Questo è un testo molto lungo", 20));

// 13. Unicode e emoji
console.log("\n13. Unicode e emoji:\n");

let emoji = "😀🎉🚀";
console.log("Emoji:", emoji);
console.log("Lunghezza (attenzione!):", emoji.length); // 6 (non 3!)

// Uso corretto con spread
console.log("Array spread:", [...emoji]);
console.log("Lunghezza corretta:", [...emoji].length);

// Iterazione corretta
console.log("Iterazione:");
for (let char of emoji) {
  console.log(`  ${char}`);
}

console.log("\n💡 Best Practices:");
console.log("   - Usare template literals per interpolazione");
console.log("   - Preferire const per stringhe che non cambiano");
console.log("   - Le stringhe sono immutabili (ogni operazione crea una nuova stringa)");
console.log("   - Usare metodi moderni come includes() invece di indexOf() != -1");
console.log("   - Attenzione alla lunghezza con emoji e caratteri Unicode");
