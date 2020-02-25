const express = require('express')
const router = express.Router()

const {
  getSubThemes,
  getSubTheme,
  createSubTheme,
  updateSubTheme,
  deleteSubTheme
} = require('../controllers/SubThemes.controller')

router.get('/', getSubThemes)

router.get('/:subThemeId', getSubTheme)

router.post('/', createSubTheme)

router.put('/:subThemeId', updateSubTheme)

router.delete('/:subThemeId', deleteSubTheme)

module.exports = router
