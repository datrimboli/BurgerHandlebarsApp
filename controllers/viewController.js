// Router variable setup
const router = require('express').Router()
// Variable burger linked to burger.js
const burger = require('../models/burger.js')

router.get('/', (req, res) => {
  burger.getAll(burgers => {
    res.render('index', { burgers })
  })
})
// Exporting router
module.exports = router