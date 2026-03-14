/**
 * Esempio: Date in JavaScript
 * 
 * L'oggetto Date permette di lavorare con date e orari.
 * 
 * Per eseguire: node 11_date.js
 */

console.log("=== DATE IN JAVASCRIPT ===\n");

// 1. Creazione di Date
console.log("1. Creazione di oggetti Date:\n");

// Data e ora corrente
let ora = new Date();
console.log("Data corrente:", ora);
console.log("toString():", ora.toString());
console.log("toISOString():", ora.toISOString());

// Da stringa
let dataStringa = new Date("2024-12-25");
console.log("\nDa stringa '2024-12-25':", dataStringa.toDateString());

let dataOra = new Date("2024-12-25T10:30:00");
console.log("Con ora '2024-12-25T10:30:00':", dataOra.toString());

// Da parametri (anno, mese (0-11), giorno, ore, minuti, secondi, millisecondi)
let compleanno = new Date(1990, 0, 15); // 15 gennaio 1990
console.log("\nCompleanno (1990, 0, 15):", compleanno.toDateString());

let dataCompleta = new Date(2024, 11, 25, 10, 30, 45, 500);
console.log("Data completa:", dataCompleta.toString());

// Da timestamp (millisecondi dal 1 gennaio 1970)
let timestamp = Date.now(); // Millisecondi correnti
let dataTimestamp = new Date(timestamp);
console.log("\nTimestamp corrente:", timestamp);
console.log("Da timestamp:", dataTimestamp.toString());

// 2. Metodi getter
console.log("\n2. Metodi getter:\n");

let adesso = new Date();

console.log("getFullYear():", adesso.getFullYear());
console.log("getMonth() (0-11):", adesso.getMonth(), `(${adesso.getMonth() + 1})`);
console.log("getDate() (1-31):", adesso.getDate());
console.log("getDay() (0-6, 0=domenica):", adesso.getDay());

console.log("\ngetHours() (0-23):", adesso.getHours());
console.log("getMinutes() (0-59):", adesso.getMinutes());
console.log("getSeconds() (0-59):", adesso.getSeconds());
console.log("getMilliseconds() (0-999):", adesso.getMilliseconds());

console.log("\ngetTime() (timestamp):", adesso.getTime());
console.log("getTimezoneOffset() (minuti):", adesso.getTimezoneOffset());

// 3. Metodi setter
console.log("\n3. Metodi setter:\n");

let data = new Date(2024, 0, 1); // 1 gennaio 2024
console.log("Data iniziale:", data.toDateString());

data.setFullYear(2025);
console.log("Dopo setFullYear(2025):", data.toDateString());

data.setMonth(5); // Giugno (0-based)
console.log("Dopo setMonth(5):", data.toDateString());

data.setDate(15);
console.log("Dopo setDate(15):", data.toDateString());

data.setHours(14, 30, 45);
console.log("Dopo setHours(14, 30, 45):", data.toTimeString());

// 4. Formattazione
console.log("\n4. Formattazione date:\n");

let evento = new Date(2024, 11, 25, 18, 30, 0);

console.log("toString():", evento.toString());
console.log("toDateString():", evento.toDateString());
console.log("toTimeString():", evento.toTimeString());
console.log("toISOString():", evento.toISOString());
console.log("toUTCString():", evento.toUTCString());
console.log("toLocaleDateString():", evento.toLocaleDateString());
console.log("toLocaleTimeString():", evento.toLocaleTimeString());
console.log("toLocaleString():", evento.toLocaleString());

// Con locale specifico
console.log("\nCon locale 'it-IT':");
console.log("Data:", evento.toLocaleDateString('it-IT'));
console.log("Ora:", evento.toLocaleTimeString('it-IT'));

console.log("\nCon locale 'en-US':");
console.log("Data:", evento.toLocaleDateString('en-US'));
console.log("Ora:", evento.toLocaleTimeString('en-US'));

// Con opzioni
let opzioni = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
};
console.log("\nCon opzioni personalizzate:");
console.log(evento.toLocaleString('it-IT', opzioni));

// 5. Calcoli con date
console.log("\n5. Calcoli con date:\n");

let data1 = new Date(2024, 0, 1);
let data2 = new Date(2024, 0, 15);

// Differenza in millisecondi
let differenzaMs = data2 - data1;
console.log("Differenza millisecondi:", differenzaMs);

// Conversione in giorni
let differenzaGiorni = differenzaMs / (1000 * 60 * 60 * 24);
console.log("Differenza giorni:", differenzaGiorni);

// Aggiungere giorni
let dataFutura = new Date();
dataFutura.setDate(dataFutura.getDate() + 7);
console.log("\n7 giorni nel futuro:", dataFutura.toDateString());

// Sottrarre mesi
let dataPassata = new Date();
dataPassata.setMonth(dataPassata.getMonth() - 3);
console.log("3 mesi nel passato:", dataPassata.toDateString());

// 6. Confronto tra date
console.log("\n6. Confronto tra date:\n");

let oggi = new Date();
let domani = new Date();
domani.setDate(domani.getDate() + 1);
let ieri = new Date();
ieri.setDate(ieri.getDate() - 1);

console.log("Oggi < Domani:", oggi < domani);
console.log("Oggi > Ieri:", oggi > ieri);
console.log("Oggi == Oggi:", oggi == new Date()); // false! (oggetti diversi)

// Confronto corretto
let data3 = new Date(2024, 0, 1);
let data4 = new Date(2024, 0, 1);
console.log("Date uguali (getTime):", data3.getTime() === data4.getTime());

// 7. Utilità pratiche
console.log("\n7. Funzioni utili:\n");

// Giorni della settimana
function nomeGiorno(data) {
  const giorni = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 
                  'Giovedì', 'Venerdì', 'Sabato'];
  return giorni[data.getDay()];
}

console.log("Oggi è:", nomeGiorno(new Date()));

// Nome del mese
function nomeMese(data) {
  const mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
                'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
  return mesi[data.getMonth()];
}

console.log("Mese corrente:", nomeMese(new Date()));

// Età da data di nascita
function calcolaEtà(dataNascita) {
  let oggi = new Date();
  let età = oggi.getFullYear() - dataNascita.getFullYear();
  let m = oggi.getMonth() - dataNascita.getMonth();
  if (m < 0 || (m === 0 && oggi.getDate() < dataNascita.getDate())) {
    età--;
  }
  return età;
}

let nascita = new Date(1990, 5, 15);
console.log("Età:", calcolaEtà(nascita), "anni");

// Giorni fino a una data
function giorniMancanti(dataFutura) {
  let oggi = new Date();
  oggi.setHours(0, 0, 0, 0); // Azzera ore
  let futuro = new Date(dataFutura);
  futuro.setHours(0, 0, 0, 0);
  
  let diff = futuro - oggi;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

let natale = new Date(2024, 11, 25);
console.log("Giorni fino a Natale:", giorniMancanti(natale));

// È anno bisestile?
function èBisestile(anno) {
  return (anno % 4 === 0 && anno % 100 !== 0) || anno % 400 === 0;
}

console.log("\n2024 è bisestile?", èBisestile(2024));
console.log("2023 è bisestile?", èBisestile(2023));

// 8. Formato personalizzato
console.log("\n8. Formato personalizzato:\n");

function formattaData(data) {
  const giorno = String(data.getDate()).padStart(2, '0');
  const mese = String(data.getMonth() + 1).padStart(2, '0');
  const anno = data.getFullYear();
  return `${giorno}/${mese}/${anno}`;
}

function formattaOra(data) {
  const ore = String(data.getHours()).padStart(2, '0');
  const minuti = String(data.getMinutes()).padStart(2, '0');
  const secondi = String(data.getSeconds()).padStart(2, '0');
  return `${ore}:${minuti}:${secondi}`;
}

let adesso2 = new Date();
console.log("Data formattata:", formattaData(adesso2));
console.log("Ora formattata:", formattaOra(adesso2));
console.log("Completo:", `${formattaData(adesso2)} ${formattaOra(adesso2)}`);

// 9. Validazione date
console.log("\n9. Validazione date:\n");

function èDataValida(anno, mese, giorno) {
  let data = new Date(anno, mese, giorno);
  return data.getFullYear() === anno &&
         data.getMonth() === mese &&
         data.getDate() === giorno;
}

console.log("31/02/2024 valida?", èDataValida(2024, 1, 31)); // false
console.log("29/02/2024 valida?", èDataValida(2024, 1, 29)); // true (bisestile)
console.log("15/06/2024 valida?", èDataValida(2024, 5, 15)); // true

// 10. Range di date
console.log("\n10. Generare range di date:\n");

function generaGiorni(dataInizio, dataFine) {
  let giorni = [];
  let corrente = new Date(dataInizio);
  
  while (corrente <= dataFine) {
    giorni.push(new Date(corrente));
    corrente.setDate(corrente.getDate() + 1);
  }
  
  return giorni;
}

let inizio = new Date(2024, 0, 1);
let fine = new Date(2024, 0, 7);
let settimana = generaGiorni(inizio, fine);

console.log("Prima settimana di gennaio 2024:");
settimana.forEach(giorno => {
  console.log(`  ${nomeGiorno(giorno)}, ${formattaData(giorno)}`);
});

console.log("\n💡 Best Practices:");
console.log("   - Considerare librerie come date-fns o moment.js per operazioni complesse");
console.log("   - Attenzione: i mesi sono 0-based (0=Gennaio, 11=Dicembre)");
console.log("   - Usare getTime() per confrontare date");
console.log("   - Considerare i fusi orari in applicazioni internazionali");
console.log("   - Usare toISOString() per memorizzare date in database");
