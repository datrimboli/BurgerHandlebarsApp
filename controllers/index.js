// router variable requiring express
const router = require('express').Router()

router.use('/api', require('./burgerController.js'))
router.use('/', require('./viewController.js'))
// Exporting router
module.exports = router
