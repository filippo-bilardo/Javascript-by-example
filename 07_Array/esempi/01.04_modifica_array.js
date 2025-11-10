/**
 * MODIFICA DEGLI ARRAY
 * 
 * Aggiunta, rimozione, sostituzione elementi.
 * Metodi mutanti vs immutanti.
 */

console.log("=== 1. AGGIUNTA ELEMENTI - PUSH ===\n");

const frutta = ["mela", "banana"];
console.log("Array iniziale:", frutta);

// push() aggiunge alla fine
const nuovaLunghezza = frutta.push("arancia");
console.log("\nDopo push('arancia'):", frutta);
console.log("Nuova lunghezza:", nuovaLunghezza);

// push multipli
frutta.push("kiwi", "uva", "pera");
console.log("\nDopo push multipli:", frutta);

// push restituisce la nuova lunghezza
const len = frutta.push("mango");
console.log("push restituisce:", len);


console.log("\n=== 2. AGGIUNTA ELEMENTI - UNSHIFT ===\n");

const numeri = [3, 4, 5];
console.log("Array iniziale:", numeri);

// unshift() aggiunge all'inizio
numeri.unshift(2);
console.log("\nDopo unshift(2):", numeri);

// unshift multipli (ordine preservato)
numeri.unshift(0, 1);
console.log("Dopo unshift(0, 1):", numeri);


console.log("\n=== 3. RIMOZIONE ELEMENTI - POP ===\n");

const colori = ["rosso", "verde", "blu", "giallo"];
console.log("Array iniziale:", colori);

// pop() rimuove dall'ultimo
const rimosso = colori.pop();
console.log("\nDopo pop():", colori);
console.log("Elemento rimosso:", rimosso);

// Rimozioni multiple
const rimosso2 = colori.pop();
const rimosso3 = colori.pop();
console.log("\nDopo 2 pop():", colori);
console.log("Rimossi:", rimosso2, rimosso3);

// pop su array vuoto
const vuoto = [];
const risultato = vuoto.pop();
console.log("\npop() su array vuoto:", risultato);  // undefined


console.log("\n=== 4. RIMOZIONE ELEMENTI - SHIFT ===\n");

const lettere = ["a", "b", "c", "d"];
console.log("Array iniziale:", lettere);

// shift() rimuove dal primo
const primo = lettere.shift();
console.log("\nDopo shift():", lettere);
console.log("Elemento rimosso:", primo);

// Shift multipli
lettere.shift();
lettere.shift();
console.log("Dopo 2 shift():", lettere);


console.log("\n=== 5. SPLICE - RIMOZIONE ===\n");

const animali = ["cane", "gatto", "coniglio", "pesce", "uccello"];
console.log("Array iniziale:", animali);

// splice(start, deleteCount) - rimuove elementi
const rimossi1 = animali.splice(2, 1);  // Rimuove 1 elemento da indice 2
console.log("\nDopo splice(2, 1):", animali);
console.log("Rimossi:", rimossi1);

// Rimuovere multipli
const rimossi2 = animali.splice(1, 2);  // Rimuove 2 elementi da indice 1
console.log("\nDopo splice(1, 2):", animali);
console.log("Rimossi:", rimossi2);

// Rimuovere fino alla fine
const resto = ["a", "b", "c", "d", "e"];
const rimossi3 = resto.splice(2);  // Rimuove da indice 2 alla fine
console.log("\nsplice(2) su ['a','b','c','d','e']:", resto);
console.log("Rimossi:", rimossi3);


console.log("\n=== 6. SPLICE - AGGIUNTA/SOSTITUZIONE ===\n");

const nums = [1, 2, 5, 6];
console.log("Array iniziale:", nums);

// splice(start, 0, items...) - inserisce senza rimuovere
nums.splice(2, 0, 3, 4);  // Inserisce 3,4 alla posizione 2
console.log("\nDopo splice(2, 0, 3, 4):", nums);

// splice con sostituzione
const letters = ["a", "b", "c", "d"];
letters.splice(1, 2, "X", "Y", "Z");  // Rimuove 2, inserisce 3
console.log("\nsplice(1, 2, 'X','Y','Z') su ['a','b','c','d']:", letters);

// Sostituzione singola
const temp = [10, 20, 30, 40];
temp.splice(2, 1, 999);  // Sostituisce elemento indice 2
console.log("\nsplice(2, 1, 999) su [10,20,30,40]:", temp);


console.log("\n=== 7. DELETE OPERATOR ===\n");

const arr = [1, 2, 3, 4, 5];
console.log("Array iniziale:", arr);

// delete crea "buco" (sconsigliato!)
delete arr[2];
console.log("\nDopo delete arr[2]:", arr);
console.log("length:", arr.length);  // Rimane 5!
console.log("arr[2]:", arr[2]);  // undefined

// ⚠️ Meglio usare splice
const arr2Better = [1, 2, 3, 4, 5];
arr2Better.splice(2, 1);
console.log("\nCon splice(2, 1):", arr2Better);
console.log("length:", arr2Better.length);  // 4


console.log("\n=== 8. SOSTITUZIONE DIRETTA ===\n");

const prodotti = ["laptop", "mouse", "tastiera"];
console.log("Array iniziale:", prodotti);

// Sostituzione con assegnazione
prodotti[1] = "trackpad";
console.log("\nDopo prodotti[1] = 'trackpad':", prodotti);

// Sostituzione ultimo
prodotti[prodotti.length - 1] = "monitor";
console.log("Dopo modifica ultimo:", prodotti);

// Aggiunta oltre il limite (crea buchi!)
prodotti[5] = "cuffie";
console.log("\nDopo prodotti[5] = 'cuffie':", prodotti);


console.log("\n=== 9. METODI IMMUTANTI ===\n");

// Metodi che NON modificano array originale
const originale = [1, 2, 3, 4, 5];

// slice() - copia porzione
const porzione = originale.slice(1, 4);
console.log("Originale:", originale);
console.log("slice(1, 4):", porzione);

// concat() - unisce array
const arr1 = [1, 2];
const arr2 = [3, 4];
const unito = arr1.concat(arr2);
console.log("\narr1:", arr1);
console.log("arr2:", arr2);
console.log("concat:", unito);

// spread operator
const arr3 = [1, 2];
const arr4 = [3, 4];
const arr5 = [...arr3, ...arr4];
console.log("\nSpread [...arr3, ...arr4]:", arr5);

// map() - trasforma elementi
const numeriOriginali = [1, 2, 3];
const doppi = numeriOriginali.map(x => x * 2);
console.log("\nOriginali:", numeriOriginali);
console.log("map(x => x * 2):", doppi);

// filter() - filtra elementi
const tuttiNumeri = [1, 2, 3, 4, 5];
const pari = tuttiNumeri.filter(x => x % 2 === 0);
console.log("\nTutti:", tuttiNumeri);
console.log("filter(pari):", pari);


console.log("\n=== 10. CONFRONTO MUTANTI VS IMMUTANTI ===\n");

console.log("METODI MUTANTI (modificano originale):");

const mutante = [1, 2, 3];
console.log("  Prima:", mutante);
mutante.push(4);
console.log("  Dopo push:", mutante);
mutante.pop();
console.log("  Dopo pop:", mutante);
mutante.splice(1, 1);
console.log("  Dopo splice:", mutante);

console.log("\nMETODI IMMUTANTI (nuovo array):");

const immutante = [1, 2, 3];
console.log("  Originale:", immutante);

const nuovo1 = immutante.concat([4]);
console.log("  concat([4]):", nuovo1);
console.log("  Originale:", immutante);  // Immutato

const nuovo2 = immutante.map(x => x * 2);
console.log("  map(x => x*2):", nuovo2);
console.log("  Originale:", immutante);  // Immutato

const nuovo3 = immutante.slice(1);
console.log("  slice(1):", nuovo3);
console.log("  Originale:", immutante);  // Immutato


console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO MODIFICA ARRAY");
console.log("=".repeat(50));
console.log(`
AGGIUNTA ELEMENTI:
• push(elem) - aggiunge alla fine
• unshift(elem) - aggiunge all'inizio
• splice(pos, 0, elem) - inserisce a posizione
• arr[i] = elem - assegnazione diretta

RIMOZIONE ELEMENTI:
• pop() - rimuove dall'ultimo
• shift() - rimuove dal primo
• splice(pos, n) - rimuove n elementi da pos
• delete arr[i] - ⚠️ crea buco (evitare!)

SOSTITUZIONE:
• arr[i] = newVal - sostituisce elemento
• splice(pos, 1, newVal) - sostituisce con splice

METODI MUTANTI:
✗ Modificano array originale
  push, pop, shift, unshift
  splice, sort, reverse
  fill, copyWithin

METODI IMMUTANTI:
✓ Creano nuovo array
  slice, concat
  map, filter, reduce
  [...arr] (spread)
  Array.from()

SPLICE - IL PIÙ VERSATILE:
• splice(start, deleteCount, ...items)
• Rimuove: splice(2, 3)
• Inserisce: splice(2, 0, 'a', 'b')
• Sostituisce: splice(2, 1, 'nuovo')

VALORI RESTITUITI:
• push/unshift → nuova lunghezza
• pop/shift → elemento rimosso
• splice → array elementi rimossi
• Immutanti → nuovo array

BEST PRACTICES:
✓ push/pop per stack (fine array)
✓ unshift/shift per queue (inizio array)
✓ splice per operazioni complesse
✓ Preferisci immutanti quando possibile
✗ Evita delete (usa splice)
✗ Attento a buchi nell'array
`);
