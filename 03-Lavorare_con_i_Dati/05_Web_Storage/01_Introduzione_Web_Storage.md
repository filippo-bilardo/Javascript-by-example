# Introduzione al Web Storage

## Cos'è il Web Storage?

Il **Web Storage** è un'API JavaScript che permette alle applicazioni web di memorizzare dati localmente nel browser dell'utente. Introdotto con HTML5, il Web Storage fornisce un meccanismo semplice e sicuro per salvare coppie chiave-valore direttamente nel browser.

## Perché Usare il Web Storage?

Prima del Web Storage, i cookie erano l'unica opzione per memorizzare dati lato client. Tuttavia, i cookie presentano diverse limitazioni:

- **Capacità limitata**: Solo circa 4 KB per dominio
- **Traffico di rete**: I cookie vengono inviati con ogni richiesta HTTP, aumentando il traffico
- **Complessità**: L'API dei cookie è più complessa da utilizzare
- **Sicurezza**: I cookie possono essere vulnerabili ad attacchi CSRF

Il Web Storage risolve molti di questi problemi.

## Vantaggi del Web Storage

### 1. Maggiore Capacità
Il Web Storage offre tipicamente **5-10 MB** di spazio per dominio, molto più dei 4 KB dei cookie.

```javascript
// Esempio: memorizzare grandi quantità di dati
const datiEstesi = {
  utente: "mario.rossi",
  preferenze: { /* ... */ },
  cronologia: [ /* array con molti elementi */ ]
};

localStorage.setItem('datiApp', JSON.stringify(datiEstesi));
```

### 2. Nessun Invio Automatico al Server
A differenza dei cookie, i dati del Web Storage non vengono inviati automaticamente con ogni richiesta HTTP, riducendo il traffico di rete e migliorando le prestazioni.

```javascript
// I dati rimangono solo nel browser
localStorage.setItem('token', 'abc123xyz');
// Il token NON viene inviato automaticamente con le richieste fetch
```

### 3. API Semplice e Intuitiva
L'API del Web Storage è molto più facile da usare rispetto ai cookie.

```javascript
// Salvare un dato
localStorage.setItem('nome', 'Mario');

// Recuperare un dato
const nome = localStorage.getItem('nome');

// Rimuovere un dato
localStorage.removeItem('nome');

// Cancellare tutto
localStorage.clear();
```

### 4. Sincronizzazione tra Schede
Gli eventi di storage permettono di sincronizzare dati tra diverse schede dello stesso dominio.

```javascript
// In una scheda
localStorage.setItem('contatore', '5');

// In un'altra scheda, viene notificato il cambiamento
window.addEventListener('storage', (evento) => {
  console.log('Cambiamento rilevato:', evento.key, evento.newValue);
});
```

## Due Tipi di Web Storage

Il Web Storage API fornisce due oggetti diversi:

### 1. localStorage
- **Persistenza**: I dati persistono anche dopo la chiusura del browser
- **Durata**: Permanente (fino a cancellazione manuale)
- **Ambito**: Condiviso tra tutte le finestre e schede dello stesso dominio

```javascript
// I dati rimangono anche dopo il riavvio del browser
localStorage.setItem('tema', 'scuro');
```

**Casi d'uso tipici**:
- Preferenze utente (tema, lingua)
- Token di autenticazione
- Dati di cache
- Impostazioni dell'applicazione

### 2. sessionStorage
- **Persistenza**: I dati durano solo per la sessione della scheda/finestra
- **Durata**: Fino alla chiusura della scheda/finestra
- **Ambito**: Specifico per ogni scheda/finestra

```javascript
// I dati vengono cancellati quando la scheda viene chiusa
sessionStorage.setItem('paginaCorrente', '3');
```

**Casi d'uso tipici**:
- Stato temporaneo della sessione
- Dati di form multi-step
- Navigazione tra pagine
- Dati usa e getta

## Come Funziona?

Il Web Storage memorizza dati come **coppie chiave-valore**, dove sia la chiave che il valore sono sempre **stringhe**.

```javascript
// Memorizzazione
localStorage.setItem('chiave', 'valore');

// Recupero
const valore = localStorage.getItem('chiave');
console.log(valore); // "valore"

// Rimozione
localStorage.removeItem('chiave');

// Cancellazione totale
localStorage.clear();
```

### Importante: Solo Stringhe

Il Web Storage può memorizzare **solo stringhe**. Per oggetti complessi, è necessario utilizzare `JSON.stringify()` e `JSON.parse()`.

```javascript
// Oggetto complesso
const utente = {
  nome: "Mario",
  età: 30,
  hobby: ["calcio", "lettura"]
};

// Serializzazione (oggetto → stringa JSON)
localStorage.setItem('utente', JSON.stringify(utente));

// Deserializzazione (stringa JSON → oggetto)
const utenteRecuperato = JSON.parse(localStorage.getItem('utente'));
console.log(utenteRecuperato.nome); // "Mario"
```

## Verifica della Disponibilità

Non tutti i browser o configurazioni supportano il Web Storage. È buona pratica verificare la disponibilità prima dell'uso.

```javascript
function storageDisponibile(tipo) {
  let storage;
  try {
    storage = window[tipo];
    const test = '__storage_test__';
    storage.setItem(test, test);
    storage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

if (storageDisponibile('localStorage')) {
  console.log('localStorage è disponibile');
  // Usa localStorage
} else {
  console.log('localStorage non è disponibile');
  // Usa un'alternativa (es. cookie o memoria in-app)
}
```

## Sicurezza e Privacy

### Isolamento per Dominio

I dati del Web Storage sono isolati per dominio e protocollo:

- `http://example.com` e `https://example.com` hanno storage separati
- `example.com` e `subdomain.example.com` hanno storage separati
- `example.com` e `example.org` hanno storage completamente separati

```javascript
// Su http://example.com
localStorage.setItem('dato', 'valore1');

// Su https://example.com (storage diverso!)
localStorage.getItem('dato'); // null
```

### Non per Dati Sensibili

⚠️ **Importante**: Il Web Storage **NON** è criptato e può essere letto da qualsiasi script JavaScript sulla pagina.

**NON memorizzare**:
- Password in chiaro
- Numeri di carte di credito
- Dati personali sensibili
- Token non criptati (senza ulteriori misure di sicurezza)

```javascript
// ❌ MAI FARE QUESTO
localStorage.setItem('password', 'miaPassword123');

// ✅ Meglio così (ma comunque non ideale per dati molto sensibili)
localStorage.setItem('authToken', tokenCriptato);
```

### Attacchi XSS

Il Web Storage è vulnerabile agli attacchi **XSS (Cross-Site Scripting)**. Se un attaccante riesce a iniettare codice JavaScript nella tua applicazione, può accedere a tutti i dati del Web Storage.

```javascript
// Se un attaccante inietta questo codice...
console.log(localStorage.getItem('authToken'));
// ...può rubare il token di autenticazione!
```

**Protezioni**:
- Sanitizza sempre l'input utente
- Usa Content Security Policy (CSP)
- Valida e filtra i dati prima di visualizzarli
- Considera httpOnly cookies per dati di autenticazione critici

## Limitazioni del Web Storage

### 1. Sincronicità
Le operazioni del Web Storage sono **sincrone** e possono bloccare il thread principale.

```javascript
// Questa operazione blocca l'esecuzione
for (let i = 0; i < 1000; i++) {
  localStorage.setItem(`key${i}`, `value${i}`);
}
// Per grandi quantità di dati, considera IndexedDB (asincrono)
```

### 2. Quota di Archiviazione
Il limite tipico è 5-10 MB, ma varia tra browser.

```javascript
try {
  // Tentativo di salvare dati molto grandi
  localStorage.setItem('datiEnormi', datiMoltoGrandi);
} catch (e) {
  if (e.name === 'QuotaExceededError') {
    console.error('Quota di storage superata!');
  }
}
```

### 3. Solo Stringhe
Come menzionato, solo stringhe possono essere memorizzate direttamente.

### 4. Nessuna Query Complessa
Non puoi fare ricerche complesse come con un database. Devi recuperare e parsare i dati manualmente.

```javascript
// Non puoi fare query SQL-like
// Devi recuperare tutto e filtrare in JavaScript
const tuttiDati = Object.keys(localStorage);
const filtrati = tuttiDati.filter(key => key.startsWith('user_'));
```

## Quando Usare il Web Storage?

**Usa localStorage per**:
- ✅ Preferenze utente persistenti
- ✅ Cache di dati non sensibili
- ✅ Stato dell'applicazione tra sessioni
- ✅ Impostazioni UI

**Usa sessionStorage per**:
- ✅ Dati temporanei di una sessione
- ✅ Wizard multi-step
- ✅ Stato di navigazione temporaneo
- ✅ Dati usa e getta

**NON usare Web Storage per**:
- ❌ Dati sensibili non criptati
- ❌ Grandi quantità di dati (>5 MB)
- ❌ Dati che richiedono query complesse
- ❌ Operazioni che devono essere molto veloci con grandi dataset

## Alternative al Web Storage

- **Cookies**: Per dati piccoli che devono essere inviati al server
- **IndexedDB**: Per database strutturati e grandi quantità di dati
- **Cache API**: Per cache di risorse HTTP (Service Workers)
- **Web SQL** (deprecato): Non usare più

## Conclusione

Il Web Storage è un potente strumento per memorizzare dati lato client. È semplice da usare, ha una buona capacità e non appesantisce il traffico di rete. Tuttavia, è importante comprenderne le limitazioni e usarlo in modo appropriato, soprattutto per quanto riguarda la sicurezza.

Nelle prossime sezioni, esploreremo in dettaglio le differenze tra localStorage e sessionStorage, i metodi disponibili e le best practices per un utilizzo efficace.
