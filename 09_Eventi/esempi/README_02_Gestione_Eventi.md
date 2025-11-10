# 📚 Guida 02: Gestione Eventi - Esempi Interattivi

Questa guida contiene esempi pratici e interattivi sui diversi metodi di gestione degli eventi in JavaScript, dalla registrazione alla rimozione, dalle arrow functions alle best practices.

## 📂 File Disponibili

### 02.01 - Metodi di Registrazione Eventi
**File:** `02.01_metodi_registrazione.html`

Confronto completo dei tre metodi principali per registrare gestori di eventi:

**Concetti Coperti:**
- ✅ Attributi HTML inline (`onclick`, `onmouseover`, etc.)
- ✅ Proprietà DOM on-event (`element.onclick = function`)
- ✅ addEventListener() - Metodo moderno raccomandato
- ✅ Confronto diretto tra i tre approcci
- ✅ Funzioni nominate vs anonime
- ✅ Opzioni di addEventListener (once, capture, passive)
- ✅ Tabella comparativa con vantaggi/svantaggi
- ✅ Demo interattive con multipli gestori

**6 Sezioni Interactive:**
1. Attributi inline HTML con esempi pratici
2. Proprietà DOM on-event e problema sovrascrittura
3. addEventListener base con multipli gestori
4. Confronto side-by-side dei tre metodi
5. Rimozione con funzioni nominate vs anonime
6. Opzioni avanzate (once, capture, passive) con demo

---

### 02.02 - Rimozione Gestori Eventi
**File:** `02.02_remove_event_listener.html`

Tecniche complete per rimuovere correttamente i gestori di eventi:

**Concetti Coperti:**
- ✅ removeEventListener() base
- ✅ Problema con funzioni anonime (non rimovibili)
- ✅ Funzioni nominate per rimozione corretta
- ✅ Gestori auto-rimuoventi (self-removing)
- ✅ Gestione multipli gestori selettivamente
- ✅ Rimozione con parametri options (capture)
- ✅ Pattern cleanup per Single Page Applications
- ✅ Tracciamento gestori per memory leak prevention

**6 Sezioni Interactive:**
1. Rimozione base con re-aggiunta dinamica
2. Dimostrazione problema funzioni anonime
3. Auto-rimozione e countdown
4. Rimozione selettiva di multipli gestori
5. Gestione capture vs bubbling nella rimozione
6. Pattern componenti con cleanup automatico

---

### 02.03 - Arrow Functions e Context (this)
**File:** `02.03_arrow_functions_context.html`

Differenze fondamentali tra traditional functions e arrow functions negli eventi:

**Concetti Coperti:**
- ✅ Valore di `this` in traditional vs arrow functions
- ✅ Lexical this delle arrow functions
- ✅ Accesso all'elemento target
- ✅ Arrow functions in oggetti (preservare contesto)
- ✅ Arrow functions in classi ES6
- ✅ Pattern con bind() come alternativa
- ✅ Best practices su quando usare ciascuna
- ✅ Timer e callback con contesto preservato

**5 Sezioni Interactive:**
1. Differenza fondamentale del valore `this`
2. Confronto visivo con cambio colore bottoni
3. Arrow functions con oggetti (counter e timer)
4. Classi ES6: traditional vs arrow vs bind
5. Best practices e raccomandazioni d'uso

---

### 02.04 - Gestione Eventi Multipli e Delegazione
**File:** `02.04_event_delegation.html`

Pattern di event delegation e gestione ottimale di eventi multipli:

**Concetti Coperti:**
- ✅ Approccio naïve con forEach (problemi)
- ✅ Event delegation - un gestore sul contenitore
- ✅ Metodo `closest()` per trovare antenati
- ✅ Lista dinamica con aggiungi/elimina
- ✅ Todo list completa con multiple azioni
- ✅ Confronto performance: ciclo vs delegation
- ✅ Vantaggi memoria e manutenibilità
- ✅ Gestione elementi aggiunti dinamicamente

**6 Sezioni Interactive:**
1. Approccio naïve (un gestore per elemento)
2. Event delegation base con container
3. Uso di closest() per elementi figli
4. Lista dinamica con eliminazione
5. Todo list con completa/elimina/modifica
6. Test performance 100 elementi

---

### 02.05 - preventDefault e Best Practices
**File:** `02.05_preventDefault_best_practices.html`

Blocco comportamenti predefiniti e best practices complete:

**Concetti Coperti:**
- ✅ preventDefault() per link e form
- ✅ Validazione form custom
- ✅ Context menu personalizzato
- ✅ Gestione errori con try-catch
- ✅ Best practices complete (DO/DON'T)
- ✅ Memory leaks prevention
- ✅ Pattern cleanup componenti
- ✅ Checklist completa sviluppatori

**6 Sezioni Interactive:**
1. preventDefault base su link e form
2. Validazione form completa (email, password, età)
3. Context menu custom con preventDefault
4. Gestione errori sicura vs non sicura
5. Best practices riassunto con DO/DON'T
6. Prevenzione memory leaks con componenti

---

## 🎯 Concetti Chiave

### addEventListener() - Metodo Moderno
```javascript
// Sintassi completa
element.addEventListener(eventType, handler, options);

// Options disponibili
{
  capture: false,  // fase di cattura
  once: true,      // esegui una volta sola
  passive: true    // non usa preventDefault (performance)
}
```

### Rimozione Corretta
```javascript
// ✅ CORRETTO: funzione nominata
const handler = function() { console.log('Click'); };
button.addEventListener('click', handler);
button.removeEventListener('click', handler);

// ❌ SBAGLIATO: funzione anonima
button.addEventListener('click', function() { console.log('Click'); });
button.removeEventListener('click', function() { console.log('Click'); });
// Non rimuove nulla!
```

### Arrow Functions e this
```javascript
// Traditional: this = elemento DOM
button.addEventListener('click', function() {
  this.style.color = 'red'; // ✅ this = button
});

// Arrow: this = contesto circostante
button.addEventListener('click', () => {
  this.style.color = 'red'; // ❌ this NON è il button!
  event.target.style.color = 'red'; // ✅ Usa event.target
});

// Arrow utile per preservare contesto classe
class Counter {
  init() {
    button.addEventListener('click', () => {
      this.count++; // ✅ this = istanza Counter
    });
  }
}
```

### Event Delegation
```javascript
// ❌ APPROCCIO NAÏVE: un gestore per elemento
buttons.forEach(btn => {
  btn.addEventListener('click', handler); // N gestori!
});

// ✅ EVENT DELEGATION: un gestore sul contenitore
container.addEventListener('click', (event) => {
  if (event.target.matches('button')) {
    handler(event); // 1 solo gestore!
  }
});

// ✅ Con closest() per elementi figli
container.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (button) {
    handler(event);
  }
});
```

### preventDefault()
```javascript
// Blocca comportamento predefinito
link.addEventListener('click', (event) => {
  event.preventDefault(); // Non naviga
  console.log('Link cliccato ma navigazione bloccata');
});

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Non invia
  // Validazione custom
  if (isValid()) {
    submitWithAjax();
  }
});
```

---

## ✅ Best Practices

### DO (Fare)
- ✅ **Usa addEventListener()** invece di proprietà inline
- ✅ **Event delegation** per molti elementi simili
- ✅ **Rimuovi gestori** quando non servono più
- ✅ **Try-catch** per gestione errori robusta
- ✅ **Funzioni nominate** per poter rimuovere
- ✅ **preventDefault()** quando necessario
- ✅ **Options** (once, passive, capture) appropriatamente
- ✅ **Arrow functions** per preservare contesto classe

### DON'T (Non Fare)
- ❌ **Attributi inline** (onclick nell'HTML)
- ❌ **forEach con gestori** per ogni elemento
- ❌ **Dimenticare cleanup** (memory leaks)
- ❌ **Ignorare errori** nei gestori
- ❌ **Solo funzioni anonime** (non rimovibili)
- ❌ **Operazioni pesanti** in gestori eventi
- ❌ **Modifiche DOM massive** in loop
- ❌ **Gestori senza tracciamento** in SPA

---

## 🚀 Come Usare Questi Esempi

1. **Apri i file HTML** direttamente nel browser
2. **Interagisci** con i controlli per vedere gli eventi in azione
3. **Controlla i log** in fondo a ogni sezione per capire cosa succede
4. **Apri la console** del browser (F12) per log dettagliati
5. **Modifica il codice** per sperimentare variazioni

---

## 🎓 Percorso di Apprendimento Consigliato

1. **Inizia con 02.01** - Impara i tre metodi di registrazione
2. **Prosegui con 02.02** - Capisci come rimuovere correttamente
3. **Studia 02.03** - Padroneggia arrow functions e this
4. **Applica 02.04** - Implementa event delegation
5. **Completa con 02.05** - Segui le best practices

---

## 📝 Note Importanti

### Compatibilità Browser
Tutti gli esempi usano API moderne supportate da:
- ✅ Chrome/Edge 60+
- ✅ Firefox 55+
- ✅ Safari 11+
- ✅ Opera 47+

### Performance
- Event delegation riduce memoria fino a 95%
- Opzione `passive: true` migliora scroll smoothness
- Rimozione gestori previene memory leaks in SPA

### Debugging
```javascript
// Mostra tutti i gestori di un elemento (Chrome DevTools)
getEventListeners(element);

// Log eventi per debugging
element.addEventListener('click', (e) => {
  console.log('Event:', e);
  console.log('Target:', e.target);
  console.log('CurrentTarget:', e.currentTarget);
  console.log('This:', this);
});
```

---

## 🔗 Collegamenti

- [Guida 01: Introduzione Eventi](../README_01_Introduzione_Eventi.md)
- [Guida 03: Propagazione Eventi](../teoria/03_Propagazione_Eventi.md)
- [Torna all'indice principale](../../README.md)

---

## 📚 Risorse Aggiuntive

- [MDN: addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN: removeEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)
- [MDN: Event.preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
- [Event Delegation Guide](https://javascript.info/event-delegation)

---

**Nota:** Questi file sono HTML standalone e non richiedono Node.js o build tools. Aprili direttamente nel browser per iniziare!
