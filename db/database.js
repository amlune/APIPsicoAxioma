import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const db = {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'psicoai'
}

export default db