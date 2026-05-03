# Esempi - Gestione Errori con Try...Catch

Questa cartella contiene esempi pratici per imparare la gestione degli errori in JavaScript utilizzando `try...catch`.

## 📁 Struttura Esempi

### Esempi Node.js (`.js`)

Esegui con: `node nome_file.js`

1. **01.01_senza_try_catch.js** - Cosa succede senza gestione errori
   - Dimostra il crash dello script
   - Mostra come l'esecuzione si interrompe
   - Output: errore non gestito con stack trace

2. **01.02_con_try_catch.js** - Gestione base degli errori
   - Mostra come try...catch cattura gli errori
   - Il programma continua dopo l'errore
   - Output: errore gestito, esecuzione completata

3. **01.03_oggetto_error.js** - Proprietà dell'oggetto Error
   - Esplora `name`, `message`, `stack`
   - Diversi tipi di errori (ReferenceError, TypeError, etc.)
   - Output: dettagli completi di vari errori

4. **01.04_casi_pratici.js** - Casi d'uso reali
   - JSON parsing sicuro
   - Accesso a proprietà annidate
   - Conversioni numeriche
   - Operazioni matematiche
   - Simulazione I/O
   - Output: esempi pratici funzionanti

5. **01.05_flusso_esecuzione.js** - Come funziona il flusso
   - Scenario senza errori
   - Scenario con errori
   - Try...catch multipli e annidati
   - Diagramma di flusso visuale
   - Output: traccia passo-passo dell'esecuzione

6. **01.06_best_practices.js** - Buone pratiche
   - Good practices vs bad practices
   - Messaggi di errore descrittivi
   - Gestione per tipo di errore
   - Anti-pattern comuni
   - Output: confronto approcci corretti e sbagliati

### Esempi Browser (`.html`)

Apri direttamente nel browser

1. **01.01_try_catch_base.html** - Guida interattiva completa
   - 6 sezioni interattive
   - Demo con bottoni
   - Input di test
   - Confronti visivi
   - Output dinamico

## 🚀 Come Usare

### Node.js

```bash
# Esegui un singolo esempio
node 01.01_senza_try_catch.js

# Esegui tutti gli esempi in sequenza
node 01.01_senza_try_catch.js
node 01.02_con_try_catch.js
node 01.03_oggetto_error.js
node 01.04_casi_pratici.js
node 01.05_flusso_esecuzione.js
node 01.06_best_practices.js
```

### Browser

Apri il file HTML nel browser:
- Doppio click su `01.01_try_catch_base.html`
- Oppure: `File > Apri` nel browser

## 📚 Percorso di Apprendimento

**Principianti - Inizia qui:**
1. `01.01_senza_try_catch.js` - Vedi il problema
2. `01.02_con_try_catch.js` - Vedi la soluzione
3. `01.01_try_catch_base.html` - Esercitati interattivamente

**Intermedio:**
4. `01.03_oggetto_error.js` - Approfondisci l'oggetto Error
5. `01.04_casi_pratici.js` - Applicazioni reali
6. `01.05_flusso_esecuzione.js` - Comprendi il flusso

**Avanzato:**
7. `01.06_best_practices.js` - Perfeziona il tuo codice

## 💡 Concetti Chiave

### Try...Catch Base
```javascript
try {
    // Codice che potrebbe generare errori
    let result = riskyOperation();
} catch (error) {
    // Gestisci l'errore
    console.error("Errore:", error.message);
}
```

### Oggetto Error
```javascript
catch (error) {
    error.name      // Tipo: "ReferenceError"
    error.message   // Descrizione: "x is not defined"
    error.stack     // Stack trace completo
}
```

### Quando Usare Try...Catch
- ✅ JSON.parse()
- ✅ Fetch/API calls
- ✅ localStorage
- ✅ Operazioni su null/undefined
- ✅ Librerie esterne
- ❌ Non per flow control normale

## 🎯 Obiettivi di Apprendimento

Dopo aver completato questi esempi, saprai:
- ✅ Perché serve gestire gli errori
- ✅ Come funziona try...catch
- ✅ Quando usare try...catch
- ✅ Come accedere alle info dell'errore
- ✅ Best practices e anti-pattern
- ✅ Applicazioni pratiche reali

## 📖 Teoria Collegata

Vedi: `../teoria/01_try_catch.md`

## 🔗 Prossimi Passi

Dopo aver padroneggiato try...catch, esplora:
- Finally block
- Throw personalizzati
- Tipi di errori
- Async error handling
