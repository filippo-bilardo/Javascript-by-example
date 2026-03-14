/**
 * 02.05 - Casi Pratici Finally
 * 
 * Esempi reali di utilizzo di finally in situazioni comuni.
 */

console.log("=== CASI PRATICI FINALLY ===\n");

// ============================================
// CASO 1: Loading State in UI
// ============================================
console.log("📋 CASO 1: LOADING STATE (simulato)\n");

class UIComponent {
    constructor(name) {
        this.name = name;
        this.loading = false;
    }
    
    setLoading(state) {
        this.loading = state;
        console.log(`  UI: Loading = ${state}`);
    }
    
    showError(message) {
        console.log(`  UI: Error - ${message}`);
    }
    
    showData(data) {
        console.log(`  UI: Data - ${JSON.stringify(data)}`);
    }
}

async function fetchData(url, shouldFail = false) {
    const ui = new UIComponent('DataPanel');
    
    try {
        // ✅ Attiva loading
        ui.setLoading(true);
        console.log(`🌐 Fetch da: ${url}`);
        
        // Simula delay
        await new Promise(resolve => setTimeout(resolve, 100));
        
        if (shouldFail) {
            throw new Error("Network error!");
        }
        
        const data = { users: ['Mario', 'Luigi'] };
        ui.showData(data);
        return data;
        
    } catch (error) {
        console.error(`❌ Errore: ${error.message}`);
        ui.showError(error.message);
        return null;
        
    } finally {
        // ✅ Disattiva loading SEMPRE
        ui.setLoading(false);
        console.log("🔒 Loading state ripristinato\n");
    }
}

(async () => {
    console.log("Test 1.1 - Fetch riuscito:");
    await fetchData("/api/users", false);
    
    console.log("Test 1.2 - Fetch fallito:");
    await fetchData("/api/users", true);
    
    console.log("=".repeat(50) + "\n");
    
    // ============================================
    // CASO 2: Transaction Database
    // ============================================
    console.log("📋 CASO 2: DATABASE TRANSACTION\n");
    
    class DatabaseTransaction {
        constructor(db) {
            this.db = db;
            this.active = false;
        }
        
        begin() {
            console.log("  📊 BEGIN TRANSACTION");
            this.active = true;
        }
        
        commit() {
            if (this.active) {
                console.log("  ✅ COMMIT");
                this.active = false;
            }
        }
        
        rollback() {
            if (this.active) {
                console.log("  ⏪ ROLLBACK");
                this.active = false;
            }
        }
    }
    
    function transferMoney(fromAccount, toAccount, amount, shouldFail = false) {
        const transaction = new DatabaseTransaction("mydb");
        
        try {
            transaction.begin();
            
            console.log(`  💰 Prelievo ${amount}€ da account ${fromAccount}`);
            
            if (shouldFail) {
                throw new Error("Fondi insufficienti!");
            }
            
            console.log(`  💰 Deposito ${amount}€ su account ${toAccount}`);
            
            transaction.commit();
            console.log("  ✅ Trasferimento completato");
            return true;
            
        } catch (error) {
            console.error(`  ❌ Errore: ${error.message}`);
            transaction.rollback();
            return false;
            
        } finally {
            // ✅ Assicura che la transazione sia sempre chiusa
            if (transaction.active) {
                console.log("  ⚠️  Transazione ancora attiva - rollback di sicurezza");
                transaction.rollback();
            }
            console.log("  🔒 Transazione terminata\n");
        }
    }
    
    console.log("Test 2.1 - Trasferimento OK:");
    transferMoney("ACC001", "ACC002", 100, false);
    
    console.log("Test 2.2 - Trasferimento fallito:");
    transferMoney("ACC001", "ACC002", 1000, true);
    
    console.log("=".repeat(50) + "\n");
    
    // ============================================
    // CASO 3: File Upload con Progress
    // ============================================
    console.log("📋 CASO 3: FILE UPLOAD\n");
    
    class UploadManager {
        constructor() {
            this.uploads = new Map();
        }
        
        start(fileId) {
            console.log(`  📤 Inizio upload: ${fileId}`);
            this.uploads.set(fileId, { progress: 0, active: true });
        }
        
        updateProgress(fileId, progress) {
            const upload = this.uploads.get(fileId);
            if (upload) {
                upload.progress = progress;
                console.log(`  📊 Progress: ${progress}%`);
            }
        }
        
        complete(fileId) {
            console.log(`  ✅ Upload completato: ${fileId}`);
            this.uploads.delete(fileId);
        }
        
        cancel(fileId) {
            console.log(`  ❌ Upload cancellato: ${fileId}`);
            this.uploads.delete(fileId);
        }
    }
    
    async function uploadFile(fileId, shouldFail = false) {
        const manager = new UploadManager();
        
        try {
            manager.start(fileId);
            
            // Simula upload progressivo
            for (let i = 0; i <= 100; i += 25) {
                manager.updateProgress(fileId, i);
                await new Promise(resolve => setTimeout(resolve, 50));
                
                if (shouldFail && i === 50) {
                    throw new Error("Connessione persa!");
                }
            }
            
            manager.complete(fileId);
            return true;
            
        } catch (error) {
            console.error(`  ❌ Errore upload: ${error.message}`);
            return false;
            
        } finally {
            // ✅ Cleanup: rimuovi upload dalla lista SEMPRE
            if (manager.uploads.has(fileId)) {
                manager.cancel(fileId);
            }
            console.log("  🔒 Upload manager pulito\n");
        }
    }
    
    console.log("Test 3.1 - Upload riuscito:");
    await uploadFile("file_001.jpg", false);
    
    console.log("Test 3.2 - Upload fallito:");
    await uploadFile("file_002.jpg", true);
    
    console.log("=".repeat(50) + "\n");
    
    // ============================================
    // CASO 4: Lock su Risorsa Condivisa
    // ============================================
    console.log("📋 CASO 4: LOCK SU RISORSA CONDIVISA\n");
    
    class SharedResource {
        constructor(name) {
            this.name = name;
            this.locked = false;
            this.owner = null;
        }
        
        acquire(ownerId) {
            if (this.locked) {
                throw new Error(`Risorsa già bloccata da ${this.owner}`);
            }
            console.log(`  🔒 Lock acquisito da ${ownerId}`);
            this.locked = true;
            this.owner = ownerId;
        }
        
        release(ownerId) {
            if (this.locked && this.owner === ownerId) {
                console.log(`  🔓 Lock rilasciato da ${ownerId}`);
                this.locked = false;
                this.owner = null;
            }
        }
        
        use(data) {
            console.log(`  ⚙️  Usando risorsa: ${data}`);
        }
    }
    
    function processWithLock(resource, processId, data, shouldFail = false) {
        try {
            resource.acquire(processId);
            
            if (shouldFail) {
                throw new Error("Processing error!");
            }
            
            resource.use(data);
            console.log(`  ✅ Processing completato`);
            return true;
            
        } catch (error) {
            console.error(`  ❌ Errore: ${error.message}`);
            return false;
            
        } finally {
            // ✅ Rilascia SEMPRE il lock
            resource.release(processId);
            console.log("  🔒 Lock gestito nel finally\n");
        }
    }
    
    const printer = new SharedResource("Printer-01");
    
    console.log("Test 4.1 - Processing OK:");
    processWithLock(printer, "Process-A", "document.pdf", false);
    
    console.log("Test 4.2 - Processing fallito:");
    processWithLock(printer, "Process-B", "report.xlsx", true);
    
    console.log("=".repeat(50) + "\n");
    
    // ============================================
    // CASO 5: Logging e Metriche
    // ============================================
    console.log("📋 CASO 5: LOGGING E METRICHE\n");
    
    class OperationLogger {
        constructor(operation) {
            this.operation = operation;
            this.startTime = null;
        }
        
        start() {
            this.startTime = Date.now();
            console.log(`  📝 [${this.operation}] START`);
        }
        
        end(success, error = null) {
            const duration = Date.now() - this.startTime;
            const status = success ? 'SUCCESS' : 'FAILED';
            
            console.log(`  📝 [${this.operation}] ${status}`);
            console.log(`  ⏱️  Duration: ${duration}ms`);
            
            if (error) {
                console.log(`  ❌ Error: ${error.message}`);
            }
        }
    }
    
    function monitoredOperation(opName, shouldFail = false) {
        const logger = new OperationLogger(opName);
        let success = false;
        let error = null;
        
        try {
            logger.start();
            
            // Simula operazione
            const delay = Math.random() * 100;
            const startOp = Date.now();
            while (Date.now() - startOp < delay) {
                // Busy wait
            }
            
            if (shouldFail) {
                throw new Error("Operation failed!");
            }
            
            console.log(`  ✅ Operation completed`);
            success = true;
            return "result";
            
        } catch (err) {
            error = err;
            console.error(`  ❌ Error: ${err.message}`);
            return null;
            
        } finally {
            // ✅ Log SEMPRE le metriche
            logger.end(success, error);
            console.log();
        }
    }
    
    console.log("Test 5.1 - Operazione riuscita:");
    monitoredOperation("DataSync", false);
    
    console.log("Test 5.2 - Operazione fallita:");
    monitoredOperation("DataSync", true);
    
    console.log("=".repeat(50) + "\n");
    
    // ============================================
    // RIEPILOGO
    // ============================================
    console.log("💡 RIEPILOGO CASI D'USO:\n");
    console.log(`
✅ Finally è PERFETTO per:
   1. Loading states (UI)
   2. Transaction rollback (DB)
   3. Upload cleanup
   4. Lock release
   5. Logging/Metriche
   6. Progress indicator
   7. Timer cancellation
   8. Event listener removal
   9. Temporary state reset
   10. Resource deallocation

📋 PATTERN:
   try {
       // Setup resource
       // Do operation
   } catch (error) {
       // Handle error
   } finally {
       // ALWAYS cleanup
   }
    `);
    
})();
