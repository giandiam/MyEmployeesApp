const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:pg123@localhost:5432/Employee',
  ssl: process.env.DATABASE_URL ? true : false 
});

exports.employeeLogin = async function employeeLogin (req, res) {
  const client = await pool.connect();
  try{
    const results = await client.query(
      'SELECT * FROM employees ORDER BY id ASC'
    );
    res.status(200).json(results.rows);
  }catch(e){
    console.log(e);
  }
  client.release();
}

exports.employeeUsername = async function employeeUsername (req, res) {
  req.session.username = req.body;
  res.status(200).json(req.session.username);
}

exports.employeeSignup = async function employeeSignup (req, res) {
  const client = await pool.connect();
  try{
    const results = await client.query(
      'INSERT INTO employees (last_name,first_name,is_active,date_of_birth) VALUES ($1,$2,$3,$4)'
      , ['Diamantopoulos', req.body.username ,false,'1999-10-29']);
    res.status(200).json(results.rows);
  }catch(e){
    console.log(e);
  }
  client.release();
}
