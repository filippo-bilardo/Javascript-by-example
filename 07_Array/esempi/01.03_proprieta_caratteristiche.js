/**
 * PROPRIETÀ E CARATTERISTICHE DEGLI ARRAY
 * 
 * Lunghezza, array sparsi, multidimensionali, mutabilità.
 * Differenze tra array e oggetti.
 */

console.log("=== 1. PROPRIETÀ LENGTH ===\n");

const frutta = ["mela", "banana", "arancia"];
console.log("Array:", frutta);
console.log("length:", frutta.length);

// length è il numero di elementi
const numeri = [10, 20, 30, 40, 50];
console.log("\nNumeri:", numeri);
console.log("Numero elementi:", numeri.length);

// length con array vuoto
const vuoto = [];
console.log("\nArray vuoto:", vuoto);
console.log("length:", vuoto.length);


console.log("\n=== 2. MODIFICA LENGTH ===\n");

const colori = ["rosso", "verde", "blu", "giallo", "viola"];
console.log("Array originale:", colori);
console.log("length:", colori.length);

// Ridurre length tronca l'array
colori.length = 3;
console.log("\nDopo colori.length = 3:");
console.log("Array:", colori);

// Aumentare length aggiunge buchi
colori.length = 6;
console.log("\nDopo colori.length = 6:");
console.log("Array:", colori);
console.log("length:", colori.length);

// Svuotare array
const temp = [1, 2, 3, 4, 5];
console.log("\nPrima:", temp);
temp.length = 0;
console.log("Dopo temp.length = 0:", temp);


console.log("\n=== 3. ARRAY SPARSI ===\n");

// Array con "buchi" (elementi undefined)
const sparso1 = [1, , , 4, 5];
console.log("Array sparso:", sparso1);
console.log("length:", sparso1.length);

console.log("\nIterazione:");
sparso1.forEach((elem, i) => {
  console.log(`  [${i}]:`, elem);
});
// Nota: forEach salta i buchi!

console.log("\nAccesso diretto:");
console.log("  sparso1[0]:", sparso1[0]);
console.log("  sparso1[1]:", sparso1[1]);  // undefined
console.log("  sparso1[2]:", sparso1[2]);  // undefined

// Creare array sparso
const sparso2 = new Array(5);
console.log("\nnew Array(5):", sparso2);
sparso2[0] = "primo";
sparso2[4] = "ultimo";
console.log("Dopo assegnazioni:", sparso2);

// delete crea buchi
const denso = [1, 2, 3, 4, 5];
delete denso[2];
console.log("\nDopo delete denso[2]:", denso);
console.log("length:", denso.length);  // Rimane 5!


console.log("\n=== 4. ARRAY VS OGGETTI ===\n");

// Array: indici numerici, metodi speciali
const arrVsObj = ["mela", "banana", "arancia"];
console.log("Array:", arrVsObj);
console.log("typeof:", typeof arrVsObj);  // "object"!
console.log("Array.isArray():", Array.isArray(arrVsObj));

// Oggetto: chiavi string
const obj = {
  0: "mela",
  1: "banana",
  2: "arancia",
  length: 3
};
console.log("\nOggetto:", obj);
console.log("typeof:", typeof obj);
console.log("Array.isArray():", Array.isArray(obj));

// Accesso simile ma comportamento diverso
console.log("\nAccesso:");
console.log("  arr[0]:", arrVsObj[0]);
console.log("  obj[0]:", obj[0]);

// Array ha metodi speciali
console.log("\nMetodi:");
console.log("  arr.push:", typeof arrVsObj.push);    // function
console.log("  obj.push:", typeof obj.push);    // undefined

// length comportamento diverso
arrVsObj.push("kiwi");
console.log("\nDopo arr.push('kiwi'):");
console.log("  arr.length:", arrVsObj.length);  // Auto-aggiornato!

obj[3] = "kiwi";
console.log("\nDopo obj[3] = 'kiwi':");
console.log("  obj.length:", obj.length);  // Rimane 3


console.log("\n=== 5. ARRAY MULTIDIMENSIONALI ===\n");

// Matrice 2D (array di array)
const matrice = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("Matrice 3x3:");
console.log(matrice);

console.log("\nAccesso elementi:");
console.log("  matrice[0][0]:", matrice[0][0]);  // 1
console.log("  matrice[1][1]:", matrice[1][1]);  // 5
console.log("  matrice[2][2]:", matrice[2][2]);  // 9

console.log("\nRighe:");
console.log("  Riga 0:", matrice[0]);
console.log("  Riga 1:", matrice[1]);

console.log("\nDimensioni:");
console.log("  Righe:", matrice.length);
console.log("  Colonne:", matrice[0].length);

// Iterazione 2D
console.log("\nIterazione:");
for (let i = 0; i < matrice.length; i++) {
  for (let j = 0; j < matrice[i].length; j++) {
    console.log(`  [${i}][${j}] = ${matrice[i][j]}`);
  }
}


console.log("\n=== 6. ARRAY 3D ===\n");

// Cubo 3D
const cubo = [
  [
    [1, 2],
    [3, 4]
  ],
  [
    [5, 6],
    [7, 8]
  ]
];

console.log("Cubo 3D:", cubo);
console.log("\nAccesso:");
console.log("  cubo[0][0][0]:", cubo[0][0][0]);  // 1
console.log("  cubo[1][1][1]:", cubo[1][1][1]);  // 8

// Struttura dati complessa
const studenti = [
  {
    nome: "Mario",
    voti: [8, 7, 9, 8]
  },
  {
    nome: "Luigi",
    voti: [7, 8, 7, 9]
  }
];

console.log("\nArray di oggetti con array nested:");
console.log("Primo studente:", studenti[0].nome);
console.log("Primi voti:", studenti[0].voti);
console.log("Primo voto del primo studente:", studenti[0].voti[0]);


console.log("\n=== 7. MUTABILITÀ ARRAY ===\n");

// Array sono mutabili (modificabili)
const originale = [1, 2, 3];
console.log("Originale:", originale);

// Modifica diretta
originale[1] = 999;
console.log("Dopo originale[1] = 999:", originale);

// Metodi mutanti
originale.push(4);
console.log("Dopo push(4):", originale);

originale.pop();
console.log("Dopo pop():", originale);

// const impedisce riassegnazione, non modifica
// originale = [7, 8, 9];  // ❌ Error!
console.log("\nconst impedisce riassegnazione, non modifica");

// Metodi non-mutanti (creano nuovo array)
const originale2 = [1, 2, 3];
const mappato = originale2.map(x => x * 2);
console.log("\nOriginale2:", originale2);  // Immutato
console.log("Mappato:", mappato);

const filtrato = originale2.filter(x => x > 1);
console.log("Filtrato:", filtrato);
console.log("Originale2 ancora:", originale2);  // Immutato


console.log("\n=== 8. RIFERIMENTI ARRAY ===\n");

// Array sono passati per riferimento
const arr1 = [1, 2, 3];
const arr2 = arr1;  // RIFERIMENTO, non copia!

console.log("arr1:", arr1);
console.log("arr2:", arr2);

arr2[0] = 999;
console.log("\nDopo arr2[0] = 999:");
console.log("arr1:", arr1);  // Modificato anche arr1!
console.log("arr2:", arr2);

console.log("\narr1 === arr2:", arr1 === arr2);  // true

// Creare copia indipendente
const arr3 = [1, 2, 3];
const arr4 = [...arr3];  // Spread crea COPIA

arr4[0] = 999;
console.log("\nDopo copia con spread:");
console.log("arr3:", arr3);  // Immutato
console.log("arr4:", arr4);

console.log("\narr3 === arr4:", arr3 === arr4);  // false


console.log("\n=== 9. CONFRONTO ARRAY ===\n");

const a1 = [1, 2, 3];
const a2 = [1, 2, 3];
const a3 = a1;

// Array NON sono uguali anche con stesso contenuto
console.log("a1 === a2:", a1 === a2);  // false (riferimenti diversi)
console.log("a1 === a3:", a1 === a3);  // true (stesso riferimento)

// Confrontare contenuto
function arraysUguali(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  
  return true;
}

console.log("\narraysUguali(a1, a2):", arraysUguali(a1, a2));

// Modo moderno con every
function arraysUguali2(arr1, arr2) {
  return arr1.length === arr2.length &&
         arr1.every((val, i) => val === arr2[i]);
}

console.log("arraysUguali2(a1, a2):", arraysUguali2(a1, a2));

// JSON.stringify (non sempre affidabile)
console.log("\nJSON.stringify:");
console.log("  a1:", JSON.stringify(a1));
console.log("  a2:", JSON.stringify(a2));
console.log("  Uguali:", JSON.stringify(a1) === JSON.stringify(a2));


console.log("\n=== 10. PROPRIETÀ SPECIALI ===\n");

const arrSpecial = ["a", "b", "c"];

// Aggiungere proprietà custom
arrSpecial.nome = "Il mio array";
arrSpecial.versione = 1;

console.log("Array:", arrSpecial);
console.log("length:", arrSpecial.length);  // 3 (proprietà custom non contano)
console.log("nome:", arrSpecial.nome);
console.log("versione:", arrSpecial.versione);

// Iterazione con for...in (include proprietà custom)
console.log("\nfor...in (include custom):");
for (const key in arrSpecial) {
  console.log(`  ${key}: ${arrSpecial[key]}`);
}

// Iterazione con for...of (solo elementi)
console.log("\nfor...of (solo elementi):");
for (const elem of arrSpecial) {
  console.log("  ", elem);
}

// Object.keys include indici + proprietà custom
console.log("\nObject.keys:", Object.keys(arrSpecial));

// Array.isArray non cambia
console.log("\nArray.isArray:", Array.isArray(arrSpecial));

// ⚠️ Non raccomandato aggiungere proprietà custom!
console.log("\n⚠️ Meglio evitare proprietà custom su array");


console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO PROPRIETÀ ARRAY");
console.log("=".repeat(50));
console.log(`
LENGTH:
• arr.length - numero elementi
• Modificabile (tronca o estende array)
• arr.length = 0 svuota array
• Auto-aggiornata con push/pop

ARRAY SPARSI:
• [1, , 3] - buchi con virgole
• new Array(n) - array vuoto lunghezza n
• delete arr[i] - crea buco
• forEach/map saltano buchi
• ⚠️ Evitare quando possibile

ARRAY VS OGGETTI:
• typeof arr === "object" per entrambi
• Array.isArray(arr) distingue array
• Array ha metodi speciali (push, pop, etc.)
• Array ha length auto-aggiornata
• Array per collezioni ordinate

MULTIDIMENSIONALI:
• [[1,2], [3,4]] - 2D (matrice)
• [[[1,2]], [[3,4]]] - 3D (cubo)
• Accesso: arr[i][j] o arr[i][j][k]
• Uso: matrici, tabelle, grafi

MUTABILITÀ:
• Array sono mutabili
• Metodi mutanti: push, pop, shift, unshift, splice, sort, reverse
• Metodi immutanti: map, filter, slice, concat
• const impedisce riassegnazione, non modifica

RIFERIMENTI:
• arr2 = arr1 - riferimento
• arr2 = [...arr1] - copia shallow
• Modifiche a riferimento impattano originale
• === confronta riferimenti, non contenuto

CONFRONTO:
• arr1 === arr2 - solo se stesso oggetto
• Confrontare contenuto: loop o every()
• JSON.stringify non sempre affidabile

BEST PRACTICES:
✓ Usa Array.isArray() per verificare tipo
✓ Evita array sparsi
✓ Copia array con spread [...arr]
✓ Non aggiungere proprietà custom
✓ Usa metodi immutanti quando possibile
`);
