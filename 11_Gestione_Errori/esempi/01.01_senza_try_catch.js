/**
 * 01.01 - Codice SENZA Try...Catch
 * 
 * Questo esempio mostra cosa succede quando NON gestisci gli errori.
 * L'errore causa il crash dello script e il codice successivo non viene eseguito.
 */

console.log("=== ESEMPIO: SENZA TRY...CATCH ===\n");

console.log("✅ 1. Prima dell'errore - tutto funziona");

console.log("✅ 2. Esecuzione di codice normale");

// Questa variabile NON esiste - genererà un errore!
console.log("\n❌ 3. Tentativo di usare variabile inesistente...");
let risultato = variabileInesistente * 2;

// ⚠️ TUTTO IL CODICE SOTTO NON VERRÀ MAI ESEGUITO!

console.log("❌ Questo messaggio NON verrà mai stampato");
console.log("❌ L'esecuzione si è fermata all'errore");
console.log("❌ Script crashato!");

/**
 * OUTPUT ATTESO:
 * 
 * === ESEMPIO: SENZA TRY...CATCH ===
 * 
 * ✅ 1. Prima dell'errore - tutto funziona
 * ✅ 2. Esecuzione di codice normale
 * 
 * ❌ 3. Tentativo di usare variabile inesistente...
 * 
 * ReferenceError: variabileInesistente is not defined
 *     at Object.<anonymous> (/path/to/file.js:15:18)
 *     ...
 * 
 * [Il programma termina qui con exit code 1]
 */
