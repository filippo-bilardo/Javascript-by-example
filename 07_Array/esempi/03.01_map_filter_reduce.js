/**
 * MAP, FILTER, REDUCE - METODI ITERAZIONE BASE
 * 
 * I tre metodi funzionali più importanti per trasformare e processare array
 */

console.log("=== 1. MAP - TRASFORMARE ELEMENTI ===\n");

// map crea nuovo array trasformando ogni elemento
const numeri = [1, 2, 3, 4, 5];
console.log("Originale:", numeri);

const doppi = numeri.map(n => n * 2);
console.log("Doppi:", doppi);

const quadrati = numeri.map(n => n ** 2);
console.log("Quadrati:", quadrati);

// Originale immutato
console.log("Originale immutato:", numeri);

// map con index
const conIndice = numeri.map((n, i) => `[${i}]: ${n}`);
console.log("\nCon indice:", conIndice);


console.log("\n=== 2. MAP CON OGGETTI ===\n");

const persone = [
  { nome: "Mario", cognome: "Rossi" },
  { nome: "Luigi", cognome: "Verdi" },
  { nome: "Anna", cognome: "Bianchi" }
];

// Estrarre proprietà
const nomi = persone.map(p => p.nome);
console.log("Solo nomi:", nomi);

// Creare nuovi oggetti
const nomiCompleti = persone.map(p => ({
  completo: `${p.nome} ${p.cognome}`
}));
console.log("\nNomi completi:");
nomiCompleti.forEach(p => console.log(`  ${p.completo}`));

// Aggiungere proprietà
const conId = persone.map((p, i) => ({
  id: i + 1,
  ...p
}));
console.log("\nCon ID:", conId);


console.log("\n=== 3. FILTER - FILTRARE ELEMENTI ===\n");

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Originale:", nums);

// Filtrare numeri pari
const pari = nums.filter(n => n % 2 === 0);
console.log("\nPari:", pari);

// Filtrare numeri dispari
const dispari = nums.filter(n => n % 2 !== 0);
console.log("Dispari:", dispari);

// Maggiori di 5
const maggiori = nums.filter(n => n > 5);
console.log("Maggiori di 5:", maggiori);

// Filter restituisce array vuoto se nessuno soddisfa
const nessunoMaggiore = nums.filter(n => n > 100);
console.log("\nNessuno > 100:", nessunoMaggiore);


console.log("\n=== 4. FILTER CON OGGETTI ===\n");

const studenti = [
  { nome: "Mario", voto: 8, presente: true },
  { nome: "Luigi", voto: 5, presente: false },
  { nome: "Anna", voto: 9, presente: true },
  { nome: "Carlo", voto: 6, presente: true }
];

console.log("Studenti totali:", studenti.length);

// Filtri singoli
const promossi = studenti.filter(s => s.voto >= 6);
console.log("\nPromossi:", promossi.map(s => s.nome));

const presenti = studenti.filter(s => s.presente);
console.log("Presenti:", presenti.map(s => s.nome));

// Filtri combinati
const promossiPresenti = studenti.filter(s => 
  s.voto >= 6 && s.presente
);
console.log("Promossi e presenti:", promossiPresenti.map(s => s.nome));


console.log("\n=== 5. REDUCE - RIDURRE AD UN VALORE ===\n");

const numbers = [1, 2, 3, 4, 5];
console.log("Array:", numbers);

// Somma
const somma = numbers.reduce((acc, n) => acc + n, 0);
console.log("\nSomma:", somma);

// Prodotto
const prodotto = numbers.reduce((acc, n) => acc * n, 1);
console.log("Prodotto:", prodotto);

// Massimo
const max = numbers.reduce((acc, n) => Math.max(acc, n));
console.log("Massimo:", max);

// Minimo
const min = numbers.reduce((acc, n) => Math.min(acc, n));
console.log("Minimo:", min);


console.log("\n=== 6. REDUCE CON OGGETTI ===\n");

const prodotti = [
  { nome: "Laptop", prezzo: 1000 },
  { nome: "Mouse", prezzo: 25 },
  { nome: "Tastiera", prezzo: 75 }
];

// Totale prezzi
const totale = prodotti.reduce((acc, p) => acc + p.prezzo, 0);
console.log("Totale carrello: €", totale);

// Conteggio occorrenze
const frutta = ["mela", "banana", "mela", "arancia", "banana", "mela"];
const conteggio = frutta.reduce((acc, f) => {
  acc[f] = (acc[f] || 0) + 1;
  return acc;
}, {});
console.log("\nConteggio frutta:", conteggio);

// Raggruppa per proprietà
const items = [
  { tipo: "A", valore: 10 },
  { tipo: "B", valore: 20 },
  { tipo: "A", valore: 30 }
];

const grouped = items.reduce((acc, item) => {
  if (!acc[item.tipo]) acc[item.tipo] = [];
  acc[item.tipo].push(item);
  return acc;
}, {});

console.log("\nRaggruppati:", grouped);


console.log("\n=== 7. MAP + FILTER + REDUCE ===\n");

const vals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Pipeline: filtra pari, raddoppia, somma
const risultato = vals
  .filter(n => n % 2 === 0)     // [2, 4, 6, 8, 10]
  .map(n => n * 2)              // [4, 8, 12, 16, 20]
  .reduce((acc, n) => acc + n, 0); // 60

console.log("Risultato pipeline:", risultato);

// Spiegazione step by step
console.log("\nStep by step:");
const step1 = vals.filter(n => n % 2 === 0);
console.log("  1. Filter pari:", step1);
const step2 = step1.map(n => n * 2);
console.log("  2. Map doppi:", step2);
const step3 = step2.reduce((acc, n) => acc + n, 0);
console.log("  3. Reduce somma:", step3);


console.log("\n=== 8. CASI D'USO PRATICI ===\n");

// Prezzi con IVA
const prezzi = [100, 200, 50, 75];
const conIva = prezzi.map(p => p * 1.22);
console.log("Prezzi base:", prezzi);
console.log("Con IVA 22%:", conIva);

// Filtra e trasforma
const utenti = [
  { nome: "Mario", età: 17, attivo: true },
  { nome: "Luigi", età: 25, attivo: true },
  { nome: "Anna", età: 30, attivo: false },
  { nome: "Carlo", età: 20, attivo: true }
];

const utentiAttivi = utenti
  .filter(u => u.attivo && u.età >= 18)
  .map(u => u.nome);

console.log("\nUtenti attivi maggiorenni:", utentiAttivi);

// Statistiche
const voti = [7, 8, 6, 9, 5, 8, 7, 6];
const stats = {
  media: voti.reduce((a, b) => a + b, 0) / voti.length,
  max: Math.max(...voti),
  min: Math.min(...voti),
  count: voti.length
};
console.log("\nStatistiche voti:", stats);


console.log("\n=== 9. PERFORMANCE E ALTERNATIVE ===\n");

const big = Array.from({length: 10000}, (_, i) => i);

// forEach (più veloce ma non restituisce)
console.time("forEach");
let sum1 = 0;
big.forEach(n => sum1 += n);
console.timeEnd("forEach");

// reduce (più leggibile)
console.time("reduce");
const sum2 = big.reduce((a, b) => a + b, 0);
console.timeEnd("reduce");

// for loop (più veloce)
console.time("for");
let sum3 = 0;
for (let i = 0; i < big.length; i++) {
  sum3 += big[i];
}
console.timeEnd("for");

console.log("\nTutti danno stesso risultato:", sum1 === sum2 && sum2 === sum3);


console.log("\n=== 10. PATTERN AVANZATI ===\n");

// Flatten con reduce
const nested = [[1, 2], [3, 4], [5, 6]];
const flattened = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log("Flatten:", flattened);

// Unique values
const duplicati = [1, 2, 2, 3, 3, 3, 4, 5, 5];
const unique = duplicati.filter((val, idx, arr) => arr.indexOf(val) === idx);
console.log("\nUnique:", unique);

// O con Set
const uniqueSet = [...new Set(duplicati)];
console.log("Con Set:", uniqueSet);

// Conditional map
const mixed = [1, 2, 3, 4, 5];
const conditional = mixed.map(n => 
  n % 2 === 0 ? n * 2 : n
);
console.log("\nConditional map:", conditional);


console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO MAP, FILTER, REDUCE");
console.log("=".repeat(50));
console.log(`
MAP:
• arr.map(fn) - trasforma ogni elemento
• Restituisce nuovo array stessa lunghezza
• Non modifica originale
• Usa: trasformazioni, estrazioni, formattazioni

FILTER:
• arr.filter(fn) - filtra elementi
• Restituisce nuovo array (può essere più corto)
• Non modifica originale
• Usa: selezione elementi per criterio

REDUCE:
• arr.reduce(fn, initial) - riduce a valore
• Restituisce singolo valore (qualsiasi tipo)
• Non modifica originale
• Usa: somme, statistiche, trasformazioni complesse

CONCATENAZIONE:
• Combinare: filter → map → reduce
• Ogni metodo restituisce nuovo array/valore
• Leggibile e dichiarativo
• Performance: considera forEach/for per grandi array

QUANDO USARE:
✓ map: trasformare tutti gli elementi
✓ filter: selezionare sottoinsieme
✓ reduce: calcolare valore unico
✓ Pipeline: operazioni multiple

ALTERNATIVE:
• forEach: side effects, no return
• for: massima performance
• for...of: leggibilità + performance

BEST PRACTICES:
✓ Preferisci metodi array a loop
✓ Usa arrow functions brevi
✓ Evita side effects nelle callback
✓ Considera performance per array grandi
`);
