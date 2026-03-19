let persona = {
  nome: "Mario",
  cognome: "Rossi",
  saluta: function() {console.log("Ciao, oggi è una bella giornata!");}
};

// Aggiunta proprietà
persona.nickname = "MM";
// Aggiunta metodo
persona.greet = function() {console.log('hello');}

// Chiamata dei metodi
console.log("-----------");
persona.saluta(); // Stampa: Ciao, oggi è una bella giornata!
console.log("-----------");
persona.greet();  // Stampa: hello

console.log("xxxxxxxxxxxxxxxx-----------");
persona.doppiosaluto = persona.greet 
console.log(persona.doppiosaluto);
console.log("xxxxxxxxxxxxxxxx-----------");
console.log(persona.doppiosaluto());
console.log("-----------");
console.log(persona);
