const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:pg123@localhost:5432/Employee',
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false 
});

exports.employeeLogin = async function employeeLogin (req, res) {
  req.session.destroy((err) => {
    if (err) {
      console.log('Session destroy error');
      res.send('Error');
    } 
  });
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

exports.sessionUsername = async function sessionUsername (req, res) {
  req.session.username = req.body.username;
  res.status(200).json(req.session.username);
}

exports.employee = async function employee (req, res) {
  if(req.session.username){
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
  res.status(200).json(false);
}

exports.employeeSignup = async function employeeSignup (req, res) {
  const client = await pool.connect();
  try{
    const results = await client.query(
      'INSERT INTO employees (last_name,first_name,is_active,password,username) VALUES ($1,$2,$3,$4,$5)'
      , [req.body.lastName,req.body.firstName,true,req.body.password,req.body.username]);
    res.status(200).json(results.rows);
  }catch(e){
    console.log(e);
  }
  client.release();
}
