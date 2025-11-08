/**
 * OPERATORE TERNARIO - ANNIDATO
 * 
 * L'operatore ternario può essere annidato per gestire più condizioni.
 * ATTENZIONE: Usare con moderazione, può diventare illeggibile!
 * 
 * Sintassi: cond1 ? val1 : (cond2 ? val2 : val3)
 */

console.log("=== 1. TERNARIO ANNIDATO BASE ===\n");

// Un livello di annidamento (accettabile)
let età = 25;
let categoria = età < 18 
  ? "Minorenne" 
  : (età < 65 ? "Adulto" : "Senior");

console.log(`Età: ${età} → Categoria: ${categoria}`);

// Equivalente con if-else
let età2 = 70;
let categoria2;
if (età2 < 18) {
  categoria2 = "Minorenne";
} else if (età2 < 65) {
  categoria2 = "Adulto";
} else {
  categoria2 = "Senior";
}
console.log(`Età: ${età2} → Categoria: ${categoria2}`);

// Due livelli
let voto = 8;
let valutazione = voto >= 9 
  ? "Ottimo" 
  : (voto >= 7 ? "Buono" : (voto >= 6 ? "Sufficiente" : "Insufficiente"));
console.log(`\nVoto: ${voto} → ${valutazione}`);


console.log("\n=== 2. CONFRONTI MULTIPLI ===\n");

// Temperatura
let temp = 35;
let statoTemp = temp > 30 
  ? "Molto caldo" 
  : (temp > 20 ? "Caldo" : (temp > 10 ? "Fresco" : "Freddo"));
console.log(`${temp}°C → ${statoTemp}`);

// Punteggio
let score = 750;
let livello = score >= 1000 
  ? "Esperto" 
  : (score >= 500 ? "Intermedio" : (score >= 100 ? "Principiante" : "Novizio"));
console.log(`Score: ${score} → ${livello}`);

// Velocità
let velocità = 90;
let limite = velocità > 130 
  ? "Multa pesante" 
  : (velocità > 90 ? "Multa leggera" : "OK");
console.log(`Velocità: ${velocità} km/h → ${limite}`);


console.log("\n=== 3. CONDIZIONI COMBINATE ===\n");

// AND con ternario annidato
let età3 = 20;
let hasLicenza = true;
let puòGuidare = età3 >= 18 
  ? (hasLicenza ? "Può guidare" : "Serve patente") 
  : "Troppo giovane";
console.log(`Età: ${età3}, Patente: ${hasLicenza} → ${puòGuidare}`);

// Più parametri
let isWeekend = false;
let isHoliday = true;
let giornoLibero = isWeekend 
  ? "Weekend" 
  : (isHoliday ? "Festivo" : "Lavorativo");
console.log(`Weekend: ${isWeekend}, Festivo: ${isHoliday} → ${giornoLibero}`);

// Con operatori logici
let oreLavoro = 45;
let straordinario = oreLavoro > 40 
  ? (oreLavoro > 50 ? "Molto straordinario" : "Straordinario normale") 
  : "Orario normale";
console.log(`Ore: ${oreLavoro} → ${straordinario}`);


console.log("\n=== 4. IN FUNZIONI ===\n");

// Funzione con ternario annidato
function calcolaSpedizione(peso) {
  return peso > 20 
    ? 15 
    : (peso > 10 ? 10 : (peso > 5 ? 5 : 2));
}

console.log("Spedizione:");
console.log(`  3kg: €${calcolaSpedizione(3)}`);
console.log(`  7kg: €${calcolaSpedizione(7)}`);
console.log(`  12kg: €${calcolaSpedizione(12)}`);
console.log(`  25kg: €${calcolaSpedizione(25)}`);

// Con stringa
function getRating(stelle) {
  return stelle === 5 
    ? "⭐⭐⭐⭐⭐ Eccellente" 
    : (stelle === 4 ? "⭐⭐⭐⭐ Molto buono" 
      : (stelle === 3 ? "⭐⭐⭐ Buono" 
        : (stelle === 2 ? "⭐⭐ Sufficiente" : "⭐ Scarso")));
}

console.log("\nRecensioni:");
[5, 4, 3, 2, 1].forEach(n => {
  console.log(`  ${n} stelle: ${getRating(n)}`);
});


console.log("\n=== 5. FORMATTAZIONE (EVITA QUANDO ILLEGGIBILE) ===\n");

// Leggibile (max 2 livelli)
let num1 = 15;
let tipo1 = num1 > 10 
  ? "Grande" 
  : (num1 > 5 ? "Medio" : "Piccolo");
console.log(`${num1} → ${tipo1} ✓ Leggibile`);

// Difficile da leggere (3+ livelli)
let num2 = 25;
let tipo2 = num2 > 30 
  ? "Enorme" 
  : (num2 > 20 
    ? "Molto grande" 
    : (num2 > 10 
      ? "Grande" 
      : (num2 > 5 ? "Medio" : "Piccolo")));
console.log(`${num2} → ${tipo2} ✗ Difficile da leggere`);

// MEGLIO: if-else per 3+ livelli
function categorizzaNumero(n) {
  if (n > 30) return "Enorme";
  if (n > 20) return "Molto grande";
  if (n > 10) return "Grande";
  if (n > 5) return "Medio";
  return "Piccolo";
}
console.log(`${num2} → ${categorizzaNumero(num2)} ✓ Più leggibile`);


console.log("\n=== 6. CON STRINGHE E OGGETTI ===\n");

// Costruzione messaggio
let ruolo = "admin";
let messaggio = ruolo === "admin" 
  ? "Accesso completo" 
  : (ruolo === "editor" 
    ? "Può modificare" 
    : (ruolo === "viewer" ? "Solo lettura" : "Nessun accesso"));
console.log(`Ruolo: ${ruolo} → ${messaggio}`);

// In oggetto
let user = {
  name: "Mario",
  age: 30,
  badge: 30 >= 30 
    ? "Senior" 
    : (30 >= 20 ? "Junior" : "Trainee")
};
console.log("\nUtente:", user);

// Property dinamiche
let stato = "attivo";
let colore = stato === "attivo" 
  ? "verde" 
  : (stato === "pausa" ? "giallo" : "rosso");
let icona = stato === "attivo" 
  ? "✓" 
  : (stato === "pausa" ? "⏸" : "✗");
console.log(`\nStato: ${stato} → ${icona} (${colore})`);


console.log("\n=== 7. ALTERNATIVE MIGLIORI ===\n");

// Switch vs ternario annidato
function getGiorno(num) {
  switch (num) {
    case 0: return "Domenica";
    case 1: return "Lunedì";
    case 2: return "Martedì";
    case 3: return "Mercoledì";
    case 4: return "Giovedì";
    case 5: return "Venerdì";
    case 6: return "Sabato";
    default: return "Invalido";
  }
}

// Con ternario (BRUTTO!)
function getGiornoTernario(num) {
  return num === 0 ? "Domenica" 
    : (num === 1 ? "Lunedì" 
      : (num === 2 ? "Martedì" 
        : (num === 3 ? "Mercoledì" 
          : (num === 4 ? "Giovedì" 
            : (num === 5 ? "Venerdì" 
              : (num === 6 ? "Sabato" : "Invalido"))))));
}

console.log("Switch (leggibile):", getGiorno(3));
console.log("Ternario annidato (illeggibile):", getGiornoTernario(3));

// Oggetto lookup (MEGLIO!)
const giorni = {
  0: "Domenica", 1: "Lunedì", 2: "Martedì",
  3: "Mercoledì", 4: "Giovedì", 5: "Venerdì", 6: "Sabato"
};
let giornoOggetto = giorni[3] || "Invalido";
console.log("Oggetto (migliore):", giornoOggetto);


console.log("\n=== 8. ERRORI COMUNI ===\n");

// ❌ Troppo annidato
let x = 50;
let bad = x > 80 ? "A" : (x > 60 ? "B" : (x > 40 ? "C" : (x > 20 ? "D" : "F")));
console.log(`Troppo annidato (brutto): ${bad}`);

// ✓ Meglio con if-else
function getGrade(score) {
  if (score > 80) return "A";
  if (score > 60) return "B";
  if (score > 40) return "C";
  if (score > 20) return "D";
  return "F";
}
console.log(`Con if-else (meglio): ${getGrade(x)}`);

// ❌ Senza parentesi (confusione)
let a = true, b = false;
let confuso = a ? "A" : b ? "B" : "C";
console.log(`\nSenza parentesi: ${confuso}`);

// ✓ Con parentesi (chiaro)
let chiaro = a ? "A" : (b ? "B" : "C");
console.log(`Con parentesi: ${chiaro}`);


console.log("\n=== 9. USI PRATICI (MODERATI) ===\n");

// 1. Priorità messaggi
function getPriority(level) {
  return level === "high" 
    ? "🔴 Urgente" 
    : (level === "medium" ? "🟡 Normale" : "🟢 Bassa");
}
console.log("1. Priorità:");
console.log(`  ${getPriority("high")}`);
console.log(`  ${getPriority("medium")}`);
console.log(`  ${getPriority("low")}`);

// 2. Prezzo con categorie sconto
function calcolaPrezzo(basePrice, category) {
  let discount = category === "premium" 
    ? 0.8 
    : (category === "standard" ? 0.9 : 1.0);
  return basePrice * discount;
}
console.log("\n2. Prezzi con sconto:");
console.log(`  Premium: €${calcolaPrezzo(100, "premium")}`);
console.log(`  Standard: €${calcolaPrezzo(100, "standard")}`);
console.log(`  Base: €${calcolaPrezzo(100, "base")}`);

// 3. Badge utente
function getUserBadge(points) {
  return points >= 1000 
    ? "🥇 Oro" 
    : (points >= 500 ? "🥈 Argento" : (points >= 100 ? "🥉 Bronzo" : "⭐ Base"));
}
console.log("\n3. Badge utenti:");
[50, 150, 600, 1200].forEach(p => {
  console.log(`  ${p} punti: ${getUserBadge(p)}`);
});


console.log("\n=== 10. QUANDO USARE TERNARIO ANNIDATO ===\n");

console.log(`
REGOLE D'ORO:

✓ USA ternario annidato per:
  - Max 2 livelli di annidamento
  - Condizioni semplici e chiare
  - Return diretti in funzioni
  - Assegnazioni semplici
  
✗ NON usare per:
  - 3+ livelli di annidamento
  - Logica complessa in ogni ramo
  - Quando diventa difficile da leggere
  - Molte condizioni (usa switch/oggetto)

ALTERNATIVE:
  - if-else per logica complessa
  - switch per molti valori discreti
  - Oggetto lookup per mappature
  - Array + find/filter per ricerche
`);

// Esempio decisionale
function scegliSoluzione(numCondizioni, complessità) {
  console.log(`\n${numCondizioni} condizioni, complessità ${complessità}:`);
  
  if (numCondizioni <= 2 && complessità === "bassa") {
    console.log("  → Usa TERNARIO semplice o annidato");
  } else if (numCondizioni >= 5 && complessità === "bassa") {
    console.log("  → Usa SWITCH o OGGETTO lookup");
  } else {
    console.log("  → Usa IF-ELSE");
  }
}

scegliSoluzione(2, "bassa");
scegliSoluzione(7, "bassa");
scegliSoluzione(3, "alta");

console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO TERNARIO ANNIDATO");
console.log("=".repeat(50));
console.log(`
Sintassi: cond1 ? val1 : (cond2 ? val2 : val3)

✓ Accettabile:
  - 1-2 livelli
  - Condizioni semplici
  - Return in funzioni

✗ Da evitare:
  - 3+ livelli
  - Illeggibile
  - Logica complessa

💡 Ricorda: Se è difficile da leggere, usa if-else!
`);
