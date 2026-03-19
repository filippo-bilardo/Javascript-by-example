/**
 * ESERCITAZIONE 3 - LIVELLO AVANZATO
 * Sistema E-Commerce con Pattern di Progettazione
 * 
 * Obiettivi:
 * - Applicare pattern di progettazione (Singleton, Factory, Observer)
 * - Utilizzare getters, setters e proprietà private
 * - Implementare validazione e gestione errori
 * - Lavorare con JSON e localStorage (simulato)
 * - Creare un'applicazione completa
 * 
 * Tempo stimato: 60-90 minuti
 */

console.log("=== ESERCITAZIONE 3: SISTEMA E-COMMERCE ===\n");

// ============================================================================
// PARTE 1: Pattern Singleton e Gestione Carrello (20 minuti)
// ============================================================================

console.log("--- PARTE 1: Pattern Singleton ---\n");

/**
 * ESERCIZIO 1.1
 * Implementa un Carrello usando il pattern Singleton.
 * Il carrello deve essere unico per tutta l'applicazione.
 * 
 * Proprietà:
 * - articoli: array di oggetti { prodotto, quantita, prezzoUnitario }
 * 
 * Metodi:
 * - aggiungi(prodotto, quantita, prezzoUnitario): aggiunge articolo
 * - rimuovi(nomeProdotto): rimuove un articolo
 * - aggiornaQuantita(nomeProdotto, nuovaQuantita): modifica quantità
 * - getTotale(): calcola il totale del carrello
 * - svuota(): rimuove tutti gli articoli
 * - getArticoli(): restituisce copia dell'array articoli
 */

// SCRIVI IL TUO CODICE QUI
const Carrello = (function() {
  let instance;
  
  function creaCarrello() {
    // Proprietà private
    let articoli = [];
    
    // Metodi pubblici
    return {
      aggiungi: function(prodotto, quantita, prezzoUnitario) {
        // TODO: Verifica se il prodotto esiste già
        // Se esiste, aggiorna la quantità, altrimenti aggiungilo
      },
      
      rimuovi: function(nomeProdotto) {
        // TODO: Rimuovi l'articolo dall'array
      },
      
      aggiornaQuantita: function(nomeProdotto, nuovaQuantita) {
        // TODO: Trova l'articolo e aggiorna la quantità
      },
      
      getTotale: function() {
        // TODO: Calcola e restituisci il totale
        return 0;
      },
      
      svuota: function() {
        // TODO: Svuota l'array articoli
      },
      
      getArticoli: function() {
        // TODO: Restituisci una copia dell'array (usa spread o map)
        return [];
      }
    };
  }
  
  return {
    getInstance: function() {
      if (!instance) {
        instance = creaCarrello();
      }
      return instance;
    }
  };
})();

// Test: decommenta per verificare
// const carrello1 = Carrello.getInstance();
// const carrello2 = Carrello.getInstance();
// console.log("Stesso carrello?", carrello1 === carrello2); // true
// 
// carrello1.aggiungi("Laptop", 1, 899);
// carrello1.aggiungi("Mouse", 2, 25);
// console.log("Totale:", carrello2.getTotale()); // Dovrebbe vedere gli stessi dati
// console.log("Articoli:", carrello2.getArticoli());


// ============================================================================
// PARTE 2: Factory Pattern per Prodotti (20 minuti)
// ============================================================================

console.log("\n--- PARTE 2: Factory Pattern ---\n");

/**
 * ESERCIZIO 2.1
 * Crea una classe base Prodotto con:
 * - Proprietà: nome, prezzo, categoria, id (generato automaticamente)
 * - Metodi:
 *   - getInfo(): restituisce info complete
 *   - applicaSconto(percentuale): calcola prezzo scontato
 *   - toJSON(): restituisce rappresentazione JSON del prodotto
 */

// SCRIVI IL TUO CODICE QUI
class Prodotto {
  static #contatoreId = 0; // Proprietà privata statica
  
  constructor(nome, prezzo, categoria) {
    this.id = ++Prodotto.#contatoreId;
    this.nome = nome;
    this.prezzo = prezzo;
    this.categoria = categoria;
    this.dataCreazione = new Date();
  }
  
  getInfo() {
    // TODO: Restituisci stringa con info prodotto
    return "";
  }
  
  applicaSconto(percentuale) {
    // TODO: Calcola e restituisci prezzo scontato
    // Validazione: percentuale deve essere tra 0 e 100
    return 0;
  }
  
  toJSON() {
    // TODO: Restituisci oggetto con tutte le proprietà rilevanti
    return {};
  }
}


/**
 * ESERCIZIO 2.2
 * Crea classi specializzate che ereditano da Prodotto:
 * 
 * - ProdottoElettronico: aggiunge proprietà garanzia (mesi)
 * - ProdottoAbbigliamento: aggiunge proprietà taglia e colore
 * - ProdottoAlimentare: aggiunge proprietà scadenza (Date)
 * 
 * Override del metodo getInfo() per includere le nuove proprietà
 */

// SCRIVI IL TUO CODICE QUI
class ProdottoElettronico extends Prodotto {
  constructor(nome, prezzo, garanzia) {
    // TODO: Chiama super e aggiungi garanzia
  }
  
  getInfo() {
    // TODO: Override per includere garanzia
    return "";
  }
}

class ProdottoAbbigliamento extends Prodotto {
  constructor(nome, prezzo, taglia, colore) {
    // TODO: Implementa costruttore
  }
  
  getInfo() {
    // TODO: Override per includere taglia e colore
    return "";
  }
}

class ProdottoAlimentare extends Prodotto {
  constructor(nome, prezzo, scadenza) {
    // TODO: Implementa costruttore
  }
  
  isScaduto() {
    // TODO: Verifica se il prodotto è scaduto
    return false;
  }
  
  getInfo() {
    // TODO: Override per includere scadenza e stato
    return "";
  }
}


/**
 * ESERCIZIO 2.3
 * Implementa una Factory per creare prodotti:
 */

const ProdottoFactory = {
  creaProdotto: function(tipo, dati) {
    // TODO: Usa switch o if per creare il tipo corretto di prodotto
    // tipo può essere: "elettronico", "abbigliamento", "alimentare"
    // dati è un oggetto con le proprietà necessarie
    // Lancia un errore se il tipo non è riconosciuto
    
    throw new Error("Tipo di prodotto non riconosciuto");
  }
};

// Test: decommenta per verificare
// try {
//   const laptop = ProdottoFactory.creaProdotto("elettronico", {
//     nome: "Laptop Pro",
//     prezzo: 1200,
//     garanzia: 24
//   });
//   
//   const maglietta = ProdottoFactory.creaProdotto("abbigliamento", {
//     nome: "T-Shirt",
//     prezzo: 25,
//     taglia: "M",
//     colore: "Blu"
//   });
//   
//   console.log(laptop.getInfo());
//   console.log(maglietta.getInfo());
//   console.log("Laptop scontato:", laptop.applicaSconto(10));
// } catch (error) {
//   console.error(error.message);
// }


// ============================================================================
// PARTE 3: Observer Pattern e Notifiche (20 minuti)
// ============================================================================

console.log("\n--- PARTE 3: Observer Pattern ---\n");

/**
 * ESERCIZIO 3.1
 * Implementa il pattern Observer per notificare i clienti
 * quando un prodotto va in offerta o torna disponibile.
 * 
 * Classe GestoreNotifiche (Subject):
 * - Metodi:
 *   - registraOsservatore(osservatore): aggiunge un osservatore
 *   - rimuoviOsservatore(osservatore): rimuove un osservatore
 *   - notifica(messaggio, tipo): notifica tutti gli osservatori
 * 
 * Classe Cliente (Observer):
 * - Proprietà: nome, email
 * - Metodo: aggiorna(messaggio, tipo): riceve la notifica
 */

// SCRIVI IL TUO CODICE QUI
class GestoreNotifiche {
  constructor() {
    this.osservatori = [];
  }
  
  registraOsservatore(osservatore) {
    // TODO: Aggiungi osservatore all'array se non esiste già
  }
  
  rimuoviOsservatore(osservatore) {
    // TODO: Rimuovi osservatore dall'array
  }
  
  notifica(messaggio, tipo = "info") {
    // TODO: Chiama il metodo aggiorna() di ogni osservatore
  }
}

class Cliente {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }
  
  aggiorna(messaggio, tipo) {
    // TODO: Stampa la notifica ricevuta
    // Formato: "[TIPO] [nome] ([email]): [messaggio]"
  }
}

// Test: decommenta per verificare
// const gestore = new GestoreNotifiche();
// const cliente1 = new Cliente("Mario Rossi", "mario@example.com");
// const cliente2 = new Cliente("Laura Bianchi", "laura@example.com");
// 
// gestore.registraOsservatore(cliente1);
// gestore.registraOsservatore(cliente2);
// 
// gestore.notifica("Laptop in offerta a 999€!", "offerta");
// gestore.rimuoviOsservatore(cliente1);
// gestore.notifica("iPhone disponibile in magazzino", "disponibilità");


// ============================================================================
// PARTE 4: Validazione e Gestione Errori (15 minuti)
// ============================================================================

console.log("\n--- PARTE 4: Validazione Avanzata ---\n");

/**
 * ESERCIZIO 4.1
 * Crea una classe Ordine con validazione robusta:
 * 
 * Proprietà:
 * - numeroOrdine (generato automaticamente)
 * - cliente (oggetto con nome, email, telefono)
 * - articoli (array dal carrello)
 * - totale
 * - stato ("in attesa", "confermato", "spedito", "consegnato")
 * - dataOrdine
 * 
 * Metodi con validazione:
 * - validaCliente(): verifica che tutti i dati cliente siano validi
 * - validaEmail(email): verifica formato email
 * - validaTelefono(telefono): verifica formato telefono italiano
 * - cambiaStato(nuovoStato): cambia stato solo se valido e sequenziale
 * - calcolaTotale(): calcola il totale dagli articoli
 */

// SCRIVI IL TUO CODICE QUI
class Ordine {
  static #contatoreOrdini = 1000;
  static #statiValidi = ["in attesa", "confermato", "spedito", "consegnato"];
  
  constructor(cliente, articoli) {
    // TODO: Valida i dati prima di assegnarli
    // Se validazione fallisce, lancia un errore con messaggio descrittivo
    
    this.numeroOrdine = ++Ordine.#contatoreOrdini;
    this.dataOrdine = new Date();
    // TODO: Completa il costruttore
  }
  
  validaEmail(email) {
    // TODO: Usa una regex per validare l'email
    // Formato base: qualcosa@qualcosa.qualcosa
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  validaTelefono(telefono) {
    // TODO: Valida formato telefono italiano (10 cifre, può iniziare con +39)
    // Esempi validi: "3331234567", "+393331234567", "0221234567"
    return false;
  }
  
  validaCliente() {
    // TODO: Verifica che cliente abbia nome, email e telefono validi
    // Lancia errori specifici per ogni campo non valido
    return true;
  }
  
  calcolaTotale() {
    // TODO: Calcola somma di (quantità * prezzoUnitario) per ogni articolo
    return 0;
  }
  
  cambiaStato(nuovoStato) {
    // TODO: Verifica che:
    // 1. Il nuovo stato sia valido (presente in #statiValidi)
    // 2. Il nuovo stato sia sequenziale (non puoi tornare indietro)
    // Se ok, cambia stato, altrimenti lancia errore
  }
  
  getInfo() {
    // TODO: Restituisci stringa con tutte le info ordine
    return "";
  }
}

// Test: decommenta per verificare
// try {
//   const ordine = new Ordine(
//     {
//       nome: "Mario Rossi",
//       email: "mario@example.com",
//       telefono: "3331234567"
//     },
//     [
//       { prodotto: "Laptop", quantita: 1, prezzoUnitario: 999 },
//       { prodotto: "Mouse", quantita: 2, prezzoUnitario: 25 }
//     ]
//   );
//   
//   console.log(ordine.getInfo());
//   ordine.cambiaStato("confermato");
//   ordine.cambiaStato("spedito");
//   console.log("Stato finale:", ordine.stato);
//   
//   // Questo dovrebbe fallire
//   // ordine.cambiaStato("in attesa");
// } catch (error) {
//   console.error("Errore:", error.message);
// }


// ============================================================================
// PARTE 5: Progetto Finale - Sistema E-Commerce Completo (30 minuti)
// ============================================================================

console.log("\n--- PARTE 5: Sistema E-Commerce Completo ---\n");

/**
 * ESERCIZIO 5.1 - PROGETTO FINALE
 * 
 * Crea una classe NegozioOnline che integra tutti i componenti:
 * 
 * Proprietà:
 * - catalogo: array di prodotti
 * - ordini: array di ordini
 * - notifiche: istanza di GestoreNotifiche
 * 
 * Metodi:
 * - aggiungiProdotto(prodotto): aggiunge al catalogo
 * - cercaProdotto(termine): cerca per nome o categoria
 * - getProdottiPerCategoria(categoria): filtra per categoria
 * - getProdottiInOfferta(percentuale): applica sconto e restituisce lista
 * - creaOrdine(cliente): crea ordine dal carrello corrente
 * - getOrdiniCliente(email): restituisce ordini di un cliente
 * - esportaCatalogo(): restituisce catalogo in formato JSON
 * - importaCatalogo(jsonString): carica catalogo da JSON
 * - getStatistiche(): restituisce statistiche del negozio
 *   (totale prodotti, totale ordini, ricavo totale, categoria più venduta)
 */

// SCRIVI IL TUO CODICE QUI
class NegozioOnline {
  constructor(nome) {
    this.nome = nome;
    this.catalogo = [];
    this.ordini = [];
    this.notifiche = new GestoreNotifiche();
  }
  
  aggiungiProdotto(prodotto) {
    // TODO: Aggiungi prodotto al catalogo
    // Notifica gli osservatori del nuovo prodotto
  }
  
  cercaProdotto(termine) {
    // TODO: Cerca prodotto per nome (case-insensitive)
    return [];
  }
  
  getProdottiPerCategoria(categoria) {
    // TODO: Filtra prodotti per categoria
    return [];
  }
  
  getProdottiInOfferta(percentuale) {
    // TODO: Restituisci array con prodotti e prezzi scontati
    // Formato: { prodotto, prezzoOriginale, prezzoScontato, risparmio }
    return [];
  }
  
  creaOrdine(cliente) {
    // TODO: Ottieni carrello, crea ordine, svuota carrello
    // Aggiungi ordine all'array ordini
    // Notifica cliente dell'ordine creato
    // Restituisci l'ordine creato
    return null;
  }
  
  getOrdiniCliente(email) {
    // TODO: Filtra ordini per email cliente
    return [];
  }
  
  esportaCatalogo() {
    // TODO: Converti catalogo in stringa JSON
    // Usa toJSON() di ogni prodotto
    return "";
  }
  
  importaCatalogo(jsonString) {
    // TODO: Parsa JSON e ricrea prodotti
    // Gestisci errori di parsing
  }
  
  getStatistiche() {
    // TODO: Calcola e restituisci statistiche
    return {
      totaleProdotti: 0,
      totaleOrdini: 0,
      ricavoTotale: 0,
      prodottoPopolare: "",
      categoriaPopolare: ""
    };
  }
}

// Test completo: decommenta per verificare
// const negozio = new NegozioOnline("TechStore");
// 
// // Aggiungi prodotti
// negozio.aggiungiProdotto(ProdottoFactory.creaProdotto("elettronico", {
//   nome: "Laptop Pro",
//   prezzo: 1200,
//   garanzia: 24
// }));
// 
// negozio.aggiungiProdotto(ProdottoFactory.creaProdotto("elettronico", {
//   nome: "Mouse Wireless",
//   prezzo: 35,
//   garanzia: 12
// }));
// 
// // Simula acquisto
// const carrello = Carrello.getInstance();
// carrello.aggiungi("Laptop Pro", 1, 1200);
// carrello.aggiungi("Mouse Wireless", 2, 35);
// 
// // Registra cliente per notifiche
// const cliente = new Cliente("Mario Rossi", "mario@example.com");
// negozio.notifiche.registraOsservatore(cliente);
// 
// // Crea ordine
// const ordine = negozio.creaOrdine({
//   nome: "Mario Rossi",
//   email: "mario@example.com",
//   telefono: "3331234567"
// });
// 
// console.log("\n=== RIEPILOGO NEGOZIO ===");
// console.log("Prodotti in catalogo:", negozio.catalogo.length);
// console.log("Ordini effettuati:", negozio.ordini.length);
// console.log("\nStatistiche:", negozio.getStatistiche());


console.log("\n=== FINE ESERCITAZIONE 3 ===");
console.log("Complimenti! Hai completato tutte e tre le esercitazioni.");
console.log("Ora sei pronto per progetti JavaScript più complessi!\n");
































// ============================================================================
// SOLUZIONI DEGLI ESERCIZI - PARTE SELEZIONATA
// ============================================================================

/*

// SOLUZIONE 1.1 - Carrello Singleton
const Carrello = (function() {
  let instance;
  
  function creaCarrello() {
    let articoli = [];
    
    return {
      aggiungi: function(prodotto, quantita, prezzoUnitario) {
        const esistente = articoli.find(a => a.prodotto === prodotto);
        if (esistente) {
          esistente.quantita += quantita;
        } else {
          articoli.push({ prodotto, quantita, prezzoUnitario });
        }
      },
      
      rimuovi: function(nomeProdotto) {
        articoli = articoli.filter(a => a.prodotto !== nomeProdotto);
      },
      
      aggiornaQuantita: function(nomeProdotto, nuovaQuantita) {
        const articolo = articoli.find(a => a.prodotto === nomeProdotto);
        if (articolo) {
          articolo.quantita = nuovaQuantita;
        }
      },
      
      getTotale: function() {
        return articoli.reduce((tot, a) => tot + (a.quantita * a.prezzoUnitario), 0);
      },
      
      svuota: function() {
        articoli = [];
      },
      
      getArticoli: function() {
        return [...articoli];
      }
    };
  }
  
  return {
    getInstance: function() {
      if (!instance) {
        instance = creaCarrello();
      }
      return instance;
    }
  };
})();

// SOLUZIONE 2.1 - Classe Prodotto
class Prodotto {
  static #contatoreId = 0;
  
  constructor(nome, prezzo, categoria) {
    this.id = ++Prodotto.#contatoreId;
    this.nome = nome;
    this.prezzo = prezzo;
    this.categoria = categoria;
    this.dataCreazione = new Date();
  }
  
  getInfo() {
    return `${this.nome} - €${this.prezzo} (${this.categoria})`;
  }
  
  applicaSconto(percentuale) {
    if (percentuale < 0 || percentuale > 100) {
      throw new Error("Percentuale non valida");
    }
    return this.prezzo * (1 - percentuale / 100);
  }
  
  toJSON() {
    return {
      id: this.id,
      nome: this.nome,
      prezzo: this.prezzo,
      categoria: this.categoria
    };
  }
}

// Continua con le altre soluzioni...
// Per brevità, le soluzioni complete sono fornite separatamente

*/
