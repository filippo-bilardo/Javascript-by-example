/**
 * GETTER E SETTER - PROPRIETÀ DI ACCESSO
 * 
 * Definire e utilizzare getter e setter negli oggetti
 */

console.log("=== 1. GETTER BASE ===\n");

const persona = {
  nome: "Mario",
  cognome: "Rossi",
  
  // Getter - accesso come proprietà
  get nomeCompleto() {
    return `${this.nome} ${this.cognome}`;
  }
};

console.log("Nome:", persona.nome);
console.log("Nome completo:", persona.nomeCompleto); // chiamato come proprietà, non funzione


console.log("\n=== 2. SETTER BASE ===\n");

const utente = {
  nome: "Mario",
  cognome: "Rossi",
  
  get nomeCompleto() {
    return `${this.nome} ${this.cognome}`;
  },
  
  // Setter - assegnazione come proprietà
  set nomeCompleto(valore) {
    const parti = valore.split(" ");
    this.nome = parti[0];
    this.cognome = parti[1] || "";
  }
};

console.log("Prima:", utente.nomeCompleto);

utente.nomeCompleto = "Luigi Verdi";
console.log("Dopo:", utente.nomeCompleto);
console.log("Nome:", utente.nome);
console.log("Cognome:", utente.cognome);


console.log("\n=== 3. VALIDAZIONE CON SETTER ===\n");

const prodotto = {
  _prezzo: 0, // convenzione: _ per proprietà "private"
  
  get prezzo() {
    return this._prezzo;
  },
  
  set prezzo(valore) {
    if (valore < 0) {
      throw new Error("Il prezzo non può essere negativo");
    }
    if (typeof valore !== "number") {
      throw new Error("Il prezzo deve essere un numero");
    }
    this._prezzo = valore;
  }
};

prodotto.prezzo = 99.99;
console.log("Prezzo valido:", prodotto.prezzo);

try {
  prodotto.prezzo = -10;
} catch (e) {
  console.log("Errore:", e.message);
}

try {
  prodotto.prezzo = "cento";
} catch (e) {
  console.log("Errore:", e.message);
}


console.log("\n=== 4. PROPRIETÀ CALCOLATE ===\n");

const rettangolo = {
  larghezza: 10,
  altezza: 5,
  
  get area() {
    return this.larghezza * this.altezza;
  },
  
  get perimetro() {
    return 2 * (this.larghezza + this.altezza);
  },
  
  get diagonale() {
    return Math.sqrt(this.larghezza ** 2 + this.altezza ** 2);
  }
};

console.log("Larghezza:", rettangolo.larghezza);
console.log("Altezza:", rettangolo.altezza);
console.log("Area:", rettangolo.area);
console.log("Perimetro:", rettangolo.perimetro);
console.log("Diagonale:", rettangolo.diagonale.toFixed(2));


console.log("\n=== 5. GETTER/SETTER CON OBJECT.DEFINEPROPERTY ===\n");

const conto = {
  _saldo: 1000
};

Object.defineProperty(conto, "saldo", {
  get() {
    console.log("Accesso al saldo");
    return this._saldo;
  },
  
  set(valore) {
    console.log(`Modifica saldo: ${this._saldo} → ${valore}`);
    this._saldo = valore;
  },
  
  enumerable: true,
  configurable: true
});

console.log("Saldo:", conto.saldo);
conto.saldo = 1500;
console.log("Nuovo saldo:", conto.saldo);


console.log("\n=== 6. PROPRIETÀ READ-ONLY ===\n");

const config = {
  _appName: "MyApp",
  _version: "1.0.0",
  
  get appName() {
    return this._appName;
  },
  
  get version() {
    return this._version;
  }
  
  // Nessun setter = solo lettura
};

console.log("App:", config.appName);
console.log("Versione:", config.version);

// Tentativo di modifica (ignorato)
config.appName = "AltroNome";
console.log("App (dopo tentativo modifica):", config.appName); // non cambiato


console.log("\n=== 7. GETTER CON LAZY LOADING ===\n");

const datiPesanti = {
  _cache: null,
  
  get dati() {
    if (this._cache === null) {
      console.log("Caricamento dati pesanti...");
      // Simulazione caricamento
      this._cache = Array.from({ length: 1000 }, (_, i) => i);
    }
    return this._cache;
  }
};

console.log("Prima chiamata:");
console.log("Numero elementi:", datiPesanti.dati.length);

console.log("\nSeconda chiamata:");
console.log("Numero elementi:", datiPesanti.dati.length); // usa cache


console.log("\n=== 8. SETTER CON SIDE EFFECTS ===\n");

const form = {
  _username: "",
  _email: "",
  _valido: false,
  
  get username() {
    return this._username;
  },
  
  set username(valore) {
    this._username = valore;
    this._valida(); // side effect
  },
  
  get email() {
    return this._email;
  },
  
  set email(valore) {
    this._email = valore;
    this._valida(); // side effect
  },
  
  get valido() {
    return this._valido;
  },
  
  _valida() {
    this._valido = this._username.length >= 3 && 
                   this._email.includes("@");
    console.log(`Form valido: ${this._valido}`);
  }
};

form.username = "ma";
console.log("Username:", form.username);

form.username = "mario";
console.log("Username:", form.username);

form.email = "mario@test.com";
console.log("Email:", form.email);


console.log("\n=== 9. GETTER/SETTER IN CLASSI ===\n");

class Temperatura {
  constructor(celsius) {
    this._celsius = celsius;
  }
  
  get celsius() {
    return this._celsius;
  }
  
  set celsius(valore) {
    this._celsius = valore;
  }
  
  get fahrenheit() {
    return (this._celsius * 9/5) + 32;
  }
  
  set fahrenheit(valore) {
    this._celsius = (valore - 32) * 5/9;
  }
  
  get kelvin() {
    return this._celsius + 273.15;
  }
  
  set kelvin(valore) {
    this._celsius = valore - 273.15;
  }
}

const temp = new Temperatura(25);
console.log("Celsius:", temp.celsius);
console.log("Fahrenheit:", temp.fahrenheit);
console.log("Kelvin:", temp.kelvin);

temp.fahrenheit = 100;
console.log("\nDopo impostazione Fahrenheit a 100:");
console.log("Celsius:", temp.celsius.toFixed(2));
console.log("Kelvin:", temp.kelvin.toFixed(2));


console.log("\n=== 10. PATTERN AVANZATI ===\n");

// Pattern 1: Normalizzazione dati
const articolo = {
  _titolo: "",
  
  get titolo() {
    return this._titolo;
  },
  
  set titolo(valore) {
    // Normalizza: trim + capitalize
    this._titolo = valore.trim()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }
};

articolo.titolo = "  guida agli   OGGETTI  ";
console.log("Titolo normalizzato:", articolo.titolo);

// Pattern 2: Tracciamento modifiche
const oggettoTracciato = {
  _nome: "",
  _modifiche: [],
  
  get nome() {
    return this._nome;
  },
  
  set nome(valore) {
    this._modifiche.push({
      proprietà: "nome",
      vecchio: this._nome,
      nuovo: valore,
      timestamp: new Date()
    });
    this._nome = valore;
  },
  
  get modifiche() {
    return this._modifiche;
  }
};

oggettoTracciato.nome = "Mario";
oggettoTracciato.nome = "Luigi";
console.log("\nStorico modifiche:", oggettoTracciato.modifiche);

// Pattern 3: Computed property con cache
const calculator = {
  _a: 0,
  _b: 0,
  _sumCache: null,
  
  get a() {
    return this._a;
  },
  
  set a(valore) {
    this._a = valore;
    this._sumCache = null; // invalida cache
  },
  
  get b() {
    return this._b;
  },
  
  set b(valore) {
    this._b = valore;
    this._sumCache = null; // invalida cache
  },
  
  get sum() {
    if (this._sumCache === null) {
      console.log("Calcolo somma...");
      this._sumCache = this._a + this._b;
    }
    return this._sumCache;
  }
};

calculator.a = 10;
calculator.b = 20;
console.log("\nPrima chiamata sum:", calculator.sum);
console.log("Seconda chiamata sum:", calculator.sum); // usa cache


console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO GETTER E SETTER");
console.log("=".repeat(50));
console.log(`
GETTER:
• get nomeProprietà() { return valore; }
• Accesso come proprietà: obj.prop (non obj.prop())
• Eseguito quando si legge la proprietà
• Non può ricevere parametri
• Deve restituire un valore

SETTER:
• set nomeProprietà(valore) { ... }
• Assegnazione come proprietà: obj.prop = val
• Eseguito quando si scrive la proprietà
• Riceve esattamente 1 parametro
• Non restituisce valore

CASI D'USO:

✓ VALIDAZIONE:
  Controllare valori prima dell'assegnazione
  
✓ PROPRIETÀ CALCOLATE:
  Calcolare valori da altre proprietà (area, totale, ecc.)
  
✓ LAZY LOADING:
  Caricare dati solo quando necessario
  
✓ NORMALIZZAZIONE:
  Formattare dati in ingresso (trim, capitalize, ecc.)
  
✓ SIDE EFFECTS:
  Eseguire logica quando proprietà cambia
  
✓ READ-ONLY:
  Solo getter = proprietà di sola lettura
  
✓ WRITE-ONLY:
  Solo setter (raro, per password, ecc.)

DEFINIZIONE:

• LITERAL SYNTAX:
  const obj = {
    get prop() { return this._prop; },
    set prop(val) { this._prop = val; }
  };

• OBJECT.DEFINEPROPERTY:
  Object.defineProperty(obj, "prop", {
    get() { return this._prop; },
    set(val) { this._prop = val; }
  });

• IN CLASSI:
  class MyClass {
    get prop() { return this._prop; }
    set prop(val) { this._prop = val; }
  }

CONVENZIONI:
• Usa _ per proprietà "private": _prop
• Getter/setter hanno stesso nome pubblico: prop
• Validazione nei setter
• Calcoli nei getter

BEST PRACTICES:
✓ Getter veloci e senza side effects
✓ Setter per validazione e normalizzazione
✓ Usa _ per indicare proprietà interne
✓ Documenta getter/setter complessi
✓ Cache per getter costosi
✗ Evita getter/setter per tutto (KISS)
✗ Non lanciare errori nei getter
✗ Getter non dovrebbero modificare stato

VANTAGGI:
• Sintassi pulita (come proprietà)
• Validazione centralizzata
• Controllo su accesso dati
• Computed properties eleganti
• Backward compatibility (API non cambia)

SVANTAGGI:
• Può nascondere complessità
• Performance (chiamata funzione)
• Debug più difficile
• Non enumerabili con for...in (se defineProperty)
`);
