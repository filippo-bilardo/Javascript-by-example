# Guida agli esercizi JavaScript DOM — Manipolazione e Navigazione

Suggerimenti mirati per ciascun esercizio, senza soluzione diretta. Per ogni esercizio sono indicati gli strumenti da usare (metodi, proprietà, pattern), una sequenza di ragionamenti guidati e frammenti di codice parziali che illustrano il meccanismo chiave.

> **Come leggere questa guida:** i frammenti di codice mostrano il *pattern* da applicare, non la soluzione dell'esercizio. Adattali al contesto specifico dell'HTML che hai davanti.

---

## Concetti fondamentali da capire prima di iniziare

### Il DOM come albero di oggetti — revisione rapida

Il browser trasforma l'HTML in un **albero di nodi**. Ogni tag diventa un nodo elemento (`Element`), il testo dentro un tag diventa un nodo testo (`Text`), i commenti diventano nodi commento. JavaScript non modifica il file HTML: modifica questo albero in memoria, e il browser ridisegna la pagina di conseguenza.

```
document                        ← nodo radice
└── <html>
    ├── <head>
    │   └── <title>  ← Element node
    │       └── "La mia pagina"  ← Text node
    └── <body>
        ├── <h1>
        │   └── "Titolo"
        ├── <ul id="lista">
        │   ├── <li class="voce">Primo  ← Element node
        │   └── <li class="voce">Secondo
        └── <p id="info">Testo
```

---

### Due famiglie di proprietà: nodi vs elementi

Navigando il DOM, incontrerai *due* famiglie di proprietà con nomi simili ma comportamento diverso:

| Proprietà "nodo" | Proprietà "elemento" | Differenza |
|---|---|---|
| `childNodes` | `children` | `childNodes` include nodi testo e commenti; `children` solo elementi |
| `firstChild` | `firstElementChild` | Idem |
| `lastChild` | `lastElementChild` | Idem |
| `previousSibling` | `previousElementSibling` | Idem |
| `nextSibling` | `nextElementSibling` | Idem |
| `parentNode` | `parentElement` | Quasi sempre equivalenti per tag HTML |

**Regola pratica:** usa quasi sempre le proprietà "elemento" (`children`, `firstElementChild`, ecc.) perché evitano sorprese con i nodi testo che il browser inserisce tra i tag per gli spazi bianchi.

```javascript
// Esempio: questa lista ha 3 <li>, ma childNodes ne mostra molti di più
// perché include anche i nodi testo degli spazi tra i tag
const ul = document.getElementById('lista');
console.log(ul.childNodes.length);      // es. 7 (con spazi bianchi)
console.log(ul.children.length);        // 3 (solo gli <li>)
```

---

### Creare elementi vs selezionare elementi esistenti

Due operazioni fondamentali che non vanno confuse:

```javascript
// SELEZIONARE un elemento già nell'HTML:
const el = document.getElementById('mio-id');    // trova nell'HTML
const el2 = document.querySelector('.classe');   // trova nell'HTML

// CREARE un nuovo elemento (non è ancora nella pagina!):
const nuovo = document.createElement('p');       // crea in memoria
nuovo.textContent = 'Testo del paragrafo';

// AGGIUNGERE l'elemento alla pagina (ora appare):
document.body.appendChild(nuovo);   // in fondo al body
// oppure:
contenitore.appendChild(nuovo);     // dentro un elemento specifico
// oppure:
contenitore.insertBefore(nuovo, riferimento); // prima di un elemento specifico
```

Un elemento creato con `createElement` *non esiste nella pagina* finché non lo aggiungi con `appendChild` o un metodo simile. Prima di aggiungere puoi modificarlo: imposta `textContent`, `className`, attributi — tutte operazioni che conviene fare prima dell'inserimento, per non forzare il browser a ridisegnare più volte.

---

### Quando viene eseguito il codice JS — il problema del DOM non ancora pronto

Se il tuo `<script>` è nell'`<head>`, il DOM non è ancora costruito quando il codice viene eseguito. `getElementById` restituisce `null` e lo script si blocca.

```javascript
// ❌ SBAGLIATO se lo script è nell'<head>:
const el = document.getElementById('titolo'); // null → errore al prossimo step

// ✅ Soluzione 1: metti <script> in fondo al <body>
// ✅ Soluzione 2: ascolta DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  const el = document.getElementById('titolo'); // funziona
  // tutto il tuo codice qui...
});
```

---

### Il browser DevTools per il DOM

La scheda **Elements** degli strumenti per sviluppatori (F12) mostra l'albero DOM *live*: mentre esegui codice JS nella Console, vedi i nodi cambiare in tempo reale. Usa la Console per sperimentare prima di scrivere codice nel file.

```javascript
// Nella Console del browser — tutto questo funziona direttamente:
document.getElementById('lista')             // vedi l'elemento
document.querySelectorAll('li').length       // conta gli elementi
document.title = 'Nuovo titolo'              // modifica il DOM live
document.body.style.background = 'lightblue' // effetto immediato
```

---

## Gruppo: esplorazione del documento

### Esercizio 1 — Pannello informazioni sulla pagina

**Strumenti utili:** `document.title`, `document.URL`, `document.readyState`, `textContent`

**Ragionaci così:**

1. L'oggetto `document` espone proprietà che descrivono il documento corrente: il titolo, l'URL, lo stato di caricamento.
2. Seleziona un `<div>` o `<p>` nell'HTML destinato a mostrare queste informazioni.
3. Componi una stringa con i dati del documento e assegnala a `textContent` dell'elemento.
4. Rifletti: quando eseguire questo codice? Se lo esegui prima che la pagina sia pronta, alcune proprietà potrebbero non avere il valore definitivo.

**Pattern da studiare — leggere proprietà di `document`:**
```javascript
// Le principali proprietà informative del documento:
console.log(document.title);        // testo del tag <title>
console.log(document.URL);          // URL completo della pagina
console.log(document.readyState);   // 'loading', 'interactive' o 'complete'
console.log(document.characterSet); // es. 'UTF-8'
console.log(document.lastModified); // data ultima modifica (stringa)

// Esempio: comporre un testo informativo
const info = `Titolo: ${document.title} | URL: ${document.URL}`;
```

> **Approfondimento — `document.readyState`:** questa proprietà cambia valore man mano che la pagina si carica:
> - `'loading'` — il browser sta ancora analizzando l'HTML
> - `'interactive'` — il DOM è pronto, ma immagini e fogli di stile potrebbero non essere caricati
> - `'complete'` — tutto è caricato
>
> Puoi ascoltarne i cambiamenti con `document.addEventListener('readystatechange', handler)`.

> **Approfondimento — modificare `document.title`:** `document.title` è sia leggibile che scrivibile. Le applicazioni web moderne lo modificano dinamicamente per indicare notifiche o lo stato dell'app (es. `"(3) Notifiche — Il mio sito"`). Prova nella Console: `document.title = 'Ciao!'` e osserva il cambio nella scheda del browser.

**Domande di autovalutazione:**
- Cosa restituisce `document.URL` se apri il file HTML direttamente dal filesystem (senza server web)?
- Esiste una proprietà per sapere quanti stili CSS sono caricati nella pagina? (Suggerimento: `document.styleSheets`)

---

### Esercizio 2 — Contatore di elementi nella pagina

**Strumenti utili:** `getElementsByTagName`, `querySelectorAll`, `.length`

**Ragionaci così:**

1. Scegli un tipo di tag da contare (es. `<p>`, `<a>`, `<img>`) oppure una classe CSS.
2. Usa `getElementsByTagName('p')` per una raccolta per tag, o `querySelectorAll('.classe')` per una raccolta per selettore CSS.
3. Leggi la proprietà `.length` della raccolta per sapere quanti ne hai trovati.
4. Mostra il risultato aggiornando il `textContent` di un elemento nell'HTML.
5. Se vuoi che il contatore si aggiorni automaticamente quando si aggiungono elementi, considera la differenza tra HTMLCollection (live) e NodeList (static).

**Pattern da studiare — raccogliere elementi e contarli:**
```javascript
// Tutti i paragrafi nella pagina:
const paragrafi = document.getElementsByTagName('p');
console.log(paragrafi.length); // numero di <p>

// Tutti gli elementi con classe 'voce':
const voci = document.querySelectorAll('.voce');
console.log(voci.length); // NodeList — statistica al momento della chiamata

// Aggiornare l'output nell'HTML:
document.getElementById('contatore').textContent = `Trovati: ${paragrafi.length}`;
```

> **Approfondimento — HTMLCollection vs NodeList:**
>
> | | `getElementsByTagName` / `getElementsByClassName` | `querySelectorAll` |
> |---|---|---|
> | Tipo | HTMLCollection | NodeList |
> | Aggiornamento | **Live** (si aggiorna da solo) | **Static** (fotografia del momento) |
> | `.forEach()` | ❌ Non disponibile | ✅ Disponibile |
>
> Se aggiungi un `<p>` alla pagina dopo aver chiamato `getElementsByTagName('p')`, la variabile si aggiorna automaticamente. Con `querySelectorAll` no: devi richiamare la funzione.

> **Approfondimento — selettore universale `*`:** `getElementsByTagName('*')` o `querySelectorAll('*')` selezionano *tutti* gli elementi della pagina. Utile per fare debugging o contare il totale dei nodi, ma da usare con cautela su pagine grandi per motivi di prestazioni.

**Trappola comune — chiamare `forEach` su HTMLCollection:** `getElementsByTagName` restituisce una HTMLCollection, non un array. Per usare `forEach` devi convertirla: `Array.from(htmlCollection).forEach(...)` oppure `[...htmlCollection].forEach(...)`.

**Domande di autovalutazione:**
- Cosa conta `querySelectorAll('li')` se hai liste annidate? Conta solo il primo livello o tutti?
- Come conteresti solo i `<li>` figli diretti di un `<ul>` specifico? (Suggerimento: selettore figlio `ul#id > li`)

---

## Gruppo: selezione degli elementi

### Esercizio 3 — Trova e modifica un elemento per ID

**Strumenti utili:** `getElementById`, `textContent`, `style`, `className`

**Ragionaci così:**

1. `getElementById` è il metodo più diretto per trovare un elemento con un ID specifico.
2. Verifica *sempre* che il risultato non sia `null` prima di usarlo (ID sbagliato, typo, elemento non ancora nel DOM).
3. Una volta selezionato l'elemento, puoi modificare: testo (`textContent`), stile inline (`style.proprietà`), classe CSS (`className` o `classList`), attributi (`setAttribute`).
4. Collega l'operazione a un evento (click su un pulsante) per renderla interattiva.

**Pattern da studiare — selezione per ID e modifica:**
```javascript
const elemento = document.getElementById('titolo-principale');

// Controllo di sicurezza (buona abitudine):
if (elemento === null) {
  console.error('Elemento non trovato! Verifica l\'id nell\'HTML.');
} else {
  // Modifica testo:
  elemento.textContent = 'Nuovo testo';

  // Modifica stile inline:
  elemento.style.color = '#e74c3c';
  elemento.style.fontSize = '2rem';

  // Modifica classe (sostituisce tutte le classi):
  elemento.className = 'evidenziato';

  // Modifica classe (aggiunge senza rimuovere le altre):
  elemento.classList.add('evidenziato');
}
```

> **Approfondimento — `style` inline vs classi CSS:** quando imposti `elemento.style.color`, stai aggiungendo uno stile inline che ha la *massima priorità* nella cascata CSS (sovrascrive tutto, tranne `!important`). Per la maggior parte degli effetti visivi è più pulito aggiungere/rimuovere una classe CSS predefinita nel foglio di stile, anziché impostare stili inline. Gli stili inline sono difficili da sovrascrivere e mescolano presentazione e logica.
>
> ```javascript
> // Preferibile: definisci la classe nel CSS, poi aggiungi/rimuovi con JS
> elemento.classList.toggle('attivo');  // aggiunge se manca, rimuove se c'è
>
> // Meno consigliato (stile inline):
> elemento.style.color = 'red';
> ```

**Trappola comune — `style` legge solo gli stili inline:** `elemento.style.color` restituisce il colore solo se è stato impostato come stile inline (da JS o dall'attributo `style` nell'HTML). Se il colore viene da un foglio CSS esterno, `elemento.style.color` è una stringa vuota. Per leggere il valore calcolato, usa `getComputedStyle(elemento).color`.

**Domande di autovalutazione:**
- Qual è la differenza tra `elemento.className = 'a b'` e `elemento.classList.add('a')`?
- Se modifichi `elemento.style.display = 'none'`, l'elemento è rimosso dal DOM? (No — è nascosto, ma il nodo esiste ancora.)

---

### Esercizio 4 — Applica uno stile a tutti gli elementi di una classe

**Strumenti utili:** `querySelectorAll`, `forEach`, `classList`, `style`

**Ragionaci così:**

1. Usa `querySelectorAll('.nome-classe')` per ottenere tutti gli elementi con quella classe.
2. Il risultato è una NodeList — puoi usare `forEach` direttamente su di essa.
3. Dentro la callback di `forEach`, `el` è ogni singolo elemento: modificalo come faresti con un elemento singolo.
4. Scegli se modificare direttamente lo `style` o aggiungere/rimuovere una classe CSS.

**Pattern da studiare — iterare su una selezione multipla:**
```javascript
// Seleziona tutti gli elementi con classe 'card':
const carte = document.querySelectorAll('.card');

// Itera e modifica ciascuno:
carte.forEach(function(carta) {
  carta.classList.add('in-evidenza');
  // oppure: carta.style.border = '2px solid gold';
});

// Con arrow function (più compatta):
carte.forEach(carta => carta.classList.toggle('selezionato'));
```

> **Approfondimento — `classList.toggle(classe, forza)`:** il secondo argomento opzionale di `toggle` è un booleano che *forza* il risultato: se `true` aggiunge la classe, se `false` la rimuove (senza alternare). Utile quando vuoi sincronizzare la presenza di una classe con una condizione:
> ```javascript
> // Aggiunge 'errore' se il campo è vuoto, rimuove se non lo è:
> campo.classList.toggle('errore', campo.value.trim() === '');
> ```

> **Approfondimento — selettori CSS avanzati con `querySelectorAll`:** puoi usare qualsiasi selettore CSS valido, inclusi i combinatori:
> ```javascript
> // Solo i <li> dentro #menu:
> document.querySelectorAll('#menu li')
> // I <p> fratelli diretti di <h2>:
> document.querySelectorAll('h2 + p')
> // Input obbligatori non ancora compilati:
> document.querySelectorAll('input[required]:not([value])')
> ```

**Domande di autovalutazione:**
- Se aggiungi un nuovo elemento con classe `card` *dopo* aver chiamato `querySelectorAll('.card')`, è incluso nella NodeList? Perché?
- Come selezioneresti solo le `card` che hanno *anche* la classe `featured`? (Suggerimento: selettore con due classi `.card.featured`)

---

### Esercizio 5 — Selettori CSS avanzati e attributi

**Strumenti utili:** `querySelector`, `querySelectorAll`, selettori di attributo `[attr]`, pseudo-classi `:first-child`, `:nth-child`, `:not`

**Ragionaci così:**

1. Alcune selezioni non si possono fare con `getElementById` o `getElementsByClassName` ma richiedono un selettore CSS. `querySelector` e `querySelectorAll` accettano *qualsiasi* selettore CSS valido.
2. Identifica nel tuo HTML quale attributo o posizione vuoi usare come criterio di selezione.
3. Costruisci il selettore CSS prima nella Console del browser per verificare che trovi gli elementi giusti, poi integra nel codice JS.

**Pattern da studiare — selettori di attributo e strutturali:**
```javascript
// Selettori di attributo:
document.querySelector('input[type="email"]')    // input di tipo email
document.querySelector('a[href^="https"]')        // link che iniziano con https
document.querySelector('img[alt=""]')             // immagini senza alt

// Pseudo-classi strutturali:
document.querySelector('li:first-child')          // primo <li>
document.querySelector('li:last-child')           // ultimo <li>
document.querySelector('tr:nth-child(even)')      // righe pari di una tabella
document.querySelector('p:not(.speciale)')        // <p> che non ha classe 'speciale'

// Combinatori:
document.querySelector('form > input')            // input figlio diretto di form
document.querySelector('h2 + p')                  // <p> immediatamente dopo <h2>
document.querySelector('h2 ~ p')                  // tutti i <p> fratelli dopo <h2>
```

> **Approfondimento — `matches(selettore)` su un elemento:** dato un elemento già selezionato, puoi verificare se soddisfa un selettore CSS:
> ```javascript
> const el = document.querySelector('#mio-link');
> if (el.matches('a[href^="https"]')) {
>   console.log('È un link sicuro');
> }
> ```
> Questo è utile nell'event delegation (vedi esercizio 12) per capire su quale tipo di elemento è avvenuto un click.

> **Approfondimento — `closest(selettore)`:** il metodo `closest` risale l'albero dal nodo corrente verso la radice e restituisce il primo antenato che soddisfa il selettore (o `null` se non ne trova nessuno):
> ```javascript
> // Cliccando su un <button> dentro una .card, trovare la .card:
> document.addEventListener('click', function(e) {
>   const card = e.target.closest('.card');
>   if (card) {
>     card.classList.toggle('aperta');
>   }
> });
> ```

**Domande di autovalutazione:**
- Cosa seleziona `'input:not([disabled])'`?
- Qual è la differenza tra `querySelector('div p')` e `querySelector('div > p')`?

---

## Gruppo: creazione e modifica di elementi

### Esercizio 6 — Crea e aggiungi un elemento al DOM

**Strumenti utili:** `createElement`, `textContent`, `appendChild`, `insertBefore`, `classList`

**Ragionaci così:**

1. Per aggiungere un nuovo elemento alla pagina, il flusso è sempre: **crea → configura → aggiungi**.
2. `document.createElement('tag')` crea il nodo ma non lo inserisce nella pagina.
3. Prima di inserirlo, imposta tutte le proprietà necessarie: testo, classi, attributi, stile.
4. Poi inseriscilo nel punto giusto dell'albero con `appendChild` (in fondo a un contenitore) o `insertBefore` (prima di un elemento di riferimento).

**Pattern da studiare — creazione e inserimento:**
```javascript
// Passo 1: CREA il nodo
const nuovoElemento = document.createElement('li');

// Passo 2: CONFIGURA (prima dell'inserimento per efficienza)
nuovoElemento.textContent = 'Nuova voce';
nuovoElemento.classList.add('voce', 'nuova');
nuovoElemento.setAttribute('data-id', '42');

// Passo 3: AGGIUNGI alla pagina
const lista = document.getElementById('mia-lista');
lista.appendChild(nuovoElemento);           // in fondo alla lista

// Alternativa: inserire prima di un elemento specifico
const primaVoce = lista.firstElementChild;
lista.insertBefore(nuovoElemento, primaVoce); // all'inizio della lista

// Metodo moderno (equivalente a insertBefore con null):
lista.prepend(nuovoElemento);    // all'inizio
lista.append(nuovoElemento);     // in fondo (come appendChild, ma accetta anche stringhe)
```

> **Approfondimento — `append` vs `appendChild`:** `append` è più moderno e flessibile: accetta sia nodi sia stringhe di testo, e puoi passare più argomenti in una volta sola. `appendChild` accetta solo un nodo alla volta e restituisce il nodo inserito (utile se vuoi tenerlo in una variabile).
> ```javascript
> lista.append(nodo1, nodo2, 'testo diretto'); // append, più flessibile
> lista.appendChild(nodo1);                    // appendChild, compatibilità più ampia
> ```

> **Approfondimento — `innerHTML` per inserimenti multipli:** se devi creare molti elementi in una volta, `innerHTML +=` sembra comodo ma ha un costo: il browser deve distruggere e ricostruire tutti i figli esistenti ad ogni `+=`. Per inserimenti multipli, crea tutti i nodi con `createElement`, raccoglili in un `DocumentFragment` e poi inserisci il fragment in un'unica operazione:
> ```javascript
> const frammento = document.createDocumentFragment();
> dati.forEach(d => {
>   const li = document.createElement('li');
>   li.textContent = d;
>   frammento.appendChild(li);
> });
> lista.appendChild(frammento); // una sola operazione DOM
> ```

**Trappola comune — `innerHTML +=` distrugge i listener:** `contenitore.innerHTML += '<p>Nuovo</p>'` sostituisce internamente tutto l'HTML del contenitore. Gli event listener aggiunti con `addEventListener` ai figli vengono persi perché i vecchi nodi vengono distrutti e ricreati. Preferisci `appendChild`/`append` per aggiungere senza toccare gli elementi esistenti.

**Domande di autovalutazione:**
- Cosa succede se chiami `appendChild` su un nodo che è già nel DOM (in un'altra posizione)? Viene duplicato o spostato?
- Come creeresti un `<a>` con testo, `href` e classe in un'unica sequenza di operazioni?

---

### Esercizio 7 — Rimuovi elementi dal DOM

**Strumenti utili:** `removeChild`, `remove()`, `parentElement`

**Ragionaci così:**

1. Ci sono due approcci principali: il metodo moderno `elemento.remove()` e il metodo classico `genitore.removeChild(elemento)`.
2. Con `remove()` agisci direttamente sull'elemento da rimuovere — non devi conoscere il genitore.
3. Con `removeChild(figlio)` agisci sul genitore — devi prima trovarlo con `elemento.parentElement`.
4. Dopo la rimozione, il nodo esiste ancora in memoria (nella variabile JS), ma non è più nell'albero DOM — non è visibile e non risponde agli eventi.

**Pattern da studiare — rimozione di un elemento:**
```javascript
const elemento = document.getElementById('da-rimuovere');

// Metodo moderno (consigliato):
elemento.remove();

// Metodo classico (compatibilità più ampia):
elemento.parentElement.removeChild(elemento);

// Rimuovere tutti i figli di un contenitore:
const contenitore = document.getElementById('lista');
while (contenitore.firstChild) {
  contenitore.removeChild(contenitore.firstChild);
}
// Oppure, più conciso ma meno sicuro:
contenitore.innerHTML = '';
```

> **Approfondimento — svuotare un contenitore: quale approccio?**
>
> | Tecnica | Cosa fa | Rischio |
> |---|---|---|
> | `innerHTML = ''` | Distrugge e butta via tutti i nodi figli | Perde event listener aggiunti ai figli |
> | Ciclo con `removeChild` | Rimuove un nodo per volta | Nessuno, ma verboso |
> | `replaceChildren()` | Sostituisce tutti i figli (API moderna) | Non supportato da browser molto vecchi |
>
> Se i figli non hanno listener, `innerHTML = ''` va bene. Se ne hanno, usa il ciclo o `replaceChildren()`.

> **Approfondimento — `detach` vs rimozione definitiva:** rimuovere un nodo con `remove()` o `removeChild` lo toglie dal DOM ma non lo cancella dalla memoria JS — la variabile lo tiene in vita. Puoi reinserirlo in seguito con `appendChild`. Se non hai più bisogno del nodo e vuoi liberare la memoria, basta lasciare uscire la variabile dallo scope (o assegnarle `null`).

**Domande di autovalutazione:**
- Cosa succede ai listener degli elementi rimossi con `innerHTML = ''`? Vengono rimossi anche dalla memoria o causano una memory leak?
- Come rimuoveresti solo i `<li>` che hanno una certa classe, senza rimuovere gli altri?

---

### Esercizio 8 — Leggi e modifica attributi

**Strumenti utili:** `getAttribute`, `setAttribute`, `hasAttribute`, `removeAttribute`, `dataset`

**Ragionaci così:**

1. Gli attributi HTML si gestiscono con i metodi `get/set/has/removeAttribute` oppure accedendo direttamente alle proprietà dell'oggetto DOM (per gli attributi standard).
2. Gli attributi `data-*` personalizzati sono accessibili tramite la proprietà `dataset` dell'elemento — più comodo che usare `getAttribute('data-nome')`.
3. Rifletti sulla differenza tra *attributo* (valore nell'HTML, stringa) e *proprietà* (valore nell'oggetto DOM, può essere un tipo diverso).

**Pattern da studiare — lettura e modifica di attributi:**
```javascript
const immagine = document.getElementById('foto');

// Lettura:
const src  = immagine.getAttribute('src');    // 'img/gatto.jpg'
const esiste = immagine.hasAttribute('alt');  // true o false

// Modifica:
immagine.setAttribute('src', 'img/cane.jpg');
immagine.setAttribute('alt', 'Un cane');

// Rimozione:
immagine.removeAttribute('title');

// Accesso diretto alle proprietà per attributi standard:
immagine.src = 'img/cane.jpg';  // equivalente a setAttribute
immagine.alt = 'Un cane';

// Attributi personalizzati data-*:
// HTML: <li data-id="42" data-categoria="frutta">Mela</li>
const li = document.querySelector('[data-id="42"]');
console.log(li.dataset.id);        // '42' (sempre stringa)
console.log(li.dataset.categoria); // 'frutta'
li.dataset.selezionato = 'true';   // aggiunge data-selezionato="true" all'HTML
```

> **Approfondimento — attributo vs proprietà: una differenza sottile:** per l'`<input>`, `input.getAttribute('value')` restituisce il valore *iniziale* scritto nell'HTML. `input.value` restituisce il valore *corrente* (quello digitato dall'utente). Queste due cose possono differire:
> ```javascript
> // HTML: <input id="nome" value="Valore iniziale">
> const input = document.getElementById('nome');
> // L'utente digita "Testo nuovo" nel campo
> console.log(input.getAttribute('value')); // 'Valore iniziale' — l'HTML non cambia
> console.log(input.value);                 // 'Testo nuovo' — il valore corrente
> ```

> **Approfondimento — `dataset` e convenzioni di naming:** i nomi degli attributi `data-*` in HTML usano il kebab-case (`data-nome-composto`), ma in JavaScript il `dataset` li converte in camelCase (`dataset.nomeComposto`):
> ```javascript
> // HTML: <div data-user-id="99" data-is-active="true">
> el.dataset.userId   // '99'
> el.dataset.isActive // 'true' (sempre stringa — converti se serve: parseInt, === 'true', ...)
> ```

**Domande di autovalutazione:**
- `img.src` restituisce il path relativo (es. `'img/gatto.jpg'`) o l'URL assoluto (es. `'http://localhost/img/gatto.jpg'`)?
- Come potresti selezionare tutti gli elementi che hanno un attributo `data-selezionato="true"` usando `querySelectorAll`?

---

## Gruppo: navigazione nel DOM

### Esercizio 9 — Naviga tra genitore e figli

**Strumenti utili:** `parentElement`, `children`, `firstElementChild`, `lastElementChild`, `childElementCount`

**Ragionaci così:**

1. Partendo da qualsiasi elemento, puoi muoverti nell'albero: verso il genitore con `parentElement`, verso i figli con `children` o `firstElementChild`/`lastElementChild`.
2. `children` restituisce una HTMLCollection live dei soli elementi figli (non testo, non commenti).
3. Usa `childElementCount` per sapere quanti figli elemento ha un nodo senza scorrere tutta la collezione.

**Pattern da studiare — risalire e scendere l'albero:**
```javascript
const elemento = document.getElementById('voce-selezionata');

// Risalire:
const genitore  = elemento.parentElement;
const nonno     = elemento.parentElement.parentElement;

// Scendere:
const figliTutti   = genitore.children;          // HTMLCollection di elementi
const primoFiglio  = genitore.firstElementChild;
const ultimoFiglio = genitore.lastElementChild;
const numeroDiFigli = genitore.childElementCount;

// Iterare i figli:
Array.from(genitore.children).forEach(function(figlio) {
  figlio.classList.remove('attivo');
});

// Poi evidenziare solo quello cliccato:
elemento.classList.add('attivo');
```

> **Approfondimento — pattern "deseleziona tutti, seleziona uno":** uno degli usi più frequenti della navigazione DOM è evidenziare una voce di un menù o di una lista. Il pattern classico è: 1) togli la classe attiva da tutti i fratelli, 2) aggiungila all'elemento corrente.
> ```javascript
> lista.addEventListener('click', function(e) {
>   if (!e.target.matches('li')) return; // guard: ignora click fuori dai <li>
>
>   // 1. Rimuovi 'attivo' da tutti i <li> fratelli
>   Array.from(e.target.parentElement.children).forEach(li => li.classList.remove('attivo'));
>
>   // 2. Aggiungi 'attivo' a quello cliccato
>   e.target.classList.add('attivo');
> });
> ```

**Trappola comune — `children` vs `childNodes`:** se tra i tag `<li>` ci sono spazi (e ci sono quasi sempre), `childNodes` conta anche i nodi testo. Il primo `childNodes[0]` potrebbe essere uno spazio bianco, non il primo `<li>`. Usa sempre `children` o `firstElementChild` per navigare solo tra elementi.

**Domande di autovalutazione:**
- `elemento.parentElement` è sempre lo stesso di `elemento.parentNode`? In quale caso potrebbero differire?
- Come arriveresti al nonno di un elemento in una sola espressione senza variabili intermedie?

---

### Esercizio 10 — Naviga tra fratelli

**Strumenti utili:** `nextElementSibling`, `previousElementSibling`

**Ragionaci così:**

1. `nextElementSibling` restituisce il fratello successivo (stesso genitore, posizione successiva), saltando automaticamente i nodi testo.
2. `previousElementSibling` restituisce il fratello precedente.
3. Se il fratello non esiste (sei al primo o all'ultimo), il valore è `null` — controlla sempre prima di usarlo.
4. Un uso classico: navigazione tipo "avanti/indietro" tra elementi di una lista (es. uno slider, un wizard multi-step, le domande di un quiz).

**Pattern da studiare — spostamento tra fratelli:**
```javascript
let corrente = document.querySelector('.attivo');

function avanti() {
  const prossimo = corrente.nextElementSibling;
  if (prossimo === null) return; // siamo all'ultimo, non fare nulla

  corrente.classList.remove('attivo');
  prossimo.classList.add('attivo');
  corrente = prossimo;           // aggiorna il riferimento
}

function indietro() {
  const precedente = corrente.previousElementSibling;
  if (precedente === null) return; // siamo al primo

  corrente.classList.remove('attivo');
  precedente.classList.add('attivo');
  corrente = precedente;
}
```

> **Approfondimento — variabile di stato `corrente`:** nota che `corrente` è una variabile che tiene traccia di *dove siamo* nell'elenco. Questo è un esempio elementare di **stato dell'applicazione**: un valore che persiste tra un'interazione e l'altra. Le funzioni `avanti()` e `indietro()` leggono e modificano questo stato. Tenerlo separato dalla logica di presentazione (le classi CSS) è un buon segno di codice organizzato.

> **Approfondimento — navigazione con wrapping:** se vuoi che dopo l'ultimo elemento si torni al primo (comportamento "circolare"), devi gestire il caso `null`:
> ```javascript
> const prossimo = corrente.nextElementSibling || corrente.parentElement.firstElementChild;
> // Se nextElementSibling è null (siamo all'ultimo), vai al primo figlio del genitore
> ```
> L'operatore `||` restituisce il primo valore truthy: se `nextElementSibling` è `null` (falsy), valuta l'espressione a destra.

**Domande di autovalutazione:**
- Cosa restituisce `elemento.nextElementSibling.nextElementSibling`? E se il secondo fratello non esiste?
- Come implementeresti lo stesso comportamento "avanti/indietro" usando indici di array invece della navigazione DOM?

---

### Esercizio 11 — Risali l'albero con `closest`

**Strumenti utili:** `closest(selettore)`, `parentElement`, `matches(selettore)`

**Ragionaci così:**

1. Immagina una struttura HTML annidata: un `<span>` dentro un `<p>` dentro un `<article>`. Se l'utente clicca sullo `<span>`, `event.target` è lo span.
2. Spesso però ti interessa l'`<article>` contenitore, non lo span specifico. Risalire con tanti `parentElement.parentElement.parentElement` è fragile (se la struttura HTML cambia, si rompe).
3. `closest(selettore)` risale automaticamente fino a trovare il primo antenato che soddisfa il selettore CSS. Restituisce `null` se non ne trova nessuno.

**Pattern da studiare — risalire con `closest`:**
```javascript
// Struttura HTML:
// <ul id="lista">
//   <li class="card" data-id="1">
//     <h3>Titolo</h3>
//     <button class="btn-elimina">Elimina</button>
//   </li>
// </ul>

document.getElementById('lista').addEventListener('click', function(e) {
  // L'utente potrebbe aver cliccato sul <button>, o sul testo dentro il <button>
  // Con closest troviamo sempre la .card contenitrice:
  const card = e.target.closest('.card');

  if (card === null) return; // click fuori da una .card

  const id = card.dataset.id;
  console.log('Cliccata card con id:', id);

  // Gestione specifica per il bottone elimina:
  if (e.target.matches('.btn-elimina')) {
    card.remove();
  }
});
```

> **Approfondimento — `closest` come alternativa sicura alla navigazione manuale:** `parentElement.parentElement` rompe se qualcuno aggiunge un elemento HTML in più nella struttura. `closest('.card')` funziona indipendentemente dalla profondità di annidamento — è robusto ai cambiamenti di struttura.

> **Approfondimento — differenza tra `closest` e `querySelector`:**
> - `querySelector('#contenitore .card')` cerca *scendendo* dall'elemento specificato verso i figli.
> - `elemento.closest('.card')` cerca *salendo* dall'elemento verso i genitori.
> Si muovono in direzioni opposte nell'albero.

**Domande di autovalutazione:**
- Cosa restituisce `e.target.closest('body')`? (Suggerimento: `<body>` è un antenato di quasi tutto.)
- Se l'utente clicca direttamente sull'`<li class="card">` (non su un elemento figlio), `e.target.closest('.card')` restituisce `null` o l'`<li>` stesso? Perché? (Suggerimento: `closest` include l'elemento di partenza nel controllo.)

---

## Gruppo: eventi avanzati del DOM

### Esercizio 12 — Event delegation su una lista dinamica

**Strumenti utili:** `addEventListener` (sul contenitore), `event.target`, `matches`, `closest`, `createElement`, `appendChild`

**Ragionaci così:**

1. Se aggiungi un evento a ogni `<li>` di una lista, e poi aggiungi nuovi `<li>` dinamicamente, quelli nuovi *non hanno* il listener — l'hai aggiunto solo agli elementi esistenti al momento.
2. La soluzione è l'**event delegation**: aggiungi il listener al contenitore (es. `<ul>`) e sfrutta il bubbling. Ogni click su un `<li>` risale fino all'`<ul>`, che gestisce l'evento per tutti i suoi figli — presenti e futuri.
3. Dentro l'handler, `event.target` è l'elemento su cui l'utente ha cliccato. Usa `matches` o `closest` per assicurarti di gestire solo i click sui `<li>` (e non sul padding della lista, ad esempio).

**Pattern da studiare — event delegation:**
```javascript
const lista = document.getElementById('lista-dinamica');

// Un solo listener sul contenitore — gestisce TUTTI i <li>, anche quelli futuri:
lista.addEventListener('click', function(event) {
  // Controlla che il click sia su un <li> (non su altri figli eventuali):
  const voce = event.target.closest('li');
  if (voce === null) return; // click fuori dai <li>

  // Ora 'voce' è il <li> cliccato — agisci:
  voce.classList.toggle('selezionato');
  console.log('Cliccata:', voce.textContent);
});

// Funzione per aggiungere nuove voci (senza dover riaggiungere listener):
function aggiungiVoce(testo) {
  const li = document.createElement('li');
  li.textContent = testo;
  lista.appendChild(li);
  // Il listener sull'<ul> si applica automaticamente anche a questo nuovo <li>
}
```

> **Approfondimento — perché l'event delegation è un pattern fondamentale:** in applicazioni reali le liste vengono popolate da dati (API, database) e gli elementi cambiano continuamente. Aggiungere un listener per ogni elemento significa:
> 1. Farlo ogni volta che aggiungi elementi (complessità)
> 2. Ricordarsi di rimuoverlo quando l'elemento viene cancellato (rischio memory leak)
>
> Con la delegation: un solo listener, nessun cleanup necessario. È anche più performante: un listener vs cento.

> **Approfondimento — gestire più azioni con un unico listener:** se la lista ha pulsanti diversi (es. "Modifica" e "Elimina"), puoi gestirli tutti con un unico listener sul contenitore usando `matches`:
> ```javascript
> contenitore.addEventListener('click', function(e) {
>   if (e.target.matches('.btn-modifica')) {
>     const card = e.target.closest('.card');
>     // logica modifica...
>   } else if (e.target.matches('.btn-elimina')) {
>     const card = e.target.closest('.card');
>     card.remove();
>   }
> });
> ```

> **Approfondimento — `event.preventDefault()` nel DOM:** alcuni elementi HTML hanno comportamenti predefiniti: i link navigano, i form si inviano, i checkbox si selezionano. Per bloccare questo comportamento e gestirlo con JS, chiama `event.preventDefault()` nell'handler:
> ```javascript
> document.querySelector('form').addEventListener('submit', function(e) {
>   e.preventDefault(); // blocca l'invio e il ricaricamento della pagina
>   // ora puoi gestire i dati del form con JS
> });
>
> document.querySelector('a').addEventListener('click', function(e) {
>   e.preventDefault(); // blocca la navigazione
>   // gestisci il click diversamente
> });
> ```

**Trappola comune — event delegation con elementi annidati:** se il `<li>` contiene elementi figli (es. `<li><span>Testo</span><button>❌</button></li>`), `event.target` potrebbe essere lo `<span>` o il `<button>`, non il `<li>`. Usa sempre `event.target.closest('li')` invece di controllare direttamente `event.target.tagName === 'LI'` per gestire questo caso correttamente.

**Domande di autovalutazione:**
- Perché l'event delegation funziona? (Risposta: per il **bubbling** — l'evento risale l'albero fino al contenitore.)
- Se chiami `event.stopPropagation()` all'interno di un handler su un `<li>`, il listener sul `<ul>` viene notificato? Perché?
- Come implementeresti il riordinamento degli elementi di una lista tramite pulsanti "Su" / "Giù" usando `insertBefore` e la navigazione tra fratelli?

---

## Riepilogo degli strumenti per categoria

| Categoria | Strumento | Uso principale |
|---|---|---|
| **Proprietà documento** | `document.title`, `document.URL`, `document.readyState` | Leggere/modificare metadati della pagina |
| **Selezione singola** | `getElementById`, `querySelector` | Trovare un elemento specifico |
| **Selezione multipla** | `getElementsByClassName`, `querySelectorAll` | Trovare insiemi di elementi |
| **Creazione nodi** | `createElement`, `createTextNode`, `createDocumentFragment` | Creare nuovi elementi in memoria |
| **Inserimento** | `appendChild`, `append`, `prepend`, `insertBefore` | Aggiungere nodi al DOM |
| **Rimozione** | `remove()`, `removeChild`, `replaceChildren` | Togliere nodi dal DOM |
| **Contenuto** | `textContent` (sicuro), `innerHTML` (attenzione XSS) | Leggere/modificare il testo o l'HTML |
| **Attributi** | `getAttribute`, `setAttribute`, `dataset` | Leggere/modificare gli attributi |
| **Classi CSS** | `classList.add/remove/toggle/contains/replace` | Gestire le classi di un elemento |
| **Stile inline** | `style.proprietà`, `getComputedStyle(el)` | Leggere/modificare stili (preferisci classi) |
| **Navigazione su** | `parentElement`, `closest(sel)` | Risalire verso i genitori |
| **Navigazione giù** | `children`, `firstElementChild`, `lastElementChild` | Scendere verso i figli |
| **Navigazione laterale** | `nextElementSibling`, `previousElementSibling` | Spostarsi tra fratelli |
| **Verifica** | `matches(sel)`, `contains(nodo)`, `hasAttribute` | Verificare caratteristiche di un nodo |

---

## Pattern fondamentale — il ciclo di vita di un elemento

Quasi tutte le operazioni DOM avanzate seguono questo schema:

```javascript
// 1. SELEZIONA il punto di ancoraggio nel DOM esistente
const contenitore = document.getElementById('...');

// 2. CREA il nuovo nodo (in memoria, non ancora visibile)
const nuovo = document.createElement('div');

// 3. CONFIGURA il nodo prima di inserirlo
nuovo.textContent     = '...';
nuovo.className       = '...';
nuovo.dataset.id      = '...';
nuovo.addEventListener('click', handler); // puoi già aggiungere listener

// 4. INSERISCI nel DOM (ora diventa visibile)
contenitore.appendChild(nuovo);

// --- In seguito ---

// 5. NAVIGA per trovarlo di nuovo (se non hai tenuto il riferimento)
const trovato = contenitore.querySelector('[data-id="..."]');

// 6. RIMUOVI quando non serve più
trovato.remove();
```

> **Consiglio generale:** inizia dagli esercizi 1–5 per familiarizzare con selezione e lettura di proprietà. Gli esercizi 6–8 (creazione, rimozione, attributi) sono il cuore della manipolazione DOM. Gli esercizi 9–11 (navigazione) servono quando non puoi usare un ID diretto. L'esercizio 12 (event delegation) è il più avanzato ma anche quello più usato nel codice reale.

---

## Strategie di debug per il DOM

### Problemi comuni e come risolverli

| Sintomo | Causa probabile | Come verificare |
|---|---|---|
| `getElementById` restituisce `null` | ID sbagliato, typo, o script eseguito prima del DOM | `console.log(document.getElementById('id'))` — vedi `null`? Controlla l'HTML |
| L'elemento esiste ma le modifiche non si vedono | Stai modificando una copia, non l'elemento nella pagina | Stampa l'elemento con `console.log` — è un HTMLElement o `undefined`? |
| `forEach` su una raccolta restituisce errore | Stai usando `forEach` su una HTMLCollection, non su una NodeList | Usa `Array.from(collezione).forEach(...)` |
| Event listener non scatta | Aggiunto *dopo* che l'evento è già scattato, o all'elemento sbagliato | Aggiungi `console.log('listener aggiunto')` dopo `addEventListener` |
| Elementi duplicati ad ogni click | `createElement`/`appendChild` dentro un listener che si ripete | Sposta la creazione fuori dal listener o controlla prima se esiste già |
| Modifiche a `innerHTML +=` rimuovono i listener | `innerHTML +=` distrugge e ricrea tutti i nodi figli | Usa `appendChild`/`append` invece di `innerHTML +=` |

### Come ispezionare il DOM nella Console

```javascript
// Vedere l'albero di un elemento:
console.dir(document.getElementById('mio-id')); // vista oggetto con tutte le proprietà

// Vedere la struttura HTML di un elemento:
console.log(document.getElementById('mio-id').outerHTML);

// Verificare quanti listener ci sono su un elemento:
// (Solo nelle DevTools → scheda Elements → Event Listeners)

// Cercare elementi con un selettore direttamente nella Console:
document.querySelectorAll('.card').length // quante card ci sono?
```
