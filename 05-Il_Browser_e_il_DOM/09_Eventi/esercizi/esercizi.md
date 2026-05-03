# Guida agli esercizi JavaScript DOM

Suggerimenti mirati per ciascun esercizio, senza soluzione diretta. Per ogni esercizio sono indicati gli strumenti da usare (eventi, proprietà, metodi), una sequenza di ragionamenti guidati e frammenti di codice parziali che illustrano il meccanismo chiave.

> **Come leggere questa guida:** i frammenti di codice mostrano il *pattern* da applicare, non la soluzione dell'esercizio. Adattali al contesto specifico dell'HTML che hai davanti.

---

## Concetti fondamentali da capire prima di iniziare

### Il DOM — cos'è davvero

Quando il browser carica una pagina HTML, non la tratta come testo: la trasforma in un **albero di oggetti** chiamato DOM (*Document Object Model*). Ogni tag HTML diventa un nodo dell'albero, con relazioni genitore-figlio.

```
document
└── <html>
    ├── <head>
    │   └── <title>
    └── <body>
        ├── <h1>
        ├── <form>
        │   ├── <input id="nome">
        │   └── <button>
        └── <p id="output">
```

JavaScript non modifica l'HTML direttamente: **modifica questo albero di oggetti**. Il browser poi ridisegna la pagina di conseguenza. Ogni nodo è un oggetto con proprietà (`id`, `textContent`, `style`, …) e metodi (`addEventListener`, `querySelector`, …).

---

### Gli eventi — il meccanismo di notifica

Il browser genera continuamente **eventi**: click, movimenti del mouse, digitazione, caricamento della pagina, ridimensionamento della finestra, ecc. Un evento è semplicemente una notifica che dice *"è successa questa cosa su questo elemento"*.

Con `addEventListener` dici al browser: *"quando succede X su questo elemento, esegui questa funzione"*. La funzione che passi si chiama **handler** (o listener o callback).

```javascript
// Sintassi completa:
elemento.addEventListener(
  'nomeEvento',     // stringa: tipo di evento da ascoltare
  funzioneHandler,  // funzione da chiamare quando l'evento scatta
  opzioni           // opzionale: { once: true, capture: false, ... }
);
```

---

### L'oggetto `event` — la busta con le informazioni

Quando un evento scatta, il browser costruisce un **oggetto evento** e lo passa automaticamente come primo argomento all'handler. Questo oggetto contiene tutte le informazioni sull'evento.

```javascript
elemento.addEventListener('click', function(event) {
  // 'event' è l'oggetto creato dal browser — puoi chiamarlo come vuoi
  // (spesso si usa 'e' o 'evt' come abbreviazione)

  console.log(event.type);        // 'click' — tipo di evento
  console.log(event.target);      // elemento su cui è avvenuto il click
  console.log(event.currentTarget); // elemento su cui è registrato il listener
  console.log(event.timeStamp);   // quando è avvenuto (millisecondi dall'avvio)
  console.log(event.clientX, event.clientY); // coordinate del mouse (se applicabile)
  console.log(event.key);       // tasto premuto (se è un evento tastiera)
  console.log(event.preventDefault); // funzione per prevenire comportamento predefinito
  console.log(event.stopPropagation); // funzione per fermare la propagazione dell'evento
  console.log(event instanceof MouseEvent); // true se è un evento mouse
  console.log(event instanceof KeyboardEvent); // true se è un evento tastiera
  // ... e molte altre proprietà a seconda del tipo di evento
});
```

> **`target` vs `currentTarget`:** `target` è l'elemento su cui l'utente ha fisicamente agito (potrebbe essere un figlio). `currentTarget` è l'elemento su cui hai chiamato `addEventListener`. Per gli esercizi di questo set sono quasi sempre uguali.

---

### La propagazione degli eventi (bubbling)

Quando clicchi su un `<button>` dentro un `<div>`, l'evento non rimane sul pulsante: **risale l'albero** (bubble) e raggiunge anche il `<div>`, poi il `<body>`, poi il `<html>`, poi il `document`. Questo si chiama *event bubbling*.

```
click su <button>
  → scatta il listener sul <button>
  → scatta il listener sul <div> genitore
  → scatta il listener sul <body>
  → ...
```

Puoi fermare la propagazione con `event.stopPropagation()`, ma negli esercizi di questo set non è necessario. È utile saperlo per capire perché a volte un listener viene chiamato "per sbaglio".

---

### Quando viene eseguito il codice JS — l'ordine conta

Se selezioni un elemento con `getElementById` *prima* che il browser abbia costruito il DOM, otterrai `null` e lo script si bloccherà con un errore.

```javascript
// ❌ SBAGLIATO: lo script è nell'<head>, il DOM non esiste ancora
const btn = document.getElementById('mio-pulsante'); // → null
btn.addEventListener('click', ...); // → TypeError: Cannot read properties of null
```

Le due soluzioni più comuni:

```javascript
// ✅ Soluzione 1: metti il tag <script> alla fine del <body>,
// così il DOM è già costruito quando il codice viene eseguito.

// ✅ Soluzione 2: avvolgi tutto nell'evento DOMContentLoaded,
// che scatta quando il browser ha finito di analizzare l'HTML.
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('mio-pulsante'); // funziona!
  btn.addEventListener('click', ...);
});
```

> Per gli esercizi di questo set, il `<script>` si trova già in fondo al `<body>` — non devi preoccuparti di questo problema. Ma tienilo a mente ogni volta che scrivi JS tuo.

---

### Il browser DevTools — il tuo strumento di debug

Prima di iniziare gli esercizi, impara ad aprire gli **Strumenti per sviluppatori** del browser (F12 o tasto destro → "Ispeziona"). Le tre schede più utili:

| Scheda | Cosa mostra | Come si usa |  
|---|---|---|
| **Console** | Errori JS, output di `console.log` | Incolla codice qui per testarlo |  
| **Elements** | L'albero DOM live | Vedi le modifiche in tempo reale |  
| **Sources** | Il codice sorgente | Imposta breakpoint per fermare l'esecuzione |

**Tecnica essenziale — `console.log` come sonda:**
```javascript
pulsante.addEventListener('click', function(event) {
  console.log('click ricevuto!');         // conferma che l'evento scatta
  console.log('target:', event.target);   // quale elemento ha ricevuto il click
  console.log('valore:', campo.value);    // valore corrente di un campo

  // ... resto del codice
});
```
Se il click non scatta nulla, la `console.log` non appare → il listener non è stato aggiunto. Se appare ma l'effetto non si vede → il problema è nel codice *dentro* il listener.

---

## Gruppo: eventi mouse

### Esercizio 1 — Colore pulsanti al passaggio del mouse

**Strumenti utili:** `mouseenter` (evento), `mouseleave` (evento), `style.backgroundColor` (proprietà), `style.color` (proprietà)

**Ragionaci così:**

1. Seleziona tutti i pulsanti con `querySelectorAll('button')` — restituisce una NodeList.
2. Itera con `forEach` e per ciascuno aggiungi due listener: uno per l'entrata del mouse, uno per l'uscita.
3. Dentro il listener usa `this.style.backgroundColor` o `event.target.style` per cambiare il colore.
4. Al `mouseenter` imposta i nuovi colori; al `mouseleave` ripristina i valori originali (o stringa vuota per usare il CSS di default).

**Pattern da studiare — iterazione + doppio listener:**
```javascript
const elementi = document.querySelectorAll('...');

elementi.forEach(function(el) {
  el.addEventListener('mouseenter', function(event) {
    // event.target è l'elemento su cui è avvenuto l'evento
    event.target.style.backgroundColor = '...';
  });

  el.addEventListener('mouseleave', function(event) {
    event.target.style.backgroundColor = ''; // stringa vuota = ripristina CSS
  });
});
```

> **Approfondimento — `mouseenter` vs `mouseover`:** entrambi scattano quando il mouse entra in un elemento, ma `mouseover` si propaga anche dai figli (bubble), mentre `mouseenter` no. Per i pulsanti non fa differenza, ma tienilo a mente per elementi che contengono altri elementi.

> **Approfondimento — NodeList e forEach:** `querySelectorAll` restituisce una `NodeList`, non un array. Le NodeList moderne supportano `forEach` direttamente, ma *non* supportano metodi come `map` o `filter`. Se hai bisogno di quei metodi, converti prima: `Array.from(document.querySelectorAll('...'))`.

> **Trappola comune — modificare lo stile "a memoria":** se vuoi ripristinare il colore originale al `mouseleave`, devi sapere qual era. Assegnare stringa vuota (`''`) fa tornare il browser al valore definito nel CSS, che è spesso la scelta più robusta rispetto a ricordare un valore hardcoded. Alternativa: leggi e salva il colore originale *prima* del mouseenter usando `getComputedStyle(el).backgroundColor`.

> **Approfondimento — transizione fluida con CSS:** il cambio di colore istantaneo può sembrare brusco. Per renderlo graduale, aggiungi nel CSS `transition: background-color 0.3s ease` sull'elemento. Il browser interpola automaticamente i valori tra lo stato di partenza e quello di arrivo, senza cambiare il codice JavaScript.

**Domande di autovalutazione:**
- Perché uso `forEach` invece di un ciclo `for`? Quali sono le differenze?
- Se aggiungo un quarto pulsante all'HTML *dopo* aver scritto il JS, il listener viene aggiunto anche a lui? (Risposta: no — il `querySelectorAll` fotografa i pulsanti esistenti al momento dell'esecuzione.)
- Come potrei scrivere il codice in modo che funzioni anche per pulsanti aggiunti dinamicamente in futuro? (Parola chiave: *event delegation*.)

---

## Gruppo: manipolazione testo

### Esercizio 2 — Testo maiuscolo in campo codice fiscale

**Strumenti utili:** `input` (evento), `toUpperCase()` (metodo), `value` (proprietà)

**Ragionaci così:**

1. L'evento da usare è `input`, che scatta ad ogni carattere digitato (non aspetta che l'utente esca dal campo).
2. Nel listener leggi `event.target.value`, applicagli `.toUpperCase()` e riassegnalo allo stesso `event.target.value`.
3. Attenzione: non usare `change` perché scatta solo quando il campo perde il focus.

**Pattern da studiare — lettura e riscrittura del valore:**
```javascript
campo.addEventListener('input', function(event) {
  const corrente = event.target.value;
  event.target.value = corrente.toUpperCase();
  // oppure, in una riga:
  // event.target.value = event.target.value.toUpperCase();
});
```

> **Approfondimento — perché non `keydown`?** L'evento `keydown` scatta *prima* che il carattere sia scritto nel campo; con `input` il valore è già aggiornato e puoi leggerlo subito. `input` si attiva anche con incolla (Ctrl+V) e completamento automatico, il che lo rende più robusto.

> **Approfondimento — le stringhe sono immutabili:** in JavaScript non puoi modificare una stringa sul posto. `"ciao".toUpperCase()` non cambia la stringa originale, ma ne crea e restituisce una nuova. Per questo devi riassegnare: `event.target.value = event.target.value.toUpperCase()`. Stesso vale per `trim()`, `replace()`, `toLowerCase()` e tutti gli altri metodi stringa — restituiscono sempre una nuova stringa.

> **Trappola comune — perdere la posizione del cursore:** su alcuni browser, riscrivere `event.target.value` sposta il cursore alla fine del campo. Per il codice fiscale è accettabile; per campi di testo libero sarebbe fastidioso. La soluzione avanzata usa `selectionStart`/`selectionEnd` per salvare e ripristinare la posizione, ma per questo esercizio non è necessario.

> **Approfondimento — validazione vs trasformazione:** quello che fai qui è una *trasformazione* in ingresso: forzi un formato prima ancora che il dato raggiunga la logica dell'applicazione. È un pattern usatissimo (normalizzazione dell'input). La *validazione* vera (es. "il CF ha esattamente 16 caratteri") è un passo successivo — di solito nell'evento `blur` o al `submit` del form.

**Domande di autovalutazione:**
- Cosa succede se l'utente incolla con Ctrl+V testo in minuscolo? Il listener si attiva?
- Cosa succede con `keydown` al posto di `input`? Prova nella console: digita una lettera e osserva in quale momento il valore è già disponibile in `event.target.value`.

---

## Gruppo: focus e blur

### Esercizio 3 — Sfondo casella di testo con focus/blur

**Strumenti utili:** `focus` (evento), `blur` (evento), `style.backgroundColor` (proprietà)

**Ragionaci così:**

1. Aggiungi due listener sulla stessa casella: `focus` quando la riceve, `blur` quando la perde.
2. Nel listener `focus` cambia `event.target.style.backgroundColor`.
3. Nel listener `blur` ripristina il colore originale (stringa vuota = torna al CSS di default).

**Pattern da studiare — coppia focus/blur:**
```javascript
const campo = document.getElementById('...');

campo.addEventListener('focus', function() {
  this.style.backgroundColor = '#fffbe6'; // giallo chiaro = campo attivo
});

campo.addEventListener('blur', function() {
  this.style.backgroundColor = ''; // torna al valore del CSS
});
```

> **Nota su `this`:** nelle funzioni tradizionali (`function() {}`), `this` dentro un listener punta all'elemento che ha ricevuto l'evento — equivalente a `event.target`. Nelle arrow function (`() => {}`) invece `this` *non* è ridefinito: evitale quando vuoi usare `this` per riferirsi all'elemento.

> **Approfondimento — accessibilità:** evidenziare il campo attivo con colore o bordo è importante per l'accessibilità (utenti da tastiera). Considera di usare `outline` invece di `backgroundColor` per non sovrascrivere lo stile nativo del browser.

> **Approfondimento — `focus`/`blur` non fanno bubble:** a differenza della maggior parte degli eventi, `focus` e `blur` *non* si propagano verso l'alto nell'albero DOM. Se hai bisogno di intercettarli su un elemento contenitore (es. un `<form>`), usa invece `focusin` e `focusout`, che sono varianti identiche ma con bubble. Questo è un dettaglio raro ma importante per architetture più complesse.

> **Alternativa CSS pura — `:focus`:** molti effetti visivi sul focus si possono fare direttamente in CSS senza JavaScript, usando la pseudo-classe `:focus`:
> ```css
> input:focus {
>   background-color: #fffbe6;
>   outline: 2px solid #f0a500;
> }
> ```
> Il JS è necessario solo quando vuoi una logica condizionale (es. cambiare colore solo se il valore è valido).

> **Approfondimento — combinare focus e validazione:** un pattern reale nei form professionali è: al `focus` pulisci l'eventuale messaggio d'errore, al `blur` esegui la validazione e mostra l'errore se necessario. Così l'utente non vede l'errore mentre sta ancora scrivendo, ma lo vede quando esce dal campo.
>
> ```javascript
> campo.addEventListener('focus', function() {
>   // rimuovi classe errore mentre l'utente sta scrivendo
>   this.classList.remove('campo-errore');
> });
>
> campo.addEventListener('blur', function() {
>   // valida solo quando l'utente ha finito
>   if (this.value.trim() === '') {
>     this.classList.add('campo-errore');
>   }
> });
> ```

**Domande di autovalutazione:**
- In quale ordine scattano gli eventi se sposti il focus da un campo a un altro? (Prova: blur del primo, poi focus del secondo, o viceversa?)
- Cosa succede se chiami `campo.focus()` da JavaScript? L'evento `focus` scatta?

---

## Gruppo: visibilità elementi

### Esercizio 4 — Nascondere un testo con hidden

**Strumenti utili:** `click` (evento), `hidden` (proprietà)

**Ragionaci così:**

1. Seleziona il pulsante e aggiungi un listener all'evento `click`.
2. Dentro il listener, recupera l'elemento testo con il suo id e imposta `elemento.hidden = true`.
3. La proprietà `hidden` è un booleano nativo HTML — più semantico di `style.display = 'none'`.

**Pattern da studiare — toggle di visibilità:**
```javascript
const pulsante = document.getElementById('...');
const testo    = document.getElementById('...');

pulsante.addEventListener('click', function() {
  testo.hidden = true;
  // Per un pulsante toggle (mostra/nascondi alternati):
  // testo.hidden = !testo.hidden;
});
```

> **Approfondimento — tre modi per nascondere un elemento:**
>
> | Tecnica | Spazio nel layout | Accessibilità |
> |---|---|---|
> | `element.hidden = true` | non occupa spazio | rimosso dall'albero accessibile |
> | `style.display = 'none'` | non occupa spazio | rimosso dall'albero accessibile |
> | `style.visibility = 'hidden'` | **occupa ancora spazio** | ancora presente (ma invisibile) |
>
> Usa `hidden` o `display: none` quando vuoi che l'elemento non influenzi il layout.

> **Approfondimento — l'operatore NOT logico `!`:** l'espressione `testo.hidden = !testo.hidden` è un pattern molto comune per alternare uno stato booleano. Se `hidden` è `false`, `!false` produce `true`, quindi l'elemento si nasconde. Al click successivo `!true` produce `false`, quindi riappare. Questo evita di scrivere un `if/else` esplicito e funziona perché il valore di `hidden` in un momento è sempre esattamente l'opposto di quello che vogliamo impostare.
>
> Schema mentale:
> ```
> Stato iniziale: hidden = false  (visibile)
> 1° click:  hidden = !false = true   (nascosto)
> 2° click:  hidden = !true  = false  (visibile di nuovo)
> 3° click:  hidden = !false = true   (nascosto di nuovo)
> ```

> **Approfondimento — operatore ternario per aggiornare l'etichetta:** un'interfaccia completa aggiorna anche il testo del pulsante in sincronia con lo stato. L'operatore ternario ha la forma `condizione ? valoreSeVero : valoreSefalso` e si presta bene a questo scopo:
> ```javascript
> // Dopo aver modificato testo.hidden:
> pulsante.textContent = testo.hidden ? 'Mostra testo' : 'Nascondi testo';
> // Se hidden è true  → il testo è nascosto → il pulsante deve dire 'Mostra testo'
> // Se hidden è false → il testo è visibile → il pulsante deve dire 'Nascondi testo'
> ```
> Nota: il testo del pulsante e la proprietà `hidden` sono "specchi" — quando uno cambia, l'altro deve cambiare di conseguenza. Questo è un esempio elementare di **sincronizzazione dello stato**.

**Domande di autovalutazione:**
- Cosa succede se chiami `testo.hidden = true` due volte di seguito? Il secondo ha effetto?
- Come verificheresti nella Console che `hidden` funziona come booleano? (Suggerimento: `typeof elemento.hidden`)

---

## Gruppo: validazione form

### Esercizio 5 — Errore se ripetipassword ≠ password

**Strumenti utili:** `input` (evento), `value` (proprietà), `style.display` (proprietà)

**Ragionaci così:**

1. Ascolta l'evento `input` sul campo `ripetipassword`.
2. Confronta `campoRipetiPwd.value !== campoPwd.value`.
3. Prepara nel HTML un elemento (es. `<span>`) per il messaggio d'errore, inizialmente nascosto. Mostralo/nascondilo in base al confronto.
4. Puoi usare `elemento.style.display = 'block'` o `'none'`, oppure `classList.add/remove` con una classe CSS.

**Pattern da studiare — mostrare/nascondere un messaggio condizionale:**
```javascript
const campoPwd       = document.getElementById('...');
const campoRipetiPwd = document.getElementById('...');
const errore         = document.getElementById('errore-pwd'); // <span> inizialmente nascosto

campoRipetiPwd.addEventListener('input', function() {
  if (campoRipetiPwd.value !== campoPwd.value) {
    errore.style.display = 'block';
  } else {
    errore.style.display = 'none';
  }
});
```

> **Approfondimento — approccio con classi CSS:** invece di manipolare `style.display` direttamente nel JS, puoi definire una classe `.visibile { display: block; }` nel CSS e usare `errore.classList.toggle('visibile', condizione)`. Questo separa la logica di presentazione (CSS) da quella di comportamento (JS), rendendo il codice più manutenibile.
>
> ```javascript
> // classList.toggle(classe, forza) — aggiunge se forza=true, rimuove se forza=false
> errore.classList.toggle('visibile', campoRipetiPwd.value !== campoPwd.value);
> ```

> **Approfondimento — UX: quando mostrare l'errore?** Mostrare l'errore *mentre l'utente digita ancora* può sembrare aggressivo. Considera queste strategie:
>
> | Strategia | Quando si attiva | Pro | Contro |
> |---|---|---|---|
> | Immediata (`input`) | Ogni carattere | Feedback veloce | Può irritare se il campo è incompleto |
> | Differita (`blur`) | All'uscita dal campo | Meno invasiva | Feedback in ritardo |
> | Solo al submit | Click su Invia | Non interrompe la digitazione | L'utente scopre tutti gli errori in una volta |
>
> Una buona pratica: mostrare l'errore su `input` **solo se era già visibile** (ovvero l'utente ha già tentato e sta correggendo), mostrarlo la prima volta solo su `blur`.

> **Trappola comune — ascoltare il campo sbagliato:** l'errore deve scattare quando l'utente modifica `ripetipassword`, ma *anche* quando modifica `password` (perché il confronto potrebbe diventare valido se l'utente corregge la password originale). Ricordati di aggiungere un listener `input` su entrambi i campi, chiamando la stessa funzione di validazione.

**Domande di autovalutazione:**
- Se l'utente digita la password corretta in `ripetipassword` e poi *modifica* il campo `password` originale, l'errore ricompare? Con la tua implementazione attuale, sì o no? Perché?
- Come gestiresti il caso in cui entrambi i campi sono vuoti? Dovrebbe apparire l'errore?

---

### Esercizio 6 — Sfondo password in base ai requisiti

**Strumenti utili:** `input` (evento), `test()` (metodo), `style.backgroundColor` (proprietà)

**Ragionaci così:**

1. Ascolta `input` sul campo password e ad ogni digitazione controlla i requisiti.
2. Usa espressioni regolari (`RegExp`) per verificare: lunghezza minima, presenza di maiuscole, minuscole, numeri, caratteri speciali.
3. Esempio: `/[A-Z]/.test(valore)` restituisce `true` se c'è almeno una maiuscola.
4. Definisci una logica a fasce: es. rosso = nessun requisito, arancione = alcuni, verde = tutti soddisfatti.

**Pattern da studiare — espressioni regolari per validare:**
```javascript
const pwd = 'ExAmple9!';

// Ogni espressione restituisce true o false
const haMaiuscole  = /[A-Z]/.test(pwd);       // almeno una lettera maiuscola
const haMinuscole  = /[a-z]/.test(pwd);       // almeno una lettera minuscola
const haNumeri     = /[0-9]/.test(pwd);       // almeno un cifra
const haSpeciali   = /[^A-Za-z0-9]/.test(pwd); // almeno un carattere non alfanumerico
const haLunghezza  = pwd.length >= 8;
```

> **Come leggere le regex:**
> - `[A-Z]` — qualsiasi carattere nel range dalla A alla Z maiuscola
> - `[0-9]` — qualsiasi cifra (equivalente a `\d`)
> - `[^A-Za-z0-9]` — l'operatore `^` dentro `[...]` nega la classe: "qualsiasi carattere che *non* sia lettera né cifra"

> **Approfondimento — testare le regex nella Console:** puoi provare una regex direttamente nella Console del browser senza scrivere codice HTML:
> ```javascript
> /[A-Z]/.test('ciao')   // false — nessuna maiuscola
> /[A-Z]/.test('Ciao')   // true  — C è maiuscola
> /[0-9]/.test('abc9')   // true  — c'è un 9
> /[^A-Za-z0-9]/.test('abc!') // true — ! non è alfanumerico
> ```
> Usa la Console come "calcolatrice" per le espressioni: verifica ogni regex *prima* di integrarla nel codice.

> **Approfondimento — i flag delle regex:** le espressioni regolari possono avere *flag* che ne modificano il comportamento. I più comuni:
> - `/pattern/i` — case-insensitive: `/[a-z]/i` trova sia minuscole che maiuscole
> - `/pattern/g` — global: non si ferma al primo match, trova tutte le occorrenze
>
> Per la validazione password, normalmente *non* si usa il flag `i`: vuoi distinguere maiuscole da minuscole apposta.

> **Approfondimento — struttura a fasce:** conta quanti requisiti sono soddisfatti con un semplice `+` di booleani. In JavaScript, `true` vale `1` e `false` vale `0` in contesto numerico:
> ```javascript
> const punteggio = (pwd.length >= 8) + /[A-Z]/.test(pwd)
>                 + /[a-z]/.test(pwd) + /[0-9]/.test(pwd)
>                 + /[^A-Za-z0-9]/.test(pwd);
> // punteggio è un numero da 0 a 5
> ```
> Poi traduci il numero in un colore con una `if/else if` oppure con una lookup table (vedi esercizio 8).

**Domande di autovalutazione:**
- Cosa restituisce `/[0-9]/.test('')`? (Stringa vuota — la password è stata cancellata.)
- Se la password è `'12345678'`, quali requisiti soddisfa e quali no? Calcola il punteggio a mano.

---

## Gruppo: manipolazione DOM

### Esercizio 7 — Messaggio in paragrafo al click pulsante

**Strumenti utili:** `click` (evento), `textContent` (proprietà), `getElementById` (metodo)

**Ragionaci così:**

1. Aggiungi un listener `click` al pulsante.
2. Dentro il listener, seleziona `document.getElementById('output')`.
3. Imposta `paragrafo.textContent = 'Il tuo messaggio'` — preferisci `textContent` a `innerHTML` quando non hai HTML da inserire.

**Pattern da studiare — il pattern fondamentale del DOM:**
```javascript
// 1. Seleziona
const pulsante = document.getElementById('...');
const output   = document.getElementById('...');

// 2. Ascolta
pulsante.addEventListener('click', function() {
  // 3. Modifica
  output.textContent = 'Messaggio da mostrare';
});
```

> **Approfondimento — `textContent` vs `innerHTML`:**
> - `textContent` tratta il valore come testo puro: se scrivi `<b>ciao</b>` appare letteralmente quella stringa, i tag non vengono interpretati.
> - `innerHTML` interpreta l'HTML: `<b>ciao</b>` renderebbe "**ciao**" in grassetto.
> - **Regola di sicurezza:** usa sempre `textContent` quando il contenuto proviene dall'utente. Usare `innerHTML` con input non sanificato espone a attacchi XSS (Cross-Site Scripting).

> **Approfondimento — XSS: perché è pericoloso:** immagina che un utente malevolo inserisca nel campo nome il testo `<img src=x onerror="alert('hackerato')">`. Se usi `innerHTML` per mostrare quell'input, il browser esegue il codice JavaScript nell'attributo `onerror`. Con `textContent` il tag viene mostrato come testo letterale e non eseguito. Questo tipo di attacco si chiama *Cross-Site Scripting* (XSS) ed è nella OWASP Top 10 delle vulnerabilità web più diffuse.

> **Approfondimento — `document.getElementById` vs `querySelector`:**
> ```javascript
> // Questi due sono equivalenti:
> document.getElementById('output')       // solo per id, più veloce
> document.querySelector('#output')       // selettore CSS, più flessibile
>
> // querySelector può fare cose che getElementById non può:
> document.querySelector('.errore')       // seleziona per classe
> document.querySelector('form > input')  // selettore CSS complesso
> document.querySelector('[data-id="3"]') // attributo personalizzato
> ```
> Usa `getElementById` quando cerchi per id (più veloce e più esplicito), `querySelector` quando hai bisogno di selettori CSS.

**Domande di autovalutazione:**
- Cosa succede se `getElementById` non trova l'elemento (id sbagliato)? Restituisce `null` o lancia un errore? Prova nella Console.
- Cosa fa `paragrafo.textContent = ''`? Svuota il paragrafo — quando potrebbe essere utile?

---

## Gruppo: validazione avanzata

### Esercizio 8 — Punteggio forza password + progress bar

**Strumenti utili:** `change` (evento), `style.width` (proprietà), `style.backgroundColor` (proprietà)

**Ragionaci così:**

1. Definisci una funzione `calcolaPunteggio(pwd)` che assegna punti: +1 per lunghezza ≥ 8, +1 per maiuscole, +1 per minuscole, +1 per numeri, +1 per speciali (max 5).
2. Usa `RegExp.test()` per ciascun requisito — vedi esercizio 6.
3. Per la progress bar: crea un `<div>` contenitore e un `<div>` interno. Cambia `barra.style.width` in percentuale (es. `punteggio / 5 * 100 + '%'`).
4. Cambia il colore di sfondo della barra in base al punteggio: rosso (1), arancione (2-3), verde (4-5).
5. Aggiorna output e barra nell'evento `change` del campo password.

**Pattern da studiare — funzione di punteggio:**
```javascript
function calcolaPunteggio(pwd) {
  let punteggio = 0;

  if (pwd.length >= 8)         punteggio++;
  if (/[A-Z]/.test(pwd))       punteggio++;
  // aggiungi gli altri controlli...

  return punteggio; // valore tra 0 e 5
}
```

**Pattern da studiare — aggiornare una progress bar:**
```javascript
// HTML atteso:
// <div id="barra-contenitore"><div id="barra-interna"></div></div>

const barra = document.getElementById('barra-interna');
const punteggio = calcolaPunteggio(campoPwd.value);

barra.style.width = (punteggio / 5 * 100) + '%';
// es. punteggio 3 → '60%'
```

> **Approfondimento — selezionare il colore con un array:** invece di una catena di `if/else if`, puoi usare un array di colori indicizzato dal punteggio:
> ```javascript
> const colori = ['#ccc', '#e74c3c', '#e67e22', '#f1c40f', '#2ecc71', '#27ae60'];
> barra.style.backgroundColor = colori[punteggio];
> ```
> Ogni indice corrisponde a un punteggio (0 = grigio, 1 = rosso, …, 5 = verde scuro). Questa tecnica si chiama *lookup table* ed è spesso più leggibile di molti `if`.

> **Approfondimento — animazione fluida della barra:** aggiungi nel CSS `transition: width 0.4s ease, background-color 0.4s ease` sull'elemento della barra interna. Il browser si occupa dell'interpolazione: ogni volta che JS cambia `style.width` o `style.backgroundColor`, la transizione viene eseguita automaticamente, senza codice di animazione aggiuntivo.

> **Approfondimento — `input` vs `change` per la progress bar:** l'esercizio suggerisce `change`, ma considera l'esperienza utente: con `change` la barra si aggiorna solo quando il campo perde il focus, quindi l'utente digita al buio. Con `input` si aggiorna ad ogni carattere, dando un feedback immediato. Quale preferisci per la *forza* della password? Quale per la *conferma* della password? Le risposte possono essere diverse.

**Domande di autovalutazione:**
- Se `punteggio` vale 0 (password vuota), la barra ha larghezza `'0%'` — è visibile? Come gestiresti il caso in cui il campo password viene svuotato?
- Come cambieresti il codice per mostrare anche un testo descrittivo accanto alla barra (es. "Debole", "Media", "Forte")? Avresti bisogno di un secondo array?

---

## Gruppo: composizione stringhe

### Esercizio 9 — Genera email da nome e cognome

**Strumenti utili:** `click` (evento), `value` (proprietà), template literals

**Ragionaci così:**

1. Al click del pulsante leggi `campoNome.value` e `campoCognome.value`.
2. Componi la stringa email con template literal: `` `${nome}.${cognome}@dominio.it` ``
3. Assegna il risultato a `campoEmail.value`.

**Pattern da studiare — template literal:**
```javascript
const nome    = 'Mario';
const cognome = 'Rossi';

// Concatenazione classica (meno leggibile):
const email1 = nome + '.' + cognome + '@scuola.it';

// Template literal (più leggibile):
const email2 = `${nome}.${cognome}@scuola.it`;

// Entrambi producono: 'Mario.Rossi@scuola.it'
```

> **Approfondimento — `trim()` per pulire gli spazi:** se l'utente digita accidentalmente uno spazio prima o dopo il nome, l'email conterrà quello spazio (es. `" Mario"."Rossi"@scuola.it`). Prima di comporre l'email, applica `.trim()` ai valori letti dai campi: rimuove gli spazi iniziali e finali.
> ```javascript
> const nome    = campoNome.value.trim();    // 'Mario' (spazi rimossi)
> const cognome = campoCognome.value.trim(); // 'Rossi'
> ```
> `.trim()` restituisce una nuova stringa senza modificare l'originale — stessa regola dell'immutabilità vista nell'esercizio 2.

> **Approfondimento — i template literal possono contenere espressioni:** dentro `${}` non c'è solo una variabile, ma qualsiasi espressione JavaScript valida:
> ```javascript
> const a = 5, b = 3;
> console.log(`La somma è ${a + b}`);          // 'La somma è 8'
> console.log(`${nome.trim().toLowerCase()}`); // espressione con metodi
> ```

**Domande di autovalutazione:**
- Cosa produce `campoNome.value.trim().toLowerCase()` se il nome è `'  MARIO  '`?
- Se il cognome contiene uno spazio interno (es. `'De Luca'`), come dovrebbe essere formata l'email? Come gestiresti il caso?

---

### Esercizio 10 — Email tutta in minuscolo

**Strumenti utili:** `toLowerCase()` (metodo)

**Ragionaci così:**

1. Estendi la funzione dell'esercizio 9: prima di assegnare l'email, applica `.toLowerCase()` alla stringa composta.
2. Incapsula la logica in una funzione riutilizzabile: `function generaEmail(nome, cognome)` — ti servirà anche nell'esercizio 11.

**Pattern da studiare — funzione riutilizzabile:**
```javascript
function generaEmail(nome, cognome) {
  // Costruisci la stringa, poi applica toLowerCase()
  // ...
  return emailComposta;
}

// Utilizzo:
pulsante.addEventListener('click', function() {
  const email = generaEmail(campoNome.value, campoCognome.value);
  campoEmail.value = email;
});
```

> **Approfondimento — perché estrarre una funzione:** la funzione `generaEmail` incapsula una regola di business (come si forma un'email aziendale). Se in futuro la regola cambia (es. cognome.nome invece di nome.cognome), modifichi *un solo punto* del codice invece di cercare la logica sparsa tra i listener. Questo principio si chiama **DRY** — *Don't Repeat Yourself*.

> **Approfondimento — funzioni pure:** `generaEmail(nome, cognome)` è una *funzione pura* — dato lo stesso input, restituisce sempre lo stesso output e non ha effetti collaterali (non legge dalla pagina, non modifica nulla). Le funzioni pure sono facili da testare e ragionare su di esse. I listener, invece, hanno effetti collaterali per definizione (modificano il DOM): tenerli separati dalla logica pura è una buona abitudine.
>
> Schema:
> ```javascript
> // Logica pura (facile da testare):
> function generaEmail(nome, cognome) { ... }
>
> // Effetti collaterali separati (listener che usano la funzione pura):
> pulsante.addEventListener('click', function() {
>   campoEmail.value = generaEmail(campoNome.value, campoCognome.value);
> });
> ```

**Domande di autovalutazione:**
- Cosa restituisce `generaEmail('', 'Rossi')`? Dovresti gestire il caso in cui nome o cognome è vuoto?
- Come potresti testare `generaEmail` nella Console senza neanche aprire la pagina HTML?

---

### Esercizio 11 — Email aggiornata con evento change

**Strumenti utili:** `change` (evento), `addEventListener` (metodo)

**Ragionaci così:**

1. Aggiungi un listener `change` sia al campo nome che al campo cognome.
2. In entrambi i listener chiama la stessa funzione `generaEmail()` definita al punto 10.
3. L'evento `change` scatta quando il campo perde il focus dopo una modifica — diverso da `input` che scatta ad ogni carattere.

**Pattern da studiare — stesso handler su più elementi:**
```javascript
function aggiornaEmail() {
  // Legge entrambi i campi e aggiorna il campo email
  // Usa la funzione generaEmail() dell'esercizio precedente
}

// Lo stesso handler collegato a due elementi diversi:
campoNome.addEventListener('change', aggiornaEmail);
campoCognome.addEventListener('change', aggiornaEmail);
```

> **Approfondimento — confronto eventi di testo:**
>
> | Evento | Quando scatta |
> |---|---|
> | `keydown` / `keyup` | Ad ogni pressione/rilascio tasto (prima/dopo la modifica) |
> | `input` | Ad ogni modifica del valore (anche incolla, completamento) |
> | `change` | Quando il campo perde il focus *dopo* una modifica |
>
> Per l'email, `change` è la scelta giusta: non ha senso aggiornare il campo email lettera per lettera mentre l'utente scrive il nome.

> **Approfondimento — funzione senza parametri che legge dal DOM:** `aggiornaEmail()` non riceve argomenti ma legge i campi direttamente. Questo funziona perché le variabili `campoNome` e `campoCognome` sono definite nello stesso scope (chiusura). È un pattern comune ma lega la funzione alla struttura della pagina — non è riutilizzabile su un altro form. Per flessibilità maggiore, si potrebbe passare i valori come parametri, ma per questo esercizio va benissimo così.

> **Approfondimento — guardia sugli input vuoti:** se l'utente ha compilato solo il nome ma non ancora il cognome, `generaEmail('Mario', '')` produce `mario.@scuola.it` — un'email malformata. Pensa a come aggiungere una condizione di guardia:
> ```javascript
> function aggiornaEmail() {
>   const nome    = campoNome.value.trim();
>   const cognome = campoCognome.value.trim();
>
>   // Aggiorna solo se entrambi i campi hanno un valore
>   if (nome !== '' && cognome !== '') {
>     campoEmail.value = generaEmail(nome, cognome);
>   }
> }
> ```
> L'operatore `&&` (AND logico) restituisce `true` solo se *entrambe* le condizioni sono vere.

**Domande di autovalutazione:**
- Se aggiungi il listener `change` su `campoNome`, ma dimentichi di aggiungerlo su `campoCognome`, cosa succede se l'utente modifica solo il cognome?
- Come potresti usare `input` invece di `change` per un aggiornamento più reattivo? Quali svantaggi comporta per l'esperienza utente in questo caso specifico?

---

### Esercizio 12 — Verifica che nuova password non sia simile alla precedente

**Strumenti utili:** `includes()` (metodo), `toLowerCase()` (metodo), distanza di Levenshtein

**Ragionaci così:**

1. Primo livello: controlla se la nuova password contiene la vecchia o viceversa usando `includes()`.
2. Secondo livello: confronta le due stringhe senza differenziare maiuscole/minuscole (applica `toLowerCase()` su entrambe prima di confrontarle).
3. Livello avanzato: implementa la **distanza di Levenshtein** — una funzione che conta quante modifiche (inserimenti, cancellazioni, sostituzioni) servono per trasformare una stringa nell'altra. Se la distanza è bassa, le password sono troppo simili.
4. Suggerimento: definisci una soglia, es. se distanza ≤ 3 mostra un avviso *"La password è troppo simile alla precedente"*.

**Pattern da studiare — controllo rapido con includes:**
```javascript
const vecchia = 'password123';
const nuova   = 'Password123!';

const v = vecchia.toLowerCase();
const n = nuova.toLowerCase();

if (n.includes(v) || v.includes(n)) {
  // La nuova password contiene la vecchia (o è contenuta in essa)
}
```

**Pattern da studiare — struttura della distanza di Levenshtein:**

L'algoritmo usa una matrice per memorizzare i costi parziali. Non devi inventarlo da zero: ragiona per passi.

```javascript
function levenshtein(a, b) {
  // Crea una matrice (a.length+1) righe × (b.length+1) colonne
  // Inizializza la prima riga con 0,1,2,...,b.length
  // Inizializza la prima colonna con 0,1,2,...,a.length
  // Per ogni cella [i][j]:
  //   se a[i-1] === b[j-1] → copia il valore diagonale (nessun costo)
  //   altrimenti → 1 + minimo tra (sopra, sinistra, diagonale)
  // Ritorna il valore nell'ultima cella (in basso a destra)
}
```

> **Esempio concreto — cosa calcola la matrice:**
>
> Distanza tra `"gatto"` e `"gatto!"` = 1 (una sola inserzione).
> Distanza tra `"abc123"` e `"Abc123"` = 1 (una sola sostituzione).
> Distanza tra `"secret"` e `"Secret1"` = 2 (una sostituzione + una inserzione).
>
> Con una soglia di 3, tutte e tre le varianti sarebbero considerate "troppo simili".

> **Approfondimento — complessità:** la distanza di Levenshtein ha complessità O(n×m) dove n e m sono le lunghezze delle due stringhe. Per password brevi è trascurabile. Questo algoritmo è usato in pratica da correttori ortografici, motori di ricerca fuzzy e — appunto — sistemi di autenticazione.

> **Traccia visiva della matrice — esempio passo passo:**
>
> Calcoliamo `levenshtein("cat", "car")` (distanza attesa: 1 — cambiare `t` in `r`).
>
> La matrice ha (3+1) righe × (3+1) colonne. Gli indici di riga corrispondono ai caratteri di `"cat"`, quelli di colonna a `"car"`.
>
> ```
>      ""   c    a    r
> ""  [ 0,  1,   2,   3  ]
>  c  [ 1,  0,   1,   2  ]
>  a  [ 2,  1,   0,   1  ]
>  t  [ 3,  2,   1,   1  ]  ← ultimo valore = distanza
> ```
>
> Come si calcola ogni cella:
> - Cella [1][1]: confronto `c` vs `c` → uguali → copia la diagonale: `0`
> - Cella [1][2]: confronto `c` vs `a` → diversi → `1 + min(1, 0, 1)` = `1`
> - Cella [3][3]: confronto `t` vs `r` → diversi → `1 + min(0, 1, 1)` = `1`
>
> Il risultato finale è il valore in basso a destra: **1**.

> **Approfondimento — creare una matrice in JavaScript:** puoi creare una matrice bidimensionale come array di array:
> ```javascript
> // Crea una matrice rows×cols inizializzata a 0
> function creaMatrice(rows, cols) {
>   const m = [];
>   for (let i = 0; i <= rows; i++) {
>     m[i] = [];
>     for (let j = 0; j <= cols; j++) {
>       m[i][j] = 0;
>     }
>   }
>   return m;
> }
> // Accesso: m[riga][colonna]
> ```
> Poi inizializza la prima riga e la prima colonna con `i` e `j` rispettivamente, e riempi il resto con la regola dell'algoritmo.

**Domande di autovalutazione:**
- Qual è la distanza tra `"abc"` e `"abc"`? Quanto vale l'ultima cella?
- Qual è la distanza tra `""` (stringa vuota) e `"abc"`? Cosa rappresenta geometricamente nella matrice?
- Se la soglia è 3, la coppia `("Password1", "password1")` viene bloccata? Calcola la distanza a mano (o nella console).

---

## Riepilogo degli strumenti per categoria

| Categoria | Elementi chiave |
|-----------|----------------|
| **Eventi mouse** | `mouseenter`, `mouseleave` (non si propagano); `mouseover`, `mouseout` (si propagano) |
| **Eventi tastiera/input** | `keydown` (prima), `input` (durante), `change` (al blur dopo modifica) |
| **Eventi focus** | `focus`, `blur` |
| **Selezione DOM** | `getElementById`, `querySelector`, `querySelectorAll` |
| **Modifica stile diretto** | `style.backgroundColor`, `style.display`, `style.width` |
| **Modifica stile via classi** | `classList.add`, `classList.remove`, `classList.toggle` |
| **Proprietà testo/form** | `value`, `textContent` (sicuro), `innerHTML` (attenzione XSS), `hidden` |
| **Metodi stringa** | `toUpperCase()`, `toLowerCase()`, `includes()` |
| **Template literal** | `` `${var}` `` — concatenazione leggibile |
| **Espressioni regolari** | `/pattern/.test(stringa)` |
| **Algoritmi** | Distanza di Levenshtein, lookup table per colori |

---

## Pattern fondamentale — da memorizzare

Quasi tutti gli esercizi sono variazioni di questo schema a tre passi:

```javascript
// 1. SELEZIONA l'elemento (o gli elementi)
const elemento = document.getElementById('...');

// 2. ASCOLTA l'evento
elemento.addEventListener('nomeEvento', function(event) {

  // 3. MODIFICA il DOM o lo stato
  //    (cambia testo, colore, visibilità, valore, ...)

});
```

> **Consiglio generale:** parti dall'esercizio 7 (il più semplice) per consolidare questo pattern.
> Quasi tutti gli altri esercizi sono variazioni dello stesso schema.
> Gli esercizi 8 e 12 sono i più impegnativi — affrontali per ultimi.

---

## Strategie di debug — cosa fare quando il codice non funziona

Quando un esercizio non si comporta come previsto, segui questi passi in ordine.

### 1. Controlla la Console (F12 → Console)

Gli errori JS appaiono in rosso. I più comuni:

| Messaggio di errore | Causa tipica | Soluzione |
|---|---|---|
| `Cannot read properties of null` | `getElementById` ha restituito `null` — id sbagliato o script prima del DOM | Verifica l'id nell'HTML; metti lo script in fondo al `<body>` |
| `is not a function` | Hai chiamato un metodo su un tipo sbagliato (es. `null.addEventListener`) | Stampa l'elemento con `console.log` prima di usarlo |
| `is not defined` | Variabile usata fuori dal suo scope | Controlla dove è dichiarata la variabile |
| `Unexpected token` | Errore di sintassi (parentesi mancante, virgola extra, …) | Guarda il numero di riga indicato nell'errore |

### 2. Usa `console.log` come sonda

```javascript
// Schema generale: stampa PRIMA di ogni operazione dubbia
console.log('--- inizio listener ---');
console.log('valore campo:', campo.value);
console.log('elemento output:', output); // null? undefined? elemento corretto?

// Se arrivi qui, tutto sopra era ok
output.textContent = campo.value.toUpperCase();
console.log('fatto');
```

Se nella Console vedi `--- inizio listener ---` ma non `fatto`, il problema è nella riga di mezzo.

### 3. Verifica con `typeof` e `instanceof`

```javascript
console.log(typeof campo.value);      // 'string' — corretto
console.log(typeof campo);            // 'object' — è un elemento DOM
console.log(campo instanceof HTMLElement); // true se è un elemento DOM valido
```

### 4. Testa i pezzi in isolamento nella Console

Non devi sempre modificare il file — puoi testare espressioni direttamente nella Console:

```javascript
// Nella Console del browser, con la pagina aperta:
document.getElementById('mio-id')         // verifica che l'elemento esista
/[A-Z]/.test('ciao')                      // testa una regex
'  Mario  '.trim()                         // testa un metodo stringa
generaEmail('mario', 'rossi')             // testa una tua funzione
```

### 5. Il breakpoint — fermare l'esecuzione su una riga

Nella scheda **Sources** (DevTools), clicca sul numero di riga del tuo codice per impostare un *breakpoint*. Quando il codice raggiunge quella riga, l'esecuzione si ferma e puoi ispezionare il valore di tutte le variabili in quel momento. È lo strumento più potente — usalo quando `console.log` non basta.

---

## Errori concettuali frequenti — da evitare

| Errore | Perché succede | Soluzione |
|---|---|---|
| Aggiungere il listener dentro un altro listener | Il listener annidato viene aggiunto *ogni volta* che l'evento esterno scatta — si accumula | Sposta il listener esterno |
| Chiamare la funzione invece di passarla | `addEventListener('click', miaFunzione())` esegue subito la funzione | Rimuovi le `()`: `addEventListener('click', miaFunzione)` |
| Usare `var` invece di `let`/`const` in un ciclo | `var` non ha scope di blocco — tutti i listener condividono la stessa variabile | Usa `let` o `const` |
| Confrontare stringhe con `==` invece di `===` | `'5' == 5` è `true` (coercizione), `'5' === 5` è `false` | Usa sempre `===` |
| Modificare `innerHTML` con input utente | Apre a XSS | Usa `textContent` per testo, `createElement` per nodi HTML |