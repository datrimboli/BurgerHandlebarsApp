// Express Variable
const express = require('express')
const { join } = require('path')

// app variable is express
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Requiring handlebars
app.engine('.hbs', require('express-handlebars')({ extname: '.hbs' }))
app.set('view engine', '.hbs')

// Requiring Controllers
app.use(require('./controllers'))
// Listen on port 3001
app.listen(process.env.PORT || 3001)