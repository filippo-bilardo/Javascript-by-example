/**
 * VALORI DI RITORNO DELLE FUNZIONI
 * 
 * Il valore di ritorno è ciò che una funzione restituisce al codice chiamante.
 * Usiamo la parola chiave 'return' per specificare cosa restituire.
 * 
 * Caratteristiche:
 * - Una funzione può restituire UN SOLO valore
 * - return termina immediatamente l'esecuzione
 * - Senza return, la funzione restituisce undefined
 */

console.log("=== 1. RETURN DI VALORI PRIMITIVI ===\n");

// Return numero
function somma(a, b) {
  return a + b;
}

console.log("Somma:", somma(5, 3));

// Return stringa
function saluta(nome) {
  return "Ciao, " + nome + "!";
}

console.log(saluta("Mario"));

// Return booleano
function èMaggiorenne(età) {
  return età >= 18;
}

console.log("18 anni è maggiorenne?", èMaggiorenne(18));
console.log("16 anni è maggiorenne?", èMaggiorenne(16));

// Return null
function trovaPari(arr) {
  for (let num of arr) {
    if (num % 2 === 0) return num;
  }
  return null;  // Nessun pari trovato
}

console.log("\nPrimo pari in [1,3,5,8,9]:", trovaPari([1, 3, 5, 8, 9]));
console.log("Primo pari in [1,3,5,7]:", trovaPari([1, 3, 5, 7]));

// Return undefined (implicito)
function stampaMessaggio(msg) {
  console.log("\n" + msg);
  // Nessun return
}

let risultato = stampaMessaggio("Test");
console.log("Risultato:", risultato);  // undefined


console.log("\n=== 2. RETURN DI OGGETTI ===\n");

// Return oggetto semplice
function creaPersona(nome, età) {
  return {
    nome: nome,
    età: età
  };
}

let persona = creaPersona("Mario", 30);
console.log("Persona:", persona);
console.log("Nome:", persona.nome);

// Return oggetto con metodi
function creaContatore(iniziale = 0) {
  return {
    valore: iniziale,
    incrementa: function() {
      this.valore++;
      return this.valore;
    },
    decrementa: function() {
      this.valore--;
      return this.valore;
    },
    reset: function() {
      this.valore = 0;
    }
  };
}

let counter = creaContatore(10);
console.log("\nContatore iniziale:", counter.valore);
console.log("Incrementa:", counter.incrementa());
console.log("Incrementa:", counter.incrementa());
console.log("Decrementa:", counter.decrementa());

// Return oggetto complesso
function creaUtente(dati) {
  return {
    id: Date.now(),
    nome: dati.nome,
    email: dati.email,
    creato: new Date(),
    attivo: true,
    profilo: {
      bio: dati.bio || "",
      avatar: dati.avatar || "default.png"
    },
    getInfo: function() {
      return `${this.nome} (${this.email})`;
    }
  };
}

let utente = creaUtente({
  nome: "Anna",
  email: "anna@example.com",
  bio: "Sviluppatrice JavaScript"
});

console.log("\nUtente:", utente.getInfo());
console.log("Bio:", utente.profilo.bio);


console.log("\n=== 3. RETURN DI ARRAY ===\n");

// Return array semplice
function getNumeriPari(max) {
  let pari = [];
  for (let i = 2; i <= max; i += 2) {
    pari.push(i);
  }
  return pari;
}

console.log("Numeri pari fino a 10:", getNumeriPari(10));

// Return array di oggetti
function getUtenti() {
  return [
    { id: 1, nome: "Mario" },
    { id: 2, nome: "Luigi" },
    { id: 3, nome: "Peach" }
  ];
}

console.log("\nUtenti:", getUtenti());

// Return array filtrato
function filtraPositivi(numeri) {
  return numeri.filter(n => n > 0);
}

console.log("\nPositivi:", filtraPositivi([-2, 5, -1, 8, 0, 3]));

// Return array trasformato
function raddoppia(numeri) {
  return numeri.map(n => n * 2);
}

console.log("Raddoppiati:", raddoppia([1, 2, 3, 4, 5]));

// Return array di tuple
function separa(arr) {
  let pari = [];
  let dispari = [];
  
  for (let n of arr) {
    if (n % 2 === 0) {
      pari.push(n);
    } else {
      dispari.push(n);
    }
  }
  
  return [pari, dispari];
}

let [p, d] = separa([1, 2, 3, 4, 5, 6]);
console.log("\nPari:", p);
console.log("Dispari:", d);


console.log("\n=== 4. EARLY RETURN ===\n");

// Return anticipato per validazione
function dividi(a, b) {
  // Validazioni con early return
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Errore: parametri devono essere numeri";
  }
  
  if (b === 0) {
    return "Errore: divisione per zero";
  }
  
  // Logica principale
  return a / b;
}

console.log("10 / 2 =", dividi(10, 2));
console.log("10 / 0 =", dividi(10, 0));
console.log("'a' / 2 =", dividi('a', 2));

// Guard clauses
function processaOrdine(ordine) {
  // Guard clauses
  if (!ordine) {
    return { error: "Ordine mancante" };
  }
  
  if (!ordine.prodotti || ordine.prodotti.length === 0) {
    return { error: "Ordine vuoto" };
  }
  
  if (ordine.totale <= 0) {
    return { error: "Totale invalido" };
  }
  
  // Logica principale (non annidato!)
  return {
    success: true,
    id: Date.now(),
    totale: ordine.totale
  };
}

console.log("\nOrdine valido:", processaOrdine({ 
  prodotti: [{ id: 1 }], 
  totale: 100 
}));

console.log("Ordine invalido:", processaOrdine({ 
  prodotti: [], 
  totale: 100 
}));

// Multiple exit points
function valutaVoto(voto) {
  if (voto >= 90) return "Ottimo";
  if (voto >= 80) return "Molto Buono";
  if (voto >= 70) return "Buono";
  if (voto >= 60) return "Sufficiente";
  return "Insufficiente";
}

console.log("\nVoto 95:", valutaVoto(95));
console.log("Voto 75:", valutaVoto(75));
console.log("Voto 55:", valutaVoto(55));


console.log("\n=== 5. RETURN DI FUNZIONI ===\n");

// Return funzione semplice
function creaIncrementatore(step) {
  return function(n) {
    return n + step;
  };
}

let incrementaDi5 = creaIncrementatore(5);
let incrementaDi10 = creaIncrementatore(10);

console.log("5 + 5 =", incrementaDi5(5));
console.log("5 + 10 =", incrementaDi10(5));

// Return arrow function
const creaMultiplicatore = factor => n => n * factor;

let doppio = creaMultiplicatore(2);
let triplo = creaMultiplicatore(3);

console.log("\ndoppio(7):", doppio(7));
console.log("triplo(7):", triplo(7));

// Factory function
function creaLogger(prefix) {
  return {
    info: (msg) => console.log(`[${prefix}] INFO: ${msg}`),
    error: (msg) => console.log(`[${prefix}] ERROR: ${msg}`),
    debug: (msg) => console.log(`[${prefix}] DEBUG: ${msg}`)
  };
}

console.log("\n");
let appLogger = creaLogger("APP");
appLogger.info("Applicazione avviata");
appLogger.error("Errore di connessione");

// Currying
function sommaC(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log("\nSomma curried:", sommaC(1)(2)(3));


console.log("\n=== 6. RETURN MULTIPLI (SIMULAZIONE) ===\n");

// Usare oggetto per "return multipli"
function analizzaArray(arr) {
  return {
    lunghezza: arr.length,
    somma: arr.reduce((a, b) => a + b, 0),
    media: arr.reduce((a, b) => a + b, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr)
  };
}

let stats = analizzaArray([1, 2, 3, 4, 5]);
console.log("Statistiche:", stats);
console.log("Media:", stats.media);
console.log("Max:", stats.max);

// Usare array per return multipli
function dividiEResto(a, b) {
  let quoziente = Math.floor(a / b);
  let resto = a % b;
  return [quoziente, resto];
}

let [q, r] = dividiEResto(17, 5);
console.log("\n17 / 5 =", q, "resto", r);

// Destructuring con oggetto
function getCoordinate() {
  return { x: 10, y: 20, z: 30 };
}

let { x, y, z } = getCoordinate();
console.log("\nCoordinate:", x, y, z);


console.log("\n=== 7. RESULT OBJECTS PATTERN ===\n");

// Pattern per gestione errori
function validaEmail(email) {
  if (!email) {
    return {
      valid: false,
      error: "Email mancante"
    };
  }
  
  if (!email.includes("@")) {
    return {
      valid: false,
      error: "Email deve contenere @"
    };
  }
  
  if (!email.includes(".")) {
    return {
      valid: false,
      error: "Email deve contenere dominio"
    };
  }
  
  return {
    valid: true,
    email: email.toLowerCase()
  };
}

let res1 = validaEmail("test@example.com");
console.log("Email valida:", res1);

let res2 = validaEmail("invalid");
console.log("Email invalida:", res2);

// Success/Failure pattern
function caricaDati(id) {
  if (id <= 0) {
    return {
      success: false,
      error: "ID invalido"
    };
  }
  
  // Simula caricamento
  return {
    success: true,
    data: {
      id: id,
      nome: "Dato " + id
    }
  };
}

let result = caricaDati(5);
if (result.success) {
  console.log("\nDati caricati:", result.data);
} else {
  console.log("Errore:", result.error);
}


console.log("\n=== 8. CHAINING METHODS ===\n");

// Return this per method chaining
function CreaString(str = "") {
  this.valore = str;
  
  this.maiuscolo = function() {
    this.valore = this.valore.toUpperCase();
    return this;  // Ritorna this per chaining
  };
  
  this.minuscolo = function() {
    this.valore = this.valore.toLowerCase();
    return this;
  };
  
  this.aggiungi = function(text) {
    this.valore += text;
    return this;
  };
  
  this.risultato = function() {
    return this.valore;
  };
}

let str = new CreaString("hello");
let risultatoChain = str
  .maiuscolo()
  .aggiungi(" ")
  .aggiungi("WORLD")
  .risultato();

console.log("Chaining:", risultatoChain);

// Builder pattern
const QueryBuilder = {
  _query: "",
  
  select: function(fields) {
    this._query = `SELECT ${fields}`;
    return this;
  },
  
  from: function(table) {
    this._query += ` FROM ${table}`;
    return this;
  },
  
  where: function(condition) {
    this._query += ` WHERE ${condition}`;
    return this;
  },
  
  build: function() {
    return this._query;
  }
};

let query = Object.create(QueryBuilder)
  .select("*")
  .from("users")
  .where("age > 18")
  .build();

console.log("\nQuery:", query);


console.log("\n=== 9. ASYNC RETURN (SIMULAZIONE) ===\n");

// Callback pattern
function caricaDatiAsync(id, callback) {
  console.log("Caricamento dati...");
  
  setTimeout(() => {
    if (id > 0) {
      callback(null, { id, nome: "Dato " + id });
    } else {
      callback("ID invalido", null);
    }
  }, 100);
}

caricaDatiAsync(1, (error, data) => {
  if (error) {
    console.log("Errore:", error);
  } else {
    console.log("Dati ricevuti:", data);
  }
});

// Promise pattern
function caricaDatiPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, nome: "Dato " + id });
      } else {
        reject("ID invalido");
      }
    }, 100);
  });
}

console.log("\nCaricamento con Promise...");
caricaDatiPromise(2)
  .then(data => console.log("Promise success:", data))
  .catch(err => console.log("Promise error:", err));


console.log("\n=== 10. BEST PRACTICES ===\n");

// ✓ Return consistente (stesso tipo)
function getTipo(val) {
  if (typeof val === 'string') return "stringa";
  if (typeof val === 'number') return "numero";
  return "altro";  // Sempre string
}

console.log("Tipo 'abc':", getTipo("abc"));
console.log("Tipo 123:", getTipo(123));
console.log("Tipo {}:", getTipo({}));

// ✓ Documentazione chiara
/**
 * Calcola l'area di un rettangolo
 * @param {number} base - La base del rettangolo
 * @param {number} altezza - L'altezza del rettangolo
 * @returns {number} L'area del rettangolo
 */
function calcolaArea(base, altezza) {
  return base * altezza;
}

console.log("\nArea 5x3:", calcolaArea(5, 3));

// ✓ Evita return complessi
// ❌ Male
function complesso(x) {
  return x > 0 ? x < 10 ? "piccolo" : x < 100 ? "medio" : "grande" : "negativo";
}

// ✓ Bene
function chiaro(x) {
  if (x < 0) return "negativo";
  if (x < 10) return "piccolo";
  if (x < 100) return "medio";
  return "grande";
}

console.log("\nChiaro(5):", chiaro(5));
console.log("Chiaro(50):", chiaro(50));
console.log("Chiaro(150):", chiaro(150));

// ✓ Usa destructuring per return multipli
function getMinMax(arr) {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
    range: Math.max(...arr) - Math.min(...arr)
  };
}

let { min, max, range } = getMinMax([1, 5, 2, 9, 3]);
console.log("\nMin:", min, "Max:", max, "Range:", range);

console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO RETURN");
console.log("=".repeat(50));
console.log(`
TIPI DI RETURN:
• Primitivi: number, string, boolean, null, undefined
• Oggetti: { key: value }
• Array: [val1, val2, ...]
• Funzioni: return function() { ... }

EARLY RETURN:
✓ Validazione all'inizio
✓ Guard clauses per casi edge
✓ Evita nesting profondo
✓ Codice più leggibile

RETURN MULTIPLI (SIMULATI):
• Oggetto: { a: 1, b: 2 }
• Array: [val1, val2]
• Destructuring: let { a, b } = func()

PATTERNS:
• Result object: { success: bool, data/error }
• Method chaining: return this
• Factory: return nuova istanza/oggetto
• Higher-order: return funzione

BEST PRACTICES:
✓ Return consistente (stesso tipo)
✓ Documenta tipo di ritorno
✓ Early return per validazione
✓ Evita return complessi
✓ Usa destructuring
✓ Null/undefined per "nessun valore"
`);
