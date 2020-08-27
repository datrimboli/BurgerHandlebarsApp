const orm = require('../config/orm.js')

const model = {}

model.getAll = (cb) => {
  orm.read('burgers', burgers => cb(burgers))
}

model.createOne = (burger, cb) => {
  orm.create('burgers', burger, id => cb(id))
}

model.updateOne = (updates, where, cb) => {
  orm.update('burgers', updates, where, () => cb())
}

model.deleteOne = (where, cb) => {
  orm.delete('burgers', where, () => cb())
}

module.exports = model