/**
 * Esempio: Operatori Unari e Precedenza
 * 
 * Operatori unari (+, -) per conversione e negazione.
 * Precedenza degli operatori aritmetici e uso delle parentesi.
 * 
 * Per eseguire: node 01.05_unari_precedenza.js
 */

console.log("=== OPERATORI UNARI E PRECEDENZA ===\n");

// 1. Operatore Unario + (conversione)
console.log("1. OPERATORE UNARIO + (conversione a numero):\n");

console.log("Stringhe numeriche:");
console.log("+'5' =", +"5"); // 5
console.log("+'3.14' =", +"3.14"); // 3.14
console.log("+'  42  ' =", +"  42  "); // 42 (trim automatico)
console.log("typeof +'5' =", typeof +"5"); // "number"

console.log("\nStringhe non numeriche:");
console.log("+'hello' =", +"hello"); // NaN
console.log("+'12px' =", +"12px"); // NaN
console.log("typeof +'hello' =", typeof +"hello"); // "number"

console.log("\nBoolean:");
console.log("+true =", +true); // 1
console.log("+false =", +false); // 0

console.log("\nNull e Undefined:");
console.log("+null =", +null); // 0
console.log("+undefined =", +undefined); // NaN

console.log("\nArray e Object:");
console.log("+[] =", +[]); // 0
console.log("+[5] =", +[5]); // 5
console.log("+[1,2] =", +[1, 2]); // NaN
console.log("+{} =", +{}); // NaN

console.log("\nDate (timestamp):");
let now = new Date();
console.log("+new Date() =", +now); // Millisecondi dal 1970

// 2. Operatore Unario - (negazione)
console.log("\n2. OPERATORE UNARIO - (negazione):\n");

console.log("Negazione numeri:");
console.log("-5 =", -5); // -5
console.log("-(10) =", -(10)); // -10
console.log("-(-7) =", -(-7)); // 7 (doppia negazione)

console.log("\nCon conversione:");
console.log("-'5' =", -"5"); // -5 (converte E nega)
console.log("-true =", -true); // -1
console.log("-false =", -false); // -0
console.log("-null =", -null); // -0

console.log("\nStringhe non numeriche:");
console.log("-'hello' =", -"hello"); // NaN
console.log("-undefined =", -undefined); // NaN

console.log("\nZero negativo:");
console.log("-0 =", -0); // -0
console.log("-0 === 0:", -0 === 0); // true (ma sono diversi!)
console.log("1 / -0 =", 1 / -0); // -Infinity
console.log("1 / 0 =", 1 / 0); // Infinity

// 3. Confronto + e - unari
console.log("\n3. CONFRONTO + e - unari:\n");

const testValues = ["5", "hello", true, false, null, undefined, []];

console.log("Valore".padEnd(12), "+valore".padEnd(12), "-valore");
console.log("-".repeat(40));
testValues.forEach(val => {
  console.log(
    String(val).padEnd(12),
    String(+val).padEnd(12),
    String(-val)
  );
});

// 4. Uso pratico operatori unari
console.log("\n4. USO PRATICO operatori unari:\n");

// Conversione input utente
let userInput = "42";
let number = +userInput;
console.log("Input utente '42' -> numero:", number);

// Timestamp rapido
let timestamp = +new Date();
console.log("Timestamp:", timestamp);

// Inversione segno
let temperature = 15;
let negative = -temperature;
console.log(`Temperatura: ${temperature}°C, Negativa: ${negative}°C`);

// Validazione numero
function isValidNumber(input) {
  const num = +input;
  return !isNaN(num) && isFinite(num);
}
console.log("\nValidazione:");
console.log("isValidNumber('42'):", isValidNumber("42"));
console.log("isValidNumber('abc'):", isValidNumber("abc"));

// 5. Precedenza degli operatori
console.log("\n5. PRECEDENZA degli OPERATORI:\n");

console.log("1. Parentesi ()");
console.log("2. Esponente **");
console.log("3. Unari +, -, ++, --");
console.log("4. Moltiplicazione *, /, %");
console.log("5. Addizione +, Sottrazione -");

console.log("\nEsempi precedenza:");
console.log("2 + 3 * 4 =", 2 + 3 * 4); // 14 (* prima di +)
console.log("10 - 4 + 2 =", 10 - 4 + 2); // 8 (sinistra → destra)
console.log("10 / 2 * 5 =", 10 / 2 * 5); // 25 (sinistra → destra)
console.log("2 ** 3 ** 2 =", 2 ** 3 ** 2); // 512 (destra → sinistra!)

// 6. Uso delle parentesi
console.log("\n6. USO delle PARENTESI:\n");

console.log("Senza parentesi:");
console.log("2 + 3 * 4 =", 2 + 3 * 4); // 14

console.log("\nCon parentesi:");
console.log("(2 + 3) * 4 =", (2 + 3) * 4); // 20

console.log("\nEspressioni complesse:");
let a = 5, b = 3, c = 2;
console.log("a + b * c =", a + b * c); // 11
console.log("(a + b) * c =", (a + b) * c); // 16
console.log("a + (b * c) =", a + (b * c)); // 11 (uguale, ma più chiaro)

console.log("\nParentesi annidate:");
console.log("((2 + 3) * (4 - 1)) / 5 =", ((2 + 3) * (4 - 1)) / 5); // 3

// 7. Esempi precedenza con tutti gli operatori
console.log("\n7. ESEMPI PRECEDENZA completi:\n");

console.log("Mix operatori:");
console.log("2 + 3 ** 2 =", 2 + 3 ** 2); // 11 (** prima)
console.log("-2 ** 2 =", -2 ** 2); // Syntax Error! Usa (-2) ** 2
console.log("(-2) ** 2 =", (-2) ** 2); // 4

console.log("\nIncremento in espressioni:");
let x = 5;
console.log("x = 5");
console.log("++x * 2 =", ++x * 2); // 12 (++ prima di *)
console.log("x dopo =", x); // 6

let y = 5;
console.log("\ny = 5");
console.log("y++ * 2 =", y++ * 2); // 10 (* prima di ++)
console.log("y dopo =", y); // 6

console.log("\nModulo vs moltiplicazione:");
console.log("10 + 5 % 3 =", 10 + 5 % 3); // 12 (% prima di +)
console.log("10 * 5 % 3 =", 10 * 5 % 3); // 2 (*, % stessa precedenza, sx→dx)

// 8. Associatività
console.log("\n8. ASSOCIATIVITÀ degli operatori:\n");

console.log("Associatività sinistra (→):");
console.log("10 - 5 - 2 =", 10 - 5 - 2); // 3 ((10-5)-2)
console.log("20 / 4 / 2 =", 20 / 4 / 2); // 2.5 ((20/4)/2)
console.log("8 % 5 % 2 =", 8 % 5 % 2); // 1 ((8%5)%2)

console.log("\nAssociatività destra (←):");
console.log("2 ** 3 ** 2 =", 2 ** 3 ** 2); // 512 (2**(3**2))
console.log("Equivale a: 2 ** (3 ** 2) =", 2 ** (3 ** 2));

let n = 0;
console.log("\nAssegnamento (destra):");
console.log("a = b = c = 5"); // Tutti diventano 5

// 9. Casi problematici
console.log("\n9. CASI PROBLEMATICI:\n");

console.log("⚠️  Espressioni ambigue:");
console.log("// 10 / 2 * 5 = ? (25 non 1!)");
console.log("10 / 2 * 5 =", 10 / 2 * 5); // 25
console.log("10 / (2 * 5) =", 10 / (2 * 5)); // 1

console.log("\n⚠️  Unari con esponente:");
console.log("// -2 ** 2 è ERRORE in JS!");
console.log("// Usa: (-2) ** 2");
console.log("(-2) ** 2 =", (-2) ** 2); // 4
console.log("-(2 ** 2) =", -(2 ** 2)); // -4

console.log("\n⚠️  Mix incremento:");
let i = 5;
console.log("i = 5");
console.log("i++ + ++i =", i++ + ++i); // 5 + 7 = 12
console.log("i finale =", i); // 7
console.log("CONFUSO! Evita!");

// 10. Best practices
console.log("\n10. BEST PRACTICES:\n");

console.log("✓ Usa parentesi per CHIAREZZA:");
console.log(`
// Meno chiaro
let result = a + b * c / d - e;

// Più chiaro
let result = a + ((b * c) / d) - e;

// Ancora meglio: dividi
let temp = (b * c) / d;
let result = a + temp - e;
`);

console.log("✓ Per CONVERSIONE usa metodi espliciti:");
console.log(`
// Meno chiaro
let num = +str;

// Più chiaro
let num = Number(str);

// Per timestamp
let time = Date.now();  // Meglio di +new Date()
`);

console.log("✓ Evita ESPRESSIONI COMPLESSE:");
console.log(`
// ❌ Troppo complesso
let x = a++ * ++b / c-- - --d;

// ✓ Dividi in passi
let temp1 = a * b;
a++;
b++;
let temp2 = temp1 / c;
c--;
let x = temp2 - d;
d--;
`);

console.log("\n💡 Tabella precedenza completa:");
console.log(`
Precedenza  Operatore        Associatività  Esempio
----------  ------------     -------------  -------
1 (max)     ()               n/a            (a + b)
2           **               destra         2 ** 3 ** 2
3           ++ -- + - (un)   destra         ++x, +x, -x
4           * / %            sinistra       a * b
5           + -              sinistra       a + b
6 (min)     = += -= *= /=    destra         a = 5
`);

console.log("\n💡 Esempi formule comuni:");
console.log(`
// Area cerchio: πr²
let r = 5;
let area = Math.PI * (r ** 2);  // Parentesi per chiarezza

// Formula quadratica: (-b ± √(b²-4ac)) / 2a
let a = 1, b = -5, c = 6;
let discriminante = (b ** 2) - (4 * a * c);
let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);

// Media ponderata: (a*w1 + b*w2 + c*w3) / (w1+w2+w3)
let voti = [8, 7, 9];
let pesi = [2, 3, 1];
let sommaVoti = (voti[0]*pesi[0] + voti[1]*pesi[1] + voti[2]*pesi[2]);
let sommaPesi = pesi[0] + pesi[1] + pesi[2];
let media = sommaVoti / sommaPesi;
`);

console.log("\n✅ Precedenza: impara le regole, usa parentesi per chiarezza!");
