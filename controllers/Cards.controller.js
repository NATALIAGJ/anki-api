const uuidBase62 = require('uuid-base62')
const CardsService = require('../services/Cards.service')
const { logErrors } = require('../utils/middlewares/errorsHandlers')

const cardService = new CardsService()

exports.getCards = async function (req, res, next) {
  try {
    const { tags } = req.query
    const cards = await cardService.getCards({ tags })

    res.status(200).json({
      payload: cards,
      message: 'cards listados'
    })
  } catch (error) {
    logErrors(error, next)
  }
}

exports.getCard = async function (req, res, next) {
  try {
    const { cardId } = req.params
    const card = await cardService.getCard({ cardId })
    res.status(200).json({
      data: card,
      message: 'cards detalle'
    })
  } catch (error) {
    logErrors(error, next)
  }
}

exports.createCard = async function (req, res, next) {
  try {
    const { body: card } = req
    card.id = uuidBase62()
    const createCard = await cardService.createCard({ card })
    res.status(200).json({
      data: createCard,
      message: 'createCard creado'
    })
  } catch (error) {
    next(error)
  }
}


exports.updateCard = async function (req, res, next) {
  try {
    const { cardId } = req.params
    const { body: card } = req
    const updateCard = await cardService.updateCard({ cardId, card })
    res.status(200).json({
      data: updateCard,
      message: 'cards actualizado'
    })
  } catch (error) {
    logErrors(error, next)
  }
}

exports.deleteCard = async function (req, res, next) {
  try {
    const { cardId } = req.params
    const card = await cardService.deleteCard({ cardId })
    res.status(200).json({
      data: card,
      message: 'card eliminado'
    })
  } catch (error) {
    logErrors(error, next)
  }
}
