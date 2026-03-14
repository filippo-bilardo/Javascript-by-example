/**
 * Esempio: Operatori Relazionali <, >, <=, >=
 * 
 * Operatori per confrontare valori e determinare relazioni di ordine.
 * Comportamento con numeri, stringhe, e conversioni di tipo.
 * 
 * Per eseguire: node 02.02_relazionali.js
 */

console.log("=== OPERATORI RELAZIONALI <, >, <=, >= ===\n");

// 1. Maggiore (>) e Minore (<)
console.log("1. MAGGIORE (>) e MINORE (<):\n");

console.log("Con numeri:");
console.log("10 > 5:", 10 > 5); // true
console.log("5 > 10:", 5 > 10); // false
console.log("5 > 5:", 5 > 5); // false
console.log("5 < 10:", 5 < 10); // true
console.log("10 < 5:", 10 < 5); // false

console.log("\nCon decimali:");
console.log("3.14 > 3:", 3.14 > 3); // true
console.log("2.5 < 2.6:", 2.5 < 2.6); // true
console.log("0.1 + 0.2 > 0.3:", 0.1 + 0.2 > 0.3); // true (precisione!)

console.log("\nCon negativi:");
console.log("-5 > -10:", -5 > -10); // true
console.log("-10 < -5:", -10 < -5); // true
console.log("0 > -1:", 0 > -1); // true

// 2. Maggiore o Uguale (>=) e Minore o Uguale (<=)
console.log("\n2. MAGGIORE O UGUALE (>=) e MINORE O UGUALE (<=):\n");

console.log("Inclusione degli estremi:");
console.log("10 >= 5:", 10 >= 5); // true
console.log("5 >= 5:", 5 >= 5); // true
console.log("5 >= 10:", 5 >= 10); // false

console.log("\n10 <= 20:", 10 <= 20); // true
console.log("20 <= 20:", 20 <= 20); // true
console.log("20 <= 10:", 20 <= 10); // false

console.log("\nVerifica range:");
let numero = 15;
let nelRange = numero >= 10 && numero <= 20;
console.log(`${numero} è tra 10 e 20?`, nelRange); // true

// 3. Confronto tra stringhe (lessicografico)
console.log("\n3. CONFRONTO tra STRINGHE (lessicografico):\n");

console.log("Ordine alfabetico:");
console.log("'a' < 'b':", "a" < "b"); // true
console.log("'apple' < 'banana':", "apple" < "banana"); // true
console.log("'zebra' > 'apple':", "zebra" > "apple"); // true

console.log("\nMaiuscole vs minuscole:");
console.log("'A' < 'a':", "A" < "a"); // true (ASCII: A=65, a=97)
console.log("'Z' < 'a':", "Z" < "a"); // true
console.log("'Apple' < 'banana':", "Apple" < "banana"); // true

console.log("\nStringhe numeriche (lessicografico!):");
console.log("'10' < '2':", "10" < "2"); // true! ('1' < '2')
console.log("'10' < '9':", "10" < "9"); // true! ('1' < '9')
console.log("'100' < '20':", "100" < "20"); // true! ('1' < '2')
console.log("⚠️  Confronto carattere per carattere, non numerico!");

console.log("\nLunghezze diverse:");
console.log("'abc' < 'abcd':", "abc" < "abcd"); // true
console.log("'test' < 'testing':", "test" < "testing"); // true

// 4. Conversione implicita stringhe-numeri
console.log("\n4. CONVERSIONE IMPLICITA stringhe-numeri:\n");

console.log("Stringa numerica vs numero:");
console.log("'10' > 5:", "10" > 5); // true (converte '10' a 10)
console.log("'42' >= 41:", "42" >= 41); // true
console.log("'100' < 200:", "100" < 200); // true

console.log("\nMa tra due stringhe:");
console.log("'10' > '5':", "10" > "5"); // false! (lessicografico)
console.log("'100' < '20':", "100" < "20"); // true! (lessicografico)

console.log("\nConfronto misto (conversione):");
console.log("'10' < 20:", "10" < 20); // true (10 < 20)
console.log("'10' < '20':", "10" < "20"); // true (lessicografico ok)
console.log("10 < '20':", 10 < "20"); // true (10 < 20)

// 5. Casi speciali: null e undefined
console.log("\n5. CASI SPECIALI: null e undefined:\n");

console.log("null con numeri:");
console.log("null > 0:", null > 0); // false (null -> 0)
console.log("null >= 0:", null >= 0); // true! (null -> 0)
console.log("null < 1:", null < 1); // true (null -> 0)
console.log("null == 0:", null == 0); // false (caso speciale!)

console.log("\nundefined con numeri:");
console.log("undefined > 0:", undefined > 0); // false (undefined -> NaN)
console.log("undefined < 0:", undefined < 0); // false (NaN)
console.log("undefined >= 0:", undefined >= 0); // false (NaN)

console.log("\nnull vs undefined:");
console.log("null > undefined:", null > undefined); // false
console.log("null < undefined:", null < undefined); // false
console.log("null >= undefined:", null >= undefined); // false

// 6. Casi speciali: NaN
console.log("\n6. CASI SPECIALI: NaN:\n");

console.log("NaN con qualsiasi confronto:");
console.log("NaN > 5:", NaN > 5); // false
console.log("NaN < 5:", NaN < 5); // false
console.log("NaN >= 5:", NaN >= 5); // false
console.log("NaN <= 5:", NaN <= 5); // false
console.log("NaN > NaN:", NaN > NaN); // false
console.log("⚠️  NaN rende TUTTI i confronti relazionali false!");

// 7. Infinity e -Infinity
console.log("\n7. INFINITY e -INFINITY:\n");

console.log("Infinity:");
console.log("Infinity > 1000000:", Infinity > 1000000); // true
console.log("Infinity > Number.MAX_VALUE:", Infinity > Number.MAX_VALUE); // true
console.log("Infinity >= Infinity:", Infinity >= Infinity); // true
console.log("Infinity > Infinity:", Infinity > Infinity); // false

console.log("\n-Infinity:");
console.log("-Infinity < -1000000:", -Infinity < -1000000); // true
console.log("-Infinity < Number.MIN_VALUE:", -Infinity < Number.MIN_VALUE); // true
console.log("-Infinity <= -Infinity:", -Infinity <= -Infinity); // true

console.log("\nInfinity vs -Infinity:");
console.log("Infinity > -Infinity:", Infinity > -Infinity); // true
console.log("-Infinity < Infinity:", -Infinity < Infinity); // true

// 8. Boolean nei confronti
console.log("\n8. BOOLEAN nei confronti:\n");

console.log("Boolean convertito a numero:");
console.log("true > 0:", true > 0); // true (true -> 1)
console.log("true > false:", true > false); // true (1 > 0)
console.log("false < 1:", false < 1); // true (0 < 1)
console.log("false >= 0:", false >= 0); // true (0 >= 0)

console.log("\nBoolean con stringhe:");
console.log("true > '0':", true > "0"); // true (1 > 0)
console.log("false < '1':", false < "1"); // true (0 < 1)

// 9. Casi d'uso pratici
console.log("\n9. CASI D'USO pratici:\n");

// Verifica range
function inRange(value, min, max) {
  return value >= min && value <= max;
}
console.log("inRange(15, 10, 20):", inRange(15, 10, 20)); // true
console.log("inRange(25, 10, 20):", inRange(25, 10, 20)); // false

// Validazione età
function isAdult(age) {
  return age >= 18;
}
console.log("isAdult(20):", isAdult(20)); // true
console.log("isAdult(16):", isAdult(16)); // false

// Ordine lessicografico case-insensitive
function compareStrings(str1, str2) {
  return str1.toLowerCase() < str2.toLowerCase();
}
console.log("compareStrings('Apple', 'banana'):", 
  compareStrings("Apple", "banana")); // true

// Confronto date
let data1 = new Date("2024-01-01");
let data2 = new Date("2024-12-31");
console.log("\nConfronto date:");
console.log("data1 < data2:", data1 < data2); // true
console.log("data1.getTime() < data2.getTime():", 
  data1.getTime() < data2.getTime()); // true

// 10. Best practices
console.log("\n10. BEST PRACTICES:\n");

console.log("✓ Per numeri: conversione esplicita");
console.log(`
// ✓ Sicuro
if (Number(str) > 10) { ... }

// ⚠️  Rischioso (conversione implicita)
if (str > 10) { ... }
`);

console.log("✓ Per stringhe numeriche: convertire prima");
console.log(`
// ✗ Sbagliato (lessicografico)
if ('10' < '2') { ... }  // true!

// ✓ Corretto (numerico)
if (Number('10') < Number('2')) { ... }  // false
`);

console.log("✓ Per stringhe: localeCompare()");
console.log(`
// ✓ Per ordinamento corretto
arr.sort((a, b) => a.localeCompare(b));

// Considera locale e caratteri speciali
'ä'.localeCompare('z', 'de')  // -1 in tedesco
`);

console.log("✓ Per case-insensitive:");
console.log(`
// ✓ Convertire prima
str1.toLowerCase() < str2.toLowerCase()
`);

console.log("✓ Validare input prima del confronto:");
console.log(`
function compareAge(age) {
  if (isNaN(age) || age < 0) {
    throw new Error("Età non valida");
  }
  return age >= 18;
}
`);

console.log("\n⚠️  ATTENZIONE:");
console.log("  - '10' < '2' è true (lessicografico)");
console.log("  - '10' < 2 è false (numerico)");
console.log("  - null >= 0 è true, ma null == 0 è false!");
console.log("  - NaN rende tutti i confronti false");
console.log("  - Maiuscole < minuscole in ASCII");

console.log("\n✅ Usa conversione esplicita per evitare sorprese!");
