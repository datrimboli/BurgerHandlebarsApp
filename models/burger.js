// orm variable established
const orm = require('../config/orm.js')
// model variable established
const model = {}
// Get
model.getAll = (cb) => {
  orm.read('burgers', burgers => cb(burgers))
}
// Create
model.createOne = (burger, cb) => {
  orm.create('burgers', burger, id => cb(id))
}
// Update
model.updateOne = (updates, where, cb) => {
  orm.update('burgers', updates, where, () => cb())
}
// Delete
model.deleteOne = (where, cb) => {
  orm.delete('burgers', where, () => cb())
}
// Exporting model
module.exports = model