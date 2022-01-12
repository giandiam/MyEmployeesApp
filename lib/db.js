const { Pool } = require('pg');
// TODO #1 make dev and prod envs for connecting to DB
const pool = new Pool({
    host: process.env.DB_HOST,
	database: process.env.DB_DATABASE,
	user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    ssl: true
});

export default pool;