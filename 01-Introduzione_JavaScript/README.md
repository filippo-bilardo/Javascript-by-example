# Esercitazione 1: Introduzione a JavaScript

## Descrizione

Benvenuti alla prima esercitazione del nostro corso di JavaScript! In questa lezione introduttiva, esploreremo le basi fondamentali di JavaScript: la sua storia, il suo ruolo nel web moderno e come iniziare a scrivere i primi script.

JavaScript è un linguaggio di programmazione interpretato, orientato agli oggetti e basato su prototipi. È uno dei tre pilastri del web moderno, insieme a HTML e CSS. Mentre HTML si occupa della struttura e CSS dell'aspetto, JavaScript aggiunge interattività e comportamento dinamico alle pagine web.

## Obiettivi dell'esercitazione

- Comprendere cosa è JavaScript e il suo ruolo nello sviluppo web
- Configurare l'ambiente di sviluppo
- Scrivere il primo script JavaScript
- Utilizzare la console per il debugging
- Comprendere i concetti di base della sintassi JavaScript

## Indice degli argomenti teorici

1. [Cos'è JavaScript?](./01_Cos_e_JavaScript.md)
2. [Storia ed Evoluzione di JavaScript](./01_Storia_Evoluzione.md)
3. [Ambiente di Sviluppo per JavaScript](./02_Ambiente_Sviluppo.md)
4. [Esecuzione lato client e lato server](./02_Esecuzione_lato_client_e_lato_server.md)
5. [Guida Git e GitHub per Web4Student](./02_Git_e_GitHub.md)
6. [Sintassi Base di JavaScript](./03_Sintassi_Base.md)
7. [Strumenti di Debugging in JavaScript](./04_Strumenti_Debugging.md)
8. [JavaScript nel Browser](./05_JavaScript_Browser.md)

9. [Introduzione a Node.js](https://github.com/filippo-bilardo/Nodejs-by-example/blob/main/docs_nodejs-by-example/01-Introduzione/teoria/01-storia.md)
10. [Architettura di Node.js](https://github.com/filippo-bilardo/Nodejs-by-example/blob/main/docs_nodejs-by-example/01-Introduzione/teoria/02-architettura.md)
11. [JavaScript Runtime](https://github.com/filippo-bilardo/Nodejs-by-example/blob/main/docs_nodejs-by-example/01-Introduzione/teoria/03-javascript-runtime.md)
12. [REPL di Node.js](https://github.com/filippo-bilardo/Nodejs-by-example/blob/main/docs_nodejs-by-example/01-Introduzione/teoria/04-repl.md)

## Esercizi pratici

### Esercizio 1.1: Il tuo primo script
Crea un file HTML e inserisci uno script JavaScript che mostri un messaggio di alert quando la pagina viene caricata.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Il mio primo script JavaScript</title>
</head>
<body>
    <h1>Benvenuto in JavaScript!</h1>
    
    <script>
        // Il tuo primo script JavaScript
        alert("Ciao, mondo!");
    </script>
</body>
</html>
```

### Esercizio 1.2: Utilizzo della console
Modifica lo script precedente per scrivere un messaggio nella console del browser invece di mostrare un alert.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Utilizzo della console</title>
</head>
<body>
    <h1>Apri la console del browser (F12)</h1>
    
    <script>
        // Scrivere nella console
        console.log("Questo è un messaggio nella console!");
        console.error("Questo è un messaggio di errore!");
        console.warn("Questo è un avviso!");
    </script>
</body>
</html>
```

### Esercizio 1.3: Script esterni
Crea un file JavaScript esterno e collegalo a un documento HTML.

File: script.js
```javascript
// Contenuto del file script.js
console.log("Questo script è caricato da un file esterno!");
alert("Script esterno caricato con successo!");
```

File: index.html
```html
<!DOCTYPE html>
<html>
<head>
    <title>Script esterni</title>
    <!-- Caricamento dello script esterno -->
    <script src="script.js"></script>
</head>
<body>
    <h1>Script esterni in JavaScript</h1>
</body>
</html>
```

---

[Inizia dalle guide](./01_Cos_e_JavaScript.md)

[← Esercitazione precedente: Indice del corso](../README.md) | [Indice del corso](../README.md) | [Esercitazione successiva: Variabili e Tipi di Dati →](../02-Le_basi_del_linguaggio/01_Variabili_TipiDati/README.md)
