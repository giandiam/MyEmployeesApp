const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://user:password@localhost:5432/Employee',
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false 
});

exports.employeeLogin = async function employeeLogin (req, res) {
  const client = await pool.connect();
  try{
    const employees = await client.query(
      'SELECT * FROM employees ORDER BY id ASC'
    );
    res.json(employees.rows);
  }catch(e){
    console.log(e);
  }
  client.release();
}

exports.getEmployeeId = async function getEmployeeId (req, res) {
  const client = await pool.connect();
  try{
    const selectId = await client.query(
     'SELECT id FROM employees WHERE username = $1', [req.body.username]
    );
    const id = selectId.rows[0].id
    const updateId = await client.query(
      'UPDATE employees SET is_active = $1 WHERE id = $2', [true, id]
     );
    res.json({id: id});
  }catch(e){
    console.log(e);
  }
  client.release();
}

exports.getEmployees = async function getEmployees (req, res) {
  const id = parseInt(req.params.id);
  const client = await pool.connect();
  try{
    const coEmployees = await client.query(
      'SELECT * FROM employees WHERE id <> $1', [id]
    );
    const employeeUsername = await client.query(
      'SELECT username FROM employees WHERE id = $1', [id]
    );
    res.json({coEmployees: coEmployees.rows, username: employeeUsername.rows[0].username});
  }catch(e){
    console.log(e);
  }
  client.release();
}

exports.employeeSignup = async function employeeSignup (req, res) {
  const client = await pool.connect();
  try{
    const insertEmployee = await client.query(
      'INSERT INTO employees (last_name,first_name,is_active,password,username) VALUES ($1,$2,$3,$4,$5)'
      , [req.body.lastName,req.body.firstName,true,req.body.password,req.body.username]);
    const selectId = await client.query(
        'SELECT id FROM employees WHERE username = $1', [req.body.username]
       );
       res.json(selectId.rows);
  }catch(e){
    console.log(e);
  }
  client.release();
}

exports.employeeLogout = async function employeeLogout (req, res) {
  const client = await pool.connect();
  try{
    const updateId = await client.query(
      'UPDATE employees SET is_active = $1 WHERE id = $2', [false, req.body.id]
     );
     res.send();
  }catch(e){
    console.log(e);
  }
  client.release();
}
