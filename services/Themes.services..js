const { ObjectId } = require('mongodb')
const ThemeSchema = require('../schemas/ThemeSchema')

class ThemesService {
  async getThemes ({ tags }) {
    const query = tags
    const themes = await ThemeSchema.find(query)
    return themes || []
  }

  async getTheme ({ themeId }) {
    const theme = await ThemeSchema.findOne({ _id: ObjectId(themeId) })
    return theme || {}
  }

  async createTheme ({ theme }) {
    const createTheme = await ThemeSchema.create(theme)
    return createTheme
  }

  async updateTheme ({ themeId, theme }) {
    const updateTheme = await ThemeSchema.updateOne({ _id: ObjectId(themeId) }, { $set: theme })
    return updateTheme
  }

  async deleteTheme ({ themeId }) {
    const deletedTheme = await ThemeSchema.deleteOne({ _id: ObjectId(themeId) })
    return deletedTheme
  }
}

module.exports = ThemesService
