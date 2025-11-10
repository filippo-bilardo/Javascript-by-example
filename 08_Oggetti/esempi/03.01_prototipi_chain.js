/**
 * PROTOTIPI E CATENA PROTOTYPALE
 * 
 * Comprendere il sistema dei prototipi in JavaScript
 */

console.log("=== 1. PROTOTYPE CHAIN BASE ===\n");

// Ogni oggetto ha un prototipo
const animale = {
  tipo: "Generico",
  respira: function() {
    return `${this.tipo} sta respirando`;
  }
};

// Creare oggetto che eredita da animale
const cane = Object.create(animale);
cane.tipo = "Cane";
cane.abbaia = function() {
  return "Bau bau!";
};

console.log("Tipo cane:", cane.tipo);
console.log("Abbaia:", cane.abbaia());
console.log("Respira:", cane.respira()); // ereditato da animale

// Verificare prototipo
console.log("\nPrototipo di cane è animale:", Object.getPrototypeOf(cane) === animale);


console.log("\n=== 2. __PROTO__ VS PROTOTYPE ===\n");

// Funzione costruttore
function Persona(nome) {
  this.nome = nome;
}

// prototype è proprietà delle FUNZIONI
Persona.prototype.saluta = function() {
  return `Ciao, sono ${this.nome}`;
};

const mario = new Persona("Mario");

// __proto__ è proprietà degli OGGETTI (punta al prototype del costruttore)
console.log("mario.__proto__ === Persona.prototype:", mario.__proto__ === Persona.prototype);
console.log("mario.saluta():", mario.saluta());


console.log("\n=== 3. AGGIUNGERE METODI AL PROTOTYPE ===\n");

function Auto(marca, modello) {
  this.marca = marca;
  this.modello = modello;
}

// Metodi condivisi su prototype (memoria efficiente)
Auto.prototype.descrivi = function() {
  return `${this.marca} ${this.modello}`;
};

Auto.prototype.accendi = function() {
  return `${this.descrivi()} accesa`;
};

const fiat = new Auto("Fiat", "500");
const toyota = new Auto("Toyota", "Yaris");

console.log(fiat.descrivi());
console.log(toyota.accendi());

// Stesso metodo condiviso
console.log("Stesso metodo:", fiat.descrivi === toyota.descrivi);


console.log("\n=== 4. RICERCA NELLA PROTOTYPE CHAIN ===\n");

const obj = {
  a: 1
};

Object.prototype.b = 2; // aggiunto al prototipo globale (sconsigliato!)

console.log("obj.a:", obj.a); // trovato direttamente
console.log("obj.b:", obj.b); // trovato nel prototype
console.log("obj.c:", obj.c); // undefined (non trovato)

// hasOwnProperty distingue proprietà proprie da ereditate
console.log("\nhasOwnProperty('a'):", obj.hasOwnProperty('a')); // true
console.log("hasOwnProperty('b'):", obj.hasOwnProperty('b')); // false

delete Object.prototype.b; // cleanup


console.log("\n=== 5. EREDITARIETÀ CON FUNZIONI COSTRUTTORE ===\n");

// Classe base
function Veicolo(tipo) {
  this.tipo = tipo;
  this.velocità = 0;
}

Veicolo.prototype.accelera = function(delta) {
  this.velocità += delta;
  return this.velocità;
};

Veicolo.prototype.frena = function(delta) {
  this.velocità = Math.max(0, this.velocità - delta);
  return this.velocità;
};

// Classe derivata
function Automobile(marca, modello) {
  Veicolo.call(this, "Auto"); // chiama costruttore base
  this.marca = marca;
  this.modello = modello;
}

// Impostare ereditarietà
Automobile.prototype = Object.create(Veicolo.prototype);
Automobile.prototype.constructor = Automobile; // ripristina constructor

// Aggiungere metodi specifici
Automobile.prototype.descrizione = function() {
  return `${this.marca} ${this.modello} (${this.tipo})`;
};

const miaAuto = new Automobile("Fiat", "Panda");
console.log(miaAuto.descrizione());
console.log("Velocità:", miaAuto.velocità);
miaAuto.accelera(50);
console.log("Dopo accelerazione:", miaAuto.velocità);


console.log("\n=== 6. OVERRIDE DI METODI ===\n");

function AnimaleBase(nome) {
  this.nome = nome;
}

AnimaleBase.prototype.verso = function() {
  return "Verso generico";
};

function Gatto(nome) {
  AnimaleBase.call(this, nome);
}

Gatto.prototype = Object.create(AnimaleBase.prototype);
Gatto.prototype.constructor = Gatto;

// Override del metodo
Gatto.prototype.verso = function() {
  return "Miao!";
};

// Chiamare metodo base
Gatto.prototype.versoCompleto = function() {
  const versoBase = AnimaleBase.prototype.verso.call(this);
  return `${this.nome}: ${this.verso()} (originale: ${versoBase})`;
};

const felix = new Gatto("Felix");
console.log("Verso:", felix.verso());
console.log("Verso completo:", felix.versoCompleto());


console.log("\n=== 7. INSTANCEOF E PROTOTYPE CHAIN ===\n");

function A() {}
function B() {}
B.prototype = Object.create(A.prototype);

function C() {}
C.prototype = Object.create(B.prototype);

const c = new C();

console.log("c instanceof C:", c instanceof C);
console.log("c instanceof B:", c instanceof B);
console.log("c instanceof A:", c instanceof A);
console.log("c instanceof Object:", c instanceof Object);

// isPrototypeOf
console.log("\nC.prototype.isPrototypeOf(c):", C.prototype.isPrototypeOf(c));
console.log("A.prototype.isPrototypeOf(c):", A.prototype.isPrototypeOf(c));


console.log("\n=== 8. OBJECT.CREATE() AVANZATO ===\n");

const proto = {
  saluta() {
    return `Ciao da ${this.nome}`;
  }
};

// Object.create con secondo parametro (property descriptors)
const persona = Object.create(proto, {
  nome: {
    value: "Mario",
    writable: true,
    enumerable: true,
    configurable: true
  },
  età: {
    value: 30,
    writable: true,
    enumerable: true,
    configurable: true
  }
});

console.log("Persona:", persona);
console.log("Saluto:", persona.saluta());


console.log("\n=== 9. MODIFICARE PROTOTYPE DINAMICAMENTE ===\n");

function Prodotto(nome, prezzo) {
  this.nome = nome;
  this.prezzo = prezzo;
}

const p1 = new Prodotto("Laptop", 1000);
const p2 = new Prodotto("Mouse", 25);

console.log("P1 ha sconto?", p1.sconto); // undefined

// Aggiungere metodo al prototype dopo creazione istanze
Prodotto.prototype.sconto = function(percentuale) {
  return this.prezzo * (1 - percentuale / 100);
};

// Le istanze esistenti hanno subito il nuovo metodo!
console.log("\nP1 con sconto 10%:", p1.sconto(10));
console.log("P2 con sconto 20%:", p2.sconto(20));


console.log("\n=== 10. PATTERN E BEST PRACTICES ===\n");

// Pattern 1: Metodi sul prototype, dati sull'istanza
function Utente(username, email) {
  this.username = username; // dati personali
  this.email = email;
}

Utente.prototype.login = function() {
  return `${this.username} logged in`;
}; // comportamento condiviso

const u1 = new Utente("mario", "mario@test.com");
const u2 = new Utente("luigi", "luigi@test.com");

console.log("U1:", u1.login());
console.log("U2:", u2.login());
console.log("Metodi condivisi:", u1.login === u2.login);

// Pattern 2: Constructor check
function Classe(val) {
  // Auto-new pattern
  if (!(this instanceof Classe)) {
    return new Classe(val);
  }
  this.val = val;
}

const obj1 = new Classe(1);
const obj2 = Classe(2); // senza new funziona lo stesso

console.log("\nObj1:", obj1);
console.log("Obj2:", obj2);

// Pattern 3: Ereditarietà multipla (mixin)
const canEat = {
  eat(food) {
    return `${this.name} sta mangiando ${food}`;
  }
};

const canWalk = {
  walk() {
    return `${this.name} sta camminando`;
  }
};

const canSwim = {
  swim() {
    return `${this.name} sta nuotando`;
  }
};

function Anatra(name) {
  this.name = name;
}

// Mixin: copiare metodi da più sorgenti
Object.assign(Anatra.prototype, canEat, canWalk, canSwim);

const paperino = new Anatra("Paperino");
console.log("\n" + paperino.eat("pane"));
console.log(paperino.walk());
console.log(paperino.swim());


console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO PROTOTIPI");
console.log("=".repeat(50));
console.log(`
CONCETTI CHIAVE:

PROTOTYPE:
• Ogni funzione ha proprietà 'prototype'
• Oggetti creati con 'new' ereditano da function.prototype
• function.prototype è un oggetto normale

__PROTO__:
• Ogni oggetto ha proprietà __proto__
• Punta al prototype del costruttore
• Meglio usare Object.getPrototypeOf/setPrototypeOf

PROTOTYPE CHAIN:
obj → obj.__proto__ → obj.__proto__.__proto__ → ... → null
• Ricerca proprietà risale la catena
• Primo match vince
• Performance: catene lunghe = più lente

EREDITARIETÀ:

1. CON FUNZIONI COSTRUTTORE:
   function Child(args) {
     Parent.call(this, args); // chiama costruttore padre
   }
   Child.prototype = Object.create(Parent.prototype);
   Child.prototype.constructor = Child;

2. CON OBJECT.CREATE:
   const child = Object.create(parent);
   
3. CON CLASSI (ES6):
   class Child extends Parent {
     constructor(args) {
       super(args);
     }
   }

AGGIUNGERE METODI:
• Sul prototype: memoria efficiente, condivisi
• Sulla istanza: memoria inefficiente, unici

OVERRIDE:
• Definire metodo con stesso nome in child
• Chiamare parent: Parent.prototype.method.call(this)

VERIFICA:
• instanceof: obj instanceof Constructor
• isPrototypeOf: Proto.isPrototypeOf(obj)
• hasOwnProperty: obj.hasOwnProperty('prop')

BEST PRACTICES:
✓ Metodi sul prototype, dati sull'istanza
✓ Non modificare Object.prototype (inquina globale)
✓ Ripristina constructor dopo ereditarietà
✓ Usa classi ES6 per codice più chiaro
✓ Object.create per ereditarietà prototypale pura
✗ Evita catene troppo lunghe
✗ Non fare affidamento su __proto__ (deprecato)
✗ Non modificare prototype di built-in (Array, String, ecc.)

PATTERN:
• Costruttore + prototype per "classi"
• Object.create per ereditarietà diretta
• Mixin (Object.assign) per ereditarietà multipla
• Auto-new pattern per API flessibile

VANTAGGI:
• Flessibilità estrema
• Memoria efficiente (metodi condivisi)
• Modificabile a runtime
• Delega comportamento

SVANTAGGI:
• Può essere confuso per beginners
• Performance (lookup chain)
• Debug più complesso
• ES6 classes più familiari
`);
