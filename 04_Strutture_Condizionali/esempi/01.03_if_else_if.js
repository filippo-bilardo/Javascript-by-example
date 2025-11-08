/**
 * 01.03 - If...Else If...Else
 * 
 * Esempi completi sulla catena if...else if...else in JavaScript.
 * Permette di testare multiple condizioni in sequenza.
 */

console.log("=".repeat(60));
console.log("01.03 - IF...ELSE IF...ELSE");
console.log("=".repeat(60));

// ============================================================
// 1. SINTASSI BASE IF...ELSE IF...ELSE
// ============================================================
console.log("\n1. SINTASSI BASE IF...ELSE IF...ELSE");
console.log("-".repeat(60));

// Esempio classico: valutazione voti
let punteggio = 85;
console.log(`Punteggio: ${punteggio}/100`);

if (punteggio >= 90) {
    console.log("Voto: A (Eccellente!)");
} else if (punteggio >= 80) {
    console.log("✓ Voto: B (Ottimo)");
} else if (punteggio >= 70) {
    console.log("Voto: C (Buono)");
} else if (punteggio >= 60) {
    console.log("Voto: D (Sufficiente)");
} else {
    console.log("Voto: F (Insufficiente)");
}

// Esempio con fasce orarie
let ora = 15;
console.log(`\nOra: ${ora}:00`);

if (ora < 6) {
    console.log("Buonanotte (notte fonda)");
} else if (ora < 12) {
    console.log("Buongiorno (mattina)");
} else if (ora < 18) {
    console.log("✓ Buon pomeriggio");
} else if (ora < 22) {
    console.log("Buonasera");
} else {
    console.log("Buonanotte");
}

// ============================================================
// 2. CATEGORIZZAZIONE NUMERICA
// ============================================================
console.log("\n2. CATEGORIZZAZIONE NUMERICA");
console.log("-".repeat(60));

// Fasce di età
let età = 25;
console.log(`Età: ${età} anni`);

if (età < 13) {
    console.log("Categoria: Bambino");
} else if (età < 18) {
    console.log("Categoria: Adolescente");
} else if (età < 65) {
    console.log("✓ Categoria: Adulto");
} else {
    console.log("Categoria: Senior");
}

// Fasce di prezzo
let prezzo = 750;
console.log(`\nPrezzo: €${prezzo}`);

if (prezzo < 100) {
    console.log("Fascia: Economico");
} else if (prezzo < 500) {
    console.log("Fascia: Medio");
} else if (prezzo < 1000) {
    console.log("✓ Fascia: Alto");
} else {
    console.log("Fascia: Premium");
}

// IMC (Indice Massa Corporea)
let peso = 70; // kg
let altezza = 1.75; // metri
let imc = peso / (altezza * altezza);

console.log(`\nPeso: ${peso}kg, Altezza: ${altezza}m`);
console.log(`IMC: ${imc.toFixed(2)}`);

if (imc < 18.5) {
    console.log("Stato: Sottopeso");
} else if (imc < 25) {
    console.log("✓ Stato: Normopeso");
} else if (imc < 30) {
    console.log("Stato: Sovrappeso");
} else {
    console.log("Stato: Obesità");
}

// ============================================================
// 3. COMPARAZIONE DI STRINGHE
// ============================================================
console.log("\n3. COMPARAZIONE DI STRINGHE");
console.log("-".repeat(60));

// Giorni della settimana
let giorno = "Mercoledì";
console.log(`Giorno: ${giorno}`);

if (giorno === "Lunedì") {
    console.log("Inizio settimana");
} else if (giorno === "Mercoledì") {
    console.log("✓ Metà settimana");
} else if (giorno === "Venerdì") {
    console.log("Fine settimana lavorativa");
} else if (giorno === "Sabato" || giorno === "Domenica") {
    console.log("Weekend!");
} else {
    console.log("Giorno lavorativo");
}

// Livelli di accesso
let ruolo = "editor";
console.log(`\nRuolo: "${ruolo}"`);

if (ruolo === "admin") {
    console.log("Accesso: Completo (lettura + scrittura + admin)");
} else if (ruolo === "editor") {
    console.log("✓ Accesso: Lettura + Scrittura");
} else if (ruolo === "viewer") {
    console.log("Accesso: Solo lettura");
} else if (ruolo === "guest") {
    console.log("Accesso: Limitato");
} else {
    console.log("Accesso: Nessuno (ruolo non riconosciuto)");
}

// Estensioni file
let nomeFile = "documento.pdf";
let estensione = nomeFile.split('.').pop().toLowerCase();

console.log(`\nFile: "${nomeFile}"`);
console.log(`Estensione: .${estensione}`);

if (estensione === "jpg" || estensione === "png" || estensione === "gif") {
    console.log("Tipo: Immagine");
} else if (estensione === "mp4" || estensione === "avi" || estensione === "mov") {
    console.log("Tipo: Video");
} else if (estensione === "pdf") {
    console.log("✓ Tipo: Documento PDF");
} else if (estensione === "doc" || estensione === "docx") {
    console.log("Tipo: Documento Word");
} else {
    console.log("Tipo: Sconosciuto");
}

// ============================================================
// 4. CONDIZIONI MULTIPLE COMPLESSE
// ============================================================
console.log("\n4. CONDIZIONI MULTIPLE COMPLESSE");
console.log("-".repeat(60));

// Sistema di sconti progressivi
let importo = 250;
let èClienteVip = true;

console.log(`Importo: €${importo}, Cliente VIP: ${èClienteVip}`);

if (importo >= 500 && èClienteVip) {
    console.log("Sconto: 25% (ordine alto + VIP)");
} else if (importo >= 500) {
    console.log("Sconto: 20% (ordine alto)");
} else if (importo >= 200 && èClienteVip) {
    console.log("✓ Sconto: 15% (ordine medio + VIP)");
} else if (importo >= 200) {
    console.log("Sconto: 10% (ordine medio)");
} else if (èClienteVip) {
    console.log("Sconto: 5% (VIP)");
} else {
    console.log("Nessuno sconto");
}

// Accesso basato su più criteri
let etàUtente = 20;
let haPermesso = true;
let èVerificato = false;

console.log(`\nEtà: ${etàUtente}, Permesso: ${haPermesso}, Verificato: ${èVerificato}`);

if (etàUtente >= 18 && haPermesso && èVerificato) {
    console.log("Accesso: Completo");
} else if (etàUtente >= 18 && haPermesso) {
    console.log("✓ Accesso: Parziale (verificazione email richiesta)");
} else if (etàUtente >= 18) {
    console.log("Accesso: Negato (permesso richiesto)");
} else {
    console.log("Accesso: Negato (età minima richiesta)");
}

// ============================================================
// 5. RANGE E INTERVALLI
// ============================================================
console.log("\n5. RANGE E INTERVALLI");
console.log("-".repeat(60));

// Temperatura con range
let temperatura = 22;
console.log(`Temperatura: ${temperatura}°C`);

if (temperatura < 0) {
    console.log("Clima: Gelido (sotto zero)");
} else if (temperatura >= 0 && temperatura < 10) {
    console.log("Clima: Molto freddo");
} else if (temperatura >= 10 && temperatura < 20) {
    console.log("Clima: Fresco");
} else if (temperatura >= 20 && temperatura < 30) {
    console.log("✓ Clima: Mite/Caldo");
} else {
    console.log("Clima: Molto caldo");
}

// Valutazione performance (percentuale)
let percentualeSuccesso = 78;
console.log(`\nPercentuale successo: ${percentualeSuccesso}%`);

if (percentualeSuccesso >= 90) {
    console.log("Performance: Eccellente ⭐⭐⭐⭐⭐");
} else if (percentualeSuccesso >= 75) {
    console.log("✓ Performance: Ottima ⭐⭐⭐⭐");
} else if (percentualeSuccesso >= 60) {
    console.log("Performance: Buona ⭐⭐⭐");
} else if (percentualeSuccesso >= 40) {
    console.log("Performance: Sufficiente ⭐⭐");
} else {
    console.log("Performance: Insufficiente ⭐");
}

// ============================================================
// 6. PRIORITÀ E ORDINE DI VALUTAZIONE
// ============================================================
console.log("\n6. PRIORITÀ E ORDINE DI VALUTAZIONE");
console.log("-".repeat(60));

// Ordine importa! (dalla più specifica alla più generica)
let valore = 100;
console.log(`Valore: ${valore}`);

if (valore === 100) {
    console.log("✓ Esattamente 100 (condizione più specifica)");
} else if (valore >= 100) {
    console.log("Almeno 100 (non raggiungerà mai questo!)");
} else if (valore >= 50) {
    console.log("Almeno 50");
} else {
    console.log("Meno di 50");
}

// Esempio corretto: dal generale allo specifico
let numero = 100;
console.log(`\nNumero: ${numero}`);

if (numero >= 50) {
    console.log("✓ Almeno 50 (prima condizione vera viene eseguita)");
    if (numero === 100) {
        console.log("  → E anche esattamente 100 (nested if)");
    }
} else if (numero >= 25) {
    console.log("Almeno 25");
} else {
    console.log("Meno di 25");
}

// ============================================================
// 7. CATENE LUNGHE (6+ CONDIZIONI)
// ============================================================
console.log("\n7. CATENE LUNGHE (6+ CONDIZIONI)");
console.log("-".repeat(60));

// Mesi dell'anno
let mese = 8;
console.log(`Mese numero: ${mese}`);

if (mese === 1) {
    console.log("Gennaio");
} else if (mese === 2) {
    console.log("Febbraio");
} else if (mese === 3) {
    console.log("Marzo");
} else if (mese === 4) {
    console.log("Aprile");
} else if (mese === 5) {
    console.log("Maggio");
} else if (mese === 6) {
    console.log("Giugno");
} else if (mese === 7) {
    console.log("Luglio");
} else if (mese === 8) {
    console.log("✓ Agosto");
} else if (mese === 9) {
    console.log("Settembre");
} else if (mese === 10) {
    console.log("Ottobre");
} else if (mese === 11) {
    console.log("Novembre");
} else if (mese === 12) {
    console.log("Dicembre");
} else {
    console.log("Mese non valido!");
}

console.log("⚠️ Per molte condizioni come questa, considera lo switch!");

// ============================================================
// 8. CONDIZIONI CON CALCOLI
// ============================================================
console.log("\n8. CONDIZIONI CON CALCOLI");
console.log("-".repeat(60));

// Scaglioni fiscali (esempio semplificato)
let reddito = 35000;
let tasse;

console.log(`Reddito annuo: €${reddito}`);

if (reddito <= 15000) {
    tasse = reddito * 0.23;
    console.log("Aliquota: 23%");
} else if (reddito <= 28000) {
    tasse = reddito * 0.27;
    console.log("Aliquota: 27%");
} else if (reddito <= 55000) {
    tasse = reddito * 0.38;
    console.log("✓ Aliquota: 38%");
} else if (reddito <= 75000) {
    tasse = reddito * 0.41;
    console.log("Aliquota: 41%");
} else {
    tasse = reddito * 0.43;
    console.log("Aliquota: 43%");
}

console.log(`Tasse stimate: €${tasse.toFixed(2)}`);

// Spese di spedizione
let pesoOrdine = 2.5; // kg
let costoSpedizione;

console.log(`\nPeso ordine: ${pesoOrdine}kg`);

if (pesoOrdine <= 0.5) {
    costoSpedizione = 3.99;
} else if (pesoOrdine <= 2) {
    costoSpedizione = 5.99;
} else if (pesoOrdine <= 5) {
    costoSpedizione = 8.99;
} else if (pesoOrdine <= 10) {
    costoSpedizione = 12.99;
} else {
    costoSpedizione = 19.99;
}

console.log(`✓ Costo spedizione: €${costoSpedizione}`);

// ============================================================
// 9. ELSE IF CON RETURN (IN FUNZIONI)
// ============================================================
console.log("\n9. ELSE IF CON RETURN (IN FUNZIONI)");
console.log("-".repeat(60));

function ottieniLivello(punti) {
    console.log(`  Punti: ${punti}`);
    
    if (punti >= 10000) {
        return "Diamante 💎";
    } else if (punti >= 5000) {
        return "Oro 🥇";
    } else if (punti >= 2500) {
        return "Argento 🥈";
    } else if (punti >= 1000) {
        return "Bronzo 🥉";
    } else {
        return "Base ⭐";
    }
}

console.log("Livello 1:", ottieniLivello(15000));
console.log("Livello 2:", ottieniLivello(3000));
console.log("Livello 3:", ottieniLivello(500));

// Con return, non serve else (early return)
function categoriaEtà(età) {
    if (età < 0) return "Età non valida";
    if (età < 13) return "Bambino";
    if (età < 18) return "Adolescente";
    if (età < 65) return "Adulto";
    return "Senior";
}

console.log(`\nCategoria età 25: ${categoriaEtà(25)}`);

// ============================================================
// 10. CASI D'USO PRATICI COMPLESSI
// ============================================================
console.log("\n10. CASI D'USO PRATICI COMPLESSI");
console.log("-".repeat(60));

// Sistema di raccomandazioni prodotto
let budgetCliente = 800;
let esigenza = "gaming";

console.log(`Budget: €${budgetCliente}, Esigenza: "${esigenza}"`);

if (esigenza === "gaming" && budgetCliente >= 1500) {
    console.log("Raccomandazione: PC Gaming High-End");
} else if (esigenza === "gaming" && budgetCliente >= 800) {
    console.log("✓ Raccomandazione: PC Gaming Mid-Range");
} else if (esigenza === "gaming") {
    console.log("Raccomandazione: Console o PC Gaming Entry-Level");
} else if (esigenza === "lavoro" && budgetCliente >= 1000) {
    console.log("Raccomandazione: Workstation Professionale");
} else if (esigenza === "lavoro") {
    console.log("Raccomandazione: Laptop Business");
} else {
    console.log("Raccomandazione: PC Uso Generale");
}

// Validazione password con criteri multipli
let passwordInput = "MyPass123!";
let lunghezza = passwordInput.length;
let haNumeri = /\d/.test(passwordInput);
let haCaratteriSpeciali = /[!@#$%^&*]/.test(passwordInput);
let haMaiuscole = /[A-Z]/.test(passwordInput);

console.log(`\nPassword: "${passwordInput}"`);
console.log(`Lunghezza: ${lunghezza}, Numeri: ${haNumeri}, Speciali: ${haCaratteriSpeciali}, Maiuscole: ${haMaiuscole}`);

if (lunghezza >= 12 && haNumeri && haCaratteriSpeciali && haMaiuscole) {
    console.log("Forza password: Molto forte 🟢🟢🟢");
} else if (lunghezza >= 10 && haNumeri && (haCaratteriSpeciali || haMaiuscole)) {
    console.log("✓ Forza password: Forte 🟢🟢");
} else if (lunghezza >= 8 && (haNumeri || haCaratteriSpeciali)) {
    console.log("Forza password: Media 🟡");
} else if (lunghezza >= 6) {
    console.log("Forza password: Debole 🟠");
} else {
    console.log("Forza password: Molto debole 🔴");
}

// Sistema notifiche priorità
let tipoEvento = "error";
let severità = "high";

console.log(`\nEvento: "${tipoEvento}", Severità: "${severità}"`);

if (tipoEvento === "error" && severità === "critical") {
    console.log("🚨 ALERT CRITICO - Intervento immediato!");
} else if (tipoEvento === "error" && severità === "high") {
    console.log("✓ ⚠️ ERRORE IMPORTANTE - Richiede attenzione");
} else if (tipoEvento === "error") {
    console.log("❌ Errore standard - Registrato nei log");
} else if (tipoEvento === "warning" && severità === "high") {
    console.log("⚡ Warning importante - Monitorare");
} else if (tipoEvento === "warning") {
    console.log("⚠️ Warning standard");
} else {
    console.log("ℹ️ Informazione");
}

// ============================================================
// BEST PRACTICES E REMINDER
// ============================================================
console.log("\n" + "=".repeat(60));
console.log("BEST PRACTICES");
console.log("=".repeat(60));

console.log(`
✓ Usa if...else if...else per più di 2 condizioni mutualmente esclusive
✓ Ordina le condizioni dalla più specifica alla più generale
✓ La PRIMA condizione vera viene eseguita, le altre ignorate
✓ L'else finale cattura tutti i casi non gestiti (default)
✓ Per molte condizioni su stesso valore, considera switch
✓ Mantieni condizioni semplici e leggibili
✓ Evita catene troppo lunghe (>5-6 else if)
✓ Considera early return in funzioni invece di else if
✓ Usa variabili booleane per condizioni complesse
✓ L'else è opzionale ma consigliato per completezza
✓ Ogni blocco può contenere if annidati se necessario
✓ Commenta la logica di condizioni non ovvie
`);

console.log("=".repeat(60));
console.log("Fine esempi 01.03 - If...Else If...Else");
console.log("=".repeat(60));
