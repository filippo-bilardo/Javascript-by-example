/**
 * 04.03 - Validazione Input con Throw
 * 
 * Pattern per validare input e lanciare errori appropriati
 */

console.log("=== VALIDAZIONE INPUT CON THROW ===\n");

// ============================================
// 1. Validazione Singolo Parametro
// ============================================
console.log("📋 1. VALIDAZIONE SINGOLO PARAMETRO\n");

function setAge(age) {
    if (typeof age !== 'number') {
        throw new TypeError("Age deve essere un numero");
    }
    if (age < 0) {
        throw new RangeError("Age non può essere negativo");
    }
    if (age > 150) {
        throw new RangeError("Age non può superare 150");
    }
    if (!Number.isInteger(age)) {
        throw new TypeError("Age deve essere un intero");
    }
    
    console.log(`  ✅ Age valido: ${age}`);
    return age;
}

const testAges = [
    { value: 25, valid: true },
    { value: "25", valid: false },
    { value: -5, valid: false },
    { value: 200, valid: false },
    { value: 25.5, valid: false }
];

testAges.forEach(test => {
    try {
        setAge(test.value);
    } catch (error) {
        console.log(`  ❌ ${test.value}: ${error.message}`);
    }
});

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// 2. Validazione Oggetto Completo
// ============================================
console.log("📋 2. VALIDAZIONE OGGETTO COMPLETO\n");

class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
    }
}

function validateUser(user) {
    // Presenza oggetto
    if (!user || typeof user !== 'object') {
        throw new TypeError("User deve essere un oggetto");
    }
    
    // Email
    if (!user.email) {
        throw new ValidationError("Email obbligatoria", "email");
    }
    if (typeof user.email !== 'string') {
        throw new ValidationError("Email deve essere stringa", "email");
    }
    if (!user.email.includes('@')) {
        throw new ValidationError("Email non valida", "email");
    }
    
    // Username
    if (!user.username) {
        throw new ValidationError("Username obbligatorio", "username");
    }
    if (user.username.length < 3) {
        throw new ValidationError("Username minimo 3 caratteri", "username");
    }
    
    // Password
    if (!user.password) {
        throw new ValidationError("Password obbligatoria", "password");
    }
    if (user.password.length < 8) {
        throw new ValidationError("Password minimo 8 caratteri", "password");
    }
    
    console.log("  ✅ User valido");
    return true;
}

const testUsers = [
    { email: "test@example.com", username: "mario", password: "password123" },
    { email: "invalid", username: "mario", password: "password123" },
    { email: "test@ex.com", username: "ab", password: "password123" },
    { email: "test@ex.com", username: "mario", password: "short" }
];

testUsers.forEach((user, i) => {
    console.log(`\nTest ${i + 1}:`);
    try {
        validateUser(user);
    } catch (error) {
        if (error instanceof ValidationError) {
            console.log(`  ❌ Campo '${error.field}': ${error.message}`);
        } else {
            console.log(`  ❌ ${error.message}`);
        }
    }
});

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// 3. Validazione con Accumulo Errori
// ============================================
console.log("📋 3. VALIDAZIONE CON ACCUMULO ERRORI\n");

class MultiValidationError extends Error {
    constructor(errors) {
        super(`${errors.length} errori di validazione`);
        this.name = "MultiValidationError";
        this.errors = errors;
    }
}

function validateUserComplete(user) {
    const errors = [];
    
    // Email
    if (!user.email) {
        errors.push({ field: 'email', message: 'Email obbligatoria' });
    } else if (!user.email.includes('@')) {
        errors.push({ field: 'email', message: 'Email non valida' });
    }
    
    // Username
    if (!user.username) {
        errors.push({ field: 'username', message: 'Username obbligatorio' });
    } else if (user.username.length < 3) {
        errors.push({ field: 'username', message: 'Username troppo corto' });
    }
    
    // Age
    if (user.age !== undefined && user.age < 0) {
        errors.push({ field: 'age', message: 'Age non valido' });
    }
    
    // Se ci sono errori, lancia
    if (errors.length > 0) {
        throw new MultiValidationError(errors);
    }
    
    console.log("  ✅ Validazione completa OK");
    return true;
}

try {
    validateUserComplete({
        email: "invalid",
        username: "ab",
        age: -5
    });
} catch (error) {
    if (error instanceof MultiValidationError) {
        console.log(`❌ ${error.message}:\n`);
        error.errors.forEach((e, i) => {
            console.log(`  ${i + 1}. Campo '${e.field}': ${e.message}`);
        });
    }
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// 4. Guard Clauses Pattern
// ============================================
console.log("📋 4. GUARD CLAUSES PATTERN\n");

function processPayment(amount, currency, account) {
    // Guard clauses all'inizio
    if (amount === undefined || amount === null) {
        throw new Error("Amount è obbligatorio");
    }
    if (amount <= 0) {
        throw new RangeError("Amount deve essere positivo");
    }
    if (!currency) {
        throw new Error("Currency è obbligatorio");
    }
    if (!['EUR', 'USD', 'GBP'].includes(currency)) {
        throw new Error(`Currency '${currency}' non supportata`);
    }
    if (!account || !account.id) {
        throw new Error("Account non valido");
    }
    
    // Logica principale (solo se tutto OK)
    console.log(`  ✅ Processo pagamento:`);
    console.log(`     Amount: ${amount} ${currency}`);
    console.log(`     Account: ${account.id}`);
    
    return { success: true };
}

console.log("Test 1: Tutto OK");
try {
    processPayment(100, 'EUR', { id: 'ACC123' });
} catch (error) {
    console.log(`  ❌ ${error.message}`);
}

console.log("\nTest 2: Amount negativo");
try {
    processPayment(-50, 'EUR', { id: 'ACC123' });
} catch (error) {
    console.log(`  ❌ ${error.message}`);
}

console.log("\nTest 3: Currency non valida");
try {
    processPayment(100, 'JPY', { id: 'ACC123' });
} catch (error) {
    console.log(`  ❌ ${error.message}`);
}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// 5. Validator Class Pattern
// ============================================
console.log("📋 5. VALIDATOR CLASS PATTERN\n");

class Validator {
    static required(value, fieldName) {
        if (value === undefined || value === null || value === '') {
            throw new ValidationError(`${fieldName} è obbligatorio`, fieldName);
        }
    }
    
    static isString(value, fieldName) {
        if (typeof value !== 'string') {
            throw new ValidationError(`${fieldName} deve essere stringa`, fieldName);
        }
    }
    
    static minLength(value, min, fieldName) {
        if (value.length < min) {
            throw new ValidationError(
                `${fieldName} deve avere almeno ${min} caratteri`,
                fieldName
            );
        }
    }
    
    static isEmail(value, fieldName) {
        if (!value.includes('@') || !value.includes('.')) {
            throw new ValidationError(`${fieldName} non è valida`, fieldName);
        }
    }
    
    static isPositive(value, fieldName) {
        if (value <= 0) {
            throw new ValidationError(`${fieldName} deve essere positivo`, fieldName);
        }
    }
    
    static inRange(value, min, max, fieldName) {
        if (value < min || value > max) {
            throw new ValidationError(
                `${fieldName} deve essere tra ${min} e ${max}`,
                fieldName
            );
        }
    }
}

function createProduct(name, price, stock) {
    try {
        Validator.required(name, 'name');
        Validator.isString(name, 'name');
        Validator.minLength(name, 3, 'name');
        
        Validator.required(price, 'price');
        Validator.isPositive(price, 'price');
        
        Validator.required(stock, 'stock');
        Validator.inRange(stock, 0, 1000, 'stock');
        
        console.log(`  ✅ Prodotto creato: ${name}, €${price}, stock: ${stock}`);
        return { name, price, stock };
        
    } catch (error) {
        console.log(`  ❌ ${error.message}`);
        throw error;
    }
}

console.log("Test prodotti:\n");
try { createProduct("Laptop", 999, 50); } catch (e) {}
console.log();
try { createProduct("TV", -100, 50); } catch (e) {}
console.log();
try { createProduct("PC", 500, 2000); } catch (e) {}

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// 6. Schema Validation Pattern
// ============================================
console.log("📋 6. SCHEMA VALIDATION PATTERN\n");

const userSchema = {
    email: {
        type: 'string',
        required: true,
        validate: (v) => v.includes('@')
    },
    age: {
        type: 'number',
        required: false,
        min: 0,
        max: 150
    },
    username: {
        type: 'string',
        required: true,
        minLength: 3,
        maxLength: 20
    }
};

function validateSchema(data, schema) {
    for (const [field, rules] of Object.entries(schema)) {
        const value = data[field];
        
        // Required
        if (rules.required && !value) {
            throw new ValidationError(`${field} è obbligatorio`, field);
        }
        
        if (value !== undefined) {
            // Type
            if (rules.type && typeof value !== rules.type) {
                throw new ValidationError(
                    `${field} deve essere ${rules.type}`,
                    field
                );
            }
            
            // String validations
            if (rules.minLength && value.length < rules.minLength) {
                throw new ValidationError(
                    `${field} minimo ${rules.minLength} caratteri`,
                    field
                );
            }
            if (rules.maxLength && value.length > rules.maxLength) {
                throw new ValidationError(
                    `${field} massimo ${rules.maxLength} caratteri`,
                    field
                );
            }
            
            // Number validations
            if (rules.min !== undefined && value < rules.min) {
                throw new ValidationError(
                    `${field} deve essere >= ${rules.min}`,
                    field
                );
            }
            if (rules.max !== undefined && value > rules.max) {
                throw new ValidationError(
                    `${field} deve essere <= ${rules.max}`,
                    field
                );
            }
            
            // Custom validation
            if (rules.validate && !rules.validate(value)) {
                throw new ValidationError(`${field} non valido`, field);
            }
        }
    }
    
    console.log("  ✅ Schema validation OK");
    return true;
}

const testData = [
    { email: "test@ex.com", username: "mario", age: 25 },
    { email: "invalid", username: "mario", age: 25 },
    { email: "test@ex.com", username: "ab", age: 25 },
    { email: "test@ex.com", username: "mario", age: 200 }
];

testData.forEach((data, i) => {
    console.log(`\nTest ${i + 1}:`);
    try {
        validateSchema(data, userSchema);
    } catch (error) {
        console.log(`  ❌ ${error.message}`);
    }
});

console.log("\n" + "=".repeat(50) + "\n");

// ============================================
// BEST PRACTICES
// ============================================
console.log("💡 BEST PRACTICES VALIDAZIONE:\n");

console.log(`
✅ PRINCIPI:
   - Valida all'ingresso (fail fast)
   - Messaggi chiari e specifici
   - Indica quale campo è invalido
   - Usa tipi di errore appropriati

✅ PATTERN:
   1. Guard Clauses - Return early
   2. Validator Class - Metodi riusabili
   3. Schema Validation - Configurazione dichiarativa
   4. Multi-Validation - Raccoglie tutti gli errori

✅ TIPI DI ERRORE:
   - TypeError: Tipo sbagliato
   - RangeError: Fuori range
   - ValidationError: Validazione business logic
   - Error: Generico

✅ STRUTTURA ERRORE:
   - name: Tipo errore
   - message: Descrizione
   - field: Campo invalido (custom)
   - code: Codice errore (custom)

❌ EVITA:
   - Validazione silenziosa
   - Messaggi generici
   - Correzione automatica senza notifica
   - Validazione nel mezzo della logica

📊 ESEMPIO COMPLETO:
   function process(input) {
       // 1. Valida tipo
       if (typeof input !== 'object') {
           throw new TypeError("Input deve essere oggetto");
       }
       
       // 2. Valida campi obbligatori
       if (!input.id) {
           throw new ValidationError("ID obbligatorio", "id");
       }
       
       // 3. Valida range
       if (input.value < 0) {
           throw new RangeError("Value deve essere >= 0");
       }
       
       // 4. Logica principale
       return processData(input);
   }
`);
