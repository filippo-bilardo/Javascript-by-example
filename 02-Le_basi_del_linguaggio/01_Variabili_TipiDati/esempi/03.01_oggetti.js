/**
 * Esempio: Oggetti in JavaScript
 * 
 * Gli oggetti sono collezioni di coppie chiave-valore e sono
 * la struttura dati fondamentale in JavaScript.
 * 
 * Per eseguire: node 08_oggetti.js
 */

console.log("=== OGGETTI IN JAVASCRIPT ===\n");

// 1. Creazione di oggetti
console.log("1. Creazione di oggetti:\n");

// Notazione letterale (più comune)
let persona = {
  nome: "Mario",
  cognome: "Rossi",
  età: 30,
  email: "mario.rossi@example.com"
};

console.log("Oggetto persona:", persona);

// Object constructor
let auto = new Object();
auto.marca = "Fiat";
auto.modello = "500";
auto.anno = 2020;

console.log("Oggetto auto:", auto);

// Object.create()
let prototipo = {
  tipo: "Animale",
  respira: true
};

let gatto = Object.create(prototipo);
gatto.nome = "Felix";
gatto.razza = "Siamese";

console.log("Oggetto gatto:", gatto);
console.log("Proprietà ereditata:", gatto.tipo);

// 2. Accesso alle proprietà
console.log("\n2. Accesso alle proprietà:\n");

// Notazione punto
console.log("Nome (punto):", persona.nome);
console.log("Età (punto):", persona.età);

// Notazione parentesi quadre
console.log("Cognome (parentesi):", persona["cognome"]);

// Accesso dinamico
let proprietà = "email";
console.log(`${proprietà} (dinamico):`, persona[proprietà]);

// Proprietà con caratteri speciali (solo con parentesi)
let oggetto = {
  "nome completo": "Mario Rossi",
  "data-nascita": "15/01/1990"
};

console.log("Nome completo:", oggetto["nome completo"]);

// 3. Oggetti annidati
console.log("\n3. Oggetti annidati:\n");

let azienda = {
  nome: "TechCorp",
  fondazione: 2010,
  sede: {
    indirizzo: "Via Roma 123",
    città: "Milano",
    cap: "20100",
    coordinate: {
      latitudine: 45.4642,
      longitudine: 9.1900
    }
  },
  dipendenti: [
    { nome: "Mario", ruolo: "Manager" },
    { nome: "Luigi", ruolo: "Developer" },
    { nome: "Anna", ruolo: "Designer" }
  ]
};

console.log("Azienda:", azienda.nome);
console.log("Città:", azienda.sede.città);
console.log("Coordinate:", azienda.sede.coordinate);
console.log("Primo dipendente:", azienda.dipendenti[0].nome);

// 4. Metodi negli oggetti
console.log("\n4. Metodi negli oggetti:\n");

let calcolatrice = {
  valore: 0,
  
  // Metodo tradizionale
  somma: function(n) {
    this.valore += n;
    return this;
  },
  
  // Metodo ES6 shorthand
  sottrai(n) {
    this.valore -= n;
    return this;
  },
  
  // Arrow function (this non funziona come previsto!)
  moltiplica: (n) => {
    // ⚠️ this non si riferisce all'oggetto calcolatrice
    console.log("Attenzione: arrow function non preserva this");
    return calcolatrice.valore * n;
  },
  
  reset() {
    this.valore = 0;
    return this;
  },
  
  mostra() {
    console.log(`Valore corrente: ${this.valore}`);
    return this;
  }
};

// Method chaining
calcolatrice
  .somma(10)
  .somma(5)
  .sottrai(3)
  .mostra(); // 12

// 5. Modifica di oggetti
console.log("\n5. Modifica di oggetti:\n");

let prodotto = {
  nome: "Laptop",
  prezzo: 999
};

// Aggiunta di proprietà
prodotto.marca = "Dell";
prodotto.disponibile = true;
console.log("Dopo aggiunta:", prodotto);

// Modifica di proprietà
prodotto.prezzo = 899;
console.log("Dopo modifica prezzo:", prodotto.prezzo);

// Rimozione di proprietà
delete prodotto.disponibile;
console.log("Dopo rimozione:", prodotto);

// 6. Iterazione sulle proprietà
console.log("\n6. Iterazione sulle proprietà:\n");

let libro = {
  titolo: "1984",
  autore: "George Orwell",
  anno: 1949,
  pagine: 328
};

// for...in
console.log("For...in:");
for (let chiave in libro) {
  console.log(`  ${chiave}: ${libro[chiave]}`);
}

// Object.keys()
console.log("\nObject.keys():");
Object.keys(libro).forEach(chiave => {
  console.log(`  ${chiave}: ${libro[chiave]}`);
});

// Object.values()
console.log("\nObject.values():");
console.log("  Valori:", Object.values(libro));

// Object.entries()
console.log("\nObject.entries():");
Object.entries(libro).forEach(([chiave, valore]) => {
  console.log(`  ${chiave} => ${valore}`);
});

// 7. Verifica proprietà
console.log("\n7. Verifica proprietà:\n");

console.log("'titolo' in libro:", "titolo" in libro);
console.log("'editore' in libro:", "editore" in libro);
console.log("libro.hasOwnProperty('autore'):", libro.hasOwnProperty("autore"));

// 8. Copia di oggetti
console.log("\n8. Copia di oggetti:\n");

// Shallow copy con Object.assign()
let original = { a: 1, b: { c: 2 } };
let copia1 = Object.assign({}, original);
console.log("Copia con Object.assign:", copia1);

// Shallow copy con spread operator
let copia2 = { ...original };
console.log("Copia con spread:", copia2);

// ⚠️ Attenzione: sono copie superficiali!
copia1.b.c = 999;
console.log("Dopo modifica copia:", original.b.c); // Anche l'originale cambia!

// Deep copy con JSON (limitato)
let original2 = { a: 1, b: { c: 2 } };
let copiaProfonda = JSON.parse(JSON.stringify(original2));
copiaProfonda.b.c = 999;
console.log("Original2 dopo deep copy:", original2.b.c); // Rimane 2

// 9. Object methods utili
console.log("\n9. Metodi utili degli oggetti:\n");

let config = {
  debug: true,
  timeout: 3000
};

// Object.freeze() - rende l'oggetto immutabile
Object.freeze(config);
config.debug = false; // Non ha effetto
console.log("Dopo freeze, debug:", config.debug); // Rimane true

// Object.seal() - previene aggiunta/rimozione ma permette modifiche
let settings = { theme: "dark" };
Object.seal(settings);
settings.theme = "light"; // OK
settings.language = "it"; // Non ha effetto
console.log("Settings dopo seal:", settings);

// Object.isFrozen(), Object.isSealed()
console.log("config è frozen?", Object.isFrozen(config));
console.log("settings è sealed?", Object.isSealed(settings));

// 10. Destructuring (ES6)
console.log("\n10. Destructuring:\n");

let utente = {
  username: "mario123",
  password: "secret",
  email: "mario@example.com",
  età: 25
};

// Estrazione di proprietà
let { username, email } = utente;
console.log("Username:", username);
console.log("Email:", email);

// Con rinominazione
let { password: pwd } = utente;
console.log("Password (rinominata):", pwd);

// Con valori di default
let { ruolo = "user" } = utente;
console.log("Ruolo (default):", ruolo);

// Destructuring annidato
let dati = {
  info: {
    nome: "Mario",
    cognome: "Rossi"
  }
};

let { info: { nome, cognome } } = dati;
console.log(`Nome completo: ${nome} ${cognome}`);

console.log("\n💡 Best Practices:");
console.log("   - Usare notazione letterale per creare oggetti");
console.log("   - Preferire const per oggetti che non verranno riassegnati");
console.log("   - Usare metodi shorthand in ES6");
console.log("   - Attenzione alle copie superficiali vs profonde");
console.log("   - Usare destructuring per estrarre proprietà");
