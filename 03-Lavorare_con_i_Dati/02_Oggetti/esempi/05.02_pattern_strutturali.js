/**
 * PATTERN STRUTTURALI
 * 
 * Adapter, Decorator, Proxy, Facade, Composite
 */

console.log("=== 1. ADAPTER PATTERN ===\n");

// Adatta un'interfaccia a un'altra

// API vecchia
class OldAPI {
  fetchData() {
    return {
      user_name: "Mario",
      user_age: 30
    };
  }
}

// API nuova che vogliamo usare
class NewAPI {
  getData() {
    return {
      nome: "Luigi",
      età: 25
    };
  }
}

// Adapter per usare OldAPI con interfaccia NewAPI
class APIAdapter {
  constructor(oldApi) {
    this.oldApi = oldApi;
  }
  
  getData() {
    const data = this.oldApi.fetchData();
    // Adatta formato
    return {
      nome: data.user_name,
      età: data.user_age
    };
  }
}

const oldApi = new OldAPI();
const adapter = new APIAdapter(oldApi);

console.log("Old API data:", oldApi.fetchData());
console.log("Adapted data:", adapter.getData());


console.log("\n=== 2. ADAPTER PER LOGGER ===\n");

// Logger esistente con interfaccia diversa
class ConsoleLogger {
  logMessage(msg) {
    console.log(`[Console] ${msg}`);
  }
}

// Interfaccia che vogliamo
class StandardLogger {
  info(msg) {
    console.log(`[INFO] ${msg}`);
  }
  
  error(msg) {
    console.log(`[ERROR] ${msg}`);
  }
}

// Adapter
class LoggerAdapter extends StandardLogger {
  constructor(logger) {
    super();
    this.logger = logger;
  }
  
  info(msg) {
    this.logger.logMessage(`INFO: ${msg}`);
  }
  
  error(msg) {
    this.logger.logMessage(`ERROR: ${msg}`);
  }
}

const consoleLogger = new ConsoleLogger();
const loggerAdapter = new LoggerAdapter(consoleLogger);

loggerAdapter.info("Messaggio informativo");
loggerAdapter.error("Messaggio di errore");


console.log("\n=== 3. DECORATOR PATTERN ===\n");

// Aggiunge funzionalità a oggetti esistenti

class Coffee {
  cost() {
    return 5;
  }
  
  description() {
    return "Caffè";
  }
}

// Decorator base
class CoffeeDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }
  
  cost() {
    return this.coffee.cost();
  }
  
  description() {
    return this.coffee.description();
  }
}

// Decoratori concreti
class MilkDecorator extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 2;
  }
  
  description() {
    return this.coffee.description() + " + Latte";
  }
}

class SugarDecorator extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 1;
  }
  
  description() {
    return this.coffee.description() + " + Zucchero";
  }
}

let myCoffee = new Coffee();
console.log(`${myCoffee.description()}: €${myCoffee.cost()}`);

myCoffee = new MilkDecorator(myCoffee);
console.log(`${myCoffee.description()}: €${myCoffee.cost()}`);

myCoffee = new SugarDecorator(myCoffee);
console.log(`${myCoffee.description()}: €${myCoffee.cost()}`);


console.log("\n=== 4. DECORATOR FUNZIONALE ===\n");

// Decorator con funzioni

function withTimestamp(fn) {
  return function(...args) {
    console.log(`[${new Date().toISOString()}]`);
    return fn.apply(this, args);
  };
}

function withLogging(fn) {
  return function(...args) {
    console.log(`Chiamata con args:`, args);
    const result = fn.apply(this, args);
    console.log(`Risultato:`, result);
    return result;
  };
}

function add(a, b) {
  return a + b;
}

const decoratedAdd = withLogging(withTimestamp(add));
decoratedAdd(5, 3);


console.log("\n=== 5. PROXY PATTERN ===\n");

// Controlla accesso a un oggetto

class RealImage {
  constructor(filename) {
    this.filename = filename;
    this.load();
  }
  
  load() {
    console.log(`Caricamento ${this.filename}...`);
  }
  
  display() {
    console.log(`Mostrando ${this.filename}`);
  }
}

class ImageProxy {
  constructor(filename) {
    this.filename = filename;
    this.realImage = null;
  }
  
  display() {
    if (!this.realImage) {
      this.realImage = new RealImage(this.filename);
    }
    this.realImage.display();
  }
}

console.log("Creando proxy...");
const image = new ImageProxy("photo.jpg");

console.log("\nPrima chiamata display:");
image.display();

console.log("\nSeconda chiamata display:");
image.display();


console.log("\n=== 6. PROXY CON CACHING ===\n");

class ExpensiveOperation {
  compute(n) {
    console.log(`Computing ${n}...`);
    // Simulazione operazione costosa
    return n * n;
  }
}

class CachedProxy {
  constructor(subject) {
    this.subject = subject;
    this.cache = new Map();
  }
  
  compute(n) {
    if (this.cache.has(n)) {
      console.log(`Cache hit per ${n}`);
      return this.cache.get(n);
    }
    
    const result = this.subject.compute(n);
    this.cache.set(n, result);
    return result;
  }
}

const expensive = new ExpensiveOperation();
const cached = new CachedProxy(expensive);

console.log("Risultato:", cached.compute(5));
console.log("Risultato:", cached.compute(5)); // cache
console.log("Risultato:", cached.compute(10));


console.log("\n=== 7. FACADE PATTERN ===\n");

// Interfaccia semplificata per sistema complesso

class CPU {
  freeze() { console.log("CPU: freeze"); }
  jump(position) { console.log(`CPU: jump to ${position}`); }
  execute() { console.log("CPU: execute"); }
}

class Memory {
  load(position, data) {
    console.log(`Memory: load ${data} at ${position}`);
  }
}

class HardDrive {
  read(sector, size) {
    console.log(`HDD: read ${size} from sector ${sector}`);
    return "boot data";
  }
}

// Facade: interfaccia semplice
class ComputerFacade {
  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hdd = new HardDrive();
  }
  
  start() {
    console.log("--- Avvio computer ---");
    this.cpu.freeze();
    const bootData = this.hdd.read(0, 1024);
    this.memory.load(0, bootData);
    this.cpu.jump(0);
    this.cpu.execute();
    console.log("--- Computer avviato ---");
  }
}

const computer = new ComputerFacade();
computer.start();


console.log("\n=== 8. FACADE PER API ===\n");

// Semplifica chiamate API complesse

class APIFacade {
  constructor() {
    this.baseURL = "https://api.example.com";
  }
  
  async getUser(id) {
    console.log(`Fetching user ${id}...`);
    // Simula fetch complesso
    return {
      id,
      name: "Mario",
      email: "mario@example.com"
    };
  }
  
  async getUserPosts(id) {
    console.log(`Fetching posts for user ${id}...`);
    return [
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" }
    ];
  }
  
  async getUserProfile(id) {
    // Facade: combina multiple chiamate
    console.log(`Getting complete profile for user ${id}...`);
    
    const user = await this.getUser(id);
    const posts = await this.getUserPosts(id);
    
    return {
      ...user,
      posts,
      postCount: posts.length
    };
  }
}

(async () => {
  const api = new APIFacade();
  const profile = await api.getUserProfile(123);
  console.log("Profile:", profile);
})();


console.log("\n=== 9. COMPOSITE PATTERN ===\n");

// Tratta oggetti singoli e composizioni uniformemente

class Component {
  constructor(name) {
    this.name = name;
  }
  
  add(component) {}
  remove(component) {}
  display(indent = 0) {}
}

class File extends Component {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
  
  display(indent = 0) {
    console.log(`${"  ".repeat(indent)}📄 ${this.name} (${this.size}KB)`);
  }
}

class Folder extends Component {
  constructor(name) {
    super(name);
    this.children = [];
  }
  
  add(component) {
    this.children.push(component);
  }
  
  remove(component) {
    const index = this.children.indexOf(component);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }
  
  display(indent = 0) {
    console.log(`${"  ".repeat(indent)}📁 ${this.name}/`);
    this.children.forEach(child => child.display(indent + 1));
  }
}

const root = new Folder("root");
const folder1 = new Folder("documents");
const folder2 = new Folder("images");

folder1.add(new File("doc1.txt", 10));
folder1.add(new File("doc2.txt", 20));

folder2.add(new File("photo1.jpg", 500));
folder2.add(new File("photo2.jpg", 600));

root.add(folder1);
root.add(folder2);
root.add(new File("readme.txt", 5));

root.display();


console.log("\n=== 10. FLYWEIGHT PATTERN ===\n");

// Condivide stato comune per risparmiare memoria

class TreeType {
  constructor(name, color, texture) {
    this.name = name;
    this.color = color;
    this.texture = texture;
  }
  
  draw(x, y) {
    console.log(`Drawing ${this.name} at (${x},${y})`);
  }
}

class TreeFactory {
  constructor() {
    this.treeTypes = {};
  }
  
  getTreeType(name, color, texture) {
    const key = `${name}_${color}_${texture}`;
    
    if (!this.treeTypes[key]) {
      console.log(`Creating new tree type: ${key}`);
      this.treeTypes[key] = new TreeType(name, color, texture);
    }
    
    return this.treeTypes[key];
  }
  
  getCount() {
    return Object.keys(this.treeTypes).length;
  }
}

class Tree {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
  
  draw() {
    this.type.draw(this.x, this.y);
  }
}

const factory = new TreeFactory();
const trees = [];

// Crea molti alberi, ma pochi tipi
trees.push(new Tree(10, 20, factory.getTreeType("Oak", "green", "rough")));
trees.push(new Tree(30, 40, factory.getTreeType("Oak", "green", "rough")));
trees.push(new Tree(50, 60, factory.getTreeType("Pine", "darkgreen", "smooth")));
trees.push(new Tree(70, 80, factory.getTreeType("Oak", "green", "rough")));

console.log(`\nAlberi totali: ${trees.length}`);
console.log(`Tipi unici: ${factory.getCount()}`);

trees.forEach(tree => tree.draw());


console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO PATTERN STRUTTURALI");
console.log("=".repeat(50));
console.log(`
PATTERN STRUTTURALI:
Come comporre classi e oggetti in strutture più grandi

1. ADAPTER:

SCOPO: Adatta un'interfaccia a un'altra

QUANDO:
✓ Usare classe con interfaccia incompatibile
✓ Integrare librerie esterne
✓ Legacy code

IMPLEMENTAZIONE:
class Adapter {
  constructor(adaptee) {
    this.adaptee = adaptee;
  }
  
  request() {
    return this.adaptee.specificRequest();
  }
}

PRO:
✓ Riusa codice esistente
✓ Separa adattamento da logica
✓ Single Responsibility

CONTRO:
✗ Codice aggiuntivo
✗ Complessità


2. DECORATOR:

SCOPO: Aggiunge responsabilità a oggetti dinamicamente

QUANDO:
✓ Estendere funzionalità senza sottoclassi
✓ Responsabilità opzionali
✓ Combinare comportamenti

IMPLEMENTAZIONE:
class Decorator {
  constructor(component) {
    this.component = component;
  }
  
  operation() {
    // before
    this.component.operation();
    // after
  }
}

PRO:
✓ Più flessibile di ereditarietà
✓ Combina comportamenti
✓ Open/Closed principle

CONTRO:
✗ Molti piccoli oggetti
✗ Ordine decoratori importante


3. PROXY:

SCOPO: Placeholder che controlla accesso a oggetto

TIPI:
• Virtual: lazy loading
• Protection: controllo accesso
• Remote: oggetto remoto
• Cache: memorizza risultati

QUANDO:
✓ Lazy initialization
✓ Access control
✓ Caching
✓ Logging

IMPLEMENTAZIONE:
class Proxy {
  constructor(subject) {
    this.subject = subject;
  }
  
  request() {
    // controllo accesso
    if (this.checkAccess()) {
      this.subject.request();
    }
  }
}

PRO:
✓ Controlla accesso
✓ Lazy loading
✓ Separazione concerns

CONTRO:
✗ Overhead
✗ Complessità


4. FACADE:

SCOPO: Interfaccia semplificata a sistema complesso

QUANDO:
✓ Semplificare libreria complessa
✓ Disaccoppiare client da subsistema
✓ Layer tra sistemi

IMPLEMENTAZIONE:
class Facade {
  constructor() {
    this.subsystem1 = new Subsystem1();
    this.subsystem2 = new Subsystem2();
  }
  
  operation() {
    this.subsystem1.op1();
    this.subsystem2.op2();
  }
}

PRO:
✓ Semplifica interfaccia
✓ Disaccoppia codice
✓ Raggruppa operazioni

CONTRO:
✗ Può diventare God object
✗ Nasconde funzionalità


5. COMPOSITE:

SCOPO: Compone oggetti in strutture ad albero

QUANDO:
✓ Rappresentare gerarchie
✓ Trattare uniformemente singoli e composizioni
✓ Strutture ricorsive

IMPLEMENTAZIONE:
class Composite extends Component {
  constructor() {
    super();
    this.children = [];
  }
  
  add(component) {
    this.children.push(component);
  }
  
  operation() {
    this.children.forEach(c => c.operation());
  }
}

PRO:
✓ Strutture complesse semplici
✓ Open/Closed principle
✓ Codice client semplice

CONTRO:
✗ Design troppo generale
✗ Tipo checking difficile


6. FLYWEIGHT:

SCOPO: Condivide stato comune tra oggetti

QUANDO:
✓ Molti oggetti simili
✓ Memoria limitata
✓ Performance critiche

IMPLEMENTAZIONE:
class FlyweightFactory {
  constructor() {
    this.flyweights = {};
  }
  
  getFlyweight(key) {
    if (!this.flyweights[key]) {
      this.flyweights[key] = new Flyweight(key);
    }
    return this.flyweights[key];
  }
}

STATO:
• Intrinseco: condiviso (flyweight)
• Estrinseco: unico (passato ai metodi)

PRO:
✓ Risparmia memoria
✓ Performance migliori

CONTRO:
✗ Complessità
✗ Scambio CPU per memoria


CONFRONTO:

ADAPTER vs FACADE:
• Adapter: cambia interfaccia
• Facade: semplifica interfaccia

DECORATOR vs PROXY:
• Decorator: aggiunge funzionalità
• Proxy: controlla accesso

COMPOSITE vs DECORATOR:
• Composite: strutture parte-tutto
• Decorator: responsabilità aggiunte

QUANDO USARE:

✓ ADAPTER:
  Interfacce incompatibili

✓ DECORATOR:
  Estendere dinamicamente

✓ PROXY:
  Controllare accesso, lazy load

✓ FACADE:
  Semplificare sistema complesso

✓ COMPOSITE:
  Gerarchie parte-tutto

✓ FLYWEIGHT:
  Molti oggetti, poca memoria

BEST PRACTICES:
✓ Adapter per legacy integration
✓ Decorator per composizione funzionalità
✓ Proxy per lazy loading, caching
✓ Facade per API semplificate
✓ Composite per strutture ricorsive
✗ Non over-engineer
✗ Valuta complessità vs benefici
`);
