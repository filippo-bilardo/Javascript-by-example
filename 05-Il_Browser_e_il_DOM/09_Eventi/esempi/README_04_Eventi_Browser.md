# 📚 Guida 04 - Eventi Browser

Questa guida esplora gli eventi specifici del browser, fondamentali per creare applicazioni web interattive e responsive.

## 📋 Indice Esempi

### [04.01 - Ciclo Vita Pagina](./04.01_ciclo_vita_pagina.html)
**Eventi del ciclo di vita della pagina e performance**
- Timeline eventi di caricamento (Script → DOMContentLoaded → load)
- Confronto DOMContentLoaded vs load
- beforeunload per conferma uscita (dati non salvati)
- unload per cleanup finale
- Performance API per monitoraggio metriche

**Concetti chiave:**
- DOMContentLoaded: DOM pronto, risorse ancora in caricamento
- load: Tutto caricato (immagini, CSS, script)
- beforeunload: Previene navigazione accidentale
- Performance.timing per metriche di caricamento

---

### [04.02 - Eventi Finestra](./04.02_eventi_finestra.html)
**Eventi di ridimensionamento, scroll e connessione**
- resize con contatore eventi raw, throttled, debounced
- scroll con progress bar e direzione
- online/offline per stato connessione
- Throttling vs Debouncing a confronto
- Responsive breakpoints detection

**Concetti chiave:**
- Throttling: Esegue al massimo ogni X ms
- Debouncing: Esegue dopo X ms di silenzio
- Eventi ad alta frequenza richiedono ottimizzazione
- Breakpoints responsive con JavaScript

---

### [04.03 - Navigazione e Visibilità](./04.03_navigazione_visibilita.html)
**Navigation API e gestione visibilità tab**
- popstate per History API (back/forward del browser)
- hashchange per routing basato su hash (#section)
- visibilitychange per rilevare tab nascosto/visibile
- Single Page Application demo con navigation
- Auto-pause video quando si cambia tab

**Concetti chiave:**
- history.pushState per navigation senza reload
- popstate si attiva solo con back/forward
- visibilitychange per ottimizzare risorse
- Pausa video/polling quando tab nascosto

---

### [04.04 - Media e Animazioni](./04.04_media_animazioni.html)
**Eventi media player e animazioni CSS**
- play, pause, ended per controllo video/audio
- timeupdate per progress bar (~ ogni 250ms)
- animationstart, animationend, animationiteration
- transitionend per rilevare fine transizioni
- Image load/error per caricamento risorse
- Audio visualizer simulato

**Concetti chiave:**
- timeupdate si attiva frequentemente durante riproduzione
- event.animationName identifica quale animazione
- event.propertyName per transizioni specifiche
- Preloading immagini con Promise.all

---

### [04.05 - Storage, Clipboard e Drag & Drop](./04.05_storage_clipboard_drag.html)
**Storage sync, clipboard personalizzato e drag-drop**
- storage event per sincronizzazione tra tab
- copy event per aggiungere attribution automatica
- paste event per validare/processare contenuto
- Drag and Drop completo con dragstart/dragover/drop
- File upload tramite drag-drop

**Concetti chiave:**
- storage event si attiva SOLO nelle altre tab
- clipboardData per modificare copia/incolla
- preventDefault() necessario in dragover per permettere drop
- dataTransfer API per passare dati nel drag-drop

---

## 🎯 Ordine di Studio Consigliato

1. **04.01 - Ciclo Vita Pagina** ⭐ Fondamentale
   - Comprendere quando il DOM è pronto
   - Differenza tra DOMContentLoaded e load
   - beforeunload per UX migliore

2. **04.02 - Eventi Finestra** ⭐⭐ Importante
   - Throttling e debouncing per performance
   - Responsive design con JavaScript
   - Gestione connessione online/offline

3. **04.03 - Navigazione e Visibilità** ⭐⭐
   - SPA navigation con History API
   - Ottimizzazione risorse con visibilitychange
   - Routing moderno vs hash-based

4. **04.04 - Media e Animazioni** ⭐
   - Controllo media player personalizzato
   - Sincronizzazione con animazioni CSS
   - Gestione caricamento risorse

5. **04.05 - Storage, Clipboard e Drag & Drop** ⭐
   - Sincronizzazione cross-tab
   - UX avanzata con clipboard
   - Interfacce drag-drop native

---

## 💡 Concetti Fondamentali

### 1. Eventi del Ciclo di Vita

```javascript
// DOMContentLoaded - DOM pronto (senza aspettare risorse)
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM ready!');
    initializeApp();  // Perfetto per inizializzazione app
});

// load - Tutto caricato (immagini, CSS, fonts, ecc.)
window.addEventListener('load', function() {
    console.log('Everything loaded!');
    hideLoader();  // Nascondi spinner di caricamento
});

// beforeunload - Previene navigazione accidentale
window.addEventListener('beforeunload', function(e) {
    if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = '';  // Chrome richiede questo
        return '';  // Altri browser
    }
});
```

### 2. Throttling vs Debouncing

```javascript
// THROTTLING - Esegue al massimo ogni X ms
function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            func(...args);
        }
    };
}

// Uso: scroll, resize, mousemove
window.addEventListener('scroll', throttle(function() {
    updateScrollPosition();
}, 100));  // Max 10 volte al secondo

// DEBOUNCING - Esegue dopo X ms di silenzio
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

// Uso: search input, resize finale, validazione
input.addEventListener('input', debounce(function() {
    searchAPI(this.value);
}, 300));  // Aspetta 300ms di pausa nella digitazione
```

### 3. History API per SPA

```javascript
// Navigazione programmatica
function navigateTo(page) {
    // Aggiungi alla history
    history.pushState(
        { page: page, data: {...} },  // State object
        '',  // Title (ignorato dai browser)
        `/page/${page}`  // URL (senza reload!)
    );
    
    renderPage(page);
}

// Listener per back/forward del browser
window.addEventListener('popstate', function(event) {
    console.log('User clicked back/forward');
    
    if (event.state) {
        renderPage(event.state.page);
    }
});

// ⚠️ NOTA: popstate NON si attiva con pushState!
// Si attiva SOLO con pulsanti back/forward del browser
```

### 4. visibilitychange per Ottimizzazione

```javascript
// Risparmia risorse quando tab è nascosto
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
        // Tab nascosto
        video.pause();
        clearInterval(pollingInterval);
        stopAnimations();
        
    } else {
        // Tab visibile
        video.play();
        pollingInterval = setInterval(fetchData, 5000);
        resumeAnimations();
    }
});

// Casi d'uso:
// - Pausa video/audio
// - Ferma polling API
// - Pausa animazioni
// - Salva batteria su mobile
// - Analytics (tempo effettivo sulla pagina)
```

### 5. Eventi Media

```javascript
const video = document.getElementById('video');

// Play/Pause
video.addEventListener('play', () => {
    playButton.textContent = '⏸️';
});

video.addEventListener('pause', () => {
    playButton.textContent = '▶️';
});

// Progress bar
video.addEventListener('timeupdate', () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.width = percent + '%';
    timeDisplay.textContent = formatTime(video.currentTime);
});

// Video terminato
video.addEventListener('ended', () => {
    video.currentTime = 0;
    playButton.textContent = '🔄';
});

// Metadati caricati (durata disponibile)
video.addEventListener('loadedmetadata', () => {
    console.log('Duration:', video.duration);
    totalTime.textContent = formatTime(video.duration);
});

// Errore caricamento
video.addEventListener('error', (e) => {
    console.error('Video error:', e);
    showErrorMessage('Video non disponibile');
});
```

### 6. Animazioni CSS

```javascript
const element = document.getElementById('box');

// Inizia animazione
element.addEventListener('animationstart', (e) => {
    console.log('Animation started:', e.animationName);
});

// Fine animazione
element.addEventListener('animationend', (e) => {
    console.log('Animation ended:', e.animationName);
    console.log('Duration:', e.elapsedTime);
    
    // Cleanup
    element.classList.remove('animated');
});

// Iterazione completata (per animation-iteration-count > 1)
element.addEventListener('animationiteration', (e) => {
    console.log('Iteration completed');
});

// Transizioni
element.addEventListener('transitionend', (e) => {
    console.log('Transition ended:', e.propertyName);
    
    // Puoi avere transizioni multiple
    if (e.propertyName === 'width') {
        console.log('Width transition done!');
    }
});
```

### 7. storage Event (Cross-Tab Sync)

```javascript
// ⚠️ IMPORTANTE: storage event si attiva SOLO nelle ALTRE tab!
window.addEventListener('storage', function(e) {
    console.log('Storage changed in another tab:');
    console.log('Key:', e.key);
    console.log('Old:', e.oldValue);
    console.log('New:', e.newValue);
    console.log('URL:', e.url);
    
    // Sincronizza UI
    if (e.key === 'userPreferences') {
        updateUI(JSON.parse(e.newValue));
    }
    
    // Sincronizza cache
    if (e.key === 'cart') {
        updateCartDisplay(JSON.parse(e.newValue));
    }
});

// Casi d'uso:
// - Sincronizzazione carrello e-commerce
// - Preferenze utente condivise
// - Notifiche tra tab
// - Logout simultaneo
// - Aggiornamenti in tempo reale
```

### 8. Clipboard API

```javascript
// COPIA - Modifica testo copiato
document.addEventListener('copy', function(e) {
    const selection = window.getSelection().toString();
    
    if (selection) {
        e.preventDefault();
        
        // Aggiungi attribution
        const text = selection + `\n\nFonte: ${document.title}`;
        e.clipboardData.setData('text/plain', text);
    }
});

// INCOLLA - Valida/processa contenuto
input.addEventListener('paste', function(e) {
    e.preventDefault();
    
    const pastedText = e.clipboardData.getData('text/plain');
    
    // Pulisci il testo
    const cleanText = pastedText
        .trim()
        .replace(/\s+/g, ' ')
        .replace(/[^\w\s]/gi, '');
    
    this.value = cleanText;
});

// Copia programmatica (moderna)
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        showToast('Copiato!');
    } catch (err) {
        console.error('Copy failed:', err);
    }
}

// Leggi clipboard (richiede permesso!)
async function readClipboard() {
    try {
        const text = await navigator.clipboard.readText();
        return text;
    } catch (err) {
        console.error('Read failed:', err);
    }
}
```

### 9. Drag and Drop Completo

```javascript
let draggedElement = null;

// ELEMENTO DRAGGABLE
element.addEventListener('dragstart', function(e) {
    draggedElement = this;
    
    // Imposta dati
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
    e.dataTransfer.setData('item-id', this.id);
    
    // Stile visuale
    this.style.opacity = '0.5';
});

element.addEventListener('dragend', function(e) {
    this.style.opacity = '';
});

// DROP ZONE
dropZone.addEventListener('dragover', function(e) {
    e.preventDefault();  // ⚠️ NECESSARIO per permettere drop!
    e.dataTransfer.dropEffect = 'move';
    this.classList.add('drag-over');
});

dropZone.addEventListener('dragleave', function(e) {
    this.classList.remove('drag-over');
});

dropZone.addEventListener('drop', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    // Ottieni dati
    const html = e.dataTransfer.getData('text/html');
    const itemId = e.dataTransfer.getData('item-id');
    
    // Sposta elemento
    this.appendChild(draggedElement);
    
    this.classList.remove('drag-over');
});
```

### 10. File Drop

```javascript
const dropZone = document.getElementById('dropZone');

// Previeni comportamento default
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
    });
});

// Highlight visuale
['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, () => {
        dropZone.classList.add('drag-over');
    });
});

['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, () => {
        dropZone.classList.remove('drag-over');
    });
});

// Gestisci file droppati
dropZone.addEventListener('drop', function(e) {
    const files = e.dataTransfer.files;
    
    [...files].forEach(file => {
        console.log('File:', file.name);
        console.log('Type:', file.type);
        console.log('Size:', file.size);
        
        // Preview immagini
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = document.createElement('img');
                img.src = e.target.result;
                preview.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
        
        // Upload file
        uploadFile(file);
    });
});

function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);
    
    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => console.log('Uploaded:', data));
}
```

---

## ⚠️ Errori Comuni

### 1. ❌ beforeunload non funziona

```javascript
// SBAGLIATO
window.addEventListener('beforeunload', function(e) {
    if (hasUnsavedChanges) {
        return 'Hai modifiche non salvate';  // Ignorato!
    }
});

// CORRETTO
window.addEventListener('beforeunload', function(e) {
    if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = '';  // Chrome richiede questo
        return '';  // Altri browser
        // Il messaggio è controllato dal browser, non puoi personalizzarlo
    }
});
```

### 2. ❌ popstate si attiva sempre

```javascript
// SBAGLIATO - popstate NON si attiva qui!
function navigate(page) {
    history.pushState({ page }, '', page);
    // popstate NON verrà chiamato!
    renderPage(page);  // Devi chiamare manualmente
}

// CORRETTO
function navigate(page) {
    history.pushState({ page }, '', page);
    renderPage(page);  // Chiamata esplicita
}

// popstate si attiva SOLO con:
// - Pulsante back del browser
// - Pulsante forward del browser
// - history.back()
// - history.forward()
// - history.go(n)
```

### 3. ❌ storage event nella stessa tab

```javascript
// SBAGLIATO - storage event NON si attiva qui!
localStorage.setItem('key', 'value');
// L'evento storage NON viene attivato nella tab corrente!

// CORRETTO - storage event si attiva SOLO nelle ALTRE tab
// Tab 1:
localStorage.setItem('counter', '42');  // Nessun evento qui

// Tab 2 (stesso dominio):
window.addEventListener('storage', function(e) {
    // Questo SI attiva! ✅
    console.log('Counter changed:', e.newValue);
});
```

### 4. ❌ Dimenticare preventDefault in dragover

```javascript
// SBAGLIATO - Drop non funzionerà!
dropZone.addEventListener('dragover', function(e) {
    this.classList.add('drag-over');
    // Manca e.preventDefault()!
});

// CORRETTO
dropZone.addEventListener('dragover', function(e) {
    e.preventDefault();  // ⚠️ NECESSARIO!
    e.dataTransfer.dropEffect = 'move';
    this.classList.add('drag-over');
});
```

### 5. ❌ Throttling/Debouncing errati

```javascript
// SBAGLIATO - Throttle non funziona
let lastTime = 0;
window.addEventListener('scroll', function() {
    const now = Date.now();
    if (now - lastTime > 100) {
        updatePosition();
        // Dimenticato: lastTime = now;
    }
});

// CORRETTO
let lastTime = 0;
window.addEventListener('scroll', function() {
    const now = Date.now();
    if (now - lastTime > 100) {
        lastTime = now;  // ✅ Aggiorna timestamp!
        updatePosition();
    }
});
```

### 6. ❌ timeupdate troppo frequente

```javascript
// SBAGLIATO - Aggiorna UI centinaia di volte!
video.addEventListener('timeupdate', function() {
    updateProgressBar();  // Chiamato ~4 volte al secondo!
    updateTimestamp();
    recalculateLayout();  // Costoso!
});

// CORRETTO - Throttle timeupdate
let lastUpdate = 0;
video.addEventListener('timeupdate', function() {
    const now = Date.now();
    if (now - lastUpdate > 250) {  // Max 4 volte al secondo
        lastUpdate = now;
        updateProgressBar();
        updateTimestamp();
    }
});
```

---

## 🎨 Best Practices

### 1. Ottimizzazione Performance

```javascript
// ✅ Throttle eventi ad alta frequenza
const throttledScroll = throttle(updateScrollPosition, 100);
window.addEventListener('scroll', throttledScroll);

// ✅ Debounce input utente
const debouncedSearch = debounce(searchAPI, 300);
searchInput.addEventListener('input', debouncedSearch);

// ✅ Use passive listeners per scroll/touch (non blocca rendering)
window.addEventListener('scroll', handleScroll, { passive: true });

// ✅ Rimuovi listener quando non servono più
function cleanup() {
    window.removeEventListener('scroll', throttledScroll);
    window.removeEventListener('resize', debouncedResize);
}
```

### 2. Gestione Risorse con visibilitychange

```javascript
// ✅ Ottimizza quando tab nascosto
let pollingInterval;
let wasPlaying = false;

document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
        // Ferma tutto
        clearInterval(pollingInterval);
        wasPlaying = !video.paused;
        video.pause();
        stopAnimations();
        
    } else {
        // Riprendi
        pollingInterval = setInterval(fetchData, 5000);
        if (wasPlaying) video.play();
        resumeAnimations();
    }
});
```

### 3. beforeunload per UX migliore

```javascript
// ✅ Avvisa solo se ci sono modifiche reali
let hasUnsavedChanges = false;

form.addEventListener('input', () => {
    hasUnsavedChanges = true;
});

form.addEventListener('submit', () => {
    hasUnsavedChanges = false;
});

window.addEventListener('beforeunload', (e) => {
    if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = '';
    }
});
```

### 4. History API per SPA

```javascript
// ✅ Gestione completa navigation
function initRouter() {
    // Popstate per back/forward
    window.addEventListener('popstate', (e) => {
        if (e.state) {
            renderPage(e.state.page, false);  // false = non pushare history
        }
    });
    
    // Link interni
    document.addEventListener('click', (e) => {
        if (e.target.matches('a[data-link]')) {
            e.preventDefault();
            const page = e.target.getAttribute('href');
            navigateTo(page);
        }
    });
}

function navigateTo(page, pushState = true) {
    if (pushState) {
        history.pushState({ page }, '', page);
    }
    renderPage(page);
}
```

### 5. Drag and Drop Accessibile

```javascript
// ✅ Fornisci alternative keyboard
element.setAttribute('draggable', 'true');
element.setAttribute('role', 'button');
element.setAttribute('tabindex', '0');

// Supporto keyboard
element.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        // Alternativa keyboard al drag
        showMoveDialog(element);
    }
});
```

---

## 🔗 Risorse Aggiuntive

### Documentazione
- [Page Lifecycle API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API)
- [History API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
- [Drag and Drop API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [Clipboard API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)

### Guide
- [Performance Optimization - web.dev](https://web.dev/fast/)
- [Media Events - HTML5 Rocks](https://www.html5rocks.com/en/tutorials/video/basics/)
- [Storage API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Storage)

### Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance audit
- [WebPageTest](https://www.webpagetest.org/) - Performance testing
- [Can I Use](https://caniuse.com/) - Browser compatibility

---

## 🎓 Esercizi Pratici

### Esercizio 1: Loading Optimizer
Crea una pagina che:
- Mostra spinner durante caricamento
- Usa DOMContentLoaded per rendering iniziale
- Usa load per nascondere spinner
- Monitora Performance.timing
- Mostra metriche di caricamento

### Esercizio 2: Infinite Scroll
Implementa scroll infinito con:
- Throttling dell'evento scroll
- Caricamento automatico al 80% scroll
- Loader durante fetch
- Gestione errori
- Pulsante "Torna su" dopo 500px scroll

### Esercizio 3: SPA Router
Crea un router SPA con:
- History API per navigazione
- popstate per back/forward
- Link interni con preventDefault
- Transizioni tra pagine
- 404 page

### Esercizio 4: Custom Video Player
Implementa player con:
- Play/pause toggle
- Progress bar cliccabile
- Volume control
- Fullscreen toggle
- Picture-in-Picture
- Keyboard shortcuts (spazio, frecce)

### Esercizio 5: Multi-Tab Sync
Crea app sincronizzata con:
- storage event per sync
- Aggiornamento real-time tra tab
- Conflict resolution
- Indicatore "Aggiornato da altra tab"
- Logout simultaneo in tutte le tab

---

**Prossima guida:** [05 - Pattern Avanzati](../teoria/05_Pattern_Avanzati.md)

**Torna all'indice:** [README principale](../../README.md)
