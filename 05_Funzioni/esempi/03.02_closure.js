/**
 * CLOSURE IN JAVASCRIPT
 * 
 * Una closure è una funzione che ha accesso alle variabili del suo scope
 * esterno anche dopo che la funzione esterna ha terminato l'esecuzione.
 * 
 * Le closure sono create ogni volta che una funzione accede a variabili
 * dal suo scope lessicale esterno.
 */

console.log("=== 1. CLOSURE BASE ===\n");

// Esempio semplice di closure
function creaContatore() {
  let conteggio = 0;  // Variabile nello scope esterno
  
  // Funzione interna che "chiude" su conteggio
  return function() {
    conteggio++;      // Accesso a variabile esterna
    return conteggio;
  };
}

const contatore1 = creaContatore();
console.log("Contatore1:", contatore1());  // 1
console.log("Contatore1:", contatore1());  // 2
console.log("Contatore1:", contatore1());  // 3

// Ogni chiamata crea closure indipendente
const contatore2 = creaContatore();
console.log("\nContatore2:", contatore2());  // 1
console.log("Contatore2:", contatore2());  // 2

console.log("\nContatore1 ancora:", contatore1());  // 4


console.log("\n=== 2. CLOSURE CON PARAMETRI ===\n");

// Closure che ricorda il parametro
function creaIncrementatore(step) {
  return function(numero) {
    return numero + step;
  };
}

const incrementaDi5 = creaIncrementatore(5);
const incrementaDi10 = creaIncrementatore(10);

console.log("3 + 5 =", incrementaDi5(3));
console.log("3 + 10 =", incrementaDi10(3));
console.log("20 + 5 =", incrementaDi5(20));

// Moltiplicatore con closure
function creaMultiplicatore(fattore) {
  return function(n) {
    return n * fattore;
  };
}

const doppio = creaMultiplicatore(2);
const triplo = creaMultiplicatore(3);

console.log("\ndoppio(7):", doppio(7));
console.log("triplo(7):", triplo(7));


console.log("\n=== 3. DATI PRIVATI CON CLOSURE ===\n");

// Closure per incapsulamento (variabili private)
function creaPersona(nomeIniziale, etàIniziale) {
  // Variabili "private"
  let nome = nomeIniziale;
  let età = etàIniziale;
  let segreto = "Informazione privata";
  
  // API pubblica
  return {
    getNome: function() {
      return nome;
    },
    setNome: function(nuovoNome) {
      if (nuovoNome && nuovoNome.length > 0) {
        nome = nuovoNome;
      }
    },
    getEtà: function() {
      return età;
    },
    compleanno: function() {
      età++;
    },
    info: function() {
      return `${nome}, ${età} anni`;
    }
    // segreto NON è accessibile!
  };
}

const persona = creaPersona("Mario", 30);
console.log("Info:", persona.info());
console.log("Nome:", persona.getNome());

persona.compleanno();
persona.compleanno();
console.log("Dopo 2 compleanni:", persona.info());

persona.setNome("Luigi");
console.log("Dopo cambio nome:", persona.info());

// Tentativo di accesso diretto fallisce
console.log("\nAccesso diretto nome:", persona.nome);     // undefined
console.log("Accesso diretto età:", persona.età);         // undefined
console.log("Accesso diretto segreto:", persona.segreto); // undefined


console.log("\n=== 4. CLOSURE IN LOOPS ===\n");

// Problema classico: closure nel loop
console.log("Problema con var:");
const funzioni = [];

for (var i = 0; i < 3; i++) {
  funzioni.push(function() {
    return i;
  });
}

// Tutte restituiscono 3!
console.log("funzioni[0]():", funzioni[0]());
console.log("funzioni[1]():", funzioni[1]());
console.log("funzioni[2]():", funzioni[2]());

// Soluzione 1: let (block scope)
console.log("\nSoluzione con let:");
const funzioniLet = [];

for (let j = 0; j < 3; j++) {
  funzioniLet.push(function() {
    return j;
  });
}

console.log("funzioniLet[0]():", funzioniLet[0]());
console.log("funzioniLet[1]():", funzioniLet[1]());
console.log("funzioniLet[2]():", funzioniLet[2]());

// Soluzione 2: IIFE
console.log("\nSoluzione con IIFE:");
const funzioniIIFE = [];

for (var k = 0; k < 3; k++) {
  funzioniIIFE.push((function(indice) {
    return function() {
      return indice;
    };
  })(k));
}

console.log("funzioniIIFE[0]():", funzioniIIFE[0]());
console.log("funzioniIIFE[1]():", funzioniIIFE[1]());
console.log("funzioniIIFE[2]():", funzioniIIFE[2]());


console.log("\n=== 5. MODULE PATTERN ===\n");

// Module pattern con closure
const Calcolatrice = (function() {
  // Stato privato
  let memoria = 0;
  let storia = [];
  
  // Funzioni private
  function log(operazione, risultato) {
    storia.push(`${operazione} = ${risultato}`);
  }
  
  // API pubblica
  return {
    somma: function(a, b) {
      const result = a + b;
      log(`${a} + ${b}`, result);
      return result;
    },
    
    sottrai: function(a, b) {
      const result = a - b;
      log(`${a} - ${b}`, result);
      return result;
    },
    
    setMemoria: function(val) {
      memoria = val;
      console.log(`  Memoria impostata: ${val}`);
    },
    
    getMemoria: function() {
      return memoria;
    },
    
    addToMemoria: function(val) {
      memoria += val;
      return memoria;
    },
    
    getStoria: function() {
      return [...storia];  // Copia per sicurezza
    },
    
    reset: function() {
      memoria = 0;
      storia = [];
      console.log("  Calcolatrice resettata");
    }
  };
})();

console.log("Somma 5+3:", Calcolatrice.somma(5, 3));
console.log("Sottrai 10-4:", Calcolatrice.sottrai(10, 4));

Calcolatrice.setMemoria(100);
console.log("Memoria:", Calcolatrice.getMemoria());
console.log("Add 50:", Calcolatrice.addToMemoria(50));

console.log("\nStoria operazioni:", Calcolatrice.getStoria());


console.log("\n=== 6. FACTORY FUNCTIONS CON CLOSURE ===\n");

// Factory che crea oggetti con stato privato
function creaContoBancario(saldoIniziale = 0) {
  let saldo = saldoIniziale;
  const transazioni = [];
  
  function registraTransazione(tipo, importo) {
    transazioni.push({
      tipo,
      importo,
      data: new Date(),
      saldoRisultante: saldo
    });
  }
  
  return {
    deposita: function(importo) {
      if (importo <= 0) {
        return { success: false, error: "Importo invalido" };
      }
      saldo += importo;
      registraTransazione("deposito", importo);
      return { success: true, saldo };
    },
    
    preleva: function(importo) {
      if (importo <= 0) {
        return { success: false, error: "Importo invalido" };
      }
      if (importo > saldo) {
        return { success: false, error: "Saldo insufficiente" };
      }
      saldo -= importo;
      registraTransazione("prelievo", -importo);
      return { success: true, saldo };
    },
    
    getSaldo: function() {
      return saldo;
    },
    
    getTransazioni: function() {
      return transazioni.map(t => ({
        ...t,
        data: t.data.toISOString()
      }));
    }
  };
}

const conto = creaContoBancario(1000);
console.log("Saldo iniziale:", conto.getSaldo());

const dep = conto.deposita(500);
console.log("Dopo deposito:", dep);

const prel = conto.preleva(200);
console.log("Dopo prelievo:", prel);

console.log("\nSaldo finale:", conto.getSaldo());
console.log("Transazioni:", conto.getTransazioni().length);


console.log("\n=== 7. CLOSURE E ASYNC ===\n");

// Closure mantengono valori per operazioni asincrone
function creaTimer(nome) {
  let start = Date.now();
  
  return {
    stop: function() {
      let elapsed = Date.now() - start;
      console.log(`  ${nome}: ${elapsed}ms`);
      return elapsed;
    },
    reset: function() {
      start = Date.now();
    }
  };
}

const timer1 = creaTimer("Operazione1");
setTimeout(() => {
  timer1.stop();
}, 100);

const timer2 = creaTimer("Operazione2");
setTimeout(() => {
  timer2.stop();
}, 200);

// Closure con promises
function creaRitardato(valore, ritardo) {
  return function() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(`\n  Valore ritardato: ${valore}`);
        resolve(valore);
      }, ritardo);
    });
  };
}

const ottieniDopo100ms = creaRitardato("Dato1", 100);
const ottieniDopo200ms = creaRitardato("Dato2", 200);

setTimeout(() => {
  ottieniDopo100ms().then(val => console.log("  Ricevuto:", val));
  ottieniDopo200ms().then(val => console.log("  Ricevuto:", val));
}, 300);


console.log("\n=== 8. CURRYING CON CLOSURE ===\n");

// Currying sfrutta closure
function sommaCurried(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log("Somma curried:", sommaCurried(1)(2)(3));

// Partial application
const add5 = sommaCurried(5);
const add5and10 = add5(10);

console.log("Partial:", add5and10(7));  // 5+10+7 = 22

// Curry generico
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...nextArgs) {
      return curried.apply(this, args.concat(nextArgs));
    };
  };
}

function multiply(a, b, c) {
  return a * b * c;
}

const multiplyCurried = curry(multiply);
console.log("\nCurry generico:", multiplyCurried(2)(3)(4));
console.log("Partial curry:", multiplyCurried(2, 3)(4));


console.log("\n=== 9. MEMOIZATION CON CLOSURE ===\n");

// Cache risultati per performance
function memoize(fn) {
  const cache = {};
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (key in cache) {
      console.log(`  Cache hit: ${key}`);
      return cache[key];
    }
    
    console.log(`  Calcolo: ${key}`);
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

// Funzione costosa
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const fibMemo = memoize(fibonacci);

console.log("fib(10):", fibMemo(10));
console.log("fib(10) di nuovo:", fibMemo(10));  // Da cache
console.log("fib(5):", fibMemo(5));  // Già calcolato


console.log("\n=== 10. BEST PRACTICES ===\n");

// ✓ Usa closure per privacy
function creaContatore() {
  let count = 0;  // Private
  
  return {
    incrementa: () => ++count,
    decrementa: () => --count,
    get: () => count,
    reset: () => { count = 0; }
  };
}

const counter = creaContatore();
console.log("Counter:", counter.get());
counter.incrementa();
counter.incrementa();
console.log("Dopo 2 inc:", counter.get());

// ✓ Evita memory leaks
function buono() {
  const dati = [/* grandi dati */];
  
  return {
    elabora: function() {
      // Usa dati
      return dati.length;
    }
  };
}

// ⚠️ Attento: closure mantiene riferimento
function attenzione() {
  const grandiDati = new Array(1000000).fill('x');
  
  return {
    getLength: () => grandiDati.length  // Mantiene grandiDati in memoria!
  };
}

// ✓ Rilascia riferimenti quando non servono
function meglio() {
  let grandiDati = new Array(1000000).fill('x');
  const length = grandiDati.length;
  grandiDati = null;  // Rilascia memoria
  
  return {
    getLength: () => length  // Mantiene solo number
  };
}

console.log("Buono:", buono().elabora());
console.log("Meglio:", meglio().getLength());

console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO CLOSURE");
console.log("=".repeat(50));
console.log(`
DEFINIZIONE:
• Funzione che accede a variabili scope esterno
• Mantiene accesso anche dopo ritorno funzione esterna
• Crea "ambiente" privato persistente

CASI D'USO:
• Dati privati / incapsulamento
• Factory functions
• Module pattern
• Currying e partial application
• Memoization
• Event handlers e callbacks
• Timers e operazioni async

VANTAGGI:
✓ Privacy / encapsulation
✓ State management
✓ Factory patterns
✓ Functional programming

ATTENZIONE:
⚠ Memory leaks se non gestite
⚠ Performance con troppe closure
⚠ Riferimenti a DOM elements
⚠ Closure in loops (usa let!)

BEST PRACTICES:
✓ Usa per privacy e modularità
✓ Rilascia riferimenti non necessari
✓ Documenta closure complesse
✓ let invece di var nei loop
✓ IIFE per scope isolation
`);
