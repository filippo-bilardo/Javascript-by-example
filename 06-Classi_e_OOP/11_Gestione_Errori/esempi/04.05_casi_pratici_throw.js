/**
 * 04.05 - Casi Pratici con Throw
 * 
 * Esempi reali di utilizzo di throw nelle applicazioni
 */

console.log("=== CASI PRATICI CON THROW ===\n");

// ============================================
// CASO 1: API Client con Throw
// ============================================
console.log("📋 CASO 1: API CLIENT\n");

class HTTPError extends Error {
    constructor(status, message, response) {
        super(message);
        this.name = "HTTPError";
        this.status = status;
        this.response = response;
    }
}

class APIClient {
    async request(endpoint, options = {}) {
        console.log(`  🌐 Richiesta: ${options.method || 'GET'} ${endpoint}`);
        
        // Simula risposta HTTP
        const mockResponse = this.mockFetch(endpoint);
        
        // Lancia errore per status non OK
        if (mockResponse.status >= 400) {
            throw new HTTPError(
                mockResponse.status,
                `HTTP ${mockResponse.status}: ${mockResponse.statusText}`,
                mockResponse.body
            );
        }
        
        return mockResponse.body;
    }
    
    mockFetch(endpoint) {
        if (endpoint === '/users/999') {
            return {
                status: 404,
                statusText: 'Not Found',
                body: { error: 'User not found' }
            };
        }
        if (endpoint === '/protected') {
            return {
                status: 401,
                statusText: 'Unauthorized',
                body: { error: 'Authentication required' }
            };
        }
        return {
            status: 200,
            statusText: 'OK',
            body: { data: 'success' }
        };
    }
}

const api = new APIClient();

async function testAPI() {
    // Test 1: Successo
    console.log("Test 1: Richiesta valida");
    try {
        const data = await api.request('/users/1');
        console.log("  ✅ Risposta:", data);
    } catch (error) {
        console.log(`  ❌ ${error.message}`);
    }
    
    // Test 2: 404
    console.log("\nTest 2: Risorsa non trovata");
    try {
        const data = await api.request('/users/999');
        console.log("  ✅ Risposta:", data);
    } catch (error) {
        if (error instanceof HTTPError) {
            console.log(`  ❌ HTTP ${error.status}: ${error.response.error}`);
        }
    }
    
    // Test 3: 401
    console.log("\nTest 3: Non autorizzato");
    try {
        const data = await api.request('/protected');
        console.log("  ✅ Risposta:", data);
    } catch (error) {
        if (error instanceof HTTPError && error.status === 401) {
            console.log(`  🔒 Autenticazione richiesta`);
        }
    }
}

(async () => {
    await testAPI();
    
    console.log("\n" + "=".repeat(50) + "\n");
    
    await continueExamples();
})();

async function continueExamples() {

// ============================================
// CASO 2: Database Operations
// ============================================
console.log("📋 CASO 2: DATABASE OPERATIONS\n");

class DatabaseError extends Error {
    constructor(message, code, query) {
        super(message);
        this.name = "DatabaseError";
        this.code = code;
        this.query = query;
    }
}

class Database {
    constructor() {
        this.connected = false;
        this.data = new Map();
    }
    
    connect() {
        if (!this.connected) {
            throw new DatabaseError(
                "Database non connesso",
                "DB_NOT_CONNECTED",
                null
            );
        }
    }
    
    async query(sql) {
        this.connect();
        
        console.log(`  📊 Query: ${sql.substring(0, 50)}...`);
        
        // Simula query error
        if (sql.includes('DROP')) {
            throw new DatabaseError(
                "Operazione DROP non permessa",
                "FORBIDDEN_OPERATION",
                sql
            );
        }
        
        if (sql.includes('invalid_table')) {
            throw new DatabaseError(
                "Tabella non esistente",
                "TABLE_NOT_FOUND",
                sql
            );
        }
        
        return [{ id: 1, name: "Result" }];
    }
    
    async transaction(operations) {
        console.log("  🔄 Inizio transazione");
        
        try {
            const results = [];
            
            for (const op of operations) {
                const result = await this.query(op);
                results.push(result);
            }
            
            console.log("  ✅ Commit transazione");
            return results;
            
        } catch (error) {
            console.log("  ❌ Rollback transazione");
            throw new DatabaseError(
                `Transazione fallita: ${error.message}`,
                "TRANSACTION_FAILED",
                error.query
            );
        }
    }
}

const db = new Database();
db.connected = true;

console.log("Test 1: Query valida");
try {
    await db.query("SELECT * FROM users");
    console.log("  ✅ Query eseguita");
} catch (error) {
    console.log(`  ❌ ${error.message}`);
}

console.log("\nTest 2: Query non permessa");
try {
    await db.query("DROP TABLE users");
} catch (error) {
    if (error instanceof DatabaseError) {
        console.log(`  ❌ [${error.code}] ${error.message}`);
    }
}

console.log("\nTest 3: Transazione con errore");
try {
    await db.transaction([
        "INSERT INTO users VALUES (1, 'Mario')",
        "INSERT INTO invalid_table VALUES (2, 'Luigi')",
        "INSERT INTO users VALUES (3, 'Peach')"
    ]);
} catch (error) {
    if (error instanceof DatabaseError) {
        console.log(`  ❌ ${error.message}`);
        console.log(`     Code: ${error.code}`);
    }
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// CASO 3: File System Operations
// ============================================
console.log("📋 CASO 3: FILE SYSTEM OPERATIONS\n");

class FileSystemError extends Error {
    constructor(message, code, path) {
        super(message);
        this.name = "FileSystemError";
        this.code = code;
        this.path = path;
    }
}

class FileSystem {
    constructor() {
        this.files = new Map([
            ['/data/config.json', '{"port": 3000}'],
            ['/data/users.json', '[]']
        ]);
    }
    
    readFile(path) {
        console.log(`  📂 Leggo: ${path}`);
        
        if (!this.files.has(path)) {
            throw new FileSystemError(
                `File non trovato: ${path}`,
                "ENOENT",
                path
            );
        }
        
        return this.files.get(path);
    }
    
    writeFile(path, content) {
        console.log(`  💾 Scrivo: ${path}`);
        
        if (path.startsWith('/readonly/')) {
            throw new FileSystemError(
                `Permesso negato: ${path}`,
                "EACCES",
                path
            );
        }
        
        if (content.length > 1000000) {
            throw new FileSystemError(
                `File troppo grande: ${content.length} bytes`,
                "EFBIG",
                path
            );
        }
        
        this.files.set(path, content);
        return true;
    }
    
    readJSON(path) {
        const content = this.readFile(path);
        
        try {
            return JSON.parse(content);
        } catch (error) {
            throw new FileSystemError(
                `JSON non valido in ${path}`,
                "EJSONPARSE",
                path
            );
        }
    }
}

const fs = new FileSystem();

console.log("Test 1: Lettura file esistente");
try {
    const content = fs.readFile('/data/config.json');
    console.log("  ✅ Contenuto letto");
} catch (error) {
    console.log(`  ❌ ${error.message}`);
}

console.log("\nTest 2: File non trovato");
try {
    fs.readFile('/data/missing.txt');
} catch (error) {
    if (error instanceof FileSystemError) {
        console.log(`  ❌ [${error.code}] ${error.message}`);
    }
}

console.log("\nTest 3: Permesso negato");
try {
    fs.writeFile('/readonly/data.txt', 'content');
} catch (error) {
    if (error instanceof FileSystemError && error.code === 'EACCES') {
        console.log(`  🔒 Accesso negato a: ${error.path}`);
    }
}

console.log("\nTest 4: JSON parsing");
fs.files.set('/data/bad.json', '{invalid json}');
try {
    fs.readJSON('/data/bad.json');
} catch (error) {
    if (error instanceof FileSystemError) {
        console.log(`  ❌ [${error.code}] ${error.message}`);
    }
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// CASO 4: Business Logic Validation
// ============================================
console.log("📋 CASO 4: BUSINESS LOGIC\n");

class BusinessRuleError extends Error {
    constructor(message, rule) {
        super(message);
        this.name = "BusinessRuleError";
        this.rule = rule;
    }
}

class OrderService {
    processOrder(order) {
        console.log(`  📦 Processo ordine #${order.id}`);
        
        // Regola 1: Importo minimo
        if (order.total < 10) {
            throw new BusinessRuleError(
                "Importo minimo ordine: €10",
                "MIN_ORDER_AMOUNT"
            );
        }
        
        // Regola 2: Stock disponibile
        if (order.quantity > order.stock) {
            throw new BusinessRuleError(
                `Stock insufficiente (richiesto: ${order.quantity}, disponibile: ${order.stock})`,
                "INSUFFICIENT_STOCK"
            );
        }
        
        // Regola 3: Limite credito
        if (order.customer.debt > 1000) {
            throw new BusinessRuleError(
                "Limite credito superato",
                "CREDIT_LIMIT_EXCEEDED"
            );
        }
        
        // Regola 4: Orario operativo
        const hour = new Date().getHours();
        if (hour < 9 || hour > 18) {
            throw new BusinessRuleError(
                "Ordini accettati solo 9:00-18:00",
                "OUTSIDE_BUSINESS_HOURS"
            );
        }
        
        console.log("  ✅ Ordine accettato");
        return { success: true, orderId: order.id };
    }
}

const orderService = new OrderService();

const testOrders = [
    { id: 1, total: 5, quantity: 1, stock: 10, customer: { debt: 0 } },
    { id: 2, total: 50, quantity: 100, stock: 10, customer: { debt: 0 } },
    { id: 3, total: 50, quantity: 5, stock: 10, customer: { debt: 2000 } },
    { id: 4, total: 50, quantity: 5, stock: 10, customer: { debt: 0 } }
];

testOrders.forEach((order, i) => {
    console.log(`\nTest ${i + 1}:`);
    try {
        orderService.processOrder(order);
    } catch (error) {
        if (error instanceof BusinessRuleError) {
            console.log(`  ❌ [${error.rule}] ${error.message}`);
        }
    }
});

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// CASO 5: Authentication & Authorization
// ============================================
console.log("📋 CASO 5: AUTH SYSTEM\n");

class AuthenticationError extends Error {
    constructor(message) {
        super(message);
        this.name = "AuthenticationError";
    }
}

class AuthorizationError extends Error {
    constructor(message, requiredRole) {
        super(message);
        this.name = "AuthorizationError";
        this.requiredRole = requiredRole;
    }
}

class AuthService {
    constructor() {
        this.users = new Map([
            ['admin', { password: 'admin123', role: 'admin' }],
            ['user', { password: 'user123', role: 'user' }]
        ]);
        this.currentUser = null;
    }
    
    login(username, password) {
        console.log(`  🔐 Login: ${username}`);
        
        const user = this.users.get(username);
        
        if (!user) {
            throw new AuthenticationError("Utente non trovato");
        }
        
        if (user.password !== password) {
            throw new AuthenticationError("Password errata");
        }
        
        this.currentUser = { username, role: user.role };
        console.log(`  ✅ Login riuscito (role: ${user.role})`);
    }
    
    requireAuth() {
        if (!this.currentUser) {
            throw new AuthenticationError("Autenticazione richiesta");
        }
    }
    
    requireRole(role) {
        this.requireAuth();
        
        if (this.currentUser.role !== role) {
            throw new AuthorizationError(
                `Accesso negato (richiesto: ${role}, hai: ${this.currentUser.role})`,
                role
            );
        }
    }
    
    deleteUser(targetUser) {
        this.requireRole('admin');
        console.log(`  🗑️  Elimino utente: ${targetUser}`);
    }
    
    viewProfile() {
        this.requireAuth();
        console.log(`  👤 Profilo: ${this.currentUser.username}`);
    }
}

const auth = new AuthService();

console.log("Test 1: Login corretto");
try {
    auth.login('user', 'user123');
} catch (error) {
    console.log(`  ❌ ${error.message}`);
}

console.log("\nTest 2: View profile (autenticato)");
try {
    auth.viewProfile();
} catch (error) {
    console.log(`  ❌ ${error.message}`);
}

console.log("\nTest 3: Delete user (non admin)");
try {
    auth.deleteUser('other');
} catch (error) {
    if (error instanceof AuthorizationError) {
        console.log(`  ❌ ${error.message}`);
    }
}

console.log("\nTest 4: Login admin e delete");
try {
    auth.login('admin', 'admin123');
    auth.deleteUser('other');
    console.log("  ✅ Operazione completata");
} catch (error) {
    console.log(`  ❌ ${error.message}`);
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// RIEPILOGO
// ============================================
console.log("💡 RIEPILOGO CASI PRATICI:\n");

console.log(`
✅ PATTERN COMUNI:

1. API CLIENT:
   - HTTPError con status code
   - Throw per status >= 400
   - Informazioni response nell'errore

2. DATABASE:
   - DatabaseError con codici specifici
   - Transaction rollback on error
   - Query info nell'errore

3. FILE SYSTEM:
   - Error codes (ENOENT, EACCES, etc)
   - Path nell'errore
   - Validazione permessi

4. BUSINESS LOGIC:
   - Regole di business → errori specifici
   - Error codes per ogni regola
   - Messaggi user-friendly

5. AUTHENTICATION:
   - AuthenticationError vs AuthorizationError
   - requireAuth/requireRole pattern
   - Info su ruoli richiesti

✅ STRUTTURA ERRORE CUSTOM:

class MyError extends Error {
    constructor(message, ...extraInfo) {
        super(message);
        this.name = "MyError";
        // Aggiungi proprietà utili
        this.code = code;
        this.context = context;
    }
}

✅ BEST PRACTICES:

- Usa errori specifici per domini diversi
- Includi informazioni utili per debugging
- Codici errore per gestione programmatica
- Messaggi chiari per utenti/sviluppatori
- Documenta quali errori lancia ogni metodo
- Gestisci errori al livello appropriato

📊 LIVELLI DI GESTIONE:

[Controller] → User-friendly response
     ↑
[Service] → Business logic validation
     ↑
[Repository] → Database errors
     ↑
[Driver] → Low-level errors
`);

}
