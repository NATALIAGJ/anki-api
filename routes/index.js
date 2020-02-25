const express = require('express')
const ThemesRoutes = require('./themes.routes')
const SubThemesRoutes = require('./subthemes.routes')
const CardsRoutes = require('./cards.routes')

const app = express.Router()

/* GET index page. */
app.get('/', (req, res) => {
  res.json({
    title: 'Api'
  })
})

/* Rutas */
app.use('/themes', ThemesRoutes)
app.use('/subthemes', SubThemesRoutes)
app.use('/cards', CardsRoutes)

module.exports = app
