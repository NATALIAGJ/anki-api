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

router.get('/:themeId', getTheme)

router.post('/', createTheme)

router.put('/:themeId', updateTheme)

router.delete('/:themeId', deleteTheme)

module.exports = router
