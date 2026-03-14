# Esercizi — Strutture Condizionali

Questa cartella contiene gli esercizi pratici associati alla lezione **04 — Strutture Condizionali**.  
Ogni esercizio è un file HTML autonomo e funzionante, pronto da aprire nel browser.

---

## Esercizi presenti

| File | Argomento | Guida di riferimento |
|------|-----------|----------------------|
| [01. calcolatrice.html](01.%20calcolatrice.html) | Calcolatrice con `if/else` e `switch` | [01_If_Else](../teoria/01_If_Else.md), [02_Switch](../teoria/02_Switch.md) |
| [17_esploratore_truthy_falsy.html](17_esploratore_truthy_falsy.html) | Esploratore interattivo truthy/falsy, `typeof`, `Boolean()` | [04_Valutazione_Condizionale](../teoria/04_Valutazione_Condizionale.md) |
| [18_default_or_nullish.html](18_default_or_nullish.html) | Differenza tra `\|\|` e `??` con tabella comparativa | [04_Valutazione_Condizionale](../teoria/04_Valutazione_Condizionale.md) |
| [19_profilo_utente_optional_chaining.html](19_profilo_utente_optional_chaining.html) | Profilo utente con `?.` e `??` su proprietà opzionali | [04_Valutazione_Condizionale](../teoria/04_Valutazione_Condizionale.md) |
| [20_autenticazione_cortocircuito.html](20_autenticazione_cortocircuito.html) | Login con `&&` a cascata e selezione errore con `\|\|` | [04_Valutazione_Condizionale](../teoria/04_Valutazione_Condizionale.md) |
| [21_permessi_utente.html](21_permessi_utente.html) | Sistema di ruoli (admin/editor/viewer) con `&&` e `\|\|` | [04_Valutazione_Condizionale](../teoria/04_Valutazione_Condizionale.md) |

---

## Esercizi proposti

Gli esercizi sono organizzati per guida teorica di riferimento e ordinati per difficoltà crescente.

---

### 01 — `if`, `else`, `else if`
> Guida: [01_If_Else.md](../teoria/01_If_Else.md)

| # | Titolo | Descrizione | Difficoltà |
|---|--------|-------------|------------|
| 02 | **Classificatore di voti** | Inserire un voto numerico (0–10) e visualizzare il giudizio corrispondente: insufficiente, sufficiente, buono, ottimo. Usare `if/else if`. | ⭐ |
| 03 | **Verifica anno bisestile** | Dato un anno inserito dall'utente, determinare se è bisestile applicando le regole esatte (divisibile per 4, non per 100, oppure per 400). | ⭐ |
| 04 | **Semaforo** | Simulare un semaforo: l'utente seleziona il colore (rosso, giallo, verde) e il programma mostra l'azione da compiere (stop, rallentare, via libera). | ⭐ |
| 05 | **Controllo accesso età** | Chiedere l'età e verificare se l'utente può: vedere un film vietato ai minori di 18, guidare (16+), votare (18+), andare in pensione (67+). Mostrare tutti i diritti applicabili. | ⭐⭐ |
| 06 | **Classificatore di temperatura** | Categorizzare la temperatura inserita in: gelido (<0), freddo (0–10), fresco (10–18), mite (18–25), caldo (25–35), afoso (>35). | ⭐ |
| 07 | **Gioco indovina il numero** | Generare un numero casuale 1–100. L'utente inserisce un tentativo e riceve i messaggi "troppo alto", "troppo basso" o "indovinato!" (versione senza ciclo: un solo tentativo). | ⭐⭐ |

---

### 02 — `switch`
> Guida: [02_Switch.md](../teoria/02_Switch.md)

| # | Titolo | Descrizione | Difficoltà |
|---|--------|-------------|------------|
| 08 | **Giorni della settimana** | Dato un numero (1–7), visualizzare il nome del giorno. Con `default` gestire valori non validi. | ⭐ |
| 09 | **Mesi dell'anno** | Dato un numero di mese (1–12), mostrare il nome del mese e il numero di giorni (28/29 per febbraio con anno bisestile). | ⭐⭐ |
| 10 | **Menu ristorante** | Presentare un menu testuale con più categorie (antipasti, primi, secondi, dolci). L'utente sceglie una categoria con un numero e vede i piatti disponibili. Usare `switch` con `fallthrough` per categorie combinate. | ⭐⭐ |
| 11 | **Converstore di unità** | L'utente sceglie il tipo di conversione (km→miglia, kg→libbre, °C→°F, euro→dollari) tramite numero o lettera, poi inserisce il valore. Gestire con `switch`. | ⭐⭐ |
| 12 | **Stagioni dell'anno** | Dato il numero del mese, determinare la stagione (primavera, estate, autunno, inverno) usando `switch` con casi multipli (`fallthrough`). | ⭐ |

---

### 03 — Operatore Ternario
> Guida: [03_Operatore_Ternario.md](../teoria/03_Operatore_Ternario.md)

| # | Titolo | Descrizione | Difficoltà |
|---|--------|-------------|------------|
| 13 | **Pari o Dispari** | Dato un numero, mostrare "pari" o "dispari" usando l'operatore ternario. Visualizzare anche il risultato con e senza ternario per confronto. | ⭐ |
| 14 | **Sconto automatico** | Un prezzo base viene scontato del 20% se supera 100€, del 10% se supera 50€, altrimenti nessuno sconto. Usare ternari annidati e mostrare il prezzo finale. | ⭐⭐ |
| 15 | **Benvenuto personalizzato** | Chiedere nome e ora del giorno (numero 0–23). Usare ternari per: saluto (buongiorno/buon pomeriggio/buonasera/buonanotte) e messaggio personalizzato. | ⭐⭐ |
| 16 | **Validazione form con ternario** | Form con campi nome, email, età. Mostrare accanto a ciascun campo ✅ o ❌ usando l'operatore ternario per la validazione. | ⭐⭐ |

---

### 04 — Valutazione Condizionale (truthy/falsy, `&&`, `||`, `??`, `?.`)
> Guida: [04_Valutazione_Condizionale.md](../teoria/04_Valutazione_Condizionale.md)

✅ Tutti gli esercizi di questo gruppo sono stati realizzati — vedi la sezione **Esercizi presenti**.

---


### Esercizi Integrativi (più guide combinate)

| # | Titolo | Descrizione | Difficoltà |
|---|--------|-------------|------------|
| 26 | **Quiz a risposta multipla** | Quiz con 5 domande, 4 risposte ciascuna. Usare `switch` per navigare le domande, ternario per il feedback immediato, e `if/else` per il punteggio finale. | ⭐⭐⭐ |
| 27 | **Generatore di messaggi personalizzati** | Dato un oggetto utente con nome, età, ruolo e preferenze (optional chaining + nullish coalescing), generare un messaggio di benvenuto completo usando tutte le tecniche viste. | ⭐⭐⭐ |
| 28 | **Mini RPG — sistema di combattimento** | Simulare un turno di combattimento: l'eroe e il nemico hanno HP e attacchi. Usare tutte le strutture condizionali per determinare effetti speciali, critici, difese e l'esito del turno. | ⭐⭐⭐⭐ |

---

## Come svolgere gli esercizi

1. Crea un file `.html` nella stessa cartella con il numero e il nome dell'esercizio (es. `02_classificatore_voti.html`)
2. Ogni file deve essere un documento HTML completo e funzionante, apribile direttamente nel browser
3. Inserisci una breve descrizione dell'esercizio come commento all'inizio del file
4. Usa JavaScript vanilla (senza librerie esterne)

---

[← README esercitazione](../README.md) | [Teoria](../teoria/) | [Esempi](../esempi/)
