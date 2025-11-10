/**
 * EREDITARIETÀ CON CLASSI ES6
 * 
 * Sintassi moderna per ereditarietà e OOP in JavaScript
 */

console.log("=== 1. CLASSI BASE ===\n");

class Persona {
  constructor(nome, cognome, età) {
    this.nome = nome;
    this.cognome = cognome;
    this.età = età;
  }
  
  nomeCompleto() {
    return `${this.nome} ${this.cognome}`;
  }
  
  saluta() {
    return `Ciao, sono ${this.nomeCompleto()}`;
  }
}

const mario = new Persona("Mario", "Rossi", 30);
console.log(mario.saluta());
console.log("Età:", mario.età);


console.log("\n=== 2. EREDITARIETÀ CON EXTENDS ===\n");

class Studente extends Persona {
  constructor(nome, cognome, età, corso) {
    super(nome, cognome, età); // chiama costruttore padre
    this.corso = corso;
    this.voti = [];
  }
  
  aggiungiVoto(voto) {
    this.voti.push(voto);
  }
  
  media() {
    if (this.voti.length === 0) return 0;
    return this.voti.reduce((sum, v) => sum + v, 0) / this.voti.length;
  }
  
  // Override metodo padre
  saluta() {
    return `${super.saluta()}. Studio ${this.corso}`;
  }
}

const studente = new Studente("Luigi", "Verdi", 20, "Informatica");
console.log(studente.saluta());

studente.aggiungiVoto(28);
studente.aggiungiVoto(30);
studente.aggiungiVoto(27);
console.log("Media:", studente.media());


console.log("\n=== 3. METODI STATICI ===\n");

class Matematica {
  static PI = 3.14159;
  
  static somma(a, b) {
    return a + b;
  }
  
  static max(...numeri) {
    return Math.max(...numeri);
  }
  
  static fattoriale(n) {
    if (n <= 1) return 1;
    return n * Matematica.fattoriale(n - 1);
  }
}

// Metodi statici chiamati sulla classe, non su istanze
console.log("PI:", Matematica.PI);
console.log("Somma:", Matematica.somma(5, 3));
console.log("Max:", Matematica.max(10, 5, 8, 3, 12));
console.log("Fattoriale 5:", Matematica.fattoriale(5));


console.log("\n=== 4. GETTER E SETTER IN CLASSI ===\n");

class Temperatura {
  constructor(celsius) {
    this._celsius = celsius;
  }
  
  get celsius() {
    return this._celsius;
  }
  
  set celsius(valore) {
    if (valore < -273.15) {
      throw new Error("Temperatura sotto lo zero assoluto!");
    }
    this._celsius = valore;
  }
  
  get fahrenheit() {
    return (this._celsius * 9/5) + 32;
  }
  
  set fahrenheit(valore) {
    this.celsius = (valore - 32) * 5/9;
  }
  
  get kelvin() {
    return this._celsius + 273.15;
  }
}

const temp = new Temperatura(25);
console.log(`${temp.celsius}°C = ${temp.fahrenheit.toFixed(1)}°F = ${temp.kelvin.toFixed(1)}K`);

temp.fahrenheit = 100;
console.log(`${temp.celsius.toFixed(1)}°C = ${temp.fahrenheit}°F`);


console.log("\n=== 5. PROPRIETÀ PRIVATE (ES2022) ===\n");

class ContoBancario {
  #saldo = 0; // proprietà privata
  #pin;
  
  constructor(titolare, pin) {
    this.titolare = titolare;
    this.#pin = pin;
  }
  
  deposita(importo) {
    if (importo > 0) {
      this.#saldo += importo;
      return true;
    }
    return false;
  }
  
  preleva(importo, pin) {
    if (pin !== this.#pin) {
      throw new Error("PIN errato!");
    }
    if (importo > this.#saldo) {
      throw new Error("Saldo insufficiente!");
    }
    this.#saldo -= importo;
    return true;
  }
  
  getSaldo(pin) {
    if (pin !== this.#pin) {
      throw new Error("PIN errato!");
    }
    return this.#saldo;
  }
}

const conto = new ContoBancario("Mario Rossi", "1234");
conto.deposita(1000);
console.log("Saldo:", conto.getSaldo("1234"));

try {
  conto.preleva(500, "1234");
  console.log("Prelievo riuscito, nuovo saldo:", conto.getSaldo("1234"));
} catch (e) {
  console.log("Errore:", e.message);
}

// console.log(conto.#saldo); // Errore: proprietà privata!


console.log("\n=== 6. METODI PRIVATI ===\n");

class Autenticazione {
  // Proprietà privata
  #token = null;

  // Metodo privato 
  #generaToken() {
    return Math.random().toString(36).substring(7);
  }
  
  #validaCredenziali(username, password) {
    // Simulazione validazione
    return username.length >= 3 && password.length >= 6;
  }
  
  login(username, password) {
    if (this.#validaCredenziali(username, password)) {
      this.#token = this.#generaToken();
      return { success: true, token: this.#token };
    }
    return { success: false, error: "Credenziali non valide" };
  }
  
  isAuthenticated() {
    return this.#token !== null;
  }
}

const auth = new Autenticazione();
const result = auth.login("mario", "password123");
console.log("Login:", result);
console.log("Autenticato:", auth.isAuthenticated());


console.log("\n=== 7. EREDITARIETÀ MULTI-LIVELLO ===\n");

class Essere {
  constructor(nome) {
    this.nome = nome;
  }
  
  respira() {
    return `${this.nome} sta respirando`;
  }
}

class Animale extends Essere {
  constructor(nome, specie) {
    super(nome);
    this.specie = specie;
  }
  
  muovi() {
    return `${this.nome} si sta muovendo`;
  }
}

class Cane extends Animale {
  constructor(nome, razza) {
    super(nome, "Cane");
    this.razza = razza;
  }
  
  abbaia() {
    return `${this.nome} fa: Bau bau!`;
  }
  
  descrizione() {
    return `${this.nome} è un ${this.specie} di razza ${this.razza}`;
  }
}

const fido = new Cane("Fido", "Labrador");
console.log(fido.descrizione());
console.log(fido.respira());
console.log(fido.muovi());
console.log(fido.abbaia());


console.log("\n=== 8. COMPOSIZIONE VS EREDITARIETÀ ===\n");

// Ereditarietà (rigida)
class VeicoloEred extends Object {
  constructor(tipo) {
    super();
    this.tipo = tipo;
  }
  accelera() { return "Accelerando..."; }
}

// Composizione (flessibile)
const puoAccelerare = {
  accelera() { return `${this.tipo} sta accelerando`; }
};

const puoVolare = {
  vola() { return `${this.tipo} sta volando`; }
};

const puoNuotare = {
  nuota() { return `${this.tipo} sta nuotando`; }
};

class Aereo {
  constructor() {
    this.tipo = "Aereo";
  }
}
Object.assign(Aereo.prototype, puoAccelerare, puoVolare);

class Barca {
  constructor() {
    this.tipo = "Barca";
  }
}
Object.assign(Barca.prototype, puoNuotare);

class Anfibi {
  constructor() {
    this.tipo = "Veicolo anfibio";
  }
}
Object.assign(Anfibi.prototype, puoAccelerare, puoNuotare);

const aereo = new Aereo();
const barca = new Barca();
const anfibio = new Anfibi();

console.log(aereo.accelera());
console.log(aereo.vola());
console.log(barca.nuota());
console.log(anfibio.accelera());
console.log(anfibio.nuota());


console.log("\n=== 9. ABSTRACT BASE CLASS PATTERN ===\n");

class Forma {
  constructor(nome) {
    if (new.target === Forma) {
      throw new Error("Forma è una classe astratta!");
    }
    this.nome = nome;
  }
  
  area() {
    throw new Error("Metodo area() deve essere implementato!");
  }
  
  perimetro() {
    throw new Error("Metodo perimetro() deve essere implementato!");
  }
  
  descrizione() {
    return `${this.nome}: area=${this.area()}, perimetro=${this.perimetro()}`;
  }
}

class Rettangolo extends Forma {
  constructor(larghezza, altezza) {
    super("Rettangolo");
    this.larghezza = larghezza;
    this.altezza = altezza;
  }
  
  area() {
    return this.larghezza * this.altezza;
  }
  
  perimetro() {
    return 2 * (this.larghezza + this.altezza);
  }
}

class Cerchio extends Forma {
  constructor(raggio) {
    super("Cerchio");
    this.raggio = raggio;
  }
  
  area() {
    return Math.PI * this.raggio ** 2;
  }
  
  perimetro() {
    return 2 * Math.PI * this.raggio;
  }
}

const rett = new Rettangolo(10, 5);
const cerc = new Cerchio(5);

console.log(rett.descrizione());
console.log(cerc.descrizione());

// try {
//   const forma = new Forma("Test"); // Errore!
// } catch (e) {
//   console.log("Errore:", e.message);
// }


console.log("\n=== 10. PATTERN FACTORY CON CLASSI ===\n");

class Utente {
  constructor(username, ruolo) {
    this.username = username;
    this.ruolo = ruolo;
  }
  
  permessi() {
    return ["lettura"];
  }
}

class Admin extends Utente {
  constructor(username) {
    super(username, "admin");
  }
  
  permessi() {
    return ["lettura", "scrittura", "cancellazione", "gestione utenti"];
  }
}

class Editor extends Utente {
  constructor(username) {
    super(username, "editor");
  }
  
  permessi() {
    return ["lettura", "scrittura"];
  }
}

class UtenteFactory {
  static crea(tipo, username) {
    switch(tipo) {
      case "admin":
        return new Admin(username);
      case "editor":
        return new Editor(username);
      case "utente":
        return new Utente(username, "utente");
      default:
        throw new Error(`Tipo utente non valido: ${tipo}`);
    }
  }
}

const admin = UtenteFactory.crea("admin", "mario");
const editor = UtenteFactory.crea("editor", "luigi");
const user = UtenteFactory.crea("utente", "anna");

console.log(`${admin.username} (${admin.ruolo}): ${admin.permessi().join(", ")}`);
console.log(`${editor.username} (${editor.ruolo}): ${editor.permessi().join(", ")}`);
console.log(`${user.username} (${user.ruolo}): ${user.permessi().join(", ")}`);


console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO CLASSI ES6");
console.log("=".repeat(50));
console.log(`
SINTASSI CLASSI:

class NomeClasse {
  constructor(params) {
    this.prop = params;
  }
  
  metodo() {
    // ...
  }
  
  get proprieta() {
    return this._prop;
  }
  
  set proprieta(val) {
    this._prop = val;
  }
  
  static metodoStatico() {
    // ...
  }
}

EREDITARIETÀ:

class Child extends Parent {
  constructor(params) {
    super(parentParams); // OBBLIGATORIO prima di usare 'this'
    this.childProp = params;
  }
  
  // Override metodo
  metodo() {
    super.metodo(); // chiama metodo padre
    // logica child
  }
}

PROPRIETÀ/METODI PRIVATI (ES2022):
• #proprieta - privata (non accessibile fuori)
• #metodo() - privato
• Vere private (non solo convenzione _)

METODI STATICI:
• static metodo() - chiamati sulla classe
• Non accessibili da istanze
• Uso: utility, factory, costanti

GETTER/SETTER:
• get prop() - accesso come proprietà
• set prop(val) - assegnazione come proprietà
• Validazione, computed properties

CONFRONTO FUNZIONI COSTRUTTORE:

FUNZIONI:
function MyClass(param) {
  this.prop = param;
}
MyClass.prototype.method = function() {...};

CLASSI:
class MyClass {
  constructor(param) {
    this.prop = param;
  }
  method() {...}
}

• Classi: sintassi più pulita
• Sotto: stesso sistema prototypale
• Classi: strict mode automatico
• Classi: no hoisting

COMPOSIZIONE VS EREDITARIETÀ:

EREDITARIETÀ:
• class Child extends Parent
• Gerarchia rigida
• "è un" relationship

COMPOSIZIONE:
• Object.assign(proto, mixin1, mixin2)
• Flessibile
• "ha un" relationship
• Preferibile quando possibile

PATTERN:

✓ Abstract base class: new.target check
✓ Factory: metodi statici per creazione
✓ Singleton: controllo in constructor
✓ Mixin: Object.assign per composizione

BEST PRACTICES:
✓ Usa extends per ereditarietà
✓ super() come prima cosa in constructor figlio
✓ Metodi statici per utility
✓ # per proprietà veramente private
✓ Getter/setter per API pubblica
✓ Preferisci composizione a ereditarietà profonda
✗ Non creare gerarchie troppo profonde
✗ new.target per abstract, ma meglio TypeScript

VANTAGGI CLASSI:
• Sintassi familiare (OOP tradizionale)
• Più leggibile e manutenibile
• Strict mode automatico
• Private fields nativi (#)
• Better tooling support

QUANDO USARE:
✓ Entità con comportamento e stato
✓ Relazioni is-a chiare
✓ API pubbliche strutturate
✓ Team abituato a OOP
✗ Semplici collezioni dati (usa oggetti literal)
✗ Funzioni pure (usa functions)
`);
