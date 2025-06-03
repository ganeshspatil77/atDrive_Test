const mysql = require('mysql2');


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Root@1234#',
  database: 'atdrive'
});

module.exports = pool.promise();
