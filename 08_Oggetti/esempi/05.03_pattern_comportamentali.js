/**
 * PATTERN COMPORTAMENTALI
 * 
 * Observer, Strategy, Command, Chain of Responsibility, Iterator
 */

console.log("=== 1. OBSERVER PATTERN ===\n");

// Notifica automatica agli osservatori quando cambia stato

class Subject {
  constructor() {
    this.observers = [];
    this.state = null;
  }
  
  attach(observer) {
    this.observers.push(observer);
  }
  
  detach(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }
  
  notify() {
    this.observers.forEach(observer => observer.update(this.state));
  }
  
  setState(state) {
    this.state = state;
    this.notify();
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  
  update(state) {
    console.log(`${this.name} ricevuto: ${state}`);
  }
}

const subject = new Subject();

const obs1 = new Observer("Observer 1");
const obs2 = new Observer("Observer 2");

subject.attach(obs1);
subject.attach(obs2);

subject.setState("Nuovo stato!");


console.log("\n=== 2. OBSERVER CON EVENTI ===\n");

class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }
  
  off(event, callback) {
    if (!this.events[event]) return;
    
    this.events[event] = this.events[event].filter(cb => cb !== callback);
  }
  
  emit(event, data) {
    if (!this.events[event]) return;
    
    this.events[event].forEach(callback => callback(data));
  }
  
  once(event, callback) {
    const wrapper = (data) => {
      callback(data);
      this.off(event, wrapper);
    };
    this.on(event, wrapper);
  }
}

const emitter = new EventEmitter();

emitter.on("data", (data) => {
  console.log("Handler 1:", data);
});

emitter.on("data", (data) => {
  console.log("Handler 2:", data);
});

emitter.emit("data", { message: "Hello!" });

emitter.once("init", () => {
  console.log("Init - chiamato solo una volta");
});

emitter.emit("init");
emitter.emit("init"); // non fa nulla


console.log("\n=== 3. STRATEGY PATTERN ===\n");

// Famiglia di algoritmi intercambiabili

class PaymentStrategy {
  pay(amount) {}
}

class CreditCardStrategy extends PaymentStrategy {
  constructor(cardNumber) {
    super();
    this.cardNumber = cardNumber;
  }
  
  pay(amount) {
    console.log(`Pagato €${amount} con carta ${this.cardNumber}`);
  }
}

class PayPalStrategy extends PaymentStrategy {
  constructor(email) {
    super();
    this.email = email;
  }
  
  pay(amount) {
    console.log(`Pagato €${amount} con PayPal (${this.email})`);
  }
}

class BitcoinStrategy extends PaymentStrategy {
  constructor(address) {
    super();
    this.address = address;
  }
  
  pay(amount) {
    console.log(`Pagato €${amount} con Bitcoin (${this.address})`);
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
    this.paymentStrategy = null;
  }
  
  addItem(item) {
    this.items.push(item);
  }
  
  setPaymentStrategy(strategy) {
    this.paymentStrategy = strategy;
  }
  
  checkout() {
    const total = this.items.reduce((sum, item) => sum + item.price, 0);
    this.paymentStrategy.pay(total);
  }
}

const cart = new ShoppingCart();
cart.addItem({ name: "Libro", price: 15 });
cart.addItem({ name: "Penna", price: 2 });

cart.setPaymentStrategy(new CreditCardStrategy("1234-5678"));
cart.checkout();

cart.setPaymentStrategy(new PayPalStrategy("user@email.com"));
cart.checkout();


console.log("\n=== 4. STRATEGY PER SORTING ===\n");

class SortStrategy {
  sort(data) {}
}

class BubbleSortStrategy extends SortStrategy {
  sort(data) {
    console.log("Sorting con Bubble Sort");
    // Implementazione semplificata
    return [...data].sort((a, b) => a - b);
  }
}

class QuickSortStrategy extends SortStrategy {
  sort(data) {
    console.log("Sorting con Quick Sort");
    return [...data].sort((a, b) => a - b);
  }
}

class Sorter {
  constructor(strategy) {
    this.strategy = strategy;
  }
  
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  
  sort(data) {
    return this.strategy.sort(data);
  }
}

const data = [5, 2, 8, 1, 9];
const sorter = new Sorter(new BubbleSortStrategy());

console.log("Risultato:", sorter.sort(data));

sorter.setStrategy(new QuickSortStrategy());
console.log("Risultato:", sorter.sort(data));


console.log("\n=== 5. COMMAND PATTERN ===\n");

// Incapsula richiesta come oggetto

class Light {
  on() {
    console.log("💡 Luce accesa");
  }
  
  off() {
    console.log("💡 Luce spenta");
  }
}

class Command {
  execute() {}
  undo() {}
}

class LightOnCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }
  
  execute() {
    this.light.on();
  }
  
  undo() {
    this.light.off();
  }
}

class LightOffCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }
  
  execute() {
    this.light.off();
  }
  
  undo() {
    this.light.on();
  }
}

class RemoteControl {
  constructor() {
    this.history = [];
  }
  
  submit(command) {
    command.execute();
    this.history.push(command);
  }
  
  undo() {
    const command = this.history.pop();
    if (command) {
      command.undo();
    }
  }
}

const light = new Light();
const remote = new RemoteControl();

remote.submit(new LightOnCommand(light));
remote.submit(new LightOffCommand(light));
remote.undo(); // Annulla ultimo comando


console.log("\n=== 6. COMMAND CON MACRO ===\n");

class MacroCommand extends Command {
  constructor(commands) {
    super();
    this.commands = commands;
  }
  
  execute() {
    console.log("--- Eseguendo macro ---");
    this.commands.forEach(cmd => cmd.execute());
  }
  
  undo() {
    console.log("--- Annullando macro ---");
    // Undo in ordine inverso
    [...this.commands].reverse().forEach(cmd => cmd.undo());
  }
}

const macro = new MacroCommand([
  new LightOnCommand(light),
  new LightOffCommand(light),
  new LightOnCommand(light)
]);

remote.submit(macro);
console.log("\nUndo macro:");
remote.undo();


console.log("\n=== 7. CHAIN OF RESPONSIBILITY ===\n");

// Catena di handler per gestire richieste

class Handler {
  constructor() {
    this.nextHandler = null;
  }
  
  setNext(handler) {
    this.nextHandler = handler;
    return handler; // per chain
  }
  
  handle(request) {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}

class AuthHandler extends Handler {
  handle(request) {
    if (!request.authenticated) {
      console.log("❌ Auth fallito");
      return false;
    }
    console.log("✓ Autenticato");
    return super.handle(request);
  }
}

class ValidationHandler extends Handler {
  handle(request) {
    if (!request.data || request.data.length === 0) {
      console.log("❌ Validazione fallita");
      return false;
    }
    console.log("✓ Dati validi");
    return super.handle(request);
  }
}

class ProcessHandler extends Handler {
  handle(request) {
    console.log("✓ Richiesta processata");
    return true;
  }
}

const authHandler = new AuthHandler();
const validationHandler = new ValidationHandler();
const processHandler = new ProcessHandler();

authHandler
  .setNext(validationHandler)
  .setNext(processHandler);

console.log("Richiesta 1:");
authHandler.handle({
  authenticated: true,
  data: "test"
});

console.log("\nRichiesta 2:");
authHandler.handle({
  authenticated: false,
  data: "test"
});


console.log("\n=== 8. ITERATOR PATTERN ===\n");

// Accede sequenzialmente agli elementi

class ArrayIterator {
  constructor(array) {
    this.array = array;
    this.index = 0;
  }
  
  hasNext() {
    return this.index < this.array.length;
  }
  
  next() {
    return this.hasNext() ? this.array[this.index++] : null;
  }
  
  reset() {
    this.index = 0;
  }
}

const numbers = [1, 2, 3, 4, 5];
const iterator = new ArrayIterator(numbers);

console.log("Iterazione:");
while (iterator.hasNext()) {
  console.log(iterator.next());
}


console.log("\n=== 9. CUSTOM ITERABLE ===\n");

class Range {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  
  // Rende l'oggetto iterabile con for...of
  [Symbol.iterator]() {
    let current = this.start;
    const end = this.end;
    
    return {
      next() {
        if (current <= end) {
          return { value: current++, done: false };
        }
        return { done: true };
      }
    };
  }
}

const range = new Range(1, 5);

console.log("Range 1-5:");
for (const num of range) {
  console.log(num);
}


console.log("\n=== 10. MEDIATOR PATTERN ===\n");

// Centralizza comunicazione tra oggetti

class ChatRoom {
  constructor() {
    this.users = {};
  }
  
  register(user) {
    this.users[user.name] = user;
    user.chatroom = this;
  }
  
  send(message, from, to) {
    if (to) {
      // Messaggio privato
      to.receive(message, from);
    } else {
      // Broadcast
      Object.values(this.users).forEach(user => {
        if (user !== from) {
          user.receive(message, from);
        }
      });
    }
  }
}

class User {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }
  
  send(message, to) {
    console.log(`${this.name} invia: "${message}"`);
    this.chatroom.send(message, this, to);
  }
  
  receive(message, from) {
    console.log(`${this.name} riceve da ${from.name}: "${message}"`);
  }
}

const chatroom = new ChatRoom();

const mario = new User("Mario");
const luigi = new User("Luigi");
const peach = new User("Peach");

chatroom.register(mario);
chatroom.register(luigi);
chatroom.register(peach);

console.log("\nBroadcast:");
mario.send("Ciao a tutti!");

console.log("\nMessaggio privato:");
luigi.send("Ciao Mario!", mario);


console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO PATTERN COMPORTAMENTALI");
console.log("=".repeat(50));
console.log(`
PATTERN COMPORTAMENTALI:
Gestiscono algoritmi e responsabilità tra oggetti

1. OBSERVER (Publisher-Subscriber):

SCOPO: Notifica automatica ai dipendenti quando cambia stato

QUANDO:
✓ Molti oggetti dipendono da uno
✓ Non sappiamo quanti osservatori
✓ Eventi, reactive programming

IMPLEMENTAZIONE:
class Subject {
  constructor() {
    this.observers = [];
  }
  
  attach(observer) {
    this.observers.push(observer);
  }
  
  notify() {
    this.observers.forEach(o => o.update());
  }
}

USO:
• Event listeners (DOM)
• State management (Redux)
• Data binding (Vue, React)
• Reactive programming (RxJS)

PRO:
✓ Loose coupling
✓ Aggiungi osservatori runtime
✓ Open/Closed principle

CONTRO:
✗ Ordine notifiche non garantito
✗ Memory leaks se non detach
✗ Debugging complesso


2. STRATEGY:

SCOPO: Famiglia di algoritmi intercambiabili

QUANDO:
✓ Varianti di un algoritmo
✓ Evitare condizionali complessi
✓ Isolare algoritmo

IMPLEMENTAZIONE:
class Context {
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  
  execute() {
    return this.strategy.algorithm();
  }
}

USO:
• Sorting algorithms
• Payment methods
• Compression algorithms
• Validation rules

PRO:
✓ Swap algoritmi runtime
✓ Isola logica algoritmo
✓ Elimina condizionali

CONTRO:
✗ Client deve conoscere differenze
✗ Più oggetti
✗ Overhead se poche strategie


3. COMMAND:

SCOPO: Incapsula richiesta come oggetto

QUANDO:
✓ Parametrizzare azioni
✓ Queue operazioni
✓ Undo/Redo
✓ Logging, transazioni

IMPLEMENTAZIONE:
class Command {
  execute() {}
  undo() {}
}

class ConcreteCommand extends Command {
  constructor(receiver) {
    super();
    this.receiver = receiver;
  }
  
  execute() {
    this.receiver.action();
  }
}

USO:
• Undo/Redo systems
• Macro recording
• Transaction systems
• Job queues

PRO:
✓ Disaccoppia sender/receiver
✓ Compose comandi (macro)
✓ Undo/Redo facile
✓ Queue, schedule, log

CONTRO:
✗ Molte classi command
✗ Codice più complesso


4. CHAIN OF RESPONSIBILITY:

SCOPO: Catena di handler per gestire richieste

QUANDO:
✓ Più di un handler può gestire richiesta
✓ Handler deciso runtime
✓ Set handler dinamico

IMPLEMENTAZIONE:
class Handler {
  setNext(handler) {
    this.next = handler;
    return handler;
  }
  
  handle(request) {
    if (this.canHandle(request)) {
      return this.process(request);
    }
    return this.next?.handle(request);
  }
}

USO:
• Middleware (Express.js)
• Event bubbling (DOM)
• Authentication/validation pipeline
• Logging chains

PRO:
✓ Disaccoppia sender/receiver
✓ Aggiungi handler dinamicamente
✓ Single Responsibility

CONTRO:
✗ Richiesta può non essere gestita
✗ Debug difficile
✗ Performance (catena lunga)


5. ITERATOR:

SCOPO: Accesso sequenziale senza esporre rappresentazione

QUANDO:
✓ Attraversare strutture complesse
✓ Interfaccia uniforme traversal
✓ Multiple iterazioni simultanee

IMPLEMENTAZIONE:
class Iterator {
  hasNext() {}
  next() {}
}

// JavaScript built-in:
[Symbol.iterator]() {
  return {
    next() {
      return { value, done };
    }
  };
}

USO:
• Collections (Array, Map, Set)
• Tree/graph traversal
• Custom data structures
• Generators

PRO:
✓ Interfaccia uniforme
✓ Multiple iterazioni simultanee
✓ Separa algoritmo da struttura

CONTRO:
✗ Overkill per collezioni semplici
✗ JavaScript ha iteratori built-in


6. MEDIATOR:

SCOPO: Centralizza comunicazione tra oggetti

QUANDO:
✓ Oggetti comunicano in modo complesso
✓ Riusare oggetto senza dipendenze
✓ Comportamento distribuito in molte classi

IMPLEMENTAZIONE:
class Mediator {
  notify(sender, event) {
    // coordina interazioni
  }
}

USO:
• Chat rooms
• Air traffic control
• UI dialog coordinators
• Event buses

PRO:
✓ Riduce coupling
✓ Centralizza controllo
✓ Semplifica comunicazione

CONTRO:
✗ Mediator può diventare God object
✗ Complessità spostata


7. STATE:

SCOPO: Cambia comportamento quando cambia stato

QUANDO:
✓ Comportamento dipende da stato
✓ Molti condizionali basati su stato
✓ Stati espliciti

IMPLEMENTAZIONE:
class Context {
  setState(state) {
    this.state = state;
  }
  
  request() {
    this.state.handle();
  }
}

USO:
• TCP connection states
• UI component states
• Game states
• Workflow engines

PRO:
✓ Organizza codice per stato
✓ Transizioni esplicite
✓ Elimina condizionali

CONTRO:
✗ Molte classi state
✗ Overhead se stati semplici


8. TEMPLATE METHOD:

SCOPO: Definisce skeleton algoritmo, sottoclassi ridefiniscono step

QUANDO:
✓ Algoritmo comune con variazioni
✓ Evitare duplicazione
✓ Framework (hook methods)

IMPLEMENTAZIONE:
class AbstractClass {
  templateMethod() {
    this.step1();
    this.step2();
    this.step3();
  }
  
  step2() {} // hook, override
}

PRO:
✓ Riusa codice comune
✓ Controllo inversione

CONTRO:
✗ Accoppiato a gerarchia


9. VISITOR:

SCOPO: Separa algoritmo da struttura oggetti

QUANDO:
✓ Operazioni su struttura complessa
✓ Struttura stabile, operazioni cambiano
✓ Operazioni non correlate

PRO:
✓ Aggiungi operazioni facilmente
✓ Raggruppa operazioni correlate

CONTRO:
✗ Aggiungere tipi difficile
✗ Rompe incapsulamento


10. MEMENTO:

SCOPO: Cattura e ripristina stato interno

QUANDO:
✓ Snapshot stato
✓ Undo mechanism
✓ Salva/carica stato

PRO:
✓ Preserva incapsulamento
✓ Semplifica originator

CONTRO:
✗ Costoso se stato grande
✗ Memory overhead


CONFRONTO:

OBSERVER vs MEDIATOR:
• Observer: one-to-many, broadcast
• Mediator: many-to-many, centralizzato

STRATEGY vs STATE:
• Strategy: cliente sceglie
• State: transizioni automatiche

COMMAND vs STRATEGY:
• Command: incapsula azione (con undo)
• Strategy: incapsula algoritmo

CHAIN vs DECORATOR:
• Chain: uno gestisce
• Decorator: tutti contribuiscono

QUANDO USARE:

✓ OBSERVER: Eventi, reactive
✓ STRATEGY: Swap algoritmi
✓ COMMAND: Undo/redo, queue
✓ CHAIN: Pipeline, middleware
✓ ITERATOR: Traversal custom
✓ MEDIATOR: Coordinare interazioni
✓ STATE: Behavior dipende da stato

BEST PRACTICES:
✓ Observer per eventi
✓ Strategy per varianti algoritmo
✓ Command per azioni con undo
✓ Chain per middleware pipeline
✓ Mediator per comunicazione complessa
✗ Non over-engineer
✗ Considera semplicità
✗ JavaScript ha funzioni first-class
  (Strategy può essere semplice funzione!)

PATTERN IN JAVASCRIPT:
• Observer: addEventListener, EventEmitter
• Strategy: spesso semplici funzioni
• Command: funzioni come oggetti
• Iterator: Symbol.iterator, generators
• Chain: middleware pattern (Express)
`);
