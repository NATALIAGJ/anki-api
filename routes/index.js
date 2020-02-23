const express = require('express')

const app = express.Router()

/* GET index page. */
app.get('/', (req, res) => {
  res.json({
    title: 'Api'
  })
})

/* Rutas */

module.exports = app
