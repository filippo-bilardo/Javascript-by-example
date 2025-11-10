/**
 * OGGETTI E RIFERIMENTI
 * 
 * Passaggio per riferimento, clonazione e immutabilità
 */

console.log("=== 1. RIFERIMENTI BASE ===\n");

// Gli oggetti sono passati per riferimento
const obj1 = { nome: "Mario", età: 30 };
const obj2 = obj1; // obj2 è un riferimento, non una copia!

console.log("obj1:", obj1);
console.log("obj2:", obj2);

// Modificare obj2 modifica anche obj1
obj2.nome = "Luigi";
obj2.età = 25;

console.log("\nDopo modifica obj2:");
console.log("obj1:", obj1); // cambiato!
console.log("obj2:", obj2);

// Stesso riferimento
console.log("\nobj1 === obj2:", obj1 === obj2); // true


console.log("\n=== 2. DIFFERENZA PRIMITIVI VS OGGETTI ===\n");

// Primitivi: passaggio per valore
let a = 10;
let b = a; // copia del valore
b = 20;

console.log("Primitivi:");
console.log("a:", a); // 10 (non cambiato)
console.log("b:", b); // 20

// Oggetti: passaggio per riferimento
let x = { valore: 10 };
let y = x; // riferimento
y.valore = 20;

console.log("\nOggetti:");
console.log("x:", x); // { valore: 20 } (cambiato!)
console.log("y:", y); // { valore: 20 }


console.log("\n=== 3. SHALLOW COPY (COPIA SUPERFICIALE) ===\n");

const originale = {
  nome: "Mario",
  età: 30,
  hobby: ["calcio", "lettura"]
};

// Metodo 1: Spread operator (ES6)
const copia1 = { ...originale };
copia1.nome = "Luigi";
copia1.hobby.push("musica"); // ATTENZIONE: array è ancora riferimento!

console.log("Originale:", originale);
console.log("Copia1:", copia1);
console.log("\nNote: hobby modificato in entrambi! (shallow copy)");

// Metodo 2: Object.assign()
const copia2 = Object.assign({}, originale);
console.log("\nCopia2:", copia2);

// Metodo 3: Object.create() + assign
const copia3 = Object.create(
  Object.getPrototypeOf(originale),
  Object.getOwnPropertyDescriptors(originale)
);
console.log("Copia3:", copia3);


console.log("\n=== 4. DEEP COPY (COPIA PROFONDA) ===\n");

const original = {
  nome: "Mario",
  età: 30,
  indirizzo: {
    città: "Milano",
    cap: "20100"
  },
  hobby: ["calcio", "lettura"]
};

// Metodo 1: JSON parse/stringify (limitazioni: perde funzioni, Date, undefined)
const deepCopy1 = JSON.parse(JSON.stringify(original));
deepCopy1.indirizzo.città = "Roma";
deepCopy1.hobby.push("cinema");

console.log("Originale indirizzo:", original.indirizzo);
console.log("Deep copy indirizzo:", deepCopy1.indirizzo);
console.log("\nOriginale hobby:", original.hobby);
console.log("Deep copy hobby:", deepCopy1.hobby);

// Metodo 2: structuredClone() (moderno, ES2022)
if (typeof structuredClone === 'function') {
  const deepCopy2 = structuredClone(original);
  deepCopy2.nome = "Anna";
  console.log("\nstructuredClone disponibile:", deepCopy2.nome);
} else {
  console.log("\nstructuredClone non disponibile in questo ambiente");
}


console.log("\n=== 5. CUSTOM DEEP CLONE ===\n");

function deepClone(obj) {
  // Gestire tipi primitivi e null
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  // Gestire Date
  if (obj instanceof Date) {
    return new Date(obj);
  }
  
  // Gestire Array
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  
  // Gestire Object
  const cloned = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  
  return cloned;
}

const nested = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  },
  f: [1, 2, { g: 4 }]
};

const cloned = deepClone(nested);
cloned.b.d.e = 999;
cloned.f[2].g = 888;

console.log("Nested originale:", nested.b.d.e); // 3
console.log("Cloned modificato:", cloned.b.d.e); // 999
console.log("Nested array:", nested.f[2].g); // 4
console.log("Cloned array:", cloned.f[2].g); // 888


console.log("\n=== 6. CONFRONTO OGGETTI ===\n");

const persona1 = { nome: "Mario", età: 30 };
const persona2 = { nome: "Mario", età: 30 };
const persona3 = persona1;

// Confronto per riferimento
console.log("persona1 === persona2:", persona1 === persona2); // false (riferimenti diversi)
console.log("persona1 === persona3:", persona1 === persona3); // true (stesso riferimento)

// Confronto per valore (manuale)
function isEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) {
    return false;
  }
  
  return keys1.every(key => obj1[key] === obj2[key]);
}

console.log("\nisEqual(persona1, persona2):", isEqual(persona1, persona2)); // true
console.log("isEqual(persona1, {nome: 'Luigi'}):", isEqual(persona1, { nome: "Luigi" })); // false


console.log("\n=== 7. PASSAGGIO A FUNZIONI ===\n");

// Gli oggetti passati a funzioni sono per riferimento
function modificaOggetto(obj) {
  obj.modificato = true;
  obj.valore = 999;
}

const test = { valore: 10 };
console.log("Prima:", test);

modificaOggetto(test);
console.log("Dopo:", test); // modificato!

// Per evitare modifiche: passare copia
function modificaSenzaEffetti(obj) {
  const copia = { ...obj };
  copia.modificato = true;
  return copia;
}

const test2 = { valore: 20 };
const risultato = modificaSenzaEffetti(test2);

console.log("\nOriginale test2:", test2); // non modificato
console.log("Risultato:", risultato); // modificato


console.log("\n=== 8. OBJECT.FREEZE() - IMMUTABILITÀ ===\n");

const immutabile = Object.freeze({
  nome: "Mario",
  età: 30
});

// Tentativo di modifica (silenzioso in non-strict mode)
immutabile.nome = "Luigi";
immutabile.nuovaProp = "valore";
delete immutabile.età;

console.log("Oggetto congelato:", immutabile); // non modificato

// Verifica se congelato
console.log("È congelato:", Object.isFrozen(immutabile)); // true

// ATTENZIONE: shallow freeze!
const partial = Object.freeze({
  dati: {
    valore: 10
  }
});

partial.dati.valore = 999; // MODIFICABILE! (oggetto nested)
console.log("\nPartial freeze:", partial); // nested modificato!


console.log("\n=== 9. DEEP FREEZE ===\n");

function deepFreeze(obj) {
  // Congelare oggetto
  Object.freeze(obj);
  
  // Congelare ricorsivamente proprietà oggetto
  Object.getOwnPropertyNames(obj).forEach(prop => {
    if (obj[prop] !== null
      && (typeof obj[prop] === 'object' || typeof obj[prop] === 'function')
      && !Object.isFrozen(obj[prop])) {
      deepFreeze(obj[prop]);
    }
  });
  
  return obj;
}

const totalmenteImmutabile = deepFreeze({
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
});

totalmenteImmutabile.a = 999; // non funziona
totalmenteImmutabile.b.d.e = 888; // non funziona (deep freeze!)

console.log("Deep frozen:", totalmenteImmutabile);


console.log("\n=== 10. OBJECT.SEAL() E OBJECT.PREVENTEXTENSIONS() ===\n");

// Object.seal() - permette modifica, vieta add/delete
const sigillato = Object.seal({
  nome: "Mario",
  età: 30
});

sigillato.nome = "Luigi"; // OK
sigillato.nuova = "test"; // NON funziona
delete sigillato.età; // NON funziona

console.log("Sigillato:", sigillato);
console.log("È sigillato:", Object.isSealed(sigillato));

// Object.preventExtensions() - permette modifica/delete, vieta add
const nonEstendibile = Object.preventExtensions({
  nome: "Anna",
  età: 25
});

nonEstendibile.nome = "Maria"; // OK
delete nonEstendibile.età; // OK
nonEstendibile.nuova = "test"; // NON funziona

console.log("\nNon estendibile:", nonEstendibile);
console.log("È estendibile:", Object.isExtensible(nonEstendibile)); // false


console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO RIFERIMENTI E COPIA");
console.log("=".repeat(50));
console.log(`
CONCETTI CHIAVE:

RIFERIMENTI:
• Oggetti passati per riferimento, non valore
• Assegnamento crea riferimento, non copia
• Modifiche si riflettono su tutti i riferimenti
• obj1 === obj2 confronta riferimenti

PRIMITIVI VS OGGETTI:
• Primitivi: passaggio per valore (copia)
• Oggetti: passaggio per riferimento
• Primitivi immutabili, oggetti mutabili

TIPI DI COPIA:

1. SHALLOW COPY (superficiale):
   • {...obj} - spread operator
   • Object.assign({}, obj)
   • Copia solo primo livello
   • Nested objects ancora riferimenti
   • Veloce e semplice
   
2. DEEP COPY (profonda):
   • JSON.parse(JSON.stringify(obj))
     - Limitazioni: perde funzioni, Date, undefined, Symbol
   • structuredClone(obj) - ES2022, completo
   • Custom recursive clone
   • Copia tutti i livelli
   • Più lento

CONFRONTO:
• === confronta riferimenti, non contenuto
• Per valore: confronto manuale o librerie
• JSON.stringify() per confronto semplice

IMMUTABILITÀ:

1. OBJECT.FREEZE():
   • Impedisce modifiche
   • Shallow (solo primo livello)
   • Silenzioso in non-strict mode
   • Object.isFrozen() per verificare
   
2. OBJECT.SEAL():
   • Permette modifica proprietà esistenti
   • Vieta add/delete proprietà
   • Object.isSealed() per verificare
   
3. OBJECT.PREVENTEXTENSIONS():
   • Permette modifica e delete
   • Vieta solo add nuove proprietà
   • Object.isExtensible() per verificare

PATTERN:
✓ Shallow copy: operazioni veloci, dati semplici
✓ Deep copy: nested structures, dati complessi
✓ Freeze: configurazioni, costanti
✓ Seal: oggetti con schema fisso
✓ PreventExtensions: oggetti parzialmente mutabili

BEST PRACTICES:
✓ Usa spread {...} per shallow copy semplici
✓ structuredClone() per deep copy (se disponibile)
✓ JSON per serializzabili (API, storage)
✓ Freeze per oggetti config immutabili
✓ Copia prima di modificare in funzioni
✗ Non fare affidamento su === per contenuto
✗ Attento a shallow copy con nested objects
✗ Freeze è shallow! Usa deepFreeze se necessario

ERRORI COMUNI:
✗ obj2 = obj1 (riferimento, non copia!)
✗ Shallow copy di nested (puntano ancora)
✗ JSON.stringify perde funzioni/Date
✗ Freeze shallow su nested objects
✗ Confronto === per uguaglianza di contenuto

QUANDO USARE:
• Spread: copy veloci, merge
• structuredClone: deep copy moderne app
• JSON: API, localStorage, serializzazione
• Freeze: constants, config, immutabilità
• Custom clone: controllo completo, performance
`);
