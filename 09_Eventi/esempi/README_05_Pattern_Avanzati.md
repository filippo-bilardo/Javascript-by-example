# 05 - Pattern Avanzati per la Gestione Eventi

Questa guida presenta pattern architetturali avanzati per gestire eventi in applicazioni JavaScript complesse. Imparerai tecniche professionali usate in framework moderni come React, Vue e Angular.

## 📚 Indice Esempi

### [05.01 - Pattern Pub/Sub (EventBus)](esempi/05.01_pubsub_eventbus.html)
Sistema Publisher/Subscriber per disaccoppiare componenti e comunicazione event-driven.

### [05.02 - Event Delegation Avanzata](esempi/05.02_delegation_avanzata.html)
Tecniche avanzate di delegation con closest(), pattern data-action e performance optimization.

### [05.03 - Throttling e Debouncing](esempi/05.03_throttle_debounce.html)
Controllo della frequenza di esecuzione: throttle per eventi continui, debounce per input utente.

### [05.04 - Custom Events e Component System](esempi/05.04_custom_events_components.html)
CustomEvent avanzati, EventTarget extension e sistema di componenti comunicanti.

### [05.05 - Eventi con Promises/Async-Await](esempi/05.05_promises_events.html)
Wrappare eventi in Promises, form multi-step, caricamento risorse con Promise.all.

### [05.06 - State Management con Eventi](esempi/05.06_state_management.html)
Store pattern Redux-like, reducer, dispatch/subscribe, time-travel debugging.

---

## 🎯 Ordine di Studio Consigliato

1. **EventBus (05.01)** - Capire il pattern Pub/Sub per disaccoppiare componenti
2. **Delegation Avanzata (05.02)** - Ottimizzare gestione eventi con delegation
3. **Throttle/Debounce (05.03)** - Controllare la frequenza di esecuzione
4. **Custom Events (05.04)** - Creare API event-driven per componenti
5. **Promises (05.05)** - Combinare eventi con async/await
6. **State Management (05.06)** - Gestire stato applicazione con pattern Redux

---

## 📖 Concetti Fondamentali

### 1. Pattern Pub/Sub (Publisher/Subscriber)

Sistema per disaccoppiare publisher e subscriber: chi pubblica eventi non conosce chi li ascolta.

```javascript
// EventBus Implementation
class EventBus {
    constructor() {
        this.subscribers = {};
    }
    
    // Subscribe restituisce funzione unsubscribe
    subscribe(event, callback) {
        if (!this.subscribers[event]) {
            this.subscribers[event] = [];
        }
        this.subscribers[event].push(callback);
        
        // Return unsubscribe function
        return () => {
            this.subscribers[event] = this.subscribers[event]
                .filter(cb => cb !== callback);
        };
    }
    
    // Publish notifica tutti i subscribers
    publish(event, data) {
        if (!this.subscribers[event]) return;
        
        this.subscribers[event].forEach(callback => {
            callback(data);
        });
    }
}

// Utilizzo
const eventBus = new EventBus();

// Component A: Subscribe
const unsubscribe = eventBus.subscribe('userLoggedIn', (user) => {
    console.log('User logged in:', user);
    updateUI(user);
});

// Component B: Publish (non conosce Component A)
eventBus.publish('userLoggedIn', { 
    name: 'Mario', 
    email: 'mario@example.com' 
});

// Cleanup quando non serve più
unsubscribe();
```

**Vantaggi:**
- ✅ Componenti completamente disaccoppiati
- ✅ Facile aggiungere/rimuovere subscriber
- ✅ Testabile: ogni componente testabile indipendentemente
- ✅ Scalabile: nuovo componente = nuova subscription

---

### 2. Event Delegation Avanzata

Usare `closest()` per delegation robusta e pattern `data-action` per routing.

```javascript
// Helper delegateEvent con closest()
function delegateEvent(parent, eventType, selector, handler) {
    parent.addEventListener(eventType, (event) => {
        // closest() trova l'antenato che matcha il selector
        const target = event.target.closest(selector);
        
        if (target && parent.contains(target)) {
            // Chiama handler con target corretto
            handler.call(target, event, target);
        }
    });
}

// Utilizzo: gestisce anche click su elementi interni
delegateEvent(document.body, 'click', 'button', (event, button) => {
    console.log('Button clicked:', button);
    // Funziona anche se clicchi su <span> dentro il button!
});

// Pattern data-action per action routing
const actionHandlers = {
    'edit': (event, element) => {
        const id = element.dataset.id;
        editItem(id);
    },
    
    'delete': (event, element) => {
        const id = element.dataset.id;
        deleteItem(id);
    },
    
    'view': (event, element) => {
        const id = element.dataset.id;
        viewItem(id);
    }
};

// Un solo listener gestisce tutte le azioni
document.addEventListener('click', (event) => {
    const action = event.target.dataset.action;
    
    if (action && actionHandlers[action]) {
        actionHandlers[action](event, event.target);
    }
});

// HTML
// <button data-action="edit" data-id="123">Edit</button>
// <button data-action="delete" data-id="123">Delete</button>
```

**Benefici Performance:**
- 1000 elementi = 1 listener invece di 1000
- Meno memoria occupata (~0.5KB per listener risparmiato)
- Elementi dinamici funzionano automaticamente
- Più veloce registrazione eventi

---

### 3. Throttling e Debouncing

Controllo della frequenza di esecuzione delle funzioni.

```javascript
// THROTTLE: Esegue REGOLARMENTE durante evento
// Utile per: scroll, resize, mouse move
function throttle(func, limit) {
    let inThrottle;
    
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    };
}

// DEBOUNCE: Esegue DOPO che evento si ferma
// Utile per: search input, form validation, window resize finale
function debounce(func, delay) {
    let timeout;
    
    return function(...args) {
        clearTimeout(timeout);
        
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Esempi utilizzo
window.addEventListener('scroll', throttle(() => {
    updateScrollProgress();
    // Eseguito ogni 200ms mentre scrolla
}, 200));

searchInput.addEventListener('input', debounce((e) => {
    searchAPI(e.target.value);
    // Eseguito 500ms DOPO che utente smette di scrivere
}, 500));
```

**Quando usare:**
| Tecnica | Quando | Esempi |
|---------|--------|--------|
| **Throttle** | Tracking continuo durante evento | scroll progress, resize, mouse tracking |
| **Debounce** | Aspettare che utente finisca | search input, form validation, autocomplete |
| **Nessuno** | ⚠️ Evita con eventi ad alta frequenza | mousemove, scroll, resize senza ottimizzazione |

---

### 4. Custom Events Avanzati

CustomEvent con dati complessi e EventTarget extension.

```javascript
// CustomEvent con detail
const event = new CustomEvent('userLoggedIn', {
    detail: {
        userId: 123,
        username: 'mario',
        permissions: ['read', 'write', 'admin'],
        loginTime: Date.now()
    },
    bubbles: true,      // Event bubbles up
    cancelable: true,   // preventDefault() possibile
    composed: false     // Non attraversa shadow DOM
});

element.dispatchEvent(event);

// Listener accede a detail
element.addEventListener('userLoggedIn', (e) => {
    console.log('User:', e.detail.username);
    console.log('Permissions:', e.detail.permissions);
    // Tutti i dati disponibili tramite e.detail
});

// Estendere EventTarget per classi event-driven
class ShoppingCart extends EventTarget {
    constructor() {
        super();
        this.items = [];
    }
    
    addItem(item) {
        this.items.push(item);
        
        // Dispatch evento
        this.dispatchEvent(new CustomEvent('itemAdded', {
            detail: {
                item,
                cartSize: this.items.length,
                total: this.getTotal()
            }
        }));
    }
    
    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }
}

// Utilizzo
const cart = new ShoppingCart();

cart.addEventListener('itemAdded', (e) => {
    console.log(`Added ${e.detail.item.name}`);
    updateCartUI(e.detail.cartSize);
});

cart.addItem({ id: 1, name: 'Product', price: 29.99 });
```

**Vantaggi CustomEvent:**
- ✅ Dati complessi tramite `detail`
- ✅ API pulita per componenti
- ✅ Type-safe con TypeScript
- ✅ Testabile facilmente

---

### 5. Eventi con Promises e Async/Await

Wrappare eventi in Promises per codice asincrono più leggibile.

```javascript
// Helper: Wrap evento in Promise
function waitForEvent(element, eventName, timeout = 5000) {
    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
            element.removeEventListener(eventName, handler);
            reject(new Error(`Timeout waiting for ${eventName}`));
        }, timeout);
        
        const handler = (event) => {
            clearTimeout(timeoutId);
            element.removeEventListener(eventName, handler);
            resolve(event);
        };
        
        element.addEventListener(eventName, handler, { once: true });
    });
}

// Form multi-step con async/await
async function handleMultiStepForm() {
    try {
        // Step 1: Aspetta submit
        console.log('Waiting for form submit...');
        const submitEvent = await waitForEvent(form, 'submit');
        submitEvent.preventDefault();
        
        const formData = new FormData(submitEvent.target);
        
        // Step 2: Aspetta conferma utente
        console.log('Waiting for user confirmation...');
        await waitForEvent(confirmButton, 'click');
        
        // Step 3: Invia dati
        const response = await fetch('/api/submit', {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(formData))
        });
        
        console.log('Form submitted successfully!');
        
    } catch (error) {
        console.error('Form submission failed:', error);
    }
}

// Promise.all per caricare multiple risorse
function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load ${src}`));
        img.src = src;
    });
}

async function loadImageGallery(urls) {
    try {
        // Carica tutte in parallelo
        const images = await Promise.all(
            urls.map(url => loadImage(url))
        );
        
        console.log(`Loaded ${images.length} images`);
        return images;
        
    } catch (error) {
        console.error('Failed to load gallery:', error);
    }
}

// Promise.race per timeout o fastest mirror
async function fetchWithTimeout(url, timeout = 3000) {
    const fetchPromise = fetch(url);
    const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Timeout')), timeout)
    );
    
    return Promise.race([fetchPromise, timeoutPromise]);
}
```

**Use Cases:**
- ✅ Form multi-step con validazione asincrona
- ✅ Preloading immagini/video con feedback
- ✅ Animazioni sequenziali
- ✅ User interaction flows complessi

---

### 6. State Management Pattern (Redux-like)

Store centralizzato con reducer pattern per gestire stato applicazione.

```javascript
// Store Implementation
class Store extends EventTarget {
    constructor(reducer, initialState = {}) {
        super();
        this.reducer = reducer;
        this.state = initialState;
        this.history = [initialState]; // Per time-travel debugging
        this.historyIndex = 0;
    }
    
    // Get current state (read-only)
    getState() {
        return { ...this.state };
    }
    
    // Dispatch action
    dispatch(action) {
        const prevState = this.state;
        
        // Apply reducer (pure function)
        this.state = this.reducer(this.state, action);
        
        // Add to history
        this.history.push(this.state);
        this.historyIndex++;
        
        // Emit statechange event
        this.dispatchEvent(new CustomEvent('statechange', {
            detail: {
                action,
                prevState,
                currentState: this.state
            }
        }));
        
        return this.state;
    }
    
    // Subscribe to state changes
    subscribe(callback) {
        this.addEventListener('statechange', (e) => {
            callback(e.detail.currentState, e.detail.action);
        });
    }
}

// Todo Reducer (pure function)
function todoReducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, {
                    id: Date.now(),
                    text: action.payload.text,
                    completed: false
                }]
            };
            
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
            };
            
        case 'REMOVE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => 
                    todo.id !== action.payload.id
                )
            };
            
        default:
            return state;
    }
}

// Create store
const store = new Store(todoReducer, {
    todos: [],
    filter: 'ALL'
});

// Subscribe to changes
store.subscribe((state, action) => {
    console.log('State changed:', state);
    renderUI(state);
});

// Dispatch actions
store.dispatch({
    type: 'ADD_TODO',
    payload: { text: 'Learn Redux' }
});

store.dispatch({
    type: 'TOGGLE_TODO',
    payload: { id: 1 }
});
```

**Principi Redux:**
1. **Single Source of Truth**: Uno store per tutta l'app
2. **State is Read-Only**: Solo dispatch può cambiare stato
3. **Changes via Pure Functions**: Reducer sono pure functions
4. **Immutability**: Ogni dispatch crea nuovo state

---

## 🚨 Errori Comuni e Soluzioni

### 1. EventBus: Memory Leaks per Mancato Unsubscribe

```javascript
// ❌ MALE: Non unsubscribe
class Component {
    constructor(eventBus) {
        eventBus.subscribe('event', this.handleEvent);
    }
    
    destroy() {
        // Listener rimane! Memory leak!
    }
}

// ✅ BENE: Salva unsubscribe e chiama in cleanup
class Component {
    constructor(eventBus) {
        this.unsubscribe = eventBus.subscribe('event', this.handleEvent);
    }
    
    destroy() {
        this.unsubscribe(); // Cleanup
    }
}
```

### 2. Delegation: Dimenticare closest() per Elementi Interni

```javascript
// ❌ MALE: Non funziona se clicchi su <span> nel button
parent.addEventListener('click', (e) => {
    if (e.target.matches('button')) {
        // Non funziona se target è <span> dentro button
    }
});

// ✅ BENE: closest() trova button anche se click su span
parent.addEventListener('click', (e) => {
    const button = e.target.closest('button');
    if (button && parent.contains(button)) {
        // Funziona sempre!
    }
});
```

### 3. Throttle/Debounce: Creare Nuova Funzione Ogni Volta

```javascript
// ❌ MALE: Crea nuova funzione throttled ad ogni render
function render() {
    element.addEventListener('scroll', throttle(() => {
        // Nuovo throttle ogni volta = non funziona!
    }, 200));
}

// ✅ BENE: Crea throttle una sola volta
const handleScroll = throttle(() => {
    updateScrollProgress();
}, 200);

element.addEventListener('scroll', handleScroll);
```

### 4. CustomEvent: Dimenticare detail

```javascript
// ❌ MALE: Dati non accessibili
const event = new CustomEvent('myEvent', {
    data: { value: 123 } // ⚠️ data non esiste!
});

// ✅ BENE: Usa detail
const event = new CustomEvent('myEvent', {
    detail: { value: 123 } // ✅ Accessibile via e.detail
});
```

### 5. Promises: Non Gestire Rejection

```javascript
// ❌ MALE: Rejection non gestita
async function loadData() {
    const event = await waitForEvent(element, 'load');
    // Se timeout, crash!
}

// ✅ BENE: try/catch per gestire errori
async function loadData() {
    try {
        const event = await waitForEvent(element, 'load', 5000);
        processData(event);
    } catch (error) {
        console.error('Failed to load:', error);
        showErrorMessage();
    }
}
```

### 6. Reducer: Mutare State invece di Crearne Nuovo

```javascript
// ❌ MALE: Muta state esistente
function reducer(state, action) {
    state.todos.push(newTodo); // ⚠️ MUTATION!
    return state;
}

// ✅ BENE: Crea nuovo state immutabile
function reducer(state, action) {
    return {
        ...state,
        todos: [...state.todos, newTodo] // ✅ Nuovo array
    };
}
```

### 7. Store: Subscribe in Loop

```javascript
// ❌ MALE: Subscribe nella funzione subscribe = loop infinito
store.subscribe((state) => {
    store.dispatch({ type: 'UPDATE' }); // ⚠️ LOOP!
});

// ✅ BENE: Non dispatch dentro subscribe
store.subscribe((state) => {
    updateUI(state); // Solo side effects
});
```

---

## ✅ Best Practices

### 1. EventBus per Componenti Disaccoppiati

```javascript
// Usa EventBus per comunicazione tra componenti non correlati
// Perfetto per: notifiche, analytics, logging, state sync

class NotificationService {
    constructor(eventBus) {
        // Listen to tutti gli eventi rilevanti
        eventBus.subscribe('user:login', () => {
            this.show('Welcome back!');
        });
        
        eventBus.subscribe('error', (error) => {
            this.show(error.message, 'error');
        });
    }
}

// Componenti non conoscono NotificationService
// ma i loro eventi triggherano notifiche!
```

### 2. Throttle per Tracking Continuo, Debounce per Input

```javascript
// Throttle: Voglio aggiornamenti DURANTE l'evento
window.addEventListener('scroll', throttle(() => {
    updateScrollProgress(); // Ogni 200ms mentre scrolla
    trackScrollDepth();
}, 200));

// Debounce: Voglio aggiornamento DOPO che utente finisce
searchInput.addEventListener('input', debounce((e) => {
    searchAPI(e.target.value); // Solo quando smette di scrivere
}, 500));
```

### 3. CustomEvent per API Componenti

```javascript
// Usa CustomEvent per creare API chiare
class DatePicker extends HTMLElement {
    selectDate(date) {
        this.selectedDate = date;
        
        // Emit evento invece di callback
        this.dispatchEvent(new CustomEvent('dateSelected', {
            detail: { date },
            bubbles: true // Permette delegation
        }));
    }
}

// Utilizzo pulito
datePicker.addEventListener('dateSelected', (e) => {
    console.log('Selected:', e.detail.date);
});
```

### 4. waitForEvent per Flussi Complessi

```javascript
// Usa waitForEvent per sequenze di interazioni
async function onboardingFlow() {
    // Step 1
    await showMessage('Welcome! Click to continue');
    await waitForEvent(continueButton, 'click');
    
    // Step 2
    await showMessage('Enter your name');
    const inputEvent = await waitForEvent(nameInput, 'input');
    const name = inputEvent.target.value;
    
    // Step 3
    await showMessage(`Hi ${name}! Click to finish`);
    await waitForEvent(finishButton, 'click');
    
    completeOnboarding();
}
```

### 5. Store per Stato Applicazione Complesso

```javascript
// Usa Store quando:
// - Molti componenti condividono stato
// - Serve time-travel debugging
// - Vuoi separare logica da UI

const store = new Store(appReducer, initialState);

// Tutti i componenti subscribe allo stesso store
const header = new Header(store);
const sidebar = new Sidebar(store);
const content = new Content(store);

// Ogni dispatch aggiorna tutti automaticamente
store.dispatch({ type: 'USER_LOGIN', payload: user });
```

---

## 🎯 Esercizi Pratici

### Esercizio 1: Chat Application con EventBus
Crea un'applicazione chat con:
- EventBus per messaggi tra componenti
- Componente MessageList (visualizza messaggi)
- Componente MessageInput (invia messaggi)
- Componente UserList (mostra utenti online)
- Componente Notifications (notifiche nuovi messaggi)

Eventi: `message:sent`, `message:received`, `user:joined`, `user:left`

### Esercizio 2: Infinite Scroll con Throttle
Implementa infinite scroll che:
- Usa throttle per check scroll position (ogni 200ms)
- Carica più dati quando vicino al fondo
- Mostra loading indicator durante caricamento
- Gestisce errori di rete
- Impedisce multiple chiamate simultanee

### Esercizio 3: Search con Debounce e Highlights
Crea search box con:
- Debounce 300ms su input
- Chiamata API per risultati
- Highlight termini di ricerca nei risultati
- Loading indicator durante ricerca
- Cancellazione richieste precedenti (AbortController)
- Gestione keyboard (Arrow up/down, Enter, Escape)

### Esercizio 4: Drag & Drop con Custom Events
Sistema drag & drop con:
- CustomEvent per `dragStart`, `dragMove`, `dragEnd`
- Possibilità di cancellare drag con `event.preventDefault()`
- Visual feedback durante drag
- Drop zones con validazione
- Undo/redo per riorganizzazione

### Esercizio 5: Image Gallery Loader con Promises
Gallery con preloading che:
- Usa `Promise.all` per caricare batch di immagini
- Mostra progress bar durante caricamento
- Gestisce errori singole immagini senza bloccare tutto
- Lazy loading per immagini fuori viewport
- Thumbnail → Full size con transizione smooth

### Esercizio 6: Todo App con Time-Travel
Todo app completa con:
- Store pattern Redux-like
- Actions: ADD, TOGGLE, REMOVE, FILTER
- Filters: ALL, ACTIVE, COMPLETED
- Time-travel debugging (undo/redo)
- Persistent state in localStorage
- Import/export JSON

---

## 🔗 Risorse Esterne

### Documentazione Ufficiale
- [MDN: CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)
- [MDN: EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)
- [MDN: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

### Pattern e Architetture
- [Redux Documentation](https://redux.js.org/) - State management pattern
- [Observer Pattern](https://refactoring.guru/design-patterns/observer) - Design pattern
- [Pub/Sub Pattern](https://www.patterns.dev/posts/observer-pattern/) - Pub/Sub spiegato

### Performance
- [JavaScript Event Loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ) - Come funziona event loop
- [Debouncing and Throttling](https://css-tricks.com/debouncing-throttling-explained-examples/) - Ottimizzazione eventi
- [lodash](https://lodash.com/docs#throttle) - Libreria con throttle/debounce ottimizzati

### Framework Comparisons
- [React Events](https://react.dev/learn/responding-to-events) - Come React gestisce eventi
- [Vue Events](https://vuejs.org/guide/essentials/event-handling.html) - Event handling in Vue
- [Svelte Events](https://svelte.dev/docs#template-syntax-element-directives-on-eventname) - Eventi in Svelte

---

## 🎓 Conclusioni

Hai completato la guida sui **Pattern Avanzati**! Ora sai:

✅ **EventBus** per disaccoppiare componenti con Pub/Sub  
✅ **Event Delegation** avanzata con closest() e data-action  
✅ **Throttle/Debounce** per ottimizzare performance  
✅ **CustomEvent** per creare API event-driven  
✅ **Promises con Eventi** per codice asincrono leggibile  
✅ **State Management** con pattern Redux  

### Prossimi Passi

1. **Pratica**: Implementa gli esercizi proposti
2. **Progetti**: Applica questi pattern nei tuoi progetti
3. **Framework**: Studia come React/Vue/Angular implementano questi concetti
4. **Librerie**: Esplora Redux, MobX, Zustand per state management avanzato
5. **Testing**: Impara a testare codice event-driven (Jest, Vitest)

### Pattern per Livello Applicazione

| Dimensione App | Pattern Consigliati |
|----------------|---------------------|
| **Piccola** (< 1000 righe) | Event delegation, Throttle/Debounce |
| **Media** (1000-5000 righe) | + EventBus, CustomEvent |
| **Grande** (> 5000 righe) | + State Management, considara framework |
| **Molto Grande** | Framework (React/Vue/Angular) con state management library |

---

**Complimenti!** 🎉 Hai completato l'intero corso **JavaScript Events**!

Ora hai una comprensione completa degli eventi JavaScript, dalle basi (addEventListener) ai pattern architetturali avanzati usati in applicazioni production.

🚀 **Continua ad imparare e costruire progetti fantastici!**

