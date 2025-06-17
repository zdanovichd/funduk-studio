// lib/db.js
import { Pool } from 'pg';

// Подключение к Neon PostgreSQL (используйте ваш URL из Neon)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // URL в формате postgres://...
  ssl: {
    rejectUnauthorized: false,
  },
});

export const query = (text, params) => pool.query(text, params);
export { pool };
