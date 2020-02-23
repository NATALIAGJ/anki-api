const mongoose = require('mongoose')

const ThemeSchema = mongoose.Schema(
  {
    id: {
      type: String,
      require: true,
      unique: true
    },
    /* -- Schema Here -- */
    nombre: {
      type: String,
      default: ''
    }
    /* -- Relations Here -- */
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
)

const MenuModel = mongoose.model('themes', ThemeSchema, 'themes')

module.exports = MenuModel
