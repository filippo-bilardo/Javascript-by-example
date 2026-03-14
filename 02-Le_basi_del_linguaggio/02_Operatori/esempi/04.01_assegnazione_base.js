/**
 * Esempio: Operatori di Assegnazione Base
 * 
 * Assegnazione semplice (=) e composta (+=, -=, *=, /=, %=, **=).
 * Come funzionano e quando usarli.
 * 
 * Per eseguire: node 04.01_assegnazione_base.js
 */

console.log("=== OPERATORI DI ASSEGNAZIONE BASE ===\n");

// 1. Assegnazione semplice (=)
console.log("1. ASSEGNAZIONE SEMPLICE (=):\n");

console.log("Sintassi base:");
let x = 10;
console.log("let x = 10, x =", x); // 10

let y = x;
console.log("let y = x, y =", y); // 10

let z = x + y;
console.log("let z = x + y, z =", z); // 20

console.log("\nAssegnazione multipla:");
let a, b, c;
a = b = c = 5;
console.log("a = b = c = 5");
console.log("a =", a, ", b =", b, ", c =", c); // 5, 5, 5

console.log("\n⚠️  Valutato da destra a sinistra:");
console.log("Prima: c = 5");
console.log("Poi: b = c (= 5)");
console.log("Infine: a = b (= 5)");

// 2. Assegnazione con addizione (+=)
console.log("\n2. ASSEGNAZIONE con ADDIZIONE (+=):\n");

let count = 10;
console.log("count =", count); // 10

count += 5;
console.log("count += 5, count =", count); // 15

console.log("\n✓ count += 5 equivale a: count = count + 5");

console.log("\nCon stringhe:");
let message = "Hello";
message += " World";
console.log("message =", message); // "Hello World"

message += "!";
console.log("message += '!', message =", message); // "Hello World!"

console.log("\nCon array (concatenazione):");
let arr = [1, 2, 3];
// arr += [4, 5]; // ⚠️  Non usare! Converte a stringa
console.log("⚠️  += con array converte a stringa, usa push/concat");

// 3. Assegnazione con sottrazione (-=)
console.log("\n3. ASSEGNAZIONE con SOTTRAZIONE (-=):\n");

let balance = 100;
console.log("balance =", balance); // 100

balance -= 25;
console.log("balance -= 25, balance =", balance); // 75

balance -= 10;
console.log("balance -= 10, balance =", balance); // 65

console.log("\n✓ balance -= 25 equivale a: balance = balance - 25");

console.log("\nCon negativi:");
let temperature = 20;
temperature -= -5;
console.log("temperature -= -5, temperature =", temperature); // 25

// 4. Assegnazione con moltiplicazione (*=)
console.log("\n4. ASSEGNAZIONE con MOLTIPLICAZIONE (*=):\n");

let value = 5;
console.log("value =", value); // 5

value *= 3;
console.log("value *= 3, value =", value); // 15

value *= 2;
console.log("value *= 2, value =", value); // 30

console.log("\n✓ value *= 3 equivale a: value = value * 3");

console.log("\nRaddoppio:");
let size = 10;
size *= 2;
console.log("size *= 2, size =", size); // 20

// 5. Assegnazione con divisione (/=)
console.log("\n5. ASSEGNAZIONE con DIVISIONE (/=):\n");

let total = 100;
console.log("total =", total); // 100

total /= 4;
console.log("total /= 4, total =", total); // 25

total /= 5;
console.log("total /= 5, total =", total); // 5

console.log("\n✓ total /= 4 equivale a: total = total / 4");

console.log("\nCon decimali:");
let price = 100;
price /= 3;
console.log("price /= 3, price =", price); // 33.333...

console.log("\nDivisione per zero:");
let num = 10;
num /= 0;
console.log("num /= 0, num =", num); // Infinity

// 6. Assegnazione con modulo (%=)
console.log("\n6. ASSEGNAZIONE con MODULO (%=):\n");

let remainder = 17;
console.log("remainder =", remainder); // 17

remainder %= 5;
console.log("remainder %= 5, remainder =", remainder); // 2

console.log("\n✓ remainder %= 5 equivale a: remainder = remainder % 5");

console.log("\nCiclo modulo:");
let position = 8;
let maxPosition = 5;
position %= maxPosition;
console.log(`position ${8} %= ${maxPosition}, position =`, position); // 3

console.log("\nControllo pari/dispari:");
let number = 7;
let isOdd = number % 2; // 1
number %= 2;
console.log("number %= 2, number =", number); // 1 (dispari)

// 7. Assegnazione con esponente (**=)
console.log("\n7. ASSEGNAZIONE con ESPONENTE (**=):\n");

let base = 2;
console.log("base =", base); // 2

base **= 3;
console.log("base **= 3, base =", base); // 8

base **= 2;
console.log("base **= 2, base =", base); // 64

console.log("\n✓ base **= 3 equivale a: base = base ** 3");

console.log("\nQuadrato:");
let side = 5;
side **= 2;
console.log("side **= 2 (area), side =", side); // 25

console.log("\nRadice (esponente frazionario):");
let area = 16;
area **= 0.5;
console.log("area **= 0.5 (radice), area =", area); // 4

// 8. Confronto forme abbreviate vs estese
console.log("\n8. CONFRONTO forme abbreviate vs estese:\n");

console.log("Forma abbreviata vs estesa:");
let n1 = 10;
let n2 = 10;

n1 += 5;
n2 = n2 + 5;
console.log("n1 += 5:", n1, ", n2 = n2 + 5:", n2); // Entrambi 15

console.log("\nVantaggi forma abbreviata:");
console.log("✓ Più concisa");
console.log("✓ Più leggibile");
console.log("✓ Meno errori di battitura");
console.log("✓ Variabile valutata una sola volta");

// 9. Casi d'uso pratici
console.log("\n9. CASI D'USO pratici:\n");

console.log("Contatore:");
let score = 0;
score += 10; // +10 punti
console.log("score += 10:", score); // 10
score += 5;  // +5 punti
console.log("score += 5:", score); // 15
score -= 3;  // -3 punti (penalità)
console.log("score -= 3:", score); // 12

console.log("\nSconto:");
let originalPrice = 100;
originalPrice *= 0.8; // 20% di sconto
console.log("originalPrice *= 0.8 (sconto 20%):", originalPrice); // 80

console.log("\nSplit conto:");
let bill = 150;
let people = 3;
bill /= people;
console.log(`bill /= ${people} persone:`, bill); // 50 a persona

console.log("\nAccumulatore:");
let sum = 0;
[1, 2, 3, 4, 5].forEach(n => sum += n);
console.log("sum di [1,2,3,4,5]:", sum); // 15

console.log("\nIncremento percentuale:");
let salary = 1000;
salary *= 1.1; // +10%
console.log("salary *= 1.1 (+10%):", salary); // 1100

// 10. Best practices
console.log("\n10. BEST PRACTICES:\n");

console.log("✓ Usa forme abbreviate per chiarezza:");
console.log(`
// ✓ Chiaro
count += 1;
total -= discount;
area *= 2;

// ⚠️  Verbose
count = count + 1;
total = total - discount;
area = area * 2;
`);

console.log("✓ Evita assegnazioni multiple sulla stessa riga:");
console.log(`
// ✗ Confuso
a = b += c = 5;

// ✓ Chiaro
c = 5;
b += c;
a = b;
`);

console.log("✓ Parentesi per espressioni complesse:");
console.log(`
// ⚠️  Può essere ambiguo
x += y * 2 + z;

// ✓ Chiaro
x += (y * 2) + z;
`);

console.log("✓ Non confondere = con ==:");
console.log(`
// ✗ ERRORE! Assegnazione invece di confronto
if (x = 5) { }  // Assegna 5 a x!

// ✓ Corretto
if (x === 5) { }  // Confronto
`);

console.log("✓ Inizializza prima di usare +=, -=, etc:");
console.log(`
// ✗ ERRORE! total non inizializzato
let total;
total += 10;  // NaN!

// ✓ Corretto
let total = 0;
total += 10;  // 10
`);

console.log("✓ Attenzione con += su stringhe vs numeri:");
console.log(`
let x = '5';
x += 2;  // '52' (concatenazione!)

let y = 5;
y += 2;  // 7 (somma)

// ✓ Converti esplicitamente se necessario
let x = '5';
x = Number(x) + 2;  // 7
`);

console.log("\n⚠️  RICORDA:");
console.log("  - x += y equivale a x = x + y");
console.log("  - L'operatore viene applicato prima dell'assegnazione");
console.log("  - += con stringhe concatena, non somma");
console.log("  - Inizializza sempre le variabili prima");
console.log("  - Forme abbreviate sono più leggibili");
console.log("  - /= 0 produce Infinity, non errore");
console.log("  - Non confondere = (assegnazione) con == (confronto)");

console.log("\n✅ Usa operatori composti per codice più pulito!");
