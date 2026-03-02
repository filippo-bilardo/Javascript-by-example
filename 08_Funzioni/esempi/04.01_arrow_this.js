/**
 * ARROW FUNCTIONS E THIS BINDING
 * 
 * Le arrow functions hanno comportamento speciale con 'this':
 * NON hanno proprio this, ma usano this dello scope esterno (lexical this).
 * Questo risolve molti problemi comuni ma crea alcune limitazioni.
 */

console.log("=== 1. THIS IN FUNZIONI NORMALI ===\n");

// Function normale: this dipende da COME viene chiamata
function mostraThis() {
  console.log("this:", this);
  console.log("typeof this:", typeof this);
}

// Chiamata diretta
console.log("Chiamata diretta:");
// mostraThis();  // undefined (strict mode) o global object

// Come metodo
const obj = {
  nome: "Oggetto",
  mostra: mostraThis
};

console.log("Come metodo:");
obj.mostra();  // this è obj

// Problema: perdita di this
const metodoSalvato = obj.mostra;
console.log("\nMetodo salvato:");
// metodoSalvato();  // this perso!


console.log("\n=== 2. THIS IN ARROW FUNCTIONS ===\n");

// Arrow function: this è LESSICALE (dal contesto di definizione)
const arrowFunc = () => {
  console.log("Arrow this:", this);
};

console.log("Arrow chiamata direttamente:");
arrowFunc();  // this dal contesto esterno

const obj2 = {
  nome: "Oggetto2",
  arrowMetodo: () => {
    console.log("\nArrow come metodo:");
    console.log("  this.nome:", this.nome);  // undefined! Non this di obj2
  }
};

obj2.arrowMetodo();


console.log("\n=== 3. ARROW IN METODI OGGETTO ===\n");

// ❌ NON usare arrow per metodi oggetto
const persona1 = {
  nome: "Mario",
  età: 30,
  
  // ❌ Arrow function - NON funziona
  salutaArrow: () => {
    return `Ciao, sono ${this.nome}`;  // this.nome è undefined!
  },
  
  // ✓ Function normale - funziona
  salutaNormale: function() {
    return `Ciao, sono ${this.nome}`;
  },
  
  // ✓ Method shorthand (ES6) - funziona
  salutaShorthand() {
    return `Ciao, sono ${this.nome}`;
  }
};

console.log("Arrow method:", persona1.salutaArrow());
console.log("Normal method:", persona1.salutaNormale());
console.log("Shorthand method:", persona1.salutaShorthand());


console.log("\n=== 4. ARROW IN CALLBACK ===\n");

// ✓ Arrow functions sono PERFETTE per callback
const persona2 = {
  nome: "Luigi",
  hobbies: ["lettura", "sport", "musica"],
  
  mostraHobbies: function() {
    console.log(`Hobbies di ${this.nome}:`);
    
    // ❌ Con function normale - problema!
    /*
    this.hobbies.forEach(function(hobby) {
      console.log(`  ${this.nome} ama ${hobby}`);  // this.nome undefined!
    });
    */
    
    // ✓ Con arrow - this corretto!
    this.hobbies.forEach((hobby) => {
      console.log(`  ${this.nome} ama ${hobby}`);  // this.nome OK!
    });
  }
};

persona2.mostraHobbies();


console.log("\n=== 5. ARROW CON setTimeout ===\n");

// Problema classico con setTimeout
const timer1 = {
  secondi: 0,
  
  // ❌ Function normale perde this
  startMale: function() {
    setTimeout(function() {
      this.secondi++;
      console.log("  Secondi (male):", this.secondi);  // NaN
    }, 100);
  },
  
  // ✓ Soluzione vecchia: that = this
  startThat: function() {
    const that = this;
    setTimeout(function() {
      that.secondi++;
      console.log("  Secondi (that):", that.secondi);
    }, 100);
  },
  
  // ✓ Soluzione moderna: arrow function
  startBene: function() {
    setTimeout(() => {
      this.secondi++;
      console.log("  Secondi (arrow):", this.secondi);
    }, 100);
  }
};

// timer1.startMale();  // ❌ Errore
setTimeout(() => {
  timer1.startThat();
  timer1.startBene();
}, 200);


console.log("\n=== 6. ARROW IN EVENT HANDLERS ===\n");

// Simulazione event handler
const button = {
  text: "Click Me",
  clicks: 0,
  
  // ❌ Arrow function - this NON è button!
  handleClickArrow: () => {
    console.log("\nArrow handler:");
    console.log("  this.clicks:", this.clicks);  // undefined
  },
  
  // ✓ Function normale - this è button
  handleClickNormal: function() {
    this.clicks++;
    console.log("\nNormal handler:");
    console.log("  this.text:", this.text);
    console.log("  this.clicks:", this.clicks);
  },
  
  // ✓ Arrow dentro normal - combina vantaggi
  handleClickCombo: function() {
    this.clicks++;
    console.log("\nCombo handler:");
    console.log("  Immediate this.clicks:", this.clicks);
    
    // Arrow per timeout mantiene this
    setTimeout(() => {
      console.log("  Delayed this.clicks:", this.clicks);
    }, 100);
  }
};

button.handleClickArrow();
button.handleClickNormal();
button.handleClickCombo();


console.log("\n=== 7. ARROW IN CLASS ===\n");

// Arrow functions in classi ES6
class Counter {
  constructor() {
    this.count = 0;
  }
  
  // Metodo normale
  incrementNormal() {
    this.count++;
    return this.count;
  }
  
  // Arrow come class field (stage 3 proposal)
  incrementArrow = () => {
    this.count++;
    return this.count;
  }
  
  // Metodo che usa arrow interno
  startAuto() {
    setInterval(() => {
      this.count++;  // Arrow mantiene this della classe
      console.log("  Auto count:", this.count);
    }, 100);
  }
}

const counter = new Counter();
console.log("Normal:", counter.incrementNormal());
console.log("Arrow field:", counter.incrementArrow());

// Arrow field utile per binding automatico
const inc = counter.incrementArrow;
console.log("Arrow estratto:", inc());  // Funziona! this legato


console.log("\n=== 8. ARROW E PROTOTYPE ===\n");

// ❌ Arrow NON possono essere su prototype
function Person(name) {
  this.name = name;
}

// ❌ Non funziona
Person.prototype.greetArrow = () => {
  return `Hi, I'm ${this.name}`;  // this.name undefined
};

// ✓ Funziona
Person.prototype.greetNormal = function() {
  return `Hi, I'm ${this.name}`;
};

const p = new Person("Mario");
console.log("Prototype arrow:", p.greetArrow());
console.log("Prototype normal:", p.greetNormal());


console.log("\n=== 9. QUANDO USARE ARROW ===\n");

// ✓ Array methods
const nums = [1, 2, 3, 4, 5];
const doubled = nums.map(n => n * 2);
const evens = nums.filter(n => n % 2 === 0);
const sum = nums.reduce((a, b) => a + b, 0);

console.log("Map:", doubled);
console.log("Filter:", evens);
console.log("Reduce:", sum);

// ✓ Callback brevi
setTimeout(() => console.log("  Timeout!"), 100);

[1, 2, 3].forEach(n => console.log("  Numero:", n));

// ✓ Promise chains
function loadData() {
  return Promise.resolve({ data: "test" })
    .then(result => result.data)
    .then(data => data.toUpperCase())
    .catch(err => console.error(err));
}

loadData().then(data => console.log("\nPromise result:", data));

// ✓ Functional programming
const compose = (f, g) => x => f(g(x));
const add1 = x => x + 1;
const times2 = x => x * 2;

const add1Times2 = compose(times2, add1);
console.log("\nCompose:", add1Times2(5));  // (5+1)*2


console.log("\n=== 10. QUANDO EVITARE ARROW ===\n");

// ❌ Metodi oggetto (serve this dinamico)
const obj3 = {
  value: 42,
  getValue: () => this.value  // ❌ undefined
};

// ❌ Prototype methods
Array.prototype.lastArrow = () => this[this.length - 1];  // ❌

// ❌ Constructor
// const MyClass = (name) => { this.name = name; };  // ❌ Error
// new MyClass("test");

// ❌ Quando serve arguments
const sumArrow = (...args) => args.reduce((a, b) => a + b);  // ✓ Usa rest

// ❌ Event handlers che usano event.target
const handler = () => {
  // this NON è element che ha scatenato evento
  console.log(this);  // ❌ Non è DOM element
};

console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO ARROW E THIS");
console.log("=".repeat(50));
console.log(`
THIS IN ARROW:
• Lexical this (eredita da scope esterno)
• NON può essere cambiato (call/apply/bind)
• Definito quando arrow è CREATA
• NON quando è CHIAMATA

QUANDO USARE ARROW:
✓ Array methods (map, filter, reduce)
✓ Callback (setTimeout, forEach, then)
✓ Quando vuoi mantenere this esterno
✓ Functional programming
✓ Espressioni brevi

QUANDO EVITARE ARROW:
✗ Metodi oggetto (serve this dinamico)
✗ Prototype methods
✗ Constructor functions
✗ Quando serve arguments
✗ Event handlers (se serve event.target)

PATTERN COMUNI:
• Arrow in callback di metodi normali
• Arrow in setTimeout/setInterval
• Arrow in Promise chains
• Arrow per HOF e composition
• Class fields per auto-binding

REMEMBER:
Arrow function NON ha proprio this!
Usa this dello scope in cui è definita.
`);
