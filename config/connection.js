// Bringing in mysql
const mysql = require('mysql2')
// Connecting mysql to VS Code
module.exports = mysql.createConnection(process.env.JAWSDB_URL || 'mysql://root:rootroot@localhost/burger_db')
