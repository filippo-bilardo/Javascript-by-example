# Esercitazione: Web Storage

## Descrizione

Il Web Storage è un'API JavaScript che permette alle applicazioni web di memorizzare dati localmente nel browser dell'utente in modo semplice e sicuro. A differenza dei cookie tradizionali, il Web Storage offre uno spazio di archiviazione molto più ampio e i dati non vengono inviati automaticamente al server con ogni richiesta HTTP.

Questa lezione esplora le due modalità di Web Storage disponibili: **localStorage** per la persistenza dei dati a lungo termine e **sessionStorage** per i dati temporanei legati alla sessione del browser.

## Obiettivi dell'esercitazione

- Comprendere il concetto di Web Storage e le sue applicazioni
- Distinguere tra localStorage e sessionStorage e sapere quando usarli
- Padroneggiare i metodi dell'API Storage (setItem, getItem, removeItem, clear)
- Imparare a serializzare e deserializzare dati complessi con JSON
- Gestire eventi di storage per sincronizzare dati tra schede
- Applicare best practices per la gestione dei dati nel browser

## Contenuti Teorici

1. [Introduzione al Web Storage](./01_Introduzione_Web_Storage.md)
2. [localStorage vs sessionStorage](./02_LocalStorage_vs_SessionStorage.md)
3. [API e Metodi del Web Storage](./03_API_Metodi.md)
4. [Memorizzazione di Dati Complessi](./04_Dati_Complessi.md)
5. [Eventi di Storage](./05_Eventi_Storage.md)
6. [Best Practices e Sicurezza](./06_Best_Practices.md)

## Esercizi Pratici

### Esercizio 1: Preferenze Utente
Crea un'applicazione che permette all'utente di salvare le proprie preferenze (tema, lingua, dimensione testo) e le ricarica automaticamente al prossimo accesso.

### Esercizio 2: Form con Autosalvataggio
Implementa un form che salva automaticamente i dati inseriti mentre l'utente digita, così da non perdere informazioni in caso di chiusura accidentale della pagina.

### Esercizio 3: Carrello della Spesa
Crea un carrello della spesa che mantiene gli articoli aggiunti anche dopo il refresh della pagina, con possibilità di modificare quantità e rimuovere prodotti.

### Esercizio 4: Sistema di Autenticazione Simulato
Implementa un semplice sistema di login che mantiene lo stato dell'utente connesso utilizzando localStorage, con gestione del logout e del timeout della sessione.

### Esercizio 5: Sincronizzazione tra Schede
Crea un'applicazione che mostra in tempo reale le modifiche effettuate in altre schede del browser utilizzando gli eventi di storage.

## Casi d'Uso Comuni

- **Preferenze utente**: Tema scuro/chiaro, lingua, impostazioni UI
- **Stato dell'applicazione**: Dati di form non inviati, posizione di scroll, filtri applicati
- **Cache locale**: Risultati di ricerca, dati scaricati da API
- **Autenticazione**: Token di sessione, informazioni utente
- **Carrelli e-commerce**: Prodotti selezionati, wishlist
- **Applicazioni offline-first**: Sincronizzazione dati quando online

## Differenze con altre soluzioni di storage

| Caratteristica | localStorage | sessionStorage | Cookies | IndexedDB |
|----------------|-------------|----------------|---------|-----------|
| Capacità | ~5-10 MB | ~5-10 MB | ~4 KB | Centinaia di MB |
| Persistenza | Permanente | Sessione tab | Configurabile | Permanente |
| Inviato al server | No | No | Sì | No |
| API | Sincrona | Sincrona | Limitata | Asincrona |
| Complessità | Bassa | Bassa | Bassa | Alta |

## Note Importanti

- I dati del Web Storage sono specifici per dominio e protocollo
- Solo stringhe possono essere memorizzate (usa JSON per oggetti)
- Non adatto per dati sensibili (non è criptato)
- Operazioni sincrone (possono bloccare l'UI con grandi quantità di dati)
- Gli utenti possono cancellare i dati o disabilitare il Web Storage

## Risorse Aggiuntive

- [MDN Web Docs: Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [MDN Web Docs: Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [MDN Web Docs: Window.sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)
- [JavaScript.info: LocalStorage, sessionStorage](https://javascript.info/localstorage)

## Collegamenti Correlati

- [JSON e Serializzazione](../02_Oggetti/06_JSON_Serializzazione.md) - Fondamentale per memorizzare oggetti complessi
- [Eventi nel Browser](../../05-Il_Browser_e_il_DOM/09_Eventi/README.md) - Per gestire gli eventi di storage
- [Local Storage (esempi avanzati)](../../05-Il_Browser_e_il_DOM/14_Local_Storage/README.md) - Esempi pratici con il DOM

[Torna all'indice principale](../../README.md)
