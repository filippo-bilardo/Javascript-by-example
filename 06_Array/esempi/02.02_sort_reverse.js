/**
 * SORT E REVERSE - RIORDINAMENTO ARRAY
 * 
 * sort(), reverse(), ordinamenti custom e tecniche avanzate
 */

console.log("=== 1. REVERSE - INVERSIONE ORDINE ===\n");

const numeri = [1, 2, 3, 4, 5];
console.log("Originale:", numeri);

// reverse() modifica l'array originale!
numeri.reverse();
console.log("Dopo reverse():", numeri);

// Reverse senza modificare originale
const original = [1, 2, 3, 4, 5];
const reversed = [...original].reverse();
console.log("\nOriginale immutato:", original);
console.log("Reversed:", reversed);

// Alternativa: slice + reverse
const reversed2 = original.slice().reverse();
console.log("Con slice:", reversed2);


console.log("\n=== 2. SORT BASE - STRINGHE ===\n");

const frutta = ["banana", "mela", "arancia", "kiwi"];
console.log("Originale:", frutta);

// sort() ordina alfabeticamente (default)
frutta.sort();
console.log("Dopo sort():", frutta);

// sort modifica originale!
const parole = ["zebra", "alfa", "beta", "gamma"];
const sortedParole = [...parole].sort();
console.log("\nParole ordinate:", sortedParole);
console.log("Originale modificato:", parole);


console.log("\n=== 3. SORT CON NUMERI - PROBLEMA ===\n");

const nums = [10, 2, 5, 1, 20, 100];
console.log("Numeri originali:", nums);

// ⚠️ sort di default converte in stringhe!
const sortedWrong = [...nums].sort();
console.log("\nsort() default (SBAGLIATO):", sortedWrong);
console.log("Ordine lessicografico: '1', '10', '100', '2', '20', '5'");

// ✓ Funzione di confronto per numeri
const sortedCorrect = [...nums].sort((a, b) => a - b);
console.log("\nsort((a,b) => a - b) CORRETTO:", sortedCorrect);


console.log("\n=== 4. SORT NUMERI - CRESCENTE/DECRESCENTE ===\n");

const numbers = [5, 2, 8, 1, 9, 3];
console.log("Originale:", numbers);

// Crescente: a - b
const crescente = [...numbers].sort((a, b) => a - b);
console.log("\nCrescente (a - b):", crescente);

// Decrescente: b - a
const decrescente = [...numbers].sort((a, b) => b - a);
console.log("Decrescente (b - a):", decrescente);

// Come funziona:
// se a - b < 0 → a prima di b (crescente)
// se a - b > 0 → b prima di a
// se a - b = 0 → ordine immutato


console.log("\n=== 5. SORT OGGETTI ===\n");

const persone = [
  { nome: "Mario", età: 30 },
  { nome: "Luigi", età: 25 },
  { nome: "Anna", età: 35 },
  { nome: "Carlo", età: 25 }
];

console.log("Persone originali:", persone);

// Ordinare per età (crescente)
const perEtà = [...persone].sort((a, b) => a.età - b.età);
console.log("\nPer età crescente:");
perEtà.forEach(p => console.log(`  ${p.nome}: ${p.età}`));

// Ordinare per nome (alfabetico)
const perNome = [...persone].sort((a, b) => a.nome.localeCompare(b.nome));
console.log("\nPer nome alfabetico:");
perNome.forEach(p => console.log(`  ${p.nome}: ${p.età}`));

// Ordinare per età decrescente
const perEtàDesc = [...persone].sort((a, b) => b.età - a.età);
console.log("\nPer età decrescente:");
perEtàDesc.forEach(p => console.log(`  ${p.nome}: ${p.età}`));


console.log("\n=== 6. LOCALECOMPARE - STRINGHE ===\n");

// localeCompare per confronto stringhe corretto
const nomi = ["Élise", "Alice", "Zoé", "Bob"];
console.log("Nomi originali:", nomi);

// Sort con localeCompare
const sortedNomi = [...nomi].sort((a, b) => a.localeCompare(b));
console.log("\nCon localeCompare:", sortedNomi);

// Case-insensitive
const parole2 = ["Zebra", "alfa", "Beta", "GAMMA"];
const sortedCaseInsens = [...parole2].sort((a, b) => 
  a.toLowerCase().localeCompare(b.toLowerCase())
);
console.log("\nCase-insensitive:", sortedCaseInsens);

// Locale-aware (caratteri accentati)
const italiane = ["più", "papà", "perché", "città"];
const sortedLocale = [...italiane].sort((a, b) => 
  a.localeCompare(b, 'it')
);
console.log("\nLocale italiano:", sortedLocale);


console.log("\n=== 7. SORT MULTIPLI CRITERI ===\n");

const studenti = [
  { nome: "Mario", voto: 8, classe: "A" },
  { nome: "Luigi", voto: 9, classe: "B" },
  { nome: "Anna", voto: 8, classe: "A" },
  { nome: "Carlo", voto: 9, classe: "A" }
];

console.log("Studenti originali:");
studenti.forEach(s => console.log(`  ${s.nome} - ${s.voto} - ${s.classe}`));

// Ordinare per voto (desc), poi per nome (asc)
const sorted1 = [...studenti].sort((a, b) => {
  // Prima per voto (decrescente)
  if (a.voto !== b.voto) {
    return b.voto - a.voto;
  }
  // Se voto uguale, per nome (alfabetico)
  return a.nome.localeCompare(b.nome);
});

console.log("\nPer voto DESC, poi nome ASC:");
sorted1.forEach(s => console.log(`  ${s.nome} - ${s.voto} - ${s.classe}`));

// Ordinare per classe, poi voto, poi nome
const sorted2 = [...studenti].sort((a, b) => {
  if (a.classe !== b.classe) return a.classe.localeCompare(b.classe);
  if (a.voto !== b.voto) return b.voto - a.voto;
  return a.nome.localeCompare(b.nome);
});

console.log("\nPer classe, voto DESC, nome:");
sorted2.forEach(s => console.log(`  ${s.nome} - ${s.voto} - ${s.classe}`));


console.log("\n=== 8. SORT STABILI E INSTABILI ===\n");

// JavaScript sort è stabile da ES2019
const items = [
  { id: 1, value: 'A', order: 1 },
  { id: 2, value: 'B', order: 2 },
  { id: 3, value: 'A', order: 3 },
  { id: 4, value: 'B', order: 4 }
];

console.log("Items originali:");
items.forEach(i => console.log(`  ${i.id}: ${i.value} (order: ${i.order})`));

// Sort stabile mantiene ordine relativo per elementi uguali
const sortedItems = [...items].sort((a, b) => a.value.localeCompare(b.value));

console.log("\nDopo sort per value:");
sortedItems.forEach(i => console.log(`  ${i.id}: ${i.value} (order: ${i.order})`));
console.log("Nota: order preservato per stessi value");


console.log("\n=== 9. SORT PERSONALIZZATI ===\n");

// Sort con priorità custom
const priorità = { "alto": 1, "medio": 2, "basso": 3 };
const tasks = [
  { titolo: "Task A", priorità: "basso" },
  { titolo: "Task B", priorità: "alto" },
  { titolo: "Task C", priorità: "medio" },
  { titolo: "Task D", priorità: "alto" }
];

console.log("Tasks originali:");
tasks.forEach(t => console.log(`  ${t.titolo}: ${t.priorità}`));

const sortedTasks = [...tasks].sort((a, b) => {
  return priorità[a.priorità] - priorità[b.priorità];
});

console.log("\nPer priorità:");
sortedTasks.forEach(t => console.log(`  ${t.titolo}: ${t.priorità}`));

// Sort per lunghezza stringa
const words = ["hi", "hello", "hey", "greetings"];
const byLength = [...words].sort((a, b) => a.length - b.length);
console.log("\nPer lunghezza:", byLength);

// Sort date
const dates = [
  new Date("2023-03-15"),
  new Date("2023-01-10"),
  new Date("2023-12-05")
];
const sortedDates = [...dates].sort((a, b) => a - b);
console.log("\nDate ordinate:");
sortedDates.forEach(d => console.log(`  ${d.toLocaleDateString()}`));


console.log("\n=== 10. UTILITY FUNCTIONS ===\n");

// Helper per sort generico
function sortBy(arr, key, desc = false) {
  return [...arr].sort((a, b) => {
    const valA = a[key];
    const valB = b[key];
    
    if (typeof valA === 'string') {
      return desc 
        ? valB.localeCompare(valA)
        : valA.localeCompare(valB);
    }
    
    return desc ? valB - valA : valA - valB;
  });
}

const prodotti = [
  { nome: "Laptop", prezzo: 1200 },
  { nome: "Mouse", prezzo: 25 },
  { nome: "Tastiera", prezzo: 80 }
];

console.log("Per prezzo crescente:");
sortBy(prodotti, 'prezzo').forEach(p => 
  console.log(`  ${p.nome}: €${p.prezzo}`)
);

console.log("\nPer nome alfabetico:");
sortBy(prodotti, 'nome').forEach(p => 
  console.log(`  ${p.nome}: €${p.prezzo}`)
);

console.log("\nPer prezzo decrescente:");
sortBy(prodotti, 'prezzo', true).forEach(p => 
  console.log(`  ${p.nome}: €${p.prezzo}`)
);

// Shuffle (ordine casuale)
function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

const cards = ["A", "2", "3", "4", "5"];
console.log("\nShuffle:", shuffle(cards));
console.log("Shuffle:", shuffle(cards));


console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO SORT E REVERSE");
console.log("=".repeat(50));
console.log(`
REVERSE:
• arr.reverse() - inverte ordine
• Modifica array originale!
• [...arr].reverse() per copia

SORT BASE:
• arr.sort() - ordine alfabetico default
• Modifica array originale!
• Converte elementi in stringhe
• [...arr].sort() per copia

SORT NUMERI:
• sort((a,b) => a - b) - crescente
• sort((a,b) => b - a) - decrescente
• a - b < 0 → a prima di b
• a - b > 0 → b prima di a

SORT STRINGHE:
• localeCompare per confronto corretto
• a.localeCompare(b) - alfabetico
• toLowerCase() per case-insensitive
• locale parameter per caratteri speciali

SORT OGGETTI:
• sort((a,b) => a.prop - b.prop)
• localeCompare per proprietà stringa
• Criteri multipli con if cascade

SORT STABILE (ES2019+):
• Mantiene ordine relativo
• Elementi uguali non riordinati
• Utile per sort multipli

BEST PRACTICES:
✓ Usa [...arr].sort() per immutabilità
✓ a-b per numeri crescenti, b-a decrescenti
✓ localeCompare per stringhe
✓ Criteri multipli con if
✗ Evita Math.random() per shuffle serio

PERFORMANCE:
• sort in-place è più veloce
• [...arr].sort() usa memoria extra
• Complessità: O(n log n)
`);
