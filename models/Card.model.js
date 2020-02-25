const mongoose = require('mongoose')

const CardSchema = mongoose.Schema(
  {
    id: {
      type: String,
      require: true,
      unique: true
    },
    /* -- Schema Here -- */
    sideA: {
      type: String,
      default: ''
    },
    sideB: {
      type: String,
      default: ''
    },
    /* -- Relations Here -- */
    subTheme: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'subThemes', 
      index: true 
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
)

const CardModel = mongoose.model('cards', CardSchema, 'cards')

module.exports = CardModel
