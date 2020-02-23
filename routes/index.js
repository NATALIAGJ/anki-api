const express = require('express')
const ThemesRoutes = require('./themes.routes')

const app = express.Router()

/* GET index page. */
app.get('/', (req, res) => {
  res.json({
    title: 'Api'
  })
})

/* Rutas */
app.use('/themes', ThemesRoutes)

module.exports = app
