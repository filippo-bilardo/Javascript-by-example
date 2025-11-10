# 📚 Guida 03 - Propagazione degli Eventi

Questa guida copre tutti gli aspetti della propagazione degli eventi nel DOM, dal meccanismo base delle tre fasi fino ai metodi per controllarla e alle tecniche avanzate di delegazione.

## 📋 Indice degli Esempi

### 03.01 - Le Tre Fasi della Propagazione
**File:** `03.01_fasi_propagazione.html`

Dimostrazione completa delle tre fasi di propagazione degli eventi nel DOM.

**Contenuti:**
- 📊 Diagramma delle Tre Fasi (Capture → Target → Bubbling)
- 🎯 Demo Interattiva con Box Annidati
- 🎬 Visualizzazione Animata del Flusso Eventi
- ⚖️ Confronto Capture vs Bubbling Side-by-Side
- 🔢 Proprietà event.eventPhase (1, 2, 3)
- 📝 Ordine di Esecuzione Completo (18 gestori)

**Concetti Chiave:**
```javascript
// Fase 1: CAPTURING (discesa da window)
element.addEventListener('click', handler, { capture: true });

// Fase 2: AT_TARGET (elemento target)
element.addEventListener('click', handler);

// Fase 3: BUBBLING (risalita verso window)
element.addEventListener('click', handler, { capture: false });
```

**Quando Usarlo:**
- Capire il flusso completo degli eventi nel DOM
- Decidere quale fase usare per i gestori
- Debugging problemi di propagazione

---

### 03.02 - Controllo della Propagazione
**File:** `03.02_controllo_propagazione.html`

Metodi per controllare e fermare la propagazione degli eventi.

**Contenuti:**
- 🛑 stopPropagation() - Ferma propagazione
- ⛔ stopImmediatePropagation() - Ferma tutto
- 🚫 preventDefault() - Blocca azione default
- 📊 Confronto dei Tre Metodi
- 📝 Validazione Form Pratica
- ⚠️ return false (jQuery style)

**Concetti Chiave:**
```javascript
// stopPropagation - ferma propagazione
element.addEventListener('click', function(event) {
    event.stopPropagation(); // Altri elementi non ricevono evento
    // Altri gestori su QUESTO elemento: ✅ Eseguiti
});

// stopImmediatePropagation - ferma TUTTO
element.addEventListener('click', function(event) {
    event.stopImmediatePropagation(); // STOP totale!
    // Altri gestori su QUESTO elemento: ❌ NON eseguiti
});

// preventDefault - blocca azione default (ma propagazione continua!)
link.addEventListener('click', function(event) {
    event.preventDefault(); // Link non naviga
    // Propagazione: ✅ Continua normalmente
});
```

**Differenze Chiave:**

| Metodo | Propagazione | Altri Gestori Stesso Elemento | Azione Default |
|--------|-------------|-------------------------------|----------------|
| `stopPropagation()` | ❌ Fermata | ✅ Eseguiti | ✅ Eseguita |
| `stopImmediatePropagation()` | ❌ Fermata | ❌ Non eseguiti | ✅ Eseguita |
| `preventDefault()` | ✅ Continua | ✅ Eseguiti | ❌ Bloccata |

**Quando Usarlo:**
- Impedire che eventi raggiungano container
- Bloccare comportamenti default (link, form)
- Gestire validazione con controllo fine

---

### 03.03 - Delegazione Avanzata
**File:** `03.03_delegazione_avanzata.html`

Pattern avanzati di event delegation con data attributes.

**Contenuti:**
- 📝 Todo List con data-action
- 📊 Tabella Editabile Dinamica
- 🍔 Menu con data-role e data-disabled
- 🛒 E-commerce Product Grid
- ⚡ Test Performance (Delegazione vs Gestori Multipli)
- 🔀 Delegation Router Pattern

**Concetti Chiave:**
```javascript
// Pattern con data-action
container.addEventListener('click', function(event) {
    const action = event.target.dataset.action;
    
    switch(action) {
        case 'edit': editItem(event.target); break;
        case 'delete': deleteItem(event.target); break;
        case 'toggle': toggleItem(event.target); break;
    }
});

// Routing Pattern avanzato
const routes = {
    'user/create': (params) => createUser(params),
    'product/update': (params) => updateProduct(params)
};

container.addEventListener('click', function(event) {
    const route = event.target.dataset.route;
    const params = JSON.parse(event.target.dataset.params);
    
    if (routes[route]) {
        routes[route](params);
    }
});
```

**Vantaggi della Delegazione:**
- 🚀 Migliori performance (meno gestori in memoria)
- 🔄 Gestione automatica elementi dinamici
- 🧹 Codice più pulito e manutenibile
- 💾 Risparmio memoria significativo

**Quando Usarlo:**
- Liste dinamiche (todo, tabelle, card)
- Grids con molti elementi (prodotti, gallerie)
- Menu e navigation complessi
- Sistemi con elementi aggiunti/rimossi dinamicamente

---

### 03.04 - closest() e matches()
**File:** `03.04_closest_matches.html`

Metodi essenziali per event delegation e navigazione DOM.

**Contenuti:**
- 🔍 closest() - Trova Antenato più Vicino
- ✅ matches() - Verifica Selettore
- ⚖️ Confronto closest() vs matches()
- 🎯 Pattern: Delegation con closest()
- 📝 Validazione Form con closest()
- 🧪 Selettori CSS Complessi

**Concetti Chiave:**
```javascript
// closest() - Risale l'albero DOM
button.addEventListener('click', function(event) {
    const card = event.target.closest('.card');
    const cardId = card.dataset.id;
    // Trova il primo antenato che corrisponde
});

// matches() - Test su elemento corrente
container.addEventListener('click', function(event) {
    if (event.target.matches('.delete-btn')) {
        // Verifica se elemento corrisponde al selettore
        deleteItem(event.target);
    }
});

// Combinazione perfetta per delegation
container.addEventListener('click', function(event) {
    const card = event.target.closest('.card');
    if (!card) return; // Click fuori dalle card
    
    if (event.target.matches('.edit-btn')) {
        editCard(card);
    }
});
```

**Differenze Chiave:**

| | closest(selector) | matches(selector) |
|---|---|---|
| **Cosa fa** | Risale l'albero DOM | Test su elemento stesso |
| **Cerca** | Antenati (parents) | Solo se stesso |
| **Include se stesso** | ✅ Sì | Solo se stesso |
| **Ritorna** | Element o null | Boolean |
| **Uso** | Trova container | Filtra in delegation |

**Selettori Supportati:**
```javascript
element.closest('.class')              // Classe
element.closest('#id')                 // ID
element.closest('[data-id]')           // Attributo
element.closest('[type="button"]')     // Attributo con valore
element.closest('div.container')       // Tag + classe
element.matches('.active.selected')    // Multiple classi
element.matches(':not(.disabled)')     // Negazione
element.closest('[data-role="admin"]') // Data attribute specifico
```

**Quando Usarlo:**
- Event delegation su strutture complesse
- Navigazione verso container padre
- Validazione form per trovare form-group
- Filtraggio elementi in base a selettori

---

### 03.05 - Eventi Non-Bubbling
**File:** `03.05_eventi_non_bubbling.html`

Eventi che NON propagano e le loro alternative con bubbling.

**Contenuti:**
- 📋 Tabella Completa Eventi Non-Bubbling
- 🎯 focus vs focusin (Demo Pratica)
- 📝 Event Delegation con Focus (focusin/focusout)
- 🖱️ mouseenter vs mouseover
- 🖼️ Eventi load e error
- 📜 scroll Event

**Eventi Non-Bubbling:**

| Evento | Bubbling? | Alternativa con Bubbling | Uso |
|--------|-----------|-------------------------|-----|
| `focus` | ❌ NO | `focusin` ✅ | Input riceve focus |
| `blur` | ❌ NO | `focusout` ✅ | Input perde focus |
| `mouseenter` | ❌ NO | `mouseover` ✅ | Mouse entra |
| `mouseleave` | ❌ NO | `mouseout` ✅ | Mouse esce |
| `load` | ❌ NO | - | Risorsa caricata |
| `unload` | ❌ NO | - | Risorsa scaricata |
| `scroll` | ❌ NO | - | Elemento scrollato |
| `error` | ❌ NO | - | Errore caricamento |

**Concetti Chiave:**
```javascript
// ❌ SBAGLIATO - focus non propaga!
form.addEventListener('focus', function(event) {
    // Non verrà mai chiamato per input figli
});

// ✅ CORRETTO - focusin propaga!
form.addEventListener('focusin', function(event) {
    console.log('Focus su:', event.target.name);
    event.target.classList.add('focused');
});

// mouseenter vs mouseover
outer.addEventListener('mouseenter', function() {
    console.log('Outer enter'); // Solo quando entri nell'outer
});

outer.addEventListener('mouseover', function() {
    console.log('Outer over'); // Anche quando entri nell'inner!
});

// Eventi load/error (non propagano)
img.addEventListener('load', function() {
    console.log('Immagine caricata');
});

img.addEventListener('error', function() {
    this.src = 'fallback.jpg'; // Fallback
});
```

**Quando Usarlo:**
- Event delegation su form (usa focusin/focusout!)
- Hover effects (mouseenter per evitare propagazione eccessiva)
- Caricamento risorse (load/error direttamente su elementi)
- Scroll monitoring per singoli elementi

---

## 🎯 Pattern e Best Practices

### 1. Event Delegation Base
```javascript
// Pattern base con matches()
container.addEventListener('click', function(event) {
    if (event.target.matches('.btn-delete')) {
        handleDelete(event.target);
    }
});
```

### 2. Event Delegation con closest()
```javascript
// Pattern con closest() per strutture complesse
container.addEventListener('click', function(event) {
    const item = event.target.closest('.list-item');
    if (!item) return; // Click fuori dagli item
    
    const button = event.target;
    if (button.matches('.btn-edit')) {
        editItem(item);
    }
});
```

### 3. Delegation con Data Attributes
```javascript
// Pattern con data-action
container.addEventListener('click', function(event) {
    const action = event.target.dataset.action;
    if (!action) return;
    
    const item = event.target.closest('[data-id]');
    const id = item.dataset.id;
    
    handleAction(action, id);
});
```

### 4. Focus Management con Delegation
```javascript
// Usa focusin/focusout per delegazione
form.addEventListener('focusin', function(event) {
    if (event.target.matches('input, textarea')) {
        event.target.classList.add('focused');
    }
});

form.addEventListener('focusout', function(event) {
    if (event.target.matches('input, textarea')) {
        event.target.classList.remove('focused');
        validateField(event.target);
    }
});
```

### 5. Controllo Propagazione in Validazione
```javascript
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Blocca invio
    
    if (!isValid()) {
        event.stopPropagation(); // Ferma propagazione
        showErrors();
        return;
    }
    
    submitForm();
});
```

---

## ⚠️ Errori Comuni da Evitare

### ❌ 1. Usare focus invece di focusin per delegation
```javascript
// SBAGLIATO
form.addEventListener('focus', handler); // Non propaga!

// CORRETTO
form.addEventListener('focusin', handler); // Propaga!
```

### ❌ 2. Non verificare target in delegation
```javascript
// SBAGLIATO
container.addEventListener('click', function(event) {
    deleteItem(event.target); // Potrebbe essere qualsiasi elemento!
});

// CORRETTO
container.addEventListener('click', function(event) {
    if (event.target.matches('.delete-btn')) {
        const item = event.target.closest('.item');
        if (item) deleteItem(item);
    }
});
```

### ❌ 3. Usare return false con addEventListener
```javascript
// SBAGLIATO - return false non funziona!
button.addEventListener('click', function(event) {
    return false; // Non ha effetto!
});

// CORRETTO
button.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
});
```

### ❌ 4. Abusare di stopPropagation
```javascript
// SBAGLIATO - blocca altri gestori necessari
button.addEventListener('click', function(event) {
    event.stopPropagation(); // Troppo restrittivo!
});

// CORRETTO - usa solo quando necessario
button.addEventListener('click', function(event) {
    if (needsToStopPropagation()) {
        event.stopPropagation();
    }
});
```

---

## 🚀 Performance Tips

### 1. Preferisci Event Delegation
```javascript
// ❌ 1000 gestori in memoria
buttons.forEach(btn => {
    btn.addEventListener('click', handler);
});

// ✅ 1 solo gestore
container.addEventListener('click', function(event) {
    if (event.target.matches('button')) {
        handler(event);
    }
});
```

### 2. Usa mouseenter invece di mouseover quando possibile
```javascript
// mouseover - propaga (più eventi)
element.addEventListener('mouseover', handler);

// mouseenter - non propaga (meno eventi)
element.addEventListener('mouseenter', handler);
```

### 3. Debounce scroll events
```javascript
let scrollTimeout;
element.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        handleScroll();
    }, 100);
});
```

---

## 📚 Risorse Aggiuntive

### Documentazione MDN
- [Event.stopPropagation()](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation)
- [Event.preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
- [Element.closest()](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest)
- [Element.matches()](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches)
- [Event Delegation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_delegation)

### Articoli Consigliati
- JavaScript.info - Bubbling and Capturing
- JavaScript.info - Event Delegation
- David Walsh - Event Delegation

---

## 🎓 Ordine di Studio Consigliato

1. **03.01** - Comprendi le tre fasi (fondamentale!)
2. **03.02** - Impara a controllare la propagazione
3. **03.05** - Studia eventi non-bubbling e alternative
4. **03.04** - Padroneggia closest() e matches()
5. **03.03** - Applica delegazione avanzata

---

## 💡 Suggerimenti Pratici

1. **Quando usare capture phase:**
   - Intercettare eventi prima che raggiungano il target
   - Implementare filtri globali
   - Gestire keyboard shortcuts a livello documento

2. **Quando usare bubbling phase (default):**
   - Event delegation (99% dei casi)
   - Gestione normale degli eventi
   - Quando vuoi che eventi risalgano al container

3. **Quando NON usare stopPropagation:**
   - Analytics e tracking (possono dipendere dalla propagazione)
   - Librerie terze (potrebbero aver bisogno degli eventi)
   - Debugging (rende più difficile capire il flusso)

4. **Quando usare closest():**
   - Event delegation per trovare container
   - Navigazione verso elementi padre specifici
   - Validazione form (trovare form-group)

5. **Quando usare matches():**
   - Filtrare eventi in delegation
   - Verificare se elemento ha certe caratteristiche
   - Condizioni complesse con selettori CSS

---

**Autore:** Filippo Bilardo  
**Corso:** TPSIT2 - Javascript by Example  
**Ultima modifica:** 2025-01-09
