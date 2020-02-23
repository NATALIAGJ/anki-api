const express = require('express')
const router = express.Router()

const {
  getThemes,
  getTheme,
  createTheme,
  updateTheme,
  deleteTheme
} = require('../controllers/Themes.controller')

router.get('/', getThemes)

router.get('/:themesId', getTheme)

router.post('/', createTheme)

router.put('/:themesId', updateTheme)

router.delete('/:themesId', deleteTheme)

module.exports = router
