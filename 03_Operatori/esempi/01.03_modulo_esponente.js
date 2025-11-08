/**
 * Esempio: Operatori Modulo ed Esponente
 * 
 * Modulo (%) restituisce il resto della divisione.
 * Esponente (**) eleva un numero a potenza (ES2016+).
 * 
 * Per eseguire: node 01.03_modulo_esponente.js
 */

console.log("=== OPERATORI MODULO ED ESPONENTE ===\n");

// 1. Operatore Modulo (%)
console.log("1. OPERATORE MODULO (%):\n");

console.log("Resto della divisione:");
console.log("10 % 3 =", 10 % 3); // 1 (10 = 3*3 + 1)
console.log("15 % 4 =", 15 % 4); // 3 (15 = 4*3 + 3)
console.log("20 % 7 =", 20 % 7); // 6 (20 = 7*2 + 6)

console.log("\nResto zero (divisione esatta):");
console.log("10 % 2 =", 10 % 2); // 0
console.log("15 % 5 =", 15 % 5); // 0
console.log("100 % 10 =", 100 % 10); // 0

console.log("\nDividendo < divisore:");
console.log("5 % 10 =", 5 % 10); // 5 (5 = 10*0 + 5)
console.log("3 % 7 =", 3 % 7); // 3
console.log("1 % 100 =", 1 % 100); // 1

console.log("\nCon numeri decimali:");
console.log("10.5 % 3 =", 10.5 % 3); // 1.5
console.log("5.5 % 2 =", 5.5 % 2); // 1.5
console.log("7.8 % 2.5 =", 7.8 % 2.5); // 0.30000000000000027

// 2. Modulo con numeri negativi
console.log("\n2. MODULO con NEGATIVI:\n");

console.log("Dividendo negativo:");
console.log("-10 % 3 =", -10 % 3); // -1 (segno del dividendo)
console.log("-15 % 4 =", -15 % 4); // -3
console.log("-7 % 2 =", -7 % 2); // -1

console.log("\nDivisore negativo:");
console.log("10 % -3 =", 10 % -3); // 1 (segno del dividendo)
console.log("15 % -4 =", 15 % -4); // 3

console.log("\nEntrambi negativi:");
console.log("-10 % -3 =", -10 % -3); // -1
console.log("-15 % -4 =", -15 % -4); // -3

console.log("\n⚠️  Il risultato ha sempre il segno del DIVIDENDO!");

// 3. Casi d'uso del modulo
console.log("\n3. CASI D'USO del MODULO:\n");

// Verifica numero pari/dispari
console.log("Verifica pari/dispari:");
let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numeri.forEach(num => {
  let tipo = num % 2 === 0 ? "pari" : "dispari";
  console.log(`  ${num} è ${tipo}`);
});

// Ciclare attraverso un array
console.log("\nCiclare array (wrap around):");
let giorni = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];
for (let i = 0; i < 15; i++) {
  let indice = i % giorni.length;
  console.log(`  Giorno ${i}: ${giorni[indice]}`);
}

// Convertire secondi in ore:minuti:secondi
console.log("\nConversione tempo:");
let totaleSecondi = 3665;
let ore = Math.floor(totaleSecondi / 3600);
let minuti = Math.floor((totaleSecondi % 3600) / 60);
let secondi = totaleSecondi % 60;
console.log(`  ${totaleSecondi}s = ${ore}h ${minuti}m ${secondi}s`);

// Verifica multiplo
console.log("\nVerifica multipli:");
let numero = 15;
console.log(`  ${numero} è multiplo di 3? ${numero % 3 === 0}`);
console.log(`  ${numero} è multiplo di 5? ${numero % 5 === 0}`);
console.log(`  ${numero} è multiplo di 7? ${numero % 7 === 0}`);

// 4. Modulo con valori speciali
console.log("\n4. MODULO con valori SPECIALI:\n");

console.log("Con zero:");
console.log("0 % 5 =", 0 % 5); // 0
console.log("5 % 0 =", 5 % 0); // NaN (divisione per zero)
console.log("0 % 0 =", 0 % 0); // NaN

console.log("\nCon Infinity:");
console.log("5 % Infinity =", 5 % Infinity); // 5
console.log("Infinity % 5 =", Infinity % 5); // NaN
console.log("Infinity % Infinity =", Infinity % Infinity); // NaN

console.log("\nCon NaN:");
console.log("5 % NaN =", 5 % NaN); // NaN
console.log("NaN % 5 =", NaN % 5); // NaN

// 5. Operatore Esponente (**)
console.log("\n5. OPERATORE ESPONENTE (**):\n");

console.log("Potenze base:");
console.log("2 ** 3 =", 2 ** 3); // 8 (2³)
console.log("5 ** 2 =", 5 ** 2); // 25 (5²)
console.log("10 ** 3 =", 10 ** 3); // 1000 (10³)

console.log("\nPotenze decimali:");
console.log("2.5 ** 2 =", 2.5 ** 2); // 6.25
console.log("1.5 ** 3 =", 1.5 ** 3); // 3.375

console.log("\nEsponente negativo (frazioni):");
console.log("2 ** -1 =", 2 ** -1); // 0.5 (1/2)
console.log("10 ** -2 =", 10 ** -2); // 0.01 (1/100)
console.log("5 ** -3 =", 5 ** -3); // 0.008 (1/125)

console.log("\nRadici (esponente frazionario):");
console.log("16 ** 0.5 =", 16 ** 0.5); // 4 (√16)
console.log("27 ** (1/3) =", 27 ** (1/3)); // 3 (³√27)
console.log("8 ** (1/3) =", 8 ** (1/3)); // 2 (³√8)

console.log("\nPotenze di zero:");
console.log("0 ** 2 =", 0 ** 2); // 0
console.log("0 ** 0 =", 0 ** 0); // 1 (per convenzione matematica)
console.log("2 ** 0 =", 2 ** 0); // 1 (qualsiasi numero^0 = 1)

console.log("\nPotenze di uno:");
console.log("1 ** 100 =", 1 ** 100); // 1
console.log("1 ** -5 =", 1 ** -5); // 1

// 6. Esponente con numeri negativi
console.log("\n6. ESPONENTE con NEGATIVI:\n");

console.log("Base negativa, esponente pari:");
console.log("(-2) ** 2 =", (-2) ** 2); // 4
console.log("(-3) ** 4 =", (-3) ** 4); // 81

console.log("\nBase negativa, esponente dispari:");
console.log("(-2) ** 3 =", (-2) ** 3); // -8
console.log("(-3) ** 5 =", (-3) ** 5); // -243

console.log("\nBase negativa, esponente decimale:");
console.log("(-2) ** 0.5 =", (-2) ** 0.5); // NaN (radice di negativo)
console.log("(-8) ** (1/3) =", (-8) ** (1/3)); // NaN

// 7. Math.pow() vs ** 
console.log("\n7. Math.pow() vs ** operator:\n");

console.log("Equivalenti:");
console.log("Math.pow(2, 3) =", Math.pow(2, 3)); // 8
console.log("2 ** 3 =", 2 ** 3); // 8

console.log("** è più moderno e leggibile:");
console.log("Math.pow(2, Math.pow(3, 2)) =", Math.pow(2, Math.pow(3, 2))); // 512
console.log("2 ** (3 ** 2) =", 2 ** (3 ** 2)); // 512 (più chiaro)

console.log("\n⚠️  Attenzione alla precedenza:");
console.log("-2 ** 2 causerebbe errore! Usa (-2) ** 2");

// 8. Casi d'uso esponente
console.log("\n8. CASI D'USO ESPONENTE:\n");

// Crescita esponenziale
console.log("Crescita batterica (raddoppia ogni ora):");
let batteriBatteri = 1;
for (let ora = 0; ora <= 5; ora++) {
  let popolazione = batteriBatteri * (2 ** ora);
  console.log(`  Ora ${ora}: ${popolazione} batteri`);
}

// Interesse composto
console.log("\nInteresse composto:");
let capitale = 1000;
let tassoAnnuo = 0.05; // 5%
let anni = 10;
let montante = capitale * ((1 + tassoAnnuo) ** anni);
console.log(`  Capitale iniziale: €${capitale}`);
console.log(`  Tasso: ${tassoAnnuo * 100}%`);
console.log(`  Anni: ${anni}`);
console.log(`  Montante finale: €${montante.toFixed(2)}`);

// Area e volume
console.log("\nArea quadrato (lato²):");
let lato = 5;
console.log(`  Lato: ${lato}, Area: ${lato ** 2}`);

console.log("\nVolume cubo (lato³):");
console.log(`  Lato: ${lato}, Volume: ${lato ** 3}`);

// Notazione scientifica
console.log("\nPotenze di 10 (notazione scientifica):");
console.log("  10 ** 3 =", 10 ** 3, "(mille)");
console.log("  10 ** 6 =", 10 ** 6, "(milione)");
console.log("  10 ** 9 =", 10 ** 9, "(miliardo)");
console.log("  10 ** -3 =", 10 ** -3, "(millisecondi)");

// 9. Valori speciali con esponente
console.log("\n9. Valori SPECIALI con esponente:\n");

console.log("Infinity:");
console.log("Infinity ** 2 =", Infinity ** 2); // Infinity
console.log("Infinity ** 0 =", Infinity ** 0); // 1
console.log("Infinity ** -1 =", Infinity ** -1); // 0
console.log("2 ** Infinity =", 2 ** Infinity); // Infinity
console.log("0.5 ** Infinity =", 0.5 ** Infinity); // 0

console.log("\nNaN:");
console.log("NaN ** 2 =", NaN ** 2); // NaN
console.log("2 ** NaN =", 2 ** NaN); // NaN
console.log("NaN ** 0 =", NaN ** 0); // 1 (caso speciale)

// 10. Best practices
console.log("\n10. BEST PRACTICES:\n");

console.log("✓ Usa % per:");
console.log("  - Verificare pari/dispari");
console.log("  - Ciclare array (wrap around)");
console.log("  - Trovare resto divisione");
console.log("  - Verificare multipli");

console.log("\n✓ Usa ** per:");
console.log("  - Potenze (2 ** 10 invece di Math.pow(2, 10))");
console.log("  - Radici quadrate (x ** 0.5 invece di Math.sqrt(x))");
console.log("  - Crescita esponenziale");
console.log("  - Notazione scientifica");

console.log("\n⚠️  Evita:");
console.log("  - Modulo per zero (sempre NaN)");
console.log("  - Esponente di numeri molto grandi (overflow)");
console.log("  - Radici di numeri negativi (NaN)");
console.log("  - Dimenticare parentesi: -2 ** 2 è errore!");

console.log("\n💡 Funzioni utili:");
console.log(`
// Verifica se pari
function isPari(n) {
  return n % 2 === 0;
}

// Ottieni cifra in posizione
function getCifra(numero, posizione) {
  return Math.floor(numero / (10 ** posizione)) % 10;
}

// Cicla indice array
function ciclica(indice, lunghezza) {
  return ((indice % lunghezza) + lunghezza) % lunghezza; // gestisce negativi
}

// Potenza sicura
function potenzaSicura(base, esponente) {
  const result = base ** esponente;
  if (!Number.isFinite(result)) {
    throw new Error("Overflow: risultato troppo grande");
  }
  return result;
}
`);

console.log("\n✅ Modulo ed esponente: strumenti potenti per matematica!");
