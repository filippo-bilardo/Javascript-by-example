/**
 * SCOPE (AMBITO DI VISIBILITÀ)
 * 
 * Lo scope determina dove le variabili sono accessibili nel codice.
 * JavaScript ha diversi tipi di scope che influenzano la visibilità delle variabili.
 * 
 * Tipi di scope:
 * - Global scope
 * - Function scope
 * - Block scope (ES6+)
 * - Lexical scope
 */

console.log("=== 1. GLOBAL SCOPE ===\n");

// Variabili globali: accessibili ovunque
let messaggioGlobale = "Sono globale!";
var numeroGlobale = 42;
const PI = 3.14159;

function mostraGlobali() {
  console.log("Dentro funzione:");
  console.log("  -", messaggioGlobale);
  console.log("  -", numeroGlobale);
  console.log("  -", PI);
}

mostraGlobali();
console.log("\nFuori funzione:");
console.log("  -", messaggioGlobale);
console.log("  -", numeroGlobale);

// Variabili globali implicite (EVITARE!)
function creaGlobaleImplicita() {
  // Senza let/const/var → diventa globale!
  pericoloso = "Sono globale per errore!";
}

creaGlobaleImplicita();
console.log("\nGlobale implicita:", pericoloso);  // ⚠️ Funziona ma è pericoloso!


console.log("\n=== 2. FUNCTION SCOPE ===\n");

// Variabili con var hanno function scope
function testFunctionScope() {
  var locale = "Sono locale alla funzione";
  let ancheLet = "Anche io sono locale";
  const ancheCost = "Anche io";
  
  console.log("Dentro funzione:");
  console.log("  var:", locale);
  console.log("  let:", ancheLet);
  console.log("  const:", ancheCost);
  
  // Accessibili in sotto-blocchi
  if (true) {
    console.log("\n  Dentro if:");
    console.log("    var:", locale);      // ✓ Accessibile
    console.log("    let:", ancheLet);    // ✓ Accessibile
  }
}

testFunctionScope();

// console.log(locale);  // ❌ Errore: non definita fuori
console.log("\nFuori funzione: variabili NON accessibili");


console.log("\n=== 3. BLOCK SCOPE (ES6) ===\n");

// let e const hanno block scope
function testBlockScope() {
  console.log("Inizio funzione");
  
  if (true) {
    var varVariable = "var - function scope";
    let letVariable = "let - block scope";
    const constVariable = "const - block scope";
    
    console.log("  Dentro if:");
    console.log("    var:", varVariable);
    console.log("    let:", letVariable);
    console.log("    const:", constVariable);
  }
  
  console.log("\n  Fuori if:");
  console.log("    var:", varVariable);        // ✓ Accessibile (function scope)
  // console.log("    let:", letVariable);     // ❌ Errore (block scope)
  // console.log("    const:", constVariable); // ❌ Errore (block scope)
}

testBlockScope();

// Block scope nei loop
console.log("\nLoop con var:");
for (var i = 0; i < 3; i++) {
  // var è function/global scope
}
console.log("i dopo loop:", i);  // ✓ Accessibile! (3)

console.log("\nLoop con let:");
for (let j = 0; j < 3; j++) {
  // let è block scope
}
// console.log("j dopo loop:", j);  // ❌ Errore


console.log("\n=== 4. LEXICAL SCOPE ===\n");

// Lexical scope: funzioni interne accedono a variabili esterne
function esterna() {
  let variabileEsterna = "Dalla funzione esterna";
  
  function interna() {
    let variabileInterna = "Dalla funzione interna";
    
    console.log("Dentro interna:");
    console.log("  -", variabileInterna);   // ✓ Locale
    console.log("  -", variabileEsterna);   // ✓ Da scope esterno
  }
  
  interna();
  
  // console.log(variabileInterna);  // ❌ Non accessibile
}

esterna();

// Lexical scope annidato
function livello1() {
  let var1 = "Livello 1";
  
  function livello2() {
    let var2 = "Livello 2";
    
    function livello3() {
      let var3 = "Livello 3";
      
      console.log("\nDentro livello3:");
      console.log("  -", var3);  // Locale
      console.log("  -", var2);  // Parent
      console.log("  -", var1);  // Grandparent
    }
    
    livello3();
  }
  
  livello2();
}

livello1();


console.log("\n=== 5. SCOPE CHAIN ===\n");

let globale = "GLOBALE";

function uno() {
  let varUno = "UNO";
  
  function due() {
    let varDue = "DUE";
    
    function tre() {
      let varTre = "TRE";
      
      // JavaScript cerca in ordine:
      // 1. Scope locale (tre)
      // 2. Scope parent (due)
      // 3. Scope grandparent (uno)
      // 4. Scope globale
      
      console.log("Scope chain da tre():");
      console.log("  varTre:", varTre);    // Trovata in tre()
      console.log("  varDue:", varDue);    // Trovata in due()
      console.log("  varUno:", varUno);    // Trovata in uno()
      console.log("  globale:", globale);  // Trovata in global
    }
    
    tre();
  }
  
  due();
}

uno();


console.log("\n=== 6. SHADOWING ===\n");

// Variabile locale "nasconde" variabile esterna con stesso nome
let nome = "Mario";

function testShadowing() {
  let nome = "Luigi";  // Shadowing!
  
  console.log("Dentro funzione:", nome);  // "Luigi"
  
  function interna() {
    let nome = "Peach";  // Altro shadowing!
    console.log("Dentro interna:", nome);  // "Peach"
  }
  
  interna();
  console.log("Dopo interna:", nome);  // Ancora "Luigi"
}

testShadowing();
console.log("Globale:", nome);  // Ancora "Mario"

// Shadowing nei blocchi
let x = 10;
console.log("\nEsterno: x =", x);

if (true) {
  let x = 20;  // Nuova variabile, shadow dell'esterna
  console.log("Dentro if: x =", x);
  
  {
    let x = 30;  // Altro shadow
    console.log("Dentro blocco: x =", x);
  }
  
  console.log("Dopo blocco: x =", x);
}

console.log("Dopo if: x =", x);


console.log("\n=== 7. HOISTING E SCOPE ===\n");

// Function declaration: hoisted
console.log("Chiamata prima:");
saluta();  // ✓ Funziona!

function saluta() {
  console.log("  Ciao da funzione hoisted!");
}

// var: dichiarazione hoisted, valore no
console.log("\nVar prima dichiarazione:", typeof varHoisted);  // undefined
var varHoisted = "Valore";
console.log("Var dopo dichiarazione:", varHoisted);

// let/const: NOT hoisted (temporal dead zone)
// console.log(letHoisted);  // ❌ ReferenceError
let letHoisted = "Valore";


console.log("\n=== 8. SCOPE E LOOPS ===\n");

// Problema classico con var
console.log("Loop con var:");
for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log("  i =", i);  // Stampa sempre 4!
  }, 100);
}

// Soluzione con let (block scope)
setTimeout(() => {
  console.log("\nLoop con let:");
  for (let j = 1; j <= 3; j++) {
    setTimeout(function() {
      console.log("  j =", j);  // Stampa 1, 2, 3 correttamente
    }, 100);
  }
}, 200);

// Soluzione con IIFE (vecchio modo)
setTimeout(() => {
  console.log("\nLoop con IIFE:");
  for (var k = 1; k <= 3; k++) {
    (function(indice) {
      setTimeout(function() {
        console.log("  k =", indice);
      }, 100);
    })(k);
  }
}, 400);


console.log("\n=== 9. SCOPE E THIS ===\n");

// In global scope
console.log("Global this:", typeof this);

// In funzione normale
function mostraThis() {
  console.log("\nFunction this:", typeof this);
}

mostraThis();

// In metodo oggetto
const obj = {
  nome: "Oggetto",
  mostra: function() {
    console.log("\nMetodo this.nome:", this.nome);
    
    // Problema: funzione interna perde this
    function interna() {
      console.log("Interna this.nome:", this.nome);  // undefined
    }
    interna();
    
    // Soluzione: arrow function
    const internaArrow = () => {
      console.log("Arrow this.nome:", this.nome);  // "Oggetto"
    };
    internaArrow();
  }
};

obj.mostra();


console.log("\n=== 10. BEST PRACTICES PER SCOPE ===\n");

// ✓ Usa let/const invece di var
function buonaPratica() {
  const PI = 3.14159;        // Costante
  let contatore = 0;          // Variabile
  
  // NON usare var
  // var vecchio = "deprecated";
  
  return { PI, contatore };
}

console.log("Buona pratica:", buonaPratica());

// ✓ Limita scope delle variabili
function processDati(arr) {
  // Variabile solo dove serve
  const risultato = [];
  
  for (let item of arr) {
    // temp è block scope
    const temp = item * 2;
    risultato.push(temp);
  }
  
  // temp non esiste qui
  return risultato;
}

console.log("\nProcess:", processDati([1, 2, 3]));

// ✓ Evita variabili globali
const MioModulo = (function() {
  // Variabili "private"
  let privato = "Non accessibile";
  
  // API pubblica
  return {
    metodoPublico: function() {
      return "Metodo pubblico può accedere a: " + privato;
    }
  };
})();

console.log("\nModulo:", MioModulo.metodoPublico());
// console.log(MioModulo.privato);  // undefined

// ✓ Dichiarazione variabili all'inizio del scope
function buonaOrganizzazione() {
  // Tutte le dichiarazioni all'inizio
  const CONFIG = { debug: true };
  let risultato = null;
  let errore = null;
  
  // Logica...
  try {
    risultato = "OK";
  } catch (e) {
    errore = e;
  }
  
  return { risultato, errore };
}

console.log("\nOrganizzazione:", buonaOrganizzazione());

console.log("\n" + "=".repeat(50));
console.log("RIEPILOGO SCOPE");
console.log("=".repeat(50));
console.log(`
TIPI DI SCOPE:
• Global: accessibile ovunque
• Function: locale alla funzione
• Block: locale al blocco { } (let/const)
• Lexical: funzioni interne vedono scope esterno

SCOPE CHAIN:
1. Locale (current scope)
2. Parent scope
3. Grandparent scope
4. ... fino al global

VAR vs LET/CONST:
• var: function scope, hoisted
• let: block scope, NOT hoisted
• const: block scope, NOT hoisted, immutable binding

SHADOWING:
• Variabile locale nasconde esterna con stesso nome
• Non modifica variabile esterna
• Ogni scope ha sua versione

BEST PRACTICES:
✓ Usa let/const, evita var
✓ Limita scope (più piccolo possibile)
✓ Evita variabili globali
✓ Usa IIFE o moduli per privacy
✓ Dichiarazioni all'inizio scope
✓ Block scope nei loop con let
`);
