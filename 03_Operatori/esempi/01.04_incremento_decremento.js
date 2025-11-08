/**
 * Esempio: Operatori di Incremento e Decremento
 * 
 * Incremento (++) e decremento (--) modificano una variabile di 1.
 * Differenza cruciale tra versione prefissa e postfissa.
 * 
 * Per eseguire: node 01.04_incremento_decremento.js
 */

console.log("=== OPERATORI DI INCREMENTO E DECREMENTO ===\n");

// 1. Incremento postfisso (x++)
console.log("1. INCREMENTO POSTFISSO (x++):\n");

console.log("Restituisce valore, POI incrementa:");
let a = 5;
console.log("let a = 5;");
console.log("let b = a++;");
let b = a++;
console.log("b =", b); // 5 (valore prima dell'incremento)
console.log("a =", a); // 6 (incrementato dopo)

console.log("\nEsempio passo-passo:");
let x = 10;
console.log("x =", x); // 10
console.log("x++ =", x++); // 10 (restituisce, poi incrementa)
console.log("x =", x); // 11

console.log("\nIn espressioni:");
let count = 0;
console.log("let count = 0;");
console.log("console.log(count++) =", count++); // 0
console.log("console.log(count++) =", count++); // 1
console.log("console.log(count++) =", count++); // 2
console.log("count finale =", count); // 3

// 2. Incremento prefisso (++x)
console.log("\n2. INCREMENTO PREFISSO (++x):\n");

console.log("Incrementa PRIMA, poi restituisce:");
let c = 5;
console.log("let c = 5;");
console.log("let d = ++c;");
let d = ++c;
console.log("d =", d); // 6 (valore dopo incremento)
console.log("c =", c); // 6

console.log("\nEsempio passo-passo:");
let y = 10;
console.log("y =", y); // 10
console.log("++y =", ++y); // 11 (incrementa, poi restituisce)
console.log("y =", y); // 11

console.log("\nIn espressioni:");
let num = 0;
console.log("let num = 0;");
console.log("console.log(++num) =", ++num); // 1
console.log("console.log(++num) =", ++num); // 2
console.log("console.log(++num) =", ++num); // 3
console.log("num finale =", num); // 3

// 3. Confronto diretto ++ postfisso vs prefisso
console.log("\n3. CONFRONTO ++ postfisso vs prefisso:\n");

console.log("Postfisso (x++):");
let post = 5;
console.log("  post = 5");
console.log("  Espressione: post++ =", post++); // 5
console.log("  Dopo: post =", post); // 6

console.log("\nPrefisso (++x):");
let pre = 5;
console.log("  pre = 5");
console.log("  Espressione: ++pre =", ++pre); // 6
console.log("  Dopo: pre =", pre); // 6

console.log("\nStesso risultato finale, valore intermedio diverso!");

// 4. Decremento postfisso (x--)
console.log("\n4. DECREMENTO POSTFISSO (x--):\n");

console.log("Restituisce valore, POI decrementa:");
let e = 10;
console.log("let e = 10;");
console.log("let f = e--;");
let f = e--;
console.log("f =", f); // 10 (valore prima)
console.log("e =", e); // 9 (decrementato)

console.log("\nConteggio alla rovescia:");
let countdown = 5;
console.log("let countdown = 5;");
while (countdown > 0) {
  console.log("  countdown-- =", countdown--);
}
console.log("countdown finale =", countdown); // 0

// 5. Decremento prefisso (--x)
console.log("\n5. DECREMENTO PREFISSO (--x):\n");

console.log("Decrementa PRIMA, poi restituisce:");
let g = 10;
console.log("let g = 10;");
console.log("let h = --g;");
let h = --g;
console.log("h =", h); // 9 (valore dopo)
console.log("g =", g); // 9

console.log("\nConteggio alla rovescia:");
let timer = 5;
console.log("let timer = 5;");
while (timer > 0) {
  console.log("  --timer =", --timer);
}
console.log("timer finale =", timer); // 0

// 6. In espressioni complesse
console.log("\n6. In ESPRESSIONI COMPLESSE:\n");

console.log("Postfisso in operazioni:");
let n1 = 5;
let risultato1 = n1++ * 2;
console.log("n1 = 5;");
console.log("n1++ * 2 =", risultato1); // 10 (5 * 2, poi n1 diventa 6)
console.log("n1 dopo =", n1); // 6

console.log("\nPrefisso in operazioni:");
let n2 = 5;
let risultato2 = ++n2 * 2;
console.log("n2 = 5;");
console.log("++n2 * 2 =", risultato2); // 12 (n2 diventa 6, poi 6 * 2)
console.log("n2 dopo =", n2); // 6

console.log("\nMix incremento e decremento:");
let m = 10;
console.log("m = 10;");
console.log("m++ + ++m =", m++ + ++m); // 10 + 12 = 22
console.log("m finale =", m); // 12
console.log("⚠️  Codice confuso! Da evitare!");

// 7. Casi d'uso comuni
console.log("\n7. CASI D'USO comuni:\n");

// Loop for
console.log("Loop for (più comune con postfisso):");
for (let i = 0; i < 5; i++) {
  console.log(`  Iterazione ${i}`);
}

console.log("\nArray access:");
let arr = [10, 20, 30, 40, 50];
let index = 0;
console.log("Accesso sequenziale:");
console.log(`  arr[index++] = ${arr[index++]}`); // arr[0], poi index = 1
console.log(`  arr[index++] = ${arr[index++]}`); // arr[1], poi index = 2
console.log(`  arr[index++] = ${arr[index++]}`); // arr[2], poi index = 3
console.log(`  index finale = ${index}`); // 3

// Contatori
console.log("\nContatore eventi:");
let clicks = 0;
function handleClick() {
  console.log(`  Click ${++clicks}`); // Incrementa e mostra
}
handleClick();
handleClick();
handleClick();

// 8. Con decimali e stringhe
console.log("\n8. Con DECIMALI e STRINGHE:\n");

console.log("Con decimali:");
let decimal = 5.5;
console.log("decimal = 5.5;");
console.log("decimal++ =", decimal++); // 5.5
console.log("decimal =", decimal); // 6.5
console.log("++decimal =", ++decimal); // 7.5

console.log("\nCon stringhe numeriche:");
let strNum = "10";
console.log('strNum = "10";');
console.log("strNum++ =", strNum++); // 10 (converte a numero)
console.log("strNum =", strNum); // 11 (ora è numero!)
console.log("typeof strNum =", typeof strNum); // "number"

console.log("\nCon stringhe non numeriche:");
let str = "hello";
console.log('str = "hello";');
console.log("str++ =", str++); // NaN
console.log("str =", str); // NaN
console.log("typeof str =", typeof str); // "number"

// 9. Casi particolari
console.log("\n9. CASI PARTICOLARI:\n");

console.log("Con boolean:");
let bool = true;
console.log("bool = true;");
console.log("bool++ =", bool++); // 1
console.log("bool =", bool); // 2

console.log("\nCon null:");
let nullVar = null;
console.log("nullVar = null;");
console.log("nullVar++ =", nullVar++); // 0
console.log("nullVar =", nullVar); // 1

console.log("\nCon undefined:");
let undef = undefined;
console.log("undef = undefined;");
console.log("undef++ =", undef++); // NaN
console.log("undef =", undef); // NaN

console.log("\n⚠️  Conversione automatica può causare bug!");

// 10. Errori comuni e best practices
console.log("\n10. ERRORI COMUNI e BEST PRACTICES:\n");

console.log("❌ DA EVITARE:");
console.log(`
// Troppo complesso
let x = 5;
let y = x++ + ++x + x--;  // 5 + 7 + 7 = 19, ma CONFUSO!

// Modificare stessa variabile più volte
let z = i++ + ++i;  // Comportamento indefinito in altri linguaggi

// In condizioni complesse
if (count++ > 10 && count-- < 5) { ... }  // Difficile da seguire
`);

console.log("✓ BEST PRACTICES:");
console.log(`
// Usa postfisso nei loop (convenzione)
for (let i = 0; i < 10; i++) { ... }

// Separa incremento da espressioni complesse
let value = array[index];
index++;

// Usa prefisso solo quando serve il valore incrementato
console.log(++counter);  // Mostra valore nuovo

// Preferisci += 1 se più chiaro
count += 1;  // Equivalente a count++, più esplicito
`);

console.log("\n💡 Quando usare quale:");
console.log(`
POSTFISSO (x++):
  - Loop for: for (i = 0; i < 10; i++)
  - Quando vuoi valore originale: arr[i++]
  - Contatori generici: count++
  - DEFAULT più comune

PREFISSO (++x):
  - Quando serve valore nuovo: print(++counter)
  - Performance (teorica): ++i leggermente più veloce
  - In espressioni dove serve valore incrementato

ALTERNATIVA (+= 1):
  - Quando chiarezza > concisione
  - In codice condiviso con principianti
  - count += 1 è sempre chiaro
`);

console.log("\n✓ Esempi puliti:");
console.log(`
// Loop standard
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Contatore semplice
let total = 0;
total++;  // O total += 1

// Preincremento per logging
console.log("Tentativo #" + (++attempts));

// Indice array
const item = items[index];
index++;  // Separato per chiarezza
`);

console.log("\n✅ Incremento/decremento: utili ma usa con moderazione!");
