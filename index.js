const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const passport = require('passport')
const logger = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const routes = require('./routes/index')
const { JW_TOKEN } = require('./utils')

const jwToken = JW_TOKEN[process.env.NODE_ENV || 'development']

const secretOrKey = jwToken.authJwtSecret

const app = express()

// middlewares
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(cookieParser(secretOrKey)) // Cambiar por secret
app.use(express.static(
  path.join(__dirname, 'public')
))
/* if(process.env.NODE_ENV !== 'production') {
} */
app.use(logger('dev'))
app.use(cors({
  origin: [
    'http://localhost:3001',
    'http://localhost:3000'
  ],
  credentials: true
}))

// static files
app.use('/static', express.static(path.join(__dirname, 'public')))

// redirect
app.get('/', function (req, res) {
  res.send({
    title: 'Anki Cards API'
  })
})

// routes
app.use('/api', routes)

// server
const server = app.listen(8000, function () {
  console.log(`Listening http://localhost:${server.address().port}`)
})

// config mongo ./lib/mongo
require('./lib/mongo')
