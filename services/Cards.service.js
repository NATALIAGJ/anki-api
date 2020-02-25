const { ObjectId } = require('mongodb')
const CardSchema = require('../models/Card.model')

class CardsService {
  async getCards ({ tags }) {
    const query = tags
    const cards = await CardSchema.find(query)
    return cards || []
  }

  async getCard ({ cardId }) {
    const card = await CardSchema.findOne({ _id: ObjectId(cardId) })
    return card || {}
  }

  async createCard ({ card }) {
    const createCard = await CardSchema.create(card)
    return createCard
  }

  async updateCard ({ cardId, card }) {
    const updateCard = await CardSchema.updateOne({ _id: ObjectId(cardId) }, { $set: card })
    return updateCard
  }

  async deleteCard ({ cardId }) {
    const deletedCard = await CardSchema.deleteOne({ _id: ObjectId(cardId) })
    return deletedCard
  }
}

module.exports = CardsService
