const express = require('express')
const router = express.Router()

const {
  getCards,
  getCard,
  createCard,
  updateCard,
  deleteCard
} = require('../controllers/Cards.controller')

router.get('/', getCards)

router.get('/:cardId', getCard)

router.post('/', createCard)

router.put('/:cardId', updateCard)

router.delete('/:cardId', deleteCard)

module.exports = router
