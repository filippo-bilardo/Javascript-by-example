/**
 * 02.02 - Cleanup delle Risorse con Finally
 * 
 * Il caso d'uso più importante di finally: garantire il rilascio
 * delle risorse (file, connessioni, lock, etc.)
 */

console.log("=== CLEANUP RISORSE CON FINALLY ===\n");

// ============================================
// CASO 1: Gestione File (simulato)
// ============================================
console.log("📋 CASO 1: GESTIONE FILE\n");

class FileHandle {
    constructor(filename) {
        this.filename = filename;
        this.isOpen = false;
    }
    
    open() {
        console.log(`📂 Apertura file: ${this.filename}`);
        this.isOpen = true;
    }
    
    read() {
        if (!this.isOpen) {
            throw new Error("File non aperto!");
        }
        console.log(`📖 Lettura da: ${this.filename}`);
        return "contenuto del file";
    }
    
    close() {
        if (this.isOpen) {
            console.log(`📁 Chiusura file: ${this.filename}`);
            this.isOpen = false;
        }
    }
}

function readFileWithFinally(filename, simulateError = false) {
    const file = new FileHandle(filename);
    
    try {
        file.open();
        
        if (simulateError) {
            throw new Error("Errore durante la lettura!");
        }
        
        const content = file.read();
        console.log("✅ Contenuto:", content);
        return content;
        
    } catch (error) {
        console.error("❌ Errore:", error.message);
        return null;
        
    } finally {
        // ✅ Il file viene SEMPRE chiuso
        file.close();
        console.log("🔒 Risorsa rilasciata nel finally\n");
    }
}

console.log("Test 1.1 - Lettura normale:");
readFileWithFinally("data.txt", false);

console.log("Test 1.2 - Con errore:");
readFileWithFinally("data.txt", true);

console.log("=".repeat(50) + "\n");

// ============================================
// CASO 2: Connessione Database (simulato)
// ============================================
console.log("📋 CASO 2: CONNESSIONE DATABASE\n");

class DatabaseConnection {
    constructor(dbName) {
        this.dbName = dbName;
        this.connected = false;
    }
    
    connect() {
        console.log(`🔌 Connessione a DB: ${this.dbName}`);
        this.connected = true;
    }
    
    query(sql) {
        if (!this.connected) {
            throw new Error("Database non connesso!");
        }
        console.log(`🔍 Query: ${sql}`);
        return [{ id: 1, name: "Mario" }];
    }
    
    disconnect() {
        if (this.connected) {
            console.log(`🔌 Disconnessione da: ${this.dbName}`);
            this.connected = false;
        }
    }
}

function executeQuery(sql, simulateError = false) {
    const db = new DatabaseConnection("myapp_db");
    
    try {
        db.connect();
        
        if (simulateError) {
            throw new Error("Query fallita!");
        }
        
        const results = db.query(sql);
        console.log("✅ Risultati:", results);
        return results;
        
    } catch (error) {
        console.error("❌ Errore database:", error.message);
        return [];
        
    } finally {
        // ✅ La connessione viene SEMPRE chiusa
        db.disconnect();
        console.log("🔒 Connessione chiusa\n");
    }
}

console.log("Test 2.1 - Query normale:");
executeQuery("SELECT * FROM users", false);

console.log("Test 2.2 - Query con errore:");
executeQuery("SELECT * FROM users", true);

console.log("=".repeat(50) + "\n");

// ============================================
// CASO 3: Timer e Cleanup
// ============================================
console.log("📋 CASO 3: TIMER E CLEANUP\n");

function operationWithTimer(duration, simulateError = false) {
    let timerId = null;
    
    try {
        console.log("⏱️  Avvio timer...");
        timerId = setTimeout(() => {
            console.log("Timer scaduto!");
        }, duration);
        
        console.log("🔄 Esecuzione operazione...");
        
        if (simulateError) {
            throw new Error("Operazione fallita!");
        }
        
        console.log("✅ Operazione completata");
        
    } catch (error) {
        console.error("❌ Errore:", error.message);
        
    } finally {
        // ✅ Il timer viene SEMPRE cancellato
        if (timerId) {
            clearTimeout(timerId);
            console.log("⏹️  Timer cancellato nel finally");
        }
        console.log("🔒 Cleanup completato\n");
    }
}

console.log("Test 3.1 - Operazione normale:");
operationWithTimer(1000, false);

console.log("Test 3.2 - Con errore:");
operationWithTimer(1000, true);

console.log("=".repeat(50) + "\n");

// ============================================
// CASO 4: Lock/Semaforo (simulato)
// ============================================
console.log("📋 CASO 4: LOCK/SEMAFORO\n");

class ResourceLock {
    constructor(resourceName) {
        this.resourceName = resourceName;
        this.locked = false;
    }
    
    acquire() {
        if (this.locked) {
            throw new Error("Risorsa già bloccata!");
        }
        console.log(`🔒 Lock acquisito: ${this.resourceName}`);
        this.locked = true;
    }
    
    release() {
        if (this.locked) {
            console.log(`🔓 Lock rilasciato: ${this.resourceName}`);
            this.locked = false;
        }
    }
}

function criticalSection(lock, simulateError = false) {
    try {
        lock.acquire();
        
        console.log("⚙️  Esecuzione sezione critica...");
        
        if (simulateError) {
            throw new Error("Errore in sezione critica!");
        }
        
        console.log("✅ Sezione critica completata");
        
    } catch (error) {
        console.error("❌ Errore:", error.message);
        
    } finally {
        // ✅ Il lock viene SEMPRE rilasciato
        lock.release();
        console.log("🔒 Lock gestito nel finally\n");
    }
}

const sharedLock = new ResourceLock("shared_resource");

console.log("Test 4.1 - Operazione normale:");
criticalSection(sharedLock, false);

console.log("Test 4.2 - Con errore:");
criticalSection(sharedLock, true);

console.log("=".repeat(50) + "\n");

// ============================================
// BEST PRACTICE: Cleanup Pattern
// ============================================
console.log("💡 BEST PRACTICE - CLEANUP PATTERN:\n");

console.log(`
✅ USA FINALLY PER:
   - Chiudere file aperti
   - Disconnettere database
   - Cancellare timer/interval
   - Rilasciare lock/mutex
   - Rimuovere event listener
   - Ripristinare stato UI
   - Logging finale

❌ NON SERVE FINALLY PER:
   - Semplice gestione errori
   - Return di valori
   - Logica business normale
`);
