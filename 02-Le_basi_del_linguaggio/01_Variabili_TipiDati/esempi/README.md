# Esempi Pratici - Variabili e Tipi di Dati

Questa cartella contiene esempi pratici eseguibili con Node.js per comprendere i concetti di scope, hoisting, closure, strict mode e tipi di dati complessi in JavaScript.

## 📋 Lista degli Esempi

### **Conversioni di Tipi**

### 04.01_conversione_implicita.js
Conversione implicita (coercizione) in JavaScript: come JS converte automaticamente i tipi, operatore + speciale, conversioni in confronti, valori falsy/truthy, operatori logici (&&, ||), casi strani e pericolosi da evitare.

**Esegui con:**
```bash
node 04.01_conversione_implicita.js
```

### 04.02_conversione_esplicita.js
Conversione esplicita (casting): String(), Number(), Boolean(), parseInt(), parseFloat(), toString() con basi, operatore unario +, doppia negazione !!, confronto metodi, conversioni di Array/Object/Date, verifica risultati (isNaN, isFinite), e casi d'uso pratici.

**Esegui con:**
```bash
node 04.02_conversione_esplicita.js
```

### 04.03_uguaglianza_confronti.js
Operatori di uguaglianza e confronto: differenza tra == (loose) e === (strict), confronti relazionali (<, >, <=, >=), Object.is(), confronto profondo di oggetti, best practices per evitare bug, e quando usare ciascun operatore.

**Esegui con:**
```bash
node 04.03_uguaglianza_confronti.js
```

### 04.04_truthy_falsy.js
Valori truthy e falsy: gli 8 valori falsy (false, 0, -0, 0n, "", null, undefined, NaN), tutto il resto è truthy, trappole comuni ('0', [], {}), uso pratico in condizioni, differenza tra || e ?? (nullish coalescing), optional chaining, e funzioni di validazione.

**Esegui con:**
```bash
node 04.04_truthy_falsy.js
```

### **Tipi Primitivi**

### 03.01_string.js
Guida completa alle stringhe: creazione (apici, template literals), proprietà e metodi (length, charAt, slice, replace, split), trasformazione (upper/lower case, trim), ricerca (indexOf, includes, startsWith), concatenazione, e casi d'uso pratici.

**Esegui con:**
```bash
node 03.01_string.js
```

### 03.02_number.js
Tutto sui numeri: creazione (decimali, esponenziali, notazioni speciali), valori speciali (Infinity, NaN), limiti (MAX_SAFE_INTEGER), operazioni aritmetiche, metodi (toFixed, parseInt, parseFloat), oggetto Math, e gestione della precisione.

**Esegui con:**
```bash
node 03.02_number.js
```

### 03.03_boolean_null_undefined.js
Valori logici e assenza di valore: boolean (true/false), operatori logici (&&, ||, !), valori truthy/falsy, undefined vs null, optional chaining (?.), nullish coalescing (??), e best practices.

**Esegui con:**
```bash
node 03.03_boolean_null_undefined.js
```

### 03.04_symbol_bigint.js
Tipi primitivi avanzati: Symbol per identificatori unici (Symbol.for, well-known symbols, proprietà private), BigInt per numeri interi enormi (operazioni, limiti, conversioni), e casi d'uso pratici.

**Esegui con:**
```bash
node 03.04_symbol_bigint.js
```

### **Scope e Hoisting**

### 01_scope_globale.js
Dimostra come funziona lo scope globale e come le variabili globali siano accessibili da qualsiasi parte del programma. Include esempi di variabili globali accidentali e best practices.

**Esegui con:**
```bash
node 01_scope_globale.js
```

### 02_scope_funzione.js
Illustra lo scope di funzione, mostrando come le variabili dichiarate dentro una funzione siano accessibili solo al suo interno. Include esempi di shadowing e funzioni annidate.

**Esegui con:**
```bash
node 02_scope_funzione.js
```

### 03_scope_blocco.js
Spiega la differenza tra `var` (function scope) e `let`/`const` (block scope), con esempi pratici nei cicli for, blocchi if e switch.

**Esegui con:**
```bash
node 03_scope_blocco.js
```

### 04_hoisting_variabili.js
Dimostra il comportamento di hoisting delle variabili, la differenza tra `var`, `let` e `const`, e il concetto di Temporal Dead Zone.

**Esegui con:**
```bash
node 04_hoisting_variabili.js
```

### 05_hoisting_funzioni.js
Spiega la differenza tra dichiarazioni di funzioni e espressioni di funzioni, e come l'hoisting le gestisce diversamente.

**Esegui con:**
```bash
node 05_hoisting_funzioni.js
```

### 06_closure.js
Esempi completi di closure (chiusure), mostrando come creare variabili private, factory functions, gestire eventi asincroni e implementare memoization.

**Esegui con:**
```bash
node 06_closure.js
```

### 07_strict_mode.js
Illustra i benefici dello strict mode, mostrando come previene errori comuni e impone best practices.

**Esegui con:**
```bash
node 07_strict_mode.js
```

### **Tipi Complessi**

### 08_oggetti.js
Guida completa agli oggetti in JavaScript: creazione, accesso alle proprietà, metodi, oggetti annidati, iterazione, copia (shallow/deep), Object.freeze/seal, e destructuring.

**Esegui con:**
```bash
node 08_oggetti.js
```

### 09_array.js
Esempi completi sugli array: creazione, manipolazione, iterazione, metodi di trasformazione (map, filter, reduce), ricerca, ordinamento, e operazioni avanzate.

**Esegui con:**
```bash
node 09_array.js
```

### 10_funzioni.js
Funzioni in profondità: dichiarazioni, espressioni, arrow functions, parametri (default, rest, destructuring), higher-order functions, callback, IIFE, ricorsione, currying e composizione.

**Esegui con:**
```bash
node 10_funzioni.js
```

### 11_date.js
Lavorare con date e orari: creazione, getter/setter, formattazione, calcoli, confronti, e funzioni utili per gestire date in modo pratico.

**Esegui con:**
```bash
node 11_date.js
```

### 12_regexp_map_set.js
Espressioni regolari per pattern matching e validazioni; Map per collezioni chiave-valore avanzate; Set per gestire insiemi di valori unici e operazioni matematiche sugli insiemi.

**Esegui con:**
```bash
node 12_regexp_map_set.js
```

## 🚀 Come Eseguire gli Esempi

### Prerequisiti
- Node.js installato sul sistema (versione 14 o superiore consigliata per BigInt e operatori moderni)

### Verifica installazione Node.js
```bash
node --version
```

### Eseguire un singolo esempio
```bash
cd /percorso/della/cartella/esempi
node nome_file.js
```

### Eseguire tutti gli esempi in sequenza
```bash
for file in *.js; do echo "=== $file ===" && node "$file" && echo ""; done
```

## 💡 Consigli per lo Studio

1. **Segui l'ordine numerico** - Gli esempi sono progressivi
2. **Leggi prima la teoria** nei file markdown corrispondenti
3. **Esegui gli esempi** uno alla volta con Node.js
4. **Modifica il codice** per sperimentare varianti
5. **Osserva gli output** e confrontali con le spiegazioni
6. **Prova a rompere il codice** per capire i limiti
7. **Crea i tuoi esempi** combinando concetti diversi

## 🔍 Esperimenti Suggeriti

### Conversioni di Tipi
- Sperimenta con conversioni implicite usando operatore + con diversi tipi
- Confronta parseInt() vs parseFloat() vs Number() con stringhe diverse
- Prova tutti i valori falsy e verifica il comportamento in if/while
- Confronta == vs === con vari tipi e valori
- Testa || vs ?? per valori di default con 0, "", false
- Implementa funzioni di validazione custom che gestiscono truthy/falsy
- Prova Object.is() per confrontare NaN e +0/-0
- Crea esempi di coercizione problematica e la loro soluzione corretta

### Tipi Primitivi
- Prova operazioni con stringhe (concatenazione, interpolazione, metodi)
- Sperimenta con la precisione dei numeri decimali
- Confronta comportamenti truthy/falsy con vari valori
- Crea Symbol personalizzati per proprietà uniche
- Prova calcoli con BigInt per numeri molto grandi
- Sperimenta con template literals multilinea
- Usa optional chaining e nullish coalescing in scenari reali

### Scope e Hoisting
- Prova a creare variabili con lo stesso nome in scope diversi
- Verifica cosa succede quando modifichi variabili globali dentro funzioni
- Confronta il comportamento di `var`, `let` e `const` nei loop
- Prova a chiamare funzioni prima della loro dichiarazione
- Sperimenta con l'accesso a variabili prima della loro dichiarazione
- Crea esempi di Temporal Dead Zone

### Closure e Strict Mode
- Crea contatori multipli indipendenti
- Implementa una cache personalizzata
- Prova a creare closure nei loop con `var` e `let`
- Prova a creare variabili senza dichiarazione
- Tenta di modificare oggetti frozen
- Sperimenta con parametri duplicati

### Oggetti e Array
- Crea oggetti annidati complessi e accedi alle proprietà
- Sperimenta con shallow copy vs deep copy
- Prova i metodi map, filter, reduce con dati reali
- Implementa ordinamenti personalizzati per array di oggetti
- Usa destructuring per estrarre dati da strutture complesse

### Funzioni
- Crea higher-order functions personalizzate
- Implementa currying per funzioni esistenti
- Prova la composizione di più funzioni
- Sperimenta con ricorsione (fibonacci, fattoriale, ecc.)
- Confronta arrow functions e funzioni tradizionali con `this`

### Date, RegExp, Map, Set
- Crea funzioni per manipolare date (age calculator, date range, ecc.)
- Scrivi espressioni regolari per validare input personalizzati
- Implementa operazioni su insiemi (unione, intersezione, differenza)
- Usa Map per creare cache o dizionari complessi

## 📚 Risorse Aggiuntive

**Conversioni e Confronti:**
- [MDN - Type Coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)
- [MDN - Equality Comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
- [MDN - Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) / [Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
- [MDN - Nullish Coalescing (??)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [MDN - Optional Chaining (?.)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

**Tipi di Dati:**
- [MDN - JavaScript Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [MDN - String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [MDN - Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [MDN - Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- [MDN - BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

**Scope e Funzioni:**
- [MDN - JavaScript Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
- [MDN - Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- [MDN - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [MDN - Strict Mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

**Strutture Dati:**
- [MDN - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN - Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [MDN - Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [MDN - Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [MDN - RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

## ⚠️ Note Importanti

- Gli esempi usano `console.log()` per mostrare i risultati in modo chiaro
- Alcuni esempi includono codice commentato che causerebbe errori (per scopo didattico)
- Gli esempi con `setTimeout` potrebbero impiegare qualche secondo per completarsi
- Alcuni output possono variare leggermente a seconda della versione di Node.js
- BigInt e operatori moderni (??, ?.) richiedono Node.js 14+
- I file sono numerati per seguire una progressione logica di apprendimento

---

[Torna alla teoria](../05_Scope_Hoisting.md)
