/**
 * 03.05 - Casi Pratici con Oggetto Error
 * 
 * Esempi reali di utilizzo delle proprietà e tipi di Error
 */

console.log("=== CASI PRATICI OGGETTO ERROR ===\n");

// ============================================
// CASO 1: Logging Strutturato
// ============================================
console.log("📋 CASO 1: LOGGING STRUTTURATO\n");

class Logger {
    static levels = {
        ERROR: 'ERROR',
        WARN: 'WARN',
        INFO: 'INFO'
    };
    
    static formatError(error, context = {}) {
        return {
            level: this.levels.ERROR,
            timestamp: new Date().toISOString(),
            error: {
                name: error.name,
                message: error.message,
                stack: error.stack.split('\n').slice(0, 3)
            },
            context: context
        };
    }
    
    static error(error, context = {}) {
        const log = this.formatError(error, context);
        console.log(JSON.stringify(log, null, 2));
    }
}

// Test
function riskyOperation() {
    try {
        const data = null;
        return data.property;
    } catch (error) {
        Logger.error(error, {
            operation: 'riskyOperation',
            userId: 123,
            requestId: 'req-456'
        });
    }
}

riskyOperation();

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// CASO 2: Error Monitoring/Tracking
// ============================================
console.log("📋 CASO 2: ERROR MONITORING\n");

class ErrorMonitor {
    constructor() {
        this.errors = [];
        this.errorCounts = new Map();
    }
    
    track(error, metadata = {}) {
        // Registra errore
        this.errors.push({
            timestamp: new Date(),
            error: {
                name: error.name,
                message: error.message
            },
            metadata
        });
        
        // Conta per tipo
        const count = this.errorCounts.get(error.name) || 0;
        this.errorCounts.set(error.name, count + 1);
        
        console.log(`📊 Errore tracciato: ${error.name}`);
        console.log(`   Totale di questo tipo: ${count + 1}`);
    }
    
    getStats() {
        return {
            totalErrors: this.errors.length,
            byType: Object.fromEntries(this.errorCounts),
            recent: this.errors.slice(-5)
        };
    }
    
    getMostCommon() {
        if (this.errorCounts.size === 0) return null;
        
        let max = 0;
        let mostCommon = null;
        
        for (const [name, count] of this.errorCounts) {
            if (count > max) {
                max = count;
                mostCommon = name;
            }
        }
        
        return { name: mostCommon, count: max };
    }
}

const monitor = new ErrorMonitor();

// Simula vari errori
try { null.prop; } catch (e) { monitor.track(e, { source: 'module-A' }); }
try { undefined.method(); } catch (e) { monitor.track(e, { source: 'module-B' }); }
try { let x = notDefined; } catch (e) { monitor.track(e, { source: 'module-C' }); }
try { null.value; } catch (e) { monitor.track(e, { source: 'module-A' }); }

console.log("\n📊 Statistiche:");
console.log(JSON.stringify(monitor.getStats(), null, 2));

console.log("\n🔥 Errore più comune:");
console.log(monitor.getMostCommon());

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// CASO 3: User-Friendly Error Messages
// ============================================
console.log("📋 CASO 3: MESSAGGI USER-FRIENDLY\n");

class ErrorTranslator {
    static messages = {
        'TypeError': {
            default: 'Si è verificato un errore nei dati',
            patterns: [
                {
                    match: /Cannot read propert(y|ies) of null/,
                    message: 'Dati non disponibili. Riprova più tardi.'
                },
                {
                    match: /is not a function/,
                    message: 'Operazione non supportata.'
                }
            ]
        },
        'ReferenceError': {
            default: 'Elemento non trovato',
            patterns: []
        },
        'NetworkError': {
            default: 'Problemi di connessione',
            patterns: []
        }
    };
    
    static translate(error) {
        const config = this.messages[error.name];
        
        if (!config) {
            return 'Si è verificato un errore. Riprova.';
        }
        
        // Cerca pattern specifico
        for (const pattern of config.patterns) {
            if (pattern.match.test(error.message)) {
                return pattern.message;
            }
        }
        
        return config.default;
    }
    
    static getUserMessage(error, showTechnical = false) {
        const friendly = this.translate(error);
        
        if (showTechnical) {
            return `${friendly}\n(Dettagli tecnici: ${error.message})`;
        }
        
        return friendly;
    }
}

// Test traduzione
const testErrors = [
    new TypeError("Cannot read property 'name' of null"),
    new TypeError("user.save is not a function"),
    new ReferenceError("config is not defined")
];

testErrors.forEach(error => {
    console.log(`\nErrore tecnico: ${error.message}`);
    console.log(`Messaggio utente: ${ErrorTranslator.getUserMessage(error)}`);
});

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// CASO 4: Error Recovery con Stack Info
// ============================================
console.log("📋 CASO 4: RECOVERY CON STACK INFO\n");

class StackAnalyzer {
    static getCallingFunction(error) {
        const stack = error.stack.split('\n');
        // Prima riga è il messaggio, seconda è dove è stato lanciato
        const callerLine = stack[2] || stack[1];
        
        const match = callerLine.match(/at\s+([^\s]+)/);
        return match ? match[1] : 'unknown';
    }
    
    static getLineNumber(error) {
        const stack = error.stack.split('\n');
        const line = stack[1];
        
        const match = line.match(/:(\d+):\d+/);
        return match ? parseInt(match[1]) : null;
    }
    
    static getFilePath(error) {
        const stack = error.stack.split('\n');
        const line = stack[1];
        
        const match = line.match(/\((.+?):\d+:\d+\)/);
        return match ? match[1] : null;
    }
}

function operationA() {
    try {
        const x = null;
        return x.value;
    } catch (error) {
        const caller = StackAnalyzer.getCallingFunction(error);
        const line = StackAnalyzer.getLineNumber(error);
        
        console.log(`❌ Errore in: ${caller}`);
        console.log(`   Riga: ${line}`);
        console.log(`   Tipo: ${error.name}`);
        console.log(`   → Applicando recovery strategy...\n`);
        
        return null; // Fallback
    }
}

operationA();

console.log("=".repeat(50) + "\n");

// ============================================
// CASO 5: Error Notification System
// ============================================
console.log("📋 CASO 5: NOTIFICATION SYSTEM\n");

class ErrorNotifier {
    constructor() {
        this.subscribers = [];
    }
    
    subscribe(handler) {
        this.subscribers.push(handler);
    }
    
    notify(error, severity = 'medium') {
        const notification = {
            timestamp: new Date(),
            error: {
                name: error.name,
                message: error.message
            },
            severity,
            metadata: this.extractMetadata(error)
        };
        
        this.subscribers.forEach(handler => {
            handler(notification);
        });
    }
    
    extractMetadata(error) {
        return {
            type: error.name,
            hasStack: !!error.stack,
            stackFrames: error.stack ? error.stack.split('\n').length : 0
        };
    }
}

// Setup notifier
const notifier = new ErrorNotifier();

// Subscriber: Console logger
notifier.subscribe(notification => {
    console.log(`📧 [${notification.severity.toUpperCase()}] Notifica:`);
    console.log(`   ${notification.error.name}: ${notification.error.message}`);
});

// Subscriber: Alert for critical
notifier.subscribe(notification => {
    if (notification.severity === 'critical') {
        console.log(`🚨 ALERT CRITICO!`);
        console.log(`   Richiesta intervento immediato`);
    }
});

// Test notifications
console.log("Test 1: Errore normale");
notifier.notify(new TypeError("Tipo non valido"), 'medium');

console.log("\nTest 2: Errore critico");
notifier.notify(new Error("Database connection lost"), 'critical');

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// CASO 6: Error Serialization per API
// ============================================
console.log("📋 CASO 6: SERIALIZATION PER API\n");

class ErrorSerializer {
    static toJSON(error, includeStack = false) {
        const serialized = {
            error: true,
            type: error.name,
            message: error.message,
            timestamp: new Date().toISOString()
        };
        
        // Aggiungi proprietà custom
        Object.keys(error).forEach(key => {
            if (!['name', 'message', 'stack'].includes(key)) {
                serialized[key] = error[key];
            }
        });
        
        if (includeStack) {
            serialized.stack = error.stack.split('\n').slice(0, 5);
        }
        
        return serialized;
    }
    
    static toHTTPResponse(error) {
        const status = this.getHTTPStatus(error);
        const body = this.toJSON(error, false);
        
        return {
            status,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body, null, 2)
        };
    }
    
    static getHTTPStatus(error) {
        if (error.name === 'ValidationError') return 400;
        if (error.name === 'AuthenticationError') return 401;
        if (error.name === 'AuthorizationError') return 403;
        if (error.name === 'NotFoundError') return 404;
        return 500;
    }
}

// Test serialization
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
    }
}

const validationError = new ValidationError("Email non valida", "email");

console.log("JSON serialization:");
console.log(ErrorSerializer.toJSON(validationError, false));

console.log("\nHTTP Response:");
console.log(ErrorSerializer.toHTTPResponse(validationError));

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// RIEPILOGO
// ============================================
console.log("💡 RIEPILOGO CASI D'USO:\n");

console.log(`
✅ LOGGING:
   - Usa error.name per categorizzare
   - Usa error.message per descrizione
   - Usa error.stack per debugging
   - Aggiungi context/metadata

✅ MONITORING:
   - Traccia frequenza per tipo
   - Identifica pattern comuni
   - Calcola statistiche
   - Alert su soglie

✅ USER EXPERIENCE:
   - Traduci messaggi tecnici
   - Nascondi dettagli implementativi
   - Fornisci azioni correttive
   - Mostra progressi recovery

✅ API RESPONSES:
   - Serializza in JSON
   - Map a HTTP status codes
   - Includi error codes
   - Documenta struttura

✅ DEBUGGING:
   - Analizza stack trace
   - Identifica caller
   - Arricchisci con contesto
   - Log strutturato

❌ EVITA:
   - Esporre stack all'utente
   - Perdere informazioni
   - Log senza struttura
   - Ignorare error.name
`);
