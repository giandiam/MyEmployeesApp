const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:pg123@localhost:5432/Employee',
  ssl: process.env.DATABASE_URL ? true : false 
});

exports.employeeLogin = async function employeeLogin (req, res) {
    const client = await pool.connect();
    try{
      const results = await client.query('SELECT * FROM employees ORDER BY id ASC');
      res.status(200).json(results.rows);
    }catch(e){
      console.log(e);
    }
    client.release();
  }
