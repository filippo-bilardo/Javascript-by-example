/**
 * IIFE E BEST PRACTICES
 * 
 * IIFE (Immediately Invoked Function Expression) sono funzioni che
 * si eseguono immediatamente dopo essere state definite.
 * 
 * Sintassi: (function() { ... })() oppure (() => { ... })()
 * 
 * Questo file copre anche le best practices generali per funzioni.
 */

console.log("=== 1. SINTASSI IIFE BASE ===\n");

// IIFE classica con function
(function() {
  console.log("IIFE eseguita!");
})();

// IIFE con parametri
(function(nome) {
  console.log("Ciao,", nome);
})("Mario");

// IIFE con return
const risultato = (function(a, b) {
  return a + b;
})(5, 3);

console.log("Risultato IIFE:", risultato);

// IIFE arrow function
(() => {
  console.log("IIFE arrow eseguita!");
})();

// Alternative sintattiche (meno comuni)
!function() {
  console.log("IIFE con !");
}();

+function() {
  console.log("IIFE con +");
}();


console.log("\n=== 2. SCOPE ISOLATION ===\n");

// Senza IIFE: variabili globali
var globale1 = "Sono globale";
console.log("Globale:", globale1);

// Con IIFE: variabili isolate
(function() {
  var locale = "Sono locale";
  console.log("Dentro IIFE:", locale);
})();

// console.log(locale);  // ❌ Errore! Non accessibile

// IIFE protegge da conflitti
var contatore = 1;
console.log("Contatore esterno:", contatore);

(function() {
  var contatore = 100;  // Non interferisce con l'esterno
  console.log("Contatore IIFE:", contatore);
})();

console.log("Contatore esterno ancora:", contatore);  // Ancora 1


console.log("\n=== 3. MODULE PATTERN ===\n");

// IIFE per creare moduli con API pubblica
const calcolatrice = (function() {
  // Variabili private
  let memoria = 0;
  
  // Funzioni private
  function log(msg) {
    console.log("[Calc]", msg);
  }
  
  // API pubblica
  return {
    somma: function(a, b) {
      log("Somma: " + a + " + " + b);
      return a + b;
    },
    
    setMemoria: function(val) {
      memoria = val;
      log("Memoria impostata: " + val);
    },
    
    getMemoria: function() {
      return memoria;
    },
    
    addToMemoria: function(val) {
      memoria += val;
      log("Aggiunto alla memoria: " + val);
      return memoria;
    }
  };
})();

console.log("Somma:", calcolatrice.somma(5, 3));
calcolatrice.setMemoria(10);
console.log("Memoria:", calcolatrice.getMemoria());
console.log("Add to memoria:", calcolatrice.addToMemoria(5));
// console.log(calcolatrice.memoria);  // undefined (privato!)
// calcolatrice.log("test");  // ❌ Errore (privato!)


console.log("\n=== 4. NAMESPACE PATTERN ===\n");

// IIFE per creare namespace
const MiaApp = MiaApp || {};

MiaApp.utils = (function() {
  return {
    capitalize: str => str.charAt(0).toUpperCase() + str.slice(1),
    trim: str => str.trim(),
    reverse: str => str.split('').reverse().join('')
  };
})();

MiaApp.validatori = (function() {
  return {
    èEmail: email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    èNumero: val => !isNaN(parseFloat(val)) && isFinite(val)
  };
})();

console.log("Utils:");
console.log("  capitalize('mario'):", MiaApp.utils.capitalize("mario"));
console.log("  reverse('abc'):", MiaApp.utils.reverse("abc"));

console.log("\nValidatori:");
console.log("  èEmail('test@mail.com'):", MiaApp.validatori.èEmail("test@mail.com"));
console.log("  èNumero('123'):", MiaApp.validatori.èNumero("123"));


console.log("\n=== 5. INIZIALIZZAZIONE ===\n");

// IIFE per setup iniziale
console.log("Inizializzazione app...");

(function() {
  console.log("  1. Carico configurazione");
  console.log("  2. Connetto al database");
  console.log("  3. Inizializzo componenti");
  console.log("  4. App pronta!");
})();

// IIFE con configurazione
const config = (function() {
  const ambiente = "produzione";
  
  const settings = {
    sviluppo: {
      apiUrl: "http://localhost:3000",
      debug: true
    },
    produzione: {
      apiUrl: "https://api.example.com",
      debug: false
    }
  };
  
  return settings[ambiente];
})();

console.log("\nConfigurazione:", config);


console.log("\n=== 6. COUNTER PATTERN ===\n");

// IIFE per creare counter
const contatore1 = (function() {
  let count = 0;
  
  return {
    incrementa: () => ++count,
    decrementa: () => --count,
    reset: () => { count = 0; },
    valore: () => count
  };
})();

console.log("Contatore:");
console.log("  Inc:", contatore1.incrementa());
console.log("  Inc:", contatore1.incrementa());
console.log("  Inc:", contatore1.incrementa());
console.log("  Dec:", contatore1.decrementa());
console.log("  Valore:", contatore1.valore());
contatore1.reset();
console.log("  Dopo reset:", contatore1.valore());


console.log("\n=== 7. BEST PRACTICE: NAMING ===\n");

// ❌ Nomi generici
function f(x) { return x * 2; }
function proc() { return true; }

// ✓ Nomi descrittivi
function calcolaDoppio(numero) { return numero * 2; }
function validaInput() { return true; }

// ✓ Verbi per azioni
function ottieniUtente() { return {}; }
function salvaDocumento() { console.log("Salvato"); }
function eliminaFile() { console.log("Eliminato"); }

// ✓ Boolean: is, has, can
function isPari(n) { return n % 2 === 0; }
function hasPermessi(user) { return user.admin; }
function canEdit(user, doc) { return user.id === doc.owner; }

// ✓ camelCase per funzioni
function calcolaTotaleConIva(prezzo) {
  return prezzo * 1.22;
}

console.log("Naming examples:");
console.log("  isPari(4):", isPari(4));
console.log("  hasPermessi({admin: true}):", hasPermessi({admin: true}));
console.log("  Totale IVA:", calcolaTotaleConIva(100));


console.log("\n=== 8. BEST PRACTICE: PARAMETRI ===\n");

// ❌ Troppi parametri
function creaUtenteMale(nome, cognome, email, tel, via, città, cap, paese) {
  return { nome, cognome, email, tel, via, città, cap, paese };
}

// ✓ Usa oggetto per molti parametri
function creaUtenteBene(dati) {
  return {
    nome: dati.nome,
    cognome: dati.cognome,
    email: dati.email,
    indirizzo: {
      via: dati.via,
      città: dati.città,
      cap: dati.cap
    }
  };
}

console.log("Con oggetto:");
const utente = creaUtenteBene({
  nome: "Mario",
  cognome: "Rossi",
  email: "m@r.com",
  via: "Via Roma 1",
  città: "Roma",
  cap: "00100"
});
console.log("  Utente:", utente.nome, utente.cognome);

// ✓ Parametri di default
function saluta(nome = "Ospite", saluto = "Ciao") {
  return `${saluto}, ${nome}!`;
}

console.log("\nDefault params:");
console.log("  ", saluta());
console.log("  ", saluta("Mario"));
console.log("  ", saluta("Mario", "Hello"));

// ✓ Destructuring
function formattaPersona({ nome, età, città }) {
  return `${nome}, ${età} anni, vive a ${città}`;
}

console.log("\nDestructuring:");
console.log("  ", formattaPersona({ nome: "Anna", età: 25, città: "Milano" }));


console.log("\n=== 9. BEST PRACTICE: SINGLE RESPONSIBILITY ===\n");

// ❌ Funzione che fa troppe cose
function elaboraUtenteMale(utente) {
  // Valida
  if (!utente.email) return false;
  // Formatta
  utente.nome = utente.nome.toUpperCase();
  // Salva
  console.log("Salvato:", utente.nome);
  // Invia email
  console.log("Email inviata a:", utente.email);
  return true;
}

// ✓ Separa responsabilità
function validaUtente(utente) {
  return utente.email && utente.email.length > 0;
}

function formattaUtente(utente) {
  return {
    ...utente,
    nome: utente.nome.toUpperCase()
  };
}

function salvaUtente(utente) {
  console.log("  Salvato:", utente.nome);
  return true;
}

function inviaEmail(email, messaggio) {
  console.log("  Email inviata a:", email);
  return true;
}

// Composizione
function elaboraUtenteBene(utente) {
  if (!validaUtente(utente)) {
    return false;
  }
  
  const utenteFormattato = formattaUtente(utente);
  salvaUtente(utenteFormattato);
  inviaEmail(utenteFormattato.email, "Benvenuto!");
  
  return true;
}

console.log("Elaborazione utente:");
elaboraUtenteBene({ nome: "mario", email: "m@test.com" });


console.log("\n=== 10. BEST PRACTICE: ERROR HANDLING ===\n");

// ❌ Senza gestione errori
function dividiMale(a, b) {
  return a / b;
}

console.log("dividiMale(10, 0):", dividiMale(10, 0));  // Infinity

// ✓ Con validazione
function dividiBene(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("Parametri devono essere numeri");
  }
  if (b === 0) {
    throw new Error("Divisione per zero");
  }
  return a / b;
}

try {
  console.log("dividiBene(10, 2):", dividiBene(10, 2));
  console.log("dividiBene(10, 0):", dividiBene(10, 0));
} catch (err) {
  console.log("Errore:", err.message);
}

// ✓ Ritorna oggetto risultato
function dividiSicuro(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return { success: false, error: "Parametri non validi" };
  }
  if (b === 0) {
    return { success: false, error: "Divisione per zero" };
  }
  return { success: true, result: a / b };
}

console.log("\nCon result object:");
const res1 = dividiSicuro(10, 2);
console.log("  10/2:", res1);

const res2 = dividiSicuro(10, 0);
console.log("  10/0:", res2);

// ✓ Guard clauses (early return)
function calcolaSconto(prezzo, percentuale) {
  // Validazioni con early return
  if (prezzo <= 0) return 0;
  if (percentuale <= 0) return prezzo;
  if (percentuale > 100) return 0;
  
  // Logica principale
  return prezzo * (percentuale / 100);
}

console.log("\nGuard clauses:");
console.log("  Sconto 20% su 100€:", calcolaSconto(100, 20));
console.log("  Prezzo invalido:", calcolaSconto(-10, 20));
console.log("  Percentuale invalida:", calcolaSconto(100, 150));


console.log("\n=== RIEPILOGO PRATICO ===\n");

// Esempio completo con tutte le best practices
const GestoreUtenti = (function() {
  // Private
  const utenti = [];
  let nextId = 1;
  
  // Private functions
  function generaId() {
    return nextId++;
  }
  
  function validaEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  function trovaPerEmail(email) {
    return utenti.find(u => u.email === email);
  }
  
  // Public API
  return {
    aggiungi: function(dati) {
      // Validazione
      if (!dati.nome || !dati.email) {
        return { success: false, error: "Nome ed email richiesti" };
      }
      
      if (!validaEmail(dati.email)) {
        return { success: false, error: "Email non valida" };
      }
      
      if (trovaPerEmail(dati.email)) {
        return { success: false, error: "Email già esistente" };
      }
      
      // Crea utente
      const utente = {
        id: generaId(),
        nome: dati.nome,
        email: dati.email,
        creato: new Date()
      };
      
      utenti.push(utente);
      
      return { success: true, utente: utente };
    },
    
    lista: function() {
      return [...utenti];  // Copia per sicurezza
    },
    
    cerca: function(email) {
      const utente = trovaPerEmail(email);
      return utente ? { success: true, utente } : { success: false };
    },
    
    count: function() {
      return utenti.length;
    }
  };
})();

console.log("Gestore Utenti:");
console.log("1.", GestoreUtenti.aggiungi({ nome: "Mario", email: "m@test.com" }));
console.log("2.", GestoreUtenti.aggiungi({ nome: "Anna", email: "a@test.com" }));
console.log("3.", GestoreUtenti.aggiungi({ nome: "Luigi", email: "m@test.com" }));  // Duplicato
console.log("\nCount:", GestoreUtenti.count());
console.log("Cerca:", GestoreUtenti.cerca("a@test.com"));

console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO BEST PRACTICES");
console.log("=".repeat(50));
console.log(`
IIFE:
• (function() { ... })()
• Scope isolation
• Module pattern
• Namespace pattern
• Inizializzazione

NAMING:
✓ camelCase per funzioni
✓ Verbi per azioni (get, set, create, delete)
✓ is/has/can per boolean
✓ Nomi descrittivi e chiari

PARAMETRI:
✓ Max 3-4 parametri
✓ Usa oggetti per molti parametri
✓ Parametri default
✓ Destructuring quando possibile

STRUCTURE:
✓ Una funzione = un compito
✓ Early return per validazione
✓ Guard clauses per chiarezza
✓ Evita nesting profondo

ERROR HANDLING:
✓ Valida input
✓ Gestisci casi edge
✓ Usa try/catch quando appropriato
✓ Ritorna result objects

ORGANIZATION:
✓ Module pattern per incapsulamento
✓ API pubblica chiara
✓ Private functions per logica interna
✓ Namespace per evitare conflitti

CODE QUALITY:
✓ Commenta comportamenti complessi
✓ Test funzioni critiche
✓ DRY (Don't Repeat Yourself)
✓ KISS (Keep It Simple, Stupid)
`);
