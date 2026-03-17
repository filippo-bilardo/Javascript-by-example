# JSON e Serializzazione

## Cos'è JSON?

JSON (JavaScript Object Notation) è un formato di scambio dati leggero, basato su testo e indipendente dal linguaggio. È facile da leggere e scrivere per gli esseri umani e facile da analizzare e generare per le macchine.

### Caratteristiche principali

- **Formato testuale**: È un formato basato su testo semplice
- **Indipendente dal linguaggio**: Anche se deriva da JavaScript, è supportato da praticamente tutti i linguaggi di programmazione
- **Leggibile**: La sintassi è chiara e facilmente comprensibile
- **Leggero**: Occupa poco spazio rispetto ad altri formati come XML

## Sintassi JSON

### Tipi di dati supportati

JSON supporta i seguenti tipi di dati:

1. **Stringhe**: Racchiuse tra doppi apici `"testo"`
2. **Numeri**: Interi o decimali `42`, `3.14`
3. **Booleani**: `true` o `false`
4. **null**: Rappresenta un valore nullo
5. **Array**: Liste ordinate di valori `[1, 2, 3]`
6. **Oggetti**: Coppie chiave-valore `{"chiave": "valore"}`

### Esempio di JSON valido

```json
{
  "nome": "Mario",
  "cognome": "Rossi",
  "età": 30,
  "attivo": true,
  "indirizzo": {
    "via": "Via Roma",
    "città": "Milano",
    "cap": "20100"
  },
  "hobby": ["calcio", "lettura", "cinema"],
  "coniuge": null
}
```

### Regole sintattiche

- Le chiavi devono essere stringhe racchiuse tra doppi apici
- I valori stringa devono usare doppi apici (non singoli)
- Non sono ammessi commenti
- Non sono ammesse virgole finali (trailing commas)
- Non sono ammesse funzioni o espressioni

## Serializzazione: da Oggetto JavaScript a JSON

La **serializzazione** è il processo di conversione di un oggetto JavaScript in una stringa JSON.

### JSON.stringify()

Il metodo `JSON.stringify()` converte un oggetto JavaScript in una stringa JSON.

#### Sintassi base

```javascript
const oggetto = {
  nome: "Luigi",
  età: 25,
  città: "Roma"
};

const jsonString = JSON.stringify(oggetto);
console.log(jsonString);
// Output: '{"nome":"Luigi","età":25,"città":"Roma"}'
```

#### Parametri opzionali

`JSON.stringify()` accetta tre parametri:

```javascript
JSON.stringify(valore, replacer, spazio)
```

**1. valore**: L'oggetto da convertire

**2. replacer**: Funzione o array per filtrare le proprietà
```javascript
const utente = {
  nome: "Anna",
  password: "segreto123",
  email: "anna@example.com"
};

// Escludere la password
const json = JSON.stringify(utente, ["nome", "email"]);
console.log(json);
// Output: '{"nome":"Anna","email":"anna@example.com"}'

// Utilizzare una funzione replacer
const json2 = JSON.stringify(utente, (chiave, valore) => {
  if (chiave === "password") return undefined;
  return valore;
});
```

**3. spazio**: Numero di spazi per l'indentazione (migliora la leggibilità)
```javascript
const oggetto = { nome: "Carlo", età: 28 };

console.log(JSON.stringify(oggetto, null, 2));
/* Output:
{
  "nome": "Carlo",
  "età": 28
}
*/
```

### Limitazioni di JSON.stringify()

Alcuni tipi di dati JavaScript non possono essere serializzati in JSON:

```javascript
const oggetto = {
  data: new Date(),              // Viene convertita in stringa ISO
  funzione: function() {},       // Viene omessa
  simbolo: Symbol('test'),       // Viene omesso
  indefinito: undefined,         // Viene omesso
  infinito: Infinity,           // Viene convertito in null
  nan: NaN                      // Viene convertito in null
};

console.log(JSON.stringify(oggetto));
// Output: '{"data":"2024-01-15T10:30:00.000Z","infinito":null,"nan":null}'
```

### Metodo toJSON()

Gli oggetti possono definire un metodo `toJSON()` per personalizzare la loro serializzazione:

```javascript
const evento = {
  nome: "Conferenza JavaScript",
  data: new Date("2024-06-15"),
  toJSON() {
    return {
      nome: this.nome,
      data: this.data.toLocaleDateString('it-IT'),
      anno: this.data.getFullYear()
    };
  }
};

console.log(JSON.stringify(evento));
// Output: '{"nome":"Conferenza JavaScript","data":"15/6/2024","anno":2024}'
```

## Deserializzazione: da JSON a Oggetto JavaScript

La **deserializzazione** (o parsing) è il processo di conversione di una stringa JSON in un oggetto JavaScript.

### JSON.parse()

Il metodo `JSON.parse()` converte una stringa JSON in un oggetto JavaScript.

#### Sintassi base

```javascript
const jsonString = '{"nome":"Marco","età":32,"città":"Napoli"}';

const oggetto = JSON.parse(jsonString);
console.log(oggetto.nome);  // Output: "Marco"
console.log(oggetto.età);   // Output: 32
```

#### Parametro reviver

`JSON.parse()` accetta un secondo parametro opzionale chiamato **reviver**, una funzione che permette di trasformare i valori durante il parsing:

```javascript
JSON.parse(testo, reviver)
```

**Esempio: Convertire stringhe di date in oggetti Date**

```javascript
const jsonString = '{"nome":"Evento","data":"2024-06-15T10:00:00.000Z"}';

const oggetto = JSON.parse(jsonString, (chiave, valore) => {
  // Se il valore è una stringa di data ISO, convertila in Date
  if (typeof valore === 'string' && /^\d{4}-\d{2}-\d{2}T/.test(valore)) {
    return new Date(valore);
  }
  return valore;
});

console.log(oggetto.data instanceof Date);  // Output: true
console.log(oggetto.data.getFullYear());   // Output: 2024
```

### Gestione degli errori

Se la stringa JSON non è valida, `JSON.parse()` solleva un'eccezione `SyntaxError`:

```javascript
try {
  const invalidJson = '{nome: "Test"}';  // JSON non valido (chiave senza apici)
  const oggetto = JSON.parse(invalidJson);
} catch (errore) {
  console.error("Errore nel parsing JSON:", errore.message);
  // Output: "Errore nel parsing JSON: Unexpected token n in JSON at position 1"
}
```

## Casi d'uso comuni

### 1. Comunicazione con API

```javascript
// Invio di dati a un server
const datiUtente = {
  username: "mario.rossi",
  email: "mario@example.com"
};

fetch('https://api.example.com/utenti', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(datiUtente)
});

// Ricezione di dati da un server
fetch('https://api.example.com/utenti/1')
  .then(response => response.json())  // Deserializza automaticamente
  .then(utente => console.log(utente.nome));
```

### 2. Memorizzazione locale

```javascript
// Salvare dati in localStorage
const impostazioni = {
  tema: "scuro",
  lingua: "it",
  notifiche: true
};

localStorage.setItem('impostazioni', JSON.stringify(impostazioni));

// Recuperare dati da localStorage
const impostazioniSalvate = JSON.parse(localStorage.getItem('impostazioni'));
console.log(impostazioniSalvate.tema);  // Output: "scuro"
```

### 3. Clonazione profonda di oggetti

```javascript
const originale = {
  nome: "Luca",
  indirizzo: {
    città: "Torino",
    via: "Via Po 10"
  }
};

// Clonazione profonda (deep clone)
const copia = JSON.parse(JSON.stringify(originale));

copia.indirizzo.città = "Firenze";
console.log(originale.indirizzo.città);  // Output: "Torino" (non modificato)
console.log(copia.indirizzo.città);      // Output: "Firenze"
```

**Nota**: Questo metodo funziona solo con oggetti semplici e ha le stesse limitazioni di `JSON.stringify()`.

### 4. Confronto di oggetti

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };

// Confronto diretto non funziona
console.log(obj1 === obj2);  // Output: false

// Confronto tramite serializzazione
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));  // Output: true
```

**Attenzione**: L'ordine delle proprietà può causare problemi:
```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 2, a: 1 };

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));  // Output: false
```

## Best Practices

### 1. Validazione dei dati

Valida sempre i dati JSON prima di utilizzarli:

```javascript
function parseJsonSafe(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (errore) {
    console.error("JSON non valido:", errore);
    return null;
  }
}
```

### 2. Gestione dei valori nulli

Verifica la presenza di valori nulli dopo il parsing:

```javascript
const dati = JSON.parse(jsonString);
if (dati && dati.utente && dati.utente.nome) {
  console.log(dati.utente.nome);
}
```

### 3. Evitare serializzazioni circolari

```javascript
const obj1 = { nome: "A" };
const obj2 = { nome: "B", riferimento: obj1 };
obj1.riferimento = obj2;  // Riferimento circolare

// Questo causerà un errore!
try {
  JSON.stringify(obj1);
} catch (errore) {
  console.error("Riferimento circolare:", errore.message);
}
```

### 4. Prestazioni

Per oggetti molto grandi, considera di:
- Serializzare solo le proprietà necessarie usando il parametro `replacer`
- Suddividere i dati in chunk più piccoli
- Utilizzare Web Workers per operazioni pesanti

### 5. Sicurezza

Non utilizzare mai `eval()` per parsare JSON:

```javascript
// ❌ MAI FARE QUESTO!
const oggetto = eval('(' + jsonString + ')');

// ✅ Usa sempre JSON.parse()
const oggetto = JSON.parse(jsonString);
```

## Differenze tra JSON e oggetti JavaScript

| Caratteristica | JSON | JavaScript Object |
|----------------|------|-------------------|
| Chiavi | Sempre stringhe tra doppi apici | Possono essere senza apici |
| Stringhe | Solo doppi apici | Singoli o doppi apici |
| Funzioni | Non supportate | Supportate |
| Undefined | Non supportato | Supportato |
| Date | Solo come stringhe | Oggetti Date nativi |
| Commenti | Non ammessi | Ammessi |
| Virgole finali | Non ammesse | Ammesse (in modalità strict no) |

## Conclusione

JSON è uno strumento fondamentale per lo scambio di dati in JavaScript moderno. Comprendere la serializzazione e deserializzazione è essenziale per:

- Comunicare con API REST
- Memorizzare dati localmente
- Trasferire dati tra contesti (web workers, iframe)
- Configurare applicazioni
- Logging e debugging

Ricorda sempre di gestire gli errori e validare i dati quando lavori con JSON!
