/**
 * CREAZIONE DI OGGETTI - METODI PRINCIPALI
 * 
 * Diversi modi per creare oggetti in JavaScript
 */

console.log("=== 1. NOTAZIONE LETTERALE (OBJECT LITERAL) ===\n");

// Il modo più comune e diretto
const persona = {
  nome: "Mario",
  cognome: "Rossi",
  età: 30,
  professione: "Sviluppatore"
};

console.log("Persona:", persona);
console.log("Nome:", persona.nome);

// Oggetto vuoto
const vuoto = {};
console.log("\nOggetto vuoto:", vuoto);

// Oggetto con diverse proprietà
const prodotto = {
  id: 101,
  nome: "Laptop",
  prezzo: 999.99,
  disponibile: true,
  categorie: ["elettronica", "computer"],
  specifiche: {
    cpu: "Intel i7",
    ram: "16GB",
    ssd: "512GB"
  }
};

console.log("\nProdotto:", prodotto);
console.log("CPU:", prodotto.specifiche.cpu);


console.log("\n=== 2. COSTRUTTORE OBJECT() ===\n");

// Creare con new Object()
const utente = new Object();
utente.username = "mario.rossi";
utente.email = "mario@example.com";
utente.isAdmin = false;

console.log("Utente:", utente);

// Equivalente alla notazione letterale
const utente2 = {};
utente2.username = "luigi.verdi";
console.log("Utente2:", utente2);

// Con Object() senza new (stesso risultato)
const utente3 = Object();
utente3.username = "anna.blu";
console.log("Utente3:", utente3);


console.log("\n=== 3. FUNZIONI COSTRUTTORE ===\n");

// Definire un costruttore
function Persona(nome, cognome, età) {
  this.nome = nome;
  this.cognome = cognome;
  this.età = età;
  this.presentati = function() {
    return `Ciao, sono ${this.nome} ${this.cognome}, ho ${this.età} anni`;
  };
}

// Creare istanze
const persona1 = new Persona("Mario", "Rossi", 30);
const persona2 = new Persona("Luigi", "Verdi", 25);
const persona3 = new Persona("Anna", "Blu", 28);

console.log(persona1.presentati());
console.log(persona2.presentati());
console.log(persona3.presentati());

// Verifica tipo
console.log("\npersona1 instanceof Persona:", persona1 instanceof Persona);


console.log("\n=== 4. OBJECT.CREATE() ===\n");

// Creare oggetto con prototipo
const personaPrototipo = {
  saluta: function() {
    return `Ciao, sono ${this.nome}`;
  },
  descrizione: function() {
    return `${this.nome}, ${this.età} anni`;
  }
};

const mario = Object.create(personaPrototipo);
mario.nome = "Mario";
mario.età = 30;

const luigi = Object.create(personaPrototipo);
luigi.nome = "Luigi";
luigi.età = 25;

console.log(mario.saluta());
console.log(luigi.descrizione());

// Oggetto senza prototipo
const oggettoSenzaProto = Object.create(null);
oggettoSenzaProto.chiave = "valore";
console.log("\nOggetto senza prototipo:", oggettoSenzaProto);
console.log("toString:", oggettoSenzaProto.toString); // undefined


console.log("\n=== 5. CLASSI (ES6+) ===\n");

// Sintassi moderna con classi
class Automobile {
  constructor(marca, modello, anno) {
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
  }
  
  descrivi() {
    return `${this.marca} ${this.modello} del ${this.anno}`;
  }
  
  età() {
    return new Date().getFullYear() - this.anno;
  }
}

const auto1 = new Automobile("Fiat", "500", 2020);
const auto2 = new Automobile("Toyota", "Yaris", 2019);

console.log(auto1.descrivi());
console.log("Età auto:", auto1.età(), "anni");
console.log(auto2.descrivi());


console.log("\n=== 6. FACTORY FUNCTIONS ===\n");

// Funzione che restituisce oggetti
function creaUtente(username, email) {
  return {
    username: username,
    email: email,
    createdAt: new Date(),
    login: function() {
      console.log(`${this.username} ha effettuato il login`);
    }
  };
}

const user1 = creaUtente("mario123", "mario@test.com");
const user2 = creaUtente("luigi456", "luigi@test.com");

console.log("User1:", user1.username, user1.email);
user1.login();

// Con shorthand (ES6)
function creaPost(titolo, autore) {
  return {
    titolo,  // equivalente a titolo: titolo
    autore,  // equivalente a autore: autore
    data: new Date(),
    visualizzazioni: 0
  };
}

const post = creaPost("JavaScript Oggetti", "Mario");
console.log("\nPost:", post);


console.log("\n=== 7. OGGETTI CON METODI ===\n");

const calcolatrice = {
  risultato: 0,
  
  somma: function(a, b) {
    this.risultato = a + b;
    return this.risultato;
  },
  
  sottrai: function(a, b) {
    this.risultato = a - b;
    return this.risultato;
  },
  
  // Sintassi corta (ES6)
  moltiplica(a, b) {
    this.risultato = a * b;
    return this.risultato;
  },
  
  dividi(a, b) {
    if (b === 0) {
      return "Errore: divisione per zero";
    }
    this.risultato = a / b;
    return this.risultato;
  }
};

console.log("5 + 3 =", calcolatrice.somma(5, 3));
console.log("10 * 4 =", calcolatrice.moltiplica(10, 4));
console.log("Risultato attuale:", calcolatrice.risultato);


console.log("\n=== 8. OGGETTI NESTED (ANNIDATI) ===\n");

const azienda = {
  nome: "Tech Solutions",
  fondazione: 2015,
  sede: {
    città: "Milano",
    via: "Via Roma 123",
    cap: "20100",
    coordinate: {
      lat: 45.4642,
      lng: 9.1900
    }
  },
  dipendenti: [
    { nome: "Mario", ruolo: "CEO" },
    { nome: "Luigi", ruolo: "CTO" },
    { nome: "Anna", ruolo: "Developer" }
  ],
  contatti: {
    email: "info@techsolutions.com",
    telefono: "+39 02 123456",
    social: {
      twitter: "@techsolutions",
      linkedin: "tech-solutions"
    }
  }
};

console.log("Azienda:", azienda.nome);
console.log("Sede:", azienda.sede.città);
console.log("Coordinate:", azienda.sede.coordinate);
console.log("Primo dipendente:", azienda.dipendenti[0].nome);
console.log("Twitter:", azienda.contatti.social.twitter);


console.log("\n=== 9. COMPUTED PROPERTY NAMES (ES6) ===\n");

// Nome proprietà calcolato dinamicamente
const chiave = "colore";
const valore = "rosso";

const oggetto = {
  [chiave]: valore,  // chiave calcolata
  ["dimensione"]: "grande",
  ["prezzo_" + 2024]: 100
};

console.log("Oggetto:", oggetto);
console.log("oggetto.colore:", oggetto.colore);
console.log("oggetto.prezzo_2024:", oggetto.prezzo_2024);

// Con espressioni
const prefix = "user";
let id = 1;

const utenteDinamico = {
  [prefix + "_" + id]: "Mario",
  [prefix + "_" + (id + 1)]: "Luigi"
};

console.log("\nUtente dinamico:", utenteDinamico);


console.log("\n=== 10. OBJECT.ASSIGN() ===\n");

// Creare oggetto copiando proprietà
const base = { a: 1, b: 2 };
const extra = { c: 3, d: 4 };

const combinato = Object.assign({}, base, extra);
console.log("Combinato:", combinato);

// Merge con override
const defaults = {
  tema: "chiaro",
  lingua: "it",
  notifiche: true
};

const userPrefs = {
  tema: "scuro"
};

const config = Object.assign({}, defaults, userPrefs);
console.log("\nConfig:", config);

// Clone oggetto
const original = { x: 1, y: 2 };
const clone = Object.assign({}, original);
clone.x = 999;

console.log("\nOriginale:", original);
console.log("Clone modificato:", clone);


console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO CREAZIONE OGGETTI");
console.log("=".repeat(50));
console.log(`
METODI DI CREAZIONE:

1. LITERAL NOTATION (più comune):
   const obj = { chiave: valore };
   • Sintassi semplice e leggibile
   • Uso più frequente
   
2. COSTRUTTORE OBJECT():
   const obj = new Object();
   obj.chiave = valore;
   • Meno usato, verboso
   
3. FUNZIONE COSTRUTTORE:
   function Tipo(par) { this.prop = par; }
   const obj = new Tipo(val);
   • Per creare "tipi" personalizzati
   • Uso: new obbligatorio
   
4. OBJECT.CREATE():
   const obj = Object.create(prototype);
   • Controllo esplicito del prototipo
   • Per ereditarietà prototypale
   
5. CLASSI (ES6+):
   class Tipo { constructor(p) {...} }
   const obj = new Tipo(v);
   • Sintassi moderna e familiare
   • Zucchero sintattico su prototipi
   
6. FACTORY FUNCTION:
   function crea(p) { return {prop: p}; }
   const obj = crea(v);
   • Restituisce oggetti
   • No new necessario

QUANDO USARE:
✓ Literal {} - oggetti semplici, config, dati
✓ Classi - entità complesse, OOP
✓ Factory - oggetti con logica, privacy
✓ Costruttori - compatibilità, pattern vecchi
✓ Object.create() - ereditarietà avanzata

CARATTERISTICHE MODERNE (ES6+):
• Shorthand: {nome} invece di {nome: nome}
• Method shorthand: {metodo() {}} 
• Computed keys: {[expr]: value}
• Spread: {...obj}

BEST PRACTICES:
✓ Preferisci {} per oggetti semplici
✓ Usa classi per entità complesse
✓ Factory per flessibilità
✓ Object.create() solo se serve prototipo custom
✗ Evita new Object() (verboso)
`);
