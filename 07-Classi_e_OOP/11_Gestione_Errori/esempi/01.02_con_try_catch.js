/**
 * 01.02 - Codice CON Try...Catch
 * 
 * Questo esempio mostra come try...catch permette di catturare l'errore
 * e continuare l'esecuzione del programma.
 */

console.log("=== ESEMPIO: CON TRY...CATCH ===\n");

console.log("✅ 1. Prima del blocco try...catch");

try {
    console.log("\n🔵 2. Entrato nel blocco TRY");
    console.log("🔵 3. Esecuzione di codice nel try...");
    
    // Questa variabile NON esiste - genererà un errore!
    let risultato = variabileInesistente * 2;
    
    // Questa riga NON verrà eseguita
    console.log("❌ Questa riga non verrà mai raggiunta");
    
} catch (errore) {
    console.log("\n🎯 4. ERRORE CATTURATO! Entrato nel blocco CATCH");
    console.log("🎯 5. Tipo di errore:", errore.name);
    console.log("🎯 6. Messaggio:", errore.message);
    console.log("🎯 7. Errore gestito con successo!\n");
}

// Questo codice VERRÀ eseguito normalmente!
console.log("✅ 8. Dopo il try...catch - esecuzione continua!");
console.log("✅ 9. Il programma non è crashato!");
console.log("✅ 10. Script completato con successo!\n");

/**
 * OUTPUT ATTESO:
 * 
 * === ESEMPIO: CON TRY...CATCH ===
 * 
 * ✅ 1. Prima del blocco try...catch
 * 
 * 🔵 2. Entrato nel blocco TRY
 * 🔵 3. Esecuzione di codice nel try...
 * 
 * 🎯 4. ERRORE CATTURATO! Entrato nel blocco CATCH
 * 🎯 5. Tipo di errore: ReferenceError
 * 🎯 6. Messaggio: variabileInesistente is not defined
 * 🎯 7. Errore gestito con successo!
 * 
 * ✅ 8. Dopo il try...catch - esecuzione continua!
 * ✅ 9. Il programma non è crashato!
 * ✅ 10. Script completato con successo!
 * 
 * [Il programma termina normalmente con exit code 0]
 */
