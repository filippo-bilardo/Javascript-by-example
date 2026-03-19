/**
 * ESERCITAZIONE 2 - LIVELLO INTERMEDIO
 * Sistema di Gestione Studenti e Corsi
 * 
 * Obiettivi:
 * - Utilizzare costruttori e prototipi
 * - Implementare ereditarietà
 * - Usare destrutturazione e spread operator
 * - Lavorare con oggetti nidificati
 * - Applicare metodi avanzati degli array
 * 
 * Tempo stimato: 45-60 minuti
 */

console.log("=== ESERCITAZIONE 2: GESTIONE STUDENTI E CORSI ===\n");

// ============================================================================
// PARTE 1: Costruttori e Prototipi (15 minuti)
// ============================================================================

console.log("--- PARTE 1: Costruttori e Prototipi ---\n");

/**
 * ESERCIZIO 1.1
 * Crea un costruttore 'Studente' che accetta:
 * - nome
 * - cognome
 * - matricola
 * - corsi (array vuoto di default)
 * 
 * Aggiungi al prototipo i seguenti metodi:
 * - getNomeCompleto(): restituisce "[nome] [cognome]"
 * - iscriviCorso(nomeCorso): aggiunge il corso all'array corsi
 * - getCorsi(): restituisce l'array dei corsi
 */

// SCRIVI IL TUO CODICE QUI
function Studente(nome, cognome, matricola) {
  // TODO: Implementa il costruttore
}

// TODO: Aggiungi i metodi al prototipo
// Studente.prototype.getNomeCompleto = function() { ... };
// Studente.prototype.iscriviCorso = function(nomeCorso) { ... };
// Studente.prototype.getCorsi = function() { ... };


/**
 * ESERCIZIO 1.2
 * Crea tre studenti usando il costruttore:
 * 1. Mario Rossi, matricola: "S001"
 * 2. Laura Bianchi, matricola: "S002"
 * 3. Giovanni Verdi, matricola: "S003"
 */

// SCRIVI IL TUO CODICE QUI
// const studente1 = ...


/**
 * ESERCIZIO 1.3
 * Iscrivi gli studenti ai seguenti corsi:
 * - Mario: "Matematica", "Fisica"
 * - Laura: "Matematica", "Informatica"
 * - Giovanni: "Fisica", "Chimica"
 */

// SCRIVI IL TUO CODICE QUI
// studente1.iscriviCorso(...);


// ============================================================================
// PARTE 2: Ereditarietà (15 minuti)
// ============================================================================

console.log("\n--- PARTE 2: Ereditarietà ---\n");

/**
 * ESERCIZIO 2.1
 * Crea un costruttore 'StudenteLavoratore' che:
 * - Eredita da Studente
 * - Aggiunge le proprietà: azienda, oreLavoro
 * - Usa call() per chiamare il costruttore padre
 * 
 * Aggiungi al prototipo il metodo:
 * - getInfo(): restituisce una stringa con tutte le informazioni
 *   Formato: "[nome] [cognome] (Matricola: [matricola]) - Lavora presso [azienda] ([oreLavoro]h/settimana)"
 */

// SCRIVI IL TUO CODICE QUI
function StudenteLavoratore(nome, cognome, matricola, azienda, oreLavoro) {
  // TODO: Chiama il costruttore padre
  // TODO: Aggiungi le proprietà specifiche
}

// TODO: Imposta l'ereditarietà
// StudenteLavoratore.prototype = Object.create(Studente.prototype);
// StudenteLavoratore.prototype.constructor = StudenteLavoratore;

// TODO: Aggiungi il metodo getInfo


/**
 * ESERCIZIO 2.2
 * Crea uno studente lavoratore:
 * - Nome: Anna Ferrari
 * - Matricola: "S004"
 * - Azienda: "TechCorp"
 * - Ore lavoro: 20
 * 
 * Iscrivilo ai corsi: "Informatica", "Economia"
 */

// SCRIVI IL TUO CODICE QUI
// const studenteLavoratore = ...


// Test: decommenta per verificare
// console.log(studenteLavoratore.getNomeCompleto());
// console.log(studenteLavoratore.getInfo());
// console.log("Corsi:", studenteLavoratore.getCorsi());


// ============================================================================
// PARTE 3: Destrutturazione e Spread Operator (15 minuti)
// ============================================================================

console.log("\n--- PARTE 3: Destrutturazione ---\n");

/**
 * ESERCIZIO 3.1
 * Crea un oggetto 'corso' con le seguenti proprietà:
 * - nome: "Programmazione JavaScript"
 * - codice: "INFO101"
 * - crediti: 6
 * - docente: { nome: "Prof. Marco", cognome: "Neri" }
 * - studenti: array vuoto
 * 
 * Usa la destrutturazione per:
 * 1. Estrarre nome e crediti del corso
 * 2. Estrarre nome e cognome del docente (rinominali in nomeDocente e cognomeDocente)
 * 3. Stampare: "Corso: [nome] ([crediti] CFU) - Docente: [nomeDocente] [cognomeDocente]"
 */

// SCRIVI IL TUO CODICE QUI
const corso = {
  // TODO: Completa l'oggetto
};

// TODO: Usa la destrutturazione
// const { nome, crediti } = corso;
// const { docente: { nome: nomeDocente, cognome: cognomeDocente } } = corso;

// Test: decommenta per verificare
// console.log(`Corso: ${nome} (${crediti} CFU) - Docente: ${nomeDocente} ${cognomeDocente}`);


/**
 * ESERCIZIO 3.2
 * Crea una funzione 'creaCorso' che:
 * - Accetta parametri: nome, codice, crediti, opzioni (oggetto con proprietà facoltative)
 * - Le opzioni possono includere: aula, orario, maxStudenti
 * - Usa valori di default: aula = "A01", orario = "9:00-11:00", maxStudenti = 30
 * - Restituisce un oggetto corso completo
 * 
 * Suggerimento: usa destrutturazione con valori di default
 */

// SCRIVI IL TUO CODICE QUI
function creaCorso(nome, codice, crediti, opzioni = {}) {
  // TODO: Destruttura opzioni con valori di default
  // const { aula = "A01", orario = "9:00-11:00", maxStudenti = 30 } = opzioni;
  
  // TODO: Restituisci l'oggetto corso
  return {};
}

// Test: decommenta per verificare
// const corso1 = creaCorso("Matematica", "MAT101", 9);
// const corso2 = creaCorso("Fisica", "FIS101", 9, { aula: "B05", maxStudenti: 50 });
// console.log("Corso 1:", corso1);
// console.log("Corso 2:", corso2);


/**
 * ESERCIZIO 3.3
 * Crea una funzione 'unisciStudenti' che:
 * - Accetta due array di studenti
 * - Usa lo spread operator per unirli in un unico array
 * - Restituisce il nuovo array
 */

// SCRIVI IL TUO CODICE QUI
function unisciStudenti(gruppo1, gruppo2) {
  // TODO: Unisci gli array usando spread operator
  return [];
}

// Test con array di esempio
const gruppo1 = [
  { nome: "Mario", cognome: "Rossi" },
  { nome: "Laura", cognome: "Bianchi" }
];

const gruppo2 = [
  { nome: "Giovanni", cognome: "Verdi" },
  { nome: "Anna", cognome: "Ferrari" }
];

// Test: decommenta per verificare
// const tuttiStudenti = unisciStudenti(gruppo1, gruppo2);
// console.log("Tutti gli studenti:", tuttiStudenti);


// ============================================================================
// PARTE 4: Metodi Avanzati e Manipolazione Dati (15 minuti)
// ============================================================================

console.log("\n--- PARTE 4: Metodi Avanzati ---\n");

/**
 * ESERCIZIO 4.1
 * Dato l'array di studenti con i loro voti:
 */

const studentiConVoti = [
  { nome: "Mario", cognome: "Rossi", voti: [28, 30, 27, 29] },
  { nome: "Laura", cognome: "Bianchi", voti: [30, 30, 28, 30] },
  { nome: "Giovanni", cognome: "Verdi", voti: [24, 26, 25, 27] },
  { nome: "Anna", cognome: "Ferrari", voti: [27, 28, 29, 30] }
];

/**
 * Scrivi una funzione 'calcolaMedia' che:
 * - Accetta un array di voti
 * - Restituisce la media arrotondata a un decimale
 */

// SCRIVI IL TUO CODICE QUI
function calcolaMedia(voti) {
  // TODO: Calcola la media usando reduce
  // Suggerimento: (somma / lunghezza).toFixed(1)
  return 0;
}


/**
 * ESERCIZIO 4.2
 * Scrivi una funzione 'aggiungiMedia' che:
 * - Accetta l'array studentiConVoti
 * - Restituisce un nuovo array dove ogni studente ha una proprietà 'media'
 * - Usa map() e la funzione calcolaMedia
 */

// SCRIVI IL TUO CODICE QUI
function aggiungiMedia(studenti) {
  // TODO: Usa map per creare nuovi oggetti con la proprietà media
  return [];
}

// Test: decommenta per verificare
// const studentiConMedia = aggiungiMedia(studentiConVoti);
// console.log("Studenti con media:");
// studentiConMedia.forEach(s => {
//   console.log(`${s.nome} ${s.cognome}: ${s.media}`);
// });


/**
 * ESERCIZIO 4.3
 * Scrivi una funzione 'studentiEccellenti' che:
 * - Accetta l'array di studenti con media
 * - Restituisce solo gli studenti con media >= 28
 * - Ordina il risultato per media decrescente
 */

// SCRIVI IL TUO CODICE QUI
function studentiEccellenti(studenti) {
  // TODO: Filtra studenti con media >= 28
  // TODO: Ordina per media decrescente
  return [];
}

// Test: decommenta per verificare
// const eccellenti = studentiEccellenti(studentiConMedia);
// console.log("\nStudenti eccellenti:");
// eccellenti.forEach(s => {
//   console.log(`${s.nome} ${s.cognome}: ${s.media}`);
// });


// ============================================================================
// PARTE 5: Progetto Completo (20 minuti)
// ============================================================================

console.log("\n--- PARTE 5: Progetto Completo ---\n");

/**
 * ESERCIZIO 5.1 - PROGETTO FINALE
 * 
 * Crea un sistema completo di gestione corsi con le seguenti classi:
 * 
 * Classe Corso:
 * - Proprietà: nome, codice, crediti, studentiIscritti (array)
 * - Metodi:
 *   - aggiungiStudente(studente): aggiunge uno studente
 *   - rimuoviStudente(matricola): rimuove uno studente per matricola
 *   - getNumeroIscritti(): restituisce il numero di iscritti
 *   - getInfo(): restituisce info complete del corso
 * 
 * Classe GestoreCorsi:
 * - Proprietà: corsi (array di corsi)
 * - Metodi:
 *   - aggiungiCorso(corso): aggiunge un corso
 *   - cercaCorso(codice): cerca un corso per codice
 *   - getCorsiConPiuDiNStudenti(n): restituisce corsi con più di n studenti
 *   - stampaRiepilogo(): stampa un riepilogo di tutti i corsi
 */

// SCRIVI IL TUO CODICE QUI

class Corso {
  constructor(nome, codice, crediti) {
    // TODO: Implementa il costruttore
  }
  
  aggiungiStudente(studente) {
    // TODO: Aggiungi studente all'array
  }
  
  rimuoviStudente(matricola) {
    // TODO: Rimuovi studente per matricola
  }
  
  getNumeroIscritti() {
    // TODO: Restituisci il numero di iscritti
    return 0;
  }
  
  getInfo() {
    // TODO: Restituisci stringa con info corso
    return "";
  }
}

class GestoreCorsi {
  constructor() {
    // TODO: Inizializza array corsi
  }
  
  aggiungiCorso(corso) {
    // TODO: Aggiungi corso all'array
  }
  
  cercaCorso(codice) {
    // TODO: Cerca e restituisci corso
    return null;
  }
  
  getCorsiConPiuDiNStudenti(n) {
    // TODO: Filtra e restituisci corsi
    return [];
  }
  
  stampaRiepilogo() {
    // TODO: Stampa info di tutti i corsi
  }
}

// Test: decommenta per verificare
// const gestore = new GestoreCorsi();
// 
// const corsoJS = new Corso("JavaScript", "JS101", 6);
// const corsoJava = new Corso("Java", "JV101", 9);
// 
// corsoJS.aggiungiStudente({ nome: "Mario", matricola: "S001" });
// corsoJS.aggiungiStudente({ nome: "Laura", matricola: "S002" });
// corsoJava.aggiungiStudente({ nome: "Mario", matricola: "S001" });
// 
// gestore.aggiungiCorso(corsoJS);
// gestore.aggiungiCorso(corsoJava);
// 
// console.log("Corso JS:", corsoJS.getInfo());
// gestore.stampaRiepilogo();


console.log("\n=== FINE ESERCITAZIONE 2 ===");
console.log("Ottimo lavoro! Sei pronto per l'esercitazione avanzata.\n");
































// ============================================================================
// SOLUZIONI DEGLI ESERCIZI
// ============================================================================

/*

// SOLUZIONE 1.1
function Studente(nome, cognome, matricola) {
  this.nome = nome;
  this.cognome = cognome;
  this.matricola = matricola;
  this.corsi = [];
}

Studente.prototype.getNomeCompleto = function() {
  return `${this.nome} ${this.cognome}`;
};

Studente.prototype.iscriviCorso = function(nomeCorso) {
  this.corsi.push(nomeCorso);
};

Studente.prototype.getCorsi = function() {
  return this.corsi;
};

// SOLUZIONE 1.2
const studente1 = new Studente("Mario", "Rossi", "S001");
const studente2 = new Studente("Laura", "Bianchi", "S002");
const studente3 = new Studente("Giovanni", "Verdi", "S003");

// SOLUZIONE 1.3
studente1.iscriviCorso("Matematica");
studente1.iscriviCorso("Fisica");
studente2.iscriviCorso("Matematica");
studente2.iscriviCorso("Informatica");
studente3.iscriviCorso("Fisica");
studente3.iscriviCorso("Chimica");

// SOLUZIONE 2.1
function StudenteLavoratore(nome, cognome, matricola, azienda, oreLavoro) {
  Studente.call(this, nome, cognome, matricola);
  this.azienda = azienda;
  this.oreLavoro = oreLavoro;
}

StudenteLavoratore.prototype = Object.create(Studente.prototype);
StudenteLavoratore.prototype.constructor = StudenteLavoratore;

StudenteLavoratore.prototype.getInfo = function() {
  return `${this.getNomeCompleto()} (Matricola: ${this.matricola}) - Lavora presso ${this.azienda} (${this.oreLavoro}h/settimana)`;
};

// SOLUZIONE 2.2
const studenteLavoratore = new StudenteLavoratore("Anna", "Ferrari", "S004", "TechCorp", 20);
studenteLavoratore.iscriviCorso("Informatica");
studenteLavoratore.iscriviCorso("Economia");

// SOLUZIONE 3.1
const corso = {
  nome: "Programmazione JavaScript",
  codice: "INFO101",
  crediti: 6,
  docente: { nome: "Prof. Marco", cognome: "Neri" },
  studenti: []
};

const { nome, crediti } = corso;
const { docente: { nome: nomeDocente, cognome: cognomeDocente } } = corso;

// SOLUZIONE 3.2
function creaCorso(nome, codice, crediti, opzioni = {}) {
  const { aula = "A01", orario = "9:00-11:00", maxStudenti = 30 } = opzioni;
  
  return {
    nome,
    codice,
    crediti,
    aula,
    orario,
    maxStudenti
  };
}

// SOLUZIONE 3.3
function unisciStudenti(gruppo1, gruppo2) {
  return [...gruppo1, ...gruppo2];
}

// SOLUZIONE 4.1
function calcolaMedia(voti) {
  const somma = voti.reduce((acc, voto) => acc + voto, 0);
  return parseFloat((somma / voti.length).toFixed(1));
}

// SOLUZIONE 4.2
function aggiungiMedia(studenti) {
  return studenti.map(studente => ({
    ...studente,
    media: calcolaMedia(studente.voti)
  }));
}

// SOLUZIONE 4.3
function studentiEccellenti(studenti) {
  return studenti
    .filter(s => s.media >= 28)
    .sort((a, b) => b.media - a.media);
}

// SOLUZIONE 5.1
class Corso {
  constructor(nome, codice, crediti) {
    this.nome = nome;
    this.codice = codice;
    this.crediti = crediti;
    this.studentiIscritti = [];
  }
  
  aggiungiStudente(studente) {
    this.studentiIscritti.push(studente);
  }
  
  rimuoviStudente(matricola) {
    this.studentiIscritti = this.studentiIscritti.filter(
      s => s.matricola !== matricola
    );
  }
  
  getNumeroIscritti() {
    return this.studentiIscritti.length;
  }
  
  getInfo() {
    return `${this.nome} (${this.codice}) - ${this.crediti} CFU - Iscritti: ${this.getNumeroIscritti()}`;
  }
}

class GestoreCorsi {
  constructor() {
    this.corsi = [];
  }
  
  aggiungiCorso(corso) {
    this.corsi.push(corso);
  }
  
  cercaCorso(codice) {
    return this.corsi.find(c => c.codice === codice);
  }
  
  getCorsiConPiuDiNStudenti(n) {
    return this.corsi.filter(c => c.getNumeroIscritti() > n);
  }
  
  stampaRiepilogo() {
    console.log("=== RIEPILOGO CORSI ===");
    this.corsi.forEach(corso => {
      console.log(corso.getInfo());
    });
  }
}

*/
