# If, Else, Else If - Esempi Pratici

Esempi completi per comprendere le strutture condizionali if, else e else if in JavaScript.

## File degli esempi

### 01.01_if_base.js
If fondamentale:
- Sintassi base dell'if
- If con operatori di confronto (>, <, >=, <=, ===, !==)
- If con variabili booleane
- If con valori truthy e falsy
- If con operazioni matematiche (modulo, divisibilità)
- If con confronti di stringhe (case-sensitive, lunghezza)
- If con metodi di stringa (includes, startsWith, endsWith)
- If con proprietà di oggetti e array
- Blocco singolo vs multiplo
- Casi d'uso pratici (validazione, controlli, feature detection)

### 01.02_if_else.js
If con alternativa else:
- Sintassi base if...else
- If...else con confronti numerici
- If...else con operazioni (pari/dispari, divisibilità, range)
- If...else con stringhe e confronti
- If...else con valori truthy/falsy
- If...else con operatori logici (&&, ||, !)
- If...else con array e oggetti
- If...else annidato (preview)
- Assegnazione condizionale con if...else
- Casi pratici (login, validazione, controllo stock)

### 01.03_if_else_if.js
Catena di condizioni multiple:
- Sintassi base if...else if...else
- Categorizzazione numerica (fasce età, prezzi, IMC)
- Comparazione di stringhe (giorni, ruoli, estensioni file)
- Condizioni multiple complesse (sconti, accessi)
- Range e intervalli (temperatura, performance)
- Priorità e ordine di valutazione
- Catene lunghe (6+ condizioni)
- Condizioni con calcoli (tasse, spedizioni)
- Else if con return in funzioni
- Casi pratici complessi (raccomandazioni, validazione password)

### 01.04_if_annidati.js
If dentro altri if:
- Sintassi base if annidati (2 livelli)
- If annidati con else
- Multiple condizioni annidate (3+ livelli)
- Validazione dati con if annidati
- Range check annidati
- Categorizzazione complessa
- Controllo inventario complesso
- Sistema autenticazione multi-livello
- Alternativa: operatori logici vs if annidati
- Casi avanzati (raccomandazione film, prezzo biglietto)

### 01.05_truthy_falsy.js
Valori truthy e falsy:
- I 6 valori falsy (false, 0, "", null, undefined, NaN)
- Valori truthy comuni (numeri, stringhe, oggetti, array)
- Trappole comuni (0, "0", array vuoto, oggetto vuoto)
- Validazione input con truthy/falsy
- Doppia negazione (!!) per conversione boolean
- Operatore OR (||) per valori default
- Operatore AND (&&) per esecuzione condizionale
- Controlli espliciti vs impliciti
- Array e oggetti: verifica corretta
- Casi pratici (parametri opzionali, validazione form)

## Come usare gli esempi

### Eseguire un singolo esempio
```bash
node 01.01_if_base.js
node 01.02_if_else.js
node 01.03_if_else_if.js
node 01.04_if_annidati.js
node 01.05_truthy_falsy.js
```

### Eseguire tutti gli esempi
```bash
for file in 01.*.js; do
  echo "=== $file ==="
  node "$file"
  echo ""
done
```

## Concetti chiave

### If Base
```javascript
if (condizione) {
  // Eseguito se condizione è true
}

// Esempi
if (età >= 18) { }
if (temperatura > 25) { }
if (username) { }  // truthy check
if (array.length > 0) { }
```

### If...Else
```javascript
if (condizione) {
  // Se true
} else {
  // Se false
}

// Esempi
if (punteggio >= 60) {
  console.log("Promosso");
} else {
  console.log("Bocciato");
}
```

### If...Else If...Else
```javascript
if (condizione1) {
  // Prima condizione vera
} else if (condizione2) {
  // Seconda condizione vera
} else if (condizione3) {
  // Terza condizione vera
} else {
  // Nessuna condizione vera
}

// Esempio: voti
if (punteggio >= 90) {
  console.log("A");
} else if (punteggio >= 80) {
  console.log("B");
} else if (punteggio >= 70) {
  console.log("C");
} else {
  console.log("F");
}
```

### If Annidati
```javascript
if (condizione1) {
  // Primo livello
  if (condizione2) {
    // Secondo livello
    if (condizione3) {
      // Terzo livello
    }
  }
}

// Esempio
if (età >= 18) {
  if (haPatente) {
    if (haAssicurazione) {
      console.log("Può noleggiare auto");
    }
  }
}
```

### Truthy e Falsy
```javascript
// I 6 valori FALSY:
false
0
""
null
undefined
NaN

// Tutti gli altri sono TRUTHY, inclusi:
true, 1, -1, "testo", " ", [], {}, function(){}, Infinity

// Uso
if (valore) { }  // Controlla se truthy
if (!valore) { } // Controlla se falsy

// Conversione esplicita
let bool = !!valore;
```

## Operatori di confronto

```javascript
// Uguaglianza
===  // Uguale (stesso valore E tipo)
!==  // Diverso (valore O tipo diverso)
==   // Uguale (con conversione tipo) ⚠️ evitare
!=   // Diverso (con conversione tipo) ⚠️ evitare

// Relazionali
>    // Maggiore
<    // Minore
>=   // Maggiore o uguale
<=   // Minore o uguale

// Esempi
età === 18     // true solo se esattamente 18
età >= 18      // true se 18 o più
nome !== ""    // true se nome non è stringa vuota
```

## Operatori logici

```javascript
// AND - tutte le condizioni devono essere true
if (età >= 18 && haPatente && haAssicurazione) { }

// OR - almeno una condizione deve essere true
if (èAmministratore || èModeratote) { }

// NOT - inverte il valore booleano
if (!èBloccato) { }

// Combinazioni
if ((età >= 18 && haPatente) || èIstruttore) { }

// Short-circuit evaluation
let nome = inputNome || "Ospite";  // Default se falsy
utente && utente.saluta();         // Esegui solo se truthy
```

## Trappole comuni

```javascript
// ❌ ERRORI COMUNI

// 1. Assegnazione invece di confronto
if (x = 5) { }  // ✗ Assegna 5 a x!
if (x === 5) { } // ✓ Confronta

// 2. == invece di ===
if ("5" == 5) { }  // true (conversione tipo)
if ("5" === 5) { } // false (tipi diversi)

// 3. Array/oggetto vuoto è truthy
if (array) { }        // ✗ Sempre true!
if (array.length) { } // ✓ Controlla lunghezza

// 4. Zero è falsy
if (numero) { }  // ✗ False se numero è 0!
if (numero !== null && numero !== undefined) { } // ✓

// 5. Stringa "0" è truthy
if ("0") { }  // true! (stringa non vuota)
if (0) { }    // false

// 6. Troppi if annidati
if (a) {
  if (b) {
    if (c) {
      if (d) { } // ✗ Piramide del destino!
    }
  }
}
// ✓ Usa: if (a && b && c && d) { }

// 7. Default con || e zero
let count = 0;
let value = count || 10;  // ✗ value = 10 (0 è falsy!)
let value = count ?? 10;  // ✓ value = 0 (usa ??)
```

## Best practices

### ✓ Usa sempre parentesi graffe
```javascript
// ✗ Evita
if (condition) doSomething();

// ✓ Preferisci
if (condition) {
  doSomething();
}
```

### ✓ Usa === invece di ==
```javascript
// ✗ Evita (conversione tipo implicita)
if (value == "5") { }

// ✓ Preferisci (confronto stretto)
if (value === "5") { }
```

### ✓ Mantieni condizioni semplici
```javascript
// ✗ Difficile da leggere
if (età >= 18 && (haPatente || haPermessoSpeciale) && !èSospeso) { }

// ✓ Più chiaro
let èMaggiorenne = età >= 18;
let puòGuidare = haPatente || haPermessoSpeciale;
let nonSospeso = !èSospeso;

if (èMaggiorenne && puòGuidare && nonSospeso) { }
```

### ✓ Evita nesting eccessivo
```javascript
// ✗ Troppo annidato
if (a) {
  if (b) {
    if (c) {
      return risultato;
    }
  }
}

// ✓ Early return
if (!a) return;
if (!b) return;
if (!c) return;
return risultato;
```

### ✓ Usa else if per condizioni esclusive
```javascript
// Se solo UNA condizione può essere vera
if (voto >= 90) {
  return "A";
} else if (voto >= 80) {
  return "B";
} else if (voto >= 70) {
  return "C";
} else {
  return "F";
}
```

### ✓ Verifica correttamente array e oggetti
```javascript
// ✗ Array/oggetto sempre truthy
if (array) { }

// ✓ Verifica lunghezza/proprietà
if (array.length > 0) { }
if (Object.keys(obj).length > 0) { }
```

## Pattern comuni

### Validazione con early return
```javascript
function validaUtente(utente) {
  if (!utente) return false;
  if (!utente.email) return false;
  if (!utente.password) return false;
  return true;
}
```

### Default values
```javascript
// Con || (attenzione a 0, "", false)
let nome = inputNome || "Ospite";

// Con ?? (solo per null/undefined)
let count = inputCount ?? 0;
```

### Esecuzione condizionale
```javascript
// Solo se truthy
utente && mostraMessaggio(utente);

// Equivale a:
if (utente) {
  mostraMessaggio(utente);
}
```

### Guard clauses
```javascript
function processData(data) {
  if (!data) {
    console.log("Dati mancanti");
    return;
  }
  
  if (data.length === 0) {
    console.log("Dati vuoti");
    return;
  }
  
  // Logica principale
  elaboraDati(data);
}
```

## Quando usare cosa

### If semplice
- Singola condizione
- Azione solo se true
- Esempio: logging, warning

### If...Else
- Due alternative
- Una o l'altra azione
- Esempio: on/off, sì/no

### If...Else If...Else
- Più di 2 condizioni esclusive
- Una sola può essere vera
- Esempio: voti, categorie, range

### If annidati
- Condizioni dipendenti
- Ogni livello richiede check precedente
- Max 2-3 livelli

### Switch
- Molti valori specifici (>5)
- Stesso valore confrontato
- Esempio: giorni settimana, menu

### Ternario
- Assegnazione semplice
- Condizione inline
- Esempio: `let x = cond ? a : b`

## Risorse

- [MDN - if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [MDN - Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
- [MDN - Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
- [MDN - Operatori logici](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)

## Note importanti

1. **Usa sempre ===** invece di == (evita conversioni tipo inaspettate)
2. **Parentesi graffe sempre** (anche per singola istruzione)
3. **Array/oggetto vuoto è truthy** (controlla .length o Object.keys())
4. **Zero è falsy** (usa confronto esplicito se 0 è valore valido)
5. **Prima condizione vera viene eseguita** (le altre ignorate)
6. **Ordina da specifico a generale** (in catene if...else if)
7. **Limita nesting a 2-3 livelli** (usa early return o operatori logici)
8. **Else è opzionale** ma rende il codice più chiaro
9. **Commenta logiche non ovvie** (soprattutto condizioni complesse)
10. **Preferisci ?? a || per default** quando 0/""/false sono validi

---
**Torna a:** [04_Strutture_Condizionali](../../) | [Corso JavaScript](../../../../)
