/**
 * 03.03 - Creazione Errori Custom
 * 
 * Come creare classi di errore personalizzate per la tua applicazione
 */

console.log("=== ERRORI CUSTOM ===\n");

// ============================================
// 1. Errore Custom Base (ES6 Class)
// ============================================
console.log("📋 1. ERRORE CUSTOM BASE\n");

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

try {
    throw new ValidationError("Campo email non valido");
} catch (error) {
    console.log("name:", error.name);
    console.log("message:", error.message);
    console.log("instanceof ValidationError:", error instanceof ValidationError);
    console.log("instanceof Error:", error instanceof Error);
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// 2. Errore con Proprietà Aggiuntive
// ============================================
console.log("📋 2. ERRORE CON PROPRIETÀ CUSTOM\n");

class DatabaseError extends Error {
    constructor(message, code, query) {
        super(message);
        this.name = "DatabaseError";
        this.code = code;
        this.query = query;
        this.timestamp = new Date();
    }
}

try {
    throw new DatabaseError(
        "Connessione database fallita",
        "DB_CONN_001",
        "SELECT * FROM users"
    );
} catch (error) {
    console.log("name:", error.name);
    console.log("message:", error.message);
    console.log("code:", error.code);
    console.log("query:", error.query);
    console.log("timestamp:", error.timestamp);
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// 3. Gerarchia di Errori Custom
// ============================================
console.log("📋 3. GERARCHIA DI ERRORI\n");

class ApplicationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ApplicationError";
    }
}

class AuthenticationError extends ApplicationError {
    constructor(message, username) {
        super(message);
        this.name = "AuthenticationError";
        this.username = username;
    }
}

class AuthorizationError extends ApplicationError {
    constructor(message, requiredRole) {
        super(message);
        this.name = "AuthorizationError";
        this.requiredRole = requiredRole;
    }
}

class NotFoundError extends ApplicationError {
    constructor(resource, id) {
        super(`${resource} con id ${id} non trovato`);
        this.name = "NotFoundError";
        this.resource = resource;
        this.id = id;
    }
}

// Test gerarchia
function testErrorHierarchy(error) {
    console.log(`\nTest: ${error.name}`);
    console.log(`  message: ${error.message}`);
    console.log(`  instanceof NotFoundError: ${error instanceof NotFoundError}`);
    console.log(`  instanceof AuthenticationError: ${error instanceof AuthenticationError}`);
    console.log(`  instanceof ApplicationError: ${error instanceof ApplicationError}`);
    console.log(`  instanceof Error: ${error instanceof Error}`);
}

testErrorHierarchy(new NotFoundError("User", 123));
testErrorHierarchy(new AuthenticationError("Credenziali non valide", "mario"));

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// 4. Errore con Metodi Helper
// ============================================
console.log("📋 4. ERRORE CON METODI HELPER\n");

class HTTPError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = "HTTPError";
        this.statusCode = statusCode;
    }
    
    isClientError() {
        return this.statusCode >= 400 && this.statusCode < 500;
    }
    
    isServerError() {
        return this.statusCode >= 500 && this.statusCode < 600;
    }
    
    toJSON() {
        return {
            error: this.name,
            message: this.message,
            statusCode: this.statusCode
        };
    }
}

const error404 = new HTTPError("Pagina non trovata", 404);
const error500 = new HTTPError("Errore interno", 500);

console.log("Error 404:");
console.log("  isClientError:", error404.isClientError());
console.log("  isServerError:", error404.isServerError());
console.log("  JSON:", JSON.stringify(error404.toJSON()));

console.log("\nError 500:");
console.log("  isClientError:", error500.isClientError());
console.log("  isServerError:", error500.isServerError());
console.log("  JSON:", JSON.stringify(error500.toJSON()));

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// 5. Factory Pattern per Errori
// ============================================
console.log("📋 5. FACTORY PATTERN\n");

class ErrorFactory {
    static createValidationError(field, value) {
        return new ValidationError(
            `Valore "${value}" non valido per il campo "${field}"`
        );
    }
    
    static createNotFoundError(resource, id) {
        return new NotFoundError(resource, id);
    }
    
    static createDatabaseError(message, code) {
        return new DatabaseError(message, code, null);
    }
}

// Uso del factory
const errors = [
    ErrorFactory.createValidationError("email", "invalid@"),
    ErrorFactory.createNotFoundError("Product", 456),
    ErrorFactory.createDatabaseError("Connection timeout", "DB_TIMEOUT")
];

errors.forEach((error, index) => {
    console.log(`Error ${index + 1}:`);
    console.log(`  name: ${error.name}`);
    console.log(`  message: ${error.message}`);
    console.log();
});

console.log("=".repeat(50) + "\n");

// ============================================
// 6. Esempio Pratico: Sistema di Login
// ============================================
console.log("📋 6. ESEMPIO PRATICO - SISTEMA LOGIN\n");

class LoginError extends Error {
    constructor(message, errorCode) {
        super(message);
        this.name = "LoginError";
        this.errorCode = errorCode;
    }
}

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.locked = false;
        this.attempts = 0;
    }
}

class LoginService {
    constructor() {
        this.users = new Map([
            ['mario', new User('mario', 'password123')],
            ['luigi', new User('luigi', 'secret456')]
        ]);
        this.maxAttempts = 3;
    }
    
    login(username, password) {
        // Verifica se utente esiste
        if (!this.users.has(username)) {
            throw new LoginError(
                "Utente non trovato",
                "USER_NOT_FOUND"
            );
        }
        
        const user = this.users.get(username);
        
        // Verifica se account è bloccato
        if (user.locked) {
            throw new LoginError(
                "Account bloccato per troppi tentativi",
                "ACCOUNT_LOCKED"
            );
        }
        
        // Verifica password
        if (user.password !== password) {
            user.attempts++;
            
            if (user.attempts >= this.maxAttempts) {
                user.locked = true;
                throw new LoginError(
                    `Password errata. Account bloccato dopo ${this.maxAttempts} tentativi`,
                    "ACCOUNT_LOCKED"
                );
            }
            
            throw new LoginError(
                `Password errata. Tentativi rimasti: ${this.maxAttempts - user.attempts}`,
                "INVALID_PASSWORD"
            );
        }
        
        // Login riuscito
        user.attempts = 0;
        return { success: true, user: username };
    }
}

const loginService = new LoginService();

function attemptLogin(username, password) {
    try {
        console.log(`\nTentativo login: ${username}`);
        const result = loginService.login(username, password);
        console.log("✅ Login riuscito:", result);
    } catch (error) {
        if (error instanceof LoginError) {
            console.log(`❌ Login fallito [${error.errorCode}]`);
            console.log(`   ${error.message}`);
        } else {
            console.log("❌ Errore imprevisto:", error.message);
        }
    }
}

// Test vari scenari
attemptLogin('nonexist', 'any');         // USER_NOT_FOUND
attemptLogin('mario', 'wrong1');         // INVALID_PASSWORD (tentativo 1)
attemptLogin('mario', 'wrong2');         // INVALID_PASSWORD (tentativo 2)
attemptLogin('mario', 'wrong3');         // ACCOUNT_LOCKED
attemptLogin('mario', 'password123');    // ACCOUNT_LOCKED (anche con password giusta)
attemptLogin('luigi', 'secret456');      // SUCCESS

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// BEST PRACTICES
// ============================================
console.log("💡 BEST PRACTICES ERRORI CUSTOM:\n");

console.log(`
✅ CREA ERRORI CUSTOM PER:
   - Domini specifici della tua app
   - Errori che necessitano info extra
   - Gestione errori più fine-grained
   - API responses strutturate

✅ STRUTTURA CONSIGLIATA:
   class MyError extends Error {
       constructor(message, ...params) {
           super(message);
           this.name = "MyError";
           // Proprietà aggiuntive
           // Metadata
           // Timestamp
       }
   }

✅ CONVENZIONI:
   - Nome classe termina con "Error"
   - Estende sempre Error o sottoclasse
   - Imposta sempre this.name
   - Aggiungi solo proprietà utili
   - Considera metodi helper (toJSON, is*)

❌ EVITA:
   - Troppi tipi di errori (complessità)
   - Errori senza info utili aggiuntive
   - Dimenticare di impostare this.name
   - Perdere la stack trace

📊 QUANDO USARE:
   ✅ Errori di validazione
   ✅ Errori di business logic
   ✅ Errori di autenticazione/autorizzazione
   ✅ Errori HTTP/API
   ✅ Errori di database
   ❌ Errori generici (usa Error standard)
`);
