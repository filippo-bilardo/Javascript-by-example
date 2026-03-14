# Switch - Esempi Pratici

Esempi completi per comprendere l'istruzione switch in JavaScript.

## File degli esempi

### 02.01_switch_base.js
Switch fondamentale:
- Sintassi base dello switch
- Importanza del break
- Caso default
- Switch con numeri (codici, punteggi)
- Switch con stringhe (comandi, estensioni file)
- Confronto stretto (===)
- Switch con espressioni
- Switch in funzioni con return
- Switch con blocchi e variabili locali
- Casi d'uso pratici (menu, permessi, stati)

### 02.02_switch_fallthrough.js
Comportamento fall-through:
- Fall-through spiegato (con e senza break)
- Fall-through intenzionale per casi multipli
- Fall-through cumulativo (permessi, livelli)
- Fall-through con commenti (best practice)
- Fall-through parziale con azioni diverse
- Fall-through con operazioni cumulative
- Fall-through vs alternative (array.includes)
- Errori comuni (break dimenticato)
- Fall-through in funzioni
- Casi pratici (notifiche, features, badge)

### 02.03_switch_alternative.js
Switch vs altre soluzioni:
- Switch vs if...else (confronto diretto)
- Switch vs oggetto lookup
- Switch vs Map
- Switch vs operatore ternario
- Switch vs funzioni in oggetto
- Performance (switch, oggetto, if-else)
- Quando usare switch
- Quando usare if...else
- Quando usare oggetto lookup
- Pattern avanzati e tabella comparativa

## Come usare gli esempi

```bash
node 02.01_switch_base.js
node 02.02_switch_fallthrough.js
node 02.03_switch_alternative.js
```

## Concetti chiave

### Switch Base
```javascript
switch (espressione) {
  case valore1:
    // Codice
    break;
  case valore2:
    // Codice
    break;
  default:
    // Codice default
}
```

### Fall-Through
```javascript
// Casi multipli (fall-through intenzionale)
switch (giorno) {
  case 0:
  case 6:
    console.log("Weekend");
    break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Giorno lavorativo");
    break;
}

// Cumulativo
switch (livello) {
  case 3:
    addAdmin();
    // fall-through
  case 2:
    addEdit();
    // fall-through
  case 1:
    addRead();
    break;
}
```

### Alternative

```javascript
// Oggetto lookup
const giorni = {
  0: "Domenica",
  1: "Lunedì",
  // ...
};
let nome = giorni[num] || "Invalido";

// Oggetto con funzioni
const operazioni = {
  somma: (a, b) => a + b,
  sottrai: (a, b) => a - b
};
let risultato = operazioni[op](x, y);
```

## Quando usare cosa

### ✓ Usa SWITCH per:
- 3+ valori discreti da confrontare
- Stesso valore confrontato multiple volte
- Fall-through intenzionale necessario
- Codice molto leggibile per stati/menu
- **Esempio**: Menu, giorni settimana, stati ordine

### ✓ Usa IF...ELSE per:
- Condizioni complesse
- Range di valori (<, >, <=, >=)
- Operatori logici (&&, ||)
- Ogni ramo ha condizioni diverse
- **Esempio**: Range età, combinazioni, calcoli

### ✓ Usa OGGETTO LOOKUP per:
- Semplice mappatura chiave-valore
- Molti casi (10+)
- Performance critica
- Configurazione dinamica
- **Esempio**: Traduzioni, configurazioni, codici errore

## Trappole comuni

```javascript
// ❌ Dimenticare break
switch (x) {
  case 1:
    console.log("Uno");
    // MANCA break! → fall-through accidentale
  case 2:
    console.log("Due"); // Eseguito anche per x=1!
    break;
}

// ✓ Break presente
switch (x) {
  case 1:
    console.log("Uno");
    break;  // ✓
  case 2:
    console.log("Due");
    break;  // ✓
}

// ❌ Tipo sbagliato (switch usa ===)
let x = "2";
switch (x) {
  case 2:  // Non matcha! "2" !== 2
    console.log("Due");
    break;
}

// ✓ Tipo corretto
switch (x) {
  case "2":  // ✓ Matcha
    console.log("Due");
    break;
}

// ❌ Range con switch (non funziona)
switch (età) {
  case età > 18:  // ✗ Sintassi non valida
    break;
}

// ✓ Range con switch (workaround)
switch (true) {
  case età > 18:  // ✓ Ma if-else è meglio
    break;
}

// ✓✓ Range con if-else (meglio)
if (età > 18) {
  // ...
}
```

## Best practices

### ✓ Usa sempre break
```javascript
switch (x) {
  case 1:
    doSomething();
    break;  // ✓ Sempre
  case 2:
    doOther();
    break;  // ✓ Sempre
}
```

### ✓ Commenta fall-through intenzionali
```javascript
switch (level) {
  case 3:
    addAdmin();
    // fall-through intenzionale
  case 2:
    addEdit();
    break;
}
```

### ✓ Default sempre alla fine
```javascript
switch (x) {
  case 1:
    // ...
    break;
  case 2:
    // ...
    break;
  default:  // ✓ Sempre ultimo
    // ...
}
```

### ✓ Considera alternative
```javascript
// Invece di switch con molti casi
const config = {
  dev: "http://localhost",
  prod: "https://api.com",
  test: "http://test.com"
};
let url = config[env];
```

## Pattern comuni

### Menu selection
```javascript
switch (scelta) {
  case 1:
    mostraHome();
    break;
  case 2:
    mostraProdotti();
    break;
  case 3:
    mostraContatti();
    break;
  default:
    mostraErrore();
}
```

### State machine
```javascript
switch (stato) {
  case "IDLE":
    stato = "RUNNING";
    break;
  case "RUNNING":
    stato = "PAUSED";
    break;
  case "PAUSED":
    stato = "RUNNING";
    break;
}
```

### Command dispatcher
```javascript
const commands = {
  START: () => startSystem(),
  STOP: () => stopSystem(),
  RESTART: () => restartSystem()
};

if (commands[cmd]) {
  commands[cmd]();
}
```

## Risorse

- [MDN - switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- [MDN - break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)

## Note importanti

1. **Switch usa ===** (confronto stretto, tipo e valore)
2. **Break è cruciale** (senza break → fall-through)
3. **Default è opzionale** ma consigliato
4. **Fall-through va commentato** se intenzionale
5. **Non supporta range** direttamente (usa if-else)
6. **Casi devono essere costanti** (non espressioni variabili)
7. **Return elimina bisogno di break** (in funzioni)
8. **Blocchi {} per scope locale** nei casi
9. **Per 10+ casi** considera oggetto lookup
10. **Performance** dell'oggetto spesso migliore

---
**Torna a:** [04_Strutture_Condizionali](../../) | [Corso JavaScript](../../../../)
