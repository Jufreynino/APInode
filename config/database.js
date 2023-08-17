const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  pass: '',
  database: 'apiDB'
});

//database connection
const localDB = mysql.createPool(confif)