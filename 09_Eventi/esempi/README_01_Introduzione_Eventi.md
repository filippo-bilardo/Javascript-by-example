# Guida 01: Introduzione agli Eventi

Esempi pratici interattivi sugli eventi JavaScript.

## 📚 File Disponibili

### **01.01_eventi_mouse.html**
Eventi del mouse con esempi interattivi.

**Concetti:** click, dblclick, contextmenu, mousedown, mouseup, mousemove, mouseenter, mouseleave, mouseover, mouseout, coordinate del mouse, tasti modificatori (Ctrl, Shift, Alt), event delegation, preventDefault.

**Apri:** Browser → Apri `01.01_eventi_mouse.html`

### **01.02_eventi_tastiera.html**
Eventi della tastiera con visualizzazione in tempo reale.

**Concetti:** keydown, keyup, keypress (deprecato), event.key vs event.code vs keyCode, tasti modificatori, combinazioni/shortcuts (Ctrl+S, Ctrl+Z), tasti speciali (Enter, Escape, Arrow keys), tastiera virtuale, typing game.

**Apri:** Browser → Apri `01.02_eventi_tastiera.html`

### **01.03_eventi_form.html**
Eventi dei form con validazione real-time.

**Concetti:** submit, reset, focus, blur, input (real-time), change (on blur), validazione con regex, password strength, select/dropdown, checkbox, radio buttons, character count, autocomplete/suggestions, FormData.

**Apri:** Browser → Apri `01.03_eventi_form.html`

### **01.04_eventi_document_window.html**
Eventi a livello document e window.

**Concetti:** DOMContentLoaded vs load, resize, scroll, beforeunload, online/offline, visibilitychange (Page Visibility API), focus/blur window, hashchange, storage events, print events, progress bar, back to top.

**Apri:** Browser → Apri `01.04_eventi_document_window.html`

### **01.05_eventi_personalizzati.html**
Eventi personalizzati e oggetto Event avanzato.

**Concetti:** Event object (proprietà e metodi), Custom Events con `new Event()`, CustomEvent con detail data, Event Bus pattern, sistema notifiche, comunicazione tra componenti, event once, stopPropagation vs stopImmediatePropagation, preventDefault avanzato.

**Apri:** Browser → Apri `01.05_eventi_personalizzati.html`

## 🎯 Quick Reference

**EVENTI DEL MOUSE:**
```javascript
element.addEventListener('click', (e) => {
  console.log('Cliccato!', e.clientX, e.clientY);
});

element.addEventListener('mousemove', (e) => {
  // e.clientX, e.clientY, e.pageX, e.pageY
});
```

**EVENTI TASTIERA:**
```javascript
document.addEventListener('keydown', (e) => {
  console.log(e.key);  // 'a', 'Enter', 'ArrowUp'
  console.log(e.code); // 'KeyA', 'Enter', 'ArrowUp'
  
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault(); // Blocca Ctrl+S
  }
});
```

**EVENTI FORM:**
```javascript
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
});

input.addEventListener('input', (e) => {
  // Real-time, ogni carattere
});

input.addEventListener('change', (e) => {
  // On blur o Enter
});
```

**EVENTI DOCUMENT/WINDOW:**
```javascript
// DOM caricato
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM ready');
});

// Tutto caricato (immagini, CSS, ecc.)
window.addEventListener('load', () => {
  console.log('Page loaded');
});

// Scroll
window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
});
```

**EVENTI PERSONALIZZATI:**
```javascript
// Creare
const event = new CustomEvent('myEvent', {
  detail: { data: 'value' }
});

// Ascoltare
document.addEventListener('myEvent', (e) => {
  console.log(e.detail.data);
});

// Dispatchare
document.dispatchEvent(event);
```

## 💡 Concetti Chiave

**EVENT OBJECT:**
- `type`: tipo evento ('click', 'keydown', ecc.)
- `target`: elemento che ha generato l'evento
- `currentTarget`: elemento con il listener
- `preventDefault()`: blocca azione default
- `stopPropagation()`: ferma bubbling

**EVENTI DEL MOUSE:**
- Click events: `click`, `dblclick`, `contextmenu`
- Position: `clientX/Y`, `pageX/Y`, `screenX/Y`
- Buttons: `button` (0: left, 1: middle, 2: right)
- Modificatori: `ctrlKey`, `shiftKey`, `altKey`

**EVENTI TASTIERA:**
- ✅ Usa `event.key` (carattere o nome tasto)
- ✅ Usa `event.code` (posizione fisica tasto)
- ❌ `keyCode` e `which` sono deprecati
- `keypress` è deprecato, usa `keydown`

**EVENTI FORM:**
- `input`: real-time, ogni modifica
- `change`: su blur o cambio selezione
- `submit`: invio form (usa `preventDefault()`)
- `focus`/`blur`: entrata/uscita campo

**BUBBLING:**
- Eventi "salgono" dall'elemento target ai genitori
- `stopPropagation()`: ferma il bubbling
- `event.target`: elemento originale
- `event.currentTarget`: elemento con listener

**DELEGATION:**
```javascript
// Un listener sul genitore invece di N listener sui figli
container.addEventListener('click', (e) => {
  if (e.target.matches('.item')) {
    console.log('Item cliccato:', e.target);
  }
});
```

## 🚀 Best Practices

✅ Usa `addEventListener()` invece di `onclick`  
✅ Event delegation per elementi dinamici  
✅ `preventDefault()` per bloccare azioni default  
✅ Rimuovi listener quando non servono più (`removeEventListener`)  
✅ Usa capturing (`{capture: true}`) solo quando necessario  
✅ Debounce per eventi frequenti (scroll, resize, input)  

❌ Non abusare di listener globali (document, window)  
❌ Non dimenticare di rimuovere listener per evitare memory leaks  
❌ Non usare proprietà deprecate (keyCode, which, keypress)

## 📖 Ordine di Esecuzione

1. **Capturing Phase**: da window → target
2. **Target Phase**: sull'elemento target
3. **Bubbling Phase**: da target → window

```javascript
element.addEventListener('click', handler, {
  capture: true  // fase capturing
});

element.addEventListener('click', handler, {
  capture: false // fase bubbling (default)
});
```

## 🔧 Strumenti Console

Tutti i file HTML hanno logging nella console. Apri DevTools (F12) per vedere:
- Dettagli eventi in tempo reale
- Proprietà complete dell'Event object
- Timing e performance
- Custom events dispatched

*Repository: TPSIT2-Javascript-by-example*  
*Nota: Questi sono file HTML interattivi da aprire nel browser, non script Node.js*
