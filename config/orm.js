// Connection to connection.js
const db = require('./connection.js')
// Creating orm variable
const orm = {}
// Insert db query
orm.create = (table, data, cb) => {
  db.query(`INSERT INTO ${table} SET ?`, data, (err, fields) => {
    if (err) { console.log(err) }
    cb(fields.insertId)
  })
}
// Select db query
orm.read = (table, cb) => {
  db.query(`SELECT * FROM ${table}`, (err, data) => {
    if (err) { console.log(err) }
    cb(data)
  })
}
// Update db query
orm.update = (table, updates, where, cb) => {
  db.query(`UPDATE ${table} SET ? WHERE ?`, [updates, where], err => {
    if (err) { console.log(err) }
    cb()
  })
}
// Delete db query
orm.delete = (table, where, cb) => {
  db.query(`DELETE FROM ${table} WHERE ?`, where, err => {
    if (err) { console.log(err) }
    cb()
  })
}
// Exporting orm
module.exports = orm