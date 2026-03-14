/**
 * Esempio: Conversione Implicita (Coercizione)
 * 
 * JavaScript converte automaticamente i tipi quando necessario.
 * Questo comportamento può essere utile ma anche fonte di bug.
 * 
 * Per eseguire: node 04.01_conversione_implicita.js
 */

console.log("=== CONVERSIONE IMPLICITA (COERCIZIONE) ===\n");

// 1. Conversione implicita a String
console.log("1. Conversione implicita a STRING:\n");

// Operatore + con stringhe
console.log("Numero + stringa:");
console.log("42 + '' =", 42 + ""); // "42"
console.log("42 + '10' =", 42 + "10"); // "4210" (concatenazione!)
console.log("typeof (42 + '') =", typeof (42 + ""));

console.log("\nBoolean + stringa:");
console.log("true + '' =", true + ""); // "true"
console.log("false + 'valore' =", false + "valore"); // "falsevalore"

console.log("\nArray + stringa:");
let arr = [1, 2, 3];
console.log("[1,2,3] + '' =", arr + ""); // "1,2,3"
console.log("[1,2,3] + '!' =", arr + "!"); // "1,2,3!"

console.log("\nObject + stringa:");
let obj = { nome: "Mario" };
console.log("{nome: 'Mario'} + '' =", obj + ""); // "[object Object]"

console.log("\nNull e Undefined:");
console.log("null + '' =", null + ""); // "null"
console.log("undefined + '' =", undefined + ""); // "undefined"

// 2. Conversione implicita a Number
console.log("\n2. Conversione implicita a NUMBER:\n");

// Operatori matematici (eccetto +)
console.log("Sottrazione:");
console.log("'42' - 0 =", "42" - 0); // 42
console.log("'100' - 50 =", "100" - 50); // 50
console.log("'10' - '5' =", "10" - "5"); // 5
console.log("typeof ('42' - 0) =", typeof ("42" - 0));

console.log("\nMoltiplicazione:");
console.log("'5' * 2 =", "5" * 2); // 10
console.log("'3' * '4' =", "3" * "4"); // 12

console.log("\nDivisione:");
console.log("'20' / 4 =", "20" / 4); // 5
console.log("'100' / '5' =", "100" / "5"); // 20

console.log("\nModulo:");
console.log("'17' % 5 =", "17" % 5); // 2

// Con boolean
console.log("\nBoolean in operazioni:");
console.log("true - 0 =", true - 0); // 1
console.log("false - 0 =", false - 0); // 0
console.log("true * 10 =", true * 10); // 10
console.log("false * 10 =", false * 10); // 0

// Con null e undefined
console.log("\nNull e Undefined:");
console.log("null - 0 =", null - 0); // 0
console.log("undefined - 0 =", undefined - 0); // NaN
console.log("null * 5 =", null * 5); // 0
console.log("undefined * 5 =", undefined * 5); // NaN

// Casi problematici
console.log("\nCasi problematici (NaN):");
console.log("'ciao' - 0 =", "ciao" - 0); // NaN
console.log("'42px' - 0 =", "42px" - 0); // NaN (non come parseInt!)
console.log("'abc' * 2 =", "abc" * 2); // NaN

// 3. Operatore + speciale
console.log("\n3. Comportamento SPECIALE dell'operatore +:\n");

console.log("Con almeno una stringa - concatenazione:");
console.log("1 + '2' =", 1 + "2"); // "12"
console.log("'1' + 2 =", "1" + 2); // "12"
console.log("'1' + '2' =", "1" + "2"); // "12"

console.log("\nSenza stringhe - somma:");
console.log("1 + 2 =", 1 + 2); // 3
console.log("true + true =", true + true); // 2
console.log("null + null =", null + null); // 0

console.log("\nOrdine di valutazione (da sinistra a destra):");
console.log("1 + 2 + '3' =", 1 + 2 + "3"); // "33" (prima 1+2=3, poi "3"+"3")
console.log("'1' + 2 + 3 =", "1" + 2 + 3); // "123" (tutto concatenato)
console.log("1 + '2' + 3 =", 1 + "2" + 3); // "123"

// 4. Conversione in confronti
console.log("\n4. Conversione nei CONFRONTI:\n");

console.log("Confronti con conversione:");
console.log("'42' > 40 =", "42" > 40); // true ("42" -> 42)
console.log("'100' < 200 =", "100" < 200); // true
console.log("'5' == 5 =", "5" == 5); // true (conversione)
console.log("'5' === 5 =", "5" === 5); // false (no conversione)

console.log("\nBoolean nei confronti:");
console.log("true == 1 =", true == 1); // true
console.log("false == 0 =", false == 0); // true
console.log("true === 1 =", true === 1); // false

console.log("\nNull e Undefined:");
console.log("null == undefined =", null == undefined); // true (caso speciale!)
console.log("null === undefined =", null === undefined); // false
console.log("null == 0 =", null == 0); // false (altro caso speciale!)
console.log("undefined == 0 =", undefined == 0); // false

// 5. Conversione implicita a Boolean
console.log("\n5. Conversione implicita a BOOLEAN:\n");

console.log("Valori FALSY (convertiti a false):");
let falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];
falsyValues.forEach(val => {
  console.log(`  ${String(val).padEnd(10)} -> Boolean:`, Boolean(val));
});

console.log("\nValori TRUTHY (convertiti a true):");
let truthyValues = [true, 1, -1, "0", "false", [], {}, Infinity];
truthyValues.forEach(val => {
  console.log(`  ${String(val).padEnd(10)} -> Boolean:`, Boolean(val));
});

console.log("\nIn contesti condizionali:");
if ("") {
  console.log("Stringa vuota: eseguito");
} else {
  console.log("Stringa vuota: NON eseguito ✓");
}

if ("0") { // Attenzione! "0" è truthy!
  console.log("Stringa '0': eseguito ✓");
}

if ([]) { // Array vuoto è truthy!
  console.log("Array vuoto: eseguito ✓");
}

// 6. Operatori logici con coercizione
console.log("\n6. Operatori LOGICI con coercizione:\n");

// && restituisce il primo falsy o l'ultimo valore
console.log("AND (&&) - restituisce primo falsy o ultimo:");
console.log("0 && 'ciao' =", 0 && "ciao"); // 0 (primo falsy)
console.log("'ciao' && 'mondo' =", "ciao" && "mondo"); // "mondo" (ultimo)
console.log("5 && null && 10 =", 5 && null && 10); // null (primo falsy)

// || restituisce il primo truthy o l'ultimo valore
console.log("\nOR (||) - restituisce primo truthy o ultimo:");
console.log("0 || 'default' =", 0 || "default"); // "default" (primo truthy)
console.log("'' || 'testo' =", "" || "testo"); // "testo"
console.log("null || undefined =", null || undefined); // undefined (ultimo)

console.log("\nUso pratico - valori di default:");
let username = "" || "Guest";
console.log("username ('' || 'Guest'):", username);

let count = 0 || 10;
console.log("count (0 || 10):", count); // 10 (attenzione! 0 è falsy)

// ?? (nullish coalescing) è meglio per numeri e stringhe
let count2 = 0 ?? 10;
console.log("count2 (0 ?? 10):", count2); // 0 (solo null/undefined sono sostituiti)

// 7. Casi strani e pericolosi
console.log("\n7. Casi STRANI e PERICOLOSI:\n");

console.log("Array e oggetti:");
console.log("[] + [] =", [] + []); // "" (entrambi -> "")
console.log("[] + {} =", [] + {}); // "[object Object]"
console.log("{} + [] =", {} + []); // 0 o "[object Object]" (dipende dal contesto!)
console.log("[] == false =", [] == false); // true!
console.log("[] == 0 =", [] == 0); // true!

console.log("\nStringhe e numeri:");
console.log("'10' + 20 + 30 =", "10" + 20 + 30); // "102030"
console.log("10 + 20 + '30' =", 10 + 20 + "30"); // "3030"
console.log("'5' - '2' + '1' =", "5" - "2" + "1"); // "31" (5-2=3, poi "3"+"1")

console.log("\nNumeri strani:");
console.log("true + true + true =", true + true + true); // 3
console.log("true - true =", true - true); // 0
console.log("!!'false' =", !!"false"); // true (stringa "false" è truthy!)
console.log("!!0 =", !!0); // false

// 8. Tabella di conversione == (lossy equality)
console.log("\n8. Tabella conversione con == (evitare!):\n");

const testCases = [
  ["0", 0, true],
  ["0", false, true],
  ["", false, true],
  ["", 0, true],
  [false, 0, true],
  [null, undefined, true],
  ["5", 5, true],
  [NaN, NaN, false], // NaN non è mai uguale a se stesso!
];

testCases.forEach(([a, b, expected]) => {
  const result = a == b;
  const symbol = result === expected ? "✓" : "✗";
  console.log(`  ${symbol} ${String(a).padEnd(10)} == ${String(b).padEnd(10)} = ${result}`);
});

// 9. Template literal coercion
console.log("\n9. Template literals e coercizione:\n");

let num = 42;
let bool = true;
let nothing = null;

console.log(`Numero: ${num}`); // Automaticamente convertito a stringa
console.log(`Boolean: ${bool}`);
console.log(`Null: ${nothing}`);
console.log(`Espressione: ${5 + 3}`);
console.log(`Oggetto: ${{ a: 1 }}`); // "[object Object]"

console.log("\n💡 Best Practices:");
console.log("   ⚠️  La coercizione implicita può causare bug!");
console.log("   ✓ Preferire conversione esplicita");
console.log("   ✓ Usare === invece di ==");
console.log("   ✓ Usare ?? invece di || per default values");
console.log("   ✓ Verificare tipi con typeof quando necessario");
console.log("   ✓ Attenzione: '0', [], {} sono truthy!");
