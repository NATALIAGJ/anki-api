const uuidBase62 = require('uuid-base62')
const SubThemesService = require('../services/SubThemes.service')
const { logErrors } = require('../utils/middlewares/errorsHandlers')

const subThemeService = new SubThemesService()

exports.getSubThemes = async function (req, res, next) {
  try {
    const { tags } = req.query
    const subThemes = await subThemeService.getSubThemes({ tags })

    res.status(200).json({
      payload: subThemes,
      message: 'subThemes listados'
    })
  } catch (error) {
    logErrors(error, next)
  }
}

exports.getSubTheme = async function (req, res, next) {
  try {
    const { subThemeId } = req.params
    const subTheme = await subThemeService.getSubTheme({ subThemeId })
    res.status(200).json({
      data: subTheme,
      message: 'subThemes detalle'
    })
  } catch (error) {
    logErrors(error, next)
  }
}

exports.createSubTheme = async function (req, res, next) {
  try {
    const { body: subTheme } = req
    subTheme.id = uuidBase62.v4()
    const createSubTheme = await subThemeService.createSubTheme({ subTheme })
    res.status(200).json({
      data: createSubTheme,
      message: 'createSubTheme creado'
    })
  } catch (error) {
    next(error)
  }
}


exports.updateSubTheme = async function (req, res, next) {
  try {
    const { subThemeId } = req.params
    const { body: subTheme } = req
    await subThemeService.updateSubTheme({ subThemeId, subTheme })
    res.status(200).json({
      message: 'subThemes actualizado'
    })
  } catch (error) {
    logErrors(error, next)
  }
}

exports.deleteSubTheme = async function (req, res, next) {
  try {
    const { subThemeId } = req.params
    await subThemeService.deleteSubTheme({ subThemeId })
    res.status(200).json({
      message: 'subTheme eliminado'
    })
  } catch (error) {
    logErrors(error, next)
  }
}
