/**
 * ACCESSO ALLE PROPRIETÀ DEGLI OGGETTI
 * 
 * Diversi modi per accedere e manipolare proprietà
 */

console.log("=== 1. NOTAZIONE CON PUNTO (DOT NOTATION) ===\n");

const persona = {
  nome: "Mario",
  cognome: "Rossi",
  età: 30,
  professione: "Sviluppatore"
};

// Lettura
console.log("Nome:", persona.nome);
console.log("Cognome:", persona.cognome);
console.log("Età:", persona.età);

// Scrittura (modifica)
persona.età = 31;
console.log("\nNuova età:", persona.età);

// Aggiunta nuova proprietà
persona.città = "Milano";
console.log("Città:", persona.città);


console.log("\n=== 2. NOTAZIONE CON PARENTESI QUADRE (BRACKET NOTATION) ===\n");

const utente = {
  username: "mario.rossi",
  email: "mario@example.com",
  "data di registrazione": "2024-01-01"
};

// Lettura
console.log("Username:", utente["username"]);
console.log("Email:", utente["email"]);

// Accesso con spazi o caratteri speciali
console.log("Data:", utente["data di registrazione"]);

// Con variabili
const campo = "username";
console.log("\nValore di campo:", utente[campo]);

// Dinamico
const campi = ["username", "email"];
campi.forEach(c => {
  console.log(`${c}:`, utente[c]);
});


console.log("\n=== 3. COMPUTED PROPERTY ACCESS ===\n");

const prodotto = {
  id: 101,
  nome: "Laptop",
  prezzo: 999,
  "prezzo-scontato": 799
};

// Costruire nome proprietà
const prefix = "prezzo";
console.log("Prezzo:", prodotto[prefix]);
console.log("Prezzo scontato:", prodotto[prefix + "-scontato"]);

// Con espressioni
const chiave = Math.random() > 0.5 ? "nome" : "id";
console.log("\nProprietà casuale:", chiave, "=", prodotto[chiave]);


console.log("\n=== 4. OPTIONAL CHAINING (?.) ===\n");

const dati = {
  utente: {
    nome: "Mario",
    indirizzo: {
      città: "Milano",
      cap: "20100"
    }
  }
};

// Accesso sicuro con optional chaining
console.log("Città:", dati.utente?.indirizzo?.città);
console.log("Provincia:", dati.utente?.indirizzo?.provincia); // undefined

// Evita errori su proprietà inesistenti
const datiIncompleti = {
  utente: {
    nome: "Luigi"
    // manca indirizzo
  }
};

console.log("\nCittà (sicuro):", datiIncompleti.utente?.indirizzo?.città); // undefined
// Senza optional chaining: TypeError
// console.log(datiIncompleti.utente.indirizzo.città);


console.log("\n=== 5. DESTRUCTURING ===\n");

const auto = {
  marca: "Fiat",
  modello: "500",
  anno: 2020,
  colore: "rosso"
};

// Estrarre proprietà in variabili
const { marca, modello, anno } = auto;
console.log("Marca:", marca);
console.log("Modello:", modello);
console.log("Anno:", anno);

// Con rename
const { colore: colorAuto } = auto;
console.log("Colore:", colorAuto);

// Con default
const { cilindrata = 1200 } = auto;
console.log("Cilindrata:", cilindrata);


console.log("\n=== 6. ACCESSO A NESTED PROPERTIES ===\n");

const azienda = {
  nome: "Tech Corp",
  sede: {
    principale: {
      città: "Milano",
      indirizzo: "Via Roma 1",
      coordinate: {
        lat: 45.4642,
        lng: 9.1900
      }
    }
  }
};

// Accesso profondo
console.log("Città sede:", azienda.sede.principale.città);
console.log("Latitudine:", azienda.sede.principale.coordinate.lat);

// Con bracket notation
console.log("\nCittà:", azienda["sede"]["principale"]["città"]);

// Misto
console.log("Coordinate:", azienda.sede["principale"].coordinate);


console.log("\n=== 7. METODI E THIS ===\n");

const contatore = {
  valore: 0,
  
  incrementa: function() {
    this.valore++;
    return this.valore;
  },
  
  decrementa() {
    this.valore--;
    return this.valore;
  },
  
  reset() {
    this.valore = 0;
  },
  
  getValore() {
    return this.valore;
  }
};

console.log("Valore iniziale:", contatore.valore);
console.log("Dopo incrementa:", contatore.incrementa());
console.log("Dopo incrementa:", contatore.incrementa());
console.log("Dopo decrementa:", contatore.decrementa());
console.log("Get valore:", contatore.getValore());


console.log("\n=== 8. GETTERS E SETTERS ===\n");

const rettangolo = {
  larghezza: 10,
  altezza: 5,
  
  // Getter
  get area() {
    return this.larghezza * this.altezza;
  },
  
  get perimetro() {
    return 2 * (this.larghezza + this.altezza);
  },
  
  // Setter
  set dimensioni(dim) {
    this.larghezza = dim.larghezza;
    this.altezza = dim.altezza;
  }
};

console.log("Larghezza:", rettangolo.larghezza);
console.log("Area:", rettangolo.area); // chiamato come proprietà
console.log("Perimetro:", rettangolo.perimetro);

// Usare setter
rettangolo.dimensioni = { larghezza: 20, altezza: 10 };
console.log("\nNuova area:", rettangolo.area);


console.log("\n=== 9. ACCESSO DINAMICO CON LOOP ===\n");

const studente = {
  nome: "Mario",
  cognome: "Rossi",
  età: 20,
  corso: "Informatica",
  anno: 2
};

// Iterare su proprietà
console.log("Proprietà studente:");
for (let chiave in studente) {
  console.log(`  ${chiave}: ${studente[chiave]}`);
}

// Object.keys()
console.log("\nChiavi:", Object.keys(studente));

// Object.values()
console.log("Valori:", Object.values(studente));

// Object.entries()
console.log("\nEntries:");
Object.entries(studente).forEach(([key, value]) => {
  console.log(`  ${key} = ${value}`);
});


console.log("\n=== 10. ACCESSO CON FALLBACK ===\n");

const config = {
  tema: "scuro",
  lingua: "it"
};

// Default con ||
const tema = config.tema || "chiaro";
const dimensione = config.dimensione || "media";
console.log("Tema:", tema);
console.log("Dimensione:", dimensione);

// Nullish coalescing (??)
const notifiche = config.notifiche ?? true;
const timeout = config.timeout ?? 0; // 0 è valido!
console.log("\nNotifiche:", notifiche);
console.log("Timeout:", timeout);

// Funzione helper
function getValue(obj, key, defaultValue) {
  return key in obj ? obj[key] : defaultValue;
}

console.log("\nLingua:", getValue(config, "lingua", "en"));
console.log("Font:", getValue(config, "font", "Arial"));


console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO ACCESSO PROPRIETÀ");
console.log("=".repeat(50));
console.log(`
NOTAZIONI DI ACCESSO:

1. DOT NOTATION (punto):
   obj.proprietà
   • Più leggibile
   • Nome proprietà fisso
   • No spazi o caratteri speciali
   • No nomi con numeri iniziali
   
2. BRACKET NOTATION (parentesi):
   obj["proprietà"]
   • Nome dinamico con variabili
   • Spazi e caratteri speciali OK
   • Computed properties
   • Numeri come chiavi

QUANDO USARE:
✓ Dot: caso normale, leggibilità
✓ Bracket: nomi dinamici, spazi, caratteri speciali
✓ Optional chaining: accesso sicuro a nested
✓ Destructuring: estrarre più proprietà

ACCESSO SICURO:
• obj?.prop - optional chaining (ES2020)
• obj.prop || default - fallback con OR
• obj.prop ?? default - nullish coalescing (ES2020)
• key in obj - verifica esistenza

ACCESSO NESTED:
• obj.prop1.prop2.prop3 - accesso profondo
• obj?.prop1?.prop2 - sicuro con optional chaining
• Bracket misto: obj["prop1"].prop2

METODI:
• obj.metodo() - chiamata metodo
• this - riferimento all'oggetto
• get/set - accessors (getter/setter)

ITERAZIONE:
• for...in - tutte le proprietà enumerabili
• Object.keys(obj) - array di chiavi
• Object.values(obj) - array di valori
• Object.entries(obj) - array [[k,v],...]

DESTRUCTURING:
• const {a, b} = obj - estrai proprietà
• const {a: alias} = obj - rename
• const {a = def} = obj - default value
• const {a, ...rest} = obj - rest properties

BEST PRACTICES:
✓ Preferisci dot notation quando possibile
✓ Usa bracket per accesso dinamico
✓ Optional chaining per nested sicuri
✓ Destructuring per leggibilità
✗ Evita accesso profondo eccessivo
✗ Valida proprietà critiche

ERRORI COMUNI:
✗ obj.prop-name - sintassi errata (usa bracket)
✗ obj[prop] - se prop non è variabile (usa "prop")
✗ obj.nested.prop - se nested è undefined (usa ?.)
✗ obj.123 - numero iniziale (usa obj["123"])
`);
