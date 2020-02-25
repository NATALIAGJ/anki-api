const mongoose = require('mongoose')

const SubThemeSchema = mongoose.Schema(
  {
    id: {
      type: String,
      require: true,
      unique: true
    },
    /* -- Schema Here -- */
    subTheme: {
      type: String,
      default: ''
    },
    /* -- Relations Here -- */
    theme: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'themes', 
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

const SubThemeModel = mongoose.model('subThemes', SubThemeSchema, 'subThemes')

module.exports = SubThemeModel
