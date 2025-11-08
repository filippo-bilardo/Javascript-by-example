/**
 * Esempio: Operatori di Addizione e Sottrazione
 * 
 * Addizione (+) e sottrazione (-) sono gli operatori aritmetici di base.
 * L'addizione ha anche un comportamento speciale con le stringhe.
 * 
 * Per eseguire: node 01.01_addizione_sottrazione.js
 */

console.log("=== OPERATORI DI ADDIZIONE E SOTTRAZIONE ===\n");

// 1. Addizione di numeri
console.log("1. ADDIZIONE di numeri (+):\n");

let a = 5;
let b = 3;
console.log("let a = 5;");
console.log("let b = 3;");
console.log("a + b =", a + b); // 8

console.log("\nNumeri interi:");
console.log("10 + 20 =", 10 + 20); // 30
console.log("100 + 250 =", 100 + 250); // 350
console.log("-5 + 3 =", -5 + 3); // -2

console.log("\nNumeri decimali:");
console.log("3.14 + 2.86 =", 3.14 + 2.86); // 6
console.log("0.1 + 0.2 =", 0.1 + 0.2); // 0.30000000000000004 (precisione!)
console.log("5.5 + 4.5 =", 5.5 + 4.5); // 10

console.log("\nMix positivi e negativi:");
console.log("10 + (-5) =", 10 + (-5)); // 5
console.log("-10 + 20 =", -10 + 20); // 10
console.log("-7 + (-3) =", -7 + (-3)); // -10

// 2. Concatenazione di stringhe
console.log("\n2. CONCATENAZIONE di stringhe (+):\n");

let nome = "Mario";
let cognome = "Rossi";
console.log('let nome = "Mario";');
console.log('let cognome = "Rossi";');
console.log("nome + cognome =", nome + cognome); // "MarioRossi"
console.log('nome + " " + cognome =', nome + " " + cognome); // "Mario Rossi"

console.log("\nCostruzione frasi:");
let saluto = "Ciao" + " " + "Mondo" + "!";
console.log('"Ciao" + " " + "Mondo" + "!" =', saluto);

let messaggio = "Il risultato è: " + "42";
console.log('"Il risultato è: " + "42" =', messaggio);

// 3. Conversione implicita (coercizione)
console.log("\n3. CONVERSIONE IMPLICITA (addizione):\n");

console.log("Numero + Stringa (converte a stringa):");
console.log("5 + '3' =", 5 + "3"); // "53" (concatenazione!)
console.log("'5' + 3 =", "5" + 3); // "53"
console.log("typeof (5 + '3') =", typeof (5 + "3")); // "string"

console.log("\nOrdine di valutazione (sinistra → destra):");
console.log("1 + 2 + '3' =", 1 + 2 + "3"); // "33" (prima 1+2=3, poi "3"+"3")
console.log("'1' + 2 + 3 =", "1" + 2 + 3); // "123" (tutto concatenato)
console.log("1 + '2' + 3 =", 1 + "2" + 3); // "123"

console.log("\nBoolean + numero:");
console.log("true + 5 =", true + 5); // 6 (true = 1)
console.log("false + 10 =", false + 10); // 10 (false = 0)
console.log("true + true =", true + true); // 2

console.log("\nNull e Undefined:");
console.log("null + 5 =", null + 5); // 5 (null = 0)
console.log("undefined + 5 =", undefined + 5); // NaN
console.log("5 + null =", 5 + null); // 5

// 4. Sottrazione
console.log("\n4. SOTTRAZIONE (-):\n");

console.log("Numeri interi:");
console.log("10 - 5 =", 10 - 5); // 5
console.log("5 - 10 =", 5 - 10); // -5
console.log("100 - 25 =", 100 - 25); // 75

console.log("\nNumeri decimali:");
console.log("10.5 - 2.3 =", 10.5 - 2.3); // 8.2
console.log("0.3 - 0.1 =", 0.3 - 0.1); // 0.19999999999999998 (precisione!)

console.log("\nNegativi:");
console.log("10 - (-5) =", 10 - (-5)); // 15
console.log("-10 - 5 =", -10 - 5); // -15
console.log("-10 - (-3) =", -10 - (-3)); // -7

// 5. Sottrazione con conversione implicita
console.log("\n5. SOTTRAZIONE con conversione:\n");

console.log("Stringa convertita a numero:");
console.log("'10' - 5 =", "10" - 5); // 5 (converte stringa a numero)
console.log("'20' - '5' =", "20" - "5"); // 15
console.log("typeof ('10' - 5) =", typeof ("10" - 5)); // "number"

console.log("\nBoolean:");
console.log("true - 1 =", true - 1); // 0
console.log("false - 1 =", false - 1); // -1
console.log("10 - true =", 10 - true); // 9

console.log("\nNull e Undefined:");
console.log("10 - null =", 10 - null); // 10 (null = 0)
console.log("10 - undefined =", 10 - undefined); // NaN

console.log("\nCasi invalidi (NaN):");
console.log("'ciao' - 5 =", "ciao" - 5); // NaN
console.log("'10px' - 5 =", "10px" - 5); // NaN (non come parseInt!)
console.log("undefined - 5 =", undefined - 5); // NaN

// 6. Problemi di precisione
console.log("\n6. PROBLEMI di PRECISIONE floating-point:\n");

console.log("Addizione:");
console.log("0.1 + 0.2 =", 0.1 + 0.2); // 0.30000000000000004
console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3); // false!

console.log("\nSottrazione:");
console.log("0.3 - 0.1 =", 0.3 - 0.1); // 0.19999999999999998
console.log("0.3 - 0.1 === 0.2:", 0.3 - 0.1 === 0.2); // false!

console.log("\nSoluzione: arrotondamento");
let somma = 0.1 + 0.2;
console.log("(0.1 + 0.2).toFixed(2) =", somma.toFixed(2)); // "0.30"
console.log("Math.round((0.1 + 0.2) * 100) / 100 =", Math.round((0.1 + 0.2) * 100) / 100); // 0.3

// 7. Valori speciali
console.log("\n7. Valori SPECIALI:\n");

console.log("Infinity:");
console.log("Infinity + 1 =", Infinity + 1); // Infinity
console.log("Infinity + Infinity =", Infinity + Infinity); // Infinity
console.log("Infinity - 100 =", Infinity - 100); // Infinity
console.log("Infinity - Infinity =", Infinity - Infinity); // NaN

console.log("\nNaN:");
console.log("NaN + 5 =", NaN + 5); // NaN
console.log("NaN - 10 =", NaN - 10); // NaN
console.log("5 + NaN =", 5 + NaN); // NaN

// 8. Casi d'uso pratici
console.log("\n8. CASI D'USO pratici:\n");

// Calcolo totale
let prezzo1 = 19.99;
let prezzo2 = 29.99;
let prezzo3 = 9.99;
let totale = prezzo1 + prezzo2 + prezzo3;
console.log("Carrello spesa:");
console.log(`  Prodotto 1: €${prezzo1}`);
console.log(`  Prodotto 2: €${prezzo2}`);
console.log(`  Prodotto 3: €${prezzo3}`);
console.log(`  Totale: €${totale.toFixed(2)}`);

// Calcolo resto
let pagato = 50;
let costo = 37.50;
let resto = pagato - costo;
console.log("\nCalcolo resto:");
console.log(`  Pagato: €${pagato}`);
console.log(`  Costo: €${costo}`);
console.log(`  Resto: €${resto.toFixed(2)}`);

// Costruzione URL
let base = "https://api.example.com";
let endpoint = "/users";
let id = "123";
let url = base + endpoint + "/" + id;
console.log("\nCostruzione URL:");
console.log("URL completo:", url);

// Template literals (alternativa moderna)
let urlTemplate = `${base}${endpoint}/${id}`;
console.log("URL con template:", urlTemplate);

// 9. Differenza tra + unario e sottrazione
console.log("\n9. DIFFERENZA tra + unario e sottrazione:\n");

console.log("+ unario (conversione):");
console.log("+'5' =", +"5"); // 5 (converte stringa a numero)
console.log("+true =", +true); // 1
console.log("+false =", +false); // 0

console.log("\n- unario (negazione):");
console.log("-5 =", -5); // -5
console.log("-'5' =", -"5"); // -5 (converte e nega)
console.log("-true =", -true); // -1

console.log("\nDoppia negazione:");
console.log("--5 =", - -5); // 5 (attenzione agli spazi!)
console.log("-(-5) =", -(-5)); // 5

// 10. Best practices
console.log("\n10. BEST PRACTICES:\n");

console.log("✓ Per concatenare stringhe:");
console.log("  - Usa template literals invece di +");
console.log('  - `${nome} ${cognome}` invece di nome + " " + cognome');

console.log("\n✓ Per precisione decimale:");
console.log("  - Usa toFixed() per visualizzazione");
console.log("  - Considera librerie come decimal.js per calcoli finanziari");

console.log("\n✓ Per conversioni esplicite:");
console.log("  - Usa Number() invece di + unario");
console.log("  - Number('5') è più chiaro di +'5'");

console.log("\n⚠️  Evita:");
console.log("  - Mix numero + stringa senza conversione esplicita");
console.log("  - Confronti diretti di numeri decimali");
console.log("  - Operazioni con undefined (sempre NaN)");

console.log("\n💡 Esempio codice pulito:");
console.log(`
function calcolaTotale(prezzi) {
  // Validazione
  if (!Array.isArray(prezzi)) return 0;
  
  // Somma con reduce
  const totale = prezzi.reduce((acc, prezzo) => {
    const num = Number(prezzo);
    return acc + (isNaN(num) ? 0 : num);
  }, 0);
  
  // Arrotondamento
  return Math.round(totale * 100) / 100;
}

const carrello = [19.99, 29.99, 9.99];
console.log("Totale:", calcolaTotale(carrello));
`);

console.log("\n✅ Addizione e sottrazione: semplici ma con insidie!");
