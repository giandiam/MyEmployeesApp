const { Pool } = require('pg');
// TODO #1 make dev and prod envs for connecting to DB
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false } 
});

export default pool;