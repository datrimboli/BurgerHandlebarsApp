const router = require('express').Router()

router.use('/api', require('./burgerController.js'))
router.use('/', require('./viewController.js'))

module.exports = router
