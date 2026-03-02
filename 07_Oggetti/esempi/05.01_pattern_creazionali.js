/**
 * PATTERN CREAZIONALI
 * 
 * Singleton, Factory, Builder, Constructor
 */

console.log("=== 1. SINGLETON PATTERN ===\n");

// Garantisce una sola istanza della classe

class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    
    this.connection = "Connesso";
    this.data = [];
    Database.instance = this;
  }
  
  query(sql) {
    console.log(`Query: ${sql}`);
    return this.data;
  }
  
  insert(item) {
    this.data.push(item);
  }
}

const db1 = new Database();
const db2 = new Database();

console.log("db1 === db2:", db1 === db2); // true

db1.insert("Record 1");
console.log("db2.data:", db2.data); // ["Record 1"]


console.log("\n=== 2. SINGLETON CON CLOSURE ===\n");

const ConfigManager = (function() {
  let instance;
  
  function createInstance() {
    return {
      settings: {},
      
      get(key) {
        return this.settings[key];
      },
      
      set(key, value) {
        this.settings[key] = value;
      }
    };
  }
  
  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const config1 = ConfigManager.getInstance();
const config2 = ConfigManager.getInstance();

config1.set("theme", "dark");
console.log("config2.get('theme'):", config2.get("theme"));
console.log("config1 === config2:", config1 === config2);


console.log("\n=== 3. FACTORY PATTERN ===\n");

// Crea oggetti senza specificare la classe esatta

class Utente {
  constructor(nome) {
    this.nome = nome;
    this.tipo = "utente";
  }
  
  info() {
    return `${this.tipo}: ${this.nome}`;
  }
}

class Admin extends Utente {
  constructor(nome) {
    super(nome);
    this.tipo = "admin";
    this.permessi = ["read", "write", "delete"];
  }
}

class Guest extends Utente {
  constructor(nome) {
    super(nome);
    this.tipo = "guest";
    this.permessi = ["read"];
  }
}

class UtenteFactory {
  static crea(tipo, nome) {
    switch(tipo) {
      case "admin":
        return new Admin(nome);
      case "guest":
        return new Guest(nome);
      default:
        return new Utente(nome);
    }
  }
}

const admin = UtenteFactory.crea("admin", "Mario");
const guest = UtenteFactory.crea("guest", "Luigi");

console.log(admin.info());
console.log("Permessi admin:", admin.permessi);
console.log(guest.info());


console.log("\n=== 4. FACTORY CON REGISTRAZIONE ===\n");

class VehicleFactory {
  constructor() {
    this.vehicles = {};
  }
  
  register(type, VehicleClass) {
    this.vehicles[type] = VehicleClass;
  }
  
  create(type, ...args) {
    const VehicleClass = this.vehicles[type];
    if (!VehicleClass) {
      throw new Error(`Tipo ${type} non registrato`);
    }
    return new VehicleClass(...args);
  }
}

class Car {
  constructor(model) {
    this.type = "car";
    this.model = model;
  }
}

class Bike {
  constructor(model) {
    this.type = "bike";
    this.model = model;
  }
}

const factory = new VehicleFactory();
factory.register("car", Car);
factory.register("bike", Bike);

const car = factory.create("car", "Tesla");
const bike = factory.create("bike", "BMX");

console.log("Car:", car);
console.log("Bike:", bike);


console.log("\n=== 5. BUILDER PATTERN ===\n");

// Costruisce oggetti complessi passo dopo passo

class Pizza {
  constructor() {
    this.size = "";
    this.cheese = false;
    this.pepperoni = false;
    this.mushrooms = false;
  }
  
  describe() {
    const toppings = [];
    if (this.cheese) toppings.push("formaggio");
    if (this.pepperoni) toppings.push("pepperoni");
    if (this.mushrooms) toppings.push("funghi");
    
    return `Pizza ${this.size}: ${toppings.join(", ")}`;
  }
}

class PizzaBuilder {
  constructor() {
    this.pizza = new Pizza();
  }
  
  setSize(size) {
    this.pizza.size = size;
    return this; // per chain
  }
  
  addCheese() {
    this.pizza.cheese = true;
    return this;
  }
  
  addPepperoni() {
    this.pizza.pepperoni = true;
    return this;
  }
  
  addMushrooms() {
    this.pizza.mushrooms = true;
    return this;
  }
  
  build() {
    return this.pizza;
  }
}

const myPizza = new PizzaBuilder()
  .setSize("large")
  .addCheese()
  .addPepperoni()
  .build();

console.log(myPizza.describe());


console.log("\n=== 6. BUILDER AVANZATO ===\n");

class HttpRequest {
  constructor() {
    this.url = "";
    this.method = "GET";
    this.headers = {};
    this.body = null;
  }
  
  toString() {
    return JSON.stringify({
      url: this.url,
      method: this.method,
      headers: this.headers,
      body: this.body
    }, null, 2);
  }
}

class RequestBuilder {
  constructor() {
    this.request = new HttpRequest();
  }
  
  url(url) {
    this.request.url = url;
    return this;
  }
  
  get() {
    this.request.method = "GET";
    return this;
  }
  
  post(body) {
    this.request.method = "POST";
    this.request.body = body;
    return this;
  }
  
  header(key, value) {
    this.request.headers[key] = value;
    return this;
  }
  
  auth(token) {
    this.request.headers["Authorization"] = `Bearer ${token}`;
    return this;
  }
  
  build() {
    return this.request;
  }
}

const request = new RequestBuilder()
  .url("https://api.example.com/users")
  .post({ name: "Mario" })
  .header("Content-Type", "application/json")
  .auth("abc123")
  .build();

console.log("Request:", request.toString());


console.log("\n=== 7. CONSTRUCTOR PATTERN ===\n");

// Pattern base OOP

function Person(nome, età) {
  this.nome = nome;
  this.età = età;
}

Person.prototype.saluta = function() {
  return `Ciao, sono ${this.nome}`;
};

const person1 = new Person("Mario", 30);
console.log(person1.saluta());


console.log("\n=== 8. CONSTRUCTOR CON PRIVATI ===\n");

function BankAccount(initialBalance) {
  // Variabile privata (closure)
  let balance = initialBalance;
  
  // Metodi pubblici
  this.deposit = function(amount) {
    if (amount > 0) {
      balance += amount;
      return true;
    }
    return false;
  };
  
  this.withdraw = function(amount) {
    if (amount > 0 && amount <= balance) {
      balance -= amount;
      return true;
    }
    return false;
  };
  
  this.getBalance = function() {
    return balance;
  };
}

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log("Balance:", account.getBalance());
console.log("Balance diretto:", account.balance); // undefined


console.log("\n=== 9. ABSTRACT FACTORY ===\n");

// Factory che produce altre factory

class WindowsButton {
  render() {
    return "Rendering Windows Button";
  }
}

class MacButton {
  render() {
    return "Rendering Mac Button";
  }
}

class WindowsCheckbox {
  render() {
    return "Rendering Windows Checkbox";
  }
}

class MacCheckbox {
  render() {
    return "Rendering Mac Checkbox";
  }
}

class GUIFactory {
  createButton() {}
  createCheckbox() {}
}

class WindowsFactory extends GUIFactory {
  createButton() {
    return new WindowsButton();
  }
  
  createCheckbox() {
    return new WindowsCheckbox();
  }
}

class MacFactory extends GUIFactory {
  createButton() {
    return new MacButton();
  }
  
  createCheckbox() {
    return new MacCheckbox();
  }
}

function createUI(factory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();
  
  return {
    button: button.render(),
    checkbox: checkbox.render()
  };
}

const windowsUI = createUI(new WindowsFactory());
const macUI = createUI(new MacFactory());

console.log("Windows:", windowsUI);
console.log("Mac:", macUI);


console.log("\n=== 10. PROTOTYPE PATTERN ===\n");

// Clona oggetti invece di crearli da zero

const carPrototype = {
  drive() {
    console.log(`Driving ${this.model}`);
  },
  
  clone() {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }
};

const car1 = Object.create(carPrototype);
car1.model = "Tesla";
car1.year = 2023;

const car2 = car1.clone();
car2.model = "BMW";

console.log("car1:", car1);
console.log("car2:", car2);
car1.drive();
car2.drive();


console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO PATTERN CREAZIONALI");
console.log("=".repeat(50));
console.log(`
PATTERN CREAZIONALI:
Controllano come vengono creati gli oggetti

1. SINGLETON:

SCOPO: Una sola istanza della classe

QUANDO:
✓ Database connection
✓ Configuration manager
✓ Logger
✓ Cache globale

IMPLEMENTAZIONE:
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
  }
}

PRO:
✓ Accesso globale controllato
✓ Una sola istanza garantita
✓ Lazy initialization

CONTRO:
✗ Testing difficile (stato globale)
✗ Accoppiamento
✗ Viola SRP


2. FACTORY:

SCOPO: Crea oggetti senza specificare classe esatta

QUANDO:
✓ Tipo oggetto deciso runtime
✓ Processo creazione complesso
✓ Centralizzare creazione

IMPLEMENTAZIONE:
class Factory {
  static create(type, ...args) {
    switch(type) {
      case 'A': return new ClassA(...args);
      case 'B': return new ClassB(...args);
    }
  }
}

PRO:
✓ Disaccoppia creazione da uso
✓ Centralizza logica creazione
✓ Facilita aggiunta nuovi tipi

CONTRO:
✗ Può diventare complesso
✗ Switch statement cresce


3. BUILDER:

SCOPO: Costruisce oggetti complessi step-by-step

QUANDO:
✓ Oggetto con molti parametri
✓ Processo costruzione complesso
✓ Vogliamo API fluent

IMPLEMENTAZIONE:
class Builder {
  setA(a) {
    this.a = a;
    return this; // chain
  }
  
  setB(b) {
    this.b = b;
    return this;
  }
  
  build() {
    return new Product(this);
  }
}

const obj = new Builder()
  .setA(1)
  .setB(2)
  .build();

PRO:
✓ API leggibile (fluent)
✓ Controllo costruzione
✓ Oggetti immutabili

CONTRO:
✗ Codice più verboso
✗ Classe aggiuntiva


4. CONSTRUCTOR:

SCOPO: Pattern base OOP, costruttore personalizzato

QUANDO:
✓ Creare istanze simili
✓ Condividere metodi (prototype)

IMPLEMENTAZIONE:
function Constructor(param) {
  this.param = param;
}

Constructor.prototype.method = function() {
  // condiviso da tutte istanze
};

PRO:
✓ Semplice
✓ Efficiente (prototype)

CONTRO:
✗ No private (senza closure)
✗ ES6 classes più moderne


5. ABSTRACT FACTORY:

SCOPO: Factory di factory, crea famiglie di oggetti

QUANDO:
✓ Sistemi con varianti (UI themes)
✓ Famiglie oggetti correlati

IMPLEMENTAZIONE:
class AbstractFactory {
  createA() {}
  createB() {}
}

class ConcreteFactory1 extends AbstractFactory {
  createA() { return new A1(); }
  createB() { return new B1(); }
}

PRO:
✓ Coerenza tra prodotti famiglia
✓ Isola codice concreto

CONTRO:
✗ Molto codice boilerplate
✗ Complessità


6. PROTOTYPE:

SCOPO: Clona oggetti esistenti

QUANDO:
✓ Creazione costosa
✓ Evitare sottoclassi
✓ Configurazioni simili

IMPLEMENTAZIONE:
const proto = {
  clone() {
    return Object.create(
      Object.getPrototypeOf(this),
      Object.getOwnPropertyDescriptors(this)
    );
  }
};

PRO:
✓ Evita costruttori costosi
✓ Aggiunge/rimuove oggetti runtime

CONTRO:
✗ Clonazione profonda complessa
✗ Riferimenti circolari problematici


CONFRONTO:

SINGLETON vs GLOBAL:
• Singleton: controllo accesso, lazy init
• Global: sempre esistente, no controllo

FACTORY vs CONSTRUCTOR:
• Factory: nasconde logica creazione
• Constructor: diretto, semplice

BUILDER vs CONSTRUCTOR:
• Builder: molti parametri, API fluent
• Constructor: pochi parametri, diretto

QUANDO USARE COSA:

✓ SINGLETON:
  1 istanza, accesso globale

✓ FACTORY:
  Tipo deciso runtime, centralizzare

✓ BUILDER:
  Tanti parametri opzionali

✓ ABSTRACT FACTORY:
  Famiglie prodotti correlati

✓ PROTOTYPE:
  Clonare oggetti configurati

✗ OVERENGINEERING:
  Non usare pattern se non serve!
  Keep it simple!

BEST PRACTICES:
✓ Factory per API pubbliche
✓ Builder per configurazioni complesse
✓ Singleton con cautela (testability)
✓ Prototype per performance
✓ Constructor per casi semplici
✗ Non forzare pattern
✗ YAGNI (You Aren't Gonna Need It)
`);
