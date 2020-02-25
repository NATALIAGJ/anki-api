const uuidBase62 = require('uuid-base62')
const ThemesService = require('../services/Themes.service')
const { logErrors } = require('../utils/middlewares/errorsHandlers')

const themeService = new ThemesService()

exports.getThemes = async function (req, res, next) {
  try {
    const { tags } = req.query
    const themes = await themeService.getThemes({ tags })

    res.status(200).json({
      payload: themes,
      message: 'themes listados'
    })
  } catch (error) {
    logErrors(error, next)
  }
}

exports.getTheme = async function (req, res, next) {
  try {
    const { themeId } = req.params
    const theme = await themeService.getTheme({ themeId })
    res.status(200).json({
      data: theme,
      message: 'themes detalle'
    })
  } catch (error) {
    logErrors(error, next)
  }
}

exports.createTheme = async function (req, res, next) {
  try {
    const { body: theme } = req
    theme.id = uuidBase62.v4()
    const createTheme = await themeService.createTheme({ theme })
    res.status(200).json({
      data: createTheme,
      message: 'createTheme creado'
    })
  } catch (error) {
    next(error)
  }
}

exports.updateTheme = async function (req, res, next) {
  try {
    const { themeId } = req.params
    const { body: theme } = req
    await themeService.updateTheme({ themeId, theme })
    res.status(200).json({
      message: 'theme actualizado'
    })
  } catch (error) {
    logErrors(error, next)
  }
}

exports.deleteTheme = async function (req, res, next) {
  try {
    const { themeId } = req.params
    await themeService.deleteTheme({ themeId })
    res.status(200).json({
      message: 'theme eliminado'
    })
  } catch (error) {
    logErrors(error, next)
  }
}
