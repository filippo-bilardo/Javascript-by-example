# Esempi Pratici - Operatori Aritmetici

Questa cartella contiene esempi pratici eseguibili con Node.js per comprendere gli operatori aritmetici in JavaScript, dalla addizione/sottrazione alla precedenza degli operatori.

## 📋 Lista degli Esempi

### 01.01_addizione_sottrazione.js
Operatori di base (+, -): addizione di numeri, concatenazione stringhe, conversione implicita, problemi di precisione floating-point, valori speciali (Infinity, NaN), casi d'uso pratici (calcolo totale, resto, URL), e best practices.

**Esegui con:**
```bash
node 01.01_addizione_sottrazione.js
```

### 01.02_moltiplicazione_divisione.js
Moltiplicazione (*) e divisione (/): operazioni base, divisione per zero (Infinity), conversione implicita, precisione decimali, valori speciali, overflow/underflow, divisione intera emulata (Math.floor, Math.trunc), casi pratici (area, velocità, percentuali), e gestione sicura.

**Esegui con:**
```bash
node 01.02_moltiplicazione_divisione.js
```

### 01.03_modulo_esponente.js
Modulo (%) per resto divisione ed esponente (**) per potenze: uso del modulo con positivi/negativi, casi d'uso (pari/dispari, wrap array, conversione tempo), esponente con potenze/radici, crescita esponenziale, interesse composto, e funzioni utili.

**Esegui con:**
```bash
node 01.03_modulo_esponente.js
```

### 01.04_incremento_decremento.js
Incremento (++) e decremento (--): differenza tra postfisso (x++) e prefisso (++x), comportamento in espressioni, casi d'uso nei loop, con decimali e stringhe, valori speciali, errori comuni da evitare, e quando usare quale versione.

**Esegui con:**
```bash
node 01.04_incremento_decremento.js
```

### 01.05_unari_precedenza.js
Operatori unari (+, -) per conversione e negazione, precedenza completa degli operatori aritmetici, associatività (sinistra/destra), uso parentesi per chiarezza, casi problematici, tabella precedenza, e formule matematiche comuni.

**Esegui con:**
```bash
node 01.05_unari_precedenza.js
```

## 🚀 Come Eseguire gli Esempi

### Prerequisiti
- Node.js installato sul sistema (versione 12 o superiore)

### Verifica installazione Node.js
```bash
node --version
```

### Eseguire un singolo esempio
```bash
cd /percorso/cartella/esempi
node 01.01_addizione_sottrazione.js
```

### Eseguire tutti gli esempi in sequenza
```bash
for file in 01.0*.js; do echo "=== $file ===" && node "$file" && echo ""; done
```

## 💡 Consigli per lo Studio

1. **Segui l'ordine numerico** - Gli esempi sono progressivi dalla base agli avanzati
2. **Leggi prima la teoria** nel file `01_Operatori_Aritmetici.md`
3. **Esegui gli esempi** uno alla volta osservando gli output
4. **Modifica i valori** per sperimentare comportamenti diversi
5. **Prova casi limite** (zero, negativi, decimali, Infinity, NaN)
6. **Confronta operatori** simili (postfisso vs prefisso, + unario vs Number())
7. **Scrivi formule** matematiche comuni usando precedenza corretta

## 🔍 Esperimenti Suggeriti

### Addizione e Sottrazione
- Prova mix di numeri e stringhe per vedere la coercizione
- Sperimenta con precisione decimali (0.1 + 0.2)
- Crea funzioni per calcoli finanziari con arrotondamento
- Testa operazioni con null, undefined, NaN

### Moltiplicazione e Divisione
- Verifica comportamento divisione per zero
- Confronta metodi di divisione intera (Math.floor vs Math.trunc)
- Implementa calcoli scientifici (velocità, densità, percentuali)
- Gestisci overflow con numeri molto grandi

### Modulo ed Esponente
- Usa modulo per creare pattern ciclici
- Implementa verifica numeri primi con modulo
- Calcola crescita esponenziale (batteri, investimenti)
- Prova radici con esponenti frazionari (x ** 0.5)

### Incremento e Decremento
- Confronta comportamento postfisso vs prefisso in loop
- Sperimenta con conversioni automatiche (string++, boolean++)
- Identifica quando ++ è più chiaro di += 1
- Evita espressioni complesse con multipli incrementi

### Unari e Precedenza
- Usa + unario per conversione rapida
- Scrivi espressioni complesse e verifica precedenza
- Confronta con/senza parentesi per chiarezza
- Implementa formule matematiche (quadratica, fisica)

## 📚 Risorse Aggiuntive

**Operatori Aritmetici:**
- [MDN - Arithmetic Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#arithmetic_operators)
- [MDN - Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)

**Numeri in JavaScript:**
- [MDN - Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [MDN - Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [JavaScript Number Precision](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding)

**Conversione Tipi:**
- [MDN - Type Coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)
- [MDN - Unary Plus (+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)

## ⚠️ Note Importanti

### Precisione Decimale
JavaScript usa IEEE 754 floating-point, causando imprecisioni:
```javascript
0.1 + 0.2 === 0.3  // false!
0.1 + 0.2          // 0.30000000000000004
```
**Soluzione**: Arrotondare con `toFixed()` o `Math.round()`

### Divisione per Zero
JavaScript non genera errore ma restituisce `Infinity`:
```javascript
5 / 0    // Infinity
-5 / 0   // -Infinity
0 / 0    // NaN
```
**Best Practice**: Validare divisore prima dell'operazione

### Conversione Implicita
Operatori convertono automaticamente i tipi:
```javascript
'5' + 3      // "53" (string)
'5' - 3      // 2 (number)
'5' * '2'    // 10 (number)
```
**Best Practice**: Usare conversione esplicita (`Number()`, `String()`)

### Incremento/Decremento
Differenza postfisso vs prefisso può causare confusione:
```javascript
let x = 5;
let y = x++;  // y = 5, x = 6
let z = ++x;  // z = 7, x = 7
```
**Best Practice**: Evitare in espressioni complesse

### Precedenza Operatori
Conoscere l'ordine è fondamentale:
```javascript
2 + 3 * 4        // 14 (non 20!)
(2 + 3) * 4      // 20
```
**Best Practice**: Usare parentesi per chiarezza

## 🛠️ Funzioni Utili da Provare

```javascript
// Arrotondamento sicuro
function round(num, decimals = 2) {
  return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

// Divisione sicura
function safeDivide(a, b, defaultValue = 0) {
  if (b === 0) return defaultValue;
  return a / b;
}

// Verifica numero pari
function isEven(n) {
  return n % 2 === 0;
}

// Calcola percentuale
function percentage(value, total) {
  return (value / total) * 100;
}

// Potenza sicura (evita overflow)
function safePower(base, exp, maxResult = Number.MAX_SAFE_INTEGER) {
  const result = base ** exp;
  if (!Number.isFinite(result) || result > maxResult) {
    throw new Error("Overflow");
  }
  return result;
}

// Conversione con validazione
function toNumber(value) {
  const num = +value;
  if (Number.isNaN(num)) {
    throw new Error("Not a valid number");
  }
  return num;
}
```

## 📊 Tabella Riepilogativa

| Operatore | Descrizione | Esempio | Risultato | Note |
|-----------|-------------|---------|-----------|------|
| `+` | Addizione | `5 + 3` | `8` | Concatena stringhe |
| `-` | Sottrazione | `5 - 3` | `2` | Sempre converte a numero |
| `*` | Moltiplicazione | `5 * 3` | `15` | Converte a numero |
| `/` | Divisione | `10 / 2` | `5` | Non divisione intera |
| `%` | Modulo | `10 % 3` | `1` | Resto divisione |
| `**` | Esponente | `2 ** 3` | `8` | ES2016+ |
| `++` | Incremento | `x++` | `x+1` | Pre/Post diversi |
| `--` | Decremento | `x--` | `x-1` | Pre/Post diversi |
| `+` (unario) | Converti a numero | `+'5'` | `5` | Rapido ma meno chiaro |
| `-` (unario) | Nega | `-5` | `-5` | Converte e nega |

## 🎯 Obiettivi di Apprendimento

Dopo aver studiato questi esempi, dovresti essere in grado di:

- ✅ Usare tutti gli operatori aritmetici correttamente
- ✅ Comprendere e gestire la conversione implicita
- ✅ Prevedere il comportamento con valori speciali (NaN, Infinity)
- ✅ Gestire problemi di precisione decimale
- ✅ Distinguere tra operatori simili (++x vs x++, + vs - unario)
- ✅ Applicare la precedenza corretta nelle espressioni
- ✅ Scrivere codice matematico chiaro e manutenibile
- ✅ Validare input e gestire casi limite
- ✅ Scegliere l'operatore giusto per ogni situazione

---

[Torna alla teoria](../01_Operatori_Aritmetici.md) | [Vai al prossimo: Operatori di Confronto](../02_Operatori_Confronto.md)
